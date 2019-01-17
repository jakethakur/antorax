"use strict";

//
// Realms of Antorax canvas code
// Jake Thakur 2018
//

// https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps

//
// Game object
//

var Game = {
	// function objects
	statusEffects: {},
	spells: {},
	secondary: {},
	
	displayedStats: 0, // number of stats displayed at the top left
};
Game.canvas = document.getElementById("game");
Game.secondary.canvas = document.getElementById("secondary");
Game.canvasLight = document.getElementById("light");
Game.canvasDayNight = document.getElementById("dayNight");

// run game
Game.run = function (context, contextSecondary, contextDayNight, contextLight) {
    this.ctx = context;
	this.ctxDayNight = contextDayNight;
	this.ctxLight = contextLight;
	
    this.secondary.ctx = contextSecondary;
	
    this._previousElapsed = 0;
	
	// projectile name for hero (for use with projectile image loading)
	this.heroProjectileName = Skins[Player.class][Player.skin].projectile;
	this.heroProjectileAdjust = Skins[Player.class][Player.skin].projectileAdjust;
	this.heroBobberName = "bobber";

    this.loadArea(Player.areaName, {x: Player.x, y: Player.y});
};

// calculate current tick length and update/render canvas accordingly
Game.tick = function (elapsed) {
    window.requestAnimationFrame(this.tick);

    // clear previous frame
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctxLight.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // compute delta time in seconds -- also cap it
    var delta = (elapsed - this._previousElapsed) / 1000.0;
    delta = Math.min(delta, 0.25); // maximum delta of 250 ms
    this._previousElapsed = elapsed;
	
	
	this.update(delta); //update game state
	this.render(delta); //render game display
	
	
	// reset text formatting
	this.resetFormatting();
	
	// display delta time (debug)
	//this.ctx.fillText("delta: " + Math.round(delta * 1000) / 1000, 10, 30);
}.bind(Game);

//
// Start up function
//

window.onload = function () {
    let context = Game.canvas.getContext('2d');
	let contextSecondary = Game.secondary.canvas.getContext('2d');
	let contextDayNight = Game.canvasDayNight.getContext('2d');
	let contextLight = Game.canvasLight.getContext('2d');
    Game.run(context, contextSecondary, contextDayNight, contextLight);
};

//
// Map
//

var map = {
    getTile: function (layer, col, row) {
        return this.layers[layer][row * map.cols + col];
    },
    isSolidTileAtXY: function (x, y) {
        var col = Math.floor(x / this.tsize);
        var row = Math.floor(y / this.tsize);

        // loop through all layers and return TRUE if any tile is solid
        return this.layers.reduce(function (res, layer, index) { // idk what res is TBD find out
            var tile = this.getTile(index, col, row);
			var isSolid = false;
			if (typeof this.solidTiles !== "undefined") { // check that this map contains solidTiles
				this.solidTiles.forEach( function(element) {
					if (tile === element) {
						isSolid = true;
					}
				} );
			}
            return res || isSolid;
        }.bind(this), false);
    },
    getCol: function (x) {
        return Math.floor(x / this.tsize);
    },
    getRow: function (y) {
        return Math.floor(y / this.tsize);
    },
    getX: function (col) {
        return col * this.tsize;
    },
    getY: function (row) {
        return row * this.tsize;
    },
	isSlowTileAtXY: function (x, y) {
        var col = Math.floor(x / this.tsize);
        var row = Math.floor(y / this.tsize);

        // check first layer only and return TRUE if any tile is a slowing tile
        var tile = this.getTile(0, col, row);
		var isSlow = null;
		if (typeof this.waterTiles !== "undefined") { // check that this map contains waterTiles
			this.waterTiles.forEach( function(element) {
				if (tile === element) {
					isSlow = "water";
					return isSlow;
				}
			} );
		}
		if (typeof this.mudTiles !== "undefined") { // check that this map contains mudTiles
			this.mudTiles.forEach( function(element) {
				if (tile === element) {
					isSlow = "mud";
					return isSlow;
				}
			} );
		}
		if (typeof this.iceTiles !== "undefined") { // check that this map contains iceTiles
			this.iceTiles.forEach( function(element) {
				if (tile === element) {
					isSlow = "ice";
					return isSlow;
				}
			} );
		}
		if (typeof this.pathTiles !== "undefined") { // check that this map contains pathTiles
			this.pathTiles.forEach( function(element) {
				if (tile === element) {
					isSlow = "path";
					return isSlow;
				}
			} );
		}
		return isSlow;
	},
	setTile: function (layer, col, row, newTileNum) {
        this.layers[layer][row * map.cols + col] = newTileNum;
    },
};

//
// Camera
//

function Camera(map, width, height) {
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.maxX = map.cols * map.tsize - width;
    this.maxY = map.rows * map.tsize - height;
}

Camera.prototype.follow = function (sprite) {
    this.following = sprite;
    sprite.screenX = 0;
    sprite.screenY = 0;
};

Camera.prototype.update = function () {
    // assume followed sprite should be placed at the center of the screen whenever possible
    this.following.screenX = this.width / 2;
    this.following.screenY = this.height / 2;
	
	// distance moved by caera in both directions (for weather to be moved by)
	// calculated by difference in old x/y and new x/y
	let movedX = this.x;
	let movedY = this.y;

    // make the camera follow the sprite
    this.x = this.following.x - this.width / 2;
    this.y = this.following.y - this.height / 2;
    // clamp values
    this.x = Math.max(0, Math.min(this.x, this.maxX));
    this.y = Math.max(0, Math.min(this.y, this.maxY));

    // in map corners, the sprite cannot be placed in the center of the screen and we have to change its screen coordinates

    // left and right sides
    if (this.following.x < this.width / 2 ||
        this.following.x > this.maxX + this.width / 2) {
        this.following.screenX = this.following.x - this.x;
    }
    // top and bottom sides
    if (this.following.y < this.height / 2 ||
        this.following.y > this.maxY + this.height / 2) {
        this.following.screenY = this.following.y - this.y;
    }
	
	// movedX and movedY are the old position values
	movedX = this.x - movedX;
	movedY = this.y - movedY;
	// move weather!
	if (document.getElementById("weatherOn").checked && !Areas[Game.areaName].indoors) {
		if (Weather.weatherType !== "clear") {
			Weather.move(movedX, movedY);
		}
	}
};

// check if object is displayed on the screen
// if mode is "hitbox", it is checked if the hitbox is on the screen instead of the image (for hitbox rendering)
Camera.prototype.isOnScreen = function (object, mode) {
	if (mode === "hitbox" && object.hitbox !== undefined) {
		// hitbox mode
		if (object.hitbox.x + object.hitbox.width / 2 > this.x && object.hitbox.y + object.hitbox.height / 2 > this.y) { // object's x and y are big enough
			if (object.hitbox.x - object.hitbox.width / 2 < this.x + 600 && object.hitbox.y - object.hitbox.height / 2 < this.y + 600) { // object's x and y are also small enough
				return true;
			}
		}
	}
	else {
		// image mode
		if (object.x + object.width / 2 > this.x && object.y + object.height / 2 > this.y) { // object's x and y are big enough
			if (object.x - object.width / 2 < this.x + 600 && object.y - object.height / 2 < this.y + 600) { // object's x and y are also small enough
				return true;
			}
		}
	}
	return false;
}

//
// Global functions
// (maybe these shouldn't be global?)
//

// find bearing between two entities (with x and y)
// returns answer in radians
function bearing (obj1, obj2) {
	let bearing = Math.atan2(obj2.y - obj1.y, obj2.x - obj1.x);
	return bearing;
}

// find distance between two entities (with x and y) - pythagoras' theorem
function distance (obj1, obj2) {
	return Math.sqrt((obj1.x - obj2.x) * (obj1.x - obj2.x) + (obj1.y - obj2.y) * (obj1.y - obj2.y));
}

// search for an entity with a specific id (first param) within an array (second param)
// returns the array index of the first found item of the array with that id
// only works for projectiles as of 01/07/18 (they're the only entities with ids)
Game.searchFor = function (id, array) {
	let index = array.findIndex(element => element.id === id);
	if (index >= 0) {
		return index;
	}
	else {
		console.error("The requested item of id " + id + " could not be found in the following array: ", array);
		return null;
	}
}

// checks if an NPC can be shown (from their canBeShown function)
Game.canBeShown = function (NPC) {
	let show = true;
	if (NPC.canBeShown !== undefined) {
		if (!NPC.canBeShown()) {
			show = false;
		}
	}
	return show;
}

// checks if two objects are within a certain range of each other
Game.areNearby = function (obj1, obj2, range) {
	let distanceValue = distance(obj1, obj2);
	if (distanceValue <= range) {
		return true;
	}
	else {
		return false;
	}
}

// find the closest character in an array (objArray) to another character (mainObj)
Game.closest = function (objArray, mainObj) {
	let closestDistance = Infinity;
	let closestIndex = -1;
	objArray.forEach((obj, index) => {
		let distanceTo = distance(mainObj, obj);
		if (distanceTo < closestDistance) {
			closestIndex = index;
			closestDistance = distanceTo;
		}
	});
	return objArray[closestIndex];
}

// insert a message into the chat, under the format of "name: message"
// name is emboldened via <strong> tags
// if message is an array, a Random message from the array will be chosen
// if message begins with "/me " (including space), the format changes to "this.name message"
// if singleUse is true, and if Dom.chat.contents contains message, the message is not sent (handled by Dom.chat.insert)
// if important is true, the chat message triggers a red flashing prompt around the chat bookmark
Game.sayChat = function (name, message, singleUse, delay, important) {
	if (message !== undefined) {
		if (message.constructor === Array) {
			// if message is array, pick a Random message from the array
			message = message[Random(0, message.length - 1)];
		}
		if (message.substring(0, 4) === "/me ") { // reflexive message
			message = message.substr(4, message.length);
			Dom.chat.insert("<strong>" + name + "</strong> " + message, delay, important, singleUse);
		}
		else {
			Dom.chat.insert("<strong>" + name + "</strong>: " + message, delay, important, singleUse);
		}
	}
	else {
		console.warn("undefined chat message for " + name);
	}
}

//
// Base Classes (sole role is inheritance)
//

// an unseen object - takes up space but can't be seen
class Entity {
	constructor(properties) {
		this.map = properties.map;
		this.x = properties.x;
		this.y = properties.y;
		this.width = properties.width;
		this.height = properties.height;
		
		this.type = properties.type; // array the NPC is in (for choose DOM)
		if (this.type !== undefined) {
			this.id = Game[this.type].length; // array index the NPC is in (for choose DOM)
		}
		
		this.collisionType = properties.collisionType || "body"; // "feet" = check collision with Game.heroFootHitbox
		// collision type currently only applies to tripwires
		
		// onLoad function
		this.onLoad = properties.onLoad;
		if (this.onLoad !== undefined) {
			this.onLoad();
		}
	}
	
	isTouching (object) {
		/*if (this.rotate !== undefined || object.rotate !== undefined) {
			// involves rotated hitboxes
		}
		potentially useful: https://gamedev.stackexchange.com/a/86784/119033
		https://stackoverflow.com/a/12414951/9713957
		https://yal.cc/rot-rect-vs-circle-intersection/
		*/
		
		// make a copy of the two things to check collision on
		let object1 = object;
		let object2 = this;
		
		// check that the objects do not have their own special hitbox
		if (this.hitbox !== undefined) {
			object2 = this.hitbox;
		}
		if (object.hitbox !== undefined) {
			object1 = object.hitbox;
		}
		
		if (object2.screenX - object2.width / 2 < object1.screenX + object1.width / 2 &&
	    object2.screenX + object2.width / 2 > object1.screenX - object1.width / 2 &&
	    object2.screenY - object2.height / 2 < object1.screenY + object1.height / 2 &&
	    object2.screenY + object2.height / 2 > object1.screenY - object1.height / 2) {
			return true;
		}
		else {
			return false;
		}
	}
}

// a version of entity that can be seen
class Thing extends Entity {
	constructor(properties) {
		super(properties);

		this.image = Loader.getImage(properties.image);
		this.imageName = properties.image;
		
		//this.readImage = properties.readImage;
		//this.unreadImage = properties.unreadImage;
		
		// if the image is a **horizontal** tileset, where all images have the same width and height, this specifies the number image to use (starting at 0 for the first image)
		this.imageNumber = properties.imageNumber || 0; // currently only works for projectiles (TBD)
		
		// set width and height to image dimensions unless otherwise specified
		this.width = properties.width || this.image.width;
		this.height = properties.height || this.image.height;
		
		this.baseWidth = this.width;
		this.baseHeight = this.height;
		this.expand = properties.expand || 1; // width multiplier (based on base width and base height)
		
		this.name = properties.name;
		
		this.bright = properties.bright; // currently does nothing
	}
}

// a version of thing that can be damaged (but can't deal damage)
class Character extends Thing {
	constructor(properties) {
		super(properties);
		
		this.channelling = false;
		
		this.health = properties.health || properties.stats.maxHealth;
		this.damageTaken = 0; // only used so far for Dummies
		this.speed = properties.stats.walkSpeed || 0;
		
		this.level = properties.level;
		
		this.class = properties.class;
		
		this.species = properties.species; // "human", "goblin", "orc", etc.
		this.subSpecies = properties.subSpecies; // "nilbog goblin", "fire orc", etc.
		
		this.hostility = properties.hostility; // used for name colour
		
		this.spawnX = properties.x;
		this.spawnY = properties.y;
		
		this.respawning = false;
		this.isCorpse = false;

		// stats
		this.stats = {};
		
		// these stats must have a value
		this.stats.maxHealth = properties.stats.maxHealth;
		
		// it is recommended that you pick a value for these, but not necessary
		this.stats.defence = properties.stats.defence || 0;
		this.stats.healthRegen = properties.stats.healthRegen || 0;
		this.stats.walkSpeed = properties.stats.walkSpeed || 0;
		this.stats.swimSpeed = properties.stats.swimSpeed || 0;
		this.stats.iceSpeed = properties.stats.iceSpeed || 0;
		this.stats.lootTime = properties.stats.lootTime || 10000; // time that it can be looted for
		this.stats.respawnTime = properties.stats.respawnTime || 11000; // time to respawn (should be more than lootTime)
		
		// optional stats
		// using || defaults to second value if first is undefined, 0 or ""
		this.stats.dodgeChance = properties.stats.dodgeChance || 0;
		this.stats.reflection = properties.stats.reflection || 0;
		this.stats.stealthed = properties.stats.stealthed || false; // can't be seen
		this.stats.frostaura = properties.stats.frostaura || false;
		
		this.chat = properties.chat || {}; // object containing properties that are inserted into chat when specific things happen
		/* examples of chat properties:
			firstDamaged - said when the character is damaged for the first time
			fiftyPercentHealth - said when the character goes below 50% health for the first time
			tenPercentHealth - said when the character goes below 10% health for the first time
			death - said when the character dies (unlimited times)
			questProgress - said when a quest involving this NPC is in progress (mandatory for quest npcs)
			questComplete - said when quests involving this NPC have been finished (mandatory for quest npcs)
			inventoryFull - said when a quest involving this NPC adds more items than needed (mandatory for quest npcs that add something to inventory on start or finish)
			shopLeave - said when you leave a merchant (mandatory for merchants)
			more tba
			
			use "/me " at the start of the chat to make the chat reflexive
			e.g:	"Hi" => "Character: Hi"
					"/me Hi" => "Character Hi"
		*/
		
		// event chat changes
		if (Game.christmasDay) {
			// chooseChat changed
			if (this.chat.chooseChat !== undefined && this.chat.christmasGreeting !== undefined) {
				this.chat.chooseChat = this.chat.christmasGreeting;
			}
		}
		else if (Game.event === "Antorax") { // Antorax Day
			// chooseChat changed
			if (this.chat.chooseChat !== undefined && this.chat.antoraxDayGreeting !== undefined) {
				this.chat.chooseChat = this.chat.antoraxDayGreeting;
			}
		}
		
		this.direction = properties.direction || 0;
		
		this.statusEffects = [];
	}
	
	// insert a message into the chat, under the format of "this.name: message"
	// this.name is emboldened via <strong> tags
	// if message begins with "/me " (including space), the format changes to "this.name message"
	// if singleUse is true, and if Dom.chat.contents contains message, the message is not sent
	// if important is true, the chat message triggers a red flashing prompt around the chat bookmark
	say (message, singleUse, delay, important) {
		Game.sayChat(this.name, message, singleUse, delay, important);
	}
	
	// function to be carried out during Game.render()
	renderFunction () {
		// show health bar and character name above head
		Game.drawCharacterInformation(Game.ctx, this);
	}
	
	// take damage
	takeDamage (damage) {
		this.health -= damage;
		this.damageTaken += damage;
		
		// check for death
		if (this !== Game.hero) {
			// not player (assumed it is killed by player - TBD)
			// TBD use hostility to check if it is killed by player
			if (this.health <= 0 && !this.respawning) { // check it is dead and not already respawning
				// wipe status effects
				this.statusEffects = [];
				
				// death
				this.respawning = true;
				this.isCorpse = true;
				
				// loot
				if (this.lootTable !== undefined) {
					this.generateLoot(this.lootTable);
				}
				
				// xp
				Game.getXP(this.xpGiven / Player.level); // now that the XP has fully been added, check for a levelUp and display it on the canvas
				
				// on kill function
				if (Player.inventory.weapon.onKill !== undefined) {
					Player.inventory.weapon.onKill();
				}
				
				// corpse disappears in this.stats.lootTime ms
				setTimeout(function () {
					this.isCorpse = false;
				}.bind(this), this.stats.lootTime);
				
				// respawn in this.stats.respawnTime ms (if it is not a boss)
				if (this.hostility !== "boss") {
					setTimeout(function () {
						this.respawn();
					}.bind(this), this.stats.respawnTime);
				}
				else {
					// set boss date killed
					Player.bossesKilled[this.bossKilledVariable] = GetFullDate();
				}
				
				//
				// quest progress
				//
				
				// enemies killed achievement
				if (this.hostility === "hostile" || this.hostility === "boss") {
					User.progress.enemies++;
				}
				
				if (this.subSpecies === "nilbog goblin") {
					// goblins killed achievement
					User.progress.goblins++;
					// general goblins killed objective
					if (Player.quests.questProgress.goblinsKilled === undefined) {
						Player.quests.questProgress.goblinsKilled = 1;
					}
					else {
						Player.quests.questProgress.goblinsKilled++;
					}
					// goblins killed with goblin torch objective
					if (Player.inventory.weapon.type === "staff" && Player.inventory.weapon.id === 7) { // goblin torch equipped
						if (Player.quests.questProgress.goblinsKilledWithTorch === undefined) {
							Player.quests.questProgress.goblinsKilledWithTorch = 1;
						}
						else {
							Player.quests.questProgress.goblinsKilledWithTorch++;
						}
					}
				}
				else if (this.subSpecies === "dummy") {
					User.progress.dummies++;
				}
				
				// weapon chat message (some weapons have a chat message for when they kill something!)
				if (Player.inventory.weapon.chat !== undefined && Player.inventory.weapon.chat.kill !== undefined) {
					Game.sayChat(Player.inventory.weapon.name, Player.inventory.weapon.chat.kill, false, 100, false)
				}
				
				// death text
				if (typeof this.chat.death !== "undefined") {
					this.say(this.chat.death, true, 0, false);
				}
			}
		}
		else {
			// player
			if (this.health <= 0 && !this.respawning) { // check it is dead and not already respawning
				// save progress
				Game.saveProgress("auto");
				
				// find existing xp fatigue effect
				let existingEffect = this.statusEffects.find(statusEffect => statusEffect.title === "XP Fatigue");
				
				// wipe status effects (including existing XP fatigue)
				while (this.statusEffects.length > 0) {
					// cannot be set to [], otherwise it no longer mirrors player
					this.statusEffects.splice(0, 1);
				}
				
				// death
				this.respawning = true;
				this.isCorpse = true;
				
				Game.loadArea(this.checkpoint, Areas[this.checkpoint].player);
				
				this.health = this.stats.maxHealth;
				
				let ineffectiveAmount = LevelXP[Game.hero.level] / 6; // amount of XP to be worth 50% less
				let stacks = 1;
				if (existingEffect !== undefined) {
					ineffectiveAmount += existingEffect.info.ineffectiveAmount; // stack to an effect XP fatigue effect
					stacks = existingEffect.info.stacks + 1;
					if (ineffectiveAmount > LevelXP[Game.hero.level]) { // caps out at the total XP to your next level
						ineffectiveAmount = LevelXP[Game.hero.level];
					}
				}
				ineffectiveAmount = Math.round(ineffectiveAmount);
				
				// add stronger xp fatigue effect (or add one if the player doesn't already have one)
				Game.hero.statusEffects.push(new statusEffect({
					title: "XP Fatigue",
					effect: "You recently died. Your next " + ineffectiveAmount + " XP is worth 50% less.",
					info: {
						stacks: stacks,
						ineffectiveAmount: ineffectiveAmount,
					},
					image: "xpDown",
				}));
				
				Player.fatiguedXP = ineffectiveAmount;
				
				Game.hero.updateStatusEffects();
			}
		}
	}
	
	// respawn after death
	respawn () {
		this.loot = null;
		
		this.hasBeenSiphoned = false; // for quests
		
		this.x = this.spawnX;
		this.y = this.spawnY;
		
		this.health = this.stats.maxHealth;
		this.damageTaken = 0;
		
		this.speed = this.stats.walkSpeed || 0;
		
		this.respawning = false;
	}
	
	// check if the character has a status effect with the specific title
	hasStatusEffect (title, startIndex, finishBeforeIndex) {
		// startIndex and finishBeforeIndex are the same as String.substring parameters
		if (startIndex === undefined) {
			startIndex = 0;
		}
		if (finishBeforeIndex === undefined) {
			finishBeforeIndex = title.length;
		}
		if (this.statusEffects.find(statusEffect => statusEffect.title.substring(startIndex, finishBeforeIndex) === title) !== undefined) {
			return true;
		}
		return false;
	}
	
	// check if the character has a status effect with the specific image name
	hasStatusEffectType (imageName) {
		for (let i = 0; i < this.statusEffects.length; i++) {
			if (this.statusEffects[i].image === imageName) {
				return true;
			}
		}
		return false;
	}
	
	// whee! make the character fly away from their current point
	// velocity = pixels thrown per second
	// time = time in SECONDS
	// direction = in RADIANS
	// must be called every tick (often called by stun code in move)
	// velocity, time, and direction ONLY need to be passed in for the first time this function is called
	displace (delta, velocity, time, direction) {
		if (this.isBeingDisplaced === undefined) { // not being displaced yeet
			// init displacement
			this.isBeingDisplaced = {
				time: time,
				velocity: velocity,
				direction: direction,
				elapsed: 0,
			}; // time the player has been displaced for
			
			// expand by 0.01
			this.expand = 1.01;
			this.width = this.baseWidth * this.expand;
			this.height = this.baseHeight * this.expand;
			
			// stunned status effect
			Game.statusEffects.stun({
				target: this,
				time: time,
				effectTitle: "Displacement",
				effectDescription: "Being displaced",
				onExpire: "removeDisplacement",
			});
			
			return {x:0, y:0};
		}
		else if (this.isBeingDisplaced.elapsed < this.isBeingDisplaced.time) { // displace player
			// expand
			if (this.isBeingDisplaced.time < 1) {
				// small time displace uses different equation
				this.expand = -Math.pow(2*this.isBeingDisplaced.elapsed-this.isBeingDisplaced.time, 2) + Math.pow(this.isBeingDisplaced.time, 2) + 1;
			}
			else {
				this.expand = -Math.pow((2/this.isBeingDisplaced.time)*this.isBeingDisplaced.elapsed-1, 2) + 2;
			}
			// graph for expand over time: https://www.desmos.com/calculator/ygygwjtzwe
			
			this.width = this.baseWidth * this.expand;
			this.height = this.baseHeight * this.expand;
			
			// move
			let dirx = Math.cos(this.isBeingDisplaced.direction);
			let diry = Math.sin(this.isBeingDisplaced.direction);
			this.x += dirx * this.isBeingDisplaced.velocity * delta;
			this.y += diry * this.isBeingDisplaced.velocity * delta;
			
			this.isBeingDisplaced.elapsed += delta;
			
			return {x:dirx, y:diry};
		}
		else { // displacement finished
			return {x:0, y:0};
		}
	}
	
	// remove all status effects where statusEffect[key] === value
	cleanse (value, key) {
		this.statusEffects = this.statusEffects.filter(statusEffect => statusEffect[key] !== value);
	}
}

// a version of character that can deal damage
class Attacker extends Character {
	constructor(properties) {
		super(properties);
		
		// stats
		if (this.stats === undefined) {
			this.stats = {};
		}
		
		// these stats must have a value
		this.stats.damage = properties.stats.damage;
		this.stats.range = properties.stats.range;
		this.stats.reloadTime = properties.stats.reloadTime; // time in ms to attack again
		
		// optional stats
		// using || defaults to second value if first is undefined, 0 or ""
		this.stats.criticalChance = properties.stats.criticalChance || 0;
		this.stats.flaming = properties.stats.flaming || 0;
		this.stats.poisonX = properties.stats.poisonX || 0;
		this.stats.poisonY = properties.stats.poisonY || 0;
		this.stats.stun = properties.stats.stun || 0;
		this.stats.variance = properties.stats.variance || 0;
		this.stats.lifesteal = properties.stats.lifesteal || 0;
		// functions
		if (properties.stats.onAttack !== undefined) {
			// bind can only be called if it is not undefined
			this.stats.onAttack = properties.stats.onAttack.bind(this); // bound to this
		}
		this.updateStats = properties.updateStats; // only works for enemies ATM
		
		// trail (currently just works for hero ATM)
		this.trail = properties.trail;
		
		// spells
		this.spells = properties.spells || [];
		for (let i = 0; i < this.spells.length; i++) {
			if (this.spells[i].interval !== undefined) {
				this.spells[i].ready = false; // cannot be used until intverval has finished
				setTimeout(function (i) {
					this.spells[i].ready = true;
				}.bind(this), this.spells[i].interval, i);
			}
			else {
				this.spells[i].ready = true;
			}
		}
		
		// information about projectile
		// only supported for enemies - should be updated to work for player as well (TBD TBD!!!)
		this.projectile = {};
		this.projectile.image = properties.projectile.image;
		// not necessary (can be left as undefined to just fit to projectile image size)
		this.projectile.width = properties.projectile.width;
		this.projectile.height = properties.projectile.height;
		// not necessary (defaults to x: 0 and y: 0 later on if it is undefined)
		this.projectile.adjust = properties.projectile.adjust || {};
		
		this.canAttack = true; // check attack is not reloading
	}
	
	
	// remove whatever is currently being channelled
	// called when the character moves or tries to channel something else
	// reason is set to why the channel was removed (not used yet)
	removeChannelling (reason) {
		if (this.channelling !== false) {
			// remove existing channelling
			if (this.channelling === "fishing") {
				// remove fishing bobber
				Game.projectiles.splice(Game.searchFor(this.channellingProjectileId, Game.projectiles), 1);
				this.channelling = false;
				this.channellingProjectileId = null;
			}
			else if (this.channelling === "projectile" || this.channelling === "block") {
				this.finishAttack(); // for attack channelling for hero
			}
			else {
				clearTimeout(this.channelling); // might not always be a timeout, but this doesn't matter (does nothing if not a timeout)
				// N.B. this.channelling should never be an int, otherwise clearTimeout *does* mess it up
			}
			// now nothing is being channelled
			this.channelling = false;
		}
	}
	
	// channel a function
	// this.channelling is set to the timeout
	// channelling fails (thus the timeout is cleared) if the character's channelling is set to something else or if the user moves
	// parameters must be an array
	channel (func, parameters, time) {
		if (!this.hasStatusEffect("Stunned")) { // cannot channel when stunned
			// remove whatever was previously channelled
			this.removeChannelling("channel");
			// add line to remove channelling when channelling expires to the function
			let channelFunction = function (parameters) {
				func(...parameters);
				this.channelling = false;
			}.bind(this);
			// set channelling to the timeout
			this.channelling = setTimeout(channelFunction, time, parameters);
		}
	}
	
	// a simpler channel for spells
	channelSpell (spellName, spellTier, parameters) {
		// add implicit parameters
		parameters.caster = this;
		parameters.tier = spellTier;
		// because parameters is always an object for spells, it is turned into an array for the function call
		this.channel(Game.spells[spellName].func, [parameters], Game.spells[spellName].channelTime[spellTier - 1])
	}
}

//
// Proper Classes (used in-game; ordered from lowest-level to highest-level)
//

// hidden teleport from one area to another
class AreaTeleport extends Entity {
	constructor(properties) {
		super(properties);

		this.teleportTo = properties.teleportTo;
		// either destination or player adjust must be defined (but not both) for both x and y
		this.destinationX = properties.destinationX;
		this.destinationY = properties.destinationY;
		this.playerAdjustX = properties.playerAdjustX;
		this.playerAdjustY = properties.playerAdjustY;
		
		// the following are ignored if they are undefined
		this.teleportCondition = properties.teleportCondition; // condition for the teleport to work
		this.teleportFailText = properties.teleportFailText; // text if teleportCondition fails
		this.teleportFailFunction = properties.teleportFailFunction; // function if teleportCondition fails
	}
}

// hidden hitbox that calls a function when hits
class Tripwire extends Entity {
	constructor(properties) {
		super(properties);
		
		this.onPlayerTouch = properties.onPlayerTouch; // function called when touched by player (will be called multiple times)
		// note that onPlayerTouch is bound to the entity (this = entity)
	}
}

// drawn as a rectangle with a colour; is removed after a certain period of time
class Particle extends Entity {
	constructor(properties) {
		super(properties);
		
		if (properties.colour.constructor === Array) {
			// pick a random colour
			this.colour = properties.colour[Random(0, properties.colour.length-1)];
		}
		else {
			this.colour = properties.colour;
		}
		
		this.moveTowards = properties.moveTowards; // optional
		
		// rotation: optional; in radians; distorts coordinates of particle
		if (properties.rotation === "random") {
			// random rotation chosen
			this.rotation = ToRadians(Random(0, 359));
		}
		else {
			this.rotation = properties.rotation;
		}
		
		this.light = properties.light || false; // if this is set to true, it is drawn on the light canvas
		
		this.id = Game.nextParticleId; // way that the game can identify which particle was added (without position in array being shifted)
		Game.nextParticleId++;
		
		this.transparency = properties.transparency || 1; // 0 (invisible) to 1 (opaque)
	}
}

// function used to create a particle and add it to the particles array
Game.createParticle = function (properties) {
	// create particle
	let id = Game.nextParticleId; // id of added particle
	let particle = new Particle(properties);
	Game.particles.push(particle);
	// set its removal time
	Game.objectRemoveTimeouts.push(setTimeout(function (id) {
		// remove the same particle (particle of the same id)
		Game.particles.splice(Game.searchFor(id, Game.particles), 1);
	}, properties.removeIn, id)); // pushed to objectRemoveTimeouts so it can be removed when the area is changed
}

// a thing that is a point of information or special interest
class InfoPoint extends Thing {
	constructor(properties) {
		super(properties);
		
		this.onTouchChat = properties.onTouchChat; // inserted to chat on touch (only inserted once); NOT in the format 'name: chat'
	}
}

// player - similar to Player global variable in saveData.js, but only contains necessary information (also has some cool functions)
class Hero extends Attacker {
	constructor (properties) {
		super(properties);
		
		// perhaps condense channelling with enemy's canAttack?
		this.channelTime = 0;
		
		// status effects override - mirror savedata.js' versions
		this.statusEffects = Player.statusEffects;
		
		// stats
		this.stats.looting = properties.stats.looting;
		this.stats.rangeModifier = properties.stats.rangeModifier; // added to range
		this.stats.domRange = 240; // distance from an entity that a DOM menu may be opened
		
		// optional stats
		// using || defaults to second value if first is undefined, 0 or ""
		this.stats.focusSpeed = properties.stats.focusSpeed || 0; // archer only
		this.stats.maxDamage = properties.stats.maxDamage; // mage only
		this.stats.blockDefence = properties.stats.blockDefence; // knight only
		this.stats.xpBonus = properties.stats.xpBonus || 0; // perentage
		
		// fishing stats
		this.stats.fishingSkill = properties.stats.fishingSkill || 0;
		
		// where the player respawns when they die (set at any major city)
		this.checkpoint = properties.checkpoint || "tutorial";
	}
	
	move (delta, dirx, diry) { // called when being displaced, moving towards something, or player is moving hero
		
		this.removeChannelling("move"); // stuff cannot be channelled whilst moving
		
		let baseSpeed = false; // whether speed should be altered by status effects and slow tiles (false means do alter)
		// if baseSpeed is a number instead, the speed is set to that without setSpeed being called
		
		// move hero
		if (this.hasStatusEffect("Stunned") || this.isCorpse) {
			// player cannot move
		}
		else if (this.hasStatusEffect("Displacement")) {
			// player being displaced!
			let dir = this.displace(delta);
			dirx = dir.x;
			diry = dir.y;
			if (this.isBeingDisplaced !== undefined) {
				baseSpeed = this.isBeingDisplaced.velocity; // do not run setSpeed
			}
		}
		else if (this.moveTowards !== undefined) {
			// move towards a particular point
			// player cannot control themselves
			let direction = bearing(this, this.moveTowards);
			dirx = Math.cos(direction);
			diry = Math.sin(direction);
			
			// movement speed
			this.speed = this.stats.walkSpeed;
			// speed scalar due to moveTowards (decimal value)
			if (this.moveTowards !== undefined && this.moveTowards.speedScalar !== undefined) {
				this.speed *= this.moveTowards.speedScalar;
			}
			
			this.x += dirx * this.speed * delta;
			this.y += diry * this.speed * delta;
			
			if (Math.round(this.x) < this.moveTowards.x + 2 && Math.round(this.x) > this.moveTowards.x - 2
			&& Math.round(this.y) < this.moveTowards.y + 2 && Math.round(this.y) > this.moveTowards.y - 2) {
				// destination reached
				// remove moveTowards
				this.moveTowards = undefined;
			}
		}
		else {
			this.x += dirx * this.speed * delta;
			this.y += diry * this.speed * delta;
		}
		
		// set foot hitbox positions
		Game.heroFootHitbox.x = this.x;
		Game.heroFootHitbox.y = this.y + 50;
		// screenX and screenY of foot hitbox
		Game.updateScreenPosition(Game.heroFootHitbox);

		// check if we walked into a non-walkable tile
		if (Game.hero.moveTowards === undefined) { // hero should only collide if controlled by player
			this._collide(dirx, diry, delta);
		}
		
		// set walkspeed for next move() function call
		if (baseSpeed === false || baseSpeed === true) {
			this.setSpeed(baseSpeed);
		}
		else {
			this.speed = baseSpeed;
		}

		// clamp values
		var maxX = this.map.cols * this.map.tsize;
		var maxY = this.map.rows * this.map.tsize;
		this.x = Math.max(0, Math.min(this.x, maxX));
		this.y = Math.max(0, Math.min(this.y, maxY));
	}
	
	_collide (dirx, diry, delta) { // update move speed based on equipment and surroundings
		var row, col;
		
		let left = Game.heroFootHitbox.x - Game.heroFootHitbox.width / 2;
		let right = Game.heroFootHitbox.x + Game.heroFootHitbox.width / 2;
		//var top = this.y - this.height / 2;
		let top = Game.heroFootHitbox.y - Game.heroFootHitbox.height / 2;
		//var bottom = this.y + this.height / 2;
		let bottom = Game.heroFootHitbox.y + Game.heroFootHitbox.height / 2;

		// check for collisions on sprite sides
		let collision =
			this.map.isSolidTileAtXY(left, top) ||
			this.map.isSolidTileAtXY(right, top) ||
			this.map.isSolidTileAtXY(right, bottom) ||
			this.map.isSolidTileAtXY(left, bottom);
			
		// check collision with collisions - invisible entities that cannot be passed
		Game.collisions.forEach(entity => { // iterate though collisions
			// give collisions a screenX and Y (should be turned into own function)
			entity.screenX = (entity.x - entity.width / 2) - Game.camera.x;
			entity.screenY = (entity.y - entity.height / 2) - Game.camera.y;
			// check if the player's feet are touching the collision
			if (Game.heroFootHitbox.isTouching(entity)) {
				collision = true;
			}
		});
		
		if (!collision) { return; }

		if (diry > 0) {
			this.y -= this.speed * delta * diry;
			//row = this.map.getRow(bottom);
			//this.y = -this.height / 2 + this.map.getY(row);
		}
		if (diry < 0) {
			this.y += this.speed * delta * Math.abs(diry);
			//row = this.map.getRow(top);
			//this.y = this.height / 2 + this.map.getY(row + 1);
		}
		if (dirx > 0) {
			this.x -= this.speed * delta * dirx;
			//col = this.map.getCol(right);
			//this.x = -this.width / 2 + this.map.getX(col);
		}
		if (dirx < 0) {
			this.x += this.speed * delta * Math.abs(dirx);
			//col = this.map.getCol(left);
			//this.x = this.width / 2 + this.map.getX(col + 1);
		}
	}
	
	// set player speed
	// baseSpeed stops the speed being changed from status effects and slow tiles (e.g: displacement)
	setSpeed (baseSpeed) {
		// test for slow tiles (e.g: water, mud)
		let slowTile = this.map.isSlowTileAtXY(this.x, this.y + 50);
		if (slowTile === null || baseSpeed) { // normal speed
			this.speed = this.stats.walkSpeed;
			// remove swimming/mud/ice/path status effect
			Game.removeTileStatusEffects(this);
		}
		else if (slowTile === "ice") { // on ice tile
			this.speed = this.stats.iceSpeed;
			Game.removeTileStatusEffects(this, "Ice skating"); // remove all status effects from other tiles
			if (!this.hasStatusEffect("Ice skating")) { // give status effect if the player doesn't already have it
				this.statusEffects.push(new statusEffect({
					title: "Ice skating",
					effect: "Increased movement speed",
					image: "speedUp", // TBD change this?
				}));
				this.updateStatusEffects();
			}
		}
		else if (slowTile === "path") { // on path
			this.speed = this.stats.walkSpeed * 1.15;
			Game.removeTileStatusEffects(this, "On a path"); // remove all status effects from other tiles
			if (!this.hasStatusEffect("On a path")) { // give status effect if the player doesn't already have it
				this.statusEffects.push(new statusEffect({
					title: "On a path",
					effect: "+15% movement speed",
					image: "speedUp",
				}));
				this.updateStatusEffects();
			}
		}
		else if (slowTile === "water") { // in water tile
			this.speed = this.stats.swimSpeed;
			Game.removeTileStatusEffects(this, "Swimming"); // remove all status effects from other tiles
			if (!this.hasStatusEffect("Swimming")) { // give status effect if the player doesn't already have it
				this.statusEffects.push(new statusEffect({
					title: "Swimming",
					effect: "Reduced movement speed",
					image: "water",
				}));
				// remove fire status effect
				for (var i = 0; i < this.statusEffects.length; i++) {
					if (this.statusEffects[i].title.substring(0, 4) == "Fire") {
						this.statusEffects.splice(i,1);
					}
				}
				this.updateStatusEffects();
			}
		}
		else if (slowTile === "mud") { // in mud tile
			// currently mud goes the same speed as swimSpeedtile
			this.speed = this.stats.swimSpeed;
			Game.removeTileStatusEffects(this, "Stuck in the mud"); // remove all status effects from other tiles
			if (!this.hasStatusEffect("Stuck in the mud")) { // give status effect if the player doesn't already have it
				this.speed = this.stats.swimSpeed;
				this.statusEffects.push(new statusEffect({
					title: "Stuck in the mud",
					effect: "Reduced movement speed",
					image: "mud",
				}));
				this.updateStatusEffects();
			}
		}
		else {
			console.error("Unknown slow tile: " + slowTile);
		}
		
		if (!baseSpeed) {
			// speed status effect (can be buff or debuff)
			this.statusEffects.forEach(statusEffect => {
				if (statusEffect.info.speedIncrease !== undefined) {
					// increase speed if the status effect does so
					this.speed *= 1 + (statusEffect.info.speedIncrease / 100);
				}
			});
		}
	}
	
	// start channeling basic attack
	startAttack (e) {
		if (this.canAttack && Player.inventory.weapon.name !== "" && !Player.inventory.weapon.cannotAttack) { // checks the player has a weapon and is not currently reloading
			// Player.inventory.weapon.cannotAttack is set to true when the projectile image is being loaded (e.g: weapon with special projectile is equipped/unequipped)
			if (!CheckRightClick(e)) {
				// left-click (normal) attack
				
				// position of projectile
				let projectileX = Game.camera.x + (e.clientX - 19); // subtract 19 from the mouse position because this is the margin of the canvas
				let projectileY = Game.camera.y + (e.clientY - 19);
				let distanceToProjectile = distance({x: projectileX, y: projectileY,}, this);
				
				if (Player.inventory.weapon.type === "staff" || Player.inventory.weapon.type === "bow" || Player.inventory.weapon.type === "sword") {
					// player is using conventional weapon
						
					if (distanceToProjectile < this.stats.range) {
						// player is in range
						
						this.canAttack = false;
						
						this.channelling = "projectile";
						
						let projectileRotate = bearing(this, {x: projectileX, y: projectileY}) + Math.PI / 2;
						
						let variance = this.stats.variance;
						if (Player.inventory.weapon.type === "bow") { // alter variance based on distance to enemy if the class is archer
							let distanceFraction = distanceToProjectile / 600; // fraction of maximum variance (max variance = Playerstats.variance)
							variance *= distanceFraction;
						}
						
						this.channellingProjectileId = Game.nextProjectileId;

						// tbd make work the same as enemy projectile
						Game.projectiles.push(new Projectile({
							map: map,
							x: projectileX,
							y: projectileY,
							attacker: this,
							targets: [Game.enemies, Game.dummies,],
							rotate: projectileRotate,
							adjust: {
								// manually adjust position (programmed for each projectile in skindata/itemdata)
								x: Game.heroProjectileAdjust.x,
								y: Game.heroProjectileAdjust.y,
								towards: {x: this.x, y: this.y},
							},
							hitbox: { // arrow tip at mouse position
								x: projectileX,
								y: projectileY,
								width: this.class === "k" ? 60 : (this.class === "m" ? 23 : (this.class === "a" ? 10 : 0)),
								height: this.class === "k" ? 60 : (this.class === "m" ? 23 : (this.class === "a" ? 10 : 0)),
							},
							image: Game.heroProjectileName,
							beingChannelled: true,
							variance: variance,
							type: "projectiles",
						}));
					}
				}
				else if (Player.inventory.weapon.type === "rod" && this.channelling === false) {
					// fishing rod (bobber has not been cast yet)
					this.fishingBobs = 0; // number of times that the fishing bobber has bobbed
					
					if (distanceToProjectile < this.stats.range && this.map.isSlowTileAtXY(projectileX, projectileY) === "water") {
						// player is in range and clicked in water
						
						this.channelling = "fishing";
						
						this.channellingProjectileId = Game.nextProjectileId;
					
						Game.projectiles.push(new Projectile({
							map: map,
							x: projectileX,
							y: projectileY,
							width: 27, // width and height of each individual image
							height: 23,
							image: Game.heroBobberName,
							beingChannelled: true,
							type: "projectiles",
						}));
						
						// timer for first bob
						setTimeout(this.fish.bind(this), Random(500, 12000));
					}
				}
				else if (Player.inventory.weapon.type === "rod" && this.channelling === "fishing") {
					// fishing rod (bobber has been cast)
					
					/*Game.projectiles.splice(Game.searchFor(this.channellingProjectileId, Game.projectiles), 1); // remove bobber
					
					this.channelling = false;
					this.channellingProjectileId = null;*/
					
					// in the future, the player should be able to remove the bobber whilst fishing
				}
				else if (Player.inventory.weapon.type === "rod" && this.channelling.fishingType !== undefined && this.fishingBobs >= 100) { // channelling.type is only defined when it is set to an item (i.e. a fishing item)
					// fishing rod (fish has been caught - player is clicking to pull it up)
					
					this.fishingBobs++;
					
					if (this.fishingBobs >= 100 + this.channelling.clicksToCatch) {
						// fish caught
						
						// quest progress
						if (Player.quests.questProgress.itemsFishedUp !== undefined) {
							Player.quests.questProgress.itemsFishedUp++;
						}
						else {
							Player.quests.questProgress.itemsFishedUp = 1;
						}
						
						// chat message
						if (this.channelling.fishingType === "fish") { // fish
							Dom.chat.insert("You caught a " + this.channelling.length + "cm <strong>" + this.channelling.name + "</strong>!");
						}
						else if (this.channelling.fishingType === "waterjunk") { // junk item
							Dom.chat.insert("You fished up a <strong>" + this.channelling.name + "</strong>.");
						}
						else if (this.channelling.fishingType === "watermisc") { // misc
							Dom.chat.insert("You reeled up a <strong>" + this.channelling.name + "</strong>.");
						}
						else {
							console.error("It is not known that an item of fishingType " + channelling.fishingType + " can be fished up.");
						}
						
						// increase fishing skill
						// see fish spreadsheet for algorithm
						// note: if the Game.hero stats were updated in the middle of this code, it **might** ignore some skill that should have been added (overwritten back to old value in savedata.js) - tbd fix this
						// tbd make own function
						let oldFishingSkill = this.stats.fishingSkill; // remember old fishing skill to know if it has changed by a whole number
						// normal fishing skill values
						if (this.channelling.fishingType === "waterjunk") {
							if (this.stats.fishingSkill < FishingLevels[Player.lootArea]) {
								// player's fishing skill is too low to get any other items
								this.stats.fishingSkill++;
							}
						}
						else if (this.channelling.rarity === "common") {
							if (this.stats.fishingSkill >= FishingLevels[Player.lootArea] &&
							this.stats.fishingSkill < FishingLevels[Player.lootArea] + 15) {
								// player has only unlocked commons in this area
								this.stats.fishingSkill++;
							}
							else if (this.stats.fishingSkill >= FishingLevels[Player.lootArea] + 15 &&
							this.stats.fishingSkill < FishingLevels[Player.lootArea] + 30) {
								// player has only unlocked commons and uniques in this area
								this.stats.fishingSkill += 0.5;
							}
							else if (this.stats.fishingSkill >= FishingLevels[Player.lootArea] + 30 &&
							this.stats.fishingSkill < FishingLevels[Player.lootArea] + 45) {
								// player has recently unlocked mythics in this area
								this.stats.fishingSkill += 0.25;
							}
							else {
								// player has outleveled this area
								this.stats.fishingSkill += 0.1;
							}
						}
						else if (this.channelling.rarity === "unique") {
							if (this.stats.fishingSkill >= FishingLevels[Player.lootArea] + 15 &&
							this.stats.fishingSkill < FishingLevels[Player.lootArea] + 30) {
								// player has only unlocked commons and uniques in this area
								this.stats.fishingSkill += 2;
							}
							else if (this.stats.fishingSkill >= FishingLevels[Player.lootArea] + 30 &&
							this.stats.fishingSkill < FishingLevels[Player.lootArea] + 45) {
								// player has recently unlocked mythics in this area
								this.stats.fishingSkill++;
							}
							else {
								// player has outleveled this area
								this.stats.fishingSkill += 0.5;
							}
						}
						else if (this.channelling.rarity === "mythic") {
							if (this.stats.fishingSkill >= FishingLevels[Player.lootArea] + 30 &&
							this.stats.fishingSkill < FishingLevels[Player.lootArea] + 45) {
								// player has recently unlocked mythics in this area
								this.stats.fishingSkill += 3;
							}
							else {
								// player has outleveled this area
								this.stats.fishingSkill++;
							}
						}
						else {
							console.warn("Fishing item " + this.channelling + "currently never gives any fishing skill, but probably should.");
						}
						
						if (this.channelling.length !== undefined) {
							// player has caught a fish
							// achievement variable
							User.progress.fish++;
							// quest variable
							if (Player.quests.questProgress.fishCaught === undefined) {
								Player.quests.questProgress.fishCaught = 1;
							}
							else {
								Player.quests.questProgress.fishCaught++;
							}
						}
						
						// give fish
						// must be after quest progress and fishing skill
						let inventoryPosition = Dom.inventory.give(this.channelling);
						// inventory position saved for if onCatch needs it
						
						// onCatch function
						if (this.channelling.onCatch !== undefined) {
							this.channelling.onCatch(inventoryPosition);
						}
						
						if (Math.floor(this.stats.fishingSkill) - Math.floor(oldFishingSkill) > 0) { // check if the player's fishing skill has increased to the next integer (or more)
							Dom.chat.insert("Your fishing skill has increased to " + Math.floor(this.stats.fishingSkill) + "."); // notify them of this in chat
						}
						
						// update player stats
						Player.stats = Game.hero.stats; // inefficient (should be linked)
						
						// fish length for fisher's log
						if (this.channelling.length > User.fish[this.channelling.id]) {
							User.fish[this.channelling.id] = this.channelling.length;
						}
						
						// remove fishing bobber
						Game.projectiles.splice(Game.searchFor(this.channellingProjectileId, Game.projectiles), 1);
						this.channelling = false;
						this.channellingProjectileId = null;
						
						Dom.checkProgress();
					}
				}
			}
			else {
				// knight block attack
				if (Player.inventory.weapon.type === "sword") {
					this.channelling = "block";
				}
			}
		}
	}
	
	// shoot basic attack
	finishAttack (e) { // e is never used
		if (this.channelling === "projectile") { // check that the player is channelling a projectile (they might not have a weapon equipped so are not channelling, for example)
			this.channelTime = 0;
			this.channelling = false;
			
			// get projectile
			let shotProjectile = Game.projectiles[Game.searchFor(this.channellingProjectileId, Game.projectiles)];
			
			// set projectile as not channelling
			shotProjectile.beingChannelled = false;
			
			shotProjectile.varyPosition(); // vary projectile position based off its variance
			
			// damage enemies that the projectile is touching
			shotProjectile.dealDamage(shotProjectile.attacker, shotProjectile.targets);
			
			// function called for all attacks whether they hit an enemy or not
			if (Player.inventory.weapon.onAttack !== undefined) {
			    Player.inventory.weapon.onAttack(shotProjectile);
			}
			
			// after a timeout (2s), remove the projectile that was just shot
			// this doesn't work if the user attacks too fast, though this shouldn't be a problem...
			let a = this.channellingProjectileId; // maintain a variable of the currently shot projectile
			Game.objectRemoveTimeouts.push(setTimeout(function (a) {
				Game.projectiles.splice(Game.searchFor(a, Game.projectiles), 1); // find the id of the to-be-removed projectile and remove it
			}, 1500, a)); // pushed to objectRemoveTimeouts so it can be removed when the area is changed
			
			this.channellingProjectileId = null;
			
			// wait for the player's reload time (1s) until they can attack again
			setTimeout(function () {
				this.canAttack = true;
				// remove beam animation if there was one
				this.beam = undefined;
			}.bind(this), this.stats.reloadTime);
			
			// special animations
			if (typeof Skins[Player.class][Player.skin].animations !== "undefined" && typeof Skins[Player.class][Player.skin].animations.onHit !== "undefined") {
				// on attack animation
				let animation = Skins[Player.class][Player.skin].animations.onHit;
				if (animation.type === "beam") {
					// cast a beam to the projectile for 0.5s
					this.beam = {
						x: shotProjectile.x,
						y: shotProjectile.y,
						width: animation.width * shotProjectile.expand,
						colour: animation.colour,
					}
				}
			}
			
			// update quest log
			Dom.checkProgress();
		}
		else if (this.channelling === "block") {
			this.channelling = false;
			
			// wait for the player's reload time (1s) until they can attack again
			setTimeout(function () {
				this.canAttack = true;
			}.bind(this), this.stats.reloadTime);
		}
	}
	
	// called whenever Game.hero's status effects are updated
	updateStatusEffects () {
		// update secondary canvas (status effects display on it)
		Game.secondary.render();
		
		// update dom
		Dom.inventory.displayIdentification();
	}
	
	// space bar
	interact () {
		let interactionDone = 0; // set to true if the player has interacted with something, iterated by 1 each time to show what should be tried to be interacted with each time
		// this is done so that only 1 interaction can happen per space press
		
		while (interactionDone !== true) {
			// enemy looting
			if (interactionDone === 0) {
				for (var i = 0; i < Game.enemies.length; i++) {
					if (Game.enemies[i].isCorpse) { // check enemy is a corpse (hence might be able to be looted) 
						if (this.isTouching(Game.enemies[i]) && Game.enemies[i].loot !== null) { // player is touching enemy and enemy can be looted
							Dom.choose.page(Game.enemies[i], ["Loot enemy"], [function () {
								Dom.loot.page(Game.enemies[i].name, Game.enemies[i].loot);
								Dom.loot.currentId = "e"+i;
								// "e"+i is a string that allows the loot menu to be identified - e means enemy, and i is the index of the enemy in Game.enemies
								// the loot menu closes when the area changes anyway, so this will always work
								// Dom.loot.currentId is only ever used in main, in the function Game.lootClosed() (called by index.html)
							}], [[]]);
							interactionDone = true;
						}
					}
				}
			}
			
			// check collision with loot chests
			else if (interactionDone === 1) {
				for (var i = 0; i < Game.chests.length; i++) {
					// player is touching chest, chest can be looted, and DOM isn't occupied
					if (this.isTouching(Game.chests[i]) && Game.chests[i].loot !== null && Dom.currentlyDisplayed === "") {
						// canBeLooted function
						if (Game.chests[i].canBeLooted === undefined || Game.chests[i].canBeLooted()) {
							// check for locked chest
							if (!Game.chests[i].locked) {
								// chest not locked
							}
							else if (Game.chests[i].locked && Dom.inventory.check(Game.chests[i].chestKey.id, Game.chests[i].chestKey.type)) {
								// chest locked but player has key
								// remove key
								Dom.inventory.removeById(Game.chests[i].chestKey.id, Game.chests[i].chestKey.type);
								// unlock chest (for if the player opens it again before changing area)
								Game.chests[i].locked = false;
								// chat message to tell them that a key was used
								Dom.chat.insert("You used a <strong>" + Game.chests[i].chestKey.name + "</strong> to unlock the Loot Chest.", 0);
							}
							else {
								// chest locked and doesn't have a key
								// chat message to tell them this
								Dom.chat.insert("The Loot Chest is locked! You need a <strong>" + Game.chests[i].chestKey.name + "</strong> to unlock it.", 0, true, true);
							}
							
							// if the chest has been unlocked, open the chest!
							if (!Game.chests[i].locked) {
								Game.chests[i].openLoot(i);
								interactionDone = true;
							}
						}
					}
					// tbd should flash red if player can't loot it
				}
			}
			
			// cannon firing
			else if (interactionDone === 2) {
				for (var i = 0; i < Game.cannons.length; i++) {
					if (this.isTouching(Game.cannons[i])) { // player is touching cannon
						Game.cannons[i].interact(); // might not end up doing anything if cannon is on cooldown (perhaps that if should be moved here?)
						interactionDone = true;
					}
				}
			}
			
			// tilemap tiles
			else if (interactionDone === 3) {
				let tileNum = this.getTileAtFeet();
				if (map.interactWithTile !== undefined) {
					map.interactWithTile(tileNum, this.x, this.y + this.height/2);
				}
				interactionDone = true; // interaction might not have happened, but this is always the last thing to be done anyway so it can be set to true
			}
			
			if (interactionDone !== true) {
				interactionDone++;
			}
		}
	}
	
	// map.getTile for Game.hero
	getTileAtFeet () {
		return map.getTile(0, map.getCol(this.x), map.getRow(this.y + this.height/2));
	}
	
	// called by fishing bobber timeouts
	fish () {
		if (this.channelling === "fishing") {
			if (this.fishingBobs < 6 && this.fishingBobs > -1) {
				// bob fishing bobber every ~1 second
				this.fishingBobs++;
				
				if (Random(0, 5) < this.fishingBobs) {
					// fish caught
					
					// increase fishing skill if the player has a fish bait status effect
					let fishingSkill = this.stats.fishingSkill;
					let baitStatusEffectIndex = this.statusEffects.findIndex(statusEffect => statusEffect.title === "Fish bait");
					if (baitStatusEffectIndex !== -1) { // check if player has a bait status effect
						fishingSkill += this.statusEffects[baitStatusEffectIndex].info.skillIncrease;
						this.statusEffects.splice(baitStatusEffectIndex, 1);
					}
					
					// find what rarities the player can fish up
					// junk is fished up in the proportion not unlocked by common/unique/mythic
					let raritiesAvailable = [];
					if (fishingSkill >= FishingLevels[Player.lootArea]) {
						// can fish up commons
						raritiesAvailable.push("common");
					}
					if (fishingSkill >= FishingLevels[Player.lootArea] + 15) {
						// can fish up uniques
						raritiesAvailable.push("unique");
					}
					if (fishingSkill >= FishingLevels[Player.lootArea] + 30) {
						// can fish up mythics
						raritiesAvailable.push("mythic");
					}
					
					// pick a Random rarity from the raritiesAvailable array
					let RandomNum = Random(0, 6);
					let itemRarity = "";
					if (RandomNum === 0) {
						// 1 in 7 chance for a mythic
						itemRarity = "mythic";
					}
					else if (RandomNum < 3) {
						// 2 in 7 chance for a unique
						itemRarity = "unique";
					}
					else {
						// 4 in 7 chance for a common
						itemRarity = "common";
					}
					// check if the player has unlocked that rarity, otherwise give them a junk item
					if (!raritiesAvailable.includes(itemRarity)) {
						itemRarity = "junk";
					}
					
					// find the fish that should be caught
					let fish = Items.fish;
					fish = fish.filter(item => item.areas.includes(Player.lootArea) || item.areas.includes(Game.areaName) || item.areas.length === 0); // filter for area (either lootArea or areaName)
					if (baitStatusEffectIndex !== -1 &&
					(Player.quests.questProgress.fishCaught === 0 || Player.quests.questProgress.fishCaught === undefined)) {
						// player is using fishing bait but has never caught a fish before
						// guaranteed common fish!
						fish = fish.filter(item => item.fishingType === "fish" && item.rarity === "common");
					}
					else {
						fish = fish.filter(item => item.rarity === itemRarity); // filter for rarity (see above)
					}
					fish = fish.filter(item => item.timeRequirement === undefined || Game.time === item.timeRequirement); // filter for time that it can be fished up
					fish = fish.filter(item => item.catchRequirement === undefined || item.catchRequirement()); // filter for general fishing requirement
					if (fish.constructor === Array) {
						// still more fish to pick from
						fish = fish[Random(0, fish.length - 1)]; // Random fish that fulfils requirements above
					}
					fish = { ...fish }; // remove all references to itemdata in fish variable (otherwise length value changed in this will also affect itemData)!
					
					// calculate time to catch fish and clicks needed for fish
					// see fish spreadsheet for how this is figured out
					// should be moved to its own (recursive?) function
					let clicks = 0;
					let time = 0; // in ms
					if (fish.fishingType === "waterjunk") { // junk fishing item (uses different algorithm for clicks and time)
						clicks = 1;
						time = 1000;
					}
					else if (fish.fishingType === "watermisc") { // misc fishing item (no length, so clicks and time specified in itemdata)
						clicks = fish.clicksToCatch;
						time = fish.timeToCatch;
					}
					else { // fish
						// calculate fish length
						// between min and max; biased towards average
						let fishLength = Round(BiasedRandom(fish.length.min, fish.length.max, fish.length.avg, 1));
						fish.length = fishLength; // replace length object with an integer saying the fish's length
						
						// clicks
						if (fishLength / 25 >= 4) {
							clicks += 4;
							fishLength -= 100;
							
							if (fishLength / 50 >= 4) {
								clicks += 4;
								fishLength -= 200;
								
								if (fishLength / 75 >= 4) {
									clicks += 4;
									fishLength -= 300;
									
									if (fishLength / 100 >= 4) {
										clicks += 4;
										fishLength -= 400;
										console.error("Fish length " + fish.length + " is not accounted for being so large!");
									}
									else {
										clicks += Math.floor(fishLength / 100);
									}
									
								}
								else {
									clicks += Math.floor(fishLength / 75);
								}
								
							}
							else {
								clicks += Math.floor(fishLength / 50);
							}
							
						}
						else {
							clicks += Math.floor(fishLength / 25);
							if (clicks === 0) {
								clicks = 1; // clicks needed defaults to 1
							}
						}
						// time
						if (fish.rarity === "common") {
							time += 500 + 500 * clicks;
						}
						if (fish.rarity === "unique") {
							time += 300 + 300 * clicks;
						}
						if (fish.rarity === "mythic") {
							time += 200 + 200 * clicks;
						}
					}
					fish.clicksToCatch = clicks;
					
					// fish finished! time for player to fish it up...
					this.channelling = fish; 
					this.fishingBobs = 100; // fishingBobs is used to see how many clicks the player has done when it is >= 100
					
					Game.projectiles[Game.searchFor(this.channellingProjectileId, Game.projectiles)].imageNumber = 2; // submerged image for projectile
					
					// timer for player clicks
					setTimeout(function (fish) {
						if (this.channelling === fish) { // fish has not been caught
							// remove fishing bobber
							Game.projectiles.splice(Game.searchFor(this.channellingProjectileId, Game.projectiles), 1);
							this.channelling = false;
							this.channellingProjectileId = null;
						}
					}.bind(this), time, fish);
				}
				else {
					// timer for next bob
					setTimeout(this.fish.bind(this), Random(500, 1500));
					
					// tbd make searchFor only need to be run once (for efficiency)
					Game.projectiles[Game.searchFor(this.channellingProjectileId, Game.projectiles)].imageNumber = 1; // bobbing image for projectile
					setTimeout(function () {
						Game.projectiles[Game.searchFor(this.channellingProjectileId, Game.projectiles)].imageNumber = 0; // set image back to normal after 150ms
					}.bind(this), 200);
				}
			}
		}
		
	}
}

// any projectile
class Projectile extends Thing {
	constructor(properties) {
		super(properties);
		
		this.attacker = properties.attacker || {
			stats: properties.stats, // for if projectile deals its own damage
		};
		this.targets = properties.targets; // should be array
		
		this.id = Game.nextProjectileId; // way that the game can identify which projectile was shot
		Game.nextProjectileId++;
		
		this.variance = properties.variance || 0; // diameter of circle that it could fall into
		
		this.rotate = properties.rotate || 0;
		
		this.beingChannelled = properties.beingChannelled || false;
		
		// set width and height to death image dimensions unless otherwise specified
		this.width = properties.width || this.image.width;
		this.height = properties.height || this.image.height;
		
		// adjust position to make it move towards a point (e.g: move arrow so that the point hits the target
		if (properties.adjust === undefined) {
			properties.adjust = {}; // stop undefined error from trying to set adjust x/y/towards
		}
		this.adjust = {
			x: properties.adjust.x || 0,
			y: properties.adjust.y || 0,
			towards: properties.adjust.towards || {x:0,y:0},
		};
		
		// custom hitbox
		if (properties.hitbox !== undefined) {
			this.hitbox = {
				x: properties.hitbox.x,
				y: properties.hitbox.y,
				width: properties.hitbox.width,
				height: properties.hitbox.height,
			}
		}
		
		// position the projectile should move towards
		// this object should contain an x and y if you want the projectile to move
		// could be set to an enemy, for example, if you want the projectile to home into that enemy
		this.moveTowards = properties.moveTowards;
		// speed is multiplied by delta like other speeds
		this.moveSpeed = properties.moveSpeed;
		
		this.damageDealt = []; // array of damages dealt to show
	}
	
	// deal damage to array of entities (to)
	// attacker = whose stats to use when dealing damage
	// to = array of arrays of objects to deal damage to
	// make sure that attacker and to are at least Characters in the inheritance chain (not Entities or Things)
	// hence, if you want to damage a single target still put it in an array, e.g: dealDamage(attacker, [[Game.hero]])
	dealDamage (attacker, to) {
		for (var i = 0; i < to.length; i++) { // iterate through arrays of objects in to
			for (var x = 0; x < to[i].length; x++) { // iterate through objects in to
				Game.updateScreenPosition(this); // update projectile position
				if (this.isTouching(to[i][x]) && !to[i][x].respawning) { // check projectile is touching character it wants to damage
					
					if (Random(0, 99) < to[i][x].stats.dodgeChance) { // hit dodged
						this.damageDealt.push({enemy: to[i][x], damage: "hit dodged", critical: false});
					}
					else {
						// damage
						let blockDefence = 0;
						if (to[i][x].channelling === "block") { // add block defence if the target is blocking
							blockDefence = to[i][x].stats.blockDefence;
						}
						
						let attackerDamage = attacker.stats.damage;
						
						// calculate damage based on channelling time (if the attacker is a mage)
						if (attacker.stats.maxDamage !== undefined && attacker.stats.maxDamage > attacker.stats.damage) {
							// this.expand - 1 = a number from 0 to 1
							// multiply the extra damage gained by maxDamage by this fraction to see the extra damage dealt
							let a = (attacker.stats.maxDamage - attacker.stats.damage); // possible extra damage
							let b = Round(this.expand) - 1; // multiplier
							let c = a * b; // extra damage dealt
							attackerDamage += c;
						}
						
						// blood moon - enemies deal more damage
						if (Game.time === "bloodMoon" &&
						(attacker.hostility === "hostile" || attacker.hostility === "boss")) {
							attackerDamage *= 3;
						}
						
						let targetDefence = to[i][x].stats.defence + blockDefence; // calculate target defence
						
						// defence status effect
						to[i][x].statusEffects.forEach(statusEffect => {
							if (statusEffect.info.defenceIncrease !== undefined) {
								// increase defence if the status effect does so
								// check what the attacker's species is (or that status effect is not geared towards a certain subspecies)
								if (statusEffect.info.subSpecies === undefined || attacker.subSpecies === statusEffect.info.subSpecies) {
									targetDefence *= 1 + (statusEffect.info.defenceIncrease / 100);
								}
							}
						});
						
						// defence
						let dmgDealt = attackerDamage - (targetDefence / 10);
						if (dmgDealt < 0) {
							dmgDealt = 0;
						}
						
						// attackDamage status effect
						attacker.statusEffects.forEach(statusEffect => {
							if (statusEffect.info.damageIncrease !== undefined) {
								// increase damage dealt if the status effect does so
								dmgDealt *= 1 + (statusEffect.info.damageIncrease / 100);
							}
						});
						
						if (Random(0, 99) < attacker.stats.criticalChance) { // critical hit
							dmgDealt *= 2
							to[i][x].takeDamage(dmgDealt)
							this.damageDealt.push({enemy: to[i][x], damage: dmgDealt, critical: true});
						}
						else {
							to[i][x].takeDamage(dmgDealt)
							this.damageDealt.push({enemy: to[i][x], damage: dmgDealt, critical: false});
						}
						
						// lifesteal
						let lifestealPercentage = attacker.stats.lifesteal;
						// check for status effects that increase lifesteal
						attacker.statusEffects.forEach(statusEffect => {
							if (statusEffect.info.lifestealIncrease !== undefined) {
								// increase lifesteal percentage if the status effect does so
								lifestealPercentage += statusEffect.info.lifestealIncrease;
							}
						});
						// do lifesteal stuff
						if (lifestealPercentage > 0) {
							Game.restoreHealth(attacker, dmgDealt * (attacker.stats.lifesteal / 100));
						}
						
						// poison
						if (attacker.stats.poisonX > 0 && attacker.stats.poisonY > 0) { // check target weapon has poison
							Game.statusEffects.poison({
								target: to[i][x],
								poisonDamage: attacker.stats.poisonX,
								time: attacker.stats.poisonY,
							});
						}
						
						// flaming
						if (attacker.stats.flaming > 0) { // check target weapon has flaming
							Game.statusEffects.fire({
								target: to[i][x],
								tier: attacker.stats.flaming,
							});
						}
						
						// reflection
						if (to[i][x].stats.reflection > 0) { // check target has reflection
							attacker.takeDamage(dmgDealt * (to[i][x].stats.reflection / 100))
						}
						
						// stun
						if (attacker.stats.stun > 0) { // check target weapon has stun
							Game.statusEffects.stun({target: to[i][x], time: attacker.stats.stun});
						}
						
						// spread any curse status effects
						Game.spreadCurse(attacker, to[i][x])
						
						// re-render the second canvas if the hero has been damaged
						if (to[i][x] == Game.hero) {
							Game.secondary.render();
						}
						
						// onHit function
						// perhaps make work for other non-weapon things in the future? (TBD)
						// there should be a good system for this - maybe a list of functions called on attack or something, handled by Game.inventoryUpdate
						if (attacker == Game.hero && Player.inventory.weapon.onHit !== undefined) {
							Player.inventory.weapon.onHit(to[i][x]);
						}
						
						// chat relating to being damaged (and dealing damage? TBD)
						if (typeof to[i][x].chat !== "undefined") { // check the character has been given text to say about being damaged
							if (to[i][x].health < to[i][x].stats.maxHealth / 10 && typeof to[i][x].chat.tenPercentHealth !== "undefined") { // 10% health chat message
								to[i][x].say(to[i][x].chat.tenPercentHealth, true, 0, false);
							}
							else if (to[i][x].health < to[i][x].stats.maxHealth / 2 && typeof to[i][x].chat.fiftyPercentHealth !== "undefined") { // 50% health chat message
								to[i][x].say(to[i][x].chat.fiftyPercentHealth, true, 0, false);
							}
							else if (to[i][x].health < to[i][x].stats.maxHealth && typeof to[i][x].chat.firstDamaged !== "undefined") { // first damaged chat message
								to[i][x].say(to[i][x].chat.firstDamaged, true, 0, false);
							}
						}
						
						// remove attacker's stealth
						if (attacker.stats.stealthed) {
							attacker.stats.stealthed = false;
							Game.removeStealthEffects(attacker);
						}
						// remove target's stealth
						if (to[i][x].stats.stealthed) {
							to[i][x].stats.stealthed = false;
							Game.removeStealthEffects(to[i][x]);
						}
						
						if (to[i][x] == Game.hero || attacker == Game.hero) {
							// remove any food status effects (hero is in combat)
							for (let i = 0; i < Game.hero.statusEffects.length; i++) {
								if (Game.hero.statusEffects[i].image === "food") {
									// food status effect; remove it
									Game.hero.statusEffects.splice(i, 1);
									i--;
								}
							}
						}
					}
				}
			}
		}
	}
	
	// move projectile to Random position in circle, where circle is its variance
	varyPosition () {
		if (this.variance !== undefined) {
			if (this.variance > 0) {
				let RandomDistance = Random(0, this.variance * this.variance);
				let RandomAngle = Random(0, Math.PI * 2);
				this.x += Math.sqrt(RandomDistance) * Math.cos(RandomAngle);
				this.y += Math.sqrt(RandomDistance) * Math.sin(RandomAngle);
				
				if (this.hitbox !== undefined) { // move special hitbox
					this.hitbox.x += Math.sqrt(RandomDistance) * Math.cos(RandomAngle);
					this.hitbox.y += Math.sqrt(RandomDistance) * Math.sin(RandomAngle);
				}
			}
		}
	}
}

// quest NPC (to be merged with merchant)
class NPC extends Character {
	constructor(properties) {
		super(properties);
		
		this.roles = properties.roles; // array of objects, containing anything that can happen when the NPC is touched
	}
}

// person that just moves around and does nothing of use (to be what merchant/quest NPC inherit off)
// currently doesn't move properly
class Villager extends Thing { // to be changed to character
	constructor(properties) {
		super(properties);
		
		this.speed = properties.speed;
		
		this.wait = 0; // total time spent waiting
		
		this.boundary = properties.boundary; // object of circle or rectangle that the npc cannot walk out of (specified by type: "ellipse")
		// currently just rect
		//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse
	}
	
	// co-ordinate movement
	update(delta) {
		// check if the NPC's movement state needs to be reassigned
		if (this.state === undefined) { // state has never been assigned
			this.updateState(undefined);
		}
		
		// movement
		else if (this.state.x !== undefined) {
		
			if (Math.round(this.x / 10) == Math.round(this.state.x / 10) && Math.round(this.y / 10) == Math.round(this.state.y / 10)) { // movement destination reached (to nearest 10px)
				this.updateState("wait");
			}
			
			else { // move towards destination
				this.move(delta);
			}
			
		}
		
		// waiting
		else if (this.state.wait !== undefined) {
		
			if (this.state.wait >= this.wait) { // waiting duration reached
				this.updateState("move");
			}
			
			else { // wait
				this.wait++;
				// ...
			}
			
		}
		
	}
	
	// update movement state if the NPC has finished previous action
	// parameter = new state type
	updateState(type) {
		if (type === undefined) { // NPC state has not been defined before
			this.state = {};
			if (Random(0,1) == 0) {
				this.updateState("move"); // NPC will start with movement
			}
			else {
				this.updateState("wait"); // NPC will start with waiting
			}
		}
		
		else if (type === "wait") { // NPC has just finished moving
			this.state.x = undefined;
			this.state.y = undefined;
			this.state.wait = Random(1000, 6000);
		}
		
		else if (type === "move") { // NPC has just finished waiting
			this.state.wait = undefined;
			this.wait = 0;
			this.state.x = Random(this.boundary.x, this.boundary.x + this.boundary.width);
			this.state.y = Random(this.boundary.y, this.boundary.y + this.boundary.height);
		}
	}
	
	move (delta) {
		this.bearing = bearing(this, {x: this.state.x, y: this.state.y}); // update bearing (maybe doesn't need to be done every tick?)
		if (Math.round(this.x / 100) != Math.round(this.state.x / 100)) {
			this.x += Math.cos(this.bearing) * this.speed * delta;
		}
		if (Math.round(this.y / 100) != Math.round(this.state.y / 100)) {
			this.y += Math.sin(this.bearing) * this.speed * delta;
		}
	}
}

// training enemy; displays damage taken rather than health
// e.g: target dummy
class Dummy extends Character {
	constructor(properties) {
		super(properties);
	}
}

// moves and attacks in a hostile way...
class Enemy extends Attacker {
	constructor(properties) {
		super(properties);
		
		// combat traits (specific to enemy)
		this.leashRadius = properties.leashRadius; // how far away the player has to be for the enemy to stop following them
		
		// stats
		this.stats.alwaysMove = properties.stats.alwaysMove || false; // move even when in range
		
		this.deathImage = Loader.getImage(properties.deathImage); // corpse image
		// set width and height to death image dimensions unless otherwise specified
		this.deathImageWidth = properties.deathImageWidth || this.deathImage.width;
		this.deathImageHeight = properties.deathImageHeight || this.deathImage.height;
		
		
		// lootTable: an array of objects for each loot item - these objects contain the item ("item") and chances of looting them ("chance")
		// if properties.lootTableTemplate is an array of lootTables (more than one template), merge them
		let lootTableTemplate = [];
		if (properties.lootTableTemplate !== undefined) {
			for (let i = 0; i < properties.lootTableTemplate.length; i++) {
				lootTableTemplate = lootTableTemplate.concat(properties.lootTableTemplate[i]);
			}
		}
		// merge the arrays properties.lootTable and properties.lootTableTemplate
		if (properties.lootTable !== undefined) {
			this.lootTable = properties.lootTable.concat(lootTableTemplate);
		}
		else {
			this.lootTable = lootTableTemplate;
		}
		// merge the loot table with the global loot table as well
		if (this.hotility === "hostile") {
			this.lootTable = this.lootTable.concat(EnemyLootTables.global);
		}
		else if (this.hotility === "boss") {
			this.lootTable = this.lootTable.concat(BossLootTables.global);
		}
		// see generateLoot() function in Enemy for how the lootTable works
		
		this.xpGiven = properties.xpGiven;
		
		this.inventorySpace = properties.inventorySpace;
		
		// set when the enemy dies
		this.loot = null; // loot that can be picked up by player (null if the player cannot loot the enemy or already has)
		// loot is an array of objects, where the object has properties item and quantity
		
		// boss stuff
		if (this.hostility === "boss") {
			this.bossKilledVariable = properties.bossKilledVariable; // set to date killed to check it hasn't been killed today
		}
	}
	
	update (delta) {
		if (this.hasStatusEffect("Stunned")) {
			// enemy is stunned
		}
		else if (this.hasStatusEffect("Displacement")) {
			// being displaced!
			this.displace(delta);
		}
		else {
			// perhaps condense into hostile and passive ai functions (that also apply to things like villagers)?
			
			// update stats function (might be used to set the value of range, etc.)
			if (this.updateStats !== undefined) {
				this.updateStats();
			}
			
			if (this.channelling === false) {
				// stuff should only be done if it does not cancel something that is being channelled
				
				let dist = distance(this, Game.hero);
				
				// find a spell that is not on cooldown and can be cast
				// TBD enemy mana
				let spellIndex = -1;
				if (this.spells.length !== 0) {
					// enemy has some spells
					spellIndex = this.spells.findIndex(spell => spell.ready &&
						(spell.castCondition === undefined || spell.castCondition()));
				}
				
				if (spellIndex !== -1) {
					// a spell has been found that is ready
					let spell = this.spells[spellIndex];
					// no longer ready
					spell.ready = false;
					// cast the spell
					this.channelSpell(spell.name, spell.tier, spell.parameters());
					// spell interval (how often it is cast by enemy)
					setTimeout(function (spellIndex) {
						this.spells[spellIndex].ready = true;
					}.bind(this), spell.interval, spellIndex);
				}
				
				else if (dist < this.stats.range && // hero is within range
				(!Game.hero.stats.stealthed || this.isTouching(Game.hero))) { // hero is not stealthed OR they are and you are touching them
					// enemy should attack hero
					// canAttack is inside if statement because otherwise the enemy moves when it is in range but cannot attack
					if (this.canAttack) { // projectile can be shot
						this.shoot([[Game.hero],]);
					}
					// alwaysMove stat means that it always moves even when in range
					else if (this.stats.alwaysMove &&
					dist > 20 && // stop any stuttering on top of hero
					dist < this.leashRadius) { // not outside of leashRadius from hero
					!Game.hero.stats.stealthed && // hero is not stealthed
						this.move(delta, Game.hero);
					}
				}
				
				else if (dist > this.leashRadius) { // enemy should move passively
					// passive movement within given (to be given...) boundaries...
				}
				
				else if (dist < this.leashRadius && // not outside of leashRadius from hero
				dist > this.stats.range && // can't yet attack hero
				!Game.hero.stats.stealthed) { // hero is not stealthed
					// enemy should move towards hero
					this.move(delta, Game.hero);
				}
				
			}
			
		}
		
		// if player has a magnet, pull in enemies (even if enemy is stunned or displaced)
		// this effect stacks!
		for (let i = 0; i < Player.inventory.items.length; i++) {
			if (Player.inventory.items[i].magnetism !== undefined) {
				let d = Player.inventory.items[i].range - distance(this, Game.hero);
				if (d > 0) {
					// in range
					let b = bearing(this, Game.hero);
					let speed = Items.item[15].magnetism * (d / Player.inventory.items[i].range);
					this.x += Math.cos(b) * speed * delta;
					this.y += Math.sin(b) * speed * delta;
				}
			}
		}
	}
	
	// move towards entity (towards parameter)
	move (delta, towards) {
		// figure out speed (TBD make separate function for this?)
		let speed = this.speed;
		// speed status effect (can be buff or debuff)
		this.statusEffects.forEach(statusEffect => {
			if (statusEffect.info.speedIncrease !== undefined) {
				// increase speed if the status effect does so
				speed *= 1 + (statusEffect.info.speedIncrease / 100);
			}
		});
		// frostaura
		if (Game.hero.stats.frostaura === true && distance(this, Game.hero) < 150) {
			// range of frostaura is currently 2.5 tiles
			speed /= 2;
		}
		
		this.bearing = bearing(this, towards); // update bearing (maybe doesn't need to be done every tick?)
		this.x += Math.cos(this.bearing) * speed * delta;
		this.y += Math.sin(this.bearing) * speed * delta;
	}
	
	// shoot projectile at array of arrays of enemies (at)
	// currently just the first thing in at is shot at - tbd
	shoot (at) {
		this.canAttack = false;
		
		var projectileX, projectileY, projectileRotate;
		
		projectileX = at[0][0].x;
		projectileY = at[0][0].y;
		projectileRotate = bearing(this, {x: projectileX, y: projectileY}) + Math.PI / 2;
		
		this.channellingProjectileId = Game.nextProjectileId;

		// save projectile into variable
		let shotProjectile = new Projectile({
			map: map,
			x: projectileX,
			y: projectileY,
			attacker: this,
			targets: at,
			width: this.projectile.width,
			height: this.projectile.height,
			rotate: projectileRotate,
			adjust: {
				x: this.projectile.adjust.x || undefined,
				y: this.projectile.adjust.y || undefined,
				towards: this.projectile.adjust.towards || undefined,
			},
			image: this.projectile.image,
			variance: this.stats.variance,
			type: "projectiles"
		});
		shotProjectile.varyPosition(); // move projectile based on its variance
		
		Game.projectiles.push(shotProjectile); // add projectile to array of projectiles
		
		// damage allies that the projectile is touching
		shotProjectile.dealDamage(this, at);
		
		// onAttck function for enemy
		if (this.stats.onAttack !== undefined) {
			this.stats.onAttack();
		}
		
		// wait to shoot next projectile
		setTimeout(function () {
			this.canAttack = true;
		}.bind(this), this.stats.reloadTime);
		
		// after a timeout (2s), remove the projectile that was just shot
		// taken from Player
		let a = this.channellingProjectileId; // maintain a variable of the currently shot projectile
		Game.objectRemoveTimeouts.push(setTimeout(function (a) {
			Game.projectiles.splice(Game.searchFor(a, Game.projectiles), 1); // find the id of the to-be-removed projectile and remove it
		}, 1500, a)); // pushed to objectRemoveTimeouts so it can be removed when the area is changed
		
		this.channellingProjectileId = null;
	}
	
	// generate loot from lootTable (called when enemy dies or a chest is added)
	generateLoot (lootTable) {
		if (this.loot === null) {
			let loot = Game.generateLoot(lootTable);
			loot = Game.formatLoot(loot);
			this.loot = Game.positionLoot(loot, this.inventorySpace);
		}
		else {
			console.error("Expected this.loot to be null, however it was not. Loot has not been generated.");
		}
	}
}

// can be looted
class LootChest extends Thing {
	constructor(properties) {
		super(properties);
		
		let loot = properties.loot; // items contained and their quantities
		this.inventorySpace = properties.inventorySpace;
		
		// format and position loot
		loot = Game.formatLoot(loot);
		this.loot = Game.positionLoot(loot, this.inventorySpace);
		
		this.disappearAfterOpened = properties.disappearAfterOpened; // whether it should hide straight after being looted (hence deleting any remaining loot)
		
		this.canBeLooted = properties.canBeLooted; // optional function (returns false if the item is still shown but shouldn't be looted)
		
		this.chestKey = properties.chestKey; // the item required to open the chest (and removed once it is opened)
		// if the chest cannot be opened because of the lack of a key, the player is told about this in chat
		
		// chest is locked if the chest requires a chestKey
		// note that this property is reset on areaChange (hence the chest has either been removed or will be locked again when the player returns)
		this.locked = false;
		if (this.chestKey !== undefined) {
			this.locked = true;
		}
	}
	
	openLoot (arrayIndex) {
		Dom.choose.page(this, ["Loot chest"], [function (chest) {
			Dom.loot.page(chest.name, chest.loot);
			Dom.loot.currentId = "c"+arrayIndex;
			// "c"+i is a string that allows the loot menu to be identified - c means chest, and arrayIndex is the index of the enemy in Game.chests
			// the loot menu closes when the area changes anyway, so this will always work
			// Dom.loot.currentId is only ever used in main, in the function Game.lootClosed() (called by index.html)
		}], [[this]]);
	}
}

// can be looted
class Cannon extends Thing {
	constructor(properties) {
		super(properties);
		
		this.firingStatus = 0; // 0 = not loaded; 1 = loaded
		
		this.canBeInteractedWith = true; // set to false during timeout
		
		this.levelRequirement = properties.levelRequirement; // level requirement to use cannon
		// maybe introduce quest requirement in future?
	}
	
	interact () {
		if (this.canBeInteractedWith) {
			if (this.firingStatus === 0) {
				// load cannon
				this.firingStatus = 1;
				this.canBeInteractedWith = false;
				setTimeout(function () {
					this.canBeInteractedWith = true;
				}.bind(this), 1000);
			}
			else if (this.firingStatus === 0) {
				// fire cannon
				this.firingStatus = 0;
				this.canBeInteractedWith = false;
				
				// cannonball
				Game.things.push(new Thing({
					//image: ,
					name: "Cannonball",
					x: this.x,
					y: this.y,
					type: "thing",
				}));
				
				setTimeout(function () {
					this.canBeInteractedWith = true;
				}.bind(this), 1000);
			}
		}
	}
}

// can be opened for mail
class Mailbox extends Thing {
    constructor(properties) {
        super(properties);
        
        // image key names displayed when read/unread
        this.readImage = properties.readImage;
        this.unreadImage = properties.unreadImage;
    }
}

//
// Status effects
//

// status effect constructor
function statusEffect(properties) {
	this.title = properties.title; // displayed title
	this.effect = properties.effect; // displayed effect (displayed in the DOM as a description of the status effect, in player stats)
	
	this.info = properties.info || {}; // extra information (e.g: poison damage and length)
	
	this.tick = properties.tick; // function to be carried out every second
	
	this.image = properties.image; // image to be shown
	
	this.owner = properties.owner; // who the status effect was inflicted upon
}

// check through owner's status effects to see which can be removed (due to having expired)
// called by a status effect's own tick function
// might need to be reworked (tbd)
// tbd rework to be like Game.removeStealthEffects
Game.removeStatusEffect = function (owner) {
	for (let i = 0; i < owner.statusEffects.length; i++) { // iterate through owner's status effects
		// check that the status effect can expire
		if (typeof owner.statusEffects[i].info.time !== "undefined" && typeof owner.statusEffects[i].info.ticks !== "undefined") {
			// check if it has expired
			if (owner.statusEffects[i].info.ticks >= owner.statusEffects[i].info.time) {
				owner.statusEffects.splice(i, 1); // remove it
				i--;
			}
		}
	}
	// refresh canvas status effects if the status effect was applied to player
	if (owner.constructor.name === "Hero") {
		Game.hero.updateStatusEffects();
	}
}

// remove stealth status effect once stealth has expired elsewhere (this function is called when stealth expires)
Game.removeStealthEffects = function (owner) {
	if (!owner.stats.stealthed) { // confirm owner is not stealthed
		// remove all stealth status effects
		owner.statusEffects = owner.statusEffects.filter(statusEffect => statusEffect.info.stealth !== true);
		// refresh canvas status effects if the status effect was applied to player
		if (owner.constructor.name === "Hero") {
			Game.hero.updateStatusEffects();
		}
	}
}

// spread any curse status effects to attacked enemy (victim)
Game.spreadCurse = function (attacker, victim) {
	let index = -2; // placeholder
	while (index !== -1) { // repeat until there are no more curse status effects
		index = attacker.statusEffects.findIndex(statusEffect => statusEffect.info.curse === true); // find a curse effect
		if (index >= 0) { // if an effect was found...
			victim.statusEffects.push(attacker.statusEffects[index]); // give the status effect to the victim
			attacker.statusEffects.splice(index, 1); // remove the status effect from the attacker
		}
	}
	// refresh canvas status effects if anything happened to the player
	if (attacker.constructor.name === "Hero" || victim.constructor.name === "Hero") {
		Game.hero.updateStatusEffects();
	}
}

// remove all status effects associated with being on a certain map tile from the target, except those with the title of keep variables
// keep is optional
Game.removeTileStatusEffects = function (target, keep) {
	for (let i = 0; i < target.statusEffects.length; i++) {
		if ((target.statusEffects[i].title === "Swimming"
		|| target.statusEffects[i].title === "Stuck in the mud"
		|| target.statusEffects[i].title === "Ice skating"
		|| target.statusEffects[i].title === "On a path")
		&& target.statusEffects[i].title !== keep) {
			// remove status effect
			target.statusEffects.splice(i,1);
			// refresh canvas status effects if target is the player
			if (target.constructor.name === "Hero") {
				Game.hero.updateStatusEffects();
			}
		}
	}
};

// status effect function array
// so that Hero's status effects can be saved with progress saving (and returned their functions in Game.initStatusEffects)
Game.statusEffects.functions = {
	// generic tick function for all timed status effects
	tick: function (owner, timeTicked) { // decrease time
		if (Round(this.info.ticks) < this.info.time) { // check effect has not expired
			// call onTick
			if (this.onTick !== undefined) {
				this.onTick(owner);
			}
			
			this.info.ticks += timeTicked / 1000; // timeTicked is in ms
			if (owner.constructor.name === "Hero") { // refresh canvas status effects if the status effect was applied to player
				Game.hero.updateStatusEffects();
			}
			// calculate next tick time
			let nextTickTime = 1000;
			if (this.info.time - this.info.ticks <= 2
			&& this.onTick === undefined) {
				// faster tick if effect is approaching its end (and there is no onTick function)
				nextTickTime = 100;
			}
			setTimeout(function (owner) {
				// nextTickTime is timeTicked
				this.tick(owner, nextTickTime);
			}.bind(this), nextTickTime, owner, nextTickTime);
		}
		else { // remove effect interval
			// remove effect
			Game.removeStatusEffect(owner);
			// call onExpire function if it exists
			if (this.onExpire !== undefined) {
				this.onExpire(owner);
			}
		}
	},
	
	// fire onTick
	fireTick: function (owner) {
		owner.takeDamage(this.info.fireDamagePerSecond);
	},
	
	// poison onTick
	poisonTick: function (owner) {
		owner.takeDamage(this.info.poisonDamage / this.info.time);
	},
	
	// food onTick
	foodTick: function (owner) {
		Game.restoreHealth(owner, Round(this.info.healthRestore / this.info.time, 1)); // 1dp
	},
	
	// stealth onExpire
	stealthRemove: function (target) {
		// remove stealth effect
		target.stats.stealth = false;
		Game.removeStealthEffects(target);
	},
	
	// xp onExpire
	decreaseXP: function (target) {
		target.stats.xpBonus -= this.info.xpIncrease;
	},
	
	// restorative timepiece (Items.item[15]) onExpire
	setHealth: function (target) {
		target.health = this.info.oldHealth;
	},
	
	// end displacement effect
	removeDisplacement: function (target) {
		target.isBeingDisplaced = undefined;
		target.expand = 1;
	},
};

// give target a buff/debuff
// properties includes target, effectTitle, effectDescription, increasePropertyName(optional), increasePropertyValue(optional), time(optional), imageName, onExpire(optional)
Game.statusEffects.generic = function (properties) {
	// check that the effect stacks (note that this is opt-out not opt-in - properties.effectStack must be set to "noStack" if it doesn't stack)
	let found = -1;
	if (properties.effectStack !== "noStack") {
		// effect DOES stack
		// try to find an existing effect that does the same and has the same name
		found = properties.target.statusEffects.findIndex(function(element) {
			return element.title === properties.effectTitle &&
			(properties.increasePropertyName === undefined || element.info[properties.increasePropertyName] === properties.increasePropertyValue);
		});
	}
	
	if (found === -1) { // no similar effect currently applied to the target, or effect doesn't stack
		
		// effect description
		let effectText = properties.effectDescription;
		
		properties.target.statusEffects.push(new statusEffect({
			title: properties.effectTitle,
			effect: effectText,
			info: {
				curse: properties.curse ? true : false, // transferred on to enemies on attack
			},
			image: properties.imageName,
		}));
		
		// the status effect that was just added
		// "bound" to the original status effect - if this is editied, it is as well
		let addedStatusEffect = properties.target.statusEffects[properties.target.statusEffects.length - 1];
		
		// check if the status effect has an increaseProperty
		if (properties.increasePropertyName !== undefined) {
			// set the property of the status effect that says the increased stat
			addedStatusEffect.info[properties.increasePropertyName] = properties.increasePropertyValue;
		}
		
		if (properties.time !== undefined) {
			// timed status effect
			
			// add time properties
			addedStatusEffect.info.time = properties.time;
			addedStatusEffect.info.ticks = 0;
			
			// add functions
			// properties.onExpire and properties.onTick are the key names from Game.statusEffects.functions
			if (properties.onExpire !== undefined) {
				 // this is bound to the status effect (hence this.owner and this.info work)
				addedStatusEffect.onExpire = this.functions[properties.onExpire].bind(addedStatusEffect);
				// reference for savedata (used if the target is Game.hero)
				addedStatusEffect.onExpireSource = properties.onExpire; // key name of function reference in Game.statusEffects.functions
			}
			if (properties.onTick !== undefined) {
				 // this is bound to the status effect (hence this.owner and this.info work)
				addedStatusEffect.onTick = this.functions[properties.onTick].bind(addedStatusEffect);
				// reference for savedata (used if the target is Game.hero)
				addedStatusEffect.onTickSource = properties.onTick; // key name of function reference in Game.statusEffects.functions
			}
			
			// tick function
			// reduces status effect time, removes status effect when necessary, calls onTick and onExpire when necessary
			addedStatusEffect.tick = this.functions.tick;
			
			// calculate next tick time
			let nextTickTime = 1000;
			if (properties.time <= 2 && properties.onTick === undefined) {
				// faster tick if effect is approaching its end (and there is no onTick function)
				nextTickTime = 100;
			}
			
			// begin tick
			setTimeout(function (owner) {
				// nextTickTime is timeTicked
				this.tick(owner, nextTickTime);
			}.bind(addedStatusEffect), nextTickTime, properties.target, nextTickTime);
		
		}
	}
	else if (found !== -1) { // extend existing status effect
		if (properties.effectStack === "refresh") {
			// refresh time instead of adding time
			properties.target.statusEffects[found].info.ticks = 0;
		}
		else {
			// default - add to max time
			properties.target.statusEffects[found].info.time += properties.time;
		}
	}
	
	if (properties.target.constructor.name === "Hero") { // refresh canvas status effects if the status effect was applied to player
		Game.hero.updateStatusEffects();
	}
}

// generate an effect description from the amount that a property is increased by, and the rest of the text
Game.statusEffects.generateEffectDescription = function (amount, text) {
	return NumberSign(amount) + text;
}

// give target the fire debuff
// just target and tier parameters required (however if there is no tier, damagePerSecond and time is required)
Game.statusEffects.fire = function(properties) {
	// see if the target is in water (hence cannot be set on fire)
	let water = properties.target.statusEffects.filter(statusEffect => statusEffect.title === "Swimming");
	
	if (water.length === 0) {
		let newProperties = properties;
		// check if there is a tier or if stats are being set manually
		if (properties.tier !== undefined) {
			// tiered
			// turn tier into roman numeral
			newProperties.tier = Romanize(properties.tier);
			
			// find what tier does
			if (newProperties.tier === "I") {
				newProperties.increasePropertyValue = 1; // fireDamagePerSecond
				newProperties.time = 3;
			}
			else {
				console.error("Fire status effect tier " + tier + " has not been assigned damage and time");
			}
		}
		else {
			// manual stats - time and damagePerSecond should be in properties
			newPropertier.tier = "";
			newProperties.increasePropertyValue = properties.damagePerSecond;
		}
		// fire stats have now been set
		
		newProperties.effectTitle = properties.effectTitle || "Fire " + newProperties.tier;
		newProperties.effectDescription = properties.effectDescription || "Take " + newProperties.increasePropertyValue + " damage per second";
		newProperties.increasePropertyName = "fireDamagePerSecond";
		newProperties.onTick = "fireTick";
		newProperties.imageName = "fire";
		newProperties.effectStack = "refresh"; // effect refreshes (doesn't extend time above 3s)
		this.generic(newProperties);
	}
}

// give target the poison debuff
// damage per second = poisonDamage / time
// target, poisonDamage and time parameters are the only parameters required
Game.statusEffects.poison = function(properties) {
	let newProperties = properties;
	newProperties.effectTitle = properties.effectTitle || "Poisoned";
	newProperties.effectDescription = properties.effectDescription || "Take " + properties.poisonDamage + " damage over time";
	newProperties.increasePropertyName = "poisonDamage";
	newProperties.increasePropertyValue = properties.poisonDamage;
	newProperties.onTick = "poisonTick";
	newProperties.imageName = "poison";
	newProperties.effectStack = "noStack"; // effect does not stack
	this.generic(newProperties);
}

// give target the stunned debuff
// just target and time parameters required
Game.statusEffects.stun = function(properties) {
	let newProperties = properties;
	newProperties.effectTitle = properties.effectTitle || "Stunned";
	newProperties.effectDescription = properties.effectDescription || "Cannot move or attack";
	newProperties.imageName = "stunned";
	this.generic(newProperties);
}

// give target the attackDamage buff/debuff
// properties includes target, effectTitle, damageIncrease, time
Game.statusEffects.attackDamage = function (properties) {
	let newProperties = properties;
	newProperties.effectDescription = properties.effectDescription || this.generateEffectDescription(properties.damageIncrease, "% attack damage");
	newProperties.increasePropertyName = "damageIncrease";
	newProperties.increasePropertyValue = properties.damageIncrease;
	if (properties.damageIncrease > 0) {
		newProperties.imageName = "damageUp";
	}
	else {
		newProperties.imageName = "damageDown";
	}
	this.generic(newProperties);
}

// give target a walkspeed buff/debuff
// properties includes target, effectTitle, speedIncrease, time
Game.statusEffects.walkSpeed = function(properties) {
	let newProperties = properties;
	newProperties.effectDescription = properties.effectDescription || this.generateEffectDescription(properties.speedIncrease, "% walk speed");
	newProperties.increasePropertyName = "speedIncrease";
	newProperties.increasePropertyValue = properties.speedIncrease;
	if (properties.speedIncrease > 0) {
		newProperties.imageName = "speedUp";
	}
	else {
		newProperties.imageName = "speedDown";
	}
	this.generic(newProperties);
}

// give target a lifesteal buff
// properties includes target, effectTitle, lifestealIncrease, time
Game.statusEffects.lifesteal = function(properties) {
	let newProperties = properties;
	newProperties.effectDescription = properties.effectDescription || this.generateEffectDescription(properties.lifestealIncrease, "% lifesteal");
	newProperties.increasePropertyName = "lifestealIncrease";
	newProperties.increasePropertyValue = properties.lifestealIncrease;
	newProperties.imageName = "lifesteal";
	this.generic(newProperties);
}

// give target a stealth buff
// properties includes target, effectTitle, time(optional)
Game.statusEffects.stealth = function(properties) {
	let newProperties = properties;
	newProperties.effectDescription = "Cannot be seen by enemies until attack";
	newProperties.increasePropertyName = "stealth";
	newProperties.increasePropertyValue = true;
	newProperties.imageName = "stealth";
	if (properties.time !== undefined) {
		// if it is a timed stealth effect, make sure to remove the stealth when it expires
		newProperties.onExpire = "stealthRemove";
	}
	// give target stealth
	properties.target.stats.stealthed = true;
	// add status effect
	this.generic(newProperties);
}

// give target a defence buff/debuff
// properties includes target, effectTitle, defenceIncrease, time, subSpecies (optional)
Game.statusEffects.defence = function(properties) {
	let newProperties = properties;
	if (newProperties.subSpecies !== undefined) {
		// targeted against a specific subspecies
		newProperties.effectDescription = properties.effectDescription || this.generateEffectDescription(properties.defenceIncrease, "% defence against " + properties.subSpecies + "s");
	}
	else {
		// general
		newProperties.effectDescription = properties.effectDescription || this.generateEffectDescription(properties.defenceIncrease, "% defence");
	}
	newProperties.increasePropertyName = "defenceIncrease";
	newProperties.increasePropertyValue = properties.defenceIncrease;
	if (properties.speedIncrease > 0) {
		newProperties.imageName = "defenceUp";
	}
	else {
		newProperties.imageName = "defenceDown";
	}
	this.generic(newProperties);
}

// give target a food buff
// properties includes target, effectTitle, healthRestore, time
Game.statusEffects.food = function(properties) {
	let newProperties = properties;
	newProperties.effectDescription = this.generateEffectDescription(properties.healthRestore, " health restored over time whilst not in combat");
	newProperties.increasePropertyName = "healthRestore";
	newProperties.increasePropertyValue = properties.healthRestore;
	newProperties.imageName = "food";
	newProperties.onTick = "foodTick";
	this.generic(newProperties);
}

// give target a xp buff / debuff (changes Game.hero.stats.xpBonus)
// properties includes target, effectTitle, xpIncrease, time
Game.statusEffects.xp = function(properties) {
	let newProperties = properties;
	newProperties.effectDescription = properties.effectDescription || this.generateEffectDescription(properties.xpIncrease, "% XP gain");
	newProperties.increasePropertyName = "xpIncrease";
	newProperties.increasePropertyValue = properties.xpIncrease;
	if (properties.xpIncrease > 0) {
		newProperties.imageName = "xpUp";
	}
	else {
		newProperties.imageName = "xpDown";
	}
	// increase XP
	properties.target.stats.xpBonus += properties.xpIncrease;
	// decrease XP on expire
	newProperties.onExpire = "decreaseXP";
	
	this.generic(newProperties);
}

//
// Spells
//

// arrays in a spell object have their index correspond to the spell tier - 1

Game.spells.charge = {
	class: "k",
	
	// properties should contain tier (as int value), caster, target
	func: function (properties) {
		let dist = distance(properties.caster, properties.target);
		let velocity = Game.spells.charge.velocity[properties.tier-1];
		let time = dist / velocity;
		let bear = bearing(properties.caster, properties.target);
		properties.caster.displace(0, velocity, time, bear); // start displacement
	},
	
	velocity: [
		300,	// tier 1
	],
	
	channelTime: [
		500,	// tier 1
	],
	
	// TBD
	manaCost: [
		0,		// tier 1
	],
	
	cooldown: [
		1500,	// tier 1
	],
};

//
// Item functions
//

// launch a firework! (circle-shaped)
// properties should contain x, y, radius (radius of firework circle) ... 
// ... particles (number of particles), explodeTime (time to reach maximum radius) ...
// ... lingerTime (time remained at maximum radius), colours (an array of hex)
Game.launchFirework = function (properties) {
	// sunflower seed distribution is used to randomly distribute points in a circle
	// thanks https://stackoverflow.com/a/28572551/9713957 :)
	let alpha = 0;
	let b = Math.round(alpha*Math.sqrt(properties.particles)); // number of boundary points
	let phi = (Math.sqrt(5)+1)/2; // golden ratio
	for (let i = 0; i < properties.particles; i++) {
		// position calculations for maximum position from centre
		let r;
	    if (i+1 > properties.particles - b) {
			// place on the boundary
			r = properties.radius;
		}
		else {
			// apply square root
			r = (Math.sqrt(i/2)/Math.sqrt(properties.particles-(b+1)/2)) * properties.radius;
		}
		let theta = 2*Math.PI*(i+1)/Math.pow(phi,2);
		// positioning (net movement from properties.x and properties.y)
		let x = r*Math.cos(theta);
		let y = r*Math.sin(theta);
		// create a new particle
		this.createParticle({
			x: properties.x,
			y: properties.y,
			width: 2,
			height: 2,
			colour: properties.colours, // class Particle chooses random colour from array
			moveTowards: {
				x: x + properties.x,
				y: y + properties.y,
				time: properties.explodeTime,
			},
			removeIn: properties.explodeTime + properties.lingerTime,
			light: true, // fireworks appear light
		});
	}
}

// add a new trail particle around the character (normally called by a setInterval)
// the particle data is saved in trailParticle
Game.addTrailParticle = function (character, trailParticle) {
	trailParticle.x = character.x + Random(-trailParticle.variance, trailParticle.variance);
	trailParticle.y = character.y + Random(-trailParticle.variance, trailParticle.variance);
	Game.createParticle(trailParticle); // Game not this because it is called by setInterval
}

//
// Load game
//

// load game for the first time
Game.load = function (names, addresses) {
	this.ctx.imageSmoothingEnabled = false;
	
	if (names.length !== addresses.length) {
		throw Error("Name length is not the same as address length. Consider fixing your area's images object in areadata.js?");
	}
	
	let toLoad = [];
	
	for (let i = 0; i < names.length; i++) {
		if (addresses[i] !== undefined) { // it might be undefined if the event for the character is not active
			toLoad.push(Loader.loadImage(names[i], addresses[i]));
		}
	}
	
	// check player image has been loaded (if not, then load it)
	if (!Object.keys(Loader.images).includes("hero")) {
		// load image based on class
		toLoad.push(Loader.loadImage("hero", "./assets/player/" + Player.class + Player.skin + ".png"));
	}
	
	// check if the class' default projectile has been loaded
	if (!Object.keys(Loader.images).includes(this.heroProjectileName)) {
		// load class' default projectile
		toLoad.push(Loader.loadImage(this.heroProjectileName, "./assets/projectiles/" + this.heroProjectileName + ".png"));
	}
	
	// check status image has been loaded (if not, then load it)
	if (!Object.keys(Loader.images).includes("status")) {
		toLoad.push(Loader.loadImage("status", "./assets/icons/status.png"));
	}
	
	// check fishing bobber has been loaded (if not, then load it)
	// maybe this should just be done if the player has a fishing rod? - tbd
	if (!Object.keys(Loader.images).includes("bobber")) {
		toLoad.push(Loader.loadImage("bobber", "./assets/projectiles/bobber.png"));
	}
	
    return toLoad;
};

// pull data from areadata.js
Game.loadArea = function (areaName, destination) {
	
	this.areaTeleports = []; // stop player from teleporting again during promise
	
	// wipe previously loaded images
	Loader.wipeImages([
		// images not to be wiped (ignored if they haven't been loaded)
		"hero",
		this.heroProjectileName,
		"bobber",
		"status",
	]);
	
	// set game time of day (day or night)
	this.time = this.getTime(areaName);
	
	// load images
	let imageNames = Object.keys(Areas[areaName].images);
	let imageAddresses = Object.values(Areas[areaName].images);
	imageAddresses = imageAddresses.map(image => {
		if (Game.event === "Christmas" && image.christmas !== undefined) {
			// christmas images
			return image.christmas;
		}
		else if (Game.event === "Samhain" && image.samhain !== undefined) {
			// christmas images
			return image.samhain;
		}
		else {
			return image.normal; // if this is undefined, the image is not loaded in by Game.load
		}
	});
    let p = this.load(imageNames, imageAddresses);
	
	// wait until images have been loaded
    Promise.all(p).then(function (loaded) {
		
		this.areaName = areaName;
		
		// map
		// there are some properties that some areaData areas don't have, so should be undefined rather than the old value
		map.solidTiles = undefined;
		map.waterTiles = undefined;
		map.iceTiles = undefined;
		map.mudTiles = undefined;
		map.pathTiles = undefined;
		// now add all properties from areaData to the map variable
		Object.assign(map, Areas[areaName].mapData);
		// ice tiles only exist if the area isIcy
		if (Areas[areaName].isIcy !== undefined && Areas[areaName].isIcy()) {
			// area is icy
			// any water tiles that are also ice tiles are now no longer water tiles
			map.waterTiles = map.waterTiles.filter(tile => {
				if (map.iceTiles.includes(tile)) {
					return false;
				}
				else {
					return true;
				}
			});
		}
		else {
			// purge the ice!
			map.iceTiles = undefined;
		}
	
		// if it is nighttime, change all daytime tiles to their nighttime versions
		if (this.time === "night" && typeof Areas[areaName].mapData.nightTiles !== "undefined") {
			if (Areas[areaName].mapData.nightTiles.length === Areas[areaName].mapData.dayTiles.length) {
				for (let replaceIndex = 0; replaceIndex < Areas[areaName].mapData.nightTiles.length; replaceIndex++) { // iterate through tiles to replace
					for (let tileIndex = 0; tileIndex < Areas[areaName].mapData.layers[0].length; tileIndex++) { // iterate through area's tiles to find those that need replacing
						if (map.layers[0][tileIndex] == Areas[areaName].mapData.dayTiles[replaceIndex]) {
							// tile needs replacing
							map.layers[0][tileIndex] = Areas[areaName].mapData.nightTiles[replaceIndex];
						}
					}
				}
			}
			else {
				console.error("dayTiles and nightTiles should have the same length in areadata.js for area " + areaName + ", but do not");
			}
		}
		
		// set tileset
		this.tileAtlas = Loader.getImage('tiles');
		
		// recalibrate camera (for areas other than first area)
		if (this.camera != undefined) {
			this.camera.maxX = map.cols * map.tsize - this.canvas.width;
			this.camera.maxY = map.rows * map.tsize - this.canvas.height;
		}
		
		// villagers (currently broken)
		this.villagers = [];
		if (Areas[areaName].villagers !== undefined) {
			Areas[areaName].villagers.forEach(villager => {
				if (this.canBeShown(villager)) { // check if NPC should be shown
					villager.map = map;
					villager.type = "villagers";
					this.villagers.push(new Villager(villager));
				}
			});
		}
		
		// things (aesthetic only)
		this.things = [];
		if (Areas[areaName].things !== undefined) {
			Areas[areaName].things.forEach(thing => {
				if (this.canBeShown(thing)) { // check if NPC should be shown
					thing.map = map;
					thing.type = "things";
					this.things.push(new Thing(thing));
				}
			});
		}
		
		// quest npcs, merchants, identifiers, soul healers, item buyers, etc.
		this.npcs = [];
		if (Areas[areaName].npcs !== undefined) { // check they exist in areadata.js
			Areas[areaName].npcs.forEach(npc => {
				if (this.canBeShown(npc)) { // check if NPC should be shown
					npc.map = map;
					npc.type = "npcs";
					this.npcs.push(new NPC(npc));
				}
			});
		}
		
		// dummies (enemies for training) - trivial (don't damage you)
		this.dummies = [];
		if (Areas[areaName].dummies !== undefined) {
			Areas[areaName].dummies.forEach(dummy => {
				if (this.canBeShown(dummy)) { // check if NPC should be shown
					dummy.map = map;
					dummy.type = "dummies";
					this.dummies.push(new Dummy(dummy));
				}
			});
		}
		
		// enemies
		this.enemies = [];
		if (Areas[areaName].enemies !== undefined) {
			Areas[areaName].enemies.forEach(enemy => {
				if (this.canBeShown(enemy)) { // check if NPC should be shown
					// this is done now so that the boss can be checked
					if (enemy.template !== undefined) {
						enemy = Object.assign(enemy.template, enemy); // add template properties to main properties object
					}
					// if enemy is a boss, it is only shown if it was not killed today
					if (enemy.hostility !== "boss" || GetFullDate() - Player.bossesKilled[enemy.bossKilledVariable] > 0) { // not a boss or it wasn't killed today
						enemy.map = map;
						enemy.type = "enemies";
						this.enemies.push(new Enemy(enemy));
						// check for blood moon
						if (Game.time === "bloodMoon" && (enemy.hostility === "hostile" || enemy.hostility === "boss")) {
							// blood moon - enemies have more health
							this.enemies[this.enemies.length - 1].health *= 2;
							this.enemies[this.enemies.length - 1].stats.maxHealth *= 2;
						}
					}
				}
			});
		}
		
		// loot chests
		this.chests = [];
		if (Areas[areaName].chests !== undefined) {
			Areas[areaName].chests.forEach(chest => {
				if (this.canBeShown(chest)) { // check if NPC should be shown
					chest.map = map;
					chest.type = "chests";
					this.chests.push(new LootChest(chest));
				}
			});
		}
		
		// cannons
		this.cannons = [];
		if (Areas[areaName].cannons !== undefined) {
			Areas[areaName].cannons.forEach(cannon => {
				if (this.canBeShown(cannon)) { // check if NPC should be shown
					cannon.map = map;
					cannon.type = "cannons";
					this.cannons.push(new Cannon(cannon));
				}
			});
		}
		
		// particles and projectiles don't persist between areas - cancel their remove timeouts
		if (this.objectRemoveTimeouts !== undefined) {
			for (let i = 0; i < this.objectRemoveTimeouts.length; i++) {
				clearTimeout(this.objectRemoveTimeouts[i]);
			}
		}
		this.objectRemoveTimeouts = [];
		
		// particles
		this.particles = [];
		this.nextParticleId = 0; // reset particle id chain (because particles don't persist between areas)
		
		// reset any channelling projectile (if the player exists)
		if (this.hero !== undefined) {
			Game.hero.channellingProjectileId = null;
			Game.hero.channelling = false;
			Game.hero.canAttack = true;
		}
		
		// projectiles
		this.projectiles = [];
		this.nextProjectileId = 0; // reset projectile id chain (because projectiles don't persist between areas)
		
		// area teleports
		if (Areas[areaName].areaTeleports !== undefined) {
			Areas[areaName].areaTeleports.forEach(areaTeleport => {
				areaTeleport.map = map;
				areaTeleport.type = "areaTeleports";
				this.areaTeleports.push(new AreaTeleport(areaTeleport));
			});
		}
		
		// tripwires (invisible; calls function when touched)
		this.tripwires = [];
		if (Areas[areaName].tripwires !== undefined) {
			Areas[areaName].tripwires.forEach(tripwire => {
				tripwire.map = map;
				tripwire.type = "tripwires";
				this.tripwires.push(new Tripwire(tripwire));
			});
		}
		
		// collisions (invisible; cannot be passed)
		this.collisions = [];
		if (Areas[areaName].collisions !== undefined) {
			Areas[areaName].collisions.forEach(collision => {
				collision.map = map;
				collision.type = "collisions";
				this.collisions.push(new Entity(collision));
			});
		}
		
		// mailboxes
		this.mailboxes = [];
		if (Areas[areaName].mailboxes !== undefined) {
			Areas[areaName].mailboxes.forEach(mailbox => {
				if (this.canBeShown(mailbox)) { // check if mailbox should be shown
					mailbox.map = map;
					mailbox.type = "mailboxes";
					// flag up if there is unread mail
					if (Dom.mail.unread() > 0) {
						// flag up
						mailbox.image = mailbox.unreadImage;
					}
					else {
						// no flag
						mailbox.image = mailbox.readImage;
					}
					this.mailboxes.push(new Mailbox(mailbox));
				}
			});
		}
		
		// infoPoints
		this.infoPoints = [];
		if (Areas[areaName].infoPoints !== undefined) {
			Areas[areaName].infoPoints.forEach(thing => {
				thing.map = map;
				thing.type = "infoPoints";
				this.infoPoints.push(new InfoPoint(thing));
			});
		}
		
		// reset weather
		if (document.getElementById("weatherOn").checked && !Areas[Game.areaName].indoors) {
			Weather.reset();
		}
		
		// display area name (if it should be displayed)
		// init sets displayAreaName.duration to 200 (so even if it shouldn't be displayed normally, it is on start of game)
		this.displayAreaName = Areas[areaName].data;
		if (Areas[areaName].data.displayOnEnter) {
			this.displayAreaName.duration = 200;
		}
		else {
			this.displayAreaName.duration = 0;
		}
		
		// music
		// it is checked if the user has selected for music to be played in the settings within the Game.playMusic function
		this.playMusic();
		
		// init game (if it hasn't been done so already)
		let init = false; // set to if this is the first areaTeleport of the game
		if (this.hero === undefined) {
			this.init();
			init = true;
		}
		else {
			// code to be called when area is accessed due to area teleport (not game load)
		}
		
		// reposition player
		if (destination !== undefined) {
			this.hero.x = destination.x;
			this.hero.y = destination.y;
		}
		// remove player moveTowards
		this.hero.moveTowards = undefined;
		
		// loot area and tier in Player
		if (this.areaName === "tutorial" || this.areaName === "eaglecrestLoggingCamp" || this.areaName === "nilbog") {
			Player.lootArea = "loggingCamp";
			Player.lootTier = 1;
		}
		
		// allow hero to move again if they died
		if (this.hero.respawning) {
			this.hero.respawning = false;
			this.hero.isCorpse = false;
			Dom.chat.insert("You died.");
		}
		
		// if the area is a checkpoint and it is not the player's current checkpoint, update the player's checkpoint
		if (Areas[areaName].checkpoint && this.hero.checkpoint !== areaName) {
			this.hero.checkpoint = areaName;
			Dom.chat.insert("Checkpoint reached! Your spawn location has been set to this location.");
		}
		
		// load in randomly generated loot chests if the area has data for them
		if (Areas[areaName].chestData !== undefined) {
			this.generateChests(Areas[areaName].chestData);
		}
		
		// call onAreaTeleport function if there is one
		if (!init) { // only if the area was teleported to (not game refresh)
			if (Areas[areaName].onAreaTeleport !== undefined) {
				Areas[areaName].onAreaTeleport();
			}
		}
		
		// save in 60 seconds
		// this is set to 60 seconds if there is a save before this
		Game.saveTimeout = setTimeout(function() {
			Game.saveProgress("auto");
		}, 60000);
		
		// choose weather
		Weather.chooseWeather(areaName);
		
		// render secondary canvas
		Game.secondary.render();
		
		// render day/night effects
		Game.renderDayNight();
		
		// Antorax Day fireworks
		if (Game.event === "Antorax" && Areas[areaName].data.territory === "Allied" && !Areas[areaName].indoors && Game.fireworkInterval === undefined) {
			// Antorax Day; area is allied and indoors and a firework interval has not yet been set
			// launch fireworks periodically at random positions
			Game.fireworkInterval = setInterval(function () {
				// same as Antorax Day Firework items
				if (Random(0, 3) === 0) {
					// large firework
					Game.launchFirework({
							x: Random(0, map.cols * map.tsize),
							y: Random(0, map.rows * map.tsize),
						radius: 250,
						particles: 1500,
						explodeTime: 750,
						lingerTime: 2000,
						colours: ["#8cff91", "#ff82f8"], // lighter colours so they are more visible
					});
				}
				else {
					// normal firework
					Game.launchFirework({
						x: Random(0, map.cols * map.tsize),
						y: Random(0, map.rows * map.tsize),
						radius: 150,
						particles: 600,
						explodeTime: 500,
						lingerTime: 2000,
						colours: ["#8cff91", "#ff82f8"], // lighter colours so they are more visible
					});
				}
			}, 200, Game.areaName);
		}
		else if (Game.fireworkInterval !== undefined) {
			// remove interval from a previous area
			clearInterval(Game.fireworkInterval);
			Game.fireworkInterval = undefined;
		}
		
		// time travel fog
		/*
		if (Areas[areaName].timeTravel === true) {
			this.createParticle({
				x: 0,
				y: 0,
				width: 2,
				height: 2,
				colour: "#b7b7b7",
				transparency: Random(3, 7) / 10,
			});
		}
		*/
		
    }.bind(this))
	.catch(function (err) {
		// error for if the images didn't load
	    console.error("Your images did not load correctly, or there was an error in the Game.loadArea function...", err);
	});
}

// initialise game and variables within Game object
Game.init = function () {
	// clear any unintentional chat and welcome player
	Dom.chat.oldString = "";
	Dom.chat.newString = "";
	Dom.chat.contents = [];
	document.getElementById("dot").innerHTML = 0; // no unread messages to start
	if (this.christmasDay) {
	    Dom.chat.insert("Merry Christmas, " + Player.name + "!", 0, false, true);
	}
	else {
	    Dom.chat.insert("Welcome "+(localStorage.getItem(Player.class) !== null ? "back" : "to Antorax")+", " + Player.name + "!", 0, false, true);
	}
	
	// tell the player if they have unread mail
	let unreadMail = Dom.mail.unread();
	if (unreadMail > 1) {
		// plural
		Dom.chat.insert("You have " + unreadMail + " new messages!", 0, false); // tbd - maybe make it more obvious that player has to check their mailbox for this?
	}
	else if (unreadMail > 0) {
		// singular
		Dom.chat.insert("You have " + unreadMail + " new message!", 0, false); // tbd - maybe make it more obvious that player has to check their mailbox for this?
	}
	
	// music
	this.playingMusic = null;
	
	// list of basic (no extra operations to be done) things to be rendered (in order)
	this.renderList = ["things", "infoPoints", "mailboxes", "chests", "villagers", "npcs", "dummies", "enemies"];
	// then player, then projectiles (in order they were shot)
	
	// create the player
	// its x and y are not set until Game.loadArea resumes
	this.hero = new Hero({
		// properties inherited from Entity
		map: map,
		x: Areas[this.areaName].player !== undefined ? Areas[this.areaName].player.x : 0,
		y: Areas[this.areaName].player !== undefined ? Areas[this.areaName].player.y : 0,
		width: 57,
		height: 120,
		
		// properties inheritied from Thing
		image: "hero",
		
		// properties inherited from Character
		direction: 3,
		health: Player.health,
		name: Player.name,
		level: Player.level,
		class: Player.class,
		
		// properties inherited from Attacker
		
		// stats
		stats: Player.stats,
		
		trail: Player.trail,
		
		// projectile (TBD)
		projectile: {},
		
		checkpoint: Player.checkpoint,
	});
	
	// hitbox for collision (hero's feet)
	// Player.x used instead of Game.hero.x because Game.hero.x has not yet been set
	this.heroFootHitbox = new Entity({
		map: map,
		x: Player.x,
		y: Player.y + 50,
		width: Game.hero.width,
		height: 20,
	});
	
	// set player projectile
	this.projectileImageUpdate();
	
	// set loaded status image
	this.statusImage = Loader.getImage("status");
	
	// detect player movement and interaction
    Keyboard.listenForEvents(
        [Keyboard.keys.LEFT, Keyboard.keys.RIGHT, Keyboard.keys.UP, Keyboard.keys.DOWN, Keyboard.keys.SPACE, Keyboard.keys.SHIFT]);
		
	// player attack on click
	this.secondary.canvas.addEventListener("mousedown", Game.hero.startAttack.bind(this.hero));
	this.secondary.canvas.addEventListener("mouseup", Game.hero.finishAttack.bind(this.hero));
	
	// change between default cursor and crosshair based on player range
	this.secondary.canvas.addEventListener("mousemove", Game.secondary.updateCursor.bind(this.secondary));
	
	// fps array (used for tracking frames per second in Game.fps())
	this.fpsArray = [];
	
	// health regeneration every second
	setInterval(function () {
		if (document.hasFocus()) { // check user is focused on the game (otherwise enemies cannot damage but user can heal)
			this.regenHealth();
		}
	}.bind(this), 1000);
	
	// hero trail interval
	if (Game.hero.trail !== undefined) {
		// hero has a trail
		// new particle every 100ms
		Game.hero.trailInterval = setInterval(Game.addTrailParticle, 100, Game.hero, Game.hero.trail);
	}
	
	// game view camera
    this.camera = new Camera(map, this.canvas.width, this.canvas.height);
    this.camera.follow(this.hero);
	
	// set foot hitbox position (updated on hero move normally)
	this.updateScreenPosition(this.heroFootHitbox);
	
	// init weather
	Weather.init();
	
	// set displayAreaName.duration to 200 (so even if it shouldn't be displayed normally, it is on start of game)
	this.displayAreaName.duration = 200;
	
	// start Game tick
	window.requestAnimationFrame(this.tick);
	
	// re-init hero's saved status effects
	this.initStatusEffects()
	
	// DOM functions to be run when class is loaded
	Dom.hotbar.update();
	Dom.inventory.update();
	// update quest log
	Dom.checkProgress();
	Dom.quests.possible();
	Dom.quests.completed();
	Dom.changeBook(Player.tab); // sets tab to whatever the player was on when they last saved
	Dom.adventure.update(); // chooses what should be shown in adventurer's log
};

// re-start hero status effect ticks (from savedata)
Game.initStatusEffects = function () {
	// iterate through status effects
	for (let i = 0; i < this.hero.statusEffects.length; i++) {
		let statusEffect = this.hero.statusEffects[i];
		
		if (statusEffect.info.time !== undefined) { // check if status effect should tick
			// give the status effect the tick function
			statusEffect.tick = this.statusEffects.functions.tick;
			
			// if it has an onExpire function, add it
			if (statusEffect.onExpireSource !== undefined) {
				statusEffect.onExpire = this.statusEffects.functions[statusEffect.onExpireSorce];
			}
			// if it has an onTick function, add it
			if (statusEffect.onTickSource !== undefined) {
				statusEffect.onTick = this.statusEffects.functions[statusEffect.onTickSource];
			}
			
			// calculate next tick time
			let nextTickTime = 1000;
			if (statusEffect.info.time <= 2 && statusEffect.onTick === undefined) {
				// faster tick if effect is approaching its end (and there is no onTick function)
				nextTickTime = 100;
			}
			
			// begin tick
			setTimeout(function (owner) {
				// nextTickTime is timeTicked
				statusEffect.tick(owner, nextTickTime);
			}.bind(statusEffect), nextTickTime, Game.hero, nextTickTime);
		}
	}
}

//
// Chests and loot
//

// generate chest(s) around area
Game.generateChests = function (chestData) {
	if (GetFullDate() - Player.chestsOpened[this.areaName] > 0) {
		// chest last opened at least a day ago
		// spawn chests
		let spawnLocationArray = chestData.spawnLocations.slice(); // so that chestData itself is not changed
		for (let i = 0; i < chestData.spawnAmount; i++) {
			let locationIndex = Random(0, spawnLocationArray.length - 1);
			let spawnLocation = spawnLocationArray[locationIndex];
			spawnLocationArray.splice(locationIndex, 1); // so it cannot be picked by the next chest in for loop (if there is one)
			
			// concatenate loot tables (for if there are multiple)
			let lootTable = [];
			for (let i = 0; i < chestData.lootTableTemplate.length; i++) {
				lootTable = lootTable.concat(chestData.lootTableTemplate[i]);
			}
			// global loot table
			lootTable = lootTable.concat(ChestLootTables.global);
			
			// make chest
			this.chests.push(new LootChest({
				x: spawnLocation.x,
				y: spawnLocation.y,
				name: "Loot Chest", // used to set the loot chest opened date
				image: "lootChest",
				loot: Game.generateLoot(lootTable), // this is formatted and positioned in the loot chest class
				inventorySpace: chestData.inventorySpace,
				map: map,
				type: "chests",
				chestKey: chestData.chestKey, // key required for chest opening
			}));
		}
	}
}

// for enemies and loot chests
// returns an array with loot generated from a loot table
Game.generateLoot = function (lootTable) {
	let lootArray = [];
	for (let i = 0; i < lootTable.length; i++) {
		// check if item is eligible to be looted by the player (i.e. correct quest has been started, they haven't already looted it, etc.)
		let itemCanBeLooted = true;
		if (lootTable[i].condition !== undefined) {
			itemCanBeLooted = lootTable[i].condition();
		}
		
		if (itemCanBeLooted) {
			// for each item, a Random number between 0 and 100 is generated
			// lootTable is an array of objects, where the objects have a property called chance (an array)
			// chance contains the probability of getting x amount of that item, where x is the array index of the probability
			// the lowest number that the roll is higher than is selected for the number of that item that the player receives
			// the numbers in the array are multiplied by player's looting
			
			let possibleDropChances = lootTable[i].chance.map(element => element * (Game.hero.stats.looting/100)); // multiply chances by looting, deep copying array in process
			let rollRandom = Random(0, 100); // random number to see how much of item i the player will get (lower is better)
			let eligibleDropChances = possibleDropChances.filter(chance => rollRandom > chance); // filter chances of getting item to see all chances the player is eligible for with their roll
			let itemQuantity = possibleDropChances.indexOf(Math.max(...eligibleDropChances)); // get the number of that item the player will get
			
			if (itemQuantity > 0) { // check that the player should recieve the item
				let item = lootTable[i].item;
				if (item.constructor === Array) {
					// if there are multiple items in an array, pick one at random
					item = item[Random(0, item.length - 1)];
				}
				
				if (item.name === "unidentified") {
					// repeat separately for each unidentified item
					for (let i = 0; i < itemQuantity; i++) {
						let itemToBePushed = {
							item: new UnId(item.area, item.tier), // construct unidentified item
							quantity: 1,
						};
						lootArray.push(itemToBePushed);
					}
				}
				else {
					let itemToBePushed = {
						item: item,
						quantity: itemQuantity,
					};
					lootArray.push(itemToBePushed);
				}
			}
		}
	}
	return lootArray;
}

// format array of items to have the correct quantities and stacks
Game.formatLoot = function (items) {
	for (let i = 0; i < items.length; i++) {
		// default stack size is 1
        if (items[i].item.stack === undefined) {
            items[i].item.stack = 1;
        }
		// default stacked quantity value is 1
        if (items[i].quantity === undefined) {
            items[i].quantity = 1;
        }
		// if there is more stacked than allowed, split the excess
        if (items[i].quantity > items[i].item.stack) {
            items.push({item: items[i].item, quantity: items[i].quantity-items[i].item.stack,});
            items[i].quantity = items[i].item.stack;
        }
    }
	
	return items;
}

// position loot ready for Dom.loot.page
// takes array of items and places them randomly in an array with (space) indices
// there are hence empty positions in the array (empty objects)
Game.positionLoot = function (items, space) {
    let spaces = [];
    let display = [];
	// generate array of possible spaces (these are removed when an item takes that random space)
    for (let i = 0; i < space; i++) {
        spaces.push(i);
        display.push(undefined);
    }
    for (let i = 0; i < items.length; i++) {
		if (spaces.length === 0) {
			// no spaces left
			console.warn("An item was truncated from the loot array due to there not being enough space in the lootee's inventory.")
			break; // end for loop
		}
		else {
			// get a random position and add the item to that position
	        let rnd = Random(0, spaces.length - 1);
	        display[rnd] = items[i];
			// remove the random position
	        spaces.splice(rnd,1);
		}
    }
    return display;
}

//
// Date and checkEvents
//

// check for events
Game.checkEvents = function () {
	// get date
	let today = new Date();
	let day = today.getDate();
	let month = today.getMonth() + 1; // January is 0, so add 1
	let year = today.getFullYear();
	
	// James Day
	// Summer Solstice
	if (day === 21 && month === 6) {
		Game.event = "James";
		Dom.inventory.give(Items.boots[7], 1);
	}
	// Samhain (Halloween)
	// Blood Moon
	else if ((day >= 22 && month === 10) || (day <= 5 && month === 11)) {
		Game.event = "Samhain";
	}
	// Christmas
	else if (month === 12) {
		Game.event = "Christmas";
		// Christmas Day
		if (day === 25) {
			Game.christmasDay = true;
		}
		else {
			Game.christmasDay = false;
		}
	}
	// Antorax Day
	else if (month === 1 && day === 20) {
		Game.event = "Antorax";
	}
}

// check time (day or night)
// parameter is areaName for checking the time override for the area
Game.getTime = function (areaName) {
	// check for in-game events
	this.checkEvents();

	// get date and time
	let today = new Date();
	let hour = today.getHours();
	let day = today.getDate();
	let month = today.getMonth() + 1; // January is 0, so add 1
	
	// check if the area always has a specific time
	if (Areas[areaName].time !== undefined) {
		return Areas[areaName].time;
	}
	
	// Summer Solstice - sun up all day
	if (day == 21 && month == 6) {
		return "day";
	}
	// Winter Solstice - sun down all day
	else if (day == 21 && month == 12) {
		return "night";
	}

	// day time
	if (hour >= 7 && hour < 19) {
		return "day";
	}
	// night time
	else if (this.event === "Samhain") {
		return "bloodMoon";
	}
	else {
		return "night";
	}
}

//
// Music
//

// called whenever a new area is entered, with the song specified in areaData
Game.playMusic = function () {
	// check the user has allowed music to play
	if (document.getElementById("musicOn").checked) {
		User.settings.music = true;
		// check if the new area's music is already being played
		let song = Areas[this.areaName]["song_" + this.time];
		if (song === undefined) {
			// song doesn't exist - see why
			if (Areas[this.areaName].indoors) {
				// indoor areas always have daytime song
				song = Areas[this.areaName]["song_day"];
			}
			else if (Game.time === "bloodMoon") {
				// most areas have night song at blood moon
				song = Areas[this.areaName]["song_night"];
			}
			else {
				// no song exists
				console.error("No song exists for the area", this.areaName, "at the time", this.time);
				// no need to load a song
				return;
			}
		}
		if (this.playingMusic !== Areas[this.areaName]["song_" + this.time]) {
			this.loadMusic(Areas[this.areaName]["song_" + this.time]);
		}
	}
}

// loads and plays music, stopping previous music
Game.loadMusic = function (song) {
	// stop previously playing song
	if (this.audio !== undefined) {
		this.stopMusic(); // possibly inefficient? might not unload old audio
	}
	
	this.audio = new Audio(song);
	
	// set music to repeat
	this.audio.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);
	
	this.audio.play();
	this.playingMusic = song;
}

// stop playing current music
Game.stopMusic = function () {
	User.settings.music = false;
	this.audio.pause();
	this.playingMusic = null;
}

// play the level up sound for the current area
// needs to be hard-coded into switch statement for each area... :(
Game.playLevelupSound = function (areaName) {
	// check the user has allowed music to play
	if (document.getElementById("musicOn").checked) {
		
		// find level up sound to play
		switch (areaName) {
			
			case "tutorial":
			case "eaglecrestLoggingCamp":
			case "nilbog":
				var levelUp = new Audio("./assets/sounds/loggingCampLevelup.mp3");
				break;
			
			default:
				var levelUp = false;
				console.error("No level up sound for current area - add it to the switch statement in Game.playLevelupSound");
			
		}
		
		if (levelUp !== false) { // check that the area has been added to the switch statement
		
			this.audio.pause(); // pause currently playing song
			levelUp.play(); //  play levelup sound
			levelUp.addEventListener('ended', function() { // resume area's song when levelup sound has finished
				this.audio.play();
			}.bind(Game), false);
			
		}
		
	}
}

//
// Health
//

// called every second
// healthRegen = health regenerated per second
// tbd make list of characters that regen health
Game.regenHealth = function () {
	// player
	this.restoreHealth(Game.hero, Game.hero.stats.healthRegen);
	// food is done in the food status effect itself
	
	// npcs
	for (let i = 0; i < Game.npcs.length; i++) {
		if (!Game.npcs[i].respawning) {
			this.restoreHealth(Game.npcs[i], Game.npcs[i].stats.healthRegen);
		}
	}
	// dummies
	for (let i = 0; i < Game.dummies.length; i++) {
		if (!Game.dummies[i].respawning) {
			this.restoreHealth(Game.dummies[i], Game.dummies[i].stats.healthRegen);
		}
	}
	// enemies
	for (let i = 0; i < Game.enemies.length; i++) {
		if (!Game.enemies[i].respawning) {
			this.restoreHealth(Game.enemies[i], Game.enemies[i].stats.healthRegen);
		}
	}
}

// restores health to the target, not allowing them to go above their maximum health
// returns true if the target was healed for the full amount
Game.restoreHealth = function (target, health) {
	if (target.health + health > target.stats.maxHealth) {
		// too much health - cap out at maximum
		target.health = target.stats.maxHealth;
		if (target.constructor.name === "Hero") {
			// update health bar display
			Game.secondary.render();
			return false;
		}
	}
	else {
		target.health += health;
		if (target.constructor.name === "Hero") {
			// update health bar display
			Game.secondary.render();
			return true;
		}
	}
}

//
// Update game state
//

Game.update = function (delta) {
    // handle hero movement with arrow keys
	if (this.hero.moveTowards === undefined && !Game.hero.hasStatusEffect("Displacement")) {
		let dirx = 0;
		let diry = 0;
		// player has control over themselves
	    if (Keyboard.isDown(Keyboard.keys.LEFT, "LEFT")) { dirx = -1; this.hero.direction = 2; }
	    if (Keyboard.isDown(Keyboard.keys.RIGHT, "RIGHT")) { dirx = 1; this.hero.direction = 4; }
	    if (Keyboard.isDown(Keyboard.keys.UP, "UP")) { diry = -1; this.hero.direction = 1; }
	    if (Keyboard.isDown(Keyboard.keys.DOWN, "DOWN")) { diry = 1; this.hero.direction = 3; }
	
		if (dirx !== 0 || diry !== 0) {
	        this.hero.move(delta, dirx, diry);
	        this.hasScrolled = true;
	    }
		else {
	        this.hasScrolled = false;
		}
	    this.camera.update();
	}
	else {
		// hero always moves until it reaches a certain destination
		this.hero.move(delta); // no need for direction functions (found out in move)
		this.hasScrolled = true;
	    this.camera.update();
	}
	
	// interact with touching object
    if (Keyboard.isDown(Keyboard.keys.SPACE, "SPACE")) { this.hero.interact(); }
	
	// check collision with npcs - includes quest givers, quest finishers, merchants, soul healers, more TBA
	this.npcs.forEach(npc => { // iterate though npcs
	
		if (!npc.respawning && this.hero.isTouching(npc)) { // check npc is not dead and that hero is touching it
			
			if (typeof npc.roles !== "undefined") { // check if the npc is a functional npc (does something when touched)
				
				// arrays for choose DOM
				let textArray = []; // array of text to describe that function
				let functionArray = []; // array of functions that can be called
				let parameterArray = []; // array of arrays of parameters for these functions (to be ...spread into the function)
				
				let forceChoose = false; // whether choose dom should be forced (some roles want this)
				
				// booleans to decide npc chat for if choose DOM doesn't open
				let questActive = false; // if one of the npc's quests is currently active
				let questComplete = false; // if one of the npc's quests has been completed
				let notUnlockedRoles = false; // if one of the npc's roles has not been unlocked
				let textSaid = false; // if all of the above variables should be ignored (because something else has been said instead, e.g: soul healer cannot be healed text)
				// see below forEach for logic regarding these variables
				
				npc.roles.forEach(role => { // iterate through quests involving that npc
					if (role.roleRequirement === undefined || role.roleRequirement()) {
						// quest starts
						if (role.role === "questStart" || role.role === "questStartFinish") {
							// quest is ready to be accepted
							
							let questCanBeStarted = true; // set to false if the quest cannot be started
							let questToBeStarted = role.quest;
							
							if (role.quest.constructor === Array && role.newQuestFrequency === "daily") {
								// quest is an array (hence a Random one is picked each questing time period)
								// all of these quests are daily quests
								if (role.quest.some(quest => Player.quests.activeQuestArray.includes(quest.name))) { // one of the quests is currently active
									questCanBeStarted = false;
									questActive = true; // for npc dialogue
								}
								else if (role.quest.some(quest => Player.quests.questLastFinished[quest.questArea][quest.id] >= GetFullDate())) { // one of the quests has already been done today (or after today o.O)
									questCanBeStarted = false;
									questComplete = true; // for npc dialogue
								}
								
								// pick a Random one of the quests to be started
								questToBeStarted = questToBeStarted.filter(quest => quest.levelRequirement <= this.hero.level); // filter for player level
								questToBeStarted = questToBeStarted.filter(quest => IsContainedInArray(quest.questRequirements, Player.quests.completedQuestArray)); // filter for quesst requirements
								if (questToBeStarted.length > 0) { // at least one quest survived the level and quest requirements
									questToBeStarted = questToBeStarted[Random(0, questToBeStarted.length - 1)]; //pick Random quest
								}
								else {
									questCanBeStarted = false;
								}
							}
							else {
								// single quest
								if (Player.quests.activeQuestArray.includes(role.quest.quest)) { // quest is already active
									questCanBeStarted = false;
									questActive = true; // for npc dialogue
								}
								else if (role.quest.levelRequirement > this.hero.level) { // player is not a high enough level
									questCanBeStarted = false;
								}
								else if (!IsContainedInArray(role.quest.questRequirements, Player.quests.completedQuestArray)) { // quest requirements have not been completed
									questCanBeStarted = false;
								}
								else if (role.quest.fishingRequirement !== undefined) { // fishing skill is required
									if (Game.hero.stats.fishingSkill > role.quest.fishingRequirement.max || Game.hero.stats.fishingSkill < role.quest.fishingRequirement.min) { // fishing skill not in range
										questCanBeStarted = false;
									}
								}
								else if (role.quest.eventRequirement !== undefined && role.quest.eventRequirement !== Game.event){
									questCanBeStarted = false;
								}
								else {
									// check if it is daily or one time
									if (role.quest.repeatTime === undefined) {
										// one time
										if (Player.quests.completedQuestArray.includes(role.quest.quest)) { // quest has already been completed
											questCanBeStarted = false;
											questComplete = true; // for npc dialogue
										}
									}
									else if (role.quest.repeatTime === "daily") {
										// daily
										if (Player.quests.questLastFinished[role.quest.questArea][role.quest.id] >= GetFullDate()) { // quest has already been done today (or after today o.O)
											// note that if the quest has not been finished (hence questLastFinished is undefined) the condition will always return false
											questCanBeStarted = false;;
											questComplete = true; // for npc dialogue
										}
									}
								}
							}
							
							if (questCanBeStarted) {
								
								if (typeof questToBeStarted.startRewards !== "undefined" && typeof questToBeStarted.startRewards.items !== "undefined") {
									if (Dom.inventory.requiredSpace(questToBeStarted.startRewards.items)) {
										// user has space for quest start items
										// quest start appears as an option for choose DOM
										textArray.push("Quest start: " + questToBeStarted.quest);
										functionArray.push(Dom.quest.start);
										parameterArray.push([questToBeStarted]);
									}
									else {
										// user doesn't have enough space
										npc.say(npc.chat.inventoryFull, true, 0, true);
									}
								}
								else {
									// no quest start items, so user ofc has enough inventory space
									// quest start appears as an option for choose DOM
									textArray.push("Quest start: " + questToBeStarted.quest);
									functionArray.push(Dom.quest.start);
									parameterArray.push([questToBeStarted]);
								}
							}
						}
						
						// quest finishes
						if (role.role === "questFinish" || role.role === "questStartFinish") {
							// check if quest is ready to be finished
							
							let questCanBeFinished = true; // set to false if the quest cannot be finished
							let questToBeFinished = role.quest;
							
							if (role.quest.constructor === Array && role.newQuestFrequency === "daily") {
								// quest is an array (hence a Random one is picked each questing time period)
								// all of these quests are daily quests
								
								let questToBeFinished = role.quest.find(quest => Player.quests.activeQuestArray.includes(quest)); // find which quest the active one is
								
								if (questToBeFinished === undefined) { // none of the quests are currently active
									questCanBeFinished = false;
								}
								
								// no need to check if it has already been completed as these are all daily
							}
							else {
								// single quest
								if (!Player.quests.activeQuestArray.includes(role.quest.quest)) { // quest is not already active
									questCanBeFinished = false;
								}
							}
							
							if (questCanBeFinished) {
								// check if quest conditions have been fulfilled
								if (Quests[role.quest.questArea][role.quest.id].completed) {
									if (typeof role.quest.rewards !== "undefined" && typeof role.quest.rewards.items !== "undefined") {
										if (Dom.inventory.requiredSpace(role.quest.rewards.items)) {
											// user has space for quest finish items
											// quest finish appears as an option for choose DOM
											textArray.push("Quest finish: " + role.quest.quest);
											functionArray.push(Dom.quest.finish);
											parameterArray.push([role.quest]);
										}
										else {
											// user doesn't have enough space
											npc.say(npc.chat.inventoryFull, true, 0, true);
										}
									}
									else {
										// no quest item rewards, so user ofc has enough inventory space
										// quest finish appears as an option for choose DOM
										textArray.push("Quest finish: " + role.quest.quest);
										functionArray.push(Dom.quest.finish);
										parameterArray.push([role.quest]);
									}
								}
								// quest conditions have not been fulfilled
								else {
									questActive = true;
								}
								
							}
							// quest has already been completed
							else if (Player.quests.completedQuestArray.includes(role.quest.quest)) {
								questComplete = true;
							}
						}
						
						// merchants
						else if (role.role === "merchant") {
							// merchant appears as an option for choose DOM
							
							// filter the sold items to check that they are eligible to be sold
							let soldItems = role.sold.filter(soldItem => soldItem.eventRequirement === undefined || soldItem.eventRequirement === Game.event);
							
							// filter for condition
							soldItems = soldItems.filter(soldItem => soldItem.condition === undefined || soldItem.condition() === true);
							
							textArray.push(role.chooseText || "I'd like to browse your goods.");
							functionArray.push(Dom.merchant.page);
							parameterArray.push([npc, soldItems, role.shopGreeting]);
						}
						
						// soul healers
						else if (role.role === "soulHealer") {
							let statusEffect = Game.hero.statusEffects.find(statusEffect => statusEffect.title === "XP Fatigue"); // try to find xp fatigue effect
							if (statusEffect !== undefined) {
								// calculate cost
								this.soulHealerCost = Math.floor(statusEffect.info.ineffectiveAmount / 50); // set to Game so that it can be accessed from the function in Dom.text.page
								if (this.soulHealerCost < 1) {
									this.soulHealerCost = 1;
								}
								
								// save the npc into a variable so that it can say something if the person is healed
								this.currentSoulHealer = npc;
								
								// soul healer appears as an option for choose DOM
								textArray.push(role.chooseText || "I'd like to remove my 'XP Fatigue' status effect.");
								functionArray.push(Dom.text.page);
								parameterArray.push(["Soul Healer", npc.chat.canBeHealedText, true, ["Remove XP Fatigue for " + this.soulHealerCost + " gold"], [function () {
									if (Dom.inventory.check(2, "currency", Game.soulHealerCost)) {
										Dom.inventory.removeById(2, "currency", Game.soulHealerCost);
										Game.hero.statusEffects.splice(Game.hero.statusEffects.findIndex(statusEffect => statusEffect.title === "XP Fatigue"), 1); // remove xp fatigue effect
										Dom.changeBook(Player.tab, true); // close page
										Game.currentSoulHealer.say(Game.currentSoulHealer.chat.healedText, false, 0, false);
										Game.currentSoulHealer = undefined; // reset variable that remembers which soul healer the player is speaking to
										Game.soulHealerCost = undefined; // reset variable that remembers the cost for soul healing
									}
									else {
										// player cannot afford it
										Game.soulHealers[i].say(Game.soulHealers[i].chat.tooPoor, true, 0, false);
									}
								}]]);
							}
							else {
								if (!Dom.chat.contents.includes("<strong>" + npc.name + "</strong>: " + npc.chat.healedText)) {
									if (Dom.currentlyDisplayed === "") {
										// display instruction text if user cannot be healed and hasn't just been healed
										npc.say(npc.chat.cannotBeHealedText, true, 0, false);
										textSaid = true; // do not say something in chat, as something has already been said
									}
								}
							}
						}
						
						// identifiers
						else if (role.role === "identifier") {
							// identifier appears as an option for choose DOM
							if (Dom.identifier.check()) {
								// player has unidentified items
								textArray.push(role.chooseText || "I have an item I'd like to identify.");
								functionArray.push(Dom.identifier.page);
								parameterArray.push([npc, true]);
							}
							else {
								if (Dom.currentlyDisplayed === "") {
									// player has no unidentified items; send chat message explaining this instead==
									npc.say(npc.chat.noUnidentified, true, 0, false);
									textSaid = true; // do not say something in chat, as something has already been said
								}
							}
						}
						
						// item buyers
						else if (role.role === "itemBuyer") {
							// item buyer appears as an option for choose DOM
							textArray.push(role.chooseText || "I'd like to sell some items to you.");
							functionArray.push(Dom.buyer.page);
							parameterArray.push([npc]);
						}
						
						// generic text DOM
						else if (role.role === "text") {
							// npc chat appears as an option in choose DOM
							textArray.push(role.chooseText);
							functionArray.push(Dom.text.page);
							parameterArray.push([npc.name, role.chat, role.showCloseButton, role.buttons, role.functions]);
						}
						
						// button just runs a function
						else if (role.role === "function") {
							// npc chat appears as an option in choose DOM
							textArray.push(role.chooseText);
							functionArray.push(role.onClick);
							parameterArray.push([]);
						}
						
						
						// force choose DOM if the role wants this
						if (role.forceChoose === true) {
							forceChoose = true;
						}
					}
					else {
						notUnlockedRoles = true;
					}
				}); // finished iterating through this npc's roles
				
				if (functionArray.length > 0) {
					// npc can be spoken to, hence choose DOM should be opened
					// Dom.choose.page checks whether or not the DOM is occupied, and handles red flashing of close button
					Dom.choose.page(npc, textArray, functionArray, parameterArray, forceChoose);
					// if there is only one thing that can be chosen between, choose DOM handles this and just skips itself straight to that one thing
				}
				else {
					// text that the npc says if they don't open a choose DOM
					if (!textSaid && Dom.currentlyDisplyed === "") { // check if any extra text should be said at all
						if (questActive) {
							// the player has active quest(s) with the npc and no other alternate options
							npc.say(npc.chat.questProgress, true, 0, false);
						}
						else if (questComplete) {
							// the player has finished quest(s) with the npc and no other alternate options
							npc.say(npc.chat.questComplete, true, 0, false);
						}
						else if (notUnlockedRoles) {
							// the player has not unlocked a possible role with the npc and no other alternate options
							npc.say(npc.chat.notUnlockedRoles, true, 0, false);
						}
					}
				}
			}
		}
		
		// check if the currently displayed NPC is the current one in the foreach loop
		if (npc.id === Dom.currentNPC.id && npc.type === Dom.currentNPC.type) {
			// close the DOM if the player is too far away from the NPC or if the NPC is dead
			if (npc.respawning || distance(Game.hero, npc) > Game.hero.stats.domRange) {
				// NPC is dead or player is more than 4 (can be changed) tiles away from NPC
				Dom.changeBook(Player.tab, true); // close NPC DOM
			}
		}
	}); // finished iterating through npcs
	
	// update villagers
	for(var i = 0; i < this.villagers.length; i++) {
		if (!this.villagers[i].respawning) { // check villager is not dead
			this.villagers[i].update(delta);
		}
    }
	
	// update enemies
	this.enemies.forEach(enemy => {
		if (!enemy.respawning) { // check enemy is not dead
			enemy.update(delta);
		}
		
		// check if the currently displayed DOM is for the current enemy in the foreach loop
		if (enemy.id === Dom.currentNPC.id && enemy.type === Dom.currentNPC.type) {
			// close the DOM if the player is too far away from the enemy or if the enemy is dead
			if (enemy.respawning && distance(Game.hero, enemy) > Game.hero.stats.domRange) {
				// enemy is dead or player is more than 4 tiles away from enemy
				Dom.changeBook(Player.tab, true); // close enemy DOM
			}
		}
	});
	
	// move projectiles if they need to be moved
	this.projectiles.forEach(projectile => { // iterate through projectiles
		if (projectile.moveTowards !== undefined) {
			// move towards the position
			let direction = bearing(projectile, projectile.moveTowards);
			projectile.x += Math.cos(direction) * projectile.moveSpeed * delta;
			projectile.y += Math.sin(direction) * projectile.moveSpeed * delta;
			
			// only deal damage if it hasn't before
			if (projectile.damageDealt.length === 0) {
				// hasn't dealt damage
				projectile.dealDamage(projectile.attacker, projectile.targets);
				// stop moving
				if (projectile.stopMovingOnDamage === true) {
					projectile.moveTowards = undefined;
				}
				// after a timeout (2s), remove the projectile that was just shot
				// taken from Player
				let a = projectile.id; // maintain a variable of the currently shot projectile's id
				this.objectRemoveTimeouts.push(setTimeout(function (a) {
					Game.projectiles.splice(Game.searchFor(a, Game.projectiles), 1); // find the id of the to-be-removed projectile and remove it
				}, 1500, a)); // pushed to objectRemoveTimeouts so it can be removed when the area is changed
			}
			
			// remove the projectile if it has moved too far
		}
	});
	
	// check collision with mailboxes
	this.mailboxes.forEach(mailbox => { // iterate though mailboxes
		if (this.hero.isTouching(mailbox)) {
			Dom.choose.page(mailbox, ["Check mail"], [Dom.mail.page], [[]]);
		}
		
		// check if the currently displayed DOM is for the current mailbox in the foreach loop
		if (mailbox.id === Dom.currentNPC.id && mailbox.type === Dom.currentNPC.type) {
			// close the DOM if the player is too far away from the mailbox or if the mailbox is dead
			if (distance(Game.hero, mailbox) > Game.hero.stats.domRange) {
				// player is more than 4 tiles away from mailbox
				Dom.changeBook(Player.tab, true); // close mailbox DOM
			}
		}
	});
	
	// check distance from chests
	this.chests.forEach(chest => { // iterate though tripwires
		// check if the currently displayed DOM is for the current mailbox in the foreach loop
		if (chest.id === Dom.currentNPC.id && chest.type === Dom.currentNPC.type) {
			// close the DOM if the player is too far away from the chest or if the chest is dead
			if (distance(Game.hero, chest) > Game.hero.stats.domRange) {
				// player is more than 4 tiles away from chest
				Dom.changeBook(Player.tab, true); // close chest DOM
				// loot not wiped (so the player can revisit if they closed by accident)
			}
		}
	});
	
	// check collision with area teleports
	for(var i = 0; i < this.areaTeleports.length; i++) {
		// give area teleports a screenX and Y (should be turned into own function)
		this.areaTeleports[i].screenX = (this.areaTeleports[i].x - this.areaTeleports[i].width / 2) - this.camera.x;
		this.areaTeleports[i].screenY = (this.areaTeleports[i].y - this.areaTeleports[i].height / 2) - this.camera.y;
		
        if (this.hero.isTouching(this.areaTeleports[i])) {
			if (this.areaTeleports[i].teleportCondition === undefined
			|| (this.areaTeleports[i].teleportCondition !== undefined && this.areaTeleports[i].teleportCondition())) {
				// a teleport condition has been met (if there is one)
				// find player destination
				let destinationX = this.areaTeleports[i].destinationX || Game.hero.x + this.areaTeleports[i].playerAdjustX;
				let destinationY = this.areaTeleports[i].destinationY || Game.hero.y + this.areaTeleports[i].playerAdjustY;
				// teleport to new area
				this.loadArea(this.areaTeleports[i].teleportTo, {x: destinationX, y: destinationY});
			}
			else {
				// teleport condition not met
				if (this.areaTeleports[i].teleportFailText !== undefined) {
					// text in chat
					Dom.chat.insert(this.areaTeleports[i].teleportFailText, 0, false, true);
				}
				if (this.areaTeleports[i].teleportFailFunction !== undefined) {
					// function
					this.areaTeleports[i].teleportFailFunction();
				}
			}
		}
    }
	
	// check collision with tripwires - invisible entities that call a function when touched
	this.tripwires.forEach(entity => { // iterate though tripwires
		// give area teleports a screenX and Y (should be turned into own function)
		entity.screenX = (entity.x - entity.width / 2) - this.camera.x;
		entity.screenY = (entity.y - entity.height / 2) - this.camera.y;
		
        if ((entity.collisionType === "body" && this.hero.isTouching(entity)) ||
		(entity.collisionType === "feet" && this.heroFootHitbox.isTouching(entity))) {
			let boundOnPlayerTouch = entity.onPlayerTouch.bind(entity);
			boundOnPlayerTouch();
		}
	});
	
	// check collision with points of interest (things that insert something to chat when you touch them)
	this.infoPoints.forEach(thing => {
		if (this.hero.moveTowards === undefined && this.hero.isTouching(thing)) {
			// does not trigger if moveTowards is active
			Dom.chat.insert(thing.onTouchChat, 0, false, true); // noRepeat is true
		}
	})
	
	this.playerProjectileUpdate(delta); // update player's currently channelling projectile
	
	// update particles (move them)
	if (document.getElementById("particlesOn").checked) { // check particle setting
		for (let i = 0; i < this.particles.length; i++) {
			let particle = this.particles[i]; // save to variable for easy access
			
			if (particle.moveTowards !== undefined) {
				// move the particle towards a location over its time period
				let proportionTravelled = delta*1000 / particle.moveTowards.time;
				particle.x += (particle.moveTowards.x - particle.x) * proportionTravelled;
				particle.y += (particle.moveTowards.y - particle.y) * proportionTravelled;
			}
		}
	}
	
	// update weather
	if (document.getElementById("weatherOn").checked && !Areas[Game.areaName].indoors) {
		if (Weather.weatherType !== "clear") {
			Weather.update(delta);
		}
	}
};

// update player's currently channelling projectile
Game.playerProjectileUpdate = function(delta) {
	if (Game.hero.channellingProjectileId !== null && Game.hero.channellingProjectileId !== undefined && Game.hero.channelling === "projectile") { // check that the player is currently channelling a projectile
		let projectile = Game.projectiles[Game.searchFor(Game.hero.channellingProjectileId, Game.projectiles)];
		
		// increase player channelTime if they are holding their mouse down
		if (this.hero.channelling) {
			this.hero.channelTime += delta;
		}

		if (Player.inventory.weapon.type === "bow") { // archer weapons slowly focus as they are channelling
			if (projectile.variance > 0 + Game.hero.stats.focusSpeed * delta * 16) { // check it won't be 0 or less
				projectile.variance -= Game.hero.stats.focusSpeed * delta * 16;
			}
			else {
				projectile.variance = 1;
			}
		}
		
		else if (Player.inventory.weapon.type === "staff") { // mage weapon
			if (projectile.expand < 2) { // check it won't be 0 or less
				// takes about 1 second to fully expand
				projectile.expand += delta;
				projectile.width += projectile.image.width * delta;
				projectile.height += projectile.image.height * delta;
				projectile.hitbox.width += 23 * delta; // assumes the mage hitbox's width is always 30
				projectile.hitbox.height += 23 * delta;
			}
		}
	}
}

// increase player XP by xpGiven, and check for levelup, update secondary canvas, obey XP fatigue, etc.
Game.getXP = function (xpGiven) {
	if (typeof xpGiven === "number") {
		// increase XP
		Player.xp += xpGiven * (1 + Game.hero.stats.xpBonus / 100);
		
		// XP fatigue
		if (Player.fatiguedXP !== 0) { // fatigued XP is worth 50% less due to a recent death
			if (xpGiven > Player.fatiguedXP) {
				Player.xp -= Player.fatiguedXP / 2;
				Player.fatiguedXP = 0;
				Game.hero.statusEffects.splice(Game.hero.statusEffects.findIndex(statusEffect => statusEffect.title === "XP Fatigue"), 1); // remove xp fatigue effect
			}
			else {
				Player.xp -= xpGiven / 2;
				Player.fatiguedXP -= xpGiven;
			}
		}
		
		// now that the XP has fully been added, check for a levelUp and display it on the canvas
		
		// check for level up
		if (Player.level < LevelXP.length - 1) {
			if (Player.xp >= LevelXP[Player.level]) {
				// level up
				Player.xp -= LevelXP[Player.level];
				Player.level++;
				Game.hero.level = Player.level;
				Game.playLevelupSound(this.areaName);
				Dom.levelUp.page();
				document.getElementById("level").innerHTML = "Level "+Player.level;
			}
			// xp gained
			Game.secondary.render();
		}
		else {
			// max level
			Player.xp = LevelXP[Player.level];
		}
	}
	else {
		console.error("XP increase amount is not a number:", xpGiven)
	}
}

// called whenever weapon/armour is changed (in order to change player stats)
// this is called by index.html
// PG's code
Game.inventoryUpdate = function (e) {
	if (e === undefined || isNaN(parseInt(e.dataTransfer.getData("text")))) { // check if a weapon or armour slot has been changed
		// player stats updated
		Game.hero.stats = Player.stats; // inefficient (should be linked)
		
		// if the player is holding a weapon, set their range
		if (Player.inventory.weapon.type !== undefined) {
			// player has weapon equipped
			Game.hero.stats.range = WeaponRanges[Player.inventory.weapon.type] + Game.hero.stats.rangeModifier;
		}
		else {
			// no weapon equipped
			Game.hero.stats.range = 0;
		}
		
		// set player projectile
		this.projectileImageUpdate();
		
		// if the player is no longer holding a fishing rod, remove their bobber
		if (Player.inventory.weapon.type !== "rod" && Game.hero.channelling === "fishing") {
			Game.projectiles.splice(Game.searchFor(Game.hero.channellingProjectileId, Game.projectiles), 1); // remove bobber
			
			Game.hero.channelling = false;
			this.channellingProjectileId = null;
		}
		
		// set weapon variance
		if (Player.inventory.weapon.type === "bow" || Player.inventory.weapon.variance !== undefined) {
			Game.hero.stats.variance = Player.inventory.weapon.variance || 100; // 100 is default
		}
		else {
			// non-bows have no variance
			Game.hero.stats.variance = 0;
		}
	}
	Dom.checkProgress(); // quest log update check
}

// set player projectile/bobber image
Game.projectileImageUpdate = function () {
	// figure out if it is a projectile or bobber, and save variable names for later
	let nameAddress = "heroProjectileName";
	let adjustAddress = "heroProjectileAdjust";
	if (Player.inventory.weapon.type === "rod") {
		nameAddress = "heroBobberName";
		adjustAddress = null;
	}
	
	// if the player is now holding a weapon with a special projectile image, load that image and stop the player from attacking until this is done
	if (Player.inventory.weapon.projectile !== undefined && this[nameAddress] !== Player.inventory.weapon.projectile) {
		// not loaded projectile image before
		this[nameAddress] = Player.inventory.weapon.projectile;
		if (adjustAddress !== null) { // set adjust for projectiles only (not bobbers)
			this[adjustAddress] = Player.inventory.weapon.projectileAdjust;
			if (this[adjustAddress] === undefined) {
				this[adjustAddress] = {x:0,y:0}; // default value
			}
		}
		// set weapon property "cannotAttack" to true so the player is blocked from attacking
		Player.inventory.weapon.cannotAttack = true;
		// load image
		let p = Loader.loadImage(this[nameAddress], "./assets/projectiles/" + this[nameAddress] + ".png");
		if (p !== undefined) {
			p.then(function (value) {
				// only called once image has loaded
				// set weapon "cannotAttack" property back to false
				Player.inventory.weapon.cannotAttack = undefined;
			})
			.catch(function (err) {
				console.error("Your projectile image did not load correctly.", err);
			});
		}
		else {
			// image already loaded; allow the player to attack anyway
			Player.inventory.weapon.cannotAttack = undefined;
		}
	}
	
	// if the player is NOT holding a weapon with a special projectile image, and the skin does have a special projectile image
	else if (Player.inventory.weapon.projectile === undefined && this[nameAddress] !== Skins[Player.class][Player.skin].projectile) {
		// needs to reload default projectile image
		if (nameAddress === "heroProjectileName") {
			// weapon projectile - saved in skindata by default
			this[nameAddress] = Skins[Player.class][Player.skin].projectile;
		}
		else if (nameAddress === "heroBobberName") {
			// bobber projectile - default is always "bobber"
			this[nameAddress] = "bobber";
		}
		if (adjustAddress !== null) { // set adjust for projectiles only (not bobbers)
			this[adjustAddress] = Skins[Player.class][Player.skin].projectileAdjust;
		}
		// set weapon property "cannotAttack" to true so the player is blocked from attacking
		Player.inventory.weapon.cannotAttack = true;
		// load image
		let p = Loader.loadImage(this[nameAddress], "./assets/projectiles/" + this[nameAddress] + ".png");
		p.then(function (value) {
			// only called once image has loaded
			// set weapon "cannotAttack" property back to false
			Player.inventory.weapon.cannotAttack = undefined;
		})
		.catch(function (err) {
			console.error("Your projectile image did not load correctly.", err);
		});
	}
}

// called whenever a loot menu is closed
// called by index.html
// itemsRemaining is the array, in the same format as a loot array (object with item and quantity)
// itemsRemaining is an array of undefined if there are no items remaining
// tbd optimise so enemy and chest are not as separate
Game.lootClosed = function (itemsRemaining) {
	if (Dom.loot.currentId[0] === "e") {
		// enemy loot menu closed
		let arrayIndex = Dom.loot.currentId.substr(1);
		Game.enemies[arrayIndex].loot = itemsRemaining; // update items remaining
		if (itemsRemaining.every(item => item === undefined)) {
			// set loot to null so it isn't opened by the player again
			Game.enemies[arrayIndex].loot = null;
		}
	}
	else if (Dom.loot.currentId[0] === "c") {
		// chest loot menu closed
		let arrayIndex = Dom.loot.currentId.substr(1);
		if (Game.chests[arrayIndex].disappearAfterOpened) {
			Game.chests.splice(arrayIndex, 1);
		}
		else {
			Game.chests[arrayIndex].loot = itemsRemaining; // update items remaining
			if (itemsRemaining.every(item => item === undefined)) {
				// set loot to null so it isn't opened by the player again
				Game.chests[arrayIndex].loot = null;
			}
		}
		// if it is a loot chest, set the day in savedata (so one cannot be opened again in this area today)
		if (Game.chests[arrayIndex].name === "Loot Chest") {
			Player.chestsOpened[Game.areaName] = GetFullDate();
		}
	}
	else if (Dom.loot.currentId[0] === "i") {
		// item loot menu closed (e.g. sunken chest)
		let inventoryPosition = Dom.loot.currentId.substr(1); // inventory position of item (array index)
		// set loot
		Player.inventory.items[inventoryPosition].loot = itemsRemaining;
		// remove the chest if there is no loot left
		if (itemsRemaining.every(item => item === undefined)) {
			// no loot left
			Dom.inventory.remove(inventoryPosition);
		}
	}
	else if (Dom.loot.currentId[0] === "x") {
		// do nothing
	}
	else {
		console.error("Dom.loot.currentId cannot be understood: " + Dom.loot.currentId);
	}
}

// called when mail is opened (the mailbox's flag might go down), or when mail is recieved (flag might go up)
// parameter type is set to "recieved" or "read" based on what happened
// make more efficient to not call getImage if the image is already active? TBD
Game.mailboxUpdate = function (type) {
	if (type === "read") {
		if (Dom.mail.unread() === 0) {
			this.mailboxes.forEach(mailbox => {
				// TBD check existing imageName
				mailbox.image = Loader.getImage(mailbox.readImage);
				mailbox.imageName = mailbox.readImage;
			});
		}
	}
	else if (type === "recieved") {
		// perhaps check if Dom.mail.unread is 1, because only one message will come in at a time and if it is more than 1 then it would already be a flag
		this.mailboxes.forEach(mailbox => {
			// TBD check existing imageName
			mailbox.image = Loader.getImage(mailbox.unreadImage);
			mailbox.imageName = mailbox.unreadImage;
		});
	}
	else {
		console.error("Unrecognised type (should be 'read' or 'received')", type)
	}
}

// called by HIGH SPEED radio buttons with the parameter "add" (give status effect) or "remove" (remove status effect)
Game.highSpeed = function (addRemove) {
	if (addRemove === "add") {
		// add status effect
		Game.statusEffects.walkSpeed({
			target: Game.hero,
			effectTitle: "HIGH SPEED! (test status effect)",
			speedIncrease: 500, // percentage increase
		});
	}
	else if (addRemove === "remove") {
		// remove status effect
		Game.hero.statusEffects = Game.hero.statusEffects.filter(statusEffect => statusEffect.title !== "HIGH SPEED! (test status effect)");
		// reflect this change on secondary canvas
		Game.hero.updateStatusEffects();
	}
	else {
		// unknown parameter
		console.error("Unknown parameter for Game.highSpeed (it should be 'add' or 'remove'):", addRemove)
	}
}

//
// Render game (draw onto canvas)
//

Game._drawLayer = function (layer) {
    var startCol = Math.floor(this.camera.x / map.tsize);
    var endCol = startCol + (this.camera.width / map.tsize);
    var startRow = Math.floor(this.camera.y / map.tsize);
    var endRow = startRow + (this.camera.height / map.tsize);
    var offsetX = -this.camera.x + startCol * map.tsize;
    var offsetY = -this.camera.y + startRow * map.tsize;

    for (var c = startCol; c <= endCol; c++) {
        for (var r = startRow; r <= endRow; r++) {
            var tile = map.getTile(layer, c, r);
            var x = (c - startCol) * map.tsize + offsetX;
            var y = (r - startRow) * map.tsize + offsetY;
            if (tile !== 0) { // 0 => empty tile
                this.ctx.drawImage(
                    this.tileAtlas, // image
                    ((tile - 1) % map.tilesPerRow) * map.tsize, // source x
                    Math.floor((tile - 1) / map.tilesPerRow) * map.tsize, // source y
                    map.tsize, // source width
                    map.tsize, // source height
                    Math.round(x),  // target x
                    Math.round(y), // target y
                    map.tsize, // target width
                    map.tsize // target height
                );
            }
        }
    }
};

Game._drawGrid = function () {
	// stroke colour
	this.ctx.strokeStyle="#0000ff";
	
    var width = map.cols * map.tsize;
    var height = map.rows * map.tsize;
    var x, y;
    for (var r = 0; r < map.rows; r++) {
        x = - this.camera.x;
        y = r * map.tsize - this.camera.y;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(width, y);
        this.ctx.stroke();
    }
    for (var c = 0; c < map.cols; c++) {
        x = c * map.tsize - this.camera.x;
        y = - this.camera.y;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x, height);
        this.ctx.stroke();
    }
};

Game.drawHitboxes = function () {
	// stroke colour
	this.ctx.strokeStyle="#FF0000";
	
	// TBD change this to work off of renderList
	
	// player hitbox (add to renderlist tbd)
	this.ctx.strokeRect(this.hero.screenX - this.hero.width / 2, this.hero.screenY - this.hero.height / 2, this.hero.width, this.hero.height);
	
	// render npcs on renderList
	for (var i = 0; i < this.renderList.length; i++) { // iterate through everything to be rendered (in order)
		
		for (var x = 0; x < this[this.renderList[i]].length; x++) { // iterate through that array of things to be rendered
		
			let objectToRender = this[this.renderList[i]][x];
		
			if (Game.camera.isOnScreen(objectToRender, "hitbox")) { // check object hitbox is on the screen hence should be rendered
			
				if (objectToRender.hitbox !== undefined) { // check if the object has a special hitbox that should be drawn instead
					this.ctx.strokeRect(objectToRender.hitbox.screenX - objectToRender.hitbox.width / 2, objectToRender.hitbox.screenY - objectToRender.hitbox.height / 2, objectToRender.hitbox.width, objectToRender.hitbox.height);
				}
				else {
					this.ctx.strokeRect(objectToRender.screenX - objectToRender.width / 2, objectToRender.screenY - objectToRender.height / 2, objectToRender.width, objectToRender.height);
				}
				
			}
			
		}
		
	}
	
	// area teleport hitboxes
	// maybe a special hitbox render list should be made? (tbd)
	for(var i = 0; i < this.areaTeleports.length; i++) {
		this.ctx.strokeRect(this.areaTeleports[i].screenX - this.areaTeleports[i].width / 2, this.areaTeleports[i].screenY - this.areaTeleports[i].height / 2, this.areaTeleports[i].width, this.areaTeleports[i].height);
	}
	
	// tripwire hitboxes
	// maybe a special hitbox render list should be made? (tbd)
	for(var i = 0; i < this.tripwires.length; i++) {
		this.ctx.strokeRect(this.tripwires[i].screenX - this.tripwires[i].width / 2, this.tripwires[i].screenY - this.tripwires[i].height / 2, this.tripwires[i].width, this.tripwires[i].height);
	}
	
	// collision hitboxes
	// maybe a special hitbox render list should be made? (tbd)
	this.collisions.forEach(collision => {
		this.ctx.strokeRect(collision.screenX - collision.width / 2, collision.screenY - collision.height / 2, collision.width, collision.height);
	});
	
	// projectile hitboxes
	// should be added to renderList (tbd)
	for(var i = 0; i < this.projectiles.length; i++) {
		if (this.projectiles[i].hitbox !== undefined) { // this should be checked for everything in the future (when this function is reworked to work with renderList)
			this.ctx.strokeRect(this.projectiles[i].hitbox.screenX - this.projectiles[i].hitbox.width / 2, this.projectiles[i].hitbox.screenY - this.projectiles[i].hitbox.height / 2, this.projectiles[i].hitbox.width, this.projectiles[i].hitbox.height);
		}
		else {
			this.ctx.strokeRect(this.projectiles[i].screenX - this.projectiles[i].width / 2, this.projectiles[i].screenY - this.projectiles[i].height / 2, this.projectiles[i].width, this.projectiles[i].height);
		}
	}
	
	// stroke colour for hero foot hitbox
	this.ctx.strokeStyle="#FF00FF";
	this.ctx.strokeRect(this.heroFootHitbox.screenX - this.heroFootHitbox.width / 2, this.heroFootHitbox.screenY - this.heroFootHitbox.height / 2, this.heroFootHitbox.width, this.heroFootHitbox.height);
}

// display coordinates on canvas (settings option)
Game.coordinates = function (character) {
	// reset text formatting
	this.resetFormatting();
	
	this.ctx.fillText("x: " + Math.round(character.x), 10, 50);
	this.ctx.fillText("y: " + Math.round(character.y), 10, 60);
}

// display frames per second on canvas (settings option)
// delta = time in ms between frames
// tbd change to https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
Game.fps = function (delta) {
	// reset text formatting
	this.resetFormatting();
	
	// add current fps value to fps array
	this.fpsArray.push(Math.round(1 / delta));
	if (this.fpsArray.length >= 100) {
		this.fpsArray.shift();
	}
	
	// calculate average 
	let sum = 0;
	for (let i = 0; i < this.fpsArray.length; i++) {
		sum += this.fpsArray[i];
	}
	let average = sum / this.fpsArray.length;
	
	// write on canvas
	this.ctx.fillText("fps: " + Round(average), 10, 75);
}

// reset text formatting
Game.resetFormatting = function () {
	this.ctx.textAlign = "left";
	this.ctx.fillStyle = "rgba(0, 0, 0, 1)";
	this.ctx.font = "10px MedievalSharp"; // maybe serif instead?
}

// draw a rotated image (rotated in radians)
// source: https://stackoverflow.com/a/11985464/9713957 --- thank you! <3
Game.drawImageRotated = function (img, x, y, width, height, rad) {
    // convert degrees to radian 
    //var rad = deg * Math.PI / 180;

    // set the origin to the center of the image
    this.ctx.translate(x + width / 2, y + height / 2);

    // rotate the canvas around the origin
    this.ctx.rotate(rad);

    // draw the image
    this.ctx.drawImage(img,width / 2 * (-1),height / 2 * (-1),width,height);

    // reset the canvas  
    this.ctx.rotate(rad * ( -1 ) );
    this.ctx.translate((x + width / 2) * (-1), (y + height / 2) * (-1));
}

// update entity's screen position (called every time it is rendered, and also in functions like dealDamage)
// screenX and screenY are the CENTRE of the object (hence width/2 or height/2 are subtracted when drawing images to get the top left), as are x and y
Game.updateScreenPosition = function (entity) {
	entity.screenX = (entity.x) - this.camera.x;
	entity.screenY = (entity.y) - this.camera.y;
	if (typeof entity.adjust !== "undefined") { // adjust postiion
		let angle = bearing(entity, entity.adjust.towards);
		entity.screenX += entity.adjust.x * Math.cos(angle);
		entity.screenY += entity.adjust.y * Math.sin(angle);
	}
	
	if (typeof entity.hitbox !== "undefined") { // special hitbox
		entity.hitbox.screenX = (entity.hitbox.x) - this.camera.x;
		entity.hitbox.screenY = (entity.hitbox.y) - this.camera.y;
	}
}

// draw character health bar and name in correct placed
Game.drawCharacterInformation = function (ctx, character) {
	let healthBarDrawn = false; // size of healthbar or other similar thing (e.g: damage taken), so that it is known how much to offset character's name by (in y axis)
	
	if (character.hostility === "friendly" || character.hostility === "neutral") {
		// only draw health bar if character is damaged
		if (character.health !== character.stats.maxHealth) {
			this.drawHealthBar(ctx, character, character.screenX - character.width * 0.5, character.screenY - character.height * 0.5 - 15, character.width, 15);
			healthBarDrawn = 15;
		}
	}
	else if (character.hostility === "dummy") {
		// show damage taken above head instead of health bar (if the character has taken any damage)
		if (character.damageTaken > 0) {
			this.drawDamageTaken(ctx, character, character.screenX, character.screenY - character.height / 2 - 1, 18);
			healthBarDrawn = 18;
		}
	}
	else if (character.hostility === "hostile" || character.hostility === "boss") {
		// always draw health bar
		this.drawHealthBar(ctx, character, character.screenX - character.width * 0.5, character.screenY - character.height * 0.5 - 15, character.width, 15);
		healthBarDrawn = 15;
	}
	else {
		console.error("Unknown character hostility: ", character.hostility);
	}
	
	/*if (healthBarDrawn !== false) { // !healthBarDrawn is not used, as healthBarDrawn is set to a number (not true) if it isn't false
		healthBarDrawn += 3; // padding for name (currently not seen as necessary, so this has been commented out)
	}*/
	
	this.drawCharacterName(ctx, character, character.screenX, character.screenY - character.height / 2 - healthBarDrawn - 3);
}

// draw a health bar (on given context, for given character, at given position, with given dimensions)
// tbd : change colour for friendly characters?
Game.drawHealthBar = function (ctx, character, x, y, width, height) {
	// remember previous canvas transparency preferences
	const oldGlobalAlpha = ctx.globalAlpha;
	
	// canvas formatting
	ctx.lineWidth = 1;
	ctx.globalAlpha = 0.6;
	
	// health variables
	
	// get width of each small health bar (in health)
	// there should be between 3 and 9 bars (with the exception of low health )
	let barValue = 10;
	let barValueFound = false;
	let numberOfBars;
	while (!barValueFound) {
		numberOfBars = character.stats.maxHealth / barValue;
		if (numberOfBars < 10) { // less than 10 little health bars with this barValue
			barValueFound = true;
		}
		else { // more than 9; multiply bar size by 10 and try again
			barValue *= 3;
		}
	}
	
	character.healthFraction = character.health / character.stats.maxHealth; // fraction of health remaining
	
	if (character.healthFraction > 0) { // check the character has some health to draw (we don't want to draw negative health)
		// colour based on size of each bar
		if (barValue === 10) {
			ctx.fillStyle = "#FF4D4D"; // light red
		}
		else if (barValue === 30) {
			ctx.fillStyle = "#FF0000"; // red
		}
		else if (barValue === 90) {
			ctx.fillStyle = "#CC0000"; // dark red
		}
		else if (barValue === 270) {
			ctx.fillStyle = "#800000"; // maroon (very dark red)
		}
		else if (barValue === 810) {
			ctx.fillStyle = "#DAA520"; // gold
		}
		else {
			// default
			ctx.fillStyle = "FFFF00";
			console.warn("No dedicated health bar colour for bar size " + barValue);
		}
		
		// health bar body
		ctx.fillRect(x, y, character.healthFraction * width, height);
	}
	
	// health bar border
	ctx.strokeStyle = "black";
	ctx.strokeRect(x, y, width, height); // general border around the whole thing
	for (var i = 0; i < character.stats.maxHealth / barValue - 1; i++) {
		ctx.strokeRect(x + barValue / character.stats.maxHealth * width * i, y, barValue / character.stats.maxHealth * width, height);
	}
	
	// final bar
	ctx.strokeRect(x + barValue / character.stats.maxHealth * width * i, y, width - (barValue / character.stats.maxHealth * width * i), height);
	
	// restore previous canvas transparency preferences
	ctx.globalAlpha = oldGlobalAlpha;
}

Game.drawDamageTaken = function (ctx, character, x, y, fontSize) {
	// formatting
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.textAlign = "center";
	ctx.font = "bold " + fontSize + "px MedievalSharp";
	
	// "\u{2694}" displays the unicode crossed swords symbol
	// thanks to Wilfred Lee at https://stackoverflow.com/a/49667311/9713957
	// w3schools reference for unicode special characters: https://www.w3schools.com/charsets/ref_utf_symbols.asp
	ctx.fillText("\u{2694} " + Round(character.damageTaken), x, y);
}

// draw character's name (often positioned to be above their head
// tbd : change colour for friendly characters?
Game.drawCharacterName = function (ctx, character, x, y) {
	
	// text formatting
	ctx.font = "13px MedievalSharp";
	ctx.textAlign = "center";
	ctx.strokeStyle = "black";
	ctx.lineWidth = 0.5;
	// colour based on whether npc is good or not
	if (character.hostility === "hostile") {
		ctx.fillStyle = "red";
	}
	else if (character.hostility === "friendly") {
		ctx.fillStyle = "#08720d"; // dark green name
	}
	else if (character.hostility === "neutral") {
		ctx.fillStyle = "#c9c202"; // yellow name
	}
	else if (character.hostility === "boss") {
		ctx.fillStyle = "#8c0700"; // dark red name
	}
	else {
		ctx.fillStyle = "black";
	}
	
	
	// draw text
	ctx.fillText(character.name, x, y);
	// black border (easier to read)
	ctx.strokeText(character.name, x, y);
}

// draw images on canvas
Game.render = function (delta) {
	// reset text formatting (currntly done in individual functions)
	//this.resetFormatting();
	
	// reset canvas distortion
	///this.ctx.resetTransform();
	
    // draw map background layer
    //if (this.hasScrolled) {
	this._drawLayer(0);
    //}
	
	// distort canvas
	//this.ctx.setTransform(1, -0.01, -0.01, 1, 0, 0);
	
	// render things on renderList
	for (var i = 0; i < this.renderList.length; i++) { // iterate through everything to be rendered (in order)
		
		for (var x = 0; x < this[this.renderList[i]].length; x++) { // iterate through that array of things to be rendered
		
			let objectToRender = this[this.renderList[i]][x];
			
			// check object should be rendered
			if (Game.camera.isOnScreen(objectToRender, "image") && // object on screen
			(objectToRender.stats === undefined || !objectToRender.stats.stealthed)) { // object isn't stealthed
			
				// set character screen x and y
				this.updateScreenPosition(objectToRender);
			
				if (!objectToRender.respawning) { // check character is not dead
					
					// draw image
					this.ctx.drawImage(
						objectToRender.image,
						objectToRender.screenX - objectToRender.width / 2,
						objectToRender.screenY - objectToRender.height / 2,
						objectToRender.width,
						objectToRender.height
					);
					
					// render function (additional render to be carried out upon render of this entity)
					if (objectToRender.renderFunction !== undefined) {
						objectToRender.renderFunction();
					}
				}
				
				else {
					if (objectToRender.deathImage !== undefined && objectToRender.isCorpse) { // display corpse
						// set character screen x and y
						this.updateScreenPosition(objectToRender);
						
						// draw image (corpse)
						this.ctx.drawImage(
							objectToRender.deathImage,
							objectToRender.screenX - objectToRender.deathImageWidth / 2,
							objectToRender.screenY - objectToRender.deathImageHeight / 2,
							objectToRender.deathImageWidth,
							objectToRender.deathImageHeight
						);
						
						// perhaps a death render function should be added? tbd
					}
				}
			}
			
		}
		
	}
	
	if (this.hero.channelling === "fishing" || (this.hero.channelling.type !== undefined && this.hero.fishingBobs >= 100)) { // check player's fishing bobber is out
		// line between fishing bobber and player
		let projectile = this.projectiles[this.searchFor(this.hero.channellingProjectileId, this.projectiles)];
		this.ctx.strokeStyle = "grey";
		this.ctx.beginPath();
		if (projectile.imageNumber === 0) {
			this.ctx.moveTo(projectile.screenX, projectile.screenY - 8); // bobber above water
		}
		else if (projectile.imageNumber === 1) {
			this.ctx.moveTo(projectile.screenX, projectile.screenY); // bobber bobbing
		}
		else if (projectile.imageNumber === 2) {
			this.ctx.moveTo(projectile.screenX, projectile.screenY + 8); // bobber submerged by fish
		}
		this.ctx.lineTo(this.hero.screenX, this.hero.screenY);
		this.ctx.stroke();
	}
	
	// draw player animations
	if (this.hero.beam !== undefined) {
		// set formatting
		this.ctx.lineWidth = this.hero.beam.width;
		this.ctx.strokeStyle = this.hero.beam.colour;
		// draw line
		this.ctx.beginPath();
		this.ctx.moveTo(this.hero.screenX, this.hero.screenY);
		this.ctx.lineTo(this.hero.beam.x - this.hero.x + this.hero.screenX, 
						this.hero.beam.y - this.hero.y + this.hero.screenY);
		this.ctx.stroke();
		// reset default formatting
		this.ctx.lineWidth = 0.5;
		this.ctx.strokeStyle = "#000000";
	}

    // draw main character
	
	// if player is stealthed, draw them partially transparent
	if (this.hero.stats.stealthed) {
		this.ctx.globalAlpha = 0.6;
	}
	// check what direction they are facing, then render player
	if (this.hero.direction === 1) {
		this.ctx.drawImage(
			this.hero.image,
			0, this.hero.baseHeight,
			this.hero.baseWidth, this.hero.baseHeight,
			this.hero.screenX - this.hero.width / 2, this.hero.screenY - this.hero.height / 2,
			this.hero.width, this.hero.height,
		);
	} 
	
	else if (this.hero.direction === 2) {
		this.ctx.drawImage(
			this.hero.image,
			this.hero.baseWidth, this.hero.baseHeight,
			this.hero.baseWidth, this.hero.baseHeight,
			this.hero.screenX - this.hero.width / 2, this.hero.screenY - this.hero.height / 2,
			this.hero.width, this.hero.height,
		);
	} 
	
	else if (this.hero.direction === 3) {
		this.ctx.drawImage(
			this.hero.image,
			0, 0,
			this.hero.baseWidth, this.hero.baseHeight,
			this.hero.screenX - this.hero.width / 2, this.hero.screenY - this.hero.height / 2,
			this.hero.width, this.hero.height,
		);
	} 
	
	else if (this.hero.direction === 4) {
		this.ctx.drawImage(
			this.hero.image,
			this.hero.baseWidth, 0,
			this.hero.baseWidth, this.hero.baseHeight,
			this.hero.screenX - this.hero.width / 2, this.hero.screenY - this.hero.height / 2,
			this.hero.width, this.hero.height,
		);
	}
	// set transparency back (just in case it was changed because the player is stealthed)
	this.ctx.globalAlpha = 1;
	
	// draw projectiles
    for (let i = 0; i < this.projectiles.length; i++) {
		// set screen x and y
		this.updateScreenPosition(this.projectiles[i]);
		
		if (Player.inventory.weapon.type === "bow" && this.projectiles[i].beingChannelled && Game.hero.channelling === "projectile") { // show archer red circle instead of projectile if they are currently channelling it
			this.ctx.strokeStyle = "red";
			this.ctx.beginPath();
			this.ctx.arc(this.projectiles[i].hitbox.screenX, this.projectiles[i].hitbox.screenY, this.projectiles[i].variance, 0, 2*Math.PI);
			this.ctx.stroke();
		}
		
		else { // render projectile normally
			if (Player.inventory.weapon.type === "staff" && this.projectiles[i].beingChannelled && Game.hero.channelling === "projectile") { // mage projectiles are transparent when being channelled
				this.ctx.globalAlpha = 0.6;
			}
		
			if (this.projectiles[i].rotate !== 0) {
				this.drawImageRotated( // rotate projectile and draw
					this.projectiles[i].image,
					this.projectiles[i].screenX - this.projectiles[i].width / 2,
					this.projectiles[i].screenY - this.projectiles[i].height / 2,
					this.projectiles[i].width,
					this.projectiles[i].height,
					this.projectiles[i].rotate
				);
			}
			else {
				this.ctx.drawImage( // draw unrotated
					this.projectiles[i].image,
					this.projectiles[i].width * this.projectiles[i].imageNumber, 0, // draw a certain number image from a tileset (maybe only do this if it is from a tileset, otherwise call simplified drawImage function? TBD)
					this.projectiles[i].width, this.projectiles[i].height,
					this.projectiles[i].screenX - this.projectiles[i].width / 2,
					this.projectiles[i].screenY - this.projectiles[i].height / 2,
					this.projectiles[i].width, this.projectiles[i].height,
				);
			}
			
			// shows damage dealt by projectile
			for (let x = 0; x < this.projectiles[i].damageDealt.length; x++) {
				// formatting
				if (this.projectiles[i].damageDealt[x].critical) {
					this.ctx.fillStyle = "rgb(255, 0, 0)"; // maybe use rgba to make it fade away?
				}
				else {
					this.ctx.fillStyle = "rgb(0, 0, 0)"; // maybe use rgba to make it fade away?
				}
				this.ctx.textAlign = "left";
				this.ctx.font = "18px MedievalSharp";
				
				let damage = this.projectiles[i].damageDealt[x].damage;
				if (damage !== "hit dodged") {
					damage = Round(damage); // round damage to 1d.p. if it is an integer value
				}
				
				this.ctx.fillText(damage, this.projectiles[i].screenX, this.projectiles[i].screenY);
			}
			
			this.ctx.globalAlpha = 1; // restore transparency if it was changed above (e.g: mage channelled projectile)
		}
    }
	
	// draw particles
	// particles are drawn as rects
	// their properties are x, y, width, height, colour (as hex)
	if (document.getElementById("particlesOn").checked) { // check particle setting
		for (let i = 0; i < this.particles.length; i++) {
			let particle = this.particles[i]; // save to variable for easy access
			
			// update screen position of particle
			this.updateScreenPosition(particle);
			
			// figure out how much to rotate the canvas (if any) for particle rotation
			let rotation = 0;
			if (particle.rotation !== undefined) {
				rotation = particle.rotation;
			}
			
			let ctx;
			if (particle.light) {
				// draw on light canvas instead
				ctx = this.ctxLight;
			}
			else {
				ctx = this.ctx;
			}
			
			// transform canvas so the rotation happens around the rect itself
			ctx.translate(particle.screenX + particle.width / 2, particle.screenY + particle.height / 2);
			// rotate canvas
			ctx.rotate(rotation);
			// transparency
			ctx.globalAlpha = particle.transparency;
			
			// draw particle
			ctx.fillStyle = particle.colour;
			ctx.fillRect(-particle.width / 2, -particle.height / 2, particle.width, particle.height);
			//this.ctx.drawImage(img,width / 2 * (-1),height / 2 * (-1),width,height);
			
			// reset canvas stuff
			ctx.resetTransform();
			ctx.globalAlpha = 1;
		}
	}

    // draw map top layer
    //this._drawLayer(1);
	
	//
	// Setting options
	//

    // draw map grid (debug)
    if (document.getElementById("gridOn").checked) {
		this._drawGrid();
    }
	
    // draw hitboxes (debug)
    if (document.getElementById("hitboxesOn").checked) {
		this.drawHitboxes();
    }
	
    // show player coords (debug)
    if (document.getElementById("coordsOn").checked) {
		this.coordinates(this.hero);
    }
	
    // show canvas fps (debug)
	if (document.getElementById("fpsOn").checked){
		this.fps(delta);
	}
	
	
	
	// display area name (if the player has just gone to a new area)
	if (this.displayAreaName.duration > 0) {
		// formatting
		this.ctx.fillStyle = "rgba(0, 0, 0, " + this.displayAreaName.duration / 100 + ")";
		this.ctx.textAlign = "center";
		this.ctx.font = "48px MedievalSharp";
		
		this.ctx.fillText(this.displayAreaName.name, 300, 100); // area name
		
		this.ctx.font = "28px MedievalSharp";
		this.ctx.fillText(this.displayAreaName.level, 300, 150); // area level
		if (this.displayAreaName.territory !== undefined) { // check that territory should be displayed
			this.ctx.fillText(this.displayAreaName.territory + " territory", 300, 180); // area territory (Hostile, Neutral, Allied)
		}
		
		this.displayAreaName.duration--;
	}
	
	// render weather
	if (document.getElementById("weatherOn").checked && !Areas[Game.areaName].indoors) {
		if (Weather.weatherType !== "clear") {
			Weather.render();
		}
	}
};

//
// Secondary canvas render (only called when it needs to be, not every tick)
//

// update crosshair based on mouse distance from player (called by mouseMove event listener in init)
Game.secondary.updateCursor = function (event) {
	// get player's range
	let range = Game.hero.stats.range;
	
	// check the player's mouse distance is within range
	if (distance({x: Game.camera.x + event.clientX - 19, y: Game.camera.y + event.clientY - 19,}, Game.hero) < range) {
		// mouse in range (crosshair)
		let cursor = Skins[Player.class][Player.skin].cursor;
		if (cursor !== "crosshair") {
			// cursor requires custom image
			cursor = "url('assets/cursors/" + cursor + ".png') " + Skins[Player.class][Player.skin].cursorPosition.x + " " + Skins[Player.class][Player.skin].cursorPosition.y + ", auto;";
		}
		document.getElementById("secondary").setAttribute("style","cursor: " + cursor);
	}
	else {
		// mouse not in range (normal cursor)
		document.getElementById("secondary").style.cursor = "default";
	}
}

// render secondary canvas (contains anything that does not need to be continuously redrawn)
// mainly PG code
Game.secondary.render = function () {
	// clear secondary canvas
	this.ctx.clearRect(0, 0, 600, 600);
	
	if (!Keyboard.isDown(Keyboard.keys.SHIFT, "SHIFT")) { // only render the second canvas if the player isn't pressing the shift key
		
		// set canvas formatting style defaults
		this.ctx.lineWidth = 1;
		this.ctx.globalAlpha = 0.6;
		
		// player health bar at top-left
		Game.drawHealthBar(this.ctx, Game.hero, 10, 10, 250, 25);
		
		// set xp variables
		const totalWidth = 335; // total width of xp bar
		const totalHeight = 8; // total height of xp bar
		const totalLeft = 132; // total height of xp bar
		const totalTop = 507; // total height of xp bar
		Player.xpFraction = Player.xp / LevelXP[Player.level]; // fraction of XP for current level
		
		// rainbow gradient
		var grd = this.ctx.createLinearGradient(totalLeft, 0, totalLeft+totalWidth-1, 0);
		if(Player.level < LevelXP.length - 1){
			grd.addColorStop(0, "red");
			grd.addColorStop("0.2", "yellow");
			grd.addColorStop("0.4", "green");
			grd.addColorStop("0.6", "blue");
			grd.addColorStop("0.8", "magenta");
			grd.addColorStop(1, "indigo");
		}else{
			grd.addColorStop(0, "#daa520");
			grd.addColorStop(0.6, "#daa520");
			grd.addColorStop(0.8, "#e8c264");
			grd.addColorStop(1, "#daa520");
		}
		this.ctx.fillStyle = grd;
		
		// xp bar body
		this.ctx.fillRect(totalLeft, totalTop, Player.xpFraction * totalWidth, totalHeight);

		// xp bar border
		this.ctx.strokeRect(totalLeft, totalTop, totalWidth-1, totalHeight);
		this.ctx.strokeRect(totalLeft, totalTop, totalWidth-1, totalHeight);
		
		// level
		this.ctx.font = "bold 30px MedievalSharp";
        this.ctx.textAlign = "center";
        this.ctx.fillStyle = "lightGrey";
        this.ctx.fillText(Player.level, 299, 519);    
        this.ctx.fillStyle = "white";
        this.ctx.fillText(Player.level, 297, 517);
		
		// status effect icons next to health bar
		for(let i = 0; i < Game.hero.statusEffects.length; i++) {
			let iconNum = null;
			if (Game.hero.statusEffects[i].image === "food") {
				iconNum = 0;
			}
			else if (Game.hero.statusEffects[i].image === "bait") {
				iconNum = 1;
			}
			else if (Game.hero.statusEffects[i].image === "speedDown") {
				iconNum = 2;
			}
			else if (Game.hero.statusEffects[i].image === "fire") {
				iconNum = 3;
			}
			else if (Game.hero.statusEffects[i].image === "lifesteal") {
				iconNum = 4;
			}
			else if (Game.hero.statusEffects[i].image === "mud") {
				iconNum = 5;
			}
			else if (Game.hero.statusEffects[i].image === "poison") {
				iconNum = 6;
			}
			else if (Game.hero.statusEffects[i].image === "speedUp") {
				iconNum = 7;
			}
			else if (Game.hero.statusEffects[i].image === "stealth") {
				iconNum = 8;
			}
			else if (Game.hero.statusEffects[i].image === "damageUp") {
				iconNum = 9;
			}
			else if (Game.hero.statusEffects[i].image === "stunned") {
				iconNum = 10;
			}
			else if (Game.hero.statusEffects[i].image === "water") {
				iconNum = 11;
			}
			else if (Game.hero.statusEffects[i].image === "damageDown") {
				iconNum = 12;
			}
			else if (Game.hero.statusEffects[i].image === "xpDown") {
				iconNum = 13;
			}
			else if (Game.hero.statusEffects[i].image === "timer") {
				iconNum = 14;
			}
			else if (Game.hero.statusEffects[i].image === "xpUp") {
				iconNum = 15;
			}
			else { // no status effect image
				iconNum = 3; // fire image used as placeholder
				console.error("Status effect " + Game.hero.statusEffects[i].title + " icon not found");
			}
			this.ctx.drawImage(Game.statusImage, 0, 27 * iconNum, 27, 27, 270 + i * 35, 10, 27, 27);
			this.ctx.fillStyle = "black";
			this.ctx.font = "20px MedievalSharp";
			this.ctx.textAlign = "right";
			if (typeof Game.hero.statusEffects[i].info !== "undefined") { // variable exists
				if (typeof Game.hero.statusEffects[i].info.time !== "undefined" && typeof Game.hero.statusEffects[i].info.ticks !== "undefined") { // variable exists
					this.ctx.fillText(Round(Game.hero.statusEffects[i].info.time - Game.hero.statusEffects[i].info.ticks), 295 + i * 35, 37);
				}
			}
			this.ctx.textAlign = "center";
		}
	}
}

// only called whenever loadArea is called (for efficiency) - called as often as getTime
// night effect
Game.renderDayNight = function () {
	// wipe canvas
	this.ctxDayNight.clearRect(0, 0, 600, 600);
	// make canvas darker if it is night time and the player is not indoors
	if (Game.time === "night" && !Areas[Game.areaName].indoors) {
		this.ctxDayNight.fillStyle = "black";
		this.ctxDayNight.globalAlpha = 0.35; // maybe change?
		this.ctxDayNight.fillRect(0, 0, 600, 600);
	}
	else if (Game.time === "bloodMoon" && !Areas[Game.areaName].indoors) {
		this.ctxDayNight.fillStyle = "#2d0101"; // red tint
		this.ctxDayNight.globalAlpha = 0.45;
		this.ctxDayNight.fillRect(0, 0, 600, 600);
	}
}

//
// Save player progress
//

// autosave every 1 minute
/*setInterval(function() {
	Game.saveProgress("auto");
}, 60000);*/

Game.saveProgress = function (saveType) { // if saveType is "auto" then the save is an autosave (hence has a slightly different console.info)
	if (localStorage.getItem("accept") === "true") {
		// save player position to savedata.js
		Player.x = Game.hero.x;
		Player.y = Game.hero.y;
		Player.areaName = Game.areaName;
		Player.checkpoint = Game.hero.checkpoint;
		// save other player details that aren't otherwise saved to savedata
		Player.health = Game.hero.health;
		Player.trail = Game.hero.trail;
		// re-link status effects (inefficient - tbd)
		Player.statusEffects = Game.hero.statusEffects;
		
		// save everything in savedata.js
		localStorage.setItem(Player.class, JSON.stringify(Player));
		localStorage.setItem("user", JSON.stringify(User));
		
		clearInterval(Game.saveTimeout); // clear the previous 60 second interval to avoid saves being too often
		Game.saveTimeout = setTimeout(function() {
			Game.saveProgress("auto");
		}, 60000); // save a minute after the current save
		
		// message to console
		let time = new Date();
		console.info((saveType === "auto" ? "AUTO" : "") + "SAVE AT " + (time.getHours() < 10 ? "0" : "") + time.getHours() + ":" + (time.getMinutes() < 10 ? "0" : "") + time.getMinutes() + ":" + (time.getSeconds() < 10 ? "0" : "") + time.getSeconds());
	}
	if (saveType === "logout") {
		window.location.replace("./selection/index.html");
	}
}
