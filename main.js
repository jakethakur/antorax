//
// Realms of Antorax canvas code
// Jake Thakur 2018
//


//https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps

//
// Asset loader
//

var Loader = {
    images: {}
};

Loader.loadImage = function (key, src) {
    var img = new Image();

    var d = new Promise(function (resolve, reject) {
        img.onload = function () {
            this.images[key] = img;
            resolve(img);
        }.bind(this);

        img.onerror = function () {
            reject('Could not load image: ' + src);
        };
    }.bind(this));

    img.src = src;
    return d;
};

Loader.getImage = function (key) {
	if (key in this.images) {
		return this.images[key];
	}
	else {
		console.error("Image " + key + " could not be loaded. Is it misspelt or not already loaded in?");
		return null;
	}
};

Loader.wipeImages = function (exceptions) {
	//this.images = {}; // inefficient - wipes player from object
	
	// wipe all images from images object (apart from exceptions)
	for (var key in this.images) {
		if (this.images.hasOwnProperty(key) && !exceptions.includes(key)) {
			delete this.images[key];
		}
	}
}

//
// Keyboard handler
//

var Keyboard = {};

Keyboard.LEFT = 37;
Keyboard.RIGHT = 39;
Keyboard.UP = 38;
Keyboard.DOWN = 40;
Keyboard.SPACE = 32;

Keyboard._keys = {};

Keyboard.listenForEvents = function (keys) {
    window.addEventListener('keydown', this._onKeyDown.bind(this));
    window.addEventListener('keyup', this._onKeyUp.bind(this));

    keys.forEach(function (key) {
        this._keys[key] = false;
    }.bind(this));
}

Keyboard._onKeyDown = function (event) {
    var keyCode = event.keyCode;
    if (keyCode in this._keys) {
        event.preventDefault();
        this._keys[keyCode] = true;
    }
};

Keyboard._onKeyUp = function (event) {
    var keyCode = event.keyCode;
    if (keyCode in this._keys) {
        event.preventDefault();
        this._keys[keyCode] = false;
    }
};

Keyboard.isDown = function (keyCode) {
    if (!keyCode in this._keys) {
        throw new Error('Keycode ' + keyCode + ' is not being listened to');
    }
    return this._keys[keyCode];
};

//
// Game object
//

var Game = {
	secondary: {},
};
Game.canvas = document.getElementById("game");
Game.secondary.canvas = document.getElementById("secondary");

//run game
Game.run = function (context, secondaryContext) {
    this.ctx = context;
	
    this.secondary.ctx = secondaryContext;
	
    this._previousElapsed = 0;

    this.loadArea("tutorial", undefined);
};

// calculate current tick length and update/render canvas accordingly
Game.tick = function (elapsed) {
    window.requestAnimationFrame(this.tick);

    // clear previous frame
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // compute delta time in seconds -- also cap it
    var delta = (elapsed - this._previousElapsed) / 1000.0;
    delta = Math.min(delta, 0.25); // maximum delta of 250 ms
    this._previousElapsed = elapsed;
	
	
	this.update(delta); //update game state
	this.render(); //render game display
	
	
	// reset text formatting
	this.resetFormatting();
	
	// display delta time (debug)
	//this.ctx.fillText("delta: " + Math.round(delta * 1000) / 1000, 10, 30);
	
	// display frames per second (debug)
	// doesn't work very well - should be averaged - TBD
	if(document.getElementById("fpsOn").checked){
		//fps array needs to be defined
		//make own function?
		/*this.fpsArray.push(Math.round(1 / delta));
		if (this.fpsArray.length >= 100) {
			this.fpsArray.shift();
		}
		this.fpsArray.push(Math.round(1 / delta));*/
		this.ctx.fillText("fps: " + Math.round(1 / delta), 10, 40);
	}
}.bind(Game);

//
// Start up function
//

window.onload = function () {
    let context = Game.canvas.getContext('2d');
	let secondaryContext = Game.secondary.canvas.getContext('2d');
    Game.run(context, secondaryContext);
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
		return isSlow;
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
};

//
// Global functions
// (maybe these shouldn't be global?)
//

// random number between upper and lower limit
function random (minimum, maximum) {
    return Math.floor((Math.random() * (maximum - minimum + 1)) + minimum);
}

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
	for (let i = 0; i < array.length; i++) {
		if (array[i].id == id) {
			return i;
		}
	}
	console.warn("The requested item of id " + id + " could not be found in the following array:");
	console.warn(array);
	return null;
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
	}
	
	isTouching (object) {
		if (this.screenX - this.width / 2 < object.screenX + object.width / 2 &&
	    this.screenX + this.width / 2 > object.screenX - object.width / 2 &&
	    this.screenY - this.height / 2 < object.screenY + object.height / 2 &&
	    this.screenY + this.height / 2 > object.screenY - object.height / 2) {
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
	}
}

// a version of thing that can be damaged (but can't deal damage)
class Character extends Thing {
	constructor(properties) {
		super(properties);
		
		this.name = properties.name;
		
		this.health = properties.health || properties.stats.maxHealth;
		this.damageTaken = 0; // only used so far for Dummies
		this.speed = properties.stats.walkSpeed || 0;

		// stats
		this.stats = {};
		this.stats.maxHealth = properties.stats.maxHealth;
		// it is recommended that you pick a value for these, but not necessary
		this.stats.defence = properties.stats.defence || 0;
		this.stats.healthRegen = properties.stats.healthRegen || 0;
		this.stats.walkSpeed = properties.stats.walkSpeed || 0;
		this.stats.swimSpeed = properties.stats.swimSpeed || 0;
		
		// optional stats
		// using || defaults to second value if first is undefined, 0 or ""
		this.stats.dodgeChange = properties.stats.dodgeChance || 0;
		this.stats.reflection = properties.stats.reflection || 0;
		
		this.chat = properties.chat || {}; // object containing properties that are inserted into chat when specific things happen
		/* examples of chat properties:
			firstDamaged - said when the character is damaged for the first time
			fiftyPercentHealth - said when the character goes below 50% health for the first time
			tenPercentHealth - said when the character goes below 10% health for the first time
			//death - said when the character dies (unlimited times) TBD
			more tbd
			
			use "/me " at the start of the chat to make the chat reflexive
			e.g:	"Hi" => "Character: Hi"
					"/me Hi" => "Character Hi"
		*/
		
		this.direction = properties.direction || 0;
		
		this.statusEffects = [];
	}
	
	// insert a message into the chat, under the format of "this.name: message"
	// this.name is emboldened via <strong> tags
	// if message begins with "/me " (including space), the format changes to "this.name message"
	// if singleUse is true, and if Dom.chat.contents contains message, the message is not sent
	say (message, singleUse, delay) {
		if (message.substring(0, 4) === "/me ") { // reflexive message
			message = message.substr(4, message.length);
			if (!(singleUse && Dom.chat.contents.includes("<strong>" + this.name + "</strong> " + message))) { // check if message should be sent (due to singleUse)
				Dom.chat.insert("<strong>" + this.name + "</strong> " + message, delay);
			}
		}
		else {
			if (!(singleUse && Dom.chat.contents.includes("<strong>" + this.name + "</strong>: " + message))) { // check if message should be sent (due to singleUse)
				Dom.chat.insert("<strong>" + this.name + "</strong>: " + message, delay);
			}
		}
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
		
		// information about projectile
		this.projectile = properties.projectile; // should contain projectile width, height, adjust x and y, image
	//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ???
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
		this.destinationX = properties.destinationX;
		this.destinationY = properties.destinationY;
	}
}

// player - similar to Player global variable in saveData.js, but only contains necessary information (also has some cool functions)
class Hero extends Attacker {
	constructor (properties) {
		super(properties);
		//this.baseSpeed = properties.baseSpeed;
		//this.waterSpeed = properties.waterSpeed;=
		
		// perhaps condense the following with enemy's canAttack?
		this.channelTime = 0;
		this.channelling = false;
		
		// status effects override - mirror savedata.js' versions
		this.statusEffects = Player.statusEffects;
		
		// stats
		this.stats.looting = properties.stats.looting;
		
		// optional stats
		// using || defaults to second value if first is undefined, 0 or ""
		this.stats.focusSpeed = properties.stats.focusSpeed || 0; // the user's total focus speed default is 1 but can be changed by bows
	}
	
	move (delta, dirx, diry) {
		// update speed if the player has selected HIGH SPEED MODE in their settings (maybe doesn't have to be done every move tick? - TBD use onclick in main instead with status effect)
		if (document.getElementById("speedOn").checked) {
			Player.stats.walkSpeed = 1000;
			Player.stats.swimSpeed = 333;
			Game.inventoryUpdate();
		}
		else {
			// TBD undo ability
		}
		
		// move hero
		this.x += dirx * this.speed * delta;
		this.y += diry * this.speed * delta;

		// check if we walked into a non-walkable tile
		this._collide(dirx, diry, delta);

		// clamp values
		var maxX = this.map.cols * this.map.tsize;
		var maxY = this.map.rows * this.map.tsize;
		this.x = Math.max(0, Math.min(this.x, maxX));
		this.y = Math.max(0, Math.min(this.y, maxY));
	}
	
	_collide (dirx, diry, delta) { // update move speed based on equipment and surroundings
		var row, col;
		// there used to be a -1 in right and bottom is because image ranges from 0 to 59 and not up to 60
		var left = this.x - this.width / 2;
		var right = this.x + this.width / 2;
		//var top = this.y - this.height / 2;
		var top = this.y + 100 - this.height / 2;
		//var bottom = this.y + this.height / 2;
		var bottom = this.y + 100;

		// check for collisions on sprite sides
		var collision =
			this.map.isSolidTileAtXY(left, top) ||
			this.map.isSolidTileAtXY(right, top) ||
			this.map.isSolidTileAtXY(right, bottom) ||
			this.map.isSolidTileAtXY(left, bottom);
		
		// test for slow tiles (e.g: water, mud)
		let slowTile = this.map.isSlowTileAtXY(this.x, this.y + 50);
		if (slowTile === null) { // normal speed
			this.speed = this.stats.walkSpeed;
			// remove swimming/mud status effect
			for(var i = 0; i < this.statusEffects.length; i++){
				if(this.statusEffects[i].title == "Swimming" || this.statusEffects[i].title == "Stuck in the mud"){
					this.statusEffects.splice(i,1);
				}
			}
			this.updateStatusEffects();
		}
		else if (slowTile === "water") { // in water tile
			if(this.speed === this.stats.walkSpeed) {
				this.speed = this.stats.swimSpeed;
				if(!this.statusEffects.includes({title: "Swimming", effect: "Reduced movement speed",})) { // maybe just make a function to add a status effect? ( tbd )
					this.statusEffects.push(new statusEffect({title: "Swimming", effect: "Reduced movement speed",}));
					this.updateStatusEffects();
				}
			}
		}
		else if (slowTile === "mud") { // in mud tile
			// currently mud goes the same speed as swimSpeed
			if(this.speed === this.stats.walkSpeed) {
				this.speed = this.stats.swimSpeed;
				if(!this.statusEffects.includes({title: "Stuck in the mud", effect: "Reduced movement speed",})) {
					this.statusEffects.push(new statusEffect({title: "Stuck in the mud", effect: "Reduced movement speed",}));
					this.updateStatusEffects();
				}
			}
		}
		else {
			console.error("Unknown slow tile: " + slowTile);
		}
		
		if (!collision) { return; }

		if (diry > 0) {
			this.y -= this.speed * delta;
			//row = this.map.getRow(bottom);
			//this.y = -this.height / 2 + this.map.getY(row);
		}
		if (diry < 0) {
			this.y += this.speed * delta;
			//row = this.map.getRow(top);
			//this.y = this.height / 2 + this.map.getY(row + 1);
		}
		if (dirx > 0) {
			this.x -= this.speed * delta;
			//col = this.map.getCol(right);
			//this.x = -this.width / 2 + this.map.getX(col);
		}
		if (dirx < 0) {
			this.x += this.speed * delta;
			//col = this.map.getCol(left);
			//this.x = this.width / 2 + this.map.getX(col + 1);
		}
	}
	
	// start channeling basic attack
	startAttack (e) {
		if (Player.inventory.weapon[0].name !== "") { // checks the player has no weapon
			this.channelling = true;
			
			var projectileX, projectileY, projectileRotate;
			
			projectileX = Game.camera.x + (e.clientX);
			projectileY = Game.camera.y + (e.clientY);
			projectileRotate = bearing(this, {x: projectileX, y: projectileY}) + Math.PI / 2;
			
			this.channellingProjectileId = Game.nextProjectileId;

			Game.projectiles.push(new Projectile({
				map: map,
				x: projectileX,
				y: projectileY,
				width: 10,
				height: 40,
				rotate: projectileRotate,
				adjust: {
					// manually adjust position - make this per class (per projectile image) in the future ( tbd )
					x: -13,
					y: -13,
				},
				image: "projectile",
			}));
		}
	}
	
	// fire basic attack
	finishAttack (e) {
		if (this.channelling) { // check that the player is channelling an attack (they might not have a weapon equipped so are not channelling, for example)
			this.channelTime = 0;
			this.channelling = false;
			
			// damage enemies that the projectile is touching
			Game.projectiles[Game.searchFor(this.channellingProjectileId, Game.projectiles)].dealDamage(this, [Game.enemies, Game.dummies,]);
			
			// after a timeout (2s), remove the projectile that was just shot
			// this doesn't work if the user attacks too fast, though this shouldn't be a problem...
			let a = this.channellingProjectileId; // maintain a variable of the currently shot projectile
			setTimeout(function (a) {
				Game.projectiles.splice(Game.searchFor(a, Game.projectiles), 1); // find the id of the to-be-removed projectile and remove it
			}, 2000, a);
			
			this.channellingProjectileId = null;
		}
	}
	
	// called whenever Game.hero
	updateStatusEffects () {
		// update secondary canvas (status effects display on it)
		Game.secondary.render();
		
		// update dom
		Dom.inventory.updateIdentification();
	}
}

// any projectile
class Projectile extends Thing {
	constructor(properties) {
		super(properties);
		
		this.id = Game.nextProjectileId; // way that the game can identify which projectile was shot
		Game.nextProjectileId++;
		
		this.expand = 1;
		
		this.rotate = properties.rotate;
		
		// adjust position to make it directed to mouse pointer
		this.adjust = {
			x: properties.adjust.x,
			y: properties.adjust.y,
		};
		
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
				if (this.isTouching(to[i][x])) { // check projectile is touching character it wants to damage
					
					// damage
					let damageDealt = attacker.stats.damage - to[i][x].stats.defence / 10; // calculate damage dealt
					if (damageDealt < 0) {
						damageDealt = 0;
					}
					if (random(0, 100) < attacker.stats.criticalChance) { // critical hit
						damageDealt *= 2
						to[i][x].health -= damageDealt;
						to[i][x].damageTaken += damageDealt;
						this.damageDealt.push({enemy: to[i][x], damage: damageDealt, critical: true});
					}
					else {
						to[i][x].health -= damageDealt;
						to[i][x].damageTaken += damageDealt;
						this.damageDealt.push({enemy: to[i][x], damage: damageDealt, critical: false});
					}
					
					// poison
					// TBD decide if defence should affect this
					if (attacker.stats.poisonX > 0 && attacker.stats.poisonY > 0) { // check player weapon has poison
						// remember poison damage (so the player cannot change their weapon)
						to[i][x].statusEffects.push(new statusEffect({
							title: "Poisoned",
							effect: "Take " + attacker.stats.poisonX + " damage over " + attacker.stats.poisonY + " seconds.",
							info: {
								poisonDamage: attacker.stats.poisonX,
								poisonTime: attacker.stats.poisonY,
								poisonTicks: 0, // increased by 1 every tick
							},
							idNumber: x,
							tick: function() { // deal poison damage every second
								if (this.info.poisonTicks < this.info.poisonTime) { // check poison has not expired
									to[i][this.idNumber].health -= this.info.poisonDamage / this.info.poisonTime;
									to[i][this.idNumber].damageTaken += this.info.poisonDamage / this.info.poisonTime;
									this.info.poisonTicks++;
								}
								else { // remove poison interval
									for (var z = 0; z < to[i][this.idNumber].statusEffects.length; z++) { // try to find poison in array (inefficient?)
										if (to[i][this.idNumber].statusEffects[z].info.poisonTicks >= to[i][this.idNumber].statusEffects[z].info.poisonTime) {
											to[i][this.idNumber].statusEffects.splice(z, 0);
											break;
										}
									}
								}
							},
						}));
						Game.hero.updateStatusEffects();
					}
					
					if (to[i][x] == Game.hero) { // re-render the second canvas if the hero has been damaged
						Game.secondary.render();
					}
					
					// chat relating to being damaged (and dealing damage? TBD)
					if (typeof to[i][x].chat !== "undefined") { // check the character has been given text to say about being damaged
						if (to[i][x].health < to[i][x].stats.maxHealth / 10 && typeof to[i][x].chat.tenPercentHealth !== "undefined") { // 10% health chat message
							to[i][x].say(to[i][x].chat.tenPercentHealth, true, 0);
						}
						else if (to[i][x].health < to[i][x].stats.maxHealth / 2 && typeof to[i][x].chat.fiftyPercentHealth !== "undefined") { // 50% health chat message
							to[i][x].say(to[i][x].chat.fiftyPercentHealth, true, 0);
						}
						else if (to[i][x].health < to[i][x].stats.maxHealth && typeof to[i][x].chat.firstDamaged !== "undefined") { // first damaged chat message
							to[i][x].say(to[i][x].chat.firstDamaged, true, 0);
						}
					}
				}
			}
		}
	}
}

// quest NPC (to be merged with merchant)
class QuestNPC extends Thing { // to be changed to character
	constructor(properties) {
		super(properties);
		this.quests = properties.quests; // quest object address, to be read from questdata.js file
		this.name = properties.name;
		
		this.questProgressText = properties.questProgressText; // text when quest is in progress
		this.questCompleteText = properties.questCompleteText; // text when quest has been completed
	}
}

// merchant (to be merged with quest NPC)
class Merchant extends Thing { // to be changed to character
	constructor(properties) {
		super(properties);
		this.name = properties.name;
		
		this.greetingText = properties.greetingText;
		this.buyText = properties.buyText; // tbd
		
		this.items = properties.items; // items sold
		
		//this.purchaseCurrencies = properties.purchaseCurrencies; // currencies that items are purchased with
	}
}

// person that just moves around and does nothing of use (to be what merchant/quest NPC inherit off)
// currently doesn't move properly
class Villager extends Thing { // to be changed to character
	constructor(properties) {
		super(properties);
		
		this.name = properties.name;
		
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
			if (random(0,1) == 0) {
				this.updateState("move"); // NPC will start with movement
			}
			else {
				this.updateState("wait"); // NPC will start with waiting
			}
		}
		
		else if (type === "wait") { // NPC has just finished moving
			this.state.x = undefined;
			this.state.y = undefined;
			this.state.wait = random(1000, 6000);
		}
		
		else if (type === "move") { // NPC has just finished waiting
			this.state.wait = undefined;
			this.wait = 0;
			this.state.x = random(this.boundary.x, this.boundary.x + this.boundary.width);
			this.state.y = random(this.boundary.y, this.boundary.y + this.boundary.height);
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
	
	// function to be carried out during Game.render()
	renderFunction () {
		// show damage taken above head
		if (this.damageTaken > 0) {
			// formatting
			Game.ctx.fillStyle = "rgb(0, 0, 0)";
			Game.ctx.textAlign = "center";
			Game.ctx.font = "bold 18px MedievalSharp";
			
			// "\u{2694}" displays the unicode crossed swords symbol
			// thanks to Wilfred Lee at https://stackoverflow.com/a/49667311/9713957
			// w3schools reference for unicode special characters: https://www.w3schools.com/charsets/ref_utf_symbols.asp
			Game.ctx.fillText("\u{2694} " + this.damageTaken, this.screenX, this.screenY - this.height / 2);
		}
	}
}

// moves and attacks in a hostile way...
class Enemy extends Attacker {
	constructor(properties) {
		super(properties);
		
		// combat traits (specific to enemy)
		this.leashRadius = properties.leashRadius; // how far away the player has to be for the enemy to ignore them
		
		// for code later on
		this.canAttack = true; // perhaps condense with hero isChannelling?
	}
	
	update (delta) {
		// perhaps condense into hostile and passive ai functions (that also apply to things like villagers)?
		if (distance(this, Game.hero) < this.stats.range) { // enemy should attack hero
			if (this.canAttack) { // projectile can be shot
				this.shoot(Game.hero);
			}
		}
		else if (distance(this, Game.hero) > this.leashRadius) { // enemy should move passively
			// passive movement within given (to be given...) boundaries...
		}
		else if (distance(this, Game.hero) < this.leashRadius && distance(this, Game.hero) > this.stats.range) { // enemy should move towards hero
			this.move(delta, Game.hero);
		}
		// add spell cast
	}
	
	// move towards entity (towards parameter)
	move (delta, towards) {
		this.bearing = bearing(this, towards); // update bearing (maybe doesn't need to be done every tick?)
		this.x += Math.cos(this.bearing) * this.speed * delta;
		this.y += Math.sin(this.bearing) * this.speed * delta;
	}
	
	// shoot projectile at array of enemies
	shoot (at) {
		this.canAttack = false;
		
		var projectileX, projectileY, projectileRotate;
		
		// TBD add randomness in projectile impact towards player
		// TBD make it so that this randomness can make the enemy miss? this could be a specifyable stat
		projectileX = Game.camera.x + Game.hero.screenX - Game.hero.width / 2;
		projectileY = Game.camera.y + Game.hero.screenY - Game.hero.height / 2;
		projectileRotate = bearing(this, {x: projectileX, y: projectileY}) + Math.PI / 2;
		
		this.channellingProjectileId = Game.nextProjectileId;

		Game.projectiles.push(new Projectile({
			map: map,
			x: projectileX,
			y: projectileY,
			width: this.projectile.width,
			height: this.projectile.height,
			rotate: projectileRotate,
			adjust: {
				x: this.projectile.adjust.x,
				y: this.projectile.adjust.y,
			},
			image: this.projectile.image,
		}));
		
		// damage allies that the projectile is touching
		Game.projectiles[Game.searchFor(this.channellingProjectileId, Game.projectiles)].dealDamage(this, [[Game.hero],]);
		
		// wait to shoot next projectile
		setTimeout(function () {
			this.canAttack = true;
		}.bind(this), this.stats.reloadTime);
		
		// after a timeout (2s), remove the projectile that was just shot
		// taken from Player
		let a = this.channellingProjectileId; // maintain a variable of the currently shot projectile
		setTimeout(function (a) {
			Game.projectiles.splice(Game.searchFor(a, Game.projectiles), 1); // find the id of the to-be-removed projectile and remove it
		}, 2000, a);
		
		this.channellingProjectileId = null;
	}
	
	// function to be carried out during Game.render()
	renderFunction () {
		// show health bar above head
		Game.drawHealthBar(Game.ctx, this, this.screenX - this.width * 0.5, this.screenY - this.height * 0.5 - 15, this.width, 15);
	}
}

//
// Constructors
//

function statusEffect(properties) {
	this.title = properties.title; // displayed title
	this.effect = properties.effect; // displayed effect
	
	this.info = properties.info; // extra information (e.g: poison damage and length)
	
	this.idNumber = properties.idNumber; // number to refer back to the main object - e.g: Game.enemies[idNumber]
	
	this.tick = properties.tick; // function to be carried out every second
}

//
// Load game
//

// load game for the first time
Game.load = function (names, addresses) {
	this.ctx.imageSmoothingEnabled = false;
	
	if (names.length != addresses.length) {
		throw Error("Name length is not the same as address length. Consider fixing your area's images object in areadata.js?");
	}
	
	let toLoad = [];
	
	for (var i = 0; i < names.length; i++) {
		toLoad.push(Loader.loadImage(names[i], addresses[i]));
	}
	
	// check player image has been loaded (if not, then load it)
	if (!Object.keys(Loader.images).includes("hero")) {
		// currently doesn't take into account player class
		toLoad.push(Loader.loadImage("hero", "./assets/player/archer.png"));
	}
	
	// check projectile image has been loaded (if not, then load it)
	if (!Object.keys(Loader.images).includes("projectile")) {
		// currently doesn't take into account player class
		toLoad.push(Loader.loadImage("projectile", "./assets/projectiles/" + "archer" + ".png"));
	}
	
	// check status image has been loaded (if not, then load it)
	if (!Object.keys(Loader.images).includes("status")) {
		toLoad.push(Loader.loadImage("status", "./assets/icons/status.png"));
	}
	
    return toLoad;
};

// pull data from areadata.js
Game.loadArea = function (areaName, destination) {
	
	// wipe previously loaded images
	Loader.wipeImages([
		// images not to be wiped
		"hero",
		"projectile",
		"status",
	]);
	
	// load images
    var p = this.load(Areas[areaName].images.names, Areas[areaName].images.addresses);
	
	// wait until images have been loaded
    Promise.all(p).then(function (loaded) {
		
		this.areaName = areaName;
		
		// map
		// there are some properties that some areaData areas don't have, so should be undefined rather than the old value
		map.solidTiles = undefined;
		map.waterTiles = undefined;
		map.mudTiles = undefined;
		map.pathTiles = undefined;
		// now add all properties from areaData to the map variable
		Object.assign(map, Areas[areaName].mapData);
	
		// set game time of day (day or night)
		this.time = this.getTime();
	
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
		if(this.camera != undefined) {
			this.camera.maxX = map.cols * map.tsize - this.canvas.width;
			this.camera.maxY = map.rows * map.tsize - this.canvas.height;
		}
		
		// villagers (currently broken)
		this.villagers = [];
		if(Areas[areaName].villagers !== undefined) {
			for(var i = 0; i < Areas[areaName].villagers.length; i++) {
				Areas[areaName].villagers[i].map = map;
				this.villagers.push(new Villager(Areas[areaName].villagers[i]));
			}
		}
		
		// characters (aesthetic only)
		this.characters = [];
		if(Areas[areaName].characters !== undefined) {
			for(var i = 0; i < Areas[areaName].characters.length; i++) {
				Areas[areaName].characters[i].map = map;
				this.characters.push(new Villager(Areas[areaName].characters[i]));
			}
		}
		
		// quest npcs
		this.questNPCs = [];
		if(Areas[areaName].questNPCs !== undefined) { // check they exist in areadata.js
			for(var i = 0; i < Areas[areaName].questNPCs.length; i++) {
				Areas[areaName].questNPCs[i].map = map;
				this.questNPCs.push(new QuestNPC(Areas[areaName].questNPCs[i]));
			}
		}
		
		// merchants
		this.merchants = [];
		if(Areas[areaName].merchants !== undefined) {
			for(var i = 0; i < Areas[areaName].merchants.length; i++) {
				Areas[areaName].merchants[i].map = map;
				this.merchants.push(new Merchant(Areas[areaName].merchants[i]));
			}
		}
		
		// item identifiers
		this.identifiers = [];
		if(Areas[areaName].identifiers !== undefined) {
			for(var i = 0; i < Areas[areaName].identifiers.length; i++) {
				Areas[areaName].identifiers[i].map = map;
				this.identifiers.push(new Thing(Areas[areaName].identifiers[i]));
			}
		}
		
		// dummies (enemies for training) - trivial (don't damage you)
		this.dummies = [];
		if(Areas[areaName].dummies !== undefined) {
			for(var i = 0; i < Areas[areaName].dummies.length; i++) {
				Areas[areaName].dummies[i].map = map;
				this.dummies.push(new Dummy(Areas[areaName].dummies[i]));
			}
		}
		
		// enemies
		this.enemies = [];
		if(Areas[areaName].enemies !== undefined) {
			for(var i = 0; i < Areas[areaName].enemies.length; i++) {
				Areas[areaName].enemies[i].map = map;
				this.enemies.push(new Enemy(Areas[areaName].enemies[i]));
			}
		}
		
		// projectiles
		this.projectiles = [];
		this.nextProjectileId = 0; // reset projectile id chain (because projectiles don't persist between areas)
		
		// area teleports
		this.areaTeleports = [];
		if(Areas[areaName].areaTeleports !== undefined) {
			for(var i = 0; i < Areas[areaName].areaTeleports.length; i++) {
				Areas[areaName].areaTeleports[i].map = map;
				this.areaTeleports.push(new AreaTeleport(Areas[areaName].areaTeleports[i]));
			}
		}
		else {
			console.warn("This area has no areaTeleports in areaData... Enjoy your new home!");
		}
		
		// music
		// it is checked if the user has selected for music to be played in the settings within the Game.playMusic function
		this.playMusic();
		
		// init game (if it hasn't been done so already)
		if(this.hero == undefined) {
			this.init();
		}
		
		// reposition player
		if(destination != undefined) {
			this.hero.x = destination.x;
			this.hero.y = destination.y;
		}
		
		// display area name
		this.displayAreaName = Areas[areaName].data;
		this.displayAreaName.duration = 200;
    }.bind(this));
	
}

// initialise game
Game.init = function () {
	// welcome player
	// tbd: make it say welcome back if you've played before and it saved your progress; make it a different colour?
	Dom.chat.insert("Welcome to Antorax, " + Player.name + "!", 0);
	
	// music
	this.playingMusic = null;
	
	// list of basic (no extra operations to be done) things to be rendered (in order)
	this.renderList = ["characters", "villagers", "questNPCs", "merchants", "identifiers", "dummies", "enemies"];
	// then player, then projectiles (in order they were shot)
	
	// create the player at its start x and y positions
	this.hero = new Hero({
		// properties inherited from Entity
		map: map,
		x: Areas[this.areaName].player.x,
		y: Areas[this.areaName].player.y,
		width: 57,
		height: 120,
		
		// properties inheritied from Thing
		image: "hero",
		
		// properties inherited from Character
		direction: 3,
		health: Player.health,
		name: Player.name,
		
		// properties inherited from Attacker
		
		// stats
		stats: Player.stats,
	});
	
	// set loaded status image
	this.statusImage = Loader.getImage("status");
	
	// detect player movement and interaction
    Keyboard.listenForEvents(
        [Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN, Keyboard.SPACE]);
		
	// player attack on click
	Game.secondary.canvas.addEventListener("mousedown", Game.hero.startAttack.bind(this.hero));
	Game.secondary.canvas.addEventListener("mouseup", Game.hero.finishAttack.bind(this.hero));
	
	// camera
    this.camera = new Camera(map, this.canvas.width, this.canvas.height);
    this.camera.follow(this.hero);
	
	// check for in-game events
	this.checkEvents();
	
	// update status effects every second
	this.statusInterval = setInterval(this.statusUpdate.bind(this), 1000);
	
	// begin game display
	Game.secondary.render();
	window.requestAnimationFrame(this.tick);
};

// check for events
Game.checkEvents = function() {
	// get date
	var today = new Date();
	var day = today.getDate();
	var month = today.getMonth() + 1; // January is 0, so add 1
	var year = today.getFullYear();
	
	// James Day
	// Summer Solstice
	if (day == 21 && month == 6) {
		Player.inventory.boots.push(Items.boots[7]);
	}
}

// check time (day or night)
Game.getTime = function() {
	// get date and time
	var today = new Date();
	var hour = today.getHours();
	var day = today.getDate();
	var month = today.getMonth() + 1; // January is 0, so add 1
	
	// Summer Solstice - sun up all day
	if (day == 21 && month == 6) {
		return "day";
	}
	// Winter Solstice - sun down all day
	else if (day == 21 && month == 12) {
		return "night";
	}

	// day time
	if (hour > 7 && hour < 19) {
		return "day";
	// night time
	} else {
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
		// check if the new area's music is already being played
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
// Update game state
//

Game.update = function (delta) {
    // handle hero movement with arrow keys
    var dirx = 0;
    var diry = 0;
    if (Keyboard.isDown(Keyboard.LEFT)) { dirx = -1; this.hero.direction = 2; }
    if (Keyboard.isDown(Keyboard.RIGHT)) { dirx = 1; this.hero.direction = 4; }
    if (Keyboard.isDown(Keyboard.UP)) { diry = -1; this.hero.direction = 1; }
    if (Keyboard.isDown(Keyboard.DOWN)) { diry = 1; this.hero.direction = 3; }

	if (dirx !== 0 || diry !== 0) {
        this.hero.move(delta, dirx, diry);
        this.hasScrolled = true;
    }
	else {
        this.hasScrolled = false;
	}
    this.camera.update();
	
	// interact with touching object
    if (Keyboard.isDown(Keyboard.SPACE)) { diry = 1; this.hero.direction = 3; this.hero.move }
	
	// check collision with quest npcs
	for(var i = 0; i < this.questNPCs.length; i++) { // iterate though quest npcs
	
		for(var x = 0; x < this.questNPCs[i].quests.length; x++) { // iterate through quests involving those npcs
		
			// quest starts
			if (this.questNPCs[i].quests[x].role == "start") {
				// doesn't currently check if the player's level is too low to accept the quest
				
				// quest is ready to be accepted
				if (this.hero.isTouching(this.questNPCs[i]) && Dom.currentlyDisplayed === "" && !Dom.quests.activeQuestArray.includes(this.questNPCs[i].quests[x].quest.quest) && !Dom.quests.completedQuestArray.includes(this.questNPCs[i].quests[x].quest.quest)) {
					Dom.quest.start(this.questNPCs[i].quests[x].quest);
				}
				// quest is currently active
				else if (this.hero.isTouching(this.questNPCs[i]) && Dom.quests.activeQuestArray.includes(this.questNPCs[i].quests[x].quest.quest) && !Dom.chat.contents.includes("<strong>" + this.questNPCs[i].name + ": " + "</strong>" + this.questNPCs[i].questProgressText)) {
					Dom.chat.insert("<strong>" + this.questNPCs[i].name + ": " + "</strong>" + this.questNPCs[i].questProgressText, 100);
				}
				// quest has been completed
				else if (this.hero.isTouching(this.questNPCs[i]) && Dom.quests.completedQuestArray.includes(this.questNPCs[i].quests[x].quest.quest) && !Dom.chat.contents.includes("<strong>" + this.questNPCs[i].name + ": " + "</strong>" + this.questNPCs[i].questCompleteText)) {
					Dom.chat.insert("<strong>" + this.questNPCs[i].name + ": " + "</strong>" + this.questNPCs[i].questCompleteText, 100);
				}
				if(Dom.currentlyDisplayed != this.questNPCs[i].quests[0].quest && Dom.currentlyDisplayed != "" && !Dom.override){
					if(this.hero.isTouching(this.questNPCs[i]) && document.getElementsByClassName("closeClass")[0].style.border != "5px solid red"){
						Dom.changeBook("questsPage",false,0);
						Dom.quests.override = true;
					}else if(!this.hero.isTouching(this.questNPCs[i]) && document.getElementsByClassName("closeClass")[0].style.border == "5px solid red" && Dom.quests.override){
						Dom.changeBook("questsPage",false,1);
						Dom.quests.override = false;
					}
				}
			}
			
			// quest finishes
			if (this.questNPCs[i].quests[x].role == "finish") {
				// check if quest is ready to be finished
				if (this.hero.isTouching(this.questNPCs[i]) && Dom.currentlyDisplayed === "" && Dom.quests.activeQuestArray.includes(this.questNPCs[i].quests[x].quest.quest) && !Dom.quests.completedQuestArray.includes(this.questNPCs[i].quests[x].quest.quest)) {
					//check if quest conditions have been fulfilled
					if(this.questNPCs[i].quests[x].quest.isCompleted()[this.questNPCs[i].quests[x].quest.objectives.length - 1]) {
						Dom.quest.finish(this.questNPCs[i].quests[x].quest);
					}
					// quest conditions have not been fulfilled
					else if (!Dom.chat.contents.includes("<strong>" + this.questNPCs[i].name + ": " + "</strong>" + this.questNPCs[i].questProgressText)) {
						Dom.chat.insert("<strong>" + this.questNPCs[i].name + ": " + "</strong>" + this.questNPCs[i].questProgressText, 100);
					}
				}
				// quest has already been completed
				else if (this.hero.isTouching(this.questNPCs[i]) && Dom.quests.completedQuestArray.includes(this.questNPCs[i].quests[x].quest.quest) && !Dom.chat.contents.includes("<strong>" + this.questNPCs[i].name + ": " + "</strong>" + this.questNPCs[i].questCompleteText)) {
					Dom.chat.insert("<strong>" + this.questNPCs[i].name + ": " + "</strong>" + this.questNPCs[i].questCompleteText, 100);
				}
				if(Dom.currentlyDisplayed != this.questNPCs[i].quests[this.questNPCs[i].quests.length-1].quest && Dom.currentlyDisplayed != "" && !Dom.override) {
					if(this.hero.isTouching(this.questNPCs[i]) && document.getElementsByClassName("closeClass")[0].style.border != "5px solid red") {
						Dom.changeBook("questsPage",false,0);
						Dom.quest.override = true;
					}
					else if(!this.hero.isTouching(this.questNPCs[i]) && document.getElementsByClassName("closeClass")[0].style.border == "5px solid red" && Dom.quest.override) {
						Dom.changeBook("questsPage",false,1);
						Dom.quest.override = false;
					}
				}
			}
			
		}
		
	}
	
	// check collision with merchants
	for(var i = 0; i < this.merchants.length; i++) {
        if (this.hero.isTouching(this.merchants[i]) && Dom.currentlyDisplayed === "") {
			Dom.merchant.page(this.merchants[i].name, this.merchants[i].greetingText, this.merchants[i].items);
			if (!Dom.chat.contents.includes("<strong>" + this.merchants[i].name + ": " + "</strong>" + this.merchants[i].buyText)) {
				Dom.chat.insert("<strong>" + this.merchants[i].name + ": " + "</strong>" + this.merchants[i].buyText, 100);
			}
		}
		else if (Dom.currentlyDisplayed != this.merchants[i].name && Dom.currentlyDisplayed != "" && !Dom.override) {
			if(this.hero.isTouching(this.merchants[i]) && document.getElementsByClassName("closeClass")[0].style.border != "5px solid red"){
				Dom.changeBook("questsPage",false,0);
				Dom.merchant.override = true;
			}
			else if (!this.hero.isTouching(this.merchants[i]) && document.getElementsByClassName("closeClass")[0].style.border == "5px solid red" && Dom.merchant.override) {
				Dom.changeBook("questsPage",false,1);
				Dom.merchant.override = false;
			}
		}
    }
	
	// check collision with identifiers
	for(var i = 0; i < this.identifiers.length; i++) {
		if (this.hero.isTouching(this.identifiers[i]) && Dom.currentlyDisplayed === "") { // needs to check that it is not already open - PG tbd
			// open identifier page
			Dom.identifier.page("What would you like to identify?", "Here is your item, adventurer.", "Hmm, this item is of rather fine quality, adventurer.", "Wow! Some people would pay good money for that item!", "You have no unidentified items. Kill enemies to get some.");
		}
		else if (Dom.currentlyDisplayed != "identifier" && Dom.currentlyDisplayed != "identified" && Dom.currentlyDisplayed != "" && !Dom.override) {
			if(this.hero.isTouching(this.identifiers[i]) && document.getElementsByClassName("closeClass")[0].style.border != "5px solid red"){
				Dom.changeBook("identifierPage",false,0);
				Dom.identifier.override = true;
			}
			else if (!this.hero.isTouching(this.identifiers[i]) && document.getElementsByClassName("closeClass")[0].style.border == "5px solid red" && Dom.identifier.override) {
				Dom.changeBook("identifierPage",false,1);
				Dom.identifier.override = false;
			}
		}
	}
	
	// update villagers
	for(var i = 0; i < this.villagers.length; i++) {
		this.villagers[i].update(delta);
    }
	// update enemies
	for(var i = 0; i < this.enemies.length; i++) {
		this.enemies[i].update(delta);
    }
	
	// check collision with area teleports
	for(var i = 0; i < this.areaTeleports.length; i++) {
		// give area teleports a screenX and Y (should be turned into own function)
		this.areaTeleports[i].screenX = (this.areaTeleports[i].x - this.areaTeleports[i].width / 2) - this.camera.x;
		this.areaTeleports[i].screenY = (this.areaTeleports[i].y - this.areaTeleports[i].height / 2) - this.camera.y;
		
        if (this.hero.isTouching(this.areaTeleports[i])) {
			// teleport to new area
			this.loadArea(this.areaTeleports[i].teleportTo, {x: this.areaTeleports[i].destinationX, y: this.areaTeleports[i].destinationY});
		}
    }
	
	// increase player channelTime if they are holding their mouse down
	if (this.hero.channelling) {
		this.hero.channelTime++;
	}
};

// update status effects (called once a second)
Game.statusUpdate = function () {
	// iterate through enemy status effects
	for (var i = 0; i < this.enemies.length; i++) {
		for (var x = 0; x < this.enemies[i].statusEffects.length; x++) {
			// check if the status effect has a function that needs to be called (every second)
			if (this.enemies[i].statusEffects[x].tick !== undefined) {
				this.enemies[i].statusEffects[x].tick();
			}
			// check for expired status effects
			//tbd
		}
	}
	
	// iterate through dummy status effects
	for (var i = 0; i < this.dummies.length; i++) {
		for (var x = 0; x < this.dummies[i].statusEffects.length; x++) {
			// check if the status effect has a function that needs to be called (every second)
			if (this.dummies[i].statusEffects[x].tick !== undefined) {
				this.dummies[i].statusEffects[x].tick();
			}
			// check for expired status effects
			//tbd
		}
	}
}

// called whenever player xp is changed
Game.getXP = function () {
	if(Player.xp >= LevelXP[Player.level]) {
		Player.xp -= LevelXP[Player.level];
		Player.level++;
		Game.playLevelupSound(this.areaName);
		Dom.levelUp.page();
	}
	Game.secondary.render();
}

// called whenever inventory is changed (in order to change player stats)
// this is called by index.html
// PG's code
Game.inventoryUpdate = function (e) {
	if (e == undefined) {
		Game.hero.stats = Player.stats;
	}
	else {
		if (isNaN(parseInt(e.dataTransfer.getData("text")))) {
			Game.hero.stats = Player.stats;
		}
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
	
	// player hitbox
	this.ctx.strokeRect(this.hero.screenX - this.hero.width / 2, this.hero.screenY - this.hero.height / 2, this.hero.width, this.hero.height);
	
	// NPC hitboxes
	for(var i = 0; i < this.questNPCs.length; i++) {
		this.ctx.strokeRect(this.questNPCs[i].screenX - this.questNPCs[i].width / 2, this.questNPCs[i].screenY - this.questNPCs[i].height / 2, this.questNPCs[i].width, this.questNPCs[i].height);
	}
	
	// merchant hitboxes
	for(var i = 0; i < this.merchants.length; i++) {
		this.ctx.strokeRect(this.merchants[i].screenX - this.merchants[i].width / 2, this.merchants[i].screenY - this.merchants[i].height / 2, this.merchants[i].width, this.merchants[i].height);
	}
	
	// identifier hitboxes
	for(var i = 0; i < this.identifiers.length; i++) {
		this.ctx.strokeRect(this.identifiers[i].screenX - this.identifiers[i].width / 2, this.identifiers[i].screenY - this.identifiers[i].height / 2, this.identifiers[i].width, this.identifiers[i].height);
	}
	
	// enemy hitboxes
	for(var i = 0; i < this.enemies.length; i++) {
		this.ctx.strokeRect(this.enemies[i].screenX - this.enemies[i].width / 2, this.enemies[i].screenY - this.enemies[i].height / 2, this.enemies[i].width, this.enemies[i].height);
	}
	
	// dummy hitboxes
	for(var i = 0; i < this.dummies.length; i++) {
		this.ctx.strokeRect(this.dummies[i].screenX - this.dummies[i].width / 2, this.dummies[i].screenY - this.dummies[i].height / 2, this.dummies[i].width, this.dummies[i].height);
	}
	
	// area teleport hitboxes
	for(var i = 0; i < this.areaTeleports.length; i++) {
		this.ctx.strokeRect(this.areaTeleports[i].screenX - this.areaTeleports[i].width / 2, this.areaTeleports[i].screenY - this.areaTeleports[i].height / 2, this.areaTeleports[i].width, this.areaTeleports[i].height);
	}
	
	// projectile hitboxes
	for(var i = 0; i < this.projectiles.length; i++) {
		this.ctx.strokeRect(this.projectiles[i].screenX - this.projectiles[i].width / 2, this.projectiles[i].screenY - this.projectiles[i].height / 2, this.projectiles[i].width, this.projectiles[i].height);
	}
	
	// player tile collision hitboxes
	//this.ctx.strokeStyle="#FF00FF";
	//this.ctx.strokeRect(this.hero.screenX - this.hero.width / 2, this.hero.screenY + 100 - this.hero.height / 2, this.hero.width, this.hero.height / 2);
	
		//var left = this.x - this.width / 2;
		//var right = this.x + this.width / 2;
		//var top = this.y + 100 - this.height / 2;
		//var bottom = this.y + 100 + this.height / 2;

}

// display coordinates on canvas (settings option)
Game.coordinates = function (character) {
	// reset text formatting
	this.resetFormatting();
	
	this.ctx.fillText("x: " + Math.round(character.x), 10, 20);
	this.ctx.fillText("y: " + Math.round(character.y), 10, 30);
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
Game.updateScreenPosition = function (entity) {
	entity.screenX = (entity.x) - this.camera.x;
	entity.screenY = (entity.y) - this.camera.y;
	if (typeof entity.adjust !== "undefined") {
		entity.screenX += entity.adjust.x;
		entity.screenY += entity.adjust.y;
	}
}

// draw a health bar (on given context, for given character, at given position, with given dimensions)
// tbd : change colour for friendly characters?
Game.drawHealthBar = function (ctx, character, x, y, width, height) {
	// remember previous canvas preferences
	const oldGlobalAlpha = ctx.globalAlpha;
	
	// canvas formatting
	ctx.lineWidth = 1;
	ctx.globalAlpha = 0.6;
	
	// health variables
	const barValue = Math.pow(10, (character.stats.maxHealth.toString().length - 1)); // get width of each small health bar (in health)
	character.healthFraction = character.health / character.stats.maxHealth; // fraction of health remaining
	
	// colour based on size of each bar
	if (barValue === 1) {
		ctx.fillStyle = "#FF4D4D"; // light red
	}
	else if (barValue === 10) {
		ctx.fillStyle = "#FF0000"; // red
	}
	else if (barValue === 100) {
		ctx.fillStyle = "#CC0000"; // dark red
	}
	else if (barValue === 1000) {
		ctx.fillStyle = "#800000"; // maroon (very dark red)
	}
	else if (barValue === 10000) {
		ctx.fillStyle = "#DAA520"; // gold
	}
	else {
		// default
		ctx.fillStyle = "FFFF00";
		console.warn("No dedicated health bar colour for bar size " + barValue);
	}
	
	// health bar body
	ctx.fillRect(x, y, character.healthFraction * width, height);
	
	// health bar border
	ctx.strokeStyle = "black";
	ctx.strokeRect(x, y, width, height); // general border around the whole thing
	for (let i = 0; i < character.stats.maxHealth / barValue - 1; i++) {
		ctx.strokeRect(x + barValue / character.stats.maxHealth * width * i, y, barValue / character.stats.maxHealth * width, height);
	}
	// old code: ctx.strokeRect(x + barValue / character.stats.maxHealth * Math.round(character.stats.maxHealth / barValue), y, width, height);
	console.log(x + barValue / character.stats.maxHealth * width * 5);
	console.log(((character.stats.maxHealth - (character.stats.maxHealth / barValue - 1) * barValue)/barValue) * barValue / character.stats.maxHealth * width);
	console.log(character);
	ctx.strokeRect(x + barValue / character.stats.maxHealth * width * Math.round(character.stats.maxHealth / barValue - 1), y, ((character.stats.maxHealth - (character.stats.maxHealth / barValue - 1) * barValue)/barValue) * barValue / character.stats.maxHealth * width, height);
	
	// restore previous canvas formatting preferences
	ctx.globalAlpha = oldGlobalAlpha;
}

// draw images on canvas
Game.render = function () {
	// reset text formatting (currntly done in individual functions)
	//this.resetFormatting();
	
    // draw map background layer
    //if (this.hasScrolled) {
	this._drawLayer(0);
    //}
	
	// render npcs on renderList
	for (var i = 0; i < this.renderList.length; i++) { // iterate through everything to be rendered (in order)
		
		for (var x = 0; x < this[this.renderList[i]].length; x++) { // iterate through that array of things to be rendered
			
			// set character screen x and y
			this.updateScreenPosition(this[this.renderList[i]][x]);
			
			// draw image
			this.ctx.drawImage(
				this[this.renderList[i]][x].image,
				this[this.renderList[i]][x].screenX - this[this.renderList[i]][x].width / 2,
				this[this.renderList[i]][x].screenY - this[this.renderList[i]][x].height / 2
			);
			
			// render function (additional render to be carried out upon render of this entity)
			if (this[this.renderList[i]][x].renderFunction !== undefined) {
				this[this.renderList[i]][x].renderFunction();
			}
		}
		
	}

    // draw main character
	
	//check what direction they are facing, then render player
	if (this.hero.direction == 1) {
		this.ctx.drawImage(
			this.hero.image,
			0, this.hero.height,
			this.hero.width, this.hero.height,
			this.hero.screenX - this.hero.width / 2, this.hero.screenY - this.hero.height / 2,
			this.hero.width, this.hero.height,
		);
	} 
	
	else if (this.hero.direction == 2) {
		this.ctx.drawImage(
			this.hero.image,
			this.hero.width, this.hero.height,
			this.hero.width, this.hero.height,
			this.hero.screenX - this.hero.width / 2, this.hero.screenY - this.hero.height / 2,
			this.hero.width, this.hero.height,
		);
	} 
	
	else if (this.hero.direction == 3) {
		this.ctx.drawImage(
			this.hero.image,
			0, 0,
			this.hero.width, this.hero.height,
			this.hero.screenX - this.hero.width / 2, this.hero.screenY - this.hero.height / 2,
			this.hero.width, this.hero.height,
		);
	} 
	
	else if (this.hero.direction == 4) {
		this.ctx.drawImage(
			this.hero.image,
			this.hero.width, 0,
			this.hero.width, this.hero.height,
			this.hero.screenX - this.hero.width / 2, this.hero.screenY - this.hero.height / 2,
			this.hero.width, this.hero.height,
		);
	}
	
	// draw projectiles
    for(var i = 0; i < this.projectiles.length; i++) {
		// set screen x and y
		this.updateScreenPosition(this.projectiles[i]);
		
		this.drawImageRotated( // rotate projectile away from player
			this.projectiles[i].image,
			this.projectiles[i].screenX - this.projectiles[i].width / 2,
			this.projectiles[i].screenY - this.projectiles[i].height / 2,
			this.projectiles[i].width,
			this.projectiles[i].height,
			this.projectiles[i].rotate
		);
		
		// shows damage dealt by projectile
		for(var x = 0; x < this.projectiles[i].damageDealt.length; x++) {
			// formatting
			if (this.projectiles[i].damageDealt[x].critical) {
				this.ctx.fillStyle = "rgb(255, 0, 0)"; // maybe use rgba to make it fade away?
			}
			else {
				this.ctx.fillStyle = "rgb(0, 0, 0)"; // maybe use rgba to make it fade away?
			}
			this.ctx.textAlign = "left";
			this.ctx.font = "18px MedievalSharp";
			
			this.ctx.fillText(this.projectiles[i].damageDealt[x].damage, this.projectiles[i].screenX, this.projectiles[i].screenY);
		}
    }

    // draw map top layer
    //this._drawLayer(1);

    // draw map grid (debug)
    if(document.getElementById("gridOn").checked) {
		this._drawGrid();
    }
	
    // draw hitboxes (debug)
    if(document.getElementById("hitboxesOn").checked) {
		this.drawHitboxes();
    }
	
    // show player coords (debug)
    if(document.getElementById("coordsOn").checked) {
		this.coordinates(this.hero);
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
		this.ctx.fillText(this.displayAreaName.territory, 300, 180); // area territory (hostile, neutral, allied, etc.)
		
		this.displayAreaName.duration--;
	}
};

// render secondary canvas (contains anything that does not need to be continuously redrawn)
Game.secondary.render = function () {
	// clear secondary canvas
	this.ctx.clearRect(0, 0, 600, 600);
	
	// make canvas darker if it is night time
	if (Game.time === "night") {
		this.ctx.fillStyle = "black";
		this.ctx.globalAlpha = 0.35; // maybe change?
		this.ctx.fillRect(0, 0, 600, 600);
	}
	
	// set canvas formatting style defaults
	this.ctx.lineWidth = 1;
	this.ctx.globalAlpha = 0.6;
	
	// player health bar at top-left
	Game.drawHealthBar(this.ctx, Game.hero, 10, 10, 250, 25);
	
	// set xp variables
	totalWidth = 335; // total width of xp bar
	totalHeight = 8; // total height of xp bar
	totalLeft = 132; // total height of xp bar
	totalTop = 507; // total height of xp bar
	Player.xpFraction = Player.xp / LevelXP[Player.level]; // fraction of XP for current level
	
	// rainbow gradient
	var grd = this.ctx.createLinearGradient(totalLeft, 0, totalLeft+totalWidth-1, 0);
	grd.addColorStop(0, "red");
	grd.addColorStop("0.2", "yellow");
	grd.addColorStop("0.4", "green");
	grd.addColorStop("0.6", "blue");
	grd.addColorStop("0.8", "magenta");
	grd.addColorStop(1, "indigo");
	this.ctx.fillStyle = grd;	
	
	// xp bar body
	this.ctx.fillRect(totalLeft, totalTop, Player.xpFraction * totalWidth, totalHeight);

	// xp bar border
	this.ctx.strokeRect(totalLeft, totalTop, totalWidth-1, totalHeight);
	this.ctx.strokeRect(totalLeft, totalTop, totalWidth-1, totalHeight);
	
	// level
	this.ctx.font = "bold 30px MedievalSharp";
	this.ctx.fillStyle = "lightGrey";
	this.ctx.fillText(Player.level, 294, 519);	
	this.ctx.fillStyle = "white";
	this.ctx.fillText(Player.level, 292, 517);
	
	// status effects
	for(var i = 0; i < Game.hero.statusEffects.length; i++) {
		var iconNum = 0;
		if(Game.hero.statusEffects[i].title == "Stuck in the mud"){
			iconNum = 1;
		}
		else if(Game.hero.statusEffects[i].title == "Poison") {
			iconNum = 2;
		}
		else if(Game.hero.statusEffects[i].title == "Stun") {
			iconNum = 3;
		}
		else if(Game.hero.statusEffects[i].title == "Swimming") {
			iconNum = 4;
		}
		this.ctx.drawImage(Game.statusImage,0,27*iconNum,27,27,270 + i * 35, 10, 27, 27);
	}
}