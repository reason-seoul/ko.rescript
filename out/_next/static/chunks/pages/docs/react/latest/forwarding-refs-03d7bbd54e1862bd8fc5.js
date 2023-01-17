(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41726],{17375:function(n,e,t){"use strict";function r(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},p=Object.keys(n);for(r=0;r<p.length;r++)t=p[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(n);for(r=0;r<p.length;r++)t=p[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}t.d(e,{Z:function(){return r}})},63501:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return s}});var r=t(17375),a=t(96156),p=(t(67294),t(3905));function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){(0,a.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var l=function(n){return function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.kt)("div",i({},e))}},c=l("Intro"),u=l("CodeTab"),f={};function s(n){var e=n.components,t=(0,r.Z)(n,["components"]);return(0,p.kt)("wrapper",i(i(i({},f),t),{},{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h1",i({},{id:"\u8f6c\u53d1-refs"}),"\u8f6c\u53d1 Refs"),(0,p.kt)(c,{mdxType:"Intro"},(0,p.kt)("p",null,"Ref \u8f6c\u53d1\u662f\u4e00\u79cd\u5c06 ",(0,p.kt)("a",i({parentName:"p"},{href:"./refs-and-the-dom"}),"React.ref")," \u901a\u8fc7\u7ec4\u4ef6\u81ea\u52a8\u4f20\u9012\u7ed9\u5b83\u7684\u5b50\u7ec4\u4ef6\u7684\u6280\u672f\u3002\u5bf9\u4e8e\u5e94\u7528\u4e2d\u7684\u5927\u90e8\u5206\u7ec4\u4ef6\u6765\u8bf4\uff0c\u8fd9\u901a\u5e38\u662f\u4e0d\u5fc5\u8981\u7684\u3002\u7136\u800c\uff0c\u5b83\u5bf9\u67d0\u4e9b\u7ec4\u4ef6\u975e\u5e38\u6709\u7528\uff0c\u5c24\u5176\u662f\u53ef\u590d\u7528\u7ec4\u4ef6\u5e93\u4e2d\u7684\u7ec4\u4ef6\u3002\u4e0b\u9762\u63cf\u8ff0\u4e86\u6700\u5e38\u89c1\u7684\u5e94\u7528\u573a\u666f\u3002")),(0,p.kt)("h2",i({},{id:"\u4e3a\u4ec0\u4e48\u8981\u8f6c\u53d1-ref-\uff1f"}),"\u4e3a\u4ec0\u4e48\u8981\u8f6c\u53d1 Ref \uff1f"),(0,p.kt)("p",null,"\u8003\u8651\u4e00\u4e2a\u6e32\u67d3\u539f\u751f button DOM \u7684 FancyButton \u7ec4\u4ef6\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",i({parentName:"pre"},{className:"language-res"}),'// FancyButton.res\n\n@react.component\nlet make = (~children) => {\n  <button className="FancyButton">\n    children\n  </button>\n}\n')),(0,p.kt)("p",null,"React \u7ec4\u4ef6\u9690\u85cf\u4e86\u5b9e\u73b0\u7ec6\u8282\uff0c\u4e5f\u5305\u62ec\u6e32\u67d3\u8f93\u51fa\u3002\u5176\u4ed6\u4f7f\u7528 FancyButton \u7684\u7ec4\u4ef6",(0,p.kt)("strong",{parentName:"p"},"\u901a\u5e38\u4e0d\u9700\u8981"),"\u83b7\u53d6\u5b83\u5185\u90e8\u7684 button DOM \u5143\u7d20\u3002\u8fd9\u5f88\u597d\uff0c\u56e0\u4e3a\u5b83\u53ef\u4ee5\u9632\u6b62\u7ec4\u4ef6\u8fc7\u5ea6\u4f9d\u8d56\u5f7c\u6b64\u7684 DOM \u7ed3\u6784\u3002"),(0,p.kt)("p",null,"\u8fd9\u79cd\u5c01\u88c5\u5bf9\u4e8e\u7c7b\u4f3c ",(0,p.kt)("inlineCode",{parentName:"p"},"FeedStory")," \u6216 ",(0,p.kt)("inlineCode",{parentName:"p"},"Comment")," \u7684\u5e94\u7528\u7ea7\u7ec4\u4ef6\u6765\u8bf4\u662f\u53ef\u53d6\u7684\uff0c\u4f46\u662f\u5bf9\u4e8e\u7c7b\u4f3c ",(0,p.kt)("inlineCode",{parentName:"p"},"FancyButton")," \u6216 ",(0,p.kt)("inlineCode",{parentName:"p"},"MyTextInput")," \u7684\u9ad8\u5ea6\u53ef\u590d\u7528\u7684\u201c\u53f6\u5b50\u201c\u7ec4\u4ef6\u6765\u8bf4\u53ef\u80fd\u6709\u70b9\u4e0d\u65b9\u4fbf\u3002\u901a\u5e38\u6211\u4eec\u503e\u5411\u4e8e\u50cf\u4e00\u4e2a\u5e38\u89c4 button \u548c input DOM \u4e00\u6837\u4f7f\u7528\u8fd9\u4e9b\u7ec4\u4ef6\uff0c\u8bbf\u95ee\u5b83\u4eec\u7684 DOM \u8282\u70b9\u6765\u7ba1\u7406\u7126\u70b9\uff0c\u63a7\u5236\u9009\u62e9\u6216\u52a8\u753b\uff0c\u53ef\u80fd\u662f\u4e0d\u53ef\u907f\u514d\u7684\u3002"),(0,p.kt)("p",null,"\u76ee\u524d\u6709\u4e24\u79cd\u7b56\u7565\u6765\u901a\u8fc7\u7ec4\u4ef6\u8f6c\u53d1\u5f15\u7528\u3002\u5728 ReScript \u548c React \u4e2d\u6211\u4eec\u5f3a\u70c8\u63a8\u8350",(0,p.kt)("strong",{parentName:"p"},"\u5c06 ref \u4f5c\u4e3a prop \u4f20\u9012"),"\uff0c\u4f46\u4e5f\u6709\u4e00\u4e2a\u4e13\u7528 API ",(0,p.kt)("inlineCode",{parentName:"p"},"React.forwardRef"),"\u3002"),(0,p.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u4f1a\u8ba8\u8bba\u8fd9\u4e24\u79cd\u65b9\u6cd5\u3002"),(0,p.kt)("h2",i({},{id:"\u901a\u8fc7-props-\u8f6c\u53d1-refs"}),"\u901a\u8fc7 Props \u8f6c\u53d1 Refs"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"React.ref")," \u80fd\u50cf\u5176\u4ed6 prop \u4e00\u6837\u4f20\u9012\u3002\u7ec4\u4ef6\u4f1a\u5c06 ref \u8f6c\u53d1\u5230\u6b63\u786e\u7684 DOM \u5143\u7d20\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u4e0d\u9700\u8981\u5b66\u4e60\u4efb\u4f55\u65b0\u6982\u5ff5\uff01")),(0,p.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"FancyInput")," \u5b9a\u4e49\u4e86\u4e00\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"inputRef")," prop\uff0c\u4f1a\u88ab\u8f6c\u53d1\u5230\u5b83\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"input")," \u5143\u7d20\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",i({parentName:"pre"},{className:"language-res"}),'// App.res\n\nmodule FancyInput = {\n  @react.component\n  let make = (~children, ~inputRef: ReactDOM.domRef) =>\n    <div> <input type_="text" ref=inputRef /> children </div>\n}\n\n@send external focus: Dom.element => unit = "focus"\n\n@react.component\nlet make = () => {\n  let input = React.useRef(Js.Nullable.null)\n\n  let focusInput = () =>\n    input.current\n    ->Js.Nullable.toOption\n    ->Belt.Option.forEach(input => input->focus)\n\n  let onClick = _ => focusInput()\n\n  <div>\n    <FancyInput inputRef={ReactDOM.Ref.domRef(input)}>\n      <button onClick> {React.string("Click to focus")} </button>\n    </FancyInput>\n  </div>\n}\n')),(0,p.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"ReactDOM.domRef")," \u7c7b\u578b\u6765\u8868\u793a ",(0,p.kt)("inlineCode",{parentName:"p"},"inputRef"),"\u3002\u6211\u4eec\u53ef\u4ee5\u50cf\u5c06 ",(0,p.kt)("inlineCode",{parentName:"p"},"ref")," \u5c5e\u6027\u4f20\u7ed9 DOM \u4e00\u6837\u4f20\u9012 ",(0,p.kt)("inlineCode",{parentName:"p"},"inputRef"),"\uff08",(0,p.kt)("inlineCode",{parentName:"p"},"<input ref={ReactDOM.Ref.domRef(myRef)} />"),"\uff09\u3002"),(0,p.kt)("h2",i({},{id:"\u4e0d\u63a8\u8350-reactforwardref"}),"[\u4e0d\u63a8\u8350]"," React.forwardRef"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a \u6211\u4eec\u4e0d\u63a8\u8350\u8fd9\u79cd\u65b9\u6cd5\uff0c\u56e0\u4e3a\u5b83",(0,p.kt)("a",i({parentName:"p"},{href:"https://twitter.com/dan_abramov/status/1173372190395445251"}),"\u53ef\u80fd\u4f1a\u5728\u67d0\u4e2a\u65f6\u95f4\u70b9\u6d88\u5931"),"\uff0c\u800c\u4e14\u4e0e\u524d\u9762\u63d0\u5230\u7684\u4f20\u9012 ref prop \u76f8\u6bd4\uff0c\u5b83\u6ca1\u6709\u4efb\u4f55\u660e\u663e\u7684\u4f18\u52bf\u3002"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"React.forwardRef")," \u63d0\u4f9b\u4e86\u4e00\u79cd\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e2d\u201c\u6a21\u62df ",(0,p.kt)("inlineCode",{parentName:"p"},"ref")," prop\u201d\u7684\u65b9\u6cd5\u3002\u5728\u7ec4\u4ef6\u5185\u90e8\uff0c\u7ec4\u4ef6\u4f1a\u628a\u4f20\u9012\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"ref")," \u503c\u8f6c\u53d1\u7ed9\u76ee\u6807 DOM \u5143\u7d20\u3002"),(0,p.kt)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"React.forwarRef")," \u7248\u672c\uff1a"),(0,p.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",i({parentName:"pre"},{className:"language-res"}),'// App.res\n\nmodule FancyInput = {\n  @react.component\n  let make = React.forwardRef((~className=?, ~children, ref_) =>\n    <div>\n      <input\n        type_="text"\n        ?className\n        ref=?{Js.Nullable.toOption(ref_)->Belt.Option.map(\n          ReactDOM.Ref.domRef,\n        )}\n      />\n      children\n    </div>\n  )\n}\n\n@send external focus: Dom.element => unit = "focus"\n\n@react.component\nlet make = () => {\n  let input = React.useRef(Js.Nullable.null)\n\n  let focusInput = () =>\n    input.current\n    ->Js.Nullable.toOption\n    ->Belt.Option.forEach(input => input->focus)\n\n  let onClick = _ => focusInput()\n\n  <div>\n    <FancyInput className="fancy" ref=input>\n      <button onClick> {React.string("Click to focus")} </button>\n    </FancyInput>\n  </div>\n}\n')),(0,p.kt)("pre",null,(0,p.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var React = require("react");\nvar Belt_Option = require("./stdlib/belt_Option.js");\nvar Caml_option = require("./stdlib/caml_option.js");\n\nvar make = React.forwardRef(function (Props, ref_) {\n      var className = Props.className;\n      var children = Props.children;\n      var tmp = {\n        type: "text"\n      };\n      var tmp$1 = Belt_Option.map((ref_ == null) ? undefined : Caml_option.some(ref_), (function (prim) {\n              return prim;\n            }));\n      if (tmp$1 !== undefined) {\n        tmp.ref = Caml_option.valFromOption(tmp$1);\n      }\n      if (className !== undefined) {\n        tmp.className = Caml_option.valFromOption(className);\n      }\n      return React.createElement("div", undefined, React.createElement("input", tmp), children);\n    });\n\nvar FancyInput = {\n  make: make\n};\n\nfunction App(Props) {\n  var input = React.useRef(null);\n  var onClick = function (param) {\n    return Belt_Option.forEach(Caml_option.nullable_to_opt(input.current), (function (input) {\n                  input.focus();\n\n                }));\n  };\n  return React.createElement("div", undefined, React.createElement(make, {\n                  className: "fancy",\n                  children: React.createElement("button", {\n                        onClick: onClick\n                      }, "Click to focus"),\n                  ref: input\n                }));\n}\n'))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a \u5728\u6211\u4eec\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"React.forwardRef")," \u51fd\u6570\u4e2d\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"@react.component")," \u88c5\u9970\u5668\u4f7f\u7528\u4e0e ",(0,p.kt)("inlineCode",{parentName:"p"},"make")," \u51fd\u6570\u76f8\u540c\u7684\u65b9\u5f0f\u8f6c\u6362\u6807\u7b7e\u53c2\u6570\u3002"),(0,p.kt)("p",null,"\u8fd9\u6837\uff0c\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"FancyInput")," \u7684\u7ec4\u4ef6\u53ef\u4ee5\u83b7\u5f97\u5e95\u5c42 ",(0,p.kt)("inlineCode",{parentName:"p"},"input")," DOM \u8282\u70b9\u7684\u5f15\u7528\uff0c\u5e76\u5728\u5fc5\u8981\u65f6\u8bbf\u95ee\u5b83\uff0c\u5c31\u50cf\u5728\u76f4\u63a5\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"input")," \u4e00\u6837\u3002"),(0,p.kt)("h2",i({},{id:"\u7ec4\u4ef6\u5e93\u7ef4\u62a4\u8005\u987b\u77e5"}),"\u7ec4\u4ef6\u5e93\u7ef4\u62a4\u8005\u987b\u77e5"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u5f53\u4f60\u5f00\u59cb\u5728\u7ec4\u4ef6\u5e93\u4e2d\u4f7f\u7528 ref \u8f6c\u53d1\u65f6\uff0c\u4f60\u5e94\u8be5\u628a\u5b83\u5f53\u4f5c\u4e00\u4e2a breaking change\uff0c\u5e76\u4e14\u53d1\u5e03\u4e00\u4e2a\u65b0\u7684 major \u7248\u672c\u3002")," \u8fd9\u662f\u56e0\u4e3a\u4f60\u7684\u5e93\u53ef\u80fd\u4f1a\u5177\u6709\u4e0d\u540c\u7684\u884c\u4e3a\uff08\u4f8b\u5982\u5206\u914d\u7ed9\u54ea\u4e9b refs\uff0c\u54ea\u4e9b\u7c7b\u578b\u4f1a\u88ab\u5bfc\u51fa\uff09\uff0c\u8fd9\u53ef\u80fd\u4f1a\u7834\u574f\u4f9d\u8d56\u4e8e\u65e7\u884c\u4e3a\u7684\u5e94\u7528\u6216\u5176\u4ed6\u5e93\u3002"))}s.isMDXComponent=!0,s.frontmatter={title:"\u8f6c\u53d1 Refs",description:"\u5728 ReScript \u548c React \u4e2d\u8f6c\u53d1 Ref \u503c",canonical:"/docs/react/latest/forwarding-refs",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/react/latest/forwarding-refs.mdx"}},22808:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/react/latest/forwarding-refs",function(){return t(63501)}])}},function(n){n.O(0,[92888,49774,40179],(function(){return e=22808,n(n.s=e);var e}));var e=n.O();_N_E=e}]);