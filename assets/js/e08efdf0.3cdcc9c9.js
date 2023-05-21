"use strict";(self.webpackChunkpywss_docs=self.webpackChunkpywss_docs||[]).push([[404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(b,l(l({ref:t},i),{},{components:n})):r.createElement(b,l({ref:t},i))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),o=n(6010),l=n(2466),s=n(6550),u=n(1980),c=n(7392),i=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,c]=b({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,i.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=u??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var h=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:s,selectValue:u,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),r=c[n].value;r!==s&&(p(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>i.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},2914:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>i,assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));n(4866),n(5162);const o={title:"\u8bf7\u6c42-WebSocket",hide_title:!0,hide_table_of_contents:!1,slug:"request-upgrade"},l=void 0,s={unversionedId:"advance/\u8bf7\u6c42-\u5347\u7ea7",id:"advance/\u8bf7\u6c42-\u5347\u7ea7",title:"\u8bf7\u6c42-WebSocket",description:"WebSocket",source:"@site/docs/advance/17.\u8bf7\u6c42-\u5347\u7ea7.mdx",sourceDirName:"advance",slug:"/advance/request-upgrade",permalink:"/pywss/advance/request-upgrade",draft:!1,editUrl:"https://github.com/czasg/pywss/edit/docs/docs/advance/17.\u8bf7\u6c42-\u5347\u7ea7.mdx",tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"\u8bf7\u6c42-WebSocket",hide_title:!0,hide_table_of_contents:!1,slug:"request-upgrade"},sidebar:"tutorialSidebar",previous:{title:"\u8bf7\u6c42-\u6570\u636e\u89e3\u6790",permalink:"/pywss/advance/request-parse"},next:{title:"\u54cd\u5e94",permalink:"/pywss/advance/response"}},u={},c=[{value:"WebSocket",id:"websocket",level:2}],i=e=>{let{children:t}=e;return(0,a.kt)("span",{style:{backgroundColor:"#f1f0d8",borderRadius:"10px",color:"#000",padding:"0.4rem",fontWeight:700}},t)},p={toc:c,Highlight:i},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"websocket"},"WebSocket"),(0,a.kt)("admonition",{title:"\u4ec0\u4e48\u662f WebSocket?",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"WebSocket\u662f\u4e00\u79cd\u7f51\u7edc\u4f20\u8f93\u534f\u8bae\uff0c\u53ef\u5728\u5355\u4e2aTCP\u8fde\u63a5\u4e0a\u8fdb\u884c\u5168\u53cc\u5de5\u901a\u4fe1\uff0c\u4f4d\u4e8eOSI\u6a21\u578b\u7684\u5e94\u7528\u5c42\u3002"),(0,a.kt)("p",{parentName:"admonition"},"WebSocket\u4f7f\u5f97\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u6570\u636e\u4ea4\u6362\u53d8\u5f97\u66f4\u52a0\u7b80\u5355\uff0c\u5141\u8bb8\u670d\u52a1\u7aef\u4e3b\u52a8\u5411\u5ba2\u6237\u7aef\u63a8\u9001\u6570\u636e\u3002\u5728WebSocket API\u4e2d\uff0c\u6d4f\u89c8\u5668\u548c\u670d\u52a1\u5668\u53ea\u9700\u8981\u5b8c\u6210\u4e00\u6b21\u63e1\u624b\uff0c\u4e24\u8005\u4e4b\u95f4\u5c31\u53ef\u4ee5\u5efa\u7acb\u6301\u4e45\u6027\u7684\u8fde\u63a5\uff0c\u5e76\u8fdb\u884c\u53cc\u5411\u6570\u636e\u4f20\u8f93\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"WebSocket")," \u5e95\u5c42\u662f\u57fa\u4e8e ",(0,a.kt)(i,{mdxType:"Highlight"},"HTTP GET")," \u5347\u7ea7\u5b9e\u73b0\uff0c\u662f\u957f\u8fde\u63a5\u7684\u4e00\u79cd\u5b9e\u73b0\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pywss")," \u5219\u901a\u8fc7 ",(0,a.kt)(i,{mdxType:"Highlight"},"WebSocketUpgrade")," \u5b8c\u6210\u6b64\u5904\u5347\u7ea7\u3002\n\u5347\u7ea7\u540e\u5c06\u6fc0\u6d3b ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.ws_read")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.ws_write")," \u4e24\u4e2a\u63a5\u53e3\u65b9\u6cd5\uff0c\u5e76\u901a\u8fc7\u8fd9\u4e24\u4e2a\u63a5\u53e3\u65b9\u6cd5\u4e0e\u5ba2\u6237\u7aef\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u6765\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,a.kt)("strong",{parentName:"p"},"WebSocket")," \u5347\u7ea7\u4ee3\u7801\uff0c\u53c2\u8003\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import pywss\n\ndef websocket(ctx: pywss.Context):\n    # \u5347\u7ea7 WebSocket\n    err = pywss.WebSocketUpgrade(ctx)\n    if err:\n        ctx.log.error(err)\n        ctx.set_status_code(pywss.StatusBadRequest)\n        return\n    # \u8f6e\u8be2\u83b7\u53d6\u6d88\u606f\uff0c\u5b9e\u9645\u4f7f\u7528\u573a\u666f\u5efa\u8bae\u5f15\u5165\u5fc3\u8df3/\u63a2\u6d3b\u673a\u5236\n    while True:\n        data = ctx.ws_read()\n        ctx.log.info(data)\n        ctx.ws_write(b"hello")\n\ndef main():\n    app = pywss.App()\n    app.get("/websocket", websocket)\n    app.run()\n\nif __name__ == \'__main__\':\n    main()\n')),(0,a.kt)("p",null,"\u63a5\u7740\u8ba9\u6211\u4eec\u6a21\u62df\u5ba2\u6237\u7aef\uff0c\u9700\u8981 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u6253\u5f00\u6d4f\u89c8\u5668 -> F12 -> \u8fdb\u5165\u63a7\u5236\u53f0"),"\uff0c\u8f93\u5165\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ws = new WebSocket(\"ws://127.0.0.1:8080/websocket\");\nws.onmessage = function (ev) {\n    console.log(ev.data);\n}\nws.onclose = function (ev) {\n    console.log('Connect Closed')\n}\nws.onopen = function() {\n    if (ws.readyState === WebSocket.OPEN) {\n        ws.send('hello??')\n    }\n}\n")),(0,a.kt)("p",null,"\u5176\u4ed6\u5177\u4f53\u4f7f\u7528\u573a\u666f/\u7528\u4f8b\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/czasg/pywss/tree/master/demo/luckysheet"},"\u591a\u4eba\u5728\u7ebf\u534f\u540c\u7f16\u8f91luckysheet"),"\u3001\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/czasg/pywss/tree/master/demo/chat"},"\u591a\u4eba\u804a\u5929\u5ba4")),(0,a.kt)("br",null))}m.isMDXComponent=!0}}]);