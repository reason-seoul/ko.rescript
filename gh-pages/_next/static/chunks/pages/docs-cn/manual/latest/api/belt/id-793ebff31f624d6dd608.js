(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28609],{17375:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,{Z:function(){return n}})},63852:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var n=a(17375),r=a(96156),i=(a(67294),a(3905));function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p,o=(p="Intro",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",l({},e))}),u={};function c(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",l(l(l({},u),a),{},{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",l({},{id:"id"}),"Id"),(0,i.kt)(o,{mdxType:"Intro"},(0,i.kt)("p",null,"Provide utilities to create identified comparators or hashes for data\nstructures used below."),(0,i.kt)("p",null,"It creates a unique identifier per module of functions so that different data\nstructures with slightly different comparison functions won't mix.")),(0,i.kt)("h2",l({},{id:"hash"}),"hash"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"type hash<'a, 'id>\n")),(0,i.kt)("p",null,"Its runtime represenation is a hash function, but signed with a type parameter, so that different hash functions type mismatch."),(0,i.kt)("h2",l({},{id:"eq"}),"eq"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"type eq<'a, 'id>\n")),(0,i.kt)("p",null,"Its runtime represenation is an eq function, but signed with a type parameter, so that different hash functions type mismatch."),(0,i.kt)("h2",l({},{id:"cmp"}),"cmp"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"type cmp<'a, 'id>\n")),(0,i.kt)("p",null,"Its runtime representation is a cmp function, but signed with a type parameter, so that different hash functions type mismatch."),(0,i.kt)("h2",l({},{id:"comparable"}),"Comparable"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"module type Comparable = {\n  type identity\n\n  type t\n\n  let cmp: Belt.Id.cmp<t, identity>\n}\n")),(0,i.kt)("h2",l({},{id:"comparable-1"}),"comparable"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"type comparable<'key,'id> =\n  module(Belt.Id.Comparable with type identity = 'id and type t = 'key)\n")),(0,i.kt)("p",null,"is a module of functions, here it only includes cmp."),(0,i.kt)("p",null,"Unlike normal functions, when created, it comes with a unique identity (guaranteed by the type system)."),(0,i.kt)("p",null,"It can be created using function ",(0,i.kt)("inlineCode",{parentName:"p"},"Belt_Id.comparableU")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Belt_Id.comparable"),"."),(0,i.kt)("p",null,"The idea of a unique identity when created is that it makes sure two sets would type mismatch if they use different comparison function"),(0,i.kt)("h2",l({},{id:"makecomparableu"}),"MakeComparableU"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"module MakeComparableU: (M: {\n  type t\n  let cmp: (. t, t) => int\n}) => Comparable with type t = M.t\n")),(0,i.kt)("h2",l({},{id:"makecomparable"}),"MakeComparable"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"module MakeComparable: (M: {\n  type t\n  let cmp: (t, t) => int\n}) => Comparable with type t = M.t\n")),(0,i.kt)("h2",l({},{id:"comparableu"}),"comparableU"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let comparableU: (~cmp: (. 'a, 'a) => int) =>\n  module(Belt.Id.Comparable with type t = 'a)\n")),(0,i.kt)("h2",l({},{id:"comparable-2"}),"comparable"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"type comparable<'key, 'id> =\n  module(Belt.Id.Comparable with type identity = 'id and type t = 'key)\n")),(0,i.kt)("h2",l({},{id:"hashable"}),"Hashable"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"module type Hashable = {\n  type identity\n\n  type t\n\n  let hash: Belt.Id.hash<t, identity>\n\n  let eq: Belt.Id.eq<t, identity>\n}\n")),(0,i.kt)("h2",l({},{id:"hashable-1"}),"hashable"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"type hashable<'key, 'id> =\n  module(Belt.Id.Hashable with type identity = 'id and type t = 'key)\n")),(0,i.kt)("p",null,"is a module of functions, here it only includes hash, eq."),(0,i.kt)("p",null,"Unlike normal functions, when created, it comes with a unique identity (guaranteed by the type system)."),(0,i.kt)("p",null,"It can be created using function ",(0,i.kt)("inlineCode",{parentName:"p"},"Belt_Id.hashableU")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Belt_Id.hashable"),"."),(0,i.kt)("p",null,"The idea of a unique identity when created is that it makes sure two hash sets would type mismatch if they use different comparison function."),(0,i.kt)("h2",l({},{id:"makehashableu"}),"MakeHashableU"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"module MakeHashableU: (M: {\n  type t\n  let hash: (. t) => int\n  let eq: (. t, t) => bool\n}) => Hashable with type t = M.t\n")),(0,i.kt)("h2",l({},{id:"makehashable"}),"MakeHashable"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"module MakeHashable: (M: {\n  type t\n  let hash: t => int\n  let eq: (t, t) => bool\n}) => Hashable with type t = M.t\n")),(0,i.kt)("h2",l({},{id:"hashableu"}),"hashableU"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let hashableU: (~hash: (. 'a) => int, ~eq: (. 'a, 'a) => bool) =>\n  module(Belt.Id.Hashable with type t = 'a)\n")),(0,i.kt)("h2",l({},{id:"hashable-2"}),"hashable"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let hashable: (~hash: 'a => int, ~eq: ('a, 'a) => bool) =>\n  module(Belt.Id.Hashable with type t = 'a)\n")))}c.isMDXComponent=!0,c.frontmatter={__ghEditHref:"https://github.com/rescript-idea/rescript-lang.org-chinese-translation/tree/chinese-translation/pages/docs-cn/manual/latest/api/belt/id.mdx"}},74098:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/api/belt/id",function(){return a(63852)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=74098,e(e.s=t);var t}));var t=e.O();_N_E=t}]);