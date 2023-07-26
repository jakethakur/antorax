
// arrays in a spell object have their index correspond to the spell tier

Spells = [
	//
	// Knight tier 1
	//

	{
		name: "Heroic Charge",
		id: 0,
		img: "assets/runes/0.png",
		imgIconNum: 0,
		class: "k",
		description: ["", "Leap towards your mouse location, up to 500 pixels."],
		difficulty: "Medium",

		// properties should contain tier (as int value), caster, target
		func: function (properties) {
			let dist = Game.distance(properties.caster, properties.target);
			if (dist >= Spells[0].range[properties.tier]) {
				dist = Spells[0].range[properties.tier];
			}

			let velocity = Spells[0].velocity[properties.tier];
			let time = dist / velocity;
			let bear = Game.bearing(properties.caster, properties.target);
			properties.caster.displace(0, velocity, time, bear); // start displacement
		},

		range: [
			0,
			500,	// tier 1
		],

		velocity: [
			0,
			400,	// tier 1
		],

		channelTime: [
			0,
			0,		// tier 1
		],

		manaCost: [
			0,
			10,		// tier 1
		],

		cooldown: [
			0,
			10000,	// tier 1
		],
	},

	{
		name: "Parade",
		id: 1,
		img: "assets/runes/1.png",
		imgIconNum: 1,
		class: "k",
		description: ["", "Gain +200% defence for 0.5 seconds."],
		difficulty: "Hard",

		// properties should contain tier (as int value), caster
		func: function (properties) {
			Game.statusEffects.defence({
				target: properties.caster,
				effectTitle: "Parade",
				defenceIncrease: Spells[1].defenceMultiplier[properties.tier],
				time: Spells[1].paradeLength[properties.tier],
			});
		},

		defenceMultiplier: [
			0,
			200,	// tier 1
		],

		channelTime: [
			0,
			0,	// tier 1
		],

		paradeLength: [
			0,
			0.5,	// tier 1
		],

		manaCost: [
			0,
			4,		// tier 1
		],

		cooldown: [
			0,
			1500,	// tier 1
		],
	},

	{
		name: "Seismic Wave",
		id: 2,
		img: "assets/runes/2.png",
		imgIconNum: 2,
		class: "k",
		description: ["", "Deal 150% of your attack damage to all enemies in the area, and stun them for 3 seconds."],
		difficulty: "Easy",

		// properties should contain tier (as int value), caster
		func: function (properties) {
			for (let i = 0; i < Game.enemies.length; i++) {
				Game.enemies[i].takeDamage(Game.hero.stats.damage * Spells[2].damageMultiplier[properties.tier] / 100);
				Game.statusEffects.stun({
					effectTitle: "Seismic Slam!",
					target: Game.enemies[i],
					time: Spells[2].stunTime[properties.tier],
				});
			}

			Game.camera.initScreenShake(10,2500);
		},

		damageMultiplier: [
			0,
			150,	// tier 1
		],

		channelTime: [
			0,
			1000,
		],

		stunTime: [
			0,
			3,	// tier 1
		],

		manaCost: [
			0,
			15,		// tier 1
		],

		cooldown: [
			0,
			10000,	// tier 1
		],
	},

	//
	// Mage tier 1
	//

	{
		name: "Arcane Aura",
		id: 3,
		img: "assets/runes/3.png",
		imgIconNum: 3,
		class: "m",
		description: ["", "Can be toggled to deal 25% of your maximum damage to nearby enemies every second, draining 3 mana per second."],
		difficulty: "Easy",

		// properties should contain tier (as int value), caster, target
		func: function (properties) {
			if (!properties.caster.stats.arcaneAura) {
				// toggle on
				properties.caster.stats.arcaneAura = true;
				Game.hero.auraInterval = Game.setInterval(Spells[3].tickFunc, 100, properties); // only works with hero currently
			}
			else {
				// toggle off
				properties.caster.stats.arcaneAura = false;
				Game.clearInterval(Game.hero.auraInterval);
			}
		},

		// called when the aura is active!
		// called every 100ms
		// same params as func
		tickFunc: function (properties) {
			if (properties.caster.mana >= Spells[3].manaPerSecond[properties.tier] * 0.1) {
				// remove mana
				properties.caster.mana -= Spells[3].manaPerSecond[properties.tier] * 0.1;
				// damage all nearby enemies
				// (only works for player currently! can add an else statement if you want it to work with enemies)
				Game.damageableByPlayer.forEach(function (enemy) {
					if (Game.distance(Game.hero, enemy) < Game.hero.stats.range) {
						enemy.takeDamage(Game.hero.stats.maxDamage * Spells[3].damagePercentage[properties.tier] * 0.01 * 0.1);
					}
				});
			}
		},

		damagePercentage: [
			0,
			25,		// tier 1
		],

		channelTime: [
			0,
			0,	// tier 1
		],

		manaCost: [
			0,
			0,		// tier 1
		],

		manaPerSecond: [
			0,
			3,		// tier 1
		],

		cooldown: [
			0,
			1000,	// tier 1
		],
	},

	{
		name: "Icebolt",
		id: 4,
		img: "assets/runes/4.png",
		imgIconNum: 4,
		class: "m",
		description: ["", "Launch an icicle towards your mouse pointer that deals 150% of your maximum attack damage to the first target hit, stunning them for 1 second."],
		difficulty: "Hard",

		// properties should contain tier (as int value), caster, target
		func: function (properties) {
			// summon icicle projectile
			//movetowards tbd
			Game.projectiles.push(new Projectile({
				map: map,
				x: Game.hero.x,
				y: Game.hero.y,
				stats: {
					damage: Game.hero.stats.maxDamage * Spells[4].damageMultiplier[properties.tier] / 100,
					stun: 1,
				},
				attacker: properties.caster,
				targets: [Game.damageableByPlayer],
				image: "icebolt",
				moveDirection: Game.bearing(properties.caster, properties.target),
				stopMovingOnDamage: true,
				moveSpeed: 500,
				type: "projectiles",
			}));
		},

		channelTime: [
			0,
			400,	// tier 1
		],

		damageMultiplier: [
			0,
			150,	// tier 1
		],

		manaCost: [
			0,
			5,		// tier 1
		],

		cooldown: [
			0,
			2000,	// tier 1
		],
	},

	{
		name: "Fire Barrage",
		id: 5,
		img: "assets/runes/5.png",
		imgIconNum: 5,
		class: "m",
		description: ["", "Launch an fireball towards your mouse pointer that deals 150% of your maximum attack damage to all targets hit, also setting them on fire."],
		difficulty: "Medium",

		// properties should contain tier (as int value), caster, target
		func: function (properties) {
			// summon icicle projectile
			//movetowards tbd
			Game.projectiles.push(new Projectile({
				map: map,
				x: Game.hero.x,
				y: Game.hero.y,
				stats: {
					damage: Game.hero.stats.maxDamage * Spells[5].damageMultiplier[properties.tier] / 100,
					flaming: 1,
				},
				attacker: properties.caster,
				targets: [Game.damageableByPlayer],
				image: "fireBarrage",
				moveDirection: Game.bearing(properties.caster, properties.target),
				moveSpeed: 250,
				type: "projectiles",
				damageAllHit: true,
				transparency: 0.8,
			}));
		},

		channelTime: [
			0,
			1000,	// tier 1
		],

		damageMultiplier: [
			0,
			150,	// tier 1
		],

		manaCost: [
			0,
			15,		// tier 1
		],

		cooldown: [
			0,
			10000,	// tier 1
		],
	},

	//
	// Archer tier 1
	//

	{
		name: "Arrowspeed",
		id: 6,
		img: "assets/runes/6.png",
		imgIconNum: 6,
		class: "a",
		description: ["", "Increase your movement speed by 100% and attack damage by 25% for 5 seconds."],
		difficulty: "Easy",

		// properties should contain tier (as int value), caster
		func: function (properties) {
			Game.statusEffects.walkSpeed({
				target: Game.hero,
				effectTitle: "Arrowspeed!",
				speedIncrease: Spells[6].movementMultiplier[properties.tier],
				time: Spells[6].length[properties.tier],
			});
			Game.statusEffects.attackDamage({
				target: Game.hero,
				effectTitle: "Arrowspeed! (attack damage)",
				damageIncrease: Spells[6].damageMultiplier[properties.tier],
				time: Spells[6].length[properties.tier],
				hidden: true,
			});
		},

		channelTime: [
			0,
			0,	// tier 1
		],

		movementMultiplier: [
			0,
			100,		// tier 1
		],

		damageMultiplier: [
			0,
			25,		// tier 1
		],

		length: [
			0,
			5,		// tier 1
		],

		manaCost: [
			0,
			10,		// tier 1
		],

		cooldown: [
			0,
			15000,	// tier 1
		],
	},

	{
		name: "Shadow Cloak",
		id: 7,
		img: "assets/runes/7.png",
		imgIconNum: 7,
		class: "a",
		description: ["", "Gain stealth. Your next attack deals +400% damage."],
		difficulty: "Medium",

		// properties should contain tier (as int value), caster
		func: function (properties) {
			Game.statusEffects.stealth({
				target: Game.hero,
				effectTitle: "Shadow Cloaked",
			});
			Game.statusEffects.attackDamage({
				target: Game.hero,
				effectTitle: "Shadow Strike",
				effectDescription: "Your next attack deals more damage.",
				damageIncrease: Spells[7].damageMultiplier[properties.tier],
				removeOnAttack: true,
				hidden: true,
			});
		},

		manaCost: [
			0,
			10,		// tier 1
		],

		channelTime: [
			0,
			2000,	// tier 1
		],

		cooldown: [
			0,
			3000,	// tier 1
		],

		damageMultiplier: [
			0,
			400,		// tier 1
		],
	},

	{
		name: "Bamboozle",
		id: 8,
		img: "assets/runes/8.png",
		imgIconNum: 8,
		class: "a",
		description: ["", "Your next attack swaps locations with the enemy hit and deals 40% more damage."],
		difficulty: "Hard",

		// properties should contain tier (as int value), caster
		func: function (properties) {
			// tbd - maybe should be changed to an onAttack status effect?
			if (!Game.hero.hasStatusEffect("Bamboozle")) {
				Game.statusEffects.generic({
					target: Game.hero,
					effectTitle: "Bamboozle",
					effectDescription: "Your next attack swaps locations with the enemy hit and deals more damage.",
					imageName: "bamboozle",
					removeOnAttack: true
				});
				Game.statusEffects.attackDamage({
					target: Game.hero,
					effectTitle: "Bamboozle (damage increase)",
					effectDescription: "Your next attack swaps locations with the enemy hit and deals more damage.",
					damageIncrease: Spells[8].damageMultiplier[properties.tier],
					imageName: "bamboozle",
					removeOnAttack: true,
					hidden: true,
				});
			}
		},

		channelTime: [
			0,
			0,	// tier 1
		],

		manaCost: [
			0,
			3,		// tier 1
		],

		cooldown: [
			0,
			2000,	// tier 1
		],

		damageMultiplier: [
			0,
			40,		// tier 1
		],
	},

	//
	// BOSS
	//

	{
		name: "Unholy Strike",
		id: 9,
		class: "k",
		description: "",
		enemyOnly: true, // tattered knight

		// properties should contain tier (as int value), caster, target
		func: function (properties) {
			Game.statusEffects.stun({
				effectTitle: "Unholy Strike",
				target: properties.target,
				time: Spells[9].stunTime[properties.tier],
			});
		},

		stunTime: [
			0,
			3,		// tier 1
		],

		channelTime: [
			0,
			1500,	// tier 1
		],

		// TBD
		manaCost: [
			0,
			0,		// tier 1
		],
	},

	{
		name: "Sawblade",
		id: 10,
		class: "k",
		description: "",
		enemyOnly: true, // sheridan

		// properties should contain tier (as int value), caster, target
		func: function (properties) {
			// summon projectile (note its image should have already been loaded in)
			Game.projectiles.push(new Projectile({
				map: map,
				x: properties.caster.x,
				y: properties.caster.y,
				stats: {
					damage: 20,
					stun: 3,
				},
				attacker: properties.caster,
				targets: [Game.allCharacters],
				exceptTargets: [properties.caster],
				image: "sawblade",
				moveDirection: Game.bearing(properties.caster, properties.target),
				moveSpeed: 400,
				doNotRotate: true,
				damageAllHit: true,
				type: "projectiles"
			}));
		},

		channelTime: [
			0,
			2000,	// tier 1
		],
	},

	{
		name: "Animate",
		id: 11,
		class: "m",
		description: "",
		enemyOnly: true, // nkkja

		// properties should contain:
			// number (number to be animated)
			// location (array of objects with x y width and height of possible spawn areas) - random object and location in object is picked for each
			// all properties of animation (properties is passed into the Enemy constructor!)
		func: function (properties) {
			properties.source = "spell";
			for (let i = 0; i < properties.number; i++) {
				// pick location
				let location = properties.location[Random(0, properties.location.length-1)];
				properties.x = Random(location.x, location.x+location.width);
				properties.y = Random(location.y, location.y+location.height);
				// create enemy!
				let preparedNPC = Game.prepareNPC(properties, "enemies");
				if (preparedNPC) {
					Game.enemies.push(new Enemy(preparedNPC));
				}
			}
		},

		channelTime: [
			0,
			2000,	// tier 1
		],
	},

	{
		name: "Lightning",
		id: 12,
		class: "m",
		description: "Strike an enemy with lightning, setting them on fire and stunning them!",
		enemyOnly: true, // nkkja

		// properties should contain target
		// doesn't yet work with tier
		func: function (properties) {
			Weather.commenceLightningStrike();
			// status effects
			Game.statusEffects.fire({
				target: properties.target,
				tier: 1,
			});
			Game.statusEffects.stun({
				target: properties.target,
				time: 1,
			});
		},

		channelTime: [
			0,
			1000,	// tier 1
		],
	},

	{
		name: "Aeromancy",
		id: 13,
		class: "m",
		description: "Harness the power of the wind!",
		enemyOnly: true, // nkkja

		// properties should contain:
			// speed (of wind movement)
			// direction (of wind movement)
			// time (for wind to last for)
		func: function (properties) {
			let movex = Math.cos(properties.direction) * properties.speed;
			let movey = Math.sin(properties.direction) * properties.speed;

			Game.wind = {};
			Game.wind.movex = movex;
			Game.wind.movey = movey;

			Game.setTimeout(function () {
				Game.wind = undefined;
			}, properties.time)
		},

		channelTime: [
			0,
			2000,	// tier 1
		],
	},

	{
        name: "Hippity Hop",
        id: 14,
        class: "k",
        description: "Ribbit",
        enemyOnly: true, // toads in plains

        // properties should contain tier (as int value), caster, target
		func: function (properties) {
            let velocity = Spells[14].velocity[properties.tier];
            let dist = Math.min(Game.distance(properties.caster, properties.target), Spells[14].distance[properties.tier]);
            let time = dist / velocity;
            let bear = Game.bearing(properties.caster, properties.target);
            properties.caster.displace(0, velocity, time, bear); // start displacement
        },

        velocity: [
            0,
            500,    // tier 1
        ],

        distance: [
            0,
            120,    // tier 1
        ],

        channelTime: [
            0,
            500,    // tier 1
        ],
    },

	{
        name: "Cut Purse",
        id: 15,
        class: "a",
        description: "Snippity snip",
        enemyOnly: true, // cutpurses in plains

        // target always assumed to be hero
		func: function (properties) {
			let targetGold = Dom.inventory.count(2, "currency");
			let chatMessage = "";
			let goldStolen = 0;
			if (targetGold === 0) {
				chatMessage = "<i>You had nothing for the cutpurse to steal!</i>";
			}
			else if (targetGold < 6) {
				chatMessage = "<i>The Cutpurse stole 1 Gold from you!</i>";
				goldStolen = 1;
			}
			else if (targetGold < 15) {
				chatMessage = "<i>The Cutpurse stole 2 Gold from you!</i>";
				goldStolen = 2;
			}
			else {
				chatMessage = "<i>The Cutpurse stole 3 Gold from you!</i>";
				goldStolen = 3;
			}

			Dom.chat.insert(chatMessage);
			Dom.inventory.removeById(2, "currency", goldStolen);
            // tbd add it to the loot
        },

        channelTime: [
            0,
            1000,    // tier 1
        ],
    },

	{
        name: "Telepathic Link",
        id: 16,
        class: "m",
        description: "",
        enemyOnly: true, // zararanath

        // properties should contain tier (as int value), caster, target
		func: function (properties) {
			properties.caster.x = properties.target.x;
			properties.caster.y = properties.target.y;
			Dom.chat.insert(Dom.chat.say(properties.caster.name, "<i>This</i> telepathic link <b>will</b> hurt.")); // zararanath
        },

        channelTime: [
            0,
            1600,    // tier 1
        ],
    },

	{
		name: "Pounce",
		id: 17,
		img: "assets/runes/0.png", // tbd make a unique image for this?
		imgIconNum: 0,
		class: "cat",
		description: ["", "Leap towards your mouse location, up to 500 pixels."],

		// properties should contain tier (as int value), caster, target
		func: function (properties) {
			let dist = Game.distance(properties.caster, properties.target);
			if (dist >= Spells[17].range[properties.tier]) {
				dist = Spells[17].range[properties.tier];
			}

			let velocity = Spells[17].velocity[properties.tier];
			let time = dist / velocity;
			let bear = Game.bearing(properties.caster, properties.target);
			properties.caster.displace(0, velocity, time, bear); // start displacement
		},

		range: [
			0,
			150,	// tier 1
		],

		velocity: [
			0,
			400,	// tier 1
		],

		channelTime: [
			0,
			0,	// tier 1
		],

		manaCost: [
			0,
			4,		// tier 1
		],

		cooldown: [
			0,
			1000,	// tier 1
		],
	},

	{
        name: "Stupefy",
        id: 18,
        class: "k",
        description: "Bosh",
        enemyOnly: true, // cutpurses in plains

        // properties should contain tier (as int value), caster, target
		func: function (properties) {
			Game.statusEffects.stun({
				target: Game.properties.target,
				time: 2,
				effectTitle: "Knocked out",
				effectDescription: "Zzz",
			});
        },

        channelTime: [
            0,
            0,    // tier 1
        ],
    },

	{
        name: "Seek Prey",
        id: 19,
        class: "k",
        description: "Jaws",
        enemyOnly: true, // coyote hiyote

        // properties should contain caster, target
		func: function (properties) {
			let projectileSpeed = 150; // default

			if (properties.caster.hasStatusEffect("Empowered")) {
				projectileSpeed *= 1.6;
			}

			Game.projectiles.push(new Projectile({
				map: map,
				x: properties.caster.x,
				y: properties.caster.y,
				attacker: properties.caster,
				stats: {
					damage: 5,
					stun: 1,
				},
				onHit: function (target, caster) {
					// reduce enemy's defence
					Game.statusEffects.defence({
						target: target,
						effectTitle: "Target Acquired",
						defenceIncrease: -100,
						time: 8,
						effectStack: "multiply",
						// end blood effect when this effect expires
						onExpire: "removeTrail",
						callExpireOnRemove: true,
						onExpireParams: ["coyoteBlood"]
					});

					// caster should charge towrards location
					let dist = Game.distance(caster, target);
					let velocity = 600;
					let time = dist / velocity;
					let bear = Game.bearing(caster, target);
					caster.displace(0, velocity, time, bear); // start displacement

					// blood on target
					target.addTrail("coyoteBlood", {
						width: 3,
						height: 3,
						colour: ["#880808", "#8a0303"], // class Particle chooses random colour from array
						removeIn: 1500,
						rotation: 0,
						variance: 50, // variance in position (in x/y axis in one direction from player)
						intensity: 1, // no. of particles every 100ms
					});
				},
				targets: [[properties.target]],
				image: "jaws",
				crop: {
					x: 47,
					y: 42,
					width: 61,
					height: 66,
				},
				moveDirection: Game.bearing(properties.caster, properties.target),
				moveSpeed: projectileSpeed,
				type: "projectiles",
				animation: {
					type: "spritesheet",
					imagesPerRow: 3,
					frameTime: 90,
					totalImages: 7,
				},
				transparency: 0.7,
				stopMovingOnDamage: true,
			}));
        },

        channelTime: [
            0,
            1000,    // tier 1
        ],
    },

	{
        name: "Mend Pets",
        id: 20,
        class: "a",
        description: "Health is good",
        enemyOnly: true, // coyote wrangler

        // properties should contain tier & pets, an array which contains all animals to be healed
		func: function (properties) {
			for (let i = 0; i < properties.pets.length; i++) {
				Game.restoreHealth(properties.pets[i], Spells[20].healthRestored[properties.tier]);

				properties.pets[i].addTrail("mended", {
					width: 3,
					colour: ["#2CE831"],
					removeIn: 1000,
					variance: 50,
					intensity: 4,
					duration: 2.5,
				});
			}
        },

        channelTime: [
            0,
            4000,    // tier 1
        ],

        healthRestored: [
            0,
            25,    // tier 1
        ],
    },

	{
        name: "Empower Pets",
        id: 21,
        class: "a",
        description: "",
        enemyOnly: true, // coyote wrangler

        // properties should contain tier & pets, an array which contains all animals to be healed
		func: function (properties) {
			for (let i = 0; i < properties.pets.length; i++) {
				Game.statusEffects.attackDamage({
					target: properties.pets[i],
					effectTitle: "Empowered",
					damageIncrease: Spells[21].damageIncrease[properties.tier],
					time: Spells[21].length[properties.tier],
				});

				properties.pets[i].addTrail("empowered", {
					width: 3,
					colour: ["#cc0404"],
					removeIn: 1000,
					variance: 50,
					intensity: 2,
					duration: 6,
				});
			}
        },

        channelTime: [
            0,
            4000,    // tier 1
        ],

        damageIncrease: [
            0,
            50,    // tier 1
        ],

        length: [
            0,
            6,    // tier 1
        ],
    },

	{
		name: "Bees!!!!!!!!",
		id: 22,
		class: "k",
		description: "",
		enemyOnly: true, // bee swarm

		// properties should contain tier (as int value), caster
		func: function (properties) {
			// summon projectile (note its image should have already been loaded in)
			for (let i = 0; i < Spells[22].numberSummoned[properties.tier]; i++) {
				let x = properties.caster.x + Random(-75, 75);
				let y = properties.caster.y + Random(-75, 75);
				let preparedEnemy = Game.prepareNPC({
					x: x,
					y: y,
					template: EnemyTemplates.eaglecrest.bumblebee,
				}, "enemies");
				Game.enemies.push(new Enemy(preparedEnemy));
			}
		},

		channelTime: [
			0,
			0,		// tier 1
			0,		// tier 2
		],

		numberSummoned: [
			0,
			3,		// tier 1
			5,		// tier 2
		],
	},

	{
		name: "Goblin Reinforcements",
		id: 23,
		class: "k",
		description: "",
		enemyOnly: true, // goblin king

		// properties should contain tier (as int value), caster
		func: function (properties) {
			// summon projectile (note its image should have already been loaded in)
			for (let i = 0; i < Spells[23].numberSummoned[properties.tier]; i++) {
				Game.setTimeout(function () {
					let template;
					if (Random(0,1) === 1) {
						template = "goblinCrusader";
					}
					else {
						template = "goblinTowerkeeper";
					}

					let preparedEnemy = Game.prepareNPC({
						x: 90,
						y: 560,
						template: EnemyTemplates.nilbog[template],
						moveTowards: { // walk up stairs
							x: 15,
							y: 520,
							speedScalar: 0.6,
						},
						attackBehaviour: {
							baseAggro: 100, // always aggroed on player
						},
						respawnOnDeath: false,
					}, "enemies");
					Game.enemies.push(new Enemy(preparedEnemy));
				}, Spells[23].timeSpacing[properties.tier] * i);
			}
		},

		channelTime: [
			0,
			3000,	// tier 1
			3000,	// tier 2
		],

		numberSummoned: [
			0,
			2,		// tier 1
			4,		// tier 2
		],

		timeSpacing: [ // spacing between enemy summons
			0,
			3000,	// tier 1
			2000,	// tier 2
		],
	},

	{
		name: "Reflux",
		id: 24,
		img: "assets/runes/6.png", // tbd
		imgIconNum: 6, // tbd
		class: "m",
		description: ["", "Reverse the direction of all projectiles on the map, and allow them to deal damage to targets they have already damaged."],
		difficulty: "Easy",

		// properties should contain tier (as int value), caster
		func: function (properties) { // tbd
		},

		channelTime: [
			0,
			1000,	// tier 1
		],

		manaCost: [
			0,
			20,		// tier 1
		],

		cooldown: [
			0,
			15000,	// tier 1
		],
	},

	{
		// tbd fissure
		func: function (properties) {


			Game.camera.initScreenShake(3,1000);

			Game.projectiles.push(new Projectile({ // HERO fissure projectile
				map: map,
				x: Game.hero.x,
				y: Game.hero.y,
				z: -1,
				attacker: this,
				projectileStats: this,
				targets: [Game.damageableByPlayer],
				adjust: {
					// manually adjust position (programmed for each projectile in skindata/itemdata)
					x: Game.heroProjectileAdjust.x,
					y: Game.heroProjectileAdjust.y,
					towards: {x: this.x, y: this.y},
				},
				hitbox: {
					x: Game.hero.x,
					y: Game.hero.y,
					width: this.class === "k" ? 60 : (this.class === "m" ? 23 : (this.class === "a" ? 10 : 0)),//kkkkkkkkkk
					height: this.class === "k" ? 60 : (this.class === "m" ? 23 : (this.class === "a" ? 10 : 0)),
				},
				image: Game.heroProjectile2Name, // projectile 2
				name: "Hero Fissure Projectile",
				beingChannelled: true, // speeds it up
				type: "projectiles",

				projectileType: "snake",

				// properties
				iterationSpacing: this.stats.iterationSpacing, // in ms
				maxIterations: this.stats.maxIterations,
				moveDirection: projectileDirection,
				damageAllHit: this.stats.damageAllHit, // usually true

				// optional stuff:
				// aaaaaaaaaaaaa look at ; might need to fix some of these
				// also, doesn't work for projectile2 since these properties don't exist
				/*crop: Game.heroProjectileInfo.crop,
				animation: Game.heroProjectileInfo.animation,
				frameTime: Game.heroProjectileInfo.frameTime,
				stayOnScreen: Game.heroProjectileInfo.stayOnScreen, // set to the time it stays on the screen for (default 1500) or true if never removed
				//doNotRotate: Game.heroProjectileInfo.doNotRotate, // aaaaaaaaaaaaaa readd but just as a visual thing - not affecting the projectile's direction as it would because this is needed for variance
				onInteract: Game.heroProjectileInfo.onInteract,
				z: Game.heroProjectileInfo.z,*/
			}));
		}
	}

];
