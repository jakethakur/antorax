const EnemyTemplates = {
	nilbog: {
		goblinRockthrower: {
			image: "goblinRockthrower",
			deathImage: "goblinCorpse",
			name: "Goblin Rockthrower",
			species: "goblin",
			subSpecies: "nilbog goblin",
			hostility: "hostile",
			level: 2,
			stats: {
				damage: 3,
				walkSpeed: 100,
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
			image: "goblinSkirmisher",
			deathImage: "goblinCorpse",
			name: "Goblin Skirmisher",
			species: "goblin",
			subSpecies: "nilbog goblin",
			hostility: "hostile",
			level: 2,
			stats: {
				damage: 2,
				walkSpeed: 90,
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
			image: "goblinBruiser",
			deathImage: "goblinCorpse",
			name: "Goblin Bruiser",
			species: "goblin",
			subSpecies: "nilbog goblin",
			hostility: "hostile",
			level: 3,
			stats: {
				damage: 4,
				walkSpeed: 70,
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
			image: "fireGoblin",
			deathImage: "goblinCorpse",
			name: "Fire Goblin",
			species: "goblin",
			subSpecies: "nilbog goblin",
			hostility: "hostile",
			level: 4,
			stats: {
				damage: 3,
				walkSpeed: 95,
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
			image: "goblinTowerkeeper",
			deathImage: "goblinCorpse",
			name: "Goblin Towerkeeper",
			species: "goblin",
			subSpecies: "nilbog goblin",
			hostility: "hostile",
			level: 5,
			stats: {
				damage: 4,
				walkSpeed: 75,
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
			image: "goblinCrusader",
			deathImage: "goblinCorpse",
			name: "Goblin Crusader",
			species: "goblin",
			subSpecies: "nilbog goblin",
			hostility: "hostile",
			level: 5,
			stats: {
				damage: 5.5,
				walkSpeed: 65,
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
			image: "goblinKing",
			deathImage: "goblinKingCorpse",
			name: "The Goblin King",
			species: "goblin",
			subSpecies: "nilbog goblin",
			hostility: "boss",
			bossKilledVariable: "goblinKing",
			level: 8,
			stats: {
				damage: 9,
				walkSpeed: 60,
				maxHealth: 100,
				defence: 10,
				range: 60,
				healthRegen: 0.4,
				reloadTime: 1500,
				lootTime: 10000,
				respawnTime: 30000, // TBD
				alwaysMove: true,
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
				
				let dist = distance(this, Game.hero);
				
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
		}
	},
};
