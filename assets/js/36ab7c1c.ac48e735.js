"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[412],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>h});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),s=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(o.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=i,h=d["".concat(o,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(h,c(c({ref:r},p),{},{components:t})):n.createElement(h,c({ref:r},p))}));function h(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,c=new Array(a);c[0]=f;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l[d]="string"==typeof e?e:i,c[1]=l;for(var s=2;s<a;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6742:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(7462),i=(t(7294),t(3905));const a={id:"IGenshinCharacterRole",title:"Interface: IGenshinCharacterRole",sidebar_label:"IGenshinCharacterRole",sidebar_position:0,custom_edit_url:null},c=void 0,l={unversionedId:"api/interfaces/IGenshinCharacterRole",id:"api/interfaces/IGenshinCharacterRole",title:"Interface: IGenshinCharacterRole",description:"Represents a character role in Genshin Impact.",source:"@site/docs/api/interfaces/IGenshinCharacterRole.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/IGenshinCharacterRole",permalink:"/michos-api/docs/api/interfaces/IGenshinCharacterRole",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"IGenshinCharacterRole",title:"Interface: IGenshinCharacterRole",sidebar_label:"IGenshinCharacterRole",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"IGenshinCharacterReliquariesSet",permalink:"/michos-api/docs/api/interfaces/IGenshinCharacterReliquariesSet"},next:{title:"IGenshinCharacters",permalink:"/michos-api/docs/api/interfaces/IGenshinCharacters"}},o={},s=[{value:"Properties",id:"properties",level:2},{value:"AvatarUrl",id:"avatarurl",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"level",id:"level",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"nickname",id:"nickname",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"region",id:"region",level:3},{value:"Defined in",id:"defined-in-3",level:4}],p={toc:s},d="wrapper";function u(e){let{components:r,...t}=e;return(0,i.kt)(d,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents a character role in Genshin Impact."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"avatarurl"},"AvatarUrl"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"AvatarUrl"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The URL of the avatar image of the character role."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/monsieur-kuma/michos-api/blob/a9cdcfc/src/client/gi/record/interfaces/characters.interface.ts#L243"},"src/client/gi/record/interfaces/characters.interface.ts:243")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"level"},"level"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"level"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The level of the character role."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/monsieur-kuma/michos-api/blob/a9cdcfc/src/client/gi/record/interfaces/characters.interface.ts#L255"},"src/client/gi/record/interfaces/characters.interface.ts:255")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nickname"},"nickname"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"nickname"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The nickname of the character role."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/monsieur-kuma/michos-api/blob/a9cdcfc/src/client/gi/record/interfaces/characters.interface.ts#L247"},"src/client/gi/record/interfaces/characters.interface.ts:247")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"region"},"region"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"region"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The region of the character role."),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/monsieur-kuma/michos-api/blob/a9cdcfc/src/client/gi/record/interfaces/characters.interface.ts#L251"},"src/client/gi/record/interfaces/characters.interface.ts:251")))}u.isMDXComponent=!0}}]);