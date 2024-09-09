"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),o=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=o(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(n),u=r,m=d["".concat(l,".").concat(u)]||d[u]||f[u]||a;return n?i.createElement(m,s(s({ref:t},p),{},{components:n})):i.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:r,s[1]=c;for(var o=2;o<a;o++)s[o]=n[o];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var i=n(7462),r=(n(7294),n(3905));const a={id:"IGenshinTCGCards",title:"Interface: IGenshinTCGCards",sidebar_label:"IGenshinTCGCards",sidebar_position:0,custom_edit_url:null},s=void 0,c={unversionedId:"api/interfaces/IGenshinTCGCards",id:"api/interfaces/IGenshinTCGCards",title:"Interface: IGenshinTCGCards",description:"Properties",source:"@site/docs/api/interfaces/IGenshinTCGCards.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/IGenshinTCGCards",permalink:"/michos-api/docs/api/interfaces/IGenshinTCGCards",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"IGenshinTCGCards",title:"Interface: IGenshinTCGCards",sidebar_label:"IGenshinTCGCards",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"IGenshinTCGCard",permalink:"/michos-api/docs/api/interfaces/IGenshinTCGCard"},next:{title:"IGenshinTCGCardSkill",permalink:"/michos-api/docs/api/interfaces/IGenshinTCGCardSkill"}},l={},o=[{value:"Properties",id:"properties",level:2},{value:"card_list",id:"card_list",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"is_last",id:"is_last",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"next_offset",id:"next_offset",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"stats",id:"stats",level:3},{value:"Defined in",id:"defined-in-3",level:4}],p={toc:o},d="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"card_list"},"card","_","list"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"card","_","list"),": ",(0,r.kt)("a",{parentName:"p",href:"/michos-api/docs/api/interfaces/IGenshinTCGCard"},(0,r.kt)("inlineCode",{parentName:"a"},"IGenshinTCGCard")),"[]"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/monsieur-kuma/michos-api/blob/a9cdcfc/src/client/gi/tcg/tcg.interface.ts#L115"},"src/client/gi/tcg/tcg.interface.ts:115")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"is_last"},"is","_","last"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"is","_","last"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/monsieur-kuma/michos-api/blob/a9cdcfc/src/client/gi/tcg/tcg.interface.ts#L116"},"src/client/gi/tcg/tcg.interface.ts:116")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"next_offset"},"next","_","offset"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"next","_","offset"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/monsieur-kuma/michos-api/blob/a9cdcfc/src/client/gi/tcg/tcg.interface.ts#L117"},"src/client/gi/tcg/tcg.interface.ts:117")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"stats"},"stats"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"stats"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/michos-api/docs/api/interfaces/IGenshinTCGStat"},(0,r.kt)("inlineCode",{parentName:"a"},"IGenshinTCGStat"))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/monsieur-kuma/michos-api/blob/a9cdcfc/src/client/gi/tcg/tcg.interface.ts#L118"},"src/client/gi/tcg/tcg.interface.ts:118")))}f.isMDXComponent=!0}}]);