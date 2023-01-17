(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81822],{17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},56283:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(17375),r=n(96156),o=(n(67294),n(3905));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s,p=(s="CodeTab",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",i({},e))}),c={};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",i(i(i({},c),n),{},{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",i({},{id:"jsx"}),"JSX"),(0,o.kt)("p",null,"Would you like some HTML syntax in your ReScript? If not, quickly skip over this section and pretend you didn't see anything!"),(0,o.kt)("p",null,"ReScript supports the JSX syntax, with some slight differences compared to the one in ",(0,o.kt)("a",i({parentName:"p"},{href:"https://facebook.github.io/react/docs/introducing-jsx.html"}),"ReactJS"),". ReScript JSX isn't tied to ReactJS; they translate to normal function calls:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," for ",(0,o.kt)("a",i({parentName:"p"},{href:"https://reasonml.github.io/reason-react/en/"}),"ReasonReact")," readers: this isn't what ReasonReact turns JSX into, in the end. See Usage section for more info."),(0,o.kt)("h2",i({},{id:"capitalized-tag"}),"Capitalized Tag"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),'<MyComponent name={"ReScript"} />\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'React.createElement(\n  MyComponent.make,\n  MyComponent.makeProps("ReScript", undefined)\n);\n'))),(0,o.kt)("p",null,"becomes"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),'@JSX MyComponent.createElement(~name="ReScript", ~children=list{}, ())\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'React.createElement(\n  MyComponent.make,\n  MyComponent.makeProps("ReScript", undefined)\n);\n'))),(0,o.kt)("h2",i({},{id:"uncapitalized-tag"}),"Uncapitalized Tag"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),"<div onClick={handler}> child1 child2 </div>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'React.createElement("div", {\n  onClick: handler\n}, child1, child2);\n'))),(0,o.kt)("p",null,"becomes"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),"@JSX div(~onClick=handler, ~children=list{child1, child2}, ())\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'React.createElement("div", {\n  onClick: handler\n}, child1, child2);\n'))),(0,o.kt)("h2",i({},{id:"fragment"}),"Fragment"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),"<> child1 child2 </>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"React.createElement(React.Fragment, undefined, child1, child2);\n"))),(0,o.kt)("p",null,"becomes"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),"@JSX list{child1, child2}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"React.createElement(React.Fragment, undefined, child1, child2);\n"))),(0,o.kt)("h3",i({},{id:"children"}),"Children"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),"<MyComponent> child1 child2 </MyComponent>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"React.createElement(MyComponent.make, MyComponent.makeProps(null, undefined), child1, child2);\n"))),(0,o.kt)("p",null,"This is the syntax for passing a list of two items, ",(0,o.kt)("inlineCode",{parentName:"p"},"child1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"child2"),", to the children position. It desugars to a list containing ",(0,o.kt)("inlineCode",{parentName:"p"},"child1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"child2"),":"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),"@JSX MyComponent.createElement(~children=list{child1, child2}, ())\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"React.createElement(MyComponent.make, MyComponent.makeProps(null, undefined), child1, child2);\n"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," again that this isn't the transform for ReasonReact; ReasonReact turns the final list into an array. But the idea still applies."),(0,o.kt)("p",null,"So naturally, ",(0,o.kt)("inlineCode",{parentName:"p"},"<MyComponent> myChild </MyComponent>")," desugars to ",(0,o.kt)("inlineCode",{parentName:"p"},"@JSX MyComponent.createElement(~children=list{myChild}, ())"),". I.e. whatever you do, the arguments passed to the children position will be wrapped in a list. What if you don't want that? ",(0,o.kt)("strong",{parentName:"p"},"What if you want to directly pass ",(0,o.kt)("inlineCode",{parentName:"strong"},"myChild")," without an extra wrapping"),"?"),(0,o.kt)("h4",i({},{id:"children-spread"}),"Children Spread"),(0,o.kt)("p",null,"To solve the above problem, we've introduced"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),"<MyComponent> ...myChild </MyComponent>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"React.createElement(MyComponent.make, MyComponent.makeProps(myChild, undefined));\n"))),(0,o.kt)("p",null,"This passes the value ",(0,o.kt)("inlineCode",{parentName:"p"},"myChild")," ",(0,o.kt)("em",{parentName:"p"},"without")," wrapping it in a list (or array, in the case of ReasonReact). Aka, this desugars to:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),"@JSX MyComponent.createElement(~children=myChild, ())\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"React.createElement(MyComponent.make, MyComponent.makeProps(myChild, undefined));\n"))),(0,o.kt)("p",null,"This is extra useful in the cases where you are handled ",(0,o.kt)("inlineCode",{parentName:"p"},"myChild")," that is already a list of things, and want to forward that without wrapping it an extra time (which would be a type error) ","*",". It also allows you to pass arbitrary data structures at ",(0,o.kt)("inlineCode",{parentName:"p"},"children")," position (remember, JSX ",(0,o.kt)("inlineCode",{parentName:"p"},"children")," is really just a totally normal prop):"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),'<MyComponent> ...((theClassName) => <div className=theClassName />) </MyComponent>\n\n<MyForm> ...("Hello", "Submit") </MyForm>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'React.createElement(\n  make,\n  makeProps(function (theClassName) {\n    return React.createElement("div", {\n      className: theClassName,\n    });\n  }, undefined)\n);\n\nReact.createElement(MyForm.make, MyForm.makeProps(["Hello", "Submit"], undefined));\n'))),(0,o.kt)("h2",i({},{id:"usage"}),"Usage"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",i({parentName:"p"},{href:"https://reasonml.github.io/reason-react/docs/en/jsx"}),"ReasonReact JSX")," for an example application of JSX, which transforms the above calls into a ReasonReact-specific call."),(0,o.kt)("p",null,"Here's a JSX tag that shows most of the features."),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),'<MyComponent\n  booleanAttribute={true}\n  stringAttribute="string"\n  intAttribute=1\n  forcedOptional=?{Some("hello")}\n  onClick={handleClick}>\n  <div> {React.string("hello")} </div>\n</MyComponent>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'React.createElement(\n  MyComponent.make,\n  MyComponent.makeProps(\n    true,\n    "string",\n    1,\n    "hello",\n    handleClick,\n    React.createElement("div", undefined, "hello"),\n    undefined\n  )\n);\n'))),(0,o.kt)("h2",i({},{id:"departures-from-js-jsx"}),"Departures From JS JSX"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Attributes and children don't mandate ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),", but we show them anyway for ease of learning. Once you format your file, some of them go away and some turn into parentheses."),(0,o.kt)("li",{parentName:"ul"},"There is no support for JSX prop spread: ",(0,o.kt)("inlineCode",{parentName:"li"},"<Comp {...props} />"),". Though somewhat related,  we do have children spread, described above: ",(0,o.kt)("inlineCode",{parentName:"li"},"<Comp> ...children </Comp>"),"."),(0,o.kt)("li",{parentName:"ul"},"Punning!")),(0,o.kt)("h3",i({},{id:"punning"}),"Punning"),(0,o.kt)("p",null,'"Punning" refers to the syntax shorthand for when a label and a value are the same. For example, in JavaScript, instead of doing ',(0,o.kt)("inlineCode",{parentName:"p"},"return {name: name}"),", you can do ",(0,o.kt)("inlineCode",{parentName:"p"},"return {name}"),"."),(0,o.kt)("p",null,"Reason JSX supports punning. ",(0,o.kt)("inlineCode",{parentName:"p"},"<input checked />")," is just a shorthand for ",(0,o.kt)("inlineCode",{parentName:"p"},"<input checked=checked />"),". The formatter will help you format to the punned syntax whenever possible. This is convenient in the cases where there are lots of props to pass down:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),"<MyComponent isLoading text onClick />\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"React.createElement(\n  MyComponent.make,\n  MyComponent.makeProps(isLoading, text, onClick, undefined)\n);\n"))),(0,o.kt)("p",null,"Consequently, a Reason JSX component can cram in a few more props before reaching for extra libraries solutions that avoids props passing."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," that this is a departure from ReactJS JSX, which does ",(0,o.kt)("strong",{parentName:"p"},"not")," have punning. ReactJS' ",(0,o.kt)("inlineCode",{parentName:"p"},"<input checked />")," desugars to ",(0,o.kt)("inlineCode",{parentName:"p"},"<input checked=true />"),", in order to conform to DOM's idioms and for backward compatibility."),(0,o.kt)("h2",i({},{id:"tip--tricks"}),"Tip & Tricks"),(0,o.kt)("p",null,"For library authors wanting to take advantage of the JSX: the ",(0,o.kt)("inlineCode",{parentName:"p"},"@JSX")," attribute above is a hook for potential ppx macros to spot a function wanting to format as JSX. Once you spot the function, you can turn it into any other expression."),(0,o.kt)("p",null,"This way, everyone gets to benefit the JSX syntax without needing to opt into a specific library using it, e.g. ReasonReact."),(0,o.kt)("p",null,"JSX calls supports the features of ",(0,o.kt)("a",i({parentName:"p"},{href:"function.md#labeled-arguments"}),"labeled arguments"),": optional, explicitly passed optional and optional with default."),(0,o.kt)("h2",i({},{id:"design-decisions"}),"Design Decisions"),(0,o.kt)("p",null,"*"," You might wonder why you never needed such children spread in ReactJS; ReactJS uses some special runtime logic + special syntax transforms + variadic argument detection & marking to avoid most of these cases (",(0,o.kt)("a",i({parentName:"p"},{href:"https://github.com/facebook/react/blob/9b36df86c6ccecb73ca44899386e6a72a83ad445/packages/react/src/ReactElement.js#L207"}),"see here"),"). Such dynamic usage complexifies the type system detection ",(0,o.kt)("em",{parentName:"p"},"quite a bit"),". Since we control the whole syntax and ReasonReact, we decided to introduce children spread to disambiguate between the case of wrapping vs not wrapping, without compile-time & runtime cost!"))}d.isMDXComponent=!0,d.frontmatter={title:"JSX",description:"JSX syntax in ReScript and React",canonical:"/docs/manual/latest/jsx",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/latest/jsx.mdx"}},38657:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/latest/jsx",function(){return n(56283)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=38657,e(e.s=t);var t}));var t=e.O();_N_E=t}]);