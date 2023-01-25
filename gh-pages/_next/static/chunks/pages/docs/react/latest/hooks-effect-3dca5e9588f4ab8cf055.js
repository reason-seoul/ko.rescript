(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13063],{17375:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,{Z:function(){return a}})},76882:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var a=t(17375),r=t(96156),o=(t(67294),t(3905));function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var u=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",i({},n))}},s=u("Intro"),p=u("CodeTab"),f={};function l(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",i(i(i({},f),t),{},{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",i({},{id:"useeffect"}),"useEffect"),(0,o.kt)(s,{mdxType:"Intro"},(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Effect")," Hook \u53ef\u4ee5\u8ba9\u4f60\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u6267\u884c\u5e26\u526f\u4f5c\u7528\u7684\u64cd\u4f5c\u3002")),(0,o.kt)("h2",i({},{id:"\u4ec0\u4e48\u662f-effects\uff1f"}),"\u4ec0\u4e48\u662f Effects\uff1f"),(0,o.kt)("p",null,"\u6570\u636e\u83b7\u53d6\uff0c\u8bbe\u7f6e\u8ba2\u9605\u4ee5\u53ca\u624b\u52a8\u66f4\u6539 React \u7ec4\u4ef6\u4e2d\u7684 DOM \u90fd\u662f\u5e38\u89c1\u7684\uff08\u526f\uff09\u4f5c\u7528\u3002"),(0,o.kt)("p",null,"\u5728 React \u7ec4\u4ef6\u4e2d\u6709\u4e24\u79cd\u5e38\u89c1\u7684\u526f\u4f5c\u7528\u64cd\u4f5c\uff0c\u4e00\u4e9b\u5728\u5b8c\u6210\u540e\u9700\u8981\u6e05\u7406\uff0c\u53e6\u4e00\u4e9b\u4e0d\u9700\u8981\u6e05\u7406\u3002\u6211\u4eec\u5c06\u5728\u7a0d\u540e\u7684\u4f8b\u5b50\u4e2d\u7814\u7a76\u5b83\u4eec\u7684\u533a\u522b\uff0c\u4f46\u9996\u5148\u8ba9\u6211\u4eec\u770b\u770b useEffect \u63a5\u53e3\u3002"),(0,o.kt)("h2",i({},{id:"\u57fa\u672c\u7528\u6cd5"}),"\u57fa\u672c\u7528\u6cd5"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),"// \u6bcf\u6b21\u6e32\u67d3\u5b8c\u6210\u540e\u8fd0\u884c\nReact.useEffect(() => {\n  // Run effects\n  None // or Some(() => {})\n})\n\n\n// \u7ec4\u4ef6 mount \u540e\u8fd0\u884c\u4e00\u6b21\nReact.useEffect0(() => {\n  // Run effects\n  None // or Some(() => {})\n})\n\n// `prop1` \u53d8\u66f4\u65f6\u8fd0\u884c\nReact.useEffect1(() => {\n  // Run effects based on prop1\n  None\n}, [prop1])\n\n// `prop1` or `prop2` \u53d8\u66f4\u65f6\u8fd0\u884c\nReact.useEffect2(() => {\n  // Run effects based on prop1 / prop2\n  None\n}, (prop1, prop2))\n\nReact.useEffect3(() => {\n  None\n}, (prop1, prop2, prop3));\n\n// useEffect4...7 with according dependency\n// tuple just like useEffect3\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"React.useEffect(function () { });\nReact.useEffect((function () { }), []);\nReact.useEffect((function () { }), [ prop1 ]);\nReact.useEffect((function () { }), [ prop1, prop2 ]);\nReact.useEffect((function () { }), [ prop1, prop2, prop3 ]);\n"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"React.useEffect")," \u63a5\u6536\u4e00\u4e2a effect \u51fd\u6570\uff0c\u5305\u542b\u547d\u4ee4\u5f0f\u7684\uff0c\u53ef\u80fd\u6709\u526f\u4f5c\u7528\u7684\u4ee3\u7801\uff0c\u7136\u540e\u8fd4\u56de\u4e00\u4e2a\u503c ",(0,o.kt)("inlineCode",{parentName:"p"},"option<unit => unit>")," \u4f5c\u4e3a\u6f5c\u5728\u7684\u6e05\u7406\u51fd\u6570\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," \u8c03\u7528\u53ef\u80fd\u4f1a\u63a5\u6536\u989d\u5916\u7684\u4f9d\u8d56\u9879\u6570\u7ec4(\u53c2\u89c1 ",(0,o.kt)("inlineCode",{parentName:"p"},"React.useEffect1")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"React.useEffect2...7"),")\u3002\u53ea\u8981\u4f9d\u8d56\u9879\u4e4b\u4e00\u53d1\u751f\u53d8\u5316\uff0c\u5c31\u4f1a\u8fd0\u884c effect \u51fd\u6570\u3002\u5173\u4e8e\u8fd9\u4e9b\u63a5\u53e3\u7684\u7528\u5904\u8bf7\u770b",(0,o.kt)("a",i({parentName:"p"},{href:"#effect-%E4%BE%9D%E8%B5%96"}),"\u4e0b\u9762"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a \u4f60\u53ef\u80fd\u597d\u5947\u4e3a\u4ec0\u4e48 ",(0,o.kt)("inlineCode",{parentName:"p"},"React.useEffect1")," \u63a5\u6536\u4f9d\u8d56\u9879\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"array"),"\uff0c\u4f46 ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect2")," \u9700\u8981\u4e00\u4e2a\u4f9d\u8d56\u9879\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"tuple"),"\uff08\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"(prop1, prop2)"),"\uff09\u3002\u56e0\u4e3a\u5143\u7ec4\u53ef\u4ee5\u5b58\u50a8\u4e0d\u540c\u7c7b\u578b\u7684\u591a\u4e2a\u503c\uff0c\u6570\u7ec4\u53ea\u80fd\u5b58\u50a8\u67d0\u4e2a\u7279\u5b9a\u7c7b\u578b\u7684\u503c\u3002\u53ef\u4ee5\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"React.useEffect1(fn, [1, 2])")," \u6a21\u4eff ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect2"),"\uff0c\u4f46\u662f\u7c7b\u578b\u68c0\u67e5\u5668\u4e0d\u4f1a\u5141\u8bb8 ",(0,o.kt)("inlineCode",{parentName:"p"},'React.useEffect1(fn, [1, "two"])')," \u901a\u8fc7\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"React.useEffect")," \u4f1a\u5728\u6bcf\u6b21\u6e32\u67d3\u5b8c\u6210\u65f6\u8fd0\u884c\u5b83\u7684 effect \u51fd\u6570\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"React.useEffect0")," \u53ea\u5728\u9996\u6b21\u6e32\u67d3\u65f6\uff08\u7ec4\u4ef6 mounted \u65f6\uff09\u8fd0\u884c effect \u51fd\u6570\u3002"),(0,o.kt)("h2",i({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,o.kt)("h3",i({},{id:"\u4e0d\u9700\u8981\u6e05\u7406\u7684-effects"}),"\u4e0d\u9700\u8981\u6e05\u7406\u7684 Effects"),(0,o.kt)("p",null,"\u6709\u65f6\uff0c\u6211\u4eec\u60f3\u8981\u5728 React \u66f4\u65b0\u5b8c DOM \u4e4b\u540e\u8fd0\u884c\u4e00\u4e9b\u989d\u5916\u7684\u4ee3\u7801\u3002\u5e38\u89c1\u7684\u4e0d\u9700\u8981\u6e05\u7406\u7684 effects \u6709\u7f51\u7edc\u8bf7\u6c42\uff0c\u624b\u52a8\u64cd\u4f5c DOM \u4ee5\u53ca\u8bb0\u5f55\u65e5\u5fd7\u3002\u56e0\u4e3a\u8fd0\u884c\u5b83\u4eec\u4e4b\u540e\u5c31\u53ef\u4ee5\u4e0d\u7ba1\u4e86\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u8ba1\u6570\u5668\u7ec4\u4ef6\u7684\u4f8b\u5b50\uff0c\u5728\u6bcf\u6b21\u6e32\u67d3\u65f6\u66f4\u65b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"document.title"),"\uff1a"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),'// Counter.res\nmodule Document = {\n  type t;\n  @val external document: t = "document";\n  @set external setTitle: (t, string) => unit = "title"\n}\n\n@react.component\nlet make = () => {\n  let (count, setCount) = React.useState(_ => 0);\n\n  React.useEffect(() => {\n    open Document\n    document->setTitle(`You clicked ${Belt.Int.toString(count)} times!`)\n    None\n  }, );\n\n  let onClick = (_evt) => {\n    setCount(prev => prev + 1)\n  };\n\n  let msg = "You clicked" ++ Belt.Int.toString(count) ++  "times"\n\n  <div>\n    <p>{React.string(msg)}</p>\n    <button onClick> {React.string("Click me")} </button>\n  </div>\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'function Counter(Props) {\n  var match = React.useState(function () {\n        return 0;\n      });\n  var setCount = match[1];\n  var count = match[0];\n  React.useEffect(function () {\n        document.title = "You clicked " + String(count) + " times!";\n\n      });\n  var onClick = function (_evt) {\n    return Curry._1(setCount, (function (prev) {\n                  return prev + 1 | 0;\n                }));\n  };\n  var msg = "You clicked" + String(count) + "times";\n  return React.createElement("div", undefined,\n    React.createElement("p", undefined, msg),\n      React.createElement("button", {\n                  onClick: onClick\n                }, "Click me"));\n}\n'))),(0,o.kt)("p",null,"\u6211\u4eec\u60f3\u8981 effects \u4f9d\u8d56\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"count"),"\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," \u8c03\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"})," React.useEffect1(() => {\n    open Document\n    document->setTitle(`You clicked ${Belt.Int.toString(count)} times!`)\n    None\n  }, [count]);\n")),(0,o.kt)("p",null,"\u73b0\u5728\u5b83\u53ea\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," \u7684\u503c\u6539\u53d8\u65f6\u8fd0\u884c effect \u51fd\u6570\uff0c\u800c\u4e0d\u662f\u5728\u6bcf\u6b21\u6e32\u67d3\u65f6\u90fd\u8fd0\u884c\u3002"),(0,o.kt)("h3",i({},{id:"\u9700\u8981\u6e05\u7406\u7684-effects"}),"\u9700\u8981\u6e05\u7406\u7684 Effects"),(0,o.kt)("p",null,"\u4e0a\u9762\u6211\u4eec\u7814\u7a76\u4e86\u5982\u4f55\u8868\u8fbe\u4e0d\u9700\u8981\u4efb\u4f55\u6e05\u7406\u7684\u526f\u4f5c\u7528\u3002\u7136\u800c\u67d0\u4e9b effects \u9700\u8981\u8fdb\u884c\u6e05\u7406\uff0c\u4f8b\u5982\u8ba2\u9605\u4e00\u4e9b\u5916\u90e8\u6570\u636e\u6e90\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6e05\u7406\u5f88\u91cd\u8981\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u4ea7\u751f\u5185\u5b58\u6cc4\u9732\uff01"),(0,o.kt)("p",null,"\u8ba9\u6211\u4eec\u770b\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5b83\u53ef\u4ee5\u4f18\u96c5\u5730\u8ba2\u9605\u548c\u53d6\u6d88\u8ba2\u9605\u4e00\u4e9b\u8ba2\u9605 API\uff1a"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),'// FriendStatus.res\n\nmodule ChatAPI = {\n  // Imaginary globally available ChatAPI for demo purposes\n  type status = { isOnline: bool };\n  @val external subscribeToFriendStatus: (string, status => unit) => unit = "subscribeToFriendStatus";\n  @val external unsubscribeFromFriendStatus: (string, status => unit) => unit = "unsubscribeFromFriendStatus";\n}\n\ntype state = Offline | Loading | Online;\n\n@react.component\nlet make = (~friendId: string) => {\n  let (state, setState) = React.useState(_ => Offline)\n\n  React.useEffect(() => {\n    let handleStatusChange = (status) => {\n      setState(_ => {\n        status.ChatAPI.isOnline ? Online : Offline\n      })\n    }\n\n    ChatAPI.subscribeToFriendStatus(friendId, handleStatusChange);\n    setState(_ => Loading);\n\n    let cleanup = () => {\n      ChatAPI.unsubscribeFromFriendStatus(friendId, handleStatusChange)\n    }\n\n    Some(cleanup)\n  })\n\n  let text = switch(state) {\n    | Offline => friendId ++ " is offline"\n    | Online => friendId ++ " is online"\n    | Loading => "loading..."\n  }\n\n  <div>\n    {React.string(text)}\n  </div>\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'function FriendStatus(Props) {\n  var friendId = Props.friendId;\n  var match = React.useState(function () {\n        return /* Offline */0;\n      });\n  var setState = match[1];\n  React.useEffect(function () {\n        var handleStatusChange = function (status) {\n          return Curry._1(setState, (function (param) {\n                        if (status.isOnline) {\n                          return /* Online */2;\n                        } else {\n                          return /* Offline */0;\n                        }\n                      }));\n        };\n        subscribeToFriendStatus(friendId, handleStatusChange);\n        Curry._1(setState, (function (param) {\n                return /* Loading */1;\n              }));\n        return (function (param) {\n                  unsubscribeFromFriendStatus(friendId, handleStatusChange);\n\n                });\n      });\n  var text;\n  switch (match[0]) {\n    case /* Offline */0 :\n        text = friendId + " is offline";\n        break;\n    case /* Loading */1 :\n        text = "loading...";\n        break;\n    case /* Online */2 :\n        text = friendId + " is online";\n        break;\n\n  }\n  return React.createElement("div", undefined, text);\n}\n'))),(0,o.kt)("h2",i({},{id:"effect-\u4f9d\u8d56"}),"Effect \u4f9d\u8d56"),(0,o.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5728\u6bcf\u6b21\u6e32\u67d3\u65f6\u8fdb\u884c\u6e05\u7406\u6216\u8fd0\u884c effect \u51fd\u6570\u4f1a\u4ea7\u751f\u6027\u80fd\u95ee\u9898\u3002\u8ba9\u6211\u4eec\u770b\u4e00\u4e2a\u5177\u4f53\u7684\u4f8b\u5b50\uff0c\u770b\u770b ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," \u4f1a\u600e\u4e48\u505a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),"// from a previous example above\nReact.useEffect1(() => {\n  open Document\n  document->setTitle(`You clicked ${Belt.Int.toString(count)} times!`)\n  None;\n}, [count]);\n")),(0,o.kt)("p",null,"\u8fd9\u91cc\uff0c\u6211\u4eec\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"[count]")," \u4f5c\u4e3a\u4f9d\u8d56\u4f20\u7ed9 ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect1"),"\u3002\u8fd9\u662f\u4ec0\u4e48\u610f\u601d\uff1f\u5982\u679c ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," \u7684\u503c\u662f 5\uff0c\u6211\u4eec\u7684\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u65f6 ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," \u7684\u503c\u4f9d\u7136\u662f 5\uff0cReact \u4f1a\u6bd4\u8f83\u524d\u6b21\u6e32\u67d3\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"[5]")," \u548c\u4e4b\u540e\u6e32\u67d3\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"[5]"),"\u3002\u56e0\u4e3a\u6570\u7ec4\u4e2d\u6240\u6709\u9879\u662f\u76f8\u540c\u7684\uff085 === 5\uff09\uff0cReact \u4f1a\u8df3\u8fc7 effect \u51fd\u6570\u3002\u8fd9\u5c31\u4f18\u5316\u4e86\u6027\u80fd\u3002"),(0,o.kt)("p",null,"\u5f53\u6211\u4eec\u4f7f\u7528\u66f4\u65b0\u4e3a 6 \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," \u8fdb\u884c\u6e32\u67d3\u65f6\uff0cReact \u4f1a\u6bd4\u8f83\u524d\u6b21\u6e32\u67d3\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"[5]")," \u548c\u4e4b\u540e\u6e32\u67d3\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"[6]"),"\u3002\u8fd9\u6b21\uff0cReact \u5c06\u91cd\u65b0\u8fd0\u884c effect \u51fd\u6570\uff0c\u56e0\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"5 !== 6"),"\u3002\u5982\u679c\u6570\u7ec4\u4e2d\u6709\u591a\u4e2a\u9879\uff0c\u5373\u4f7f\u5176\u4e2d\u53ea\u6709\u4e00\u4e2a\u4e0d\u540c\uff0cReact \u4e5f\u4f1a\u91cd\u65b0\u8fd0\u884c effect \u51fd\u6570\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e5f\u9002\u7528\u4e8e\u6709\u6e05\u7406\u9636\u6bb5\u7684 effects\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),"// from a previous example above\nReact.useEffect1(() => {\n  let handleStatusChange = (status) => {\n    setState(_ => {\n      status.ChatAPI.isOnline ? Online : Offline\n    })\n  }\n\n  ChatAPI.subscribeToFriendStatus(friendId, handleStatusChange);\n  setState(_ => Loading);\n\n  let cleanup = () => {\n    ChatAPI.unsubscribeFromFriendStatus(friendId, handleStatusChange)\n  }\n\n  Some(cleanup)\n}, [friendId]) // Only re-subscribe if friendId changes\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u91cd\u8981\uff1a")," \u5982\u679c\u4f7f\u7528\u6b64\u4f18\u5316\uff0c\u8bf7\u786e\u4fdd\u6570\u7ec4\u5305\u542b\u7ec4\u4ef6\u8303\u56f4\u4e2d\u968f\u65f6\u95f4\u53d8\u5316\u4e14\u88ab effect \u4f7f\u7528\u7684\u6240\u6709\u503c\uff08\u4f8b\u5982 props \u548c state\uff09\u3002\u5426\u5219\uff0c\u4ee3\u7801\u5c06\u5f15\u7528\u524d\u4e00\u6b21\u6e32\u67d3\u7684\u8fc7\u65f6\u503c\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u8981\u53ea\u5728 mount \u65f6\u8fd0\u884c\u4e00\u6b21 effect\uff0c\u7136\u540e\u5728 unmount \u65f6\u8fdb\u884c\u6e05\u7406\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"React.useEffect0"),"\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u5bf9\u6709\u5173\u6027\u80fd\u4f18\u5316\u7684\u4e3b\u9898\u611f\u5174\u8da3\uff0c\u8bf7\u53c2\u8003 ",(0,o.kt)("a",i({parentName:"p"},{href:"https://reactjs.org/docs/hooks-faq.html#performance-optimizations"}),"ReactJS \u6027\u80fd\u4f18\u5316\u6587\u6863"),"\u3002"))}l.isMDXComponent=!0,l.frontmatter={title:"useEffect Hook",description:"\u5173\u4e8e ReScript \u4e2d useEffect React Hook \u7684\u7ec6\u8282",canonical:"/docs/react/latest/hooks-effect",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/react/latest/hooks-effect.mdx"}},37075:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/react/latest/hooks-effect",function(){return t(76882)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return n=37075,e(e.s=n);var n}));var n=e.O();_N_E=n}]);