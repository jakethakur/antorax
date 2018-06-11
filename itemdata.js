var items = {
	helm: [
		{
			//id: 0
			name: "Test Helm 1",
			type: "helm",
			image: "assets/items/helm.png",
			stats: {},
		},
		{
			//id: 1
			name: "Test Helm 2",
			type: "helm",
			image: "assets/items/helm2.png",
			stats: {},
		},
		{
			//id: 2
			name: "Worn Leather Helm",
			type: "helm",
			image: "assets/items/helm.png",
			tier: 1,
			rarity: "common",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				Defence: 1,
			},
		}
	],
	chest: [
		{
			//id: 0
			name: "Test Chestplate 1",
			type: "chest",
			image:"assets/items/chest.png",
			stats: {},
		},
		{
			//id: 1
			name: "Test Chestplate 2",
			type: "chest",
			image:"assets/items/chest2.png",
			stats: {},
		},
		{
			//id: 2
			name: "Worn Leather Chest",
			type: "chest",
			image: "assets/items/chest.png",
			tier: 1,
			rarity: "common",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				Defence: 2,
			},
		}
	],
	greaves: [
		{
			//id: 0
			name: "Test Greaves 1",
			type: "greaves",
			image:"assets/items/greaves.png",
			stats: {},
		},
		{
			//id: 1
			name: "Test Greaves 2",
			type: "greaves",
			image:"assets/items/greaves2.png",
			stats: {
			},
		},
		{
			//id: 2
			name: "Worn Leather Greaves",
			type: "greaves",
			image: "assets/items/greaves.png",
			tier: 1,
			rarity: "common",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				Defence: 2,
			},
		}
	],
	boots: [
		{
			//id: 0
			name: "Test Boots 1",
			type: "boots",
			image:"assets/items/boots.png",
			stats: {},
		},
		{
			//id: 1
			name: "Test Boots 2",
			type: "boots",
			image:"assets/items/boots2.png",
			stats: {},
		},
		{
			//id: 2
			name: "Logging Boots",
			type: "boots",
			image:"assets/items/boots/2.png",
			tier: 1,
			rarity: "common",
			lore: "Protects you from splinters. And goblins!",
			obtain: "Recieve as a reward for completing quest: 'To the Logging Camp'",
			stats: {
				Defense: 1,
				
			},
		},
		{
			//id: 3
			name: "Worn Leather Boots",
			type: "boots",
			image: "assets/items/boots.png",
			tier: 1,
			rarity: "common",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				Defence: 2,
			},
		}
	],
	sword: [
		{
			//id: 0
			name: "Test sword 1",
			type: "sword",
			image:"assets/items/weapon.png",
			stats: {},
		},
		{
			//id: 1
			name: "Test sword 2",
			type: "sword",
			image:"assets/items/weapon2.png",
			stats: {},
		},
		{
			//id: 2
			name: "Basic Sword",
			type: "sword",
			cost: 3,
			image:"assets/items/sword.png",
			tier: 1,
			rarity: "common",
			stats: {
				Damage: 2,
			},
		},
		{
			//id: 3
			name: "Crooked Wooden Sword",
			type: "sword",
			image: "assets/items/sword.png",
			tier: 1,
			rarity: "common",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				Damage: 3,
			},
		},
		{
			//id: 4
			name: "Poisined Blade",
			type: "sword",
			image: "assets/items/sword.png",
			tier: 1,
			rarity: "unique",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				Damage: 3,
				Poisin: "+1/1",
			},
		},
	],
	staff: [
		{
			//id: 0
			name: "Test staff 1",
			type: "staff",
			image:"assets/items/weapon.png",
			stats: {},
		},
		{
			//id: 1
			name: "Test staff 2",
			type: "staff",
			image:"assets/items/weapon2.png",
			stats: {},
		},
		{
			//id: 2
			name: "Basic Staff",
			type: "staff",
			cost: 3,
			image:"assets/items/staff.png",
			tier: 1,
			rarity: "common",
			stats: {
				Damage: 2,
			},
		},
		{
			//id: 3
			name: "Crooked Wooden Staff",
			type: "staff",
			image: "assets/items/staff.png",
			tier: 1,
			rarity: "common",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				Damage: 3,
			},
		},
		{
			//id: 4
			name: "Power Surge Staff",
			type: "staff",
			image: "assets/items/staff.png",
			tier: 1,
			rarity: "unique",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				Damage: 3,
				Critical Chance: "+25%",
			},
		},
	],
	bow: [
		{
			//id: 0
			name: "Test bow 1",
			type: "bow",
			image:"assets/items/weapon.png",
			stats: {},
		},
		{
			//id: 1
			name: "Test bow 2",
			type: "bow",
			image:"assets/items/weapon2.png",
			stats: {},
		},
		{
			//id: 2
			name: "Basic Bow",
			type: "bow",
			cost: 3,
			image:"assets/items/bow.png",
			tier: 1,
			rarity: "common",
			stats: {
				Damage: 2,
			},
		},
		{
			//id: 3
			name: "Crooked Wooden Bow",
			type: "bow",
			image: "assets/items/bow.png",
			tier: 1,
			rarity: "common",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				Damage: 3,
			},
		},
		{
			//id: 4
			name: "Sharp Shooter Bow",
			type: "bow",
			image: "assets/items/bow.png",
			tier: 1,
			rarity: "unique",
			obtain: "Find as an unidentified item in Eaglecrest Logging Camp",
			area: "Eaglecrest Logging Camp",
			stats: {
				Damage: 3,
				Focus: "+1",
			},
		},
	],
};