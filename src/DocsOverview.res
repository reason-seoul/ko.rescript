module Card = {
  @react.component
  let make = (~title: string, ~hrefs: array<(string, string)>) => {
    let style = ReactDOM.Style.make(~maxWidth="21rem", ())
    <div style className="border border-gray-10 bg-gray-5 px-5 py-8 rounded-lg">
      <h2 className="font-bold text-24 mb-4"> {React.string(title)} </h2>
      <ul>
        {Belt.Array.map(hrefs, ((text, href)) =>
          <li key=text className="text-16 mb-1 last:mb-0">
            <Markdown.A href> {React.string(text)} </Markdown.A>
          </li>
        )->React.array}
      </ul>
    </div>
  }
}

@react.component
let default = (~showVersionSelect=true) => {
  let router = Next.Router.useRouter()
  let url = router.route->Url.parse

  let version = switch url.version {
  | Url.Latest => "latest"
  | NoVersion => "latest"
  | Version(version) => version
  }

  let languageManual = [
    ("언어 소개", j`/docs-ko/manual/$version/introduction`),
    ("언어적 특징", j`/docs-ko/manual/$version/overview`),
    ("JS 인터롭", j`/docs-ko/manual/$version/embed-raw-javascript`),
    ("빌드 시스템", j`/docs-ko/manual/$version/build-overview`),
  ]

  let ecosystem = [
    ("Package Index", "/packages"),
    ("rescript-react", "/docs/react/latest/introduction"),
    ("GenType", "/docs/gentype/latest/introduction"),
    ("Reanalyze", "https://github.com/reason-association/reanalyze"),
  ]

  let tools = [("문법 검색기", "/syntax-lookup")]

  let versionSelect = if showVersionSelect {
    let onChange = evt => {
      open Url
      ReactEvent.Form.preventDefault(evt)
      let version = (evt->ReactEvent.Form.target)["value"]
      let url = Url.parse(router.route)

      let targetUrl =
        "/" ++
        (Js.Array2.joinWith(url.base, "/") ++
        ("/" ++ (version ++ ("/" ++ Js.Array2.joinWith(url.pagepath, "/")))))
      router->Next.Router.push(targetUrl)
    }
    <div className="text-fire">
      <VersionSelect availableVersions=Constants.allManualVersions onChange version />
    </div>
  } else {
    React.null
  }

  <>
    <div>
      versionSelect
      <div className="mb-6" />
      <Markdown.H1> {React.string("공식 문서")} </Markdown.H1>
    </div>
    <div className="grid grid-cols-1 xs:grid-cols-2 gap-8">
      <Card title="언어 매뉴얼" hrefs=languageManual />
      <Card title="생태계" hrefs=ecosystem />
      <Card title="언어 툴" hrefs=tools />
    </div>
  </>
}
