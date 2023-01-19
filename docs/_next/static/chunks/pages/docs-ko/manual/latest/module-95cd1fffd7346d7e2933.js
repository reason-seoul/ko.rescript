(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10051],{17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},75846:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(17375),r=n(96156),i=(n(67294),n(3905));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s,p=(s="CodeTab",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",o({},e))}),u={};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",o(o(o({},u),n),{},{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",o({},{id:"module"}),"Module"),(0,i.kt)("h2",o({},{id:"basics"}),"Basics"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Modules are like mini files"),"! They can contain type definitions, ",(0,i.kt)("inlineCode",{parentName:"p"},"let"),"\nbindings, nested modules, etc."),(0,i.kt)("h3",o({},{id:"creation"}),"Creation"),(0,i.kt)("p",null,"To create a module, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"module")," keyword. The module name must start with a\n",(0,i.kt)("strong",{parentName:"p"},"capital letter"),". Whatever you could place in a ",(0,i.kt)("inlineCode",{parentName:"p"},".res")," file, you may place\ninside a module definition's ",(0,i.kt)("inlineCode",{parentName:"p"},"{}")," block."),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'module School = {\n  type profession = Teacher | Director\n\n  let person1 = Teacher\n  let getProfession = (person) =>\n    switch person {\n    | Teacher => "A teacher"\n    | Director => "A director"\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),'function getProfession(person) {\n  if (person) {\n    return "A director";\n  } else {\n    return "A teacher";\n  }\n}\n\nvar School = {\n  person1: /* Teacher */0,\n  getProfession: getProfession\n};\n'))),(0,i.kt)("p",null,"A module's contents (including types!) can be accessed much like a record's,\nusing the ",(0,i.kt)("inlineCode",{parentName:"p"},".")," notation. This demonstrates modules' utility for namespacing."),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res"}),'let anotherPerson: School.profession = School.Teacher\nJs.log(School.getProfession(anotherPerson)) /* "A teacher" */\n')),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var anotherPerson = /* Teacher */0;\nconsole.log("A teacher");\n'))),(0,i.kt)("p",null,"Nested modules work too."),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'module MyModule = {\n  module NestedModule = {\n    let message = "hello"\n  }\n}\n\nlet message = MyModule.NestedModule.message\n')),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),"var NestedModule = {\n  message: message\n};\n\nvar MyModule = {\n  NestedModule: NestedModule\n};\n\nvar message = MyModule.NestedModule.message;\n"))),(0,i.kt)("h3",o({},{id:"opening-a-module"}),(0,i.kt)("inlineCode",{parentName:"h3"},"open"),"ing a module"),(0,i.kt)("p",null,'Constantly referring to a value/type in a module can be tedious. Instead, we can "open" a module and refer to its contents without always prepending them with the\nmodule\'s name. Instead of writing:'),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res"}),"let p = School.getProfession(School.person1)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),"var p = School.getProfession(School.person1);\n"))),(0,i.kt)("p",null,"We can write:"),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res"}),"open School\nlet p = getProfession(person1)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),"var p = School.getProfession(School.person1);\n"))),(0,i.kt)("p",null,"The content of ",(0,i.kt)("inlineCode",{parentName:"p"},"School")," module are made visible (",(0,i.kt)("strong",{parentName:"p"},"not")," copied into the file, but simply made visible!) in scope. ",(0,i.kt)("inlineCode",{parentName:"p"},"profession"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"getProfession")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"person1")," will thus correctly be found."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Use ",(0,i.kt)("inlineCode",{parentName:"strong"},"open")," this sparingly, it's convenient, but makes it hard to know where some values come from"),". You should usually use ",(0,i.kt)("inlineCode",{parentName:"p"},"open")," in a local scope:"),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res"}),"let p = {\n  open School\n  getProfession(person1)\n}\n/* School's content isn't visible here anymore */\n")),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),"var p = School.getProfession(School.person1);\n"))),(0,i.kt)("h3",o({},{id:"use-open-to-ignore-shadow-warnings"}),"Use ",(0,i.kt)("inlineCode",{parentName:"h3"},"open!")," to ignore shadow warnings"),(0,i.kt)("p",null,"There are situations where ",(0,i.kt)("inlineCode",{parentName:"p"},"open")," will cause a warning due to existing identifiers (bindings, types) being redefined. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"open!")," to explicitly tell the compiler that this is desired behavior."),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res"}),"let map = (arr, value) => {\n  value\n}\n\n// opening Js.Array2 would shadow our previously defined `map`\n// `open!` will explicitly turn off the automatic warning\nopen! Js.Array2\nlet arr = map([1,2,3], (a) => { a + 1})\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Same as with ",(0,i.kt)("inlineCode",{parentName:"p"},"open"),", don't overuse ",(0,i.kt)("inlineCode",{parentName:"p"},"open!")," statements if not necessary. Use (sub)modules to prevent shadowing issues."),(0,i.kt)("h3",o({},{id:"destructuring-modules"}),"Destructuring modules"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Since 9.0.2")),(0,i.kt)("p",null,"As an alternative to ",(0,i.kt)("inlineCode",{parentName:"p"},"open"),"ing a module, you can also destructure a module's functions and values into separate let bindings (similarly on how we'd destructure an object in JavaScript)."),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res"}),'module User = {\n  let user1 = "Anna"\n  let user2 = "Franz"\n}\n\n// Destructure by name\nlet {user1, user2} = module(User)\n\n// Destructure with different alias\nlet {user1: anna, user2: franz} = module(User)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var user1 = "Anna";\n\nvar user2 = "Franz";\n\nvar User = {\n  user1: user1,\n  user2: user2\n};\n'))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," You can't extract types with module destructuring \u2014 use a type alias instead (",(0,i.kt)("inlineCode",{parentName:"p"},"type user = User.myUserType"),")."),(0,i.kt)("h3",o({},{id:"extending-modules"}),"Extending modules"),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"include"),' in a module statically "spreads" a module\'s content into a new one, thus often fulfill the role of "inheritance" or "mixin".'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": this is equivalent to a compiler-level copy paste. ",(0,i.kt)("strong",{parentName:"p"},"We heavily discourage ",(0,i.kt)("inlineCode",{parentName:"strong"},"include")),". Use it as last resort!"),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'module BaseComponent = {\n  let defaultGreeting = "Hello"\n  let getAudience = (~excited) => excited ? "world!" : "world"\n}\n\nmodule ActualComponent = {\n  /* the content is copied over */\n  include BaseComponent\n  /* overrides BaseComponent.defaultGreeting */\n  let defaultGreeting = "Hey"\n  let render = () => defaultGreeting ++ " " ++ getAudience(~excited=true)\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),'function getAudience(excited) {\n  if (excited) {\n    return "world!";\n  } else {\n    return "world";\n  }\n}\n\nvar BaseComponent = {\n  defaultGreeting: "Hello",\n  getAudience: getAudience\n};\n\nvar defaultGreeting = "Hey";\n\nfunction render(param) {\n  return "Hey world!";\n}\n\nvar ActualComponent = {\n  getAudience: getAudience,\n  defaultGreeting: defaultGreeting,\n  render: render\n};\n'))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"open")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"include")," are very different! The former brings a module's content into your current scope, so that you don't have to refer to a value by prefixing it with the module's name every time. The latter ",(0,i.kt)("strong",{parentName:"p"},"copies over")," the definition of a module statically, then also do an ",(0,i.kt)("inlineCode",{parentName:"p"},"open"),"."),(0,i.kt)("h3",o({},{id:"every-res-file-is-a-module"}),"Every ",(0,i.kt)("inlineCode",{parentName:"h3"},".res")," file is a module"),(0,i.kt)("p",null,"Every ReScript file is itself compiled to a module of the same name as the file name, capitalized. The file ",(0,i.kt)("inlineCode",{parentName:"p"},"React.res")," implicitly forms a module ",(0,i.kt)("inlineCode",{parentName:"p"},"React"),", which can be seen by other source files."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": ReScript file names should, by convention, be capitalized so that their casing matches their module name. Uncapitalized file names are not invalid, but will be implicitly transformed into a capitalized module name. I.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"file.res")," will be compiled into the module ",(0,i.kt)("inlineCode",{parentName:"p"},"File"),". To simplify and minimize the disconnect here, the convention is therefore to capitalize file names."),(0,i.kt)("h2",o({},{id:"signatures"}),"Signatures"),(0,i.kt)("p",null,'A module\'s type is called a "signature", and can be written explicitly. If a\nmodule is like a ',(0,i.kt)("inlineCode",{parentName:"p"},".res")," (implementation) file, then a module's signature is like\na ",(0,i.kt)("inlineCode",{parentName:"p"},".resi")," (interface) file."),(0,i.kt)("h3",o({},{id:"creation-1"}),"Creation"),(0,i.kt)("p",null,"To create a signature, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"module type")," keyword. The signature name must start with a\n",(0,i.kt)("strong",{parentName:"p"},"capital letter"),". Whatever you could place in a ",(0,i.kt)("inlineCode",{parentName:"p"},".resi")," file, you may place\ninside a signature definition's ",(0,i.kt)("inlineCode",{parentName:"p"},"{}")," block."),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"/* Picking up previous section's example */\nmodule type EstablishmentType = {\n  type profession\n  let getProfession: profession => string\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,i.kt)("p",null,"A signature defines the list of requirements that a module must satisfy in order\nfor that module to match the signature. Those requirements are of the form:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"let x: int")," requires a ",(0,i.kt)("inlineCode",{parentName:"li"},"let")," binding named ",(0,i.kt)("inlineCode",{parentName:"li"},"x"),", of type ",(0,i.kt)("inlineCode",{parentName:"li"},"int"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type t = someType")," requires a type field ",(0,i.kt)("inlineCode",{parentName:"li"},"t")," to be equal to ",(0,i.kt)("inlineCode",{parentName:"li"},"someType"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type t")," requires a type field ",(0,i.kt)("inlineCode",{parentName:"li"},"t"),", but without imposing any requirements on the actual, concrete type of ",(0,i.kt)("inlineCode",{parentName:"li"},"t"),". We'd use ",(0,i.kt)("inlineCode",{parentName:"li"},"t")," in other entries in the signature to describe relationships, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"let makePair: t => (t, t)")," but we cannot, for example, assume that ",(0,i.kt)("inlineCode",{parentName:"li"},"t")," is an ",(0,i.kt)("inlineCode",{parentName:"li"},"int"),". This gives us great, enforced abstraction abilities.")),(0,i.kt)("p",null,"To illustrate the various kinds of type entries, consider the above signature\n",(0,i.kt)("inlineCode",{parentName:"p"},"EstablishmentType")," which requires that a module:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Declare a type named ",(0,i.kt)("inlineCode",{parentName:"li"},"profession"),"."),(0,i.kt)("li",{parentName:"ul"},"Must include a function that takes in a value of the type ",(0,i.kt)("inlineCode",{parentName:"li"},"profession")," and returns a string.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),":"),(0,i.kt)("p",null,"Modules of the type ",(0,i.kt)("inlineCode",{parentName:"p"},"EstablishmentType")," can contain more fields than the\nsignature declares, just like the module ",(0,i.kt)("inlineCode",{parentName:"p"},"School")," in the previous section (if we\nchoose to assign it the type ",(0,i.kt)("inlineCode",{parentName:"p"},"EstablishmentType"),". Otherwise, ",(0,i.kt)("inlineCode",{parentName:"p"},"School")," exposes\nevery field). This effectively makes the ",(0,i.kt)("inlineCode",{parentName:"p"},"person1")," field an enforced\nimplementation detail! Outsiders can't access it, since it's not present in the\nsignature; the signature ",(0,i.kt)("strong",{parentName:"p"},"constrained")," what others can access."),(0,i.kt)("p",null,"The type ",(0,i.kt)("inlineCode",{parentName:"p"},"EstablishmentType.profession")," is ",(0,i.kt)("strong",{parentName:"p"},"abstract"),": it doesn't have a\nconcrete type; it's saying \"I don't care what the actual type is, but it's used\nas input to ",(0,i.kt)("inlineCode",{parentName:"p"},"getProfession"),'". This is useful to fit many modules under the same\ninterface:'),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res"}),"module Company: EstablishmentType = {\n  type profession = CEO | Designer | Engineer | ...\n\n  let getProfession = (person) => ...\n  let person1 = ...\n  let person2 = ...\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),"function getProfession(person) {\n  ...\n}\n\nvar person1 = ...\n\nvar person2 = ...\n\nvar Company = {\n  getProfession: getProfession,\n  person1: person1,\n  person2: person2\n};\n"))),(0,i.kt)("p",null,"It's also useful to hide the underlying type as an implementation detail others\ncan't rely on. If you ask what the type of ",(0,i.kt)("inlineCode",{parentName:"p"},"Company.profession")," is, instead of\nexposing the variant, it'll only tell you \"it's ",(0,i.kt)("inlineCode",{parentName:"p"},"Company.profession"),'".'),(0,i.kt)("h3",o({},{id:"extending-module-signatures"}),"Extending module signatures"),(0,i.kt)("p",null,"Like modules themselves, module signatures can also be extended by other module signatures using ",(0,i.kt)("inlineCode",{parentName:"p"},"include"),". Again, ",(0,i.kt)("strong",{parentName:"p"},"heavily discouraged"),":"),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module type BaseComponent = {\n  let defaultGreeting: string\n  let getAudience: (~excited: bool) => string\n}\n\nmodule type ActualComponent = {\n  /* the BaseComponent signature is copied over */\n  include BaseComponent\n  let render: unit => string\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseComponent")," is a module ",(0,i.kt)("strong",{parentName:"p"},"type"),", not an actual module itself!"),(0,i.kt)("p",null,"If you do not have a defined module type, you can extract it from an actual module\nusing ",(0,i.kt)("inlineCode",{parentName:"p"},"include (module type of ActualModuleName)"),". For example, we can extend the\n",(0,i.kt)("inlineCode",{parentName:"p"},"List")," module from the standard library, which does not define a module\ntype."),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module type MyList = {\n  include (module type of List)\n  let myListFun: list<'a> => list<'a>\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,i.kt)("h3",o({},{id:"every-resi-file-is-a-signature"}),"Every ",(0,i.kt)("inlineCode",{parentName:"h3"},".resi")," file is a signature"),(0,i.kt)("p",null,"Similar to how a ",(0,i.kt)("inlineCode",{parentName:"p"},"React.res")," file implicitly defines a module ",(0,i.kt)("inlineCode",{parentName:"p"},"React"),", a file\n",(0,i.kt)("inlineCode",{parentName:"p"},"React.resi")," implicitly defines a signature for ",(0,i.kt)("inlineCode",{parentName:"p"},"React"),". If ",(0,i.kt)("inlineCode",{parentName:"p"},"React.resi")," isn't\nprovided, the signature of ",(0,i.kt)("inlineCode",{parentName:"p"},"React.res")," defaults to exposing all the fields of the\nmodule. Because they don't contain implementation files, ",(0,i.kt)("inlineCode",{parentName:"p"},".resi")," files are used\nin the ecosystem to also document the public API of their corresponding modules."),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"/* file React.res (implementation. Compiles to module React) */\ntype state = int\nlet render = (str) => str\n")),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),"function render(str) {\n  return str;\n}\n"))),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"/* file React.resi (interface. Compiles to the signature of React.res) */\ntype state = int\nlet render: string => string\n")),(0,i.kt)("h2",o({},{id:"module-functions-functors"}),"Module Functions (functors)"),(0,i.kt)("p",null,'Modules can be passed to functions! It would be the equivalent of passing a file\nas a first-class item. However, modules are at a different "layer" of the\nlanguage than other common concepts, so we can\'t pass them to ',(0,i.kt)("em",{parentName:"p"},"regular"),'\nfunctions. Instead, we pass them to special functions called "functors".'),(0,i.kt)("p",null,"The syntax for defining and using functors is very much like the syntax\nfor defining and using regular functions. The primary differences are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Functors use the ",(0,i.kt)("inlineCode",{parentName:"li"},"module")," keyword instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"let"),"."),(0,i.kt)("li",{parentName:"ul"},"Functors take modules as arguments and return a module."),(0,i.kt)("li",{parentName:"ul"},"Functors ",(0,i.kt)("em",{parentName:"li"},"require")," annotating arguments."),(0,i.kt)("li",{parentName:"ul"},"Functors must start with a capital letter (just like modules/signatures).")),(0,i.kt)("p",null,"Here's an example ",(0,i.kt)("inlineCode",{parentName:"p"},"MakeSet")," functor, that takes in a module of the type\n",(0,i.kt)("inlineCode",{parentName:"p"},"Comparable")," and returns a new set that can contain such comparable items."),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"module type Comparable = {\n  type t\n  let equal: (t, t) => bool\n}\n\nmodule MakeSet = (Item: Comparable) => {\n  // let's use a list as our naive backing data structure\n  type backingType = list<Item.t>\n  let empty = list{}\n  let add = (currentSet: backingType, newItem: Item.t): backingType =>\n    // if item exists\n    if List.exists(x => Item.equal(x, newItem), currentSet) {\n      currentSet // return the same (immutable) set (a list really)\n    } else {\n      list{\n        newItem,\n        ...currentSet // prepend to the set and return it\n      }\n    }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var List = require("./stdlib/list.js");\n\nfunction MakeSet(Item) {\n  var add = function(currentSet, newItem) {\n    if (\n      List.exists(function(x) {\n        return Item.equal(x, newItem);\n      }, currentSet)\n    ) {\n      return currentSet;\n    } else {\n      return {\n        hd: newItem,\n        tl: currentSet,\n      };\n    }\n  };\n  return {\n    empty: /* [] */ 0,\n    add: add,\n  };\n}\n'))),(0,i.kt)("p",null,"Functors can be applied using function application syntax. In this case, we're\ncreating a set, whose items are pairs of integers."),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntPair = {\n  type t = (int, int)\n  let equal = ((x1: int, y1: int), (x2, y2)) => x1 == x2 && y1 == y2\n  let create = (x, y) => (x, y)\n}\n\n/* IntPair abides by the Comparable signature required by MakeSet */\nmodule SetOfIntPairs = MakeSet(IntPair)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),"function equal(param, param$1) {\n  if (param[0] === param$1[0]) {\n    return param[1] === param$1[1];\n  } else {\n    return false;\n  }\n}\n\nfunction create(x, y) {\n  return [x, y];\n}\n\nvar IntPair = {\n  equal: equal,\n  create: create,\n};\n\nvar SetOfIntPairs = {\n  empty: /* [] */ 0,\n  add: add,\n};\n"))),(0,i.kt)("h3",o({},{id:"module-functions-types"}),"Module functions types"),(0,i.kt)("p",null,"Like with module types, functor types also act to constrain and hide what we may\nassume about functors. The syntax for functor types are consistent with those\nfor function types, but with types capitalized to represent the signatures of\nmodules the functor accepts as arguments and return values. In the\nprevious example, we're exposing the backing type of a set; by giving ",(0,i.kt)("inlineCode",{parentName:"p"},"MakeSet"),"\na functor signature, we can hide the underlying data structure!"),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res"}),"module type Comparable = ...\n\nmodule type MakeSetType = (Item: Comparable) => {\n  type backingType\n  let empty: backingType\n  let add: (backingType, Item.t) => backingType\n}\n\nmodule MakeSet: MakeSetType = (Item: Comparable) => {\n  ...\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,i.kt)("h2",o({},{id:"exotic-module-filenames"}),"Exotic Module Filenames"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Since 8.3")),(0,i.kt)("p",null,"It is possible to use non-conventional characters in your filenames (which is sometimes needed for specific JS frameworks). Here are some examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/Button.ios.res")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pages/[id].res"))),(0,i.kt)("p",null,"Please note that modules with an exotic filename will not be accessible from other ReScript modules."),(0,i.kt)("h2",o({},{id:"tips--tricks"}),"Tips & Tricks"),(0,i.kt)("p",null,'Modules and functors are at a different "layer" of language than the rest (functions, let bindings, data structures, etc.). For example, you can\'t easily pass them into a tuple or record. Use them judiciously, if ever! Lots of times, just a record or a function is enough.'))}d.isMDXComponent=!0,d.frontmatter={title:"Module",description:"ReScript modules, module signatures and interface files",canonical:"/docs/manual/latest/module",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs-ko/manual/latest/module.mdx"}},46522:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-ko/manual/latest/module",function(){return n(75846)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=46522,e(e.s=t);var t}));var t=e.O();_N_E=t}]);