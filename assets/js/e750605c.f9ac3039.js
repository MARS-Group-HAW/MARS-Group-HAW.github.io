"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4813],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,p=u["".concat(l,".").concat(m)]||u[m]||h[m]||s;return r?n.createElement(p,i(i({ref:t},c),{},{components:r})):n.createElement(p,i({ref:t},c))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<s;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59956:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),s=r(9788);const i={title:"Theses",description:"Theses submitted by members and students of the MARS Group",hide_table_of_contents:!1},o="Theses",l={type:"mdx",permalink:"/student-work/theses",source:"@site/src/pages/student-work/theses.md",title:"Theses",description:"Theses submitted by members and students of the MARS Group",frontMatter:{title:"Theses",description:"Theses submitted by members and students of the MARS Group",hide_table_of_contents:!1}},d=[{value:"Master",id:"master",level:2},{value:"Bachelor",id:"bachelor",level:2}],c={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"theses"},"Theses"),(0,a.kt)("p",null,"On this page, we list theses that were submitted by members and students of the MARS Group."),(0,a.kt)("h2",{id:"master"},"Master"),(0,a.kt)(s.Z,{title:"Anwendung von Reinforcement Learning und Potentialfeldern fu\u0308r eine Multi-Agenten-Steuerung fu\u0308r Drohnen zur Lokalisierung von Funksignalen",author:"Katja Sch\xf6ttler",type:"ma",description:"This thesis deals with the generation of potential maps with a CNN autoencoder and reinforcement learning. For this purpose, a simulation environment developed with the MARS framework is used to explore and evaluate the generated maps. In addition to the technical setup, the results of the various network configurations tested are explained.",semesterYear:"ws2023",pathPdf:"/img/student-work/theses/schoettler_ba_thesis.pdf",mdxType:"StudentWork"}),(0,a.kt)("h2",{id:"bachelor"},"Bachelor"),(0,a.kt)(s.Z,{title:"Ein agentenbasiertes Simulationsmodell fu\u0308r die Ausbreitung von Wiedehopfen in Norddeutschland",author:"David Duong",type:"ba",description:"This present work covers the development of multi-agent system, with the purpose of predicting the distribution of hoopoes in north germany. The hoopoes are agents and are using georeferenced data to accurately predict potential habitats.",semesterYear:"ss2023",pathPdf:"/img/student-work/theses/duong_ba_thesis.pdf",mdxType:"StudentWork"}),(0,a.kt)(s.Z,{title:"Bestimmung einer Gruenen Welle bei Lichtsignalschaltungen fu\u0308r Alster-Fahrradfahrer durch agentenbasierte Simulation mithilfe des MARS-Frameworks",author:"Kalvin Doege",type:"ba",description:"This study addresses the question of whether and under what conditions it would be possible to achieve a green wave for cyclists in Hamburg's city center. With the help of an agent-based traffic model, experiments were conducted and evaluated against the question.",semesterYear:"ss2022",pathPdf:"/img/student-work/theses/doege_ba_thesis.pdf",mdxType:"StudentWork"}),(0,a.kt)(s.Z,{title:"Implementierung einer ereignisbasierten Routenanpassung in MARS mithilfe von simulierten IoT-Sensordaten",author:"Daniel Osterholz",type:"ba",description:"The work addresses the question of whether it is possible to achieve a reduction in inner-city road traffic by using IoT sensor data. With the help of suitable scenarios, a statement is then made about the effectiveness of IoT sensors in parking space search traffic.",semesterYear:"ws2021",pathPdf:"/img/student-work/theses/osterholz_ba_thesis.pdf",mdxType:"StudentWork"}),(0,a.kt)(s.Z,{title:"Comparing Theories of Human Behaviour by Implementing them in MARS Agents: An Interdisciplinary Approach Based on the HuB-CC Framework",author:"Nima Ahmady-Moghaddam",type:"ba",description:"This thesis is concerned with the implementation of theories of human behavior as well as an agent architecture informed by domain expertise in an agent-based model written in MARS. A conceptual modeling framework called HuB-CC was used to identify, classify, and select the theories. The modeling approach was developed in an interdisciplinary exchange with the authors of the HuB-CC framework. The model results as well as the quality of the designed architecture are analyzed and potential avenues of further inquiry are explored.",semesterYear:"ws2021",pathPdf:"/img/student-work/theses/ahmady-moghaddam_ba_thesis.pdf",mdxType:"StudentWork"}))}u.isMDXComponent=!0},9788:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);function a(e){let{title:t,author:r,type:a,description:s,semesterYear:i,pathPdf:o,pathImage:l}=e,d="";switch(a){case"ba":d="Bachelor's thesis";break;case"ma":d="Master's thesis";break;case"phd":d="PhD";break;default:d="Unspecified"}const c=i.substring(0,2),u=i.substring(2,6);let h="";switch(c){case"ws":h="Winter semester";break;case"ss":h="Summer semester";break;default:h="Unspecified semester"}return n.createElement("div",{className:"card margin-bottom--lg"},n.createElement("div",{class:"card__header"},n.createElement("h3",null,t)),n.createElement("div",{className:"card__body m-studentwork"},n.createElement("div",{className:"m-studentwork-text text--left"},n.createElement("p",null,n.createElement("b",null,"Author: "),r,n.createElement("br",null),a&&n.createElement("span",null,n.createElement("b",null,"Type: ")," ",d,n.createElement("br",null)),n.createElement("b",null,"Semester: "),h.concat(" ",u),n.createElement("br",null),n.createElement("b",null,"Description: "),s,n.createElement("br",null)),n.createElement("a",{className:"button button--outline button--primary",href:o},"Download")),l&&n.createElement("div",{className:"m-studentwork-preview"},n.createElement("a",{href:o},n.createElement("img",{src:l})))))}}}]);