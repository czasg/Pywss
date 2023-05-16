"use strict";(self.webpackChunkpywss_docs=self.webpackChunkpywss_docs||[]).push([[236],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),s=a,f=d["".concat(i,".").concat(s)]||d[s]||m[s]||o;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,p[1]=l;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u8def\u7531-\u7ec4",hide_title:!0,hide_table_of_contents:!1,slug:"route-group"},p=void 0,l={unversionedId:"advance/\u8def\u7531-\u7ec4",id:"advance/\u8def\u7531-\u7ec4",title:"\u8def\u7531-\u7ec4",description:"/route \u53ea\u80fd\u547d\u4e2d /route",source:"@site/docs/advance/7.\u8def\u7531-\u7ec4.md",sourceDirName:"advance",slug:"/advance/route-group",permalink:"/pywss/advance/route-group",draft:!1,editUrl:"https://github.com/czasg/pywss/edit/docs/docs/advance/7.\u8def\u7531-\u7ec4.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\u8def\u7531-\u7ec4",hide_title:!0,hide_table_of_contents:!1,slug:"route-group"},sidebar:"tutorialSidebar",previous:{title:"\u8def\u7531-\u5339\u914d\u673a\u5236",permalink:"/pywss/advance/route-match"},next:{title:"\u8bf7\u6c42-\u67e5\u8be2\u53c2\u6570",permalink:"/pywss/advance/request-query-params"}},i={},c=[],u={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\u7279\u6b8a\u8def\u7531\u5339\u914d\u673a\u5236",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"/route \u53ea\u80fd\u547d\u4e2d /route"),(0,a.kt)("p",{parentName:"admonition"},"/route/{name} \u53ef\u4ee5\u547d\u4e2d /route/test\u3001/route/demo \u7b49\uff0c\u5373 {name} \u53ef\u4ee5\u547d\u4e2d\u4efb\u4f55\u503c"),(0,a.kt)("p",{parentName:"admonition"},"/route/* \u53ef\u4ee5\u547d\u4e2d\u4efb\u4f55 /route \u5f00\u5934\u7684\u8def\u7531"),(0,a.kt)("p",{parentName:"admonition"},"\u4e0d\u540c\u4e8e\u5e38\u89c4\u7684\u5168\u7b49\u5339\u914d\uff0c\u73b0\u4ee3\u5927\u90e8\u5206\u4f18\u79c0\u7684\u6846\u67b6\uff0c\u57fa\u672c\u90fd\u652f\u6301\u591a\u79cd\u7279\u6b8a\u7684\u8def\u7531\u5339\u914d\u673a\u5236\uff0c\u4ee5\u6ee1\u8db3\u590d\u6742\u7684\u4e1a\u52a1\u573a\u666f\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7279\u6b8a\u8def\u7531\u5339\u914d\u673a\u5236")," \u662f\u73b0\u4ee3 web \u6846\u67b6\u5fc5\u4e0d\u53ef\u5c11\u7684\u7279\u70b9\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5927\u591a\u6570\u7684\u6846\u67b6\u800c\u8a00\uff0c\u4ed6\u4eec\u90fd\u901a\u8fc7",(0,a.kt)("strong",{parentName:"p"},"\u6b63\u5219"),"\u7684\u65b9\u5f0f\u6765\u62d3\u5c55\u7c7b\u4f3c\u7684\u80fd\u529b\uff0c\u867d\u7136\u8fd9\u4f1a\u5e26\u6765\u66f4\u4e30\u5bcc\u7684\u80fd\u529b\uff0c\u4f46\u8fd9\u65e0\u7591\u4e5f\u4f1a\u5f15\u5165\u4e00\u5b9a\u7684\u6027\u80fd\u95ee\u9898\u3002"),(0,a.kt)("p",null,"Pywss \u901a\u8fc7\u66f4\u7b80\u5355\u3001\u6613\u61c2\u7684\u65b9\u5f0f\u5b9e\u73b0\u4e86\u4e09\u79cd\u8def\u7531\u5339\u914d\u673a\u5236\uff0c\u5305\u62ec\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u7279\u6b8a\u8def\u7531\u5339\u914d\u673a\u5236"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5168\u7b49\u5339\u914d"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'app.get("/full/match", handler)'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5c40\u90e8\u5339\u914d"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'app.get("/partial/match/{name}", handler)'),"\uff0c\u6ce8\u610f\uff0c\u5c40\u90e8\u53d8\u91cf\u4f1a\u5b58\u50a8\u5728",(0,a.kt)("inlineCode",{parentName:"td"},"ctx.route_params"),"\u4e2d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5934\u90e8\u5339\u914d"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'app.get("/head/match/*", handler)'),"\uff0c\u6ce8\u610f\uff0c\u6b64\u5904\u9700\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"td"},"*")," \u7ed3\u5c3e")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u6ce8\u610f")),"\uff1a\n\u4e0a\u8ff0\u5339\u914d\u673a\u5236\u65e0\u6cd5\u540c\u65f6\u751f\u6548\uff0c\u4e14\u5b58\u5728\u4f18\u5148\u7ea7\uff0c\u5373",(0,a.kt)("strong",{parentName:"p"},"\u5168\u7b49\u5339\u914d"),"\u4f18\u5148\u3001\u5176\u6b21",(0,a.kt)("strong",{parentName:"p"},"\u5c40\u90e8\u5339\u914d"),"\u3001\u6700\u540e",(0,a.kt)("strong",{parentName:"p"},"\u5934\u90e8\u5339\u914d"),"~"))}m.isMDXComponent=!0}}]);