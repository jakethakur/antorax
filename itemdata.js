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
			rarity: "common",
			sellPrice: 1,
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				defence: "+2",
			},
		},
		{
			id: 3,
			name: "Goblin Forged Helm",
			type: "helm",
			image: "assets/items/helm/3.png",
			tier: 1,
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			set: 3,
			stats: {
				defence: "+3",
				looting: "+10%",
			},
		},
		{
			id: 4,
			name: "Siege Helm",
			type: "helm",
			image: "assets/items/helm/4.png",
			tier: 1,
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			set: 2,
			stats: {
				defence: "+3",
				healthRegen: "+0.25/s",
			},
		},
		{
			id: 5,
			name: "War Ogre's Helm",
			type: "helm",
			image: "assets/items/helm/5.png",
			tier: 1,
			rarity: "mythic",
			sellPrice: 5,
			lore: "You have no idea how often those mammoth tusks need to be glued back on!",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				defence: "+3",
				reflection: "+50%",
			},
		},
		{
			id: 6,
			name: "The Ocean Warrior's Helm",
			type: "helm",
			image: "assets/items/helm/6.png",
			tier: 1,
			rarity: "mythic",
			sellPrice: 5,
			lore: "",
			obtain: "Find in a sunken chest in a tier 1 fishing area",
			set: 4,
			stats: {
				defence: "+3",
			},
			chooseStats: {
				criticalChance: "+5%",
				dodgeChance: "+5%",
				reflection: "+10%",
			},
			onClickText: "Click to choose stat:",
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
			rarity: "common",
			sellPrice: 1,
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				defence: "+3",
			},
		},
		{
			id: 3,
			name: "Goblin Forged Chestplate",
			type: "chest",
			image: "assets/items/chest/3.png",
			tier: 1,
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			set: 3,
			stats: {
				defence: "+4",
				looting: "+10%",
			},
		},
		{
			id: 4,
			name: "Siege Chestplate",
			type: "chest",
			image: "assets/items/chest/4.png",
			tier: 1,
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			set: 2,
			stats: {
				defence: "+4",
				healthRegen: "+0.25/s",
			},
		},
		{
			id: 5,
			name: "The Tattered Knight's Chestplate",
			type: "chest",
			image: "assets/items/chest/5.png",
			tier: 1,
			rarity: "mythic",
			sellPrice: 5,
			lore: "Legend says the tattered knight is still wandering around shirtless.",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				defence: "+8",
				walkSpeed: "-80/s",
			},
		},
		{
			id: 6,
			name: "The Ocean Warrior's Chestplate",
			type: "chest",
			image: "assets/items/chest/6.png",
			tier: 1,
			rarity: "mythic",
			sellPrice: 5,
			lore: "",
			obtain: "Find in a sunken chest in a tier 1 fishing area",
			set: 4,
			stats: {
				defence: "+4",
			},
			chooseStats: {
				criticalChance: "+5%",
				dodgeChance: "+5%",
				reflection: "+10%",
			},
			onClickText: "Click to choose stat:",
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
			stats: {
			},
		},
		{
			id: 2,
			name: "Worn Leather Trousers",
			type: "greaves",
			image: "assets/items/greaves/2.png",
			tier: 1,
			rarity: "common",
			sellPrice: 1,
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				defence: "+3",
			},
		},
		{
			id: 3,
			name: "Goblin Forged Greaves",
			type: "greaves",
			image: "assets/items/greaves/3.png",
			tier: 1,
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			set: 3,
			stats: {
				defence: "+4",
				looting: "+10%",
			},
		},
		{
			id: 4,
			name: "Siege Greaves",
			type: "greaves",
			image: "assets/items/greaves/4.png",
			tier: 1,
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			set: 2,
			stats: {
				defence: "+4",
				healthRegen: "+0.25/s",
			},
		},
		{
			id: 5,
			name: "Weirwood Carved Greaves",
			type: "greaves",
			image: "assets/items/greaves/5.png",
			tier: 1,
			rarity: "mythic",
			sellPrice: 5,
			lore: "You'll find none of those cheap MDF greaves from the Weirwood.",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				defence: "+4",
				dodgeChance: "+20%",
				healthRegen: "+0.5/s",
			},
		},
		{
			id: 6,
			name: "The Ocean Warrior's Leggings",
			type: "greaves",
			image: "assets/items/greaves/6.png",
			tier: 1,
			rarity: "mythic",
			sellPrice: 5,
			lore: "",
			obtain: "Find in a sunken chest in a tier 1 fishing area",
			set: 4,
			stats: {
				defence: "+4",
			},
			chooseStats: {
				criticalChance: "+5%",
				dodgeChance: "+5%",
				reflection: "+10%",
			},
			onClickText: "Click to choose stat:",
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
			rarity: "common",
			sellPrice: 1,
			lore: "Protects you from splinters. And goblins!",
			obtain: "Recieve as a reward for completing quest: 'To the Logging Camp'",
			stats: {
				defence: "+1",
				walkSpeed: "+30/s",
			},
		},
		{
			id: 3,
			name: "Worn Leather Boots",
			type: "boots",
			image: "assets/items/boots/3.png",
			tier: 1,
			rarity: "common",
			sellPrice: 1,
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				defence: "+2",
			},
		},
		{
			id: 4,
			name: "Goblin Forged Boots",
			type: "boots",
			image: "assets/items/boots/4.png",
			tier: 1,
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			set: 3,
			stats: {
				defence: "+3",
				looting: "+10%",
			},
		},
		{
			id: 5,
			name: "Siege Boots",
			type: "boots",
			image: "assets/items/boots/5.png",
			tier: 1,
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			set: 2,
			stats: {
				defence: "+3",
				healthRegen: "+0.25/s",
			},
		},
		{
			id: 6,
			name: "Marshall Teper's Lost Boots",
			type: "boots",
			image: "assets/items/boots/6.png",
			tier: 1,
			rarity: "mythic",
			sellPrice: 5,
			lore: "Marshall Teper's favourite boots. Maybe you could return them for a reward?",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				defence: "+2",
				criticalChance: "+10%",
				dodgeChance: "+10%",
				healthRegen: "+0.5/s",
				looting: "+25%",
				walkSpeed: "+30/s",
			},
		},
		{
			id: 7,
			name: "James Boots",
			type: "boots",
			image: "assets/items/boots/7.png",
			tier: 1,
			rarity: "unique",
			sellPrice: 3,
			lore: "'James just feels like poison' - Peter",
			obtain: "Log in on James Day",
			stats: {
				defence: "+4",
				swimSpeed: "-50/s"
			},
		},
		{
			id: 8,
			name: "The Ocean Warrior's Boots",
			type: "boots",
			image: "assets/items/boots/8.png",
			tier: 1,
			rarity: "mythic",
			sellPrice: 5,
			lore: "",
			obtain: "Find in a sunken chest in a tier 1 fishing area",
			set: 4,
			stats: {
				defence: "+3",
			},
			chooseStats: {
				criticalChance: "+5%",
				dodgeChance: "+5%",
				reflection: "+10%",
			},
			onClickText: "Click to choose stat:",
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
			cost: 3,
			image: "assets/items/sword/2.png",
			tier: 1,
			rarity: "common",
			sellPrice: 1,
			obtain: "Purchase from a merchant in the Fishers' Valley",
			stats: {
				damage: "2",
				blockDefence: "+10",
			},
		},
		{
			id: 3,
			name: "Crooked Wooden Sword",
			type: "sword",
			image: "assets/items/sword/3.png",
			tier: 1,
			rarity: "common",
			sellPrice: 1,
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: "3",
				blockDefence: "+12",
			},
		},
		{
			id: 4,
			name: "Poisoned Blade",
			type: "sword",
			image: "assets/items/sword/4.png",
			tier: 1,
			rarity: "unique",
			sellPrice: 3,
			lore: "Your hero power gives this... oh, wrong game.",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: "3",
				poison: "1.5/3s",
				blockDefence: "+14",
			},
		},
		{
			id: 5,
			name: "Splintered Sword",
			type: "sword",
			image: "assets/items/sword/5.png",
			tier: 1,
			rarity: "unique",
			sellPrice: 3,
			lore: "It might be falling apart, but those splinters hurt!",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: "4",
				criticalChance: "+10%",
				blockDefence: "+8",
			},
		},
		{
			id: 6,
			name: "Blade of the Orc Raiders",
			type: "sword",
			image: "assets/items/sword/6.png",
			tier: 1,
			rarity: "mythic",
			sellPrice: 5,
			lore: "Not to be confused with the hit movie 'Raiders of the Lost Orc'.",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: "4",
				stun: "0.5s",
				blockDefence: "+15",
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
			cost: 3,
			image: "assets/items/staff/2.png",
			tier: 1,
			rarity: "common",
			sellPrice: 1,
			obtain: "Purchase from a merchant in the Fishers' Valley",
			stats: {
				damage: "2-4",
			},
		},
		{
			id: 3,
			name: "Crooked Wooden Wand",
			type: "staff",
			image: "assets/items/staff/3.png",
			tier: 1,
			rarity: "common",
			sellPrice: 1,
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: "3-6",
			},
		},
		{
			id: 4,
			name: "Health Staff",
			type: "staff",
			image: "assets/items/staff/4.png",
			imageArchaeology: "assets/items/staff/4archaeology.png",
			tier: 1,
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: "3-6",
				healthRegen: "+0.5/s",
			},
		},
		{
			id: 5,
			name: "Power Surge Staff",
			type: "staff",
			image: "assets/items/staff/5.png",
			imageArchaeology: "assets/items/staff/5archaeology.png",
			tier: 1,
			rarity: "unique",
			sellPrice: 3,
			lore: "POWER OVERWHELMING!",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: "2-7",
				criticalChance: "+25%",
			},
		},
		{
			id: 6,
			name: "The Highborn Hoarder's Staff",
			type: "staff",
			image: "assets/items/staff/6.png",
			imageArchaeology: "assets/items/staff/6archaeology.png",
			tier: 1,
			rarity: "mythic",
			sellPrice: 5,
			lore: "",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: "2-6",
				looting: "+100%",
			},
		},
		{
			id: 7,
			name: "Goblin Torch",
			type: "staff",
			image: "assets/items/staff/7.png",
			uncollectable: true,
			tier: 1,
			rarity: "unique",
			quest: true,
			lore: "Hates the goblins just as much as you do.",
			stats: {
				damage: "2",
				flaming: 1,
			},
			chat: {
				kill: ["Burn with me!", "Must. Kill.", "Keep going. Please. Kill them all.", "Goblin idiots must die!"],
			}
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
			cost: 3,
			image: "assets/items/bow/2.png",
			tier: 1,
			rarity: "common",
			sellPrice: 1,
			obtain: "Purchase from a merchant in the Fishers' Valley",
			stats: {
				damage: "2",
			},
		},
		{
			id: 3,
			name: "Crooked Wooden Bow",
			type: "bow",
			image: "assets/items/bow/3.png",
			tier: 1,
			rarity: "common",
			sellPrice: 1,
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: "3",
			},
		},
		{
			id: 4,
			name: "Sharpshooter's Bow",
			type: "bow",
			image: "assets/items/bow/4.png",
			tier: 1,
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: "3",
				focusSpeed: "+1/s",
			},
		},
		{
			id: 5,
			name: "Woodshot",
			type: "bow",
			image: "assets/items/bow/5.png",
			tier: 1,
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: "2.5",
				criticalChance: "+70%",
			},
		},
		{
			id: 6,
			name: "Kraiss' Brimstone Bow",
			type: "bow",
			image: "assets/items/bow/6.png",
			tier: 1,
			rarity: "mythic",
			sellPrice: 5,
			lore: "",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: "4",
				flaming: 1,
			},
		},
	],
	rod: [ // fishing rod
		{
			id: 0,
			name: "Test Rod 1",
			type: "rod",
			image: "assets/items/rod/1.png",
			rarity: "mythic",
			lore: "",
			stats: {
			},
		},
		{
			id: 1,
			name: "Test Rod 2",
			type: "rod",
			image: "assets/items/rod/1.png",
			rarity: "mythic",
			lore: "",
			stats: {
			},
		},
		{
			id: 2,
			name: "Fisherman Tobenam's Old Rod",
			type: "rod",
			image: "assets/items/rod/2.png",
			rarity: "common",
			sellPrice: 3,
			lore: "A fine rod.",
			stats: {
			},
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
			rarity: "unique",
			armour: [
				"Siege Helm",
				"Siege Chestplate",
				"Siege Greaves",
				"Siege Boots",
			],
			stats: {
				defence: "+5",
				healthRegen: "+0.5/s",
			},
		},
		{
			id: 3,
			name: "Goblin Forged Set",
			type: "set",
			image: "assets/items/set/3.png",
			tier: 1,
			rarity: "unique",
			armour: [
				"Goblin Forged Helm",
				"Goblin Forged Chestplate",
				"Goblin Forged Greaves",
				"Goblin Forged Boots",
			],
			stats: {
				looting: "+30%",
				walkSpeed: "+60/s",
			},
		},
		{
			id: 4,
			name: "The Set of the Ocean Warrior",
			type: "set",
			image: "assets/items/set/4.png",
			tier: 1,
			rarity: "mythic",
			armour: [
				"The Ocean Warrior's Helm",
				"The Ocean Warrior's Chestplate",
				"The Ocean Warrior's Leggings",
				"The Ocean Warrior's Boots",
			],
			stats: {
				// double chosen stats
				swimSpeed: "+120/s", // perhaps display as water walking?
			},
			multiplier: [
				{
					stat: "chosenStat",
					multiplier: 2,
					slots: ["helm", "chest", "greaves", "boots"],
				},
			],
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
			use: "The primary currency of Antorax",
			stack: 256,
		},
		{
			id: 3,
			name: "Fishing Seal",
			type: "currency",
			image: "assets/items/currency/3.png",
			use: "Can be used to buy fishing related items from a fisher(wo)man.",
			stack: 256,
		},
	],
	bag: [
		{
			id: 0,
			name: "Test bag 1",
			type: "bag",
			image: "assets/items/bag/2.png", // perhaps give it its own image?
			size: 55, // biggest a bag can be
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
			rarity: "common",
			size: 6,
		},
		{
			id: 3,
			name: "Goblin Sewn Bag",
			type: "bag",
			image: "assets/items/bag/3.png",
			sellPrice: 3,
			rarity: "unique",
			size: 12,
		},
		{
			id: 4,
			name: "Fishing Pouch",
			type: "bag",
			image: "assets/items/bag/4.png",
			sellPrice: 10,
			rarity: "unique",
			size: 18,
		},
	],
	item: [
		{
			id: 0,
			name: "Test junk item",
			type: "item",
			rarity: "junk",
			image: "assets/items/staff/5.png", // perhaps give it its own image?
			stack: 2,
		},
		{
			id: 1,
			name: "Test misc item",
			type: "item",
			image: "assets/items/staff/7.png", // perhaps give it its own image?
			stack: 2,
		},
		{
			id: 2,
			name: "Log",
			type: "item",
			image: "assets/items/item/2.png",
			sellPrice: 1,
			sellQuantity: 4,
			stack: 4,
			lore: "Stolen from the logging camp.",
		},
		{
			id: 3,
			name: "Scrap of Cloth",
			type: "item",
			rarity: "junk",
			image: "assets/items/item/3.png",
			sellPrice: 1,
			sellQuantity: 8,
			stack: 64,
		},
		{
			id: 4,
			name: "Polished Rock",
			type: "item",
			rarity: "junk",
			image: "assets/items/item/4.png",
			sellPrice: 1,
			sellQuantity: 4,
			stack: 64,
		},
		{
			id: 5,
			name: "Fiery Rock",
			type: "item",
			rarity: "junk",
			image: "assets/items/item/5.png",
			sellPrice: 1,
			sellQuantity: 2,
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
			onClickText: "Siphons the soul essence of any nearby enemy corpses.",
			onClick: function () {
				Game.enemies.forEach(enemy => {
					if (Game.areNearby(Game.hero, enemy, 100)) { // check the player is within 2 tiles of an enemy
						if (enemy.isCorpse && !enemy.hasBeenSiphoned) { // check the enemy is a corpse
							enemy.hasBeenSiphoned = true;
							if (Player.quests.questProgress.soulSceptreEnergy === undefined) {
								Player.quests.questProgress.soulSceptreEnergy = 1;
							}
							else {
								Player.quests.questProgress.soulSceptreEnergy++;
							}
							Dom.quests.active();
						}
					}
				});
			},
			lore: "The energy stored within this sceptre can be used to cure even the worst XP fatigue.",
		},
		{
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
			sellQuantity: 2,
			stack: 32,
		},
		{
			id: 11,
			name: "Vial of Goblin Blood",
			rarity: "junk",
			type: "item",
			quest: true,
			image: "assets/items/item/10.png",
			lore: "Has some alchemical uses.",
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
			cost: 5,
			sellPrice: 2,
			onClickText: "Increases damage dealt by 40% for 10 seconds",
			onClick: function (inventoryPosition) {
				// remove the item
				Dom.inventory.remove(inventoryPosition);
				
				// give strength I status effect to player
				Game.statusEffects.strength(1, Game.hero);
			}
		},
		{
			id: 3,
			name: "Potion of Swiftness I",
			type: "consumable",
			image: "assets/items/consumable/3.png",
			cost: 3,
			sellPrice: 1,
			onClickText: "Increases walk speed by 35% for 20 seconds",
			onClick: function (inventoryPosition) {
				// remove the item
				Dom.inventory.remove(inventoryPosition);
				
				// give swiftness I status effect to player
				Game.statusEffects.swiftness(1, Game.hero);
			}
		},
		{
			id: 4,
			name: "Potion of Health I",
			type: "consumable",
			image: "assets/items/consumable/4.png",
			cost: 3,
			sellPrice: 1,
			onClickText: "Restores 15 health",
			onClick: function (inventoryPosition) {
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
			onClickText: "Restores 15 health",
			lore: "Might make you a little tipsy...",
			onClick: function (inventoryPosition) {
				// remove the item
				Dom.inventory.remove(inventoryPosition);
				
				// restore the health
				Game.restoreHealth(Game.hero, 20);
				// make the player tipsy!
				//tbd
			}
		},
		{
			id: 6,
			name: "Goblin Brewed Potion",
			type: "consumable",
			image: "assets/items/consumable/6.png",
			sellPrice: 1,
			onClickText: "I wonder what this does?",
			onClick: function (inventoryPosition) {
				// remove the item
				Dom.inventory.remove(inventoryPosition);
				
				// do something crazy!
				let effectNumber = random(0, 3);
				switch(effectNumber) {
					case 0:
						// give strength I status effect to player
						Game.statusEffects.strength("I", Game.hero);
						break;
					case 1:
						// give swiftness I status effect to player
						Game.statusEffects.swiftness("I", Game.hero);
						break;
					case 2:
						// give fire I status effect to player
						Game.statusEffects.fire("I", Game.hero);
						break;
					case 3:
						// deal 50 damage over 10 seconds to the player
						Game.statusEffects.poison(50, 10, Game.hero);
						break;
				}
			}
		},
		{
			id: 7,
			name: "Goblin Trap",
			type: "consumable",
			image: "assets/items/consumable/7.png",
			cost: 0,
			onClickText: "Places a trap (can only be used in The Nilbog)",
			lore: "Like a bear trap, but ickier.",
			onClick: function (inventoryPosition) {
				if (Game.areaName === "nilbog") { // trap can only be placed in the nilbog
					// remove the item
					Dom.inventory.remove(inventoryPosition);
					
					// quest progress
					if (Player.quests.questProgress.goblinTrapsPlaced !== undefined) {
						Player.quests.questProgress.goblinTrapsPlaced++;
					}
					else {
						Player.quests.questProgress.goblinTrapsPlaced = 1;
					}
					
					// place trap
					let trapObject = {
						map: map,
						map: map,
						image: "trap",
						name: "Goblin Trap",
						x: Game.hero.x,
						y: Game.hero.y + 40,
					};
					Game.things.push(new Thing(trapObject)); // place trap in the current area
					Areas.nilbog.things.push(trapObject); // save in areadata.js for if the player leaves and rejoins the area
				}
			}
		},
		{
			id: 8,
			name: "Can of Worms",
			type: "consumable",
			image: "assets/items/consumable/8.png",
			cost: 5,
			onClickText: "Gives you +20 fishing skill for your next fishing attempt",
			charges: 3,
			onClick: function (inventoryPosition) {
				if (!Game.hero.hasStatusEffect("Fish bait")) { // player does not have an existing status effect from the same item
					// remove one charge from the item
					Player.inventory.items[inventoryPosition].charges--;
					if (Player.inventory.items[inventoryPosition].charges <= 0) {
						Dom.inventory.remove(inventoryPosition);
					}
					Dom.inventory.displayInformation(Player.inventory.items[inventoryPosition]);
					// give fish bait status effect
					Game.hero.statusEffects.push(new statusEffect({
						title: "Fish bait",
						effect: "+20 fishing skill for your next fishing attempt",
						info: {
							skillIncrease: 20,
						}
					}));
					// give quest progress for "learning to fish II"
					Player.quests.questProgress.hasUsedBait = true;
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
			sellPrice: 2,
			lore: "",
			consumption: true,
			areas: [], // empty = every area
			waterTypes: [
				"brackish",
				"marine",
			],
			length: {
				min: 10,
				avg: 19,
				max: 50,
			},
			skillRequirement: {
				min: 10,
				max: 1000,
			},
		},
		{
			id: 1,
			name: "Milkfish",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/1.png",
			rarity: "unique",
			sellPrice: 5,
			lore: "",
			consumption: true,
			areas: [], 
			waterTypes: [
				"freshwater",
				"brackish",
				"marine",
			],
			length: {
				min: 50,
				avg: 100,
				max: 180,
			},
			skillRequirement: {
				min: 40,
				max: 1000,
			},
		},
		{
			id: 2,
			name: "Oscar",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/2.png",
			rarity: "mythic",
			sellPrice: 10,
			lore: "",
			consumption: true,
			areas: [], 
			waterTypes: [
				"freshwater",
			],
			length: {
				min: 17,
				avg: 24,
				max: 46,
			},
			skillRequirement: {
				min: 50,
				max: 1000,
			},
		},
		{
			id: 3,
			name: "Saffron Cod",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/3.png",
			rarity: "common",
			sellPrice: 2,
			lore: "",
			consumption: true,
			areas: [], 
			waterTypes: [
				"freshwater",
				"brackish",
				"marine",
			],
			length: {
				min: 19,
				avg: 27,
				max: 55,
			},
			skillRequirement: {
				min: 10,
				max: 1000,
			},
		},
		{
			id: 4,
			name: "Rainbow Trout",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/4.png",
			rarity: "unique",
			sellPrice: 5,
			lore: "",
			consumption: true,
			areas: [], 
			waterTypes: [
				"freshwater",
				"brackish",
				"marine",
			],
			length: {
				min: 19,
				avg: 60,
				max: 122,
			},
			skillRequirement: {
				min: 30,
				max: 1000,
			},
		},
		{
			id: 5,
			name: "White-Spotted Puffer",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/5.png",
			rarity: "common",
			sellPrice: 2,
			lore: "",
			consumption: false,
			areas: [], 
			waterTypes: [
				"brackish",
				"marine",
			],
			length: {
				min: 27,
				avg: 40,
				max: 50,
			},
			skillRequirement: {
				min: 20,
				max: 1000,
			},
		},
		{
			id: 6,
			name: "King of Herrings",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/6.png",
			rarity: "mythic",
			sellPrice: 10,
			lore: "",
			consumption: true,
			areas: [], 
			waterTypes: [
				"marine",
			],
			length: {
				min: 200,
				avg: 300,
				max: 800,
			},
			skillRequirement: {
				min: 50,
				max: 1000,
			},
		},
		{
			id: 7,
			name: "Blunthead Puffer",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/7.png",
			rarity: "common",
			sellPrice: 2,
			lore: "",
			consumption: false,
			areas: [], 
			waterTypes: [
				"marine",
			],
			length: {
				min: 20,
				avg: 26,
				max: 40.5,
			},
			skillRequirement: {
				min: 20,
				max: 1000,
			},
		},
		{
			id: 8,
			name: "Bluefin Gurnard",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/8.png",
			rarity: "unique",
			sellPrice: 5,
			lore: "",
			consumption: false,
			areas: [], 
			waterTypes: [
				"brackish",
				"marine",
			],
			length: {
				min: 30,
				avg: 40,
				max: 60,
			},
			skillRequirement: {
				min: 35,
				max: 1000,
			},
		},
		{
			id: 9,
			name: "Oriental Flying Gurnard",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/9.png",
			rarity: "unique",
			sellPrice: 5,
			lore: "",
			consumption: false,
			areas: [], 
			waterTypes: [
				"marine",
			],
			length: {
				min: 16,
				avg: 20,
				max: 40,
			},
			skillRequirement: {
				min: 35,
				max: 1000,
			},
		},
		{
			id: 10,
			name: "Southern Hake",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/10.png",
			rarity: "common",
			sellPrice: 2,
			lore: "",
			consumption: true,
			areas: [], 
			waterTypes: [
				"marine",
			],
			length: {
				min: 75,
				avg: 80,
				max: 155,
			},
			skillRequirement: {
				min: 25,
				max: 1000,
			},
		},
		{
			id: 11,
			name: "Pink Salmon",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/11.png",
			rarity: "common",
			sellPrice: 2,
			lore: "",
			consumption: true,
			areas: [], 
			waterTypes: [
				"freshwater",
				"brackish",
				"marine",
			],
			length: {
				min: 40,
				avg: 50,
				max: 76,
			},
			skillRequirement: {
				min: 25,
				max: 1000,
			},
		},
		{
			id: 12,
			name: "Sea Trout",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/12.png",
			rarity: "common",
			sellPrice: 2,
			lore: "",
			consumption: true,
			areas: [], 
			waterTypes: [
				"freshwater",
				"brackish",
				"marine",
			],
			length: {
				min: 40,
				avg: 72,
				max: 140,
			},
			skillRequirement: {
				min: 25,
				max: 1000,
			},
		},
		{
			id: 13,
			name: "Cobia",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/13.png",
			rarity: "unique",
			sellPrice: 5,
			lore: "",
			consumption: true,
			areas: [], 
			waterTypes: [
				"brackish",
				"marine",
			],
			length: {
				min: 43,
				avg: 110,
				max: 200,
			},
			skillRequirement: {
				min: 40,
				max: 1000,
			},
		},
		{
			id: 14,
			name: "Southern Herring",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/14.png",
			rarity: "common",
			sellPrice: 2,
			lore: "",
			consumption: true,
			areas: [], 
			waterTypes: [
				"brackish",
				"marine",
			],
			length: {
				min: 20,
				avg: 30,
				max: 45,
			},
			skillRequirement: {
				min: 10,
				max: 1000,
			},
		},
		{
			id: 15,
			name: "Dolphinfish",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/15.png",
			rarity: "mythic",
			sellPrice: 10,
			lore: "",
			consumption: false,
			areas: [], 
			waterTypes: [
				"brackish",
				"marine",
			],
			length: {
				min: 35,
				avg: 100,
				max: 210,
			},
			skillRequirement: {
				min: 50,
				max: 1000,
			},
		},
		{
			id: 16,
			name: "Chimerafish",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/16.png",
			rarity: "mythic",
			sellPrice: 10,
			lore: "",
			consumption: true,
			areas: [], 
			waterTypes: [
				"freshwater",
				"brackish",
				"marine",
			],
			length: {
				min: 10,
				avg: 25,
				max: 50,
			},
			skillRequirement: {
				min: 55,
				max: 1000,
			},
		},
		{
			id: 17,
			name: "Old Boot",
			fishingType: "waterjunk",
			type: "fish",
			image: "assets/items/fish/17.png",
			rarity: "junk",
			sellPrice: 1,
			sellQuantity: 2,
			// sell quantity 2 TBD
			lore: "I wonder who this belongs to?",
			areas: [], 
			waterTypes: [
				"freshwater",
				"brackish",
				"marine",
			],
			skillRequirement: {
				min: 0,
				max: 60,
			},
		},
		{
			id: 18,
			name: "Seaweed",
			fishingType: "waterjunk",
			type: "fish",
			image: "assets/items/fish/18.png",
			rarity: "junk",
			sellPrice: 1,
			sellQuantity: 8,
			stack: 64,
			areas: [], 
			waterTypes: [
				"freshwater",
				"brackish",
				"marine",
			],
			skillRequirement: {
				min: 0,
				max: 60,
			},
		},
		{
			id: 19,
			name: "Oak Driftwood",
			fishingType: "waterjunk",
			type: "fish",
			image: "assets/items/fish/19.png",
			rarity: "junk",
			sellPrice: 1,
			sellQuantity: 4,
			stack: 16,
			areas: [], 
			waterTypes: [
				"freshwater",
				"brackish",
				"marine",
			],
			skillRequirement: {
				min: 0,
				max: 60,
			},
		},
		{
			id: 20,
			name: "Birch Driftwood",
			fishingType: "waterjunk",
			type: "fish",
			image: "assets/items/fish/20.png",
			rarity: "junk",
			sellPrice: 1,
			sellQuantity: 4,
			stack: 16,
			areas: [], 
			waterTypes: [
				"freshwater",
				"brackish",
				"marine",
			],
			skillRequirement: {
				min: 0,
				max: 60,
			},
		},
		{
			id: 21,
			name: "Cherry Driftwood",
			fishingType: "waterjunk",
			type: "fish",
			image: "assets/items/fish/21.png",
			rarity: "junk",
			sellPrice: 1,
			sellQuantity: 4,
			stack: 16,
			areas: [], 
			waterTypes: [
				"freshwater",
				"brackish",
				"marine",
			],
			skillRequirement: {
				min: 0,
				max: 60,
			},
		},
		{
			id: 22,
			name: "Old Rusted Coin",
			fishingType: "waterjunk",
			type: "fish",
			image: "assets/items/fish/22.png",
			rarity: "junk",
			sellPrice: 1,
			stack: 264,
			lore: "An old coin from before Antorax was formed.",
			areas: [], 
			waterTypes: [
				"freshwater",
				"brackish",
				"marine",
			],
			skillRequirement: {
				min: 0,
				max: 60,
			},
		},
		{
			id: 23,
			name: "Rusted Gold",
			fishingType: "waterjunk",
			type: "fish",
			image: "assets/items/fish/23.png",
			rarity: "junk",
			sellPrice: 1,
			stack: 264,
			lore: "It's too tarnished to be used as currency.",
			areas: [], 
			waterTypes: [
				"freshwater",
				"brackish",
				"marine",
			],
			skillRequirement: {
				min: 0,
				max: 60,
			},
		},
		{
			id: 24,
			name: "Common Frog",
			fishingType: "watermisc",
			type: "fish",
			image: "assets/items/fish/24.png",
			rarity: "common",
			sellPrice: 2,
			lore: "",
			consumption: true,
			areas: [], 
			waterTypes: [
				"freshwater",
			],
			skillRequirement: {
				min: 15,
				max: 1000,
			},
			clicksToCatch: 2,
			timeToCatch: 750,
		},
		{
			id: 25,
			name: "Sunken Chest",
			fishingType: "watermisc",
			type: "fish",
			image: "assets/items/fish/25.png",
			rarity: "mythic",
			sellPrice: 5,
			lore: "It seems to be locked. You need a key to open it.",
			areas: [], 
			waterTypes: [
				"freshwater",
				"brackish",
				"marine",
			],
			skillRequirement: {
				min: 45,
				max: 1000,
			},
			clicksToCatch: 20,
			timeToCatch: 7000,			
			onOpen: function () {
				let loot = [];
				let lootQuantities = [];
				// fill up chest
				// junk items
				let possibleJunkItems = Items.fish.filter(item => item.fishingType === "waterjunk"); // filter for junk fishing items
				let itemsChosen = 0; // cap out at 6 different junk items
				possibleJunkItems.forEach(item => { 
					if (itemsChosen < 8 && random(0, 2) === 0) { // 1 in 3 chance of it being in the chest
						loot.push(item);
						let itemStack = item.stack
						if (itemStack === undefined) {
							itemStack = 1;
						}
						else if (itemStack > 20) {
							itemStack = 20;
						}
						lootQuantities.push(random(1, itemStack));
						itemsChosen++;
						if (random(0, 1) === 0) { // 1 in 2 chance of a second stack
							loot.push(item);
							lootQuantities.push(random(1, itemStack));
							itemsChosen++;
						}
					}
				});
				// gold
				let goldStacks = random(2, 5); // between 2 and 5 possible stacks of gold
				for (let i = 0; i < goldStacks; i++) {
					loot.push(Items.currency[2]);
					lootQuantities.push(random(1, 5));
				}
				// unidentified items
				let unidentifiedNumber = random(1, 3); // between 1 and 3 unidentified items
				for (let i = 0; i < unidentifiedNumber; i++) {
						loot.push(new UnId(Player.lootArea, Player.lootTier));
						lootQuantities.push(1);
				}
				// Ocean Warrior's armour
				let armourType = random(0, 3);
				switch(armourType) { // pick random piece of armour from that set
					case 0:
						loot.push(Items.helm[6]);
						break;
					case 1:
						loot.push(Items.chest[6]);
						break;
					case 2:
						loot.push(Items.greaves[6]);
						break;
					case 3:
						loot.push(Items.boots[8]);
						break;
				}
				lootQuantities.push(1);
				
				// open loot page
				Dom.loot.currentId = "x"; // x means that nothing should be done when it is closed
				Dom.loot.page("Sunken Chest", loot, lootQuantities, 24);
			},
		},
		{
			id: 26,
			name: "Sunken Key",
			fishingType: "watermisc",
			type: "fish",
			image: "assets/items/fish/26.png",
			rarity: "mythic",
			sellPrice: 2,
			lore: "I wonder what this opens?",
			areas: [], 
			waterTypes: [
				"freshwater",
				"brackish",
				"marine",
			],
			skillRequirement: {
				min: 45,
				max: 1000,
			},
			clicksToCatch: 1,
			timeToCatch: 1000,
			opens: {
				type: "fish",
				id: 25,
			},
		},
		{
			id: 27,
			name: "Message in a Bottle",
			fishingType: "waterjunk",
			type: "fish",
			image: "assets/items/fish/27.png",
			rarity: "junk",
			sellPrice: 1,
			lore: ["The message's ink appears to have washed off.", 
			"The message reads: 'Dearest Audrey, I recently got into alchemy. I think I need an arm donor. Can use one of yours?'", 
			"The message reads: 'Dearest Audrey, I hope you are well. Please send return with some gold. I will pay you back.", 
			"The message reads: 'Dearest Audrey, I am sending this message from the Dragon Cove. We're looking for new volunteers to undertake our dragonkin convertee program. Please reply if interested.'", 
			"The message reads: 'Dearest Audrey, I have sent four other messages to you. Please check your nearby shores for them.'"],
			consumption: true,
			areas: [], 
			waterTypes: [
				"freshwater",
				"brackish",
				"marine",
			],
			skillRequirement: {
				min: 0,
				max: 1000,
			},
			clicksToCatch: 1,
			timeToCatch: 750,
		},
		{
			id: 28,
			name: "Direweed",
			fishingType: "waterjunk",
			type: "fish",
			image: "assets/items/fish/28.png",
			rarity: "junk",
			sellPrice: 1,
			sellQuantity: 8,
			stack: 64,
			lore: "Has some alchemical uses.",
			areas: [], 
			waterTypes: [
				"freshwater",
				"brackish",
				"marine",
			],
			skillRequirement: {
				min: 0,
				max: 60,
			},
		},
		/*{
			id: 22,
			name: "Fourfinger Threadfin",
			type: "item",
			image: "assets/items/fish/22.png",
			rarity: "unique",
			lore: "",
			consumption: true,
			areas: [], 
			waterTypes: [
				"freshwater",
				"brackish",
				"marine",
			],
			length: {
				min: 30,
				avg: 50,
				max: 200,
			},
		},
		{
			id: 23,
			name: "Lemon Sole",
			type: "item",
			image: "assets/items/fish/23.png",
			rarity: "common",
			lore: "",
			consumption: true,
			areas: [], 
			waterTypes: [
				"marine",
			],
			length: {
				min: 20,
				avg: 25,
				max: 64,
			},
		},
		{
			id: 24,
			name: "Climbing Perch",
			type: "item",
			image: "assets/items/fish/24.png",
			rarity: "common",
			lore: "",
			consumption: false,
			areas: [], 
			waterTypes: [
				"freshwater",
				"brackish",
			],
			length: {
				min: 1.2,
				avg: 12.5,
				max: 25,
			},
		},
		{
			id: 25,
			name: "Fallfish",
			type: "item",
			image: "assets/items/fish/25.png",
			rarity: "common",
			lore: "",
			consumption: true,
			areas: [], 
			waterTypes: [
				"freshwater",
			],
			length: {
				min: 12,
				avg: 17,
				max: 51,
			},
		},
		{
			id: 26,
			name: "Fourfinger Threadfin",
			type: "item",
			image: "assets/items/fish/26.png",
			rarity: "common",
			lore: "",
			consumption: false,
			areas: [], 
			waterTypes: [
				"freshwater",
				"brackish",
				"marine",
			],
			length: {
				min: null, // tbd
				avg: null, // tbd
				max: 18,
			},
		},
		{
			id: 27,
			name: "Cuttlefish",
			type: "item",
			image: "assets/items/fish/27.png",
			rarity: "unique",
			lore: "",
			consumption: true,
			areas: [], 
			waterTypes: [
				"marine",
			],
			length: {
				min: 10,
				avg: 45,
				max: 50,
			},
		},
		{
			id: 28,
			name: "Dark Eel Catfish",
			type: "item",
			image: "assets/items/fish/28.png",
			rarity: "common",
			lore: "",
			consumption: false,
			areas: [], 
			waterTypes: [
				"freshwater",
				"brackish",
				"marine",
			],
			length: {
				min: null, // tbd
				avg: 30,
				max: 41,
			},
		},
		{
			id: 29,
			name: "Zebra Fish",
			type: "item",
			image: "assets/items/fish/29.png",
			rarity: "common",
			lore: "",
			consumption: true,
			areas: [], 
			waterTypes: [
				"freshwater",
				"brackish",
			],
			length: {
				min: null, // tbd
				avg: null, // tbd
				max: 34,
			},
		},
		{
			id: 30,
			name: "Northern Red Snapper",
			type: "item",
			image: "assets/items/fish/30.png",
			rarity: "common",
			lore: "",
			consumption: true,
			areas: [], 
			waterTypes: [
				"marine",
			],
			length: {
				min: 39,
				avg: 60,
				max: 100,
			},
		},
		{
			id: 31,
			name: "Blue-Barred Parrotfish",
			type: "item",
			image: "assets/items/fish/31.png",
			rarity: "common",
			lore: "",
			consumption: true,
			areas: [], 
			waterTypes: [
				"brackish",
				"marine",
			],
			length: {
				min: null, // tbd
				avg: 30,
				max: 90,
			},
		},
		{
			id: 32,
			name: "Zebra Danio",
			type: "item",
			image: "assets/items/fish/32.png",
			rarity: "common",
			lore: "",
			consumption: false,
			areas: [], 
			waterTypes: [
				"freshwater",
			],
			length: {
				min: null, //tbd
				avg: 3.8,
				max: 6.4,
			},
		},*/
	],
};