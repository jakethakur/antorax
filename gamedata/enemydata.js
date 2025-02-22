// used with enemy templates
const SpeciesTemplates = {
	nilbogGoblin: {
		species: "goblin",
		subSpecies: "nilbog goblin",
		// check for traps
		checkTouching: [{
			arrayName: "things",
			objectName: "Goblin Trap",
			isTouchingFunction: function (index, id) {
				// check that enemy is not "in the air" (i.e. charging for goblin king, or being displaced)
				if (this.expand === 1) {
					// remove the trap
					Game.removeObject(id, "things", index);
					Game.things.splice(index, 1);
					Areas[Game.areaName].things.splice(index, 1);
					// stun goblin
					Game.statusEffects.stun({
						target: this,
						time: 2.5,
						effectTitle: "Goblin Trapped",
					});
				}
			},
		}],
		onDeath: function () {
			// goblins killed achievement
			User.progress.goblins = Increment(User.progress.goblins);
			// general goblins killed objective
			Player.quests.questProgress.goblinsKilled = Increment(Player.quests.questProgress.goblinsKilled);
			// goblins killed with goblin torch objective
			if (Player.inventory.weapon.type === "staff" && Player.inventory.weapon.id === 7) { // goblin torch equipped
				Player.quests.questProgress.goblinsKilledWithTorch = Increment(Player.quests.questProgress.goblinsKilledWithTorch);
			}
		}
	},
	dummy: {
		hostility: "dummy",
		subSpecies: "dummy",
		chat: {
			fiftyPercentHealth: "/me creaks",
			tenPercentHealth: "/me creaks loudly",
			death: "/me crumbles into a heap of rubble",
		},
		onDeath: function () {
			User.progress.dummies = Increment(User.progress.dummies);
		},
	},
	cat: {
		hostility: "friendly",
		species: "cat",
		level: 1,
		stats: {
			maxHealth: 15,
			walkSpeed: 170,
		},
		language: "cat",
		canBeOnLead: true,
		// for villagers only (think this works ?)
        areas: [
            "eaglecrest",
            "eaglecrestElixirs",
            "eaglecrestPlains",
        ],
	},
	plainsToad: {
		species: "frog",
		subSpecies: "plains toad",
		attackTargets: [
			{target: function () { // for Overdraft quest
				if (Player.quests.npcProgress.eaglecrest[2] === 2) {
					return Game.npcs.find(character => character.name === "Gildo Cleftbeard");
				}
			}, baseAggro: 5},
			{target: function () { // for Jester quest
				if (Player.quests.possibleQuestArray.includes("A Fool's Errand")) {
					return Game.npcs.find(character => character.name === "The Jester");
				}
			}, baseAggro: 5,
			requirement: function (target) { // jester is passed in
				// dynamic requirement for if jester is attacked (checked every tick)
				if (!Player.quests.questProgress.seenJesterOnScreen) {
					if (Game.camera.isOnScreen(target)) {
						Player.quests.questProgress.seenJesterOnScreen = true;
						Dom.chat.insert(Dom.chat.say("The Jester", "Argh! Help me with these frogs!"), 0, 0, false);
					}
				}
				return Player.quests.questProgress.seenJesterOnScreen; // note this variable is reset on reentering plains
			}},
		],
		onDeath: function () {
			// frogs killed achievement
			User.progress.frogs = Increment(User.progress.frogs);
			// general frogs killed objective
			Player.quests.questProgress.frogsKilled = Increment(Player.quests.questProgress.frogsKilled);
		}
	},
	chicken: {
		species: "chicken",
		onDeath: function () {
			User.progress.chickens = Increment(User.progress.chickens);
			Player.quests.questProgress.chickensKilled = Increment(Player.quests.questProgress.chickensKilled);
		}
	},
	sheep: {
		species: "sheep",
		onDeath: function () {
			User.progress.sheep = Increment(User.progress.sheep);
			Player.quests.questProgress.sheepKilled = Increment(Player.quests.questProgress.sheepKilled);
		}
	},
	phantom: { // samhain questline only
		transparency: 0.7,
		corpseOnDeath: false,
		respawnOnDeath: false,
		name: "Phantom",
		species: "phantom",
		hostility: "hostile",
		level: 8,
		stats: {
			damage: 6,
			walkSpeed: 180,
			swimSpeed: 180,
			iceSpeed: 180,
			maxHealth: 40,
			defence: 0,
			range: 80,
			reloadTime: 1300,
			healthRegen: 1,
		},
		attackBehaviour: {
			noCollision: true,
		},
		xpGiven: 50,
		projectile: {
			image: "melee",
		},
		onDeath: function () {
			User.progress.phantoms = Increment(User.progress.phantoms);
			Player.quests.questProgress.phantomsKilled = Increment(Player.quests.questProgress.phantomsKilled);
		},
		attackTargets: [{target: function () { // for The Blood Moon is Coming... quest
			return Game.characters.find(character => character.name === "The Soothsssayer's Cauldron");
		}, baseAggro: 5}],
	},
};

const NPCTemplates = { // tbd combine with villagers
	guard: {
		name: "Eaglecrest Guard",
		hostility: "friendly",
		level: 50,
		stats: {
			maxHealth: 300,
			defence: 20,
		},
		roles:
			[

			],
		chat: {
			notUnlockedRoles: "Stay safe! Eaglecrest can be a dangerous place...",
		}
	},
	torianTintop: {
		image: "torianTintop",
		name: "Torian Tintop",
		level: 4,
		stats: {
			maxHealth: 70,
			defence: 3,
			walkSpeed: 135,
		},
		hostility: "friendly",
		roles: [
			{
				quest: Quests.eaglecrestLoggingCamp[25],
				role: "questFinish",
			},
		],
		chat: {
			chooseChat: "Not doin' anything here. Ignore me. Move on!",
			questComplete: "I'm still sad you found me, y'know. Thought I had a great spot!",
			inventoryFull: "Don't expect a reward for finding me unless you have inventory space for it.",
		},
		hideNameTag: true,
	},
	nessyTintop: {
		image: "nessyTintop",
		name: "Nessy Tintop",
		level: 4,
		stats: {
			maxHealth: 70,
			defence: 3,
			walkSpeed: 135,
		},
		hostility: "friendly",
		roles: [
			{
				quest: Quests.eaglecrestLoggingCamp[25],
				role: "questFinish",
			},
		],
		chat: {
			chooseChat: "What are you lookin' at?",
			questComplete: "Next time I hide you'll never be able to find me.",
			inventoryFull: "Doesn't count that you've found me unless you have inventory space!",
		},
		hideNameTag: true,
	},
	soothsssayerCauldron: {
		x: 300,
		y: 526,
		name: "The Soothsssayer's Cauldron",
		hideNameTag: true,
		image: "cauldron",
		hostility: "neutral",
		level: 1,
		xpGiven: 0,
		corpseOnDeath: false,
		respawnOnDeath: false,
		respawnTime: 10,
		stats: {
			walkSpeed: 0,
			maxHealth: 500,
			healthRegen: 0,
		},
		onDeathAdditional: function () {
			Dom.chat.insert("<b>The Blood Moon is Coming...</b> has been failed. Restart the quest by speaking to <b>The Soothsssayer</b>.");
			Dom.quest.abandon(Quests.eaglecrest[6]);
			while (Game.clearedTimeoutsOnAreaChange.length > 0) {
				Game.clearTimeout(Game.clearedTimeoutsOnAreaChange[0]);
				Game.clearedTimeoutsOnAreaChange.splice(0, 1);
			}
			// set back weather etc
			Areas.samhainLair.weather = "clear";
			Areas.samhainLair.indoors = true;
			Weather.updateVariables();
		},
	}
}

const EnemyTemplates = {
	dummy: {
		image: "dummy",
		deathImage: "dummyCorpse",
		name: "Training Dummy",
		speciesTemplate: SpeciesTemplates.dummy,
		stats: {
			maxHealth: 1090,
		},
	},

	item: {
		jarAnt : {
			image: "jarAnt",
			corpseOnDeath: false,
			respawnOnDeath: false,
			name: "Ant",
			hostility: "hostile",
			level: 1,
			stats: {
				damage: 3,
				walkSpeed: 50,
				swimSpeed: 25,
				iceSpeed: 100,
				maxHealth: 1,
				range: 40,
				healthRegen: 0.3,
				reloadTime: 3000,
			},
			xpGiven: 10,
			projectile: {
				image: "melee",
			},
		}
	},

	nilbog: {
		goblinRockthrower: {
			speciesTemplate: SpeciesTemplates.nilbogGoblin,
			image: "goblinRockthrower",
			deathImage: "goblinCorpse",
			name: "Goblin Rockthrower",
			hostility: "hostile",
			level: 2,
			stats: {
				damage: 3,
				walkSpeed: 100,
				swimSpeed: 45,
				iceSpeed: 170,
				maxHealth: 10,
				range: 300,
				healthRegen: 0.4,
				reloadTime: 2000,
				lootTime: 15000,
				respawnTime: 21000,
				variance: 35,
				projectileSpeed: 200,
				projectileStopMovingOnDamage: true,
				projectileRange: 200,
			},
			xpGiven: 10,
			projectile: {
				image: "rock",
			},
			lootTableTemplate: [EnemyLootTables.nilbogGoblin],
			lootTable: [
				{ // polished rock
					item: Items.item[4],
					chance: [
						80,				// 0
						30,				// 1
						5,				// 2
						0,				// 3
					],
				},
			],
			inventorySpace: 8,
		},
		goblinSkirmisher: {
			speciesTemplate: SpeciesTemplates.nilbogGoblin,
			image: "goblinSkirmisher",
			deathImage: "goblinCorpse",
			name: "Goblin Skirmisher",
			hostility: "hostile",
			level: 2,
			stats: {
				damage: 2,
				walkSpeed: 90,
				swimSpeed: 40,
				iceSpeed: 160,
				maxHealth: 10,
				defence: 2,
				range: 60,
				healthRegen: 0.4,
				reloadTime: 1500,
				lootTime: 15000,
				respawnTime: 21000,
			},
			xpGiven: 10,
			projectile: {
				image: "melee",
			},
			lootTableTemplate: [EnemyLootTables.nilbogGoblin],
			inventorySpace: 8,
		},
		goblinBruiser: {
			speciesTemplate: SpeciesTemplates.nilbogGoblin,
			image: "goblinBruiser",
			deathImage: "goblinCorpse",
			name: "Goblin Bruiser",
			hostility: "hostile",
			level: 3,
			stats: {
				damage: 4,
				walkSpeed: 70,
				swimSpeed: 35,
				iceSpeed: 145,
				maxHealth: 10,
				defence: 4,
				range: 60,
				healthRegen: 0.4,
				reloadTime: 2000,
				lootTime: 15000,
				respawnTime: 21000,
			},
			xpGiven: 10,
			projectile: {
				image: "melee",
			},
			lootTableTemplate: [EnemyLootTables.nilbogGoblin],
			inventorySpace: 8,
		},
		fireGoblin: {
			speciesTemplate: SpeciesTemplates.nilbogGoblin,
			image: "fireGoblin",
			deathImage: "goblinCorpse",
			name: "Fire Goblin",
			hostility: "hostile",
			level: 4,
			stats: {
				damage: 3,
				walkSpeed: 95,
				swimSpeed: 40,
				iceSpeed: 160,
				maxHealth: 24,
				defence: 2,
				range: 390,
				reloadTime: 1550,
				healthRegen: 0.4,
				flaming: 1,
				lootTime: 15000,
				respawnTime: 30000,
				projectileSpeed: 200,
				projectileRange: 400,
			},
			xpGiven: 20,
			projectile: {
				image: "fireball",
			},
			lootTableTemplate: [EnemyLootTables.nilbogGoblin],
			lootTable: [
				{ // firey rock
					item: Items.item[5],
					chance: [
						50,				// 0
						0,				// 1
					],
				},
			],
			inventorySpace: 8,
		},
		goblinTowerkeeper: {
			speciesTemplate: SpeciesTemplates.nilbogGoblin,
			image: "goblinTowerkeeper",
			deathImage: "goblinCorpse",
			name: "Goblin Towerkeeper",
			hostility: "hostile",
			level: 5,
			stats: {
				damage: 4,
				walkSpeed: 75,
				swimSpeed: 35,
				iceSpeed: 145,
				maxHealth: 24,
				defence: 8,
				range: 90,
				healthRegen: 0.4,
				reloadTime: 1250,
				lootTime: 15000,
				respawnTime: 20000,
			},
			xpGiven: 35,
			projectile: {
				image: "melee",
			},
			lootTableTemplate: [EnemyLootTables.nilbogGoblin, EnemyLootTables.nilbogTowerGoblin],
			inventorySpace: 8,
		},
		goblinCrusader: {
			speciesTemplate: SpeciesTemplates.nilbogGoblin,
			image: "goblinCrusader",
			deathImage: "goblinCorpse",
			name: "Goblin Crusader",
			hostility: "hostile",
			level: 5,
			stats: {
				damage: 5.5,
				walkSpeed: 65,
				swimSpeed: 35,
				iceSpeed: 145,
				maxHealth: 24,
				defence: 10,
				range: 60,
				healthRegen: 0.4,
				reloadTime: 2000,
				lootTime: 15000,
				respawnTime: 20000,
				stun: 0.2,
			},
			xpGiven: 35,
			projectile: {
				image: "melee",
			},
			lootTableTemplate: [EnemyLootTables.nilbogGoblin, EnemyLootTables.nilbogTowerGoblin],
			inventorySpace: 8,
		},

		goblinKing: {
			speciesTemplate: SpeciesTemplates.nilbogGoblin,
			image: "goblinKing",
			deathImage: "goblinKingCorpse",
			name: "The Goblin King",
			hostility: "boss",
			bossKilledVariable: "goblinKing",
			level: 8,
			stats: {
				damage: 6,
				walkSpeed: 60,
				swimSpeed: 30,
				iceSpeed: 130,
				maxHealth: 100,
				defence: 10,
				range: 90,
				healthRegen: 0.4,
				reloadTime: 1500,
				lootTime: 50000,
			},
			attackBehaviour: {
				alwaysMove: true, // move even when in range//aaaaaaaaaaaaaaaaaaa
				baseAggro: 100, // always aggroed on player
			},
			spells: [
				{
					class: "enemy",
					id: 23, // summon more goblins
					tier: 1,
					castCondition: function (caster) {
						let healthProportion = caster.health / caster.stats.maxHealth;
						return caster.spellCasts === 0 && healthProportion < 0.67;
					},
				},
				{
					class: "enemy",
					id: 23, // summon more goblins
					tier: 2,
					castCondition: function (caster) {
						let healthProportion = caster.health / caster.stats.maxHealth;
						return caster.spellCasts === 0 && healthProportion < 0.67;
					},
				},
			],
			updateStats: function () { // choose attack based on distance
				// updateStats is currently just an enemy function

				let dist = Game.distance(this, Game.hero);

				// TBD projectile adjust?
				if (dist < 90) {
					// sword
					this.stats.range = 90;
					this.stats.damage = 7;
					this.stats.flaming = undefined;
					this.projectile.image = "slash";
					this.projectile.animation = {
						type: "spritesheet",
						frameTime: 50,
						imagesPerRow: 3,
						totalImages: 9,
						startState: 0,
						stopAnimationOnState: 8,
					};
					this.projectileType = "instant";
					this.stats.projectileSpeed = 0;
				}
				else if (Random(0, 1) === 0) {
					// staff
					this.stats.range = 1000;
					this.stats.damage = 6;
					this.stats.flaming = 1;
					this.stats.projectileSpeed = 150;
					this.projectile.image = "fireball";
					this.projectileType = "travelling";
				}
				else {
					// bow
					this.stats.range = 1000;
					this.stats.damage = 4;
					this.stats.flaming = undefined;
					this.stats.projectileSpeed = 850;
					this.projectile.image = "arrow";
					this.projectileType = "travelling";
				}
			},
			xpGiven: 250,
			projectile: {
				image: "slash",
				animation: {
					type: "spritesheet",
					frameTime: 50,
					imagesPerRow: 3,
					totalImages: 9,
					startState: 0,
					stopAnimationOnState: 8,
				},
			},
			lootTableTemplate: [EnemyLootTables.nilbogGoblin, EnemyLootTables.nilbogTowerGoblin, ChestLootTables.nilbog, BossLootTables.goblinKing],
			inventorySpace: 16,
		},

		tatteredKnight: {
			image: "tatteredKnight",
			deathImage: "tatteredKnightCorpse",
			name: "The Tattered Knight",
			species: "human",
			hostility: "boss",
			bossKilledVariable: "tatteredKnight",
			level: 8, // TBD level scaling
			stats: {
				damage: 9,
				walkSpeed: 60,
				swimSpeed: 30,
				iceSpeed: 120,
				maxHealth: 50,
				defence: 20,
				range: 90,
				healthRegen: 0.2,
				reloadTime: 1500,
				lootTime: 10000,
			},
			attackBehaviour: {
				baseAggro: 100, // always aggroed on player
			},
			spells: [
				{
			        class: "enemy", // most enemy spells are of this type
					id: 0,
					tier: 1,
					// target is assumed to be hero
				},
			],
			xpGiven: 250,
			projectile: {
				image: "slash",
			},
			lootTableTemplate: [BossLootTables.tatteredKnight],
			inventorySpace: 24,
		},

		marshallSheridan: {
			image: "marshallSheridan",
			deathImage: "marshallSheridanCorpse",
			name: "Statue of Marshall Sheridan",
			species: "statue",
			hostility: "boss",
			bossKilledVariable: "marshallSheridan",
			level: 15,
			expand: 0.8, // default size (changes with wood consumption)
			stats: {
				damage: 3, // doubled during blood moon
				walkSpeed: 70,
				swimSpeed: 70,
				maxHealth: 140, // doubled during blood moon
				defence: 10,
				range: 90,
				healthRegen: 0, // no regen in the blood moon
				reloadTime: 1000,
				lootTime: 20000,
			},
			attackBehaviour: {
				alwaysMove: true, // move even when in range
				okToStutter: true, // tbd should be removed with a better system to make sure they can always pick up logs, but for now this means that it can move even if directly on top of its target
				baseAggro: 1000, // always aggroed on player
			},
			spells: [
				{
			        class: "enemy", // most enemy spells are of this type
					id: 1,
					tier: 1,
					castCondition: function (caster) {
						// has picked up all logs
						return caster.logsRemaining === 0;
					},
				},
			],
			xpGiven: 250, // tbc?
			projectile: {
				image: "slashBlood",
			},
			lootTableTemplate: [BossLootTables.marshallSheridan],
			inventorySpace: 12,
			behaviour: {
				// run before movement/attacking
				main: function () {
					// try to pick up a log
					let replaceTiles = map.setTilesAtLocation([
						{tileNum: 93, replaceTo: 105, relativePosition: {x: 0, y: 0}},
						{tileNum: 94, replaceTo: 105, relativePosition: {x: 1, y: 0}},
					], {x: this.x, y: this.y});
					if (replaceTiles !== false) {
						this.channel(function () {
							// make boss stronger
							this.stats.maxHealth += 50;
							this.health = this.stats.maxHealth;
							// expand size
							this.setExpand(this.expand+0.05);;
							// remove log from tilemap
							replaceTiles();
							// find a new log to move towards!
							this.closestLog = undefined;
							this.logsRemaining--;
						}.bind(this), [], 1000, "Retrieving Logs");

						return false; // don't move or attack (channelling log)
					}
					return true; // do normal actions (couldn't pick up log)
				},
				// returns location to move towards
				movement: function () {
					if (this.logsRemaining === 0) {
						// all logs have been retrieved, act normally (attack player!)
						return false;
					}
					else if (this.closestLog !== undefined && map.getTile(0, Math.floor(this.closestLog.x/60), Math.floor(this.closestLog.y/60)) === 94) {
						// a location of closest log has already been set, and the player has not taken it
						// move towards it
						return this.closestLog;
					}
					else {
						// a new log to move towards must be found
						this.logsRemaining = 0; // used to decide whether spell should be cast or not, and whether to try to look for more logs
						let possibleLogLocations = []; // objects with x and y locations of logs are pushed to it

						// iterate through tiles to try to find a log
						for (let i = 0; i < map.layers[0].length; i++) {
							// check for a log tile (right side of tile is checked for)
							if (map.layers[0][i] === 94) {
								this.logsRemaining++;
								// find location of tile (bottom right)
								let x = ((i%map.cols)+1) * 60;
								let y = Math.ceil((i+1)/map.cols) * 60;
								// location adjusted to be location of log
								possibleLogLocations.push({x: x-60, y: y-60});
							}
						}

						// find closest of these logs
						this.closestLog = Game.closest(possibleLogLocations, this);

						return this.closestLog;
					}
				},
			}
		},

		barebonesNkkja: {
			speciesTemplate: SpeciesTemplates.nilbogGoblin,
			image: "barebonesNkkja",
			deathImage: "barebonesNkkjaCorpse",
			name: "'Barebones' Nkkja",
			hostility: "boss",
			bossKilledVariable: "barebonesNkkja",
			level: 15,
			stats: {
				damage: 2, // damage and health are doubled in blood moon
				walkSpeed: 110,
				swimSpeed: 50,
				iceSpeed: 160,
				maxHealth: 200,
				defence: 4,
				range: 360,
				reloadTime: 850,
				healthRegen: 0, // no regen in the blood moon
				lootTime: 20000,
				windShield: true,
				projectileSpeed: 300,
			},
			attackBehaviour: {
				baseAggro: 1000, // always aggroed on player
			},
			spells: [
				// ordered in order of boss priority to spells
				{
					class: "enemy",
					id: 4, // aeromancy
					tier: 1,
					onCast: function () {
						Dom.chat.insert(Dom.chat.say("'Barebones' Nkkja", "The wind obeys me!"));
					},
					additionalParameters: function () { // returns array of parameters
						return {
							speed: 60,
							direction: ToRadians(Random(1, 360)),
							time: 20000,
						};
					},
					castCondition: function (caster) {
						// cauldron not destroyed
						let cauldronIndex = Game.characters.findIndex(character => character.name === "Nkkja's Cauldron of Wind");
						return cauldronIndex !== -1;
					},
				},
				{
					class: "enemy",
					id: 2, // animate
					tier: 1,
					onCast: function () {
						Dom.chat.insert(Dom.chat.say("'Barebones' Nkkja", "The mud of this bog is mine!"));
					},
					additionalParameters: function () { // returns array of parameters
						return {
							number: 2,
							location: [
								{
									x: 650,
									y: 10,
									width: 180,
									height: 30,
								},
								{
									x: 640,
									y: 440,
									width: 100,
									height: 120,
								},
								{
									x: 635,
									y: 960,
									width: 120,
									height: 60,
								},
								{
									x: 1247,
									y: 30,
									width: 150,
									height: 180,
								},
								{
									x: 2067,
									y: 861,
									width: 120,
									height: 240,
								},
								{
									x: 1568,
									y: 1400,
									width: 780,
									height: 180,
								},
								{
									x: 1568,
									y: 1400,
									width: 780,
									height: 180,
								},
								{
									x: 1328,
									y: 1555,
									width: 1020,
									height: 120,
								},
							],
							// properties of enemies
							image: "mudAnimation",
							name: "Bog Animation",
							hostility: "hostile",
							level: 6,
							corpseOnDeath: false,
							respawnOnDeath: false,
							stats: {
								maxHealth: 12, // doubled in blood moon
								defence: 0,
								damage: 2.5,
								range: 60,
								slowAmount: 35,
								slowTime: 1.5,
								reloadTime: 1000,
								walkSpeed: 75,
								swimSpeed: 75,
								healthRegen: 0, // no health regen in blood moon
								windShield: true,
							},
							attackBehaviour: {
								baseAggro: 1000, // always aggroed on player
							},
							projectile: {
								image: "melee",
							},
							xpGiven: 44,
						};
					},
					castCondition: function (caster) {
						// cauldron not destroyed
						let cauldronIndex = Game.characters.findIndex(character => character.name === "Nkkja's Cauldron of Earth");
						return cauldronIndex !== -1;
					},
				},
				{
					class: "enemy",
					id: 3, // lightning
					tier: 1,
					onCast: function () {
						Dom.chat.insert(Dom.chat.say("'Barebones' Nkkja", "The sky belongs to me!"));
					},
					castCondition: function (caster) {
						// cauldron not destroyed
						let cauldronIndex = Game.characters.findIndex(character => character.name === "Nkkja's Cauldron of Lightning");
						return cauldronIndex !== -1;
					},
				},
			],
			xpGiven: 250, // tbc?
			projectile: {
				image: "fireballGreen"
			},
			lootTableTemplate: [BossLootTables.barebonesNkkja, EnemyLootTables.nilbogGoblin],
			inventorySpace: 12,
		},
		nkkjaCauldron: {
			image: "cauldron",
			hostility: "neutral",
			level: 1,
			xpGiven: 0,
			corpseOnDeath: false,
			respawnOnDeath: false,
			damageableByPlayer: true,
			stats: {
				walkSpeed: 0,
				maxHealth: 80,
				healthRegen: 0,
			},
		},
	},

	eaglecrest: {
		snake: {
			image: "yellowSnakeLeft",
	        rotationImages: {
	            left: "yellowSnakeLeft",
	            right: "yellowSnakeRight"
	        },
			name: "Snake",
			hideNameTag: true,
			hostility: "neutral",
			level: 5,
			xpGiven: 0,
			corpseOnDeath: false,
			respawnOnDeath: false,
			damageableByPlayer: true,
			canBeDamagedBy: ["Net"],
			stats: {
				walkSpeed: 100,
				maxHealth: 1,
				dodgeChance: 50,
			},
			chat: {
				notUnlockedRoles: "SSSSSsssssSSSsss.",
			},
			onDeath: function () {
				Player.quests.questProgress.snakesCaptured = Increment(Player.quests.questProgress.snakesCaptured);
				Dom.inventory.give(Items.item[34]);
			},
			animation: {
				type: "spritesheet",
				frameTime: 43,
				imagesPerRow: 2,
				totalImages: 2,
				animateBasis: "walk"
			},
			crop: {
				x: 0,
				y: 0,
				width: 87,
				height: 16,
			},
		},
		toad: {
			speciesTemplate: SpeciesTemplates.plainsToad,
	        rotationImages: {
	            left: "toadLeft",
	            right: "toadRight"
	        },
			deathImage: "toadCorpse",
			name: "Large Toad",
			hostility: "hostile",
			level: 5,
			stats: {
				damage: 7,
				walkSpeed: 25,
				swimSpeed: 25,
				iceSpeed: 50,
				maxHealth: 40,
				defence: 4,
				range: 170,
				reloadTime: 1500,
				healthRegen: 0.5,
				lootTime: 10000,
				respawnTime: 20000,
				projectileSpeed: 160,
				projectileRange: 400,
			},
			xpGiven: 50,
			projectile: {
				image: "waterball",
			},
			spells: [
				{
			        class: "enemy",
					id: 5,
					tier: 1,
					castCondition: function (caster, target) {
						return Game.distance(caster, target) > caster.stats.range - 25;
	                },
				},
	        ],
			lootTableTemplate: [EnemyLootTables.plainsToad],
			inventorySpace: 8,
		},
		armouredToad: {
			speciesTemplate: SpeciesTemplates.plainsToad,
	        rotationImages: {
	            left: "armouredToadLeft",
	            right: "armouredToadRight"
	        },
			deathImage: "toadCorpse",
			name: "Large Toad",
			hostility: "hostile",
			level: 10,
			stats: {
				damage: 7,
				walkSpeed: 25,
				swimSpeed: 25,
				iceSpeed: 50,
				maxHealth: 40,
				defence: 18, // only changed value to normal toad - maybe put the rest in species template?
				range: 170,
				reloadTime: 1500,
				healthRegen: 0.5,
				lootTime: 10000,
				respawnTime: 20000,
				projectileSpeed: 300, // ok this was also changed a little...
				projectileRange: 400,
			},
			xpGiven: 150,
			projectile: {
				image: "waterball",
			},
			spells: [
				{
			        class: "enemy",
					id: 5,
					tier: 1,
					castCondition: function (caster, target) {
						return Game.distance(caster, target) > caster.stats.range - 25;
	                },
				},
	        ],
			lootTableTemplate: [EnemyLootTables.plainsToad],
			lootTable: [
				{ // unidentified item
					item: {
						name: "unidentified",
						tier: 1,
						area: "eaglecrest",
					},
					chance: [
						100,			// 0
						30, 			// 1
						0.5,			// 2
						0,				// 3
					],
				},
				{ // gold
					item: Items.currency[2],
					chance: [
						20,				// 0
						5,				// 1
						0,				// 2
					],
				},
				{ // soggy letter
					item: Items.item[54],
					chance: [
						1,				// 0
						0,				// 1
					],
				},
			],
			inventorySpace: 16,
		},
		chicken: {
			speciesTemplate: SpeciesTemplates.chicken,
	        rotationImages: {
	            left: "chickenLeft",
	            right: "chickenRight"
	        },
			deathImage: "chickenCorpse",
			name: "Chicken",
			hostility: "neutral",
			level: 5,
			stats: {
				damage: 5,
				walkSpeed: 75,
				swimSpeed: 30,
				iceSpeed: 150,
				maxHealth: 25,
				defence: 3,
				range: 60,
				reloadTime: 500,
				healthRegen: 1,
				lootTime: 10000,
				respawnTime: 20000,
			},
			attackBehaviour: {
				baseAggro: 0,
			},
			xpGiven: 25,
			projectile: {
				image: "melee",
			},
			lootTableTemplate: [EnemyLootTables.chicken],
			inventorySpace: 8,
		},
		zararanath: {
			speciesTemplate: SpeciesTemplates.chicken,
	        rotationImages: {
	            left: "chickenLeft",
	            right: "chickenRight"
	        },
			deathImage: "chickenCorpse",
			name: "The Mighty Zararanath",
			hostility: "boss",
			bossKilledVariable: "mightyZararanath",
			level: 20,
			stats: {
				damage: 20,
				walkSpeed: 75,
				swimSpeed: 30,
				iceSpeed: 150,
				maxHealth: 300,
				defence: 15,
				range: 60,
				reloadTime: 500,
				healthRegen: 1,
				lootTime: 10000,
				respawnTime: 20000,
			},
			attackBehaviour: {
				baseAggro: 0,
			},
			xpGiven: 500,
			projectile: {
				image: "melee",
			},
			lootTableTemplate: [BossLootTables.zararanath, EnemyLootTables.chicken],
			inventorySpace: 8,
			chat: {
				fiftyPercentHealth: `Oh. I've spoken to you before.`,
				tenPercentHealth: `How are you finding the mystical kingdom of Antorax, ${Player.name}?`,
				death: "I see you've learnt well..",
			},
			spells: [
				{
			        class: "enemy",
					id: 6,
					tier: 1,
					castCondition: function (caster) {
						return caster.health < 100;
					}
				},
			],
		},

		phantom1: {
			speciesTemplate: SpeciesTemplates.phantom, // most of the info is in here
			image: "eaglecrestGhost",
			chat: {
				fiftyPercentHealth: "You cannot do this!",
			},
		},
		phantom2: {
			speciesTemplate: SpeciesTemplates.phantom,
			image: "eaglecrestGhost2",
			chat: {
				death: "For the city...",
			},
		},
		crystalSmall: {
	        image: "crystalSmall",
			deathImage: "crystalSmallDestroyed", // to be drawn
			name: "Ley Crystal",
			hostility: "hostile",
			level: 0,
			stats: {
				maxHealth: 11111,
				damage: 3,
				walkSpeed: 0,
				swimSpeed: 0,
				iceSpeed: 0,
				defence: 33,
				range: 330,
				reloadTime: 1000,
				healthRegen: 4,
				lootTime: 100000,
				respawnTime: 200000,
				projectileSpeed: 1422,
				projectileRange: 400,
				projectileStayOnScreen: 0,
			},
			xpGiven: 100,
			projectile: {
				image: "melee",
				trails: [{
					width: 3,
					height: 3,
					colour: ["#8317C6", "#621191"], // purple
					removeIn: 1000,
					rotation: 0,
					variance: 10, // variance in position (in x/y axis in one direction from player)
					intensity: 10, // no. of particles every 100ms
				}]
			},
			lootTableTemplate: [EnemyLootTables.crystalSmall], // tbd
			inventorySpace: 8,
			showNameTag: false,
			showHealthBar: false,
		},
		crystalLarge: {
	        image: "crystalLarge",
			deathImage: "crystalLargeDestroyed", // to be drawn
			name: "Large Ley Crystal",
			hostility: "hostile",
			level: 0,
			stats: {
				maxHealth: 22222,
				damage: 6,
				walkSpeed: 0,
				swimSpeed: 0,
				iceSpeed: 0,
				defence: 44,
				range: 400,
				reloadTime: 1000,
				healthRegen: 6,
				lootTime: 100000,
				respawnTime: 200000,
				projectileSpeed: 1422,
				projectileRange: 400,
				projectileStayOnScreen: 0,
			},
			xpGiven: 200,
			projectile: {
				image: "melee",
				trails: [{
					width: 3,
					height: 3,
					colour: ["#8317C6", "#621191"], // purple
					removeIn: 1000,
					rotation: 0,
					variance: 10, // variance in position (in x/y axis in one direction from player)
					intensity: 10, // no. of particles every 100ms
				}]
			},
			lootTableTemplate: [EnemyLootTables.crystalLarge], // tbd
			inventorySpace: 8,
			showNameTag: false,
			showHealthBar: false,
		},

		cutpurse1: {
			speciesTemplate: SpeciesTemplates.cutpurse,
			image: "cutpurse1",
			deathImage: "cutpurseBag",
			name: "Cutpurse",
			hostility: "hostile",
			level: 10,
			stats: {
				damage: 9,
				walkSpeed: 160,
				swimSpeed: 50,
				iceSpeed: 240,
				maxHealth: 75,
				defence: 7,
				range: 150,
				reloadTime: 1500,
				healthRegen: 0.25,
				lootTime: 10000,
				respawnTime: 20000,
			},
			xpGiven: 100,
			projectile: {
				image: "melee",
			},
			spells: [
	            {
	                id: 18, // stupefy
	                tier: 1,
	                parameters: function () { // returns array of parameters
	                    return {
	                        target: this.calculateTarget(),
	                    };
	                },
					castCondition: function (caster) {
						let target = caster.calculateTarget();
	                    return typeof target.calculateTarget() !== "undefined" && Game.distance(caster, target.calculateTarget()) > caster.stats.range - 25;
	                },
	                interval: 1000,
	            },
	            {
	                id: 15, // cut purse
	                tier: 1,
	                parameters: function () { // returns array of parameters
	                    return {
	                        target: this.calculateTarget(),// tbd
	                    };
	                },
					castCondition: function (caster) {
						let target = caster.calculateTarget();
	                    return typeof target.calculateTarget() !== "undefined" && Game.distance(caster, target.calculateTarget()) > caster.stats.range - 25;
	                },
	                interval: 1000,
	            },
	        ],
			lootTableTemplate: [EnemyLootTables.cutpurse],
			inventorySpace: 16,
		},

		coyote: {
			rotationImages: {
				left: "coyoteUnbotheredLeft",
				right: "coyoteUnbotheredRight"
			},
			deathImage: "coyoteCorpse",
			name: "Coyote",
			hostility: "hostile",
			level: 15,
			respawnOnDeath: false,
			stats: {
				damage: 8,
				walkSpeed: 80,
				swimSpeed: 25,
				iceSpeed: 210,
				maxHealth: 65,
				defence: 5,
				range: 60,
				reloadTime: 1300,
				healthRegen: 0.5,
				lootTime: 15000,
			},
			xpGiven: 100,
			projectile: {
				image: "melee",
			},
			jointAggro: function () { // any aggro gained on coyote is also gained on coyote wrangler
				let aggroList = [];
				if (this.association === "coyotePack") {
					aggroList = Game.enemies.filter(enemy => enemy.name === "Coyote Pack Wrangler");
				}
				return aggroList;
			},
			spells: [
				{
			        class: "enemy",
					id: 7,
					tier: 1,
					castCondition: function (caster, target) {
						return Game.distance(caster, target) > caster.stats.range - 25;
	                },
				},
	        ],
			lootTableTemplate: [EnemyLootTables.coyote],
			inventorySpace: 8,
			onDeath: function () {
				// coyotes killed achievement
				User.progress.coyotes = Increment(User.progress.coyotes);
			},
			animation: {
				type: "spritesheet",
				frameTime: 30,
				imagesPerRow: 3,
				totalImages: 3,
				animateBasis: "walk"
			},
			crop: {
				x: 0,
				y: 0,
				width: 151,
				height: 98,
			},
		},

		coyoteWrangler: {
			image: "coyoteWrangler",
			deathImage: "coyoteWranglerCorpse",
			name: "Coyote Pack Wrangler",
			hostility: "boss",
			bossKilledVariable: "coyoteWrangler",
			level: 15,
			stats: {
				damage: 4,
				walkSpeed: 120,
				swimSpeed: 50,
				iceSpeed: 190,
				maxHealth: 115,
				defence: 8,
				range: 90,
				reloadTime: 1000,
				healthRegen: 1,
				lootTime: 15000,
			},
			xpGiven: 400,
			projectile: {
				image: "melee",
			},
			attackBehaviour: {
				// tbd?
			},
			jointAggro: function () { // any aggro gained on coyote wrangler is also gained on these enemies (the pack)
				let petArray = Game.enemies.filter(enemy => enemy.name === "Pack Coyote" && enemy.association === "coyotePack");
				return petArray;
			},
			canBeShown: function () {
				if (typeof Player.quests.questProgress.coyoteWranglers === "undefined") {
					Player.quests.questProgress.coyoteWranglers = 0;
				}
				this.stats.maxHealth += Player.quests.questProgress.coyoteWranglers * 10; // scales in health infinitely
				return true;
			},
			onDeath: function () {
				let petArray = Game.enemies.filter(enemy => enemy.name === "Pack Coyote" && enemy.association === "coyotePack");
				for (let i = 0; i < petArray.length; i++) {
					let pet = petArray[i];
					pet.setAggro(Game.hero, "unAggro");
				}
			},
			spells: [
	            {
					class: "enemy",
	                id: 8, // mend pets
	                tier: 1,
	                additionalParameters: function () { // returns array of parameters
						let petArray = Game.enemies.filter(enemy => enemy.name === "Pack Coyote" && enemy.association === "coyotePack");
	                    return {
							pets: petArray,
	                    };
	                },
	            },
	            {
					class: "enemy",
	                id: 9, // empower pets
	                tier: 1,
	                additionalParameters: function () { // returns array of parameters
						let petArray = Game.enemies.filter(enemy => enemy.name === "Pack Coyote" && enemy.association === "coyotePack");
	                    return {
							pets: petArray,
	                    };
	                },
	            },
	        ],
			lootTableTemplate: [EnemyLootTables.coyoteWrangler],
			inventorySpace: 16,
			onDeath: function () {
                let petArray = Game.enemies.filter(enemy => enemy.name === "Pack Coyote" && enemy.association === "coyotePack");
                for (let i = 0; i < petArray.length; i++) {
                    let pet = petArray[i];
                    pet.setAggro(Game.hero, "unAggro");
                }

                // coyote wrangler killed achievement
                User.progress.coyoteWranglers = Increment(User.progress.coyoteWranglers);
                // coyote wrangler killed achievement
                Player.quests.questProgress.coyoteWranglers = Increment(Player.quests.questProgress.coyoteWranglers);

                // resettable variables for quest
                Player.quests.prog.eaglecrest[11].vars.coyoteWranglers = Increment(Player.quests.prog.eaglecrest[11].vars.coyoteWranglers);
            }
		},

		beeSwarm: {
			rotationImages: {
				left: "beeSwarmLeft",
				right: "beeSwarmRight"
			},
			deathImage: "beeSwarmCorpse",
			name: "Bee Swarm",
			hostility: "hostile",
			level: 10,
			stats: {
				damage: 7,
				walkSpeed: 110,
				swimSpeed: 110,
				iceSpeed: 110, // tbd give flying property
				maxHealth: 55,
				defence: 0,
				range: 50,
				reloadTime: 1500,
				healthRegen: 0.5,
			},
			xpGiven: 100,
			projectile: {
				image: "melee",
			},
			spells: [
				{
			        class: "enemy",
					id: 10,
					tier: 1,
					castCondition: function (caster) {
						let healthProportion = caster.health / caster.stats.maxHealth;
						return healthProportion > 0.3;
					},
					interval: 2000,
				},
				{
			        class: "enemy",
					id: 10,
					tier: 2, // tier 2 instead
					castCondition: function (caster) {
						let healthProportion = caster.health / caster.stats.maxHealth;
						return healthProportion <= 0.3;
					},
					interval: 2000,
				},
			],
			lootTableTemplate: [EnemyLootTables.beeSwarm],
			inventorySpace: 16,
			onDeath: function () {
				// bee swarms killed achievement
				User.progress.beeSwarms = Increment(User.progress.beeSwarms);
			}
		},

		bumblebee: {
			rotationImages: {
				left: "bumblebeeLeft1",
				right: "bumblebeeRight1"
			},
			name: "Bee",
			hostility: "hostile",
			critter: true, // not counted for combatant achivements
			level: 1,
			stats: {
				damage: 20,
				walkSpeed: 200,
				swimSpeed: 200,
				iceSpeed: 200, // tbd give flying property
				maxHealth: 1,
				defence: 0,
				range: 30,
				reloadTime: 1500,
				healthRegen: 10,
				onAttack: function () {
					// die
					this.takeDamage(10);
				}
			},
			respawnOnDeath: false,
			corpseOnDeath: false,
			xpGiven: 0,
			projectile: {
				image: "melee",
			},
			animation: {
				type: "carousel",
				frameTime: 300,
				images: ["bumblebeeLeft1", "bumblebeeLeft2"], // tbd make work with rotationImages
			},
		},

		lakeLurkerTail: {
			image: "seaMonsterTail",
			name: "Lake Lurker Tail",
			hostility: "hostile",
			level: 5,
			canBeDamagedBy: [""],
			stats: {
				damage: 0,
				walkSpeed: 0,
				swimSpeed: 0,
				iceSpeed: 0,
				maxHealth: 10000,
				defence: 10000,
				range: 1000,
				healthRegen: 0.5,
				doesNotAttack: true,
			},
			xpGiven: 0,
			corpseOnDeath: false,
			respawnOnDeath: false,
			fishable: {
				bobTimeMin: 200,
				bobTimeMax: 1400,
				removeOnCatch: true,
				giveItem: false,
				fishingType: "watermisc",
				challengeRarity: "lakeLurkerTail",
				clicksToCatch: 18,
				timeToCatch: 3000,
				onCatchAdditional: function () {
					let boss = Game.enemies.find(enemy => enemy.name === "Lake Lurker");
					boss.takeDamage(7000, true, "Lake Lurker Tail");
				}
			},
			spells: [

	        ],
		},

		lakeLurkerArch: {
			image: "seaMonsterArch",
			name: "Lake Lurker Arch",
			hostility: "hostile",
			level: 5,
			canBeDamagedBy: [""],
			stats: {
				damage: 0,
				walkSpeed: 0,
				swimSpeed: 0,
				iceSpeed: 0,
				maxHealth: 10000,
				defence: 10000,
				range: 1000,
				healthRegen: 0.5,
				doesNotAttack: true,
			},
			xpGiven: 0,
			corpseOnDeath: false,
			respawnOnDeath: false,
			spells: [

			],
			fishable: {
				bobTimeMin: 100,
				bobTimeMax: 1100,
				removeOnCatch: true,
				giveItem: false,
				fishingType: "watermisc",
				challengeRarity: "lakeLurkerArch",
				clicksToCatch: "16",
				timeToCatch: "2500",
				onCatchAdditional: function () {
					let boss = Game.enemies.find(enemy => enemy.name === "Lake Lurker");
					boss.takeDamage(12000, true, "Lake Lurker Arch");
				}
			}
		},

		lakeLurker: {
			image: "seaMonster",
			deathImage: "seaMonsterCorpse",
			name: "Lake Lurker",
			hostility: "boss",
			level: 15,
			stats: {
				damage: 10,
				walkSpeed: 0,
				swimSpeed: 0,
				iceSpeed: 0,
				maxHealth: 100000,
				defence: 0,
				range: 1000,
				healthRegen: 0,
				doesNotAttack: true,
				lootTime: 180000
			},
			xpGiven: 0,
			corpseOnDeath: true,
			respawnOnDeath: false,
			lootTableTemplate: [BossLootTables.lakeLurker],
			inventorySpace: 48,
			bossKilledVariable: "lakeLurker",
			spells: [
					{
						id: 25,
						tier: 1,
						parameters: function () {
								return {
									target: [Game.hero],
								};
						},
						interval: 25000,
				 },
      		],
			onDeath: function () {
				// destroy all things related to the boss
				let remove = Game.enemies.filter(enemy => enemy.name === "Lake Lurker Tail" || enemy.name === "Lake Lurker Arch" || enemy.name === "Water Coalesce");
				for (let i = 0; i < remove.length; i++) {
					Game.removeObject(remove[i].id, remove[i].type);
				}

				// boss last hit achievement
				if (this.killedByName !== "Lake Lurker Arch" && this.killedByName !== "Lake Lurker Tail") {
					User.progress.legacyOfCaptainCalaca = true;
				}

				Game.clearInterval(Areas.eaglecrestWell.intervalToClear);
			},
		},

		waterCoalesce: {
			image: "waterCoalesce",
			name: "Water Coalesce",
			hostility: "hostile",
			level: 10,
			critter: true, // not counted for combatant achivements
			stats: {
				damage: 10,
				walkSpeed: 140,
				swimSpeed: 220,
				iceSpeed: 0,
				maxHealth: 13,
				defence: 5,
				range: 60,
				reloadTime: 800,
				healthRegen: 1,
				stunned: 2,
			},
			attackBehaviour: {
				baseAggro: 1000,
			},
			projectile: {
				image: "melee",
			},
			xpGiven: 0,
			corpseOnDeath: false,
			respawnOnDeath: false,

			animation: {
				type: "spritesheet",
				frameTime: 100,
				imagesPerRow: 18,
				totalImages: 18,
				startState: 17,
				stopAnimationOnState: 0,
				reverse: true,
			},
			crop: {
				x: 1,
				y: 0,
				width: 48,
				height: 124,
			},

			onDeath: function () {
				Game.things.push(new Thing({
					map: map,
					type: "things",
					x: this.x,
					y: this.y,
					image: "waterCoalesce",
					name: "Water Coalesce",
					hostility: "hostile",
					level: 10,
					animation: {
						type: "spritesheet",
						frameTime: 75,
						imagesPerRow: 18,
						totalImages: 18,
						startState: 0,
						stopAnimationOnState: 17,
					},
					crop: {
						x: 1,
						y: 0,
						width: 48,
						height: 124,
					},
				}));
			},
		},

		baronFoxglove: {
			image: "foxglove",
			deathImage: "foxgloveCorpse",
			name: "Baron Foxglove",
			hostility: "boss",
			level: 15,
			stats: {
				damage: 9,
				walkSpeed: 100,
				swimSpeed: 40,
				iceSpeed: 200,
				maxHealth: 1000,
				defence: 9,
				dodgeChance: 80,
				healthRegen: 1,
				lootTime: 180000,
				variance: 15,
				projectileSpeed: 850,
				projectileRange: 1000,
				reloadTime: 1500,
				range: 400,
			},
			projectile: {
				image: "arrow",
			},
			xpGiven: 500,
			corpseOnDeath: true,
			respawnOnDeath: false,
			lootTableTemplate: [BossLootTables.foxglove],
			inventorySpace: 32,
			bossKilledVariable: "foxglove",
			spells: [
					/*{
						id: 25,
						tier: 1,
						parameters: function () {
								return {
									target: [Game.hero],
								};
						},
						interval: 25000,
				 },*/
      		],
		},

		foxgloveHands: {
			image: "foxgloveHand",
			name: "Foxglove Hand",
			level: 15,
			hostility: "hostile",
			stats: {
				damage: 9,
				walkSpeed: 250,
				swimSpeed: 100,
				iceSpeed: 300,
				maxHealth: 5,
				defence: 0,
				healthRegen: 1,
				reloadTime: 1000,
				range: 90,
				rooting: 1,
				respawnTime: 4000,
			},
			projectile: {
				image: "melee",
			},
			xpGiven: 0,
			corpseOnDeath: false,
			respawnOnDeath: true,
			spells: [
     		],
		},

		demolitionistDarrow: {
			speciesTemplate: SpeciesTemplates.nilbogGoblin,
			image: "demolitionistDarrow",
			deathImage: "demolitionistDarrowCorpse",
			name: "Demolitionist Darrow",
			hostility: "boss",
			bossKilledVariable: "demolitionistDarrow",
			level: 20,
			stats: {
				maxHealth: 150,
				defence: 7,
				walkSpeed: 141,
				damage: 5,
				range: 360,
				reloadTime: 500,
				healthRegen: 0.25,
				lootTime: 100000,
				projectileSpeed: 150,
			},
			projectileClassResistance: ["blast"],
			attackBehaviour: {
				baseAggro: 1000, // always aggroed on player
			},
			spells: [
				// ordered in order of boss priority to spells
				{
					id: 34, // dynamite
					tier: 1,
					interval: 6000,
				},
				{
					id: 34, // dynamite
					tier: 2,
					interval: 15000,
				},
				{
					id: 34, // dynamite
					tier: 3,
					interval: 7000,
					castCondition: function (caster) {
						return caster.health / caster.stats.maxHealth < 0.4;
					}
				},
			],
			xpGiven: 1000, // tbc?
			projectile: {
				image: "fireball"
			},
			lootTableTemplate: [BossLootTables.demolitionistDarrow],
			inventorySpace: 18,
		},

		imp: { // for spell brewing
			image: "imp",
			corpseOnDeath: false,
			respawnOnDeath: false,
			name: "Imp",
			hostility: "neutral",
			level: 5,
			stats: {
				damage: 4,
				walkSpeed: 40,
				swimSpeed: 40,
				iceSpeed: 40,
				maxHealth: 36,
				defence: 0,
				range: 666,
				reloadTime: 666,
				healthRegen: 0,
				flaming: 1,
				projectileSpeed: 200,
				projectileRange: 400,
			},
			attackBehaviour: {
				baseAggro: 0,
			},
			xpGiven: 25,
			projectile: {
				image: "fireball",
			},
		},
		katydid: { // for spell brewing
			image: "katydid",
			corpseOnDeath: false,
			respawnOnDeath: false,
			name: "Katydid",
			hostility: "hostile",
			level: 1,
			critter: true, // not counted for combatant achivements
			stats: {
				damage: 2,
				walkSpeed: 0, // only hop
				swimSpeed: 0,
				iceSpeed: 0,
				maxHealth: 2,
				range: 20,
				healthRegen: 0,
				reloadTime: 1000,
			},
			xpGiven: 0,
			projectile: {
				image: "melee",
			},
			spells: [
				{
			        class: "enemy",
					id: 12,
					tier: 1,
					castCondition: function (caster, target) {
						return Game.distance(caster, target) > caster.stats.range - 15;
	                },
				},
	        ],
		},

		leyAggregate: {
			name: "Ley Aggregate",
			image: "leyAggregate",
			crop: {
				x: 0,
				y: 0,
				width: 21,
				height: 21
			},
			animation: {
				type: "spritesheet",
				frameTime: 170,
				imagesPerRow: 7,
				totalImages: 7,
			},
			successFunction: function () {
				let riverIdolTouchingArray = this.getTouching(function (entity) {return entity.name === "River Idol"});
				riverIdol = riverIdolTouchingArray[0];
				riverIdol.setAnimation({
					type: "spritesheet",
					frameTime: 216,
					imagesPerRow: 12,
					totalImages: 12,
					startState: 0,
					stateSubset: [9, 10, 11],
				});
			},
		},

		// tbd need to move the following to a new cave section

//maxilla
maxilla: {
	rotationImages: {
		left: "maxilla",
		right: "maxilla"
	},
	deathImage: "coyoteCorpse",
	name: "Maxilla",
	hostility: "hostile",
	level: 15,
	respawnOnDeath: false,
	stats: {
		damage: 8,
		walkSpeed: 80,
		swimSpeed: 25,
		iceSpeed: 210,
		maxHealth: 65,
		defence: 5,
		range: 60,
		reloadTime: 1300,
		healthRegen: 0.5,
		lootTime: 15000,
	},
	xpGiven: 100,
	projectile: {
		image: "melee",
	},

	spells: [
					{
							id: 19, // seek prey
							tier: 1,
							parameters: function () { // returns array of parameters
									return {
											target: this.calculateTarget(),
									};
							},
			castCondition: function (caster) {
				let target = caster.calculateTarget();
									return typeof target !== "undefined" && Game.distance(caster, target) > caster.stats.range - 25;
							},
							interval: 5000,
					},
			],
	lootTableTemplate: [EnemyLootTables.coyote],
	inventorySpace: 8,
	onDeath: function () {
		// coyotes killed achievement
		User.progress.coyotes = Increment(User.progress.coyotes);
	},
	animation: {
		type: "spritesheet",
		frameTime: 30,
		imagesPerRow: 3,
		totalImages: 3,
		animateBasis: "walk"
	},
	crop: {
		x: 0,
		y: 0,
		width: 447,
		height: 216,
	},
},


//palatine
palatine: {
	rotationImages: {
		left: "palatine",
		right: "palatine"
	},
	deathImage: "coyoteCorpse",
	name: "Palatine",
	hostility: "hostile",
	level: 15,
	respawnOnDeath: false,
	stats: {
		damage: 8,
		walkSpeed: 80,
		swimSpeed: 25,
		iceSpeed: 210,
		maxHealth: 65,
		defence: 5,
		range: 60,
		reloadTime: 1300,
		healthRegen: 0.5,
		lootTime: 15000,
	},
	xpGiven: 100,
	projectile: {
		image: "melee",
	},

	spells: [
					{
							id: 19, // seek prey
							tier: 1,
							parameters: function () { // returns array of parameters
									return {
											target: this.calculateTarget(),
									};
							},
			castCondition: function (caster) {
				let target = caster.calculateTarget();
									return typeof target !== "undefined" && Game.distance(caster, target) > caster.stats.range - 25;
							},
							interval: 5000,
					},
			],
	lootTableTemplate: [EnemyLootTables.coyote],
	inventorySpace: 8,
	onDeath: function () {
		// coyotes killed achievement
		User.progress.coyotes = Increment(User.progress.coyotes);
	},
	animation: {
		type: "spritesheet",
		frameTime: 180,
		imagesPerRow: 4,
		totalImages: 4,
	},
	crop: {
		x: 0,
		y: 0,
		width: 219,
		height: 392,
	},
},

		vomer: {
			rotationImages: {
				left: "vomer",
				right: "vomer"
			},
			deathImage: "coyoteCorpse",
			name: "Vomer",
			hostility: "hostile",
			level: 15,
			respawnOnDeath: false,
			stats: {
				damage: 25,
				walkSpeed: 100,
				swimSpeed: 25,
				iceSpeed: 210,
				maxHealth: 150,
				defence: 10,
				range: 60,
				reloadTime: 800,
				healthRegen: 1,
				lootTime: 15000,
			},
			xpGiven: 500,
			projectile: {
				image: "melee",
			},

			spells: [
							{
									id: 27, // seek prey
									tier: 1,
									parameters: function () { // returns array of parameters
											return {
													target: this.calculateTarget(),
											};
									},
					castCondition: function (caster) {
						let target = caster.calculateTarget();
											return typeof target !== "undefined" && Game.distance(caster, target) > caster.stats.range - 25;
									},
									interval: 15000,
							},
					],
			lootTableTemplate: [EnemyLootTables.coyote],
			inventorySpace: 8,
			onDeath: function () {
				// coyotes killed achievement
				User.progress.coyotes = Increment(User.progress.coyotes);
			},
			animation: {
				type: "spritesheet",
				frameTime: 30,
				imagesPerRow: 3,
				totalImages: 3,
				animateBasis: "walk"
			},
			crop: {
				x: 0,
				y: 0,
				width: 309,
				height: 210,
			},
		},

		crystalAntOrange: {
			rotationImages: {
				left: "crystalAntOrangeLeft",
				right: "crystalAntOrangeRight"
			},
			speciesTemplate: SpeciesTemplates.nilbogGoblin,
			image: "crystalAntOrange",
			deathImage: "coyoteCorpse",
			name: "Crystalant",
			hostility: "hostile",
			level: 2,
			stats: {
				damage: 2,
				walkSpeed: 120,
				swimSpeed: 40,
				iceSpeed: 160,
				maxHealth: 10,
				defence: 2,
				range: 60,
				healthRegen: 0.4,
				reloadTime: 1500,
				lootTime: 15000,
				respawnTime: 21000,
			},
			xpGiven: 10,
			projectile: {
				image: "melee",
			},
			lootTableTemplate: [EnemyLootTables.nilbogGoblin],
			inventorySpace: 8,
			animation: {
				type: "spritesheet",
				frameTime: 10,
				imagesPerRow: 3,
				totalImages: 3,
				animateBasis: "walk"
			},
			crop: {
				x: 0,
				y: 0,
				width: 102,
				height: 60,
			},
		},

		crystalAntGreen: {
			rotationImages: {
				left: "crystalAntGreenLeft",
				right: "crystalAntGreenRight"
			},
			speciesTemplate: SpeciesTemplates.nilbogGoblin,
			image: "crystalAntGreen",
			deathImage: "coyoteCorpse",
			name: "Crystalant",
			hostility: "hostile",
			level: 2,
			stats: {
				damage: 2,
				walkSpeed: 120,
				swimSpeed: 40,
				iceSpeed: 160,
				maxHealth: 10,
				defence: 2,
				range: 60,
				healthRegen: 0.4,
				reloadTime: 1500,
				lootTime: 15000,
				respawnTime: 21000,
			},
			xpGiven: 10,
			projectile: {
				image: "melee",
			},
			lootTableTemplate: [EnemyLootTables.nilbogGoblin],
			inventorySpace: 8,
			animation: {
				type: "spritesheet",
				frameTime: 10,
				imagesPerRow: 3,
				totalImages: 3,
				animateBasis: "walk"
			},
			crop: {
				x: 0,
				y: 0,
				width: 102,
				height: 60,
			},
		},


//crystalantblue
crystalAntBlue: {
	rotationImages: {
		left: "crystalAntBlueLeft",
		right: "crystalAntBlueRight"
	},
	speciesTemplate: SpeciesTemplates.nilbogGoblin,
	image: "crystalAntBlue",
	deathImage: "coyoteCorpse",
	name: "Crystalant",
	hostility: "hostile",
	level: 2,
	stats: {
		damage: 2,
		walkSpeed: 120,
		swimSpeed: 40,
		iceSpeed: 160,
		maxHealth: 10,
		defence: 2,
		range: 60,
		healthRegen: 0.4,
		reloadTime: 1500,
		lootTime: 15000,
		respawnTime: 21000,
	},
	xpGiven: 10,
	projectile: {
		image: "melee",
	},
	lootTableTemplate: [EnemyLootTables.nilbogGoblin],
	inventorySpace: 8,
	animation: {
		type: "spritesheet",
		frameTime: 10,
		imagesPerRow: 3,
		totalImages: 3,
		animateBasis: "walk"
	},
	crop: {
		x: 0,
		y: 0,
		width: 102,
		height: 60,
	},
},
crystalAntOrangeQueen: {
	rotationImages: {
		left: "crystalAntOrangeQueenLeft",
		right: "crystalAntOrangeQueenRight"
	},
	speciesTemplate: SpeciesTemplates.nilbogGoblin,
	image: "crystalAntOrangeQueen",
	deathImage: "coyoteCorpse",
	name: "Crystalant Queen",
	hostility: "hostile",
	level: 2,
	stats: {
		damage: 2,
		walkSpeed: 120,
		swimSpeed: 40,
		iceSpeed: 160,
		maxHealth: 10,
		defence: 2,
		range: 60,
		healthRegen: 0.4,
		reloadTime: 1500,
		lootTime: 15000,
		respawnTime: 21000,
	},
	xpGiven: 10,
	projectile: {
		image: "melee",
	},
	lootTableTemplate: [EnemyLootTables.nilbogGoblin],
	inventorySpace: 8,
	animation: {
		type: "spritesheet",
		frameTime: 10,
		imagesPerRow: 3,
		totalImages: 3,
		animateBasis: "walk"
	},
	crop: {
		x: 0,
		y: 0,
		width: 157,
		height: 90,
	},
},


crystalAntBlueQueen: {
	rotationImages: {
		left: "crystalAntBlueQueenLeft",
		right: "crystalAntBlueQueenRight"
	},
	speciesTemplate: SpeciesTemplates.nilbogGoblin,
	image: "crystalAntBlueQueen",
	deathImage: "coyoteCorpse",
	name: "Crystalant Queen",
	hostility: "hostile",
	level: 2,
	stats: {
		damage: 2,
		walkSpeed: 120,
		swimSpeed: 40,
		iceSpeed: 160,
		maxHealth: 10,
		defence: 2,
		range: 60,
		healthRegen: 0.4,
		reloadTime: 1500,
		lootTime: 15000,
		respawnTime: 21000,
	},
	xpGiven: 10,
	projectile: {
		image: "melee",
	},
	lootTableTemplate: [EnemyLootTables.nilbogGoblin],
	inventorySpace: 8,
	animation: {
		type: "spritesheet",
		frameTime: 10,
		imagesPerRow: 3,
		totalImages: 3,
		animateBasis: "walk"
	},
	crop: {
		x: 0,
		y: 0,
		width: 157,
		height: 90,
	},
},

crystalAntGreenQueen: {
	rotationImages: {
		left: "crystalAntGreenQueenLeft",
		right: "crystalAntGreenQueenRight"
	},
	speciesTemplate: SpeciesTemplates.nilbogGoblin,
	image: "crystalAntGreenQueen",
	deathImage: "coyoteCorpse",
	name: "Crystalant Queen",
	hostility: "hostile",
	level: 2,
	stats: {
		damage: 2,
		walkSpeed: 120,
		swimSpeed: 40,
		iceSpeed: 160,
		maxHealth: 10,
		defence: 2,
		range: 60,
		healthRegen: 0.4,
		reloadTime: 1500,
		lootTime: 15000,
		respawnTime: 21000,
	},
	xpGiven: 10,
	projectile: {
		image: "melee",
	},
	lootTableTemplate: [EnemyLootTables.nilbogGoblin],
	inventorySpace: 8,
	animation: {
		type: "spritesheet",
		frameTime: 10,
		imagesPerRow: 3,
		totalImages: 3,
		animateBasis: "walk"
	},
	crop: {
		x: 0,
		y: 0,
		width: 157,
		height: 90,
	},
},


stoneElemental: {
	rotationImages: {
		left: "stoneElementalLeft",
		right: "stoneElementalRight"
	},
	speciesTemplate: SpeciesTemplates.nilbogGoblin,
	image: "stoneElemental1",
	deathImage: "coyoteCorpse",
	name: "Stone Elemental",
	hostility: "hostile",
	level: 2,
	stats: {
		damage: 2,
		walkSpeed: 120,
		swimSpeed: 40,
		iceSpeed: 160,
		maxHealth: 10,
		defence: 2,
		range: 60,
		healthRegen: 0.4,
		reloadTime: 1500,
		lootTime: 15000,
		respawnTime: 21000,
	},
	xpGiven: 10,
	projectile: {
		image: "melee",
	},
	lootTableTemplate: [EnemyLootTables.nilbogGoblin],
	inventorySpace: 8,
	animation: {
		type: "spritesheet",
		frameTime: 120,
		imagesPerRow: 4,
		totalImages: 4,

	},
	crop: {
		x: 0,
		y: 0,
		width: 128,
		height: 180,
	},
},



	},

	cave: {},

	hive: {
		workerBee: {
			rotationImages: {
				left: "bumblebeeLeft1",
				right: "bumblebeeRight1"
			},
			name: "Worker Bee",
			hostility: "neutral",
			level: 20,
			stats: {
				damage: 30,
				walkSpeed: 200,
				swimSpeed: 200,
				iceSpeed: 200, // tbd give flying property
				maxHealth: 20,
				defence: 0,
				range: 30,
				reloadTime: 1500,
				healthRegen: 10,
				onAttack: function () {
					// die
					this.takeDamage(20);
				}
			},
			attackBehaviour: {
				baseAggro: 0,
			},
			respawnOnDeath: false,
			corpseOnDeath: false,
			xpGiven: 100,
			projectile: {
				image: "melee",
			},
			animation: {
				type: "carousel",
				frameTime: 300,
				images: ["bumblebeeLeft1", "bumblebeeLeft2"], // tbd make work with rotationImages
			},
		},

		honeyBee: {
			rotationImages: {
				left: "bumblebeeLeft1",
				right: "bumblebeeRight1"
			},
			name: "Honey Bee",
			hostility: "hostile",
			level: 20,
			stats: { // tdb make so enemy circles player
				damage: 20,
				walkSpeed: 200,
				swimSpeed: 200,
				iceSpeed: 200, // tbd give flying property
				maxHealth: 20,
				defence: 0,
				range: 300,
				reloadTime: 1500,
				healthRegen: 1,
				projectileSpeed: 400, 
				projectileRange: 500,
				variance: 3,
			},
			respawnOnDeath: false,
			corpseOnDeath: false,
			xpGiven: 100,
			projectile: {
				image: "beeSting",
			},
			animation: {
				type: "carousel",
				frameTime: 300,
				images: ["bumblebeeLeft1", "bumblebeeLeft2"], // tbd make work with rotationImages
			},
		},

		leafcutterBee: {
			rotationImages: {
				left: "bumblebeeLeft1",
				right: "bumblebeeRight1"
			},
			name: "Leafcutter Bee",
			hostility: "hostile",
			level: 20,
			stats: { 
				damage: 12,
				walkSpeed: 140,
				swimSpeed: 140,
				iceSpeed: 140, // tbd give flying property
				maxHealth: 50,
				defence: 0,
				range: 60,
				reloadTime: 1000,
				healthRegen: 1,
			},
			respawnOnDeath: false,
			corpseOnDeath: false,
			xpGiven: 100,
			projectile: {
				image: "melee",
			},
			animation: {
				type: "carousel",
				frameTime: 300,
				images: ["bumblebeeLeft1", "bumblebeeLeft2"], // tbd make work with rotationImages
			},
		},

		carpenterNest: {
			rotationImages: {
				left: "bumblebeeLeft1",
				right: "bumblebeeRight1"
			},
			name: "Nest",
			hostility: "hostile",
			level: 25,
			stats: { 
				damage: 0,
				walkSpeed: 0,
				swimSpeed: 0,
				iceSpeed: 0, // tbd give flying property
				maxHealth: 250,
				defence: 50,
				range: 0,
				reloadTime: 10000,
				healthRegen: 0,
				doesNotAttack: true,
			},
			spells: {
				class: "enemy",
				id: 11, 
				tier: 1,
				additionalParameters: function () { // returns array of parameters
					return {
						number: 1,
						location: [
							{
								x: this.x,
								y: this.y,
								width: 100,
								height: 100,
							},
						],
						// properties of enemies
						image: "bumblebeeLeft1",
						name: "Carpenter Bee",
						hostility: "hostile",
						level: 20,
						corpseOnDeath: false,
						respawnOnDeath: false,
						stats: {
							maxHealth: 30, 
							defence: 0,
							damage: 10,
							range: 60,
							reloadTime: 1000,
							walkSpeed: 160,
							swimSpeed: 160,
							healthRegen: 1, 
						},
						attackBehaviour: {
							baseAggro: 1000, // always aggroed on player
						},
						projectile: {
							image: "melee",
						},
						xpGiven: 100,
					};
				},
			},
			respawnOnDeath: false,
			corpseOnDeath: false,
			xpGiven: 200,
			projectile: {
				image: "melee",
			},
			animation: {
				type: "carousel",
				frameTime: 300,
				images: ["bumblebeeLeft1", "bumblebeeLeft2"], // tbd make work with rotationImages
			},
		},

		bumblebee: {
			rotationImages: {
				left: "bumblebeeLeft1",
				right: "bumblebeeRight1"
			},
			name: "Bumblebee",
			hostility: "hostile",
			level: 25,
			stats: { 
				damage: 50,
				walkSpeed: 10,
				swimSpeed: 10,
				iceSpeed: 10, // tbd give flying property
				maxHealth: 100,
				defence: 10,
				range: 60,
				reloadTime: 1000,
				healthRegen: 1,
			},
			spells: {
				id: 35,
				tier: 1,
				parameters: function()
				{
					return {target: Game.hero};
				}
			},
			respawnOnDeath: false,
			corpseOnDeath: false,
			xpGiven: 250,
			projectile: {
				image: "melee",
			},
			animation: {
				type: "carousel",
				frameTime: 300,
				images: ["bumblebeeLeft1", "bumblebeeLeft2"], // tbd make work with rotationImages
			},
		},
	},
};


//
// Templates for entities for quests
//
const QuestTemplates = {
	eaglecrest: {
		// barrel for tinkerers conveyor belt quest
		conveyorGameBarrel: {
			moveTowardsSequence: [
				{x: 89.9, y: 1616,},
				{x: 89.9, y: 1616,},
				{x: 570.3, y: 1616,},
				function () {
					if (Game.areaVariables.conveyorDirection1 === "up") {
						if (this.name === "Blue Barrel") {
							// correct barrel; increase score upon route being finished
							this.moveTowardsSequenceFinishFunc = function () {
								Player.quests.prog.eaglecrest[25].vars.gameScore++;
								Player.quests.prog.eaglecrest[25].vars.percentageCorrect = Round((Player.quests.prog.eaglecrest[25].vars.gameScore/(Player.quests.prog.eaglecrest[25].vars.gameScore+Player.quests.prog.eaglecrest[25].vars.failedBarrels)),3);
								Dom.quests.active();
							}
						}
						else {
							// incorrect barrel
							this.moveTowardsSequenceFinishFunc = function () {
								Player.quests.prog.eaglecrest[25].vars.failedBarrels++;
								Player.quests.prog.eaglecrest[25].vars.percentageCorrect = Round((Player.quests.prog.eaglecrest[25].vars.gameScore/(Player.quests.prog.eaglecrest[25].vars.gameScore+Player.quests.prog.eaglecrest[25].vars.failedBarrels)),3);
								Dom.quests.active();
							}
						}
						return [{x: 570.3, y: 1335.7,}, "remove"]
					}
					else if (Game.areaVariables.conveyorDirection1 === "down") {
						return [{x: 570.3, y: 1793.1,}, {x: 993.8, y: 1793.1,}, function () {
							if (Game.areaVariables.conveyorDirection2 === "up") {
								if (this.name === "Red Barrel") {
									// correct barrel; increase score upon route being finished
									this.moveTowardsSequenceFinishFunc = function () {
										Player.quests.prog.eaglecrest[25].vars.gameScore++;
										Player.quests.prog.eaglecrest[25].vars.percentageCorrect = Round((Player.quests.prog.eaglecrest[25].vars.gameScore/(Player.quests.prog.eaglecrest[25].vars.gameScore+Player.quests.prog.eaglecrest[25].vars.failedBarrels)),3);
										Dom.quests.active();
									}
								}
								else {
									// incorrect barrel
									this.moveTowardsSequenceFinishFunc = function () {
										Player.quests.prog.eaglecrest[25].vars.failedBarrels++;
										Player.quests.prog.eaglecrest[25].vars.percentageCorrect = Round((Player.quests.prog.eaglecrest[25].vars.gameScore/(Player.quests.prog.eaglecrest[25].vars.gameScore+Player.quests.prog.eaglecrest[25].vars.failedBarrels)),3);
										Dom.quests.active();
									}
								}
								return [{x: 990.8, y: 1323.7,}, "remove"]
							}
							else if (Game.areaVariables.conveyorDirection2 === "down") {
								if (this.name === "Green Barrel") {
									// correct barrel; increase score upon route being finished
									this.moveTowardsSequenceFinishFunc = function () {
										Player.quests.prog.eaglecrest[25].vars.gameScore++;
										Player.quests.prog.eaglecrest[25].vars.percentageCorrect = Round((Player.quests.prog.eaglecrest[25].vars.gameScore/(Player.quests.prog.eaglecrest[25].vars.gameScore+Player.quests.prog.eaglecrest[25].vars.failedBarrels)),3);
										Dom.quests.active();
									}
								}
								else {
									// incorrect barrel
									this.moveTowardsSequenceFinishFunc = function () {
										Player.quests.prog.eaglecrest[25].vars.failedBarrels++;
										Player.quests.prog.eaglecrest[25].vars.percentageCorrect = Round((Player.quests.prog.eaglecrest[25].vars.gameScore/(Player.quests.prog.eaglecrest[25].vars.gameScore+Player.quests.prog.eaglecrest[25].vars.failedBarrels)),3);
										Dom.quests.active();
									}
								}
								return [{x: 993.8, y: 1906.2,}, {x: 1891.7, y: 1906.2,}, {x: 1891.7, y: 1332.7,}, "remove"]
							}
						}]
					}
				}
			],
		}
	}
};



const MountTemplates = {
	default: {
		rideAdjustY: -40,
		type: "mounts",
		hostility: "friendly",
		footHitbox: {
			width: 45,
			yAdjust: -38,
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
		onInteract: function () {
			if (!Game.hero.mounted) {
				Game.hero.getOnMount(this);
			}
		},
	}
};
