(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43136],{17375:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,{Z:function(){return a}})},50151:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var a=t(17375),r=t(96156),l=(t(67294),t(3905));function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var c=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",i({},n))}},o=c("Intro"),s=c("CodeTab"),m={};function d(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",i(i(i({},m),t),{},{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",i({},{id:"\u8d85\u8d8a-jsx"}),"\u8d85\u8d8a JSX"),(0,l.kt)(o,{mdxType:"Intro"},(0,l.kt)("p",null,"JSX \u662f\u4e00\u4e2a\u8bed\u6cd5\u7cd6\uff0c\u5141\u8bb8\u6211\u4eec\u4ee5\u7c7b\u4f3c HTML \u7684\u65b9\u5f0f\u7ec4\u5408 React \u7ec4\u4ef6\u3002\u8981\u4f7f\u7528 JSX\uff0c\u7ec4\u4ef6\u9700\u8981\u9075\u5faa\u67d0\u4e9b\u63a5\u53e3\u7ea6\u5b9a\u3002\u672c\u7ae0\u8282\u4f1a\u6df1\u5165 JSX \u8f6c\u6362\u7684\u7ec6\u8282\uff0c\u4ee5\u53ca JSX \u5e95\u5c42\u4f7f\u7528\u7684 React API\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u672c\u7ae0\u9700\u8981\u4f60\u4e86\u89e3 ",(0,l.kt)("a",i({parentName:"p"},{href:"./elements-and-jsx#creating-elements-from-component-functions"}),"\u521b\u5efa\u5143\u7d20")," \u7684\u5e95\u5c42 API\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"React.createElement")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactDOMRe.createDOMElementVariadic"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u672c\u7ae0\u5047\u8bbe\u4f60\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"bsconfig.json")," \u62e5\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},'"reason": { "react-jsx": 3 }'),"\u8bbe\u7f6e\uff0c\u4ece\u800c\u80fd\u591f\u6b63\u786e\u5e94\u7528 JSX \u8f6c\u6362\u3002"),(0,l.kt)("h2",i({},{id:"\u7ec4\u4ef6\u7c7b\u578b"}),"\u7ec4\u4ef6\u7c7b\u578b"),(0,l.kt)("p",null,"\u666e\u901a\u7684 React \u7ec4\u4ef6\u88ab\u5b9a\u4e49\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"('props) => React.element")," \u51fd\u6570\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e9b\u4f8b\u5b50\uff0c\u6f14\u793a\u4e86\u5982\u4f55\u5b9a\u4e49\u7ec4\u4ef6\u7c7b\u578b\uff08\u4e0e\u73b0\u6709 JS \u4ee3\u7801\u4e92\u64cd\u4f5c\uff0c\u6216\u4f20\u9012\u7ec4\u4ef6\u65f6\u5f88\u6709\u7528\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res"}),'// Plain function type\ntype friendComp =\n  ({"name": string, "online": bool}) => React.element;\n\n// Equivalent to\n// ({"padding": string, "children": React.element}) => React.element\ntype containerComp =\n  React.component<{\n    "padding": string,\n    "children": React.element\n  }>;\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u7c7b\u578b\u975e\u5e38\u5e95\u5c42\uff08\u57fa\u672c\u4e0a\u662f React \u7ec4\u4ef6\u7684 JS \u8868\u793a\uff09\uff0cReScript React \u4f7f\u7528\u66f4\u5bcc\u6709\u8bed\u8a00\u7279\u70b9\u65b9\u5f0f\u6765\u5b9a\u4e49 React \u7ec4\u4ef6\uff0c\u63a5\u4e0b\u6765\u8ba9\u6211\u4eec\u8be6\u7ec6\u4e86\u89e3\u3002"),(0,l.kt)("h2",i({},{id:"jsx-\u7ec4\u4ef6\u63a5\u53e3"}),"JSX \u7ec4\u4ef6\u63a5\u53e3"),(0,l.kt)("p",null,"ReScript React \u7ec4\u4ef6\u662f\u4e00\u4e2a\uff08\u5b50\uff09\u6a21\u5757\uff0c\u542b\u6709\u88ab JSX \u4f7f\u7528\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"make")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"makeProps")," \u51fd\u6570\u3002\u4e3a\u4e86\u66f4\u597d\u7684\u4f7f\u7528\u4f53\u9a8c\uff0c\u6211\u4eec\u63d0\u4f9b\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"@react.component")," \u88c5\u9970\u5668\u6765\u4e3a\u4f60\u521b\u5efa\u8fd9\u4e9b\u51fd\u6570\uff1a"),(0,l.kt)(s,{labels:["Decorated","Expanded"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res"}),"module Friend = {\n  @react.component\n  let make = (~name: string, ~children) => {\n    <div>\n      {React.string(name)}\n      children\n    </div>\n  }\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res"}),'module Friend = {\n  @obj\n  external makeProps: (\n    ~name: string,\n    ~children: \'children,\n    ~key: string=?,\n    unit) => {"name": string, "children": \'children} = "";\n\n  let make = (props: {"name": string, "children": \'children}) => {\n    // React element creation from the original make function\n  }\n}\n'))),(0,l.kt)("p",null,"\u5728\u6269\u5c55\u540e\u7684\u8f93\u51fa\u4e2d\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"makeProps"),"\uff1a\u4e00\u4e2a\u63a5\u6536\u591a\u4e2a\u6807\u7b7e\u53c2\u6570\uff08prop \u540d\uff09\u7684\u51fd\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u88ab make(props) \u6d88\u8017\u7684\u503c\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"make"),"\uff1a\u4e00\u4e2a\u8f6c\u6362\u540e\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"make")," \u51fd\u6570\uff0c\u7f16\u8bd1\u5230\u7ec4\u4ef6\u63a5\u53e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"(props) => React.element"),"\u3002"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"makeProps")," \u51fd\u6570\u603b\u4f1a\u5305\u542b\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"~key")," \u53c2\u6570\u3002"),(0,l.kt)("h3",i({},{id:"\u7279\u6b8a\u60c5\u51b5-reactforwardref"}),"\u7279\u6b8a\u60c5\u51b5 React.forwardRef"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@react.component")," \u88c5\u9970\u5668\u4e5f\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"React.forwardRef")," \u751f\u6548\uff1a"),(0,l.kt)(s,{labels:["Decorated","Expanded"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res"}),"module FancyInput = {\n  @react.component\n  let make = React.forwardRef((~className=?, ~children, ref_) =>\n    <div>\n      // use ref_ here\n    </div>\n  )\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res"}),'// Simplified Output\nmodule FancyInput = {\n  @obj\n  external makeProps: (\n    ~className: \'className=?,\n    ~children: \'children,\n    ~key: string=?,\n    ~ref: \'ref=?,\n    unit,\n  ) => {"className": option<\'className>, "children": \'children} = ""\n\n  let make =\n    (~className=?, ~children) => ref_ => ReactDOMRe.createDOMElementVariadic("div", [])\n\n  let make = React.forwardRef(\n    (props: {"className": option<\'className>, "children": \'children}, ref_,) => {\n      make(\n        ~className=props["className"],\n        ~children=props["children"],\n        ref_)\n    })\n}\n'))),(0,l.kt)("p",null,"\u5c31\u50cf\u4e0a\u9762\u7684\u88ab\u6269\u5c55\u540e\u7684\u8f93\u51fa\uff0c\u88c5\u9970\u5668\u4f1a\u8f6c\u6362\u4f20\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"React.forwardRef")," \u7684\u51fd\u6570\uff0c\u5c31\u50cf\u8f6c\u6362\u5178\u578b\u7684\u7ec4\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"make")," \u51fd\u6570\u4e00\u6837\u3002\u5b83\u4e5f\u4f1a\u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"makeProps")," \u51fd\u6570\uff0c\u800c\u4e14\u4f1a\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"ref")," prop\uff0c\u4fbf\u4e8e\u6211\u4eec\u5728 JSX \u8c03\u7528\u65f6\u4f7f\u7528\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"<FancyInput ref=.../>"),"\uff09\u3002"),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u660e\u767d\u4e86 ReScript React \u7ec4\u4ef6\u662f\u5982\u4f55\u8f6c\u6362\u7684\uff0c\u8ba9\u6211\u4eec\u63a5\u7740\u770b\u770b ReScript \u5982\u4f55\u8f6c\u6362 JSX \u7ed3\u6784\u3002"),(0,l.kt)("h2",i({},{id:"jsx-\u5e95\u5c42\u539f\u7406"}),"JSX \u5e95\u5c42\u539f\u7406"),(0,l.kt)("p",null,"\u5f53\u6211\u4eec\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4f7f\u7528 JSX \u65f6\uff08\u201c\u9996\u5b57\u6bcd\u5927\u5199\u7684 JSX\u201d\uff09\uff0c\u6211\u4eec\u5b9e\u9645\u4e0a\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"React.createElement")," \u53bb\u521b\u5efa\u65b0\u5143\u7d20\u3002\u4e0b\u9762\u662f\u6ca1\u6709\u5b50\u5143\u7d20\u7684 React \u7ec4\u4ef6\u7684\u4f8b\u5b50\uff1a"),(0,l.kt)(s,{labels:["JSX","Without JSX"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res"}),'<Friend name="Fred" age=1 />\n')),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res"}),'React.createElement(Friend.make, Friend.makeProps(~name="Fred", ~age=1, ()))\n')),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-js"}),'React.createElement(Playground$Friend, { name: "Fred", age: 20 });\n'))),(0,l.kt)("p",null,"\u5982\u4f60\u6240\u89c1\uff0c\u5b83\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Friend.make")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Friend.makeProps")," \u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"React.createElement")," API\u3002\u5982\u679c\u4f60\u63d0\u4f9b\u4e86\u5b50\u5143\u7d20\uff0c\u5b83\u4f1a\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"React.createElementVariadic"),"\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"React.createElement")," \u7684\u4e00\u4e2a\u4e0d\u540c\u7ed1\u5b9a\uff09\uff1a"),(0,l.kt)(s,{labels:["JSX","Without JSX","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res"}),'<Container width=200>\n  {React.string("Hello")}\n  {React.string("World")}\n</Container>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res"}),'React.createElementVariadic(\n  Container.make,\n  Container.makeProps(~width=200, ~children=React.null, ()),\n  [{React.string("Hello")}, {React.string("World")}],\n)\n')),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-js"}),'React.createElement(Container, { width: 200, children: null }, "Hello", "World");\n'))),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"~children=React.null")," \u5c5e\u6027\u6ca1\u6709\u610f\u4e49\uff0c\u56e0\u4e3a React \u53ea\u5173\u5fc3\u4f20\u9012\u7ed9\u7b2c\u4e09\u4e2a\u53c2\u6570\u7684\u5b50\u5143\u7d20\u6570\u7ec4\u3002"),(0,l.kt)("h3",i({},{id:"dom-\u5143\u7d20"}),"DOM \u5143\u7d20"),(0,l.kt)("p",null,"\u201c\u9996\u5b57\u6bcd\u672a\u5927\u5199\u7684 JSX\u201d \u8868\u8fbe\u5f0f\u4f1a\u88ab\u89c6\u4e3a DOM \u5143\u7d20\uff0c\u5e76\u88ab\u8f6c\u6362\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactDOMRe.createDOMElementVariadic")," \u8c03\u7528\uff1a"),(0,l.kt)(s,{labels:["JSX","Without JSX","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res"}),'<div title="test"/>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res"}),'ReactDOMRe.createDOMElementVariadic("div", ~props=ReactDOMRe.domProps(~title="test", ()), [])\n')),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-js"}),' React.createElement("div", { title: "test" });\n'))),(0,l.kt)("p",null,"\u6709\u5b50\u5143\u7d20\u7684 JSX \u4e5f\u4e00\u6837\uff1a"),(0,l.kt)(s,{labels:["JSX","Without JSX","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res"}),'<div title="test">\n  <span/>\n</div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res"}),'ReactDOMRe.createDOMElementVariadic(\n  "div",\n  ~props=ReactDOMRe.domProps(~title="test", ()),\n  [ReactDOMRe.createDOMElementVariadic("span", [])],\n)\n')),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-js"}),'React.createElement("div", { title: "test" }, React.createElement("span", undefined));\n'))))}d.isMDXComponent=!0,d.frontmatter={title:"\u8d85\u8d8a JSX",description:"\u5982\u4f55\u5728\u4e0d\u4f7f\u7528 JSX \u7684\u60c5\u51b5\u4e0b\u4f7f\u7528 ReScript \u548c React",canonical:"/docs/react/latest/beyond-jsx",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/react/latest/beyond-jsx.mdx"}},60091:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/react/latest/beyond-jsx",function(){return t(50151)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return n=60091,e(e.s=n);var n}));var n=e.O();_N_E=n}]);