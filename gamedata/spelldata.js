
// arrays in a spell object have their index correspond to the spell tier

const Spells = {
	knight: [
		//
		// knight base spells
		//
		{
			name: "Charge",
			id: 0,
			type: "spell", // all spells should have this type, to distinguish them from items
			class: "knight", // "knight", "mage", "archer", "item" or "enemy" - refers to the array this spell is in
			image: "assets/runes/knight/0.png",
			description: "Leap towards your mouse location.",
			difficulty: "Medium",
	
			func: function (caster, target) {
				let dist = Game.distance(caster, target);
				if (dist >= this.stats.range) {
					dist = this.stats.range;
				}
	
				let velocity = this.stats.velocity;
				let time = dist / velocity;
				let bear = Game.bearing(caster, target);
				caster.displace(0, velocity, time, bear); // start displacement

				// tbd stun (if they have the upgrade ofc)
			},
			
			// base stat values
			stats: {
				// the following stats are required for all spells
				channelTime: 0,
				manaCost: 10,
				cooldown: 10000,
				// the following stats are specific to this spell
				range: 500,
				velocity: 400,
			},

			upgrades: [
				{
					id: 0,
					name: "More range",
					statIncrease: ["range"],
					increaseAmount: [500],
					spellShardCost: 1,
					children: [
						{
							id: 2,
							name: "Stun",
							statIncrease: ["stunTime"], // needs to make the stat a thing, since it doesn't exist yet
							increaseAmount: [0.5],
							spellShardCost: 3,
							children: [
								{
									id: 3,
									name: "Wheeee",
									statIncrease: ["range", "cooldown"],
									increaseAmount: [1000, -2000],
									spellShardCost: 4,
									starNexusCost: 1, 
								}
							]
						}
					]
				},
				{
					id: 0,
					name: "Mana efficiency",
					statIncrease: ["manaCost"],
					increaseAmount: [-5],
					spellShardCost: 1,
					children: [
						{
							id: 1,
							name: "Speediness",
							statIncrease: ["velocity"],
							increaseAmount: [1200],
							spellShardCost: 8,
						}
					]
				},
			]
		},

		{
			name: "Parade",
			id: 1,
			type: "spell",
			class: "knight",
			image: "assets/runes/knight/1.png",
			description: "Gain bonus defence for a very short period of time.",
			difficulty: "Hard",
	
			func: function (caster, target) {
				Game.statusEffects.defence({
					target: caster,
					effectTitle: "Parade",
					defenceIncrease: this.stats.defenceMultiplier,
					time: this.stats.effectDuration,
				});
			},
			
			// base stat values
			stats: {
				// the following stats are required for all spells
				channelTime: 0,
				manaCost: 4,
				cooldown: 1500,
				// the following stats are specific to this spell
				defenceMultiplier: 200,
				effectDuration: 500,
			},
		},

		{
			name: "Seismic Wave",
			id: 2,
			type: "spell",
			class: "knight",
			image: "assets/runes/knight/2.png",
			description: "Deal attack damage to all enemies in the current location, and stun them.",
			difficulty: "Easy",
	
			func: function (caster) {
				for (let i = 0; i < Game.enemies.length; i++) {
					Game.enemies[i].takeDamage(caster.stats.damage * this.stats.damageMultiplier / 100);
					Game.statusEffects.stun({
						effectTitle: "Seismic Slam!",
						target: Game.enemies[i],
						time: this.stats.stunTime,
					});
				}
	
				Game.camera.initScreenShake(10,2500);
			},

			// base stat values
			stats: {
				// the following stats are required for all spells
				channelTime: 1000,
				manaCost: 15,
				cooldown: 10000,
				// the following stats are specific to this spell
				damageMultiplier: 150,
				stunTime: 3,
			},
		},
	],
	mage: [
		//
		// mage base spells
		//
		{
			name: "Arcane Aura",
			id: 0,
			type: "spell", // all spells should have this type, to distinguish them from items
			class: "mage", // "knight", "mage", "archer", "item" or "enemy" - refers to the array this spell is in
			image: "assets/runes/mage/0.png",
			description: "Can be toggled to deal a percentage of your maximum damage to nearby enemies every second, draining mana per second.",
			difficulty: "Medium",
	
			func: function (caster) {
				if (!caster.stats.arcaneAura) {
					// toggle on
					caster.stats.arcaneAura = true;
					caster.auraInterval = Game.setInterval(this.tickFunc.bind(this), 100, caster); // only works with hero currently
				}
				else {
					// toggle off
					caster.stats.arcaneAura = false;
					Game.clearInterval(caster.auraInterval);
				}
			},

			// called when the aura is active!
			// called every 100ms
			tickFunc: function (caster) {
				if (caster.mana >= this.stats.manaPerSecond * 0.1) {
					// remove mana
					caster.mana -= this.stats.manaPerSecond * 0.1;
					// damage all nearby enemies
					// (only works for player currently! can add an else statement if you want it to work with enemies)
					Game.damageableByPlayer.forEach(function (enemy) {
						if (Game.distance(caster, enemy) < caster.stats.range) {
							enemy.takeDamage(caster.stats.maxDamage * this.stats.damageMultiplier * 0.01 * 0.1);
						}
					});
				}
			},
			
			// base stat values
			stats: {
				// the following stats are required for all spells
				channelTime: 0,
				manaCost: 0,
				cooldown: 1000,
				// the following stats are specific to this spell
				manaPerSecond: 3,
				damageMultiplier: 25,
			},
		},
		{
			name: "Icebolt",
			id: 1,
			type: "spell", 
			class: "mage",
			image: "assets/runes/mage/1.png",
			description: "Launch an icicle towards your mouse pointer that deals a percentage of your maximum attack damage to the first target hit, also stunning them.",
			difficulty: "Hard",
	
			func: function (caster, target) {
				// summon icicle projectile
				// currently only works for hero; easily tweaked to change this
				Game.projectiles.push(new Projectile({
					map: map,
					x: caster.x,
					y: caster.y,
					stats: {
						damage: caster.stats.maxDamage * this.stats.damageMultiplier / 100,
						stun: this.stats.stunTime,
					},
					attacker: caster,
					targets: [Game.damageableByPlayer],
					image: "icebolt",
					moveDirection: Game.bearing(caster, target),
					stopMovingOnDamage: true,
					moveSpeed: 500,
					type: "projectiles",
				}));
			},
			
			// base stat values
			stats: {
				// the following stats are required for all spells
				channelTime: 400,
				manaCost: 5,
				cooldown: 2000,
				// the following stats are specific to this spell
				damageMultiplier: 150,
				stunTime: 1,
			},
		},
		{
			name: "Fireball",
			id: 2,
			type: "spell", 
			class: "mage",
			image: "assets/runes/mage/2.png",
			description: "Launch a huge fireball towards your mouse pointer that deals a percentage of your maximum attack damage to all targets hit, also setting them on fire.",
			difficulty: "Easy",
	
			func: function (caster, target) {
				// summon fireball projectile
				// currently only works for hero; easily tweaked to change this
				Game.projectiles.push(new Projectile({
					map: map,
					x: caster.x,
					y: caster.y,
					stats: {
						damage: caster.stats.maxDamage * this.stats.damageMultiplier / 100,
						flaming: this.stats.flaming,
					},
					attacker: caster,
					targets: [Game.damageableByPlayer],
					image: "fireBarrage",
					moveDirection: Game.bearing(caster, target),
					moveSpeed: 250,
					type: "projectiles",
					damageAllHit: true,
					transparency: 0.8,
				}));
			},
			
			// base stat values
			stats: {
				// the following stats are required for all spells
				channelTime: 1000,
				manaCost: 15,
				cooldown: 10000,
				// the following stats are specific to this spell
				damageMultiplier: 150,
				flaming: 1,
			},
		},
	],
	archer: [
		//
		// archer base spells
		//
		{
			name: "Arrowspeed",
			id: 0,
			type: "spell", // all spells should have this type, to distinguish them from items
			class: "archer", // "knight", "mage", "archer", "item" or "enemy" - refers to the array this spell is in
			image: "assets/runes/archer/0.png",
			description: "Increase your movement speed and attack damage for a brief period of time.",
			difficulty: "Easy",
	
			func: function (caster) {
				Game.statusEffects.walkSpeed({
					target: caster,
					effectTitle: "Arrowspeed!",
					speedIncrease: this.stats.movementMultiplier-100,
					time: this.stats.effectDuration/1000,
				});
				Game.statusEffects.attackDamage({
					target: caster,
					effectTitle: "Arrowspeed! (attack damage)",
					damageIncrease: this.stats.damageMultiplier-100,
					time: this.stats.effectDuration/1000,
					hidden: true,
				});
			},
			
			// base stat values
			stats: {
				// the following stats are required for all spells
				channelTime: 0,
				manaCost: 10,
				cooldown: 15000,
				// the following stats are specific to this spell
				damageMultiplier: 125,
				movementMultiplier: 200,
				effectDuration: 5000,
			},
		},
		{
			name: "Shadow Cloak",
			id: 1,
			type: "spell",
			class: "archer",
			image: "assets/runes/archer/1.png",
			description: "Gain stealth. Your next attack deals significantly increased damage.",
			difficulty: "Medium",
	
			func: function (caster) {
				Game.statusEffects.stealth({
					target: caster,
					effectTitle: "Shadow Cloaked",
				});
				Game.statusEffects.attackDamage({
					target: caster,
					effectTitle: "Shadow Strike",
					effectDescription: "Your next attack deals more damage.",
					damageIncrease: this.stats.damageMultiplier[properties.tier],
					removeOnAttack: true,
					hidden: true,
				});
			},
			
			// base stat values
			stats: {
				// the following stats are required for all spells
				channelTime: 1000,
				manaCost: 10,
				cooldown: 7000,
				// the following stats are specific to this spell
				damageMultiplier: 500,
			},
		},
		{
			name: "Bamboozle",
			id: 2,
			type: "spell", 
			class: "archer",
			image: "assets/runes/archer/2.png",
			description: "Your next attack swaps locations with the enemy hit and deals increased damage.",
			difficulty: "Hard",
	
			func: function (caster) {
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
						damageIncrease: this.stats.damageMultiplier,
						imageName: "bamboozle",
						removeOnAttack: true,
						hidden: true,
					});
				}
			},
			
			// base stat values
			stats: {
				// the following stats are required for all spells
				channelTime: 0,
				manaCost: 3,
				cooldown: 2000,
				// the following stats are specific to this spell
				damageMultiplier: 140,
			},
		},
	],
	transform: [
		// player transforms
		{
			name: "Pounce",
			id: 0,
			type: "spell", 
			class: "transform", 
			image: "assets/runes/knight/0.png", // tbd make a unique image for this?
			description: "Leap towards your mouse location.",
	
			func: function (caster, target) {
				let dist = Game.distance(caster, target);
				if (dist >= this.stats.range) {
					dist = this.stats.range;
				}
	
				let velocity = this.stats.velocity;
				let time = dist / velocity;
				let bear = Game.bearing(caster, target);
				caster.displace(0, velocity, time, bear); // start displacement

				// tbd stun?
			},
			
			// base stat values
			stats: {
				// the following stats are required for all spells
				channelTime: 0,
				manaCost: 4,
				cooldown: 1000,
				// the following stats are specific to this spell
				range: 150,
				velocity: 400,
			},
		},
	],
	item: [

	],
	enemy: [
		{
			name: "Unholy Strike",
			id: 0,
			type: "spell", // all spells should have this type, to distinguish them from items
			class: "enemy", // "knight", "mage", "archer", "item" or "enemy" - refers to the array this spell is in
			//image: "assets/runes/archer/0.png", // no image required currently
			description: "Stuns target.",

			func: function (caster, target) {
                Game.statusEffects.stun({
                    effectTitle: "Unholy Strike",
                    target: target,
                    time: this.stats.stunTime,
                });
			},

			targetRequired: true, // doesn't cast without a target

			// stat values
			// enemy spells only: values in an array are determined by the tier of the spell ( index 0 is tier 1 )
			// values not in an array remain constant for all tiers
			stats: {
				// the following stats are required for all spells
				channelTime: 1500,
				manaCost: 0,
				cooldown: 10000,
				// the following stats are specific to this spell
				stunTime: [3, 6],
			},
		},
		{
			name: "Sawblade",
			id: 1,
			type: "spell",
			class: "enemy", 
			description: "Sends out a sawblade projectile which stuns.",

			func: function (caster, target) {
                // summon projectile (note its image should have already been loaded in)
                Game.projectiles.push(new Projectile({
                    map: map,
                    x: caster.x,
                    y: caster.y,
                    stats: {
                        damage: 20,
                        stun: 3,
                    },
                    attacker: caster,
                    targets: [Game.allCharacters],
                    exceptTargets: [caster],
                    image: "sawblade",
                    moveDirection: Game.bearing(caster, target),
                    moveSpeed: 400,
                    doNotRotate: true,
                    damageAllHit: true,
                    type: "projectiles",
                    /*animation: {
                        type: "spritesheet",
                        frameTime: 200,
                        imagesPerRow: 3,
                        totalImages: 3,
                    },*/ // tbd add new image
                }));
			},

			targetRequired: true, // doesn't cast without a target

			// stat values
			// enemy spells only: values in an array are determined by the tier of the spell ( index 0 is tier 1 )
			// values not in an array remain constant for all tiers
			stats: {
				// the following stats are required for all spells
				channelTime: 2000,
				manaCost: 0,
				cooldown: 7000,
				// the following stats are specific to this spell
			},
		},
		{
			name: "Animate",
			id: 2,
			type: "spell",
			class: "enemy", 
			description: "Summons enemies.",

			// properties should contain:
			// number (number to be animated)
			// location (array of objects with x y width and height of possible spawn areas) - random object and location in object is picked for each
			// all properties of animation (properties is passed into the Enemy constructor!)
			func: function (caster, target, properties) {
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

			// stat values
			// enemy spells only: values in an array are determined by the tier of the spell ( index 0 is tier 1 )
			// values not in an array remain constant for all tiers
			stats: {
				// the following stats are required for all spells
				channelTime: 2000,
				manaCost: 0,
				cooldown: 17000,
				// the following stats are specific to this spell
			},
		},
		{
			name: "Lightning",
			id: 3,
			type: "spell",
			class: "enemy", 
            description: "Strikes an enemy with lightning, setting them on fire and stunning them!",

			func: function (caster, target) {
                Weather.commenceLightningStrike();
                // status effects
                Game.statusEffects.fire({
                    target: target,
                    tier: 1,
                });
                Game.statusEffects.stun({
                    target: target,
                    time: 1,
				});
			},

			targetRequired: true, // doesn't cast without a target

			// stat values
			// enemy spells only: values in an array are determined by the tier of the spell ( index 0 is tier 1 )
			// values not in an array remain constant for all tiers
			stats: {
				// the following stats are required for all spells
				channelTime: 1000,
				manaCost: 0,
				cooldown: 9000,
				// the following stats are specific to this spell
			},
		},
		{
			name: "Aeromancy",
			id: 4,
			type: "spell",
			class: "enemy", 
            description: "Harnesses the power of the wind!",

            // properties should contain:
                // speed (of wind movement)
                // direction (of wind movement)
                // time (for wind to last for)
			func: function (caster, target, properties) {
                let movex = Math.cos(properties.direction) * properties.speed;
                let movey = Math.sin(properties.direction) * properties.speed;

                Game.wind = {};
                Game.wind.movex = movex;
                Game.wind.movey = movey;

                Game.setTimeout(function () {
                    Game.wind = undefined;
                }, properties.time)
			},

			// stat values
			// enemy spells only: values in an array are determined by the tier of the spell ( index 0 is tier 1 )
			// values not in an array remain constant for all tiers
			stats: {
				// the following stats are required for all spells
				channelTime: 2000,
				manaCost: 0,
				cooldown: 40000,
				// the following stats are specific to this spell
			},
		},
		{
			name: "Hippity Hop",
			id: 5,
			type: "spell",
			class: "enemy", 
            description: "Ribbit",

			func: function (caster, target) {
                let velocity = this.stats.velocity;
                let dist = Math.min(Game.distance(caster, target), this.stats.distance);
                let time = dist / velocity;
                let bear = Game.bearing(caster, target);
                caster.displace(0, velocity, time, bear); // start displacement
			},

			targetRequired: true, // doesn't cast without a target

			// stat values
			// enemy spells only: values in an array are determined by the tier of the spell ( index 0 is tier 1 )
			// values not in an array remain constant for all tiers
			stats: { // depend on tier - the tier 2 ones are used by giant toad in the frog queen base!
				// the following stats are required for all spells
				channelTime: [500, 1250],
				manaCost: 0,
				cooldown: [1000, 2500],
				// the following stats are specific to this spell
				velocity: [500, 1000],
				distance: [120, 380],
			},
		},
        {
            name: "Telepathic Link",
            id: 6,
			type: "spell",
			class: "enemy", 
            description: "",

            // properties should contain tier (as int value), caster, target
            func: function (caster, target) {
                caster.x = target.x;
                caster.y = target.y;
                Dom.chat.insert(Dom.chat.say(caster.name, "<i>This</i> telepathic link <b>will</b> hurt.")); // zararanath
            },

			targetRequired: true, // doesn't cast without a target

            stats: {
				// the following stats are required for all spells
				channelTime: 1600,
				manaCost: 0,
				cooldown: 1000,
			},
        },
        {
            name: "Seek Prey",
            id: 7,
			type: "spell",
			class: "enemy", 
            description: "Jaws",

            // properties should contain tier (as int value), caster, target
            func: function (caster, target) {

				let projectileSpeed = 150; // default
	
				if (caster.hasStatusEffect("Empowered")) {
					projectileSpeed *= 1.6;
				}
	
				Game.projectiles.push(new Projectile({
					map: map,
					x: caster.x,
					y: caster.y,
					attacker: caster,
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
					targets: [[target]],
					image: "jaws",
					crop: {
						x: 47,
						y: 42,
						width: 61,
						height: 66,
					},
					moveDirection: Game.bearing(caster, target),
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

			targetRequired: true, // doesn't cast without a target

            stats: {
				// the following stats are required for all spells
				channelTime: 1000,
				manaCost: 0,
				cooldown: 5000,
			},
        },
        {
            name: "Mend Pets",
            id: 8,
			type: "spell",
			class: "enemy", 
            description: "Health is good",

            func: function (caster, target, properties) {
				for (let i = 0; i < properties.pets.length; i++) {
					Game.restoreHealth(properties.pets[i], this.stats.healthRestored);
	
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

            stats: {
				// the following stats are required for all spells
				channelTime: 4000,
				manaCost: 0,
				cooldown: 13000,
				// optional stats
				healthRestored: 25,
			},
        },
        {
            name: "Empower Pets",
            id: 9,
			type: "spell",
			class: "enemy", 
            description: "",

            func: function (caster, target, properties) {
				for (let i = 0; i < properties.pets.length; i++) {
					Game.statusEffects.attackDamage({
						target: properties.pets[i],
						effectTitle: "Empowered",
						damageIncrease: this.stats.damageIncrease,
						time: this.stats.duration,
					});
	
					properties.pets[i].addTrail("empowered", {
						width: 3,
						colour: ["#cc0404"],
						removeIn: 1000,
						variance: 50,
						intensity: 2,
						duration: this.stats.duration,
					});
				}
			},

            stats: {
				// the following stats are required for all spells
				channelTime: 4000,
				manaCost: 0,
				cooldown: 13000,
				// optional stats
				initialCooldown: 6000,
				damageIncrease: 50,
				duration: 6
			},
        },
        {
            name: "Bees!!!!!!!!",
            id: 10,
			type: "spell",
			class: "enemy", 
            description: "",

            func: function (caster) {
				// summon projectile (note its image should have already been loaded in)
				for (let i = 0; i < this.stats.numberSummoned; i++) {
					let x = caster.x + Random(-75, 75);
					let y = caster.y + Random(-75, 75);
					let preparedEnemy = Game.prepareNPC({
						x: x,
						y: y,
						template: EnemyTemplates.eaglecrest.bumblebee,
					}, "enemies");
					Game.enemies.push(new Enemy(preparedEnemy));
				}
			},

			targetRequired: true, // doesn't cast without a target

            stats: {
				// the following stats are required for all spells
				channelTime: 0,
				manaCost: 0,
				cooldown: 2000,
				// optional stats
				numberSummoned: [3, 5], // depends on tier
			},
        },
        {
            name: "Goblin Reinforcements",
            id: 11,
			type: "spell",
			class: "enemy", 
            description: "",

            func: function (caster) {
				// summon projectile (note its image should have already been loaded in)
				for (let i = 0; i < this.stats.numberSummoned; i++) {
					Game.setTimeout(function () {
						let template;
						if (Random(0,1) === 1) {
							template = "goblinCrusader";
						}
						else {
							template = "goblinTowerkeeper";
						}
	
						let preparedEnemy = Game.prepareNPC({
							//x: 90,
							//y: 560,
							x: 15,
							y: 520,
							template: EnemyTemplates.nilbog[template],
							/*moveTowards: { // walk up stairs
								x: 15,
								y: 520,
								speedScalar: 0.6,
							},*/
							attackBehaviour: {
								baseAggro: 100, // always aggroed on player
							},
							respawnOnDeath: false,
						}, "enemies");
						Game.enemies.push(new Enemy(preparedEnemy));
					}, this.stats.timeSpacing * i);
				}
			},

            stats: {
				// the following stats are required for all spells
				channelTime: 3000,
				manaCost: 0,
				cooldown: 5000,
				// optional stats
				numberSummoned: [2, 4], // depends on tier
				timeSpacing: [3000, 2000]
			},
        },
		{
			name: "Hop",
			id: 12,
			type: "spell",
			class: "enemy", // katydids (leaf locusts) etc

			func: function (caster, target) {
                let velocity = this.stats.velocity;
                let dist = Math.min(Game.distance(caster, target), this.stats.distance);
                let time = dist / velocity;
                let bear = Game.bearing(caster, target);
                caster.displace(0, velocity, time, bear); // start displacement
			},

			targetRequired: true, // doesn't cast without a target

			// stat values
			// enemy spells only: values in an array are determined by the tier of the spell ( index 0 is tier 1 )
			// values not in an array remain constant for all tiers
			stats: {
				// the following stats are required for all spells
				channelTime: 0,
				manaCost: 0,
				cooldown: 400,
				// the following stats are specific to this spell
				velocity: 500,
				distance: 30
			},
		},
        {
            name: "Regeneration",
            id: 13,
			type: "spell",
			class: "enemy", 
            description: "Self-healing",

            func: function (caster) {
				Game.restoreHealth(caster, this.stats.healthRestored);

				properties.pets[i].addTrail("mended", {
					width: 3,
					colour: ["#2CE831"],
					removeIn: 500,
					variance: 50,
					intensity: 4,
					duration: 2.5,
				});
			},

            stats: {
				// the following stats are required for all spells
				channelTime: 2000,
				manaCost: 0,
				cooldown: 9000,
				// optional stats
				healthRestored: 25,
			},
        },
	
	],
}

var SpellsOld = [
	//
	// Knight tier 1
	//

	{
		name: "Heroic Charge",
		id: 0,
		image: "assets/runes/0.png",
		imageIconNum: 0,
		class: "k",
		description: ["", "Leap towards your mouse location, up to 500 pixels."],
		difficulty: "Medium",

		// properties should contain tier (as int value), caster, target
		func: function (properties) {
			let dist = Game.distance(caster, target);
			if (dist >= Spells[0].range[properties.tier]) {
				dist = Spells[0].range[properties.tier];
			}

			let velocity = Spells[0].velocity[properties.tier];
			let time = dist / velocity;
			let bear = Game.bearing(caster, target);
			caster.displace(0, velocity, time, bear); // start displacement
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
		image: "assets/runes/1.png",
		imageIconNum: 1,
		class: "k",
		description: ["", "Gain +200% defence for 0.5 seconds."],
		difficulty: "Hard",

		// properties should contain tier (as int value), caster
		func: function (properties) {
			Game.statusEffects.defence({
				target: caster,
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
		image: "assets/runes/2.png",
		imageIconNum: 2,
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
		image: "assets/runes/3.png",
		imageIconNum: 3,
		class: "m",
		description: ["", "Can be toggled to deal 25% of your maximum damage to nearby enemies every second, draining 3 mana per second."],
		difficulty: "Easy",

		// properties should contain tier (as int value), caster, target
		func: function (properties) {
			if (!caster.stats.arcaneAura) {
				// toggle on
				caster.stats.arcaneAura = true;
				Game.hero.auraInterval = Game.setInterval(Spells[3].tickFunc, 100, properties); // only works with hero currently
			}
			else {
				// toggle off
				caster.stats.arcaneAura = false;
				Game.clearInterval(Game.hero.auraInterval);
			}
		},

		// called when the aura is active!
		// called every 100ms
		// same params as func
		tickFunc: function (properties) {
			if (caster.mana >= Spells[3].manaPerSecond[properties.tier] * 0.1) {
				// remove mana
				caster.mana -= Spells[3].manaPerSecond[properties.tier] * 0.1;
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
		image: "assets/runes/4.png",
		imageIconNum: 4,
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
				attacker: caster,
				targets: [Game.damageableByPlayer],
				image: "icebolt",
				moveDirection: Game.bearing(caster, target),
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
		image: "assets/runes/5.png",
		imageIconNum: 5,
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
				attacker: caster,
				targets: [Game.damageableByPlayer],
				image: "fireBarrage",
				moveDirection: Game.bearing(caster, target),
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
		image: "assets/runes/6.png",
		imageIconNum: 6,
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
		image: "assets/runes/7.png",
		imageIconNum: 7,
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
		image: "assets/runes/8.png",
		imageIconNum: 8,
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
				target: target,
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
				x: caster.x,
				y: caster.y,
				stats: {
					damage: 20,
					stun: 3,
				},
				attacker: caster,
				targets: [Game.allCharacters],
				exceptTargets: [caster],
				image: "sawblade",
				moveDirection: Game.bearing(caster, target),
				moveSpeed: 400,
				doNotRotate: true,
				damageAllHit: true,
				type: "projectiles",
				/*animation: {
					type: "spritesheet",
					frameTime: 200,
					imagesPerRow: 3,
					totalImages: 3,
				},*/ // tbd add new image
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
				target: target,
				tier: 1,
			});
			Game.statusEffects.stun({
				target: target,
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
            let dist = Math.min(Game.distance(caster, target), Spells[14].distance[properties.tier]);
            let time = dist / velocity;
            let bear = Game.bearing(caster, target);
            caster.displace(0, velocity, time, bear); // start displacement
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
			caster.x = target.x;
			caster.y = target.y;
			Dom.chat.insert(Dom.chat.say(caster.name, "<i>This</i> telepathic link <b>will</b> hurt.")); // zararanath
        },

        channelTime: [
            0,
            1600,    // tier 1
        ],
    },

	{
		name: "Pounce",
		id: 17,
		image: "assets/runes/0.png", // tbd make a unique image for this?
		imageIconNum: 0,
		class: "cat",
		description: ["", "Leap towards your mouse location, up to 150 pixels."],

		// properties should contain tier (as int value), caster, target
		func: function (properties) {
			let dist = Game.distance(caster, target);
			if (dist >= Spells[17].range[properties.tier]) {
				dist = Spells[17].range[properties.tier];
			}

			let velocity = Spells[17].velocity[properties.tier];
			let time = dist / velocity;
			let bear = Game.bearing(caster, target);
			caster.displace(0, velocity, time, bear); // start displacement
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
				target: Game.target,
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

			if (caster.hasStatusEffect("Empowered")) {
				projectileSpeed *= 1.6;
			}

			Game.projectiles.push(new Projectile({
				map: map,
				x: caster.x,
				y: caster.y,
				attacker: caster,
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
				targets: [[target]],
				image: "jaws",
				crop: {
					x: 47,
					y: 42,
					width: 61,
					height: 66,
				},
				moveDirection: Game.bearing(caster, target),
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
				let x = caster.x + Random(-75, 75);
				let y = caster.y + Random(-75, 75);
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
						//x: 90,
						//y: 560,
						x: 15,
						y: 520,
						template: EnemyTemplates.nilbog[template],
						/*moveTowards: { // walk up stairs
							x: 15,
							y: 520,
							speedScalar: 0.6,
						},*/
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
		image: "assets/runes/6.png", // tbd
		imageIconNum: 6, // tbd
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

	/*{
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
				crop: Game.heroProjectileInfo.crop,
				animation: Game.heroProjectileInfo.animation,
				frameTime: Game.heroProjectileInfo.frameTime,
				stayOnScreen: Game.heroProjectileInfo.stayOnScreen, // set to the time it stays on the screen for (default 1500) or true if never removed
				//doNotRotate: Game.heroProjectileInfo.doNotRotate, // aaaaaaaaaaaaaa readd but just as a visual thing - not affecting the projectile's direction as it would because this is needed for variance
				onInteract: Game.heroProjectileInfo.onInteract,
				z: Game.heroProjectileInfo.z,
			}));
		}
	},*/

	{
		name: "Splish Splash",
		id: 25,
		class: "m",

		// properties should contain tier (as int value), caster, target
		func: function (properties) {
			let numOfProjectiles = Spells[25].numOfProjectiles[properties.tier];
			let radianIncrement = Math.PI*2 / numOfProjectiles;
			for(let direction = 0; direction < Math.PI*2; direction += radianIncrement) {
				Game.projectiles.push(new Projectile({
					map: map,
					x: caster.x,
					y: caster.y,
					stats: {
						damage: Spells[25].damage[properties.tier],
						slowAmount: 65,
						slowTime: 10,
					},
					attacker: caster,
					targets: [target],
					image: "waterball",
					moveDirection: direction,
					stopMovingOnDamage: true,
					moveSpeed: 400,
					type: "projectiles",
				}));
			}
		},

		channelTime: [
			0,
			5000,	// tier 1
		],

		damage: [
			0,
			25,	// tier 1
		],

		numOfProjectiles: [
			0,
			18, // tier 1
		]
	},



	{
		name: "Sink",
		id: 26,
		// for foxglove

		// properties should contain tier (as int value), caster, target
		func: function (properties) {
			let boss = caster;

			//boss.setImage("foxgloveSunken");
			boss.transform({
				image: foxgloveSunken,
				stats: {
					doesNotAttack: true,
					dodgeChance: 100,
				},
			});

			Game.setTimeout(boss.untransform.bind(boss), Spells[26].beDuration[properties.tier]);
			// also needs to remove player status effects and delete hands !!!!!!!!! and reset flowersToCollect !!!!

			// summon foxglove's hands
			let preparedEnemy = Game.prepareNPC({
				x: boss.x + 40,
				y: boss.y,
				template: EnemyTemplates.eaglecrest.foxgloveHand,
			}, "enemies");
			Game.enemies.push(new Enemy(preparedEnemy));

			let preparedEnemy2 = Game.prepareNPC({
				x: boss.x - 40,
				y: boss.y,
				template: EnemyTemplates.eaglecrest.foxgloveHand,
			}, "enemies");
			Game.enemies.push(new Enemy(preparedEnemy2));

			// give hero status effects of flowers to collect
			let flowers = [];
			boss.flowersToCollect = [];
			for (let i = 0; i < 3; i++) {
				let flowerId = flowers[Random(0, flowers.length-1)];
				Game.statusEffects.generic({
					target: Game.hero,
					effectTitle: "Flower to Collect " + i,
					effectDescription: "Collect the three flowers to deal damage to Foxglove!",
					imageName: "flower"+flowersId,
				});
				boss.flowersToCollect.push(flowerId);
			}
		},

		channelTime: [
			0,
			5000,	// tier 1
		],

		sinkDuraction: [
			0,
			30000
		]
	},
//vomer attack
	{
				name: "Vomer Bite",
				id: 27,
				class: "k",
				description: "Jaws",
				enemyOnly: true, // coyote hiyote

				// properties should contain caster, target
		func: function (properties) {
			let projectileSpeed = 250; // default

			Game.projectiles.push(new Projectile({
				map: map,
				x: caster.x,
				y: caster.y,
				attacker: caster,
				stats: {
					damage: 8,
					stun: 1.5,
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
				targets: [[target]],
				image: "jaws",
				crop: {
					x: 47,
					y: 42,
					width: 61,
					height: 66,
				},
				moveTowards: target,
				moveSpeed: projectileSpeed,
				type: "projectiles",
				animation: {
					type: "spritesheet",
					imagesPerRow: 3,
					frameTime: 50,
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



	// testing spell !!
	{
		name: "OP Arrowspeed (dev spell)",
		id: 28,
		image: "assets/runes/6.png",
		imageIconNum: 6,
		class: "a",
		description: ["", "Increase your movement speed by 150% and attack damage by 500% for 10 seconds."],
		difficulty: "Easy",

		// properties should contain tier (as int value), caster
		func: function (properties) {
			Game.statusEffects.walkSpeed({
				target: Game.hero,
				effectTitle: "Arrowspeed!",
				speedIncrease: Spells[27].movementMultiplier[properties.tier],
				time: Spells[27].length[properties.tier],
			});
			Game.statusEffects.attackDamage({
				target: Game.hero,
				effectTitle: "Arrowspeed! (attack damage)",
				damageIncrease: Spells[27].damageMultiplier[properties.tier],
				time: Spells[27].length[properties.tier],
				hidden: true,
			});
		},

		channelTime: [
			0,
			0,	// tier 1
		],

		movementMultiplier: [
			0,
			150,		// tier 1
		],

		damageMultiplier: [
			0,
			500,		// tier 1
		],

		length: [
			0,
			10,		// tier 1
		],

		manaCost: [
			0,
			1,		// tier 1
		],

		cooldown: [
			0,
			5000,	// tier 1
		],
	},

	// cave unidentified item active abilities
	{
		name: "Eternal Bell Ring", // thlock's helm
		id: 29,
		image: "assets/items/helm/32.png",
		imageIconNum: 9,
		class: "helm",
		description: ["", "Stun all enemies within 2 tiles from you for 4 seconds."],

		// properties should contain tier (as int value), caster (tho caster is presumed to be hero)
		func: function (properties) {
			for (let i = 0; i < Game.enemies.length; i++) {
				if (Game.distance(Game.enemies[i], caster) <= 120) {
					Game.statusEffects.stun({
						target: this,
						time: Spells[28].stunLength[properties.tier],
						effectTitle: "Eternal Bell Ring",
						effectDescription: "Stunned",
					});
				}
			}
		},

		channelTime: [
			0,
			500,	// tier 1
		],

		stunLength: [
			0,
			4,		// tier 1
		],

		manaCost: [
			0,
			0,		// tier 1
		],

		cooldown: [
			0,
			20000,	// tier 1
		],
	},
	{
		name: "Seeking Eye", // soulcrusher's chestplate
		id: 30,
		image: "assets/items/chest/20.png",
		imageIconNum: 10,
		class: "chest",
		description: ["", "In 3 seconds, fire a projectile dealing damage equal to 50% of your damage taken over that period."],

		// properties should contain tier (as int value), caster (tho caster is presumed to be hero)
		func: function (properties) {
			for (let i = 0; i < Game.enemies.length; i++) {
				if (Game.distance(Game.enemies[i], caster) <= 120) {
					Game.statusEffects.stun({
						target: this,
						time: Spells[28].stunLength[properties.tier],
						effectTitle: "Eternal Bell Ring",
						effectDescription: "Stunned",
					});
				}
			}
		},

		channelTime: [
			0,
			0,		// tier 1
		],

		manaCost: [
			0,
			0,		// tier 1
		],

		cooldown: [
			0,
			10000,	// tier 1
		],
	},
	{
		name: "tbd", // sciron's greaves
		id: 31,
		image: "assets/items/greaves/19.png",
		imageIconNum: 11,
		class: "greaves",
		description: ["", "tbd"],

		// properties should contain tier (as int value), caster (tho caster is presumed to be hero)
		func: function (properties) {
		},

		channelTime: [
			0,
			0,		// tier 1
		],

		manaCost: [
			0,
			0,		// tier 1
		],

		cooldown: [
			0,
			10000,	// tier 1
		],
	},
	{
		name: "tbd", // behemoth's crushers
		id: 32,
		image: "assets/items/boots/22.png",
		imageIconNum: 12,
		class: "boots",
		description: ["", "tbd"],

		// properties should contain tier (as int value), caster (tho caster is presumed to be hero)
		func: function (properties) {
		},

		channelTime: [
			0,
			0,		// tier 1
		],

		manaCost: [
			0,
			0,		// tier 1
		],

		cooldown: [
			0,
			10000,	// tier 1
		],
	},
	{
		name: "tbd", // orzoth set
		id: 33,
		image: "assets/items/chest/20.png",//tbd
		imageIconNum: 13,
		class: "set",
		description: ["", "tbd."],

		// properties should contain tier (as int value), caster (tho caster is presumed to be hero)
		func: function (properties) {
		},

		channelTime: [
			0,
			0,		// tier 1
		],

		manaCost: [
			0,
			0,		// tier 1
		],

		cooldown: [
			0,
			10000,	// tier 1
		],
	},
	{
		name: "BOOM!!!", // demolitionist darrow
		id: 34,
		class: "mage",
		description: ["", "Fill the area with dynamite!"],
		enemyOnly: true,
		
		// properties should contain tier (as int value), caster (tho caster is presumed to be hero)
		func: function (properties) {
			for (let i = 0; i < Spells[34].dynamiteNumber[properties.tier]; i++) {
				let range = Spells[34].range[properties.tier];
				let x = caster.x + Random(-range, range);
				let y = caster.y + Random(-range, range);
				ItemFunctions.placeDynamite(x, y, caster, 10, 1);
			}
		},

		channelTime: [
			0,
			1000,	// tier 1
			2000,	// tier 2
			3000,	// tier 3
		],

		range: [
			0,
			300,	// tier 1
			300,	// tier 2
			300,	// tier 3
		],

		dynamiteNumber: [
			0,
			3,		// tier 1
			7,		// tier 2
			13,		// tier 3
		],
	},
	{
		name: "Charge", 
		id: 35,
		class: "knight",
		enemyOnly: true, // bee
		//description: ["", ""],

		func: function (properties) {
			caster.moveTowards = {
				x: target.x,
				y: target.y,
				speedScalar: Spells[34].moveSpeedMultipler[properties.tier],
				continueUntilCollide: true,
			}
		},

		range: [
			0,
			500,	// tier 1
		],

		moveSpeedMultipler: [
			0,
			50,	// tier 1
		],

		channelTime: [
			0,
			1000,	// tier 1
		],

	},
];
