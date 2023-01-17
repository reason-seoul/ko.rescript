(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23912],{17375:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}a.d(t,{Z:function(){return r}})},33995:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var r=a(17375),n=a(96156),l=(a(67294),a(3905));function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var o,p=(o="Intro",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",i({},e))}),c={};function g(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",i(i(i({},c),a),{},{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",i({},{id:"promise"}),"Promise"),(0,l.kt)(p,{mdxType:"Intro"},(0,l.kt)("p",null,"Provide bindings to JS promise.")),(0,l.kt)("h2",i({},{id:"t"}),"t"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type t<+'a>\n")),(0,l.kt)("h2",i({},{id:"error"}),"error"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type error\n")),(0,l.kt)("h2",i({},{id:"make"}),"make"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let make: ((~resolve: (. 'a) => unit, ~reject: (. exn) => unit) => unit) => t<'a>\n")),(0,l.kt)("h2",i({},{id:"resolve"}),"resolve"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let resolve: 'a => t<'a>\n")),(0,l.kt)("h2",i({},{id:"reject"}),"reject"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reject: exn => t<'a>\n")),(0,l.kt)("h2",i({},{id:"all"}),"all"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let all: array<t<'a>> => t<array<'a>>\n")),(0,l.kt)("h2",i({},{id:"all2"}),"all2"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let all2: ((t<'a0>, t<'a1>)) => t<('a0, 'a1)>\n")),(0,l.kt)("h2",i({},{id:"all3"}),"all3"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let all3: ((t<'a0>, t<'a1>, t<'a2>)) => t<('a0, 'a1, 'a2)>\n")),(0,l.kt)("h2",i({},{id:"all4"}),"all4"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let all4: ((t<'a0>, t<'a1>, t<'a2>, t<'a3>)) => t<('a0, 'a1, 'a2, 'a3)>\n")),(0,l.kt)("h2",i({},{id:"all5"}),"all5"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let all5: ((t<'a0>, t<'a1>, t<'a2>, t<'a3>, t<'a4>)) => t<('a0, 'a1, 'a2, 'a3, 'a4)>\n")),(0,l.kt)("h2",i({},{id:"all6"}),"all6"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let all6: ((t<'a0>, t<'a1>, t<'a2>, t<'a3>, t<'a4>, t<'a5>)) => t<('a0, 'a1, 'a2, 'a3, 'a4, 'a5)>\n")),(0,l.kt)("h2",i({},{id:"race"}),"race"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let race: array<t<'a>> => t<'a>\n")),(0,l.kt)("h2",i({},{id:"then_"}),"then_"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let then_: ('a => t<'b>, t<'a>) => t<'b>\n")),(0,l.kt)("h2",i({},{id:"catch"}),"catch"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let catch: (error => t<'a>, t<'a>) => t<'a>\n")))}g.isMDXComponent=!0,g.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/latest/api/js/promise.mdx"}},84868:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/latest/api/js/promise",function(){return a(33995)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=84868,e(e.s=t);var t}));var t=e.O();_N_E=t}]);