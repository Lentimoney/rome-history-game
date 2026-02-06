// Timeline Events Data
// Key events for each era, displayed on the vertical timeline
window.RomeGame.timelineEvents = [
    // --- Era 1: Kingdom Period (753-509 BC) ---
    { year: -753, eraId: 1, title: "Founding of Rome", description: "Romulus founds Rome on the Palatine Hill and becomes its first king.", type: "major" },
    { year: -715, eraId: 1, title: "Numa Pompilius", description: "Rome\u2019s second king establishes religious institutions and reforms the calendar.", type: "minor" },
    { year: -616, eraId: 1, title: "Etruscan Kings Begin", description: "Tarquinius Priscus becomes king, beginning a period of strong Etruscan influence on Rome.", type: "minor" },
    { year: -578, eraId: 1, title: "Servian Reforms", description: "Servius Tullius reorganises society by wealth classes and builds the first city walls.", type: "minor" },
    { year: -535, eraId: 1, title: "Tarquin the Proud", description: "Tarquinius Superbus seizes the throne and rules as a tyrant \u2014 Rome\u2019s last king.", type: "minor" },
    { year: -509, eraId: 1, title: "Republic Established", description: "Lucius Junius Brutus leads a revolt, overthrows the monarchy, and establishes the Roman Republic.", type: "major" },

    // --- Era 2: Early Republic (509-264 BC) ---
    { year: -494, eraId: 2, title: "First Secession of the Plebs", description: "Plebeians withdraw from the city and win the creation of the Tribune of the Plebs.", type: "major" },
    { year: -458, eraId: 2, title: "Cincinnatus Saves Rome", description: "Cincinnatus is called from his farm to serve as dictator, defeats the Aequi in one day, and returns to farming.", type: "minor" },
    { year: -450, eraId: 2, title: "The Twelve Tables", description: "Rome\u2019s first written law code is published, establishing legal rights for all citizens.", type: "major" },
    { year: -390, eraId: 2, title: "Gauls Sack Rome", description: "A Gallic army under Brennus defeats the Romans and sacks the city \u2014 a traumatic moment in Roman history.", type: "major" },
    { year: -343, eraId: 2, title: "Samnite Wars Begin", description: "Rome begins a series of wars against the Samnites for control of central and southern Italy.", type: "minor" },
    { year: -312, eraId: 2, title: "Via Appia Built", description: "Appius Claudius Caecus builds the Appian Way, Rome\u2019s first major road, connecting Rome to Capua.", type: "minor" },
    { year: -287, eraId: 2, title: "Lex Hortensia", description: "Plebeian assembly gains full legislative power \u2014 the Conflict of the Orders effectively ends.", type: "major" },

    // --- Era 3: Punic Wars (264-146 BC) ---
    { year: -264, eraId: 3, title: "First Punic War Begins", description: "Rome and Carthage go to war over Sicily. Rome builds its first major navy.", type: "major" },
    { year: -241, eraId: 3, title: "First Punic War Ends", description: "Rome wins Sicily \u2014 its first overseas province. Carthage pays heavy reparations.", type: "minor" },
    { year: -218, eraId: 3, title: "Hannibal Crosses the Alps", description: "Hannibal Barca leads his army and war elephants over the Alps into Italy, shocking the Roman world.", type: "major" },
    { year: -216, eraId: 3, title: "Battle of Cannae", description: "Hannibal destroys a Roman army of 80,000 in one of history\u2019s greatest tactical victories.", type: "major" },
    { year: -202, eraId: 3, title: "Battle of Zama", description: "Scipio Africanus defeats Hannibal in Africa, ending the Second Punic War.", type: "major" },
    { year: -149, eraId: 3, title: "Third Punic War Begins", description: "Rome declares war on Carthage for the final time. Cato the Elder\u2019s persistence pays off.", type: "minor" },
    { year: -146, eraId: 3, title: "Carthage Destroyed", description: "Scipio Aemilianus destroys Carthage utterly. The city is razed and its people enslaved.", type: "major" },

    // --- Era 4: Late Republic Crisis (146-78 BC) ---
    { year: -133, eraId: 4, title: "Tiberius Gracchus", description: "Tribune Tiberius Gracchus proposes land reform and is beaten to death by senators \u2014 political violence enters Rome.", type: "major" },
    { year: -123, eraId: 4, title: "Gaius Gracchus", description: "Tiberius\u2019s brother Gaius continues the reform movement but meets the same violent end.", type: "minor" },
    { year: -107, eraId: 4, title: "Marian Army Reforms", description: "Gaius Marius opens the army to landless citizens, creating a professional military loyal to its general.", type: "major" },
    { year: -105, eraId: 4, title: "Battle of Arausio", description: "Germanic Cimbri and Teutones annihilate two Roman armies \u2014 the worst defeat since Cannae.", type: "minor" },
    { year: -91, eraId: 4, title: "Social War Begins", description: "Rome\u2019s Italian allies revolt, demanding citizenship. A brutal war follows.", type: "major" },
    { year: -88, eraId: 4, title: "Sulla Marches on Rome", description: "Sulla becomes the first Roman general to lead his army against the city itself.", type: "major" },
    { year: -82, eraId: 4, title: "Sulla\u2019s Dictatorship", description: "Sulla seizes power, publishes proscription lists, and rewrites the constitution.", type: "major" },
    { year: -79, eraId: 4, title: "Sulla Retires", description: "Sulla voluntarily resigns the dictatorship \u2014 but the precedent of seizing Rome by force remains.", type: "minor" },

    // --- Era 5: Fall of the Republic (78-27 BC) ---
    { year: -73, eraId: 5, title: "Spartacus Revolt", description: "The gladiator Spartacus leads a massive slave rebellion that terrifies Italy for two years.", type: "minor" },
    { year: -60, eraId: 5, title: "First Triumvirate", description: "Caesar, Pompey, and Crassus form a secret alliance to dominate Roman politics.", type: "major" },
    { year: -58, eraId: 5, title: "Gallic Wars Begin", description: "Caesar begins his conquest of Gaul, building a battle-hardened army fiercely loyal to him.", type: "minor" },
    { year: -49, eraId: 5, title: "Crossing the Rubicon", description: "Caesar crosses the Rubicon with his army, triggering civil war. \u2018The die is cast.\u2019", type: "major" },
    { year: -44, eraId: 5, title: "Assassination of Caesar", description: "Julius Caesar is stabbed to death by 60 senators on the Ides of March.", type: "major" },
    { year: -43, eraId: 5, title: "Second Triumvirate", description: "Octavian, Antony, and Lepidus form the Second Triumvirate. Cicero is proscribed and killed.", type: "major" },
    { year: -31, eraId: 5, title: "Battle of Actium", description: "Octavian defeats Antony and Cleopatra at sea, becoming sole ruler of the Roman world.", type: "major" },

    // --- Era 6: Age of Augustus (27 BC - 14 AD) ---
    { year: -27, eraId: 6, title: "Augustus and the Principate", description: "The Senate grants Octavian the title \u2018Augustus.\u2019 The Roman Empire begins.", type: "major" },
    { year: -19, eraId: 6, title: "Virgil Dies", description: "Virgil dies before completing the Aeneid. Augustus saves the epic from being burned.", type: "minor" },
    { year: -12, eraId: 6, title: "Death of Agrippa", description: "Augustus\u2019s greatest general and closest friend Marcus Agrippa dies, a huge personal and political loss.", type: "minor" },
    { year: 6, eraId: 6, title: "Judea Becomes a Province", description: "The Kingdom of Judea is annexed as a Roman province, governed by prefects.", type: "minor" },
    { year: 9, eraId: 6, title: "Teutoburg Forest", description: "Three Roman legions are destroyed in a Germanic ambush. Rome abandons plans to conquer Germany.", type: "major" },
    { year: 14, eraId: 6, title: "Death of Augustus", description: "Augustus dies aged 75 after ruling for over 40 years. \u2018Have I played my part well?\u2019", type: "major" },

    // --- Era 7: Julio-Claudian Dynasty (14-68 AD) ---
    { year: 14, eraId: 7, title: "Tiberius Becomes Emperor", description: "Augustus\u2019s reluctant stepson Tiberius takes power as the second Roman emperor.", type: "major" },
    { year: 26, eraId: 7, title: "Tiberius Retires to Capri", description: "Tiberius withdraws to the island of Capri, leaving Sejanus to run Rome.", type: "minor" },
    { year: 31, eraId: 7, title: "Fall of Sejanus", description: "The powerful Praetorian Prefect Sejanus is arrested and executed after plotting against Tiberius.", type: "minor" },
    { year: 37, eraId: 7, title: "Caligula Becomes Emperor", description: "Gaius \u2018Caligula\u2019 becomes emperor to great popular joy \u2014 which quickly turns to horror.", type: "major" },
    { year: 41, eraId: 7, title: "Claudius Takes Power", description: "After Caligula\u2019s assassination, the Praetorian Guard finds Claudius hiding behind a curtain and makes him emperor.", type: "major" },
    { year: 43, eraId: 7, title: "Invasion of Britain", description: "Claudius launches the conquest of Britain. Roman legions will remain on the island for nearly 400 years.", type: "major" },
    { year: 54, eraId: 7, title: "Nero Becomes Emperor", description: "The 16-year-old Nero takes the throne after Agrippina allegedly poisons Claudius.", type: "major" },
    { year: 64, eraId: 7, title: "Great Fire of Rome", description: "A devastating fire destroys much of Rome. Nero blames the Christians and begins persecutions.", type: "major" },
    { year: 68, eraId: 7, title: "Fall of Nero", description: "Nero is declared a public enemy and commits suicide. The Julio-Claudian dynasty ends.", type: "major" }
];
