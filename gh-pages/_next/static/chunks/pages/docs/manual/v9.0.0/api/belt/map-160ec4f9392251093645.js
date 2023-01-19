(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[36736],{17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,{Z:function(){return a}})},57090:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var a=n(96156),i=n(17375),r=(n(67294),n(3905));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={};function m(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",p(p(p({},s),n),{},{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",p({},{id:"map"}),"Map"),(0,r.kt)("p",null,"The top level provides generic immutable map operations."),(0,r.kt)("p",null,"It also has three specialized inner modules ",(0,r.kt)("inlineCode",{parentName:"p"},"Belt.Map.Int"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Belt.Map.String")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Belt.Map.Dict"),"."),(0,r.kt)("h2",p({},{id:"t"}),"t"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type t<'key, 'value, 'identity>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"'key")," is the field type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"'value")," is the element type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"'identity")," the identity of the collection"),(0,r.kt)("h2",p({},{id:"id"}),"id"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type id<'key, 'id> = Belt_Id.comparable<'key, 'id>\n")),(0,r.kt)("p",null,"The identity needed for making an empty map."),(0,r.kt)("h2",p({},{id:"make"}),"make"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let make: (~id: id<'k, 'id>) => t<'k, 'v, 'id>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"make(~id)")," creates a new map by taking in the comparator."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = (a, b) => Pervasives.compare(a, b)\n})\n\nlet m = Belt.Map.make(~id=module(IntCmp))\n\nBelt.Map.set(m, 0, "a")\n')),(0,r.kt)("h2",p({},{id:"isempty"}),"isEmpty"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let isEmpty: t<'a, 'b, 'c> => bool\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"isEmpty(m)")," checks whether a map m is empty."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = (a, b) => Pervasives.compare(a, b)\n})\n\nBelt.Map.isEmpty(Belt.Map.fromArray([(1, "1")], ~id=module(IntCmp))) == false\n')),(0,r.kt)("h2",p({},{id:"has"}),"has"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let has: (t<'k, 'v, 'id>, 'k) => bool\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"has(m, k)")," checks whether ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," has the key ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = (a, b) => Pervasives.compare(a, b)\n})\n\nBelt.Map.has(Belt.Map.fromArray([(1, "1")], ~id=module(IntCmp)), 1) == true\n')),(0,r.kt)("h2",p({},{id:"cmpu"}),"cmpU"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let cmpU: (t<'k, 'v, 'id>, t<'k, 'v, 'id>, (. 'v, 'v) => int) => int\n")),(0,r.kt)("h2",p({},{id:"cmp"}),"cmp"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let cmp: (t<'k, 'v, 'id>, t<'k, 'v, 'id>, ('v, 'v) => int) => int\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cmp(m0, m1, vcmp);")),(0,r.kt)("p",null,"Total ordering of map given total ordering of value function."),(0,r.kt)("p",null,"It will compare size first and each element following the order one by one."),(0,r.kt)("h2",p({},{id:"eq"}),"eq"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let eqU: (t<'k, 'v, 'id>, t<'k, 'v, 'id>, (. 'v, 'v) => bool) => bool\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"eq(m1, m2, veq)")," tests whether the maps ",(0,r.kt)("inlineCode",{parentName:"p"},"m1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"m2")," are equal, that is, contain equal keys and associate them with equal data. ",(0,r.kt)("inlineCode",{parentName:"p"},"veq")," is the equality predicate used to compare the data associated with the keys."),(0,r.kt)("h2",p({},{id:"eq-1"}),"eq"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let eq: (t<'k, 'v, 'id>, t<'k, 'v, 'id>, ('v, 'v) => bool) => bool\n")),(0,r.kt)("h2",p({},{id:"findfirstbyu"}),"findFirstByU"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let findFirstByU: (t<'k, 'v, 'id>, (. 'k, 'v) => bool) => option<('k, 'v)>\n")),(0,r.kt)("h2",p({},{id:"findfirstby"}),"findFirstBy"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let findFirstBy: (t<'k, 'v, 'id>, ('k, 'v) => bool) => option<('k, 'v)>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"findFirstBy(m, p)")," uses function ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," to find the first key value pair to match predicate ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = (a, b) => Pervasives.compare(a, b)\n})\n\nlet s0 = Belt.Map.fromArray(~id=module(IntCmp), [(4, "4"), (1, "1"), (2, "2"), (3, "")])\n\nBelt.Map.findFirstBy(s0, (k, v) => k == 4) /* (4, "4") */\n')),(0,r.kt)("h2",p({},{id:"foreachu"}),"forEachU"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEachU: (t<'k, 'v, 'id>, (. 'k, 'v) => unit) => unit\n")),(0,r.kt)("h2",p({},{id:"foreach"}),"forEach"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEach: (t<'k, 'v, 'id>, ('k, 'v) => unit) => unit\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"forEach(m, f)")," applies ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," to all bindings in map ",(0,r.kt)("inlineCode",{parentName:"p"},"m"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," receives the ",(0,r.kt)("inlineCode",{parentName:"p"},"'k")," as first argument, and the associated value as second argument. The bindings are passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," in increasing order with respect to the ordering over the type of the keys."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = (a, b) => Pervasives.compare(a, b)\n})\n\nlet s0 = Belt.Map.fromArray(~id=module(IntCmp), [(4, "4"), (1, "1"), (2, "2"), (3, "")])\n\nlet acc = ref(list{})\n\nBelt.Map.forEach(s0, (k, v) => acc := list{(k, v), ...acc.contents})\n\nacc.contents == list{(4, "4"), (3, "3"), (2, "2"), (1, "1")}\n')),(0,r.kt)("h2",p({},{id:"reduceu"}),"reduceU"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduceU: (t<'k, 'v, 'id>, 'acc, (. 'acc, 'k, 'v) => 'acc) => 'acc\n")),(0,r.kt)("h2",p({},{id:"reduce"}),"reduce"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduce: (t<'k, 'v, 'id>, 'acc, ('acc, 'k, 'v) => 'acc) => 'acc\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"reduce(m, a, f)")," computes ",(0,r.kt)("inlineCode",{parentName:"p"},"(f(kN, dN) ... (f(k1, d1, a))...)"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"k1 ... kN")," are the keys of all bindings in m (in increasing order), and ",(0,r.kt)("inlineCode",{parentName:"p"},"d1 ... dN")," are the associated data."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = (a, b) => Pervasives.compare(a, b)\n})\n\nlet s0 = Belt.Map.fromArray(~id=module(IntCmp), [(4, "4"), (1, "1"), (2, "2"), (3, "3")])\n\nBelt.Map.reduce(s0, list{}, (acc, k, v) => list{\n  (k, v),\n  ...acc,\n}) /* [(4, "4"), (3, "3"), (2, "2"), (1, "1"), 0] */\n')),(0,r.kt)("h2",p({},{id:"everyu"}),"everyU"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let everyU: (t<'k, 'v, 'id>, (. 'k, 'v) => bool) => bool\n")),(0,r.kt)("h2",p({},{id:"every"}),"every"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let every: (t<'k, 'v, 'id>, ('k, 'v) => bool) => bool\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"every(m, p)")," checks if all the bindings of the map satisfy the predicate ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),". Order unspecified"),(0,r.kt)("h2",p({},{id:"someu"}),"someU"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let someU: (t<'k, 'v, 'id>, (. 'k, 'v) => bool) => bool\n")),(0,r.kt)("h2",p({},{id:"some"}),"some"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let some: (t<'k, 'v, 'id>, ('k, 'v) => bool) => bool\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"some(m, p)")," checks if at least one binding of the map satisfy the predicate ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),". Order unspecified"),(0,r.kt)("h2",p({},{id:"size"}),"size"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let size: t<'k, 'v, 'id> => int\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"size(s)")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = (a, b) => Pervasives.compare(a, b)\n})\n\nBelt.Map.size(Belt.Map.fromArray([(2, "2"), (2, "1"), (3, "3")], ~id=module(IntCmp))) == 2\n')),(0,r.kt)("h2",p({},{id:"toarray"}),"toArray"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toArray: t<'k, 'v, 'id> => array<('k, 'v)>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"toArray(s)")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = (a, b) => Pervasives.compare(a, b)\n})\n\nBelt.Map.toArray(Belt.Map.fromArray([(2, "2"), (1, "1"), (3, "3")], ~id=module(IntCmp))) == [\n    (1, "1"),\n    (2, "2"),\n    (3, "3"),\n  ]\n')),(0,r.kt)("h2",p({},{id:"tolist"}),"toList"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toList: t<'k, 'v, 'id> => list<('k, 'v)>\n")),(0,r.kt)("p",null,"In increasing order."),(0,r.kt)("p",null,"See ",(0,r.kt)("inlineCode",{parentName:"p"},"Belt.Map.toArray")),(0,r.kt)("h2",p({},{id:"fromarray"}),"fromArray"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromArray: (array<('k, 'v)>, ~id: id<'k, 'id>) => t<'k, 'v, 'id>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fromArray(kvs, ~id);")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = (a, b) => Pervasives.compare(a, b)\n})\n\nBelt.Map.toArray(Belt.Map.fromArray([(2, "2"), (1, "1"), (3, "3")], ~id=module(IntCmp))) == [\n    (1, "1"),\n    (2, "2"),\n    (3, "3"),\n  ]\n')),(0,r.kt)("h2",p({},{id:"keystoarray"}),"keysToArray"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keysToArray: t<'k, 'v, 'id> => array<'k>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"keysToArray(s);")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = (a, b) => Pervasives.compare(a, b)\n})\n\nBelt.Map.keysToArray(Belt.Map.fromArray([(2, "2"), (1, "1"), (3, "3")], ~id=module(IntCmp))) == [\n    1,\n    2,\n    3,\n  ]\n')),(0,r.kt)("h2",p({},{id:"valuestoarray"}),"valuesToArray"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let valuesToArray: t<'k, 'v, 'id> => array<'v>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"valuesToArray(s);")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = (a, b) => Pervasives.compare(a, b)\n})\n\nBelt.Map.valuesToArray(\n  Belt.Map.fromArray([(2, "2"), (1, "1"), (3, "3")], ~id=module(IntCmp)),\n) == ["1", "2", "3"]\n')),(0,r.kt)("h2",p({},{id:"minkey"}),"minKey"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minKey: t<'k, 'a, 'b> => option<'k>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"minKey(s)")," returns the minimum key, None if not exist."),(0,r.kt)("h2",p({},{id:"minkeyundefined"}),"minKeyUndefined"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minKeyUndefined: t<'k, 'a, 'b> => Js.undefined<'k>\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("inlineCode",{parentName:"p"},"Belt.Map.minKey")),(0,r.kt)("h2",p({},{id:"maxkey"}),"maxKey"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maxKey: t<'k, 'a, 'b> => option<'k>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"maxKey(s)")," returns the maximum key, None if not exist."),(0,r.kt)("h2",p({},{id:"maxkeyundefined"}),"maxKeyUndefined"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maxKeyUndefined: t<'k, 'a, 'b> => Js.undefined<'k>\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("inlineCode",{parentName:"p"},"Belt.Map.maxKey")),(0,r.kt)("h2",p({},{id:"minimum"}),"minimum"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minimum: t<'k, 'v, 'a> => option<('k, 'v)>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"minimum(s)")," returns the minimum key value pair, None if not exist"),(0,r.kt)("h2",p({},{id:"minundefined"}),"minUndefined"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minUndefined: t<'k, 'v, 'a> => Js.undefined<('k, 'v)>\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("inlineCode",{parentName:"p"},"Belt.Map.minimum")),(0,r.kt)("h2",p({},{id:"maximum"}),"maximum"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maximum: t<'k, 'v, 'a> => option<('k, 'v)>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"maximum(s)")," returns the maximum key value pair, None if not exist."),(0,r.kt)("h2",p({},{id:"maxundefined"}),"maxUndefined"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maxUndefined: t<'k, 'v, 'a> => Js.undefined<('k, 'v)>\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("inlineCode",{parentName:"p"},"Belt.Map.maximum")),(0,r.kt)("h2",p({},{id:"get"}),"get"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let get: (t<'k, 'v, 'id>, 'k) => option<'v>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"get(s, k)")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = (a, b) => Pervasives.compare(a, b)\n})\n\nBelt.Map.get(Belt.Map.fromArray([(2, "2"), (1, "1"), (3, "3")], ~id=module(IntCmp)), 2) ==\n  Some("2")\n\nBelt.Map.get(Belt.Map.fromArray([(2, "2"), (1, "1"), (3, "3")], ~id=module(IntCmp)), 2) == None\n')),(0,r.kt)("h2",p({},{id:"getundefined"}),"getUndefined"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getUndefined: (t<'k, 'v, 'id>, 'k) => Js.undefined<'v>\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("inlineCode",{parentName:"p"},"Belt.Map.get")),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," when not found"),(0,r.kt)("h2",p({},{id:"getwithdefault"}),"getWithDefault"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getWithDefault: (t<'k, 'v, 'id>, 'k, 'v) => 'v\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getWithDefault(s, k, default)")),(0,r.kt)("p",null,"See ",(0,r.kt)("inlineCode",{parentName:"p"},"Belt.Map.get")),(0,r.kt)("p",null,"Returns default when ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," is not found."),(0,r.kt)("h2",p({},{id:"getexn"}),"getExn"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getExn: (t<'k, 'v, 'id>, 'k) => 'v\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getExn(s, k)")),(0,r.kt)("p",null,"See ",(0,r.kt)("inlineCode",{parentName:"p"},"Belt.Map.getExn")),(0,r.kt)("p",null,"raise when ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," not exist"),(0,r.kt)("h2",p({},{id:"remove"}),"remove"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let remove: (t<'k, 'v, 'id>, 'k) => t<'k, 'v, 'id>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"remove(m, x)")," when ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," is not in ",(0,r.kt)("inlineCode",{parentName:"p"},"m"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," is returned reference unchanged."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = (a, b) => Pervasives.compare(a, b)\n})\n\nlet s0 = Belt.Map.fromArray([(2, "2"), (1, "1"), (3, "3")], ~id=module(IntCmp))\n\nlet s1 = Belt.Map.remove(s0, 1)\n\nlet s2 = Belt.Map.remove(s1, 1)\n\ns1 === s2\n\nBelt.Map.keysToArray(s1) == [2, 3]\n')),(0,r.kt)("h2",p({},{id:"removemany"}),"removeMany"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let removeMany: (t<'k, 'v, 'id>, array<'k>) => t<'k, 'v, 'id>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"removeMany(s, xs)")),(0,r.kt)("p",null,"Removing each of ",(0,r.kt)("inlineCode",{parentName:"p"},"xs")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),", note unlike ",(0,r.kt)("inlineCode",{parentName:"p"},"Belt.Map.remove"),", the reference of return value might be changed even if none in ",(0,r.kt)("inlineCode",{parentName:"p"},"xs")," exists ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),"."),(0,r.kt)("h2",p({},{id:"set"}),"set"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let set: (t<'k, 'v, 'id>, 'k, 'v) => t<'k, 'v, 'id>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"set(m, x, y)")," returns a map containing the same bindings as ",(0,r.kt)("inlineCode",{parentName:"p"},"m"),", with a new binding of ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"y"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," was already bound in ",(0,r.kt)("inlineCode",{parentName:"p"},"m"),", its previous binding disappears."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = (a, b) => Pervasives.compare(a, b)\n})\n\nlet s0 = Belt.Map.fromArray([(2, "2"), (1, "1"), (3, "3")], ~id=module(IntCmp))\n\nlet s1 = Belt.Map.set(s0, 2, "3")\n\nBelt.Map.valuesToArray(s1) == ["1", "3", "3"]\n')),(0,r.kt)("h2",p({},{id:"updateu"}),"updateU"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let updateU: (t<'k, 'v, 'id>, 'k, (. option<'v>) => option<'v>) => t<'k, 'v, 'id>\n")),(0,r.kt)("h2",p({},{id:"update"}),"update"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let update: (t<'k, 'v, 'id>, 'k, option<'v> => option<'v>) => t<'k, 'v, 'id>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"update(m, x, f)")," returns a map containing the same bindings as ",(0,r.kt)("inlineCode",{parentName:"p"},"m"),", except for the binding of ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),". Depending on the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"f(get(m, x))"),", the binding of ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," is added, removed or updated. If ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),", the binding is removed if it exists; otherwise, if ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"Some(z)")," then ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," is associated to ",(0,r.kt)("inlineCode",{parentName:"p"},"z")," in the resulting map."),(0,r.kt)("h2",p({},{id:"mergemany"}),"mergeMany"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mergeMany: (t<'k, 'v, 'id>, array<('k, 'v)>) => t<'k, 'v, 'id>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mergeMany(s, xs)")),(0,r.kt)("p",null,"Adding each of ",(0,r.kt)("inlineCode",{parentName:"p"},"xs")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),", note unlike ",(0,r.kt)("inlineCode",{parentName:"p"},"add"),", the reference of return value might be changed even if all values in ",(0,r.kt)("inlineCode",{parentName:"p"},"xs")," exist ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),"."),(0,r.kt)("h2",p({},{id:"mergeu"}),"mergeU"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mergeU: (\n  t<'k, 'v, 'id>,\n  t<'k, 'v2, 'id>,\n  (. 'k, option<'v>, option<'v2>) => option<'v3>,\n) => t<'k, 'v3, 'id>\n")),(0,r.kt)("h2",p({},{id:"merge"}),"merge"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let merge: (\n  t<'k, 'v, 'id>,\n  t<'k, 'v2, 'id>,\n  ('k, option<'v>, option<'v2>) => option<'v3>,\n) => t<'k, 'v3, 'id>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"merge(m1, m2, f)")," computes a map whose keys is a subset of keys of ",(0,r.kt)("inlineCode",{parentName:"p"},"m1")," and of ",(0,r.kt)("inlineCode",{parentName:"p"},"m2"),". The presence of each such binding, and the corresponding value, is determined with the function ",(0,r.kt)("inlineCode",{parentName:"p"},"f"),"."),(0,r.kt)("h2",p({},{id:"keepu"}),"keepU"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keepU: (t<'k, 'v, 'id>, (. 'k, 'v) => bool) => t<'k, 'v, 'id>\n")),(0,r.kt)("h2",p({},{id:"keep"}),"keep"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keep: (t<'k, 'v, 'id>, ('k, 'v) => bool) => t<'k, 'v, 'id>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"keep(m, p)")," returns the map with all the bindings in m that satisfy predicate ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),"."),(0,r.kt)("h2",p({},{id:"partitionu"}),"partitionU"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let partitionU: (t<'k, 'v, 'id>, (. 'k, 'v) => bool) => (t<'k, 'v, 'id>, t<'k, 'v, 'id>)\n")),(0,r.kt)("h2",p({},{id:"partition"}),"partition"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let partition: (t<'k, 'v, 'id>, ('k, 'v) => bool) => (t<'k, 'v, 'id>, t<'k, 'v, 'id>)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"partition(m, p)")," returns a pair of maps ",(0,r.kt)("inlineCode",{parentName:"p"},"(m1, m2)"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"m1")," contains all the bindings of ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," that satisfy the predicate ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"m2")," is the map with all the bindings of ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," that do not satisfy ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),"."),(0,r.kt)("h2",p({},{id:"split"}),"split"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let split: (t<'k, 'v, 'id>, 'k) => ((t<'k, 'v, 'id>, t<'k, 'v, 'id>), option<'v>)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"split(x, m)")," returns a tuple ",(0,r.kt)("inlineCode",{parentName:"p"},"(l, r)"),", data, where ",(0,r.kt)("inlineCode",{parentName:"p"},"l")," is the map with all the bindings of ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," whose 'k is strictly less than ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),"; ",(0,r.kt)("inlineCode",{parentName:"p"},"r")," is the map with all the bindings of m whose 'k is strictly greater than ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),"; ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," contains no binding for ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"Some(v)")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," binds ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),"."),(0,r.kt)("h2",p({},{id:"mapu"}),"mapU"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapU: (t<'k, 'v, 'id>, (. 'v) => 'v2) => t<'k, 'v2, 'id>\n")),(0,r.kt)("h2",p({},{id:"map-1"}),"map"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let map: (t<'k, 'v, 'id>, 'v => 'v2) => t<'k, 'v2, 'id>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"map(m, f) returns a map with same domain as"),"m",(0,r.kt)("inlineCode",{parentName:"p"},", where the associated value"),"a",(0,r.kt)("inlineCode",{parentName:"p"},"of all bindings of"),"m",(0,r.kt)("inlineCode",{parentName:"p"},"has been replaced by the result of the application of"),"f",(0,r.kt)("inlineCode",{parentName:"p"},"to"),"a",(0,r.kt)("inlineCode",{parentName:"p"},". The bindings are passed to"),"f` in increasing order with respect to the ordering over the type of the keys."),(0,r.kt)("h2",p({},{id:"mapwithkeyu"}),"mapWithKeyU"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapWithKeyU: (t<'k, 'v, 'id>, (. 'k, 'v) => 'v2) => t<'k, 'v2, 'id>\n")),(0,r.kt)("h2",p({},{id:"mapwithkey"}),"mapWithKey"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapWithKey: (t<'k, 'v, 'id>, ('k, 'v) => 'v2) => t<'k, 'v2, 'id>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mapWithKey(m, f)")),(0,r.kt)("p",null,"The same as ",(0,r.kt)("inlineCode",{parentName:"p"},"Belt.Map.map")," except that ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," is supplied with one more argument: the key."),(0,r.kt)("h2",p({},{id:"getdata"}),"getData"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getData: t<'k, 'v, 'id> => Belt_MapDict.t<'k, 'v, 'id>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getData(s0)")),(0,r.kt)("p",null,"Advanced usage only"),(0,r.kt)("p",null,"Returns the raw data (detached from comparator), but its type is still manifested, so that user can pass identity directly without boxing."),(0,r.kt)("h2",p({},{id:"getid"}),"getId"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getId: t<'k, 'v, 'id> => id<'k, 'id>\n")),(0,r.kt)("p",null,"Advanced usage only"),(0,r.kt)("p",null,"Returns the identity of s0."),(0,r.kt)("h2",p({},{id:"packiddata"}),"packIdData"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let packIdData: (~id: id<'k, 'id>, ~data: Belt_MapDict.t<'k, 'v, 'id>) => t<'k, 'v, 'id>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"packIdData(~id, ~data)")),(0,r.kt)("p",null,"Advanced usage only"),(0,r.kt)("p",null,"Returns the packed collection."))}m.isMDXComponent=!0,m.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v9.0.0/api/belt/map.mdx"}},52547:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v9.0.0/api/belt/map",function(){return n(57090)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=52547,e(e.s=t);var t}));var t=e.O();_N_E=t}]);