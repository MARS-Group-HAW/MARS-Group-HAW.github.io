---
title: Themen für Abschlussarbeiten / Thesis Topics
description: Themen für Bachelor- und Masterarbeiten in der MARS Group / Topics for bachelor's and master's theses in the MARS Group
---

# MARS Group – Themen für Abschlussarbeiten / Thesis Topics

**Stand / Last updated:** Oktober 2026
**Kontakt / Contact:** Prof. Dr. Thomas Clemen – [thomas.clemen@haw-hamburg.de](mailto:thomas.clemen@haw-hamburg.de)

(The English version follows below.)

---

# Deutsch

## Schwerpunktthemen für Bachelor- und Masterarbeiten

Die MARS Group setzt aktuell drei Schwerpunkte für Abschlussarbeiten:

1. **Kooperation und Lernen in Multi-Agenten-Systemen und agentischen Teams**
2. **Nutzung frei verfügbarer Geodaten für Logistik und kritische Infrastrukturen (KRITIS) / Resilienz**
3. **Schneller zum MARS-Modell: automatisierte Modellerstellung aus offenen Daten**

Alle Themen bauen auf bisherigen Arbeiten der Gruppe auf – auf dem MARS Framework, auf bestehenden Simulationsmodellen (z. B. SmartOpenHamburg, Kruger NP, Elk Island NP) und auf abgeschlossenen Abschlussarbeiten, die unter [Theses](https://www.mars-group.org/student-work/theses) eingesehen werden können. Viele Themen sind so angelegt, dass sie zu einer wissenschaftlichen Publikation führen können. Mehrere Themen lassen sich zu **Themenketten** verbinden: Eine Bachelorarbeit schafft die Grundlage, auf der eine Masterarbeit aufbaut.

Die Literaturangaben bei jedem Thema sind als Einstieg gedacht, nicht als vollständige Literaturliste.

Auf Grund unserer Zusammenarbeit mit der [Logistik-Initiative Hamburg](https://www.hamburg-logistik.net/) und der [Carleton University, Ottawa](https://carleton.ca/) ist bei ausgewählten Themen eine Co-Betreuung möglich.

**Legende:** BA = Bachelorarbeit, MA = Masterarbeit

---

## Schwerpunkt 1: Kooperation und Lernen in Multi-Agenten-Systemen / agentischen Teams

### Säule I – Kooperation lernen (Multi-Agent Reinforcement Learning)

#### 1.1 Ein offenes Waldbrandmodell in MARS (BA)

**Anknüpfung:** Bardtke (2026). Die dort verwendete Simulationsumgebung wird beim DLR gehalten und ist nicht frei nutzbar.

**Fragestellung:** Aufbau eines frei nutzbaren, agentenbasierten Waldbrandmodells im MARS Framework: Brandausbreitung (zellulärer Automat oder Rothermel-basiert), Wind, Topographie und Vegetation aus offenen Daten (z. B. Copernicus-DEM, Landbedeckung) sowie Lösch-Agenten (Flugzeuge, Drohnen) mit einer Schnittstelle für Reinforcement Learning. Wie gut reproduziert das Modell etablierte Ausbreitungsmodelle oder dokumentierte Brandereignisse? Das Modell dient als offene Grundlage für die MARL-Themen 1.2, 1.3 und 1.10. Für die Umweltlayer kann der Generator aus Thema 3.4 genutzt werden.

**Grundlagenliteratur:**
- Rothermel, R. C. (1972). *A Mathematical Model for Predicting Fire Spread in Wildland Fuels*. USDA Forest Service Research Paper INT-115.
- Finney, M. A. (1998). *FARSITE: Fire Area Simulator—Model Development and Evaluation*. USDA Forest Service Research Paper RMRS-RP-4.
- Alexandridis, A., Vakalis, D., Siettos, C. I., & Bafas, G. V. (2008). A cellular automata model for forest fire spread prediction: The case of the wildfire that swept through Spetses Island in 1990. *Applied Mathematics and Computation*, 204(1), 191–201.

#### 1.2 Zero-Shot-Koordination mit unbekannten Partnern (MA)

**Anknüpfung:** Schöttler (2023), MARS-basierter Drohnenschwarm; methodisch Bardtke (2026). Alternativ auf dem offenen Waldbrandmodell aus Thema 1.1.

**Fragestellung:** Agenten, die im Self-Play trainiert werden, entwickeln oft „Insider-Konventionen“, die nur untereinander funktionieren. Wie gut kooperieren solche Agenten mit Partnern, die sie nie gesehen haben – etwa mit regelbasierten Drohnen, anders trainierten Policies oder menschlich gesteuerten Einheiten? Verbessern Verfahren wie Other-Play oder Population-based Training die Zusammenarbeit?

**Grundlagenliteratur:**
- Stone, P., Kaminka, G. A., Kraus, S., & Rosenschein, J. S. (2010). Ad Hoc Autonomous Agent Teams: Collaboration without Pre-Coordination. *AAAI 2010*.
- Hu, H., Lerer, A., Peysakhovich, A., & Foerster, J. (2020). "Other-Play" for Zero-Shot Coordination. *ICML 2020*.
- Mirsky, R., Carlucho, I., Rahman, A., Fosong, E., Macke, W., Sridharan, M., Stone, P., & Albrecht, S. V. (2022). A Survey of Ad Hoc Teamwork Research. *EUMAS 2022*.

#### 1.3 Credit Assignment sichtbar machen (MA)

**Anknüpfung:** Das in Bardtke (2026) entwickelte Dual Decomposition Framework (DDF), übertragen auf das MARS-basierte Drohnenszenario aus Schöttler (2023) oder auf das Waldbrandmodell aus Thema 1.1.

**Fragestellung:** Kann das DDF um kontrafaktische Beiträge einzelner Agenten erweitert werden („Was wäre ohne Agent X passiert?“)? Lässt sich damit erklären, warum ein Team eine bestimmte Arbeitsteilung entwickelt?

**Grundlagenliteratur:**
- Foerster, J., Farquhar, G., Afouras, T., Nardelli, N., & Whiteson, S. (2018). Counterfactual Multi-Agent Policy Gradients. *AAAI 2018*.
- Sunehag, P., et al. (2018). Value-Decomposition Networks for Cooperative Multi-Agent Learning. *AAMAS 2018*.
- Rashid, T., Samvelyan, M., Schroeder de Witt, C., Farquhar, G., Foerster, J., & Whiteson, S. (2018). QMIX: Monotonic Value Function Factorisation for Deep Multi-Agent Reinforcement Learning. *ICML 2018*.

#### 1.4 Emergente Kommunikation: nötig, nützlich, verständlich? (BA/MA)

**Anknüpfung:** Schöttler (2023), Drohnenschwarm zur Lokalisierung von Funksignalen.

**Fragestellung:** Die Drohnen sollen lernen, untereinander Nachrichten auszutauschen. Ab welcher Aufgabenschwierigkeit lohnt sich Kommunikation überhaupt? Lässt sich die gelernte „Sprache“ in menschenlesbare Aussagen übersetzen (z. B. „Signal stärker im Nordosten“)? Optional ist ein Abgleich mit realen Peilsendern möglich, wie sie bei der Amateurfunk-Peilung („Fuchsjagd“) eingesetzt werden.

**Grundlagenliteratur:**
- Foerster, J. N., Assael, Y. M., de Freitas, N., & Whiteson, S. (2016). Learning to Communicate with Deep Multi-Agent Reinforcement Learning. *NeurIPS 2016*.
- Sukhbaatar, S., Szlam, A., & Fergus, R. (2016). Learning Multiagent Communication with Backpropagation. *NeurIPS 2016*.
- Lazaridou, A., & Baroni, M. (2020). Emergent Multi-Agent Communication in the Deep Learning Era. *arXiv:2006.02419*.

#### 1.5 Soziale Dilemmata im Nationalpark (BA/MA)

**Anknüpfung:** Kruger-NP-Modell ([model-knp](https://github.com/MARS-Group-HAW/model-knp/)); Clemen et al. (2021).

**Fragestellung:** In der Trockenzeit konkurrieren Tiere um Wasserstellen – ein sequenzielles Gemeingüterproblem. Unter welchen Bedingungen lernen Agenten eine nachhaltige Nutzung statt einer Übernutzung? Welche Rolle spielen Beobachtbarkeit, Gruppengröße und Reziprozität? Konvergiert MARL zum effizienten oder zum ausbeuterischen Gleichgewicht?

**Grundlagenliteratur:**
- Ostrom, E. (1990). *Governing the Commons: The Evolution of Institutions for Collective Action*. Cambridge University Press.
- Leibo, J. Z., Zambaldi, V., Lanctot, M., Marecki, J., & Graepel, T. (2017). Multi-agent Reinforcement Learning in Sequential Social Dilemmas. *AAMAS 2017*.
- Clemen, T., Lenfers, U. A., Dybulla, J., Ferreira, S. M., Kiker, G. A., Martens, C., & Scheiter, S. (2021). A cross-scale modeling framework for decision support on elephant management in Kruger National Park, South Africa. *Ecological Informatics*, 62, 101266. https://doi.org/10.1016/j.ecoinf.2021.101266

### Säule II – Kooperation in LLM-Agententeams

#### 1.6 Kommunikationstopologie und Fehlerfortpflanzung (MA)

**Fragestellung:** Wie beeinflusst die Kommunikationsstruktur eines LLM-Agententeams – Hierarchie, Blackboard oder Peer-to-Peer –, ob sich Fehler fortpflanzen oder abgefangen werden? Untersucht wird dies an reproduzierbaren, automatisch prüfbaren Aufgaben, z. B. der Erzeugung von MARS-Modellen.

**Grundlagenliteratur:**
- Hong, S., et al. (2024). MetaGPT: Meta Programming for a Multi-Agent Collaborative Framework. *ICLR 2024*.
- Qian, C., et al. (2025). Scaling Large Language Model-based Multi-Agent Collaboration. *ICLR 2025*.
- Cemri, M., Pan, M. Z., et al. (2025). Why Do Multi-Agent LLM Systems Fail? *arXiv:2503.13657*.

#### 1.7 Lernen ohne Gewichtsänderung: Teamgedächtnis (MA)

**Fragestellung:** Werden LLM-Agententeams über wiederholte Aufgaben hinweg besser, wenn sie ein geteiltes Gedächtnis, Reflexion oder „Lessons learned“-Dokumente nutzen? Lernt dabei das *Team* als Ganzes oder nur einzelne Agenten? Die Arbeit überträgt Konzepte des organisationalen Lernens auf agentische Systeme.

**Grundlagenliteratur:**
- Argote, L., & Miron-Spektor, E. (2011). Organizational Learning: From Experience to Knowledge. *Organization Science*, 22(5), 1123–1137.
- Park, J. S., O'Brien, J. C., Cai, C. J., Morris, M. R., Liang, P., & Bernstein, M. S. (2023). Generative Agents: Interactive Simulacra of Human Behavior. *UIST 2023*.
- Shinn, N., Cassano, F., Gopinath, A., Narasimhan, K., & Yao, S. (2023). Reflexion: Language Agents with Verbal Reinforcement Learning. *NeurIPS 2023*.

#### 1.8 Heterogene Teams: Rollen und Modellgrößen (BA/MA)

**Fragestellung:** Ein großes Modell koordiniert, kleine (lokal betriebene) Modelle führen aus. Wie verhalten sich Kosten und Qualität im Vergleich zu homogenen Teams? Entstehen Rollen von selbst, wenn man sie nicht vorgibt? Die Ergebnisse sind auch für den Einsatz lokaler LLMs in Unternehmen und Behörden relevant.

**Grundlagenliteratur:**
- Li, G., Hammoud, H. A. A. K., Itani, H., Khizbullin, D., & Ghanem, B. (2023). CAMEL: Communicative Agents for "Mind" Exploration of Large Language Model Society. *NeurIPS 2023*.
- Chen, L., Zaharia, M., & Zou, J. (2023). FrugalGPT: How to Use Large Language Models While Reducing Cost and Improving Performance. *arXiv:2305.05176*.
- Wang, J., Wang, J., Athiwaratkun, B., Zhang, C., & Zou, J. (2024). Mixture-of-Agents Enhances Large Language Model Capabilities. *arXiv:2406.04692*.

#### 1.9 Kooperieren LLM-Agenten in sozialen Dilemmata – und wie robust? (BA)

**Fragestellung:** Dasselbe Gemeingüterszenario wie in Thema 1.5 wird mit LLM-Agenten gespielt. Wie stark hängt ihr Kooperationsverhalten von Prompt-Formulierung, Modell und Persona ab? Der direkte Vergleich von MARL- und LLM-Agenten im *gleichen* Szenario ist bislang kaum untersucht.

**Grundlagenliteratur:**
- Akata, E., Schulz, L., Coda-Forno, J., Oh, S. J., Bethge, M., & Schulz, E. (2025). Playing repeated games with large language models. *Nature Human Behaviour*. https://doi.org/10.1038/s41562-025-02172-y
- Piatti, G., Jin, Z., Kleiman-Weiner, M., Schölkopf, B., Sachan, M., & Mihalcea, R. (2024). Cooperate or Collapse: Emergence of Sustainable Cooperation in a Society of LLM Agents. *NeurIPS 2024*.
- Leibo, J. Z., et al. (2021). Scalable Evaluation of Multi-Agent Reinforcement Learning with Melting Pot. *ICML 2021*.

### Säule III – Brücken zwischen MARL und LLM-Agenten

#### 1.10 LLM als Reward-Designer für MARL (MA)

**Anknüpfung:** Martensen (2025), LLM-generierte Operatoren in evolutionären Algorithmen. Testumgebung: Drohnenszenario aus Schöttler (2023) oder Waldbrandmodell aus Thema 1.1.

**Fragestellung:** Ein LLM schlägt Belohnungsfunktionen für das Drohnen- bzw. Waldbrandszenario vor und verfeinert sie iterativ anhand der Trainingsergebnisse. Erreicht oder übertrifft das die Qualität einer handentworfenen Belohnungsstruktur?

**Grundlagenliteratur:**
- Kwon, M., Xie, S. M., Bullard, K., & Sadigh, D. (2023). Reward Design with Language Models. *ICLR 2023*.
- Ma, Y. J., et al. (2024). Eureka: Human-Level Reward Design via Coding Large Language Models. *ICLR 2024*.

#### 1.11 Destillation: vom LLM-Team zur schnellen Policy (MA)

**Anknüpfung:** Baran (2024), tensorbasierte Agenten; Fragestellung CTDE und Performance großer MARS-Modelle.

**Fragestellung:** LLM-Agenten zeigen plausibles, aber teures Verhalten. Lässt sich dieses Verhalten per Imitation Learning in leichtgewichtige Policies überführen, die in großen MARS-Simulationen mit Tausenden Agenten laufen? Wie stark weicht das Makroverhalten dabei ab?

**Grundlagenliteratur:**
- Ross, S., Gordon, G., & Bagnell, D. (2011). A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning. *AISTATS 2011*.
- Hinton, G., Vinyals, O., & Dean, J. (2015). Distilling the Knowledge in a Neural Network. *arXiv:1503.02531*.
- Chopra, A., Kumar, S., Giray-Kuru, N., Raskar, R., & Quera-Bofarull, A. (2024). On the limits of agency in agent-based models. *arXiv:2409.10568*.

---

## Schwerpunkt 2: Frei verfügbare Geodaten für Logistik und KRITIS / Resilienz

**Hintergrund:** Mit dem KRITIS-Dachgesetz (in Kraft seit 17.03.2026) werden kritische Anlagen erstmals bundeseinheitlich und sektorübergreifend bestimmt. Methoden zur Risiko- und Resilienzanalyse sind daher gefragt. Hamburg bietet mit der [Urban Data Platform](https://www.urbandataplatform.hamburg/) und dem Geoportal eine sehr gute offene Datenbasis, unter anderem Echtzeit-Sensordaten über die OGC SensorThings API.

**Typische Datenquellen:** OpenStreetMap, Marktstammdatenregister, Zensus-2022-Gitterdaten, DWD Open Data, Copernicus (Sentinel-1/-2, Emergency Management Service), Hochwasserrisikokarten, Urban Data Platform Hamburg, Mobilithek/GTFS, BASt-Zählstellen.

**Hinweis:** Lizenzbedingungen (z. B. ODbL bei OSM) und – bei KRITIS-Themen – Fragen der verantwortungsvollen Veröffentlichung werden in jeder Arbeit von Beginn an berücksichtigt.

### Säule I – Datenfundament

#### 2.1 Taugt OSM als Logistik-Infrastrukturgraph? (BA)

**Fragestellung:** Für die Logistik zählen nicht nur Straßen, sondern Lkw-relevante Attribute: Brückentonnage, Durchfahrtshöhen, Lkw-Verbote, Ladezonen. Wie vollständig und korrekt sind diese in OSM, gemessen an amtlichen Hamburger Daten?

**Grundlagenliteratur:**
- Haklay, M. (2010). How good is volunteered geographical information? A comparative study of OpenStreetMap and Ordnance Survey datasets. *Environment and Planning B*, 37(4), 682–703.
- Senaratne, H., Mobasheri, A., Ali, A. L., Capineri, C., & Haklay, M. (2017). A review of volunteered geographic information quality assessment methods. *International Journal of Geographical Information Science*, 31(1), 139–167.
- Barrington-Leigh, C., & Millard-Ball, A. (2017). The world's user-generated road map is more than 80% complete. *PLOS ONE*, 12(8), e0180698.

#### 2.2 Von offenen Daten zum gekoppelten Infrastrukturmodell (MA)

**Anknüpfung:** SmartOpenHamburg ([model-soh](https://github.com/MARS-Group-HAW/model-soh)) als Zielumgebung.

**Fragestellung:** Lässt sich ein Netz voneinander abhängiger Infrastrukturen automatisch aus offenen Daten ableiten – etwa Umspannwerk → Pumpwerk / Lichtsignalanlage / Kühlhaus → Verkehr und Versorgung? Wie gut lassen sich Abhängigkeiten aus räumlicher Nähe und Anlagentyp inferieren, gegebenenfalls LLM-gestützt? Dieses Thema bildet das Fundament für die Themen 2.7 und 2.11 und kann auf der Pipeline aus Thema 3.1 aufbauen.

**Grundlagenliteratur:**
- Rinaldi, S. M., Peerenboom, J. P., & Kelly, T. K. (2001). Identifying, understanding, and analyzing critical infrastructure interdependencies. *IEEE Control Systems Magazine*, 21(6), 11–25.
- Buldyrev, S. V., Parshani, R., Paul, G., Stanley, H. E., & Havlin, S. (2010). Catastrophic cascade of failures in interdependent networks. *Nature*, 464, 1025–1028.
- Ouyang, M. (2014). Review on modeling and simulation of interdependent critical infrastructure systems. *Reliability Engineering & System Safety*, 121, 43–60.

#### 2.3 Daten-Agent für Resilienzfragen (BA/MA)

**Anknüpfung:** Ströbele (2023), Data Hub; Valentina (2025).

**Fragestellung:** Ein LLM-Agent erhält eine Frage wie „Welche Pflegeheime in Wilhelmsburg liegen im Sturmflut-Risikogebiet?“. Findet er selbstständig passende offene Datensätze über Metadatenkataloge (GDI-DE, Mobilithek, Urban Data Platform), harmonisiert sie und beantwortet die Frage korrekt? Wo scheitert er systematisch? (BA: Implementierung; MA: Fragenkatalog als Benchmark und systematische Evaluation.)

**Grundlagenliteratur:**
- Janowicz, K., Gao, S., McKenzie, G., Hu, Y., & Bhaduri, B. (2020). GeoAI: spatially explicit artificial intelligence techniques for geographic knowledge discovery and beyond. *International Journal of Geographical Information Science*, 34(4), 625–636.
- Li, Z., & Ning, H. (2023). Autonomous GIS: the next-generation AI-powered GIS. *International Journal of Digital Earth*, 16(2), 4668–4686.

### Säule II – Logistik

#### 2.4 Güterverkehr in SmartOpenHamburg: Brückensperrungen und Baustellen (MA, Co-Betreuung Logistik-Initiative möglich)

**Anknüpfung:** SmartOpenHamburg; Lenfers et al. (2021), Integration von Echtzeit-Sensordaten in laufende Simulationen.

**Fragestellung:** SmartOpenHamburg wird um Lkw-Agenten im Hafen- und Hinterlandverkehr erweitert und mit Baustellen- und Sperrungsdaten der Urban Data Platform gespeist. Was sind die systemischen Folgen einzelner Brückensperrungen? Welche Umleitungsstrategien sind robust?

**Grundlagenliteratur:**
- Roorda, M. J., Cavalcante, R., McCabe, S., & Kwan, H. (2010). A conceptual framework for agent-based modelling of logistics services. *Transportation Research Part E*, 46(1), 18–31.
- de Bok, M., & Tavasszy, L. (2018). An empirical agent-based simulation system for urban goods transport (MASS-GT). *Procedia Computer Science*, 130, 126–133.
- Lenfers, U. A., Ahmady-Moghaddam, N., Glake, D., Ocker, F., Osterholz, D., Ströbele, J., & Clemen, T. (2021). Improving Model Predictions—Integration of Real-Time Sensor Data into a Running Simulation of an Agent-Based Model. *Sustainability*, 13(13), 7000. https://doi.org/10.3390/su13137000

#### 2.5 Güterverkehrsströme aus offenen Daten rekonstruieren (MA)

**Fragestellung:** Quelle-Ziel-Matrizen für den Lkw-Verkehr sind nicht öffentlich verfügbar. Lassen sie sich als inverses Problem aus Zählstellendaten (Urban Data Platform, BASt), Logistikstandorten (OSM) und Flächennutzung schätzen? Wie gut stimmen die Schätzungen mit veröffentlichten Erhebungen überein?

**Grundlagenliteratur:**
- Cascetta, E. (1984). Estimation of trip matrices from traffic counts and survey data: A generalized least squares estimator. *Transportation Research Part B*, 18(4–5), 289–299.
- Holguín-Veras, J., & Patil, G. R. (2008). A Multicommodity Integrated Freight Origin–destination Synthesis Model. *Networks and Spatial Economics*, 8, 309–326.

#### 2.6 Fernerkundung als Logistik-Frühindikator (BA)

**Anknüpfung:** Osterholz (2024), Objekterkennung mit Transfer Learning; Arbeiten zu Sentinel-2 in der Gruppe.

**Fragestellung:** Lassen sich Terminalauslastung, Belegung von Lkw-Parkplätzen oder Schiffsaufkommen aus Sentinel-1/-2-Daten und offenen AIS-Dichtekarten zuverlässig genug ablesen, um Störungen frühzeitig zu erkennen?

**Grundlagenliteratur:**
- Drusch, M., et al. (2012). Sentinel-2: ESA's Optical High-Resolution Mission for GMES Operational Services. *Remote Sensing of Environment*, 120, 25–36.
- Kanjir, U., Greidanus, H., & Oštir, K. (2018). Vessel detection and classification from spaceborne optical images: A literature survey. *Remote Sensing of Environment*, 207, 1–26.
- Donaldson, D., & Storeygard, A. (2016). The View from Above: Applications of Satellite Data in Economics. *Journal of Economic Perspectives*, 30(4), 171–198.

### Säule III – KRITIS und Resilienz

#### 2.7 Kaskadeneffekte eines mehrstündigen Stromausfalls (MA)

**Anknüpfung:** SmartOpenHamburg; Thema 2.2.

**Fragestellung:** Im SmartOpenHamburg-Modell fallen Lichtsignalanlagen, Tankstellen, ÖPNV und Kühlketten aus. Wie verhalten sich Bevölkerung, Pflegedienste und Lieferverkehr? Wo entstehen Engpässe, und welche Gegenmaßnahmen wirken am stärksten?

**Grundlagenliteratur:**
- Petermann, T., Bradke, H., Lüllmann, A., Poetzsch, M., & Riehm, U. (2011). *Was bei einem Blackout geschieht. Folgen eines langandauernden und großflächigen Stromausfalls*. Studien des Büros für Technikfolgen-Abschätzung beim Deutschen Bundestag, Bd. 33. edition sigma.
- Eusgeld, I., Nan, C., & Dietz, S. (2011). "System-of-systems" approach for interdependent critical infrastructures. *Reliability Engineering & System Safety*, 96(6), 679–686.
- Ouyang, M. (2014). Review on modeling and simulation of interdependent critical infrastructure systems. *Reliability Engineering & System Safety*, 121, 43–60.

#### 2.8 Sturmflut, Starkregen und Erreichbarkeit (BA)

**Fragestellung:** Hochwasserrisikokarten, digitales Geländemodell und Copernicus-EMS-Szenarien werden kombiniert. Wie verändert sich die Erreichbarkeit von Krankenhäusern, Feuerwachen und Versorgungszentren je Szenario? Welche Stadtteile werden zu „Inseln“?

**Grundlagenliteratur:**
- Coles, D., Yu, D., Wilby, R. L., Green, D., & Herring, Z. (2017). Beyond 'flood hotspots': Modelling emergency service accessibility during flooding in York, UK. *Journal of Hydrology*, 546, 419–436.
- Green, D., Yu, D., Pattison, I., Wilby, R., Bosher, L., Patel, R., Thompson, P., Trowell, K., Draycon, J., Halse, M., Yang, L., & Ryley, T. (2017). City-scale accessibility of emergency responders operating during flood events. *Natural Hazards and Earth System Sciences*, 17, 1–16.

#### 2.9 Was verraten offene Daten über kritische Anlagen? (MA)

**Fragestellung:** Wie genau lassen sich Kritikalität und Abhängigkeiten von Infrastruktur allein aus öffentlich zugänglichen Quellen rekonstruieren (OSM, Register, Satellitenbilder, LLM-gestützte Auswertung)? Welche Datensätze tragen am meisten bei? Die Arbeit liefert eine empirische Grundlage für die Abwägung zwischen Transparenz und Schutz kritischer Infrastrukturen.

**Rahmenbedingungen:** Dual-Use-Thema. Ergebnisse werden nur aggregiert veröffentlicht, es entstehen keine Anlagenlisten, und die Arbeit wird frühzeitig mit den zuständigen Behörden abgestimmt.

**Grundlagenliteratur:**
- Medjroubi, W., Müller, U. P., Scharf, M., Matke, C., & Kleinhans, D. (2017). Open Data in Power Grid Modelling: New Approaches Towards Transparent Grid Models. *Energy Reports*, 3, 14–21.
- Hörsch, J., Hofmann, F., Schlachtberger, D., & Brown, T. (2018). PyPSA-Eur: An open optimisation model of the European transmission system. *Energy Strategy Reviews*, 22, 207–215.
- Arderne, C., Zorn, C., Nicolas, C., & Koks, E. E. (2020). Predictive mapping of the global power system using open data. *Scientific Data*, 7, 19.

#### 2.10 Offene Resilienzindikatoren auf Stadtteilebene (BA)

**Anknüpfung:** Ströbele (2023) und Valentina (2025), Architektur des Data Hub.

**Fragestellung:** Ein Indikatorensystem mit Dashboard kombiniert Versorgungsredundanz, Erreichbarkeit und Vulnerabilität der Bevölkerung (Zensus-Gitter, Altersstruktur) aus offenen Daten. Wie robust sind die resultierenden Stadtteil-Rankings gegenüber der Wahl der Gewichtung?

**Grundlagenliteratur:**
- Cutter, S. L., Boruff, B. J., & Shirley, W. L. (2003). Social Vulnerability to Environmental Hazards. *Social Science Quarterly*, 84(2), 242–261.
- Cutter, S. L., Burton, C. G., & Emrich, C. T. (2010). Disaster Resilience Indicators for Benchmarking Baseline Conditions. *Journal of Homeland Security and Emergency Management*, 7(1).
- OECD & JRC (2008). *Handbook on Constructing Composite Indicators: Methodology and User Guide*. OECD Publishing.

### Säule IV – Brücke zu Schwerpunkt 1

#### 2.11 Kooperative Störungsbewältigung in Lieferketten (MA)

**Anknüpfung:** Themen 2.2 und 1.5/1.9.

**Fragestellung:** Speditionen, Terminals und Lager werden als Agenten modelliert. Lernen sie bei einer Störung (z. B. Brückensperrung, Stromausfall), Kapazitäten zu teilen, statt um sie zu konkurrieren? Verglichen werden MARL-Agenten und verhandelnde LLM-Agenten auf dem Infrastrukturgraphen aus Thema 2.2.

**Grundlagenliteratur:**
- Sheffi, Y. (2005). *The Resilient Enterprise: Overcoming Vulnerability for Competitive Advantage*. MIT Press.
- Ivanov, D., & Dolgui, A. (2020). Viability of intertwined supply networks: extending the supply chain resilience angles towards survivability. *International Journal of Production Research*, 58(10), 2904–2915.
- Jennings, N. R., Faratin, P., Lomuscio, A. R., Parsons, S., Wooldridge, M. J., & Sierra, C. (2001). Automated Negotiation: Prospects, Methods and Challenges. *Group Decision and Negotiation*, 10(2), 199–215.

#### 2.12 LLM-Agententeam als Lagezentrum (MA)

**Anknüpfung:** Thema 1.6 (Kommunikationstopologie), hier mit realem Anwendungsfall.

**Fragestellung:** Ein agentisches Team fusioniert offene Echtzeitdaten (Sensorik der Urban Data Platform, DWD-Warnungen, Copernicus EMS) zu einem Lagebild. Die Evaluation erfolgt retrospektiv an historischen Ereignissen, z. B. vergangenen Sturmfluten. Welche Teamstruktur liefert die zuverlässigsten Lagebilder?

**Grundlagenliteratur:**
- Endsley, M. R. (1995). Toward a Theory of Situation Awareness in Dynamic Systems. *Human Factors*, 37(1), 32–64.
- Wu, Q., et al. (2024). AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation. *COLM 2024*.
- Li, Z., & Ning, H. (2023). Autonomous GIS: the next-generation AI-powered GIS. *International Journal of Digital Earth*, 16(2), 4668–4686.

---

## Schwerpunkt 3: Schneller zum MARS-Modell – automatisierte Modellerstellung aus offenen Daten

**Hintergrund:** Ein neues MARS-Modell aufzusetzen kostet bisher viel Handarbeit. Geodaten müssen beschafft, bereinigt und in die von MARS unterstützten Formate (CSV, GeoJSON, Shapefile, ASC) gebracht werden, und vieles wird für jedes Modell neu gebaut. Ziel dieses Schwerpunkts sind wiederverwendbare Pipelines und Bausteine, mit denen sich SmartOpen-Modelle für beliebige Städte sowie Modelle für Nationalparks und Schutzgebiete in Tagen statt Monaten aufsetzen lassen. Die Generatoren kommen auch den Themen 1.1 (Waldbrandmodell) sowie 2.1 und 2.2 (Infrastrukturgraph) zugute.

### Säule I – Städtische Modelle (SmartOpen)

#### 3.1 SmartOpen-Generator mit city2graph (BA)

**Anknüpfung:** SmartOpenHamburg ([model-soh](https://github.com/MARS-Group-HAW/model-soh)); [city2graph](https://github.com/c2g-dev/city2graph).

**Fragestellung:** city2graph erzeugt aus OpenStreetMap, Overture Maps und GTFS-Fahrplandaten Straßen-, Gebäude- und ÖPNV-Graphen. Lässt sich daraus eine Pipeline bauen, die für eine beliebige Stadt automatisch ein lauffähiges SmartOpen-Grundszenario in MARS-Formaten erzeugt? Getestet wird an Hamburg (Vergleich mit dem handgepflegten Modell), Norderstedt und Ottawa: Wo weichen die generierten Modelle ab, und was muss weiterhin von Hand ergänzt werden?

**Grundlagenliteratur:**
- Sato, Y., Pietrostefani, E., Mahabir, R., & Arribas-Bel, D. (2026). City2Graph. *Computers, Environment and Urban Systems*, 130, 102492. https://doi.org/10.1016/j.compenvurbsys.2026.102492
- Boeing, G. (2017). OSMnx: New methods for acquiring, constructing, analyzing, and visualizing complex street networks. *Computers, Environment and Urban Systems*, 65, 126–139.
- Horni, A., Nagel, K., & Axhausen, K. W. (Eds.) (2016). *The Multi-Agent Transport Simulation MATSim*. Ubiquity Press.

#### 3.2 Synthetische Bevölkerung für beliebige Städte (MA)

**Anknüpfung:** Clemen et al. (2024); Thema 3.1.

**Fragestellung:** Aus offenen Daten (Zensus-2022-Gitter, Mobilitätserhebungen, POIs aus Thema 3.1) wird automatisch eine synthetische Bevölkerung mit Haushalten und Tagesabläufen erzeugt. Wie gut reproduziert sie bekannte Verkehrs- und Aktivitätsmuster? Welche Teile der Methode lassen sich auf Städte außerhalb Deutschlands übertragen, etwa Ottawa?

**Grundlagenliteratur:**
- Chapuis, K., Taillandier, P., & Drogoul, A. (2022). Generation of Synthetic Populations in Social Simulations: A Review of Methods and Practices. *Journal of Artificial Societies and Social Simulation*, 25(2), 6.
- Clemen, T., et al. (2024). *SIMULATION*. https://doi.org/10.1177/00375497241295765

#### 3.3 Graph-neuronale Ersatzmodelle für schnelle Szenarioanalysen (MA)

**Anknüpfung:** Themen 3.1 und 2.4; Baran (2024), tensorbasierte Agenten.

**Fragestellung:** city2graph liefert die Stadtgraphen direkt als PyTorch-Geometric-Objekte. Lässt sich ein Graph Neural Network auf SmartOpen-Simulationsläufen trainieren, sodass es die Folgen von Eingriffen wie Sperrungen oder neuen Linien in Sekunden abschätzt? Wann muss trotzdem die vollständige agentenbasierte Simulation laufen?

**Grundlagenliteratur:**
- Kipf, T. N., & Welling, M. (2017). Semi-Supervised Classification with Graph Convolutional Networks. *ICLR 2017*.
- Jiang, W., & Luo, J. (2022). Graph neural network for traffic forecasting: A survey. *Expert Systems with Applications*, 207, 117921.
- Sato, Y., Pietrostefani, E., Mahabir, R., & Arribas-Bel, D. (2026). City2Graph. *Computers, Environment and Urban Systems*, 130, 102492.

### Säule II – Nationalparks, Schutzgebiete und ökologische Fragestellungen

#### 3.4 Schutzgebiets-Generator (BA/MA)

**Anknüpfung:** Kruger-NP-Modell ([model-knp](https://github.com/MARS-Group-HAW/model-knp/)), Elk-Island-NP-Modell ([model-einp](https://github.com/MARS-Group-HAW/model-einp)).

**Fragestellung:** Ausgehend von einer Schutzgebietsgrenze aus der World Database on Protected Areas stellt eine Pipeline automatisch die Umweltlayer zusammen: Höhenmodell, Landbedeckung, Oberflächengewässer, Klima und Artnachweise (z. B. GBIF). Die Ergebnisse liegen als MARS-Raster- und Vektorlayer vor. Gelingt es, die Layer der bestehenden Modelle für Kruger und Elk Island zu reproduzieren? Wie schnell lässt sich damit ein neues Gebiet aufsetzen, etwa ein deutscher Nationalpark? (BA: Pipeline; MA: zusätzlich zeitlich aufgelöste Layer und Unsicherheitsanalyse.)

**Grundlagenliteratur:**
- UNEP-WCMC & IUCN. *Protected Planet: The World Database on Protected Areas (WDPA)*. https://www.protectedplanet.net
- Gorelick, N., Hancher, M., Dixon, M., Ilyushchenko, S., Thau, D., & Moore, R. (2017). Google Earth Engine: Planetary-scale geospatial analysis for everyone. *Remote Sensing of Environment*, 202, 18–27.
- Pekel, J.-F., Cottam, A., Gorelick, N., & Belward, A. S. (2016). High-resolution mapping of global surface water and its long-term changes. *Nature*, 540, 418–422.

#### 3.5 Wiederverwendbare Bausteine für Ökosystemmodelle (MA)

**Anknüpfung:** Kruger- und Elk-Island-Modelle; Lenfers et al. (2022), Savannen-Baummodell; Duong (2023), Wiedehopf-Modell.

**Fragestellung:** Die bestehenden ökologischen MARS-Modelle enthalten ähnliche Komponenten: Herbivoren, Vegetationswachstum, Wasserverfügbarkeit, saisonale Dynamik. Lassen sie sich zu einer parametrisierbaren Bibliothek verallgemeinern? Geprüft wird das, indem mit der Bibliothek und dem Generator aus Thema 3.4 ein drittes Gebiet modelliert und mit Pattern-oriented Modelling validiert wird. Wie viel Code ist tatsächlich wiederverwendbar?

**Grundlagenliteratur:**
- Grimm, V., Revilla, E., Berger, U., Jeltsch, F., Mooij, W. M., Railsback, S. F., Thulke, H.-H., Weiner, J., Wiegand, T., & DeAngelis, D. L. (2005). Pattern-oriented modeling of agent-based complex systems: lessons from ecology. *Science*, 310(5750), 987–991.
- Grimm, V., & Railsback, S. F. (2005). *Individual-based Modeling and Ecology*. Princeton University Press.
- Lenfers, U. A., Ahmady-Moghaddam, N., Glake, D., Ocker, F., Weyl, J., & Clemen, T. (2022). Modeling the Future Tree Distribution in a South African Savanna Ecosystem: An Agent-Based Model Approach. *Land*, 11(5), 619. https://doi.org/10.3390/land11050619

#### 3.6 Tierbewegungsdaten zur automatischen Kalibrierung (BA/MA)

**Anknüpfung:** Themen 3.4 und 3.5; Birker (2025) und Siebold (2024), Aufbereitung von Citizen-Science-Daten.

**Fragestellung:** Offene Telemetriedaten (z. B. Movebank) und Beobachtungsdaten werden genutzt, um die Bewegungsregeln von Tieragenten automatisch zu kalibrieren. Welche Bewegungsmuster (Streifgebietsgröße, Tagesstrecken, Distanz zum Wasser) eignen sich als Kalibrierungsziele? Wie gut übertragen sich kalibrierte Parameter zwischen Gebieten?

**Grundlagenliteratur:**
- Kays, R., Davidson, S. C., Berger, M., Bohrer, G., Fiedler, W., Flack, A., Hirt, J., Hahn, C., Gauggel, D., Russell, B., Kölzsch, A., Lohr, A., Partecke, J., Quetting, M., Safi, K., Scharf, A., Schneider, G., Lang, I., Schaeuffelhut, F., Landwehr, M., Storhas, M., van Schalkwyk, L., Vinciguerra, C., Weinzierl, R., & Wikelski, M. (2022). The Movebank system for studying global animal movement and demography. *Methods in Ecology and Evolution*, 13(2), 419–431.
- Grimm, V., et al. (2005). Pattern-oriented modeling of agent-based complex systems: lessons from ecology. *Science*, 310(5750), 987–991.

### Säule III – Querschnitt

#### 3.7 Vom Steckbrief zum Modell: LLM-gestützter Modellassistent (MA)

**Anknüpfung:** Themen 3.1 und 3.4 als Datenpipelines; Thema 1.6 (agentische Teams).

**Fragestellung:** Eine Nutzerin beschreibt in natürlicher Sprache Fragestellung und Gebiet, etwa „Wie verteilen sich Rothirsche im Harz bei Trockenheit?“. Ein agentisches System erstellt daraus einen ODD-Entwurf, ruft die passenden Generatoren auf und erzeugt ein lauffähiges MARS-Grundmodell. Die Dokumentation, Tutorials und Beispielmodelle von MARS dienen dabei als Wissensbasis (RAG). Wie viele Iterationen mit Fachleuten braucht es bis zu einem fachlich akzeptablen Modell?

**Grundlagenliteratur:**
- Grimm, V., Railsback, S. F., Vincenot, C. E., Berger, U., Gallagher, C., DeAngelis, D. L., et al. (2020). The ODD Protocol for Describing Agent-Based and Other Simulation Models: A Second Update to Improve Clarity, Replication, and Structural Realism. *Journal of Artificial Societies and Social Simulation*, 23(2), 7.
- Lewis, P., et al. (2020). Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks. *NeurIPS 2020*.
- Hong, S., et al. (2024). MetaGPT: Meta Programming for a Multi-Agent Collaborative Framework. *ICLR 2024*.

---

## Themenketten (BA → MA → Publikation)

| Kette | Themen | Idee |
|---|---|---|
| A – Kooperation unter Knappheit | 1.5 (BA) + 1.9 (BA) | Gleiches Szenario, MARL vs. LLM-Agenten; gemeinsames Vergleichspaper |
| B – Drohnenschwarm | 1.2, 1.3, 1.4, 1.10 | Mehrere Arbeiten auf dem MARS-basierten Drohnenszenario, parallel durchführbar |
| B' – Offenes Waldbrandmodell | 1.1 (BA) → 1.2 / 1.3 / 1.10 (MA) | Frei nutzbares Waldbrandmodell als eigene Basis für spätere MARL-Arbeiten |
| C – Agentische Teams | 1.6 + 1.7 (MA) | Gemeinsame Testumgebung, gemeinsamer Benchmark |
| D – Infrastrukturgraph | 2.1 (BA) → 2.2 (MA) → 2.7 / 2.11 (MA) | Gemeinsame Datenbasis, Graph als zitierfähiger Datensatz |
| E – Risiko und Erreichbarkeit | 2.8 (BA) + 2.10 (BA) → 2.12 (MA) | Geringe Einstiegshürde, hohe Sichtbarkeit bei Behörden |
| F – Logistik | 2.5 (MA) → 2.4 (MA) | Geschätzte Verkehrsströme fließen in SmartOpenHamburg ein |
| G – SmartOpen für jede Stadt | 3.1 (BA) → 3.2 / 3.3 (MA) | Generator als Basis für SmartOpenOttawa und weitere Städte; auch nutzbar für 2.1/2.2 |
| H – Schutzgebiete | 3.4 (BA) → 3.5 / 3.6 (MA) | Generator plus Baustein-Bibliothek; Validierung an einem dritten Gebiet |
| I – Modellassistent | 3.1 + 3.4 → 3.7 (MA) | Generatoren als Werkzeuge eines agentischen Modellassistenten |

Bei Interesse an einem oder mehreren Themen: Bitte direkt Kontakt aufnehmen unter [thomas.clemen@haw-hamburg.de](mailto:thomas.clemen@haw-hamburg.de). Eigene Themenvorschläge in diesen Feldern sind ebenfalls willkommen.

---
---

# English

## Focus Topics for Bachelor's and Master's Theses

The MARS Group currently focuses on three areas for theses:

1. **Cooperation and learning in multi-agent systems and agentic teams**
2. **Using openly available geodata for logistics and critical infrastructure (KRITIS) / resilience**
3. **Faster to a MARS model: automated model setup from open data**

All topics build on previous work of the group – the MARS Framework, existing simulation models (e.g., SmartOpenHamburg, Kruger NP, Elk Island NP), and completed theses listed under [Theses](https://www.mars-group.org/student-work/theses). Many topics are designed to potentially lead to a scientific publication. Several topics can be combined into **topic chains**, in which a bachelor's thesis lays the groundwork for a subsequent master's thesis.

The references given for each topic are meant as a starting point, not as a complete literature review.

Thanks to our cooperation with the [Logistics Initiative Hamburg](https://www.hamburg-logistik.net/) and [Carleton University, Ottawa](https://carleton.ca/), co-supervision is possible for selected topics.

**Legend:** BA = Bachelor's thesis, MA = Master's thesis

---

## Focus 1: Cooperation and Learning in Multi-Agent Systems / Agentic Teams

### Pillar I – Learning to Cooperate (Multi-Agent Reinforcement Learning)

#### 1.1 An Open Wildfire Model in MARS (BA)

**Builds on:** Bardtke (2026). The simulation environment used there is hosted at DLR and is not freely available.

**Research question:** Development of a freely usable agent-based wildfire model in the MARS Framework: fire spread (cellular automaton or Rothermel-based), wind, topography and vegetation from open data (e.g., Copernicus DEM, land cover), and firefighting agents (aircraft, drones) with an interface for reinforcement learning. How well does the model reproduce established spread models or documented fire events? The model serves as an open foundation for the MARL topics 1.2, 1.3, and 1.10. The generator from topic 3.4 can be used for the environmental layers.

**Key references:**
- Rothermel, R. C. (1972). *A Mathematical Model for Predicting Fire Spread in Wildland Fuels*. USDA Forest Service Research Paper INT-115.
- Finney, M. A. (1998). *FARSITE: Fire Area Simulator—Model Development and Evaluation*. USDA Forest Service Research Paper RMRS-RP-4.
- Alexandridis, A., Vakalis, D., Siettos, C. I., & Bafas, G. V. (2008). A cellular automata model for forest fire spread prediction: The case of the wildfire that swept through Spetses Island in 1990. *Applied Mathematics and Computation*, 204(1), 191–201.

#### 1.2 Zero-Shot Coordination with Unknown Partners (MA)

**Builds on:** Schöttler (2023), MARS-based drone swarm; methodologically Bardtke (2026). Alternatively on the open wildfire model from topic 1.1.

**Research question:** Agents trained in self-play often develop "insider conventions" that only work among themselves. How well do such agents cooperate with partners they have never encountered – rule-based drones, differently trained policies, or human-controlled units? Do methods such as Other-Play or population-based training improve cooperation?

**Key references:**
- Stone, P., Kaminka, G. A., Kraus, S., & Rosenschein, J. S. (2010). Ad Hoc Autonomous Agent Teams: Collaboration without Pre-Coordination. *AAAI 2010*.
- Hu, H., Lerer, A., Peysakhovich, A., & Foerster, J. (2020). "Other-Play" for Zero-Shot Coordination. *ICML 2020*.
- Mirsky, R., Carlucho, I., Rahman, A., Fosong, E., Macke, W., Sridharan, M., Stone, P., & Albrecht, S. V. (2022). A Survey of Ad Hoc Teamwork Research. *EUMAS 2022*.

#### 1.3 Making Credit Assignment Visible (MA)

**Builds on:** The Dual Decomposition Framework (DDF) developed in Bardtke (2026), transferred to the MARS-based drone scenario of Schöttler (2023) or to the wildfire model from topic 1.1.

**Research question:** Can the DDF be extended by counterfactual contributions of individual agents ("What would have happened without agent X?")? Does this explain why a team develops a particular division of labor?

**Key references:**
- Foerster, J., Farquhar, G., Afouras, T., Nardelli, N., & Whiteson, S. (2018). Counterfactual Multi-Agent Policy Gradients. *AAAI 2018*.
- Sunehag, P., et al. (2018). Value-Decomposition Networks for Cooperative Multi-Agent Learning. *AAMAS 2018*.
- Rashid, T., Samvelyan, M., Schroeder de Witt, C., Farquhar, G., Foerster, J., & Whiteson, S. (2018). QMIX: Monotonic Value Function Factorisation for Deep Multi-Agent Reinforcement Learning. *ICML 2018*.

#### 1.4 Emergent Communication: Necessary, Useful, Understandable? (BA/MA)

**Builds on:** Schöttler (2023), drone swarm for localizing radio signals.

**Research question:** The drones learn to exchange messages. From which level of task difficulty does communication pay off at all? Can the learned "language" be translated into human-readable statements (e.g., "signal stronger to the northeast")? Optionally, results can be validated against real direction-finding transmitters as used in amateur radio direction finding ("fox hunting").

**Key references:**
- Foerster, J. N., Assael, Y. M., de Freitas, N., & Whiteson, S. (2016). Learning to Communicate with Deep Multi-Agent Reinforcement Learning. *NeurIPS 2016*.
- Sukhbaatar, S., Szlam, A., & Fergus, R. (2016). Learning Multiagent Communication with Backpropagation. *NeurIPS 2016*.
- Lazaridou, A., & Baroni, M. (2020). Emergent Multi-Agent Communication in the Deep Learning Era. *arXiv:2006.02419*.

#### 1.5 Social Dilemmas in a National Park (BA/MA)

**Builds on:** Kruger NP model ([model-knp](https://github.com/MARS-Group-HAW/model-knp/)); Clemen et al. (2021).

**Research question:** During the dry season, animals compete for waterholes – a sequential common-pool resource problem. Under which conditions do agents learn sustainable use rather than overexploitation? What roles do observability, group size, and reciprocity play? Does MARL converge to the efficient or to the exploitative equilibrium?

**Key references:**
- Ostrom, E. (1990). *Governing the Commons: The Evolution of Institutions for Collective Action*. Cambridge University Press.
- Leibo, J. Z., Zambaldi, V., Lanctot, M., Marecki, J., & Graepel, T. (2017). Multi-agent Reinforcement Learning in Sequential Social Dilemmas. *AAMAS 2017*.
- Clemen, T., Lenfers, U. A., Dybulla, J., Ferreira, S. M., Kiker, G. A., Martens, C., & Scheiter, S. (2021). A cross-scale modeling framework for decision support on elephant management in Kruger National Park, South Africa. *Ecological Informatics*, 62, 101266. https://doi.org/10.1016/j.ecoinf.2021.101266

### Pillar II – Cooperation in LLM Agent Teams

#### 1.6 Communication Topology and Error Propagation (MA)

**Research question:** How does the communication structure of an LLM agent team – hierarchy, blackboard, or peer-to-peer – affect whether errors propagate or get caught? This is studied on reproducible, automatically verifiable tasks, e.g., generating MARS models.

**Key references:**
- Hong, S., et al. (2024). MetaGPT: Meta Programming for a Multi-Agent Collaborative Framework. *ICLR 2024*.
- Qian, C., et al. (2025). Scaling Large Language Model-based Multi-Agent Collaboration. *ICLR 2025*.
- Cemri, M., Pan, M. Z., et al. (2025). Why Do Multi-Agent LLM Systems Fail? *arXiv:2503.13657*.

#### 1.7 Learning Without Weight Updates: Team Memory (MA)

**Research question:** Do LLM agent teams improve over repeated tasks when using shared memory, reflection, or "lessons learned" documents? Does the *team* learn as a whole, or only individual agents? The thesis transfers concepts of organizational learning to agentic systems.

**Key references:**
- Argote, L., & Miron-Spektor, E. (2011). Organizational Learning: From Experience to Knowledge. *Organization Science*, 22(5), 1123–1137.
- Park, J. S., O'Brien, J. C., Cai, C. J., Morris, M. R., Liang, P., & Bernstein, M. S. (2023). Generative Agents: Interactive Simulacra of Human Behavior. *UIST 2023*.
- Shinn, N., Cassano, F., Gopinath, A., Narasimhan, K., & Yao, S. (2023). Reflexion: Language Agents with Verbal Reinforcement Learning. *NeurIPS 2023*.

#### 1.8 Heterogeneous Teams: Roles and Model Sizes (BA/MA)

**Research question:** A large model coordinates, small (locally hosted) models execute. How do cost and quality compare to homogeneous teams? Do roles emerge on their own if they are not predefined? The results are also relevant for deploying local LLMs in companies and public authorities.

**Key references:**
- Li, G., Hammoud, H. A. A. K., Itani, H., Khizbullin, D., & Ghanem, B. (2023). CAMEL: Communicative Agents for "Mind" Exploration of Large Language Model Society. *NeurIPS 2023*.
- Chen, L., Zaharia, M., & Zou, J. (2023). FrugalGPT: How to Use Large Language Models While Reducing Cost and Improving Performance. *arXiv:2305.05176*.
- Wang, J., Wang, J., Athiwaratkun, B., Zhang, C., & Zou, J. (2024). Mixture-of-Agents Enhances Large Language Model Capabilities. *arXiv:2406.04692*.

#### 1.9 Do LLM Agents Cooperate in Social Dilemmas – and How Robustly? (BA)

**Research question:** The same common-pool scenario as in topic 1.5 is played by LLM agents. How strongly does their cooperative behavior depend on prompt wording, model, and persona? A direct comparison of MARL and LLM agents in the *same* scenario has hardly been studied so far.

**Key references:**
- Akata, E., Schulz, L., Coda-Forno, J., Oh, S. J., Bethge, M., & Schulz, E. (2025). Playing repeated games with large language models. *Nature Human Behaviour*. https://doi.org/10.1038/s41562-025-02172-y
- Piatti, G., Jin, Z., Kleiman-Weiner, M., Schölkopf, B., Sachan, M., & Mihalcea, R. (2024). Cooperate or Collapse: Emergence of Sustainable Cooperation in a Society of LLM Agents. *NeurIPS 2024*.
- Leibo, J. Z., et al. (2021). Scalable Evaluation of Multi-Agent Reinforcement Learning with Melting Pot. *ICML 2021*.

### Pillar III – Bridging MARL and LLM Agents

#### 1.10 LLMs as Reward Designers for MARL (MA)

**Builds on:** Martensen (2025), LLM-generated operators in evolutionary algorithms. Test environment: drone scenario of Schöttler (2023) or wildfire model from topic 1.1.

**Research question:** An LLM proposes reward functions for the drone or wildfire scenario and refines them iteratively based on training results. Does this match or exceed the quality of a hand-designed reward structure?

**Key references:**
- Kwon, M., Xie, S. M., Bullard, K., & Sadigh, D. (2023). Reward Design with Language Models. *ICLR 2023*.
- Ma, Y. J., et al. (2024). Eureka: Human-Level Reward Design via Coding Large Language Models. *ICLR 2024*.

#### 1.11 Distillation: From LLM Team to Fast Policy (MA)

**Builds on:** Baran (2024), tensor-based agents; the question of CTDE and performance of large MARS models.

**Research question:** LLM agents produce plausible but expensive behavior. Can this behavior be transferred via imitation learning into lightweight policies that run in large MARS simulations with thousands of agents? How much does macro-level behavior deviate?

**Key references:**
- Ross, S., Gordon, G., & Bagnell, D. (2011). A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning. *AISTATS 2011*.
- Hinton, G., Vinyals, O., & Dean, J. (2015). Distilling the Knowledge in a Neural Network. *arXiv:1503.02531*.
- Chopra, A., Kumar, S., Giray-Kuru, N., Raskar, R., & Quera-Bofarull, A. (2024). On the limits of agency in agent-based models. *arXiv:2409.10568*.

---

## Focus 2: Open Geodata for Logistics and Critical Infrastructure / Resilience

**Background:** With the German KRITIS umbrella act (KRITIS-Dachgesetz, in force since 17 March 2026), critical facilities are for the first time defined uniformly across Germany and across sectors. Methods for risk and resilience analysis are therefore in demand. With its [Urban Data Platform](https://www.urbandataplatform.hamburg/) and geoportal, Hamburg offers an excellent open data basis, including real-time sensor data via the OGC SensorThings API.

**Typical data sources:** OpenStreetMap, the German core energy market data register (Marktstammdatenregister), Census 2022 grid data, DWD Open Data, Copernicus (Sentinel-1/-2, Emergency Management Service), flood risk maps, Urban Data Platform Hamburg, Mobilithek/GTFS, BASt traffic counting stations.

**Note:** License terms (e.g., ODbL for OSM) and – for KRITIS topics – responsible publication are taken into account from the start of each thesis.

### Pillar I – Data Foundation

#### 2.1 Is OSM Fit as a Logistics Infrastructure Graph? (BA)

**Research question:** Logistics depends not only on roads but on truck-relevant attributes: bridge weight limits, clearance heights, truck bans, loading zones. How complete and accurate are these attributes in OSM compared with official Hamburg data?

**Key references:**
- Haklay, M. (2010). How good is volunteered geographical information? A comparative study of OpenStreetMap and Ordnance Survey datasets. *Environment and Planning B*, 37(4), 682–703.
- Senaratne, H., Mobasheri, A., Ali, A. L., Capineri, C., & Haklay, M. (2017). A review of volunteered geographic information quality assessment methods. *International Journal of Geographical Information Science*, 31(1), 139–167.
- Barrington-Leigh, C., & Millard-Ball, A. (2017). The world's user-generated road map is more than 80% complete. *PLOS ONE*, 12(8), e0180698.

#### 2.2 From Open Data to a Coupled Infrastructure Model (MA)

**Builds on:** SmartOpenHamburg ([model-soh](https://github.com/MARS-Group-HAW/model-soh)) as target environment.

**Research question:** Can a network of interdependent infrastructures be derived automatically from open data – e.g., substation → pumping station / traffic lights / cold storage → traffic and supply? How well can dependencies be inferred from spatial proximity and facility type, possibly with LLM support? This topic provides the foundation for topics 2.7 and 2.11 and can build on the pipeline from topic 3.1.

**Key references:**
- Rinaldi, S. M., Peerenboom, J. P., & Kelly, T. K. (2001). Identifying, understanding, and analyzing critical infrastructure interdependencies. *IEEE Control Systems Magazine*, 21(6), 11–25.
- Buldyrev, S. V., Parshani, R., Paul, G., Stanley, H. E., & Havlin, S. (2010). Catastrophic cascade of failures in interdependent networks. *Nature*, 464, 1025–1028.
- Ouyang, M. (2014). Review on modeling and simulation of interdependent critical infrastructure systems. *Reliability Engineering & System Safety*, 121, 43–60.

#### 2.3 A Data Agent for Resilience Questions (BA/MA)

**Builds on:** Ströbele (2023), Data Hub; Valentina (2025).

**Research question:** An LLM agent receives a question such as "Which care homes in Wilhelmsburg are located in the storm-surge risk zone?". Can it independently find suitable open datasets via metadata catalogs (GDI-DE, Mobilithek, Urban Data Platform), harmonize them, and answer correctly? Where does it fail systematically? (BA: implementation; MA: question catalog as a benchmark and systematic evaluation.)

**Key references:**
- Janowicz, K., Gao, S., McKenzie, G., Hu, Y., & Bhaduri, B. (2020). GeoAI: spatially explicit artificial intelligence techniques for geographic knowledge discovery and beyond. *International Journal of Geographical Information Science*, 34(4), 625–636.
- Li, Z., & Ning, H. (2023). Autonomous GIS: the next-generation AI-powered GIS. *International Journal of Digital Earth*, 16(2), 4668–4686.

### Pillar II – Logistics

#### 2.4 Freight Traffic in SmartOpenHamburg: Bridge Closures and Roadworks (MA, co-supervision by Logistics Initiative possible)

**Builds on:** SmartOpenHamburg; Lenfers et al. (2021), integrating real-time sensor data into running simulations.

**Research question:** SmartOpenHamburg is extended with truck agents in port and hinterland traffic and fed with roadwork and closure data from the Urban Data Platform. What are the systemic effects of individual bridge closures? Which rerouting strategies are robust?

**Key references:**
- Roorda, M. J., Cavalcante, R., McCabe, S., & Kwan, H. (2010). A conceptual framework for agent-based modelling of logistics services. *Transportation Research Part E*, 46(1), 18–31.
- de Bok, M., & Tavasszy, L. (2018). An empirical agent-based simulation system for urban goods transport (MASS-GT). *Procedia Computer Science*, 130, 126–133.
- Lenfers, U. A., Ahmady-Moghaddam, N., Glake, D., Ocker, F., Osterholz, D., Ströbele, J., & Clemen, T. (2021). Improving Model Predictions—Integration of Real-Time Sensor Data into a Running Simulation of an Agent-Based Model. *Sustainability*, 13(13), 7000. https://doi.org/10.3390/su13137000

#### 2.5 Reconstructing Freight Flows from Open Data (MA)

**Research question:** Origin-destination matrices for truck traffic are not publicly available. Can they be estimated as an inverse problem from traffic counts (Urban Data Platform, BASt), logistics locations (OSM), and land use? How well do the estimates match published surveys?

**Key references:**
- Cascetta, E. (1984). Estimation of trip matrices from traffic counts and survey data: A generalized least squares estimator. *Transportation Research Part B*, 18(4–5), 289–299.
- Holguín-Veras, J., & Patil, G. R. (2008). A Multicommodity Integrated Freight Origin–destination Synthesis Model. *Networks and Spatial Economics*, 8, 309–326.

#### 2.6 Remote Sensing as an Early Indicator for Logistics (BA)

**Builds on:** Osterholz (2024), object detection with transfer learning; Sentinel-2 work in the group.

**Research question:** Can terminal utilization, truck parking occupancy, or vessel traffic be read reliably enough from Sentinel-1/-2 data and open AIS density maps to detect disruptions early?

**Key references:**
- Drusch, M., et al. (2012). Sentinel-2: ESA's Optical High-Resolution Mission for GMES Operational Services. *Remote Sensing of Environment*, 120, 25–36.
- Kanjir, U., Greidanus, H., & Oštir, K. (2018). Vessel detection and classification from spaceborne optical images: A literature survey. *Remote Sensing of Environment*, 207, 1–26.
- Donaldson, D., & Storeygard, A. (2016). The View from Above: Applications of Satellite Data in Economics. *Journal of Economic Perspectives*, 30(4), 171–198.

### Pillar III – Critical Infrastructure and Resilience

#### 2.7 Cascading Effects of a Multi-Hour Power Outage (MA)

**Builds on:** SmartOpenHamburg; topic 2.2.

**Research question:** In the SmartOpenHamburg model, traffic lights, petrol stations, public transport, and cold chains fail. How do residents, care services, and delivery traffic behave? Where do bottlenecks arise, and which countermeasures are most effective?

**Key references:**
- Petermann, T., Bradke, H., Lüllmann, A., Poetzsch, M., & Riehm, U. (2011). *Was bei einem Blackout geschieht. Folgen eines langandauernden und großflächigen Stromausfalls* [What happens in a blackout]. Studies of the Office of Technology Assessment at the German Bundestag, Vol. 33. edition sigma.
- Eusgeld, I., Nan, C., & Dietz, S. (2011). "System-of-systems" approach for interdependent critical infrastructures. *Reliability Engineering & System Safety*, 96(6), 679–686.
- Ouyang, M. (2014). Review on modeling and simulation of interdependent critical infrastructure systems. *Reliability Engineering & System Safety*, 121, 43–60.

#### 2.8 Storm Surge, Heavy Rain, and Accessibility (BA)

**Research question:** Flood risk maps, a digital terrain model, and Copernicus EMS scenarios are combined. How does the accessibility of hospitals, fire stations, and supply centers change per scenario? Which districts become "islands"?

**Key references:**
- Coles, D., Yu, D., Wilby, R. L., Green, D., & Herring, Z. (2017). Beyond 'flood hotspots': Modelling emergency service accessibility during flooding in York, UK. *Journal of Hydrology*, 546, 419–436.
- Green, D., Yu, D., Pattison, I., Wilby, R., Bosher, L., Patel, R., Thompson, P., Trowell, K., Draycon, J., Halse, M., Yang, L., & Ryley, T. (2017). City-scale accessibility of emergency responders operating during flood events. *Natural Hazards and Earth System Sciences*, 17, 1–16.

#### 2.9 What Does Open Data Reveal About Critical Facilities? (MA)

**Research question:** How accurately can criticality and dependencies of infrastructure be reconstructed solely from publicly available sources (OSM, registers, satellite imagery, LLM-assisted analysis)? Which datasets contribute most? The thesis provides an empirical basis for weighing transparency against the protection of critical infrastructure.

**Framework conditions:** Dual-use topic. Results are published only in aggregated form, no facility lists are produced, and the work is coordinated with the responsible authorities at an early stage.

**Key references:**
- Medjroubi, W., Müller, U. P., Scharf, M., Matke, C., & Kleinhans, D. (2017). Open Data in Power Grid Modelling: New Approaches Towards Transparent Grid Models. *Energy Reports*, 3, 14–21.
- Hörsch, J., Hofmann, F., Schlachtberger, D., & Brown, T. (2018). PyPSA-Eur: An open optimisation model of the European transmission system. *Energy Strategy Reviews*, 22, 207–215.
- Arderne, C., Zorn, C., Nicolas, C., & Koks, E. E. (2020). Predictive mapping of the global power system using open data. *Scientific Data*, 7, 19.

#### 2.10 Open Resilience Indicators at District Level (BA)

**Builds on:** Ströbele (2023) and Valentina (2025), Data Hub architecture.

**Research question:** An indicator system with a dashboard combines supply redundancy, accessibility, and population vulnerability (census grid, age structure) from open data. How robust are the resulting district rankings to the choice of weighting?

**Key references:**
- Cutter, S. L., Boruff, B. J., & Shirley, W. L. (2003). Social Vulnerability to Environmental Hazards. *Social Science Quarterly*, 84(2), 242–261.
- Cutter, S. L., Burton, C. G., & Emrich, C. T. (2010). Disaster Resilience Indicators for Benchmarking Baseline Conditions. *Journal of Homeland Security and Emergency Management*, 7(1).
- OECD & JRC (2008). *Handbook on Constructing Composite Indicators: Methodology and User Guide*. OECD Publishing.

### Pillar IV – Bridge to Focus 1

#### 2.11 Cooperative Disruption Management in Supply Chains (MA)

**Builds on:** Topics 2.2 and 1.5/1.9.

**Research question:** Carriers, terminals, and warehouses are modeled as agents. During a disruption (e.g., bridge closure, power outage), do they learn to share capacity rather than compete for it? MARL agents and negotiating LLM agents are compared on the infrastructure graph from topic 2.2.

**Key references:**
- Sheffi, Y. (2005). *The Resilient Enterprise: Overcoming Vulnerability for Competitive Advantage*. MIT Press.
- Ivanov, D., & Dolgui, A. (2020). Viability of intertwined supply networks: extending the supply chain resilience angles towards survivability. *International Journal of Production Research*, 58(10), 2904–2915.
- Jennings, N. R., Faratin, P., Lomuscio, A. R., Parsons, S., Wooldridge, M. J., & Sierra, C. (2001). Automated Negotiation: Prospects, Methods and Challenges. *Group Decision and Negotiation*, 10(2), 199–215.

#### 2.12 An LLM Agent Team as a Situation Center (MA)

**Builds on:** Topic 1.6 (communication topology), here with a real-world application.

**Research question:** An agentic team fuses open real-time data (Urban Data Platform sensors, DWD warnings, Copernicus EMS) into a situational picture. Evaluation is retrospective, using historical events such as past storm surges. Which team structure yields the most reliable situational pictures?

**Key references:**
- Endsley, M. R. (1995). Toward a Theory of Situation Awareness in Dynamic Systems. *Human Factors*, 37(1), 32–64.
- Wu, Q., et al. (2024). AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation. *COLM 2024*.
- Li, Z., & Ning, H. (2023). Autonomous GIS: the next-generation AI-powered GIS. *International Journal of Digital Earth*, 16(2), 4668–4686.

---

## Focus 3: Faster to a MARS Model – Automated Model Setup from Open Data

**Background:** Setting up a new MARS model still requires a lot of manual work. Geodata must be obtained, cleaned and converted into the formats MARS supports (CSV, GeoJSON, Shapefile, ASC), and much is rebuilt for every model. This focus aims at reusable pipelines and building blocks that make it possible to set up SmartOpen models for any city, as well as models for national parks and protected areas, in days rather than months. The generators also benefit topics 1.1 (wildfire model) and 2.1/2.2 (infrastructure graph).

### Pillar I – Urban Models (SmartOpen)

#### 3.1 A SmartOpen Generator Based on city2graph (BA)

**Builds on:** SmartOpenHamburg ([model-soh](https://github.com/MARS-Group-HAW/model-soh)); [city2graph](https://github.com/c2g-dev/city2graph).

**Research question:** city2graph builds street, building and public-transport graphs from OpenStreetMap, Overture Maps and GTFS timetable data. Can this be turned into a pipeline that automatically produces a runnable SmartOpen base scenario in MARS formats for any city? Tests use Hamburg (compared with the hand-maintained model), Norderstedt and Ottawa: where do the generated models deviate, and what still needs to be added by hand?

**Key references:**
- Sato, Y., Pietrostefani, E., Mahabir, R., & Arribas-Bel, D. (2026). City2Graph. *Computers, Environment and Urban Systems*, 130, 102492. https://doi.org/10.1016/j.compenvurbsys.2026.102492
- Boeing, G. (2017). OSMnx: New methods for acquiring, constructing, analyzing, and visualizing complex street networks. *Computers, Environment and Urban Systems*, 65, 126–139.
- Horni, A., Nagel, K., & Axhausen, K. W. (Eds.) (2016). *The Multi-Agent Transport Simulation MATSim*. Ubiquity Press.

#### 3.2 Synthetic Populations for Any City (MA)

**Builds on:** Clemen et al. (2024); topic 3.1.

**Research question:** A synthetic population with households and daily activity schedules is generated automatically from open data (Census 2022 grid, mobility surveys, POIs from topic 3.1). How well does it reproduce known traffic and activity patterns? Which parts of the method transfer to cities outside Germany, such as Ottawa?

**Key references:**
- Chapuis, K., Taillandier, P., & Drogoul, A. (2022). Generation of Synthetic Populations in Social Simulations: A Review of Methods and Practices. *Journal of Artificial Societies and Social Simulation*, 25(2), 6.
- Clemen, T., et al. (2024). *SIMULATION*. https://doi.org/10.1177/00375497241295765

#### 3.3 Graph Neural Surrogate Models for Fast Scenario Analysis (MA)

**Builds on:** Topics 3.1 and 2.4; Baran (2024), tensor-based agents.

**Research question:** city2graph delivers city graphs directly as PyTorch Geometric objects. Can a graph neural network be trained on SmartOpen simulation runs so that it estimates the effects of interventions such as closures or new lines within seconds? When does the full agent-based simulation still need to run?

**Key references:**
- Kipf, T. N., & Welling, M. (2017). Semi-Supervised Classification with Graph Convolutional Networks. *ICLR 2017*.
- Jiang, W., & Luo, J. (2022). Graph neural network for traffic forecasting: A survey. *Expert Systems with Applications*, 207, 117921.
- Sato, Y., Pietrostefani, E., Mahabir, R., & Arribas-Bel, D. (2026). City2Graph. *Computers, Environment and Urban Systems*, 130, 102492.

### Pillar II – National Parks, Protected Areas and Ecological Questions

#### 3.4 A Protected-Area Generator (BA/MA)

**Builds on:** Kruger NP model ([model-knp](https://github.com/MARS-Group-HAW/model-knp/)), Elk Island NP model ([model-einp](https://github.com/MARS-Group-HAW/model-einp)).

**Research question:** Starting from a protected-area boundary in the World Database on Protected Areas, a pipeline automatically assembles the environmental layers: terrain model, land cover, surface water, climate and species occurrences (e.g., GBIF). Results are produced as MARS raster and vector layers. Can the layers of the existing Kruger and Elk Island models be reproduced? How quickly can a new area be set up, e.g., a German national park? (BA: pipeline; MA: additionally time-resolved layers and uncertainty analysis.)

**Key references:**
- UNEP-WCMC & IUCN. *Protected Planet: The World Database on Protected Areas (WDPA)*. https://www.protectedplanet.net
- Gorelick, N., Hancher, M., Dixon, M., Ilyushchenko, S., Thau, D., & Moore, R. (2017). Google Earth Engine: Planetary-scale geospatial analysis for everyone. *Remote Sensing of Environment*, 202, 18–27.
- Pekel, J.-F., Cottam, A., Gorelick, N., & Belward, A. S. (2016). High-resolution mapping of global surface water and its long-term changes. *Nature*, 540, 418–422.

#### 3.5 Reusable Building Blocks for Ecosystem Models (MA)

**Builds on:** Kruger and Elk Island models; Lenfers et al. (2022), savanna tree model; Duong (2023), hoopoe model.

**Research question:** The existing ecological MARS models contain similar components: herbivores, vegetation growth, water availability, seasonal dynamics. Can they be generalized into a parameterizable library? This is tested by modeling a third area with the library and the generator from topic 3.4 and validating it with pattern-oriented modelling. How much code is actually reusable?

**Key references:**
- Grimm, V., Revilla, E., Berger, U., Jeltsch, F., Mooij, W. M., Railsback, S. F., Thulke, H.-H., Weiner, J., Wiegand, T., & DeAngelis, D. L. (2005). Pattern-oriented modeling of agent-based complex systems: lessons from ecology. *Science*, 310(5750), 987–991.
- Grimm, V., & Railsback, S. F. (2005). *Individual-based Modeling and Ecology*. Princeton University Press.
- Lenfers, U. A., Ahmady-Moghaddam, N., Glake, D., Ocker, F., Weyl, J., & Clemen, T. (2022). Modeling the Future Tree Distribution in a South African Savanna Ecosystem: An Agent-Based Model Approach. *Land*, 11(5), 619. https://doi.org/10.3390/land11050619

#### 3.6 Animal Movement Data for Automated Calibration (BA/MA)

**Builds on:** Topics 3.4 and 3.5; Birker (2025) and Siebold (2024), preparation of citizen-science data.

**Research question:** Open telemetry data (e.g., Movebank) and observation data are used to calibrate the movement rules of animal agents automatically. Which movement patterns (home-range size, daily distances, distance to water) are suitable calibration targets? How well do calibrated parameters transfer between areas?

**Key references:**
- Kays, R., Davidson, S. C., Berger, M., Bohrer, G., Fiedler, W., Flack, A., Hirt, J., Hahn, C., Gauggel, D., Russell, B., Kölzsch, A., Lohr, A., Partecke, J., Quetting, M., Safi, K., Scharf, A., Schneider, G., Lang, I., Schaeuffelhut, F., Landwehr, M., Storhas, M., van Schalkwyk, L., Vinciguerra, C., Weinzierl, R., & Wikelski, M. (2022). The Movebank system for studying global animal movement and demography. *Methods in Ecology and Evolution*, 13(2), 419–431.
- Grimm, V., et al. (2005). Pattern-oriented modeling of agent-based complex systems: lessons from ecology. *Science*, 310(5750), 987–991.

### Pillar III – Cross-Cutting

#### 3.7 From Description to Model: An LLM-Based Modeling Assistant (MA)

**Builds on:** Topics 3.1 and 3.4 as data pipelines; topic 1.6 (agentic teams).

**Research question:** A user describes the research question and area in natural language, e.g., "How do red deer distribute in the Harz during drought?". An agentic system turns this into an ODD draft, calls the appropriate generators and produces a runnable MARS base model. MARS documentation, tutorials and example models serve as the knowledge base (RAG). How many iterations with domain experts are needed to reach a scientifically acceptable model?

**Key references:**
- Grimm, V., Railsback, S. F., Vincenot, C. E., Berger, U., Gallagher, C., DeAngelis, D. L., et al. (2020). The ODD Protocol for Describing Agent-Based and Other Simulation Models: A Second Update to Improve Clarity, Replication, and Structural Realism. *Journal of Artificial Societies and Social Simulation*, 23(2), 7.
- Lewis, P., et al. (2020). Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks. *NeurIPS 2020*.
- Hong, S., et al. (2024). MetaGPT: Meta Programming for a Multi-Agent Collaborative Framework. *ICLR 2024*.

---

## Topic Chains (BA → MA → Publication)

| Chain | Topics | Idea |
|---|---|---|
| A – Cooperation under scarcity | 1.5 (BA) + 1.9 (BA) | Same scenario, MARL vs. LLM agents; joint comparison paper |
| B – Drone swarm | 1.2, 1.3, 1.4, 1.10 | Several theses on the MARS-based drone scenario, can run in parallel |
| B' – Open wildfire model | 1.1 (BA) → 1.2 / 1.3 / 1.10 (MA) | Freely usable wildfire model as the group's own basis for later MARL work |
| C – Agentic teams | 1.6 + 1.7 (MA) | Shared test environment, shared benchmark |
| D – Infrastructure graph | 2.1 (BA) → 2.2 (MA) → 2.7 / 2.11 (MA) | Shared data basis; the graph as a citable dataset |
| E – Risk and accessibility | 2.8 (BA) + 2.10 (BA) → 2.12 (MA) | Low entry barrier, high visibility with public authorities |
| F – Logistics | 2.5 (MA) → 2.4 (MA) | Estimated freight flows feed into SmartOpenHamburg |
| G – SmartOpen for any city | 3.1 (BA) → 3.2 / 3.3 (MA) | Generator as a basis for SmartOpenOttawa and other cities; also usable for 2.1/2.2 |
| H – Protected areas | 3.4 (BA) → 3.5 / 3.6 (MA) | Generator plus building-block library; validation on a third area |
| I – Modeling assistant | 3.1 + 3.4 → 3.7 (MA) | Generators as tools of an agentic modeling assistant |

If you are interested in one or more of these topics, please contact [thomas.clemen@haw-hamburg.de](mailto:thomas.clemen@haw-hamburg.de) directly. Your own topic proposals within these areas are welcome as well.
