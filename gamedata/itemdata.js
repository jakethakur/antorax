// please put the name of any image that has not been made yet as what it would be

var Items = {
	helm: [
		{
			id: 0,
			name: "Test Helm 1",
			type: "helm",
			image: "assets/items/helm/0.png",
			stats: {},
		},
		{
			// unequipped item
			id: 1,
			name: "",
			type: "helm",
			image: "assets/items/helm/1.png",
			stats: {},
		},
		{
			id: 2,
			name: "Worn Leather Helm",
			type: "helm",
			image: "assets/items/helm/2.png",
			tier: 1,
			obtain: ["unidentified", "merchant"],
			area: ["loggingCamp", "eaglecrest"],
			rarity: "common",
			sellPrice: 1,
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp", "eaglecrest"],
			stats: {
				defence: 2,
			},
		},
		{
			id: 3,
			name: "Goblin Forged Helm",
			type: "helm",
			image: "assets/items/helm/3.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["loggingCamp"],
			rarity: "unique",
			sellPrice: 3,
			lore: "Only a goblin could forge armour that's too large for them, but fits humans perfectly.",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp"],
			set: 3,
			stats: {
				defence: 3,
				looting: 10,
			},
		},
		{
			id: 4,
			name: "Siege Helm",
			type: "helm",
			image: "assets/items/helm/4.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["loggingCamp"],
			rarity: "unique",
			sellPrice: 3,
			lore: "Knightly armour (mages and archers also welcome).",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp"],
			set: 2,
			stats: {
				defence: 3,
				healthRegen: 0.15,
			},
		},
		{
			id: 5,
			name: "War Ogre's Helm",
			type: "helm",
			image: "assets/items/helm/5.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["loggingCamp"],
			rarity: "mythic",
			sellPrice: 5,
			lore: "You have no idea how often those mammoth tusks need to be glued back on!",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp"],
			stats: {
				defence: 3,
				reflection: 50,
			},
		},
		{
			id: 6,
			name: "The Ocean Warrior's Helm",
			type: "helm",
			image: "assets/items/helm/6.png",
			tier: 1,
			obtain: ["fishing"],
			area: ["loggingCamp"],
			rarity: "mythic",
			sellPrice: 5,
			lore: "The Ocean Warrior came from the sea<br>His blade was sharp, no-one could stop his quest",
			obtainText: "Can be uncovered from a 'Sunken Chest' from a Tier 1 fishing area.",
			set: 4,
			stats: {
				defence: 3,
			},
			chooseStats: {
				criticalChance: 5,
				dodgeChance: 5,
				reflection: 15,
			},
		},
		{
			id: 7,
			name: "Santa Hat",
			type: "helm",
			image: "assets/items/helm/7.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["loggingCamp", "eaglecrest"],
			rarity: "unique",
			lore: "Comes with Santa's experience.",
			obtainText: "Can be bought from a merchant during the Christmas event.",
			event: "Christmas",
			sellPrice: 4,
			stats: {
				defence: 2,
				looting: 20,
				xpBonus: 50,
			},
		},
		{
			id: 8,
			name: "Archaeologist's Hat",
			type: "helm",
			image: "assets/items/helm/8.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "unique",
			lore: "No matter how accomplished, you're not a proper archaeologist until you have a hat.",
			obtainText: "Can be bought from an accomplished archaeologist.",
			sellPrice: 3,
			stats: {
				defence: 1,
				looting: 30,
			},
		},
		{
			id: 9,
			name: "Master Archaeologist's Hat",
			type: "helm",
			image: "assets/items/helm/9.png",
			tier: 1,
			obtain: ["other"],
			area: [],
			rarity: "mythic",
			lore: "Only owned by the most accomplished of archaeologists.",
			obtainText: "Only awarded to the most accomplished of archaeologists...",
			sellPrice: 20, // TBC
			stats: {
				defence: 2,
				looting: 100,
			},
		},
		{
			id: 10,
			name: "Party Hat",
			type: "helm",
			image: "assets/items/helm/10.png",
			tier: 1,
			obtain: ["other"],
			area: [],
			rarity: "mythic",
			lore: "Obtained from Antorax's third birthday, 2019.",
			obtainText: "Was sent in the mail on Antorax Day 2019.",
			sellPrice: 3, // equal to the age of Antorax :)
			stats: {
				defence: 3,
			},
			functionText: "Leaves a trail of confetti",
			trail: {
				width: 15,
				height: 7,
				colour: ["#19AB21", "#CC1DC2"], // class Particle chooses random colour from array
				removeIn: 1000,
				rotation: "random",
				variance: 50, // variance in position (in x/y axis in one direction from player)
			},
			trailName: "partyHatConfetti",
			event: "Antorax",
			limitedEdition: true,
		},
		{
			id: 11,
			name: "Umbrella Hat",
			type: "helm",
			image: "assets/items/helm/11.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["loggingCamp"],
			rarity: "unique",
			lore: "Stylish, practical, great for a clown costume.",
			obtainText: "Can be bought from a merchant when it is raining.",
			sellPrice: 3,
			stats: {
				defence: 1,
			},
			conditionalStats: [
				{
					text: "Gives the following stats when raining:",
					condition: function () {
						return Weather.weatherType === "rain";
					},
					stats: {
						reflection: 50,
						xpBonus: 50,
					},
				},
			],
		},
		{
			id: 12,
			name: "Night Owl Mask",
			type: "helm",
			image: "assets/items/helm/12.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "common",
			obtainText: "Can be bought from a mask seller.",
			sellPrice: 1,
			stats: {
				dodgeChance: 30,
			},
		},
		{
			id: 13,
			name: "Light Idol Mask",
			type: "helm",
			image: "assets/items/helm/13.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "common",
			obtainText: "Can be bought from a mask seller.",
			sellPrice: 1,
			stats: {
				healthRegen: 0.75,
			},
		},
		{
			id: 14,
			name: "Dragon Flame Mask",
			type: "helm",
			image: "assets/items/helm/14.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "common",
			obtainText: "Can be bought from a mask seller.",
			sellPrice: 1,
			stats: {
				criticalChance: 20,
			},
		},
		{
			id: 15,
			name: "Bear Mask",
			type: "helm",
			image: "assets/items/helm/15.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "common",
			obtainText: "Can be bought from a mask seller or from the Bear Zoo.",
			sellPrice: 1,
			stats: {
				maxHealth: 15,
			},
		},
		{
			id: 16,
			name: "Vampiric Mask",
			type: "helm",
			image: "assets/items/helm/16.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "common",
			obtainText: "Can be bought from a mask seller during Samhain.",
			event: "Samhain",
			sellPrice: 1,
			stats: {
				lifesteal: 40,
			},
		},
		{
			id: 17,
			name: "Solar Baron Mask",
			type: "helm",
			image: "assets/items/helm/17.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "common",
			obtainText: "Can be bought from a mask seller.",
			sellPrice: 1,
			stats: {
				looting: 50,
			},
		},
		{
			id: 18,
			name: "Feathered Hawk Mask",
			type: "helm",
			image: "assets/items/helm/18.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "common",
			obtainText: "Can be bought from a mask seller.",
			sellPrice: 1,
			stats: {
				walkSpeed: 40,
				reloadTime: -100,
			},
		},
		{
			id: 19,
			name: "Eaglecrestian Forged Helm",
			type: "helm",
			image: "assets/items/helm/19.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "common",
			sellPrice: 2,
			lore: "",
			obtainText: "Can be bought from 'The Forge' shop in Eaglecrest.",
			set: 5,
			stats: {
				defence: 3,
			},
		},
		{
            id: 20,
            name: "Tinhat",
            type: "helm",
            image: "assets/items/helm/20.png",
            tier: 1,
            obtain: ["quest"],
            area: ["loggingCamp"],
            rarity: "unique",
            sellPrice: 3,
            lore: "Pan shot!",
            obtainText: "Received as a reward for completing the 'A Tale of Two Twintops' questline.",
            stats: {
                defence: 2,
                reflection: 20,
                dodgeChance: 10,
            },
        },
		{
            id: 21,
            name: "Gold-Plated Monocle",
            type: "helm",
            image: "assets/items/helm/21.png",
            tier: 1,
            obtain: ["merchant"],
            area: ["eaglecrest"],
            rarity: "unique",
            sellPrice: 20,
            lore: "Fashion: 100%",
            obtainText: "Can be bought from the 'Eaglecrest Bazaar' shop.",
            stats: {},
        },
		{
			id: 22,
			name: "Barebones Helm",
			type: "helm",
			image: "assets/items/helm/22.png",
			tier: 1,
			obtain: ["boss"],
			area: ["loggingCamp"],
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtainText: "Can be looted from 'Barebones' Nkkja, a boss in The Nilbog during Blood Moons.",
			event: "Samhain",
			stats: {
				defence: 2,
				damagePercentage: 15,
			},
		},
		{
			id: 23,
			name: "Pumpkin Hat",
			type: "helm",
			image: "assets/items/helm/23.png",
			tier: 1,
			obtain: ["other"],
			area: [],
			rarity: "common",
			sellPrice: 1,
			lore: "",
			obtainText: "Sent in the mail during Samhain.",
			event: "Samhain",
			stats: {
				defence: 2,
				maxHealth: 10,
			},
		},
		{
			id: 24,
			name: "Skeleton Mask",
			type: "helm",
			image: "assets/items/helm/24.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "common",
			obtainText: "Can be bought from a mask seller during Samhain.",
			event: "Samhain",
			sellPrice: 1,
			stats: {
				defence: -5,
				damagePercentage: 25,
			},
		},
		{
			id: 25,
			name: "Menace Mask",
			type: "helm",
			image: "assets/items/helm/25.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "common",
			obtainText: "Can be bought from a mask seller during Samhain.",
			event: "Samhain",
			sellPrice: 2,
			stats: {
				walkSpeed: -30,
				criticalChance: 30,
			},
		},
		{
			id: 26,
			name: "Fishing Hat",
			type: "helm",
			image: "assets/items/helm/26.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["loggingCamp"],
			rarity: "unique",
			obtainText: "Can be bought from a fisher using fishing seals.",
			sellPrice: 3,
			stats: {
				defence: 1,
				fishingSkill: 25,
			},
		},
		{
			id: 27,
			name: "Lovely Mask",
			type: "helm",
			image: "assets/items/helm/27.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "common",
			obtainText: "Can be bought from a mask seller during The Feast of Saint Valentine.",
			event: "Valentine",
			limitedEdition: true, // change this when event next comes round
			sellPrice: 2,
			stats: {
				damagePercentage: -35,
				healthRegen: 2,
			},
		},
		{
			id: 28,
			name: "Party Hat",
			type: "helm",
			image: "assets/items/helm/10.png", // same art as initial antorax day
			tier: 1,
			obtain: ["other"],
			area: [],
			rarity: "mythic",
			lore: "Obtained from Antorax's seventh birthday, 2023.",
			obtainText: "Was sent in the mail on Antorax Day 2023.",
			sellPrice: 7, // equal to the age of Antorax :)
			stats: {
				defence: 7,
			},
			functionText: "Leaves a trail of confetti",
			trail: {
				width: 15,
				height: 7,
				colour: ["#19AB21", "#CC1DC2"], // class Particle chooses random colour from array
				removeIn: 1000,
				rotation: "random",
				variance: 50, // variance in position (in x/y axis in one direction from player)
			},
			trailName: "partyHatConfetti",
			event: "Antorax",
			limitedEdition: true,
		},
		{
			id: 29,
			name: "Flower Crown",
			type: "helm",
			image: "assets/items/helm/29.png",
			tier: 1,
			obtain: ["boss"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 3,
			lore: "The sun will never shine on a garden grown from power.",
			obtainText: "Can be looted from Baron Foxglove, a boss in the Eaglecrest Plains.",
			stats: {
				maxHealth: 5,
				healingPower: 50,
				poisonStrength: 50
			},
		},
		{
			id: 30,
			name: "Blessed Headpiece of the River Idol",
			type: "helm",
			image: "assets/items/helm/30.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Plains.",
			unidentifiedArea: ["eaglecrest"],
			set: 6,
			stats: {
				defence: 3,
				maxHealth: 10,
			},
		},
		{
			id: 31,
			name: "Leystone Helm",
			type: "helm",
			image: "assets/items/helm/31.png",
			imageArchaeology: "assets/items/helm/31archaeology.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Plains.",
			unidentifiedArea: ["eaglecrest"],
			stats: {
				defence: 2,
			},
			functionText: "Grants +10% Attack Damage for 3 seconds after you take damage.", // tbd
			archaeologyAdditionalStats: ["damagePercentage"],
			onDamaged: function () {
				// give strength status effect to player
				Game.statusEffects.attackDamage({
					target: Game.hero,
					effectTitle: "Ley-Infused Armour",
					damageIncrease: 10,
					time: 3,
				});
			},
		},
		{
			id: 32,
			name: "Farfeather Headdress",
			type: "helm",
			image: "assets/items/helm/32.png",
			imageArchaeology: "assets/items/helm/32archaeology.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "mythic",
			sellPrice: 5,
			lore: "Carried by the rivers from the great lake of Aztopia.",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Plains.",
			unidentifiedArea: ["eaglecrest"],
			stats: {
				defence: 1,
				rangeMultiplier: 100,
			},
		},
		{
			id: 33,
			name: "Pícaro",
			type: "helm",
			image: "assets/items/helm/33.png",
			tier: 1,
			obtain: ["other"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 5,
			lore: "",
			obtainText: "???",
			stats: {
				stealing: 150,
				walkSpeed: 40,
			},
		},
		{
			id: 34,
			name: "Mechanical Santa Mask",
			type: "helm",
			image: "assets/items/helm/34.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			event: "Christmas",
			rarity: "common",
			sellPrice: 1,
			lore: "",
			obtainText: "Can be bought from a mask seller during Christmas",
			stats: {
				exploding: 1
			},
		},
		{
			id: 35,
			name: "Post-Hat",
			type: "helm",
			image: "assets/items/helm/35.png",
			tier: 1,
			obtain: ["other"],
			area: ["eaglecrest"],
			rarity: "mythic",
			sellPrice: 7,
			lore: "Hats are so passé..",
			obtainText: "Can be obtained by turning in lost letters to an Eaglecrest mail carrier.",
			stats: {
				defence: 3,
				enemyAggro: -75,
			},
		},
		{
			id: 36,
			name: "Sprout Hat",
			type: "helm",
			image: "assets/items/helm/36.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			event: "Christmas",
			rarity: "unique",
			sellPrice: 1,
			lore: "Sprouts are TRADITIONAL!!",
			obtainText: "Can be bought from the Eaglecrest Bazaar during Christmas.",
			stats: {
				defence: 2,
				enemyAggro: -40,
			},
		},
		{
			id: 37,
			name: "Jester Hat",
			type: "helm",
			image: "assets/items/helm/37.png",
			imageArchaeology: "assets/items/helm/37archaeology.png",
			tier: 1,
			obtain: ["tbd"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtainText: "tbd.",
			stats: {
				defence: 2,
			},
		},
		{
			id: 38,
			name: "Common Hat",
			type: "helm",
			image: "assets/items/helm/38.png",
			tier: 1,
			obtain: ["tbd"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtainText: "tbd.",
			stats: {
				defence: 2,
			},
		},
		{
			id: 39,
			name: "Rock Hat",
			type: "helm",
			image: "assets/items/helm/39.png",
			tier: 2,
			obtain: ["tbd"],
			area: ["caves"],
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtainText: "tbd.",
			stats: {
				defence: 2,
			},
		},
		{
			id: 40,
			name: "Tinkerer's Hat",
			type: "helm",
			image: "assets/items/helm/40.png",
			tier: 2,
			obtain: ["tbd"],
			area: ["caves"],
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtainText: "tbd.",
			stats: {
				defence: 2,
			},
		},
		{
			id: 41,
			name: "Orzoth Hat",
			type: "helm",
			image: "assets/items/helm/41.png",
			tier: 2,
			obtain: ["tbd"],
			area: ["caves"],
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtainText: "tbd.",
			stats: {
				defence: 2,
			},
		},
		{
			id: 43,
			name: "Thlock's Hat",
			type: "helm",
			image: "assets/items/helm/43.png",
			tier: 2,
			obtain: ["tbd"],
			area: ["caves"],
			rarity: "mythic",
			sellPrice: 5,
			lore: "",
			obtainText: "tbd.",
			stats: {
				defence: 2,
			},
		},
		{
			id: 44,
			name: "Pie Hat",
			type: "helm",
			image: "assets/items/helm/44.png",
			tier: 1,
			obtain: ["quest"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtainText: "???",
			stats: {
				defence: 1,
				healthRegen: 1, // ? idk abt effect
				enemyAggro: 40,
			},
		},
	],
	chest: [
		{
			id: 0,
			name: "Test Chestplate 1",
			type: "chest",
			image: "assets/items/chest/0.png",
			stats: {},
		},
		{
			// unequipped item
			id: 1,
			name: "",
			type: "chest",
			image: "assets/items/chest/1.png",
			stats: {},
		},
		{
			id: 2,
			name: "Worn Leather Tunic",
			type: "chest",
			image: "assets/items/chest/2.png",
			tier: 1,
			obtain: ["unidentified", "merchant"],
			area: ["loggingCamp", "eaglecrest"],
			rarity: "common",
			sellPrice: 1,
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp", "eaglecrest"],
			stats: {
				defence: 3,
			},
		},
		{
			id: 3,
			name: "Goblin Forged Chestplate",
			type: "chest",
			image: "assets/items/chest/3.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["loggingCamp"],
			rarity: "unique",
			sellPrice: 3,
			lore: "Only a goblin could forge armour that's too large for them, but fits humans perfectly.",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp"],
			set: 3,
			stats: {
				defence: 4,
				looting: 10,
			},
		},
		{
			id: 4,
			name: "Siege Chestplate",
			type: "chest",
			image: "assets/items/chest/4.png",
			tier: 1,
			obtain: ["unidentified", "quest"],
			area: ["loggingCamp"],
			rarity: "unique",
			sellPrice: 3,
			lore: "Knightly armour (mages and archers also welcome).",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp"],
			set: 2,
			stats: {
				defence: 4,
				healthRegen: 0.15,
			},
		},
		{
			id: 5,
			name: "The Tattered Knight's Chestplate",
			type: "chest",
			image: "assets/items/chest/5.png",
			tier: 1,
			obtain: ["unidentified", "boss"],
			area: ["loggingCamp"],
			rarity: "mythic",
			sellPrice: 5,
			lore: "Legend says the tattered knight is still wandering around shirtless.",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp"],
			stats: {
				defence: 12,
				walkSpeed: -40,
			},
		},
		{
			id: 6,
			name: "The Ocean Warrior's Chestplate",
			type: "chest",
			image: "assets/items/chest/6.png",
			tier: 1,
			obtain: ["fishing"],
			area: ["loggingCamp"],
			rarity: "mythic",
			sellPrice: 5,
			lore: "He ruled the land with great ferocity<br>'till one day he arrived at Eaglecrest",
			obtainText: "Can be uncovered from a 'Sunken Chest' from a Tier 1 fishing area.",
			set: 4,
			stats: {
				defence: 4,
			},
			chooseStats: {
				criticalChance: 5,
				dodgeChance: 5,
				reflection: 15,
			},
		},
		{
			id: 7,
			name: "Ghost Sheet",
			type: "chest",
			image: "assets/items/chest/7.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 3,
			lore: "Evil haunted sheet. Also doubles as an evil haunted blanket.",
			obtainText: "Can be bought from a merchant during the Samhain event.",
			event: "Samhain",
			stats: {
				defence: 1,
				dodgeChance: 25,
			},
		},
		{
			id: 8,
			name: "Eaglecrestian Forged Chestplate",
			type: "chest",
			image: "assets/items/chest/8.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "common",
			sellPrice: 3,
			lore: "",
			obtainText: "Can be bought from 'The Forge' shop in Eaglecrest.",
			set: 5,
			stats: {
				defence: 4,
			},
		},
		{
			id: 9,
			name: "Loggers' Flannel",
			type: "chest",
			image: "assets/items/chest/9.png",
			tier: 1,
			obtain: ["boss"],
			area: ["loggingCamp"],
			event: "Samhain",
			rarity: "unique",
			lore: "A fashion favourite of loggers and Samhain bosses alike.",
			sellPrice: 3,
			obtainText: "Can be looted from Statue of Marshall Sheridan, a boss in The Nilbog during Blood Moons.",
			stats: {
				defence: 2,
			},
			conditionalStats: [
				{
					text: "Gives the following stats when outdoors:",
					condition: function () {
						return !Areas[Game.areaName].indoors;
					},
					stats: {
						walkSpeed: 40,
						healthRegen: 0.25,
					},
				},
			],
		},
		{
			id: 10,
			name: "Barebones Windbreaker",
			type: "chest",
			image: "assets/items/chest/10.png",
			tier: 1,
			obtain: ["boss"],
			area: ["loggingCamp"],
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtainText: "Can be looted from 'Barebones' Nkkja, a boss in The Nilbog during Blood Moons.",
			event: "Samhain",
			stats: {
				defence: 2,
				walkSpeed: 40,
				windShield: true
			},
		},
		{
			id: 11,
			name: "Antorak",
			type: "chest",
			image: "assets/items/chest/11.png",
			tier: 1,
			obtain: ["other"],
			area: [],
			rarity: "unique",
			lore: "",
			obtainText: "Awarded after logging on for 7 days in a row.",
			sellPrice: 7,
			stats: {
				defence: 4,
				looting: 20,
				stealing: 20,
				xpBonus: 30,
				walkSpeed: 40,
			},
		},
		{
			id: 12,
			name: "Blessed Chestpiece of the River Idol",
			type: "chest",
			image: "assets/items/chest/12.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Plains.",
			unidentifiedArea: ["eaglecrest"],
			set: 6,
			stats: {
				defence: 4,
				maxHealth: 10,
			},
		},
		{
			id: 13,
			name: "Leywoven Chestplate",
			type: "chest",
			image: "assets/items/chest/13.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Plains.",
			unidentifiedArea: ["eaglecrest"],
			stats: {
				defence: 2,
			},
			functionText: "Grants +10% Defence for 5 seconds after you take damage.", // tbd
			archaeologyAdditionalStats: ["damagePercentage"],
			onDamaged: function () {
				// give strength status effect to player
				Game.statusEffects.defence({
					target: Game.hero,
					effectTitle: "Ley-Infused Armour",
					defenceIncrease: 10,
					time: 5,
				});
			},
		},
		{
			id: 14,
			name: "City Guard Hauberk",
			type: "chest",
			image: "assets/items/chest/14.png",
			tier: 1,
			obtain: ["other"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtainText: "Not yet obtainable. Check back soon!",
			stats: {
				defence: 6,
			},
			set: 7,
		},
		{
			id: 15,
			name: "Kadaverous Chestplate",
			type: "chest",
			image: "assets/items/chest/15.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "mythic",
			sellPrice: 5,
			lore: "An artefact brimming with sinister dark magic… not that you needed to be told that. Just look at it!",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Plains.",
			unidentifiedArea: ["eaglecrest"],
			stats: {
				defence: 4,
			},
			conditionalStats: [
				{
					text: "Grants the following stats when near a corpse:",
					condition: function () {
						for (let i = 0; i < Game.allCharacters.length; i++) {
							if (Game.allCharacters[i].isCorpse && Game.areNearby(Game.allCharacters[i], Game.hero, 300)) { // potentially tweak this 300 range?
								// visual indicator
								Game.hero.addTrail("kadaverous", {
									width: 3,
									height: 3,
									colour: ["#A1A1A1", "#DB0000", "#B78585", "F8FCC0", "FBFFC3"], // class Particle chooses random colour from array
									removeIn: 1000,
									rotation: 0,
									variance: 50, // variance in position (in x/y axis in one direction from player)
									intensity: 5, // no. of particles every 100ms
									light: true,
								});
								return true;
							}
						}
						// remove visual indicator if there was one
						Game.hero.removeTrail("kadaverous");
						return false;
					},
					stats: {
						healthRegen: 1.5,
						walkSpeed: 40,
					},
				},
			],
			archaeologyNotes: "The player must be within 300px from a corpse for the effect to trigger.",
		},
	],
	greaves: [
		{
			id: 0,
			name: "Test Greaves 1",
			type: "greaves",
			image: "assets/items/greaves/0.png",
			stats: {},
		},
		{
			// unequipped item
			id: 1,
			name: "",
			type: "greaves",
			image: "assets/items/greaves/1.png",
			stats: {},
		},
		{
			id: 2,
			name: "Worn Leather Trousers",
			type: "greaves",
			image: "assets/items/greaves/2.png",
			tier: 1,
			obtain: ["unidentified", "merchant"],
			area: ["loggingCamp", "eaglecrest"],
			rarity: "common",
			sellPrice: 1,
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp", "eaglecrest"],
			stats: {
				defence: 3,
			},
		},
		{
			id: 3,
			name: "Goblin Forged Greaves",
			type: "greaves",
			image: "assets/items/greaves/3.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["loggingCamp"],
			rarity: "unique",
			sellPrice: 3,
			lore: "Only a goblin could forge armour that's too large for them, but fits humans perfectly.",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp"],
			set: 3,
			stats: {
				defence: 4,
				looting: 10,
			},
		},
		{
			id: 4,
			name: "Siege Greaves",
			type: "greaves",
			image: "assets/items/greaves/4.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["loggingCamp"],
			rarity: "unique",
			sellPrice: 3,
			lore: "Knightly armour (mages and archers also welcome).",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp"],
			set: 2,
			stats: {
				defence: 4,
				healthRegen: 0.15,
			},
		},
		{
			id: 5,
			name: "Weirwood Carved Greaves",
			type: "greaves",
			image: "assets/items/greaves/5.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["loggingCamp"],
			rarity: "mythic",
			sellPrice: 5,
			lore: "You'll find none of those cheap MDF greaves from the Weirwood.",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp"],
			stats: {
				defence: 4,
				dodgeChance: 15,
				healthRegen: 0.25,
			},
		},
		{
			id: 6,
			name: "The Ocean Warrior's Leggings",
			type: "greaves",
			image: "assets/items/greaves/6.png",
			tier: 1,
			obtain: ["fishing"],
			area: ["loggingCamp"],
			rarity: "mythic",
			sellPrice: 5,
			lore: "A hero met him, he was pure and brave<br>They fought and fought, a duel for all mankind",
			obtainText: "Can be uncovered from a 'Sunken Chest' from a Tier 1 fishing area.",
			set: 4,
			stats: {
				defence: 4,
			},
			chooseStats: {
				criticalChance: 5,
				dodgeChance: 5,
				reflection: 15,
			},
		},
		{
			id: 7,
			name: "Eaglecrestian Forged Leggings",
			type: "greaves",
			image: "assets/items/greaves/7.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "common",
			sellPrice: 3,
			lore: "",
			obtainText: "Can be bought from 'The Forge' shop in Eaglecrest.",
			set: 5,
			stats: {
				defence: 4,
			},
		},
		{
			id: 8,
			name: "tbd",
			type: "greaves",
			image: "assets/items/greaves/8.png",
			tier: 1,
			lore: "",
			stats: {
				defence: 4,
			},
			limitedEdition: true, // temp
		},
		{
			id: 9,
			name: "Blessed Legpiece of the River Idol",
			type: "greaves",
			image: "assets/items/greaves/9.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Plains.",
			unidentifiedArea: ["eaglecrest"],
			set: 6,
			stats: {
				defence: 4,
				maxHealth: 10,
			},
		},
		{
			id: 10,
			name: "River Dredging Dungarees",
			type: "greaves",
			image: "assets/items/greaves/10.png",
			imageArchaeology: "assets/items/greaves/10archaeology.png",
			tier: 1,
			obtain: ["other"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtainText: "Not yet obtainable. Check back soon!",
			stats: {
				defence: 3,
				swimSpeed: 30,
			},
			conditionalStats: [
				{
					text: "Grants the following stats when in water:",
					condition: function () {
						return map.isSlowTileAtXY(Game.hero.x, Game.hero.y) === "water";
					},
					stats: {
						defence: 5,
					},
				},
			],
			set: 8,
		},
		{
			id: 11,
			name: "City Guard Chausses",
			type: "greaves",
			image: "assets/items/greaves/11.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Plains.",
			unidentifiedArea: ["eaglecrest"],
			stats: {
				defence: 5,
			},
			set: 7,
		},
		{
			id: 12,
			name: "Honeyed Hivemind",
			type: "greaves",
			image: "assets/items/greaves/12.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "mythic",
			sellPrice: 5,
			lore: "Dignan's old trousers",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Plains.",
			unidentifiedArea: ["eaglecrest"],
			functionText: "Produces <i>Hive Honey</i> which restores 10 health",
			stats: {
				defence: 4,
				healingPower: 25,
			},
			intervalEffect: {
				function: function () {
					Dom.inventory.give(Items.consumable[32]);
				},
				time: 60, // seconds
			},
		},
		{
			id: 13,
			name: "Tiger Hide Trousers",
			type: "greaves",
			image: "assets/items/greaves/13.png",
			tier: 1,
			obtain: ["boss"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 5,
			lore: "The tigerskin feels oddly spacious, as if it came from something much larger.",
			obtainText: "Can be looted from a sufficiently skilled Coyote Pack Wrangler in Eaglecrest Plains.",
			stats: {
				defence: 4,
				reflection: 30,
			},
		},
	],
	boots: [
		{
			id: 0,
			name: "Test Boots 1",
			type: "boots",
			image: "assets/items/boots/0.png",
			stats: {},
		},
		{
			// unequipped item
			id: 1,
			name: "",
			type: "boots",
			image: "assets/items/boots/1.png",
			stats: {},
		},
		{
			id: 2,
			name: "Logging Boots",
			type: "boots",
			image: "assets/items/boots/2.png",
			tier: 1,
			obtain: ["quest"],
			area: ["loggingCamp"],
			rarity: "common",
			sellPrice: 1,
			lore: "Protects you from splinters. And goblins!",
			obtainText: "Can be received as a reward for completing the quest 'To the Logging Camp'.",
			stats: {
				defence: 1,
				walkSpeed: 30,
			},
		},
		{
			id: 3,
			name: "Worn Leather Boots",
			type: "boots",
			image: "assets/items/boots/3.png",
			tier: 1,
			obtain: ["unidentified", "merchant"],
			area: ["loggingCamp", "eaglecrest"],
			rarity: "common",
			sellPrice: 1,
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp", "eaglecrest"],
			stats: {
				defence: 2,
			},
		},
		{
			id: 4,
			name: "Goblin Forged Boots",
			type: "boots",
			image: "assets/items/boots/4.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["loggingCamp"],
			rarity: "unique",
			sellPrice: 3,
			lore: "Only a goblin could forge armour that's too large for them, but fits humans perfectly.",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp"],
			set: 3,
			stats: {
				defence: 3,
				looting: 10,
			},
		},
		{
			id: 5,
			name: "Siege Boots",
			type: "boots",
			image: "assets/items/boots/5.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["loggingCamp"],
			rarity: "unique",
			sellPrice: 3,
			lore: "Knightly armour (mages and archers also welcome).",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp"],
			set: 2,
			stats: {
				defence: 3,
				healthRegen: 0.15,
			},
		},
		{
			id: 6,
			name: "Marshall Teper's Lost Boots",
			type: "boots",
			image: "assets/items/boots/6.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["loggingCamp"],
			rarity: "mythic",
			sellPrice: 5,
			lore: "Marshall Teper's favourite boots. Maybe you could return them for a reward?",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp"],
			stats: {
				defence: 2,
				criticalChance: 5,
				dodgeChance: 5,
				healthRegen: 0.15,
				looting: 10,
				walkSpeed: 30,
			},
		},
		{
			id: 7,
			name: "James Boots",
			type: "boots",
			image: "assets/items/boots/7.png",
			tier: 1,
			obtain: ["other"],
			area: [],
			rarity: "unique",
			sellPrice: 3,
			lore: "'James just feels like poison' - Peter",
			obtainText: "Sent in the mail on James Day.",
			event: "James",
			stats: {
				defence: 4,
				swimSpeed: -50,
			},
		},
		{
			id: 8,
			name: "The Ocean Warrior's Boots",
			type: "boots",
			image: "assets/items/boots/8.png",
			tier: 1,
			obtain: ["fishing"],
			area: ["loggingCamp"],
			rarity: "mythic",
			sellPrice: 5,
			lore: "The villain lost, he fled back to the waves<br>His set of armour simply left behind",
			obtainText: "Can be uncovered from a 'Sunken Chest' from a Tier 1 fishing area.",
			set: 4,
			stats: {
				defence: 3,
			},
			chooseStats: {
				criticalChance: 5,
				dodgeChance: 5,
				reflection: 15,
			},
		},
		{
			id: 9,
			name: "Ice Skates",
			type: "boots",
			image: "assets/items/boots/9.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["loggingCamp", "eaglecrest"],
			rarity: "unique",
			lore: "These should keep you happy while there are less fish around.",
			obtainText: "Can be bought from a merchant during the Christmas event.",
			event: "Christmas",
			sellPrice: 4,
			stats: {
				defence: 3,
				iceSpeed: 30,
			},
		},
		{
			id: 10,
			name: "Wellington Boots",
			type: "boots",
			image: "assets/items/boots/10.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["loggingCamp"],
			rarity: "unique",
			lore: "Great for jumping in puddles and lakes.",
			obtainText: "Can be bought from a merchant when it is raining.",
			sellPrice: 3,
			stats: {
				defence: 1,
			},
			conditionalStats: [
				{
					text: "Gives the following stats when raining:",
					condition: function () {
						return Weather.weatherType === "rain";
					},
					stats: {
						walkSpeed: 50,
						swimSpeed: 50,
					},
				},
			],
		},
		{
			id: 11,
			name: "Eaglecrestian Forged Boots",
			type: "boots",
			image: "assets/items/boots/11.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "common",
			sellPrice: 2,
			lore: "",
			obtainText: "Can be bought from 'The Forge' shop in Eaglecrest.",
			set: 5,
			stats: {
				defence: 3,
			},
		},
		{
			id: 12,
			name: "Slippers of Undying Love",
			type: "boots",
			image: "assets/items/boots/12.png",
			tier: 1,
			obtain: ["other"],
			area: [],
			rarity: "unique",
			sellPrice: 3,
			lore: "Love is in the air~",
			obtainText: "Sent in the mail during The Feast of Saint Valentine.",
			event: "Valentine",
			stats: {
				defence: 1,
				healthRegen: 1,
			},
		},
		{
			id: 13,
			name: "Blessed Footpieces of the River Idol",
			type: "boots",
			image: "assets/items/boots/13.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Plains.",
			unidentifiedArea: ["eaglecrest"],
			set: 6,
			stats: {
				defence: 3,
				maxHealth: 10,
			},
		},
		{
			id: 14,
			name: "River Dredging Overshoes",
			type: "boots",
			image: "assets/items/boots/14.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Plains.",
			unidentifiedArea: ["eaglecrest"],
			stats: {
				defence: 2,
				swimSpeed: 40,
			},
			conditionalStats: [
				{
					text: "Grants the following stats when in water:",
					condition: function () {
						return map.isSlowTileAtXY(Game.hero.x, Game.hero.y) === "water";
					},
					stats: {
						dodgeChance: 20,
					},
				},
			],
			set: 8,
		},
		{
			id: 15,
			name: "Iglak's Wretched Boots",
			type: "boots",
			image: "assets/items/boots/15.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "mythic",
			sellPrice: 5,
			lore: "",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Plains.",
			unidentifiedArea: ["eaglecrest"],
			functionText: "Lays a trail of gloop which slows enemies by 50% and makes them deal 30% less damage.",
			stats: {
				defence: 4,
			},
			onWalk: function () { // only triggered when on the ground
				for (let i = 0; i < Game.allThings.length; i++) {
					if (Game.allThings[i].name === "Iglak Gloop" && Game.distance(Game.allThings[i], Game.hero.footHitbox) < 62) {
						return false;
					}
				}
				// not touching any gloop
				let gloopObj = { // tbd use Dom.inventory.loadItemRequiredImages !!!!!!!!!!!!!
					map: map,
					image: "gloop", // use the projectile system to load in a special image
					name: "Iglak Gloop",
					x: Game.hero.x,
					y: Game.hero.y + 40,
					type: "things",
					z: -1,
					removeIn: 10,
					checkTouching: [{ // check for enemies
						arrayName: "enemies",
						isTouchingFunction: function (index, id) {
							// check that enemy is not "in the air" (i.e. charging for goblin king, or being displaced)
							if (this.expand === 1) {
								Game.statusEffects.walkSpeed({
									target: Game.enemies[index],
									effectTitle: "Gloop",
									speedIncrease: -50,
									time: 0.5,
									imageName: "gloop",
									effectStack: "refresh", // effect refreshes (doesn't extend time above 0.5s)
									extraInfo: {showTime: false,}
								});
								Game.statusEffects.attackDamage({
									target: Game.enemies[index],
									effectTitle: "Gloop",
									damageIncrease: -30,
									time: 0.5,
									imageName: "gloop",
									effectStack: "refresh", // effect refreshes (doesn't extend time above 0.5s)
									extraInfo: {showTime: false,},
									hidden: true, // only one of these needs to be shown
								});
							}
						},
					}],
				};
				Game.things.push(new Thing(gloopObj));
				return true;
			},
		},
		{
			id: 16,
			name: "Boots of Ostara",
			type: "boots",
			image: "assets/items/boots/16.png",
			tier: 1,
			obtain: ["boss"],
			area: ["eaglecrest"],
			rarity: "mythic",
			sellPrice: 5,
			lore: "",
			obtainText: "Can be looted from Baron Foxglove, a boss in the Eaglecrest Plains.",
			functionText: "Creates a trail of flowers on grass!",
			stats: {
				defence: 3,
				walkSpeed: 30,
			},
			conditionalStats: [
				{
					text: "Gives the following stats when standing on grass:",
					condition: function () {
						return false; //tbd
					},
					stats: {
						healingPower: 50,
					},
				},
			],
			onWalk: function () { // only triggered when on ground
				// flower
			},
		},
		{
			id: 17,
			name: "Boots of the Busy",
			type: "boots",
			image: "assets/items/boots/17.png",
			tier: 1,
			obtain: ["other"],
			area: ["eaglecrest"],
			rarity: "mythic",
			sellPrice: 7,
			lore: "An adventurer's work is never done!",
			obtainText: "Can be obtained by turning in lost letters to an Eaglecrest mail carrier.",
			stats: {
				defence: 2,
				walkSpeed: 50,
			},
		},
	],
	sword: [
		{
			id: 0,
			name: "Test sword 1",
			type: "sword",
			image: "assets/items/sword/0.png",
			stats: {},
		},
		{
			// unequipped item
			id: 1,
			name: "",
			type: "sword",
			image: "assets/items/sword/1.png",
			stats: {},
		},
		{
			id: 2,
			name: "Basic Sword",
			type: "sword",
			image: "assets/items/sword/2.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["loggingCamp"],
			rarity: "common",
			sellPrice: 1,
			obtainText: "Can be bought from a merchant in the Fishers' Valley.",
			stats: {
				damage: 2,
				defence: 1,
			},
			quest: function () {
                return !Player.quests.completedQuestArray.includes("Retrieval of Logs");
            },
		},
		{
			id: 3,
			name: "Crooked Wooden Sword",
			type: "sword",
			image: "assets/items/sword/3.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["loggingCamp", "eaglecrest"],
			rarity: "common",
			sellPrice: 1,
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp", "eaglecrest"],
			stats: {
				damage: 3,
				defence: 2,
			},
		},
		{
			id: 4,
			name: "Poisoned Blade",
			type: "sword",
			image: "assets/items/sword/4.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["loggingCamp"],
			rarity: "unique",
			sellPrice: 3,
			lore: "Your hero power gives this... oh, wrong game.",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp"],
			stats: {
				damage: 3,
				poisonX: 1.5,
				poisonY: 3,
				defence: 3,
			},
		},
		{
			id: 5,
			name: "Splintered Sword",
			type: "sword",
			image: "assets/items/sword/5.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["loggingCamp"],
			rarity: "unique",
			sellPrice: 3,
			lore: "It might be falling apart, but those splinters hurt!",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp"],
			stats: {
				damage: 4,
				criticalChance: 10,
				defence: 3,
			},
		},
		{
			id: 6,
			name: "Blade of the Orc Raiders",
			type: "sword",
			image: "assets/items/sword/6.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["loggingCamp"],
			rarity: "mythic",
			sellPrice: 5,
			lore: "Not to be confused with the hit movie 'Raiders of the Lost Orc'.",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp"],
			stats: {
				damage: 4,
				stun: 0.4,
				defence: 4,
			},
		},
		{
			id: 7,
			name: "Samhain Scythe",
			type: "sword",
			image: "assets/items/sword/7.png",
			imageArchaeology: "assets/items/sword/7archaeology.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "unique",
			lore: "9/10 murderous farmers would recommend it to their friends.",
			obtainText: "Can be bought from a merchant during the Samhain event.",
			event: "Samhain",
			sellPrice: 4,
			stats: {
				damage: 3,
				lifesteal: 25,
				defence: 3,
			},
			projectile: "slashBlood",
			projectileAdjust: {x: 20, y: 20},
		},
		{
			id: 8,
			name: "Permafrost",
			type: "sword",
			image: "assets/items/sword/8.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["loggingCamp", "eaglecrest"],
			rarity: "unique",
			lore: "Is that a fish in there?!",
			obtainText: "Can be bought from a merchant during the Christmas event.",
			event: "Christmas",
			sellPrice: 4,
			stats: {
				damage: 8,
				reloadTime: 500,
				defence: 5,
			},
			projectile: "slashFrost",
			projectileAdjust: {x: 20, y: 20},
		},
		{
			id: 9,
			name: "Icicle",
			type: "sword",
			image: "assets/items/sword/9.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["loggingCamp", "eaglecrest"],
			rarity: "common",
			lore: "This ice doesn't last forever.",
			obtainText: "Can be bought from a merchant during the Christmas event.",
			event: "Christmas",
			sellPrice: 2,
			stats: {
				damage: 4,
				defence: 2,
			},
			projectile: "slashFrost",
			projectileAdjust: {x: 0, y: 0},
			deleteIf: function () {
				return Event.event !== "Christmas";
			},
			deleteIfMessage: "It's not snowy any more! Your <strong>Icicle</strong> melted.",
		},
		{
			id: 10,
			name: "Fishy",
			type: "sword",
			image: "assets/items/sword/10.png",
			limitedEdition: true,
			allClasses: true,
			tier: 1,
			obtain: ["other"],
			area: [],
			rarity: "common",
			lore: "A fin-tastic weapon.",
			obtainText: "Can be uncovered during a rare fish rain storm.",
			event: "Fish",
			sellPrice: 1,
			stats: {
				damage: 2,
				knockback: 150,
			},
			projectile: "slashWater",
			projectileAdjust: {x: 0, y: 0},
			onKill: function () {
				// enemies killed with fish achievement
				User.progress.enemiesKilledWithFish = Increment(User.progress.enemiesKilledWithFish);
			}
		},
		{
			id: 11,
			name: "The Eternity Glove",
			type: "sword",
			image: "assets/items/sword/11.png",
			tier: 1,
			obtain: ["other"],
			area: [],
			rarity: "mythic",
			lore: "Perfectly balanced, as all things should be.",
			obtainText: "Was obtained by logging in during the 'Heroes of Antorax' event.",
			event: "Heroes",
			sellPrice: 5,
			stats: {
				damage: 4,
			},
			classStats: {
				k: {
					defence: 5,
				},
				m: {
					maxDamage: 9,
				},
			},
			allClasses: true, // can be equipped by all classes
			allProjectiles: true, // acts as a different weapon based on the class
			functionText: "Can be upgraded by finding and combining with rare gemstone fragments.",
			gemstones: [], // array of item names for gemstones that have been added to the item
			conditionalChooseStats: [
				{
					damagePercentage: 100,
					condition: function (item) {
						// purple gemstone fragment
						return item.gemstones.includes("Amethyst Fragment");
					},
				},
				{
					walkSpeed: 90,
					condition: function (item) {
						// blue gemstone fragment
						return item.gemstones.includes("Aquamarine Fragment");
					},
				},
				{
					hex: 25,
					condition: function (item) {
						// red gemstone fragment
						return item.gemstones.includes("Ruby Fragment");
					},
				},
				{
					maxHealth: 100,
					condition: function (item) {
						// orange gemstone fragment
						return item.gemstones.includes("Jasper Fragment");
					},
				},
				{
					healthRegen: 2,
					condition: function (item) {
						// green gemstone fragment
						return item.gemstones.includes("Emerald Fragment");
					},
				},
				{
					stun: 0.3,
					condition: function (item) {
						// yellow gemstone fragment
						return item.gemstones.includes("Citrine Fragment");
					},
				},
			],
			onOpen: function (inventoryPosition, itemName) { // adding a fragment
				let item = Dom.inventory.getItemFromPosition(inventoryPosition); // takes into account item being equpped
				if (!item.gemstones.includes(itemName)) {

					// add the gemstone
					item.gemstones.push(itemName);

					// increase sell price
                    item.sellPrice++;

					// change image and functionText if all 6 gemstones have been added
					if (item.gemstones.length === 6) {
						item.image = "assets/items/sword/11complete.png";
						if (!isNaN(inventoryPosition)) {
							document.getElementById("itemInventory").getElementsByTagName("td")[inventoryPosition].getElementsByTagName("img")[0].src = item.image;
						}
						else {
							document.getElementById(inventoryPosition).getElementsByTagName("img")[0].src = item.image;
						}
						item.functionText = undefined;
					}
					return true; // consume gemstone
				}
				else {
					// that gemstone was already added
					Dom.alert.page("Your Eternity Glove already has that gemstone adjoined to it.", 0, undefined, "inventoryPage");
					return false; // don't consume gemstone
				}
			},
			limitedEdition: true,
		},
		{
			id: 12,
			name: "Eaglecrestian Forged Sword",
			type: "sword",
			image: "assets/items/sword/12.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "common",
			sellPrice: 3,
			lore: "",
			obtainText: "Can be bought from 'The Forge' shop in Eaglecrest.",
			stats: {
				damage: 4,
				defence: 3,
			},
		},
		{
			id: 13,
			name: "Mop",
			type: "sword",
			image: "assets/items/sword/13.png",
			uncollectable: true,
			allClasses: true,
			tier: 1,
			projectile: "slashWater",
			obtain: ["other"],
			area: [],
			rarity: "common",
			quest: true,
			removeOnAbandon: "Cleaning the Floor",
			stats: {
				damage: 1,
			},
		},
		{
			id: 14,
			name: "Double-Bladed Sword",
			type: "sword",
			image: "assets/items/sword/14.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "unique",
			lore: "Not really useful unless you're fighting off two vampires that were huddled together...",
			obtainText: "Can be bought from the 'Eaglecrest Bazaar' shop.",
			sellPrice: 3,
			stats: {
				damage: 4,
			},
		},
		{
			id: 15,
			name: "Marshall Sheridan's Logging Axe",
			type: "sword",
			image: "assets/items/sword/15.png",
			tier: 1,
			obtain: ["boss"],
			area: ["loggingCamp"],
			event: "Samhain",
			rarity: "mythic",
			lore: "Sheridan may have been a legendary marshall, but he was never any good at cleaning his axe.",
			obtainText: "Can be looted as a Knight from Statue of Marshall Sheridan, a boss in The Nilbog during Blood Moons.",
			sellPrice: 5,
			stats: {
				damage: 4,
			},
			functionText: "Gives -15% defence to hit enemies for 0.75 seconds (this effect stacks)",
			onHit: function (enemy) {
				// reduce enemy's defence
				Game.statusEffects.defence({
					target: enemy,
					effectTitle: "Vulnerability",
					defenceIncrease: -15,
					time: 0.75,
					effectStack: "multiply"
				});
			},
			projectile: "slashBlood",
		},
		{
			id: 16,
			name: "Net",
			type: "sword",
			image: "assets/items/sword/16.png",
			projectile: "slash",
			uncollectable: true,
			allClasses: true,
			tier: 1,
			obtain: ["other"],
			area: [],
			rarity: "common",
			quest: true,
			removeOnAbandon: "Snakes and the City",
			stats: {
				damage: 1,
			},
		},
		{
			id: 17,
			name: "Coyote's Bite",
			type: "sword",
			image: "assets/items/sword/17.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 3,
			lore: "This tooth seems too large to have come from a coyote.",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Plains.",
			unidentifiedArea: ["eaglecrest"],
			stats: { //tba
				damage: 3,
				defence: 3,
				reflection: 50,
			},
		},
		{
			id: 18,
			name: "Scoundrel's Sword",
			type: "sword",
			image: "assets/items/sword/18.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Plains.",
			unidentifiedArea: ["eaglecrest"],
			stats: {
				damage: 4,
				defence: 2,
				stealing: 30,
			},
			functionText: "Upon hitting an enemy, gain +10% Walk Speed for 2 seconds.",
			archaeologyAdditionalStats: ["walkSpeed"], // additional stat help to display on the archaeology page
			onHit: function () { // maybe stacks for each enemy hit - tbd maybe shouldn't?
				Game.statusEffects.walkSpeed({
					target: Game.hero,
					effectTitle: "Scoundrel's Speed",
					speedIncrease: 10,
					time: 2,
					effectStack: "noStack",
				});
			}
		},
		{
			id: 19,
			name: "Volcanic Knuckles",
			type: "sword",
			image: "assets/items/sword/19.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "mythic",
			sellPrice: 5,
			lore: "Buried for millennia under the Eaglecrest schists, these were once formed in a land of Legends.",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Plains.",
			unidentifiedArea: ["eaglecrest"],
			stats: {
				damage: 4,
				knockback: 75, // px knocked back
				flaming: 1,
			},
			projectile: "slashFire",
		},
		{
			id: 20,
			name: "Foxgloves",
			type: "sword",
			image: "assets/items/sword/20.png",
			tier: 1,
			obtain: ["boss"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtainText: "Can be looted from Baron Foxglove, a boss in the Eaglecrest Plains.",
			stats: {
				damage: 1,
				poisonX: 4,
				poisonY: 8,
			},
		},
		{
			id: 21,
			name: "Pointy Sword",
			type: "sword",
			image: "assets/items/sword/21.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "junk",
			lore: "'I'm not saying it's pointless, I'm just wondering what the point is' - Peter",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Plains.",
			stats: {
				damage: 0,
				defence: 1
			},
		},
		{
			id: 22,
			name: "Demolitionist's Mallet",
			type: "sword",
			image: "assets/items/sword/22.png",
			imageArchaeology: "assets/items/sword/22archaeology.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 5,
			lore: "",
			obtainText: "Can be bought from Demolitionist Darrow in Eaglecrest.",
			stats: {
				damage: 4,
				defence: 4,
				exploding: 1,
			},
			projectile: "slashFire",
		},
		{
			id: 23,
			name: "Coyote's Devour",
			type: "sword",
			image: "assets/items/sword/23.png",
			imageArchaeology: "assets/items/sword/23archaeology.png",
			tier: 1,
			obtain: ["boss"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 5,
			lore: "Teeth these large must have come from terafauna..",
			obtainText: "Can be looted from a sufficiently skilled Coyote Pack Wrangler in Eaglecrest Plains.",
			unidentifiedArea: ["eaglecrest"],
			stats: { //tba
				damage: 6,
				reloadTime: 250,
				defence: 4,
				reflection: 50,
			},
		},
	],
	staff: [
		{
			id: 0,
			name: "Test staff 1",
			type: "staff",
			image: "assets/items/staff/0.png",
			stats: {},
		},
		{
			// unequipped item
			id: 1,
			name: "",
			type: "staff",
			image: "assets/items/staff/1.png",
			stats: {},
		},
		{
			id: 2,
			name: "Basic Wand",
			type: "staff",
			image: "assets/items/staff/2.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["loggingCamp"],
			rarity: "common",
			sellPrice: 1,
			obtainText: "Can be bought from a merchant in the Fishers' Valley.",
			stats: {
				damage: 2,
				maxDamage: 6,
			},
			quest: function () {
                return !Player.quests.completedQuestArray.includes("Retrieval of Logs");
            },
		},
		{
			id: 3,
			name: "Crooked Wooden Wand",
			type: "staff",
			image: "assets/items/staff/3.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["loggingCamp", "eaglecrest"],
			rarity: "common",
			sellPrice: 1,
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp", "eaglecrest"],
			stats: {
				damage: 3,
				maxDamage: 9,
			},
		},
		{
			id: 4,
			name: "Health Staff",
			type: "staff",
			image: "assets/items/staff/4.png",
			imageArchaeology: "assets/items/staff/4archaeology.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["loggingCamp"],
			rarity: "unique",
			sellPrice: 3,
			lore: "Far healthier than any of the logging camp's wood.",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp"],
			stats: {
				damage: 3,
				maxDamage: 9,
				healthRegen: 0.3,
			},
		},
		{
			id: 5,
			name: "Power Surge Staff",
			type: "staff",
			image: "assets/items/staff/5.png",
			imageArchaeology: "assets/items/staff/5archaeology.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["loggingCamp"],
			rarity: "unique",
			sellPrice: 3,
			lore: "POWER OVERWHELMING!",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp"],
			stats: {
				damage: 2,
				maxDamage: 12,
				criticalChance: 15,
			},
		},
		{
			id: 6,
			name: "The Highborn Hoarder's Staff",
			type: "staff",
			image: "assets/items/staff/6.png",
			imageArchaeology: "assets/items/staff/6archaeology.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["loggingCamp"],
			rarity: "mythic",
			sellPrice: 5,
			lore: "With looting that high, she couldn't help but become a hoarder.",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp"],
			stats: {
				damage: 2,
				maxDamage: 8,
				looting: 100,
			},
		},
		{
			id: 7,
			name: "Goblin Torch",
			type: "staff",
			image: "assets/items/staff/7.png",
			uncollectable: true,
			allClasses: true,
			tier: 1,
			obtain: ["other"],
			area: [],
			rarity: "unique",
			quest: true,
			lore: "Hates the goblins just as much as you do.",
			stats: {
				damage: 5,
				maxDamage: 15,
				criticalChance: 20,
				flaming: 1,
			},
			chat: {
				kill: ["Burn with me!", "Must. Kill.", "Keep going. Please. Kill them all.", "Goblin idiots must die!", "Diseased creatures.", "Take that! Taste the pain!"],
			},
			projectile: "fireball",
			projectileAdjust: {x: 20, y: 20},
			// onKill is done in goblin onDeath instead
		},
		{
			id: 8,
			name: "Samhain Broomstick",
			type: "staff",
			image: "assets/items/staff/8.png",
			imageArchaeology: "assets/items/staff/8archaeology.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "unique",
			lore: "Gives new meaning to the phrase 'a brush with death'.",
			obtainText: "Can be bought from a merchant during the Samhain event.",
			event: "Samhain",
			sellPrice: 4,
			stats: {
				damage: 3.5,
				maxDamage: 10.5,
			},
			onKill: function () {
				// give speed to player
				Game.statusEffects.walkSpeed({
					target: Game.hero,
					effectTitle: "Soul Rush",
					speedIncrease: 100,
					time: 2,
				});
			},
			functionText: "Gives +100% walk speed for 2 seconds when an enemy is killed",
			projectile: "fireballGreen",
			projectileAdjust: {x: 20, y: 20},
		},
		{
			id: 9,
			name: "Vulpric's Ice Staff Replica",
			type: "staff",
			image: "assets/items/staff/9.png",
			imageArchaeology: "assets/items/staff/9archaeology.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["loggingCamp", "eaglecrest"],
			rarity: "unique",
			lore: "A scale model of the staff wielded by the Ice King of Subterrania, Vulpric.",
			obtainText: "Can be bought from a merchant during the Christmas event.",
			event: "Christmas",
			sellPrice: 4,
			stats: {
				damage: 3.5,
				maxDamage: 10.5,
				frostaura: true,
			},
			projectile: "frostball",
			projectileAdjust: {x: 20, y: 20},
		},
		{
			id: 10,
			name: "Ice Staff",
			type: "staff",
			image: "assets/items/staff/10.png",
			imageArchaeology: "assets/items/staff/10archaeology.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["loggingCamp", "eaglecrest"],
			rarity: "common",
			lore: "This ice doesn't last forever.",
			obtainText: "Can be bought from a merchant during the Christmas event.",
			event: "Christmas",
			sellPrice: 2,
			stats: {
				damage: 4,
				maxDamage: 12,
			},
			projectile: "frostball",
			projectileAdjust: {x: 0, y: 0},
			deleteIf: function () {
				return Event.event !== "Christmas";
			},
			deleteIfMessage: "It's not snowy any more! Your <strong>Ice Staff</strong> melted.",
		},
		{
			id: 11,
			name: "Eaglecrestian Forged Staff",
			type: "staff",
			image: "assets/items/staff/11.png",
			imageArchaeology: "assets/items/staff/11archaeology.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "common",
			sellPrice: 3,
			lore: "",
			obtainText: "Can be bought from 'The Forge' shop in Eaglecrest.",
			stats: {
				damage: 4,
				maxDamage: 12,
			},
		},
		{
			id: 12,
			name: "Staff of Extreme(ly Limited) Power",
			type: "staff",
			image: "assets/items/staff/12.png",
			imageArchaeology: "assets/items/staff/12archaeology.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "unique",
			lore: "This staff's power really is OVERWHELMING!",
			obtainText: "Can be bought from the 'Eaglecrest Bazaar' shop.",
			sellPrice: 3,
			stats: {
				damage: 5,
				maxDamage: 15
			},
			maxDurability: 50,
		},
		{
			id: 13,
			name: "Elemental Staff of the Nilbog",
			type: "staff",
			image: "assets/items/staff/13.png",
			imageArchaeology: "assets/items/staff/13archaeology.png",
			tier: 1,
			obtain: ["boss"],
			area: ["loggingCamp"],
			//event: "Samhain",
			rarity: "mythic",
			lore: "tbd",
			obtainText: "Can be looted from 'Barebones' Nkkja, a boss in The Nilbog during Blood Moons.",
			limitedEdition: true, // temp
			sellPrice: 5,
			stats: {
				damage: 4,
				maxDamage: 10,
			},
			chooseStats: {
				//slowAmount: 35,
				//slowTime: 1.5,
				flaming: 1,
				stun: 0.3,
			},
			projectile: "fireballGreen",
			projectileAdjust: {x: 20, y: 20},
		},
		{
			id: 14,
			name: "Frog Staff", // tbc?
			type: "staff",
			image: "assets/items/staff/14.png",
			imageArchaeology: "assets/items/staff/14archaeology.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 3,
			lore: "Bears the power of Hilbert.",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Plains.",
			unidentifiedArea: ["eaglecrest"],
			stats: {
				damage: 4,
				maxDamage: 12,
				hex: 10,
			},
			hexImages: [
				{
					imageName: "toadRight",
					rotationImages: {
						left: "toadLeft",
						right: "toadRight"
					},
					imageAddresses: {
						toadRight: {normal: "./assets/enemies/toad.png"},
						toadLeft: {normal: "./assets/enemies/toad.png", flip: "vertical"},
					}
				}
			],
			hexImmuneSpecies: ["frog"], // frogs can't be hexxed by this
			archaeologyNotes: "This weapon's ability doesn't seem to work on frogs!",
		},
		{
			id: 15,
			name: "Supercharged Baton", //tbc?
			type: "staff",
			image: "assets/items/staff/15.png",
			imageArchaeology: "assets/items/staff/15archaeology.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Plains.",
			unidentifiedArea: ["eaglecrest"],
			stats: {
				damage: 2,
				maxDamage: 13, // tbc
				reloadTime: -200,
			},
		},
		{
			id: 16,
			name: "Old Rusted Staff",
			type: "staff",
			image: "assets/items/staff/16.png",
			imageArchaeology: "assets/items/staff/16archaeology.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "mythic",
			sellPrice: 5,
			lore: "The staff feels strangely hot to the touch.",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Plains.",
			unidentifiedArea: ["eaglecrest"],
			stats: {
				damage: 6,
				maxDamage: 18,
				slowAmount: 25,
				slowTime: 1,
			},
			functionText: "You take 5 damage every time you attack with this staff.",
			onAttack: function () {
				Game.hero.takeDamage(5);
			},
			projectile: "pinkBall",
			projectileAdjust: {x: 0, y: 0},
		},
		{
			id: 17,
			name: "Demolitionist's Staff",
			type: "staff",
			image: "assets/items/staff/17.png",
			imageArchaeology: "assets/items/staff/17Archaeology.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 5,
			lore: "",
			obtainText: "Can be bought from Demolitionist Darrow in Eaglecrest.",
			stats: {
				damage: 3.5,
				maxDamage: 10.5,
				exploding: 1,
			},
		},
	],
	bow: [
		{
			id: 0,
			name: "Test bow 1",
			type: "bow",
			image: "assets/items/bow/0.png",
			stats: {},
		},
		{
			// unequipped item
			id: 1,
			name: "",
			type: "bow",
			image: "assets/items/bow/1.png",
			stats: {},
		},
		{
			id: 2,
			name: "Basic Bow",
			type: "bow",
			image: "assets/items/bow/2.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["loggingCamp"],
			rarity: "common",
			sellPrice: 1,
			obtainText: "Can be bought from a merchant in the Fishers' Valley.",
			stats: {
				damage: 2,
			},
			quest: function () {
                return !Player.quests.completedQuestArray.includes("Retrieval of Logs");
            },
		},
		{
			id: 3,
			name: "Crooked Wooden Bow",
			type: "bow",
			image: "assets/items/bow/3.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["loggingCamp", "eaglecrest"],
			rarity: "common",
			sellPrice: 1,
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp", "eaglecrest"],
			stats: {
				damage: 3,
			},
		},
		{
			id: 4,
			name: "Sharpshooter's Bow",
			type: "bow",
			image: "assets/items/bow/4.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["loggingCamp"],
			rarity: "unique",
			sellPrice: 3,
			lore: "One shot, one kill.",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp"],
			stats: {
				damage: 4,
				moveDuringFocus: true,
			},
		},
		{
			id: 5,
			name: "Woodshot",
			type: "bow",
			image: "assets/items/bow/5.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["loggingCamp"],
			rarity: "unique",
			sellPrice: 3,
			lore: "It used to fire bolts. Now it just shoots wood.",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp"],
			stats: {
				damage: 2.5,
				criticalChance: 65,
			},
		},
		{
			id: 6,
			name: "Kraiss' Brimstone Bow",
			type: "bow",
			image: "assets/items/bow/6.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["loggingCamp"],
			rarity: "mythic",
			sellPrice: 5,
			lore: "Once this bow helped burn down Azuras; now it will burn down your enemies.",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Logging Camp.",
			unidentifiedArea: ["loggingCamp"],
			stats: {
				damage: 4,
				flaming: 1,
			},
			projectile: "arrowFire",
			projectileAdjust: {x: 20, y: 13},
		},
		{
			id: 7,
			name: "Samhain Spiderbow",
			type: "bow",
			image: "assets/items/bow/7.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "unique",
			lore: "So this is what happens when you leave your crossbow in the shed for too long.",
			obtainText: "Can be bought from a merchant during the Samhain event.",
			event: "Samhain",
			sellPrice: 4,
			stats: {
				damage: 3.5,
				slowAmount: 50,
				slowTime: 1,
				slowEffectTitle: "Webbed Up"
			},
			projectile: "arrowOrange",
			projectileAdjust: {x: 20, y: 20},
		},
		{
			id: 8,
			name: "Snowball",
			type: "bow",
			image: "assets/items/bow/8.png",
			tier: 1,
			obtain: ["other"],
			area: [],
			rarity: "common",
			sellPrice: 1,
			lore: "Throw it at someone you don't like.",
			uncollectable: true,
			event: "Christmas",
			stats: {
				damage: 0,
				slowAmount: 30,
				slowTime: 2,
				slowEffectTitle: "Snow Coating"
			},
			onAttack: function (projectile) {
				// remove item
				Dom.inventory.removeById(8, "bow");
				// "the christmas spirit" quest progress
				if (projectile.isTouching(Game.npcs[0]) && Game.areaName === "eaglecrestLoggingCamp") {
					Player.quests.questProgress.hitTeper = Increment(Player.quests.questProgress.hitTeper);
					if (Player.quests.questProgress.hitTeper === 3) {
						Game.projectiles.splice(Game.searchFor(projectile.id, Game.projectiles), 1); // find the id of the to-be-removed projectile and remove it
						Game.npcs[0].image = Loader.getImage("teperAngry");
					}
				}
				Game.inventoryUpdate();
			},
			allClasses: true,
			projectile: "snowball",
			projectileAdjust: {x: 0, y: 0},
		},
		{
			id: 9,
			name: "Snowball Cannon",
			type: "bow",
			image: "assets/items/bow/9.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["loggingCamp", "eaglecrest"],
			rarity: "unique",
			lore: "Not for firing at Marshall Teper.",
			obtainText: "Can be bought from a merchant during the Christmas event.",
			event: "Christmas",
			sellPrice: 4,
			stats: {
				damage: 3,
				stun: 0.2,
				slowAmount: 30,
				slowTime: 2,
				slowEffectTitle: "Snow Coating"
			},
			projectile: "snowball",
			projectileAdjust: {x: 0, y: 0},
		},
		{
			id: 10,
			name: "Crystal Bow",
			type: "bow",
			image: "assets/items/bow/10.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["loggingCamp", "eaglecrest"],
			rarity: "common",
			lore: "This ice doesn't last forever.",
			obtainText: "Can be bought from a merchant during the Christmas event.",
			event: "Christmas",
			sellPrice: 2,
			stats: {
				damage: 4,
			},
			projectile: "arrowSnow",
			projectileAdjust: {x: 0, y: 0},
			deleteIf: function () {
				return Event.event !== "Christmas";
			},
			deleteIfMessage: "It's not snowy any more! Your <strong>Crystal Bow</strong> melted.",
		},
		{
			id: 11,
			name: "Eaglecrestian Forged Bow",
			type: "bow",
			image: "assets/items/bow/11.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "common",
			sellPrice: 3,
			lore: "",
			obtainText: "Can be bought from 'The Forge' shop in Eaglecrest.",
			stats: {
				damage: 4,
			},
		},
		{
			id: 12,
			name: "Slingshot",
			type: "bow",
			category: "slingshot",
			image: "assets/items/bow/12.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "unique",
			lore: "You: armed with a sling, enemies: arm in a sling.",
			obtainText: "Can be bought from the 'Eaglecrest Bazaar' shop.",
			sellPrice: 3,
			stats: {
				damage: 4,
				minimumVariance: 70, // tbd change to projectile variance percentage!
			},
			projectile: "greyPellet",
			projectileAdjust: {x: 0, y: 0},
			onKill: function () {
				Player.quests.questProgress.enemiesKilledWithSlingshot = Increment(Player.quests.questProgress.enemiesKilledWithSlingshot);
			}
		},
		{
			id: 13,
			name: "Captain Calaca's Cannon",
			type: "bow",
			image: "assets/items/bow/13.png",
			tier: 1,
			obtain: ["boss"],
			area: ["eaglecrest"],
			rarity: "mythic",
			lore: "A pirate heirloom, passed down from sea monster to sea monster for centuries.",
			obtainText: "Currently unobtainable",
			limitedEdition: true, // temp
			sellPrice: 5,
			stats: {
				damage: 5,
				reloadTime: 750,
				//splashDamage: true, // not a thing anymore ... needs changing
			},
			projectile: "waterball",
			projectileAdjust: {x: 10, y: 10},
		},
		{
			id: 14,
			name: "Flower Power",
			type: "bow",
			image: "assets/items/bow/14.png",
			tier: 1,
			obtain: ["boss"],
			area: ["eaglecrest"],
			rarity: "mythic",
			sellPrice: 5,
			lore: "",
			obtainText: "Can be looted from Baron Foxglove, a boss in the Eaglecrest Plains.",
			stats: {
				damage: 5,
				healthRegen: -0.5
			},
			functionText: "Fires flowers, which restore 5 health when collected in full bloom",
			projectile: "flowerBud",
			projectileAdjust: {x: 0, y: 0},
			extraProjectileInfo: {
				crop: {
					x: 0,
					y: 0,
					width: 41,
					height: 41
				},
				animation: {
					type: "function",
					frameTime: 1100,
					animateFunction: function () { // tbd maybe change this to be a function that updates the frame number, and leave it to the main code to do the cropping
						// state is an integer from 0 to 9 inclusive
						// growth goes from 0 to 10, then it starts growing
						// define state & growth
						if (this.state === undefined) {
							this.state = 0;
							this.growth = 0;
						}
						else if (this.state === 0 && this.growth < 10) {
							this.growth++;
						}
						else if (this.state < 9) {
							this.z = -1; // now a flower so appears behind
							this.state++;
							// change image
							let obj = this.animateObj; // actual projectile object
							obj.crop = {
								x: (this.state % 4) * obj.baseWidth,
								y: Math.floor(this.state / 4) * obj.baseHeight,
								width: obj.baseWidth,
								height: obj.baseHeight
							}

							if (this.state === 9) {
								this.removeIn = 5;
							}
						}
					},
					animateFunction: function () {
						// increase number of ticks
						if (this.timeoutTicks === undefined || this.timeoutTicks >= 20) {
							this.timeoutTicks = 1;
						}
						else {
							this.timeoutTicks++;
						}
						// alternate image
						// the first time this is called, imageName is undefined so the image is not changed
						if (this.animateObj.imageName === "lightsRB") {
							this.animateObj.image = Loader.getImage("lightsGY");
							this.animateObj.imageName = "lightsGY";
						}
						else if (this.animateObj.imageName === "lightsGY") {
							this.animateObj.image = Loader.getImage("lightsRB");
							this.animateObj.imageName = "lightsRB";
						}
						// time for next animation frame
						if (this.timeoutTicks > 10) {
							this.frameTime = 300; // formerly 250
						}
						else {
							this.frameTime = 1100;
						}
					},
				},
				animationFrameTime: 150,
				stayOnScreen: true, // done in animateFunction
				doNotRotate: true,
				onInteract: function () {
					if (this.state === 9) {
						Game.hero.channel(function (projectileRemoveId) {
							let projectileIndex = Game.projectiles.findIndex(projectile => projectile.id === projectileRemoveId);
							if (projectileIndex >= 0) {
								// projectile still exists
								Game.restoreHealth(Game.hero, 5);
								Game.removeObject(projectileRemoveId, "projectiles", projectileIndex);
							}
						}, [this.id], 200, "Flower power!");
					}
				},
			}
		},
		{
			id: 15,
			name: "Scarebow",
			type: "bow",
			image: "assets/items/bow/15.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Plains.",
			unidentifiedArea: ["eaglecrest"],
			stats: {
				damage: 4,
				rooting: 0.4,
			},
		},
		{
			id: 16,
			name: "Feathered Bow",
			type: "bow",
			image: "assets/items/bow/16.png",
			imageArchaeology: "assets/items/bow/16archaeology.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 3,
			lore: "What came first, the chicken or the bow?",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Plains.",
			unidentifiedArea: ["eaglecrest"],
			stats: {
				damage: 4,
				walkSpeed: 30,
				hex: 10,
			},
			hexImages: [
				{
					imageName: "chickenRight",
					rotationImages: {
						left: "chickenLeft",
						right: "chickenRight"
					},
					imageAddresses: {
						chickenRight: {normal: "./assets/enemies/chicken.png"},
						chickenLeft: {normal: "./assets/enemies/chicken.png", flip: "vertical"},
					}
				}
			],
			hexImmuneSpecies: ["chicken"], // frogs can't be hexxed by this
			archaeologyNotes: "This weapon's ability doesn't seem to work on chickens!",
		},
		{
			id: 17,
			name: "Arm of the Blackguard",
			type: "bow",
			image: "assets/items/bow/17.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "mythic",
			sellPrice: 5,
			lore: "Keep away from smoke detectors!",
			obtainText: "Can be uncovered as an unidentified item in areas around Eaglecrest Plains.",
			unidentifiedArea: ["eaglecrest"],
			stats: {
				damage: 4,
				dodgeChance: 10,
			},
			functionText: "Upon changing location, gain Stealth and +100% Damage on your next attack",
			archaeologyAdditionalStats: ["stealth"], // additional stat help to display on the archaeology page
			onAreaChange: function () {
				Game.statusEffects.stealth({
					target: Game.hero,
					effectTitle: "Blackguard Shroud",
				});
				Game.statusEffects.attackDamage({
					target: Game.hero,
					effectTitle: "Blackguard Strike",
					effectDescription: "Your next attack deals 100% more damage.",
					damageIncrease: 100,
					removeOnAttack: true,
					hidden: true,
				});
			}
		},
		{
			id: 18,
			name: "Golden Slingshot",
			type: "bow",
			category: "slingshot",
			image: "assets/items/bow/18.png",
			tier: 1,
			obtain: ["other"],
			limitedEdition: true, // hidden from archaeology
			area: ["eaglecrest"],
			rarity: "mythic",
			lore: "",
			obtainText: "???",
			sellPrice: 10,
			stats: {
				damage: 4,
				minimumVariance: 70,
				numberOfProjectiles: 3,
			},
			projectile: "goldPellet",
			projectileAdjust: {x: 0, y: 0},
		},
		{
			id: 19,
			name: "Demolitionist's Hand Cannon",
			type: "bow",
			image: "assets/items/bow/19.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "unique",
			sellPrice: 5,
			lore: "",
			obtainText: "Can be bought from Demolitionist Darrow in Eaglecrest.",
			stats: {
				damage: 5,
				reloadTime: 750,
				exploding: 1,
			},
			projectile: "redPellet",
			projectileAdjust: {x: 0, y: 0},
		},
	],
	rod: [ // fishing rod
		{
			id: 0,
			name: "Test Rod 1",
			type: "rod",
			image: "assets/items/rod/3.png",
			rarity: "mythic",
			lore: "",
			stats: {},
		},
		{
			id: 1,
			name: "Test Rod 2",
			type: "rod",
			image: "assets/items/rod/3.png",
			rarity: "mythic",
			lore: "",
			stats: {},
		},
		{
			id: 2,
			name: "Fisherman Tobenam's Old Rod",
			type: "rod",
			image: "assets/items/rod/2.png",
			rarity: "common",
			sellPrice: 1,
			lore: "A fine rod.",
			stats: {},
			quest: function(){
				return !Player.quests.completedQuestArray.includes("Learning to Fish I");
			},
		},
		{
			id: 3,
			name: "Basic Fishing Rod",
			type: "rod",
			image: "assets/items/rod/3.png",
			rarity: "common",
			sellPrice: 1,
			stats: {},
		},
		{
			id: 4,
			name: "Christmas Candy Rod",
			type: "rod",
			image: "assets/items/rod/4.png",
			rarity: "unique",
			sellPrice: 5,
			functionText: "Has a small chance to fish up a Christmas Present",
			lore: "Not for consumption.",
			stats: {},
			projectile: "bobberChristmas",
		},
	],
	set: [
		{
			id: 0,
			name: "Test set 1",
			type: "set",
			image: "assets/items/bow/0.png", // perhaps give it its own image?
			stats: {},
		},
		{
			id: 1,
			name: "Test set 2",
			type: "set",
			image: "assets/items/bow/1.png", // perhaps give it its own image?
			stats: {},
		},
		{
			id: 2,
			name: "Siege Set",
			type: "set",
			image: "assets/items/set/2.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["loggingCamp"],
			rarity: "unique",
			obtainText: "Can be uncovered as unidentified items in areas around Eaglecrest Logging Camp.",
			armour: [ // tbd make this use ids
				"Siege Helm",
				"Siege Chestplate",
				"Siege Greaves",
				"Siege Boots",
			],
			stats: {
				defence: 4,
				healthRegen: 0.4,
			},
		},
		{
			id: 3,
			name: "Goblin Forged Set",
			type: "set",
			image: "assets/items/set/3.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["loggingCamp"],
			rarity: "unique",
			obtainText: "Can be uncovered as unidentified items in areas around Eaglecrest Logging Camp.",
			armour: [
				"Goblin Forged Helm",
				"Goblin Forged Chestplate",
				"Goblin Forged Greaves",
				"Goblin Forged Boots",
			],
			stats: {
				looting: 30,
				walkSpeed: 60,
			},
		},
		{
			id: 4,
			name: "The Set of the Ocean Warrior",
			type: "set",
			image: "assets/items/set/4.png",
			tier: 1,
			obtain: ["fishing"],
			area: ["loggingCamp"],
			rarity: "mythic",
			obtainText: "Can be uncovered from a 'Sunken Chest' from a Tier 1 fishing area.",
			armour: [
				"The Ocean Warrior's Helm",
				"The Ocean Warrior's Chestplate",
				"The Ocean Warrior's Leggings",
				"The Ocean Warrior's Boots",
			],
			stats: {
				swimSpeed: 120, // perhaps display as water walking?
			},
			multiplier: [
				// double chosen stats
				{
					stat: "chosenStat",
					multiplier: 2,
					slots: ["helm", "chest", "greaves", "boots"],
					text: "Doubles chosen stats",
				},
			],
		},
		{
			id: 5,
			name: "Eaglecrestian Forged Set",
			type: "set",
			image: "assets/items/set/5.png",
			tier: 1,
			obtain: ["merchant"],
			area: ["eaglecrest"],
			rarity: "common",
			obtainText: "Can be bought from 'The Forge' shop in Eaglecrest.",
			armour: [
				"Eaglecrestian Forged Helm",
				"Eaglecrestian Forged Chestplate",
				"Eaglecrestian Forged Leggings",
				"Eaglecrestian Forged Boots",
			],
			stats: {
				defence: 4
			},
		},
		{
			id: 6,
			name: "River Idol's Blessing",
			type: "set",
			image: "assets/items/set/6.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "unique",
			obtainText: "Can be uncovered as unidentified items in areas around Eaglecrest Plains.",
			armour: [
				"Blessed Headpiece of the River Idol",
				"Blessed Chestpiece of the River Idol",
				"Blessed Legpiece of the River Idol",
				"Blessed Footpieces of the River Idol",
			],
			stats: {
				reflection: 100,
			}, // tbd make set 2 bonus and set 4 bonus!
		},
		{
			id: 7,
			name: "Eaglecrest Guard Set",
			type: "set",
			image: "assets/items/set/7.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "unique",
			obtainText: "Can be uncovered around Eaglecrest.",
			armour: [
				"City Guard Hauberk",
				"City Guard Chausses",
			],
			stats: {
				unstoppable: true, // immunity to slows, stuns, roots, hexes
			},
		},
		{
			id: 8,
			name: "River Dredging Set",
			type: "set",
			image: "assets/items/set/8.png",
			tier: 1,
			obtain: ["unidentified"],
			area: ["eaglecrest"],
			rarity: "unique",
			obtainText: "Can be uncovered around Eaglecrest.",
			armour: [
				"River Dredging Dungarees",
				"River Dredging Overshoes",
			],
			stats: {
				swimSpeed: 30,
				looting: 30, // tbd make this and stealing conditional stats?
				stealing: 30,
			},
		},
	],
	currency: [
		{
			id: 0,
			name: "Test currency 1",
			type: "currency",
			image: "assets/items/currency/2.png", // perhaps give it its own image?
			stack: 256,
		},
		{
			id: 1,
			name: "Test currency 2",
			type: "currency",
			image: "assets/items/currency/2.png", // perhaps give it its own image?
			stack: 256,
		},
		{
			id: 2,
			name: "Gold",
			type: "currency",
			image: "assets/items/currency/2.png",
			functionText: "The primary currency of Antorax",
			stack: 1024,
			quest: function () {
                return !Player.quests.completedQuestArray.includes("To the Logging Camp");
            },
		},
		{
			id: 3,
			name: "Fishing Seal",
			type: "currency",
			image: "assets/items/currency/3.png",
			functionText: "Can be used to buy fishing related items from a fisherperson.",
			stack: 256,
		},
		{
			id: 4,
			name: "Samhain Mark",
			type: "currency",
			image: "assets/items/currency/4.png",
			functionText: "Used to buy special Samhain event items from a Samhain merchant.",
			stack: 256,
		},
		{
			id: 5,
			name: "Christmas Token",
			type: "currency",
			image: "assets/items/currency/5.png",
			functionText: "Used to buy festive Christmas items.",
			stack: 256,
		},
	],
	bag: [
		{
			id: 0,
			name: "Test bag 1",
			type: "bag",
			image: "assets/items/item/9.png", // perhaps give it its own image?
			size: 48, // biggest a bag can be is 54
		},
		{
			// unequipped item
			id: 1,
			name: "",
			type: "bag",
			image: "assets/items/bag/1.png",
		},
		{
			id: 2,
			name: "Logging Sack",
			type: "bag",
			image: "assets/items/bag/2.png",
			sellPrice: 1,
			size: 6,
		},
		{
			id: 3,
			name: "Goblin Sewn Bag",
			type: "bag",
			image: "assets/items/bag/3.png",
			sellPrice: 3,
			size: 12,
		},
		{
			id: 4,
			name: "Fishing Pouch",
			type: "bag",
			image: "assets/items/bag/4.png",
			sellPrice: 5,
			size: 18,
		},
		{
			id: 5,
			name: "Brown Backsack",
			type: "bag",
			image: "assets/items/bag/5.png",
			sellPrice: 2,
			size: 12,
		},
		{
			id: 6,
			name: "Eaglecrest Bag",
			type: "bag",
			image: "assets/items/bag/6.png",
			lore: "Free merch",
			sellPrice: 1,
			size: 6,
		},
		{
			id: 7,
			name: "Cutpurse Sack",
			type: "bag",
			image: "assets/items/bag/7.png",
			sellPrice: 5,
			size: 18,
		},
		{
			id: 8,
			name: "Mail-Carrier",
			type: "bag",
			rarity: "mythic",
			image: "assets/items/bag/8.png",
			sellPrice: 7,
			size: 24,
		},
	],
	item: [
		{
			id: 0,
			name: "Test junk item",
			type: "item",
			rarity: "junk",
			image: "assets/items/fish/23.png",
			stack: 2,
		},
		{
			id: 1,
			name: "",
			type: "item",
			lore: "You can earn a special item from completing this quest.",
			image: "assets/items/item/1.png",
			stack: 1,
		},
		{
			id: 2,
			name: "Log",
			type: "item",
			image: "assets/items/item/2.png",
			stack: 4,
			lore: "Was stolen from the logging camp by goblins.",
		},
		{
			id: 3,
			name: "Scrap of Cloth",
			type: "item",
			rarity: "junk",
			image: "assets/items/item/3.png",
			sellPrice: 1,
			sellQuantity: 16,
			stack: 64,
			opens: {
				type: "consumable",
				id: 25,
				reversible: true,
			},
		},
		{
			id: 4,
			name: "Polished Rock",
			type: "item",
			rarity: "junk",
			image: "assets/items/item/4.png",
			sellPrice: 1,
			sellQuantity: 16,
			stack: 64,
		},
		{
			id: 5,
			name: "Fiery Rock",
			type: "item",
			rarity: "junk",
			image: "assets/items/item/5.png",
			sellPrice: 1,
			sellQuantity: 8,
			stack: 64,
		},
		{
			id: 6,
			name: "Eaglecrest Mail Sack",
			type: "item",
			quest: true,
			image: "assets/items/item/6.png",
			lore: "Contains mail to be delivered across the lands of Antorax.",
		},
		{
			id: 7,
			name: "Fisherman Tobenam's Lost Rod",
			type: "item",
			quest: true,
			image: "assets/items/item/7.png",
			lore: "The goblins haven't looked after this rod very well...",
		},
		{
			id: 8,
			name: "The Sceptre of Souls",
			type: "item",
			rarity: "mythic",
			quest: true,
			image: "assets/items/item/8.png",
			functionText: "Siphons the soul essence of any nearby enemy corpses",
			onClickFunction: function () {
				Game.enemies.forEach(enemy => {
					if (Game.areNearby(Game.hero, enemy, 180)) { // check the player is within 3 tiles of an enemy
						if (enemy.isCorpse && !enemy.hasBeenSiphoned) { // check the enemy is a corpse
							enemy.hasBeenSiphoned = true;
							Player.quests.questProgress.soulSceptreEnergy = Increment(Player.quests.questProgress.soulSceptreEnergy);
							Dom.checkProgress();
							switch(Random(0, 2)) {
								case 0:
									Dom.chat.insert("The sceptre sizzles with soul energy.");
									break;
								case 1:
									Dom.chat.insert("The sceptre feels warm as soul energy rushes in.");
									break;
								case 2:
									Dom.chat.insert("You hear a whoosh as the sceptre siphons energy from the nearby corpse.");
									break;
							}
						}
					}
				});
			},
			lore: "The energy stored within this sceptre can be used to cure even the worst XP fatigue.",
		},
		{
			// UNUSED
			id: 9,
			name: "Inert Potion",
			type: "item",
			quest: true,
			image: "assets/items/item/9.png",
			lore: "Try adding some ingredients...",
		},
		{
			id: 10,
			name: "Goblin Eye",
			rarity: "junk",
			type: "item",
			image: "assets/items/item/10.png",
			lore: "Has some alchemical uses.",
			sellPrice: 1,
			sellQuantity: 16,
			stack: 32,
		},
		{
			id: 11,
			name: "Vial of Goblin Blood",
			rarity: "junk",
			type: "item",
			image: "assets/items/item/11.png",
			lore: "Has some alchemical uses.",
			sellPrice: 1,
		},
		{
			id: 12,
			name: "Empty Bucket",
			type: "item",
			quest: true,
			image: "assets/items/item/12.png",
			functionText: "Click to fill with a nearby 'scoopable' substance",
			onClickFunction: function (inventoryPosition) {
				if (Game.areaName === "nilbog") { // check we are in the nilbog
					let tileNum = Game.hero.getTileAtFeet();
					if (map.mudTiles.includes(tileNum)) {
						// fill with mud
						// replace it with a mud-filled version
						Dom.inventory.remove(inventoryPosition);
						Dom.inventory.give(Items.item[13], 1, inventoryPosition); // replaces at the same slot
					}
				}
			}
		},
		{
			id: 13,
			name: "Mud-Filled Bucket",
			type: "item",
			quest: true,
			image: "assets/items/item/13.png",
			lore: "Fresh from The Nilbog."
		},
		{
			id: 14,
			name: "ScreenGrabber 3000",
			type: "item",
			image: "assets/items/item/14.png",
			functionText: "Click to take a screenshot",
			onClickFunction: function () {
				Game.takePhoto = true; // take a screenshot next tick
				// this method of taking photo is required because some things on main canvas need to be hidden first
			},
		},
		{
			id: 15,
			name: "Arcane Magnet",
			type: "item",
			image: "assets/items/item/15.png",
			functionText: "Attracts nearby enemies (discard to stop)",
			magnetism: 100, // movement per second in pixels when at 0 range
			// linear scale between max and 0
			range: 480,
			sellPrice: 1,
		},
		{
			id: 16,
			name: "Tattered Tome",
			type: "item",
			image: "assets/items/item/16.png",
			rarity: "junk",
			lore: "You can't understand what the book says.",
			sellPrice: 1,
			sellQuantity: 8,
			stack: 8,
		},
		{
			id: 17,
			name: "DOM, the Gingerbread Robot",
			type: "item",
			image: "assets/items/item/17.png",
			functionText: "Restores 15 health over 10 seconds (whilst not in combat)",
			lore: "A trusty companion. A tasty snack.<br><br>Obtained as a present from Christmas Day, 2018 or 2022.",
			onClickFunction: function (inventoryPosition) {
				// item is NOT removed!

				// give food status effect to player if they do not have one already
				if (!Game.hero.hasStatusEffectType("food")) {
					Game.statusEffects.food({
						target: Game.hero,
						effectTitle: "Gingerbread",
						healthRestore: 15,
						time: 10,
					});

					// chat message
					Dom.chat.insert(Dom.chat.say("DOM, the Gingerbread Robot", "Gingerbread matrices restoring."));
				}
			},
		},
		{
			id: 18,
			name: "Tower Chest Key",
			type: "item",
			image: "assets/items/item/18.png",
			lore: "Can be used to open a chest in the Nilbog Tower.",
			sellPrice: 1,
		},
		{
			id: 19,
			name: "Aquamarine Fragment",
			type: "item",
			category: "mineral",
			image: "assets/items/item/19.png",
			sellPrice: 1,
			stack: 64,
			opens: { // eternity glove
				type: "sword",
				id: 11,
			},
		},
		{
			id: 20,
			name: "Amethyst Fragment",
			type: "item",
			category: "mineral",
			image: "assets/items/item/20.png",
			sellPrice: 1,
			stack: 64,
			opens: { // eternity glove
				type: "sword",
				id: 11,
			},
		},
		{
			id: 21,
			name: "Jasper Fragment",
			type: "item",
			category: "mineral",
			image: "assets/items/item/21.png",
			sellPrice: 1,
			stack: 64,
			opens: { // eternity glove
				type: "sword",
				id: 11,
			},
		},
		{
			id: 22,
			name: "Emerald Fragment",
			type: "item",
			category: "mineral",
			image: "assets/items/item/22.png",
			sellPrice: 1,
			stack: 64,
			opens: { // eternity glove
				type: "sword",
				id: 11,
			},
		},
		{
			id: 23,
			name: "Ruby Fragment",
			type: "item",
			category: "mineral",
			image: "assets/items/item/23.png",
			sellPrice: 1,
			stack: 64,
			opens: { // eternity glove
				type: "sword",
				id: 11,
			},
		},
		{
			id: 24,
			name: "Citrine Fragment",
			type: "item",
			category: "mineral",
			image: "assets/items/item/24.png",
			sellPrice: 1,
			stack: 64,
			opens: { // eternity glove
				type: "sword",
				id: 11,
			},
		},
		{
			id: 25,
			name: "Mug",
			type: "item",
			image: "assets/items/item/25.png",
			quest: true,
			removeOnAbandon: "Tavern Tidy-Up",
			stack: 64,
		},
		{
			id: 26,
			name: "Plate",
			type: "item",
			image: "assets/items/item/26.png",
			quest: true,
			removeOnAbandon: "Tavern Tidy-Up",
			stack: 64,
		},
		{
			id: 27,
			name: "Fire Resistant Cloth",
			type: "item",
			image: "assets/items/item/27.png",
			stack: 1,
		},
		{
			id: 28,
			name: "Fireroot",
			type: "item",
			image: "assets/items/item/28.png",
			stack: 1,
			lore: "It's on fire. No really, it's on fire.",
			onGive: function () {
				Game.statusEffects.generic({
					target: Game.hero,
					effectTitle: "fireroot",
					time: 22,
					showInfoBar: true,
					infoBarText: "Fireroot explodes in:",
					infoBarColour: "#b3190e",
					hidden: true,
					onExpire: {
						location: "itemdata",
						type: "item",
						id: 28,
					}
				});

				Dom.chat.insert(Dom.chat.say("Shopkeeper Barda", "Once your time has blowed, the root will explode!"));
			},
			onExpire: function () { // called by status effect when it expires
				Game.statusEffects.fire({
					target: Game.hero,
					tier: 1,
				});
				Dom.inventory.removeById(28, "item");
				Player.quests.questProgress.firerootFailed = true;
				Dom.chat.insert("<i>Your fireroot exploded!</i>");
				Game.hero.displace(0, 200, 1, ToRadians(Random(0, 360)));
			},
			onRemove: function () {
				if (Game.minigameInProgress === undefined) {
					Dom.infoBar.page("");
				}
				Game.hero.cleanse("fireroot", "title");
			},
			countdown: 22,
			countdownText: "Explodes in",
		},
		{
			id: 29,
			name: "Burnt Cloth",
			type: "item",
			rarity: "junk",
			image: "assets/items/item/29.png",
			stack: 64,
		},
		{
			id: 30,
			name: "Lavender",
			type: "item",
			category: "flower",
			rarity: "junk",
			image: "assets/items/item/30.png",
			stack: 64,
		},
		{
			id: 31,
			name: "Marigold",
			type: "item",
			category: "flower",
			rarity: "junk",
			image: "assets/items/item/31.png",
			stack: 64,
		},
		{
			id: 32,
			name: "Daisy",
			type: "item",
			category: "flower",
			rarity: "junk",
			image: "assets/items/item/32.png",
			stack: 64,
		},
		{
			id: 33,
			name: "ςคtภเթ",
			type: "item",
			category: "flower",
			image: "assets/items/item/33.png",
			stack: 3,
			quest: true,
			lore: "𝕞𝕞𝕄𝕞𝕄𝕞𝕞𝕄𝕄𝕞𝕄",
		},
		{
			id: 34,
			name: "Snake",
			type: "item",
			image: "assets/items/item/34.png",
			stack: 16,
			lore: "Where did they come from?",
		},
		{
			id: 35,
			name: "The Sssceptre of Ssssorrows",
			type: "item",
			rarity: "mythic",
			quest: true,
			image: "assets/items/item/35.png",
			functionText: "Sssiphons the light esssssence of any nearby light sssources",
			onClickFunction: function () {
				let questProgressKeyName = Game.areaName+"SamhainLights";
				if (!Player.quests.questProgress[questProgressKeyName] && (Game.areaName === "eaglecrestGraveyard" || Game.areaName === "eaglecrestEast" || Game.areaName === "eaglecrest" || Game.areaName === "eaglecrestWest")) {
					Game.hero.channel(function () {
						Player.quests.questProgress[questProgressKeyName] = true;
						Dom.checkProgress();

						map.eaglecrestSamhainLights();

						// flickering!
						/*Game.clearedIntervalsOnAreaChange.push(Game.setTimeout(function() {
							map.replaceTiles(3, 145);
							map.replaceTiles(11, 145);
							map.replaceTiles(2, 146);
							map.replaceTiles(34, 146);
							map.replaceTiles(18, 153);
							map.replaceTiles(42, 153);
							map.replaceTiles(27, 154);
							map.replaceTiles(19, 154);
						}, 600));
						Game.clearedIntervalsOnAreaChange.push(Game.setTimeout(function() {
							SetTile("tutorial", 0, map.getCol(x), map.getRow(y), 29);
							SetTile("tutorial", 0, map.getCol(x + 60), map.getRow(y), 30);
							SetTile("tutorial", 0, map.getCol(x), map.getRow(y + 60), 39);
						}, 600));*/
					}, [], 2666, "Turning out the lights...");
				}
			},
			lore: "What does the snake man need this energy for??",
		},
		{
			id: 36,
			name: "Skeleton Key",
			type: "item",
			quest: true,
			image: "assets/items/item/36.png",
			functionText: "Can open some locked doors",
			deleteIf: function () {
				if (Event.event !== "Samhain") {
					// reset quest variables so they can continue from the beginning of their quest next year
					Player.quests.questProgress.bazaarCrate = undefined;
					Player.quests.questProgress.graveyardCrate = undefined;
					Player.quests.questProgress.plainsCrate = undefined;
					Player.quests.questProgress.westCrate = undefined;
					Dom.quest.abandon(Quests.eaglecrest[3]);
					Dom.quest.abandon(Quests.eaglecrest[4]);
					Dom.quest.abandon(Quests.eaglecrest[5]);
					Dom.quest.abandon(Quests.eaglecrest[6]);
					return true;
				}
				return false;
			},
			deleteIfMessage: "Your <b>Skeleton Key</b> has vanished as the Samhain season comes to a demise. The Soothsssayer's plan is laid to rest for now, maybe next year it will come to fruition...",
		},
		{
			id: 37,
			name: "Wispy Feather",
			type: "item",
			rarity: "junk",
			image: "assets/items/item/37.png",
			sellPrice: 1,
			sellQuantity: 16,
			stack: 64,
		},
		{
			id: 38,
			name: "Blood-Red Crystal",
			type: "item",
			category: "mineral",
			image: "assets/items/item/23.png", // same as ruby fragment for now
			quest: true,
			stack: 4,
			lore: "Instrumental to The Soothsssayer's plans..",
			deleteIf: function () {
				return Event.event !== "Samhain";
			},
		},
		{
			id: 39,
			name: "Crimson Feather",
			type: "item",
			rarity: "junk",
			image: "assets/items/item/39.png",
			sellPrice: 1,
			sellQuantity: 1,
			stack: 64,
		},
		{
			id: 40,
			name: "Egg",
			type: "item",
			rarity: "junk",
			image: "assets/items/item/40.png",
			sellPrice: 1,
			sellQuantity: 4,
			stack: 16,
		},
		{
			id: 41,
			name: "Sickly Egg",
			type: "item",
			rarity: "junk",
			image: "assets/items/item/41.png",
			stack: 16,
			lore: "This egg looks no good"
		},
		{
			id: 42,
			name: "Personal Portrait",
			type: "item",
			image: "assets/items/item/42.png",
			stack: 1,
			sellPrice: 1,
			sellQuantity: 1,
			lore: "Must have been stolen from someone by a cutpurse"
		},
		{
			id: 43,
			name: "Glass Eye",
			type: "item",
			image: "assets/items/item/43.png",
			stack: 2,
			sellPrice: 1,
			sellQuantity: 1,
			lore: "Must have been stolen from someone by a cutpurse"
		},
		{
			id: 44,
			name: "Polished Silver Fork",
			type: "item",
			image: "assets/items/item/44.png",
			stack: 1,
			sellPrice: 2,
			sellQuantity: 1,
			lore: "Must have been stolen from someone by a cutpurse"
		},
		{
			id: 45,
			name: "Coyote Bone",
			type: "item",
			image: "assets/items/item/45.png",
			stack: 64,
			sellPrice: 1,
			sellQuantity: 4,
		},
		{
			id: 46,
			name: "Tuft of Coyote Hair",
			type: "item",
			image: "assets/items/item/46.png",
			stack: 64,
			sellPrice: 1,
			sellQuantity: 16,
		},
		{
			id: 47,
			name: "Fresh Meat",
			type: "item",
			image: "assets/items/item/47.png",
			stack: 64,
			sellPrice: 1,
			sellQuantity: 4,
		},
		{
			id: 48,
			name: "<i>Doohickey</i>",
			type: "item",
			image: "assets/items/item/48.png",
			stack: 1,
			functionText: "", // something to do with high potency
			lore: "Has some alchemical uses.",
			holdingEffect: {

			}
		},
		{
			id: 49,
			name: "Enchanted Toy Soldier",
			type: "item",
			image: "assets/items/item/49.png",
			stack: 16,
			functionText: "",
			lore: "Has some alchemical uses." // not anymore..
		},
		{
			id: 50,
			name: "Animated Frog's Leg",
			type: "item",
			image: "assets/items/item/50.png",
			stack: 2,
			functionText: "", // something to do with high potency
			lore: "Has some alchemical uses."
		},
		{
			id: 51,
			name: "Golden Feather",
			type: "item",
			rarity: "unique",
			image: "assets/items/item/51.png",
			sellPrice: 10,
			stack: 64,
		},
		{
			id: 52,
			name: "Mud-Splattered Letter",
			type: "item",
			rarity: "junk",
			image: "assets/items/item/52.png",
			stack: 1,
			functionText: "Click to read",
			lore: "This letter looks undelivered. Perhaps you could do something about that?",
			onClickFunction: function (inventoryPosition) {
				Dom.text.page("Mud-Splattered Letter", Player.inventory.items[inventoryPosition].letterText, true);
			},
			onLoot: function (inventoryPosition) {
				ItemFunctions.setLetterText(inventoryPosition);
			},
		},
		{
			id: 53,
			name: "Screwed-Up Letter",
			type: "item",
			rarity: "junk",
			image: "assets/items/item/53.png",
			stack: 1,
			functionText: "Click to read",
			lore: "This letter looks undelivered. Perhaps you could do something about that?",
			onClickFunction: function (inventoryPosition) {
				Dom.text.page("Screwed-Up Letter", Player.inventory.items[inventoryPosition].letterText, true);
			},
			onLoot: function (inventoryPosition) {
				ItemFunctions.setLetterText(inventoryPosition);
			},
		},
		{
			id: 54,
			name: "Water-Soaked Letter",
			type: "item",
			rarity: "junk",
			image: "assets/items/item/54.png",
			stack: 1,
			functionText: "Click to read",
			lore: "This letter looks undelivered. Perhaps you could do something about that?",
			onClickFunction: function (inventoryPosition) {
				Dom.text.page("Water-Soaked Letter", Player.inventory.items[inventoryPosition].letterText, true);
			},
			onLoot: function (inventoryPosition) {
				ItemFunctions.setLetterText(inventoryPosition);
			},
		},
		{
			id: 55,
			name: "Cattails",
			type: "item",
			category: "flower",
			rarity: "junk",
			image: "assets/items/item/55.png",
			stack: 64,
			functionText: "",
			lore: "Has some alchemichal uses."
		},
		{
			id: 56,
			name: "Ley҈Fracture", // see if this unicode causes any problems..
			type: "item",
			rarity: "common",
			image: "assets/items/item/56.png",
			stack: 64,
			sellPrice: 2,
			lore: "A strange manifestation of Antorax's ley linesₒ"
		},
		{
			id: 57,
			name: "Juggling Ball",
			type: "item",
			rarity: "common",
			image: "assets/items/item/57.png",
			stack: 8,
			lore: "",
			quest: true, // tbd once peter has added onDiscard, make this not a quest item but reset the quest variable if discarded
		},
		{
			id: 58,
			name: "Brass Bugle",
			type: "item",
			rarity: "common",
			image: "assets/items/item/58.png",
			lore: "",
			onClickFunction: function () {
				// play a sound?
				Dom.chat.playerMessage("/me toots bugle");
			},
			cooldown: 5,
			quest: true, // tbd once peter has added onDiscard, make this not a quest item but reset the quest variable if discarded
		},
		{
			id: 59,
			name: "Triangle",
			type: "item",
			rarity: "common",
			image: "assets/items/item/59.png",
			lore: "",
			onClickFunction: function () {
				// play a sound?
				Dom.chat.playerMessage("/me dings triangle");
			},
			cooldown: 5,
			quest: true, // tbd once peter has added onDiscard, make this not a quest item but reset the quest variable if discarded
		},
		{
			id: 60,
			name: "Confetti Launcher",
			type: "item",
			rarity: "common",
			image: "assets/items/item/60.png",
			lore: "",
			uses: 5, // so that they have an incentive to finish the quest lol!
			onClickFunction: function (inventoryPosition) {
				if (Player.inventory.items[inventoryPosition].uses > 0) {
					// play a sound?

					Player.inventory.items[inventoryPosition].uses--;

					for (let i = 0; i < 50; i++) {
						let moveTowards = {
							x: Random(Game.hero.x - 60, Game.hero.x + 60),
							y: Random(Game.hero.y - 60, Game.hero.y + 60),
							speed: 100,
						}

						Game.createParticle({
							map: map,
							x: Game.hero.x,
							y: Game.hero.y,
							width: 15,
							height: 7,
							colour: ["#02B417", "#0000A1", "#F2F200", "#8E00DA"], // class Particle chooses random colour from array
							removeIn: Random(10000, 11000),
							rotation: "random",
							moveTowards: moveTowards,
						});
					}
				}
				else {
					Dom.chat.insert("<i>The Confetti Launcher has run out of confetti!</i>");
				}
			},
			cooldown: 5,
			quest: true, // tbd once peter has added onDiscard, make this not a quest item but reset the quest variable if discarded
		},
		{
			id: 61,
			name: "Honeycomb",
			type: "item",
			image: "assets/items/item/61.png",
			rarity: "junk",
			stack: 64,
			sellPrice: 1,
			sellQuantity: 8,
		},
		{
			id: 62,
			name: "Bee Sting",
			type: "item",
			image: "assets/items/item/62.png",
			rarity: "junk",
			stack: 64,
			sellPrice: 1,
			sellQuantity: 8,
			areas: ["eaglecrest"],
		},
		{
			id: 63,
			name: "Pink Alcea",
			type: "item",
			category: "flower",
			rarity: "junk",
			image: "assets/items/item/63.png",
			stack: 64,
		},
		{
			id: 64,
			name: "Poppy",
			type: "item",
			category: "flower",
			rarity: "junk",
			image: "assets/items/item/64.png",
			stack: 64,
		},
		{
			id: 65,
			name: "Orange Tulip",
			type: "item",
			category: "flower",
			rarity: "junk",
			image: "assets/items/item/65.png",
			stack: 64,
		},
		{
			id: 66,
			name: "Cyan Wallflower",
			type: "item",
			category: "flower",
			rarity: "junk",
			image: "assets/items/item/66.png",
			stack: 64,
		},
		{
			id: 67,
			name: "Wolfsbane",
			type: "item",
			category: "flower",
			rarity: "junk",
			image: "assets/items/item/67.png",
			stack: 32,
		},
		{
			id: 68,
			name: "Teal Callalily",
			type: "item",
			category: "flower",
			rarity: "junk",
			image: "assets/items/item/68.png",
			stack: 16,
		},
		{
			id: 69,
			name: "Royal Jelly",
			type: "item",
			rarity: "common",
			image: "assets/items/item/69.png",
			stack: 64,
			sellPrice: 1,
		},
		{
			id: 70,
			name: "Rusty Key",
			type: "item",
			rarity: "junk",
			image: "assets/items/item/70.png",
			lore: "'AUCTIONHOUSE' is engraved on the key."
		},
		{
			id: 71,
			name: "Iron Ore",
			type: "item",
			rarity: "crop",
			image: "assets/items/item/71.png",
			stack: 32,
		},
		{
			id: 72,
			name: "Beetroot",
			type: "item",
			category: "crop",
			rarity: "junk",
			image: "assets/items/item/72.png",
			stack: 32,
		},
		{
			id: 73,
			name: "Amaranth",
			type: "item",
			category: "crop",
			rarity: "junk",
			image: "assets/items/item/73.png",
			stack: 32,
		},
	],
	consumable: [
		{
			id: 0,
			name: "Test consumable 1",
			type: "consumable",
			image: "assets/items/consumable/2.png",
		},
		{
			id: 1,
			name: "Test consumable 2",
			type: "consumable",
			image: "assets/items/consumable/2.png",
		},
		{
			id: 2,
			name: "Potion of Strength I",
			type: "consumable",
			image: "assets/items/consumable/2.png",
			sellPrice: 2,
			functionText: "Increases damage dealt by 40% for 10 seconds",
            cooldown: 20, // 20 seconds
			onClickFunction: function (inventoryPosition) {
				// remove the item
				Dom.inventory.remove(inventoryPosition);

				// give strength I status effect to player
				Game.statusEffects.attackDamage({
					target: Game.hero,
					effectTitle: "Strength I",
					damageIncrease: 40,
					time: 10,
				});
			}
		},
		{
			id: 3,
			name: "Potion of Swiftness I",
			type: "consumable",
			image: "assets/items/consumable/3.png",
			sellPrice: 1,
			functionText: "Increases walk speed by 35% for 20 seconds",
            cooldown: 20, // 20 seconds
			onClickFunction: function (inventoryPosition) {
				// remove the item
				Dom.inventory.remove(inventoryPosition);

				// give swiftness I status effect to player
				Game.statusEffects.walkSpeed({
					target: Game.hero,
					effectTitle: "Swiftness I",
					speedIncrease: 35,
					time: 20,
				});
			}
		},
		{
			id: 4,
			name: "Potion of Health I",
			type: "consumable",
			image: "assets/items/consumable/4.png",
			sellPrice: 1,
			functionText: "Restores 15 health",
            cooldown: 20, // 20 seconds
			onClickFunction: function (inventoryPosition) {
				// remove the item
				Dom.inventory.remove(inventoryPosition);

				// restore the health
				Game.restoreHealth(Game.hero, 15);
			}
		},
		{
			id: 5,
			name: "Wood-Brewed Beer",
			type: "consumable",
			image: "assets/items/consumable/5.png",
			functionText: "Restores 20 health",
			lore: "Might make you a little tipsy...",
			sellPrice: 1,
			onClickFunction: function (inventoryPosition) {
				// complete quest from innkeeper
				Player.quests.questProgress.drunkBeer = Increment(Player.quests.questProgress.drunkBeer);

				// remove the item
				Dom.inventory.remove(inventoryPosition);

				// restore the health
				Game.restoreHealth(Game.hero, 20);
				// make the player tipsy!
				Game.statusEffects.attackDamage({
					target: Game.hero,
					effectTitle: "Tipsy",
					effectDescription: "Reduced attack damage",
					damageIncrease: -20,
					time: 60,
					effectStack: "multiply",
				});
			},
			quest: function(){
				return !Player.quests.completedQuestArray.includes("A Drink on Us!");
			},
		},
		{
			id: 6,
			name: "Goblin Brewed Potion",
			type: "consumable",
			image: "assets/items/consumable/6.png",
			functionText: "I wonder what this does?",
            cooldown: 20, // 20 seconds
			onClickFunction: function (inventoryPosition) {
				// remove the item
				Dom.inventory.remove(inventoryPosition);

				// do something crazy!
				let effectNumber = Random(0, 3);
				switch(effectNumber) {
					case 0:
						// give strength I status effect to player
						Game.statusEffects.attackDamage({
							target: Game.hero,
							effectTitle: "Strength I",
							damageIncrease: 40,
							time: 10,
						});
						Dom.chat.insert("<i>You feel stronger - the potion grants +40% damage for 10 seconds.</i>");
						break;
					case 1:
						// give swiftness I status effect to player
						Game.statusEffects.walkSpeed({
							target: Game.hero,
							effectTitle: "Swiftness I",
							speedIncrease: 35,
							time: 20,
						});
						Dom.chat.insert("<i>Your feet feel lighter - the potion grants +35% speed for 20 seconds.</i>");
						break;
					case 2:
						// give vulnerability status effect to player
						Game.statusEffects.defence({
							target: Game.hero,
							effectTitle: "Vulnerability",
							defenceIncrease: -50,
							time: 10,
						});
						Dom.chat.insert("<i>You feel tired and weak - the potion imbues 50% vulnerability for 10 seconds.</i>");
						break;
					case 3:
						// deal 25 damage over 5 seconds to the player
						Game.statusEffects.poison({
							target: Game.hero,
							poisonDamage: 25,
							time: 5,
						});
						Dom.chat.insert("<i>You feel feverish - the potion has poisoned you to take 25 damage over 5 seconds.</i>");
						break;
				}
			}
		},
		{
			id: 7,
			name: "Goblin Trap",
			type: "consumable",
			image: "assets/items/consumable/7.png",
			functionText: "Places a trap (can only be used in The Nilbog or The Tower)",
			lore: "Like a bear trap, but ickier.",
			onClickAreaRequirement: ["nilbog", "nilbogTower1", "nilbogTower2", "nilbogTower3", "nilbogTower4", "nilbogTower5"],
			onClickFunction: function (inventoryPosition) {
				// check it would not touch an existing trap
				let trapArray = Game.things.filter(thing => thing.name === "Goblin Trap");
				if (!Game.hero.isTouchingType(trapArray)) {
					// remove the item
					Dom.inventory.remove(inventoryPosition);

					// quest progress
					Player.quests.questProgress.goblinTrapsPlaced = Increment(Player.quests.questProgress.goblinTrapsPlaced);

					// place trap
					let trapObject = {
						map: map,
						image: "trap",
						name: "Goblin Trap",
						x: Game.hero.x,
						y: Game.hero.y + 40,
						type: "things",
					};
					Game.things.push(new Thing(trapObject)); // place trap in the current area
					Areas[Game.areaName].things.push(trapObject); // save in areadata.js for if the player leaves and rejoins the area
				}
			}
		},
		{
			id: 8,
			name: "Can of Worms",
			type: "consumable",
			sellPrice: 3,
			image: "assets/items/consumable/8.png",
			functionText: "Guarantees you to fish up a fish on your next fishing attempt",
			maxCharges: 3,
			onClickFunction: function (inventoryPosition, hotbar) {
				if (!Game.hero.hasStatusEffect("Fish bait")) { // player does not have an existing fishing status effect
					// remove one charge from the item
					Dom.inventory.removeItemCharge(inventoryPosition, hotbar);

					// give fish bait status effect
					Game.hero.statusEffects.push(new statusEffect({
						title: "Fish bait",
						effect: "Guaranteed to fish up a fish on your next fishing attempt",
						image: "bait",
					}));

					// update status effect display
					Game.hero.updateStatusEffects();

					// give quest progress for "learning to fish II"
					Player.quests.questProgress.hasUsedBait = true;
				}
			}
		},
		{
			id: 9,
			name: "Samhain Pot o' Gloop",
			type: "consumable",
			sellPrice: 1,
			image: "assets/items/consumable/9.png",
			functionText: "Gives you a random spooky status effect",
            cooldown: 20, // 20 seconds
			maxCharges: 3,
			onClickFunction: function (inventoryPosition, hotbar) {
				// remove one charge from the item
				Dom.inventory.removeItemCharge(inventoryPosition, hotbar);

				// spooky status effect...
				let effectNumber = Random(0, 2);
				switch(effectNumber) {
					case 0:
						// give +100% lifesteal to the player for 10s
						Game.statusEffects.lifesteal({
							target: Game.hero,
							effectTitle: "Vampiric Touch",
							lifestealIncrease: 100,
							time: 10,
						});
						Dom.chat.insert("<i>The thirst of a vampire washes through you, granting +100% lifesteal for 10 seconds.</i>");
						break;
					case 1:
						// give stealth to the player
						Game.statusEffects.stealth({
							target: Game.hero,
							effectTitle: "Ghostly Stealth",
						});
						Dom.chat.insert("<i>The presence of a ghost incites you, granting stealth.</i>");
						break;
					case 2:
						// give -50% walk speed to the player
						// this is a curse, so when an enemy is attacked it is passed on to them instead
						Game.statusEffects.walkSpeed({
							target: Game.hero,
							effectTitle: "Curse of Fatigue",
							effectDescription: "% walk speed (this is passed on to your next attacked enemy)",
							speedIncrease: -50,
							curse: true,
						});
						Dom.chat.insert("<i>A curse strikes you, reducing your walk speed by 50% but passing onto your next attacked enemy.</i>");
						break;
				}
			},
			lore: "Stick your hand in, just like your ancestors once did!",
		},
		{
			id: 10,
			name: "Bunch of Blood Bats",
			type: "consumable",
			sellPrice: 2,
			image: "assets/items/consumable/10.png",
			functionText: "Sends a bat out to seek out the nearest enemy, dealing 5 damage and stunning them for 1s",
            cooldown: 15, // 15 seconds
			maxCharges: 3,
			onClickFunction: function (inventoryPosition, hotbar) {

				// find closest enemy
				let moveTowards = Game.closest(Game.enemies, Game.hero);

				if (moveTowards !== undefined) {
					// there is an enemy

					// remove one charge from the item
					Dom.inventory.removeItemCharge(inventoryPosition, hotbar);

					// summon bat projectile
					Game.projectiles.push(new Projectile({
						map: map,
						x: Game.hero.x,
						y: Game.hero.y,
						stats: {
							damage: 5,
							stun: 1,
						},
						attacker: Game.hero,
						targets: [[moveTowards]],
						image: "bloodBat",
						moveTowards: moveTowards,
						moveSpeed: 250,
						type: "projectiles",
					}));
				}
			},
			lore: "",
			requiredImages: { // images that should be loaded for this item
				bloodBat: {normal: "./assets/projectiles/bloodBat.png"},
			},
		},
		{
			id: 11,
			name: "Potion of Goblin Resistance",
			type: "consumable",
			image: "assets/items/consumable/11.png",
			sellPrice: 2,
			functionText: "Increases defence against Nilbog goblins by 100% for 15 seconds",
            cooldown: 20, // 20 seconds
			onClickFunction: function (inventoryPosition) {
				// remove the item
				Dom.inventory.remove(inventoryPosition);

				// give the status effect
				Game.statusEffects.defence({
					target: Game.hero,
					effectTitle: "Goblin Resistance",
					defenceIncrease: 100,
					time: 15,
					subSpecies: "nilbog goblin",
				});
			}
		},
		{
			id: 12,
			name: "Magnetised Lure",
			type: "consumable",
			image: "assets/items/consumable/12.png",
			sellPrice: 2, // sells for less with less charges
			functionText: "Allows you to ONLY fish up junk items for your next fishing attempt",
			maxCharges: 10,
			onClickFunction: function (inventoryPosition, hotbar) {
				if (!Game.hero.hasStatusEffect("Fish bait")) { // player does not have an existing fishing status effect
					// remove one charge from the item
					Dom.inventory.removeItemCharge(inventoryPosition, hotbar);

					// give fish bait status effect
					Game.hero.statusEffects.push(new statusEffect({
						title: "Fish bait",
						effect: "You can only fish up junk items for your next fishing attempt",
						info: {
							skillIncrease: -1000,
						},
						image: "bait",
					}));

					// update status effect display
					Game.hero.updateStatusEffects();
				}
			},
		},
		{
			id: 13,
			name: "Displacement Grenade",
			type: "consumable",
			image: "assets/items/consumable/13.png",
			sellPrice: 1,
			functionText: "Blows all nearby characters away from their location upon use",
			onClickFunction: function (inventoryPosition) {
				// remove the item
				Dom.inventory.remove(inventoryPosition);

				// displace player
				Game.hero.displace(0, 180, 1.5, ToRadians(Random(0, 360)));
				// displace enemies
				let enemiesInRange = Game.enemies.filter(enemy => Game.areNearby(Game.hero, enemy, 180));
				enemiesInRange.forEach(enemy => {
					enemy.displace(0, 180, 1.5, Game.bearing(Game.hero, enemy));
				});
				// tbd displace characters?
			},
		},
		{
			id: 14,
			name: "Position Reverser",
			type: "consumable",
			image: "assets/items/consumable/14.png",
			sellPrice: 1,
			functionText: "Swaps your position with a random enemy in the current area",
			onClickFunction: function (inventoryPosition) {
				if (Game.enemies.length > 0) { // check there is an enemy to swap with
					// remove the item
					Dom.inventory.remove(inventoryPosition);

					// pick random enemy
					let enemies = Game.enemies.filter(enemy => !enemy.respawning);
					let enemy = enemies[Random(0, enemies.length-1)];

					Game.swapPositions(Game.hero, enemy);
				}
			},
		},
		{
			id: 15,
			name: "Restorative Timepiece",
			type: "consumable",
			image: "assets/items/consumable/15.png",
			sellPrice: 1,
			functionText: "In 5 seconds, set your health to the value it is now",
			onClickFunction: function (inventoryPosition) {
				// remove the item
				Dom.inventory.remove(inventoryPosition);

				let oldHealth = Math.round(Game.hero.health);
				Game.statusEffects.generic({
					target: Game.hero,
					effectTitle: "Restorative Timepiece",
					effectDescription: "Your health will be set to " + oldHealth + " after a delay",
					time: 5,
					imageName: "timer",
					increasePropertyName: "oldHealth",
					increasePropertyValue: oldHealth,
					onExpire: "setHealth",
				});
			},
		},
		{
			id: 16,
			name: "Mulled Wine",
			type: "consumable",
			image: "assets/items/consumable/16.png",
			functionText: "Restores 35 health",
			lore: "Don't worry, side effects are in the Christmas spirit.",
			sellPrice: 1,
			onClickFunction: function (inventoryPosition) {
				// remove the item
				Dom.inventory.remove(inventoryPosition);

				// restore the health
				Game.restoreHealth(Game.hero, 35);
				// make the player tipsy!
				Game.statusEffects.attackDamage({
					target: Game.hero,
					effectTitle: "Tipsy",
					damageIncrease: -20,
					time: 60,
					effectStack: "multiply",
				});

				// achievement progress
				Player.quests.questProgress.mulledWine = true;
			}
		},
		{
			id: 17,
			name: "Christmas Potion",
			type: "consumable",
			image: "assets/items/consumable/17.png",
			functionText: "Increases non-quest XP gain by 30% for 30 seconds",
			lore: "This potion is made with a secret ingredient only found at Christmas.",
			sellPrice: 1,
            cooldown: 20, // 20 seconds
			onClickFunction: function (inventoryPosition) {
				// remove the item
				Dom.inventory.remove(inventoryPosition);

				Game.statusEffects.xp({
					target: Game.hero,
					effectTitle: "XP Bonus",
					xpIncrease: 30,
					time: 30,
				});
			}
		},
		{
			id: 18,
			name: "Christmas Sapling",
			type: "consumable",
			image: "assets/items/consumable/18.png",
			functionText: "Places a christmas decoration in the Logging Camp.",
			lore: "It will soon flourish into a beautiful tree!",
			onClickEventRequirement: "Christmas",
			onClickAreaRequirement: ["eaglecrestLoggingCamp"],
			onClickFunction: function (inventoryPosition) {
				// check it would not touch an existing tree
				let treeArray = Game.things.filter(thing => thing.name === "Christmas Sapling");
				if (!Game.hero.isTouchingType(treeArray)) {
					// remove the item
					Dom.inventory.remove(inventoryPosition);

					// quest progress
					Player.quests.questProgress.christmasSaplingsPlaced = Increment(Player.quests.questProgress.christmasSaplingsPlaced);

					// place sapling
					let saplingObject = {
						map: map,
						image: "christmasSapling",
						name: "Christmas Sapling",
						x: Game.hero.x,
						y: Game.hero.y,
						type: "things",
					};
					Game.things.push(new Thing(saplingObject)); // place in the current area
					Areas.eaglecrestLoggingCamp.things.push(saplingObject); // save in areadata.js for if the player leaves and rejoins the area
				}
			}
		},
		{
			id: 19,
			name: "Antorax Day Firework",
			type: "consumable",
			image: "assets/items/consumable/19.png",
			functionText: "Launches a firework to celebrate Antorax Day.",
			lore: "", // tbd
            cooldown: 1, // 1 second
			onClickEventRequirement: "Antorax",
			onClickFunction: function (inventoryPosition) {
				// remove the item
				Dom.inventory.remove(inventoryPosition);
				// set firework timeout
				Game.setTimeout(function () {
					Game.launchFirework({
						x: Game.hero.x,
						y: Game.hero.y - 100,
						radius: 150,
						particles: 600,
						explodeTime: 500,
						lingerTime: 1500,
						colours: ["#8cff91", "#ff82f8"], // lighter colours so they are more visible
					});
				}, 1000); // launch in 1 second
			},
		},
		{
			id: 20,
			name: "Large Antorax Day Firework",
			type: "consumable",
			image: "assets/items/consumable/19.png", // same image as normal firework (TBD)
			functionText: "Launches a large firework to celebrate Antorax Day.",
			lore: "Why not go bigger?",
            cooldown: 5, // 5 seconds
			onClickEventRequirement: "Antorax",
			onClickFunction: function (inventoryPosition) {
				// remove the item
				Dom.inventory.remove(inventoryPosition);
				Game.setTimeout(function () {
					// set firework timeout
					Game.launchFirework({
						x: Game.hero.x,
						y: Game.hero.y - 130,
						radius: 250,
						particles: 1500,
						explodeTime: 750,
						lingerTime: 2500,
						colours: ["#8cff91", "#ff82f8"], // lighter colours so they are more visible
					});
				}, 1500); // launch in 1.5 seconds
			},
		},
		{
			id: 21,
			name: "Beetroot Beer",
			type: "consumable",
			image: "assets/items/consumable/21.png",
			functionText: "Restores 30 health",
			lore: "Might make you a little tipsy...",
			sellPrice: 1,
			onClickFunction: function (inventoryPosition) {
				// remove the item
				Dom.inventory.remove(inventoryPosition);

				// restore the health
				Game.restoreHealth(Game.hero, 30);
				// make the player tipsy!
				Game.statusEffects.attackDamage({
					target: Game.hero,
					effectTitle: "Tipsy",
					effectDescription: "Reduced attack damage",
					damageIncrease: -20,
					time: 60,
					effectStack: "multiply",
				});
			},
		},
		{
			id: 22,
			name: "Chaser's Gauntlet",
			type: "consumable",
			image: "assets/items/consumable/22.png",
			functionText: "Invite all online players to a game of tag",
			sellPrice: 2,
			onClickFunction: function (inventoryPosition) {
				// check websocket is open
				if (ws === false || ws.readyState !== 1) {
					Dom.chat.insert("You must be connected to a server to use that item.");
				}
				// check there is at least one other player online
				else if (Dom.players.length < 2) {
					Dom.chat.insert("There are not enough players connected to the server to start the game. Get some friends to come on!");
				}
				// check there is not another game active
				else if (Game.minigameInProgress !== undefined) {
					Dom.chat.insert("There is already another global minigame active! Try again in a bit.");
				}
				else {
					// remove the item
					Dom.inventory.remove(inventoryPosition);

					// start the game!
					Game.tag.init();
				}
			},
		},
		{
			id: 23,
			name: "Potion of Evasion I",
			type: "consumable",
			image: "assets/items/consumable/23.png",
			sellPrice: 2,
			functionText: "Increases dodge chance by 40% for 10 seconds.",
            cooldown: 20, // 20 seconds
			onClickFunction: function (inventoryPosition) {
			   // remove the item
			   Dom.inventory.remove(inventoryPosition);

			   // status effect
			   Game.statusEffects.dodgeChance({
				   target: Game.hero,
				   effectTitle: "Evasion I",
				   statIncrease: 40,
				   time: 10,
			   });
		   },
		},
		{
			id: 24,
			name: "Potion of Regeneration I",
			type: "consumable",
			image: "assets/items/consumable/24.png",
			sellPrice: 2,
			functionText: "Increases health regen by 1.5 for 20 seconds.",
            cooldown: 20, // 20 seconds
			onClickFunction: function (inventoryPosition) {
                // remove the item
                Dom.inventory.remove(inventoryPosition);

                // status effect
                Game.statusEffects.healthRegen({
                    target: Game.hero,
                    effectTitle: "Regeneration I",
                    statIncrease: 1.5,
                    time: 20,
                });
            },
		},
		{
			id: 25,
			name: "Potion of Fire Resistance",
			type: "consumable",
			image: "assets/items/consumable/25.png",
			sellPrice: 1,
			functionText: "Makes you immune to fire damage for 15 seconds.",
            cooldown: 20, // 20 seconds
			onOpen: function (inventoryPosition) {
				Dom.inventory.remove(inventoryPosition);
				Dom.inventory.give(Items.item[27], 1, inventoryPosition);
			},
			onClickFunction: function (inventoryPosition) {
                // remove the item
                Dom.inventory.remove(inventoryPosition);

                // status effect
                Game.statusEffects.fireResistance({
                    target: Game.hero,
                    effectTitle: "Fire Resistance",
                    time: 15,
                });
            },
		},
		{
			id: 26,
			name: "Potion of Undying",
			type: "consumable",
			image: "assets/items/consumable/26.png",
            cooldown: 20, // 20 seconds
			sellPrice: 1, // tbc
			functionText: "tbd",
			onClickFunction: function (inventoryPosition) {
                // remove the item
                Dom.inventory.remove(inventoryPosition);

                // status effect
				// tbd
            },
		},
		{
			id: 27,
			name: "Potion of Water Walking",
			type: "consumable",
			image: "assets/items/consumable/27.png",
            cooldown: 60, // 60 seconds
			sellPrice: 1,
			functionText: "Allows you to walk on water for 30 seconds",
			onClickFunction: function (inventoryPosition) {
                // remove the item
                Dom.inventory.remove(inventoryPosition);

                // status effect
                Game.statusEffects.waterWalking({
                    target: Game.hero,
                    time: 60,
                });
            },
		},
		{
			id: 28,
			name: "Potion of Reflection I",
			type: "consumable",
			image: "assets/items/consumable/28.png",
            cooldown: 20, // 20 seconds
			sellPrice: 1, // tbc
			functionText: "tbd",
			onClickFunction: function (inventoryPosition) {
                // remove the item
                Dom.inventory.remove(inventoryPosition);

                // status effect
				// tbd
            },
		},
		{
			id: 29,
			name: "Elixir de Ubique",
			rarity: "mythic",
			type: "consumable",
			image: "assets/items/consumable/29.png",
			sellPrice: 40, // tbc
			functionText: "Restores your health to full",
			maxCharges: 2,
			onClickFunction: function (inventoryPosition, hotbar) {
				// remove one charge from the item
				Dom.inventory.removeItemCharge(inventoryPosition, hotbar);

                // restore health
				Game.hero.health = Game.hero.stats.maxHealth;
            },
			lore: "Use only as directed.",
		},
		{
			id: 30,
			name: "Pumpkin Brew",
			type: "consumable",
			image: "assets/items/consumable/30.png",
			functionText: "Restores 25 health, even during a Blood Moon",
			lore: "Side effects are the least of your worries!",
			sellPrice: 1,
			onClickFunction: function (inventoryPosition) {
				// remove the item
				Dom.inventory.remove(inventoryPosition);

				// restore the health
				Game.restoreHealth(Game.hero, 25, true);
				// make the player tipsy!
				Game.statusEffects.attackDamage({
					target: Game.hero,
					effectTitle: "Tipsy",
					damageIncrease: -20,
					time: 60,
					effectStack: "multiply",
				});

				// achievement progress
				Player.quests.questProgress.pumpkinBrew = true;
			}
		},
		{
			id: 31,
			name: "Cat Potion",
			type: "consumable",
			image: "assets/items/consumable/31.png",
			functionText: "Restores 10 health",
            cooldown: 10, // 10 seconds
			onClickFunction: function (inventoryPosition) {
				// remove the item
				Dom.inventory.remove(inventoryPosition);
				// restore the health
				Game.restoreHealth(Game.hero, 10);
			}
		},
		{
			id: 32,
			name: "Hive Honey",
			type: "consumable",
			image: "assets/items/consumable/32.png",
			functionText: "Restores 10 health",
            cooldown: 10, // 10 seconds
			onClickFunction: function (inventoryPosition) {
				// remove the item
				Dom.inventory.remove(inventoryPosition);
				// restore the health
				Game.restoreHealth(Game.hero, 10);
			}
		},
		{
			id: 33,
			name: "Dynamite",
			type: "consumable",
			image: "assets/items/consumable/33.png",
			functionText: "tbd",
            cooldown: 10, // tbc
			onClickFunction: function (inventoryPosition) {
				// tbd
			}
		},
		{
			id: 34,
			name: "Present",
			type: "consumable",
			image: "assets/items/consumable/34.png",
			functionText: "Click to open!",
			onClickFunction: function (inventoryPosition) {
				// remove item
				Dom.inventory.remove(inventoryPosition);
				// replace at the same slot
				let item = null;
				let itemQuantity = 0;
				if (Player.quests.questProgress.slingshotPresentsOpened === 8) {
					item = Items.bow[18]; // golden slingshot!~
					itemQuantity = 1;
				}
				else {
					switch (Random(1, 5)) {
						case 1:
							item = new UnId(Areas[Game.areaName].lootArea, Areas[Game.areaName].lootTier);
							itemQuantity = 1;
							break;
						case 2:
							item = Items.currency[2];
							itemQuantity = Random(2,4);
							break;
						case 3:
							item = Items.consumable[35]; // firework
							itemQuantity = 1;
							break;
						case 4:
							item = Items.consumable[24]; // regen potion
							itemQuantity = 1;
							break;
						case 5:
							item = Items.item[32]; // daisies - maybe make this a special flower or something?
							itemQuantity = 5;
							break;
					}
				}
				Dom.inventory.give(item, itemQuantity, inventoryPosition);
				Player.quests.questProgress.slingshotPresentsOpened = Increment(Player.quests.questProgress.slingshotPresentsOpened);
				User.progress.presentsOpened = Increment(User.progress.presentsOpened);
			}
		},
		{
			id: 35,
			name: "Huge Multicoloured Firework",
			type: "consumable",
			image: "assets/items/consumable/19.png", // tbd give it its own image
			functionText: "Lights up the skies!",
            cooldown: 5, // 5 seconds
			sellPrice: 2,
			onClickFunction: function (inventoryPosition) {
				// remove the item
				Dom.inventory.remove(inventoryPosition);
				Game.setTimeout(function () {
					// set firework timeout
					Game.launchFirework({
						x: Game.hero.x,
						y: Game.hero.y - 130,
						radius: 350,
						particles: 2500,
						explodeTime: 750,
						lingerTime: 3000,
						colours: ["#ff0000", "#ff7b00", "#ffff00", "#00ff00", "#00ffff", "7b00ff", "#ff00ff"], // same colours as multicoloured levelup firework
					});
				}, 1000); // launch in 1 second
			},
		},
		{
			id: 36,
			name: "Floral Honey",
			type: "consumable",
			image: "assets/items/consumable/32.png",
			functionText: "Restores 10 health",
            cooldown: 10, // 10 seconds
			onClickFunction: function (inventoryPosition) {
				// remove the item
				Dom.inventory.remove(inventoryPosition);
				// restore the health
				Game.restoreHealth(Game.hero, 10);
			}
		},
	],
	food: [
		{
			id: 0,
			name: "Bread",
			type: "food",
			image: "assets/items/food/0.png",
			sellPrice: 1,
			healthRestore: 25,
			healthRestoreTime: 10,
		},
		{
			id: 1,
			name: "Mince Pie",
			type: "food",
			image: "assets/items/food/1.png",
			sellPrice: 1,
			healthRestore: 40,
			healthRestoreTime: 10,
			lore: "A festive snack.",
			secondClick: function () {
				// achievement progress
			    Player.quests.questProgress.mincePie = true;
			},
		},
		{
			id: 2,
			name: "Christmas Pudding",
			type: "food",
			image: "assets/items/food/2.png",
			sellPrice: 1,
			healthRestore: 30,
			healthRestoreTime: 5,
			lore: "A festive pudding.",
			secondClick: function () {
				// achievement progress
			    Player.quests.questProgress.christmasPudding = true;
			},
		},
		{
			id: 3,
			name: "Antorax Day Birthday Cake",
			type: "food",
			image: "assets/items/food/3.png",
			sellPrice: 3,
			healthRestore: 33,
			healthRestoreTime: 3,
			lore: "Antorax turns three!",
		},
		{
			id: 4,
			name: "'Eaglecrest Finest' Sandwich",
			type: "food",
			image: "assets/items/food/4.png",
			sellPrice: 2,
			healthRestore: 50,
			healthRestoreTime: 15,
			lore: "Crisp beetroot chard with some indulgent beetroot spread."
		},
		{
			id: 5,
			name: "Beetroot Pie",
			type: "food",
			image: "assets/items/food/5.png",
			sellPrice: 3,
			healthRestore: 100,
			healthRestoreTime: 20,
			lore: "The official food of Eaglecrest.",
			// TBD extra stat given?
		},
		{
			id: 6,
			name: "Pumpkin Pie",
			type: "food",
			image: "assets/items/food/6.png",
			sellPrice: 3,
			healthRestore: 100,
			healthRestoreTime: 20,
			functionText: "Can restore health even during a Blood Moon",
			lore: "Are the pumpkins really small or is the pie really big?",
			secondClick: function () {
				// achievement progress
			    Player.quests.questProgress.pumpkinPie = true;
			},
			bloodMoonRestore: true,
		},
		{
			id: 7,
			name: "Samhain Caramel Apple",
			type: "food",
			image: "assets/items/food/7.png",
			sellPrice: 1,
			healthRestore: 30,
			healthRestoreTime: 4,
			functionText: "Can restore health even during a Blood Moon",
			lore: "", // tbd
			secondClick: function () {
				// achievement progress
			    Player.quests.questProgress.caramelApple = true;
			},
			bloodMoonRestore: true,
		},
		{
			id: 8,
			name: "Frogfruit",
			type: "food",
			image: "assets/items/food/8.png",
			sellPrice: 2,
			healthRestore: 30,
			healthRestoreTime: 3,
			lore: "", // tbd
		},
		{
			id: 9,
			name: "Antorax Day Birthday Cake",
			type: "food",
			image: "assets/items/food/9.png",
			sellPrice: 7,
			healthRestore: 77,
			healthRestoreTime: 7,
			lore: "Antorax turns seven!",
		},
		{
			id: 10,
			name: "Block of Cheese",
			type: "food",
			image: "assets/items/food/10.png",
			sellPrice: 1,
			sellQuantity: 4,
			stack: 16,
			healthRestore: 30,
			healthRestoreTime: 5,
		},
	],
	teleport: [
        {
            id: 0,
            name: "Logging Teleport Coin",
            type: "teleport",
            image: "assets/items/teleport/0.png",
            functionText: "Teleports you to the Treefellers' Tavern in the Logging Camp<br>(Can be used once a day)",
            sellPrice: 10,
            teleport: {
                x: 174,
                y: 156,
                location: "loggingCampTavern",
            },
            cooldown: 1000000, // 1 day (dhhmmss)
            lore: "A collectable coin.",
			channel: 5000,
        },
        {
            id: 1,
            name: "Eaglecrest Teleport Coin",
            type: "teleport",
            image: "assets/items/teleport/1.png",
            functionText: "Teleports you to the Eagle's Span Tavern in Eaglecrest City<br>(Can be used once a day)",
            sellPrice: 20,
            teleport: {
                x: 1158,
                y: 169,
                location: "eaglecrestTavern",
            },
            cooldown: 1000000, // 1 day (dhhmmss)
            lore: "A collectable coin.",
			channel: 5000,
        },
    ],
	marble: [
		{
			id: 0,
			name: "Abyssal Purple Marble",
			type: "marble",
			series: 1,
			image: "assets/items/marble/0.png",
			rarity: "unique",
			sellPrice: 4,
			//functionText: "Collecting many marbles of this colour may unravel cavern mysteries.",
			lore: "",
		},
		{
			id: 1,
			name: "Verdant Green Marble",
			type: "marble",
			series: 1,
			image: "assets/items/marble/1.png",
			rarity: "unique",
			sellPrice: 4,
			functionText: "",
			lore: "",
		},
		{
			id: 2,
			name: "Kaihpe Marble",
			type: "marble",
			series: 1,
			image: "assets/items/marble/2.png",
			rarity: "unique",
			sellPrice: 4,
			functionText: "",
			lore: "",
		},
		{
			id: 3,
			name: "Sanguine Marble",
			type: "marble",
			series: 1,
			image: "assets/items/marble/3.png",
			rarity: "unique",
			sellPrice: 4,
			functionText: "",
			lore: "",
		},
	],
	tool: [
		{
			id: 0,
			name: "Animal Lead",
			type: "tool",
			toolType: "lead",
			image: "assets/items/tool/0.png",
			rarity: "common",
			sellPrice: 2,
			functionText: "Can be used to move a domestic animal around",
			range: 150, // range it can be applied from
			leadRange: 250,
		},
		{
			id: 1,
			name: "Test tool",
			type: "tool",
			toolType: "test",
			image: "assets/items/tool/1.png",
			rarity: "common",
			functionText: "test",
			range: 150, // range it can be applied from
		},
		{
			id: 2,
			name: "Mop",
			type: "tool",
			toolType: "melee", // acts like how old swords used to
			image: "assets/items/tool/2.png",
			projectile: "slashWater",
			rarity: "common",
			quest: true,
			removeOnAbandon: "Cleaning the Floor",
			stats: {
				damage: 1,//?
			},
			functionText: "Cleans the floor",
			//range: melee??, // tbd
		},
		{
			id: 3,
			name: "Net",
			type: "tool",
			toolType: "melee", // acts like how old swords used to
			image: "assets/items/tool/3.png",
			projectile: "slash",
			rarity: "common",
			stats: {
				damage: 1,
			},
			functionText: "Can be used at a melee range to catch some small creatures",
			//range: melee??, // tbd
		},
		{
			id: 4,
			name: "Watering Can",
			type: "tool",
			toolType: "melee", // acts like how old swords used to
			image: "assets/items/tool/4.png",
			projectile: "slashWater",
			rarity: "common",
			stats: {
				damage: 0,
			},
			//range: melee??, // tbd
			//functionText: "",
		},
		{
			id: 5,
			name: "Golden Watering Can",
			type: "tool",
			toolType: "melee", // acts like how old swords used to
			image: "assets/items/tool/4.png",
			projectile: "slashWater",
			rarity: "mythic",
			stats: {
				damage: 0,
			},
			//range: melee??, // tbd
			//functionText: "",
		},
	],
	mount: [
		{
			id: 0,
			name: "Horse Whistle",
			type: "mount",
			image: "assets/items/mount/0.png",
			rarity: "unique",
			functionText: "Summons your horse mount!",
			mount: "whiteHorse", // set after quest is finished
			onClickFunction: function () {
				if (typeof Game.hero.summonedMount === "undefined") {
					Game.mounts.push(new Mount({
						passenger: Game.hero,
						x: Game.hero.x,
						y: Game.hero.y,
						direction: Game.hero.direction,
						//orderOffsetY: -150,
						rideAdjustY: -40,
						name: "Horsey",
						showNameTag: false,
						type: "mounts",
						hostility: "friendly",
						rotationImages: {
							up: "brownHorseBack",
							down: "brownHorseFront",
							left: "brownHorseLeft",
							right: "brownHorseRight",
						},
						crop: {
							x: 0,
							y: 0,
							width: 256,
							height: 256
						},
						stats: {
							maxHealth: 100,
						},
					}));
					Game.hero.getOnMount(Game.mounts[Game.mounts.length-1]);
					Game.hero.summonedMount = Game.mounts[Game.mounts.length-1];
				}
				else {
					// hero might not necessarily be mounted, but they do have a mount summoned

					if (Game.hero.mounted) {
						// throw hero off if they're mounted and moving too fast !
						if (Math.abs(Game.hero.mount.velocity) > Game.hero.mount.throwOffVelocity) {
							Game.hero.throwOffMount();
						}
						else {
							// unmount hero
							Game.hero.getOffMount();
						}
					}

					// remove the mount
					Game.removeObject(Game.hero.summonedMount.id, "mounts");
					Game.hero.summonedMount = undefined;

					// poof animation ? :)
				}
			}
		},
	],
	fish: [
		{
			id: 0,
			name: "Yellow Perch",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/0.png",
			rarity: "common",
			sellPrice: 1,
			lore: "",
			howToCatch: "Can be fished up from areas around Eaglecrest Logging Camp.",
			consumption: true,
			areas: ["loggingCamp"], // empty = every area
			length: {
				min: 10,
				avg: 19,
				max: 50,
			},
		},
		{
			id: 1,
			name: "Milkfish",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/1.png",
			imageArchaeology: "assets/items/fish/1archaeology.png",
			rarity: "unique",
			sellPrice: 2,
			lore: "",
			howToCatch: "Can be fished up from areas around Eaglecrest Logging Camp.",
			consumption: true,
			areas: ["loggingCamp"],
			length: {
				min: 50,
				avg: 100,
				max: 180,
			},
		},

		{
			id: 2,
			name: "Saffron Cod",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/2.png",
			imageArchaeology: "assets/items/fish/2archaeology.png",
			rarity: "common",
			sellPrice: 1,
			lore: "",
			howToCatch: "Can be fished up from areas around Eaglecrest Logging Camp.",
			consumption: true,
			areas: ["loggingCamp"],
			length: {
				min: 19,
				avg: 27,
				max: 55,
			},
		},

		{
			id: 3,
			name: "Pink Salmon",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/3.png",
			imageArchaeology: "assets/items/fish/3archaeology.png",
			rarity: "common",
			sellPrice: 1,
			lore: "",
			howToCatch: "Can be fished up from areas around Eaglecrest Logging Camp.",
			consumption: true,
			areas: ["loggingCamp"],
			length: {
				min: 40,
				avg: 50,
				max: 76,
			},
		},
		{
			id: 4,
			name: "Sea Trout",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/4.png",
			imageArchaeology: "assets/items/fish/4archaeology.png",
			rarity: "common",
			sellPrice: 1,
			lore: "",
			howToCatch: "Can be fished up from areas around Eaglecrest Logging Camp.",
			consumption: true,
			areas: ["loggingCamp"],
			length: {
				min: 40,
				avg: 72,
				max: 140,
			},
		},
		{
			id: 5,
			name: "Cobia",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/5.png",
			imageArchaeology: "assets/items/fish/5archaeology.png",
			rarity: "unique",
			sellPrice: 2,
			lore: "",
			howToCatch: "Can be fished up from areas around Eaglecrest Logging Camp.",
			consumption: true,
			areas: ["loggingCamp"],
			length: {
				min: 43,
				avg: 110,
				max: 200,
			},
		},
		{
			id: 6,
			name: "Dolphinfish",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/6.png",
			imageArchaeology: "assets/items/fish/6archaeology.png",
			rarity: "mythic",
			sellPrice: 4,
			lore: "",
			howToCatch: "Can be fished up from areas around Eaglecrest Logging Camp.",
			consumption: false,
			areas: ["loggingCamp"],
			length: {
				min: 35,
				avg: 100,
				max: 210,
			},
		},
		{
			id: 7,
			name: "Chimerafish",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/7.png",
			rarity: "mythic",
			sellPrice: 5,
			lore: "It grants your wishes... if your wish is for 5 gold.",
			howToCatch: "Can be fished up anywhere.",
			consumption: true,
			areas: [],
			length: {
				min: 10,
				avg: 25,
				max: 50,
			},
			catchRequirement: function () {
                // very rare!
                return Random(0, 23) === 22;
            },
		},
		{
			id: 8,
			name: "Old Boot",
			fishingType: "waterjunk",
			type: "fish",
			image: "assets/items/fish/8.png",
			rarity: "junk",
			sellPrice: 1,
			sellQuantity: 2,
			lore: "I wonder who this belongs to?",
			areas: [],
		},
		{
			id: 9,
			name: "Seaweed",
			fishingType: "waterjunk",
			type: "fish",
			image: "assets/items/fish/9.png",
			rarity: "junk",
			plural: true,
			sellPrice: 1,
			sellQuantity: 16,
			stack: 64,
			areas: [],
		},
		{
			id: 10,
			name: "Oak Driftwood",
			fishingType: "waterjunk",
			type: "fish",
			image: "assets/items/fish/10.png",
			rarity: "junk",
			plural: true,
			sellPrice: 1,
			sellQuantity: 16,
			stack: 16,
			areas: [],
		},
		{
			id: 11,
			name: "Birch Driftwood",
			fishingType: "waterjunk",
			type: "fish",
			image: "assets/items/fish/11.png",
			rarity: "junk",
			plural: true,
			sellPrice: 1,
			sellQuantity: 16,
			stack: 16,
			areas: [],
		},
		{
			id: 12,
			name: "Cherry Driftwood",
			fishingType: "waterjunk",
			type: "fish",
			image: "assets/items/fish/12.png",
			rarity: "junk",
			plural: true,
			sellPrice: 1,
			sellQuantity: 16,
			stack: 16,
			areas: [],
		},
		{
			id: 13,
			name: "Old Rusted Coin",
			fishingType: "waterjunk",
			type: "fish",
			image: "assets/items/fish/13.png",
			rarity: "junk",
			sellPrice: 1,
			sellQuantity: 4,
			stack: 264,
			lore: "An old coin from before Antorax was formed.",
			areas: [],
		},
		{
			id: 14,
			name: "Rusted Gold",
			fishingType: "waterjunk",
			type: "fish",
			image: "assets/items/fish/14.png",
			rarity: "junk",
			sellPrice: 1,
			sellQuantity: 1,
			stack: 264,
			lore: "It's too tarnished to be used as currency.",
			areas: [],
		},
		{
			id: 15,
			name: "Common Frog",
			fishingType: "watermisc",
			type: "fish",
			image: "assets/items/fish/15.png",
			rarity: "common",
			sellPrice: 1,
			lore: "",
			consumption: true,
			areas: ["eaglecrest"],
			clicksToCatch: 9,
			timeToCatch: 2000,
		},
		{
			id: 16,
			name: "Sunken Chest",
			fishingType: "watermisc",
			type: "fish",
			image: "assets/items/fish/16.png",
			rarity: "mythic",
			sellPrice: 3,
			lore: "It seems to be locked. You need a key to open it.",
			locked: true, // can only be opened if locked is false
			areas: [],
			clicksToCatch: 25,
			timeToCatch: 5000,
			onCatch: function (inventoryPosition) {
				if (inventoryPosition !== false) // otherwise item was not successfully added
				{
					let loot = [];
					// fill up chest
					// junk items
					let possibleJunkItems = Items.fish.filter(item => item.fishingType === "waterjunk"); // filter for junk fishing items
					let itemsChosen = 0; // cap out at 6 different junk items
					possibleJunkItems.forEach(item => {
						if (itemsChosen < 6 && Random(0, 2) === 0) { // 1 in 3 chance of it being in the chest
							let toBePushed = {};
							toBePushed.item = item;
							let itemStack = item.stack
							if (itemStack === undefined) {
								itemStack = 1;
							}
							else if (itemStack > 12) { // cap stack size at 12
								itemStack = 12;
							}
							toBePushed.quantity = Random(1, itemStack);
							loot.push(DeepCloneObject(toBePushed));
							itemsChosen++;
							if (Random(0, 2) === 0) { // 1 in 3 chance of a second stack
								toBePushed.quantity = Random(1, itemStack);
								loot.push(DeepCloneObject(toBePushed));
								itemsChosen++;
							}
						}
					});
					// old coins
					let goldStacks = Random(1, 4); // between 2 and 4 possible stacks of old coins
					for (let i = 0; i < goldStacks; i++) {
						let toBePushed = {
							item: Items.fish[13],
							quantity: Random(1, 5),
						};
						loot.push(toBePushed);
					}
					// unidentified items
					let unidentifiedNumber = Random(1, 3); // between 1 and 3 unidentified items
					for (let i = 0; i < unidentifiedNumber; i++) {
						let toBePushed = {
							item: new UnId(Player.lootArea, Player.lootTier),
							quantity: 1,
						};
						loot.push(toBePushed);
					}
					// Ocean Warrior's armour
					let armourType = Random(0, 3);
					let toBePushed = {
						quantity: 1,
					};
					switch(armourType) { // pick random piece of armour from that set
						case 0:
							toBePushed.item = Items.helm[6];
							break;
						case 1:
							toBePushed.item = Items.chest[6];
							break;
						case 2:
							toBePushed.item = Items.greaves[6];
							break;
						case 3:
							toBePushed.item = Items.boots[8];
							break;
					}
					loot.push(toBePushed);

					// format and position loot
					loot = Game.formatLoot(loot);
					loot = Game.positionLoot(loot, 24); // has 24 inventory space

					// set the chest's loot
					// 'this' cannot be used because onCatch is not bound to the chest
					Player.inventory.items[inventoryPosition].loot = loot;
				}
			},
			onOpen: function (inventoryPosition) { // opened by key
				if (Player.inventory.items[inventoryPosition].locked) {
					// unlock chest
					Player.inventory.items[inventoryPosition].locked = false;
					Player.inventory.items[inventoryPosition].lore = "Click to open!";
					return true; // consume key
				}
				else {
					// was already unlocked
					return false; // don't consume key
				}
			},
			onClickFunction: function (inventoryPosition) {
                // check the chest is not locked
                if (!Player.inventory.items[inventoryPosition].locked) {
                    // open loot page
                    Dom.loot.currentId = "i"+inventoryPosition; // so that Game.lootClosed knows to set its loot back to whatever wasn't looted (and remove the item if there isn't anything left)
					Dom.choose.page([{
                        npc: "Sunken Chest",
                        buttons: ["Loot chest!"],
                        functions: [Dom.loot.page],
                        parameters: [["Sunken Chest", Player.inventory.items[inventoryPosition].loot]]
                    }]);
                }
            },
		},
		{
			id: 17,
			name: "Sunken Key",
			fishingType: "watermisc",
			type: "fish",
			image: "assets/items/fish/17.png",
			rarity: "mythic",
			sellPrice: 1,
			lore: "I wonder what this opens?",
			areas: [],
			clicksToCatch: 6,
			timeToCatch: 1000,
			opens: {
				type: "fish",
				id: 16,
			},
		},
		{
			id: 18,
			name: "Message in a Bottle",
			fishingType: "waterjunk",
			type: "fish",
			image: "assets/items/fish/18.png",
			rarity: "junk",
			sellPrice: 1,
			sellQuantity: 4,
			lore: ["The message's ink appears to have washed off.",
			"The message reads: 'Dearest Audrey, I recently got into alchemy. I think I need an arm donor. Can use one of yours?'",
			"The message reads: 'Dearest Audrey, I hope you are well. Please send return with some gold. I will pay you back.",
			"The message reads: 'Dearest Audrey, I am sending this message from the Dragon Cove. We're looking for new volunteers to undertake our dragonkin convertee program. Reply if interested.'",
			"The message reads: 'Dearest Audrey, I have sent five other messages to you. Please check your nearby shores for them.'",
			"The message reads: 'Dearest Audrey, It is very cold at the moment so there is no sea. Decided to roll this bottle to you instead of the normal method. Please reply if it worked.'"],
			areas: [],
			clicksToCatch: 5,
			timeToCatch: 3000,
		},
		{
			id: 19,
			name: "Direweed",
			fishingType: "waterjunk",
			type: "fish",
			image: "assets/items/fish/19.png",
			rarity: "junk",
			plural: true,
			sellPrice: 1,
			sellQuantity: 16,
			stack: 64,
			lore: "Has some alchemical uses.",
			areas: ["loggingCamp"],
		},
		{
			// Blood Moon only
			id: 20,
			name: "Samhain Zombiefish",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/20.png",
			rarity: "unique",
			sellPrice: 2,
			lore: "Its red eyes glisten under the Blood Moon.",
			howToCatch: "Can be fished up during a Blood Moon.",
			consumption: false,
			areas: [],
			length: {
				min: 30,
				avg: 55,
				max: 80,
			},
			onCatch: function () {
				Game.hero.takeDamage(10);
				Dom.chat.insert("The Blood Moon's reflection shimmers in the water. An abberation of the past? Or an echo of the future? As you stare into the fish's eyes, you don't feel too great...");
				Dom.chat.insert("<i>You took 10 damage</i>");
			},
			timeRequirement: "bloodMoon",
		},
		{
			id: 21,
			name: "Well-Wrapped Present", // non-openable - first 2 presents for christmas fishing quest (third is id 22)
			fishingType: "watermisc",
			type: "fish",
			rarity: "common",
			quest: true,
			image: "assets/items/fish/21.png",
			functionText: "", // added by onCatch
			lore: "A bit soggy.",
			areas: ["loggingCamp"],
			clicksToCatch: 3,
			timeToCatch: 2000,
			catchRequirement: function () {
				return (Event.event === "Christmas"
				&& Player.quests.activeQuestArray.includes("Sunken Presents")
				&& (Player.quests.questProgress.christmasPresentsCaught === undefined
				|| Player.quests.questProgress.christmasPresentsCaught < 2)
				&& Player.quests.questProgress.christmasPresentsCaught === Player.quests.questProgress.christmasPresentsDelivered);
				// must deliver present before catching another
			},
			onCatch: function (inventoryPosition) {
				// quest variable increase
				Player.quests.questProgress.christmasPresentsCaught = Increment(Player.quests.questProgress.christmasPresentsCaught);
				// set function text and targetNPC
				let targetNPC = "";
				let forPlayer = false;
				if (Player.quests.questProgress.christmasPresentsCaught === 1) {
					targetNPC = "Soul Healer Nalaa";
				}
				else if (Player.quests.questProgress.christmasPresentsCaught === 2) {
					targetNPC = "Item Buyer Noledar";
				}
				let functionText = "To be delivered to " + targetNPC;
				Player.inventory.items[inventoryPosition].targetNPC = targetNPC;
				Player.inventory.items[inventoryPosition].functionText = functionText;
				Dom.alert.page("You fished up a present! Deliver it to its owner first, then try to fish up another.", 0, undefined, "game");
				// update quest log
				Dom.checkProgress();
			},
		},
		{
			id: 22,
			name: "Well-Wrapped Present", // openable by player
			fishingType: "watermisc",
			type: "fish",
			rarity: "common",
			// quest is set to true if it is the one that gives you the fishing rod
			image: "assets/items/fish/21.png", // same as 21
			functionText: "Click to open!",
			lore: "A bit soggy.",
			areas: [],
			clicksToCatch: 3,
			timeToCatch: 2000,
			catchRequirement: function () {
				// EITHER given as the third part of the christmas fishing quest which contains the fishing rod
				// OR given when fished up with the christmas fishing rod and these presents contain 3-5 gold
				return ((Event.event === "Christmas"
				&& Game.areaName === "tutorial"
				&& Player.quests.activeQuestArray.includes("Sunken Presents")
				&& Player.quests.questProgress.christmasPresentsCaught === 2
				&& Player.quests.questProgress.christmasPresentsDelivered === 2)
				|| (Player.inventory.weapon.type === "rod"
				&& Player.inventory.weapon.id === 4));
			},
			onCatch: function (inventoryPosition) {
				if (Player.quests.questProgress.christmasPresentsCaught === 2) {
					// third part of christmas fishing quest
					// quest variable increase
					Player.quests.questProgress.christmasPresentsCaught = 3;
					// functionText
					Player.inventory.items[inventoryPosition].functionText = "To be delivered to " + Player.name + "<br>Click to open!";
					// autocomplete quest
					Dom.checkProgress();
				}
				else
				{
					// list of areas with NPCs
					let possibleAreas = ["eaglecrestLoggingCamp", "tutorial", "eaglecrest", "eaglecrestBank", "eaglecrestBazaar", "theForge", "eaglecrest", "eaglecrestWest", "eaglecrestEast", "eaglecrestMonastery", "eaglecrestTavern"];
					let randomArea = Areas[possibleAreas[Random(0, possibleAreas.length - 1)]];
					let randomNPC = randomArea.npcs[Random(0, randomArea.npcs.length - 1)];
					randomNPC = Game.setInformationFromTemplate(randomNPC);

					Player.inventory.items[inventoryPosition].functionText = "To be delivered to " + randomNPC.name;

					if (randomArea === Player.areaName)
					{
						randomNPC = Game.npcs.find(npc => npc.name === randomNPC.name);
					}
					else
				    {
						randomNPC = randomArea.npcs.find(npc => npc.name === randomNPC.name);
					}
					randomNPC.roles.push({
						role: "function",
						chooseText: "Here is a present.",
						forceChoose: true, // forces choose dom
						onClick: function () {
							// remove the item
							Dom.inventory.removeById(22, "fish", 1);
							// chat
							if (Event.event === "Christmas") {
								Dom.chat.insert(Dom.chat.say(randomNPC.name, "Thank you for this present, here's a Christmas Token for your troubles."));
								Dom.inventory.give(Items.currency[5], 1);
							}
							else {
								Dom.chat.insert(Dom.chat.say(randomNPC.name, "Thank you for this present, here's some Gold for your troubles."));
								Dom.inventory.give(Items.currency[5], 3);
							}
							// achievement progress
							User.progress.presentsDelivered = Increment(User.progress.presentsDelivered);
							// because it thinks a dom page is open
							Dom.currentlyDisplayed = "";
							Dom.currentNPC = {};
						},
						roleRequirement: function () {
							return Dom.inventory.check(22, "fish", 1); // tbd needs to check it's delivered to them
						}
					});
				}
			},
			onClickFunction: function (inventoryPosition) { // if you don't have the christmas fishing rod, it gives it to you
				if (!Player.quests.questProgress.christmasFishingRod) {
					// fishing rod has not been obtained
					// remove item
					Dom.inventory.remove(inventoryPosition);
					// replace at the same slot
					Dom.inventory.give(Items.rod[4], 1, inventoryPosition);
					Player.quests.questProgress.christmasFishingRod = true; // now obtained
					// achievement progress
					User.progress.presentsOpened = Increment(User.progress.presentsOpened);
				}
			}
		},
		{
			id: 23,
			name: "Soggy Tendrils",
			fishingType: "waterjunk",
			type: "fish",
			image: "assets/items/fish/23.png",
			rarity: "junk",
			sellPrice: 1,
			sellQuantity: 16,
			stack: 64,
			plural: true,
			lore: "Not an evil species.",
			areas: ["eaglecrest"],
		},
		{
			id: 24,
			name: "Fallfish",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/24.png",
			imageArchaeology: "assets/items/fish/24archaeology.png",
			rarity: "common",
			sellPrice: 1,
			lore: "",
			howToCatch: "Can be fished up from areas around Eaglecrest Plains.",
			consumption: true,
			areas: ["eaglecrest"],
			length: {
				min: 12,
				avg: 17,
				max: 51,
			},
		},
		{
			id: 25,
			name: "Grayling",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/25.png",
			imageArchaeology: "assets/items/fish/25archaeology.png",
			rarity: "common",
			sellPrice: 1,
			lore: "",
			howToCatch: "Can be fished up from areas around Eaglecrest Plains.",
			consumption: true,
			areas: ["eaglecrest"],
			length: {
				min: 20,
				avg: 30,
				max: 60,
			},
		},
		{
			id: 26,
			name: "Rudd",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/26.png",
			imageArchaeology: "assets/items/fish/26archaeology.png",
			rarity: "common",
			sellPrice: 1,
			lore: "",
			howToCatch: "Can be fished up from areas around Eaglecrest Plains.",
			consumption: true,
			areas: ["eaglecrest"],
			length: {
				min: 15,
				avg: 20,
				max: 61.7,
			},
		},
		{
			id: 27,
			name: "Weatherfish",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/27.png",
			imageArchaeology: "assets/items/fish/27archaeology.png",
			rarity: "common",
			sellPrice: 1,
			lore: "",
			howToCatch: "Can be fished up from areas around Eaglecrest Plains.",
			consumption: true,
			areas: ["eaglecrest"],
			length: {
				min: 12,
				avg: 25,
				max: 30.7,
			},
		},
		{
			id: 28,
			name: "Asp",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/28.png",
			imageArchaeology: "assets/items/fish/28archaeology.png",
			rarity: "unique",
			sellPrice: 2,
			lore: "",
			howToCatch: "Can be fished up from areas around Eaglecrest Plains.",
			consumption: true,
			areas: ["eaglecrest"],
			length: {
				min: 10,
				avg: 55,
				max: 120,
			},
		},
		{
			id: 29,
			name: "Ide",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/29.png",
			imageArchaeology: "assets/items/fish/29archaeology.png",
			rarity: "unique",
			sellPrice: 2,
			lore: "",
			howToCatch: "Can be fished up from areas around Eaglecrest Plains.",
			consumption: true,
			areas: ["eaglecrest"],
			length: {
				min: 15,
				avg: 30,
				max: 85,
			},
		},
		{
			id: 30,
			name: "Goliath Grouper",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/30.png",
			imageArchaeology: "assets/items/fish/30archaeology.png",
			rarity: "mythic",
			sellPrice: 4,
			lore: "",
			howToCatch: "Can be fished up from areas around Eaglecrest Plains.",
			consumption: true,
			areas: ["eaglecrest"],
			length: {
				min: 85,
				avg: 115,
				max: 250,
			},
		},
		{
			id: 31,
			name: "Oscar",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/31.png",
			imageArchaeology: "assets/items/fish/31archaeology.png",
			rarity: "mythic",
			sellPrice: 4,
			lore: "",
			howToCatch: "Can be fished up from areas around Eaglecrest Plains.",
			consumption: true,
			areas: ["eaglecrest"],
			length: {
				min: 17,
				avg: 24,
				max: 46,
			},
		},
		{
			id: 32,
			name: "Swamp Eel",
			fishingType: "watermisc",
			type: "fish",
			image: "assets/items/fish/32.png",
			rarity: "common",
			sellPrice: 1,
			lore: "",
			consumption: true, // delicacy :o
			areas: ["loggingCamp"],
			clicksToCatch: 9,
			timeToCatch: 2000,
		},
		{
			id: 33,
			name: "Frogspawn",
			fishingType: "waterjunk",
			type: "fish",
			image: "assets/items/fish/33.png",
			rarity: "junk",
			plural: true,
			stack: 4,
			sellPrice: 1,
			sellQuantity: 16,
			areas: ["eaglecrest"],
		},
		{
			id: 34,
			name: "Tadpole",
			fishingType: "waterjunk",
			type: "fish",
			image: "assets/items/fish/34.png",
			rarity: "junk",
			stack: 64,
			sellPrice: 1,
			sellQuantity: 16,
			areas: ["eaglecrest"],
		},
		{
			// Winter only
			id: 35,
			name: "Walleye",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/35.png",
			imageArchaeology: "assets/items/fish/35archaeology.png",
			rarity: "unique",
			sellPrice: 2,
			howToCatch: "Can be fished up during the winter.",
			areas: [],
			length: {
				min: 32,
				avg: 54,
				max: 107,
			},
			catchRequirement: function () {
                return Event.season === "winter";
            },
		},
		{
			id: 36, // identical to the one in items that can be dropped by frogs
			name: "Water-Soaked Letter",
			type: "fish",
			fishingType: "waterjunk",
			areas: ["eaglecrest"],
			rarity: "junk",
			image: "assets/items/item/54.png",
			stack: 1,
			functionText: "Click to read",
			lore: "This letter looks undelivered. Perhaps you could do something about that?",
			onClickFunction: function (inventoryPosition) {
				Dom.text.page("Water-Soaked Letter", Player.inventory.items[inventoryPosition].letterText, true);
			},
			onCatch: function (inventoryPosition) {
				ItemFunctions.setLetterText(inventoryPosition);
			},
			catchRequirement: function () {
                // very rare!
                return Random(0, 7) === 1;
            },
		},
	],
	dev: [
		{
			id: 0,
			name: "Place Object",
			type: "dev",
			image: "assets/items/dev/0.png",
			rarity: "common",
			functionText: "Place object at player location",
			onClickFunction: function (inventoryPosition) {
				let object = {
					map: map,
					image: Game.creativeImage,
					name: Game.creativeName,
					x: Round(Game.hero.x, 1),
					y: Round(Game.hero.y, 1),
					type: "things",
					dev: true,
				};
				Game.things.push(new Thing(object));
			},
		},
		{
			id: 1,
			name: "Remove Object",
			type: "dev",
			image: "assets/items/dev/1.png",
			rarity: "common",
			functionText: "Remove placed object at player location",
			onClickFunction: function () {
				let touching = Game.hero.getTouching();
				// remove the dev object which has been placed most recently (has highest id)
				let highestId = Number.MIN_VALUE;
				let objectIndex = -1;
				for (let i = 0; i < touching.length; i++) {
					if (touching[i].dev) {
						if (touching[i].id >= highestId) {
							highestId = touching[i].id;
							objectIndex = i;
						}
					}
				}
				if (objectIndex !== -1) {
					Game.removeObject(touching[objectIndex].id, touching[objectIndex].type);
				}
			}
		},
		{
			id: 2,
			name: "Export Objects",
			type: "dev",
			image: "assets/items/dev/2.png",
			rarity: "common",
			functionText: "Export all placed objects into code",
			onClickFunction: function () {
				// placedItems string for exporting
				let numThings = 0;
				let code = "<div class='codeExportText'>";
				let xPositions = "<div class='codeExportText' height='100px'>[";
				let yPositions = "<div class='codeExportText' height='100px'>[";
				for (let i = 0; i < Game.allThings.length; i++) {
					let obj = Game.allThings[i];
					if (obj.dev) {
						code += "{x: "+obj.x+", y: "+obj.y+", image: '"+obj.imageName+"', name: '"+obj.name+"'},<br>";
						xPositions += obj.x+", ";
						yPositions += obj.y+", ";
						numThings++;
					}
				}
				code += "</div><br>";
				xPositions = xPositions.substring(0, xPositions.length-2) + "]</div><br>"; // get rid of comma at end and end array
				yPositions = yPositions.substring(0, yPositions.length-2) + "]</div><br>";
				if (numThings > 0) {
					Dom.alert.page(code+xPositions+yPositions); // tbd make a copy to clipboard button?
				}
				else {
					Dom.alert.page("You don't have any placed objects to export!");
				}
			}
		},
		//Dom.alert.page("Please enter the imageName of the item", "input", undefined, undefined, {target:function (input) {}})
		{
			id: 3,
			name: "Save Player Position",
			type: "dev",
			image: "assets/runes/7.png", // temp
			rarity: "common",
			functionText: "Save the player's current location to the clipboard",
			onClickFunction: function () {
				let textToCopy = "x: " + Round(Game.hero.x, 1) + ", y: " + Round(Game.hero.y, 1) + ",";
				// copy to clipboard!
				CopyToClipboard(textToCopy);
			}
		},
		{
			id: 4,
			name: "Create Boundary: Place starting point",
			type: "dev",
			image: "assets/items/dev/4.png",
			rarity: "common",
			functionText: "Place the starting point of a boundary, to be saved to clipboard",
			onClickFunction: function (inventoryPosition) {
				let thisItem = Player.inventory.items[inventoryPosition];
				// see what state this item is in
				if (thisItem.name === "Create Boundary: Place starting point") {
					thisItem.startingPoint = {x: Round(Game.hero.x, 1), y: Round(Game.hero.y, 1)};

					thisItem.name = "Create Boundary: Place end point";
				}
				else if (thisItem.name === "Create Boundary: Place end point") {
					thisItem.finishingPoint = {x: Round(Game.hero.x, 1), y: Round(Game.hero.y, 1)};

					let x = Math.min(thisItem.startingPoint.x, thisItem.finishingPoint.x);
					let y = Math.min(thisItem.startingPoint.y, thisItem.finishingPoint.y);
					let width = Round(Math.abs(thisItem.finishingPoint.x - thisItem.startingPoint.x), 1);
					let height = Round(Math.abs(thisItem.finishingPoint.y - thisItem.startingPoint.y), 1);

					// copy to clipboard
					let textToCopy = "{x: " + x + ", y: " + y + ", width: " + width + ", height: " + height + "},";
					// copy to clipboard!
					CopyToClipboard(textToCopy);

					// draw boundary on map
					Game.shapes.push(new Shape ({
						x: x,
						y: y,
						width: width,
						height: height,
						shape: "rect",
						borderColour: "#8653fd",
						thickness: 5,
						type: "shapes",
					}));

					thisItem.name = "Create Boundary: Place starting point";
				}
			}
		},
	],
};

const LostLetterMessages = {
	curseOfTheWizard: `Please make haste,<br>
		There is no time to waste!<br>
		It has been icey this winter and a wizard fell And out of anger cast a spell!<br>
		I seem forced to speak in rhyme,<br>
		Constantly all the time !<br>
		It is rather quite troublesome and so I write to you, I wish it were not true.<br>
		I have been made to look lime a fool, People will think I am a right tool !<br>
		I fear this curse will lead to trouble,<br>
		If you do not get here on the double.`,

	goblinAmbush: `Oh dear ! Frederick my old pal, please hurry to the Nilbog. Those dastardly fiends took me by surprise while I was making my deliveries and took everything ! One of them managed to pierce me what I can only presume was a poisoned arrow. Im no doctor but I do not think I have long and so I urge you to hurry before it is too late !<br><br>
		I am not certain if you are caught up on herbal remedies but I urge you to bring some kind of antidote; the poison seems to be spreading as I write this and I cannot seem to feel my legs! I knew I should have gone a different route, if only somebody could sort out this cursed plane. Please do hurry Frederick, I feel myself growing weaker by the sec——-`,

	theBanquet: `For the editors at Eagle-crest I suggest we post-pone the publication of a review for the new tavern that opened. I am not entirely sure this place is really a tavern…upon my arrival I noticed I was the only person there and the establishment looked rather abandoned aside from a man in a cloak. Said man titled himself as the waiter although he certainly didn’t match the appearance of any waiters I’ve seen.<br><br>
		Anyway, I inquired as to the menu and was told I’d receive my food shortly and was given no choice of items at all ! This place clearly hasn’t kept to the dietary requirement orders sent by the city…<br><br>
		The ‘food’ I did receive looked very questionable indeed. It was some kind of green and murky liquid, soup perhaps? Well, this ‘soup’ almost exited my mouth as soon as it made contact with my taste buds! It tasted like death itself! To be fair I did see something floating in it so that may not be out of the question…<br><br>
		I quickly left the establishment although I did leave a tip for the cloaked ‘waiter’ as to be fair he was fairly civil to me and the place seemed to be struggling for customers. However, I do not see the point in publishing a review as I am not entirely certain it was even a tavern. As for the food I bet the goblins could cook something more flavoursome…`,
};

// functions that might be used by above items
const ItemFunctions = {
	setLetterText: function (inventoryPosition) {
		let possibleMessages = Object.keys(LostLetterMessages);
		let messageKey;
		if (User.lostLetterMessages.length !== Object.keys(LostLetterMessages).length) {
			// user not found all the messages, give them one they've not seen
			possibleMessages = possibleMessages.filter(title => !User.lostLetterMessages.includes(title));
		}
		messageKey = possibleMessages[Random(0, possibleMessages.length-1)];

		// user has now obtained this letter (only add to the array if they've not obtained it yet)
		if (User.lostLetterMessages.length !== Object.keys(LostLetterMessages).length) {
			User.lostLetterMessages.push(messageKey);
		}

		// letter text
		Player.inventory.items[inventoryPosition].letterText = LostLetterMessages[messageKey];
	}
}

// returns total number of items in archaeology that satisfy a certain requirement
// requirement parameter should be a function that returns true or false when passed in an item
// archaeology parameter is an optional alternate (from User.archaeology) place to check if a limited edition item has been obtained (if it has, it is added to total, if not, it is not)
function GetTotalItems(requirement, archaeology) {
	const itemTypes = Object.keys(Items);

    let total = 0;
    if (User !== undefined) {
		// iterate through item types in archaeology
        for (let i = 0; i < 7; i++) {
			// iterate through items in the type (ignoring the first two because they are 'test' items)
            for (let x = 2; x < Items[itemTypes[i]].length; x++) {
				let item = Items[itemTypes[i]][x];
				// check item should be shown in archaeology
                if (!item.uncollectable && (!item.limitedEdition || (archaeology || User.archaeology).includes(item.name)) && requirement(item)) {
                    total++;
                }
            }
        }
    }

    return total;
}

// unidentified item constructor
// area = lootArea name
function UnId (area, tier) {
	this.id = 0;
    this.area = area;
    this.tier = tier;
    this.unidentified = true;
    this.sellPrice = 1;

	// decide the type of the unidentified item
    let types = ["helm", "chest", "greaves", "boots", "sword", "staff", "bow"];
    this.typeNum = Random(0, 4);
	// classes can only get their own weapons
    if (this.typeNum === 4) {
        if (Player.class === "m") {
            this.typeNum++;
        }
		else if (Player.class === "a") {
            this.typeNum += 2;
        }
    }
    this.type = types[this.typeNum];

	// image
    this.image = "assets/items/"+this.type+"/unidentified.png";

	// rarity: see if there are any unidentified junk items in the pool
	let junkInPool = false;
	if (area === "eaglecrest" && this.typeNum === 4) {
		junkInPool = true; // pointy sword
	}

	// determine rarity
    this.rarityNum = Random(0, 24);
	if (this.rarityNum <= 1 && junkInPool) {
    	this.rarity = "junk";
	}
    else if (this.rarityNum < 18) {
    	this.rarity = "common";
    }
	else if (this.rarityNum < 24) {
        this.rarity = "unique";
    }
	else {
        this.rarity = "mythic";
    }

	// display which area it is from
	switch (area) {
		case "loggingCamp":
			this.functionText = "From the Logging Camp";
			break;
		case "eaglecrest":
			this.functionText = "From Eaglecrest";
			break;
		default:
			this.functionText = "From " + FromCamelCase(area);
			break;
	}
}
