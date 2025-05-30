// Skin images should have 1 padding around each image
// therefore the whole spritesheet should have 1 padding around the edge, and 2 between each image

var Skins = {
	skinTone: [
		{
			id: 0,
			race: "Human",
			colour: "Light1",
			src: "humanLight1", // i.e. assets/playerCustom/THIS.png
			series:	"Classic",
			base: true,
		},
		{
			id: 1,
			race: "Human",
			colour: "Light2",
			src: "humanLight2",
			series:	"Classic",
			base: true,
		},
		{
			id: 2,
			race: "Human",
			colour: "Dark1",
			src: "humanDark1",
			series:	"Classic",
			base: true,
		},
		{
			id: 3,
			race: "Human",
			colour: "Dark2",
			src: "humanDark2",
			series:	"Classic",
			base: true,
		},
		{
			id: 4,
			race: "Orc",
			colour: "Green1",
			src: "orcGreen1",
			series:	"Classic",
			base: true,
		},
		{
			id: 5,
			race: "Orc",
			colour: "Green2",
			src: "orcGreen2",
			series:	"Classic",
			base: true,
		},
		{
			id: 6,
			race: "Orc",
			colour: "Orange1",
			src: "orcOrange1",
			series:	"Classic",
			base: true,
		},
		{
			id: 7,
			race: "Orc",
			colour: "Orange2",
			src: "orcOrange2",
			series:	"Classic",
			base: true,
		},
		{
			id: 8,
			race: "Elf",
			colour: "Light1",
			src: "elfLight1",
			series:	"Classic",
			base: true,
		},
		{
			id: 9,
			race: "Elf",
			colour: "Light2",
			src: "elfLight2",
			series:	"Classic",
			base: true,
		},
		{
			id: 10,
			race: "Elf",
			colour: "Dark1",
			src: "elfDark1",
			series:	"Classic",
			base: true,
		},
		{
			id: 11,
			race: "Elf",
			colour: "Dark2",
			src: "elfDark2",
			series:	"Classic",
			base: true,
		},
		{
			id: 12,
			race: "Penguin",
			colour: "Blue",
			src: "penguin",
			series:	"Dev",
		},
		{
			id: 13,
			race: "Panda",
			colour: "White",
			src: "panda",
			series:	"Dev",
		},
		{
			id: 14,
			race: "Slug",
			colour: "Brown",
			src: "slug",
			series:	"Dev",
		},
		{
			id: 15,
			race: "Human",
			colour: "Tan1",
			src: "humanTan1",
			series:	"Classic",
			base: true,
		},
	],
	mageClothing: [
		{
			id: 0,
			name: "Lapis Cloak",
			src: "mageCloakLapis", // clothing/mage/this
			series:	"Classic",
			base: true,
		},
		{
			id: 1,
			name: "Amethyst Cloak",
			src: "mageCloakAmethyst",
			series:	"Classic",
			base: true,
		},
	],
	archerClothing: [
		{
			id: 0,
			name: "Ivy Coat",
			src: "archerCoatIvy",
			series:	"Classic",
			base: true,
		},
		{
			id: 1,
			name: "Flamingo Coat",
			src: "archerCoatFlamingo",
			series:	"Classic",
			base: true,
		},
		{
			id: 2,
			name: "Lily Coat",
			src: "archerCoatLily",
			series:	"Classic",
			base: true,
		},
	],
	knightClothing: [
		{
			id: 0,
			name: "Copper Armour",
			src: "knightArmourCopper",
			series:	"Classic",
			base: true,
		},
	],
	hairColours: [
		// expected to exist for all hair styles (any extra colours can be added directly to the hair object itself)
		// for colours, the name property acts as the "id"
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
			src: "messy", // colour is appended to the end of this
			additionalColours: [ // in addition to those in hairColours
			],
			series:	"Classic",
			base: true,
		},
		{
			id: 1,
			name: "Short",
			src: "short", // colour is appended to the end of this
			additionalColours: [ // in addition to those in hairColours
			],
			series:	"Classic",
			base: true,
		},
		{
			id: 2,
			name: "Long",
			src: "long", // colour is appended to the end of this
			series:	"Classic",
			base: true,
		},
		{
			id: 3,
			name: "Ponytail",
			src: "ponytail", // colour is appended to the end of this
			series:	"Classic",
			base: true,
		},
		{
			id: 4,
			name: "Curly",
			src: "curly", // colour is appended to the end of this
			series:	"Classic",
			base: true,
		},
		{
			id: 5,
			name: "No Hair",
			src: "null", // colour is appended to the end of this
			blank: true,
			colourless: true,
			series:	"Classic",
			base: true,
		},
		{
			id: 6,
			name: "Short 2",
			src: "short2", // colour is appended to the end of this
			series:	"NPCs", // othmar, but also available for player !
			base: true,
		},
		{
			id: 7,
			name: "Bob",
			src: "bob", // colour is appended to the end of this
			series:	"NPCs", // wilma, but also available for player !
			base: true,
		},
		{
			id: 8,
			name: "Bedhead",
			src: "bedhead", // colour is appended to the end of this
			series:	"NPCs", // robert hendman, but also available for player !
			base: true,
		},
		{
			id: 9,
			name: "Crazy",
			src: "crazy", // colour is appended to the end of this
			series:	"NPCs", // crazy cat lady, but also available for player !
			base: true,
		},
		{
			id: 10,
			name: "Microfringe",
			src: "microfringe", // colour is appended to the end of this
			series:	"NPCs", // iglooghost, but also available for player !
			base: true,
		},
		{
			id: 11,
			name: "Orc Ponytail",
			src: "orcPonytail", // colour is appended to the end of this
			series:	"Classic 2",
			base: true,
		},
	],
	beard: [
		{
			id: 0,
			name: "No Facial Hair",
			src: "null",
			blank: true,
			series:	"Classic",
			base: true,
		},
		{
			id: 1,
			name: "beard",
			src: "beard", // colour is appended to the end of this
			additionalColours: [ // in addition to those in hairColours
			],
			series:	"Classic",
			base: true,
		},
		{
			id: 2,
			name: "Mutton Chops",
			src: "muttonChops", // colour is appended to the end of this
			additionalColours: [ // in addition to those in hairColours
			],
			series:	"Classic 2",
			base: true,
		},
	],
	hat: [
		{
			id: 0,
			name: "No Hat",
			src: "null",
			blank: true,
			series:	"Classic",
			base: true,
		},
		{
			id: 1,
			name: "Archer Hat",
			src: "archerHat",
			series:	"Classic",
			base: true,
			class: "a", // for archers only
		},
		{
			id: 2,
			name: "Mage Hat",
			src: "mageHat",
			series:	"Classic",
			base: true,
			class: "m", 
		},
		{
			id: 3,
			name: "Knight Hat",
			src: "knightHat",
			series:	"Classic",
			base: true,
			class: "k", 
		},
		{
			id: 4,
			name: "Ginger Cat Hat",
			src: "catHatGinger",
			series:	"Classic",
			base: true,
			offsetY: -8,
		},
		{
			id: 5,
			name: "Neo Hat",
			src: "iglooghost",
			series:	"NPC",
			offsetY: -8,
			// npc only - iglooghost
		},
		{
			id: 6,
			name: "Pirate Hat",
			src: "pirateHat",
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
