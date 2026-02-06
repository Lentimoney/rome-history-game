// Era 1: The Kingdom Period (753-509 BC)
// Covers: Founding of Rome, the seven kings, early institutions
window.RomeGame.eras.push({
    id: 1,
    name: "The Kingdom Period",
    subtitle: "753 \u2013 509 BC",
    description: "From the legendary founding by Romulus to the overthrow of the last king.",
    questions: [
        {
            id: "e1_q01",
            text: "According to Roman legend, who founded the city of Rome in 753 BC?",
            difficulty: "easy",
            choices: [
                { text: "Romulus", correct: true },
                { text: "Remus", correct: false },
                { text: "Aeneas", correct: false },
                { text: "Numa Pompilius", correct: false }
            ],
            infoPanel: {
                title: "The Founding of Rome",
                body: "According to Roman mythology, twin brothers Romulus and Remus were raised by a she-wolf after being abandoned as infants. They decided to found a city, but quarreled over its location. Romulus killed Remus and named the city Roma after himself. While this is legend, archaeological evidence does show settlement on the Palatine Hill dating to roughly this period.",
                podcastRef: "Episode 1: The Founding of Rome",
                funFact: "The she-wolf (Lupa) suckling the twins became one of the most iconic symbols of Rome and can still be seen on statues throughout the city today."
            }
        },
        {
            id: "e1_q02",
            text: "What animal is said to have nursed the infant twins Romulus and Remus?",
            difficulty: "easy",
            choices: [
                { text: "A she-wolf", correct: true },
                { text: "A goat", correct: false },
                { text: "A bear", correct: false },
                { text: "A deer", correct: false }
            ],
            infoPanel: {
                title: "The She-Wolf of Rome",
                body: "The legend tells that after being thrown into the Tiber River, the twins washed ashore and were suckled by a she-wolf (lupa in Latin) in a cave called the Lupercal. A shepherd named Faustulus later found and raised them. The image of the wolf nursing the twins became the defining symbol of Rome itself.",
                podcastRef: "Episode 1: The Founding of Rome",
                funFact: "The famous Capitoline Wolf bronze statue, long thought to be ancient Etruscan, was actually dated by some scholars to the medieval period \u2014 though the debate continues!"
            }
        },
        {
            id: "e1_q03",
            text: "How many kings ruled Rome during the Kingdom Period?",
            difficulty: "easy",
            choices: [
                { text: "Seven", correct: true },
                { text: "Five", correct: false },
                { text: "Twelve", correct: false },
                { text: "Three", correct: false }
            ],
            infoPanel: {
                title: "The Seven Kings of Rome",
                body: "Rome was ruled by seven kings over roughly 244 years: Romulus, Numa Pompilius, Tullus Hostilius, Ancus Marcius, Tarquinius Priscus, Servius Tullius, and Tarquinius Superbus. Each king contributed something lasting to Roman civilization \u2014 from religious institutions to the city\u2019s first sewer system.",
                podcastRef: "Episodes 1\u20134: The Seven Kings of Rome",
                funFact: "The Roman monarchy was not hereditary in a strict sense \u2014 kings were chosen through a process involving the Senate and the people, making it quite different from later European monarchies."
            }
        },
        {
            id: "e1_q04",
            text: "Which king is credited with establishing most of Rome\u2019s early religious institutions and the Roman calendar?",
            difficulty: "medium",
            choices: [
                { text: "Numa Pompilius", correct: true },
                { text: "Romulus", correct: false },
                { text: "Ancus Marcius", correct: false },
                { text: "Servius Tullius", correct: false }
            ],
            infoPanel: {
                title: "Numa Pompilius \u2014 The Priest-King",
                body: "Numa Pompilius, Rome\u2019s second king, was renowned for his wisdom and piety. After the warlike reign of Romulus, the Romans chose the peaceful Sabine as king. He established the major priesthoods, created the calendar (adding January and February), built the Temple of Janus, and founded the order of the Vestal Virgins.",
                podcastRef: "Episode 2: The Seven Kings of Rome",
                funFact: "Numa claimed to receive divine guidance from the nymph Egeria, whom he would meet secretly in a sacred grove \u2014 lending his reforms an air of religious authority."
            }
        },
        {
            id: "e1_q05",
            text: "On which of Rome\u2019s famous hills was the original city said to be founded?",
            difficulty: "medium",
            choices: [
                { text: "The Palatine Hill", correct: true },
                { text: "The Capitoline Hill", correct: false },
                { text: "The Aventine Hill", correct: false },
                { text: "The Quirinal Hill", correct: false }
            ],
            infoPanel: {
                title: "The Palatine Hill",
                body: "The Palatine Hill is the centermost of the seven hills of Rome and is one of the most ancient parts of the city. According to legend, this is where Romulus traced the sacred boundary (pomerium) of the new city. Archaeological evidence confirms it was one of the earliest settled areas, with remains dating to around 1000 BC.",
                podcastRef: "Episode 1: The Founding of Rome",
                funFact: "The English word \u2018palace\u2019 comes from \u2018Palatine\u2019 \u2014 because later Roman emperors built their grand residences on this hill."
            }
        },
        {
            id: "e1_q06",
            text: "What was the name of the last king of Rome, whose tyranny led to the establishment of the Republic?",
            difficulty: "medium",
            choices: [
                { text: "Tarquinius Superbus (Tarquin the Proud)", correct: true },
                { text: "Tarquinius Priscus", correct: false },
                { text: "Servius Tullius", correct: false },
                { text: "Ancus Marcius", correct: false }
            ],
            infoPanel: {
                title: "The Fall of the Roman Monarchy",
                body: "Lucius Tarquinius Superbus (Tarquin the Proud) was the seventh and final king of Rome. He seized power by murdering his father-in-law Servius Tullius and ruled as a tyrant. The final straw came when his son Sextus assaulted a noblewoman named Lucretia. This outrage sparked a revolt led by Lucius Junius Brutus, and the monarchy was abolished in 509 BC.",
                podcastRef: "Episode 4: The Public Thing",
                funFact: "The Romans were so traumatized by Tarquin\u2019s rule that the title \u2018King\u2019 (Rex) became a political insult in Rome for centuries afterward."
            }
        },
        {
            id: "e1_q07",
            text: "The Etruscans, who greatly influenced early Rome, were based primarily in which region of Italy?",
            difficulty: "medium",
            choices: [
                { text: "Tuscany (Etruria)", correct: true },
                { text: "Sicily", correct: false },
                { text: "Southern Italy (Magna Graecia)", correct: false },
                { text: "The Po Valley", correct: false }
            ],
            infoPanel: {
                title: "The Etruscan Influence",
                body: "The Etruscans were a powerful civilization centered in modern-day Tuscany who profoundly shaped early Rome. At least three of the seven kings (Tarquinius Priscus, Servius Tullius, and Tarquinius Superbus) had Etruscan connections. The Romans adopted Etruscan engineering, religious practices, the toga, gladiatorial combat, and even the fasces \u2014 the bundle of rods that symbolized authority.",
                podcastRef: "Episode 2: The Seven Kings of Rome",
                funFact: "The name \u2018Tuscany\u2019 comes directly from \u2018Etruscan\u2019 \u2014 the region kept its ancient name for over 2,500 years!"
            }
        },
        {
            id: "e1_q08",
            text: "What event involving a woman named Lucretia directly triggered the overthrow of the Roman monarchy?",
            difficulty: "hard",
            choices: [
                { text: "She was assaulted by the king\u2019s son, Sextus Tarquinius", correct: true },
                { text: "She was wrongly accused of treason by the king", correct: false },
                { text: "She led an army of women against the king", correct: false },
                { text: "She poisoned the king at a banquet", correct: false }
            ],
            infoPanel: {
                title: "The Tragedy of Lucretia",
                body: "Lucretia was a Roman noblewoman who was assaulted by Sextus Tarquinius, son of King Tarquin the Proud. After telling her family what had happened, she took her own life rather than live in shame. Her kinsman Lucius Junius Brutus used this outrage to rally the Roman people, driving the Tarquins from the city and establishing the Roman Republic in 509 BC.",
                podcastRef: "Episode 4: The Public Thing",
                funFact: "Brutus had survived Tarquin\u2019s earlier purges by pretending to be stupid \u2014 the name \u2018Brutus\u2019 literally means \u2018dull\u2019 or \u2018stupid\u2019 in Latin."
            }
        },
        {
            id: "e1_q09",
            text: "Which king of Rome is credited with building the Cloaca Maxima, one of the world\u2019s earliest sewer systems?",
            difficulty: "hard",
            choices: [
                { text: "Tarquinius Priscus", correct: true },
                { text: "Romulus", correct: false },
                { text: "Numa Pompilius", correct: false },
                { text: "Tullus Hostilius", correct: false }
            ],
            infoPanel: {
                title: "The Cloaca Maxima",
                body: "Tarquinius Priscus (Tarquin the Elder), Rome\u2019s fifth king, was a great builder. His most lasting achievement was the Cloaca Maxima \u2014 a massive drainage channel that turned the swampy valley between the hills into usable land. This engineering marvel drained what would become the Roman Forum and parts of it are still in use today, over 2,500 years later.",
                podcastRef: "Episode 3: The Seven Kings of Rome",
                funFact: "The Cloaca Maxima was originally an open channel but was eventually enclosed. Parts of the ancient stonework are still visible where it empties into the Tiber River in modern Rome."
            }
        },
        {
            id: "e1_q10",
            text: "Servius Tullius is credited with reorganizing Roman society based on what criterion, replacing the old system based on clan membership?",
            difficulty: "hard",
            choices: [
                { text: "Wealth (property classes)", correct: true },
                { text: "Military service record", correct: false },
                { text: "Religious devotion", correct: false },
                { text: "Geographic location within the city", correct: false }
            ],
            infoPanel: {
                title: "The Servian Reforms",
                body: "Servius Tullius, Rome\u2019s sixth king, carried out revolutionary reforms that reorganized Roman society by wealth rather than birth. He divided citizens into classes based on their property, which determined their military obligations and voting power. This \u2018Servian Constitution\u2019 created the Comitia Centuriata (Centuriate Assembly), which would remain a key political institution throughout the Republic.",
                podcastRef: "Episode 3: The Seven Kings of Rome",
                funFact: "While the reforms gave more people a voice, they were cleverly weighted so that the wealthy classes could outvote the poor \u2014 a system the Roman elite would defend for centuries."
            }
        }
    ]
});
