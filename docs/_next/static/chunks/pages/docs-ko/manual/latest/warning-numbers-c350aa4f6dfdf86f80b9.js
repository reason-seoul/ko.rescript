(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29190],{17375:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(n,{Z:function(){return r}})},61733:function(e,n,t){"use strict";t.d(n,{_b:function(){return O},P5:function(){return w},N_:function(){return v},K0:function(){return y}});var r=t(96156),a=t(23675),i=t(35768),o=t(92285),u=t(75079),s=t(76417),c=t(4285),l=t(66243),d=t(66397),m=t(42333),f=t(70240),p=[[1,"Suspicious-looking start-of-comment mark."],[2,"Suspicious-looking end-of-comment mark."],[3,"Deprecated feature."],[4,"Fragile pattern matching: matching that will remain complete even if additional constructors are added to one of the variant types matched."],[5,"Partially applied function: expression whose result has function type and is ignored."],[6,"Label omitted in function application."],[8,"Partial match: missing cases in pattern-matching."],[9,"Missing fields in a record pattern."],[10,'Expression on the left-hand side of a sequence that doesn\'t have type "unit" (and that is not a function, see warning number 5).'],[11,"Redundant case in a pattern matching (unused match case)."],[12,"Redundant sub-pattern in a pattern-matching."],[14,"Illegal backslash escape in a string constant."],[16,"Unerasable optional argument."],[20,"Unused function argument."],[21,"Non-returning statement."],[23,'Useless record "with" clause.'],[24,"Bad module name: the source file name is not a valid ReScript module name."],[26,'Suspicious unused variable: unused variable that is bound with "let" or "as", and doesn\'t start with an underscore ("_") character.'],[27,'Innocuous unused variable: unused variable that is not bound with "let" nor "as", and doesn\'t start with an underscore ("_") character.'],[28,"Wildcard pattern given as argument to a constant constructor."],[29,"Unescaped end-of-line in a string constant (non-portable code)."],[30,"Two labels or constructors of the same name are defined in two mutually recursive types."],[32,"Unused value declaration."],[33,"Unused open statement."],[34,"Unused type declaration."],[35,"Unused for-loop index."],[36,"Unused ancestor variable."],[37,"Unused constructor."],[38,"Unused extension constructor."],[39,"Unused rec flag."],[43,"Nonoptional label applied as optional."],[44,"Open statement shadows an already defined identifier."],[45,"Open statement shadows an already defined label or constructor."],[46,"Error in environment variable."],[47,"Illegal attribute payload."],[48,"Implicit elimination of optional arguments."],[49,"Absent cmi file when looking up module alias."],[50,"Unexpected documentation comment."],[52,"Fragile constant pattern."],[53,"Attribute cannot appear in this context"],[54,"Attribute used more than once on an expression"],[56,"Unreachable case in a pattern-matching (based on type information)."],[57,"Ambiguous or-pattern variables under guard"],[59,"Assignment to non-mutable value"],[60,"Unused module declaration"],[61,"Unboxable type in primitive declaration"],[62,"Type constraint on GADT type declaration"],[101,"Unused bs attributes"],[102,"Polymorphic comparison introduced (maybe unsafe)"],[103,"Fragile FFI definitions"],[104,"bs.deriving warning with customized message "],[105,"External name is inferred from val name is unsafe from refactoring when changing value name"],[106,"Unimplemented primitive used:"],[107,"Integer literal exceeds the range of representable integers of type int"],[108,"Uninterpreted delimiters (for unicode)"],[109,"Toplevel expression has unit type"]],g=[[1,"\u770b\u8d77\u6765\u5f88\u53ef\u7591\u7684\u6ce8\u91ca\u5f00\u542f\u6807\u8bb0\u3002"],[2,"\u770b\u8d77\u6765\u5f88\u53ef\u7591\u7684\u6ce8\u91ca\u7ed3\u5c3e\u6807\u8bb0\u3002"],[3,"\u5df2\u88ab\u5e9f\u5f03\u7684\u7279\u6027"],[4,"\u8106\u5f31\u7684\u6a21\u5f0f\u5339\u914d\uff1a\u5373\u4f7f\u5728\u5339\u914d\u7684\u67d0\u4e2a\u53d8\u4f53\u7c7b\u578b\u4e0a\u589e\u52a0\u4e86\u989d\u5916\u7684\u6784\u9020\u51fd\u6570\uff0c\u5339\u914d\u4ecd\u7136\u5b8c\u6574\u3002"],[5,"\u90e8\u5206\u5e94\u7528\u7684\u51fd\u6570\uff1a\u8868\u8fbe\u5f0f\u7684\u7c7b\u578b\u4e3a\u51fd\u6570\u4e14\u88ab\u5ffd\u7565\u4e86\u3002  "],[6,"\u51fd\u6570\u8c03\u7528\u65f6\u7701\u7565\u5ffd\u7565\u4e86\u6807\u7b7e"],[8,"\u90e8\u5206\u5339\u914d\uff1a\u90e8\u5206\u6a21\u5f0f\u672a\u88ab\u5339\u914d\u5230"],[9,"\u8bb0\u5f55\u6a21\u5f0f\u4e2d\u6709\u672a\u88ab\u5339\u914d\u5230\u7684\u5b57\u6bb5"],[10,'\u5e8f\u5217\u5de6\u4fa7\u7684\u8868\u8fbe\u5f0f\u7684\u7c7b\u578b\u4e0d\u4e3a"unit"\uff08\u4e5f\u4e0d\u4e3a\u51fd\u6570\uff0c\u8bf7\u770b5\u53f7\u8b66\u544a\uff09'],[11,"\u6a21\u5f0f\u5339\u914d\u4e2d\u6709\u5197\u4f59\u7684\u5206\u652f\uff08\u4e0d\u4f1a\u88ab\u7528\u5230\u7684\u5206\u652f\uff09"],[12,"\u6a21\u5f0f\u5339\u914d\u4e2d\u6709\u5197\u4f59\u7684\u5b50\u6a21\u5f0f"],[14,"\u5b57\u7b26\u4e32\u5e38\u91cf\u4e2d\u6709\u975e\u6cd5\u7684\u8f6c\u4e49\u5b57\u7b26"],[16,"\u4e0d\u53ef\u64e6\u9664\u7684\u53ef\u9009\u53c2\u6570\u3002"],[20,"\u672a\u88ab\u4f7f\u7528\u7684\u51fd\u6570\u53c2\u6570"],[21,"\u4e0d\u4f1a\u8fd4\u56de\u7684\u8bed\u53e5"],[23,"\u8bb0\u5f55\u5b58\u5728\u6ca1\u6709\u7528\u5230\u7684\u201cwith\u201d\u3002"],[24,"\u4e0d\u826f\u7684\u6a21\u5757\u540d\uff1a\u6e90\u4ee3\u7801\u7684\u6587\u4ef6\u540d\u4e0d\u662f\u6709\u6548\u7684 ReScript \u6a21\u5757\u540d\u3002"],[26,'\u53ef\u7591\u7684\u672a\u4f7f\u7528\u53d8\u91cf\uff1a\u672a\u4f7f\u7528\u7684\u53d8\u91cf\uff0c\u4e0e "let" \u6216 "as" \u7ed1\u5b9a\uff0c\u5e76\u4e14\u4e0d\u4ee5\u4e0b\u5212\u7ebf ("_") \u5b57\u7b26\u5f00\u5934\u3002'],[27,'\u65e0\u5bb3\u7684\u672a\u4f7f\u7528\u53d8\u91cf\uff1a\u672a\u4e0e "let" \u6216 "as" \u7ed1\u5b9a\u7684\u672a\u4f7f\u7528\u53d8\u91cf\uff0c\u5e76\u4e14\u4e0d\u4ee5\u4e0b\u5212\u7ebf ("_") \u5b57\u7b26\u5f00\u5934\u3002'],[28,"\u901a\u914d\u7b26\u6a21\u5f0f\u4f5c\u4e3a\u5e38\u91cf\u6784\u9020\u51fd\u6570\u7684\u53c2\u6570\u7ed9\u51fa\u3002"],[29,"\u5b57\u7b26\u4e32\u5e38\u91cf\u4e2d\u672a\u8f6c\u4e49\u7684\u6362\u884c\u7b26\uff08\u4e0d\u53ef\u79fb\u690d\u4ee3\u7801\uff09\u3002"],[30,"\u5728\u4e24\u4e2a\u76f8\u4e92\u9012\u5f52\u7684\u7c7b\u578b\u4e2d\u5b9a\u4e49\u4e86\u4e24\u4e2a\u540c\u540d\u7684\u6807\u7b7e\u6216\u6784\u9020\u51fd\u6570\u3002"],[32,"\u672a\u88ab\u4f7f\u7528\u7684\u503c\u58f0\u660e\u3002"],[33,"\u672a\u88ab\u4f7f\u7528\u7684 open \u8bed\u53e5\u3002"],[34,"\u672a\u88ab\u4f7f\u7528\u7684\u7c7b\u578b\u58f0\u660e\u3002"],[35,"\u672a\u88ab\u4f7f\u7528\u7684 for \u5faa\u73af\u4e0b\u6807"],[37,"\u672a\u88ab\u4f7f\u7528\u7684\u6784\u9020\u5668\u3002"],[38,"\u672a\u88ab\u4f7f\u7528\u7684\u6269\u5c55\u6784\u9020\u5668"],[39,"\u672a\u88ab\u4f7f\u7528\u7684 rec \u6807\u8bb0"],[43,"\u975e\u53ef\u9009\u6807\u7b7e\u4f5c\u4e3a\u53ef\u9009\u6807\u7b7e\u5e94\u7528\u3002"],[44,"Open \u8bed\u53e5\u4e86\u9690\u85cf\u5df2\u5b9a\u4e49\u7684\u6807\u8bc6\u7b26\u3002"],[45,"Open \u8bed\u53e5\u9690\u85cf\u5df2\u5b9a\u4e49\u7684\u6807\u7b7e\u6216\u6784\u9020\u51fd\u6570\u3002"],[46,"\u73af\u5883\u53d8\u91cf\u9519\u8bef\u3002"],[47,"\u975e\u6cd5\u5c5e\u6027\u88c5\u8f7d\uff08payload\uff09\u3002"],[48,"\u53ef\u9009\u53c2\u6570\u88ab\u9690\u5f0f\u6d88\u9664\u3002"],[49,"\u67e5\u627e\u6a21\u5757\u522b\u540d\u65f6\u7f3a\u5c11 cmi \u6587\u4ef6\u3002"],[52,"\u8106\u5f31\u7684\u5e38\u91cf\u6a21\u5f0f\u3002"],[53,"\u5c5e\u6027\u4e0d\u80fd\u51fa\u73b0\u5728\u5f53\u524d\u4e0a\u4e0b\u6587\u4e2d"],[54,"\u5c5e\u6027\u88ab\u4f7f\u7528\u4e86\u591a\u4e8e\u4e00\u6b21"],[56,"\u4e0d\u53ef\u8fbe\u7684\u6a21\u5f0f\u5206\u652f (\u57fa\u4e8e\u7c7b\u578b\u4fe1\u606f\u5f97\u51fa\u7684\u7ed3\u8bba)\u3002"],[57,'\u5728\u4f7f\u7528\u6a21\u5f0f\u5b88\u536b\uff08guard\uff09\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\u4e86\u6709\u6b67\u4e49\u7684 "or" \u6a21\u5f0f'],[59,"\u5bf9\u4e0d\u53ef\u53d8\u7684\u503c\u8fdb\u884c\u8d4b\u503c"],[60,"\u672a\u4f7f\u7528\u7684\u6a21\u5757\u58f0\u660e"],[61,"\u4e0d\u53ef\u62c6\u7bb1\u7684\u57fa\u672c\u7c7b\u578b"],[62,"\u901a\u7528\u4ee3\u6570\u6570\u636e\u7c7b\u578b\uff08GADT\uff09\u5b58\u5728\u7c7b\u578b\u7ea6\u675f"],[101,'\u672a\u88ab\u4f7f\u7528\u7684 "bs" \u5c5e\u6027'],[102,"\u4f7f\u7528\u4e86\u591a\u6001\u6bd4\u8f83\uff08\u53ef\u80fd\u4e0d\u5b89\u5168\uff09"],[103,"\u8106\u5f31\u7684 FFI \u5b9a\u4e49"],[104,"bs.deriving \u7684\u81ea\u5b9a\u4e49\u8b66\u544a\u4fe1\u606f"],[105,"external \u7684\u540d\u79f0\u662f\u4ece val \u4e2d\u63a8\u65ad\u51fa\u6765\u7684\uff0c\u8be5\u540d\u79f0\u5728\u66f4\u6539\u503c\u540d\u79f0\u65f6\u5bf9\u91cd\u6784\u662f\u4e0d\u5b89\u5168\u7684"],[106,"\u4f7f\u7528\u4e86\u672a\u5b9e\u73b0\u7684\u57fa\u672c\u7c7b\u578b"],[107,"\u6574\u6570\u5b57\u9762\u503c\u8d85\u51fa\u4e86\u7c7b\u578b int \u53ef\u8868\u8fbe\u7684\u8303\u56f4"],[108,"\u672a\u89e3\u91ca\u7684\u5206\u9694\u7b26\uff08\u7528\u4e8e unicode\uff09"],[109,"\u9876\u5c42\u8868\u8fbe\u5f0f\u7684\u7c7b\u578b\u4e3a unit"]];c.UI(p,(function(e){return e[0]}));var b=[["a","All flags"]];function h(e,n){return l.UI(d._2(n.find((function(n){return e===n[0]}))),(function(e){return e[1]}))}function v(e){var n=i.F0.useRouter(void 0),t=a.Q(n.route),r=s.O(t);return c.UI(p,(function(e){var n,t=e[1],a=e[0];if(r){var i=h(a,g);n=void 0!==i?i:t}else n=t;return[String(a),n]}))}function w(e){var n=u.m(e);if(void 0!==n){var t=h(n,p);return void 0!==t?[[e,t]]:[]}var r=e.toLowerCase();return c.Cn(b,(function(e){return e[0]===r}))}function y(e){var n=c.Cn(b,(function(n){return n[0].startsWith(e)})),t=c.UI(c.Cn(p,(function(n){return String(n[0]).startsWith(e)})),(function(e){return[String(e[0]),e[1]]}));return c.zo(n,t)}var E=m.Ue("WarningFlagDescription.Parser.InvalidInput");function _(e){for(var n,t=[],a=0,i=0,o=e.length-1|0;a<=o;){var u,s=e[a],c=i;if(c){var l=c.acc,d=c.modifier,m=(a+1|0)<o?e[a+1|0]:s;if("+"===(n=s)||"-"===n)throw{RE_EXN_ID:E,_1:"'+' and '-' not allowed in flag name on pos "+String(a),Error:new Error};if("+"===m||"-"===m||a>=o){var f={enabled:"+"===d,flag:l+s};t.push(f),u=0}else u=(0,r.Z)({modifier:d,acc:l+s},Symbol.for("name"),"ParseFlag")}else{if("+"!==s&&"-"!==s)throw{RE_EXN_ID:E,_1:"Expected '+' or '-' on pos "+String(a),Error:new Error};u=(0,r.Z)({modifier:s,acc:""},Symbol.for("name"),"ParseFlag")}i=u,a=a+1|0}var p=i;if(p&&""===p.acc)throw{RE_EXN_ID:E,_1:"Expected flag name after '"+p.modifier+"' on pos "+String(a),Error:new Error};return t}var O={parse:function(e){try{return(0,r.Z)({TAG:0,_0:_(e)},Symbol.for("name"),"Ok")}catch(t){var n=f.UW(t);if(n.RE_EXN_ID===E)return(0,r.Z)({TAG:1,_0:n._1},Symbol.for("name"),"Error");throw n}},merge:function(e,n){var t=o.nI(c.UI(e.slice(),(function(e){return[e.flag,e]})));return c.Ed(n,(function(e){t[e.flag]=e})),o.VO(t).sort((function(e,n){var t=e.flag,r=n.flag,a=Number.isNaN(Number(t)),i=Number.isNaN(Number(r));return a?i?0|t.localeCompare(r):-1:i?1:0|t.localeCompare(r)}))},tokensToString:function(e){return e.map((function(e){return(e.enabled?"+":"-")+e.flag})).join("")}}},30672:function(e,n,t){"use strict";t.d(n,{S:function(){return u}});var r=t(67294),a=t(97115),i=t(4285),o=t(61733);var u=function(e){return r.createElement(a.iA.make,{children:null},r.createElement(a.hr.make,{children:r.createElement("tr",void 0,r.createElement(a.Th.make,{children:"#"}),r.createElement(a.Th.make,{children:"Description"}))}),r.createElement("tbody",void 0,i.UI(o.N_(void 0),(function(e){var n=e[0];return r.createElement("tr",{key:n},r.createElement(a.Td.make,{children:n}),r.createElement(a.Td.make,{children:e[1]}))}))))}},63824:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(96156),a=t(17375),i=(t(67294),t(3905)),o=t(30672);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var c={};function l(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",s(s(s({},c),t),{},{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",s({},{id:"warning-numbers"}),"Warning Numbers"),(0,i.kt)("p",null,"You can configure which warnings the ReScript compiler generates\n",(0,i.kt)("a",s({parentName:"p"},{href:"/docs/manual/latest/build-configuration#warnings"}),"in the build configuration")," or\n",(0,i.kt)("a",s({parentName:"p"},{href:"/syntax-lookup#module-warning-decorator"}),"using the ",(0,i.kt)("inlineCode",{parentName:"a"},"@@warning()")," decorator"),"."),(0,i.kt)(o.S,{mdxType:"WarningTable"}))}l.isMDXComponent=!0,l.frontmatter={title:"Warning Numbers",description:"Available compiler warning numbers in ReScript",canonical:"/docs/manual/latest/warning-numbers",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs-ko/manual/latest/warning-numbers.mdx"}},75079:function(e,n,t){"use strict";function r(e){var n=parseInt(e,10);return isNaN(n)?void 0:n}t.d(n,{m:function(){return r}})},47496:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-ko/manual/latest/warning-numbers",function(){return t(63824)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return n=47496,e(e.s=n);var n}));var n=e.O();_N_E=n}]);