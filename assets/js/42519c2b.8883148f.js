"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7428],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(t),c=i,g=h["".concat(l,".").concat(c)]||h[c]||m[c]||o;return t?a.createElement(g,r(r({ref:n},d),{},{components:t})):a.createElement(g,r({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[h]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},33096:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const o={sidebar_position:20},r="SpatialGraphEnvironment (SGE)",s={unversionedId:"tutorial/development/environments/spatialgraphenv",id:"tutorial/development/environments/spatialgraphenv",title:"SpatialGraphEnvironment (SGE)",description:"A spatial graph is a data structure that represents a graph, whose nodes have spatial locations. The addition of spatial locations to the nodes has profound effects on how these graphs are used and interpreted. The geometric graph environment for entities provides exploration and movement queries to change the internal positioning of entities along edges and nodes. In addition, it provides a routing component to find paths. A simple example showing a few functionalities can be found here.",source:"@site/docs/tutorial/development/environments/spatialgraphenv.md",sourceDirName:"tutorial/development/environments",slug:"/tutorial/development/environments/spatialgraphenv",permalink:"/docs/tutorial/development/environments/spatialgraphenv",draft:!1,editUrl:"https://github.com/MARS-Group-HAW/MARS-Group-HAW.github.io/edit/main/docs/tutorial/development/environments/spatialgraphenv.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"GeoHashEnvironment (Geospatial Grid Environment)",permalink:"/docs/tutorial/development/environments/geohashenv"},next:{title:"Collision Environment",permalink:"/docs/tutorial/development/environments/collisionenv"}},l={},p=[{value:"Creating an environment",id:"creating-an-environment",level:2},{value:"Interaction with/within the Spatial Graph Environment (SGE)",id:"interaction-withwithin-the-spatial-graph-environment-sge",level:2},{value:"Add an agent to the environment",id:"add-an-agent-to-the-environment",level:3},{value:"Remove an existing entity",id:"remove-an-existing-entity",level:3},{value:"Move an agent to another location",id:"move-an-agent-to-another-location",level:3},{value:"Explore other agents and resources",id:"explore-other-agents-and-resources",level:2},{value:"Importing data for a SGE",id:"importing-data-for-a-sge",level:2},{value:"Exporting data for a SGE",id:"exporting-data-for-a-sge",level:2},{value:"Special Cases",id:"special-cases",level:2},{value:"Import multiple graphs with different <code>SpatialGraphOptions</code>",id:"import-multiple-graphs-with-different-spatialgraphoptions",level:3},{value:"SpatialGraphOptions",id:"spatialgraphoptions",level:3},{value:"InferNodesOnEdgeIntersections",id:"infernodesonedgeintersections",level:4},{value:"NodeIntegrationKind",id:"nodeintegrationkind",level:4},{value:"Validate import result",id:"validate-import-result",level:2}],d={toc:p};function h(e){let{components:n,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spatialgraphenvironment-sge"},"SpatialGraphEnvironment (SGE)"),(0,i.kt)("p",null,"A spatial graph is a data structure that represents a graph, whose nodes have spatial locations. The addition of spatial locations to the nodes has profound effects on how these graphs are used and interpreted. The geometric graph environment for entities provides exploration and movement queries to change the internal positioning of entities along edges and nodes. In addition, it provides a routing component to find paths. A simple example showing a few functionalities can be found ",(0,i.kt)("a",{parentName:"p",href:"https://git.haw-hamburg.de/mars/model-deployments/-/tree/master/C%23%20Models/SGE_Test%20CS"},"here"),"."),(0,i.kt)("h2",{id:"creating-an-environment"},"Creating an environment"),(0,i.kt)("p",null,"There are several ways to initialize a SpatialGraphEnvironment (SGE). The simplest possibility is to provide a georeferenced file (the format must be processable by the MARS runtime system) as a parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var environment = new SpatialGraphEnvironment("<graphfile to import>");\n')),(0,i.kt)("h2",{id:"interaction-withwithin-the-spatial-graph-environment-sge"},"Interaction with/within the Spatial Graph Environment (SGE)"),(0,i.kt)("h3",{id:"add-an-agent-to-the-environment"},"Add an agent to the environment"),(0,i.kt)("p",null,"To add an object (for example, an agent or entity) to the SGE, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Insert")," method of the environment is used. For example, This method can be called in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Init")," method of an agent to insert the agent into the environment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"var position = Position.CreatePosition(Longitude, Latitude);\nvar startNode = Environment.NearestNode(position);\nEnvironment.Insert(this, startNode);\n")),(0,i.kt)("p",null,"Agents are always inserted on nodes. The agent must therefore be added to the environment on a node. In this example, the agent has coordinates (longitude and latitude). The nearest node in the environment is searched for via the coordinates and the agent is placed there. "),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If the coordinates are not within the SGE, the nearest node will be selected anyway ","\u2013"," this can lead to the node not being close to the actual coordinates. Different types of entities can be inserted into an SGE. For example, bicycles or cars etc. are possible.")),(0,i.kt)("h3",{id:"remove-an-existing-entity"},"Remove an existing entity"),(0,i.kt)("p",null,"Removing an agent follows the same principle as adding it. The Remove method is executed via the environment and the entity to be removed is specified."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"Environment.Remove(<entity to remove>);\n")),(0,i.kt)("h3",{id:"move-an-agent-to-another-location"},"Move an agent to another location"),(0,i.kt)("p",null,"In order to create a route in the SGE, which can then be processed, it must first be created. A route can be determined via the FindRoute method of the environment by specifying the start and destination (always from node to node). Once a route has been worked through, the ",(0,i.kt)("inlineCode",{parentName:"p"},"GoalReached")," property is automatically set to ",(0,i.kt)("inlineCode",{parentName:"p"},"True"),"; this property can then be used to check whether an agent has arrived at its destination."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var startNode = Environment.GetRandomNode();  \nvar goalNode = Environment.GetRandomNode();  \n\nvar route = Environment.FindRoute(startNode, goalNode);\n\nwhile (!route.GoalReached)  \n{    \n  Layer.Environment.Move(<Agent>, route, <Movement speed of the agent>);  \n}\n\nConsole.WriteLine("The Agent has arrived!");\n')),(0,i.kt)("h2",{id:"explore-other-agents-and-resources"},"Explore other agents and resources"),(0,i.kt)("p",null,"Agents can explore an ",(0,i.kt)("inlineCode",{parentName:"p"},"SpatialGraphEnvironment")," to identify other agents and resources by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"Explore(<entity>, <route>, <distance>)")," method on the environment. Below is an example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"SpatialGraphExploreResult result = Environment.Explore(<entity>, <route>, <distance>);\n")),(0,i.kt)("p",null,"This call explores the ",(0,i.kt)("inlineCode",{parentName:"p"},"Environment")," starting from the position of ",(0,i.kt)("inlineCode",{parentName:"p"},"<entity>"),". Specifically, the environment is explored along the ",(0,i.kt)("inlineCode",{parentName:"p"},"<route>")," at a length of ",(0,i.kt)("inlineCode",{parentName:"p"},"<distance>")," (in meters). For example, the call ",(0,i.kt)("inlineCode",{parentName:"p"},"Environment.Explore(this, Route, 100)")," explores the environment starting from the position of the caller and going along the ",(0,i.kt)("inlineCode",{parentName:"p"},"Route")," object for ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," meters. The return of such a call contains the route segments (i.e., edges of the ",(0,i.kt)("inlineCode",{parentName:"p"},"SpatialGraphEnvironment"),") that are within the specified distance. The ",(0,i.kt)("inlineCode",{parentName:"p"},"result")," contains all edges (that are reachable given the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"distance"),"), along with their information. This might include other agents that are currently on those edges."),(0,i.kt)("p",null,"The above example explores in the forward direction (per default). Alternatively, the direction of exploration can be specified, as shown in the below example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"SpatialGraphExploreResult result = Environment.Explore(<entity>, <route>, <distance>, <only_next>, <explore_direction>);\n")),(0,i.kt)("p",null,"This call has two additional parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"<only_next>")," (set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," per default) and ",(0,i.kt)("inlineCode",{parentName:"p"},"<explore_direction>")," (set to ",(0,i.kt)("inlineCode",{parentName:"p"},"ExploreDirection.Forward")," per default). ",(0,i.kt)("inlineCode",{parentName:"p"},"<only_next>")," is a boolean that, if ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", returns only the first entity/agent per edge that is returned in ",(0,i.kt)("inlineCode",{parentName:"p"},"result"),". The parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"<explore_direction>")," specifies the direction in which the exploration should occur. This can be either ",(0,i.kt)("inlineCode",{parentName:"p"},"ExploreDirection.Forward"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ExploreDirection.Backward"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"ExploreDirection.Both"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Usually, an agent's exploration activities occur via a ",(0,i.kt)("inlineCode",{parentName:"p"},"RasterLayer")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"VectorLayer"),". For more information on the exploration options provided by these layer types, please click ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorial/development/layers"},"here"),".")),(0,i.kt)("h2",{id:"importing-data-for-a-sge"},"Importing data for a SGE"),(0,i.kt)("p",null,"As can be seen in the previous section, you can import data by specifying a file. This data must be in a processable format. Such a format contains spatial information data. This data can also be loaded via a configuration file. The following is an example of loading such data via ",(0,i.kt)("em",{parentName:"p"},"config.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'Previous section...\n"layers": [  \n  {  \n    "name":"ResidentLayer",  \n    "inputs": [  \n      {\n        "file": "Resources/walk_graph_layer.geojson",  \n        "inputConfiguration": \n          {\n            "modalities": [ "Walking" ],\n            "isBidirectedGraph": true  \n         }\n      },\n      {\n        "file": "Resources/drive_graph_layer.geojson",  \n        "inputConfiguration":\n          {  \n            "modalities": [ "Cycling" ]\n          }\n      }\n    ]\n  }\nNext section...\n')),(0,i.kt)("p",null,"In this example, the layer type ",(0,i.kt)("inlineCode",{parentName:"p"},"ResidentLayer")," receives data from two input files. The first input file contains data that represents a pedestrian travel network, while the second input file contains data that represents a car and bicycle travel network. Each network is associated with one or more travel modalities. A travel modality is a manner of moving in a given network. For example, in a pedestrian travel network, it is typically possible to move on foot (",(0,i.kt)("inlineCode",{parentName:"p"},"modality = Walking"),"), but it should not be possible to travel by car (",(0,i.kt)("inlineCode",{parentName:"p"},"modality = Driving"),"). However, some modalities can be used on more than one travel network ","\u2013"," such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Cycling"),", which can be used on a pedestrian network as well as on a driving network."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"isBidirectedGraph")," is an optional parameter. It indicates whether the invited graph is directed or not."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Again, two environments were loaded to illustrate. It is also possible to load only one environment.")),(0,i.kt)("p",null,"Within the ",(0,i.kt)("inlineCode",{parentName:"p"},"InitLayer(...)")," method of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ResidentLayer")," class, the data can be loaded as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"var inputs = layerInitData.LayerInitConfig.Input;\n\nif (inputs != null) {\n    Environment = new SpatialGraphEnvironment(new SpatialGraphOptions\n    {\n        GraphImports = layerInputData.LayerInputConfig.Inputs\n    });\n}\n")),(0,i.kt)("p",null,"This code snippet can be used to integrate input data from an GIS data file (e.g., GeoJSON) into the environment. For more information and an example, please see ",(0,i.kt)("a",{parentName:"p",href:"https://git.haw-hamburg.de/mars/model-deployments/-/blob/master/C%23%20Models/SGE_Test%20CS/SGE_Test%20CS/Model/ResidentLayer.cs"},"here"),"."),(0,i.kt)("h2",{id:"exporting-data-for-a-sge"},"Exporting data for a SGE"),(0,i.kt)("p",null,"There can be various situations where it becomes necessary to view the environment in a GIS. In this case, it is possible to perform an export. To export an SGE, a new GeoJSON file can be created, and the environment copied into it using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ToGeoJson()")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'File.WriteAllText("SGE.geojson", environment.ToGeoJson());\n')),(0,i.kt)("h2",{id:"special-cases"},"Special Cases"),(0,i.kt)("h3",{id:"import-multiple-graphs-with-different-spatialgraphoptions"},"Import multiple graphs with different ",(0,i.kt)("inlineCode",{parentName:"h3"},"SpatialGraphOptions")),(0,i.kt)("p",null,"In the following example, an environment is created within which agents can walk or cycle. Both modalities have different environments. Through this separation, pedestrian paths and bicycle paths (in this example) are represented."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var environment = new SpatialGraphEnvironment(new SpatialGraphOptions  \n{  \n    GraphImports = new List<Input>  \n    {  \n        new()  \n        {  \n            File = "<filename for walking graph here>",   \n            InputConfiguration = new InputConfiguration \n            { \n                Modalities = new HashSet<SpatialModalityType> { SpatialModalityType.Walking } }  \n            },  \n        new()  \n        {  \n            File = "<filename for driving graph here>",  \n            InputConfiguration = new InputConfiguration  \n            {  \n                IsBiDirectedImport = true,  \n                InferNodesOnEdgeIntersections = true\n                Modalities = new HashSet<SpatialModalityType> { SpatialModalityType.CyclingOwnBike}  \n            } \n        } \n    }\n});\n')),(0,i.kt)("p",null,"Here is another example in C# code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var file = "<example environment file>";\nvar input = new Input\n{\n    File = file,\n    InputConfiguration = new InputConfiguration\n        { InferNodesOnEdgeIntersections = true, IsBiDirectedImport = true }\n};\nvar graph = new SpatialGraphEnvironment(input);\n')),(0,i.kt)("h3",{id:"spatialgraphoptions"},"SpatialGraphOptions"),(0,i.kt)("p",null,"This class ",(0,i.kt)("inlineCode",{parentName:"p"},"SpatialGraphOptions")," provides all relevant options for building the ",(0,i.kt)("inlineCode",{parentName:"p"},"ISpatialGraphEnvironment"),". Inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"InputConfiguration")," the files are specified which are associated with a certain modal type.  A ",(0,i.kt)("inlineCode",{parentName:"p"},"HashSet")," of modalities is then initialized. The ",(0,i.kt)("inlineCode",{parentName:"p"},"SpatialModalityType")," is the walking modality for the walk graph and the cycling modality for the drive graph. "),(0,i.kt)("p",null,"Other ",(0,i.kt)("inlineCode",{parentName:"p"},"SpatialGraphOptions")," are:"),(0,i.kt)("h4",{id:"infernodesonedgeintersections"},"InferNodesOnEdgeIntersections"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"InferNodesOnEdgeIntersections")," option (boolean): Geometries where LINESTRINGs do not end flush on intersections cannot be (functionally) imported, as not all intersections/routes can be navigated. If the option is activated, nodes are inserted at the ends of these LINESTRINGs. An example: The red nodes are inserted because the upper one is missing a section of an intersection (starting from the node, there are different edges) and the lower node is missing completely (here the graph ends)."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This option is especially useful if you have a graph with missing nodes that should be inferred by the importer.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Infer Nodes on Edge Intersections",src:t(91731).Z,width:"260",height:"389"})),(0,i.kt)("p",null,"Because the import with this additional validation is expensive computational wise, it is handy to export the so imported and now enhanced graph, both for visual validation in QGIS as well as usage for following simulation runs instead of the raw graph (see ",(0,i.kt)("a",{parentName:"p",href:"#exporting-data-for-a-sge"},"section exporting"),"). "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "SpatialGraphMediatorLayer",\n  "inputs": [\n    {\n      "file": "resources/graph.geojson",\n      "inputConfiguration": {\n        "isBidirectedGraph": true,\n        "inferNodesOnEdgeIntersections": true\n      }\n    }\n  ]\n}\n')),(0,i.kt)("h4",{id:"nodeintegrationkind"},"NodeIntegrationKind"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"NodeIntegrationKind")," option (Enum): When inviting different environments, you need transitions between the different graphs. These transitions are used so that an agent can switch from one graph to the other. Possible settings are: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MergeNode"),": If two nodes are spatially close to each other, the first node is chosen and the second node is discarded. The associated edges are redirected to the first node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LinkNode"),": If two nodes are spatially close to each other, an edge is created between them to connects them to each other.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example of MergeNode and LinkNode",src:t(61463).Z,width:"1905",height:"825"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In the above example, two environments are imported. Alternatively, it is possible to import only one environment. In this case, only one file would be specified under ",(0,i.kt)("inlineCode",{parentName:"p"},"Inputs"),". ")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"NoHelperNodes")," option imports all nodes at first. When the edges are imported, no helper nodes are created to have a clean ending of an edge (if a node is not within tolerance range) but always the nearest node is chosen as start/end of an edge."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This is especially helpful when importing train graphs, where the nodes are semantically stations and the edges need to serve these stations, therefor have to end in a station and not in a helper node nearby.")),(0,i.kt)("h2",{id:"validate-import-result"},"Validate import result"),(0,i.kt)("p",null,"Generally, it is advisable to examine and validate an environment after it has been imported. This can be done by exporting the imported environment as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'File.WriteAllText("result_graph_env.geojson", environment.ToGeoJson());\n')))}h.isMDXComponent=!0},91731:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAGFCAYAAAAb5I13AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABnjSURBVHhe7d3Zd1TXlcfxPPh/SN7tP6GTuB27Z8dxr6zG2C+9+pG/oFfiODGYkKmZR2NsEGaejDEzGDRPaERCs4Qk0IAGJCHQgEBC0+67jw4VAcKoqu4t3VP1/axVC+1SIVgF91f3nnvO2T8SAAn3ec4aGXvy0FbhQSAACXa8/EvpvN9qq3AhEIAESm84LTfuFNkqfAgEIEEqO69JhhcIYUYgAAnQ4V0iHC//ylbhRSAAARubGJWdOWtsFW4EAhCwbVmrZGJq3FbhRiAAATpS+rl0D7XbKvwIBCAg39edlJquUlu5gUAAAlDbXSaFrVdt5Q4CAfDZk6kJ2Zq50lZuIRAAn52q/FpuDTTayi0EAuCjht5KuVBz1FbuIRAAH6278hv7lZsIBMAnemagZwguIxAAH+iYgY4duI5AAHygdxX07oLrCAQgTlcbTknVnWJbuY1AAOLQPdQmp2/st5X7CAQgDgeLt8nd4Tu2ch+BAMSo7V6TnKxIs1VyIBCAGB0u2SE9Qx22Sg4EAhCD9sEWOXF9t62SB4EAxOBo2RfS9aDNVsmDQACipFuo61bqyYhAAKJ0vGyXFwq3bJVcCAQgCnqZoJcLyYpAAKKgA4k6oJisCATgFZqamsxDbzHqrcZkRiAAL1FVVSXLli+XX7z9jnn8+/v/JlcLL9rvJicCAViAhsG7v3pfPlu/WVZv2mYeqzZskV96z9XW1dlXLb3pmWl5PPlIRh4/kHsP70rvcKd0eJc0Lf31Ut9bKVV3SqSsPU/KOwqkoPWK2fhVH9dupXuPDCkyj0wpvq2PLAIBWMiyD5Y/EwaRUFi3yZw1xGJy+onp4vTg0T3pH+02A5Rt927Kzb4aqesuN70fS9uypaDlimQ1nZMr9d/K+eojZp8FvbOh6yb2Fq6XXbl/Mc1fNqR/LJvSP5Ht2avly7y/ytfXNsqhku1yovwrs+DqQs0xuVp/SrJvXpCKzkJz8GsIaBg8DQYNCf3z8lu+Nw8CAXiOjhfoJcLzYfD08bN//Lmcyz9hPllzmy+ZBq6Xak/I2aqDcvL6HjlSulP2F22W3flr5fOcNbIl8w9ma7UtmZ+alm57CtZ6398iR73X6ev19+nv15+jP09/7vWOfKnuKpXG3htya6DB3Oa8O9Ilg2P9Mjo+bDpBzc7OmL+vnwgEpIhZefTkoTmtvvPgtvlU1rbs+qmZ2XhGztccNXcQ9EBec+R/5adv/nTBMNDHP7z5MzmSscd8suonun6y6ye8/kz9xNdOTf2jPTL0aFDGvD9TzwxcQSDASZPTk+a6WT81ddVhXU+FlHvXynnNl82ptp4y6yd1WsE675T6M1l/9bfep/UfzWn1Me/0+2zVIUlv+M6cMuvpdIP3Say3E/VAfjgxbC4LdMzg+TBY6V1GLP/oI/u3SD4EApygp8o13WWmPdrewg3moNbrZr2u1iXIF2uPS3bTeSm5nWVOtVv668wn9f2xARmffGR/yuLV1taaAUQdM5gfBjrQWN/QYF+VfAgEhM7M7LS5ZtZRbx1Q2561ygymPe2VODjWZ18ZrNLKYvmn996RN996yzyWf/hRUoeBIhCw5EbHh6TxbpV3LX/WfOJvTP+dGVXXUW/dzXh88rF9ZWLlNV+SkrZsaW1tNY9UQCAg4XTLsesdBXKu+rC5hbYr7y9y3vu6oqPQjAmERbLspBwNAgGB0ut3vW2mg3163a/3zvUsIKvprDTdrTa30MLI9ZZssSIQ4DudKZfVdF7OVB00I/w6DqCDfXq7L4h750HQOxQ6KJlqCATE7dGTMantLjMTbDZlfGJmypV35JsZeS7qH+2VfUWbbZVaCATERK/1dRqsnv7vyP6jXK77xkzMmZ6Zsq9wl0731TUAqYhAQFT01H/ftU1yoHirmQufTD0J5syaSUypikDAouiKuc0ZvzeDg48nx+yzyUenIWc0nrFV6iEQ8IP0ANmWtdKsmJuambTPJi+dBZmoiU9hRCBgQXoNrXP/9dNSV9alAp0dqROiUhmBgGfoqj2dKKQLhHR1YCo5V3XIzI1IZQQCDF3tp+v3dV2+TiVONTousiN7ta1SF4GQ4nTLrb2FG81+ALp+P1XpLVS9a5LqCIQUpjMKL9Yek3sPU3cQ7Snd2Ug3M0l1BEKKym2+aGYUQqS5r1bO3Dhgq9RGIKQY3aH3QNEWKW3Lsc8g2ZuvRINASCG6Yafu0Ns30m2fga632FOwzlYgEFKE7jakW3rjWbrdue5wjDkEQpLTvQh1XoHuR4gX6e5MumUb5hAISUx3E9a9CFNxXsFi3LnfKt/Xf2srKAIhSX1Xuc/0G8DLzbU0y7AVFIGQZLQ9mG5S0jqQ3LsD+0EnZDEH41kEQhLRTzxtD5YMm5QETYNAAwHPIhCSgLYKO1yyg9PfKDBVeWEEguN0lp02Ee0Z7rTPYDF016eB0V5b4SkCwWHam5Apt9HT9m7a8xEvIhAcNPz4vmkprt2LEb3i25mmKxReRCA4Rncy+ir/b85ucR4G+4u2SP8o07cXQiA4RFuY605GiJ3u+aAbwWBhBIIDdKtz3ehU+x4gPqVt2ZLbfMlWeB6BEHLaEl2boaTKRqdB034SYWooGzYEQkjNzM6Y5qgMfvlHB2N1/AUvRyCE0O2BRrMKT5ujwj9l7bmSc/OCrbAQAiFkdH3+txV7bQU/HSrZLr1J13rOXwRCSDycGJGvr21ks46A6BJw3RcCP4xACAFtjvJF7p/l3sO79hn4TdvTZzWdtxVehkBYYhdqjpnmKAjWkdLPpXuo3VZ4GQJhifSP9preifW9lfYZBEUvx/QMDK9GICwBba2+r2hzyvVOXCoVHYWS2XjWVvghBEKCfXN9j2mtjsQ5WvaF2UkKr0YgJIi2TVt/9TfSNthsn0Ei6FmYXpphcQiEBNC587RNWxqVndcko+G0rfAqBEKATNu04q1mQQ2WxvGyXdJ5/5at8CoEQkD+3jaNhTRLRQNZ/w2weARCAGibFg5Vd4rlasMpW2ExCAQf6V59tE0LDx230cFcLB6B4BMdvEqjbVpo6P4R27JW2QqLRSD4QNumZdA2LVSqu0rZbi4GBEIcaJsWXjoBjDkf0SMQYkTbtPB6Mj0hWzM/tRWiQSBEibZp4Vffc11ybrLUORYEQhQibdOGOuwzCCPdh1I3p0X0CIRFom2aO3SAV+/6IHoEwivQNs09l2qPS5132YDoEQg/oLqLtmku0jM5vbxD9AiEl6BtmruYoRg7AuE5tE1zn3a60n9HRI9AmIe2aclBp5DruhJEj0DwzM7OmHXztE1LDrqhqm6siuilfCBo27QN6R+ziUYS0bkiOoEM0UvpQKBtWnLSvSsRm5QMhDHapiWtuWXPK22FaKVcIOiElZ25f6JtWpIaHR+WXbn0cIxVSgXCXNu047ZaOrpC8vHkmJkFOeAFk66NaB9sNpNp6noqpKa73Px6a6DRfE9HzB89GZPZ2Vn7E/Ay9x72yd7CjbZCtJIuEJqamsxjviDapumglR7Qd0e65Pa9JnMAa0PRvObLZkLTuerDcrz8S3Mbc2/hevOppTv46ACm7qGwI3u1mQX59bVNZvXkN9d3mxl2F73A0qXV+uupyq/N9/Q22o7sP8qGqx/L1syV5vfpbs46Aedc1SG5Wn/K/LnVXcXSeb9VxlK4I1TPcKd5zxCbpAmEqqoqWbZ8ufzi7XfM44PlH0ptXV3UbdOeTE1I30i3+bQuupUhmY1n5HzNUXPA7i/aYg5sPaB1JFsPTD3gv61IMwewdhcuuZ1lpjzf6m8wB6cGxuBYvzmV1etbvcUZD/37aRDpbs46G6/pbrVU3Skxf272zfMmhD7PWSPbvfA5UrrThFO59x60eaE18viB/SnJSzdF0c1REJukCAQNg3d/9b58tn6zrN60zTxWbdgi//If/yr7L31pX/V3I+ND5mCt6So1cw/Oe5/memDrlt36CXzAO/D1QCpovSIVnYXS0HvDnNL3j3abA9uFTVHGJx+bbse6lVi2F1QnvdD6Mu+vsjnj9+bsQu+waM/D3iSb0dfSXy9XGphyHqukCIRlHyx/JgwiobBuk7z36/ckveG0OSD2FKwzp916YOgnqW6XrrMTG+9Wmamuuo9/spuanjRnLU19NaYB6qGS7eY2nbZL1+DQMw6XN4rVHa/13xWxcT4QdLxALxGeD4Onj5+++TO5UHjKnDLrqkUG5hamZxN6aaFjErqVvM72O1t10LvkyjV7R8Z7qZMo1zsKvLMfOj3HKukD4c233pLW1lb7aizWw4lhs8Ar5+YFs3ekDoaeqtjr1RfN7M6wzgTUcR+91ENskuKS4f3/+k8zZvB8GKz0LiOWf/SRfRXi1TvcJaVtuWZ255bMP5ixCL3MaPWu28OyIEwDTM9qEBvnA0H/8XecWiu//NX7ZsxgfhjoQGN9A1ukB0XHIvQyQ/tS6OzA/UWbzem63qEZX6LxGB0M1rsuiI3TgaD33/UTQektRr3tqJcI+lj+4UeEQYL1j/aYa3idT7E9+zMzx0JbsetA5WJv+8ZLe2pqo13ExtlAOF7+1YKfBDpewJhBOOgsTN3sVAcqdWLY3sINpvmqHrC6niQIejmjYxyIjXOBMD0zbUbBO+5z0LtmcKzPdGTWT3FdT6K3gfUUX2eQ6vyOmD30zj727BFZsULal70jQ9vXzj2HqDkVCLogaVP6J07fJ8ff6W1gnTila0x0Buju/P+Ty3XfSF13uZmNuSilpSKvv+79T/b+K89/vPHG3PcQFWcCoaW/zixZRvIaejwotd1lcqn2hJkWrhPIdDGaTjYaejRoXzWPHvCvvfZiGDx96PcIhah471r46a2u0zf22wqpQqeY63J1nXm4O3+tmSx1oeaoGTt60N8+dxawUBDMf+hruHxYNO8dCze9xtTJMIBOlmrorZxbZ/Lx8mcO/IEf/0RK33rbPPTr+d+TtDT7E/Aq3rsVXrreQFcOAi9YseKZg16DIOfd98xDv57/PfNaLIr3boWPribUQSZdkQgsiEAIhPduhcvAaK/ZbyCu21BIfnqbcd5BzyWDP7x3Kzx0yuu+a5tsBfwAHShkUNF33jsWDqVtOXKm6qCtgEXgtqPvvHdt6emocW4zdxIQAz3gFzpT0OfKyuyLsFhLHgjHynaZ2WpAzPSSIC1Nhv57mXR+8M9zYwZcJsRkyQJhambSTDS58+C2fQaIj66T0MVTiN2SBIJui66bfdKQE37ScSguPeOT8EDQbbl0W3TAb7qDtm6ai9glNBBK2rLNxp1AEDIaz5j9FxC7hAWCLlDJa75kK8B/ujJSF0MhdgkJhGNlX5glrECQdEWsLpNH7AINBN2qW3fG4U4CEkEXw7H+JT6BBYK2PdOtuoPaOw94nm4LrztBI3aBBILeSdDGqEAi6R6Nui0bYud7IGgX4rNVh2wFJI7u7Jyo7d6Tla+BoBtk5jVfthWQWLps3oXO3GHmWyBo/z/dIBNYCjOzM7Ix/Xe2QqziDgRzJyFnjekQDCwVbeW/PXu1rRCruAKhb0TvJHwqYxOj9hlgaegW7trXAfGJORC0X98B7iQgJPQ2N3e24hdTIBTfzpRz1YdtBSw9nfymM2IRn6gD4XLdCbOqDAiT1oEG05Ye8YkqEI6YOwnltgLCQxvGao9IxGdRgfBkasJM+ugearfPAOFy406RpDd8ZyvE6pWB0DfSJVszVzIDDKFW2pYtuSyvj9sPBkLj3SqzYAQIO50hq9PmEZ+XBkLRrUw5z50EOCKj4TS7JflgwUDQnWcKWq7YCgi/i97/2bqeClshVi8EwpHSz9mGCs7RW46t/fW2QqwigTAxNS47srmTADcdL9slnfdv2QqxMoGgu8xsy9I7CWPmScA1Ovitd8QQnx819N6Qg8XbbAm4aXf+Whl6NGgrxOpH52uO2i8Bd+nlLme48XvpbUfAJZvSdbekaVshVgQCnDczO81uST4hEOA8vVTQSwbEj0CA83QwUQcVET8CAc7TrfzYvcsfBAKcpxOSdGIS4kcgwHk6ZZndkvxBIMB59T0VcpHdknxBIMB5c7slnbYV4kEgwHm6MQotBP1BIMB5ec2XpKQt21aIB4EA5+nlgl42IH4EApyn26/rNuyIH4EA55ndkgYabIV4EAhw3rGyXaaVG+JHIMB52uRVm70ifgQCnKdt4LUdPOJHIMB527JWyeT0E1shHgQCHDcr66/+1n6NeBEIcNr45GPZ7p0hwB8EApw2/Pi+fJX/N1shXgQCnNY/2iP7izbbCvEiEOA0nX+g8xDgDwIBTmNzFH8RCHCadnzWzs/wB4EAp1V2XpOMxjO2QrwIBDit+Ham5Ld8byvEi0CA03JuXpTStlxbIV4EApx2pf5bqe4qsRXiRSDAaeeqD0vT3WpbIV4EApx28voeabt301aIF4EApx0u2SE9w522QrwIBDhtb+EGGRzrsxXiRSDAaV/k/lkeTozYCvEiEOC0zRm/l6npSVshXgQCnDU7OyMb0j+2FfxAIMBZjycfyfbs1baCHwgEOEs3VtUNVuEfAgHO6hvplgNFW2wFPxAIcFbn/VtynM1RfEUgwFkt/XVy+sZ+W8EPBAKcVdddLpdqT9gKfiAQ4KyKjkLJbDxrK/iBQICzim5lSEHrFVvBDwQCnJV984KUtefZCn4gEOCsuc1RSm0FPxAIcNbZqkNys6/GVvADgQBn6RmCzkWAfwgEOOtI6U7pHmq3FfxAIMBZOm1Zpy/DPwQCnJVWsE7ujw3YCn4gEOCsud2Shm0FPxAIcNb2rFUyPvnYVvADgQBnbUz/nczMTtsKfiAQ4CS2TwsGgQAnPZmakK2ZK20FvxAIcNLYxIjszP2TreAXAgFOevDonuwpWGsr+IVAgJP6R3tlX9FmW8EvBAKc1DPUYfo6wl8EApzUPtgiJ67vthX8QiDASa399fJd5T5bwS8EApzU0HtDztcctRX8QiDASbpTku6HAH8RCHASOy4Hg0CAk0puZ0le82VbwS8EApyU3/K9FN/OtBX8QiDASVlN56W8I99W8AuBACfpgGLVnRJbwS8EApx0oeaY1PdW2gp+IRDgpDM3DkhzX62t4BcCAU765voeaRtsthX8QiDASfRkCAaBACfRkyEYBAKcRE+GYBAIcBI9GYJBIMBJ9GQIBoEAJ9GTIRgEApxDT4bgEAhwDj0ZgkMgwDn0ZAgOgQDnDD0alN359GQIAoEA59CTITgEApxDT4bgEAhwTof2ZCj/ylbwE4EA59CTITgEApxDT4bgEAhwTk1XqXxfd9JW8BOBAOfQkyE4BAKcQ0+G4BAIcE5ByxUpukVPhiAQCHAOPRmCQyDAOfRkCA6BAOdc1J4MPRW2gp8IBDiHngzBIRDgHHoyBIdAgHOOlu6UrgdttoKfCAQ4h54MwSEQ4Bx6MgSHQIBzduX+RUbH6ckQBAIBzqEnQ3AIBDiHngzBIRDglNnZWdlwlZ4MQSEQ4BR6MgSLQIBT6MkQLAIBTqEnQ7AIBDiFngzBIhDgFHoyBItAgFPoyRAsAgFOoSdDsAgEOIWeDMEiEOAUejIEi0CAU+jJECwCAU4pacuWvOZLtoLfCAQ4hZ4MwSIQ4BR6MgSLQIBTrtafoidDgAgEOIWeDMEiEOAUejIEi0CAU05qT4Z7N20FvxEIcAo9GYJFIMAp9GQIFoEAp6QVrqcnQ4AIBDiFngzBIhDgFHoyBItAgFM2pX8i0zP0ZAgKgQBn0JMheAQCnEFPhuARCHDG2MSo7MxZYysEgUCAM+jJEDwCAc6gJ0PwCAQ4o2e4k54MASMQ4Ax6MgSPQIAz6MkQPAIBzmjUngzVR2yFIBAIcAY9GYJHIMAZ9GQIHoEAZ9CTIXgEApxBT4bgEQhwBj0ZgkcgwBn0ZAgegQBn0JMheAQCnEFPhuARCHAGPRmCRyDAGfRkCB6BAGccKN4qfSNdtkIQCAQ4g54MwSMQ4Ax6MgSPQIAztmd/JuOTj2yFIBAIcAY9GYJHIMAJ9GRIDAIBTngyrT0ZPrUVgkIgwAn0ZEgMAgFOoCdDYhAIcMKA9mS4tslWCAqBACfQkyExCAQ4gZ4MiUEgwAmtAw30ZEgAAgFOoCdDYhAIcAI9GRKDQIATKjq1J8MZWyEoBAKcQE+GxCAQ4AR6MiQGgQAnZGtPhvY8WyEoBAKcQE+GxCAQ4AR6MiQGgQAnnKk6SE+GBCAQ4AR6MiQGgQAn0JMhMQgEhNfDhyJ79oisWCEtv/65jOxYP/ccAkMgIJxKS0Vef937H+r9F53/eOONue8hEAQCwkcP+NdeezEMnj70e4RCILx3FwgRvSTQs4CFgmD+Q1/D5YPvvHcWCBEdM5h34A/8+CdS+tbb5qFfz/+epKXZ3wS/eO8qECIrVjxz0GsQ5Lz7nnno1/O/Z14LX3nvKhAiBMKS8t5VIES4ZFhS3rsKhAiDikvKe2eBkOG245Lx3l0ghPSAX+hMQZ8rK7Mvgt8IBISXXhKkpcnI/3wo7cvenhsz4DIhUAQCQq+ht1Iu1By1FYJEIMAJU9OT9isEiUAAEEEgAIggEABEEAgAIggEABEEAoAIAgFABIEAIIJAABBBIACIIBAARBAIACIIBAARBAKACAIBoTY7O2u/QiIQCAi1qZkp+xUSgUBAqLExSmIRCAg5LhkSiUAAEEEgAIggEABEEAgAIggEABEEAoAIAgFABIEAIIJAABBBIACIIBAARBAIACIIBAARBAKACAIBQASBACCCQAAQQSAAiCAQAEQQCAAiCAQAEQQCgAgCAUAEgQAggkAAEEEgAIggEABEEAgAIggEABEEAoAIAgFABIEAIIJAABBBIACIIBAARBAIACIIBACWyP8D5azoo+/aokkAAAAASUVORK5CYII="},61463:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/merge_node_link_node-f5feeb309cd91151e5df487825c3a93d.png"}}]);