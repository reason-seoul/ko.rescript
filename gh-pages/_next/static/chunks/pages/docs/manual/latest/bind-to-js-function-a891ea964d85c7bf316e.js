(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13862],{17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},61871:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(17375),r=n(96156),i=(n(67294),n(3905));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p,s=(p="CodeTab",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",o({},e))}),u={};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",o(o(o({},u),n),{},{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",o({},{id:"function"}),"Function"),(0,i.kt)("p",null,"Binding a JS function is like binding any other value:"),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'// Import nodejs\' path.dirname\n@module("path") external dirname: string => string = "dirname"\nlet root = dirname("/User/github") // returns "User"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var Path = require("path");\nvar root = Path.dirname("/User/github");\n'))),(0,i.kt)("p",null,"We also expose a few special features, described below."),(0,i.kt)("h2",o({},{id:"labeled-arguments"}),"Labeled Arguments"),(0,i.kt)("p",null,"ReScript has ",(0,i.kt)("a",o({parentName:"p"},{href:"function.md#labeled-arguments"}),"labeled arguments")," (that can also be optional). These work on an ",(0,i.kt)("inlineCode",{parentName:"p"},"external")," too! You'd use them to ",(0,i.kt)("em",{parentName:"p"},"fix")," a JS function's unclear usage. Assuming we're modeling this:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),"// MyGame.js\n\nfunction draw(x, y, border) {\n   // suppose `border` is optional and defaults to false\n}\ndraw(10, 20)\ndraw(20, 20, true)\n")),(0,i.kt)("p",null,"It'd be nice if on ReScript's side, we can bind & call ",(0,i.kt)("inlineCode",{parentName:"p"},"draw")," while labeling things a bit:"),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@module("MyGame")\nexternal draw: (~x: int, ~y: int, ~border: bool=?, unit) => unit = "draw"\n\ndraw(~x=10, ~y=20, ~border=true, ())\ndraw(~x=10, ~y=20, ())\n')),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var MyGame = require("MyGame");\n\nMyGame.draw(10, 20, true);\nMyGame.draw(10, 20, undefined);\n'))),(0,i.kt)("p",null,"We've compiled to the same function, but now the usage is much clearer on the ReScript side thanks to labels!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": in this particular case, you need a unit, ",(0,i.kt)("inlineCode",{parentName:"p"},"()")," after ",(0,i.kt)("inlineCode",{parentName:"p"},"border"),", since ",(0,i.kt)("inlineCode",{parentName:"p"},"border")," is an ",(0,i.kt)("a",o({parentName:"p"},{href:"function.md#optional-labeled-arguments"}),"optional argument at the last position"),". Not having a unit to indicate you've finished applying the function would generate a warning."),(0,i.kt)("p",null,"Note that you can freely reorder the labels on the ReScript side; they'll always correctly appear in their declaration order in the JavaScript output:"),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@module("MyGame")\nexternal draw: (~x: int, ~y: int, ~border: bool=?, unit) => unit = "draw"\n\ndraw(~x=10, ~y=20, ())\ndraw(~y=20, ~x=10, ())\n')),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var MyGame = require("MyGame");\n\nMyGame.draw(10, 20, undefined);\nMyGame.draw(10, 20, undefined);\n'))),(0,i.kt)("h2",o({},{id:"object-method"}),"Object Method"),(0,i.kt)("p",null,"Functions attached to a JS objects (other than JS modules) require a special way of binding to them, using ",(0,i.kt)("inlineCode",{parentName:"p"},"send"),":"),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type document // abstract type for a document object\n@send external getElementById: (document, string) => Dom.element = "getElementById"\n@val external doc: document = "document"\n\nlet el = getElementById(doc, "myId")\n')),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var el = document.getElementById("myId");\n'))),(0,i.kt)("p",null,"In a ",(0,i.kt)("inlineCode",{parentName:"p"},"send"),", the object is always the first argument. Actual arguments of the method follow (this is a bit what modern OOP objects are really)."),(0,i.kt)("h3",o({},{id:"chaining"}),"Chaining"),(0,i.kt)("p",null,"Ever used ",(0,i.kt)("inlineCode",{parentName:"p"},"foo().bar().baz()"),' chaining ("fluent api") in JS OOP? We can model that in ReScript too, through the ',(0,i.kt)("a",o({parentName:"p"},{href:"pipe.md"}),"pipe operator"),"."),(0,i.kt)("h2",o({},{id:"variadic-function-arguments"}),"Variadic Function Arguments"),(0,i.kt)("p",null,"You might have JS functions that take an arbitrary amount of arguments. ReScript supports modeling those, under the condition that the arbitrary arguments part is homogenous (aka of the same type). If so, add ",(0,i.kt)("inlineCode",{parentName:"p"},"variadic")," to your ",(0,i.kt)("inlineCode",{parentName:"p"},"external"),"."),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@module("path") @variadic\nexternal join: array<string> => string = "join"\n\nlet v = join(["a", "b"])\n')),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var Path = require("path");\nvar v = Path.join("a", "b");\n'))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"module")," will be explained in ",(0,i.kt)("a",o({parentName:"p"},{href:"import-from-export-to-js.md"}),"Import from/Export to JS"),"."),(0,i.kt)("h2",o({},{id:"modeling-polymorphic-function"}),"Modeling Polymorphic Function"),(0,i.kt)("p",null,"Apart from the above special-case, JS function in general are often arbitrary overloaded in terms of argument types and number. How would you bind to those?"),(0,i.kt)("h3",o({},{id:"trick-1-multiple-externals"}),"Trick 1: Multiple ",(0,i.kt)("inlineCode",{parentName:"h3"},"external"),"s"),(0,i.kt)("p",null,"If you can exhaustively enumerate the many forms an overloaded JS function can take, simply bind to each differently:"),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@module("MyGame") external drawCat: unit => unit = "draw"\n@module("MyGame") external drawDog: (~giveName: string) => unit = "draw"\n@module("MyGame") external draw: (string, ~useRandomAnimal: bool) => unit = "draw"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,i.kt)("p",null,"Note how all three externals bind to the same JS function, ",(0,i.kt)("inlineCode",{parentName:"p"},"draw"),"."),(0,i.kt)("h3",o({},{id:"trick-2-polymorphic-variant--unwrap"}),"Trick 2: Polymorphic Variant + ",(0,i.kt)("inlineCode",{parentName:"h3"},"unwrap")),(0,i.kt)("p",null,'If you have the irresistible urge of saying "if only this JS function argument was a variant instead of informally being either ',(0,i.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),'", then good news: we do provide such ',(0,i.kt)("inlineCode",{parentName:"p"},"external")," features through annotating a parameter as a polymorphic variant! Assuming you have the following JS function you'd like to bind to:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),'function padLeft(value, padding) {\n  if (typeof padding === "number") {\n    return Array(padding + 1).join(" ") + value;\n  }\n  if (typeof padding === "string") {\n    return padding + value;\n  }\n  throw new Error(`Expected string or number, got \'${padding}\'.`);\n}\n')),(0,i.kt)("p",null,"Here, ",(0,i.kt)("inlineCode",{parentName:"p"},"padding")," is really conceptually a variant. Let's model it as such."),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@val\nexternal padLeft: (\n  string,\n  @unwrap [\n    | #Str(string)\n    | #Int(int)\n  ])\n  => string = "padLeft"\npadLeft("Hello World", #Int(4))\npadLeft("Hello World", #Str("Message from ReScript: "))\n')),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),'padLeft("Hello World", 4);\npadLeft("Hello World", "Message from ReScript: ");\n'))),(0,i.kt)("p",null,"Obviously, the JS side couldn't have an argument that's a polymorphic variant! But here, we're just piggy backing on poly variants' type checking and syntax. The secret is the ",(0,i.kt)("inlineCode",{parentName:"p"},"@unwrap")," annotation on the type. It strips the variant constructors and compile to just the payload's value. See the output."),(0,i.kt)("h2",o({},{id:"constrain-arguments-better"}),"Constrain Arguments Better"),(0,i.kt)("p",null,"Consider the Node ",(0,i.kt)("inlineCode",{parentName:"p"},"fs.readFileSync"),"'s second argument. It can take a string, but really only a defined set: ",(0,i.kt)("inlineCode",{parentName:"p"},'"ascii"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"utf8"'),", etc. You can still bind it as a string, but we can use poly variants + ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," to ensure that our usage's more correct:"),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@module("fs")\nexternal readFileSync: (\n  ~name: string,\n  @string [\n    | #utf8\n    | @as("ascii") #useAscii\n  ],\n) => string = "readFileSync"\n\nreadFileSync(~name="xx.txt", #useAscii)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var Fs = require("fs");\nFs.readFileSync("xx.txt", "ascii");\n'))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Attaching ",(0,i.kt)("inlineCode",{parentName:"li"},"@string")," to the whole poly variant type makes its constructor compile to a string of the same name."),(0,i.kt)("li",{parentName:"ul"},"Attaching a ",(0,i.kt)("inlineCode",{parentName:"li"},'@as("bla")')," to a constructor lets you customize the final string.")),(0,i.kt)("p",null,"And now, passing something like ",(0,i.kt)("inlineCode",{parentName:"p"},'"myOwnUnicode"')," or other variant constructor names to ",(0,i.kt)("inlineCode",{parentName:"p"},"readFileSync")," would correctly error."),(0,i.kt)("p",null,"Aside from string, you can also compile an argument to an int, using ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," in a similar way:"),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@val\nexternal testIntType: (\n  @int [\n    | #onClosed\n    | @as(20) #onOpen\n    | #inBinary\n  ])\n  => int = "testIntType"\ntestIntType(#inBinary)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),"testIntType(21);\n"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"onClosed")," compiles to ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onOpen")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"20")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"inBinary")," to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"21")),"."),(0,i.kt)("h2",o({},{id:"special-case-event-listeners"}),"Special-case: Event Listeners"),(0,i.kt)("p",null,"One last trick with polymorphic variants:"),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type readline\n\n@send\nexternal on: (\n    readline,\n    @string [\n      | #close(unit => unit)\n      | #line(string => unit)\n    ]\n  )\n  => readline = "on"\n\nlet register = rl =>\n  rl\n  ->on(#close(event => ()))\n  ->on(#line(line => Js.log(line)));\n')),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),'function register(rl) {\n  return rl\n    .on("close", function($$event) {})\n    .on("line", function(line) {\n      console.log(line);\n    });\n}\n'))),(0,i.kt)("h2",o({},{id:"fixed-arguments"}),"Fixed Arguments"),(0,i.kt)("p",null,"Sometimes it's convenient to bind to a function using an ",(0,i.kt)("inlineCode",{parentName:"p"},"external"),", while passing predetermined argument values to the JS function:"),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@val\nexternal processOnExit: (\n  @as("exit") _,\n  int => unit\n) => unit = "process.on"\n\nprocessOnExit(exitCode =>\n  Js.log("error code: " ++ Js.Int.toString(exitCode))\n);\n')),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),'process.on("exit", function (exitCode) {\n  console.log("error code: " + exitCode.toString());\n});\n'))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},'@as("exit")')," and the placeholder ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," argument together indicates that you want the first argument to compile to the string ",(0,i.kt)("inlineCode",{parentName:"p"},'"exit"'),". You can also use any JSON literal with ",(0,i.kt)("inlineCode",{parentName:"p"},"as"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"@as(json`true`)"),", ",(0,i.kt)("inlineCode",{parentName:"p"},'@as(json`{"name": "John"}`)'),", etc."),(0,i.kt)("h2",o({},{id:"ignore-arguments"}),"Ignore arguments"),(0,i.kt)("p",null,'You can also explicitly "hide" ',(0,i.kt)("inlineCode",{parentName:"p"},"external")," function parameters in the JS output, which may be useful if you want to add type constraints to other parameters without impacting the JS side:"),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res"}),'@val external doSomething: (@ignore \'a, \'a) => unit = "doSomething"\n\ndoSomething("this only shows up in ReScript code", "test")\n')),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),'doSomething("test");\n'))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," It's a pretty niche feature, mostly used to map to polymorphic JS APIs."),(0,i.kt)("h2",o({},{id:"curry--uncurry"}),"Curry & Uncurry"),(0,i.kt)("p",null,"Curry is a delicious Indian dish. More importantly, in the context of ReScript (and functional programming in general), currying means that function taking multiple arguments can be applied a few arguments at time, until all the arguments are applied."),(0,i.kt)("p",null,"See the ",(0,i.kt)("inlineCode",{parentName:"p"},"addFive")," intermediate function? ",(0,i.kt)("inlineCode",{parentName:"p"},"add"),' takes in 3 arguments but received only 1. It\'s interpreted as "currying" the argument ',(0,i.kt)("inlineCode",{parentName:"p"},"5")," and waiting for the next 2 arguments to be applied later on. Type signatures:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let add: (int, int, int) => int\nlet addFive: (int, int) => int\nlet twelve: int\n")),(0,i.kt)("p",null,"(In a dynamic language such as JS, currying would be dangerous, since accidentally forgetting to pass an argument doesn't error at compile time)."),(0,i.kt)("h3",o({},{id:"drawback"}),"Drawback"),(0,i.kt)("p",null,"Unfortunately, due to JS not having currying because of the aforementioned reason, it's hard for ReScript multi-argument functions to map cleanly to JS functions 100% of the time:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When all the arguments of a function are supplied (aka no currying), ReScript does its best to to compile e.g. a 3-arguments call into a plain JS call with 3 arguments.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If it's too hard to detect whether a function application is complete","*",", ReScript will use a runtime mechanism (the ",(0,i.kt)("inlineCode",{parentName:"p"},"Curry")," module) to curry as many args as we can and check whether the result is fully applied.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Some JS APIs like ",(0,i.kt)("inlineCode",{parentName:"p"},"throttle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"debounce")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"promise")," might mess with context, aka use the function ",(0,i.kt)("inlineCode",{parentName:"p"},"bind")," mechanism, carry around ",(0,i.kt)("inlineCode",{parentName:"p"},"this"),", etc. Such implementation clashes with the previous currying logic."))),(0,i.kt)("p",null,"*"," If the call site is typed as having 3 arguments, we sometimes don't know whether it's a function that's being curried, or if the original one indeed has only 3 arguments."),(0,i.kt)("p",null,"ReScript tries to do #1 as much as it can. Even when it bails and uses #2's currying mechanism, it's usually harmless."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"However"),", if you encounter #3, heuristics are not good enough: you need a guaranteed way of fully applying a function, without intermediate currying steps. We provide such guarantee through the use of the ",(0,i.kt)("a",o({parentName:"p"},{href:"./function#uncurried-function"}),'"uncurrying" syntax')," on a function declaration & call site."),(0,i.kt)("h3",o({},{id:"solution-use-guaranteed-uncurrying"}),"Solution: Use Guaranteed Uncurrying"),(0,i.kt)("p",null,(0,i.kt)("a",o({parentName:"p"},{href:"function.md#uncurried-function"}),"Uncurried function")," annotation also works on ",(0,i.kt)("inlineCode",{parentName:"p"},"external"),":"),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type timerId\n@val external setTimeout: ((. unit) => unit, int) => timerId = "setTimeout"\n\nlet id = setTimeout((.) => Js.log("hello"), 1000)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var id = setTimeout(function () {\n  console.log("hello");\n}, 1000);\n'))),(0,i.kt)("h4",o({},{id:"extra-solution"}),"Extra Solution"),(0,i.kt)("p",null,"The above solution is safe, guaranteed, and performant, but sometimes visually a little burdensome. We provide an alternative solution if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"you're using ",(0,i.kt)("inlineCode",{parentName:"li"},"external")),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"external")," function takes in an argument that's another function"),(0,i.kt)("li",{parentName:"ul"},"you want the user ",(0,i.kt)("strong",{parentName:"li"},"not")," to need to annotate the call sites with the dot")),(0,i.kt)("p",null,"Then try ",(0,i.kt)("inlineCode",{parentName:"p"},"@uncurry"),":"),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"@send external map: (array<'a>, @uncurry ('a => 'b)) => array<'b> = \"map\"\nmap([1, 2, 3], x => x + 1)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,i.kt)("p",null,"In general, ",(0,i.kt)("inlineCode",{parentName:"p"},"uncurry")," is recommended; the compiler will do lots of optimizations to resolve the currying to uncurrying at compile time. However, there are some cases the compiler can't optimize it. In these cases, it will be converted to a runtime check."),(0,i.kt)("h2",o({},{id:"modeling-this-based-callbacks"}),"Modeling ",(0,i.kt)("inlineCode",{parentName:"h2"},"this"),"-based Callbacks"),(0,i.kt)("p",null,"Many JS libraries have callbacks which rely on this (the source), for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),"x.onload = function(v) {\n  console.log(this.response + v)\n}\n")),(0,i.kt)("p",null,"Here, ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," would point to ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," (actually, it depends on how ",(0,i.kt)("inlineCode",{parentName:"p"},"onload")," is called, but we digress). It's not correct to declare ",(0,i.kt)("inlineCode",{parentName:"p"},"x.onload")," of type ",(0,i.kt)("inlineCode",{parentName:"p"},"(. unit) -> unit"),". Instead, we introduced a special attribute, ",(0,i.kt)("inlineCode",{parentName:"p"},"this"),", which allows us to type ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," as so:"),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type x\n@val external x: x = "x"\n@set external setOnload: (x, @this ((x, int) => unit)) => unit = "onload"\n@get external resp: x => int = "response"\nsetOnload(x, @this ((o, v) => Js.log(resp(o) + v)))\n')),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),"x.onload = function (v) {\n  var o = this;\n  console.log((o.response + v) | 0);\n};\n"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"this")," has its first parameter is reserved for ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," and for arity of 0, there is no need for a redundant ",(0,i.kt)("inlineCode",{parentName:"p"},"unit")," type."),(0,i.kt)("h2",o({},{id:"function-nullable-return-value-wrapping"}),"Function Nullable Return Value Wrapping"),(0,i.kt)("p",null,"For JS functions that return a value that can also be ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),", we provide ",(0,i.kt)("inlineCode",{parentName:"p"},"@return(...)"),". To automatically convert that value to an ",(0,i.kt)("inlineCode",{parentName:"p"},"option")," type (recall that ReScript ",(0,i.kt)("inlineCode",{parentName:"p"},"option")," type's ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," value only compiles to ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," and not ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type element\ntype dom\n\n@send @return(nullable)\nexternal getElementById: (dom, string) => option<element> = "getElementById"\n\nlet test = dom => {\n  let elem = dom->(getElementById("haha"))\n  switch (elem) {\n  | None => 1\n  | Some(_ui) => 2\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),'function test(dom) {\n  var elem = dom.getElementById("haha");\n  if (elem == null) {\n    return 1;\n  } else {\n    console.log(elem);\n    return 2;\n  }\n}\n\n'))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"return(nullable)")," attribute will automatically convert ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"option")," type."),(0,i.kt)("p",null,"Currently 4 directives are supported: ",(0,i.kt)("inlineCode",{parentName:"p"},"null_to_opt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined_to_opt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nullable")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"identity"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"identity")," will make sure that compiler will do nothing about the returned value. It is rarely used, but introduced here for debugging purpose."))}d.isMDXComponent=!0,d.frontmatter={title:"Bind to JS Function",description:"JS interop with functions in ReScript",canonical:"/docs/manual/latest/bind-to-js-function",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/latest/bind-to-js-function.mdx"}},6278:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/latest/bind-to-js-function",function(){return n(61871)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=6278,e(e.s=t);var t}));var t=e.O();_N_E=t}]);