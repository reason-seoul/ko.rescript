(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23753],{17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},52429:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n(17375),r=n(96156),p=(n(67294),n(3905));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i,s=(i="CodeTab",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.kt)("div",o({},e))}),c={};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,p.kt)("wrapper",o(o(o({},c),n),{},{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",o({},{id:"\u7ed1\u5b9a\u5230-js-\u5bf9\u8c61"}),"\u7ed1\u5b9a\u5230 JS \u5bf9\u8c61"),(0,p.kt)("p",null,"JavaScript \u4e2d\u7684\u5bf9\u8c61\u6709\u4e0b\u9762\u8fd9\u4e9b\u7528\u4f8b\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u6570\u636e\u5b58\u50a8\uff0c\u7c7b\u4f3c\u5176\u4ed6\u8bed\u8a00\uff08\u6bd4\u5982 Rescript \u548c C \u8bed\u8a00\uff09\u7684\u201c\u8bb0\u5f55\u201d\u6216\u8005\u201c\u7ed3\u6784\u4f53\u201d"),(0,p.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u54c8\u5e0c\u8868"),(0,p.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u7c7b"),(0,p.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u8f93\u5165\u6216\u8f93\u51fa\u7684\u6a21\u5757")),(0,p.kt)("p",null,"ReScript \u6e05\u695a\u5730\u533a\u5206\u8fd9\u56db\u79cd\u4e0d\u540c\u7528\u9014\u7684 JS \u5bf9\u8c61\u7684\u7ed1\u5b9a\u65b9\u5f0f\u3002\u672c\u7ae0\u63cf\u8ff0\u524d\u4e09\u79cd\u60c5\u51b5\u3002\u5bf9 JS \u6a21\u5757\u5bf9\u8c61\u7684\u7ed1\u5b9a\u4f1a\u5728",(0,p.kt)("a",o({parentName:"p"},{href:"import-from-export-to-js.md"}),"\u4ece JS \u5bfc\u5165/\u5bfc\u51fa\u5230 JS"),"\u4e2d\u8bf4\u660e\u3002"),(0,p.kt)("h2",o({},{id:"\u7ed1\u5b9a\u5230\u7c7b\u4f3c\u8bb0\u5f55\u7684-js-\u5bf9\u8c61"}),"\u7ed1\u5b9a\u5230\u7c7b\u4f3c\u201c\u8bb0\u5f55\u201d\u7684 JS \u5bf9\u8c61"),(0,p.kt)("h3",o({},{id:"\u4f7f\u7528-rescript-\u8bb0\u5f55\u8fdb\u884c\u7ed1\u5b9a"}),"\u4f7f\u7528 ReScript \u8bb0\u5f55\u8fdb\u884c\u7ed1\u5b9a"),(0,p.kt)("p",null,"\u5982\u679c\u4f60\u7684 JavaScript \u5bf9\u8c61\u6709\u56fa\u5b9a\u7684\u5b57\u6bb5\uff0c\u90a3\u4e48\u5b83\u5728\u6982\u5ff5\u4e0a\u5c31\u50cf\u4e00\u4e2a ReScript \u8bb0\u5f55\u3002\u56e0\u4e3a ReScript \u8bb0\u5f55\u7f16\u8bd1\u6210\u5e72\u51c0\u7684 JavaScript \u5bf9\u8c61\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u5c06 JS \u5bf9\u8c61\u7684\u7c7b\u578b\u6807\u6ce8\u4e3a ReScript \u7684\u8bb0\u5f55\uff01"),(0,p.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type person = {\n  name: string,\n  friends: array<string>,\n  age: int,\n}\n\n@module("MySchool") external john: person = "john"\n\nlet johnName = john.name\n')),(0,p.kt)("pre",null,(0,p.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var MySchool = require("MySchool");\n\nvar johnName = MySchool.john.name;\n'))),(0,p.kt)("p",null,"external \u7684\u76f8\u5173\u6587\u6863\u5728",(0,p.kt)("a",o({parentName:"p"},{href:"external.md"}),"\u8fd9\u91cc"),"\u3002",(0,p.kt)("inlineCode",{parentName:"p"},"@module")," \u7684\u76f8\u5173\u6587\u6863\u5728",(0,p.kt)("a",o({parentName:"p"},{href:"import-from-export-to-js.md"}),"\u8fd9\u91cc"),"\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u6216\u8005\u9700\u8981\u5728 ReScript \u7aef\u548c JavaScript \u7aef\u4f7f\u7528\u4e0d\u540c\u7684\u5b57\u6bb5\u540d\uff0c\u4f60\u53ef\u4ee5\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"@as")," \u88c5\u9970\u5668\uff1a"),(0,p.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type action = {\n  @as("type") type_: string\n}\n\nlet action = {type_: "ADD_USER"}\n')),(0,p.kt)("pre",null,(0,p.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var action = {\n  type: "ADD_USER"\n};\n'))),(0,p.kt)("p",null,"\u8fd9\u7528\u4e8e\u6620\u5c04\u5230\u65e0\u6cd5\u5728 ReScript \u4e2d\u8868\u8fbe\u7684 JavaScript \u5c5e\u6027\u540d\u79f0\uff08\u4f8b\u5982 ReScript \u5173\u952e\u5b57\uff09\u3002"),(0,p.kt)("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5c06\u7d22\u5f15\u4f20\u9012\u7ed9 ",(0,p.kt)("inlineCode",{parentName:"p"},"@as")," \u88c5\u9970\u5668\u6765\u5c06 ReScript \u8bb0\u5f55\u6620\u5c04\u5230 JavaScript \u6570\u7ec4\uff1a"),(0,p.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",o({parentName:"pre"},{className:"language-res"}),'type t = {\n  @as("0") foo: int,\n  @as("1") bar: string,\n}\n\nlet value = {foo: 7, bar: "baz"}\n')),(0,p.kt)("pre",null,(0,p.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var value = [\n  7,\n  "baz"\n];\n'))),(0,p.kt)("h3",o({},{id:"\u4f7f\u7528-rescript-\u5bf9\u8c61\u8fdb\u884c\u7ed1\u5b9a"}),"\u4f7f\u7528 ReScript \u5bf9\u8c61\u8fdb\u884c\u7ed1\u5b9a"),(0,p.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("a",o({parentName:"p"},{href:"object.md"}),"ReScript \u5bf9\u8c61")," \u53bb\u5bf9 JS \u5bf9\u8c61\u8fdb\u884c\u5efa\u6a21\uff1a"),(0,p.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type person = {\n  "name": string,\n  "friends": array<string>,\n  "age": int,\n}\n\n@module("MySchool") external john: person = "john"\n\nlet johnName = john["name"]\n')),(0,p.kt)("pre",null,(0,p.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var MySchool = require("MySchool");\n\nvar johnName = MySchool.john.name;\n'))),(0,p.kt)("h3",o({},{id:"\u4f7f\u7528\u7279\u6b8a\u7684-getter-\u548c-setter-\u5c5e\u6027\u8fdb\u884c\u7ed1\u5b9a"}),"\u4f7f\u7528\u7279\u6b8a\u7684 Getter \u548c Setter \u5c5e\u6027\u8fdb\u884c\u7ed1\u5b9a"),(0,p.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"@get")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"@set")," \u53bb\u7ed1\u5b9a JS \u5bf9\u8c61\u7684\u72ec\u7acb\u5b57\u6bb5\uff1a"),(0,p.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type textarea\n@set external setName: (textarea, string) => unit = "name"\n@get external getName: textarea => string = "name"\n')),(0,p.kt)("pre",null,(0,p.kt)("code",o({parentName:"pre"},{className:"language-js"}),""))),(0,p.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"@get_index")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"@set_index")," \u53bb\u8bbf\u95ee\u52a8\u6001\u5c5e\u6027\u6216\u8005\u7d22\u5f15\uff1a"),(0,p.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type t\n@new external create: int => t = "Int32Array"\n@get_index external get: (t, int) => int = ""\n@set_index external set: (t, int, int) => unit = ""\n\nlet i32arr = create(3)\ni32arr->set(0, 42)\nJs.log(i32arr->get(0))\n')),(0,p.kt)("pre",null,(0,p.kt)("code",o({parentName:"pre"},{className:"language-js"}),"var i32arr = new Int32Array(3);\ni32arr[0] = 42;\nconsole.log(i32arr[0]);\n"))),(0,p.kt)("h2",o({},{id:"\u7ed1\u5b9a\u5230\u7c7b\u4f3c\u54c8\u5e0c\u8868\u7684-js-\u5bf9\u8c61"}),"\u7ed1\u5b9a\u5230\u7c7b\u4f3c\u54c8\u5e0c\u8868\u7684 JS \u5bf9\u8c61"),(0,p.kt)("p",null,"\u5982\u679c\u4f60\u7684 JavaScript \u5bf9\u8c61\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u4f1a\u589e\u52a0\u6216\u8005\u5220\u9664\u952e"),(0,p.kt)("li",{parentName:"ul"},"\u53ea\u5305\u542b\u540c\u7c7b\u578b\u7684\u503c")),(0,p.kt)("p",null,"\u90a3\u4e48\u5b83\u4e0d\u662f\u771f\u6b63\u610f\u4e49\u4e0a\u7684\u5bf9\u8c61\uff0c\u800c\u662f\u4e00\u4e2a\u54c8\u5e0c\u8868\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("a",o({parentName:"p"},{href:"api/js/dict"}),"Js.Dict"),"\uff0c\u5b83\u5305\u542b ",(0,p.kt)("inlineCode",{parentName:"p"},"get"),"\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"set")," \u7b49\u64cd\u4f5c\u5e76\u4e14\u4ecd\u7136\u53ef\u4ee5\u5e72\u51c0\u5730\u7f16\u8bd1\u4e3a JavaScript \u5bf9\u8c61\u3002"),(0,p.kt)("h2",o({},{id:"\u7ed1\u5b9a\u5230\u4f5c\u4e3a\u7c7b\u7684-js-\u5bf9\u8c61"}),"\u7ed1\u5b9a\u5230\u4f5c\u4e3a\u7c7b\u7684 JS \u5bf9\u8c61"),(0,p.kt)("p",null,"\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"@new")," \u6765\u6a21\u62df ",(0,p.kt)("inlineCode",{parentName:"p"},"new Date()"),"\uff1a"),(0,p.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type t\n@new external createDate: unit => t = "Date"\n\nlet date = createDate()\n')),(0,p.kt)("pre",null,(0,p.kt)("code",o({parentName:"pre"},{className:"language-js"}),"var date = new Date();\n"))),(0,p.kt)("p",null,"\u5982\u679c\u4f60\u8981\u5bfc\u5165\u7684 JS \u6a21\u5757\u672c\u8eab\u662f\u4e00\u4e2a\u7c7b\uff0c\u4f60\u53ef\u4ee5\u5c06 ",(0,p.kt)("inlineCode",{parentName:"p"},"new")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"module")," \u4e32\u8054\u4f7f\u7528\uff1a"),(0,p.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type t\n@new @module external book: unit => t = "Book"\nlet myBook = book()\n')),(0,p.kt)("pre",null,(0,p.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var Book = require("Book");\nvar myBook = new Book();\n'))))}u.isMDXComponent=!0,u.frontmatter={title:"\u7ed1\u5b9a\u5230 JS \u5bf9\u8c61",description:"Interop with JS objects in ReScript",canonical:"/docs/manual/latest/bind-to-js-object",__ghEditHref:"https://github.com/rescript-idea/rescript-lang.org-chinese-translation/tree/chinese-translation/pages/docs-cn/manual/latest/bind-to-js-object.mdx"}},84367:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/bind-to-js-object",function(){return n(52429)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=84367,e(e.s=t);var t}));var t=e.O();_N_E=t}]);