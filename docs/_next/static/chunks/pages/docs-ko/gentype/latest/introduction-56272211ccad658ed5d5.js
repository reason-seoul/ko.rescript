(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69688],{17375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}n.d(t,{Z:function(){return r}})},21357:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(96156),p=n(17375),o=(n(67294),n(3905));function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={};function c(e){var t=e.components,n=(0,p.Z)(e,["components"]);return(0,o.kt)("wrapper",i(i(i({},l),n),{},{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",i({},{id:"gentype"}),"GenType"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"genType")," \u662f\u4e00\u4e2a\u4ee3\u7801\u751f\u6210\u5de5\u5177\uff0c\u5b83\u5141\u8bb8\u4f60\u5bfc\u51fa ReScript \u4e2d\u7684\u503c\u548c\u7c7b\u578b\u7528\u4e8e JavaScript \u4e2d\uff0c\u8fd8\u53ef\u4ee5\u5bfc\u5165 JavaScript \u4e2d\u7684\u503c\u548c\u7c7b\u578b\u5230 ReScript \u4e2d\u3002"),(0,o.kt)("p",null,"\u6839\u636e\u503c\u7684\u7c7b\u578b\u751f\u6210\u4e24\u79cd\u8868\u793a\u5f62\u5f0f\u4e4b\u95f4\u7684\u8f6c\u6362\u5668\u51fd\u6570\u3002\u8f6c\u6362\u5668\u53ef\u4ee5\u88ab\u751f\u6210\u4e3a\u539f\u751f JavaScript\uff0c\u6216\u8005\u751f\u6210\u4e3a ",(0,o.kt)("a",i({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," / ",(0,o.kt)("a",i({parentName:"p"},{href:"https://flow.org/en/"}),"Flow")," \uff0c\u4ece\u800c\u83b7\u5f97\u7c7b\u578b\u5b89\u5168\u7684\u63a5\u53e3\u3002\n\u7279\u522b\u662f\uff0c",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/react/latest/introduction"}),"rescript-react")," \u7ec4\u4ef6\u652f\u6301\u4e24\u79cd\u8f6c\u6362\u65b9\u5f0f\uff0c\u8fd8\u9644\u5e26\u81ea\u52a8\u751f\u6210\u7684\u5305\u88c5\u5668\u3002"),(0,o.kt)("p",null,"\u8fd9\u91cc\u6709\u4e00\u7bc7\u6587\u7ae0\u63cf\u8ff0\u4e86\u5982\u4f55\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"genType")," \u4f5c\u4e3a\u8fc1\u79fb\u7b56\u7565\u7684\u4e00\u90e8\u5206\uff0c\u5c06\u7ec4\u4ef6\u6811\u81ea\u4e0b\u800c\u4e0a\u5730\u9010\u6e10\u8f6c\u6362\u4e3a ReScript (\u5305\u542b Reason / BuckleScript \u7684\u65e7\u6587\u7ae0): ",(0,o.kt)("a",i({parentName:"p"},{href:"https://medium.com/p/c514265b466d"}),"Adopting Reason: strategies, dual sources of truth, and why genType is a big deal"),"\u3002  "),(0,o.kt)("p",null,"genType \u7684\u5b9e\u73b0\u5728\u7f16\u8bd1\u5b8c ReScript \u6e90\u7801\u4e4b\u540e\u5bf9 ReScript \u7a0b\u5e8f\u6267\u884c\u9762\u5411\u7c7b\u578b\u7684\u8f6c\u6362\uff0c\u8f6c\u6362\u540e\u7684\u7a0b\u5e8f\u64cd\u4f5c\u7684\u5c31\u662f JS \u60ef\u7528\u7684\u6570\u636e\u7c7b\u578b\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u4e00\u4e2a\u5728 ReScript \u53d8\u4f53\u4e0a\u7684\u51fd\u6570\u64cd\u4f5c ",(0,o.kt)("inlineCode",{parentName:"p"},"type t  = | A(int) | B(string)")," (\u54ea\u4e00\u4e2a\u5728\u8fd0\u884c\u65f6\u4f1a\u8868\u793a\u4e3a\u81ea\u5b9a\u4e49\u5757) \u88ab\u5bfc\u51fa\u5230\u4e00\u4e2a JS \u51fd\u6570\u64cd\u4f5c\u4e2d\u5bf9\u5e94\u7684 JS \u5bf9\u8c61\u7c7b\u578b ",(0,o.kt)("inlineCode",{parentName:"p"},'{ tag: "A"; value: number }\n  | { tag: "B"; value: string }')),(0,o.kt)("p",null,"genType \u7684\u540e\u7aef\u6709\u4e09\u79cd\u914d\u7f6e\uff0c\u751f\u6210\u4e0d\u540c\u7684\u8f93\u51fa\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"untyped")," \u751f\u6210\u539f\u751f JS \u7684\u5305\u88c5\u5668\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"typescript")," \u751f\u6210 ",(0,o.kt)("a",i({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"flow")," \u751f\u6210\u5e26\u6709 ",(0,o.kt)("a",i({parentName:"p"},{href:"https://flow.org/en/"}),"Flow")," \u7c7b\u578b\u6ce8\u89e3\u7684 JS\u3002"),(0,o.kt)("h2",i({},{id:"\u5feb\u901f\u793a\u4f8b"}),"\u5feb\u901f\u793a\u4f8b"),(0,o.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u6b63\u5728\u5904\u7406\u4e00\u4e2a TypeScript (TS) \u4ee3\u7801\u5e93\uff0c\u6211\u4eec\u60f3\u96c6\u6210\u4e00\u4e2a\u5355\u72ec\u7684 rescript-react \u7ec4\u4ef6\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u5e0c\u671b\u80fd\u591f\u50cf\u5bfc\u5165\u73b0\u6709 TS \u4ee3\u7801\u4e2d\u7684 React \u7ec4\u4ef6\u4e00\u6837\uff0c\u5bfc\u5165 rescript-react \u7ec4\u4ef6\uff0c\u6211\u4eec\u4e5f\u60f3\u5728 TS \u7c7b\u578b\u7cfb\u7edf\u4e2d\u4fdd\u7559\u6240\u6709\u7684 ReScript \u7c7b\u578b\uff08\u5e76\u5728\u5fc5\u8981\u65f6\u8f6c\u6362\u4e0d\u517c\u5bb9\u7684\u503c\uff09\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"genType \u5c31\u662f\u4e3a\u6b64\u800c\u751f\u7684\uff01")),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u51c6\u5907\u4e00\u4e2a rescript-react \u7ec4\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),'/* src/MyComp.res */\n\n@genType\ntype color =\n  | Red\n  | Blue;\n\n@genType\n@react.component\nlet make = (~name: string, ~color: color) => {\n  let colorStr =\n    switch (color) {\n    | Red => "red"\n    | Blue => "blue"\n    };\n\n  <div className={"color-" ++ colorStr}> {React.string(name)} </div>;\n};\n')),(0,o.kt)("p",null,"\u5f53\u6210\u529f\u7f16\u8bd1\u540e\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"genType")," \u4f1a\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/MyComp.res")," \u8f6c\u6362\u5230\u4e00\u4e2a\u53eb\u505a ",(0,o.kt)("inlineCode",{parentName:"p"},"src/MyComp.gen.ts")," \u7684 TS \u6587\u4ef6\u4e2d\uff0c\u5b83\u770b\u8d77\u6765\u50cf\u8fd9\u6837:"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-ts"}),'// src/MyComp.gen.tsx\n\n/* TypeScript file generated from MyComp.res by genType. */\n/* eslint-disable import/first */\n\n\nimport * as React from \'react\';\n\nconst $$toRE818596289: { [key: string]: any } = {"Red": 0, "Blue": 1};\n\n// tslint:disable-next-line:no-var-requires\nconst MyCompBS = require(\'./MyComp.bs\');\n\n// tslint:disable-next-line:interface-over-type-literal\nexport type color = "Red" | "Blue";\n\n// tslint:disable-next-line:interface-over-type-literal\nexport type Props = { readonly color: color; readonly name: string };\n\nexport const make: React.ComponentType<{ readonly color: color; readonly name: string }> = function MyComp(Arg1: any) {\n  const $props = {color:$$toRE818596289[Arg1.color], name:Arg1.name};\n  const result = React.createElement(MyCompBS.make, $props);\n  return result\n};\n')),(0,o.kt)("p",null,"genType \u81ea\u52a8\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"color")," \u53d8\u4f53\u6620\u5c04\u5230 TS \u7684\u5b57\u7b26\u4e32\u8054\u5408\u7c7b\u578b ",(0,o.kt)("inlineCode",{parentName:"p"},'color = "Red" | "Blue"'),"\uff0c\u8fd8\u63d0\u4f9b\u4e86\u5728 ReScript & TS \u8868\u793a\u4e4b\u95f4\u8f6c\u6362\u7684\u6240\u6709\u8f6c\u6362\u5668\u3002"),(0,o.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 TS \u4e2d\u65e0\u7f1d\u4f7f\u7528 ReScript \u7279\u5b9a\u7684\u6570\u636e\u7ed3\u6784\uff0c\u800c\u65e0\u9700\u624b\u52a8\u7f16\u5199\u8f6c\u6362\u5668\u4ee3\u7801\uff01"),(0,o.kt)("p",null,"\u5728\u6211\u4eec\u7684 TypeScript \u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u6211\u4eec\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5bfc\u5165\u548c\u4f7f\u7528 React \u7ec4\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-ts"}),'// src/App.ts\nimport { make as MyComp } from "./MyComp.gen.tsx";\n\nconst App = () => {\n  return (<div>\n    <h1> My Component </h1>\n    <MyComp color="Blue" name="ReScript & TypeScript" />\n  </div>);\n};\n')),(0,o.kt)("p",null,"\u8fd9\u5c31\u662f\u6211\u4eec\u7684\u5feb\u901f\u793a\u4f8b\u3002"),(0,o.kt)("p",null,"\u8be6\u60c5\u8bf7\u89c1",(0,o.kt)("a",i({parentName:"p"},{href:"getting-started"}),"\u5f00\u59cb\u4f7f\u7528"),"\u6216",(0,o.kt)("a",i({parentName:"p"},{href:"usage"}),"\u7528\u6cd5"),"\u3002"),(0,o.kt)("h2",i({},{id:"\u5f00\u53d1\u95ee\u9898"}),"\u5f00\u53d1\u95ee\u9898"),(0,o.kt)("p",null,"\u60f3\u8981\u8d21\u732e\u4ee3\u7801\uff0c\u63d0\u51fa issues \u6216\u63d0\u95ee\uff0c\u8bf7\u53c2\u7167 ",(0,o.kt)("a",i({parentName:"p"},{href:"https://github.com/reason-association/genType"}),"GitHub \u4ed3\u5e93")," \u6216\u6211\u4eec\u7684 ",(0,o.kt)("a",i({parentName:"p"},{href:"https://forum.rescript-lang.org"}),"ReScript \u8bba\u575b")))}c.isMDXComponent=!0,c.frontmatter={title:"\u7b80\u4ecb",description:"GenType - Interoperability between ReScript and TypeScript / Flow",canonical:"/docs/gentype/latest/introduction",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs-ko/gentype/latest/introduction.mdx"}},46096:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-ko/gentype/latest/introduction",function(){return n(21357)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=46096,e(e.s=t);var t}));var t=e.O();_N_E=t}]);