"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6337],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=d(n),c=r,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},61538:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={},i="Agents",o={unversionedId:"tutorial/soh/agents/agents",id:"tutorial/soh/agents/agents",title:"Agents",description:"SmartOpenHamburg uses agents to map mobility behaviour. The system offers different pre-defined types that can be used to investigate different scenarios. Existing types can be reused, and new classes can be defined.",source:"@site/docs/tutorial/soh/agents/agents.md",sourceDirName:"tutorial/soh/agents",slug:"/tutorial/soh/agents/",permalink:"/docs/tutorial/soh/agents/",draft:!1,editUrl:"https://github.com/MARS-Group-HAW/MARS-Group-HAW.github.io/edit/main/docs/tutorial/soh/agents/agents.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/docs/tutorial/soh/getting-started"},next:{title:"Multimodal Agent",permalink:"/docs/tutorial/soh/agents/multi_modal_agent"}},s={},d=[{value:"Source-Destination Model",id:"source-destination-model",level:2},{value:"Daily Schedule Model",id:"daily-schedule-model",level:2}],p={toc:d};function u(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"agents"},"Agents"),(0,r.kt)("p",null,"SmartOpenHamburg uses agents to map mobility behaviour. The system offers different pre-defined types that can be used to investigate different scenarios. Existing types can be reused, and new classes can be defined. "),(0,r.kt)("mermaid",{value:"classDiagram\n    VectorLayer <|-- VectorPoiLayer\n\n    class VectorPoiLayer {\n    }"}),(0,r.kt)("p",null,"The model includes the following agent types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MultiCapableAgent"),(0,r.kt)("li",{parentName:"ul"},"MultimodalAgent"),(0,r.kt)("li",{parentName:"ul"},"Pedestrian"),(0,r.kt)("li",{parentName:"ul"},"Citizen"),(0,r.kt)("li",{parentName:"ul"},"Traveler"),(0,r.kt)("li",{parentName:"ul"},"Driver"),(0,r.kt)("li",{parentName:"ul"},"Cyclist"),(0,r.kt)("li",{parentName:"ul"},"FerryDriver"),(0,r.kt)("li",{parentName:"ul"},"DockWorker")),(0,r.kt)("p",null,"SmartOpenHamburg implements the following execution models. Further models such as endless ",(0,r.kt)("em",{parentName:"p"},"drive"),", ",(0,r.kt)("em",{parentName:"p"},"random drive")," exist or can be enforced by the user. "),(0,r.kt)("h2",{id:"source-destination-model"},"Source-Destination Model"),(0,r.kt)("p",null,"This mode creates concrete ",(0,r.kt)("inlineCode",{parentName:"p"},"Traveler")," agents that start from a source and move towards a target. On the way, travellers can use different available modalities to reach their destination. "),(0,r.kt)("p",null,"A Traveler Agent is a specialization of the ",(0,r.kt)("inlineCode",{parentName:"p"},"MultiCapableAgent")," (more about this type of agent can be found ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/soh/agents/multi_capable_agent"},"here"),")"),(0,r.kt)("p",null,"Planning is done based on the destination concerning the static travel time of identified ",(0,r.kt)("inlineCode",{parentName:"p"},"MultimodalRoute"),"s. A multimodal route consists of several subroutes, each assigned to an individual modality.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"Traveler")," tries to obtain, use and return these modalities on the way."),(0,r.kt)("h2",{id:"daily-schedule-model"},"Daily Schedule Model"),(0,r.kt)("p",null,"This mode uses a generated daily schedule that is processed by concrete or derived ",(0,r.kt)("inlineCode",{parentName:"p"},"Citizen")," agents. A daily schedule includes multiple entries of the following categories:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Work")),(0,r.kt)("td",{parentName:"tr",align:null},"Describes a unit of work of the agent he is following.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Errands")),(0,r.kt)("td",{parentName:"tr",align:null},"Describes various non-work-specific types of tasks that do not involve free time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Freetime")),(0,r.kt)("td",{parentName:"tr",align:null},"Describes blocks of time in which leisure activities are taken (this can also be at home).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Eat")),(0,r.kt)("td",{parentName:"tr",align:null},"Describes units in which utility services are consumed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Home")),(0,r.kt)("td",{parentName:"tr",align:null},"Describes units to which agent is at home.")))),(0,r.kt)("p",null,"Each category leads to different destinations via a service catalogue, using a point-of-interest layer. ",(0,r.kt)("inlineCode",{parentName:"p"},"Citizen"),"s consume services there and move to the next destination depending on time.  "),(0,r.kt)("p",null,"The following table shows a schedule configuration for everything ",(0,r.kt)("inlineCode",{parentName:"p"},"Citizen"),". Each cell specifies a probability, in how far the respective agent fills out the given category in his schedule within the defined period ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"until"),", giving the lower and upper hour bound within the day:  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"from"),(0,r.kt)("th",{parentName:"tr",align:null},"until"),(0,r.kt)("th",{parentName:"tr",align:null},"to_work"),(0,r.kt)("th",{parentName:"tr",align:null},"to_errands"),(0,r.kt)("th",{parentName:"tr",align:null},"to_freetime"),(0,r.kt)("th",{parentName:"tr",align:null},"to_eat"),(0,r.kt)("th",{parentName:"tr",align:null},"to_home"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"60"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"19"),(0,r.kt)("td",{parentName:"tr",align:null},"19"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"28"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"23"),(0,r.kt)("td",{parentName:"tr",align:null},"19")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"27"),(0,r.kt)("td",{parentName:"tr",align:null},"23"),(0,r.kt)("td",{parentName:"tr",align:null},"24")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"19"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"19"),(0,r.kt)("td",{parentName:"tr",align:null},"27"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"19"),(0,r.kt)("td",{parentName:"tr",align:null},"22"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"13")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"22"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"5")))),(0,r.kt)("p",null,"The diary creates a dynamic history in the attached image."),(0,r.kt)("figure",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dayplan",src:n(91403).Z,width:"1188",height:"842"})),(0,r.kt)("figcaption",null,(0,r.kt)("p",null,"For ",(0,r.kt)("em",{parentName:"p"},"half-day")," or ",(0,r.kt)("em",{parentName:"p"},"non-working agents"),", either the second work block after the lunch break or the complete work block is omitted."))))}u.isMDXComponent=!0},91403:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/dayplan-e500834a9c1e51b337e3e01f4d613ecf.png"}}]);