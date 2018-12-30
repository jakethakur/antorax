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
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
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
			sellPrice: 3,
			lore: "",
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
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
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
			set: 2,
			stats: {
				defence: 3,
				healthRegen: 0.25,
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
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
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
			rarity: "mythic",
			sellPrice: 5,
			lore: "",
			obtain: "Can be found in a sunken chest in a tier 1 fishing area.",
			set: 4,
			stats: {
				defence: 3,
			},
			chooseStats: {
				criticalChance: 5,
				dodgeChance: 5,
				reflection: 10,
			},
			functionText: "Click to choose stat:",
			archaeologyFunctionText: "One of the following stats may be chosen:",
		},
		{
			id: 7,
			name: "Santa Hat",
			type: "helm",
			image: "assets/items/helm/7.png",
			tier: 1,
			rarity: "unique",
			lore: "Comes with Santa's experience.",
			obtain: "Buy from a merchant during the Christmas event.",
			sellPrice: 4,
			stats: {
				defence: 2,
				looting: 10,
				xpBonus: 20,
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
			sellPrice: 1,
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
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
			sellPrice: 3,
			lore: "",
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
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
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
			set: 2,
			stats: {
				defence: 4,
				healthRegen: 0.25,
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
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
			stats: {
				defence: 8,
				walkSpeed: -80,
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
			obtain: "Can be found in a sunken chest in a tier 1 fishing area.",
			set: 4,
			stats: {
				defence: 4,
			},
			chooseStats: {
				criticalChance: 5,
				dodgeChance: 5,
				reflection: 10,
			},
			functionText: "Click to choose stat:",
			archaeologyFunctionText: "One of the following stats may be chosen:",
		},
		{
			id: 7,
			name: "Ghost Sheet",
			type: "chest",
			image: "assets/items/chest/7.png",
			tier: 1,
			rarity: "unique",
			sellPrice: 3,
			lore: "Evil haunted sheet. Also doubles as an evil haunted blanket.",
			obtain: "Buy from a merchant during the Samhain event.",
			stats: {
				defence: 1,
				dodgeChance: 40,
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
			stats: {},
		},
		{
			id: 2,
			name: "Worn Leather Trousers",
			type: "greaves",
			image: "assets/items/greaves/2.png",
			tier: 1,
			rarity: "common",
			sellPrice: 1,
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
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
			sellPrice: 3,
			lore: "",
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
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
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
			set: 2,
			stats: {
				defence: 4,
				healthRegen: 0.25,
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
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
			stats: {
				defence: 4,
				dodgeChance: 20,
				healthRegen: 0.5,
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
			obtain: "Can be found in a sunken chest in a tier 1 fishing area.",
			set: 4,
			stats: {
				defence: 4,
			},
			chooseStats: {
				criticalChance: 5,
				dodgeChance: 5,
				reflection: 10,
			},
			functionText: "Click to choose stat:",
			archaeologyFunctionText: "One of the following stats may be chosen:",
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
			obtain: "Receive as a reward for completing quest: 'To the Logging Camp'.",
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
			rarity: "common",
			sellPrice: 1,
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
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
			sellPrice: 3,
			lore: "",
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
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
			rarity: "unique",
			sellPrice: 3,
			lore: "",
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
			set: 2,
			stats: {
				defence: 3,
				healthRegen: 0.25,
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
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
			stats: {
				defence: 2,
				criticalChance: 10,
				dodgeChance: 10,
				healthRegen: 0.5,
				looting: 25,
				walkSpeed: 30,
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
			obtain: "Log in on James Day.",
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
			rarity: "mythic",
			sellPrice: 5,
			lore: "",
			obtain: "Can be found in a sunken chest in a tier 1 fishing area.",
			set: 4,
			stats: {
				defence: 3,
			},
			chooseStats: {
				criticalChance: 5,
				dodgeChance: 5,
				reflection: 10,
			},
			functionText: "Click to choose stat:",
			archaeologyFunctionText: "One of the following stats may be chosen:",
		},
		{
			id: 9,
			name: "Ice Skates",
			type: "boots",
			image: "assets/items/boots/9.png",
			tier: 1,
			rarity: "unique",
			lore: "These should keep you happy while there are less fish around",
			obtain: "Buy from a merchant during the Christmas event.",
			sellPrice: 4,
			stats: {
				defence: 3,
				iceSpeed: 30,
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
			rarity: "common",
			sellPrice: 1,
			obtain: "Purchase from a merchant in the Fishers' Valley.",
			stats: {
				damage: 2,
				blockDefence: 10,
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
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
			stats: {
				damage: 3,
				blockDefence: 12,
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
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
			stats: {
				damage: 3,
				poisonX: 1.5,
				poisonY: 3,
				blockDefence: 14,
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
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
			stats: {
				damage: 4,
				criticalChance: 10,
				blockDefence: 8,
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
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
			stats: {
				damage: 4,
				stun: 0.4,
				blockDefence: 15,
			},
		},
		{
			id: 7,
			name: "Samhain Scythe",
			type: "sword",
			image: "assets/items/sword/7.png",
			imageArchaeology: "assets/items/sword/7archaeology.png",
			tier: 1,
			rarity: "unique",
			lore: "9/10 murderous farmers would recommend it to their friends.",
			obtain: "Buy from a merchant during the Samhain event.",
			sellPrice: 4,
			stats: {
				damage: 3,
				lifesteal: 25,
				blockDefence: 14,
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
			rarity: "unique",
			lore: "Is that a fish in there?!",
			obtain: "Buy from a merchant during the Christmas event.",
			sellPrice: 4,
			stats: {
				damage: 9,
				reloadTime: 500,
				blockDefence: 16,
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
			rarity: "common",
			lore: "This ice doesn't last forever.",
			obtain: "Buy from a merchant during the Christmas event.",
			sellPrice: 2,
			stats: {
				damage: 4,
				blockDefence: 10,
			},
			projectile: "slashFrost",
			projectileAdjust: {x: 0, y: 0},
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
			rarity: "common",
			sellPrice: 1,
			obtain: "Purchase from a merchant in the Fishers' Valley.",
			stats: {
				damage: 2,
				maxDamage: 6,
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
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
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
			rarity: "unique",
			sellPrice: 3,
			lore: "Fresh off a tree from the Elven Woodlands.",
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
			stats: {
				damage: 3,
				maxDamage: 9,
				healthRegen: 0.5,
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
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
			stats: {
				damage: 2,
				maxDamage: 12,
				criticalChance: 25,
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
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
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
			rarity: "unique",
			quest: true,
			lore: "Hates the goblins just as much as you do.",
			stats: {
				damage: 2,
				flaming: 1,
			},
			chat: {
				kill: ["Burn with me!", "Must. Kill.", "Keep going. Please. Kill them all.", "Goblin idiots must die!", "Diseased creatures."],
			},
			projectile: "fireball",
			projectileAdjust: {x: 20, y: 20},
		},
		{
			id: 8,
			name: "Samhain Broomstick",
			type: "staff",
			image: "assets/items/staff/8.png",
			imageArchaeology: "assets/items/staff/8archaeology.png",
			tier: 1,
			rarity: "unique",
			lore: "Gives new meaning to the phrase 'a brush with death'.",
			obtain: "Buy from a merchant during the Samhain event.",
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
			rarity: "unique",
			lore: "A scale model of the staff wielded by the Ice King of Subterrania, Vulpric.",
			obtain: "Buy from a merchant during the Christmas event.",
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
			rarity: "common",
			lore: "This ice doesn't last forever.",
			obtain: "Buy from a merchant during the Christmas event.",
			sellPrice: 2,
			stats: {
				damage: 4,
				maxDamage: 12,
			},
			projectile: "frostball",
			projectileAdjust: {x: 0, y: 0},
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
			rarity: "common",
			sellPrice: 1,
			obtain: "Purchase from a merchant in the Fishers' Valley.",
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
			sellPrice: 1,
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
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
			sellPrice: 3,
			lore: "One shot, one kill.",
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
			stats: {
				damage: 3,
				focusSpeed: 1,
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
			lore: "It used to fire bolts. Now it just shoots wood.",
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
			stats: {
				damage: 2.5,
				criticalChance: 70,
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
			obtain: "Can be found as an unidentified item in areas around Eaglecrest Logging Camp.",
			area: "loggingCamp",
			stats: {
				damage: 4,
				flaming: 1,
			},
		},
		{
			id: 7,
			name: "Samhain Spiderbow",
			type: "bow",
			image: "assets/items/bow/7.png",
			tier: 1,
			rarity: "unique",
			lore: "So this is what happens when you leave your crossbow in the shed for too long.",
			obtain: "Buy from a merchant during the Samhain event.",
			sellPrice: 4,
			stats: {
				damage: 3.5,
			},
			onAttack: function (enemy) {
				// give slowness to enemy
				Game.statusEffects.walkSpeed({
					target: enemy,
					effectTitle: "Webbed Up",
					speedIncrease: -50,
					time: 1,
				});
			},
			functionText: "Gives -50% walk speed to attacked enemies for 1 second",
			projectile: "arrowOrange",
			projectileAdjust: {x: 20, y: 20},
		},
		{
			id: 8,
			name: "Snowball",
			type: "bow",
			image: "assets/items/bow/8.png",
			tier: 1,
			rarity: "common",
			sellPrice: 1,
			lore: "Throw it at someone you don't like",
			uncollectable: true,
			stats: {
				damage: 0,
			},
			onAnyAttack: function (projectile) {
				Dom.inventory.removeById(8, "bow");
				if(projectile.isTouching(Game.npcs[0]) && Game.areaName === "eaglecrestLoggingCamp"){
					if(Player.quests.questProgress.hitTeper === undefined){
						Player.quests.questProgress.hitTeper = 1;
					}else{
						Player.quests.questProgress.hitTeper++;
					}
					if(Player.quests.questProgress.hitTeper === 3){
						Game.projectiles.splice(Game.searchFor(projectile.id, Game.projectiles), 1); // find the id of the to-be-removed projectile and remove it
						Game.npcs[0].image = Loader.getImage("teperAngry");
					}
				}
				Game.inventoryUpdate();
			},
			functionText: "Gives -30% walk speed to hit enemies for 2 seconds",
			onAttack: function (enemy) {
				// give slowness to enemy
				Game.statusEffects.walkSpeed({
					target: enemy,
					effectTitle: "Snow coating",
					speedIncrease: -30,
					time: 2,
				});
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
			rarity: "unique",
			lore: "Not for firing at Marshall Teper.",
			obtain: "Buy from a merchant during the Christmas event.",
			sellPrice: 4,
			stats: {
				damage: 3,
				stun: 0.2,
			},
			functionText: "Gives -30% walk speed to hit enemies for 2 seconds",
			onAttack: function (enemy) {
				// give slowness to enemy
				Game.statusEffects.walkSpeed({
					target: enemy,
					effectTitle: "Snow coating",
					speedIncrease: -30,
					time: 2,
				});
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
			rarity: "common",
			lore: "This ice doesn't last forever.",
			obtain: "Buy from a merchant during the Christmas event.",
			sellPrice: 2,
			stats: {
				damage: 4,
			},
			projectile: "arrowSnow",
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
			sellPrice: 3,
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
			rarity: "unique",
			obtain: "Can be found the items of this set as unidentified items in areas around Eaglecrest Logging Camp.",
			armour: [
				"Siege Helm",
				"Siege Chestplate",
				"Siege Greaves",
				"Siege Boots",
			],
			stats: {
				defence: 5,
				healthRegen: 0.5,
			},
		},
		{
			id: 3,
			name: "Goblin Forged Set",
			type: "set",
			image: "assets/items/set/3.png",
			tier: 1,
			rarity: "unique",
			obtain: "Can be found the items of this set as unidentified items in areas around Eaglecrest Logging Camp.",
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
			rarity: "mythic",
			obtain: "Can be found the items of this set in a sunken chest in a tier 1 fishing area.",
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
		{
			id: 4,
			name: "Samhain Mark",
			type: "currency",
			image: "assets/items/currency/4.png",
			use: "Used to buy special Samhain event items from a Samhain merchant.",
			stack: 256,
		},
		{
			id: 5,
			name: "Christmas Token",
			type: "currency",
			image: "assets/items/currency/5.png",
			use: "Used to buy special Christmas items around the Eaglecrest Logging Camp.",
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
			sellPrice: 10,
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
			name: "",
			type: "item",
			lore: "You can earn a special item from completing this quest.",
			image: "assets/items/item/1.png", // perhaps give it its own image?
			stack: 1,
		},
		{
			id: 2,
			name: "Log",
			type: "item",
			image: "assets/items/item/2.png",
			sellPrice: 1,
			sellQuantity: 4,
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
			sellQuantity: 8,
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
			functionText: "Siphons the soul essence of any nearby enemy corpses",
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
			sellQuantity: 2,
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
			onClick: function (inventoryPosition) {
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
			name: "Camera",
			type: "item",
			image: "assets/items/item/14.png",
			functionText: "Click to take a screenshot",
			onClick: function () {
				try{
					dataURL = document.getElementById("game").toDataURL("image/png");
					Dom.alert.page("Click the image to download<br><br><a href='"+dataURL+"' download><img src='"+dataURL+"' height='200px'></img></a>",0);
				}catch(error){
					console.error("Camera does not work on local versions. If you are using the main version please report this error.");
				}
			},
		},
		{
			id: 15,
			name: "Arcane Magnet",
			type: "item",
			image: "assets/items/item/15.png",
			functionText: "Drags in nearby enemies (discard to stop)",
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
			lore: "You can't understand what the book says.",
			sellPrice: 1,
			sellQuantity: 4,
			stack: 4,
		},
		{
			id: 17,
			name: "DOM, the Gingerbread Robot",
			type: "item",
			image: "assets/items/item/17.png",
			functionText: "Restores 15 health over 10 seconds (whilst not in combat)",
			lore: "A trusty companion. A tasty snack.<br><br>Obtained as a present from Christmas Day, 2018",
			onClick: function (inventoryPosition) {
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
					Game.sayChat("DOM, the Gingerbread Robot", "Gingerbread matrices restoring.", false, 300, false);
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
			onClick: function (inventoryPosition) {
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
			onClick: function (inventoryPosition) {
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
			functionText: "Restores 15 health",
			lore: "Might make you a little tipsy...",
			sellPrice: 1,
			onClick: function (inventoryPosition) {
				// complete quest from innkeeper
				if(Player.quests.questProgress.drunkBeer === undefined){
					Player.quests.questProgress.drunkBeer = 1;
				}
				
				// remove the item
				Dom.inventory.remove(inventoryPosition);
				
				// restore the health
				Game.restoreHealth(Game.hero, 20);
				// make the player tipsy!
				//tbd
			},
			quest: function(){
				return !Player.quests.completedQuestArray.includes("A drink on us!");
			},
		},
		{
			id: 6,
			name: "Goblin Brewed Potion",
			type: "consumable",
			image: "assets/items/consumable/6.png",
			sellPrice: 1,
			functionText: "I wonder what this does?",
			onClick: function (inventoryPosition) {
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
						break;
					case 1:
						// give swiftness I status effect to player
						Game.statusEffects.walkSpeed({
							target: Game.hero,
							effectTitle: "Swiftness I",
							damageIncrease: 35,
							time: 20,
						});
						break;
					case 2:
						// give fire I status effect to player
						Game.statusEffects.fire(Game.hero, 1);
						break;
					case 3:
						// deal 50 damage over 10 seconds to the player
						Game.statusEffects.poison(Game.hero, 50, 10);
						break;
				}
			}
		},
		{
			id: 7,
			name: "Goblin Trap",
			type: "consumable",
			image: "assets/items/consumable/7.png",
			functionText: "Places a trap (can only be used in The Nilbog)",
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
						image: "trap",
						name: "Goblin Trap",
						x: Game.hero.x,
						y: Game.hero.y + 40,
						type: "things",
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
			sellPrice: 2,
			image: "assets/items/consumable/8.png",
			functionText: "Gives you +20 fishing skill for your next fishing attempt",
			maxCharges: 3,
			onClick: function (inventoryPosition, hotbar) {
				if (!Game.hero.hasStatusEffect("Fish bait")) { // player does not have an existing fishing status effect
					// remove one charge from the item
					Dom.inventory.removeItemCharge(inventoryPosition, hotbar);
					
					// give fish bait status effect
					Game.hero.statusEffects.push(new statusEffect({
						title: "Fish bait",
						effect: "+20 fishing skill for your next fishing attempt",
						info: {
							skillIncrease: 20,
						},
						image: "bait",
					}));
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
			maxCharges: 3,
			onClick: function (inventoryPosition, hotbar) {
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
						break;
					case 1:
						// give stealth to the player
						Game.statusEffects.stealth({
							target: Game.hero,
							effectTitle: "Ghostly Stealth",
						});
						break;
					case 2:
						// give -50% walk speed to the player
						// this is a curse, so when an enemy is attacked it is passed on to them instead
						Game.statusEffects.walkSpeed({
							target: Game.hero,
							effectTitle: "Curse of fatigue",
							effectDescription: "% walk speed (this is passed on to your next attacked enemy)",
							speedIncrease: -50,
							curse: true,
						});
						break;
				}
			},
			lore: "Stick your hand in, just like your ancestors once did!",
		},
		{
			id: 10,
			name: "Bunch of Blood Bats",
			type: "consumable",
			sellPrice: 2, // TBC
			image: "assets/items/consumable/10.png",
			functionText: "Deals 5 damage to the nearest enemy, stunning them for 1s",
			maxCharges: 3,
			onClick: function (inventoryPosition) {
				// remove one charge from the item
				Dom.inventory.removeItemCharge(inventoryPosition);
				
				// find closest enemy
				let moveTowards = Game.closest(Game.enemies, Game.hero);
				
				// find bearing
				let projectileRotate = bearing(projectile, moveTowards);
				
				// summon bat projectile
				Game.projectiles.push(new Projectile({
					map: map,
					x: Game.hero.x,
					y: Game.hero.y,
					stats: {
						damage: 5,
						stun: 1,
					},
					targets: [Game.enemies],
					rotate: projectileRotate,
					/*adjust: {
						x: this.projectile.adjust.x || undefined,
						y: this.projectile.adjust.y || undefined,
						towards: this.projectile.adjust.towards || undefined,
					},*/
					image: "bloodBat",
					moveTowards: moveTowards,
					moveSpeed: 250,
				}));
			},
			lore: "",
			images: { // images that should be loaded for this item
				names: ["bloodBat",],
				addresses: ["./assets/projectiles/bloodBat.png",],
			},
		},
		{
			id: 11,
			name: "Potion of Goblin Resistance",
			type: "consumable",
			image: "assets/items/consumable/11.png",
			sellPrice: 2,
			functionText: "Increases defence against Nilbog goblins by 40% for 10 seconds",
			onClick: function (inventoryPosition) {
				// remove the item
				Dom.inventory.remove(inventoryPosition);
				
				// give the status effect
				Game.statusEffects.defence({
					target: Game.hero,
					effectTitle: "Goblin Resistance",
					defenceIncrease: 40,
					time: 10,
					subSpecies: "nilbog goblin",
				});
			}
		},
		{
			id: 12,
			name: "Magnetised Lure",
			type: "consumable",
			image: "assets/items/consumable/12.png",
			sellPrice: 2,
			functionText: "Allows you to ONLY fish up junk items for your next fishing attempt",
			maxCharges: 10,
			onClick: function (inventoryPosition, hotbar) {
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
			onClick: function (inventoryPosition) {
				// remove the item
				Dom.inventory.remove(inventoryPosition);
				
				// displace player
				Game.hero.displace(0, 180, 1.5, ToRadians(Random(0, 360)));
				// displace enemies
				let enemiesInRange = Game.enemies.filter(enemy => Game.areNearby(Game.hero, enemy, 180));
				enemiesInRange.forEach(enemy => {
					enemy.displace(0, 180, 1.5, bearing(Game.hero, enemy));
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
			onClick: function (inventoryPosition) {
				if (Game.enemies.length > 0) { // check there is an enemy to swap with
					// remove the item
					Dom.inventory.remove(inventoryPosition);
					
					// pick random enemy
					let enemy = Game.enemies[Random(0, Game.enemies.length-1)];
					
					// swap positions!
					let enemyPositionX = enemy.x;
					let enemyPositionY = enemy.y;
					enemy.x = Game.hero.x;
					enemy.y = Game.hero.y;
					Game.hero.x = enemyPositionX;
					Game.hero.y = enemyPositionY;
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
			onClick: function (inventoryPosition) {
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
			functionText: "Restores 20 health",
			lore: "Don't worry, side effects are in the Christmas spirit.",
			sellPrice: 1,
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
			id: 17,
			name: "Christmas Potion",
			type: "consumable",
			image: "assets/items/consumable/17.png",
			functionText: "Increases XP gain by 20% for 30 seconds",
			lore: "This potion is made with a secret ingredient only found at Christmas.",
			sellPrice: 1,
			onClick: function (inventoryPosition) {
				// remove the item
				Dom.inventory.remove(inventoryPosition);
				
				Game.statusEffects.xp({
					target: Game.hero,
					effectTitle: "XP Bonus",
					xpIncrease: 20,
					time: 30,
				});
			}
		},
		{
			id: 18,
			name: "Christmas Sapling",
			type: "consumable",
			image: "assets/items/consumable/18.png",
			functionText: "Places a christmas decoration (can only be used in the Logging Camp)",
			lore: "It will soon flourish into a beautiful tree!",
			onClick: function (inventoryPosition) {
				if (Game.areaName === "eaglecrestLoggingCamp" && Game.event === "Christmas") { // it can only be placed in the logging camp during christmas
					// remove the item
					Dom.inventory.remove(inventoryPosition);
					
					// quest progress
					if (Player.quests.questProgress.christmasSaplingsPlaced !== undefined) {
						Player.quests.questProgress.christmasSaplingsPlaced++;
					}
					else {
						Player.quests.questProgress.christmasSaplingsPlaced = 1;
					}
					
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
	],
	food: [
		{
			id: 0,
			name: "Bread",
			type: "food",
			image: "assets/items/food/0.png",
			functionText: "Restores 25 health over 10 seconds (whilst not in combat)",
			sellPrice: 1,
			healthRestore: 25,
			healthRestoreTime: 10,
		},
		{
			id: 1,
			name: "Mince Pie",
			type: "food",
			image: "assets/items/food/1.png",
			functionText: "Restores 40 health over 10 seconds (whilst not in combat)",
			sellPrice: 1,
			healthRestore: 40,
			healthRestoreTime: 10,
			lore: "A festive snack.",
		},
		{
			id: 2,
			name: "Christmas Pudding",
			type: "food",
			image: "assets/items/food/2.png",
			functionText: "Restores 30 health over 5 seconds (whilst not in combat)",
			sellPrice: 1,
			healthRestore: 30,
			healthRestoreTime: 5,
			lore: "A festive pudding.",
		},
	],
	teleport: [
        {
            id: 0,
            name: "Logging Teleport Coin",
            type: "teleport",
            image: "assets/items/teleport/0.png",
            functionText: "Teleports you to the Treefellers' Tavern in the Logging Camp",
            sellPrice: 10,
            teleport: {
                x: 678,
                y: 87,
                location: "tavern",
            },
            cooldown: 1000000, // 1 day (dhhmmss)
            lore: "A collectable coin.",
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
			sellPrice: 3,
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
			sellPrice: 3,
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
			sellPrice: 5,
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
			sellPrice: 1,
			sellQuantity: 8,
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
			sellPrice: 1,
			sellQuantity: 4,
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
			sellPrice: 1,
			sellQuantity: 4,
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
			sellPrice: 1,
			sellQuantity: 4,
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
			sellQuantity: 1,
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
			sellPrice: 2,
			lore: "",
			consumption: true,
			areas: ["loggingCamp"], 
			clicksToCatch: 2,
			timeToCatch: 750,
		},
		{
			id: 16,
			name: "Sunken Chest",
			fishingType: "watermisc",
			type: "fish",
			image: "assets/items/fish/16.png",
			rarity: "mythic",
			sellPrice: 5,
			lore: "It seems to be locked. You need a key to open it.",
			areas: [], 
			clicksToCatch: 20,
			timeToCatch: 7000,			
			onOpen: function () {
				let loot = [];
				// fill up chest
				// junk items
				let possibleJunkItems = Items.fish.filter(item => item.fishingType === "waterjunk"); // filter for junk fishing items
				let itemsChosen = 0; // cap out at 6 different junk items
				possibleJunkItems.forEach(item => { 
					if (itemsChosen < 8 && Random(0, 2) === 0) { // 1 in 3 chance of it being in the chest
						let toBePushed = {};
						toBePushed.item = item;
						let itemStack = item.stack
						if (itemStack === undefined) {
							itemStack = 1;
						}
						else if (itemStack > 20) {
							itemStack = 20;
						}
						toBePushed.quantity = Random(1, itemStack);
						loot.push(toBePushed);
						itemsChosen++;
						if (Random(0, 1) === 0) { // 1 in 2 chance of a second stack
							toBePushed.quantity = Random(1, itemStack);
							loot.push(toBePushed);
						}
					}
				});
				// gold
				let goldStacks = Random(2, 5); // between 2 and 5 possible stacks of gold
				for (let i = 0; i < goldStacks; i++) {
					let toBePushed = {
						item: Items.currency[2],
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
				loot = Game.positionLoot(loot, 24);
				
				// open loot page
				Dom.loot.currentId = "x"; // x means that nothing should be done when it is closed
				Dom.choose.page("Sunken Chest", ["Loot chest!"], [Dom.loot.page], [["Sunken Chest", loot]]);
			},
		},
		{
			id: 17,
			name: "Sunken Key",
			fishingType: "watermisc",
			type: "fish",
			image: "assets/items/fish/17.png",
			rarity: "mythic",
			sellPrice: 2,
			lore: "I wonder what this opens?",
			areas: [], 
			clicksToCatch: 1,
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
			lore: ["The message's ink appears to have washed off.", 
			"The message reads: 'Dearest Audrey, I recently got into alchemy. I think I need an arm donor. Can use one of yours?'", 
			"The message reads: 'Dearest Audrey, I hope you are well. Please send return with some gold. I will pay you back.", 
			"The message reads: 'Dearest Audrey, I am sending this message from the Dragon Cove. We're looking for new volunteers to undertake our dragonkin convertee program. Reply if interested.'", 
			"The message reads: 'Dearest Audrey, I have sent five other messages to you. Please check your nearby shores for them.'",
			"The message reads: 'Dearest Audrey, It is very cold at the moment so there is no sea. Decided to roll this bottle to you instead of the normal method. Please reply if it worked.'"],
			areas: [], 
			clicksToCatch: 1,
			timeToCatch: 750,
		},
		{
			id: 19,
			name: "Direweed",
			fishingType: "waterjunk",
			type: "fish",
			image: "assets/items/fish/19.png",
			rarity: "junk",
			sellPrice: 1,
			sellQuantity: 8,
			stack: 64,
			lore: "Has some alchemical uses.",
			areas: ["loggingCamp"], 
		},
		{
			// blood moon only
			id: 20,
			name: "Samhain Zombiefish",
			fishingType: "fish",
			type: "fish",
			image: "assets/items/fish/20.png",
			rarity: "unique",
			sellPrice: 3,
			lore: "Its red eyes glisten under the blood moon.",
			howToCatch: "Can be fished up during a blood moon.",
			consumption: false,
			areas: [],
			length: {
				min: 30,
				avg: 55,
				max: 80,
			},
			onCatch: function () {
				Game.hero.takeDamage(10);
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
			areas: ["tutorial"],
			clicksToCatch: 1,
			timeToCatch: 1000,
			catchRequirement: function () {
				return (Game.event === "Christmas"
				&& Player.quests.activeQuestArray.includes("Sunken Presents")
				&& (Player.quests.questProgress.christmasPresentsCaught === undefined
				|| Player.quests.questProgress.christmasPresentsCaught < 2)
				&& Player.quests.questProgress.christmasPresentsCaught === Player.quests.questProgress.christmasPresentsDelivered);
				// must deliver present before catching another
			},
			onCatch: function (inventoryPosition) {
				// quest variable increase
				if (Player.quests.questProgress.christmasPresentsCaught === undefined) {
					Player.quests.questProgress.christmasPresentsCaught = 1;
				}
				else {
					Player.quests.questProgress.christmasPresentsCaught++;
				}
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
				// update quest log
				Dom.quests.active();
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
			clicksToCatch: 1,
			timeToCatch: 1000,
			catchRequirement: function () {
				// EITHER given as the third part of the christmas fishing quest which contains the fishing rod
				// OR given when fished up with the christmas fishing rod and these presents contain 3-5 gold
				return ((Game.event === "Christmas"
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
					Dom.quests.active();
				}
			},
			onClick: function (inventoryPosition) {
				// remove item
				Dom.inventory.remove(inventoryPosition);
				// replace at the same slot
				let item = null;
				let itemQuantity = 0;
				if (!Player.quests.questProgress.christmasFishingRod) {
					// fishing rod has not been obtained
					item = Items.rod[4];
					itemQuantity = 1;
					Player.quests.questProgress.christmasFishingRod = true; // now obtained
				}
				else {
					// fishing rod has been obtained
					item = Items.currency[2];
					itemQuantity = Random(3, 5);
				}
				Dom.inventory.give(item, itemQuantity, inventoryPosition);
			}
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
		*/
	],
};

WeaponRanges = {
	bow: 1000,
	staff: 200,
	sword: 100,
	rod: 200,
}