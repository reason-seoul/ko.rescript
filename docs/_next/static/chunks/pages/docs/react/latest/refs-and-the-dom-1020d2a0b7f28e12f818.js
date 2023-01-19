(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33098],{17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},70031:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var a=n(17375),r=n(96156),l=(n(67294),n(3905));function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",u({},t))}},i=o("Intro"),c=o("CodeTab"),s={};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",u(u(u({},s),n),{},{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",u({},{id:"refs--dom"}),"Refs & DOM"),(0,l.kt)(i,{mdxType:"Intro"},(0,l.kt)("p",null,"Refs \u63d0\u4f9b\u4e86\u4e00\u79cd\u65b9\u6cd5\u6765\u8bbf\u95ee\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"make")," \u7ec4\u4ef6\u51fd\u6570\u4e2d\u521b\u5efa\u7684 DOM \u8282\u70b9\u6216 React \u5143\u7d20\u3002")),(0,l.kt)("p",null,"\u5728\u5178\u578b\u7684 React \u6570\u636e\u6d41\u4e2d\uff0c",(0,l.kt)("a",u({parentName:"p"},{href:"./components-and-props"}),"props"),"\u662f\u7236\u7ec4\u4ef6\u4e0e\u5b50\u7ec4\u4ef6\u4ea4\u4e92\u7684\u552f\u4e00\u65b9\u5f0f\u3002\u8981\u4fee\u6539\u4e00\u4e2a\u5b50\u7ec4\u4ef6\uff0c\u4f60\u9700\u8981\u4f7f\u7528\u65b0\u7684 props \u6765\u91cd\u65b0\u6e32\u67d3\u5b83\u3002\u4f46\u662f\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4f60\u9700\u8981\u5728\u5178\u578b\u6570\u636e\u6d41\u4e4b\u5916\u5f3a\u5236\u4fee\u6539\u5b50\u7ec4\u4ef6\u3002\u88ab\u4fee\u6539\u7684\u5b50\u7ec4\u4ef6\u53ef\u80fd\u662f\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"React.element")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"Dom.element"),"\u3002\u5bf9\u4e8e\u8fd9\u4e24\u79cd\u60c5\u51b5\uff0cReact \u90fd\u63d0\u4f9b\u4e86\u89e3\u51b3\u529e\u6cd5\u3002"),(0,l.kt)("p",null,"\u50cf\u8fd9\u6837\u5b9a\u4e49\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"React.ref")," \uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",u({parentName:"pre"},{className:"language-res"}),"type t<'value> = { mutable current: 'value }\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"\u6ce8\u610f\u4e0d\u8981\u5c06 ",(0,l.kt)("inlineCode",{parentName:"em"},"React.ref")," \u548c\u7528\u4e8e\u6dfb\u52a0\u53ef\u53d8\u6027\u7684\u8bed\u8a00\u7279\u6027",(0,l.kt)("a",u({parentName:"em"},{href:"/docs/manual/latest/mutation"}),"ref\u7c7b\u578b"),"\u5f04\u6df7\u4e86\u3002"))),(0,l.kt)("h2",u({},{id:"\u4f55\u65f6\u4f7f\u7528-refs"}),"\u4f55\u65f6\u4f7f\u7528 Refs"),(0,l.kt)("p",null,"Refs \u7684\u5e94\u7528\u573a\u666f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7ba1\u7406",(0,l.kt)("em",{parentName:"li"},"\u4e0d\u5e94\u8be5\u89e6\u53d1"),"\u91cd\u65b0\u6e32\u67d3\u7684\u72b6\u6001\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u7126\u70b9\u3001\u6587\u672c\u9009\u62e9\u3001\u5a92\u4f53\u64ad\u653e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u89e6\u53d1\u547d\u4ee4\u5f0f\u7684\u52a8\u753b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e0e\u7b2c\u4e09\u65b9 DOM \u5e93\u96c6\u6210\u3002")),(0,l.kt)("p",null,"\u907f\u514d\u5728\u80fd\u591f\u4f7f\u7528\u58f0\u660e\u5f0f\u7684\u65b9\u5f0f\u5b8c\u6210\u7684\u4e8b\u60c5\u4e0a\u4f7f\u7528 refs"),(0,l.kt)("h2",u({},{id:"\u521b\u5efa-refs"}),"\u521b\u5efa Refs"),(0,l.kt)("p",null,"React ref \u88ab\u8868\u793a\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"React.ref\uff08'value)")," \u7c7b\u578b\uff0c\u4e00\u4e2a\u7ba1\u7406 ",(0,l.kt)("inlineCode",{parentName:"p"},"'value")," \u7c7b\u578b\u7684\u53ef\u53d8\u503c\u7684\u5bb9\u5668\u3002\u4f60\u80fd\u4f7f\u7528 ",(0,l.kt)("a",u({parentName:"p"},{href:"./hooks-ref"}),"React.useRef")," hook \u6765\u521b\u5efa ref\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",u({parentName:"pre"},{className:"language-res"}),"@react.component\nlet make = () => {\n  let clicks = React.useRef(0);\n\n  let onClick = (_) => {\n    clicks.current = clicks.current + 1;\n  };\n\n  <div onClick>\n    {Belt.Int.toString(clicks.current)->React.string}\n  </div>\n}\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u4f8b\u5b50\u5b9a\u4e49\u4e86\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"React.ref(int)")," \u7c7b\u578b\u7684\u7ed1\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"clicks"),"\u3002\u6ce8\u610f\uff0c\u6539\u53d8 ",(0,l.kt)("inlineCode",{parentName:"p"},"clicks.current")," \u7684\u503c\u4e0d\u4f1a\u89e6\u53d1\u4efb\u4f55\u7ec4\u4ef6\u91cd\u6e32\u67d3\u3002"),(0,l.kt)("h2",u({},{id:"\u8bbf\u95ee-refs"}),"\u8bbf\u95ee Refs"),(0,l.kt)("p",null,"\u5f53\u6e32\u67d3\u8fc7\u7a0b\u4e2d\u5c06 ref \u4f20\u9012\u7ed9\u5143\u7d20\u540e\uff0c\u5c31\u80fd\u901a\u8fc7 ref \u7684\u5f53\u524d\u5c5e\u6027\u8bbf\u95ee\u5bf9\u8282\u70b9\u7684\u5f15\u7528\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",u({parentName:"pre"},{className:"language-res"}),"let value = myRef.current\n")),(0,l.kt)("p",null,"ref \u7684\u503c\u53d6\u51b3\u4e8e\u8282\u70b9\u7684\u7c7b\u578b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f53\u5728 HTML \u5143\u7d20\u4e0a\u4f7f\u7528 ref \u5c5e\u6027\u65f6\uff0c\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"ReactDOM.Ref.domRef")," \u63a5\u6536\u57fa\u7840 DOM \u5143\u7d20\u4f5c\u4e3a\u5176\u5f53\u524d\u5c5e\u6027\uff08\u7c7b\u578b\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"React.ref<Js.Nullable.t<Dom.element>>"),"\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u4e0e JS \u4e92\u64cd\u4f5c\u7684\u60c5\u51b5\u4e0b\uff0c\u5f53\u5728\u81ea\u5b9a\u4e49\u7c7b\u7ec4\u4ef6\uff08\u57fa\u4e8e JS \u7c7b\uff09\u4e0a\u4f7f\u7528 ref \u5c5e\u6027\u65f6\uff0cref \u5bf9\u8c61\u5c06\u63a5\u6536\u7ec4\u4ef6\u7684 mounted \u5b9e\u4f8b\uff08\u672c\u6587\u6863\u4e2d\u672a\u8ba8\u8bba\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u4f60\u4e0d\u80fd\u5728\u7ec4\u4ef6\u51fd\u6570\u4e0a\u4f7f\u7528 ref \u5c5e\u6027"),"\u56e0\u4e3a\u5b83\u4eec\u6ca1\u6709\u5b9e\u4f8b\uff08Rescript \u4e0d\u4f1a\u66b4\u9732 JS \u7c7b\uff09\u3002")),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e9b\u4f8b\u5b50\uff1a"),(0,l.kt)("h3",u({},{id:"\u4e3a-dom-\u5143\u7d20\u6dfb\u52a0-ref"}),"\u4e3a DOM \u5143\u7d20\u6dfb\u52a0 Ref"),(0,l.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"React.ref")," \u50a8\u5b58 ",(0,l.kt)("inlineCode",{parentName:"p"},"input")," DOM \u8282\u70b9\u7684\u5f15\u7528\uff0c\u7528\u4e8e\u5728\u6309\u94ae\u88ab\u70b9\u51fb\u65f6\u7ed9 text \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"input")," \u8bbe\u7f6e\u7126\u70b9\uff1a"),(0,l.kt)(c,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",u({parentName:"pre"},{className:"language-res"}),'// CustomTextInput.res\n\n@send external focus: Dom.element => unit = "focus"\n\n@react.component\nlet make = () => {\n  let textInput = React.useRef(Js.Nullable.null)\n\n  let focusInput = () =>\n    switch textInput.current->Js.Nullable.toOption {\n    | Some(dom) => dom->focus\n    | None => ()\n    }\n\n  let onClick = _ => focusInput()\n\n  <div>\n    <input type_="text" ref={ReactDOM.Ref.domRef(textInput)} />\n    <input type_="button" value="Focus the text input" onClick />\n  </div>\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",u({parentName:"pre"},{className:"language-js"}),'function CustomTextInput(Props) {\n  var textInput = React.useRef(null);\n  var onClick = function (param) {\n    var dom = textInput.current;\n    if (!(dom == null)) {\n      dom.focus();\n      return ;\n    }\n\n  };\n  return React.createElement("div", undefined, React.createElement("input", {\n                  ref: textInput,\n                  type: "text"\n                }), React.createElement("input", {\n                  type: "button",\n                  value: "Focus the text input",\n                  onClick: onClick\n                }));\n}\n'))),(0,l.kt)("p",null,"\u89e3\u91ca\u4e00\u4e0b\u4e0a\u9762\u7684\u4ee3\u7801\u53d1\u751f\u4e86\u4ec0\u4e48\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6211\u4eec\u5c06 ",(0,l.kt)("inlineCode",{parentName:"li"},"textInput")," ref \u5b9e\u4f8b\u5316\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"Js.Nullable.null")),(0,l.kt)("li",{parentName:"ul"},"\u6211\u4eec\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"ReactDOM.Ref.domRef(textInput)")," \u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"<input>")," \u5143\u7d20\u5185\u6ce8\u518c ",(0,l.kt)("inlineCode",{parentName:"li"},"textInput")," \u7684 ref"),(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"focusInput")," \u51fd\u6570\u4e2d\uff0c\u6211\u4eec\u9996\u5148\u9700\u8981\u9a8c\u8bc1 ref \u662f\u5426\u8bbe\u7f6e\u4e3a DOM \u5143\u7d20\uff0c\u7136\u540e\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"focus")," binding \u6765\u8bbe\u7f6e\u7126\u70b9\u3002")),(0,l.kt)("p",null,"React \u5c06\u5728\u7ec4\u4ef6 mount \u65f6\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"current")," \u8d4b\u503c DOM \u5143\u7d20\uff0c\u5e76\u5728\u7ec4\u4ef6 unmount \u65f6\u5c06\u5176\u5206\u914d\u56de null\u3002"),(0,l.kt)("h3",u({},{id:"refs--\u7ec4\u4ef6\u51fd\u6570"}),"Refs & \u7ec4\u4ef6\u51fd\u6570"),(0,l.kt)("p",null,"\u5728 React \u4e2d\uff0c\u4f60",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u80fd"),"\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"ref")," \u5c5e\u6027\u4f20\u9012\u7ed9\u7ec4\u4ef6\u51fd\u6570\uff1a"),(0,l.kt)(c,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",u({parentName:"pre"},{className:"language-res"}),"module MyComp = {\n  @react.component\n  let make = (~ref) => <input />\n}\n\n@react.component\nlet make = () => {\n  let textInput = React.useRef(Js.Nullable.null)\n\n  // This will **not** work\n  <MyComp ref={ReactDOM.Ref.domRef(textInput)} />\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// Compiler Error:\n// Ref cannot be passed as a normal prop. Please use `forwardRef`\n// API instead\n"))),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u7247\u6bb5\u5c06\u4e0d\u4f1a\u88ab\u7f16\u8bd1\uff0c\u5e76\u8f93\u51fa\u4e00\u4e2a\u9519\u8bef\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},'"Ref cannot be passed as a normal prop. Please use forwardRef API instead."'),"\u3002"),(0,l.kt)("p",null,"\u6b63\u5982\u9519\u8bef\u6d88\u606f\u6240\u8bf4\uff0c\u5982\u679c\u4f60\u9700\u8981\u5141\u8bb8\u5176\u4ed6\u4eba\u5bf9\u4f60\u7684\u7ec4\u4ef6\u51fd\u6570\u4f7f\u7528 ref \uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("a",u({parentName:"p"},{href:"./forwarding-refs"}),"Ref\u8f6c\u53d1"),"\uff08\u53ef\u80fd\u4e0e useImperativeHandle \u4e00\u8d77\u4f7f\u7528\uff09\u3002"),(0,l.kt)("h2",u({},{id:"\u5411\u7236\u7ec4\u4ef6\u66b4\u9732-dom-refs"}),"\u5411\u7236\u7ec4\u4ef6\u66b4\u9732 DOM Refs"),(0,l.kt)("p",null,"\u5728\u6781\u5c11\u6570\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u80fd\u60f3\u8981\u4ece\u7236\u7ec4\u4ef6\u8bbf\u95ee\u5b50\u7ec4\u4ef6\u7684 DOM \u8282\u70b9\u3002\u901a\u5e38\u4e0d\u5efa\u8bae\u8fd9\u6837\u505a\uff0c\u56e0\u4e3a\u5b83\u7834\u574f\u4e86\u7ec4\u4ef6\u5c01\u88c5\uff0c\u4f46\u662f\u5076\u5c14\u53ef\u4ee5\u7528\u4e8e\u89e6\u53d1\u7126\u70b9\uff0c\u6216\u662f\u7528\u4e8e\u83b7\u53d6\u5b50 DOM \u8282\u70b9\u7684\u5927\u5c0f\u6216\u4f4d\u7f6e\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u4f7f\u7528",(0,l.kt)("a",u({parentName:"p"},{href:"./forwarding-refs"}),"Ref\u8f6c\u53d1"),"\u3002",(0,l.kt)("strong",{parentName:"p"},"Ref \u8f6c\u53d1\u5141\u8bb8\u7ec4\u4ef6\u5c06\u5b50\u7ec4\u4ef6\u7684 Ref \u66b4\u9732\u7ed9\u81ea\u5df1"),"\u3002\u4f60\u80fd\u5728 Ref \u8f6c\u53d1\u7684\u6587\u6863\u4e2d\u627e\u5230\u5c06\u5b50\u7ec4\u4ef6\u7684 DOM \u8282\u70b9\u66b4\u9732\u7ed9\u7236\u7ec4\u4ef6\u7684\u4f8b\u5b50\u3002"),(0,l.kt)("h2",u({},{id:"\u56de\u8c03-refs"}),"\u56de\u8c03 Refs"),(0,l.kt)("p",null,"React \u8fd8\u652f\u6301\u53e6\u4e00\u79cd\u8bbe\u7f6e refs \u7684\u65b9\u6cd5\uff0c\u79f0\u4e3a \u201c\u56de\u8c03 refs\u201d\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"React.Ref.callbackDomRef"),"\uff09\uff0c\u5b83\u80fd\u8ba9\u4f60\u66f4\u7cbe\u7ec6\u5730\u63a7\u5236 refs \u7684\u8bbe\u7f6e\u548c\u89e3\u9664\u3002"),(0,l.kt)("p",null,"\u4e0d\u540c\u4e8e\u4f20\u9012\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"React.useRef()")," \u521b\u5efa\u7684 ref \u503c\uff0c\u4f60\u4f1a\u4f20\u9012\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u3002\u8fd9\u4e2a\u51fd\u6570\u63a5\u6536 ",(0,l.kt)("inlineCode",{parentName:"p"},"Dom.element")," \u4f5c\u4e3a\u53c2\u6570\uff0c\u4ee5\u4f7f\u8fd9\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"Dom.element")," \u80fd\u88ab\u5b58\u50a8\u5e76\u5728\u5176\u4ed6\u5730\u65b9\u8bbf\u95ee\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u901a\u5e38\u6211\u4eec\u4f1a\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"React.Ref.domRef()")," \u4f20\u9012\u4e00\u4e2a ref \u503c\uff0c\u4f46\u662f\u5bf9\u4e8e\u56de\u8c03 refs\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"React.Ref.callbackDomRef()"),"\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u63cf\u8ff0\u4e86\u4e00\u4e2a\u901a\u7528\u7684\u8303\u4f8b\uff1a\u4f7f\u7528 ref \u56de\u8c03\u51fd\u6570\uff0c\u5728\u5b9e\u4f8b\u7684\u5c5e\u6027\u4e2d\u5b58\u50a8\u5bf9 DOM \u8282\u70b9\u7684\u5f15\u7528\u3002"),(0,l.kt)(c,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",u({parentName:"pre"},{className:"language-res"}),'// CustomTextInput.res\n\n@send external focus: Dom.element => unit = "focus"\n\n@react.component\nlet make = () => {\n  let textInput = React.useRef(Js.Nullable.null)\n  let setTextInputRef = element => {\n    textInput.current = element;\n  }\n\n  let focusTextInput = _ => {\n    textInput.current\n    ->Js.Nullable.toOption\n    ->Belt.Option.forEach(input => input->focus)\n  }\n\n  <div>\n    <input type_="text" ref={ReactDOM.Ref.callbackDomRef(setTextInputRef)} />\n    <input\n      type_="button" value="Focus the text input" onClick={focusTextInput}\n    />\n  </div>\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",u({parentName:"pre"},{className:"language-js"}),'function CustomTextInput(Props) {\n  var textInput = React.useRef(null);\n  var setTextInputRef = function (element) {\n    textInput.current = element;\n\n  };\n  var focusTextInput = function (param) {\n    return Belt_Option.forEach(Caml_option.nullable_to_opt(textInput.current), (function (input) {\n                  input.focus();\n\n                }));\n  };\n  return React.createElement("div", undefined, React.createElement("input", {\n                  ref: setTextInputRef,\n                  type: "text"\n                }), React.createElement("input", {\n                  type: "button",\n                  value: "Focus the text input",\n                  onClick: focusTextInput\n                }));\n}\n'))),(0,l.kt)("p",null,"React \u4f1a\u5728\u7ec4\u4ef6 mount \u65f6\u4f7f\u7528 DOM \u5143\u7d20\u8c03\u7528 ref \u56de\u8c03\u51fd\u6570\uff0c\u5e76\u5728 unmount \u65f6\u4f7f\u7528 null \u8c03\u7528\u5b83\u3002"),(0,l.kt)("p",null,"\u4f60\u80fd\u5728\u7ec4\u4ef6\u95f4\u4f20\u9012\u56de\u8c03 refs\uff0c\u5c31\u50cf\u4f20\u9012 ",(0,l.kt)("inlineCode",{parentName:"p"},"React.useRef()")," \u521b\u5efa\u7684\u5bf9\u8c61 refs \u4e00\u6837\u3002"),(0,l.kt)(c,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",u({parentName:"pre"},{className:"language-res"}),'// Parent.res\n\n@send external focus: Dom.element => unit = "focus"\n\nmodule CustomTextInput = {\n  @react.component\n  let make = (~setInputRef) => {\n    <div>\n      <input type_="text" ref={ReactDOM.Ref.callbackDomRef(setInputRef)} />\n    </div>\n  }\n}\n\n@react.component\nlet make = () => {\n  let textInput = React.useRef(Js.Nullable.null)\n  let setInputRef = element => { textInput.current = element}\n\n  <CustomTextInput setInputRef/>\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",u({parentName:"pre"},{className:"language-js"}),'function CustomTextInput(Props) {\n  var setInputRef = Props.setInputRef;\n  return React.createElement("div", undefined, React.createElement("input", {\n                  ref: setInputRef,\n                  type: "text"\n                }));\n}\n\nvar CustomTextInput = {\n  make: CustomTextInput\n};\n\nfunction Parent(Props) {\n  var textInput = React.useRef(null);\n  var setInputRef = function (element) {\n    textInput.current = element;\n\n  };\n  return React.createElement(CustomTextInput, {\n              setInputRef: setInputRef\n            });\n}\n'))),(0,l.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Parent")," \u5c06\u5b83\u7684 ref \u56de\u8c03\u51fd\u6570\u4f20\u9012\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"CustomTextInput")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"setInputRef")," prop\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"CustomTextInput")," \u5c06\u540c\u6837\u7684\u51fd\u6570\u4f5c\u4e3a\u7279\u522b\u7684 ref \u5c5e\u6027\u4f20\u9012\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"<input>"),"\u3002\u56e0\u6b64\uff0c\u7236\u7ec4\u4ef6\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"textInput")," ref \u4f1a\u88ab\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"CustomTextInput")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"<input>")," \u7684 DOM \u8282\u70b9\u3002"))}m.isMDXComponent=!0,m.frontmatter={title:"Refs & DOM",description:"\u5728 ReScript \u548c React \u4e2d\u4f7f\u7528 Refs \u548c DOM",canonical:"/docs/react/latest/refs-and-the-dom",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/react/latest/refs-and-the-dom.mdx"}},12481:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/react/latest/refs-and-the-dom",function(){return n(70031)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=12481,e(e.s=t);var t}));var t=e.O();_N_E=t}]);