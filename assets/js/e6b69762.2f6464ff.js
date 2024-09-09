"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3756],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},c=Object.keys(e);for(i=0;i<c.length;i++)t=c[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)t=c[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||c;return t?i.createElement(m,a(a({ref:n},p),{},{components:t})):i.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[u]="string"==typeof e?e:r,a[1]=o;for(var s=2;s<c;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},472:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>o,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));const c={id:"IGenshinTCGAccount",title:"Interface: IGenshinTCGAccount",sidebar_label:"IGenshinTCGAccount",sidebar_position:0,custom_edit_url:null},a=void 0,o={unversionedId:"api/interfaces/IGenshinTCGAccount",id:"api/interfaces/IGenshinTCGAccount",title:"Interface: IGenshinTCGAccount",description:"Properties",source:"@site/docs/api/interfaces/IGenshinTCGAccount.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/IGenshinTCGAccount",permalink:"/michos-api/docs/api/interfaces/IGenshinTCGAccount",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"IGenshinTCGAccount",title:"Interface: IGenshinTCGAccount",sidebar_label:"IGenshinTCGAccount",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"IGenshinSpiralAbyssRank",permalink:"/michos-api/docs/api/interfaces/IGenshinSpiralAbyssRank"},next:{title:"IGenshinTCGActionCost",permalink:"/michos-api/docs/api/interfaces/IGenshinTCGActionCost"}},l={},s=[{value:"Properties",id:"properties",level:2},{value:"is_overflow",id:"is_overflow",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"linups",id:"linups",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-2",level:4}],p={toc:s},u="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"is_overflow"},"is","_","overflow"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"is","_","overflow"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/monsieur-kuma/michos-api/blob/a9cdcfc/src/client/gi/tcg/tcg.interface.ts#L16"},"src/client/gi/tcg/tcg.interface.ts:16")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"linups"},"linups"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"linups"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/monsieur-kuma/michos-api/blob/a9cdcfc/src/client/gi/tcg/tcg.interface.ts#L15"},"src/client/gi/tcg/tcg.interface.ts:15")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/monsieur-kuma/michos-api/blob/a9cdcfc/src/client/gi/tcg/tcg.interface.ts#L14"},"src/client/gi/tcg/tcg.interface.ts:14")))}f.isMDXComponent=!0}}]);