"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7994],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="Honkai Impact 3rd",c={unversionedId:"guide/honkai-impact",id:"guide/honkai-impact",title:"Honkai Impact 3rd",description:"Usage",source:"@site/docs/guide/honkai-impact.md",sourceDirName:"guide",slug:"/guide/honkai-impact",permalink:"/michos-api/docs/guide/honkai-impact",draft:!1,editUrl:"https://github.com/monsieur-kuma/michos-api/tree/master/docs/docs/guide/honkai-impact.md",tags:[],version:"current",lastUpdatedBy:"Nguy\u1ec5n V\u0103n Linh",lastUpdatedAt:1725897427,formattedLastUpdatedAt:"Sep 9, 2024",frontMatter:{},sidebar:"guideSidebar",previous:{title:"Genshin Impact",permalink:"/michos-api/docs/guide/genshin-impact"},next:{title:"Honkai Star Rail",permalink:"/michos-api/docs/guide/honkai-star-rail"}},l={},p=[{value:"Usage",id:"usage",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"honkai-impact-3rd"},"Honkai Impact 3rd"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"There are several methods to instantiate an object from the HonkaiImpact class."),(0,a.kt)("p",null,"The following method will instantiate an object with the provided data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { HonkaiImpact, LanguageEnum } from 'michos-api';\n\nconst hi = new HonkaiImpact({\n  cookie: 'YOUR COOKIE HERE', // Required. Cookie can be string or object, see the api refeence below\n  lang: LanguageEnum.ENGLISH, // optional\n  uid: 837_678_687, // Several modules will require UID, which if not filled in will throw an error.\n});\n")),(0,a.kt)("p",null,"Meanwhile, the method below will instantiate an object with some automatically filled data like UID, and will return a Promise."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { HonkaiImpact, LanguageEnum } from 'michos-api';\n\nconst hi = HonkaiImpact.create({\n  cookie: 'YOUR COOKIE HERE', // Required. Cookie can be string or object, see the api refeence below\n  lang: LanguageEnum.ENGLISH, // optional\n});\n")),(0,a.kt)("p",null,"Find out more reference in ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/classes/HonkaiImpact"},"Honkai Impact API Refence")))}m.isMDXComponent=!0}}]);