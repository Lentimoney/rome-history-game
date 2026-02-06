// Era 2: The Early Republic (509-264 BC)
// Covers: Establishment of the Republic, Conflict of the Orders, expansion in Italy
window.RomeGame.eras.push({
    id: 2,
    name: "The Early Republic",
    subtitle: "509 \u2013 264 BC",
    description: "The birth of the Republic, the struggle between patricians and plebeians, and Rome\u2019s conquest of Italy.",
    questions: [
        {
            id: "e2_q01",
            text: "After overthrowing the last king, what type of government did Rome establish in 509 BC?",
            difficulty: "easy",
            choices: [
                { text: "A republic", correct: true },
                { text: "A democracy", correct: false },
                { text: "An oligarchy", correct: false },
                { text: "A theocracy", correct: false }
            ],
            infoPanel: {
                title: "The Birth of the Roman Republic",
                body: "After expelling King Tarquin the Proud, the Romans created a republic \u2014 from the Latin \u2018res publica\u2019 meaning \u2018the public thing\u2019. Instead of a king, power was held by two consuls elected for one-year terms, advised by the Senate. This system of shared, time-limited power was designed to prevent any one person from becoming a tyrant again.",
                podcastRef: "Episode 4: The Public Thing",
                funFact: "The two-consul system meant that either consul could veto the other \u2014 the word \u2018veto\u2019 is Latin for \u2018I forbid\u2019."
            }
        },
        {
            id: "e2_q02",
            text: "What were the two main social classes that struggled for political power during the early Republic?",
            difficulty: "easy",
            choices: [
                { text: "Patricians and plebeians", correct: true },
                { text: "Senators and equestrians", correct: false },
                { text: "Citizens and slaves", correct: false },
                { text: "Nobles and merchants", correct: false }
            ],
            infoPanel: {
                title: "The Conflict of the Orders",
                body: "The patricians were Rome\u2019s old aristocratic families who monopolised political and religious offices. The plebeians were everyone else \u2014 farmers, craftsmen, traders \u2014 who made up the vast majority of the population. For nearly 200 years (494\u2013287 BC), plebeians fought to gain political rights, in what historians call the \u2018Conflict of the Orders\u2019.",
                podcastRef: "Episode 5: Trials and Tribulations",
                funFact: "One of the plebeians\u2019 most powerful tactics was the \u2018secessio\u2019 \u2014 they would literally walk out of the city and refuse to serve in the army until their demands were met."
            }
        },
        {
            id: "e2_q03",
            text: "What was the name of the written law code, created around 450 BC, that was Rome\u2019s first attempt to put laws in writing so everyone could see them?",
            difficulty: "easy",
            choices: [
                { text: "The Twelve Tables", correct: true },
                { text: "The Justinian Code", correct: false },
                { text: "The Lex Romana", correct: false },
                { text: "The Senatus Consultum", correct: false }
            ],
            infoPanel: {
                title: "The Twelve Tables",
                body: "Before the Twelve Tables, laws were unwritten and interpreted by patrician judges \u2014 often unfairly. The plebeians demanded written laws so everyone could know their rights. A commission of ten men (the Decemviri) was appointed, and the resulting laws were inscribed on twelve bronze tablets displayed in the Forum. These became the foundation of all Roman law.",
                podcastRef: "Episode 6: The Twelve Tables",
                funFact: "Roman schoolchildren were required to memorize the Twelve Tables for centuries afterward. Cicero, writing 400 years later, said he had to learn them as a boy."
            }
        },
        {
            id: "e2_q04",
            text: "Which Roman leader was famously called from his farm to serve as dictator during a crisis, then returned to farming after just 16 days?",
            difficulty: "medium",
            choices: [
                { text: "Cincinnatus", correct: true },
                { text: "Camillus", correct: false },
                { text: "Fabius Maximus", correct: false },
                { text: "Brutus", correct: false }
            ],
            infoPanel: {
                title: "Cincinnatus \u2014 The Ideal Roman",
                body: "Lucius Quinctius Cincinnatus became the Romans\u2019 ideal of civic virtue. In 458 BC, with a Roman army trapped by the Aequi, the Senate appointed Cincinnatus as dictator. Messengers found him ploughing his small farm. He took command, defeated the enemy in a single day, celebrated a triumph, and resigned the dictatorship after just 16 days \u2014 returning to his plough.",
                podcastRef: "Episode 5: Trials and Tribulations",
                funFact: "The city of Cincinnati, Ohio is named after Cincinnatus. George Washington was often compared to him for voluntarily giving up power."
            }
        },
        {
            id: "e2_q05",
            text: "In 390 BC, which people sacked the city of Rome, an event that traumatised the Romans for generations?",
            difficulty: "medium",
            choices: [
                { text: "The Gauls", correct: true },
                { text: "The Carthaginians", correct: false },
                { text: "The Greeks", correct: false },
                { text: "The Etruscans", correct: false }
            ],
            infoPanel: {
                title: "The Gallic Sack of Rome",
                body: "In 390 BC, a Gallic army under Brennus crushed the Roman army at the Battle of the Allia and marched into Rome. The city was sacked and burned. According to legend, the geese sacred to Juno on the Capitoline Hill honked to warn the defenders of a night attack. The Romans eventually paid a ransom in gold to make the Gauls leave. When the Romans complained the scales were rigged, Brennus threw his sword on the scales and declared \u2018Vae victis!\u2019 \u2014 \u2018Woe to the vanquished!\u2019",
                podcastRef: "Episode 7: The Gallic Catastrophe",
                funFact: "This trauma was so deep that the Romans built massive new walls (the Servian Walls) around the city. For centuries, the anniversary of the Battle of the Allia was considered an unlucky day."
            }
        },
        {
            id: "e2_q06",
            text: "What special political office did the plebeians create to protect their interests, whose holders were considered sacrosanct (untouchable)?",
            difficulty: "medium",
            choices: [
                { text: "Tribune of the Plebs", correct: true },
                { text: "Aedile", correct: false },
                { text: "Praetor", correct: false },
                { text: "Quaestor", correct: false }
            ],
            infoPanel: {
                title: "The Tribunes of the Plebs",
                body: "The Tribune of the Plebs was one of the most revolutionary political innovations of the Roman Republic. Created in 494 BC after the first plebeian secession, tribunes had the power to veto any action by a magistrate or the Senate. Their persons were declared sacrosanct \u2014 anyone who harmed a tribune could be killed without trial. This gave the common people a powerful check on patrician authority.",
                podcastRef: "Episode 5: Trials and Tribulations",
                funFact: "Tribunes could literally stand in the doorway of the Senate and shout \u2018Veto!\u2019 (\u2018I forbid!\u2019) to block any proposed law. This power would later be both a safeguard and a source of political chaos."
            }
        },
        {
            id: "e2_q07",
            text: "Which Roman general is credited with saving Rome after the Gallic sack and earning the title \u2018Second Founder of Rome\u2019?",
            difficulty: "medium",
            choices: [
                { text: "Marcus Furius Camillus", correct: true },
                { text: "Cincinnatus", correct: false },
                { text: "Appius Claudius", correct: false },
                { text: "Scipio Africanus", correct: false }
            ],
            infoPanel: {
                title: "Camillus \u2014 The Second Founder",
                body: "Marcus Furius Camillus had previously been exiled from Rome after a dispute over war spoils. When the Gauls sacked the city, the Romans recalled Camillus and appointed him dictator. According to tradition, he arrived just as the ransom was being weighed, drove out the Gauls, and led the rebuilding of Rome. He talked the people out of abandoning the destroyed city for nearby Veii, earning his title as the \u2018Second Founder of Rome\u2019.",
                podcastRef: "Episode 7: The Gallic Catastrophe",
                funFact: "Camillus is said to have declared that Romans should reclaim their city \u2018with iron, not gold\u2019 \u2014 though this dramatic story may have been embellished by later Roman historians."
            }
        },
        {
            id: "e2_q08",
            text: "The Samnite Wars (343\u2013290 BC) were fought between Rome and the Samnites over control of which part of Italy?",
            difficulty: "hard",
            choices: [
                { text: "Central and southern Italy", correct: true },
                { text: "Northern Italy and the Po Valley", correct: false },
                { text: "Sicily", correct: false },
                { text: "Sardinia and Corsica", correct: false }
            ],
            infoPanel: {
                title: "The Samnite Wars",
                body: "The three Samnite Wars were among the toughest fights in Rome\u2019s rise to dominance over the Italian peninsula. The Samnites were fierce mountain warriors from the central Apennines. At the Battle of the Caudine Forks (321 BC), an entire Roman army was trapped and forced to \u2018pass under the yoke\u2019 \u2014 a humiliating ritual of submission. But Rome persevered, and by 290 BC had broken Samnite resistance.",
                podcastRef: "Episode 8: The Samnite Wars",
                funFact: "After their humiliation at the Caudine Forks, the Roman Senate actually refused to honour the peace treaty their trapped commanders had signed \u2014 and sent the commanders back to the Samnites as punishment."
            }
        },
        {
            id: "e2_q09",
            text: "What was the significance of the Lex Hortensia of 287 BC?",
            difficulty: "hard",
            choices: [
                { text: "It made laws passed by the plebeian assembly binding on all citizens, including patricians", correct: true },
                { text: "It abolished the monarchy permanently", correct: false },
                { text: "It established the first standing Roman army", correct: false },
                { text: "It granted citizenship to all Italians", correct: false }
            ],
            infoPanel: {
                title: "The Lex Hortensia \u2014 End of the Conflict of the Orders",
                body: "The Lex Hortensia of 287 BC is traditionally seen as the end of the long Conflict of the Orders. It declared that resolutions passed by the Concilium Plebis (plebeian assembly) had the force of law for all Romans, without needing Senate approval. In theory, this made the plebeians fully equal politically. In practice, a new patrician-plebeian nobility quickly formed, but the principle of popular sovereignty was established.",
                podcastRef: "Episode 9: A Phalanx with Joints",
                funFact: "Despite this legal equality, wealthy plebeian families simply merged with the old patrician aristocracy to form a new ruling class \u2014 proving that in Rome, class always found a way to reassert itself."
            }
        },
        {
            id: "e2_q10",
            text: "What was the unique feature of the Roman \u2018manipular\u2019 military system that gave Rome a tactical advantage over its enemies?",
            difficulty: "hard",
            choices: [
                { text: "Flexible units (maniples) that could operate independently on the battlefield", correct: true },
                { text: "Heavily armoured cavalry that charged in wedge formation", correct: false },
                { text: "Archers positioned on war elephants", correct: false },
                { text: "A single massive phalanx that was impossible to break", correct: false }
            ],
            infoPanel: {
                title: "The Manipular Legion",
                body: "Early Rome fought in a Greek-style phalanx \u2014 a rigid block of soldiers with long spears. After defeats in the hilly terrain of the Samnite Wars, Rome adapted. The new manipular system divided the legion into small, flexible units called maniples (from \u2018manipulus\u2019, meaning \u2018handful\u2019). These could manoeuvre independently over rough ground, rotate fresh troops into the front line, and adapt to changing battlefield conditions. This flexibility became Rome\u2019s greatest military advantage.",
                podcastRef: "Episode 9: A Phalanx with Joints",
                funFact: "The title of Mike Duncan\u2019s episode \u2018A Phalanx with Joints\u2019 perfectly captures the concept \u2014 Rome kept the power of massed infantry but added the flexibility that rigid formations lacked."
            }
        }
    ]
});
