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

        // tiles x and y are solid -- the rest are walkable
        // loop through all layers and return TRUE if any tile is solid
        return this.layers.reduce(function (res, layer, index) {
            var tile = this.getTile(index, col, row);
			var isSolid = false;
			this.solidTiles.forEach( function(element) {
				if (tile === element) {
					isSolid = true;
				}
			} );
            //var isSolid = tile === 4 || tile === 5 || tile === 6 || tile === 25 || tile === 36 || tile === 34;
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
	isWaterAtXY: function (x, y) {
        var col = Math.floor(x / this.tsize);
        var row = Math.floor(y / this.tsize);

        // check first layer only and return TRUE if any tile is water
        var tile = this.getTile(0, col, row);
		var isWater = false;
		this.waterTiles.forEach( function(element) {
			if (tile === element) {
				isWater = true;
			}
		} );
        //var isWater = tile === 50 || tile === 51 || tile === 52;
		return isWater;
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
// Classes
//

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

class AreaTeleport extends Entity {
	constructor(properties) {
		super(properties);

		this.teleportTo = properties.teleportTo;
		this.destinationX = properties.destinationX;
		this.destinationY = properties.destinationY;
	}
}

class Character extends Entity {
	constructor(properties) {
		super(properties);

		this.image = Loader.getImage(properties.image);
	}
}

class Hero extends Character {
	constructor(properties) {
		super(properties);
		//this.baseSpeed = properties.baseSpeed;
		//this.waterSpeed = properties.waterSpeed;
		this.speed = Stats.Walk_Speed;
		this.direction = properties.direction;
		
		this.channelTime = 0;
		this.channelling = false;
		
		this.statusEffects = [];
		this.maxHealth = properties.health;
		this.health = properties.health;
	}
	
	move(delta, dirx, diry) {
		// update speed (maybe doesn't have to be done every move tick?)
		
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
	
	_collide(dirx, diry, delta) { // update move speed based on equipment and surroundings
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
		
		// test for water
		// make this controlled by a status effect instead maybe?
		if (this.map.isWaterAtXY(this.x, this.y + 50)) { // in water
			if(this.speed === Stats.Walk_Speed) {
				this.speed = Stats.Swim_Speed;
				if(!this.statusEffects.includes( {title: "Swimming", effect: "Reduced movement speed"} )) { // maybe just make a function to add a status effect? ( tbd )
					this.statusEffects.push(new statusEffect({title: "Swimming", effect: "Reduced movement speed",}));
				}
			}
		}
		else { // normal speed
			this.speed = Stats.Walk_Speed;
			// remove swimming status effect
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
	startAttack(e) {
		console.log("yes");
		if (Stats.Damage > 0) {
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
	finishAttack(e) {
		if (this.channelling) { // check that the player is channelling an attack (they might not have a weapon equipped so are not channelling, for example)
			this.channelTime = 0;
			this.channelling = false;
			
			// damage enemies that the projectile is touching
			Game.projectiles[Game.searchFor(this.channellingProjectileId, Game.projectiles)].dealDamage([Game.enemies, Game.dummies,]);
			
			// after a timeout (2s), remove the projectile that was just shot
			// this doesn't work if the user attacks too fast, though this shouldn't be a problem...
			let a = this.channellingProjectileId; // maintain a variable of the currently shot projectile
			setTimeout(function (a) {
				Game.projectiles.splice(Game.searchFor(a, Game.projectiles), 1); // find the id of the to-be-removed projectile and remove it
			}, 2000, a);
			
			this.channellingProjectileId = null;
		}
	}
}

class Projectile extends Character {
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
	// to = array of arrays to deal damage to
	// hence, if you want to damage a single target still put it in an array, e.g: dealDamage([[Game.hero]])
	dealDamage (to) {
		for (var i = 0; i < to.length; i++) {
			for (var x = 0; x < to[i].length; x++) {
				Game.updateScreenPosition(this);
				if (this.isTouching(to[i][x])) {
					// damage
					if (random(0, 100) < Stats.Critical_Chance) { // critical hit
						to[i][x].health -= Stats.Damage * 2;
						to[i][x].damageTaken += Stats.Damage * 2;
						this.damageDealt.push({enemy: to[i][x], damage: Stats.Damage * 2, critical: true});
					}
					else {
						to[i][x].health -= Stats.Damage;
						to[i][x].damageTaken += Stats.Damage * 2; // tbd give ALL characters a health and damage taken
						this.damageDealt.push({enemy: to[i][x], damage: Stats.Damage, critical: false});
					}
					
					// poison
					if (Stats.PoisonX > 0 && Stats.PoisonY > 0) { // check player weapon has poison
						// remember poison damage (so the player cannot change their weapon)
						to[i][x].statusEffects.push(new statusEffect({
							title: "Poisoned",
							effect: "Take " + Stats.PoisonX + " damage over " + Stats.PoisonY + " seconds.",
							info: {
								poisonDamage: Stats.PoisonX,
								poisonTime: Stats.PoisonY,
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
					}
					if(to[i][x] == Game.hero){
						Game.secondary.render();
					}
				}
			}
		}
	}
}

//
// NPC classes
//

class QuestNPC extends Character {
	constructor(properties) {
		super(properties);
		this.quests = properties.quests; // quest object address, to be read from questdata.js file
		this.name = properties.name;
		
		this.questProgressText = properties.questProgressText; // text when quest is in progress
		this.questCompleteText = properties.questCompleteText; // text when quest has been completed
	}
}

class Merchant extends Character {
	constructor(properties) {
		super(properties);
		this.name = properties.name;
		
		this.greetingText = properties.greetingText;
		this.buyText = properties.buyText; // tbd
		
		this.items = properties.items; // items sold
		
		//this.purchaseCurrencies = properties.purchaseCurrencies; // currencies that items are purchased with
	}
}

class Villager extends Character {
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
	update() {
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
				this.move(); // tbd : make move by delta value (make delta global/higher scope?)
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
	
	move() {
		this.bearing = bearing(this, {x: this.state.x, y: this.state.y}); // update bearing (maybe doesn't need to be done every tick?)
		// tbd : multiply by delta
		if (Math.round(this.x / 100) != Math.round(this.state.x / 100)) {
			this.x += Math.cos(this.bearing) * this.speed;
		}
		if (Math.round(this.y / 100) != Math.round(this.state.y / 100)) {
			this.y += Math.sin(this.bearing) * this.speed;
		}
	}
}

class Dummy extends Character { // e.g: target dummey
	constructor(properties) {
		super(properties);
		
		this.name = properties.name;
		
		this.damageTaken = 0; // dummies have damage taken instead of health
		
		this.statusEffects = [];
	}
	
	// function to be carried out during Game.render()
	renderFunction () {
		// show damage taken
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

class Enemy extends Character {
	constructor(properties) {
		super(properties);
		
		this.name = properties.name;
		
		// combat traits
		this.maxHealth = properties.health;
		this.health = properties.health;
		this.speed = properties.speed; // TBD - make enemy slower in water (give it separate walk speed and move speed)
		this.range = properties.range;
		this.reloadTime = properties.reloadTime; // time in ms to attack again
		
		this.leashRadius = properties.leashRadius; // how far away the player has to be for the enemy to ignore them
		
		// information about projectile
		this.projectile = properties.projectile; // should contain projectile width, height, adjust x and y, image
		
		// for code later on
		this.statusEffects = [];
		this.canAttack = true;
	}
	
	update() {
		// perhaps condense into hostile and passive ai functions (that also apply to things like villagers)?
		if (distance(this, Game.hero) < this.range) { // enemy should attack hero
			if (this.canAttack) { // projectile can be shot
				this.shoot(Game.hero);
			}
		}
		else if (distance(this, Game.hero) > this.leashRadius) { // enemy should move passively
			// passive movement within given (to be given...) boundaries...
		}
		else if (distance(this, Game.hero) < this.leashRadius && distance(this, Game.hero) > this.range) { // enemy should move towards hero
			this.move(Game.hero);
		}
		// add spell cast
	}
	
	// move towards entity (towards parameter)
	move (towards) {
		this.bearing = bearing(this, towards); // update bearing (maybe doesn't need to be done every tick?)
		// tbd : multiply by delta=
		this.x += Math.cos(this.bearing) * this.speed;
		this.y += Math.sin(this.bearing) * this.speed;
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
		Game.projectiles[Game.searchFor(this.channellingProjectileId, Game.projectiles)].dealDamage([[Game.hero],]);
		
		// wait to shoot next projectile
		setTimeout(function () {
			this.canAttack = true;
		}.bind(this), this.reloadTime);
		
		// after a timeout (2s), remove the projectile that was just shot
		// taken from Player
		let a = this.channellingProjectileId; // maintain a variable of the currently shot projectile
		setTimeout(function (a) {
			console.log(Game.projectiles[Game.searchFor(a, Game.projectiles)]);
			Game.projectiles.splice(Game.searchFor(a, Game.projectiles), 1); // find the id of the to-be-removed projectile and remove it
		}, 2000, a);
		
		this.channellingProjectileId = null;
	}
	
	// function to be carried out during Game.render()
	renderFunction () {
		// show health bar above head
		// tbd : make intermediate steps into constants as well
		
		const totalWidth = this.width; // total width of health bar
		const totalHeight = 15; // total height of health bar
		const barValue = Math.pow(10, (this.maxHealth.toString().length - 1)); // get width of each health bar (in health)
		
		// health bar body
		this.healthFraction = this.health / this.maxHealth; // fraction of health remaining
		Game.ctx.fillStyle = "rgb(255, 0, 0)";
		Game.ctx.fillRect(this.screenX - this.width / 2, this.screenY - this.height / 2 - totalHeight, this.healthFraction * totalWidth, totalHeight);
		
		// health bar border
		Game.ctx.strokeStyle = "rgb(0, 0, 0)";
		for (let i = 0; i < this.maxHealth / barValue - 1; i++) {
			Game.ctx.strokeRect(this.screenX - this.width / 2 + barValue / this.maxHealth * totalWidth * i, this.screenY - this.height / 2 - totalHeight, barValue / this.maxHealth * totalWidth, totalHeight);
		}
		Game.ctx.strokeRect(this.screenX - this.width / 2 + barValue / this.maxHealth * Math.round(this.maxHealth / barValue), this.screenY - this.height / 2 - totalHeight, totalWidth, totalHeight);
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
	
    return toLoad;
};

// pull data from areadata.js
Game.loadArea = function (areaName, destination) {
	
	// wipe previously loaded images
	Loader.wipeImages([
		// images not to be wiped
		"hero",
		"projectile",
	]);
	
	// load images
    var p = this.load(areas[areaName].images.names, areas[areaName].images.addresses);
	
	// wait until images have been loaded
    Promise.all(p).then(function (loaded) {
		
		this.areaName = areaName;
		
		// map
		Object.assign(map, areas[areaName].mapData);
		
		// set tileset
		this.tileAtlas = Loader.getImage('tiles');
		
		// recalibrate camera (for areas other than first area)
		if(this.camera != undefined) {
			this.camera.maxX = map.cols * map.tsize - this.canvas.width;
			this.camera.maxY = map.rows * map.tsize - this.canvas.height;
		}
		
		// villagers (currently broken)
		this.villagers = [];
		if(areas[areaName].villagers !== undefined) {
			for(var i = 0; i < areas[areaName].villagers.length; i++) {
				areas[areaName].villagers[i].map = map;
				this.villagers.push(new Villager(areas[areaName].villagers[i]));
			}
		}
		
		// quest npcs
		this.questNPCs = [];
		if(areas[areaName].questNPCs !== undefined) { // check they exist in areadata.js
			for(var i = 0; i < areas[areaName].questNPCs.length; i++) {
				areas[areaName].questNPCs[i].map = map;
				this.questNPCs.push(new QuestNPC(areas[areaName].questNPCs[i]));
			}
		}
		
		// merchants
		this.merchants = [];
		if(areas[areaName].merchants !== undefined) {
			for(var i = 0; i < areas[areaName].merchants.length; i++) {
				areas[areaName].merchants[i].map = map;
				this.merchants.push(new Merchant(areas[areaName].merchants[i]));
			}
		}
		
		// item identifiers
		this.identifiers = [];
		if(areas[areaName].identifiers !== undefined) {
			for(var i = 0; i < areas[areaName].identifiers.length; i++) {
				areas[areaName].identifiers[i].map = map;
				this.identifiers.push(new Character(areas[areaName].identifiers[i]));
			}
		}
		
		// dummies (enemies for training) - trivial (don't damage you)
		this.dummies = [];
		if(areas[areaName].dummies !== undefined) {
			for(var i = 0; i < areas[areaName].dummies.length; i++) {
				areas[areaName].dummies[i].map = map;
				this.dummies.push(new Dummy(areas[areaName].dummies[i]));
			}
		}
		
		// enemies
		this.enemies = [];
		if(areas[areaName].enemies !== undefined) {
			for(var i = 0; i < areas[areaName].enemies.length; i++) {
				areas[areaName].enemies[i].map = map;
				this.enemies.push(new Enemy(areas[areaName].enemies[i]));
			}
		}
		
		// projectiles
		this.projectiles = [];
		this.nextProjectileId = 0; // reset projectile id chain (because projectiles don't persist between areas)
		
		// area teleports
		this.areaTeleports = [];
		if(areas[areaName].areaTeleports !== undefined) {
			for(var i = 0; i < areas[areaName].areaTeleports.length; i++) {
				areas[areaName].areaTeleports[i].map = map;
				this.areaTeleports.push(new AreaTeleport(areas[areaName].areaTeleports[i]));
			}
		}
		else {
			console.warn("This area has no areaTeleports in areaData... Enjoy your new home!");
		}
		
		// music
		if(document.getElementById("musicOn").checked) {
			this.playMusic();
		}
		
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
		this.displayAreaName = areas[areaName].data;
		this.displayAreaName.duration = 200;
    }.bind(this));
	
}

// initialise game
Game.init = function () {
	// welcome player
	// TBD: make it use player name, make it say welcome back if you've played before and it saved your progress, make it a different colour?
	Dom.chat.insert("Welcome to Antorax, Hero!", 0);
	
	// music
	this.playingMusic = null;
	
	// list of basic (no extra operations to be done) things to be rendered (in order)
	this.renderList = ["villagers", "questNPCs", "merchants", "identifiers", "dummies", "enemies"];
	// then player, then projectiles (in order they were shot)
	
	// create the player at its start x and y positions
	this.hero = new Hero({
		map: map,
		x: areas[this.areaName].player.x,
		y: areas[this.areaName].player.y,
		direction: 3,
		width: 57,
		height: 120,
		image: "hero",
		health: 50,
	});
	
	Game.secondary.render();
	
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
	if (day == 21 && month == 6) {
		Player.inventory.boots.push(Items.boots[7]);
	}
}

//
// Music
//

Game.playMusic = function () {
	// check if the new area's music is already being played
	if (this.playingMusic !== areas[this.areaName].song) {
		this.loadMusic(areas[this.areaName].song);
	}
}

Game.loadMusic = function (song) {
	// stop previously playing song
	if (this.audio !== undefined) {
		this.stopMusic(); // possibly inefficient? might not unload old audio
	}
	
	this.audio = new Audio(song);
	
	this.audio.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);
	
	this.audio.play();
	this.playingMusic = song;
}

Game.stopMusic = function () {
	this.audio.pause();
	this.playingMusic = null;
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
					}else if(!this.hero.isTouching(this.questNPCs[i]) && document.getElementsByClassName("closeClass")[0].style.border == "5px solid red" && Dom.quests.override == true){
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
				// quest has been completed
				else if (this.hero.isTouching(this.questNPCs[i]) && Dom.quests.completedQuestArray.includes(this.questNPCs[i].quests[x].quest.quest) && !Dom.chat.contents.includes("<strong>" + this.questNPCs[i].name + ": " + "</strong>" + this.questNPCs[i].questCompleteText)) {
					Dom.chat.insert("<strong>" + this.questNPCs[i].name + ": " + "</strong>" + this.questNPCs[i].questCompleteText, 100);
				}
				if(Dom.currentlyDisplayed != this.questNPCs[i].quests[this.questNPCs[i].quests.length-1].quest && Dom.currentlyDisplayed != "" && !Dom.override) {
					if(this.hero.isTouching(this.questNPCs[i]) && document.getElementsByClassName("closeClass")[0].style.border != "5px solid red") {
						Dom.changeBook("questsPage",false,0);
						Dom.quest.override = true;
					}
					else if(!this.hero.isTouching(this.questNPCs[i]) && document.getElementsByClassName("closeClass")[0].style.border == "5px solid red" && Dom.quest.override == true) {
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
			else if (!this.hero.isTouching(this.merchants[i]) && document.getElementsByClassName("closeClass")[0].style.border == "5px solid red" && Dom.merchant.override == true) {
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
			else if (!this.hero.isTouching(this.identifiers[i]) && document.getElementsByClassName("closeClass")[0].style.border == "5px solid red" && Dom.identifier.override == true) {
				Dom.changeBook("identifierPage",false,1);
				Dom.identifier.override = false;
			}
		}
	}
	
	// update villagers
	for(var i = 0; i < this.villagers.length; i++) {
		this.villagers[i].update();
    }
	// update enemies
	for(var i = 0; i < this.enemies.length; i++) {
		this.enemies[i].update();
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

// update entity's screen position (called every time it is rendered)
Game.updateScreenPosition = function (entity) {
	entity.screenX = (entity.x) - this.camera.x;
	entity.screenY = (entity.y) - this.camera.y;
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
		this.projectiles[i].screenX += this.projectiles[i].adjust.x;
		this.projectiles[i].screenY += this.projectiles[i].adjust.y;
		
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

Game.secondary.render = function () {
	this.ctx.clearRect(0,0,600,600);

	this.ctx.lineWidth = 1;
	const totalWidth = 250; // total width of health bar
	const totalHeight = 25; // total height of health bar
	const barValue = Math.pow(10, (Game.hero.maxHealth.toString().length - 1)); // get width of each health bar (in health)
	
	// health bar body
	Game.hero.healthFraction = Game.hero.health / Game.hero.maxHealth; // fraction of health remaining
	this.ctx.fillStyle = "rgb(255, 0, 0)";
	this.ctx.fillRect(10, 10, Game.hero.healthFraction * totalWidth, totalHeight);
	
	// health bar border
	this.ctx.strokeStyle = "rgb(0, 0, 0)";
	for (let i = 0; i < Game.hero.maxHealth / barValue; i++) {
		this.ctx.strokeRect(10 + barValue / Game.hero.maxHealth * totalWidth * i, 10, barValue / Game.hero.maxHealth * totalWidth, totalHeight);
	}
	this.ctx.strokeRect(10 + barValue / Game.hero.maxHealth * Math.round(Game.hero.maxHealth / barValue), 10, totalWidth-1, totalHeight);
}