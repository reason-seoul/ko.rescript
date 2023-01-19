module Intro = {
  @react.component
  let make = () => {
    <section className="flex justify-center">
      <div className="max-w-1060 flex flex-col items-center px-5 sm:px-8 lg:box-content">
        <h1 className="hl-title text-center max-w-[53rem]">
          {React.string(`빠르고, 단순하고, 온전한 타입의`)}
          <br />
          {React.string(`미래에서 온 JavaScript`)}
        </h1>
        <h2 className="body-lg text-center text-gray-60 my-4 max-w-[40rem]">
          {React.string(`ReScript는 강력한 타입의 언어로 효율적이며 가독성 높은 JavaScript로 컴파일됩니다.
          함께 제공되는 번개처럼 빠른 툴체인을 통해 어떠한 크기의 코드베이스도 컴파일해낼 수 있습니다.`)}
        </h2>
        <div className="mt-4 mb-2">
          <Next.Link href="/docs/manual/latest/installation" passHref={true}>
            <Button> {React.string(`시작하기`)} </Button>
          </Next.Link>
        </div>
      </div>
    </section>
  }
}

module PlaygroundHero = {
  type example = {
    res: string,
    js: string,
  }

  let examples = [
    {
      res: `module Button = {
  @react.component
  let make = (~count: int) => {
    let times = switch count {
    | 1 => "once"
    | 2 => "twice"
    | n => Belt.Int.toString(n) ++ " times"
    }
    let msg = "Click me " ++ times

    <button> {msg->React.string} </button>
  }
}`,
      js: `var React = require("react");

function Playground$Button(Props) {
  var count = Props.count;
  var times = count !== 1 ? (
      count !== 2 ? String(count) + " times" : "twice"
    ) : "once";
  var msg = "Click me " + times;
  return React.createElement("button", undefined, msg);
}

var Button = {
  make: Playground$Button
};

exports.Button = Button;`,
    },
  ]

  @react.component
  let make = () => {
    let (example, _setExample) = React.useState(_ => examples->Js.Array2.unsafe_get(0))

    //Playground Section & Background
    <section className="relative mt-20 bg-gray-10">
      <div className="relative flex justify-center w-full">
        <div className="relative w-full pt-6 pb-8 sm:px-8 md:px-16 max-w-[1400px]">
          // Playground widget
          <div
            className="relative z-2 flex flex-col md:flex-row bg-gray-90 mx-auto sm:rounded-lg max-w-[1280px]">
            //Left Side (ReScript)
            <div className="md:w-1/2">
              <div
                className="body-sm text-gray-40 text-center py-3 sm:rounded-t-lg md:rounded-tl-lg bg-gray-100">
                {React.string(`ReScript로 작성하면`)}
              </div>
              <pre className="text-14 px-8 pt-6 pb-12 whitespace-pre-wrap">
                {HighlightJs.renderHLJS(~darkmode=true, ~code=example.res, ~lang="res", ())}
              </pre>
            </div>
            //Right Side (JavaScript)
            <div className="md:w-1/2 ">
              <div
                className="body-sm text-gray-40 py-3 text-center md:border-l border-gray-80 bg-gray-100 sm:rounded-tr-lg">
                {React.string(`JavaScript로 컴파일됩니다.`)}
              </div>
              <pre
                className="text-14 px-8 pt-6 pb-14 md:border-l border-gray-80 whitespace-pre-wrap">
                {HighlightJs.renderHLJS(~darkmode=true, ~code=example.js, ~lang="js", ())}
              </pre>
            </div>
          </div>
          /* ---Link to Playground--- */
          <div>
            <Next.Link href={`/try?code=${LzString.compressToEncodedURIComponent(example.res)}}`}>
              <a
                className="captions md:px-0 border-b border-gray-40 hover:border-gray-60 text-gray-60">
                {React.string(`플레이그라운드에서 이 예제 편집하기`)}
              </a>
            </Next.Link>
          </div>
          //
          <div className="hidden md:block">
            <img
              className="absolute z-0 left-0 top-0 -ml-10 -mt-6"
              src="./static/lp/grid.svg"
              style={ReactDOM.Style.make(~height="24rem", ~width="24rem", ())}
            />
            <img
              className="absolute z-0 left-0 top-0 -ml-10 mt-10" src="./static/lp/illu_left.png"
            />
          </div>
          <div className="hidden md:block">
            <img
              className="absolute z-0 right-0 bottom-0 -mb-10 mt-24 -mr-10"
              src="./static/lp/grid.svg"
              style={ReactDOM.Style.make(~height="24rem", ~width="24rem", ())}
            />
            <img
              className="absolute z-3 right-0 bottom-0 -mr-2 mb-10" src="./static/lp/illu_right.png"
            />
          </div>
        </div>
      </div>
    </section>
  }
}

module QuickInstall = {
  module CopyButton = {
    let copyToClipboard: string => bool = %raw(j`
  function(str) {
    try {
      const el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      const selected =
        document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        if (selected) {
          document.getSelection().removeAllRanges();
          document.getSelection().addRange(selected);
        }
        return true;
      } catch(e) {
        return false;
      }
    }
    `)

    type state =
      | Init
      | Copied
      | Failed

    @react.component
    let make = (~code) => {
      let (state, setState) = React.useState(_ => Init)

      let buttonRef = React.useRef(Js.Nullable.null)

      let onClick = evt => {
        ReactEvent.Mouse.preventDefault(evt)
        if copyToClipboard(code) {
          setState(_ => Copied)
        } else {
          setState(_ => Failed)
        }
      }

      React.useEffect1(() => {
        switch state {
        | Copied =>
          open Webapi
          let buttonEl = Js.Nullable.toOption(buttonRef.current)->Belt.Option.getExn

          // Note on this imperative DOM nonsense:
          // For Tailwind transitions to behave correctly, we need to first paint the DOM element in the tree,
          // and in the next tick, add the opacity-100 class, so the transition animation actually takes place.
          // If we don't do that, the banner will essentially pop up without any animation
          let bannerEl = Document.createElement("div")
          bannerEl->Element.setClassName("foobar opacity-0 absolute top-0 mt-4 -mr-1 px-2 rounded right-0
            bg-turtle text-gray-80-tr body-sm
            transition-all duration-500 ease-in-out ")
          let textNode = Document.createTextNode("Copied!")

          bannerEl->Element.appendChild(textNode)
          buttonEl->Element.appendChild(bannerEl)

          let nextFrameId = requestAnimationFrame(() => {
            bannerEl->Element.classList->ClassList.toggle("opacity-0")
            bannerEl->Element.classList->ClassList.toggle("opacity-100")
          })

          let timeoutId = Js.Global.setTimeout(() => {
            buttonEl->Element.removeChild(bannerEl)
            setState(_ => Init)
          }, 2000)

          Some(
            () => {
              cancelAnimationFrame(nextFrameId)
              Js.Global.clearTimeout(timeoutId)
            },
          )
        | _ => None
        }
      }, [state])

      <button
        ref={ReactDOM.Ref.domRef(buttonRef)}
        disabled={state === Copied}
        className="relative h-10 w-10 flex justify-center items-center "
        onClick>
        <Icon.Copy className="w-6 h-6 mt-px text-gray-40 hover:cursor-pointer hover:text-gray-80" />
      </button>
    }
  }

  module Instructions = {
    let copyBox = text => {
      <div
        className="flex justify-between items-center pl-6 pr-3 py-3 w-full bg-gray-10 border border-gray-20 rounded max-w-[25rem]">
        <span className="font-mono text-14  text-gray-70"> {React.string(text)} </span>
        <CopyButton code=text />
      </div>
    }
    @react.component
    let make = () => {
      <div className="w-full max-w-[400px]">
        <h2 className="hl-3 lg:mt-12"> {React.string(`빠른 설치`)} </h2>
        <div className="captions x text-gray-40 mb-2 mt-1">
          {React.string(`기존 JavaScript 코드베이스에서 npm 또는 yarn을 이용해 ReScript를 빠르게 추가할 수 있습니다.`)}
        </div>
        <div className="w-full space-y-2">
          {copyBox("npm install rescript")}
          {copyBox("npx rescript init .")}
        </div>
      </div>
    }
  }

  @react.component
  let make = () => {
    <section className="my-32 sm:px-4 sm:flex sm:justify-center">
      <div className="max-w-1060 flex flex-col w-full px-5 md:px-8 lg:px-8 lg:box-content ">
        //---Textblock on the left side---
        <div className="relative max-w-[28rem]">
          <h2
            className="relative z-1 space-y-12 text-gray-80 font-semibold text-24 md:text-32 leading-2">
            <span className="bg-fire-5 rounded-lg border border-fire-10 p-1 ">
              {React.string(`JavaScript의 모든 기능을`)}
            </span>
            {React.string(`\`any(어떤)\` 타입을 쓰던 걱정 없이, 강력한 타입의 언어로 누리세요.`)}
          </h2>
        </div>
        //spacing between columns
        <div className="w-full mt-12 md:flex flex-col lg:flex-row md:justify-between ">
          <p
            className="relative z-1 text-gray-80 font-semibold text-24 md:text-32 leading-2 max-w-[32rem]">
            {React.string(`ReScript는 UI 및 UX가 우수한 미션 크리티컬한 제품을 출시하고 관리하는 데 사용됩니다.`)}
          </p>
          <div
            className="mt-16 lg:mt-0 self-end" style={ReactDOM.Style.make(~maxWidth="25rem", ())}>
            <Instructions />
          </div>
        </div>
      </div>
    </section>
  }
}

// Main unique selling points
module MainUSP = {
  module Item = {
    type polygonDirection = Up | Down

    @react.component
    let make = (
      ~caption: string,
      ~title: React.element,
      ~media: React.element=React.string("Placeholder"),
      ~polygonDirection: polygonDirection=Down,
      ~paragraph: React.element,
    ) => {
      let polyPointsLg = switch polygonDirection {
      | Down => "80,0 85,100 100,100 100,0"
      | Up => "85,0 80,100 100,100 100,0"
      }

      let polyPointsMobile = switch polygonDirection {
      | Down => "0,100 100,100 100,70 0,80"
      | Up => "0,100 100,100 100,78 0,72"
      }

      let polyColor = switch polygonDirection {
      | Up => "text-fire"
      | Down => "text-fire-30"
      }

      <div
        className="relative flex justify-center w-full bg-gray-90 px-5 sm:px-8 lg:px-14 overflow-hidden">
        // Content
        <div
          className="relative max-w-1060 z-3 flex flex-wrap justify-center lg:justify-between pb-16 pt-20 md:pb-20 md:pt-32 lg:pb-40 md:space-x-4 w-full">
          <div className="max-w-[24rem] flex flex-col justify-center mb-6 lg:mb-2">
            <div className="hl-overline text-gray-20 mb-4"> {React.string(caption)} </div>
            <h3 className="text-gray-10 mb-4 hl-2 font-semibold"> title </h3>
            <div className="flex">
              <div className="text-gray-30 body-md pr-8"> paragraph </div>
            </div>
          </div>
          //image (right)
          <div className="relative mt-10 lg:mt-0">
            <div
              className="relative w-full z-2 bg-gray-90 rounded-lg flex md:mt-0 items-center justify-center"
              style={ReactDOM.Style.make(
                ~maxWidth="35rem",
                ~boxShadow="0px 4px 55px 0px rgba(230,72,79,0.10)",
                (),
              )}>
              media
            </div>
            <img
              className="absolute z-1 bottom-0 right-0 -mb-12 -mr-12"
              style={ReactDOM.Style.make(~maxWidth="20rem", ())}
              src="./static/lp/grid2.svg"
            />
          </div>
        </div>
        // Mobile SVG
        <svg
          className={`md:hidden absolute z-1 w-full h-full bottom-0 left-0 ${polyColor}`}
          viewBox="0 0 100 100"
          preserveAspectRatio="none">
          <polygon className="fill-current" points=polyPointsMobile />
        </svg>
        // Tablet / Desktop SVG
        <svg
          className={`hidden md:block absolute z-1 w-full h-full right-0 top-0 ${polyColor}`}
          viewBox="0 0 100 100"
          preserveAspectRatio="none">
          <polygon className="fill-current" points=polyPointsLg />
        </svg>
      </div>
    }
  }

  let item1 =
    <Item
      caption="빠르고 심플함"
      title={React.string(`웹에서 가장 빠른 빌드 시스템`)}
      media={<video
        className="rounded-lg" controls={true} poster={"/static/lp/fast-build-preview.jpg"}>
        <source src="https://assets-17077.kxcdn.com/videos/fast-build-3.mp4" type_="video/mp4" />
      </video>}
      paragraph={<>
        <p>
          {React.string(`ReScript는 어떠한 크기의 코드베이스에서도 일관되게 빠른 피드백 루프를 제공하기 위해 노력합니다.
      자유롭게 코드를 리팩토링하고, 복잡한 변경 사항을 가져오고, 기능 브랜치를 전환하세요.
      느린 CI 빌드, 오래된 캐시 문제, 잘못된 타입 힌트, 과도한 메모리 사용으로 개발이 느려지는 일은 없습니다.`)}
        </p>
        <p className="mt-6">
          <Next.Link href="/docs/manual/latest/build-performance" passHref={true}>
            <Button size={Button.Small} kind={Button.PrimaryBlue}>
              {React.string(`더 알아보기`)}
            </Button>
          </Next.Link>
        </p>
      </>}
    />

  let item2 =
    <Item
      caption="강력한 타입 시스템"
      title={<span
        className="text-transparent bg-clip-text bg-gradient-to-r from-berry-dark-50 to-fire-50">
        {React.string(`더 나은 타이핑`)}
      </span>}
      media={<video
        className="rounded-lg" controls={true} poster={"/static/lp/type-better-preview.jpg"}>
        <source src="https://assets-17077.kxcdn.com/videos/type-better-3.mp4" type_="video/mp4" />
      </video>}
      polygonDirection=Up
      paragraph={React.string(`모든 ReScript 앱은 완전히 타이핑되어 여러분의 프로그램에 어떤 값이 주어지더라도 안전한 타입 정보를 제공합니다.
      우리는 명확하고 쉬운 디버깅을 위해 복잡한 타입보다는 단순한 타입을 우선시합니다.
      어떤 종류의 \`any\`도, 어려운 타입도, \`undefined\` 같은 당황스러움도 없습니다.`)}
    />

  let item3 =
    <Item
      caption="매끄럽게 진행되는 통합"
      title={<>
        <span className="text-orange-dark"> {React.string(`JS에 친숙한 생태계를`)} </span>
        <br />
        {React.string(`바로 사용해보세요.`)}
      </>}
      media={<video
        className="rounded-lg" controls={true} poster={"/static/lp/interop-example-preview.jpg"}>
        <source
          src="https://assets-17077.kxcdn.com/videos/interop-example-2.mp4" type_="video/mp4"
        />
      </video>}
      paragraph={React.string(`어떠한 JavaScript 라이브러리도 사용할 수 있고,
      ReScript 라이브러리를 JavaScript로 내보낼 수도 있습니다. 그리고 자동으로 TypeScript 타입을 생성할 수도 있습니다.
      마치 JavaScript의 좋은 점은 하나도 잃어버리지 않은 기분일 겁니다.`)}
    />

  @react.component
  let make = () => {
    <section
      className="w-full bg-gray-90 overflow-hidden"
      style={ReactDOM.Style.make(~minHeight="37rem", ())}>
      item1
      item2
      item3
    </section>
  }
}

module OtherSellingPoints = {
  @react.component
  let make = () => {
    <section
      className="flex justify-center w-full bg-gray-90 border-t border-gray-80
            px-4 sm:px-8 lg:px-16 pt-24 pb-20 ">
      //defines the grid
      <div className="max-w-1060 grid grid-cols-4 md:grid-cols-10 grid-rows-2 gap-8">
        //Large Item
        <div className="pb-24 md:pb-32 row-span-2 row-start-1 col-start-1 col-span-4 md:col-span-6">
          <ImageGallery
            className="w-full "
            imgClassName="w-full h-[25.9rem] object-cover rounded-lg"
            imgSrcs={[
              "./static/lp/community-3.jpg",
              "./static/lp/community-2.jpg",
              "./static/lp/community-1.jpg",
            ]}
          />
          <h3 className="hl-3 text-gray-20 mt-4 mb-2">
            {React.string(`작업 완료를 중요시하는 프로그래머 커뮤니티`)}
          </h3>
          <p className="body-md text-gray-40">
            {React.string(`기반을 잡아주는 견고한 공동체 없이는 어떤 언어도 대중화될 수 없습니다. 훌륭한 타입 시스템도 라이브러리 개발자들이 남용한다면 유용하지 않을 것이고, 모든 라이브러리가 느려지면 퍼포먼스 성능이 표시되지 않을 것입니다.
ReScript 커뮤니티에 참여하세요! 단순성, 속도 및 실용성에 대해 깊은 관심을 가진 기업 및 개인들의 모임입니다.`)}
          </p>
          <div className="mt-6">
            <Button
              href="https://forum.rescript-lang.org" size={Button.Small} kind={Button.PrimaryBlue}>
              {React.string(`포럼에 참여하기`)}
            </Button>
          </div>
        </div>
        // 2 small items
        // Item 2
        <div className="col-span-4 lg:row-start-1">
          <img
            className="w-full rounded-lg border-2 border-turtle-dark"
            src="./static/lp/editor-tooling-1.jpg"
          />
          <h3 className="hl-3 text-gray-20 mt-6 mb-2"> {React.string(`기발한 툴링`)} </h3>
          <p className="body-md text-gray-40">
            {React.string(`내장된 포맷 도구, 메모리 친화적인 VSCode와 Vim 플러그인, 많은 추가 구성이 필요하지 않은 안정적인 타입 시스템 및 컴파일러입니다. ReScript는 신뢰할 수 있는 JavaScript, Node 및 ReactJS 응용프로그램을 구축하는 데 필요한 모든 도구를 제공합니다.`)}
          </p>
        </div>
        // Item 3
        <div className="col-span-4 lg:row-start-2">
          <img
            className="w-full rounded-lg border-2 border-fire-30"
            src="./static/lp/easy-to-unadopt.jpg"
          />
          <h3 className="hl-3 text-gray-20 mt-6 mb-2">
            {React.string(`제한없는 간단한 적용`)}
          </h3>
          <p className="body-md text-gray-40">
            {React.string(`ReScript는 점진적인 적용을 염두에 두고 만들어졌습니다. 만약 일반 JavaScript로 돌아가고 싶다면, 모든 소스 파일을 제거하고 깨끗한 JavaScript 컴파일 결과를 유지하면 됩니다. ReScript가 있든 없든 프로젝트는 계속 정상적으로 작동할 것이라고 동료들에게 말할 수 있을 것입니다!`)}
          </p>
        </div>
        // </div>
      </div>
    </section>
  }
}

module TrustedBy = {
  @react.component
  let make = () => {
    <section className="mt-20">
      <h3 className="hl-1 text-gray-80 text-center max-w-576 mx-auto">
        {React.string(`사용자들의 신뢰`)}
      </h3>
      <div
        className="flex flex-wrap mx-4 gap-8 justify-center items-center max-w-xl lg:mx-auto mt-16 ">
        {OurUsers.companies
        ->Js.Array2.map(company => {
          let (companyKey, renderedCompany) = switch company {
          | Logo({name, path, url}) => (
              name,
              <a href=url rel="noopener noreferrer">
                <img className="hover:opacity-75 max-w-sm h-12" src=path />
              </a>,
            )
          }
          <div key=companyKey> renderedCompany </div>
        })
        ->React.array}
      </div>
      <div
        className="mt-10 max-w-320 overflow-hidden opacity-50"
        style={ReactDOM.Style.make(~maxHeight="6rem", ())}>
        <img className="w-full h-full" src="./static/lp/grid.svg" />
      </div>
    </section>
  }
}

module CuratedResources = {
  type card = {
    imgSrc: string,
    title: React.element,
    descr: string,
    href: string,
  }

  let cards = [
    {
      imgSrc: "./static/ic_manual@2x.png",
      title: React.string("Language Manual"),
      descr: "기본 문법 탐색: ReScript의 모든 언어 기능에 대한 참조 문서",
      href: "/docs/manual/latest/introduction",
    },
    {
      imgSrc: "./static/ic_rescript_react@2x.png",
      title: React.string("ReScript + React"),
      descr: "전 세계의 사용자들이 이용하는 ReactJS를 위한 1급 바인딩들",
      href: "/docs/react/latest/introduction",
    },
    {
      imgSrc: "./static/ic_manual@2x.png",
      title: React.string("Gradually Adopt ReScript"),
      descr: "현 프로젝트에서 ReScript 사용을 시작하는 방법에 대해 배워보세요. 전부를 이해할 필요는 없습니다. 먼저 사용해 보세요!",
      href: "/docs/manual/latest/installation#integrate-into-an-existing-js-project",
    },
    {
      imgSrc: "./static/ic_gentype@2x.png",
      title: React.string("TypeScript Integration"),
      descr: "이미 가지고 있는 TypeScript 코드베이스에서 ReScript를 통합하는 방법을 알아보세요.",
      href: "/docs/gentype/latest/introduction",
    },
  ]

  let templates = [
    {
      imgSrc: "./static/nextjs_starter_logo.svg",
      title: <>
        <div> {React.string("ReScript & ")} </div>
        <div className="text-gray-40"> {React.string("NextJS")} </div>
      </>,
      descr: "NextJS 스타터 템플릿으로 시작하세요.",
      href: "https://github.com/ryyppy/rescript-nextjs-template",
    },
    /*
    {
      imgSrc: "./static/vitejs_starter_logo.svg",
      title: <>
        <div> {React.string("ReScript & ")} </div>
        <div style={ReactDOM.Style.make(~color="#6571FB", ())}> {React.string("ViteJS")} </div>
      </>,
      descr: "Get started with ViteJS and ReScript.",
      href: "/",
    },
    {
      imgSrc: "./static/nodejs_starter_logo.svg",
      title: <>
        <div> {React.string("ReScript & ")} </div>
        <div className="text-gray-40" style={ReactDOM.Style.make(~color="#699D65", ())}>
          {React.string("NodeJS")}
        </div>
      </>,
      descr: "Get started with ReScript targeting the Node platform.",
      href: "/",
    },
 */
  ]

  @react.component
  let make = () => {
    <section className="bg-gray-100 w-full pb-40 pt-20 ">
      //headline container
      <div
        className="mb-10 max-w-1280 flex flex-col justify-center items-center mx-5 md:mx-8 lg:mx-auto">
        <div className="body-sm md:body-lg text-gray-40 w-40 mb-4 xs:w-auto text-center">
          {React.string("ReScript 시작하기")}
        </div>
        <h2 className="hl-1 text-gray-20 text-center"> {React.string("엄선된 자료들")} </h2>
      </div>
      <div className="px-5 md:px-8 max-w-1280 mx-auto my-20">
        <div
          className="body-lg text-center z-2 relative text-gray-40 max-w-[12rem] mx-auto bg-gray-100">
          {React.string("설명 가이드와 문서들")}
        </div>
        <hr className="bg-gray-80 h-px border-0 relative top-[-12px]" />
      </div>
      //divider

      //container for guides
      <div>
        <div
          className="grid grid-flow-col grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-2 md:gap-4 lg:gap-8 max-w-1280 px-5 md:px-8 mx-auto">
          {cards
          ->Belt.Array.mapWithIndex((i, card) =>
            <Next.Link key={Belt.Int.toString(i)} href={card.href}>
              <a
                className="hover:bg-gray-80 bg-gray-90 px-4 md:px-8 pb-0 md:pb-8 relative rounded-xl md:min-w-[196px]">
                <img className="h-[53px] absolute mt-6" src=card.imgSrc />
                <h5 className="text-gray-10 hl-4 mt-32 h-12"> {card.title} </h5>
                <div className="text-gray-40 mt-2 mb-8 body-sm"> {React.string(card.descr)} </div>
              </a>
            </Next.Link>
          )
          ->React.array}
        </div>
        //Container for templates
        <div className="px-5 md:px-8 max-w-1280 mx-auto my-20">
          <div
            className="body-lg text-center z-2 relative text-gray-40 w-[8rem] mx-auto bg-gray-100">
            {React.string("템플릿")}
          </div>
          <hr className="bg-gray-80 h-px border-0 relative top-[-12px]" />
        </div>
        <div
          className="grid grid-flow-col grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 gap-2 md:gap-4 lg:gap-8 max-w-1280 px-5 md:px-8 mx-auto">
          {templates
          ->Belt.Array.mapWithIndex((i, card) =>
            <a
              key={Belt.Int.toString(i)}
              href={card.href}
              className="hover:bg-gray-80 bg-gray-90 px-5 pb-8 relative rounded-xl min-w-[200px]">
              <img className="h-12 absolute mt-5" src=card.imgSrc />
              <h5 className="text-gray-10 hl-4 mt-32 h-12"> {card.title} </h5>
              <div className="text-gray-40 mt-4 body-sm"> {React.string(card.descr)} </div>
            </a>
          )
          ->React.array}
        </div>
      </div>
    </section>
  }
}

/*
module Sponsors = {
  @react.component
  let make = () =>
    <div className="mt-24">
      <h2 className="hl-1 text-center"> {React.string("Sponsors")} </h2>
    </div>
}
*/

@react.component
let make = (~components=Markdown.default, ~children) => {
  let overlayState = React.useState(() => false)

  <>
    <Meta
      title="ReScript 프로그래밍 언어"
      description="Fast, Simple, Fully Typed JavaScript from the Future"
      keywords=["ReScript", "rescriptlang", "JavaScript", "JS", "TypeScript"]
      ogImage="static/Art-3-rescript-launch.jpg"
    />
    <div className="mt-4 xs:mt-16">
      <div className="text-gray-80 text-18">
        <Navigation overlayState />
        <div className="absolute top-16 w-full">
          <div className="relative overflow-hidden pb-32">
            <main className="mt-10 min-w-320 lg:align-center w-full">
              <Mdx.Provider components>
                <div className="">
                  <div className="w-full">
                    <div className="mt-16 md:mt-32 lg:mt-40 mb-12">
                      <Intro />
                    </div>
                    <PlaygroundHero />
                    <QuickInstall />
                    <MainUSP />
                    <OtherSellingPoints />
                    <TrustedBy />
                    <CuratedResources />
                    children
                  </div>
                </div>
              </Mdx.Provider>
            </main>
          </div>
          // <Footer />
        </div>
      </div>
    </div>
  </>
}
