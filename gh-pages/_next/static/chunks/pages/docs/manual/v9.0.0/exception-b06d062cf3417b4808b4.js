(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41611],{17375:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,{Z:function(){return a}})},75554:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var a=t(17375),r=t(96156),o=(t(67294),t(3905));function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var l,p=(l="CodeTab",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",s({},e))}),c={};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",s(s(s({},c),t),{},{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",s({},{id:"exception"}),"Exception"),(0,o.kt)("p",null,"Exceptions are just a special kind of variant, thrown in ",(0,o.kt)("strong",{parentName:"p"},"exceptional")," cases (don't abuse them!)."),(0,o.kt)("h2",s({},{id:"usage"}),"Usage"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-res"}),"let getItem = (items) =>\n  if callSomeFunctionThatThrows() {\n    // return the found item here\n    1\n  } else {\n    raise(Not_found)\n  }\n\nlet result =\n  try {\n    getItem([1, 2, 3])\n  } catch {\n  | Not_found => 0 // Default value if getItem throws\n  }\n")),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-js"}),'function getItem(items) {\n  if (callSomeFunctionThatThrows()) {\n    return 1;\n  }\n  throw {\n    RE_EXN_ID: "Not_found",\n    Error: new Error()\n  };\n}\n\nvar result;\n\ntry {\n  result = getItem([1, 2, 3]);\n} catch (raw_exn) {\n  var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);\n  if (exn.RE_EXN_ID === "Not_found") {\n    result = 0;\n  } else {\n    throw exn;\n  }\n}\n'))),(0,o.kt)("p",null,"Note that the above is just for demonstration purposes; in reality, you'd return an ",(0,o.kt)("inlineCode",{parentName:"p"},"option<int>")," directly from ",(0,o.kt)("inlineCode",{parentName:"p"},"getItem")," and avoid the ",(0,o.kt)("inlineCode",{parentName:"p"},"try")," altogether."),(0,o.kt)("p",null,"You can directly match on exceptions ",(0,o.kt)("em",{parentName:"p"},"while")," getting another return value from a function:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-res"}),'switch List.find(i => i === theItem, myItems) {\n| item => Js.log(item)\n| exception Not_found => Js.log("No such item found!")\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-js"}),'var exit = 0;\n\nvar item;\n\ntry {\n  item = List.find(function(i) {\n    return i === theItem;\n  }, myItems);\n  exit = 1;\n}\ncatch (raw_exn){\n  var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);\n  if (exn.RE_EXN_ID === "Not_found") {\n    console.log("No such item found!");\n  } else {\n    throw exn;\n  }\n}\n\nif (exit === 1) {\n  console.log(item);\n}\n'))),(0,o.kt)("p",null,"You can also make your own exceptions like you'd make a variant (exceptions need to be capitalized too)."),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'exception InputClosed(string)\n// later on\nraise(InputClosed("The stream has closed!"))\n')),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-js"}),'var Caml_exceptions = require("./stdlib/caml_exceptions.js");\n\nvar InputClosed = Caml_exceptions.create("MyFile.InputClosed");\n\nthrow {\n  RE_EXN_ID: InputClosed,\n  _1: "The stream has closed!",\n  Error: new Error()\n};\n'))),(0,o.kt)("h2",s({},{id:"catching-js-exceptions"}),"Catching JS Exceptions"),(0,o.kt)("p",null,"To distinguish between JavaScript exceptions and ReScript exceptions, ReScript namespaces JS exceptions under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Exn.Error(payload)")," variant. To catch an exception thrown from the JS side:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-res"}),'try {\n  someJSFunctionThatThrows()\n} catch {\n| Js.Exn.Error(obj) =>\n  switch Js.Exn.message(obj) {\n  | Some(m) => Js.log("Caught a JS exception! Message: " ++ m)\n  | None => ()\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-js"}),'var Js_exn = require("./stdlib/js_exn.js");\nvar Caml_js_exceptions = require("./stdlib/caml_js_exceptions.js");\n\ntry {\n  someJSFunctionThatThrows();\n} catch (raw_obj) {\n  var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);\n  if (obj.RE_EXN_ID === Js_exn.$$Error) {\n    var m = obj._1.message;\n    if (m !== undefined) {\n      console.log("Caught a JS exception! Message: " + m);\n    }\n  } else {\n    throw obj;\n  }\n}\n'))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"obj")," here is of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Exn.t"),", intentionally opaque to disallow illegal operations. To operate on ",(0,o.kt)("inlineCode",{parentName:"p"},"obj"),", do like the code above by using the standard library's ",(0,o.kt)("a",s({parentName:"p"},{href:"api/js/exn"}),(0,o.kt)("inlineCode",{parentName:"a"},"Js.Exn"))," module's helpers."),(0,o.kt)("h2",s({},{id:"raise-a-js-exception"}),"Raise a JS Exception"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"raise(MyException)")," raises a ReScript exception. To raise a JavaScript exception (whatever your purpose is), use ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Exn.raiseError"),":"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let myTest = () => {\n  Js.Exn.raiseError("Hello!")\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-js"}),'var Js_exn = require("./stdlib/js_exn.js");\n\nfunction myTest() {\n  return Js_exn.raiseError("Hello!");\n}\n'))),(0,o.kt)("p",null,"Then you can catch it from the JS side:"),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-js"}),'// after importing `myTest`...\ntry {\n  myTest()\n} catch (e) {\n  console.log(e.message) // "Hello!"\n}\n')),(0,o.kt)("h2",s({},{id:"catch-rescript-exceptions-from-js"}),"Catch ReScript Exceptions from JS"),(0,o.kt)("p",null,"The previous section is less useful than you think; to let your JS code work with your exception-throwing ReScript code, the latter doesn't actually need to throw a JS exception. ReScript exceptions can be used by JS code!"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'exception BadArgument({myMessage: string})\n\nlet myTest = () => {\n  raise(BadArgument({myMessage: "Oops!"}))\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-js"}),'var Caml_exceptions = require("./stdlib/caml_exceptions.js");\n\nvar BadArgument = Caml_exceptions.create("Playground.BadArgument");\n\nfunction myTest() {\n  throw {\n    RE_EXN_ID: BadArgument,\n    myMessage: "Oops!",\n    Error: new Error()\n  };\n}\n'))),(0,o.kt)("p",null,"Then, in your JS:"),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-js"}),'// after importing `myTest`...\ntry {\n  myTest()\n} catch (e) {\n  console.log(e.myMessage) // "Oops!"\n  console.log(e.Error.stack) // the stack trace\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: ",(0,o.kt)("inlineCode",{parentName:"p"},"RE_EXN_ID")," is an internal field for bookkeeping purposes. Don't use it on the JS side. Use the other fields.")),(0,o.kt)("p",null,"The above ",(0,o.kt)("inlineCode",{parentName:"p"},"BadArgument")," exception takes an inline record type. We special-case compile the exception as ",(0,o.kt)("inlineCode",{parentName:"p"},"{RE_EXN_ID, myMessage, Error}")," for good ergonomics. If the exception instead took ordinary positional arguments, l like the standard library's ",(0,o.kt)("inlineCode",{parentName:"p"},'Invalid_argument("Oops!")'),", which takes a single argument, the argument is compiled to JS as the field ",(0,o.kt)("inlineCode",{parentName:"p"},"_1")," instead. A second positional argument would compile to ",(0,o.kt)("inlineCode",{parentName:"p"},"_2"),", etc."),(0,o.kt)("h2",s({},{id:"tips--tricks"}),"Tips & Tricks"),(0,o.kt)("p",null,"When you have ordinary variants, you often don't ",(0,o.kt)("strong",{parentName:"p"},"need")," exceptions. For example, instead of throwing when ",(0,o.kt)("inlineCode",{parentName:"p"},"item")," can't be found in a collection, try to return an ",(0,o.kt)("inlineCode",{parentName:"p"},"option<item>")," (",(0,o.kt)("inlineCode",{parentName:"p"},"None")," in this case) instead."),(0,o.kt)("h3",s({},{id:"catch-both-rescript-and-js-exceptions-in-the-same-catch-clause"}),"Catch Both ReScript and JS Exceptions in the Same ",(0,o.kt)("inlineCode",{parentName:"h3"},"catch")," Clause"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-res"}),"try {\n  someOtherJSFunctionThatThrows()\n} catch {\n| Not_found => ... // catch a ReScript exception\n| Invalid_argument(_) => ... // catch a second ReScript exception\n| Js.Exn.Error(obj) => ... // catch the JS exception\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-js"}),'var Js_exn = require("./stdlib/js_exn.js");\nvar Caml_js_exceptions = require("./stdlib/caml_js_exceptions.js");\n\ntry {\n  someOtherJSFunctionThatThrows();\n} catch (raw_obj) {\n  var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);\n  if (\n    obj.RE_EXN_ID !== "Not_found" &&\n    obj.RE_EXN_ID !== "Invalid_argument" &&\n    obj.RE_EXN_ID !== Js_exn.$$Error\n  ) {\n    throw obj;\n  }\n}\n'))),(0,o.kt)("p",null,"This technically works, but hopefully you don't ever have to work with such code..."))}u.isMDXComponent=!0,u.frontmatter={title:"Exception",description:"Exceptions and exception handling in ReScript",canonical:"/docs/manual/latest/exception",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v9.0.0/exception.mdx"}},37287:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v9.0.0/exception",function(){return t(75554)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return n=37287,e(e.s=n);var n}));var n=e.O();_N_E=n}]);