(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47684],{17375:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}a.d(t,{Z:function(){return n}})},15305:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var n=a(17375),i=a(96156),r=(a(67294),a(3905));function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){(0,i.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p,m=(p="Intro",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",l({},e))}),k={};function d(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,r.kt)("wrapper",l(l(l({},k),a),{},{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",l({},{id:"mutablemap"}),"MutableMap"),(0,r.kt)(m,{mdxType:"Intro"},(0,r.kt)("p",null,"A mutable sorted map module which allows customize compare behavior.")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"Belt.Map"),", but mutable."),(0,r.kt)("h2",l({},{id:"t"}),"t"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type t<'k, 'v, 'id>\n")),(0,r.kt)("h2",l({},{id:"id"}),"id"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type id<'key, 'id> = Belt_Id.comparable<'key, 'id>\n")),(0,r.kt)("h2",l({},{id:"make"}),"make"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let make: (~id: id<'k, 'id>) => t<'k, 'a, 'id>\n")),(0,r.kt)("h2",l({},{id:"clear"}),"clear"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let clear: t<'a, 'b, 'c> => unit\n")),(0,r.kt)("h2",l({},{id:"isempty"}),"isEmpty"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let isEmpty: t<'a, 'b, 'c> => bool\n")),(0,r.kt)("h2",l({},{id:"has"}),"has"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let has: (t<'k, 'a, 'b>, 'k) => bool\n")),(0,r.kt)("h2",l({},{id:"cmpu"}),"cmpU"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let cmpU: (t<'k, 'a, 'id>, t<'k, 'a, 'id>, (. 'a, 'a) => int) => int\n")),(0,r.kt)("h2",l({},{id:"cmp"}),"cmp"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let cmp: (t<'k, 'a, 'id>, t<'k, 'a, 'id>, ('a, 'a) => int) => int\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cmp(m1, m2, cmp)")," First compare by size, if size is the same, compare by key, value pair."),(0,r.kt)("h2",l({},{id:"equ"}),"eqU"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let eqU: (t<'k, 'a, 'id>, t<'k, 'a, 'id>, (. 'a, 'a) => bool) => bool\n")),(0,r.kt)("h2",l({},{id:"eq"}),"eq"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let eq: (t<'k, 'a, 'id>, t<'k, 'a, 'id>, ('a, 'a) => bool) => bool\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"eq(m1, m2, eqf)")," tests whether the maps ",(0,r.kt)("inlineCode",{parentName:"p"},"m1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"m2")," are equal, that is, contain equal keys and associate them with equal data. ",(0,r.kt)("inlineCode",{parentName:"p"},"eqf")," is the equality predicate used to compare the data associated with the keys."),(0,r.kt)("h2",l({},{id:"foreachu"}),"forEachU"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEachU: (t<'k, 'a, 'id>, (. 'k, 'a) => unit) => unit\n")),(0,r.kt)("h2",l({},{id:"foreach"}),"forEach"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEach: (t<'k, 'a, 'id>, ('k, 'a) => unit) => unit\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"forEach(m, f)")," applies f to all bindings in map ",(0,r.kt)("inlineCode",{parentName:"p"},"m"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," receives the ",(0,r.kt)("inlineCode",{parentName:"p"},"'k")," as first argument, and the associated value as second argument. The bindings are passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," in increasing order with respect to the ordering over the type of the keys."),(0,r.kt)("h2",l({},{id:"reduceu"}),"reduceU"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduceU: (t<'k, 'a, 'id>, 'b, (. 'b, 'k, 'a) => 'b) => 'b\n")),(0,r.kt)("h2",l({},{id:"reduce"}),"reduce"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduce: (t<'k, 'a, 'id>, 'b, ('b, 'k, 'a) => 'b) => 'b\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"reduce(m, a, f), computes"),"(f(kN, dN) ... (f(k1, d1, a))...)",(0,r.kt)("inlineCode",{parentName:"p"},", where"),"k1 ... kN",(0,r.kt)("inlineCode",{parentName:"p"},"are the keys of all bindings in"),"m",(0,r.kt)("inlineCode",{parentName:"p"},"(in increasing order), and"),"d1 ... dN` are the associated data."),(0,r.kt)("h2",l({},{id:"everyu"}),"everyU"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let everyU: (t<'k, 'a, 'id>, (. 'k, 'a) => bool) => bool\n")),(0,r.kt)("h2",l({},{id:"every"}),"every"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let every: (t<'k, 'a, 'id>, ('k, 'a) => bool) => bool\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"every(m, p)")," checks if all the bindings of the map satisfy the predicate ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),"."),(0,r.kt)("h2",l({},{id:"someu"}),"someU"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let someU: (t<'k, 'a, 'id>, (. 'k, 'a) => bool) => bool\n")),(0,r.kt)("h2",l({},{id:"some"}),"some"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let some: (t<'k, 'a, 'id>, ('k, 'a) => bool) => bool\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"some(m, p)")," checks if at least one binding of the map satisfy the predicate ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),"."),(0,r.kt)("h2",l({},{id:"size"}),"size"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let size: t<'k, 'a, 'id> => int\n")),(0,r.kt)("h2",l({},{id:"tolist"}),"toList"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toList: t<'k, 'a, 'id> => list<('k, 'a)>\n")),(0,r.kt)("p",null,"In increasing order."),(0,r.kt)("h2",l({},{id:"toarray"}),"toArray"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toArray: t<'k, 'a, 'id> => array<('k, 'a)>\n")),(0,r.kt)("h2",l({},{id:"fromarray"}),"fromArray"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromArray: (array<('k, 'a)>, ~id: id<'k, 'id>) => t<'k, 'a, 'id>\n")),(0,r.kt)("h2",l({},{id:"keystoarray"}),"keysToArray"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keysToArray: t<'k, 'a, 'b> => array<'k>\n")),(0,r.kt)("h2",l({},{id:"valuestoarray"}),"valuesToArray"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let valuesToArray: t<'b, 'a, 'c> => array<'a>\n")),(0,r.kt)("h2",l({},{id:"minkey"}),"minKey"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minKey: t<'k, 'a, 'b> => option<'k>\n")),(0,r.kt)("h2",l({},{id:"minkeyundefined"}),"minKeyUndefined"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minKeyUndefined: t<'k, 'a, 'b> => Js.undefined<'k>\n")),(0,r.kt)("h2",l({},{id:"maxkey"}),"maxKey"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maxKey: t<'k, 'a, 'b> => option<'k>\n")),(0,r.kt)("h2",l({},{id:"maxkeyundefined"}),"maxKeyUndefined"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maxKeyUndefined: t<'k, 'a, 'b> => Js.undefined<'k>\n")),(0,r.kt)("h2",l({},{id:"minimum"}),"minimum"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minimum: t<'k, 'a, 'b> => option<('k, 'a)>\n")),(0,r.kt)("h2",l({},{id:"minundefined"}),"minUndefined"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minUndefined: t<'k, 'a, 'b> => Js.undefined<('k, 'a)>\n")),(0,r.kt)("h2",l({},{id:"maximum"}),"maximum"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maximum: t<'k, 'a, 'b> => option<('k, 'a)>\n")),(0,r.kt)("h2",l({},{id:"maxundefined"}),"maxUndefined"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maxUndefined: t<'k, 'a, 'b> => Js.undefined<('k, 'a)>\n")),(0,r.kt)("h2",l({},{id:"get"}),"get"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let get: (t<'k, 'a, 'id>, 'k) => option<'a>\n")),(0,r.kt)("h2",l({},{id:"getundefined"}),"getUndefined"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getUndefined: (t<'k, 'a, 'id>, 'k) => Js.undefined<'a>\n")),(0,r.kt)("h2",l({},{id:"getwithdefault"}),"getWithDefault"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getWithDefault: (t<'k, 'a, 'id>, 'k, 'a) => 'a\n")),(0,r.kt)("h2",l({},{id:"getexn"}),"getExn"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getExn: (t<'k, 'a, 'id>, 'k) => 'a\n")),(0,r.kt)("h2",l({},{id:"checkinvariantinternal"}),"checkInvariantInternal"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let checkInvariantInternal: t<'a, 'b, 'c> => unit\n")),(0,r.kt)("p",null,"Raise when invariant is not held."),(0,r.kt)("h2",l({},{id:"remove"}),"remove"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let remove: (t<'k, 'a, 'id>, 'k) => unit\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"remove(m, x)")," do the in-place modification."),(0,r.kt)("h2",l({},{id:"removemany"}),"removeMany"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let removeMany: (t<'k, 'a, 'id>, array<'k>) => unit\n")),(0,r.kt)("h2",l({},{id:"set"}),"set"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let set: (t<'k, 'a, 'id>, 'k, 'a) => unit\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"set(m, x, y)")," do the in-place modification"),(0,r.kt)("h2",l({},{id:"updateu"}),"updateU"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let updateU: (t<'k, 'a, 'id>, 'k, (. option<'a>) => option<'a>) => unit\n")),(0,r.kt)("h2",l({},{id:"update"}),"update"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let update: (t<'k, 'a, 'id>, 'k, option<'a> => option<'a>) => unit\n")),(0,r.kt)("h2",l({},{id:"mergemany"}),"mergeMany"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mergeMany: (t<'k, 'a, 'id>, array<('k, 'a)>) => unit\n")),(0,r.kt)("h2",l({},{id:"mapu"}),"mapU"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapU: (t<'k, 'a, 'id>, (. 'a) => 'b) => t<'k, 'b, 'id>\n")),(0,r.kt)("h2",l({},{id:"map"}),"map"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let map: (t<'k, 'a, 'id>, 'a => 'b) => t<'k, 'b, 'id>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"map(m, f)")," returns a map with same domain as ",(0,r.kt)("inlineCode",{parentName:"p"},"m"),", where the associated value a of all bindings of ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," has been replaced by the result of the application of ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),". The bindings are passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," in increasing order with respect to the ordering over the type of the keys."),(0,r.kt)("h2",l({},{id:"mapwithkeyu"}),"mapWithKeyU"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapWithKeyU: (t<'k, 'a, 'id>, (. 'k, 'a) => 'b) => t<'k, 'b, 'id>\n")),(0,r.kt)("h2",l({},{id:"mapwithkey"}),"mapWithKey"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapWithKey: (t<'k, 'a, 'id>, ('k, 'a) => 'b) => t<'k, 'b, 'id>\n")))}d.isMDXComponent=!0,d.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v9.0.0/api/belt/mutable-map.mdx"}},53627:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v9.0.0/api/belt/mutable-map",function(){return a(15305)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=53627,e(e.s=t);var t}));var t=e.O();_N_E=t}]);