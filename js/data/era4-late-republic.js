// Era 4: The Late Republic Crisis (146-78 BC)
// Covers: The Gracchi, Marius, Sulla, the Social War, proscriptions
window.RomeGame.eras.push({
    id: 4,
    name: "The Late Republic Crisis",
    subtitle: "146 \u2013 78 BC",
    description: "Victory abroad brought crisis at home \u2014 reformers, generals, and civil war began tearing the Republic apart.",
    questions: [
        {
            id: "e4_q01",
            text: "Which two brothers tried to pass land reforms to help Rome\u2019s poor citizens, and were both killed for their efforts?",
            difficulty: "easy",
            choices: [
                { text: "Tiberius and Gaius Gracchus", correct: true },
                { text: "Romulus and Remus", correct: false },
                { text: "Scipio and Cato", correct: false },
                { text: "Marius and Sulla", correct: false }
            ],
            infoPanel: {
                title: "The Gracchi Brothers",
                body: "Tiberius Gracchus (tribune in 133 BC) and his younger brother Gaius (tribune in 123\u2013122 BC) tried to address a growing crisis: wealthy landowners had gobbled up public land while ordinary citizens were left with nothing. Both brothers proposed redistributing land to the poor. Both were killed by political opponents \u2014 Tiberius was beaten to death by senators, and Gaius died during a violent crackdown. Their deaths marked the beginning of political violence in Republican Rome.",
                podcastRef: "Episodes 19\u201320: The Gracchi",
                funFact: "Tiberius Gracchus was beaten to death with a chair leg by a group of senators \u2014 the first time political violence of this kind had occurred in the Republic. It set a terrible precedent."
            }
        },
        {
            id: "e4_q02",
            text: "What major social problem were the Gracchi brothers trying to solve?",
            difficulty: "easy",
            choices: [
                { text: "Wealthy elites had taken over public land, leaving common citizens landless", correct: true },
                { text: "Rome\u2019s army was too small to defend its borders", correct: false },
                { text: "Slaves were being freed in too great a number", correct: false },
                { text: "The Senate had too little power compared to the consuls", correct: false }
            ],
            infoPanel: {
                title: "The Land Crisis",
                body: "Rome\u2019s conquests had made the rich richer but devastated small farmers. While soldiers were away fighting wars for years, wealthy aristocrats bought up their land and worked it with slaves captured in those same wars. Returning veterans found themselves homeless. This created a dangerous class of landless poor crowding into Rome, and weakened the traditional citizen-soldier army that required property ownership to serve.",
                podcastRef: "Episode 19: The Gracchi",
                funFact: "Tiberius reportedly said: \u2018The wild beasts of Italy have their dens\u2026 but the men who fight and die for Italy enjoy only the air and light.\u2019 This speech helped rally support for his reforms."
            }
        },
        {
            id: "e4_q03",
            text: "Which Roman general reformed the army by allowing landless citizens to enlist, creating a professional military loyal to its commander?",
            difficulty: "easy",
            choices: [
                { text: "Gaius Marius", correct: true },
                { text: "Lucius Cornelius Sulla", correct: false },
                { text: "Scipio Africanus", correct: false },
                { text: "Pompey the Great", correct: false }
            ],
            infoPanel: {
                title: "The Marian Reforms",
                body: "Gaius Marius was a \u2018new man\u2019 (novus homo) \u2014 the first in his family to reach the consulship. He transformed the Roman army by opening enlistment to citizens without property, providing them with equipment from state funds. This created a professional army, but with a dangerous side effect: soldiers now depended on their general for pay, land, and retirement bonuses, making them loyal to him personally rather than to the state.",
                podcastRef: "Episode 22: The Marian Reforms",
                funFact: "Marius was elected consul an unprecedented seven times. The traditional limit was that you couldn\u2019t hold the office in consecutive years, but Marius shattered that convention during wartime emergencies."
            }
        },
        {
            id: "e4_q04",
            text: "Marius first made his name by defeating which North African king in a war from 112\u2013106 BC?",
            difficulty: "medium",
            choices: [
                { text: "Jugurtha of Numidia", correct: true },
                { text: "Hannibal of Carthage", correct: false },
                { text: "Cleopatra of Egypt", correct: false },
                { text: "Mithridates of Pontus", correct: false }
            ],
            infoPanel: {
                title: "The Jugurthine War",
                body: "Jugurtha, king of Numidia (modern Algeria), had bribed and manipulated Roman senators for years while fighting a war of succession. The war exposed shocking corruption in the Roman Senate. Marius was elected consul on a wave of popular anger and brought the war to a successful conclusion. However, it was actually his subordinate Sulla who captured Jugurtha through diplomacy \u2014 planting the seeds of a bitter rivalry between the two men.",
                podcastRef: "Episode 21: Marius",
                funFact: "Jugurtha reportedly said of Rome: \u2018A city for sale, and doomed to perish as soon as it finds a buyer.\u2019 His bribery of Roman officials was an open scandal."
            }
        },
        {
            id: "e4_q05",
            text: "What was Sulla\u2019s most shocking action in 88 BC, something no Roman had ever done before?",
            difficulty: "medium",
            choices: [
                { text: "He marched his army on Rome itself", correct: true },
                { text: "He declared himself a god", correct: false },
                { text: "He burned down the Senate house", correct: false },
                { text: "He abolished the consulship", correct: false }
            ],
            infoPanel: {
                title: "Sulla Marches on Rome",
                body: "When the tribune Sulpicius transferred a lucrative military command from Sulla to Marius, Sulla did the unthinkable: he turned his army around and marched on Rome. No Roman general had ever led an army against the city before. Most of his officers refused to follow, but his soldiers, loyal to their commander thanks to the Marian reforms, marched with him. Sulla seized the city and drove Marius into exile. This act shattered the Republic\u2019s most sacred taboo.",
                podcastRef: "Episode 24: Sulla",
                funFact: "When Sulla\u2019s officers refused to march on Rome, his common soldiers followed him anyway \u2014 a chilling demonstration of how Marius\u2019s army reforms had shifted soldier loyalty from state to general."
            }
        },
        {
            id: "e4_q06",
            text: "What title did Sulla take when he seized total control of Rome in 82 BC?",
            difficulty: "medium",
            choices: [
                { text: "Dictator", correct: true },
                { text: "Emperor", correct: false },
                { text: "King", correct: false },
                { text: "Tribune", correct: false }
            ],
            infoPanel: {
                title: "Sulla the Dictator",
                body: "After defeating Marius\u2019s supporters in a brutal civil war, Sulla had himself appointed dictator with no time limit \u2014 unlike the traditional six-month emergency dictatorship. He used his power to rewrite the Roman constitution, strengthening the Senate and weakening the tribunes. Then, astonishingly, he retired voluntarily in 79 BC. But the precedent he set \u2014 that a general could seize Rome by force \u2014 would be followed by others with less intention of giving power back.",
                podcastRef: "Episode 25: Sulla\u2019s Reforms",
                funFact: "When the young Julius Caesar was brought before Sulla, the dictator reportedly warned: \u2018In this boy I see many a Marius.\u2019 He was more right than he knew."
            }
        },
        {
            id: "e4_q07",
            text: "What were Sulla\u2019s \u2018proscriptions\u2019?",
            difficulty: "medium",
            choices: [
                { text: "Public lists of enemies who could be legally killed and their property confiscated", correct: true },
                { text: "New laws governing provincial administration", correct: false },
                { text: "Religious ceremonies to honour the gods", correct: false },
                { text: "Land grants given to retired soldiers", correct: false }
            ],
            infoPanel: {
                title: "The Proscriptions",
                body: "Sulla posted lists (proscriptiones) of his political enemies in the Forum. Anyone on the list could be killed by any citizen, and the killer would receive a reward. The victim\u2019s property was confiscated and sold cheaply to Sulla\u2019s supporters. An estimated 1,500\u20139,000 people were proscribed. It was state-sanctioned murder on an industrial scale, and it terrorised Rome. The young Marcus Crassus reportedly made much of his enormous fortune buying proscribed property.",
                podcastRef: "Episode 25: Sulla\u2019s Reforms",
                funFact: "People were sometimes added to the proscription lists not because they were political enemies, but simply because a supporter of Sulla wanted their house or farm."
            }
        },
        {
            id: "e4_q08",
            text: "The Social War (91\u201388 BC) was fought between Rome and which group?",
            difficulty: "hard",
            choices: [
                { text: "Rome\u2019s Italian allies who demanded Roman citizenship", correct: true },
                { text: "Slave gladiators who revolted in southern Italy", correct: false },
                { text: "Gallic tribes invading from the north", correct: false },
                { text: "Greek cities in southern Italy", correct: false }
            ],
            infoPanel: {
                title: "The Social War",
                body: "The name \u2018Social War\u2019 comes from \u2018socii\u2019 (allies), not from \u2018social\u2019 in the modern sense. Rome\u2019s Italian allies had fought alongside Roman legions for centuries but were denied the rights and privileges of Roman citizenship. When the tribune Marcus Livius Drusus was assassinated while trying to extend citizenship to the Italians, they revolted. The war was brutal, but Rome eventually won \u2014 and then granted citizenship to almost all Italians anyway, the very thing the allies had fought for.",
                podcastRef: "Episode 23: The Social War",
                funFact: "The Italian allies created their own rival state called \u2018Italia\u2019 with its own capital, Senate, and coinage \u2014 a mirror image of Rome. Their coins showed an Italian bull goring the Roman wolf."
            }
        },
        {
            id: "e4_q09",
            text: "Which Germanic tribes did Marius defeat in major battles at Aquae Sextiae (102 BC) and Vercellae (101 BC), saving Italy from invasion?",
            difficulty: "hard",
            choices: [
                { text: "The Cimbri and Teutones", correct: true },
                { text: "The Goths and Vandals", correct: false },
                { text: "The Franks and Saxons", correct: false },
                { text: "The Gauls and Belgae", correct: false }
            ],
            infoPanel: {
                title: "The Cimbrian War",
                body: "The Cimbri and Teutones were migrating Germanic tribes who had annihilated several Roman armies in the late 2nd century BC, causing panic in Rome not seen since Hannibal. Marius was elected consul repeatedly to deal with the crisis. Using his newly reformed army, he destroyed the Teutones at Aquae Sextiae in 102 BC and the Cimbri at Vercellae in 101 BC. These victories made Marius the most popular man in Rome and a hero of the common people.",
                podcastRef: "Episode 22: The Marian Reforms",
                funFact: "At the Battle of Aquae Sextiae, the Teutonic women reportedly killed their own children and then themselves rather than be enslaved \u2014 such was the desperation of a defeated migrating people."
            }
        },
        {
            id: "e4_q10",
            text: "What happened when the elderly Marius returned to Rome in 87 BC while Sulla was away fighting in the East?",
            difficulty: "hard",
            choices: [
                { text: "He seized the city and carried out a bloody massacre of his enemies", correct: true },
                { text: "He was welcomed peacefully and retired to the countryside", correct: false },
                { text: "He was captured and executed by the Senate", correct: false },
                { text: "He negotiated a peaceful power-sharing agreement with the Senate", correct: false }
            ],
            infoPanel: {
                title: "Marius\u2019s Revenge",
                body: "After being driven into exile by Sulla, the old and bitter Marius returned to Rome in 87 BC with an army, allied with the consul Cinna. What followed was a bloodbath. Marius\u2019s soldiers went on a killing spree through the streets, murdering political opponents and personal enemies. Severed heads were displayed on the Rostra in the Forum. Marius was elected to his seventh consulship but died just 17 days into his term \u2014 broken in body and spirit.",
                podcastRef: "Episode 24: Sulla",
                funFact: "During his exile, Marius had hidden in the swamps of Minturnae. When soldiers found him, the old general reportedly glared at them and shouted \u2018Do you dare kill Gaius Marius?\u2019 \u2014 and they fled in terror."
            }
        }
    ]
});
