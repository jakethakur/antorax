//
// Functions that are required in Villagers and Areas definition (i.e. to stop them being repeated throughout Areas and Villagers)
//

let BuyFunctions = {}; // functions that are called on specific items being bought
// item from role in areadata is passed in

// called upon samhain marks being given to snake man to buy an item
BuyFunctions.samhainItemBuy = function (item) {
	let messages = ["Yesssss! I need more markssss.", "More markssssss for my collection. Good job adventurer.", "I need more marksssss than that!"];
	Dom.chat.insert(Dom.chat.say("The Soothsssayer", messages[Random(0, messages.length-1)]));

	Dom.reputation.give("theSoothsayer", item.cost * 5);
}

BuyFunctions.closeDomPage = function () {
	Dom.elements.close.onclick();
}

//
// Villagers!
//

var Villagers = [
    {
        id: 0,
        images: {silvioStarstrike: {normal: "assets/npcs/silvioStarstrike.png"}},
        name: "Silvio Starstrike",
        level: 20,
        stats: {
            maxHealth: 150,
            walkSpeed: 160,
            defence: 5,
        },
        hostility: "friendly",
        exceptAreas: [
            "eaglecrestLoggingCamp",
        ],
        roles: [],
        chat: {
            notUnlockedRoles: "I bet you've never met a lunarlancer before! Be warned - I have a short temper.",
            chooseChat: "Don't say a false word. I could decimate you with my celestial power.",
            receiveTavernGood: "I see you've brought me some blessings from the stars. What do you mean I ordered them? Don't underestimate the power of the sky.",
        }
    },
    {
        id: 1,
        images: {darioHorfern: {normal: "assets/npcs/darioHorfern.png"}},
        name: "Dario Horfern",
        level: 10,
        stats: {
            maxHealth: 100,
            walkSpeed: 125,
            defence: 3,
        },
        hostility: "friendly",
        areas: [
            {area: "loggingCampTavern", probability: 0.5},
            "eaglecrestTavern",
        ],
        roles: [],
        chat: {
            notUnlockedRoles: {
                loggingCamp: "This place is small. I prefer it in Eaglecrest.",
                eaglecrest: "This would be my favourite place in the whole city... if it wasn't so dusty!",
            },
            chooseChat: "You can go away if you haven't brought me a drink.",
            receiveTavernGood: "I've been waiting for ages for this!",
        }
    },
    {
        id: 2,
        images: {gremaRoskin: {normal: "assets/npcs/gremaRoskin.png"}},
        name: "Grema Roskin",
        level: 15,
        stats: {
            maxHealth: 125,
            walkSpeed: 135,
            defence: 2,
        },
        hostility: "friendly",
        areas: [
            "loggingCampTavern",
            "eaglecrestTavern",
        ],
        roles: [],
        chat: {
            notUnlockedRoles: {
                loggingCamp: "Hm. Doesn't smell of fried beetroot here.",
                eaglecrest: "Smells of fried beetroot in here."
            },
            chooseChat: "Hello again, did you bring beetroot this time?",
            receiveTavernGood: "It's no fried beetroot, but it'll do. Thank you.",
        }
    },
    {
        id: 3,
        images: {feller: {normal: "assets/npcs/feller.png"}},
        name: "Logging Camp Feller",
        level: 4,
        stats: {
            maxHealth: 70,
            walkSpeed: 115,
            defence: 3,
        },
        hostility: "friendly",
        areas: [
            "loggingCampTavern",
            "eaglecrestLoggingCamp",
        ],
        roles: [],
        chat: {
            notUnlockedRoles: "<em>You</em> should try carrying these logs around all day!",
            chooseChat: "Can't talk for long, my back's playing up again.",
            receiveTavernGood: "Ah, thanks! Just hold these logs for a minute.",
        }
    },
    {
        id: 4,
        images: {treecutter: {normal: "assets/npcs/treecutter.png"}},
        name: "Logging Camp Treecutter",
        level: 7,
        stats: {
            maxHealth: 85,
            walkSpeed: 120,
            defence: 5,
        },
        hostility: "friendly",
        areas: [
            "loggingCampTavern",
            "eaglecrestLoggingCamp",
        ],
        roles: [],
        chat: {
            notUnlockedRoles: "Teper should try doing some work and not just ordering us around all the time.",
            chooseChat: "Y'know I cut the trees down to build this place: it's great to see my hard work put to good use!",
            receiveTavernGood: "Just the break I needed.",
        }
    },
    {
        id: 5,
        images: {robertHendman: {normal: "assets/npcs/robertHendman.png"}},
        name: "Robert Hendman",
        level: 12,
        stats: {
            maxHealth: 85,
            walkSpeed: 140,
            defence: 5,
        },
        hostility: "friendly",
        exceptAreas: [
            "eaglecrestLoggingCamp",
        ],
        roles: [],
        chat: {
            notUnlockedRoles: "Have you seen anyone playing Wizard's Lore before? Me neither. I bet those game boards are just for show.",
            chooseChat: "I'm going to head down to the Eaglecrest monastery soon. Would you like to come along too?",
            receiveTavernGood: `Thank you friend! A good day to you.`,
        }
    },
    {
        id: 6,
        images: {wilmaRedding: {normal: "assets/npcs/wilmaRedding.png"}},
        name: "Wilma Redding",
        level: 12,
        stats: {
            maxHealth: 85,
            walkSpeed: 140,
            defence: 5,
        },
        hostility: "friendly",
        exceptAreas: [
            "eaglecrestLoggingCamp",
        ],
        roles: [],
        chat: {
            notUnlockedRoles: "So many magic artifacts around, yet I can't seem to find a single one!",
            chooseChat: "Why would a fancy adventurer like you be talking to someone like me?",
            receiveTavernGood: "My order? And not a moment too soon!",
        }
    },
    {
        id: 7,
        images: {greenbeard: {normal: "assets/npcs/greenbeard.png"}},
        name: "Captain Greenbeard",
        level: 40,
        stats: {
            maxHealth: 250,
            walkSpeed: 130,
            defence: 8,
        },
        hostility: "friendly",
        exceptAreas: [
            "eaglecrestLoggingCamp",
        ],
        roles: [],
        chat: {
            notUnlockedRoles: "Yarr harr! Have ye spied me ship nearby?",
            chooseChat: "Ahoy there!",
            receiveTavernGood: "Nothin' better than a hearty supper at the tavern.",
        },
		canBeShown: function () {
			!Player.quests.activeQuestArray.includes("Overdraft");
		}
    },
    {
        id: 8,
        images: {gildoCleftbeard: {normal: "assets/npcs/gildoCleftbeard.png"}},
        name: "Gildo Cleftbeard",
        level: 14,
		corpseOnDeath: false,
        stats: {
            maxHealth: 120,
            walkSpeed: 123,
            defence: 6,
        },
        hostility: "friendly",
        exceptAreas: [
            "eaglecrestLoggingCamp",
        ],
        roles: [],
        chat: {
            notUnlockedRoles: {
                loggingCamp: "I would never go to that Nilbog! Wouldn't want to get my boots muddy. Oh, and the goblins, too.",
                eaglecrest: "I tip my hat to you.",
            },
            chooseChat: "Do you like my monocle?",
            receiveTavernGood: "Thank you, now I just have to be careful not to get any in my beard!",
			tenPercentHealth: "They're messing my beard up! Do something about it!",
			death: "My monocle...",
        },
		canBeShown: function () {
			Player.quests.completedQuestArray.includes("Overdraft");
		}
    },
    {
        id: 9,
        images: {eaglecrestGuard: {normal: "assets/npcs/eaglecrestGuard.png"}},
        name: "Eaglecrest Guard",
        level: 50,
        stats: {
            maxHealth: 300,
            walkSpeed: 170,
            defence: 20,
        },
        hostility: "friendly",
        exceptAreas: [
            "loggingCampTavern",
            "eaglecrestLoggingCamp",
        ],
        roles: [],
        chat: {
            notUnlockedRoles: "Becoming a guard has been my dream ever since I was a child. I admired their might!",
            chooseChat: "Sorry if I seem distracted, but I'm always on the lookout for criminals.",
            receiveTavernGood: "Thanks. I need this to keep my strength up.",
        }
    },
    {
        id: 10,
        images: {eaglecrestGuard2: {normal: "assets/npcs/eaglecrestGuard2.png"}},
        name: "Eaglecrest Guard",
        level: 50,
        stats: {
            maxHealth: 300,
            walkSpeed: 170,
            defence: 20,
        },
        hostility: "friendly",
        exceptAreas: [
            "loggingCampTavern",
            "eaglecrestLoggingCamp",
        ],
        roles: [],
        chat: {
            notUnlockedRoles: "Becoming a guard has been my dream ever since I was a child. I admired their might!",
            chooseChat: "Sorry if I seem distracted, but I'm always on the lookout for criminals.",
            receiveTavernGood: "Thanks. I need this to keep my strength up.",
        }
    },
    {
        id: 11,
        images: {alfonsoMurbry: {normal: "assets/npcs/alfonsoMurbry.png"}},
        name: "Alfonso Murbry",
        level: 18,
        stats: {
            maxHealth: 140,
            walkSpeed: 138,
            defence: 3,
        },
        hostility: "friendly",
        exceptAreas: [
            "eaglecrestLoggingCamp",
        ],
        roles: [],
        chat: {
            notUnlockedRoles: [
				{
					text: "Wow! Is that a golden slingshot? How did you get that!!",
					condition: function () {
						return Dom.inventory.check(18, "bow") > 0;
					}
				},
				{
					text: "Do you know how to get a golden slingshot? I've heard it fires three pellets at once!"
				},
			],
            chooseChat: "You know I once found a white present when I killed a toad with my slingshot. That's why you should always carry around a slingshot!",
            receiveTavernGood: "Excellent! Just in time.",
        }
    },
    {
        id: 12,
        images: {
            cat1Left: {normal: "assets/npcs/cat1.png"},
            cat1Right: {normal: "assets/npcs/cat1.png", flip: "vertical"},
        },
        rotationImages: {
            left: "cat1Left",
            right: "cat1Right"
        },
        name: "Cat",
        hideNameTag: true,
        areas: [
            "eaglecrest",
            "eaglecrestEast",
            "eaglecrestWest",
            "eaglecrestGraveyard",
            "eaglecrestElixirs",
            "eaglecrestPlains",
        ],
        roles: [],
        speciesTemplate: SpeciesTemplates.cat,
    },
    {
        id: 13,
        images: {
            cat2Left: {normal: "assets/npcs/cat2.png"},
            cat2Right: {normal: "assets/npcs/cat2.png", flip: "vertical"},
        },
        rotationImages: {
            left: "cat2Left",
            right: "cat2Right"
        },
        name: "Cat",
        hideNameTag: true,
        areas: [
            "eaglecrest",
            "eaglecrestEast",
            "eaglecrestWest",
            "eaglecrestGraveyard",
            "eaglecrestElixirs",
            "eaglecrestPlains",
        ],
        roles: [],
        speciesTemplate: SpeciesTemplates.cat,
    },
    {
        id: 14,
        images: {
            cat3Left: {normal: "assets/npcs/cat3.png"},
            cat3Right: {normal: "assets/npcs/cat3.png", flip: "vertical"},
        },
        rotationImages: {
            left: "cat3Left",
            right: "cat3Right"
        },
        name: "Cat",
        hideNameTag: true,
        areas: [
            "eaglecrest",
            "eaglecrestEast",
            "eaglecrestWest",
            "eaglecrestGraveyard",
            "eaglecrestElixirs",
            "eaglecrestPlains",
        ],
        roles: [],
        speciesTemplate: SpeciesTemplates.cat,
    },
    /*{
        id: 15,
        images: {
            cat4Left: {normal: "assets/npcs/cat4.png"},
            cat4Right: {normal: "assets/npcs/cat4.png", flip: "vertical"},
        },
        rotationImages: {
            left: "cat4Left",
            right: "cat4Right"
        },
        name: "Cat",
        hideNameTag: true,
        areas: [
            "eaglecrest",
            "eaglecrestEast",
            "eaglecrestWest",
            "eaglecrestGraveyard",
            "eaglecrestElixirs",
        ],
		rarity: 20, // ie 20 times less common (doesn't acc work yet)
        roles: [],
        speciesTemplate: SpeciesTemplates.cat,
    },*/
	{
        id: 15,
        images: {alysLoreworth: {normal: "assets/npcs/alysLoreworth.png"}},
		name: "Alys Loreworth, Lead Archaeologist",
		hostility: "friendly",
		level: 100,
		stats: {
			maxHealth: 550,
			defence: 5,
            walkSpeed: 131,
		},
        exceptAreas: [
            "eaglecrestLoggingCamp",
        ],
		roles: [
			{
				sold: [
					{item: Items.helm[8], cost: 15,}, // hat
				],
				role: "merchant",
				roleRequirement: function () {
					return Player.level >= MaxLevel;
				},
				shopGreeting: "A good archaeologist always has a hat. Oh. Do you not?",
			},
			{
				role: "identifier",
			},
		],
		chat: {
			notUnlockedRoles: {
				loggingCamp: "I can't believe they think the archaeology here is worth our time!",
				eaglecrest: "Can you not see I'm trying to work here? Come back later.",
			},
			chooseChat: "I'm over to the Ley Confluence soon. I'm just on a break.",
	        receiveTavernGood: "Thank you! We all need to look after ourselves every now and then.",
			// identifier
			identifierGreeting: "Let's see if you've found anything new.",
			noUnidentified: "There's realms of items for you to explore. Find some unidentified items!",
			identifyCommon: "And you think <em>this</em> will help our archaeology effort?",
			identifyUnique: "Oh, this one is of rather good quality.",
			identifyMythic: "It's not often I see one of these!",
			// merchant
			shopLeave: "Good luck on your travels.",
			inventoryFull: "Oh, you've got so many artefacts in your inventory that there's no space for this.",
			tooPoor: "Looks like you're not being paid enough for your efforts. Earn some gold and come back.",
			// event
			christmasGreeting: "Merry Christmas! I hope you've found lots of rare items this festive season. I heard there's some free ones in the city today.",
			antoraxDayGreeting: `We've been operating the Antorax Archaeology effort for ${Event.antoraxAge} years. Doesn't that call for celebration?`,
		},
	},
	{
        id: 16,
        images: {mailman: {normal: "assets/npcs/mailman.png"}},
		name: "Eaglecrest Mailman",
		hostility: "friendly",
		level: 10,
		stats: {
			maxHealth: 100,
			defence: 5,
            walkSpeed: 170,
		},
        areas: [
            "eaglecrest",
            "eaglecrestEast",
            "eaglecrestWest",
        ],
		chat: {
            notUnlockedRoles: "I recognise your face... have we met?",
		},
		roles: [{
			role: "text",
			chooseText: "I found an undelivered letter",
			chat: "Oh. Phew... I always try to get everything delivered on time, but when your",
			showCloseButton: true,
			forceChoose: true, // forces choose dom
			roleRequirement: function () {
				return Dom.inventory.check(Items.item[52]) || Dom.inventory.check(Items.item[53]) || Dom.inventory.check(Items.item[54]);
			},
		},
		{
			role: "merchant",
			chooseText: "I found an undelivered letter",
			shopGreeting: "A good archaeologist always has a hat. Oh. Do you not?",
			forceChoose: true, // forces choose dom
			sold: [
				{item: Items.helm[35], cost: 0, buyButtonText: "Choose this item", buyFunction: BuyFunctions.closeDomPage}, // buyFunction should close the page
				{item: Items.boots[17], cost: 0, buyButtonText: "Choose this item", buyFunction: BuyFunctions.closeDomPage},
				{item: Items.bag[8], cost: 0, buyButtonText: "Choose this item", buyFunction: BuyFunctions.closeDomPage},
			],
			roleRequirement: function () {
				return Player.level >= MaxLevel;
			},
		},],
	},
	{
        id: 17,
        images: {demolitionist: {normal: "assets/npcs/demolitionist.png"}},
		name: "Demolitionist Darrow",
		hostility: "friendly",
		level: 10,
		stats: {
			maxHealth: 100,
			defence: 7,
            walkSpeed: 141,
		},
        areas: [
            "eaglecrest",
            "eaglecrestEast",
            "eaglecrestWest",
        ],
		chat: {
            notUnlockedRoles: "Eaglecrest contracted me to blow up those damn sewers. Heard there was a real big rat problem there. Blast, why do I care, I'm just here to blow the damn place up.",
		},
	},
	{
        id: 17,
        images: {pieRomancer: {normal: "assets/npcs/pieRomancer.png"}},
		name: "Peto the Pyromancer",
		hostility: "friendly",
		level: 10,
		stats: {
			maxHealth: 100,
			defence: 3,
            walkSpeed: 124,
		},
        areas: [
            "eaglecrest",
            "eaglecrestEast",
            "eaglecrestWest",
            "eaglecrestTavern",
            "eaglecrestBank",
            "eaglecrestElixirs",
            "eaglecrestBazaar",
            "theForge",
            "eaglecrestGraveyard",
            "eaglecrestMonastery",
            "eaglecrestPlains",
        ],
		chat: {
            notUnlockedRoles: "Nothing to see here! Just an honest man going about his daily business <i>ahahaha</i>.",
			//This will do for now <i>haha</i>.. at least until I can get my hands on some pie...
			//What brings you here today? Nothing the matter, I hope <i>hehe</i>
		},
	},
	{
        id: 18,
        images: {crazyCatLady: {normal: "assets/npcs/crazyCatLady.png"}},
		name: "Crazy Cat Lady", // tbd give cat leads (sometimes?)
		hostility: "friendly",
		level: 20,
		stats: {
			maxHealth: 150,
			defence: 6,
            walkSpeed: 104,
		},
        areas: [
            "eaglecrest",
            "eaglecrestEast",
            "eaglecrestWest",
            "eaglecrestTavern",
            "eaglecrestBank",
            "eaglecrestElixirs",
            "eaglecrestBazaar", // no The Forge
            "eaglecrestGraveyard",
            "eaglecrestMonastery",
            "eaglecrestPlains",
        ],
		chat: {
            notUnlockedRoles: "Hmph. You're not a cat.",
		},
	},
];
