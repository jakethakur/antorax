var Skins = {
	a: [
		{
			id: 0,
			position: {x: -6.7, y: Infinity},
			name: "Green Archer",
			gender:	"m",
			projectile:	"arrow",
			projectileAdjust: {x: 20, y: 20},
			cursor: "crosshair",
			headAdjust: {x: 0, y: 0},
		},
		{
			id: 1,
			position: {x: -6.7, y: Infinity},
			name: "Blue Archer",
			gender:	"f",
			projectile:	"arrow",
			projectileAdjust: {x: 20, y: 20},
			cursor: "crosshair",
			headAdjust: {x: 0, y: 0},
		},
		{
			id: 2,
			position: {x: 20, y: Infinity},
			name: "Jungle Hunter",
			gender:	"m",
			projectile:	"blueBeam",
			projectileAdjust: {x: 20, y: 20},
			cursor: "jungleHunter",
			cursorPosition: {x: 9.5, y: 8},
			headAdjust: {x: 12, y: 0},
		},
		{
			id: 3,
			position: {x: Infinity, y: Infinity}, // TBD PG
			name: "Were-Spider",
			gender:	"m",
			projectile:	"arrowOrange",
			projectileAdjust: {x: 20, y: 20},
			cursor: "spooky",
			cursorPosition: {x: 10, y: 10},
			headAdjust: {x: 10, y: 0},
		},
	],
	m: [
		{
			id: 0,
			position: {x: -10, y: 20},
			name: "Purple Mage",
			gender:	"m",
			projectile:	"fireball",
			projectileAdjust: {x: 20, y: 20},
			cursor: "crosshair",
			headAdjust: {x: 0, y: 0},
		},
		{
			id: 1,
			position: {x: -10, y: 20},
			name: "Blue Mage",
			gender:	"f",
			projectile:	"fireball",
			projectileAdjust: {x: 20, y: 20},
			cursor: "crosshair",
			headAdjust: {x: 0, y: 0},
		},
		{
			id: 2,
			position: {x: -20, y: Infinity},
			name: "Spirit Buster",
			gender:	"m",
			projectile:	"spiritBuster",
			projectileAdjust: {x: 0, y: 0},
			cursor: "crosshair",
			animations: {
				onAttack: {
					type: "beam",
					width: 10,
					colour: "#D05C05"
					//gradient: {"0": "#e28909","1": "#e23e09",},
				}
			},
			headAdjust: {x: 8, y: 0},
		},
		{
			id: 3,
			position: {x: -20, y: -6.7},
			name: "Wicked Witch",
			gender:	"m",
			projectile:	"fireballGreen",
			projectileAdjust: {x: 20, y: 20},
			cursor: "spooky",
			cursorPosition: {x: 10, y: 10},
			headAdjust: {x: 5, y: 12},
		},
		{
			id: 4,
			position: {x: 0, y: 0}, // TBD
			name: "Father Christmas",
			gender:	"m",
			projectile:	"bauble",
			projectileAdjust: {x: -5.5, y: -5.5},
			cursor: "chilly",
			cursorPosition: {x: 10, y: 10},
			headAdjust: {x: 0, y: 0}, // TBD
		},
	],
	k: [
		{
			id: 0,
			position: {x: -6.7, y: -10},
			name: "Blue Knight",
			gender:	"m",
			projectile:	"slash",
			projectileAdjust: {x: 20, y: 20},
			cursor: "crosshair",
			headAdjust: {x: 0, y: 0},
		},
		{
			id: 1,
			position: {x: -6.7, y: -10},
			name: "Red Knight",
			gender:	"f",
			projectile:	"slash",
			projectileAdjust: {x: 20, y: 20},
			cursor: "crosshair",
			headAdjust: {x: 0, y: 0},
		},
		{
			id: 2,
			position: {x: -20, y: Infinity},
			name: "Wisconsin Jones",
			gender:	"m",
			projectile:	"slash",
			projectileAdjust: {x: 20, y: 20},
			cursor: "crosshair",
			headAdjust: {x: 6, y: 0},
		},
		{
			id: 3,
			position: {x: -6.7, y: 10},
			name: "Animated Scarecrow",
			gender:	"m",
			projectile:	"bloodSlash",
			projectileAdjust: {x: 20, y: 20},
			cursor: "spooky",
			cursorPosition: {x: 10, y: 10},
			headAdjust: {x: -2, y: 0},
		},
	],
};

var Offsets = {
	cartDriver: {image: "driver", x: 83, y: -15},
	weaponsmith: {image: "weaponsmith", x: 75, y: -10},
	fishermanTobenam: {image: "fisherman", x: -10, y: -10},
	marshallTeper: {image: "teper", x: 117, y: -10},
	combatTrainerSaral: {image: "saral", x: 71, y: -10},
	eaglecrestMailman: {image: "mailman", x: 140, y: -10},
	identifierGilas: {image: "identifier", x: 120, y: -10},
	soulHealerNalaa: {image: "soulHealer", x: 110, y: -10},
	galuthelTheTrapMechanic: {image: "galuthel", x: 100, y: -5},
	itemBuyerNoledar: {image: "itemBuyer", x: -5, y: -10},
	ciarraDarkbrew: {image: "darkbrew", x: 30, y: -10},
	gregorGoldenbrew: {image: "innkeeper", x: 115, y: -20},
	goblinTorch: {image: "assets/items/staff/7", x: 0, y: 0},
	samhainGhost: {image: "ghost", x: 83, y: -10},
};