// Era 3: The Punic Wars (264-146 BC)
// Covers: Three wars with Carthage, Hannibal, Scipio Africanus, destruction of Carthage
window.RomeGame.eras.push({
    id: 3,
    name: "The Punic Wars",
    subtitle: "264 \u2013 146 BC",
    description: "Rome\u2019s epic struggle with Carthage for control of the Mediterranean \u2014 featuring Hannibal\u2019s legendary invasion of Italy.",
    questions: [
        {
            id: "e3_q01",
            text: "The Punic Wars were fought between Rome and which other great power of the ancient Mediterranean?",
            difficulty: "easy",
            choices: [
                { text: "Carthage", correct: true },
                { text: "Greece", correct: false },
                { text: "Egypt", correct: false },
                { text: "Persia", correct: false }
            ],
            infoPanel: {
                title: "Rome vs. Carthage",
                body: "Carthage was a wealthy Phoenician trading city located in modern-day Tunisia, North Africa. By the 3rd century BC, it controlled much of the western Mediterranean \u2014 parts of North Africa, Spain, Sardinia, Corsica, and western Sicily. The clash between Rome and Carthage was inevitable as Rome expanded southward. The word \u2018Punic\u2019 comes from \u2018Punicus\u2019, the Latin word for Phoenician.",
                podcastRef: "Episode 10: The First Punic War",
                funFact: "Carthage was so wealthy from its trading empire that it could afford to hire entire mercenary armies rather than relying on citizen soldiers like Rome did."
            }
        },
        {
            id: "e3_q02",
            text: "The First Punic War (264\u2013241 BC) was primarily fought over control of which island?",
            difficulty: "easy",
            choices: [
                { text: "Sicily", correct: true },
                { text: "Sardinia", correct: false },
                { text: "Crete", correct: false },
                { text: "Cyprus", correct: false }
            ],
            infoPanel: {
                title: "The First Punic War",
                body: "The First Punic War began when both Rome and Carthage intervened in a dispute in the Sicilian city of Messana. What started as a minor conflict escalated into a 23-year war. Rome, which had no navy at the start, built an entire fleet from scratch and eventually defeated the Carthaginian navy. Sicily became Rome\u2019s first overseas province.",
                podcastRef: "Episode 10: The First Punic War",
                funFact: "The Romans were such naval novices that they reportedly copied a captured Carthaginian warship plank by plank to build their fleet. They also invented the \u2018corvus\u2019 \u2014 a boarding bridge that turned sea battles into the land fights they were good at."
            }
        },
        {
            id: "e3_q03",
            text: "Which Carthaginian general famously crossed the Alps with war elephants to invade Italy in 218 BC?",
            difficulty: "easy",
            choices: [
                { text: "Hannibal Barca", correct: true },
                { text: "Hasdrubal Barca", correct: false },
                { text: "Hamilcar Barca", correct: false },
                { text: "Hanno the Great", correct: false }
            ],
            infoPanel: {
                title: "Hannibal Crosses the Alps",
                body: "Hannibal Barca is considered one of the greatest military commanders in history. In 218 BC, he marched an army of roughly 50,000 soldiers, 9,000 cavalry, and 37 war elephants from Spain, across southern Gaul, and over the Alps into Italy. The crossing took about two weeks and cost him nearly half his army to cold, avalanches, and hostile mountain tribes \u2014 but the surprise was total. No one expected an invasion from the north.",
                podcastRef: "Episode 12: Hannibal at the Gates",
                funFact: "Hannibal\u2019s father Hamilcar allegedly made the young Hannibal swear an oath of eternal hatred against Rome. Whether true or not, Hannibal certainly kept that promise."
            }
        },
        {
            id: "e3_q04",
            text: "At which battle in 216 BC did Hannibal destroy a much larger Roman army in what is still studied as one of the greatest tactical victories in military history?",
            difficulty: "medium",
            choices: [
                { text: "The Battle of Cannae", correct: true },
                { text: "The Battle of Trebia", correct: false },
                { text: "The Battle of Lake Trasimene", correct: false },
                { text: "The Battle of Zama", correct: false }
            ],
            infoPanel: {
                title: "The Battle of Cannae",
                body: "Cannae was Hannibal\u2019s masterpiece. Facing a Roman army of roughly 80,000 men with only about 50,000 of his own, he used a deliberate tactical retreat in the centre to draw the Romans forward, then closed his cavalry and infantry around them in a perfect double envelopment. An estimated 50,000\u201370,000 Romans were killed in a single afternoon \u2014 making it one of the bloodiest single days in military history.",
                podcastRef: "Episode 13: Cannae",
                funFact: "After Cannae, Hannibal sent a collection of gold rings taken from dead Roman knights back to Carthage \u2014 it reportedly filled three and a half bushels, demonstrating the scale of the Roman losses."
            }
        },
        {
            id: "e3_q05",
            text: "Which Roman general adopted a strategy of avoiding pitched battle with Hannibal and instead wearing him down through delays and skirmishes?",
            difficulty: "medium",
            choices: [
                { text: "Quintus Fabius Maximus", correct: true },
                { text: "Scipio Africanus", correct: false },
                { text: "Marcus Claudius Marcellus", correct: false },
                { text: "Gaius Flaminius", correct: false }
            ],
            infoPanel: {
                title: "Fabius Maximus \u2014 The Delayer",
                body: "After Hannibal\u2019s devastating victories at Trebia, Lake Trasimene, and Cannae, Rome was in crisis. Quintus Fabius Maximus was appointed dictator and adopted a revolutionary strategy: refuse to fight Hannibal in open battle. Instead, he shadowed Hannibal\u2019s army, cut off foraging parties, and denied him supplies. The Romans mocked him as \u2018Cunctator\u2019 (the Delayer), but his strategy worked \u2014 Hannibal could win battles but couldn\u2019t win the war.",
                podcastRef: "Episode 13: Cannae",
                funFact: "This approach is now known as \u2018Fabian strategy\u2019 and has been used throughout military history. The Fabian Society, a British socialist organisation, was named after Fabius for its belief in gradual rather than revolutionary change."
            }
        },
        {
            id: "e3_q06",
            text: "Which young Roman general took the war to Africa and defeated Hannibal at the Battle of Zama in 202 BC?",
            difficulty: "medium",
            choices: [
                { text: "Scipio Africanus", correct: true },
                { text: "Fabius Maximus", correct: false },
                { text: "Marcellus", correct: false },
                { text: "Cato the Elder", correct: false }
            ],
            infoPanel: {
                title: "Scipio Africanus \u2014 The Conqueror of Hannibal",
                body: "Publius Cornelius Scipio was a brilliant young general who studied Hannibal\u2019s tactics and turned them against him. After reconquering Spain, Scipio boldly invaded North Africa itself, forcing Carthage to recall Hannibal from Italy. At the Battle of Zama in 202 BC, Scipio defeated Hannibal using the master\u2019s own tactics of outflanking and encirclement. He earned the honorific \u2018Africanus\u2019 and ended the Second Punic War.",
                podcastRef: "Episode 16: Zama",
                funFact: "When Scipio and Hannibal met before the battle, Hannibal reportedly called Alexander the Great the finest general of all time, himself the second, and Scipio the third \u2014 a backhanded compliment at best."
            }
        },
        {
            id: "e3_q07",
            text: "How many Punic Wars were there in total between Rome and Carthage?",
            difficulty: "easy",
            choices: [
                { text: "Three", correct: true },
                { text: "Two", correct: false },
                { text: "Four", correct: false },
                { text: "Five", correct: false }
            ],
            infoPanel: {
                title: "Three Wars, One Victor",
                body: "The three Punic Wars spanned over a century: the First (264\u2013241 BC), Second (218\u2013201 BC), and Third (149\u2013146 BC). The First won Rome control of Sicily. The Second, featuring Hannibal\u2019s epic invasion, nearly destroyed Rome but ended in Carthage\u2019s defeat. The Third resulted in the complete destruction of Carthage. Together they transformed Rome from an Italian power into the dominant force in the Mediterranean.",
                podcastRef: "Episodes 10\u201318",
                funFact: "The three wars lasted a combined 43 years of actual fighting, with intervals of uneasy peace between them."
            }
        },
        {
            id: "e3_q08",
            text: "Which Roman senator famously ended every speech with \u2018Carthago delenda est\u2019 (\u2018Carthage must be destroyed\u2019)?",
            difficulty: "medium",
            choices: [
                { text: "Cato the Elder", correct: true },
                { text: "Cicero", correct: false },
                { text: "Scipio Africanus", correct: false },
                { text: "Fabius Maximus", correct: false }
            ],
            infoPanel: {
                title: "Cato the Elder and the Destruction of Carthage",
                body: "Marcus Porcius Cato (Cato the Elder) was a conservative Roman senator who saw Carthage as a permanent threat. Even decades after the Second Punic War, he relentlessly argued for Carthage\u2019s destruction. He would end every speech in the Senate \u2014 regardless of the topic \u2014 with \u2018Ceterum censeo Carthaginem esse delendam\u2019 (\u2018Furthermore, I am of the opinion that Carthage must be destroyed\u2019). His persistence helped push Rome toward the Third Punic War.",
                podcastRef: "Episode 17: Carthago Delenda Est",
                funFact: "According to one story, Cato once shook fresh figs from his toga in the Senate, saying they had been picked in Carthage just three days ago \u2014 proving how close and how fertile (and therefore dangerous) the enemy still was."
            }
        },
        {
            id: "e3_q09",
            text: "What happened to the city of Carthage at the end of the Third Punic War in 146 BC?",
            difficulty: "hard",
            choices: [
                { text: "It was completely destroyed and its population killed or enslaved", correct: true },
                { text: "It became a Roman ally with limited independence", correct: false },
                { text: "It was absorbed peacefully into the Roman Republic", correct: false },
                { text: "It was abandoned and left as ruins without Roman intervention", correct: false }
            ],
            infoPanel: {
                title: "The Destruction of Carthage",
                body: "The Third Punic War (149\u2013146 BC) ended with the total annihilation of Carthage. After a three-year siege, Roman forces under Scipio Aemilianus (adopted grandson of Scipio Africanus) breached the walls. Street-by-street fighting lasted six days. The city was systematically demolished, the surviving population of about 50,000 was sold into slavery, and the territory became the Roman province of Africa.",
                podcastRef: "Episode 18: The Destruction of Carthage",
                funFact: "The famous story that Rome salted the earth so nothing would grow again is probably a myth \u2014 it first appears in 19th-century sources. In fact, Rome later rebuilt Carthage as a thriving Roman city!"
            }
        },
        {
            id: "e3_q10",
            text: "During the Second Punic War, Hannibal remained in Italy for roughly how long before being recalled to defend Carthage?",
            difficulty: "hard",
            choices: [
                { text: "About 15 years (218\u2013203 BC)", correct: true },
                { text: "About 3 years", correct: false },
                { text: "About 8 years", correct: false },
                { text: "About 25 years", correct: false }
            ],
            infoPanel: {
                title: "Hannibal\u2019s Long Italian Campaign",
                body: "Hannibal spent an astonishing 15 years on Italian soil (218\u2013203 BC) without ever being decisively defeated in Italy. He won spectacular victories, convinced several of Rome\u2019s Italian allies to defect, and marched to within sight of Rome\u2019s walls. Yet Rome refused to surrender. The city kept raising new armies, and its remaining allies held firm. Hannibal was finally recalled to Africa to face Scipio, ending one of history\u2019s most remarkable military campaigns.",
                podcastRef: "Episodes 12\u201316",
                funFact: "When Hannibal marched on Rome itself, the Romans were so confident in their walls that the land where his camp stood was reportedly sold at auction \u2014 and fetched full price. The ultimate display of Roman defiance."
            }
        }
    ]
});
