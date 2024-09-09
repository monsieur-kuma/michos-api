"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3508],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=s(t),f=i,u=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return t?r.createElement(u,c(c({ref:n},d),{},{components:t})):r.createElement(u,c({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[p]="string"==typeof e?e:i,c[1]=a;for(var s=2;s<o;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3056:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const o={id:"IGenshinRecordHome",title:"Interface: IGenshinRecordHome",sidebar_label:"IGenshinRecordHome",sidebar_position:0,custom_edit_url:null},c=void 0,a={unversionedId:"api/interfaces/IGenshinRecordHome",id:"api/interfaces/IGenshinRecordHome",title:"Interface: IGenshinRecordHome",description:"Interface representing Genshin Impact player's home record information.",source:"@site/docs/api/interfaces/IGenshinRecordHome.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/IGenshinRecordHome",permalink:"/michos-api/docs/api/interfaces/IGenshinRecordHome",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"IGenshinRecordHome",title:"Interface: IGenshinRecordHome",sidebar_label:"IGenshinRecordHome",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"IGenshinRecordAvatar",permalink:"/michos-api/docs/api/interfaces/IGenshinRecordAvatar"},next:{title:"IGenshinRecordStat",permalink:"/michos-api/docs/api/interfaces/IGenshinRecordStat"}},l={},s=[{value:"Properties",id:"properties",level:2},{value:"comfort_level_icon",id:"comfort_level_icon",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"comfort_level_name",id:"comfort_level_name",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"comfort_num",id:"comfort_num",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"icon",id:"icon",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"item_num",id:"item_num",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"level",id:"level",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"visit_num",id:"visit_num",level:3},{value:"Defined in",id:"defined-in-7",level:4}],d={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Interface representing Genshin Impact player's home record information."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"comfort_level_icon"},"comfort","_","level","_","icon"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"comfort","_","level","_","icon"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The URL of the icon representing the comfort level of the player's home."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/monsieur-kuma/michos-api/blob/a9cdcfc/src/client/gi/record/interfaces/record.interface.ts#L248"},"src/client/gi/record/interfaces/record.interface.ts:248")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"comfort_level_name"},"comfort","_","level","_","name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"comfort","_","level","_","name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The name of the comfort level of the player's home."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/monsieur-kuma/michos-api/blob/a9cdcfc/src/client/gi/record/interfaces/record.interface.ts#L244"},"src/client/gi/record/interfaces/record.interface.ts:244")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"comfort_num"},"comfort","_","num"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"comfort","_","num"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The comfort level of the player's home."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/monsieur-kuma/michos-api/blob/a9cdcfc/src/client/gi/record/interfaces/record.interface.ts#L228"},"src/client/gi/record/interfaces/record.interface.ts:228")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"icon"},"icon"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"icon"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The URL of the icon representing the player's home."),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/monsieur-kuma/michos-api/blob/a9cdcfc/src/client/gi/record/interfaces/record.interface.ts#L240"},"src/client/gi/record/interfaces/record.interface.ts:240")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"item_num"},"item","_","num"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"item","_","num"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The number of items the player has placed in their home."),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/monsieur-kuma/michos-api/blob/a9cdcfc/src/client/gi/record/interfaces/record.interface.ts#L232"},"src/client/gi/record/interfaces/record.interface.ts:232")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"level"},"level"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"level"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The level of the player's home."),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/monsieur-kuma/michos-api/blob/a9cdcfc/src/client/gi/record/interfaces/record.interface.ts#L220"},"src/client/gi/record/interfaces/record.interface.ts:220")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The name of the player's home."),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/monsieur-kuma/michos-api/blob/a9cdcfc/src/client/gi/record/interfaces/record.interface.ts#L236"},"src/client/gi/record/interfaces/record.interface.ts:236")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"visit_num"},"visit","_","num"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"visit","_","num"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The number of times the player has visited their home."),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/monsieur-kuma/michos-api/blob/a9cdcfc/src/client/gi/record/interfaces/record.interface.ts#L224"},"src/client/gi/record/interfaces/record.interface.ts:224")))}m.isMDXComponent=!0}}]);