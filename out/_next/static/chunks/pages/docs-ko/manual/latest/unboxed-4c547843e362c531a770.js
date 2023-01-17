(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[39724],{17375:function(e,n,t){"use strict";function o(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(n,{Z:function(){return o}})},64122:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var o=t(17375),a=t(96156),r=(t(67294),t(3905));function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var i,d=(i="CodeTab",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",s({},e))}),c={};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",s(s(s({},c),t),{},{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"unboxed"}),"Unboxed"),(0,r.kt)("p",null,"Consider a ReScript variant with a single payload, and a record with a single field:"),(0,r.kt)(d,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res"}),'type name = Name(string)\nlet studentName = Name("Joe")\n\ntype greeting = {message: string}\nlet hi = {message: "hello!"}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js"}),'var studentName = /* Name */{\n  _0: "Joe"\n};\n\nvar hi = {\n  message: "hello!"\n};\n'))),(0,r.kt)("p",null,"If you check the JavaScript output, you'll see the ",(0,r.kt)("inlineCode",{parentName:"p"},"studentName")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"hi")," JS object, as expected (see the ",(0,r.kt)("a",s({parentName:"p"},{href:"variant#javascript-output"}),"variant JS output")," and ",(0,r.kt)("a",s({parentName:"p"},{href:"record#javascript-output"}),"record JS output")," sections for details)."),(0,r.kt)("p",null,"For performance and certain JavaScript interop situations, ReScript offers a way to unwrap (aka unbox) the JS object wrappers from the output for records with a single field and variants with a single constructor and single payload. Annotate their type declaration with the attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"@unboxed"),":"),(0,r.kt)(d,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res"}),'@unboxed\ntype name = Name(string)\nlet studentName = Name("Joe")\n\n@unboxed\ntype greeting = {message: string}\nlet hi = {message: "hello!"}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js"}),'var studentName = "Joe";\n\nvar hi = "hello!";\n'))),(0,r.kt)("p",null,"Check the new output! Clean."),(0,r.kt)("h2",s({},{id:"usage"}),"Usage"),(0,r.kt)("p",null,"Why would you ever want a variant or a record with a single payload? Why not just... pass the payload? Here's one use-case for variant."),(0,r.kt)("p",null,"Suppose you have a game with a local/global coordinate system:"),(0,r.kt)(d,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type coordinates = {x: float, y: float}\n\nlet renderDot = (coordinates) => {\n  Js.log3("Pretend to draw at:", coordinates.x, coordinates.y)\n}\n\nlet toWorldCoordinates = (localCoordinates) => {\n  {\n    x: localCoordinates.x +. 10.,\n    y: localCoordinates.x +. 20.,\n  }\n}\n\nlet playerLocalCoordinates = {x: 20.5, y: 30.5}\n\nrenderDot(playerLocalCoordinates)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js"}),'function renderDot(coordinates) {\n  console.log("Pretend to draw at:", coordinates.x, coordinates.y);\n}\n\nfunction toWorldCoordinates(localCoordinates) {\n  return {\n    x: localCoordinates.x + 10,\n    y: localCoordinates.x + 20\n  };\n}\n\nvar playerLocalCoordinates = {\n  x: 20.5,\n  y: 30.5\n};\n\nrenderDot(playerLocalCoordinates);\n'))),(0,r.kt)("p",null,"Oops, that's wrong! ",(0,r.kt)("inlineCode",{parentName:"p"},"renderDot")," should have taken global coordinates, not local ones... Let's prevent passing the wrong kind of coordinates:"),(0,r.kt)(d,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type coordinates = {x: float, y: float}\n@unboxed type localCoordinates = Local(coordinates)\n@unboxed type worldCoordinates = World(coordinates)\n\nlet renderDot = (World(coordinates)) => {\n  Js.log3("Pretend to draw at:", coordinates.x, coordinates.y)\n}\n\nlet toWorldCoordinates = (Local(coordinates)) => {\n  World({\n    x: coordinates.x +. 10.,\n    y: coordinates.x +. 20.,\n  })\n}\n\nlet playerLocalCoordinates = Local({x: 20.5, y: 30.5})\n\n// This now errors!\n// renderDot(playerLocalCoordinates)\n// We\'re forced to do this instead:\nrenderDot(playerLocalCoordinates->toWorldCoordinates)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js"}),'function renderDot(coordinates) {\n  console.log("Pretend to draw at:", coordinates.x, coordinates.y);\n}\n\nfunction toWorldCoordinates(coordinates) {\n  return {\n    x: coordinates.x + 10,\n    y: coordinates.x + 20\n  };\n}\n\nvar playerLocalCoordinates = {\n  x: 20.5,\n  y: 30.5\n};\n\nrenderDot(toWorldCoordinates(playerLocalCoordinates));\n'))),(0,r.kt)("p",null,"Now ",(0,r.kt)("inlineCode",{parentName:"p"},"renderDot")," only takes ",(0,r.kt)("inlineCode",{parentName:"p"},"worldCoordinates"),". Through a nice combination of using distinct variant types + argument destructuring, we've achieved better safety ",(0,r.kt)("strong",{parentName:"p"},"without compromising on performance"),": the ",(0,r.kt)("inlineCode",{parentName:"p"},"unboxed")," attribute compiled to clean, variant-wrapper-less JS code! Check the output."),(0,r.kt)("p",null,"As for a record with a single field, the use-cases are a bit more edgy. We won't mention them here."))}p.isMDXComponent=!0,p.frontmatter={title:"Unboxed",description:"Unbox a wrapper",canonical:"/docs/manual/latest/unboxed",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs-ko/manual/latest/unboxed.mdx"}},98828:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-ko/manual/latest/unboxed",function(){return t(64122)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return n=98828,e(e.s=n);var n}));var n=e.O();_N_E=n}]);