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
		chat: {
			notUnlockedRoles: "Miau.",
		},
		canBeOnLead: true,
	},
	frog: {
		species: "frog",
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
			maxHealth: Player.class === "a" ? 500 : 350, // because archer shots don't pierce
			healthRegen: 0,
		},
		onDeathAdditional: function () {
			Dom.chat.insert("<b>The Blood Moon is Coming...</b> has been failed. Restart the quest by speaking to <b>The Soothsssayer</b>.");
			Dom.quest.abandon(Quests.eaglecrest[6]);
			while (Game.clearedTimeoutsOnAreaChange.length > 0) {
				Game.clearTimeout(Game.clearedTimeoutsOnAreaChange[0]);
				Game.clearedTimeoutsOnAreaChange.splice(0, 1);
			}
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
				range: 200,
				healthRegen: 0.4,
				reloadTime: 2000,
				lootTime: 10000,
				respawnTime: 11000,
				variance: 100,
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
				lootTime: 10000,
				respawnTime: 11000,
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
				lootTime: 10000,
				respawnTime: 11000,
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
				maxHealth: 18,
				defence: 2,
				range: 140,
				reloadTime: 2250,
				healthRegen: 0.4,
				flaming: 1,
				lootTime: 10000,
				respawnTime: 20000,
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
				lootTime: 10000,
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
				lootTime: 10000,
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
				lootTime: 10000,
			},
			attackBehaviour: {
				alwaysMove: true, // move even when in range
				baseAggro: 100, // always aggroed on player
			},
			spells: [
				{
					id: 0,
					tier: 1,
					parameters: function () { // returns array of parameters
						return {
							target: Game.hero,
						};
					},
					interval: 5000,
				},
			],
			updateStats: function () { // choose attack based on distance
				// updateStats is currently just an enemy function

				let dist = Game.distance(this, Game.hero);

				// TBD projectile adjust?
				if (dist < 90) {
					// sword
					this.stats.range = 90;
					this.stats.damage = 6;
					this.stats.flaming = undefined;
					this.projectile.image = "slash";
				}
				else if (dist < 210) {
					// staff
					this.stats.range = 210;
					this.stats.damage = 4;
					this.stats.flaming = 1;
					this.projectile.image = "fireball";
				}
				else {
					// bow
					this.stats.range = 1000;
					this.stats.damage = 4;
					this.stats.flaming = undefined;
					this.projectile.image = "arrow";
				}
			},
			xpGiven: 250,
			projectile: {
				image: "slash",
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
					id: 9,
					tier: 1,
					parameters: function () { // returns array of parameters
						return {
							target: Game.hero,
						};
					},
					interval: 10000,
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
				damage: Player.class === "k" ? 1 : 3, // doubled during blood moon
				walkSpeed: 70,
				swimSpeed: 70,
				maxHealth: Player.class === "k" ? 90 : 140, // doubled during blood moon
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
					id: 10,
					tier: 1,
					parameters: function () { // returns array of parameters
						return {
							target: Game.hero,
						};
					},
					castCondition: function (caster) {
						// has picked up all logs
						return caster.logsRemaining === 0;
					},
					interval: 7000,
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
				damage: 1.5, // damage and health are doubled in blood moon
				walkSpeed: 110,
				swimSpeed: 50,
				iceSpeed: 160,
				maxHealth: 200,
				defence: 4,
				range: 200,
				reloadTime: 850,
				healthRegen: 0, // no regen in the blood moon
				lootTime: 20000,
				windShield: true,
			},
			attackBehaviour: {
				baseAggro: 1000, // always aggroed on player
			},
			spells: [
				// ordered in order of boss priority to spells
				{
					id: 13, // aeromancy
					tier: 1,
					parameters: function () { // returns array of parameters
						Dom.chat.insert(Dom.chat.say("'Barebones' Nkkja", "The wind obeys me!"));
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
					interval: 40000,
				},
				{
					id: 11, // animate
					tier: 1,
					parameters: function () { // returns array of parameters
						Dom.chat.insert(Dom.chat.say("'Barebones' Nkkja", "The mud of this bog is mine!"));
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
					interval: 17000,
				},
				{
					id: 12, // lightning
					tier: 1,
					parameters: function () { // returns array of parameters
						Dom.chat.insert(Dom.chat.say("'Barebones' Nkkja", "The sky belongs to me!"));
						return {
							target: this.calculateTarget(),
						};
					},
					castCondition: function (caster) {
						// cauldron not destroyed
						let cauldronIndex = Game.characters.findIndex(character => character.name === "Nkkja's Cauldron of Lightning");
						return cauldronIndex !== -1;
					},
					interval: 9000,
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
		},
		toad: {
			speciesTemplate: SpeciesTemplates.frog,
	        rotationImages: {
	            left: "toadLeft",
	            right: "toadRight"
	        },
			deathImage: "toadCorpse",
			name: "Large Toad",
			hostility: "hostile",
			level: 5,
			stats: {
				damage: 10,
				walkSpeed: 25,
				swimSpeed: 25,
				iceSpeed: 50,
				maxHealth: 50,
				defence: 5,
				range: 150,
				reloadTime: 1500,
				healthRegen: 0.5,
				lootTime: 10000,
				respawnTime: 20000,
			},
			xpGiven: 50,
			projectile: {
				image: "waterball",
			},
			spells: [
	            {
	                id: 14,
	                tier: 1,
	                parameters: function () { // returns array of parameters
	                    return {
	                        target: this.calculateTarget(),
	                    };
	                },
					castCondition: function (caster) {
	                    return typeof this.calculateTarget() !== "undefined" && Game.distance(caster, this.calculateTarget()) > caster.stats.range - 25;
	                },
	                interval: 1000,
	            },
	        ],
			lootTableTemplate: [EnemyLootTables.frog],
			inventorySpace: 8,
			attackTargets: [{target: function () { // for Overdraft quest
				if (Player.quests.npcProgress.eaglecrest[2] === 2) {
					return Game.npcs.find(character => character.name === "Gildo Cleftbeard");
				}
			}, baseAggro: 5}],
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
				swimSpeed: 20,
				iceSpeed: 150,
				maxHealth: 40,
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
	}
};

var Villagers = [
    {
        id: 0,
        images: {silvioStarstrike: {normal: "assets/npcs/silvioStarstrike.png"}},
        name: "Silvio Starstrike",
        level: 20,
        stats: {
            maxHealth: 150,
            walkSpeed: 160,
            defence: 5,
        },
        hostility: "friendly",
        exceptAreas: [
            "eaglecrestLoggingCamp",
        ],
        roles: [],
        chat: {
            notUnlockedRoles: "I bet you've never met a lunarlancer before! Be warned - I have a short temper.",
            chooseChat: "Don't say a false word. I could decimate you with my celestial power.",
            receiveTavernGood: "I see you've brought me some blessings from the stars. What do you mean I ordered them? Don't underestimate the power of the sky.",
        }
    },
    {
        id: 1,
        images: {darioHorfern: {normal: "assets/npcs/darioHorfern.png"}},
        name: "Dario Horfern",
        level: 10,
        stats: {
            maxHealth: 100,
            walkSpeed: 125,
            defence: 3,
        },
        hostility: "friendly",
        areas: [
            {area: "loggingCampTavern", probability: 0.5},
            "eaglecrestTavern",
        ],
        roles: [],
        chat: {
            notUnlockedRoles: {
                loggingCamp: "This place is small. I prefer it in Eaglecrest.",
                eaglecrest: "This would be my favourite place in the whole city... if it wasn't so dusty!",
            },
            chooseChat: "You can go away if you haven't brought me a drink.",
            receiveTavernGood: "I've been waiting for ages for this!",
        }
    },
    {
        id: 2,
        images: {gremaRoskin: {normal: "assets/npcs/gremaRoskin.png"}},
        name: "Grema Roskin",
        level: 15,
        stats: {
            maxHealth: 125,
            walkSpeed: 135,
            defence: 2,
        },
        hostility: "friendly",
        areas: [
            "loggingCampTavern",
            "eaglecrestTavern",
        ],
        roles: [],
        chat: {
            notUnlockedRoles: {
                loggingCamp: "Hm. Doesn't smell of fried beetroot here.",
                eaglecrest: "Smells of fried beetroot in here."
            },
            chooseChat: "Hello again, did you bring beetroot this time?",
            receiveTavernGood: "It's no fried beetroot, but it'll do. Thank you.",
        }
    },
    {
        id: 3,
        images: {feller: {normal: "assets/npcs/feller.png"}},
        name: "Logging Camp Feller",
        level: 4,
        stats: {
            maxHealth: 70,
            walkSpeed: 115,
            defence: 3,
        },
        hostility: "friendly",
        areas: [
            "loggingCampTavern",
            "eaglecrestLoggingCamp",
        ],
        roles: [],
        chat: {
            notUnlockedRoles: "<em>You</em> should try carrying these logs around all day!",
            chooseChat: "Can't talk for long, my back's playing up again.",
            receiveTavernGood: "Ah, thanks! Just hold these logs for a minute.",
        }
    },
    {
        id: 4,
        images: {treecutter: {normal: "assets/npcs/treecutter.png"}},
        name: "Logging Camp Treecutter",
        level: 7,
        stats: {
            maxHealth: 85,
            walkSpeed: 120,
            defence: 5,
        },
        hostility: "friendly",
        areas: [
            "loggingCampTavern",
            "eaglecrestLoggingCamp",
        ],
        roles: [],
        chat: {
            notUnlockedRoles: "Teper should try doing some work and not just ordering us around all the time.",
            chooseChat: "Y'know I cut the trees down to build this place: it's great to see my hard work put to good use!",
            receiveTavernGood: "Just the break I needed.",
        }
    },
    {
        id: 5,
        images: {robertHendman: {normal: "assets/npcs/robertHendman.png"}},
        name: "Robert Hendman",
        level: 12,
        stats: {
            maxHealth: 85,
            walkSpeed: 140,
            defence: 5,
        },
        hostility: "friendly",
        exceptAreas: [
            "eaglecrestLoggingCamp",
        ],
        roles: [],
        chat: {
            notUnlockedRoles: "Have you seen anyone playing Wizard's Lore before? Me neither. I bet those game boards are just for show.",
            chooseChat: "I'm going to head down to the Eaglecrest monastery soon. Would you like to come along too?",
            receiveTavernGood: `Thank you friend! A good day to you.`,
        }
    },
    {
        id: 6,
        images: {wilmaRedding: {normal: "assets/npcs/wilmaRedding.png"}},
        name: "Wilma Redding",
        level: 12,
        stats: {
            maxHealth: 85,
            walkSpeed: 140,
            defence: 5,
        },
        hostility: "friendly",
        exceptAreas: [
            "eaglecrestLoggingCamp",
        ],
        roles: [],
        chat: {
            notUnlockedRoles: "So many magic artifacts around, yet I can't seem to find a single one!",
            chooseChat: "Why would a fancy adventurer like you be talking to someone like me?",
            receiveTavernGood: "My order? And not a moment too soon!",
        }
    },
    {
        id: 7,
        images: {greenbeard: {normal: "assets/npcs/greenbeard.png"}},
        name: "Captain Greenbeard",
        level: 40,
        stats: {
            maxHealth: 250,
            walkSpeed: 130,
            defence: 8,
        },
        hostility: "friendly",
        exceptAreas: [
            "eaglecrestLoggingCamp",
        ],
        roles: [],
        chat: {
            notUnlockedRoles: "Yarr harr! Have ye spied me ship nearby?",
            chooseChat: "Ahoy there!",
            receiveTavernGood: "Nothin' better than a hearty supper at the tavern.",
        },
		canBeShown: function () {
			!Player.quests.activeQuestArray.includes("Overdraft");
		}
    },
    {
        id: 8,
        images: {gildoCleftbeard: {normal: "assets/npcs/gildoCleftbeard.png"}},
        name: "Gildo Cleftbeard",
        level: 14,
		corpseOnDeath: false,
        stats: {
            maxHealth: 120,
            walkSpeed: 123,
            defence: 6,
        },
        hostility: "friendly",
        exceptAreas: [
            "eaglecrestLoggingCamp",
        ],
        roles: [],
        chat: {
            notUnlockedRoles: {
                loggingCamp: "I would never go to that Nilbog! Wouldn't want to get my boots muddy. Oh, and the goblins, too.",
                eaglecrest: "I tip my hat to you.",
            },
            chooseChat: "Do you like my monocle?",
            receiveTavernGood: "Thank you, now I just have to be careful not to get any in my beard!",
			tenPercentHealth: "They're messing my beard up! Do something about it!",
			death: "My monocle...",
        },
		canBeShown: function () {
			Player.quests.completedQuestArray.includes("Overdraft");
		}
    },
    {
        id: 9,
        images: {eaglecrestGuard: {normal: "assets/npcs/eaglecrestGuard.png"}},
        name: "Eaglecrest Guard",
        level: 50,
        stats: {
            maxHealth: 300,
            walkSpeed: 170,
            defence: 20,
        },
        hostility: "friendly",
        exceptAreas: [
            "loggingCampTavern",
            "eaglecrestLoggingCamp",
        ],
        roles: [],
        chat: {
            notUnlockedRoles: "Becoming a guard has been my dream ever since I was a child. I admired their might!",
            chooseChat: "Sorry if I seem distracted, but I'm always on the lookout for criminals.",
            receiveTavernGood: "Thanks. I need this to keep my strength up.",
        }
    },
    {
        id: 10,
        images: {eaglecrestGuard2: {normal: "assets/npcs/eaglecrestGuard2.png"}},
        name: "Eaglecrest Guard",
        level: 50,
        stats: {
            maxHealth: 300,
            walkSpeed: 170,
            defence: 20,
        },
        hostility: "friendly",
        exceptAreas: [
            "loggingCampTavern",
            "eaglecrestLoggingCamp",
        ],
        roles: [],
        chat: {
            notUnlockedRoles: "Becoming a guard has been my dream ever since I was a child. I admired their might!",
            chooseChat: "Sorry if I seem distracted, but I'm always on the lookout for criminals.",
            receiveTavernGood: "Thanks. I need this to keep my strength up.",
        }
    },
    {
        id: 11,
        images: {alfonsoMurbry: {normal: "assets/npcs/alfonsoMurbry.png"}},
        name: "Alfonso Murbry",
        level: 18,
        stats: {
            maxHealth: 140,
            walkSpeed: 138,
            defence: 3,
        },
        hostility: "friendly",
        exceptAreas: [
            "eaglecrestLoggingCamp",
        ],
        roles: [],
        chat: {
            notUnlockedRoles: "Do you know how to get a golden slingshot? I've heard it fires three pellets at once!",
            chooseChat: "You know there's said to sometimes be floating presents in the sky held up by balloons. That's why you should always carry around a slingshot!",
            receiveTavernGood: "Excellent! Just in time.",
        }
    },
    {
        id: 12,
        images: {
            cat1Left: {normal: "assets/npcs/cat1.png"},
            cat1Right: {normal: "assets/npcs/cat1.png", flip: "vertical"},
        },
        rotationImages: {
            left: "cat1Left",
            right: "cat1Right"
        },
        name: "Cat",
        hideNameTag: true,
        areas: [
            "eaglecrest",
            "eaglecrestEast",
            "eaglecrestWest",
            "eaglecrestGraveyard",
            "eaglecrestElixirs",
            "eaglecrestPlains",
        ],
        roles: [],
        speciesTemplate: SpeciesTemplates.cat,
    },
    {
        id: 13,
        images: {
            cat2Left: {normal: "assets/npcs/cat2.png"},
            cat2Right: {normal: "assets/npcs/cat2.png", flip: "vertical"},
        },
        rotationImages: {
            left: "cat2Left",
            right: "cat2Right"
        },
        name: "Cat",
        hideNameTag: true,
        areas: [
            "eaglecrest",
            "eaglecrestEast",
            "eaglecrestWest",
            "eaglecrestGraveyard",
            "eaglecrestElixirs",
            "eaglecrestPlains",
        ],
        roles: [],
        speciesTemplate: SpeciesTemplates.cat,
    },
    {
        id: 14,
        images: {
            cat3Left: {normal: "assets/npcs/cat3.png"},
            cat3Right: {normal: "assets/npcs/cat3.png", flip: "vertical"},
        },
        rotationImages: {
            left: "cat3Left",
            right: "cat3Right"
        },
        name: "Cat",
        hideNameTag: true,
        areas: [
            "eaglecrest",
            "eaglecrestEast",
            "eaglecrestWest",
            "eaglecrestGraveyard",
            "eaglecrestElixirs",
            "eaglecrestPlains",
        ],
        roles: [],
        speciesTemplate: SpeciesTemplates.cat,
    },
    /*{
        id: 15,
        images: {
            cat4Left: {normal: "assets/npcs/cat4.png"},
            cat4Right: {normal: "assets/npcs/cat4.png", flip: "vertical"},
        },
        rotationImages: {
            left: "cat4Left",
            right: "cat4Right"
        },
        name: "Cat",
        hideNameTag: true,
        areas: [
            "eaglecrest",
            "eaglecrestEast",
            "eaglecrestWest",
            "eaglecrestGraveyard",
            "eaglecrestElixirs",
        ],
		rarity: 20, // ie 20 times less common (doesn't acc work yet)
        roles: [],
        speciesTemplate: SpeciesTemplates.cat,
    },*/
	{
        id: 15,
        images: {alysLoreworth: {normal: "assets/npcs/alysLoreworth.png"}},
		name: "Alys Loreworth, Lead Archaeologist",
		hostility: "friendly",
		level: 100,
		stats: {
			maxHealth: 550,
			defence: 5,
            walkSpeed: 131,
		},
        exceptAreas: [
            "eaglecrestLoggingCamp",
        ],
		roles: [
			{
				sold: [
					{item: Items.helm[8], cost: 15,}, // hat
				],
				role: "merchant",
				roleRequirement: function () {
					return Player.level >= MaxLevel;
				},
				shopGreeting: "A good archaeologist always has a hat. Oh. Do you not?",
			},
			{
				role: "identifier",
			},
		],
		chat: {
			notUnlockedRoles: {
				loggingCamp: "I can't believe they think the archaeology here is worth our time!",
				eaglecrest: "Can you not see I'm trying to work here? Come back later.",
			},
			chooseChat: "I'm over to the Ley Confluence soon. I'm just on a break.",
	        receiveTavernGood: "Thank you! We all need to look after ourselves every now and then.",
			// identifier
			identifierGreeting: "Let's see if you've found anything new.",
			noUnidentified: "There's realms of items for you to explore. Find some unidentified items!",
			identifyCommon: "And you think <em>this</em> will help our archaeology effort?",
			identifyUnique: "Oh, this one is of rather good quality.",
			identifyMythic: "It's not often I see one of these!",
			// merchant
			shopLeave: "Good luck on your travels.",
			inventoryFull: "Oh, you've got so many artefacts in your inventory that there's no space for this.",
			tooPoor: "Looks like you're not being paid enough for your efforts. Earn some gold and come back.",
			// event
			christmasGreeting: "Merry Christmas! I hope you've found lots of rare items this festive season. I heard there's some free ones in the city today.",
			antoraxDayGreeting: `We've been operating the Antorax Archaeology effort for ${Event.antoraxAge} years. Doesn't that call for celebration?`,
		},
	},
	{
        id: 16,
        images: {mailman: {normal: "assets/npcs/mailman.png"}},
		name: "Eaglecrest Mailman",
		hostility: "friendly",
		level: 10,
		stats: {
			maxHealth: 100,
			defence: 5,
            walkSpeed: 170,
		},
        areas: [
            "eaglecrest",
            "eaglecrestEast",
            "eaglecrestWest",
        ],
		chat: {
            notUnlockedRoles: "I recognise your face... have we met?",
		},
	},
	{
        id: 17,
        images: {demolitionist: {normal: "assets/npcs/demolitionist.png"}},
		name: "Demolitionist Darrow",
		hostility: "friendly",
		level: 10,
		stats: {
			maxHealth: 100,
			defence: 7,
            walkSpeed: 141,
		},
        areas: [
            "eaglecrest",
            "eaglecrestEast",
            "eaglecrestWest",
        ],
		chat: {
            notUnlockedRoles: "Eaglecrest contracted me to blow up those damn sewers. Heard there was a real big rat problem there. Blast, why do I care, I'm just here to blow the damn place up.",
		},
	},
	{
        id: 17,
        images: {pieRomancer: {normal: "assets/npcs/pieRomancer.png"}},
		name: "The Pie-Romancer",
		hostility: "friendly",
		level: 10,
		stats: {
			maxHealth: 100,
			defence: 3,
            walkSpeed: 124,
		},
        areas: [
            "eaglecrest",
            "eaglecrestEast",
            "eaglecrestWest",
            "eaglecrestTavern",
            "eaglecrestBank",
            "eaglecrestElixirs",
            "eaglecrestBazaar",
            "theForge",
            "eaglecrestGraveyard",
            "eaglecrestMonastery",
            "eaglecrestPlains",
        ],
		chat: {
            notUnlockedRoles: "Nothing to see here! Just an honest man going about his daily business <i>ahahaha</i>.",
			//This will do for now <i>haha</i>.. at least until I can get my hands on some pie...
			//What brings you here today? Nothing the matter, I hope <i>hehe</i>
		},
	},
	{
        id: 18,
        images: {crazyCatLady: {normal: "assets/npcs/crazyCatLady.png"}},
		name: "Crazy Cat Lady", // tbd give cat leads (sometimes?)
		hostility: "friendly",
		level: 20,
		stats: {
			maxHealth: 150,
			defence: 6,
            walkSpeed: 104,
		},
        areas: [
            "eaglecrest",
            "eaglecrestEast",
            "eaglecrestWest",
            "eaglecrestTavern",
            "eaglecrestBank",
            "eaglecrestElixirs",
            "eaglecrestBazaar", // no The Forge
            "eaglecrestGraveyard",
            "eaglecrestMonastery",
            "eaglecrestPlains",
        ],
		chat: {
            notUnlockedRoles: "Hmph. You're not a cat.",
		},
	},
];
