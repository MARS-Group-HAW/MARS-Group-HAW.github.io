"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8890],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,v=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(v,a(a({ref:t},s),{},{components:n})):r.createElement(v,a({ref:t},s))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={},a="Movement",l={unversionedId:"tutorial/snippets/movement",id:"tutorial/snippets/movement",title:"Movement",description:"Movement on grid",source:"@site/docs/tutorial/snippets/movement.md",sourceDirName:"tutorial/snippets",slug:"/tutorial/snippets/movement",permalink:"/docs/tutorial/snippets/movement",draft:!1,editUrl:"https://github.com/MARS-Group-HAW/MARS-Group-HAW.github.io/edit/main/docs/tutorial/snippets/movement.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Agent state",permalink:"/docs/tutorial/snippets/agent-states"},next:{title:"SmartOpenHamburg",permalink:"/docs/tutorial/soh/"}},p={},c=[{value:"Movement on grid",id:"movement-on-grid",level:2},{value:"Movement on graph",id:"movement-on-graph",level:2},{value:"Find target POI",id:"find-target-poi",level:3}],s={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"movement"},"Movement"),(0,o.kt)("h2",{id:"movement-on-grid"},"Movement on grid"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-charp",metastring:'title="Beam to specific cell"',title:'"Beam',to:!0,specific:!0,'cell"':!0},"MoveTo(x, y);\n")),(0,o.kt)("p",null,"Working with directions (not reachable in one tick), how to avoid leaving the world and bumping into obstacles"),(0,o.kt)("p",null,"Pathfinding"),(0,o.kt)("h2",{id:"movement-on-graph"},"Movement on graph"),(0,o.kt)("h3",{id:"find-target-poi"},"Find target POI"))}m.isMDXComponent=!0}}]);