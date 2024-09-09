"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6707],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),u=i,m=f["".concat(l,".").concat(u)]||f[u]||d[u]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={id:"BattleInfo",title:"Interface: BattleInfo",sidebar_label:"BattleInfo",sidebar_position:0,custom_edit_url:null},o=void 0,c={unversionedId:"api/interfaces/BattleInfo",id:"api/interfaces/BattleInfo",title:"Interface: BattleInfo",description:"Properties",source:"@site/docs/api/interfaces/BattleInfo.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/BattleInfo",permalink:"/michos-api/docs/api/interfaces/BattleInfo",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BattleInfo",title:"Interface: BattleInfo",sidebar_label:"BattleInfo",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"AchievementNum",permalink:"/michos-api/docs/api/interfaces/AchievementNum"},next:{title:"Dict",permalink:"/michos-api/docs/api/interfaces/Dict"}},l={},s=[{value:"Properties",id:"properties",level:2},{value:"boss",id:"boss",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"elf",id:"elf",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"lineup",id:"lineup",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"score",id:"score",level:3},{value:"Defined in",id:"defined-in-3",level:4}],p={toc:s},f="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"boss"},"boss"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"boss"),": ",(0,i.kt)("a",{parentName:"p",href:"/michos-api/docs/api/interfaces/IHIBoss"},(0,i.kt)("inlineCode",{parentName:"a"},"IHIBoss"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/monsieur-kuma/michos-api/blob/a9cdcfc/src/client/hi/record/interfaces/arena.interface.ts#L19"},"src/client/hi/record/interfaces/arena.interface.ts:19")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"elf"},"elf"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"elf"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/michos-api/docs/api/interfaces/IHIElf"},(0,i.kt)("inlineCode",{parentName:"a"},"IHIElf"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/monsieur-kuma/michos-api/blob/a9cdcfc/src/client/hi/record/interfaces/arena.interface.ts#L17"},"src/client/hi/record/interfaces/arena.interface.ts:17")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lineup"},"lineup"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"lineup"),": ",(0,i.kt)("a",{parentName:"p",href:"/michos-api/docs/api/interfaces/IHILineup"},(0,i.kt)("inlineCode",{parentName:"a"},"IHILineup")),"[]"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/monsieur-kuma/michos-api/blob/a9cdcfc/src/client/hi/record/interfaces/arena.interface.ts#L18"},"src/client/hi/record/interfaces/arena.interface.ts:18")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"score"},"score"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"score"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/monsieur-kuma/michos-api/blob/a9cdcfc/src/client/hi/record/interfaces/arena.interface.ts#L20"},"src/client/hi/record/interfaces/arena.interface.ts:20")))}d.isMDXComponent=!0}}]);