(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[52233],{17375:function(t,e,n){"use strict";function o(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}n.d(e,{Z:function(){return o}})},33783:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var o=n(17375),a=n(96156),r=(n(67294),n(3905));function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){(0,a.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",i({},e))}},u=d("Intro"),s=d("CodeTab"),l={};function p(t){var e=t.components,n=(0,o.Z)(t,["components"]);return(0,r.kt)("wrapper",i(i(i({},l),n),{},{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",i({},{id:"usereducer"}),"useReducer"),(0,r.kt)(u,{mdxType:"Intro"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"React.useReducer")," \u5e2e\u52a9\u4f60\u7528 action / reducer \u6a21\u5f0f\u8868\u793a state\u3002")),(0,r.kt)("h2",i({},{id:"\u7528\u6cd5"}),"\u7528\u6cd5"),(0,r.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-res"}),"let (state, dispatch) = React.useReducer(reducer, initialState)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-js"}),"var match = React.useReducer(reducer, initialState);\n"))),(0,r.kt)("p",null,(0,r.kt)("a",i({parentName:"p"},{href:"./hooks-state"}),"useState")," \u7684\u66ff\u4ee3\u65b9\u6848\u3002\u5b83\u63a5\u6536\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"(state, action) => newState")," \u7c7b\u578b\u7684 reducer\uff0c\u5e76\u8fd4\u56de\u5f53\u524d ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," \u4ee5\u53ca\u4e0e\u5176\u914d\u5957\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch")," \u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"(action) => unit"),"\u3002"),(0,r.kt)("p",null,"\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"useReducer")," \u4f1a\u6bd4 ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," \u66f4\u9002\u7528\uff0c\u4f8b\u5982 state \u903b\u8f91\u8f83\u590d\u6742\u4e14\u5305\u542b\u591a\u4e2a\u5b50\u503c\uff0c\u6216\u8005\u4e0b\u4e00\u4e2a state \u4f9d\u8d56\u4e8e\u4e4b\u524d\u7684 state \u7b49\u3002\u5e76\u4e14\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"useReducer")," \u8fd8\u80fd\u7ed9\u90a3\u4e9b\u4f1a\u89e6\u53d1\u6df1\u5c42\u66f4\u65b0\u7684\u7ec4\u4ef6\u505a\u6027\u80fd\u4f18\u5316\uff0c\u56e0\u4e3a\u4f60\u53ef\u4ee5\u5411\u5b50\u7ec4\u4ef6\u4f20\u9012 ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch")," \u800c\u4e0d\u662f\u56de\u8c03\u51fd\u6570 \u3002 "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a \u4f60\u4f1a\u53d1\u73b0\uff0c\u5f52\u529f\u4e8e ",(0,r.kt)("a",i({parentName:"p"},{href:"/docs/manual/latest/record"}),"\u4e0d\u53ef\u53d8\u8bb0\u5f55"),"\uff0c",(0,r.kt)("a",i({parentName:"p"},{href:"/docs/manual/latest/variant"}),"\u53d8\u4f53")," \u548c ",(0,r.kt)("a",i({parentName:"p"},{href:"/docs/manual/latest/pattern-matching-destructuring"}),"\u6a21\u5f0f\u5339\u914d")," \u7279\u6027\uff0caction / reducer \u6a21\u5f0f\u53ef\u4ee5\u5728 ReScript \u4e2d\u8f7b\u677e\u5730\u8868\u8fbe action \u548c state \u53d8\u6362\u3002"),(0,r.kt)("h2",i({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,r.kt)("h3",i({},{id:"\u4f7f\u7528-reactusereducer-\u7684\u8ba1\u6570\u5668"}),"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"h3"},"React.useReducer")," \u7684\u8ba1\u6570\u5668"),(0,r.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-res"}),'// Counter.res\n\ntype action = Inc | Dec\ntype state = {count: int}\n\nlet reducer = (state, action) => {\n  switch action {\n  | Inc => {count: state.count + 1}\n  | Dec => {count: state.count - 1}\n  }\n}\n\n@react.component\nlet make = () => {\n  let (state, dispatch) = React.useReducer(reducer, {count: 0})\n\n  <>\n    {React.string("Count:" ++ Belt.Int.toString(state.count))}\n    <button onClick={(_) => dispatch(Dec)}> {React.string("-")} </button>\n    <button onClick={(_) => dispatch(Inc)}> {React.string("+")} </button>\n  </>\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-js"}),'function reducer(state, action) {\n  if (action) {\n    return {\n            count: state.count - 1 | 0\n          };\n  } else {\n    return {\n            count: state.count + 1 | 0\n          };\n  }\n}\n\nfunction Counter(Props) {\n  var match = React.useReducer(reducer, {\n        count: 0\n      });\n  var dispatch = match[1];\n  return React.createElement(React.Fragment, undefined, "Count:" + String(match[0].count), React.createElement("button", {\n                  onClick: (function (param) {\n                      return Curry._1(dispatch, /* Dec */1);\n                    })\n                }, "-"), React.createElement("button", {\n                  onClick: (function (param) {\n                      return Curry._1(dispatch, /* Inc */0);\n                    })\n                }, "+"));\n}\n'))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"React \u4f1a\u786e\u4fdd ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch")," \u51fd\u6570\u7684\u6807\u8bc6\u662f\u7a33\u5b9a\u7684\uff0c\u5e76\u4e14\u4e0d\u4f1a\u5728\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u65f6\u6539\u53d8\u3002\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u53ef\u4ee5\u5b89\u5168\u5730\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback")," \u7684\u4f9d\u8d56\u5217\u8868\u4e2d\u7701\u7565 ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch"),"\u3002")),(0,r.kt)("h3",i({},{id:"\u62e5\u6709\u66f4\u591a\u590d\u6742\u64cd\u4f5c\u7684\u57fa\u7840-todo-list-\u5e94\u7528"}),"\u62e5\u6709\u66f4\u591a\u590d\u6742\u64cd\u4f5c\u7684\u57fa\u7840 Todo List \u5e94\u7528"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5145\u5206\u5229\u7528\u53d8\u4f53\u7684\u5f3a\u5927\u529f\u80fd\uff0c\u901a\u8fc7\u6570\u636e payload \u6765\u8868\u8fbe action\uff0c\u4ece\u800c\u53c2\u6570\u5316 state \u53d8\u6362\uff1a"),(0,r.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-res"}),'// TodoApp.res\n\ntype todo = {\n  id: int,\n  content: string,\n  completed: bool,\n}\n\ntype action =\n  | AddTodo(string)\n  | RemoveTodo(int)\n  | ToggleTodo(int)\n\ntype state = {\n  todos: array<todo>,\n  nextId: int,\n}\n\nlet reducer = (state, action) =>\n  switch action {\n  | AddTodo(content) =>\n    let todos = Js.Array2.concat(\n      state.todos,\n      [{id: state.nextId, content: content, completed: false}],\n    )\n    {todos: todos, nextId: state.nextId + 1}\n  | RemoveTodo(id) =>\n    let todos = Js.Array2.filter(state.todos, todo => todo.id !== id)\n    {...state, todos: todos}\n  | ToggleTodo(id) =>\n    let todos = Belt.Array.map(state.todos, todo =>\n      if todo.id === id {\n        {\n          ...todo,\n          completed: !todo.completed,\n        }\n      } else {\n        todo\n      }\n    )\n    {...state, todos: todos}\n  }\n\nlet initialTodos = [{id: 1, content: "Try ReScript & React", completed: false}]\n\n@react.component\nlet make = () => {\n  let (state, dispatch) = React.useReducer(\n    reducer,\n    {todos: initialTodos, nextId: 2},\n  )\n\n  let todos = Belt.Array.map(state.todos, todo =>\n    <li>\n      {React.string(todo.content)}\n      <button onClick={_ => dispatch(RemoveTodo(todo.id))}>\n        {React.string("Remove")}\n      </button>\n      <input\n        type_="checkbox"\n        checked=todo.completed\n        onChange={_ => dispatch(ToggleTodo(todo.id))}\n      />\n    </li>\n  )\n\n  <> <h1> {React.string("Todo List:")} </h1> <ul> {React.array(todos)} </ul> </>\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-js"}),'function reducer(state, action) {\n  switch (action.TAG | 0) {\n    case /* AddTodo */0 :\n        var todos = state.todos.concat([{\n                id: state.nextId,\n                content: action._0,\n                completed: false\n              }]);\n        return {\n                todos: todos,\n                nextId: state.nextId + 1 | 0\n              };\n    case /* RemoveTodo */1 :\n        var id = action._0;\n        var todos$1 = state.todos.filter(function (todo) {\n              return todo.id !== id;\n            });\n        return {\n                todos: todos$1,\n                nextId: state.nextId\n              };\n    case /* ToggleTodo */2 :\n        var id$1 = action._0;\n        var todos$2 = Belt_Array.map(state.todos, (function (todo) {\n                if (todo.id === id$1) {\n                  return {\n                          id: todo.id,\n                          content: todo.content,\n                          completed: !todo.completed\n                        };\n                } else {\n                  return todo;\n                }\n              }));\n        return {\n                todos: todos$2,\n                nextId: state.nextId\n              };\n    \n  }\n}\n\nvar initialTodos = [{\n    id: 1,\n    content: "Try ReScript & React",\n    completed: false\n  }];\n\nfunction TodoApp(Props) {\n  var match = React.useReducer(reducer, {\n        todos: initialTodos,\n        nextId: 2\n      });\n  var dispatch = match[1];\n  var todos = Belt_Array.map(match[0].todos, (function (todo) {\n          return React.createElement("li", undefined, todo.content, React.createElement("button", {\n                          onClick: (function (param) {\n                              return Curry._1(dispatch, {\n                                          TAG: /* RemoveTodo */1,\n                                          _0: todo.id\n                                        });\n                            })\n                        }, "Remove"), React.createElement("input", {\n                          checked: todo.completed,\n                          type: "checkbox",\n                          onChange: (function (param) {\n                              return Curry._1(dispatch, {\n                                          TAG: /* ToggleTodo */2,\n                                          _0: todo.id\n                                        });\n                            })\n                        }));\n        }));\n  return React.createElement(React.Fragment, undefined, React.createElement("h1", undefined, "Todo List:"), React.createElement("ul", undefined, todos));\n}\n'))),(0,r.kt)("h2",i({},{id:"\u60f0\u6027\u521d\u59cb\u5316"}),"\u60f0\u6027\u521d\u59cb\u5316"),(0,r.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-res"}),"let (state, dispatch) =\n  React.useReducerWithMapState(reducer, initialState, initial)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-js"}),"var match = React.useReducer(reducer, initialState, init);\n"))),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u60f0\u6027\u5730\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"initialState"),"\u3002\u4e3a\u6b64\uff0c\u9700\u8981\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," \u51fd\u6570\u4f5c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"React.useReducerWithMapState")," \u7684\u7b2c\u4e09\u4e2a\u53c2\u6570\u4f20\u5165\uff0c\u8fd9\u6837\u521d\u59cb state \u5c06\u88ab\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"init(initialState)"),"\u3002"),(0,r.kt)("p",null,"\u5b83\u8ba9\u4f60\u5c06\u8ba1\u7b97 state \u7684\u903b\u8f91\u63d0\u53d6\u5230 reducer \u5916\u90e8\uff0c\u8fd9\u4e5f\u4e3a\u4ee5\u540e\u5728\u54cd\u5e94\u67d0\u4e2a action \u65f6\u91cd\u7f6e state \u63d0\u4f9b\u4e86\u4fbf\u5229\uff1a"),(0,r.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-res"}),'// Counter.res\n\ntype action = Inc | Dec | Reset(int)\ntype state = {count: int}\n\nlet init = initialCount => {\n  {count: initialCount}\n}\n\nlet reducer = (state, action) => {\n  switch action {\n  | Inc => {count: state.count + 1}\n  | Dec => {count: state.count - 1}\n  | Reset(count) => init(count)\n  }\n}\n\n@react.component\nlet make = (~initialCount: int) => {\n  let (state, dispatch) = React.useReducerWithMapState(\n    reducer,\n    initialCount,\n    init,\n  )\n\n  <>\n    {React.string("Count:" ++ Belt.Int.toString(state.count))}\n    <button onClick={_ => dispatch(Dec)}> {React.string("-")} </button>\n    <button onClick={_ => dispatch(Inc)}> {React.string("+")} </button>\n  </>\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-js"}),'function init(initialCount) {\n  return {\n          count: initialCount\n        };\n}\n\nfunction reducer(state, action) {\n  if (typeof action === "number") {\n    if (action !== 0) {\n      return {\n              count: state.count - 1 | 0\n            };\n    } else {\n      return {\n              count: state.count + 1 | 0\n            };\n    }\n  } else {\n    return {\n            count: action._0\n          };\n  }\n}\n\nfunction Counter(Props) {\n  var initialCount = Props.initialCount;\n  var match = React.useReducer(reducer, initialCount, init);\n  var dispatch = match[1];\n  return React.createElement(React.Fragment, undefined, "Count:" + String(match[0].count), React.createElement("button", {\n                  onClick: (function (param) {\n                      return Curry._1(dispatch, /* Dec */1);\n                    })\n                }, "-"), React.createElement("button", {\n                  onClick: (function (param) {\n                      return Curry._1(dispatch, /* Inc */0);\n                    })\n                }, "+"));\n}\n'))))}p.isMDXComponent=!0,p.frontmatter={title:"useReducer Hook",description:"\u5173\u4e8e ReScript \u4e2d useReducer React Hook \u7684\u7ec6\u8282",canonical:"/docs/react/latest/hooks-reducer",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs-ko/react/latest/hooks-reducer.mdx"}},33996:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-ko/react/latest/hooks-reducer",function(){return n(33783)}])}},function(t){t.O(0,[92888,49774,40179],(function(){return e=33996,t(t.s=e);var e}));var e=t.O();_N_E=e}]);