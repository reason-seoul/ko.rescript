(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[87483],{17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},72969:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a=n(96156),r=n(17375),i=(n(67294),n(3905));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",o(o(o({},s),n),{},{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",o({},{id:"belt"}),"Belt"),(0,i.kt)("p",null,"The preferred standard library for Reason when targeting JavaScript\n(browser, node, React Native)."),(0,i.kt)("p",null,"It is recommended to use the modules from Belt rather than from the\nOCaml standard library or from the ",(0,i.kt)("a",o({parentName:"p"},{href:"./js"}),"Js")," namespace, e.g. use\n",(0,i.kt)("a",o({parentName:"p"},{href:"./belt/list"}),"Belt.List")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," or ",(0,i.kt)("a",o({parentName:"p"},{href:"./js/list"}),"Js.List"),"\nand ",(0,i.kt)("a",o({parentName:"p"},{href:"./belt/array"}),"Belt.Array")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"Array")," or ",(0,i.kt)("a",o({parentName:"p"},{href:"./js/array"}),"Js.Array"),"."),(0,i.kt)("p",null,"Belt is currently mostly covering collection types. It has no string or\ndate functions yet, although Belt.String is in the works. (In the meantime,\nuse ",(0,i.kt)("a",o({parentName:"p"},{href:"./js/string"}),"Js.String")," for string functions and ",(0,i.kt)("a",o({parentName:"p"},{href:"./js/date"}),"Js.Date"),"\nfor date functions.)"),(0,i.kt)("h2",o({},{id:"motivation"}),"Motivation"),(0,i.kt)("p",null,"Belt aims to improve the user experience for Reason developers targeting\nJavaScript as well as for JavaScript developers learning Reason,\nsince the original OCaml standard library was not written with JS in mind."),(0,i.kt)("p",null,"To achieve this, Belt provides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A consistent naming convention familiar to JS developers (",(0,i.kt)("a",o({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Camel_case"}),"camelCase"),")"),(0,i.kt)("li",{parentName:"ul"},"A consistent argument order familiar to JS Developers (see ",(0,i.kt)("a",o({parentName:"li"},{href:"#Pipe%20First"}),"Pipe First"),")"),(0,i.kt)("li",{parentName:"ul"},'Safety by default: A Belt function will never throw exceptions, unless it is\nindicated explicitly in the function name (suffix "Exn").'),(0,i.kt)("li",{parentName:"ul"},"Better performance and smaller code size running on the JS platform"),(0,i.kt)("li",{parentName:"ul"},"Ready for ",(0,i.kt)("a",o({parentName:"li"},{href:"https://webpack.js.org/guides/tree-shaking/"}),"Tree Shaking"))),(0,i.kt)("h2",o({},{id:"usage"}),"Usage"),(0,i.kt)("p",null,"To use modules from Belt, either refer to them by their fully qualified name\n(",(0,i.kt)("inlineCode",{parentName:"p"},"Belt.List"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Belt.Array")," etc.) or open the ",(0,i.kt)("inlineCode",{parentName:"p"},"Belt")," module by putting"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{}),"open Belt;\n")),(0,i.kt)("p",null,"at the top of your source files. After opening Belt this way,\n",(0,i.kt)("inlineCode",{parentName:"p"},"Array")," will refer to ",(0,i.kt)("inlineCode",{parentName:"p"},"Belt.Array"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," will refer to ",(0,i.kt)("inlineCode",{parentName:"p"},"Belt.List")," etc.\nin the source code below."),(0,i.kt)("p",null,"If you want to open Belt globally for all files in your project instead,\nyou can put"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{}),'  "bsc-flags": [ "-open Belt" ],\n')),(0,i.kt)("p",null,"into your ",(0,i.kt)("inlineCode",{parentName:"p"},"bsconfig.json"),"."),(0,i.kt)("h2",o({},{id:"pipe-first"}),"Pipe First"),(0,i.kt)("p",null,'The argument order of Belt functions follows the "Data-First" convention.\nI.e. the object they act on (e.g. a list or an array) will always be\nthe first argument.'),(0,i.kt)("p",null,"This way, the ",(0,i.kt)("em",{parentName:"p"},"pipe first operator")," ",(0,i.kt)("inlineCode",{parentName:"p"},"->")," can be used nicely with the Belt APIs,\ngiving a similar feel to method invocations in OOP languages and allowing\neasy chaining of Belt API calls."),(0,i.kt)("p",null,"For more information about the data-first argument order and the\ntrade-offs compared to data-last, see\n",(0,i.kt)("a",o({parentName:"p"},{href:"https://www.javierchavarri.com/data-first-and-data-last-a-comparison/"}),"this blog post"),"."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{}),'let someNumbers = [|1, 1, 4, 2, 3, 6, 3, 4, 2|];\n\nlet greaterThan2UniqueAndSorted =\n  someNumbers\n  ->Belt.Array.keep(x => x > 2)\n  /* convert to and from set to make values unique */\n  ->Belt.Set.Int.fromArray\n  ->Belt.Set.Int.toArray; /* output is already sorted */\n\nJs.log2("result", greaterThan2UniqueAndSorted);\n')),(0,i.kt)("h2",o({},{id:"curried-vs-uncurried-callbacks"}),"Curried vs. Uncurried Callbacks"),(0,i.kt)("p",null,"For functions taking a callback parameter, there are usually two versions\navailable:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"curried (no suffix)"),(0,i.kt)("li",{parentName:"ul"},"uncurried (suffixed with ",(0,i.kt)("inlineCode",{parentName:"li"},"U"),")")),(0,i.kt)("p",null,"E.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{}),"let forEach: (t('a), 'a => unit) => unit;\n\nlet forEachU: (t('a), (. 'a) => unit) => unit;\n")),(0,i.kt)("p",null,"The uncurried version will be faster in some cases, but for simplicity we\nrecommend to stick with the curried version unless you know\nwhat you are doing and really need the optimization."),(0,i.kt)("p",null,"The two versions can be invoked as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{}),'["a", "b", "c"]->Belt.List.forEach(x => Js.log(x));\n\n["a", "b", "c"]->Belt.List.forEachU((. x) => Js.log(x));\n')),(0,i.kt)("h2",o({},{id:"specialized-collections"}),"Specialized Collections"),(0,i.kt)("p",null,"For collections types like set or map, Belt provides both a generic module\nas well as specialized, more efficient implementations for string and int keys."),(0,i.kt)("p",null,"For example, Belt has the following set modules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",o({parentName:"li"},{href:"./belt/set"}),"Belt.Set")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",o({parentName:"li"},{href:"./belt/set-int"}),"Belt.Set.Int")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",o({parentName:"li"},{href:"./belt/set-string"}),"Belt.Set.String"))),(0,i.kt)("h2",o({},{id:"implementation-details"}),"Implementation Details"),(0,i.kt)("h3",o({},{id:"array-access-runtime-safety"}),"Array access runtime safety"),(0,i.kt)("p",null,"One common confusion comes from the way Belt handles array access. It differs from than the default standard library's."),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-reason"}),'let letters = [|"a", "b", "c"|];\nlet a = letters[0]; /* a == "a" */\nlet capitalA = Js.String.toUpperCase(a);\nlet k = letters[10]; /* Raises an exception! The 10th index doesn\'t exist. */\n')),(0,i.kt)("p",null,"Because Belt avoids exceptions and returns ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," instead, this code behaves differently:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-reason"}),'open Belt;\nlet letters = [|"a", "b", "c"|];\nlet a = letters[0]; /* a == Some("a") */\nlet captialA = Js.String.toUpperCase(a); /* Type error! This code will not compile. */\nlet k = letters[10]; /* k == None */\n')),(0,i.kt)("p",null,"Although we've fixed the problem where ",(0,i.kt)("inlineCode",{parentName:"p"},"k")," raises an exception, we now have a type error when trying to capitalize ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),". There are a few things going on here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reason transforms array index access to the function ",(0,i.kt)("inlineCode",{parentName:"li"},"Array.get"),". So ",(0,i.kt)("inlineCode",{parentName:"li"},"letters[0]")," is the same as ",(0,i.kt)("inlineCode",{parentName:"li"},"Array.get(letters, 0)"),". "),(0,i.kt)("li",{parentName:"ul"},"The compiler uses whichever ",(0,i.kt)("inlineCode",{parentName:"li"},"Array")," module is in scope. If you ",(0,i.kt)("inlineCode",{parentName:"li"},"open Belt"),", then it uses ",(0,i.kt)("inlineCode",{parentName:"li"},"Belt.Array"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Belt.Array.get")," returns values wrapped in options, so ",(0,i.kt)("inlineCode",{parentName:"li"},'letters[0] == Some("a")'),". ")),(0,i.kt)("p",null,"Fortunately, this is easy to fix:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-reason",metastring:"example",example:!0}),'open Belt;\nlet letters = [|"a", "b", "c"|];\nlet a = letters[0];\n\n/* Use a switch statement: */\nlet capitalA =\n  switch(a) {\n    | Some(a) => Some(Js.String.toUpperCase(a))\n    | None => None\n  };\n  \n/* Alternatively, use the Option module: */\nlet capitalA = a->Option.map(Js.String.toUpperCase);\n\nlet k = letters[10]; /* k == None */\n')),(0,i.kt)("p",null,"With that little bit of tweaking, our code now compiles successfully and is 100% free of runtime errors!"),(0,i.kt)("h3",o({},{id:"a-special-encoding-for-collection-safety"}),"A special encoding for collection safety"),(0,i.kt)("p",null,"When we create a collection library for a custom data type we need a way to\nprovide a comparator function. Take Set for example, suppose its element type\nis a pair of ints, it needs a custom compare function that takes two tuples and\nreturns their order. The Set could not just be typed as Set.t (int ","*"," int) , its\ncustomized compare function needs to manifest itself in the signature,\notherwise, if the user creates another customized compare function, the two\ncollection could mix which would result in runtime error."),(0,i.kt)("p",null,"The original OCaml stdlib solved the problem using functor which creates a big\nclosure at runtime and makes dead code elimination much harder. We use a\nphantom type to solve the problem:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{}),"module Comparable1 =\n  Belt.Id.MakeComparable(\n    {\n      type t = (int, int);\n      let cmp = ((a0, a1), (b0, b1)) =>\n        switch (Pervasives.compare(a0, b0)) {\n        | 0 => Pervasives.compare(a1, b1)\n        | c => c\n        };\n    }\n  );\n\nlet mySet1 = Belt.Set.make(~id=(module Comparable1));\n\nmodule Comparable2 =\n  Belt.Id.MakeComparable(\n    {\n      type t = (int, int);\n      let cmp = ((a0, a1), (b0, b1)) =>\n        switch (Pervasives.compare(a0, b0)) {\n        | 0 => Pervasives.compare(a1, b1)\n        | c => c\n        };\n    }\n  );\n\nlet mySet2 = Belt.Set.make(~id=(module Comparable2));\n")),(0,i.kt)("p",null,"Here, the compiler would infer mySet1 and mySet2 having different type, so e.g.\na ",(0,i.kt)("inlineCode",{parentName:"p"},"merge")," operation that tries to merge these two sets will correctly fail."),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{}),"let mySet1: t((int, int), Comparable1.identity);\nlet mySet2: t((int, int), Comparable2.identity);\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Comparable1.identity")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Comparable2.identity")," are not the same using our\nencoding scheme."))}p.isMDXComponent=!0,p.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v8.0.0/api/belt.mdx"}},41411:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v8.0.0/api/belt",function(){return n(72969)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=41411,e(e.s=t);var t}));var t=e.O();_N_E=t}]);