"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4679],{37652:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"tutorial/soh/agents/multi_modal_agent","title":"Multimodal Agent","description":"The `MultimodalAgent agent can handle any modal type and thus any change between modal types. It has a representational MultimodalRoadUser` that holds physical sizes and is placed in the environment.","source":"@site/docs/tutorial/soh/agents/multi_modal_agent.md","sourceDirName":"tutorial/soh/agents","slug":"/tutorial/soh/agents/multi_modal_agent","permalink":"/docs/tutorial/soh/agents/multi_modal_agent","draft":false,"unlisted":false,"editUrl":"https://github.com/MARS-Group-HAW/MARS-Group-HAW.github.io/edit/main/docs/tutorial/soh/agents/multi_modal_agent.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Agents","permalink":"/docs/tutorial/soh/agents/"},"next":{"title":"Multi-Capable Agent","permalink":"/docs/tutorial/soh/agents/multi_capable_agent"}}');var i=a(74848),s=a(28453);const o={sidebar_position:1},r="Multimodal Agent",l={},d=[{value:"Capabilities",id:"capabilities",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"multimodal-agent",children:"Multimodal Agent"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"MultimodalAgent"})," agent can handle any modal type and thus any change between modal types. It has a representational ",(0,i.jsx)(t.code,{children:"MultimodalRoadUser"})," that holds physical sizes and is placed in the environment.\nThis agent is the basis of all agents that may switch between different modalities.\nThe classic subtype is the ",(0,i.jsx)(t.code,{children:"Pedestrian"})," that allows to move by foot on a graph."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"uml_domain_model",src:a(47718).A+"",width:"834",height:"603"})}),"\n",(0,i.jsx)(t.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,i.jsxs)(t.p,{children:["A subtype agent of the ",(0,i.jsx)(t.code,{children:"MultimodalAgent"})," may implement any steering capability. The ",(0,i.jsx)(t.a,{href:"/docs/tutorial/soh/agents/multi_capable_agent",children:(0,i.jsx)(t.code,{children:"MultiCapableAgent"})})," implements ",(0,i.jsx)(t.code,{children:"Walking"}),", ",(0,i.jsx)(t.code,{children:"CarDriving"}),", ",(0,i.jsx)(t.code,{children:"Cycling"})," and ",(0,i.jsx)(t.code,{children:"FerryDriving"}),". Every capability (transportation modality) requires a specialiced ",(0,i.jsx)(t.code,{children:"ISteeringCapable"})," interface (e.g. ",(0,i.jsx)(t.code,{children:"ICarSteeringCapable"}),", see figure below), which defines method and properties that this agent must offer to be able to steer such a ",(0,i.jsx)(t.code,{children:"Vehicle"}),".\nBesides steering the vehilce the agent may also use some vehicles as a passenger (e.g. using the ",(0,i.jsx)(t.a,{href:"/docs/tutorial/soh/entities#ferry",children:(0,i.jsx)(t.code,{children:"Ferry"})}),"). The ",(0,i.jsx)(t.code,{children:"IPassengerCapable"})," is implemented by the ",(0,i.jsx)(t.code,{children:"MultimodalAgent"})," and informs the agent with a ",(0,i.jsx)(t.code,{children:"PassengerMessage"})," about the current status of the drive. It may for instance notify the agent at every stop (e.g. ",(0,i.jsx)(t.code,{children:"FerryStation"}),") so that the agent may decide to leave or stay on the ferry."]}),"\n",(0,i.jsxs)(t.p,{children:["Further information can be found at the ",(0,i.jsx)(t.a,{href:"/docs/tutorial/soh/steering",children:(0,i.jsx)(t.code,{children:"steering concept"})})," page."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},47718:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/uml_domain_model-e326909586b3152c1ea8376fc734d4b6.png"},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>r});var n=a(96540);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);