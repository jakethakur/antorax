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
			id: 1,
			name: "Test Helm 2",
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
				defence: 2,
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
				defence: 3,
				looting: "+5%",
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
				defence: 3,
				healthRegen: "+1/s",
			},
		},
		{
			id: 5,
			name: "War Ogre's Helm",
			type: "helm",
			image: "assets/items/helm/5.png",
			tier: 1,
			rarity: "mythic",
			lore: "",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				defence: 4,
				reflection: "+20%",
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
			id: 1,
			name: "Test Chestplate 2",
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
				defence: 3,
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
				defence: 4,
				looting: "+5%",
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
				defence: 4,
				healthRegen: "+1/s",
			},
		},
		{
			id: 5,
			name: "The Tattered Knight's Chestplate",
			type: "chest",
			image: "assets/items/chest/5.png",
			tier: 1,
			rarity: "mythic",
			lore: "",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				defence: 6,
				walkSpeed: "-40/s",
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
			id: 1,
			name: "Test Greaves 2",
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
				defence: 3,
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
				defence: 4,
				looting: "+5%",
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
				defence: 4,
				healthRegen: "+1/s",
			},
		},
		{
			id: 5,
			name: "Weirwood Carved Greaves",
			type: "greaves",
			image: "assets/items/greaves/5.png",
			tier: 1,
			rarity: "mythic",
			lore: "",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				defence: 4,
				dodgeChance: "+20%",
				healthRegen: "+2/s",
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
			id: 1,
			name: "Test Boots 2",
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
				defence: 1,
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
				defence: 2,
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
				defence: 3,
				looting: "+5%",
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
				defence: 3,
				healthRegen: "+1/s",
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
				defence: 2,
				criticalChance: "+10%",
				dodgeChance: "+10%",
				healthRegen: "+1/s",
				looting: "+10%",
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
				defence: 4,
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
			id: 1,
			name: "Test sword 2",
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
			obtain: "Purchase from a merchant in the Fisher's Valley",
			stats: {
				damage: 2,
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
				damage: 3,
			},
		},
		{
			id: 4,
			name: "Poisoned Blade",
			type: "sword",
			image: "assets/items/sword/4.png",
			tier: 1,
			rarity: "unique",
			lore: "Not to be mistaken with its Grand Tournament counterpart.",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: 3,
				poison: "1/1s",
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
				damage: 4,
				criticalChance: "+10%",
			},
		},
		{
			id: 6,
			name: "Blade of the Orc Raiders",
			type: "sword",
			image: "assets/items/sword/6.png",
			tier: 1,
			rarity: "mythic",
			lore: "",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: 4,
				stun: "1s",
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
			id: 1,
			name: "Test staff 2",
			type: "staff",
			image: "assets/items/staff/1.png",
			stats: {},
		},
		{
			id: 2,
			name: "Basic Staff",
			type: "staff",
			cost: 3,
			image: "assets/items/staff/2.png",
			tier: 1,
			rarity: "common",
			obtain: "Purchase from a merchant in the Fisher's Valley",
			stats: {
				damage: 2,
			},
		},
		{
			id: 3,
			name: "Crooked Wooden Staff",
			type: "staff",
			image: "assets/items/staff/3.png",
			tier: 1,
			rarity: "common",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: 3,
			},
		},
		{
			id: 4,
			name: "Health Staff",
			type: "staff",
			image: "assets/items/staff/4.png",
			tier: 1,
			rarity: "unique",
			lore: "",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: 3,
				healthRegen: "+1/s",
			},
		},
		{
			id: 5,
			name: "Power Surge Staff",
			type: "staff",
			image: "assets/items/staff/5.png",
			tier: 1,
			rarity: "unique",
			lore: "POWER OVERWHELMING!",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: 3,
				criticalChance: "+25%",
			},
		},
		{
			id: 6,
			name: "The Highborn Hoarder's Staff",
			type: "staff",
			image: "assets/items/staff/6.png",
			tier: 1,
			rarity: "mythic",
			lore: "",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				damage: 2,
				looting: "+45%",
			},
		},
		{
			id: 7,
			name: "Goblin Torch",
			type: "staff",
			image: "assets/items/staff/7.png",
			uncollectable: true,
			tier: 1,
			area: "Eaglecrest Logging Camp",
			rarity: "common",
			stats: {
				damage: 2,
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
			id: 1,
			name: "Test bow 2",
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
			obtain: "Purchase from a merchant in the Fisher's Valley",
			stats: {
				damage: 2,
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
				damage: 3,
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
				damage: 3,
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
				damage: 2,
				criticalChance: "+75%",
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
				damage: 3,
				flaming: 1,
			},
		},
	],
	set: [
		{
			id: 0,
			name: "Test bow 1",
			type: "bow",
			image: "assets/items/bow/0.png",
			stats: {},
		},
		{
			id: 1,
			name: "Test bow 2",
			type: "bow",
			image: "assets/items/bow/1.png",
			stats: {},
		},
		{
			id: 2,
			name: "Siege Set",
			type: "set",
			image: "assets/items/sets/2.png",
			tier: 1,
			rarity: "unique",
			armour: [
				"Siege Helm",
				"Siege Chestplate",
				"Siege Greaves",
				"Siege Boots",
			],
			stats: {
				defence: "5",
			},
		},
		{
			id: 3,
			name: "Goblin Forged Set",
			type: "set",
			image: "assets/items/sets/3.png",
			tier: 1,
			rarity: "unique",
			armour: [
				"Goblin Forged Helm",
				"Goblin Forged Chestplate",
				"Goblin Forged Greaves",
				"Goblin Forged Boots",
			],
			stats: {
				looting: "+10%",
			},
		},
	],
	currency: [
		{
			id: 0,
			name: "Gold",
			type: "currency",
			image: "assets/items/currency/gold.png",
			stack: 128,
		},
	],
	bag: [
		{
			id: 0,
			name: "Bag",
			type: "bag",
			image: "assets/items/item/1.png",
			size: 6,
		},
	],
	item: [
		{
			id: 0,
			name: "Staff",
			type: "junk",
			image: "assets/items/staff/5.png",
			stack: 2,
		},
		{
			id: 1,
			name: "Log",
			type: "quest",
			image: "assets/items/item/1.png",
			stack: 4,
		},
	],
};