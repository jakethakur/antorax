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
			lore: "You have no idea how often those mammoth tusks need to be glued back on!",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				defence: "+3",
				reflection: "+50%",
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
			rarity: "common",
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
			lore: "Legend says the tattered knight is still wandering around shirtless.",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				defence: "+8",
				walkSpeed: "-80/s",
			},
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
			lore: "You'll find none of those cheap MDF greaves from the Weirwood.",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				defence: "+4",
				dodgeChance: "+20%",
				healthRegen: "+0.5/s",
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
			rarity: "common",
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
			rarity: "mythic",
			lore: "'James just feels like poison' - Peter",
			obtain: "Log in on James Day",
			stats: {
				defence: "+4",
				swimSpeed: "-50/s"
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
			cost: 3,
			image: "assets/items/sword/2.png",
			tier: 1,
			rarity: "common",
			obtain: "Purchase from a merchant in the Fishers' Valley",
			stats: {
				damage: "+2",
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
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: "+3",
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
			lore: "Your hero power gives this... oh, wrong game.",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: "+3",
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
			lore: "It might be falling apart, but those splinters hurt!",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: "+4",
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
			lore: "Not to be confused with the hit movie 'Raiders of the Lost Orc'.",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: "+4",
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
			obtain: "Purchase from a merchant in the Fishers' Valley",
			stats: {
				damage: "+2",
				maxDamage: "+4",
			},
		},
		{
			id: 3,
			name: "Crooked Wooden Wand",
			type: "staff",
			image: "assets/items/staff/3.png",
			tier: 1,
			rarity: "common",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: "+3",
				maxDamage: "+6",
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
			lore: "",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: "+3",
				maxDamage: "+6",
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
			lore: "POWER OVERWHELMING!",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: "+2",
				maxDamage: "+7",
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
			lore: "",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: "+2",
				maxDamage: "+6",
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
			rarity: "common",
			lore: "Hates the goblins just as much as you do.",
			stats: {
				damage: "+2",
				flaming: 1,
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
			cost: 3,
			image: "assets/items/bow/2.png",
			tier: 1,
			rarity: "common",
			obtain: "Purchase from a merchant in the Fishers' Valley",
			stats: {
				damage: "+2",
			},
		},
		{
			id: 3,
			name: "Crooked Wooden Bow",
			type: "bow",
			image: "assets/items/bow/3.png",
			tier: 1,
			rarity: "common",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: "+3",
			},
		},
		{
			id: 4,
			name: "Sharpshooter's Bow",
			type: "bow",
			image: "assets/items/bow/4.png",
			tier: 1,
			rarity: "unique",
			lore: "",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: "+3",
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
			lore: "",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: "+2.5",
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
			lore: "",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: "+4",
				flaming: 1,
			},
		},
	],
	rod: [ // fishing rod
		{
			id: 0,
			name: "Test Rod 1",
			type: "rod",
			image: "assets/items/bow/6.png",
			rarity: "mythic",
			lore: "",
			stats: {
			},
		},
		{
			id: 1,
			name: "Test Rod 2",
			type: "rod",
			image: "assets/items/bow/6.png",
			rarity: "mythic",
			lore: "",
			stats: {
			},
		},
		{
			id: 2,
			name: "Fishermanname's Old Fishing Rod",
			type: "rod",
			image: "assets/items/bow/6.png",
			rarity: "common",
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
	],
	currency: [
		{
			id: 0,
			name: "Test currency 1",
			type: "currency",
			image: "assets/items/currency/2.png", // perhaps give it its own image?
			stack: 128,
		},
		{
			id: 1,
			name: "Test currency 2",
			type: "currency",
			image: "assets/items/currency/2.png", // perhaps give it its own image?
			stack: 128,
		},
		{
			id: 2,
			name: "Gold",
			type: "currency",
			image: "assets/items/currency/2.png",
			stack: 128,
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
			sellPrice: 5,
			rarity: "common",
			size: 12,
		},
	],
	item: [
		{
			id: 0,
			name: "Test junk item",
			type: "junk",
			image: "assets/items/staff/5.png", // perhaps give it its own image?
			stack: 2,
		},
		{
			id: 1,
			name: "Test quest item",
			type: "quest",
			image: "assets/items/staff/7.png", // perhaps give it its own image?
			stack: 2,
		},
		{
			id: 2,
			name: "Log",
			type: "misc",
			image: "assets/items/item/2.png",
			sellPrice: 1,
			sellQuantity: 4,
			stack: 4,
		},
		{
			id: 3,
			name: "Scrap of Cloth",
			type: "junk",
			image: "assets/items/item/2.png",
			sellPrice: 1,
			sellQuantity: 8,
			stack: 64,
		},
		{
			id: 4,
			name: "Polished Rock",
			type: "junk",
			image: "assets/items/item/2.png",
			sellPrice: 1,
			sellQuantity: 4,
			stack: 64,
		},
		{
			id: 5,
			name: "Fiery Rock",
			type: "junk",
			image: "assets/items/item/2.png",
			sellPrice: 1,
			sellQuantity: 1,
			stack: 64,
		},
		{
			id: 5,
			name: "Fishermanname's Lost Fishing Rod",
			type: "quest",
			image: "assets/items/item/2.png",
			lore: "The goblins haven't looked after this rod very well...",
		},
	],
	fish: [
		{
			id: 0,
			name: "Yellow Perch",
			type: "misc",
			image: "assets/items/fish/0.png",
			rarity: "common",
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
		},
		{
			id: 1,
			name: "Milkfish",
			type: "misc",
			image: "assets/items/fish/1.png",
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
				min: 50,
				avg: 100,
				max: 180,
			},
		},
		{
			id: 2,
			name: "Oscar",
			type: "misc",
			image: "assets/items/fish/2.png",
			rarity: "mythic",
			lore: "",
			consumption: true,
			areas: [], 
			waterTypes: [
				"freshwater",
			],
			length: {
				min: null, // tbd
				avg: 24,
				max: 46,
			},
		},
		{
			id: 3,
			name: "Saffron Cod",
			type: "misc",
			image: "assets/items/fish/3.png",
			rarity: "common",
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
		},
		{
			id: 4,
			name: "Rainbow Trout",
			type: "misc",
			image: "assets/items/fish/4.png",
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
				min: 19,
				avg: 60,
				max: 122,
			},
		},
		{
			id: 5,
			name: "White-Spotted Puffer",
			type: "misc",
			image: "assets/items/fish/5.png",
			rarity: "common",
			lore: "",
			consumption: false,
			areas: [], 
			waterTypes: [
				"brackish",
				"marine",
			],
			length: {
				min: null, // tbd
				avg: 40,
				max: 50,
			},
		},
		{
			id: 6,
			name: "King of Herrings",
			type: "misc",
			image: "assets/items/fish/6.png",
			rarity: "mythic",
			lore: "",
			consumption: true,
			areas: [], 
			waterTypes: [
				"marine",
			],
			length: {
				min: null, // tbd
				avg: 300,
				max: 800,
			},
		},
		{
			id: 7,
			name: "Blunthead Puffer",
			type: "misc",
			image: "assets/items/fish/7.png",
			rarity: "common",
			lore: "",
			consumption: false,
			areas: [], 
			waterTypes: [
				"marine",
			],
			length: {
				min: null, // tbd
				avg: 26,
				max: 40.5,
			},
		},
		{
			id: 8,
			name: "Bluefin Gurnard",
			type: "misc",
			image: "assets/items/fish/8.png",
			rarity: "unique",
			lore: "",
			consumption: false,
			areas: [], 
			waterTypes: [
				"brackish",
				"marine",
			],
			length: {
				min: null, // tbd
				avg: 40,
				max: 60,
			},
		},
		{
			id: 9,
			name: "Oriental Flying Gurnard",
			type: "misc",
			image: "assets/items/fish/9.png",
			rarity: "unique",
			lore: "",
			consumption: null, // tbd
			areas: [], 
			waterTypes: [
				"marine",
			],
			length: {
				min: null, //tbd
				avg: 20,
				max: 40,
			},
		},
		{
			id: 10,
			name: "Southern Hake",
			type: "misc",
			image: "assets/items/fish/10.png",
			rarity: "common",
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
		},
		{
			id: 11,
			name: "Pink Salmon",
			type: "misc",
			image: "assets/items/fish/11.png",
			rarity: "common",
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
		},
		{
			id: 12,
			name: "Sea Trout",
			type: "misc",
			image: "assets/items/fish/12.png",
			rarity: "common",
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
		},
		{
			id: 13,
			name: "Cobia",
			type: "misc",
			image: "assets/items/fish/13.png",
			rarity: "unique",
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
		},
		{
			id: 14,
			name: "Fourfinger Threadfin",
			type: "misc",
			image: "assets/items/fish/14.png",
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
			id: 15,
			name: "Lemon Sole",
			type: "misc",
			image: "assets/items/fish/15.png",
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
			id: 16,
			name: "Climbing Perch",
			type: "misc",
			image: "assets/items/fish/16.png",
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
			id: 17,
			name: "Fallfish",
			type: "misc",
			image: "assets/items/fish/17.png",
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
			id: 18,
			name: "Fourfinger Threadfin",
			type: "misc",
			image: "assets/items/fish/18.png",
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
			id: 19,
			name: "Cuttlefish",
			type: "misc",
			image: "assets/items/fish/19.png",
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
			id: 20,
			name: "Dark Eel Catfish",
			type: "misc",
			image: "assets/items/fish/20.png",
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
			id: 21,
			name: "Zebra Fish",
			type: "misc",
			image: "assets/items/fish/21.png",
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
			id: 22,
			name: "Southern Herring",
			type: "misc",
			image: "assets/items/fish/22.png",
			rarity: "common",
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
		},
		{
			id: 23,
			name: "Northern Red Snapper",
			type: "misc",
			image: "assets/items/fish/23.png",
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
			id: 24,
			name: "Blue-Barred Parrotfish",
			type: "misc",
			image: "assets/items/fish/24.png",
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
			id: 25,
			name: "Zebra Danio",
			type: "misc",
			image: "assets/items/fish/25.png",
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
		},
	],
};