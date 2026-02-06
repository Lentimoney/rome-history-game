// Era 6: The Age of Augustus (27 BC - 14 AD)
// Covers: The Principate, Pax Romana, reforms, culture, succession
window.RomeGame.eras.push({
    id: 6,
    name: "The Age of Augustus",
    subtitle: "27 BC \u2013 14 AD",
    description: "Octavian became Augustus and transformed the broken Republic into a stable Empire \u2014 beginning the Pax Romana.",
    questions: [
        {
            id: "e6_q01",
            text: "What honorary title did the Senate grant Octavian in 27 BC, which became his most famous name?",
            difficulty: "easy",
            choices: [
                { text: "Augustus", correct: true },
                { text: "Caesar", correct: false },
                { text: "Imperator", correct: false },
                { text: "Maximus", correct: false }
            ],
            infoPanel: {
                title: "The Name Augustus",
                body: "In January 27 BC, the Senate granted Octavian the title \u2018Augustus\u2019 \u2014 meaning \u2018the revered one\u2019 or \u2018the illustrious one.\u2019 It was a new word with religious overtones, suggesting someone chosen by the gods. This marked the symbolic founding of the Roman Empire, though Augustus was careful to pretend he was merely \u2018first among equals\u2019 (princeps) rather than a king. The month of August is named after him.",
                podcastRef: "Episode 43: First Citizen",
                funFact: "Augustus was so careful about avoiding the appearance of monarchy that he lived in a relatively modest house on the Palatine Hill and dressed like an ordinary senator."
            }
        },
        {
            id: "e6_q02",
            text: "Augustus claimed he was not a king or dictator, but merely the \u2018first citizen.\u2019 What Latin term describes this system of disguised one-man rule?",
            difficulty: "easy",
            choices: [
                { text: "The Principate", correct: true },
                { text: "The Dominate", correct: false },
                { text: "The Triumvirate", correct: false },
                { text: "The Consulship", correct: false }
            ],
            infoPanel: {
                title: "The Principate",
                body: "Augustus\u2019s genius was political, not military. He understood that Romans would never accept a king, so he maintained the fiction that the Republic still existed. He held no single extraordinary office but accumulated many ordinary powers: tribune\u2019s power, consul\u2019s authority, control of the army and provinces. He called himself \u2018Princeps\u2019 (First Citizen), and the system is called the Principate. The Senate still met, magistrates were still elected \u2014 but everyone knew Augustus was in charge.",
                podcastRef: "Episode 43: First Citizen",
                funFact: "Our word \u2018prince\u2019 comes from \u2018princeps.\u2019 Augustus would have been horrified to learn his careful republican disguise eventually gave its name to hereditary royalty."
            }
        },
        {
            id: "e6_q03",
            text: "What term describes the long period of relative peace and stability across the Roman Empire that began under Augustus?",
            difficulty: "easy",
            choices: [
                { text: "The Pax Romana", correct: true },
                { text: "The Golden Republic", correct: false },
                { text: "The Eternal Peace", correct: false },
                { text: "The Age of Conquest", correct: false }
            ],
            infoPanel: {
                title: "The Pax Romana",
                body: "The Pax Romana (\u2018Roman Peace\u2019) lasted roughly 200 years, from Augustus\u2019s reign to the death of Marcus Aurelius in 180 AD. This doesn\u2019t mean there were no wars \u2014 Rome still fought on its frontiers \u2014 but the interior of the Empire enjoyed unprecedented stability. Trade flourished across the Mediterranean, cities grew, and Roman law and infrastructure (roads, aqueducts, harbours) connected a vast territory. Augustus\u2019s settlement made this possible.",
                podcastRef: "Episode 44: Augustus",
                funFact: "Augustus built the Ara Pacis (Altar of Peace) in Rome to celebrate the peace he had brought. It still survives and is one of the finest examples of Roman sculptural art."
            }
        },
        {
            id: "e6_q04",
            text: "Which close friend and general of Augustus was the military genius behind many of his victories, including Actium?",
            difficulty: "medium",
            choices: [
                { text: "Marcus Agrippa", correct: true },
                { text: "Tiberius", correct: false },
                { text: "Maecenas", correct: false },
                { text: "Drusus", correct: false }
            ],
            infoPanel: {
                title: "Marcus Agrippa \u2014 Augustus\u2019s Right Hand",
                body: "Marcus Vipsanius Agrippa was Augustus\u2019s childhood friend, greatest general, and son-in-law. He commanded the fleet at Actium, built the original Pantheon in Rome, constructed aqueducts, and created the first public baths. He was loyal, brilliant, and had no desire for the top job himself \u2014 making him the perfect partner for the suspicious Augustus. When Agrippa died in 12 BC, Augustus lost his most irreplaceable ally.",
                podcastRef: "Episode 44: Augustus",
                funFact: "The Pantheon that still stands in Rome today was rebuilt by Emperor Hadrian, but it carries the inscription \u2018M. Agrippa built this\u2019 on the front \u2014 honouring Agrippa\u2019s original building."
            }
        },
        {
            id: "e6_q05",
            text: "Which Roman poet, patronised during Augustus\u2019s reign, wrote the Aeneid \u2014 the epic poem tracing Rome\u2019s origins to the Trojan hero Aeneas?",
            difficulty: "medium",
            choices: [
                { text: "Virgil", correct: true },
                { text: "Ovid", correct: false },
                { text: "Horace", correct: false },
                { text: "Homer", correct: false }
            ],
            infoPanel: {
                title: "Virgil and the Aeneid",
                body: "Publius Vergilius Maro (Virgil) was the greatest poet of the Augustan age. His epic poem the Aeneid tells the story of Aeneas, a Trojan prince who sails to Italy and becomes an ancestor of the Roman people. It was both a literary masterpiece and political propaganda, linking Augustus\u2019s family (the Julii) to the heroes of Troy and ultimately to the goddess Venus. Virgil died in 19 BC before finishing it and reportedly asked for it to be burned \u2014 Augustus overruled this wish.",
                podcastRef: "Episode 44: Augustus",
                funFact: "Virgil\u2019s opening line \u2018Arma virumque cano\u2019 (\u2018I sing of arms and the man\u2019) is one of the most famous opening lines in all of Western literature."
            }
        },
        {
            id: "e6_q06",
            text: "Augustus famously boasted that he \u2018found Rome a city of bricks and left it a city of\u2019 what?",
            difficulty: "medium",
            choices: [
                { text: "Marble", correct: true },
                { text: "Gold", correct: false },
                { text: "Iron", correct: false },
                { text: "Stone", correct: false }
            ],
            infoPanel: {
                title: "Augustus the Builder",
                body: "Augustus undertook a massive building programme that transformed Rome from a rather shabby city into a capital worthy of a world empire. He restored 82 temples, built a new forum (the Forum of Augustus), constructed roads and aqueducts throughout the empire, and encouraged wealthy Romans to sponsor public buildings. His boast about marble was no exaggeration \u2014 he completely changed the face of Rome.",
                podcastRef: "Episode 44: Augustus",
                funFact: "Augustus also created Rome\u2019s first fire brigade (the Vigiles) and police force (the Urban Cohorts) \u2014 practical improvements that made daily life in the city much safer."
            }
        },
        {
            id: "e6_q07",
            text: "Which catastrophic military defeat in 9 AD, where three Roman legions were destroyed in a German forest, halted Rome\u2019s expansion into Germania?",
            difficulty: "hard",
            choices: [
                { text: "The Battle of the Teutoburg Forest", correct: true },
                { text: "The Battle of Alesia", correct: false },
                { text: "The Battle of Carrhae", correct: false },
                { text: "The Battle of Adrianople", correct: false }
            ],
            infoPanel: {
                title: "The Disaster at Teutoburg Forest",
                body: "In 9 AD, a Germanic chieftain named Arminius \u2014 who had served in the Roman army and held Roman citizenship \u2014 lured three Roman legions under Publius Quinctilius Varus into an ambush in the Teutoburg Forest. Over three days, the XVII, XVIII, and XIX legions were annihilated. An estimated 15,000\u201320,000 Roman soldiers were killed. The disaster ended Rome\u2019s ambitions to conquer Germany east of the Rhine.",
                podcastRef: "Episode 47: Teutoburg Forest",
                funFact: "Augustus was reportedly so devastated that he would bang his head against the walls, crying \u2018Quintilius Varus, give me back my legions!\u2019 The numbers XVII, XVIII, and XIX were never used for Roman legions again."
            }
        },
        {
            id: "e6_q08",
            text: "Augustus struggled with the question of who would succeed him. Who ultimately became the next emperor?",
            difficulty: "medium",
            choices: [
                { text: "Tiberius, his stepson", correct: true },
                { text: "Agrippa, his general", correct: false },
                { text: "Marcellus, his nephew", correct: false },
                { text: "Gaius Caesar, his grandson", correct: false }
            ],
            infoPanel: {
                title: "The Succession Problem",
                body: "Augustus\u2019s succession was a long, tragic process of elimination. His first choice, his nephew Marcellus, died in 23 BC. Then Agrippa, who married Augustus\u2019s daughter Julia, died in 12 BC. Their sons Gaius and Lucius (Augustus\u2019s adopted grandsons) both died young. Finally, Augustus was forced to adopt Tiberius, his wife Livia\u2019s son from a previous marriage. Tiberius was a brilliant but gloomy general whom Augustus never really liked.",
                podcastRef: "Episode 48: The Succession",
                funFact: "Augustus\u2019s daughter Julia was eventually exiled for scandalous behaviour. When told about it, Augustus reportedly said he wished he\u2019d never married or never had children."
            }
        },
        {
            id: "e6_q09",
            text: "What was the Praetorian Guard?",
            difficulty: "hard",
            choices: [
                { text: "An elite military unit that served as the emperor\u2019s personal bodyguard in Rome", correct: true },
                { text: "A council of senior senators who advised the emperor", correct: false },
                { text: "The emperor\u2019s personal spy network", correct: false },
                { text: "A religious order that guarded Rome\u2019s sacred temples", correct: false }
            ],
            infoPanel: {
                title: "The Praetorian Guard",
                body: "Augustus formalised the Praetorian Guard as a permanent force of elite soldiers stationed in and around Rome, tasked with protecting the emperor. They were better paid and served shorter terms than ordinary legionaries. While initially a protection, the Guard would become one of the most dangerous forces in Roman politics \u2014 making and unmaking emperors for the next three centuries.",
                podcastRef: "Episode 43: First Citizen",
                funFact: "The Praetorian Guard would eventually assassinate Emperor Caligula, auction off the empire to the highest bidder (in 193 AD), and be disbanded by Constantine. Augustus could not have foreseen what a monster he created."
            }
        },
        {
            id: "e6_q10",
            text: "What were Augustus\u2019s reported last words?",
            difficulty: "hard",
            choices: [
                { text: "\u2018Have I played my part well? Then applaud as I exit.\u2019", correct: true },
                { text: "\u2018I came, I saw, I conquered.\u2019", correct: false },
                { text: "\u2018Et tu, Brute?\u2019", correct: false },
                { text: "\u2018Rome will last forever.\u2019", correct: false }
            ],
            infoPanel: {
                title: "The Death of Augustus",
                body: "Augustus died on 19 August 14 AD at the age of 75, having ruled for over 40 years. According to the historian Suetonius, his last words to his friends were: \u2018Have I played my part well? Then applaud as I exit.\u2019 \u2014 comparing his life to an actor\u2019s performance on stage. He was deified by the Senate after his death. He had transformed Rome from a war-torn Republic into a stable Empire that would endure for centuries.",
                podcastRef: "Episode 49: The Death of Augustus",
                funFact: "Augustus also reportedly asked his friends if he had played the \u2018comedy of life\u2019 well \u2014 a remarkable admission that the man who built an empire saw his greatest achievement as a kind of performance."
            }
        }
    ]
});
