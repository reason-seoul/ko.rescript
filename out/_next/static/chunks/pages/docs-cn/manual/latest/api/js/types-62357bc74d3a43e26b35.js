(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[52044],{17375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})},41545:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(17375),a=n(96156),l=(n(67294),n(3905));function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u,i=(u="Intro",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",s({},e))}),p={};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",s(s(s({},p),n),{},{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",s({},{id:"types"}),"Types"),(0,l.kt)(i,{mdxType:"Intro"},(0,l.kt)("p",null,"Provide utilities for manipulating JS types.")),(0,l.kt)("h2",s({},{id:"symbol"}),"symbol"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type symbol\n")),(0,l.kt)("h2",s({},{id:"obj_val"}),"obj_val"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type obj_val\n")),(0,l.kt)("h2",s({},{id:"undefined_val"}),"undefined_val"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type undefined_val\n")),(0,l.kt)("h2",s({},{id:"null_val"}),"null_val"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type null_val\n")),(0,l.kt)("h2",s({},{id:"function_val"}),"function_val"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type function_val\n")),(0,l.kt)("h2",s({},{id:"t"}),"t"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type rec t<'a> =\n  | Undefined: t<undefined_val>\n  | Null: t<null_val>\n  | Boolean: t<bool>\n  | Number: t<float>\n  | String: t<string>\n  | Function: t<function_val>\n  | Object: t<obj_val>\n  | Symbol: t<symbol>\n")),(0,l.kt)("h2",s({},{id:"test"}),"test"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let test: ('a, t<'b>) => bool\n")),(0,l.kt)("h2",s({},{id:"tagged_t"}),"tagged_t"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type tagged_t =\n  | JSFalse\n  | JSTrue\n  | JSNull\n  | JSUndefined\n  | JSNumber(float)\n  | JSString(string)\n  | JSFunction(function_val)\n  | JSObject(obj_val)\n  | JSSymbol(symbol)\n")),(0,l.kt)("h2",s({},{id:"classify"}),"classify"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let classify: 'a => tagged_t\n")))}c.isMDXComponent=!0,c.frontmatter={__ghEditHref:"https://github.com/rescript-idea/rescript-lang.org-chinese-translation/tree/chinese-translation/pages/docs-cn/manual/latest/api/js/types.mdx"}},50790:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/api/js/types",function(){return n(41545)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=50790,e(e.s=t);var t}));var t=e.O();_N_E=t}]);