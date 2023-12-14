// Skin images should have 1 padding around each image
// therefore the whole spritesheet should have 1 padding around the edge, and 2 between each image

var Skins = {
	skinTone: [
		{
			id: 0,
			name: "Human",
			src: "skinTone/human", // colour is appended to the end of this
			colours: [
				{
					name: "Light1", // this should be exactly what is appended to the image src (minus the .png)
					hex: "#FEDDB4", // approx hex code
				},
			],
			series:	"Classic",
			base: true,
		},
		{
			id: 1,
			name: "Orc",
			src: "skinTone/orc", // colour is appended to the end of this
			colours: [
				{
					name: "Green1", // this should be exactly what is appended to the image src (minus the .png)
					hex: "#68823F", // approx hex code
				},
				{
					name: "Orange1", // this should be exactly what is appended to the image src (minus the .png)
					hex: "#E0AA4C", // approx hex code
				},
			],
			series:	"Classic",
			base: true,
		},
		{
			id: 2,
			name: "Elf",
			src: "skinTone/elf", // colour is appended to the end of this
			colours: [
				{
					name: "Light1", // this should be exactly what is appended to the image src (minus the .png)
					hex: "#68823F",//tbd // approx hex code
				},
			],
			series:	"Classic",
			base: true,
		},
		{
			id: 3,
			name: "Penguin",
			src: "skinTone/penguin", // colour is appended to the end of this
			colours: [
				{
					name: "Blue", // this should be exactly what is appended to the image src (minus the .png)
					hex: "#2C3286", // approx hex code
				},
			],
			series:	"Dev",
		},
	],
	mageClothing: [
		{
			id: 0,
			name: "Cloak",
			src: "clothing/mage/mageCloak", // colour is appended to the end of this
			colours: [
				{
					name: "Lapis", // this should be exactly what is appended to the image src (minus the .png)
					hex: "#111B5A", // approx hex code
				},
				{
					name: "Amethyst",
					hex: "#530093"
				},
			],
			series:	"Classic",
			base: true,
		},
	],
	archerClothing: [
		{
			id: 0,
			name: "Coat",
			src: "clothing/archer/archerCoat", // colour is appended to the end of this
			colours: [
				{
					name: "Ivy", // this should be exactly what is appended to the image src (minus the .png)
					hex: "#2C3E1F", // approx hex code
				},
			],
			series:	"Classic",
			base: true,
		},
	],
	knightClothing: [
		{
			id: 0,
			name: "Armour",
			src: "clothing/knight/knightArmour", // colour is appended to the end of this
			colours: [
				{
					name: "Copper", // this should be exactly what is appended to the image src (minus the .png)
					hex: "#6A1000", // approx hex code
				},
			],
			series:	"Classic",
			base: true,
		},
	],
	hairColours: [
		// expected to exist for all hair styles (any extra colours can be added directly to the hair object itself)
		{
			name: "Black", // this should be exactly what is appended to the image src (minus the .png)
			hex: "#000000", // approx hex code
		},
		{
			name: "Brown",
			hex: "#432500",
		},
		{
			name: "Blonde",
			hex: "#8E7740",
		},
		{
			name: "Ginger",
			hex: "#914D37",
		},
		{
			name: "White",
			hex: "#B4B4B4",
		},
	],
	hair: [
		{
			id: 0,
			name: "Messy",
			src: "hair/messy", // colour is appended to the end of this
			additionalColours: [ // in addition to those in hairColours
			],
			series:	"Classic",
			base: true,
		},
		{
			id: 1,
			name: "Short",
			src: "hair/short", // colour is appended to the end of this
			additionalColours: [ // in addition to those in hairColours
			],
			series:	"Classic",
			base: true,
		},
		{
			id: 2,
			name: "Long",
			src: "hair/long", // colour is appended to the end of this
			series:	"Classic",
			base: true,
		},
		{
			id: 3,
			name: "Ponytail",
			src: "hair/ponytail", // colour is appended to the end of this
			series:	"Classic",
			base: true,
		},
		{
			id: 4,
			name: "Curly",
			src: "hair/curly", // colour is appended to the end of this
			series:	"Classic",
			base: true,
		},
		{
			id: 5,
			name: "No Hair",
			src: "hair/null", // colour is appended to the end of this
			colourless: true,
			series:	"Classic",
			base: true,
		},
	],
	// old skins below:
	a: [
		{
			id: 0,
			position: {x: -6.7, y: Infinity},
			name: "Green Archer",
			series:	"Classic",
			projectile:	"arrow",
			projectileAdjust: {x: 20, y: 20},
			cursor: "crosshair",
			headAdjust: {x: 0, y: 0},
		},
		{
			id: 1,
			position: {x: -6.7, y: Infinity},
			name: "Blue Archer",
			series:	"Classic",
			projectile:	"arrow",
			projectileAdjust: {x: 20, y: 20},
			cursor: "crosshair",
			headAdjust: {x: 0, y: 0},
		},
		{
			id: 2,
			position: {x: 20, y: Infinity},
			name: "Jungle Hunter",
			series:	"Tales of Another Realm",
			projectile:	"blueBeam",
			projectileAdjust: {x: 20, y: 20},
			cursor: "jungleHunter",
			cursorPosition: {x: 9.5, y: 8},
			headAdjust: {x: 12, y: 0},
		},
		{
			id: 3,
			position: {x: Infinity, y: 6.7},
			name: "Were-Spider",
			series:	"Samhain",
			projectile:	"arrowOrange",
			projectileAdjust: {x: 20, y: 20},
			cursor: "spooky",
			cursorPosition: {x: 10, y: 10},
			headAdjust: {x: 10, y: 0},
		},
		{
			id: 4,
			position: {x: Infinity, y: Infinity},
			name: "Snow Elf",
			series:	"Christmas",
			projectile:	"snowball",
			projectileAdjust: {x: 0, y: 0},
			cursor: "chilly",
			cursorPosition: {x: 10, y: 10},
			headAdjust: {x: 10, y: 0},
		},
		{
			id: 5,
			position: {x: Infinity, y: Infinity},
			name: "Steel Man",
			series:	"Heroes of Antorax",
			projectile:	"redBeam",
			projectileAdjust: {x: 20, y: 20},
			cursor: "crosshair",
			headAdjust: {x: 10, y: 5},
		},
	],
	m: [
		{
			id: 0,
			position: {x: -10, y: 20},
			name: "Blue Mage",
			series:	"Classic",
			projectile:	"fireball",
			projectileAdjust: {x: 20, y: 20},
			cursor: "crosshair",
			headAdjust: {x: 0, y: 0},
		},
		{
			id: 1,
			position: {x: -10, y: 20},
			name: "Purple Mage",
			series:	"Classic",
			projectile:	"fireball",
			projectileAdjust: {x: 20, y: 20},
			cursor: "crosshair",
			headAdjust: {x: 0, y: 0},
		},
		{
			id: 2,
			position: {x: -20, y: Infinity},
			name: "Spirit Buster",
			series:	"Tales of Another Realm",
			projectile:	"spiritBuster",
			projectileAdjust: {x: 0, y: 0},
			cursor: "crosshair",
			animations: {
				onHit: {
					type: "beam",
					width: 10,
					colour: "#D05C05"
					//gradient: {"0": "#e28909","1": "#e23e09",},
				}
			},
			headAdjust: {x: 8, y: 3},
		},
		{
			id: 3,
			position: {x: -20, y: -6.7},
			name: "Wicked Witch",
			series:	"Samhain",
			projectile:	"fireballGreen",
			projectileAdjust: {x: 20, y: 20},
			cursor: "spooky",
			cursorPosition: {x: 10, y: 10},
			headAdjust: {x: 5, y: 12},
		},
		{
			id: 4,
			position: {x: -10, y: 5},
			name: "Father Christmas",
			series:	"Christmas",
			projectile:	"bauble",
			projectileAdjust: {x: -5.5, y: -5.5},
			cursor: "chilly",
			cursorPosition: {x: 10, y: 10},
			headAdjust: {x: 0, y: 0},
		},
		{
			id: 5,
			position: {x: -6.7, y: 10},
			name: "The Lord of Thunder",
			series:	"Heroes of Antorax",
			projectile:	"lightningBall",
			projectileAdjust: {x: 0, y: 0},
			cursor: "crosshair",
			headAdjust: {x: -3, y: 5},
		},
		{
            id: 6,
            position: {x: -20, y: 6.7},
            name: "Sorcerer Penguin",
			series:	"Creators",
            projectile: "fireballPurple",
            projectileAdjust: {x: 20, y: 20},
            cursor: "maths",
			cursorPosition: {x: 10, y: 10},
            headAdjust: {x: 3, y: 5},
        },
	],
	k: [
		{
			id: 0,
			position: {x: -6.7, y: -10},
			name: "Red Knight",
			series:	"Classic",
			projectile:	"slashNew1",
			projectile2: "melee",
			projectileAdjust: {x: 0, y: 0},
			cursor: "crosshair",
			headAdjust: {x: 0, y: 0},

		},
		{
			id: 1,
			position: {x: -6.7, y: -10},
			name: "Blue Knight",
			series:	"Classic",
			projectile:	"slash",
			projectile2: "melee",
			projectileAdjust: {x: 0, y: 0},
			cursor: "crosshair",
			headAdjust: {x: 0, y: 0},
		},
		{
			id: 2,
			position: {x: -20, y: Infinity},
			name: "Wisconsin Jones",
			series:	"Tales of Another Realm",
			projectile:	"slash",
			projectile2: "melee",
			projectileAdjust: {x: 0, y: 0},
			cursor: "crosshair",
			headAdjust: {x: 6, y: 0},
		},
		{
			id: 3,
			position: {x: -6.7, y: 10},
			name: "Animated Scarecrow",
			series:	"Samhain",
			projectile:	"slashBlood",
			projectile2: "melee",
			projectileAdjust: {x: 0, y: 0},
			cursor: "spooky",
			cursorPosition: {x: 10, y: 10},
			headAdjust: {x: -2, y: 0},
		},
		{
			id: 4,
			position: {x: Infinity, y: -20},
			name: "The Yeti",
			series:	"Christmas",
			projectile:	"slashFrost",
			projectile2: "melee",
			projectileAdjust: {x: 0, y: 0},
			cursor: "chilly",
			cursorPosition: {x: 10, y: 10},
			headAdjust: {x: 10, y: 0},
		},
		{
			id: 5,
			position: {x: Infinity, y: 20},
			name: "Captain Antorax",
			series:	"Heroes of Antorax",
			projectile:	"slashRedWhite",
			projectile2: "melee",
			projectileAdjust: {x: 0, y: 0},
			cursor: "crosshair",
			headAdjust: {x: 10, y: 5},
		},
		{
            id: 6,
            position: {x: -10, y: Infinity},
            name: "Thunder Donkey",
			series:	"Creators",
            projectile: "slashBlue",
			projectile2: "melee",
            projectileAdjust: {x: 0, y: 0},
            cursor: "physics",
			cursorPosition: {x: 9.5, y: 10},
            headAdjust: {x: 3, y: 0},
        },
	],
	// skins for player transformations
	cat: [
		{
			id: 0,
			name: "Ginger Cat",
			projectile:	"gingerFurball",
			projectileAdjust: {x: 0, y: 0},
			cursor: "crosshair",
			headAdjust: {x: 0, y: 0},
		},
	],
};

var Offsets = {
	cartDriver: {image: "assets/npcs/driver", x: 83, y: -15},
	weaponsmith: {image: "assets/npcs/weaponsmith", x: 75, y: -10},
	fishermanTobenam: {image: "assets/npcs/tobenam", x: -10, y: -10},
	marshallTeper: {image: "assets/npcs/teper", x: 117, y: -10},
	combatTrainerSaral: {image: "assets/npcs/saral", x: 71, y: -10},
	eaglecrestMailman: {image: "assets/npcs/mailman", x: 140, y: -10},
	identifierGilas: {image: "assets/npcs/gilas", x: 120, y: -10},
	soulHealerNalaa: {image: "assets/npcs/nalaa", x: 110, y: -10},
	galuthelTheTrapMechanic: {image: "assets/npcs/galuthel", x: 83, y: 0},
	itemBuyerNoledar: {image: "assets/npcs/noledar", x: -5, y: -10},
	ciarraDarkbrew: {image: "assets/npcs/darkbrew", x: 30, y: -10},
	gregorGoldenbrew: {image: "assets/npcs/gregor", x: 115, y: -20},
	goblinTorch: {image: "assets/items/staff/7", x: 0, y: 0},
	samhainGhost: {image: "assets/npcs/ghost", x: 83, y: -10},
	fatherChristmas: {image: "assets/player/m4", x: 13, y: -1.5},
	goblinRockthrower: {image: "assets/enemies/goblinRockthrower", x: 45, y: -15},
	goblinBruiser: {image: "assets/enemies/goblinBruiser", x: 10, y: -15},
	goblinCrusader: {image: "assets/enemies/goblinCrusader", x: -200, y: -10},
	goblinKing: {image: "assets/enemies/goblinKing", x: 57, y: 0},
	eaglecrestKing: {image: "assets/npcs/king", x: 33, y: -5},
	lordOfThunder: {image: "assets/player/m5", x: 19, y: -2},
	alysLoreworth: {image: "assets/npcs/alysLoreworth", x: 225, y: -2},
	shadow: {image: "assets/npcs/shadow", x: 55, y: -5},
	dolph: {image: "assets/npcs/dolph", x: 50, y: 6},
	cartDriverAlaran: {image: "assets/npcs/alaran", x: 120, y: -3},
	alfonsoMurbry: {image: "assets/npcs/alfonsoMurbry", x: 290, y: -6},
	archbishopLynch: {image: "assets/npcs/archbishop", x: 95, y: 9},
	shopkeeperBarda: {image: "assets/npcs/barda", x: 60, y: -7},
	fishTank: {image: "assets/npcs/fishTankFront", x: 50, y: 30},
};
