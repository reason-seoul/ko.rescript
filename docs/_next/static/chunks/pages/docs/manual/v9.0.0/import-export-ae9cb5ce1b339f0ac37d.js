(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[52452],{17375:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,{Z:function(){return n}})},213:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(17375),o=r(96156),a=(r(67294),r(3905));function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s,l=(s="CodeTab",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",p({},e))}),u={};function c(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",p(p(p({},u),r),{},{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",p({},{id:"import--export"}),"Import & Export"),(0,a.kt)("h2",p({},{id:"import-a-modulefile"}),"Import a Module/File"),(0,a.kt)("p",null,"Unlike JavaScript, ReScript doesn't have or need import statements:"),(0,a.kt)(l,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-res"}),"// Inside School.res\nlet studentMessage = Student.message\n")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),'var Student = require("./Student.bs");\nvar studentMessage = Student.message\n'))),(0,a.kt)("p",null,"The above code refers to the ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," binding in the file ",(0,a.kt)("inlineCode",{parentName:"p"},"Student.res"),". Every ReScript file is also a module, so accessing another file's content is the same as accessing another module's content!"),(0,a.kt)("p",null,"A ReScript project's file names need to be unique."),(0,a.kt)("h2",p({},{id:"export-stuff"}),"Export Stuff"),(0,a.kt)("p",null,"By default, every file's type declaration, binding and module is exported, aka publicly usable by another file. ",(0,a.kt)("strong",{parentName:"p"},"This also means those values, once compiled into JS, are immediately usable by your JS code"),"."),(0,a.kt)("p",null,"To only export a few selected things, use a ",(0,a.kt)("inlineCode",{parentName:"p"},".resi")," ",(0,a.kt)("a",p({parentName:"p"},{href:"module.md#signatures"}),"interface file"),"."),(0,a.kt)("h2",p({},{id:"work-with-javascript-import--export"}),"Work with JavaScript Import & Export"),(0,a.kt)("p",null,"To see how to import JS modules and export stuff for JS consumption, see the JavaScript Interop section's ",(0,a.kt)("a",p({parentName:"p"},{href:"import-from-export-to-js.md"}),"Import from/Export to JS"),"."))}c.isMDXComponent=!0,c.frontmatter={title:"Import & Export",description:"Importing / exporting in ReScript modules",canonical:"/docs/manual/latest/import-export",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v9.0.0/import-export.mdx"}},39881:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v9.0.0/import-export",function(){return r(213)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=39881,e(e.s=t);var t}));var t=e.O();_N_E=t}]);