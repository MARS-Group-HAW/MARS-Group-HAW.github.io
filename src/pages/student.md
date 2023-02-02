---
title: For Students
description: Offersings for student projects
hide_table_of_contents: false
---

# Thesis offerings


This page shows general suggestions for thesis topics. If anything catches your interest, or you want to know if your own idea might fit in? Write an e-mail or visit us at Berliner Tor 7 in room 4.80D.


## Infrastructure & Technology

### Big Data Management in Distributed Simulations
 
Context: When running simulations, a lot of data needs to be recorded as result set. The various goals such as visualization, analysis and contextualization require different output formats, but should rely on a uniform data stock base for executed simulations, which then are accessed by the adapters tailored for the effort. This thesis is about creating an efficient storage concept for simulation results and implementing that solution together with the MARS team. Among the issues are fast data logging during simulation execution, setting an optimal data format for above goals, provide efficient data access to the results (caching, indexing, etc.) and to provide interfaces and specifications for integration with the MARS framework.

**Technologies**: Specialized DBMS (e.g.: VoltDB), Caching Services (memcached etc.), Microservices, Docker

 

### Development of a MARS plugin for Jetbrains C# IDE “Rider”

Content: MARS models need to be developed in the C# language with the .NET Core Runtime. We use “Rider” from JetBrains (creator of IntelliJ IDEA and such) for all our model development to have a unified development experience and greater compatibility across all major platforms. To further support and streamline the workflow of model developers, a MARS plugin for “Rider” has been developed. This plugin will connect certain parts of our microservice based infrastructure and allows to directly run new simulations from the IDE as well as debugging these. This will be a major improvement, since currently new models, will have to be uploaded through our WebUI and executed manually from it.

**Technologies**: Jetbrains IDE API, Microservices, Docker

 

Integration of the contextual search engine MARS Surveyor into MARS
Content: MARS Surveyor is a component, which allows to log events from a simulation and then perform a search based on contexts. The results are situations in the simulation, which are of a particular relevance to the modeller. This approach allows for a significantly more efficient way to explore large result sets from massive scale simulation models than simply browsing the data. Since MARS Surveyor has been developed in 2014 by Daniel Steiman (M.Sc.), the component needs to be refactored and extended to fit into todays MARS service landscape.

**Technologies**: Context-Aware CEP, RabbitMQ, Docker

 

### Optimization of the MARS Websuite User Experience

- Consistent user interface design
- Interaction- and workflow surveys
- User questioning and usability lab
- Usage of latest web technologies
 

## Modeling

### Scope

We are active in the following fields of modeling, however new ideas are always welcome:

- Trans-Disciplinary Multi-Agent Based Modeling
- Urban Modeling
- Urban Logistics
- Social-ecological Modeling
 

## Projects

### Urban Simulation

- The MARS Urban simulation project aims to model and simulate the traffic flow of bigger cities. This is done with an multimodal approach, meaning different types of traffic participants which interact and influence each other.
- The model strives to demonstrate the large scale capabilities of the MARS framework and relies on Open Data sources like OpenStreetMap. The Project is in an early stage and the first goal is to model the traffic system of Hamburg.
- Through our international partners, a special focus resides on Smart Urban Logistics.
- This project is funded by the city of Hamburg as part of ahoi.digital (for more look here).
 

### ARS AfricaE
Savannah ecology and ecosystem resilience in the Kruger National Park.
This project is part of the SPACES project that is funded by the german Federal Ministry of Education and Research  (Ministerium für Bildung und Forschung (BMBF)).
 

### Pedestrian Dynamics & Evacuation

- Aircraft evacuation
- Evacuation route planning for huge events (LoveParade etc.)