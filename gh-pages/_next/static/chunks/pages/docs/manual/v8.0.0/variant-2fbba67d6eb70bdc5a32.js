(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56958],{17375:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,{Z:function(){return n}})},88150:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var n=a(17375),r=a(96156),o=(a(67294),a(3905));function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var s,p=(s="CodeTab",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",i({},e))}),u={};function c(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",i(i(i({},u),a),{},{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",i({},{id:"variant"}),"Variant"),(0,o.kt)("p",null,"So far, most of ReScript's data structures might look familiar to you. This section introduces an extremely important, and perhaps unfamiliar, data structure: variant."),(0,o.kt)("p",null,'Most data structures in most languages are about "this ',(0,o.kt)("strong",{parentName:"p"},"and"),' that". A variant allows us to express "this ',(0,o.kt)("strong",{parentName:"p"},"or"),' that".'),(0,o.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-re"}),"type myResponse =\n  | Yes\n  | No\n  | PrettyMuch;\n\nlet areYouCrushingIt = Yes;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-ml"}),"type myResponse =\n  | Yes\n  | No\n  | PrettyMuch\n\nlet areYouCrushingIt = Yes\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"var areYouCrushingIt = /* Yes */0;\n"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"myResponse")," is a variant type with the cases ",(0,o.kt)("inlineCode",{parentName:"p"},"Yes"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"No")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PrettyMuch"),', which are called "variant constructors" (or "variant tag"). The ',(0,o.kt)("inlineCode",{parentName:"p"},"|")," bar separates each constructor."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": a variant's constructors need to be capitalized."),(0,o.kt)("h2",i({},{id:"variant-needs-an-explicit-definition"}),"Variant Needs an Explicit Definition"),(0,o.kt)("p",null,"If the variant you're using is in a different file, bring it into scope like you'd do ",(0,o.kt)("a",i({parentName:"p"},{href:"record.md#record-needs-an-explicit-definition"}),"for a record"),":"),(0,o.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-re"}),"// Zoo.re\ntype animal = Dog | Cat | Bird;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-ml"}),"(* Zoo.re *)\ntype animal = Dog | Cat | Bird\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,o.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-re"}),"// Example.re\nlet pet: Zoo.animal = Dog; // preferred\n// or\nlet pet2 = Zoo.Dog;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-ml"}),"(* Example.re *)\nlet pet: Zoo.animal = Dog (* preferred *)\n(* or *)\nlet pet2 = Zoo.Dog\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"var pet = /* Dog */0;\nvar pet2 = /* Dog */0;\n"))),(0,o.kt)("h2",i({},{id:"constructor-arguments"}),"Constructor Arguments"),(0,o.kt)("p",null,"A variant's constructors can hold extra data separated by comma."),(0,o.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-re"}),"type account =\n  | None\n  | Instagram(string)\n  | Facebook(string, int);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-ml"}),"type account =\n  | None\n  | Instagram of string\n  | Facebook of string * int\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,o.kt)("p",null,"Here, ",(0,o.kt)("inlineCode",{parentName:"p"},"Instagram")," holds a ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Facebook")," holds a ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," and an ",(0,o.kt)("inlineCode",{parentName:"p"},"int"),". Usage:"),(0,o.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-re"}),'let myAccount = Facebook("Josh", 26);\nlet friendAccount = Instagram("Jenny");\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-ml"}),'let myAccount =\n  Facebook ("Josh", 26)\nlet friendAccount =\n  Instagram "Jenny"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var myAccount = {\n  TAG: /* Facebook */1,\n  _0: "Josh",\n  _1: 26\n};\nvar friendAccount = {\n  TAG: /* Instagram */0,\n  _0: "Jenny"\n};\n'))),(0,o.kt)("h3",i({},{id:"records-in-variants"}),"Records in Variants"),(0,o.kt)("p",null,"You can use a record type in a variant:"),(0,o.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-re"}),"type idType = {name: string, password: string};\n\ntype user =\n  | Number(int)\n  | Id(idType);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-ml"}),"type idType = {name: string; password: string}\n\ntype user =\n  | Number of int\n  | Id of idType\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,o.kt)("p",null,"If the record type is used only in the variant definition, you may put it in line:"),(0,o.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-re"}),"type user =\n  | Number(int)\n  | Id({name: string, password: string});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-ml"}),"type user =\n  | Number of int\n  | Id of {name: string; password: string}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,o.kt)("h3",i({},{id:"pattern-matching-on-variant"}),"Pattern Matching On Variant"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",i({parentName:"p"},{href:"pattern-matching-destructuring.md"}),"Pattern Matching/Destructuring")," section later."),(0,o.kt)("h2",i({},{id:"tips--tricks"}),"Tips & Tricks"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Be careful")," not to confuse a constructor carrying 2 arguments with a constructor carrying a single tuple argument:"),(0,o.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-re"}),"type account =\n  | Facebook(string, int); // 2 arguments\ntype account2 =\n  | Instagram((string, int)); // 1 argument - happens to be a 2-tuple\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-ml"}),"type account =\n  | Facebook of string * int (* 2 arguments *)\ntype account2 =\n  | Instagram of (string * int) (* 1 argument - happens to be a 2-tuple *)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"// Empty output\n")),(0,o.kt)("h3",i({},{id:"variants-must-have-constructors"}),"Variants Must Have Constructors")),(0,o.kt)("p",null,"If you come from an untyped language, you might be tempted to try ",(0,o.kt)("inlineCode",{parentName:"p"},"type myType = int | string"),". This isn't possible in ReScript; you'd have to give each branch a constructor: ",(0,o.kt)("inlineCode",{parentName:"p"},"type myType = Int(int) | String(string)"),". The former looks nice, but causes lots of trouble down the line."),(0,o.kt)("h3",i({},{id:"interop-with-javascript"}),"Interop with JavaScript"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This section assumes knowledge about our JavaScript interop. Skip this if you haven't felt the itch to use variants for wrapping JS functions yet"),"."),(0,o.kt)("p",null,"Quite a few JS libraries use functions that can accept many types of arguments. In these cases, it's very tempting to model them as variants. For example, suppose there's a ",(0,o.kt)("inlineCode",{parentName:"p"},"myLibrary.draw")," JS function that takes in either a ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," or a ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),". You might be tempted to bind it like so:"),(0,o.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-re"}),'// reserved for internal usage\n[@bs.module "myLibrary"] external draw: \'a => unit = "draw";\n\ntype animal =\n  | MyFloat(float)\n  | MyString(string);\n\nlet betterDraw = (animal) =>\n  switch (animal) {\n  | MyFloat(f) => draw(f)\n  | MyString(s) => draw(s)\n  };\n\nbetterDraw(MyFloat(1.5));\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-ml"}),'(* reserved for internal usage *)\nexternal draw: \'a => unit = "draw" [@@bs.module "myLibrary"]\n\ntype animal =\n  | MyFloat of float\n  | MyString of string\n\nlet betterDraw animal =\n  match animal with\n  | MyFloat f -> draw f\n  | MyString s -> draw s\n\nlet () = betterDraw (MyFloat 1.5)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var MyLibrary = require("myLibrary");\n\nfunction betterDraw(animal) {\n  MyLibrary.draw(animal._0);\n}\n\nbetterDraw({\n  TAG: /* MyFloat */0,\n  _0: 1.5\n});\n'))),(0,o.kt)("p",null,"You could definitely do that, but there are better ways! For example, define two ",(0,o.kt)("inlineCode",{parentName:"p"},"external"),"s that both compile to the same JS call:"),(0,o.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-re"}),'[@bs.module "myLibrary"] external drawFloat: float => unit = "draw";\n[@bs.module "myLibrary"] external drawString: string => unit = "draw";\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-ml"}),'external drawFloat: float -> unit = "draw" [@@bs.module "myLibrary"]\nexternal drawString: string -> unit = "draw" [@@bs.module "myLibrary"]\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,o.kt)("p",null,"ReScript also provides ",(0,o.kt)("a",i({parentName:"p"},{href:"bind-to-js-function.md#modeling-polymorphic-function"}),"a few other ways")," to do this."),(0,o.kt)("h3",i({},{id:"variant-types-are-found-by-field-name"}),"Variant Types Are Found By Field Name"),(0,o.kt)("p",null,"Please refer to this ",(0,o.kt)("a",i({parentName:"p"},{href:"record#record-types-are-found-by-field-name"}),"record section"),". Variants are the same: a function can't accept an arbitrary constructor shared by two different variants. Again, such feature exists; it's called a polymorphic variant. We'll talk about this in the future =)."),(0,o.kt)("h2",i({},{id:"design-decisions"}),"Design Decisions"),(0,o.kt)("p",null,"Variants, in their many forms (polymorphic variant, open variant, GADT, etc.), are likely ",(0,o.kt)("em",{parentName:"p"},"the")," feature of a type system such as ReScript's. The aforementioned ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," variant, for example, obliterates the need for nullable types, a major source of bugs in other languages. Philosophically speaking, a problem is composed of many possible branches/conditions. Mishandling these conditions is the majority of what we call bugs. ",(0,o.kt)("strong",{parentName:"p"},"A type system doesn't magically eliminate bugs; it points out the unhandled conditions and asks you to cover them"),"*",'. The ability to model "this or that" correctly is crucial.'),(0,o.kt)("p",null,"For example, some folks wonder how the type system can safely eliminate badly formatted JSON data from propagating into their program. They don't, not by themselves! But if the parser returns the ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," type ",(0,o.kt)("inlineCode",{parentName:"p"},"None | Some(actualData)"),", then you'd have to handle the ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," case explicitly in later call sites. That's all there is."),(0,o.kt)("p",null,"Performance-wise, a variant can potentially tremendously speed up your program's logic. Here's a piece of JavaScript:"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"let data = 'dog'\nif (data === 'dog') {\n  ...\n} else if (data === 'cat') {\n  ...\n} else if (data === 'bird') {\n  ...\n}\n")),(0,o.kt)("p",null,"There's a linear amount of branch checking here (",(0,o.kt)("inlineCode",{parentName:"p"},"O(n)"),"). Compare this to using a ReScript variant:"),(0,o.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-re"}),'type animal = Dog | Cat | Bird;\nlet data = Dog\nswitch (data) {\n| Dog => Js.log("Wof")\n| Cat => Js.log("Meow")\n| Bird => Js.log("Kashiiin")\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-ml"}),'type animal = Dog | Cat | Bird\nlet data = Dog\nlet () =\n  match data with\n  | Dog -> Js.log "Wof"\n  | Cat -> Js.log "Meow"\n  | Bird -> Js.log "Kashiiin"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'console.log("Wof");\n\nvar data = /* Dog */0;\n'))),(0,o.kt)("p",null,"The compiler sees the variant, then"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"conceptually turns them into ",(0,o.kt)("inlineCode",{parentName:"li"},"type animal = 0 | 1 | 2")),(0,o.kt)("li",{parentName:"ol"},"compiles ",(0,o.kt)("inlineCode",{parentName:"li"},"switch")," to a constant-time jump table (",(0,o.kt)("inlineCode",{parentName:"li"},"O(1)"),").")))}c.isMDXComponent=!0,c.frontmatter={title:"Variant",description:"Variant data structures in ReScript",canonical:"/docs/manual/latest/variant",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v8.0.0/variant.mdx"}},28760:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v8.0.0/variant",function(){return a(88150)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=28760,e(e.s=t);var t}));var t=e.O();_N_E=t}]);