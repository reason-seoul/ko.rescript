(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93490],{17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},5915:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n(17375),r=n(96156),o=(n(67294),n(3905));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i,s=(i="CodeTab",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",p({},e))}),c={};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",p(p(p({},c),n),{},{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",p({},{id:"object"}),"Object"),(0,o.kt)("p",null,"ReScript objects are like ",(0,o.kt)("a",p({parentName:"p"},{href:"record.md"}),"records"),", but:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No type declaration needed."),(0,o.kt)("li",{parentName:"ul"},"Structural and more polymorphic, ",(0,o.kt)("a",p({parentName:"li"},{href:"record.md#record-types-are-found-by-field-name"}),"unlike records"),"."),(0,o.kt)("li",{parentName:"ul"},"Doesn't support updates unless the object comes from the JS side."),(0,o.kt)("li",{parentName:"ul"},"Doesn't support ",(0,o.kt)("a",p({parentName:"li"},{href:"pattern-matching-destructuring.md"}),"pattern matching"),".")),(0,o.kt)("p",null,"Although ReScript records compile to clean JavaScript objects, ReScript objects are a better candidate for emulating/binding to JS objects, as you'll see."),(0,o.kt)("h2",p({},{id:"type-declaration"}),"Type Declaration"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Optional"),", unlike for records. The type of an object is inferred from the value, so you never really need to write down its type definition. Nevertheless, here's its type declaration syntax:"),(0,o.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),'type person = {\n  "age": int,\n  "name": string\n};\n')),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,o.kt)("p",null,"Visually similar to record type's syntax, with the field names quoted."),(0,o.kt)("h2",p({},{id:"creation"}),"Creation"),(0,o.kt)("p",null,"To create a new object:"),(0,o.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let me = {\n  "age": 5,\n  "name": "Big ReScript"\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-js"}),'var me = {\n  "age": 5,\n  "name": "Big ReScript"\n};\n'))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": as said above, unlike for record, this ",(0,o.kt)("inlineCode",{parentName:"p"},"me")," value does ",(0,o.kt)("strong",{parentName:"p"},"not")," try to find a conforming type declaration with the field ",(0,o.kt)("inlineCode",{parentName:"p"},'"age"')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'"name"'),"; rather, the type of ",(0,o.kt)("inlineCode",{parentName:"p"},"me")," is inferred as ",(0,o.kt)("inlineCode",{parentName:"p"},'{"age": int, "name": string}'),". This is convenient, but also means this code passes type checking without errors:"),(0,o.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-res"}),'type person = {\n  "age": int\n};\n\nlet me = {\n  "age": "hello!" // age is a string. No error.\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-js"}),'var me = {\n  "age": "hello!"\n};\n'))),(0,o.kt)("p",null,"Since the type checker doesn't try to match ",(0,o.kt)("inlineCode",{parentName:"p"},"me")," with the type ",(0,o.kt)("inlineCode",{parentName:"p"},"person"),". If you ever want to force an object value to be of a predeclared object type, just annotate the value:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-res"}),'let me: person = {\n  "age": "hello!"\n}\n')),(0,o.kt)("p",null,"Now the type system will error properly."),(0,o.kt)("h2",p({},{id:"access"}),"Access"),(0,o.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-res"}),'let age = me["age"]\n')),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-js"}),'var age = me["age"];\n'))),(0,o.kt)("h2",p({},{id:"update"}),"Update"),(0,o.kt)("p",null,"Disallowed unless the object is a binding that comes from the JavaScript side. In that case, use ",(0,o.kt)("inlineCode",{parentName:"p"},"="),":"),(0,o.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type student = {\n  @set "age": int,\n  @set "name": string,\n}\n@module("MyJSFile") external student1: student = "student1"\n\nstudent1["name"] = "Mary"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-js"}),'var MyJSFile = require("MyJSFile");\nMyJSFile.student1.name = "Mary";\n'))),(0,o.kt)("h2",p({},{id:"tips--tricks"}),"Tips & Tricks"),(0,o.kt)("p",null,"Since objects don't require type declarations, and since ReScript infers all the types for you, you get to very quickly and easily (and dangerously) bind to any JavaScript API. Check the JS output tab:"),(0,o.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'// The type of document is just some random type \'a\n// that we won\'t bother to specify\n@val external document: \'a = "document"\n\n// call a method\ndocument["addEventListener"]("mouseup", _event => {\n  Js.log("clicked!")\n})\n\n// get a property\nlet loc = document["location"]\n\n// set a property\ndocument["location"]["href"] = "rescript-lang.org"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-js"}),'document.addEventListener("mouseup", function(_event) {\n  console.log("clicked!");\n});\nvar loc = document.location;\ndocument.location.href = "rescript-lang.org";\n'))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"external")," feature and the usage of this trick are also documented in the ",(0,o.kt)("a",p({parentName:"p"},{href:"external#tips--tricks"}),"external")," section later. It's an excellent way to start writing some ReScript code without worrying about whether bindings to a particular library exists."))}u.isMDXComponent=!0,u.frontmatter={title:"Object",description:"Interoping with JS objects in ReScript",canonical:"/docs/manual/latest/object",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v9.0.0/object.mdx"}},54532:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v9.0.0/object",function(){return n(5915)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=54532,e(e.s=t);var t}));var t=e.O();_N_E=t}]);