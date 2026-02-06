// Era 5: The Fall of the Republic (78-27 BC)
// Covers: Pompey, Crassus, Spartacus, Caesar, First Triumvirate, Civil War, assassination, Octavian vs Antony
window.RomeGame.eras.push({
    id: 5,
    name: "The Fall of the Republic",
    subtitle: "78 \u2013 27 BC",
    description: "The age of Caesar, Pompey, and the civil wars that destroyed the Republic and gave birth to the Empire.",
    questions: [
        {
            id: "e5_q01",
            text: "Which famous slave revolt, led by a gladiator, terrified Rome from 73\u201371 BC?",
            difficulty: "easy",
            choices: [
                { text: "The revolt of Spartacus", correct: true },
                { text: "The revolt of Hannibal", correct: false },
                { text: "The revolt of Vercingetorix", correct: false },
                { text: "The revolt of Jugurtha", correct: false }
            ],
            infoPanel: {
                title: "Spartacus and the Slave War",
                body: "Spartacus was a Thracian gladiator who escaped from a training school in Capua with about 70 other gladiators in 73 BC. His rebellion snowballed into an army of perhaps 70,000\u2013120,000 escaped slaves that defeated multiple Roman armies and ravaged the Italian countryside for two years. Marcus Licinius Crassus finally crushed the revolt in 71 BC. As a grim warning, 6,000 captured slaves were crucified along the Appian Way from Capua to Rome.",
                podcastRef: "Episode 27: Spartacus",
                funFact: "Spartacus reportedly tried to lead his followers out of Italy to freedom, but many wanted to stay and plunder. This internal disagreement may have been his undoing."
            }
        },
        {
            id: "e5_q02",
            text: "The First Triumvirate was an informal alliance between Julius Caesar, Pompey the Great, and which wealthy Roman?",
            difficulty: "easy",
            choices: [
                { text: "Marcus Licinius Crassus", correct: true },
                { text: "Marcus Brutus", correct: false },
                { text: "Mark Antony", correct: false },
                { text: "Cicero", correct: false }
            ],
            infoPanel: {
                title: "The First Triumvirate",
                body: "In 60 BC, three of Rome\u2019s most powerful men formed a secret political alliance. Caesar was ambitious but lacked money, Pompey was a great general frustrated by the Senate, and Crassus was fabulously wealthy but wanted military glory. Together they dominated Roman politics, each getting what they wanted: Caesar got command in Gaul, Pompey got his veterans\u2019 land grants ratified, and Crassus got a lucrative military command in the East.",
                podcastRef: "Episode 30: The First Triumvirate",
                funFact: "Crassus was so wealthy that he reportedly said a man couldn\u2019t call himself rich unless he could maintain an army from his personal fortune. He made much of his money from buying properties during Sulla\u2019s proscriptions and from Rome\u2019s only fire brigade \u2014 which wouldn\u2019t put out fires until the owner sold the building to Crassus at a discount."
            }
        },
        {
            id: "e5_q03",
            text: "Julius Caesar spent nearly a decade conquering which region, building his army and his reputation?",
            difficulty: "easy",
            choices: [
                { text: "Gaul (modern France)", correct: true },
                { text: "Spain", correct: false },
                { text: "Egypt", correct: false },
                { text: "Britain", correct: false }
            ],
            infoPanel: {
                title: "The Gallic Wars",
                body: "From 58\u201350 BC, Caesar conquered all of Gaul in a series of brilliant and brutal campaigns. He defeated the Helvetii, the Belgae, the Veneti, and many other tribes. He crossed the Rhine to intimidate the Germans and even invaded Britain twice (55\u201354 BC). His army grew utterly loyal to him. He also wrote his own account of the wars (\u2018Commentarii de Bello Gallico\u2019), which served as political propaganda back in Rome \u2014 and is still read by Latin students today.",
                podcastRef: "Episodes 31\u201335: The Gallic Wars",
                funFact: "Caesar\u2019s conquest of Gaul resulted in an estimated one million deaths and another million enslaved. He was remarkably matter-of-fact about this in his own writings."
            }
        },
        {
            id: "e5_q04",
            text: "What river did Caesar famously cross in 49 BC, triggering civil war with Pompey and the Senate?",
            difficulty: "medium",
            choices: [
                { text: "The Rubicon", correct: true },
                { text: "The Tiber", correct: false },
                { text: "The Rhine", correct: false },
                { text: "The Nile", correct: false }
            ],
            infoPanel: {
                title: "Crossing the Rubicon",
                body: "The Rubicon was a small river in northern Italy that marked the boundary between Caesar\u2019s province of Gaul and Italy proper. Roman law forbade any general from bringing an army across it toward Rome. When the Senate demanded Caesar disband his army, he instead marched south across the Rubicon, reportedly saying \u2018Alea iacta est\u2019 (\u2018The die is cast\u2019). This act of war against the state began the civil war that would end the Republic.",
                podcastRef: "Episode 36: Crossing the Rubicon",
                funFact: "The phrase \u2018crossing the Rubicon\u2019 is still used today to mean passing a point of no return. The actual river is so small that historians aren\u2019t even certain which modern stream it is!"
            }
        },
        {
            id: "e5_q05",
            text: "After defeating Pompey, Caesar was appointed dictator. What title was he given shortly before his assassination?",
            difficulty: "medium",
            choices: [
                { text: "Dictator perpetuo (dictator in perpetuity)", correct: true },
                { text: "Emperor of Rome", correct: false },
                { text: "King of the Romans", correct: false },
                { text: "First Citizen (Princeps)", correct: false }
            ],
            infoPanel: {
                title: "Caesar the Dictator",
                body: "After winning the civil war, Caesar was appointed dictator multiple times, each for longer periods. In February 44 BC, he was named \u2018dictator perpetuo\u2019 \u2014 dictator for life. He used his power to pass reforms: a new calendar (the Julian calendar), land distribution, citizenship for provincials, and public building projects. But the title of permanent dictator horrified traditionalist senators who saw it as the death of the Republic.",
                podcastRef: "Episode 37: Caesar",
                funFact: "Caesar reformed the Roman calendar so thoroughly that the Julian calendar remained in use for over 1,600 years. Our month of July is named after him."
            }
        },
        {
            id: "e5_q06",
            text: "On which date was Julius Caesar assassinated by a group of senators?",
            difficulty: "medium",
            choices: [
                { text: "The Ides of March (15 March), 44 BC", correct: true },
                { text: "1 January, 44 BC", correct: false },
                { text: "The Kalends of June (1 June), 44 BC", correct: false },
                { text: "25 December, 45 BC", correct: false }
            ],
            infoPanel: {
                title: "The Assassination of Caesar",
                body: "On 15 March 44 BC, a group of about 60 senators calling themselves the \u2018Liberatores\u2019 (Liberators) stabbed Caesar to death during a Senate meeting at the Theatre of Pompey. The conspiracy was led by Marcus Brutus and Gaius Cassius. Caesar was stabbed 23 times. The assassins believed they were saving the Republic, but their act plunged Rome into another devastating round of civil wars instead.",
                podcastRef: "Episode 38: The Ides of March",
                funFact: "A soothsayer had reportedly warned Caesar to \u2018beware the Ides of March.\u2019 When Caesar saw the man on 15 March, he joked \u2018The Ides have come\u2019 \u2014 and the soothsayer replied \u2018Aye, but not gone.\u2019"
            }
        },
        {
            id: "e5_q07",
            text: "Which famous Roman orator and senator was a fierce defender of the Republic and was eventually killed during the proscriptions of the Second Triumvirate?",
            difficulty: "medium",
            choices: [
                { text: "Cicero", correct: true },
                { text: "Cato the Younger", correct: false },
                { text: "Seneca", correct: false },
                { text: "Pliny the Elder", correct: false }
            ],
            infoPanel: {
                title: "Cicero \u2014 Voice of the Republic",
                body: "Marcus Tullius Cicero was Rome\u2019s greatest orator and a passionate defender of the Republican system. After Caesar\u2019s assassination, Cicero delivered a series of fiery speeches (the Philippics) against Mark Antony. When Octavian, Antony, and Lepidus formed the Second Triumvirate in 43 BC, Antony insisted Cicero be proscribed. Cicero was caught trying to flee and executed. His head and hands were nailed to the Rostra \u2014 the very platform from which he had given his greatest speeches.",
                podcastRef: "Episode 39: The Second Triumvirate",
                funFact: "Antony\u2019s wife Fulvia reportedly pulled out Cicero\u2019s tongue and jabbed it with a hairpin, as revenge for his speeches against her husband."
            }
        },
        {
            id: "e5_q08",
            text: "At which naval battle in 31 BC did Octavian decisively defeat the forces of Mark Antony and Cleopatra?",
            difficulty: "hard",
            choices: [
                { text: "The Battle of Actium", correct: true },
                { text: "The Battle of Pharsalus", correct: false },
                { text: "The Battle of Philippi", correct: false },
                { text: "The Battle of Munda", correct: false }
            ],
            infoPanel: {
                title: "The Battle of Actium",
                body: "The Battle of Actium, fought off the western coast of Greece on 2 September 31 BC, was the final war of the Roman Republic. Octavian\u2019s fleet, commanded by his brilliant general Agrippa, trapped and defeated the combined fleet of Antony and Cleopatra. Antony and Cleopatra fled to Egypt, where they both committed suicide the following year. With their deaths, Octavian became the sole ruler of the Roman world.",
                podcastRef: "Episode 42: Actium",
                funFact: "During the battle, Cleopatra\u2019s squadron of 60 ships suddenly broke through the lines and fled. Antony abandoned his fleet to follow her \u2014 a decision that has puzzled historians ever since. Love or a prearranged escape plan?"
            }
        },
        {
            id: "e5_q09",
            text: "Who was the adopted heir of Julius Caesar, who eventually became Rome\u2019s first emperor?",
            difficulty: "easy",
            choices: [
                { text: "Octavian (later Augustus)", correct: true },
                { text: "Mark Antony", correct: false },
                { text: "Marcus Brutus", correct: false },
                { text: "Lepidus", correct: false }
            ],
            infoPanel: {
                title: "The Rise of Octavian",
                body: "Gaius Octavius was only 18 when his great-uncle Julius Caesar was assassinated. Caesar\u2019s will revealed that he had adopted Octavian as his son and heir. Despite his youth, Octavian proved to be a ruthless and brilliant political operator. He outmaneuvered Antony, Lepidus, the Senate, and everyone else who underestimated him. Cicero famously thought he could use Octavian and then discard him \u2014 a fatal miscalculation.",
                podcastRef: "Episode 39: The Second Triumvirate",
                funFact: "When Octavian first arrived in Rome to claim his inheritance, Mark Antony laughed at him. \u2018You, boy, owe everything to a name,\u2019 he sneered. Octavian would have the last laugh."
            }
        },
        {
            id: "e5_q10",
            text: "Cato the Younger chose to die rather than submit to Caesar\u2019s rule. How did he die?",
            difficulty: "hard",
            choices: [
                { text: "He committed suicide at Utica in North Africa", correct: true },
                { text: "He was executed by Caesar after the Battle of Pharsalus", correct: false },
                { text: "He died fighting at the Battle of Thapsus", correct: false },
                { text: "He was poisoned by his own allies", correct: false }
            ],
            infoPanel: {
                title: "Cato the Younger \u2014 The Republic\u2019s Last Defender",
                body: "Marcus Porcius Cato (great-grandson of Cato the Elder) was the most stubborn defender of the traditional Republic. After Caesar\u2019s victory at the Battle of Thapsus in 46 BC, Cato retreated to the city of Utica. Rather than accept Caesar\u2019s pardon and live under what he considered tyranny, Cato stabbed himself. When doctors tried to save him, he tore open his own wounds. His dramatic death made him a martyr for the Republican cause.",
                podcastRef: "Episode 37: Caesar",
                funFact: "Caesar was reportedly furious when he heard of Cato\u2019s death, saying \u2018Cato, I grudge you your death, as you would have grudged me the chance to pardon you.\u2019 A dead Cato was more dangerous to Caesar than a living one."
            }
        }
    ]
});
