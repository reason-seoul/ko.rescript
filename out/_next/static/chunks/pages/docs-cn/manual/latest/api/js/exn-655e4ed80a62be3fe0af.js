(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80209],{17375:function(e,r,t){"use strict";function n(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(r,{Z:function(){return n}})},83175:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return c}});var n=t(17375),a=t(96156),s=(t(67294),t(3905));function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){(0,a.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var l,p=(l="Intro",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",o({},e))}),g={};function c(e){var r=e.components,t=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",o(o(o({},g),t),{},{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",o({},{id:"exn"}),"Exn"),(0,s.kt)(p,{mdxType:"Intro"},(0,s.kt)("p",null,"Provide utilities for dealing with JS exceptions.")),(0,s.kt)("h2",o({},{id:"t"}),"t"),(0,s.kt)("pre",null,(0,s.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type t\n")),(0,s.kt)("h2",o({},{id:"exn-1"}),"exn"),(0,s.kt)("pre",null,(0,s.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"type exn +=\n  private\n  | Error(t)\n")),(0,s.kt)("h2",o({},{id:"asjsexn"}),"asJsExn"),(0,s.kt)("pre",null,(0,s.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let asJsExn: exn => option<t>\n")),(0,s.kt)("h2",o({},{id:"stack"}),"stack"),(0,s.kt)("pre",null,(0,s.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let stack: t => option<string>\n")),(0,s.kt)("h2",o({},{id:"message"}),"message"),(0,s.kt)("pre",null,(0,s.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let message: t => option<string>\n")),(0,s.kt)("h2",o({},{id:"name"}),"name"),(0,s.kt)("pre",null,(0,s.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let name: t => option<string>\n")),(0,s.kt)("h2",o({},{id:"filename"}),"fileName"),(0,s.kt)("pre",null,(0,s.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fileName: t => option<string>\n")),(0,s.kt)("h2",o({},{id:"iscamlexceptionoropenvariant"}),"isCamlExceptionOrOpenVariant"),(0,s.kt)("pre",null,(0,s.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let isCamlExceptionOrOpenVariant: 'a => bool\n")),(0,s.kt)("p",null,"Internal use only."),(0,s.kt)("h2",o({},{id:"raiseerror"}),"raiseError"),(0,s.kt)("pre",null,(0,s.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let raiseError: string => 'a\n")),(0,s.kt)("p",null,"Raise Js exception Error object with stacktrace."),(0,s.kt)("h2",o({},{id:"raiseevalerror"}),"raiseEvalError"),(0,s.kt)("pre",null,(0,s.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let raiseEvalError: string => 'a\n")),(0,s.kt)("h2",o({},{id:"raiserangeerror"}),"raiseRangeError"),(0,s.kt)("pre",null,(0,s.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let raiseRangeError: string => 'a\n")),(0,s.kt)("h2",o({},{id:"raisereferenceerror"}),"raiseReferenceError"),(0,s.kt)("pre",null,(0,s.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let raiseReferenceError: string => 'a\n")),(0,s.kt)("h2",o({},{id:"raisesyntaxerror"}),"raiseSyntaxError"),(0,s.kt)("pre",null,(0,s.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let raiseSyntaxError: string => 'a\n")),(0,s.kt)("h2",o({},{id:"raisetypeerror"}),"raiseTypeError"),(0,s.kt)("pre",null,(0,s.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let raiseTypeError: string => 'a\n")),(0,s.kt)("h2",o({},{id:"raiseurierror"}),"raiseUriError"),(0,s.kt)("pre",null,(0,s.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let raiseUriError: string => 'a\n")))}c.isMDXComponent=!0,c.frontmatter={__ghEditHref:"https://github.com/rescript-idea/rescript-lang.org-chinese-translation/tree/chinese-translation/pages/docs-cn/manual/latest/api/js/exn.mdx"}},33120:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/api/js/exn",function(){return t(83175)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return r=33120,e(e.s=r);var r}));var r=e.O();_N_E=r}]);