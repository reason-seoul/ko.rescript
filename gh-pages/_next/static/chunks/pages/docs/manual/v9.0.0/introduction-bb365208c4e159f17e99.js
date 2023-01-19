(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18e3],{17375:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,{Z:function(){return n}})},19574:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var n=a(96156),r=a(17375),i=(a(67294),a(3905));function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var l={};function p(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",s(s(s({},l),a),{},{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",s({},{id:"rescript"}),"ReScript"),(0,i.kt)("p",null,"Ever wanted a language like JavaScript, but without the warts, with a great type system, and with a lean build toolchain that doesn't waste your time?"),(0,i.kt)("p",null,"ReScript looks like JS, acts like JS, and compiles to the highest quality of clean, readable and performant JS, directly runnable in browsers and Node."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"This means you can pick up ReScript and access the vast JavaScript ecosystem and tooling as if you've known ReScript for a long time"),"!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ReScript is the language for folks who don't necessarily love JavaScript, but who still acknowledge its importance"),"."),(0,i.kt)("h2",s({},{id:"difference-vs-typescript"}),"Difference vs TypeScript"),(0,i.kt)("p",null,"We respect TypeScript very much and think that it's a positive force in the JavaScript ecosystem. ReScript shares some of the same goals as TypeScript, but is different enough regarding some important nuances:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"TypeScript's (admittedly noble) goal is to cover the entire JavaScript feature set and more. ",(0,i.kt)("strong",{parentName:"p"},"ReScript covers only a curated subset of JavaScript"),". For example, we emphasize plain data + functions over classes, clean ",(0,i.kt)("a",s({parentName:"p"},{href:"pattern-matching-destructuring.md"}),"pattern matching")," over fragile ",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"s and virtual dispatches, ",(0,i.kt)("a",s({parentName:"p"},{href:"variant.md"}),"proper data modeling")," over string abuse, etc. JavaScript supersets will only grow larger over time; ReScript doesn't. ","*")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Consequently, TypeScript's type system is necessarily complex, pitfalls-ridden, potentially requires tweaking, sometimes slow, and requires quite a bit of noisy annotations that often feel like manual bookkeeping rather than clear documentation. In contrast, ReScript's type system:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Is deliberately curated to be a simple subset most folks will have an easier time to use."),(0,i.kt)("li",{parentName:"ul"},"Has ",(0,i.kt)("strong",{parentName:"li"},"no"),' pitfalls, aka the type system is "sound" (the types will always be correct). E.g. If a type isn\'t marked as nullable, its value will never lie and let through some ',(0,i.kt)("inlineCode",{parentName:"li"},"undefined")," value silently. ",(0,i.kt)("strong",{parentName:"li"},"ReScript code has no null/undefined errors"),"."),(0,i.kt)("li",{parentName:"ul"},"Is the same for everyone. No knobs, no bikeshedding opportunity."),(0,i.kt)("li",{parentName:"ul"},"Runs extremely fast precisely thanks to its simplicity and curation. It's one of the fastest compiler & build system toolchains for JavaScript development."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Doesn't need type annotations"),". Annotate as much or as little as you'd like. The types are inferred by the language (and, again, are guaranteed correct)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Migrating to TypeScript is done "breadth-first," whereas migrating to ReScript is done "depth-first." You can convert your codebase to TypeScript by "turning it on" for all files and annotate here and there; but how much type safety did you gain? How do you measure it? Type errors can still slip in and out of the converted pieces. For ReScript, our interop features draw clear boundaries: there\'s pure ReScript code, and there\'s JS interop code. Every piece of converted ReScript code is 100% clean. You\'d convert file by file and each conversion increases your safety monotonically.'))),(0,i.kt)("p",null,"*"," When you absolutely need to write or interoperate with free-for-all JavaScript, we expose enough escape hatches for you."),(0,i.kt)("h2",s({},{id:"other-highlights"}),"Other Highlights"),(0,i.kt)("p",null,"Aside from the aforementioned simple, robust and fast type system, ReScript presents a few more advantages."),(0,i.kt)("h3",s({},{id:"faster-than-javascript"}),"Faster than JavaScript"),(0,i.kt)("p",null,"JavaScript's been aggressively optimized by talented engineers over a long span. Unfortunately, even for seasoned JS devs, it can be hard to know how to properly leverage JS's performance. ReScript's type system and compiler naturally guides you toward writing code that's very often performant by default, with good leverage of various Just-In-Time optimizations (hidden classes, inline caching, avoiding deopts, etc)."),(0,i.kt)("p",null,"A widespread adage to write fast JavaScript code is to write as if there's a type system (in order to trigger JS engines' good optimization heuristics); ReScript gives you a real one and generates code that's friendly to optimizations by default."),(0,i.kt)("h3",s({},{id:"high-quality-dead-code-elimination"}),"High Quality Dead Code Elimination"),(0,i.kt)("p",null,"The JavaScript ecosystem is very reliant on dependencies. Shipping the final product inevitably drags in a huge amount of code, lots of which the project doesn't actually use. These regions of dead code impact loading, parsing and interpretation speed. ReScript provides powerful dead code elimination at all levels:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Function- and module-level code elimination is facilitated by the well-engineered type system and purity analysis."),(0,i.kt)("li",{parentName:"ul"},"At the global level, ReScript generates code that is naturally friendly to dead code elimination done by bundling tools such as ",(0,i.kt)("a",s({parentName:"li"},{href:"https://github.com/rollup/rollup"}),"Rollup")," and ",(0,i.kt)("a",s({parentName:"li"},{href:"https://developers.google.com/closure/compiler/"}),"Closure Compiler"),", after its own sophisticated elimination pass."),(0,i.kt)("li",{parentName:"ul"},"The same applies for ReScript's own tiny runtime (which is written in ReScript itself).")),(0,i.kt)("h3",s({},{id:"tiny-js-output"}),"Tiny JS Output"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello world")," ReScript program generates ",(0,i.kt)("strong",{parentName:"p"},"20 bytes")," of JS code. Additionally, the standard library pieces you require in are only included when needed."),(0,i.kt)("h3",s({},{id:"fast-iteration-loop"}),"Fast Iteration Loop"),(0,i.kt)("p",null,"ReScript's build time is ",(0,i.kt)("strong",{parentName:"p"},"one or two orders of magnitude")," faster than alternatives. In its watcher mode, the build system usually finishes before you switch screen from the editor to the terminal tab (two digits of milliseconds). A fast iteration cycle reduces the need of keeping one's mental state around longer; this in turn allows one to stay in the flow longer and more often."),(0,i.kt)("h3",s({},{id:"readable-output--great-interop"}),"Readable Output & Great Interop"),(0,i.kt)("p",null,"Unreadable JavaScript code generated from other compiled-to-js languages makes it so that it could be, practically speaking:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hard to debug (cryptic stack trace, mangled variable names)"),(0,i.kt)("li",{parentName:"ul"},"Hard to learn from (non-straightforward mapping of concepts from one language to another)"),(0,i.kt)("li",{parentName:"ul"},"Hard to profile for performance (unclear what runtime performance cost there is)"),(0,i.kt)("li",{parentName:"ul"},"Hard to integrate with existing hand-written JS code")),(0,i.kt)("p",null,"ReScript's JS output is very readable. This is especially important while learning, where users might want to understand how the code's compiled, and to audit for bugs."),(0,i.kt)("p",null,"This characteristic, combined with a fully-featured JS interop system, allows ReScript code to be inserted into an existing JavaScript codebase almost unnoticed."),(0,i.kt)("h3",s({},{id:"preservation-of-code-structure"}),"Preservation of Code Structure"),(0,i.kt)("p",null,"ReScript maps one source file to one JavaScript output file. This eases the integration of existing tools such as bundlers and test runners. You can even start writing a single file without much change to your build setup. Each file's code structure is approximately preserved, too."),(0,i.kt)("h2",s({},{id:"conclusion"}),"Conclusion"),(0,i.kt)("p",null,"We hope the above gave you enough of an idea of ReScript and its differentiators. Feel free to ",(0,i.kt)("a",s({parentName:"p"},{href:"/try"}),"try it online")," to get a feel!"))}p.isMDXComponent=!0,p.frontmatter={title:"Introduction",description:"The hows and whys of ReScript",canonical:"/docs/manual/latest/introduction",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v9.0.0/introduction.mdx"}},28682:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v9.0.0/introduction",function(){return a(19574)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=28682,e(e.s=t);var t}));var t=e.O();_N_E=t}]);