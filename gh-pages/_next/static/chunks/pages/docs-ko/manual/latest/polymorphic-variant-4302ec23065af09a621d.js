(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38699],{17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},60730:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=n(17375),r=n(96156),o=(n(67294),n(3905));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s,p=(s="CodeTab",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",i({},e))}),u={};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",i(i(i({},u),n),{},{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",i({},{id:"polymorphic-variant"}),"Polymorphic Variant"),(0,o.kt)("p",null,"Polymorphic variants (or poly variant) are a cousin of ",(0,o.kt)("a",i({parentName:"p"},{href:"variant"}),"variant"),". With these differences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"They start with a ",(0,o.kt)("inlineCode",{parentName:"li"},"#")," and the constructor name doesn't need to be capitalized."),(0,o.kt)("li",{parentName:"ul"},"They don't require an explicit type definition. The type is inferred from usage."),(0,o.kt)("li",{parentName:"ul"},'Values of different poly variant types can share the constructors they have in common (aka, poly variants are "structurally" typed, as opposed to ',(0,o.kt)("a",i({parentName:"li"},{href:"variant#variant-types-are-found-by-field-name"}),'"nominally" typed'),").")),(0,o.kt)("p",null,"They're a convenient and useful alternative to regular variants, but should ",(0,o.kt)("strong",{parentName:"p"},"not")," be abused. See the drawbacks at the end of this page."),(0,o.kt)("h2",i({},{id:"creation"}),"Creation"),(0,o.kt)("p",null,"We provide 3 syntaxes for a poly variant's constructor:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),'let myColor = #red\nlet myLabel = #"aria-hidden"\nlet myNumber = #7\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var myColor = "red";\nvar myLabel = "aria-hidden";\nvar myNumber = 7;\n'))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Take a look at the output"),". Poly variants are ",(0,o.kt)("em",{parentName:"p"},"great")," for JavaScript interop. For example, you can use it to model JavaScript string and number enums like TypeScript, but without confusing their accidental usage with regular strings and numbers."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"myColor")," uses the common syntax. The second and third syntaxes are to support expressing strings and numbers more conveniently. We allow the second one because otherwise it'd be invalid syntax since symbols like ",(0,o.kt)("inlineCode",{parentName:"p"},"-")," and others are usually reserved."),(0,o.kt)("h2",i({},{id:"type-declaration"}),"Type Declaration"),(0,o.kt)("p",null,"Although ",(0,o.kt)("strong",{parentName:"p"},"optional"),", you can still pre-declare a poly variant type:"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),"// Note the surrounding square brackets, and # for constructors\ntype color = [#red | #green | #blue]\n")),(0,o.kt)("p",null,"These types can also be inlined, unlike for regular variant:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),'let render = (myColor: [#red | #green | #blue]) => {\n  switch myColor {\n  | #blue => Js.log("Hello blue!")\n  | #red\n  | #green => Js.log("Hello other colors")\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'function render(myColor) {\n  if (myColor === "green" || myColor === "red") {\n    console.log("Hello other colors");\n  } else {\n    console.log("Hello blue!");\n  }\n}\n'))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": because a poly variant value's type definition is ",(0,o.kt)("strong",{parentName:"p"},"inferred")," and not searched in the scope, the following snippet won't error:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),'type color = [#red | #green | #blue]\n\nlet render = myColor => {\n  switch myColor {\n  | #blue => Js.log("Hello blue!")\n  | #green => Js.log("Hello green!")\n  // works!\n  | #yellow => Js.log("Hello yellow!")\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'function render(myColor) {\n  if (myColor === "yellow") {\n    console.log("Hello yellow!");\n  } else if (myColor === "green") {\n    console.log("Hello green!");\n  } else {\n    console.log("Hello blue!");\n  }\n}\n'))),(0,o.kt)("p",null,"That ",(0,o.kt)("inlineCode",{parentName:"p"},"myColor")," parameter's type is inferred to be ",(0,o.kt)("inlineCode",{parentName:"p"},"#red"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"#green")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"#yellow"),", and is unrelated to the ",(0,o.kt)("inlineCode",{parentName:"p"},"color")," type. If you intended ",(0,o.kt)("inlineCode",{parentName:"p"},"myColor")," to be of type ",(0,o.kt)("inlineCode",{parentName:"p"},"color"),", annotate it as ",(0,o.kt)("inlineCode",{parentName:"p"},"myColor: color")," in any of the places."),(0,o.kt)("h2",i({},{id:"constructor-arguments"}),"Constructor Arguments"),(0,o.kt)("p",null,"This is similar to a regular variant's ",(0,o.kt)("a",i({parentName:"p"},{href:"variant#constructor-arguments"}),"constructor arguments"),":"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),'type account = [\n  | #Anonymous\n  | #Instagram(string)\n  | #Facebook(string, int)\n]\n\nlet me: account = #Instagram("Jenny")\nlet him: account = #Facebook("Josh", 26)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var me = {\n  NAME: "Instagram",\n  VAL: "Jenny"\n};\n\nvar him = {\n  NAME: "Facebook",\n  VAL: [\n    "Josh",\n    26\n  ]\n};\n'))),(0,o.kt)("h3",i({},{id:"combine-types-and-pattern-match"}),"Combine Types and Pattern Match"),(0,o.kt)("p",null,"You can use poly variant types within other poly variant types to create a sum of all constructors:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),"type red = [#Ruby | #Redwood | #Rust]\ntype blue = [#Sapphire | #Neon | #Navy]\n\n// Contains all constructors of red and blue.\n// Also adds #Papayawhip\ntype color = [red | blue | #Papayawhip]\n\nlet myColor: color = #Ruby\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var myColor = "Ruby";\n'))),(0,o.kt)("p",null,"There's also some special ",(0,o.kt)("a",i({parentName:"p"},{href:"./pattern-matching-destructuring"}),"pattern matching")," syntax to match on constructors defined in a specific poly variant type:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),'// Continuing the previous example above...\n\nswitch myColor {\n| #...blue => Js.log("This blue-ish")\n| #...red => Js.log("This red-ish")\n| other => Js.log2("Other color than red and blue: ", other)\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var other = myColor;\n\nif (other === "Neon" || other === "Navy" || other === "Sapphire") {\n  console.log("This is blue-ish");\n} else if (other === "Rust" || other === "Ruby" || other === "Redwood") {\n  console.log("This is red-ish");\n} else {\n  console.log("Other color than red and blue: ", other);\n}\n'))),(0,o.kt)("p",null,"This is a shorter version of:"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),'switch myColor {\n| #Sapphire | #Neon | #Navy => Js.log("This is blue-ish")\n| #Ruby | #Redwood | #Rust => Js.log("This is red-ish")\n| other => Js.log2("Other color than red and blue: ", other)\n}\n')),(0,o.kt)("h2",i({},{id:"structural-sharing"}),"Structural Sharing"),(0,o.kt)("p",null,"Since poly variants value don't have a source of truth for their type, you can write such code:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),'type preferredColors = [#white | #blue]\n\nlet myColor: preferredColors = #blue\n\nlet displayColor = v => {\n  switch v {\n  | #red => "Hello red"\n  | #green => "Hello green"\n  | #white => "Hey white!"\n  | #blue => "Hey blue!"\n  }\n}\n\nJs.log(displayColor(myColor))\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var myColor = "blue";\n\nfunction displayColor(v) {\n  if (v === "white") {\n    return "Hey white!";\n  } else if (v === "red") {\n    return "Hello red";\n  } else if (v === "green") {\n    return "Hello green";\n  } else {\n    return "Hey blue!";\n  }\n}\n\nconsole.log(displayColor("blue"));\n'))),(0,o.kt)("p",null,"With a regular variant, the line ",(0,o.kt)("inlineCode",{parentName:"p"},"displayColor(myColor)")," would fail, since it'd complain that the type of ",(0,o.kt)("inlineCode",{parentName:"p"},"myColor")," doesn't match the type of ",(0,o.kt)("inlineCode",{parentName:"p"},"v"),". No problem with poly variant."),(0,o.kt)("h2",i({},{id:"javascript-output"}),"JavaScript Output"),(0,o.kt)("p",null,"Poly variants are great for JavaScript interop! You can share their values to JS code, or model incoming JS values as poly variants."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#red")," and ",(0,o.kt)("inlineCode",{parentName:"li"},'#"I am red \ud83d\ude03"')," compile to JavaScipt ",(0,o.kt)("inlineCode",{parentName:"li"},'"red"')," and ",(0,o.kt)("inlineCode",{parentName:"li"},'"I am red \ud83d\ude03"'),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#1")," compiles to JavaScript ",(0,o.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,o.kt)("li",{parentName:"ul"},"Poly variant constructor with 1 argument, like ",(0,o.kt)("inlineCode",{parentName:"li"},'Instagram("Jenny")')," compile to a straightforward ",(0,o.kt)("inlineCode",{parentName:"li"},'{NAME: "Instagram", VAL: "Jenny"}'),". 2 or more arguments like ",(0,o.kt)("inlineCode",{parentName:"li"},'#Facebook("Josh", 26)')," compile to a similar object, but with ",(0,o.kt)("inlineCode",{parentName:"li"},"VAL")," being an array of the arguments.")),(0,o.kt)("h3",i({},{id:"bind-to-functions"}),"Bind to Functions"),(0,o.kt)("p",null,"For example, let's assume we want to bind to ",(0,o.kt)("inlineCode",{parentName:"p"},"Intl.NumberFormat")," and want to make sure that our users only pass valid locales, we could define an external binding like this:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),'type t\n\n@scope("Intl") @val\nexternal makeNumberFormat: ([#"de-DE" | #"en-GB" | #"en-US"]) => t = "NumberFormat"\n\nlet intl = makeNumberFormat(#"de-DE")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var intl = Intl.NumberFormat("de-DE");\n'))),(0,o.kt)("p",null,"The JS output is identical to handwritten JS, but we also get to enjoy type errors if we accidentally write ",(0,o.kt)("inlineCode",{parentName:"p"},'makeNumberFormat(#"de-DR")'),"."),(0,o.kt)("p",null,"More advanced usage examples for poly variant interop can be found in ",(0,o.kt)("a",i({parentName:"p"},{href:"bind-to-js-function#constrain-arguments-better"}),"Bind to JS Function"),"."),(0,o.kt)("h3",i({},{id:"bind-to-string-enums"}),"Bind to String Enums"),(0,o.kt)("p",null,"Let's assume we have a TypeScript module that expresses following enum export:"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'// direction.js\nenum Direction {\n  Up = "UP",\n  Down = "DOWN",\n  Left = "LEFT",\n  Right = "RIGHT",\n}\n\nexport const myDirection = Direction.Up\n')),(0,o.kt)("p",null,"For this particular example, we can also inline poly variant type definitions to design the type for the imported ",(0,o.kt)("inlineCode",{parentName:"p"},"myDirection")," value:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),'type direction = [ #UP | #DOWN | #LEFT | #RIGHT ]\n@module("./direction.js") external myDirection: direction = "myDirection"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var DirectionJs = require("./direction.js");\n\nvar myDirection = DirectionJs.myDirection;\n'))),(0,o.kt)("p",null,"Again: since we were using poly variants, the JS Output is practically zero-cost and doesn't add any extra code!"),(0,o.kt)("h2",i({},{id:"extra-constraints-on-types"}),"Extra Constraints on Types"),(0,o.kt)("p",null,'The previous poly variant type annotations we\'ve looked at are the regular "closed" kind. However, there\'s a way to express "I want at least these constructors" (lower bound) and "I want at most these constructors" (upper bound):'),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),"// Only #Red allowed. Closed.\nlet basic: [#Red] = #Red\n\n// May contain #Red, or any other value. Open\n// here, foreground will actually be inferred as [> #Red | #Green]\nlet foreground: [> #Red] = #Green\n\n// The value must be, at most, one of #Red or #Blue\n// Only #Red and #Blue are valid values\nlet background: [< #Red | #Blue] = #Red\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," We added this info for educational purposes. In most cases you will not want to use any of this stuff, since it makes your APIs pretty unreadable / hard to use."),(0,o.kt)("h3",i({},{id:"closed-"}),"Closed ",(0,o.kt)("inlineCode",{parentName:"h3"},"[")),(0,o.kt)("p",null,"This is the simplest poly variant definition, and also the most practical one. Like a common variant type, this one defines an exact set of constructors."),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),"type rgb = [ #Red | #Green | #Blue ]\n\nlet color: rgb = #Green\n")),(0,o.kt)("p",null,"In the example above, ",(0,o.kt)("inlineCode",{parentName:"p"},"color")," will only allow one of the three constructors that are defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"rgb")," type. This is usually the way how poly variants should be defined."),(0,o.kt)("p",null,"In case you want to define a type that is extensible, you'll need to use the lower / upper bound syntax."),(0,o.kt)("h3",i({},{id:"lower-bound-"}),"Lower Bound ",(0,o.kt)("inlineCode",{parentName:"h3"},"[>")),(0,o.kt)("p",null,'A lower bound defines the minimum set of constructors a poly variant type is aware of. It is also considered an "open poly variant type", because it doesn\'t restrict any additional values.'),(0,o.kt)("p",null,"Here is an example on how to make a minimum set of ",(0,o.kt)("inlineCode",{parentName:"p"},"basicBlueTones")," extensible for a new ",(0,o.kt)("inlineCode",{parentName:"p"},"color")," type:"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),"type basicBlueTone<'a> = [> #Blue | #DeepBlue | #LightBlue ] as 'a\ntype color = basicBlueTone<[#Blue | #DeepBlue | #LightBlue | #Purple]>\n\nlet color: color = #Purple\n\n// This will fail due to missing minimum constructors:\ntype notWorking = basicBlueTone<[#Purple]>\n")),(0,o.kt)("p",null,"Here, the compiler will enforce the user to define ",(0,o.kt)("inlineCode",{parentName:"p"},"#Blue | #DeepBlue | #LightBlue")," as the minimum set of constructors when trying to extend ",(0,o.kt)("inlineCode",{parentName:"p"},"basicBlueTone<'a>"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Since we want to define an extensible poly variant, we need to provide a type placeholder ",(0,o.kt)("inlineCode",{parentName:"p"},"<'a>"),", and also add ",(0,o.kt)("inlineCode",{parentName:"p"},"as 'a"),' after the poly variant declaration, which essentially means: "Given type ',(0,o.kt)("inlineCode",{parentName:"p"},"'a")," is constraint to the minimum set of constructors (",(0,o.kt)("inlineCode",{parentName:"p"},"#Blue | #DeepBlue | #LightBlue"),") defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"basicBlueTone"),'".'),(0,o.kt)("h3",i({},{id:"upper-bound-"}),"Upper Bound ",(0,o.kt)("inlineCode",{parentName:"h3"},"[<")),(0,o.kt)("p",null,"The upper bound works in the opposite way than a lower bound: the extending type may only use constructors that are stated in the upper bound constraint."),(0,o.kt)("p",null,"Here another example, but with red colors:"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),"type validRed<'a> = [< #Fire | #Crimson | #Ash] as 'a\ntype myReds = validRed<[#Ash]>\n\n// This will fail due to unlisted constructor not defined by the lower bound\ntype notWorking = validRed<[#Purple]>\n")),(0,o.kt)("h2",i({},{id:"coercion"}),"Coercion"),(0,o.kt)("p",null,"You can convert a poly variant to a ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"int")," at no cost:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),'type company = [#Apple | #Facebook]\nlet theCompany: company = #Apple\n\nlet message = "Hello " ++ (theCompany :> string)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var theCompany = "Apple";\nvar message = "Hello " + theCompany;\n'))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": for the coercion to work, the poly variant type needs to be closed; you'd need to annotate it, since otherwise, ",(0,o.kt)("inlineCode",{parentName:"p"},"theCompany")," would be inferred as ",(0,o.kt)("inlineCode",{parentName:"p"},"[> #Apple]"),"."),(0,o.kt)("h2",i({},{id:"tips--tricks"}),"Tips & Tricks"),(0,o.kt)("h3",i({},{id:"variant-vs-polymorphic-variant"}),"Variant vs Polymorphic Variant"),(0,o.kt)("p",null,"One might think that polymorphic variants are superior to regular ",(0,o.kt)("a",i({parentName:"p"},{href:"./variant"}),"variants"),". As always, there are trade-offs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Due to their "structural" nature, poly variant\'s type errors might be more confusing. If you accidentally write ',(0,o.kt)("inlineCode",{parentName:"p"},"#blur")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"#blue"),", ReScript will still error but can't indicate the correct source as easily. Regular variants' source of truth is the type definition, so the error can't go wrong.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It's also harder to refactor poly variants. Consider this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),"let myFruit = #Apple\nlet mySecondFruit = #Apple\nlet myCompany = #Apple\n")),(0,o.kt)("p",{parentName:"li"},"Refactoring the first one to ",(0,o.kt)("inlineCode",{parentName:"p"},"#Orange")," doesn't mean we should refactor the third one. Therefore, the editor plugin can't touch the second one either. Regular variant doesn't have such problem, as these 2 values presumably come from different variant type definitions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You might lose some nice pattern match checks from the compiler:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),'let myColor = #red\n\nswitch myColor {\n| #red => Js.log("Hello red!")\n| #blue => Js.log("Hello blue!")\n}\n')),(0,o.kt)("p",{parentName:"li"},"Because there's no poly variant definition, it's hard to know whether the ",(0,o.kt)("inlineCode",{parentName:"p"},"#blue")," case can be safely removed."))),(0,o.kt)("p",null,"In most scenarios, we'd recommend to use regular variants over polymorphic variants, especially when you are writing plain ReScript code. In case you want to write zero-cost interop bindings or generate clean JS output, poly variants are oftentimes a better option."))}c.isMDXComponent=!0,c.frontmatter={title:"Polymorphic Variant",description:"The Polymorphic Variant data structure in ReScript",canonical:"/docs/manual/latest/polymorphic-variant",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs-ko/manual/latest/polymorphic-variant.mdx"}},99940:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-ko/manual/latest/polymorphic-variant",function(){return n(60730)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=99940,e(e.s=t);var t}));var t=e.O();_N_E=t}]);