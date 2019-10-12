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
				// remove the trap
				// in the nilbog, the only "things" are the traps so the index in Game is equal to index in Areas
				Game.removeObject(id, "things", index)
				Game.things.splice(index, 1);
				Areas[Game.areaName].things.splice(index, 1);
				// stun goblin
				Game.statusEffects.stun({
					target: this,
					time: 2.5,
					effectTitle: "Goblin Trapped",
				});
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
};

const NPCTemplates = {
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
}

const EnemyTemplates = {
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
			leashRadius: 350,
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
			leashRadius: 350,
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
			leashRadius: 350,
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
				maxHealth: 16,
				defence: 2,
				range: 140,
				reloadTime: 2250,
				healthRegen: 0.4,
				flaming: 1,
				lootTime: 10000,
				respawnTime: 20000,
			},
			leashRadius: 350,
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
			leashRadius: 300,
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
			leashRadius: 300,
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
				alwaysMove: true, // move even when in range
			},
			spells: [
				{
					name: "charge",
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
			leashRadius: 1000, // doesn't leash in tower
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
			spells: [
				{
					name: "unholyStrike",
					tier: 1,
					parameters: function () { // returns array of parameters
						return {
							target: Game.hero,
						};
					},
					interval: 10000,
				},
			],
			leashRadius: 1500, // doesn't leash
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
				damage: 5,
				walkSpeed: 70,
				swimSpeed: 70,
				maxHealth: 400,
				defence: 20,
				range: 90,
				healthRegen: 0, // no regen in the blood moon
				reloadTime: 1000,
				lootTime: 10000,
				alwaysMove: true, // move even when in range
			},
			spells: [
				{
					name: "sawblade",
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
			leashRadius: 3000, // doesn't leash
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
							this.stats.maxHealth += 25;
							this.health = this.stats.maxHealth;
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
	},
};
