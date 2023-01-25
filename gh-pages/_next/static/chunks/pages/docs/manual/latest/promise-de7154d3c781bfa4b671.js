(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3881],{17375:function(e,r,t){"use strict";function n(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(r,{Z:function(){return n}})},28894:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var n=t(17375),a=t(96156),o=(t(67294),t(3905));function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){(0,a.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var l,p=(l="CodeTab",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",i({},e))}),m={};function u(e){var r=e.components,t=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",i(i(i({},m),t),{},{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",i({},{id:"async--promise"}),"Async & Promise"),(0,o.kt)("p",null,"Support for ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," is added in compiler version 10.1. The majority of existing code is based on promises. The new Promise API bindings make async code look better than with old promises."),(0,o.kt)("h2",i({},{id:"promise-new"}),"Promise (new)"),(0,o.kt)("p",null,"Our up to date Promise bindings are currently not part of the the standard library. For now, please install them separately:"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-sh"}),"npm install @ryyppy/rescript-promise\n")),(0,o.kt)("p",null,"In your ",(0,o.kt)("inlineCode",{parentName:"p"},"bsconfig.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-json"}),'{\n  "bs-dependencies": ["@ryyppy/rescript-promise"]\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Alternatively you may vendor the ",(0,o.kt)("a",i({parentName:"em"},{href:"https://github.com/ryyppy/rescript-promise/tree/master/src"}),(0,o.kt)("inlineCode",{parentName:"a"},"Promise.res")," / ",(0,o.kt)("inlineCode",{parentName:"a"},"Promise.resi")," files")," files in your app codebase if you want to have more control.")),(0,o.kt)("p",null,"You can find the APIs and full usage examples ",(0,o.kt)("a",i({parentName:"p"},{href:"https://github.com/ryyppy/rescript-promise#usage"}),"here"),"."),(0,o.kt)("h2",i({},{id:"promise-legacy"}),"Promise (legacy)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," The ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Promise")," bindings are following the outdated data-last convention from a few years ago. We kept those APIs for backwards compatibility, so for now please use ",(0,o.kt)("a",i({parentName:"p"},{href:"https://github.com/ryyppy/rescript-promise"}),(0,o.kt)("inlineCode",{parentName:"a"},"rescript-promise"))," until we upstream the new bindings to our standard library.")),(0,o.kt)("p",null,"ReScript has built-in support for ",(0,o.kt)("a",i({parentName:"p"},{href:"api/js/promise"}),"JavaScript promises"),". The 3 functions you generally need are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Js.Promise.resolve: 'a => Js.Promise.t('a)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Js.Promise.then_: ('a => Js.Promise.t('b), Js.Promise.t('a)) => Js.Promise.t('b)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Js.Promise.catch: (Js.Promise.error => Js.Promise.t('a), Js.Promise.t('a)) => Js.Promise.t('a)"))),(0,o.kt)("p",null,"Additionally, here's the type signature for creating a promise on the ReScript side:"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),"Js.Promise.make: (\n  (\n    ~resolve: (. 'a) => unit,\n    ~reject: (. exn) => unit\n  ) => unit\n) => Js.Promise.t<'a>\n")),(0,o.kt)("p",null,"This type signature means that ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," takes a callback that takes 2 named arguments, ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"reject"),". Both arguments are themselves ",(0,o.kt)("a",i({parentName:"p"},{href:"function.md#uncurried-function"}),"uncurried callbacks")," (with a dot). ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," returns the created promise."),(0,o.kt)("h3",i({},{id:"usage"}),"Usage"),(0,o.kt)("p",null,"Using the ",(0,o.kt)("a",i({parentName:"p"},{href:"pipe.md"}),"pipe operator"),":"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let myPromise = Js.Promise.make((~resolve, ~reject) => resolve(. 2))\n\nmyPromise->Js.Promise.then_(value => {\n  Js.log(value)\n  Js.Promise.resolve(value + 2)\n}, _)->Js.Promise.then_(value => {\n  Js.log(value)\n  Js.Promise.resolve(value + 3)\n}, _)->Js.Promise.catch(err => {\n  Js.log2("Failure!!", err)\n  Js.Promise.resolve(-2)\n}, _)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var myPromise = new Promise(function (resolve, reject) {\n  return resolve(2);\n});\n\nmyPromise\n  .then(function (value) {\n    console.log(value);\n    return Promise.resolve((value + 2) | 0);\n  })\n  .then(function (value) {\n    console.log(value);\n    return Promise.resolve((value + 3) | 0);\n  })\n  .catch(function (err) {\n    console.log("Failure!!", err);\n    return Promise.resolve(-2);\n  });\n'))))}u.isMDXComponent=!0,u.frontmatter={title:"Async & Promise",description:"JS Promise handling in ReScript",canonical:"/docs/manual/latest/promise",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/latest/promise.mdx"}},90881:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/latest/promise",function(){return t(28894)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return r=90881,e(e.s=r);var r}));var r=e.O();_N_E=r}]);