"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9171],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:2,sidebar_label:"Installation"},o="Installation",l={unversionedId:"tutorial/installation",id:"tutorial/installation",title:"Installation",description:"The MARS framework is written in C#/.NET, so you need to install the .NET-SDK on your computer to develop MARS models.",source:"@site/docs/tutorial/installation.md",sourceDirName:"tutorial",slug:"/tutorial/installation",permalink:"/docs/tutorial/installation",draft:!1,editUrl:"https://github.com/MARS-Group-HAW/MARS-Group-HAW.github.io/edit/main/docs/tutorial/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Installation"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/tutorial/intro"},next:{title:"MARS - Basics",permalink:"/docs/category/mars---basics"}},s={},p=[{value:"NuGet Packages",id:"nuget-packages",level:2},{value:"<code>config.json</code> validation in Rider",id:"configjson-validation-in-rider",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The MARS framework is written in C#/.NET, so you need to install the ",(0,r.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/en-us/download"},".NET-SDK")," on your computer to develop MARS models."),(0,r.kt)("p",null,"The easiest way is to install ",(0,r.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/rider/"},"JetBrains Rider")," as an Integrated Development Environment (IDE). This will handle the installation of .NET for you and give an easy way to execute and debug your models. Though a license is required for using Rider, which is ",(0,r.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/community/education/#students"},"free for students"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For a more playful introduction into modelling with MARS, have a look at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/mars-explorer"},"MARS Explorer"),", which provides a simpler IDE suited for smaller models and first steps into MARS.")),(0,r.kt)("h2",{id:"nuget-packages"},"NuGet Packages"),(0,r.kt)("p",null,"The MARS framework is organized in ",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Mars.Life.Simulations/"},"NuGet packages"),". To install the framework in your application, use the public ",(0,r.kt)("inlineCode",{parentName:"p"},"nuget")," feed from Microsoft and make your you app is compatible with ",(0,r.kt)("inlineCode",{parentName:"p"},"netstandard2.0"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Mars.Life.Simulations/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/Mars.Life.Simulations?label=Mars.Life.Simulations",alt:null}))),(0,r.kt)("p",null,"The runtime system is available as a public NuGet package and can simply be added to your project using the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet")," CLI with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package Mars.Life.Simulations\n")),(0,r.kt)("p",null,"Or if you are using an IDE:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Visual Studio, right-click on the ",(0,r.kt)("strong",{parentName:"li"},"References")," item in your solution folder, and select ",(0,r.kt)("strong",{parentName:"li"},"Manage NuGet Packages"),"."),(0,r.kt)("li",{parentName:"ul"},"For JetBrains Rider, click on NuGet package management below.")),(0,r.kt)("p",null,"Search for ",(0,r.kt)("inlineCode",{parentName:"p"},"Mars.Life.Simulations")," and select Install."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Mars.Life.Simulations")," provides the base for all MARS models. For models in need of more complex movement and modality (Walking, Driving, \u2026) have a look at our ",(0,r.kt)("a",{parentName:"p",href:"./soh/"},"SmartOpenHamburg")," Package as well. It provides more detailed features regarding movement of agents."),(0,r.kt)("h2",{id:"configjson-validation-in-rider"},(0,r.kt)("inlineCode",{parentName:"h2"},"config.json")," validation in Rider"),(0,r.kt)("p",null,"The simulation configuration is generally stored in a ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/configuration/sim_config_options"},(0,r.kt)("inlineCode",{parentName:"a"},"config.json")," file"),". Because JSON is a pure data format and not a schema-based format, it has no native support for schema definitions. But it would be nice to have a guideline how to fill the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json"),", knowing which options are available and which parts of configuration are mandatory."),(0,r.kt)("p",null,"For this purpose, we use ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/"},(0,r.kt)("em",{parentName:"a"},"JSON Schema")),". It is supported by multiple IDEs; the following describes a short introduction how to use it in Rider."),(0,r.kt)("p",null,"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"JetBrainsRider > Preferences")," menu. Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Languages & Framework > Schemas and DTDs > JSON Schema Mappings"),". Paste the URL of the MARS schema to ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema file or URL"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://mars-group-haw.github.io/mars_config.schema.json\n")),(0,r.kt)("p",null,"Use the preselected ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema version: JSON Schema version 4"),". "),(0,r.kt)("p",null,"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"File path pattern")," for files that are named ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"Save"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rider_preferences_schema",src:n(14272).Z,width:"903",height:"703"})),(0,r.kt)("p",null,"That's it. Know you have full schema support for manipulation on your simulation configuration json-file."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rider_json_schema",src:n(67074).Z,width:"1289",height:"539"})))}c.isMDXComponent=!0},67074:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rider_json_schema-5edc1035e0dad75482076dc517edf397.png"},14272:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rider_json_schema_preferences-b344419183563f5dbf5a2e957496fe71.png"}}]);