(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4766],{17375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,{Z:function(){return r}})},86760:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(96156),i=n(17375),a=(n(67294),n(3905));function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",l(l(l({},p),n),{},{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",l({},{id:"build-system-overview"}),"Build System Overview"),(0,a.kt)("p",null,"ReScript comes with a build system, ",(0,a.kt)("a",l({parentName:"p"},{href:"https://www.npmjs.com/package/rescript"}),(0,a.kt)("inlineCode",{parentName:"a"},"rescript")),", that's fast, lean and used as the authoritative build system of the community."),(0,a.kt)("p",null,"Every ReScript project needs a build description file, ",(0,a.kt)("inlineCode",{parentName:"p"},"bsconfig.json"),"."),(0,a.kt)("h2",l({},{id:"options"}),"Options"),(0,a.kt)("p",null,"See ",(0,a.kt)("inlineCode",{parentName:"p"},"rescript -help"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"\u276f rescript -help\nAvailable flags\n-v, -version  display version number\n-h, -help     display help\nSubcommands:\n    build\n    clean\n    format\n    convert\n    help\nRun rescript subcommand -h for more details,\nFor example:\n    rescript build -h\n    rescript format -h\nThe default `rescript` is equivalent to `rescript build` subcommand\n")),(0,a.kt)("h2",l({},{id:"build-project"}),"Build Project"),(0,a.kt)("p",null,"Each build will create build artifacts from your project's source files."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To build a project (including its dependencies / pinned-dependencies)"),", run:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-sh"}),"rescript\n")),(0,a.kt)("p",null,"Which is an alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"rescript build"),"."),(0,a.kt)("p",null,"To keep a build watcher, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-sh"}),"rescript build -w\n")),(0,a.kt)("p",null,"Any new file change will be picked up and the build will re-run."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": third-party libraries (in ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),", or via ",(0,a.kt)("inlineCode",{parentName:"p"},"pinned-dependencies"),") aren't watched, as doing so may exceed the node.js watcher count limit."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note 2"),": In case you want to set up a project in a JS-monorepo-esque approach (",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," workspaces) where changes in your sub packages should be noticed by the build, you will need to define pinned dependencies in your main project's ",(0,a.kt)("inlineCode",{parentName:"p"},"bsconfig.json"),". More details ",(0,a.kt)("a",l({parentName:"p"},{href:"./build-pinned-dependencies"}),"here"),"."),(0,a.kt)("h2",l({},{id:"clean-project"}),"Clean Project"),(0,a.kt)("p",null,"If you ever get into a stale build for edge-case reasons, use:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-sh"}),"rescript clean\n")),(0,a.kt)("p",null,"This will clean your own project's build artifacts. To also clean the dependencies' artifacts:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-sh"}),"rescript clean -with-deps\n")))}s.isMDXComponent=!0,s.frontmatter={title:"Overview",metaTitle:"Build System Overview",description:"Documentation about the ReScript build system and its toolchain",canonical:"/docs/manual/latest/build-overview",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/latest/build-overview.mdx"}},68134:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/latest/build-overview",function(){return n(86760)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=68134,e(e.s=t);var t}));var t=e.O();_N_E=t}]);