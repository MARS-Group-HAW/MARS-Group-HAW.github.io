"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7303],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>k});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),m=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=m(e.components);return n.createElement(l.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(t),d=s,k=c["".concat(l,".").concat(d)]||c[d]||u[d]||r;return t?n.createElement(k,o(o({ref:a},p),{},{components:t})):n.createElement(k,o({ref:a},p))}));function k(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,o=new Array(r);o[0]=d;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[c]="string"==typeof e?e:s,o[1]=i;for(var m=2;m<r;m++)o[m]=t[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38122:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var n=t(87462),s=(t(67294),t(3905));const r={sidebar_position:20,sidebar_label:"Configuration"},o="Configuration",i={unversionedId:"tutorial/mars-basics/configuration",id:"tutorial/mars-basics/configuration",title:"Configuration",description:"On this article we will show you some basic settings you can change to configure your model. For more comprehensive look into all option look here.",source:"@site/docs/tutorial/mars-basics/configuration.md",sourceDirName:"tutorial/mars-basics",slug:"/tutorial/mars-basics/configuration",permalink:"/docs/tutorial/mars-basics/configuration",draft:!1,editUrl:"https://github.com/MARS-Group-HAW/MARS-Group-HAW.github.io/edit/main/docs/tutorial/mars-basics/configuration.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,sidebar_label:"Configuration"},sidebar:"tutorialSidebar",previous:{title:"Your first model",permalink:"/docs/tutorial/mars-basics/first-model"},next:{title:"Outputs",permalink:"/docs/tutorial/mars-basics/outputs"}},l={},m=[{value:"Global Options for the Model",id:"global-options-for-the-model",level:2},{value:"Layer",id:"layer",level:2},{value:"Agent",id:"agent",level:2}],p={toc:m};function c(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"On this article we will show you some basic settings you can change to configure your model. For more comprehensive look into all option ",(0,s.kt)("a",{parentName:"p",href:"/docs/tutorial/configuration/sim_config_options"},"look here"),"."),(0,s.kt)("p",null,"Please have a look at the ",(0,s.kt)("inlineCode",{parentName:"p"},"config.json")," file inside your model folder. It controls all features of the model."),(0,s.kt)("h2",{id:"global-options-for-the-model"},"Global Options for the Model"),(0,s.kt)("p",null,"Inside the ",(0,s.kt)("inlineCode",{parentName:"p"},"globals")," key you have the possibillity to change the basic parameters of your simulation, like the duration."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "globals": {\n        "startTime":  "2022-03-01T05:00",\n        "endTime":    "2022-03-01T05:10",\n        "deltaTUnit": "seconds",\n        "deltaT": 1\n    }\n}\n')),(0,s.kt)("p",null,"The combination of ",(0,s.kt)("inlineCode",{parentName:"p"},"startTime")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"endTime")," will build the scope of the runtime of your model. Each tick will correspond to your chosen unit of time (",(0,s.kt)("inlineCode",{parentName:"p"},"deltaTUnit")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"deltaT"),"). In the above example our simulation runs 10 minutes, with a resolution of ",(0,s.kt)("inlineCode",{parentName:"p"},"seconds"),". So the simulation will have ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"10"),(0,s.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,s.kt)("mn",{parentName:"mrow"},"60"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"600")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10 \\cdot 60 = 600")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"10"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"60"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"600")))))," ticks."),(0,s.kt)("h2",{id:"layer"},"Layer"),(0,s.kt)("p",null,"The layers form the area on that our agents move, in this case we need a playing field on that our agents can move. Below the ",(0,s.kt)("inlineCode",{parentName:"p"},"layers")," key we can configure the layer of our simulation."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "layers": [{\n        "name": "GridLayer",\n        "file": "Resources/grid_closed.csv"\n    }]\n}\n')),(0,s.kt)("p",null,"Each layer needs a corresponding entry in this list. In this case wie assign the ",(0,s.kt)("inlineCode",{parentName:"p"},"GridLayer")," class the input file ",(0,s.kt)("inlineCode",{parentName:"p"},"Resources/grid_closed.csv"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csv",metastring:'title="Resources/grid_closed.csv"',title:'"Resources/grid_closed.csv"'},"1;1;1;1;1;1;1;1;1;1\n1;0;1;0;0;0;0;1;1;1\n1;0;0;0;0;0;1;0;1;1\n1;0;0;1;0;1;1;0;0;1\n1;1;0;1;0;0;1;0;0;1\n1;0;0;1;0;0;1;0;0;1\n1;1;1;1;1;0;1;0;1;1\n1;0;0;0;0;0;1;0;1;1\n1;0;1;0;1;1;1;1;0;1\n1;1;1;1;1;1;1;1;1;1\n")),(0,s.kt)("p",null,"This ",(0,s.kt)("em",{parentName:"p"},"CSV file")," is actually just a two-dimensional grid, where in a ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," shows a wall and ",(0,s.kt)("inlineCode",{parentName:"p"},"0")," is floor. Agents will only be able to move on floors cells, and can't walk over walls."),(0,s.kt)("h2",{id:"agent"},"Agent"),(0,s.kt)("p",null,"The individual agent types of your model can be configured below the ",(0,s.kt)("inlineCode",{parentName:"p"},"agents")," key. Each agent you want to use needs an entry in this list!"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "agents": [{\n      "name":  "SimpleAgent",\n      "count": 2,\n      "file":  "Resources/simple_agent.csv"\n    }]\n}\n')),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"name")," creates a mapping between the actual C#-Class (",(0,s.kt)("inlineCode",{parentName:"p"},"SimpleAgent"),") that represents your agent's logic, and it's configuration in the ",(0,s.kt)("inlineCode",{parentName:"p"},"config.json")," file. With ",(0,s.kt)("inlineCode",{parentName:"p"},"count")," you can control, how many agents you want to have of this type. With ",(0,s.kt)("inlineCode",{parentName:"p"},"file")," you can link an input CSV-file that has further attributes for the agent."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csv",metastring:'title="Resources/simple_agent.csv"',title:'"Resources/simple_agent.csv"'},"StartX;StartY\n4;4\n1;1\n")),(0,s.kt)("p",null,"In this case we give the two ",(0,s.kt)("inlineCode",{parentName:"p"},"SimpleAgent")," some start positions on a grid cell. We initiate 2 agents, the first one will get the coordinates ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"4"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"4"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(4, 4)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," and the second one will get ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(1, 1)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"."),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Complete config.json used in this example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "globals": {\n    "startTime": "2022-03-01T05:00",\n    "endTime": "2022-03-01T05:10",\n    "deltaTUnit": "seconds",\n    "deltaT": 1,\n    "output": "csv",\n    "pythonVisualization": true\n  },\n  "layers": [\n    {\n      "name": "GridLayer",\n      "file": "Resources/grid_closed.csv",\n      "pythonVisualization": true\n    }\n  ],\n  "agents": [\n    {\n      "name": "SimpleAgent",\n      "count": 1,\n      "file": "Resources/simple_agent.csv"\n    },\n    {\n      "name": "ComplexAgent",\n      "count": 1,\n      "file": "Resources/complex_agent.csv"\n    },\n    {\n      "name": "HelperAgent",\n      "count": 1\n    }\n  ]\n}\n'))))}c.isMDXComponent=!0}}]);