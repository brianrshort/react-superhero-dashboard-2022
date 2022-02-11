const ranks = [
    {
        range: [1,5],
        property: "Feeble"
    },
    {
        range: [6,10],
        property: "Poor"
    },
    {
        range: [11, 20],
        property: "Typical"
    },
    {
        range: [21, 40],
        property: "Good"
    },
    {
        range: [41, 60],
        property: "Excellent"
    },
    {
        range: [61,80],
        property: "Remarkable"
    },
    {
        range: [81,96],
        property: "Incredible"
    },
    {
        range: [97, 100],
        property: "Amazing"
    }
];

const abilities = [
    "Fighting",
    "Agility",
    "Strength",
    "Endurance",
    "Reason",
    "Intuition",
    "Psyche"
]



const powerRange = [
    {
        range: [1,12],
        property: 1
    },
    {
        range: [13,26],
        property: 2
    },
    {
        range: [27,41],
        property: 3
    },
    {
        range: [42,55],
        property: 4
    },
    {
        range: [56,66],
        property: 5
    },
    {
        range: [67,75],
        property: 6
    },
    {
        range: [76, 83],
        property: 7
    },
    {
        range: [84,89],
        property: 8
    },
    {
        range: [90,94],
        property: 9
    },
    {
        range: [95, 97],
        property: 10
    },
    {
        range: [98, 99],
        property: 12
    },
    {
        range: [100,100],
        property: 13
    }
]

const powerCategories = [
    {
        range: [1,5],
        property: "Defensive"
    },
    {
        range: [6,11],
        property: "Detection"
    },
    {
        range: [12,16],
        property: "Energy Control"
    },
    {
        range: [17,24],
        property: "Energy Emission"
    },
    {
        range: [25,29],
        property: "Fighting"
    },
    {
        range: [30,31],
        property: "Illusionary"
    },
    {
        range: [32,35],
        property: "Lifeform Control"
    },
    {
        range: [36,40],
        property: "Magic"
    },
    {
        range: [41,47],
        property: "Matter Control"
    },
    {
        range: [48,53],
        property: "Matter Conversion"
    },
    {
        range: [54,57],
        property: "Matter Creation"
    },
    {
        range: [58,71],
        property: "Mental Enhancement"
    },
    {
        range: [72,85],
        property: "Physical Enhancement"
    },
    {
        range: [86,88],
        property: "Power Control"
    },
    {
        range: [89,92],
        property: "Self-Alteration"
    },
    {
        range: [93,100],
        property: "Travel"
    },
]

const powerSelect = [
    {
        name: "Defensive",
        rolls: [
            {
                range: [1,15],
                property: "Body Armor"
            },
            {
                range: [16,20],
                property: "Force Field"
            },
            {
                range: [21,23],
                property: "Force Field vs. Emotion"
            },
            {
                range: [24,30],
                property: "Force Field vs. Energy"
            },
            {
                range: [31,35],
                property: "Force Field vs. Magic"
            },
            {
                range: [36,40],
                property: "Force Field vs. Mental"
            },
            {
                range: [41,48],
                property: "Force Field vs. Physical"
            },
            {
                range: [49,50],
                property: "Force Field vs. Power Manipulation"
            },
            {
                range: [51,53],
                property: "Force Field vs. Vampirism"
            },
            {
                range: [54,65],
                property: "Reflection"
            },
            {
                range: [66,70],
                property: "Resist Emotion"
            },
            {
                range: [71,77],
                property: "Resist Energy"
            },
            {
                range: [78,82],
                property: "Resist Magic"
            },
            {
                range: [83,87],
                property: "Resist Mental Attacks"
            },
            {
                range: [88,94],
                property: "Resist Physical Attacks"
            },
            {
                range: [95,97],
                property: "Resist Power Manipulation"
            },
            {
                range: [98,100],
                property: "Resist Vampirism"
            },
        ]
    },
    {
        name: "Detection",
        rolls: [
            {
                range: [1,2],
                property: "Abnormal Sensitivity"
            },
            {
                range: [3,4],
                property: "Circular Vision"
            },
            {
                range: [5,10],
                property: "Energy Detection"
            },
            {
                range: [11,14],
                property: "Environmental Awareness"
            },
            {
                range: [15,20],
                property: "Extradimensional Awareness"
            },
            {
                range: [21,28],
                property: "Hyper-Hearing"
            },
            {
                range: [29,34],
                property: "Hyper-Olfactory"
            },
            {
                range: [35,40],
                property: "Hyper-Touch"
            },
            {
                range: [41,42],
                property: "Life Detection"
            },
            {
                range: [43,44],
                property: "Magic Detection"
            },
            {
                range: [45,50],
                property: "Microscopic Vision"
            },
            {
                range: [51,54],
                property: "Penetration Vision"
            },
            {
                range: [55,56],
                property: "Power Detection"
            },
            {
                range: [57,58],
                property: "Psionic Detection"
            },
            {
                range: [59,59],
                property: "Radarsense"
            },
            {
                range: [60,62],
                property: "Sonar"
            },
            {
                range: [63,69],
                property: "Telescopic Vision"
            },
            {
                range: [70,79],
                property: "Thermal Vision"
            },
            {
                range: [80,90],
                property: "Tracking"
            },
            {
                range: [91,94],
                property: "True Sight"
            },
            {
                range: [95,98],
                property: "UV Vision"
            },
            {
                range: [99,100],
                property: "Weakness Detection"
            },
        ]
    },
    {
        name: "Energy Control",
        rolls: [
            {
                range: [1,7],
                property: "Absorption"
            },
            {
                range: [8,10],
                property: "Catalytic Control"
            },
            {
                range: [11,15],
                property: "Coldshaping"
            },
            {
                range: [16,18],
                property: "Darkforce Manipulation"
            },
            {
                range: [19,25],
                property: "Electrical Control"
            },
            {
                range: [26,28],
                property: "Energy Conversion"
            },
            {
                range: [29,31],
                property: "Energy Solidification"
            },
            {
                range: [32,36],
                property: "Energy Sponge"
            },
            {
                range: [37,38],
                property: "Energy Vampirism"
            },
            {
                range: [39,45],
                property: "Fire Control"
            },
            {
                range: [46,49],
                property: "Gravity Manipulation"
            },
            {
                range: [50,53],
                property: "Hard Radiation Control"
            },
            {
                range: [54,59],
                property: "Kinetic Control"
            },
            {
                range: [57,58],
                property: "Psionic Detection"
            },
            {
                range: [60,66],
                property: "Light Control"
            },
            {
                range: [67,73],
                property: "Magnetic Manipulation"
            },
            {
                range: [74,77],
                property: "Plasma Control"
            },
            {
                range: [78,80],
                property: "Radiowave Control"
            },
            {
                range: [81,84],
                property: "Shadowshaping"
            },
            {
                range: [85,90],
                property: "Sound Manipulation"
            },
            {
                range: [91,97],
                property: "Thermal Control"
            },
            {
                range: [98,100],
                property: "Vibration Control"
            },
        ]
    },
    {
        name: "Energy Emission",
        rolls: [
            {
                range: [1,10],
                property: "Cold Generation"
            },
            {
                range: [11,20],
                property: "Electrical Generation"
            },
            {
                range: [21,22],
                property: "Energy Doppleganger"
            },
            {
                range: [23,34],
                property: "Fire Generation"
            },
            {
                range: [35,37],
                property: "Hard Radiation"
            },
            {
                range: [38,42],
                property: "Heat"
            },
            {
                range: [43,52],
                property: "Kinetic Bolt"
            },
            {
                range: [53,62],
                property: "Light Emission"
            },
            {
                range: [63,72],
                property: "Magnetism"
            },
            {
                range: [73,75],
                property: "Plasma Generation"
            },
            {
                range: [76,78],
                property: "Radiowave Generation"
            },
            {
                range: [79,83],
                property: "Shadowcasting"
            },
            {
                range: [84,93],
                property: "Sonic Generation"
            },
            {
                range: [94,100],
                property: "Vibration"
            },
        ]
    },
    {
        name: "Fighting",
        rolls: [
            {
                range: [1,20],
                property: "Berserker"
            },
            {
                range: [21,60],
                property: "Martial Supremacy"
            },
            {
                range: [61,75],
                property: "Natural Weaponry"
            },
            {
                range: [76,80],
                property: "Weapons Creation"
            },
            {
                range: [81,100],
                property: "Weapons Tinkering"
            },
        ]
    },
    {
        name: "Illusory",
        rolls: [
            {
                range: [1,15],
                property: "Animate Image"
            },
            {
                range: [16,70],
                property: "Illusion Casting"
            },
            {
                range: [71, 85],
                property: "Illusory Invisibility"
            },
            {
                range: [86,100],
                property: "Illusory Duplication"
            },
        ]
    },
    {
        name: "Lifeform Control",
        rolls: [
            {
                range: [1,14],
                property: "Biophysical Control"
            },
            {
                range: [15,15],
                property: "Bio-Vampirism"
            },
            {
                range: [16,18],
                property: "Body Transformation (Others)"
            },
            {
                range: [19,26],
                property: "Emotion Control"
            },
            {
                range: [27,32],
                property: "Exorcism"
            },
            {
                range: [33,34],
                property: "Force Field vs. Hostiles"
            },
            {
                range: [35,35],
                property: "Forced Reincarnation"
            },
            {
                range: [36,39],
                property: "Grafting"
            },
            {
                range: [40,51],
                property: "Hypnotic Control"
            },
            {
                range: [52,60],
                property: "Mind Control"
            },
            {
                range: [61,62],
                property: "Mind Transferral"
            },
            {
                range: [63,65],
                property: "Neural Manipulation"
            },
            {
                range: [66,66],
                property: "Plague Carrier"
            },
            {
                range: [67,69],
                property: "Plant Control"
            },
            {
                range: [70,71],
                property: "Plant Growth"
            },
            {
                range: [72,80],
                property: "Sense Alteration"
            },
            {
                range: [81,83],
                property: "Shapechange (Others)"
            },
            {
                range: [84,89],
                property: "Sleep (induced)"
            },
            {
                range: [90,90],
                property: "Spirit Storage"
            },
            {
                range: [91,95],
                property: "Summoning"
            },
            {
                range: [96,100],
                property: "Undead Control"
            },
        ]
    },
    {
        name: "Magical",
        rolls: [
            {
                range: [1,8],
                property: "Enchantment"
            },
            {
                range: [9,15],
                property: "Energy Source"
            },
            {
                range: [16,17],
                property: "Internal Limbo"
            },
            {
                range: [18,25],
                property: "Magic Control"
            },
            {
                range: [26,28],
                property: "Magic Creation"
            },
            {
                range: [29,33],
                property: "Magic Domination"
            },
            {
                range: [34,39],
                property: "Magic Transferral"
            },
            {
                range: [40,41],
                property: "Magic Vampirism"
            },
            {
                range: [42,71],
                property: "Power Simulation"
            },
            {
                range: [72,77],
                property: "Reality Alteration"
            },
            {
                range: [78,79],
                property: "Spirit Vampirism"
            },
            {
                range: [80,95],
                property: "Sympathetic Magic"
            },
            {
                range: [96,100],
                property: "Warding"
            },
        ]
    },
    {
        name: "Matter Control",
        rolls: [
            {
                range: [1,5],
                property: "Bonding"
            },
            {
                range: [6,17],
                property: "Collection"
            },
            {
                range: [18,22],
                property: "Crystallization"
            },
            {
                range: [23,29],
                property: "Diminution"
            },
            {
                range: [30,39],
                property: "Disruption"
            },
            {
                range: [40,46],
                property: "Enlargement"
            },
            {
                range: [47,51],
                property: "Geoforce"
            },
            {
                range: [52,61],
                property: "Matter Animation"
            },
            {
                range: [62,68],
                property: "Machine Animation"
            },
            {
                range: [69,73],
                property: "Micro-Environment"
            },
            {
                range: [74,83],
                property: "Molding"
            },
            {
                range: [84,93],
                property: "Weather"
            },
            {
                range: [94,100],
                property: "Zombie Animation"
            },
        ]
    },
    {
        name: "Matter Conversion",
        rolls: [
            {
                range: [1,10],
                property: "Coloration"
            },
            {
                range: [11,25],
                property: "Combustion"
            },
            {
                range: [26,45],
                property: "Disintegration"
            },
            {
                range: [46,70],
                property: "Elemental Conversion"
            },
            {
                range: [71,80],
                property: "Ionization"
            },
            {
                range: [81,100],
                property: "Molecular Conversion"
            },
        ]
    },
    {
        name: "Matter Creation",
        rolls: [
            {
                range: [1,10],
                property: "Artifact Creation"
            },
            {
                range: [11,24],
                property: "Elemental Creation"
            },
            {
                range: [25,29],
                property: "Lifeform Creation"
            },
            {
                range: [30,35],
                property: "Mechanical Creation"
            },
            {
                range: [36,59],
                property: "Missile Creation"
            },
            {
                range: [60,69],
                property: "Molecular Creation"
            },
            {
                range: [70,88],
                property: "Spray"
            },
            {
                range: [89,100],
                property: "Webcasting"
            },
        ]
    },
    {
        name: "Mental Enhancement",
        rolls: [
            {
                range: [1,4],
                property: "Clairaudience"
            },
            {
                range: [5,8],
                property: "Clairvoyance"
            },
            {
                range: [9,11],
                property: "Communicate with Animals"
            },
            {
                range: [12,12],
                property: "Communicate with Cybernetics"
            },
            {
                range: [13,13],
                property: "Communicate with Non-Living"
            },
            {
                range: [14,15],
                property: "Communicate with Plants"
            },
            {
                range: [16,16],
                property: "Cosmic Awareness"
            },
            {
                range: [17,22],
                property: "Danger Sense"
            },
            {
                range: [23,23],
                property: "Dreamtravel"
            },
            {
                range: [24,26],
                property: "Empathy"
            },
            {
                range: [27,27],
                property: "Free Spirit"
            },
            {
                range: [28,31],
                property: "Hallucinations"
            },
            {
                range: [32,40],
                property: "Hyper-Intelligence"
            },
            {
                range: [41,47],
                property: "Hyper-Invention"
            },
            {
                range: [48,48],
                property: "Incarnation Awareness"
            },
            {
                range: [49,58],
                property: "Iron Will"
            },
            {
                range: [59,65],
                property: "Linguistics"
            },
            {
                range: [66,66],
                property: "Mental Duplication"
            },
            {
                range: [67,67],
                property: "Mental Invisibility"
            },
            {
                range: [68,69],
                property: "Mental Probe"
            },
            {
                range: [70,72],
                property: "Mind Blast"
            },
            {
                range: [73,73],
                property: "Mind Drain"
            },
            {
                range: [74,74],
                property: "Postcognition"
            },
            {
                range: [75,75],
                property: "Precognition"
            },
            {
                range: [76,76],
                property: "Psionic Vampirism"
            },
            {
                range: [77,78],
                property: "Remote Sensing"
            },
            {
                range: [79,79],
                property: "Sensory Link"
            },
            {
                range: [80,80],
                property: "Serial Immortality"
            },
            {
                range: [81,81],
                property: "Speechthrowing"
            },
            {
                range: [82,85],
                property: "Telekinesis"
            },
            {
                range: [86,86],
                property: "Telelocation"
            },
            {
                range: [87,96],
                property: "Telepathy"
            },
            {
                range: [97,100],
                property: "Total Memory"
            },
        ]
    },
    {
        name: "Physical Enhancement",
        rolls: [
            {
                range: [1,14],
                property: "Armor Skin"
            },
            {
                range: [15,28],
                property: "Body Resistance"
            },
            {
                range: [29,30],
                property: "Chemical Touch"
            },
            {
                range: [31,33],
                property: "Digestive Adaptation"
            },
            {
                range: [34,40],
                property: "Hyper-Speed"
            },
            {
                range: [41,42],
                property: "Hypnotic Voice"
            },
            {
                range: [43,45],
                property: "Lung Adaptability"
            },
            {
                range: [46,47],
                property: "Pheromones"
            },
            {
                range: [48,60],
                property: "Regeneration"
            },
            {
                range: [61,62],
                property: "Self-Revival"
            },
            {
                range: [63,67],
                property: "Self-Sustenance"
            },
            {
                range: [68,71],
                property: "Stealth"
            },
            {
                range: [72,76],
                property: "Suspended Animation"
            },
            {
                range: [77,78],
                property: "True Invulnerability"
            },
            {
                range: [79,82],
                property: "Vocal Control"
            },
            {
                range: [83,90],
                property: "Waterbreathing"
            },
            {
                range: [91,100],
                property: "Water Freedom"
            },
        ]
    },
    {
        name: "Power Control",
        rolls: [
            {
                range: [1,8],
                property: "Power Control"
            },
            {
                range: [9,12],
                property: "Power Creation"
            },
            {
                range: [13,18],
                property: "Domination"
            },
            {
                range: [19,23],
                property: "Duplication"
            },
            {
                range: [24,37],
                property: "Energy Source"
            },
            {
                range: [38,39],
                property: "Energy Source Creation"
            },
            {
                range: [40,49],
                property: "Focus"
            },
            {
                range: [50,55],
                property: "Gestalt"
            },
            {
                range: [56,60],
                property: "Nemesis"
            },
            {
                range: [61,64],
                property: "Power Transferral"
            },
            {
                range: [65,73],
                property: "Power Vampirism"
            },
            {
                range: [74,83],
                property: "Residual Absorption"
            },
            {
                range: [84,96],
                property: "Selection"
            },
            {
                range: [97,100],
                property: "Weakness Creation"
            },
        ]
    },
    {
        name: "Self-Alteration",
        rolls: [
            {
                range: [1,2],
                property: "Age Shift"
            },
            {
                range: [3,16],
                property: "Alter Ego"
            },
            {
                range: [17,18],
                property: "Anatomical Separation"
            },
            {
                range: [19,20],
                property: "Animal Transformation"
            },
            {
                range: [21,26],
                property: "Animal Mimicry"
            },
            {
                range: [27,30],
                property: "Blending"
            },
            {
                range: [31,34],
                property: "Body Adaptation"
            },
            {
                range: [35,42],
                property: "Body Transformation"
            },
            {
                range: [43,48],
                property: "Body Coating"
            },
            {
                range: [49,52],
                property: "Chemical Mimicry"
            },
            {
                range: [53,56],
                property: "Energy Body"
            },
            {
                range: [57,62],
                property: "Energy Sheath"
            },
            {
                range: [63,64],
                property: "Evolution"
            },
            {
                range: [65,74],
                property: "Imitation"
            },
            {
                range: [75,82],
                property: "Invisibility"
            },
            {
                range: [83,84],
                property: "Physical Gestalt"
            },
            {
                range: [85,86],
                property: "Plant Mimicry"
            },
            {
                range: [87,88],
                property: "Prehensile Hair"
            },
            {
                range: [89,90],
                property: "Self-Duplication"
            },
            {
                range: [91,92],
                property: "Self-Vegetation"
            },
            {
                range: [93,98],
                property: "Shapeshifting"
            },
            {
                range: [99,100],
                property: "Spirit Gestalt"
            },
        ]
    },
    {
        name: "Travel",
        rolls: [
            {
                range: [1,2],
                property: "Astral Body"
            },
            {
                range: [3,6],
                property: "Carrier Wave"
            },
            {
                range: [7,10],
                property: "Dimension Travel"
            },
            {
                range: [11,12],
                property: "Energy Path"
            },
            {
                range: [13,14],
                property: "Floating Disc"
            },
            {
                range: [15,20],
                property: "Gateway"
            },
            {
                range: [21,26],
                property: "Gliding"
            },
            {
                range: [27,28],
                property: "Hyper-Digging"
            },
            {
                range: [29,34],
                property: "Hyper-Leaping"
            },
            {
                range: [35,42],
                property: "Hyper-Running"
            },
            {
                range: [43,46],
                property: "Hyper-Swimming"
            },
            {
                range: [47,52],
                property: "Levitation"
            },
            {
                range: [53,56],
                property: "Rocket"
            },
            {
                range: [57,58],
                property: "Skywalk"
            },
            {
                range: [59,64],
                property: "Spiderclimb"
            },
            {
                range: [65,72],
                property: "Teleport Self"
            },
            {
                range: [73,76],
                property: "Teleport Others"
            },
            {
                range: [77,78],
                property: "Telereformation"
            },
            {
                range: [79,80],
                property: "Time Travel"
            },
            {
                range: [81,82],
                property: "Troubleseeker"
            },
            {
                range: [83,93],
                property: "True Flight"
            },
            {
                range: [94,97],
                property: "Water Walking"
            },
            {
                range: [98,100],
                property: "Whirlwind"
            },
        ]
    },
]

function makeARoll() {
    return Math.ceil(Math.random() * 100);
}


function checkForEach(variable, random, array) {
    array.forEach(obj => {
        let newRange = []; 
        for (var i = obj.range[0]; i <= obj.range[1]; i++) {
            newRange.push(i);
        }
        if (newRange.includes(random)) {
                variable = obj.property;
        }
    })
    //console.log(variable);
    return variable;
}


function makePower() {
    const rand = Math.ceil(Math.random() * 100);
    //console.log(rand);
    let powerLength;
    powerLength = checkForEach(powerLength, rand, powerRange);
    //console.log(powerLength);
    let powerSet = [];
    for (var i = 1; i <= powerLength; i++) {
        let object = {};
        let randOne = makeARoll();
        let cat; 
        cat = checkForEach(cat, randOne, powerCategories);
        object.category = cat; 
        
        let randTwo = makeARoll();
        let powerName;
        powerSelect.forEach(obj => {
            if (cat === obj.name) {
                powerName = checkForEach(powerName,randTwo, obj.rolls);
            }
        });
        object.power = powerName;   
        
        let randThree = makeARoll();
        let powerLevel;
        powerLevel = checkForEach(powerLevel, randThree, ranks);
        object.powerLevel = powerLevel;
        //console.log(object);
        powerSet.push(object);
    }
    //console.log(powerSet);
    return powerSet;
}

function makeWizard() {
    const obj = {};
    const abilityObj = {};
    for (var i = 0; i < abilities.length; i++) {
        const rand = makeARoll();
        let rank;
        rank = checkForEach(rank, rand, ranks);
        //console.log(rank);
        const ability = abilities[i];
        abilityObj[ability] = rank;
    }
    obj.abilities = abilityObj;
    let powers = makePower();
    //console.log(powers);
    obj.powers = powers;
    console.log(obj);
}

makeWizard();
//makePower();