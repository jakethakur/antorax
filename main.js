// create game

var canvas = document.getElementById("game"); // maybe change to Game.canvas?

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

var Game = {questNPCs: [], merchants: [], areaTeleports: []};

//run game
Game.run = function (context) {
    this.ctx = context;
	
    this._previousElapsed = 0;

    this.loadArea("tutorial", undefined);
};

//calculate current tick length and update/render canvas accordingly
Game.tick = function (elapsed) {
    window.requestAnimationFrame(this.tick);

    // clear previous frame
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    //this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    //this.ctx.clearRect(0, 0, canvas.width, canvas.height);

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
	if(document.getElementById("fpsOn").checked){
		this.ctx.fillText("fps: " + Math.round(1 / delta), 10, 40);
	}
}.bind(Game);

//
// start up function
//

window.onload = function () {
    var context = canvas.getContext('2d');
    Game.run(context);
};

//
// map
//

var map = {
    /*cols: 30,
    rows: 10,
    tsize: 60,
	tilesPerRow: 8, //tiles per tilemap row
    layers: [[
        37, 26, 33, 22, 23, 24, 24, 22, 23, 24, 24, 24, 3, 4, 5, 24, 24, 24, 24, 24, 24, 2, 24, 24, 24, 24, 24, 24, 24, 24, 37, 29, 33, 24, 24, 24, 24, 22, 23, 24, 24, 24, 11, 12, 13, 24, 21, 24, 24, 24, 24, 24, 24, 2, 1, 24, 24, 24, 24, 24, 37, 28, 33, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 21, 1, 37, 26, 33, 22, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 3, 4, 5, 24, 24, 24, 37, 26, 33, 24, 22, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 18, 19, 20, 24, 2, 7, 8, 24, 11, 12, 13, 24, 24, 24, 37, 26, 9, 35, 34, 24, 24, 24, 24, 24, 21, 24, 24, 24, 24, 24, 24, 17, 24, 24, 24, 15, 16, 24, 24, 24, 24, 24, 24, 24, 10, 26, 26, 26, 9, 34, 24, 24, 24, 24, 24, 24, 24, 24, 3, 4, 5, 25, 21, 24, 24, 24, 24, 24, 24, 24, 7, 8, 1, 24, 27, 26, 26, 26, 26, 33, 24, 24, 24, 24, 24, 24, 24, 24, 11, 12, 13, 24, 24, 24, 24, 24, 24, 24, 24, 24, 15, 16, 2, 24, 26, 26, 29, 28, 26, 9, 35, 35, 35, 35, 34, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 2, 24, 24, 24, 24, 24, 24, 24, 29, 28, 26, 27, 26, 26, 29, 26, 28, 26, 9, 35, 35, 35, 35, 35, 34, 24, 24, 24, 24, 24, 24, 24, 24, 21, 24, 24, 24, 24,
         
    ],[]],*/
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
// global functions
//

// random number between upper and lower limit
function random(minimum, maximum) {
    return Math.floor((Math.random() * (maximum - minimum + 1)) + minimum);
}

// find bearing between two objects (with x and y)
// returns answer in radians
// from https://github.com/jakethakur22/AUV-Project/blob/master/gps/distance-and-bearing.js
function bearing(obj1, obj2) {
	var y = Math.sin(obj2.x - obj1.x) * Math.cos(obj2.y);
	var x = Math.cos(obj1.y) * Math.sin(obj2.y) -
			Math.sin(obj1.y) * Math.cos(obj2.y) * Math.cos(obj2.x - obj1.x);
  
	var bearing = Math.atan2(y, x);
	return bearing;
}

//
// classes
//

class Entity {
	constructor(properties) {
		this.map = properties.map;
		this.x = properties.x;
		this.y = properties.y;
		this.width = properties.width;
		this.height = properties.height;
	}
	
	isTouching(object) {
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
		this.baseSpeed = properties.baseSpeed;
		this.waterSpeed = properties.waterSpeed;
		this.speed = properties.baseSpeed;
		this.direction = properties.direction;
		
		this.channelTime = 0;
		this.channelling = false;
		
		this.statusEffects = [];
	}
	
	move(delta, dirx, diry) {
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
	
	_collide(dirx, diry, delta) {
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
		
		//test for water
		//make this controlled by a status effect instead maybe?
		if (this.map.isWaterAtXY(this.x, this.y + 50)) {
			if(this.speed === this.baseSpeed) {
				this.speed = this.waterSpeed;
			}
		}
		else if (this.speed  === this.waterSpeed) {
			this.speed = this.baseSpeed;
			this.statusEffects.push(new statusEffect("Swimming", "Reduced movement speed"));
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
		this.channelling = true;
		
		var projectileX, projectileY;
		
		projectileX = Game.camera.x + (e.clientX);
		projectileY = Game.camera.y + (e.clientY);

		Game.projectiles.push(new Projectile({
			map: map,
			x: projectileX,
			y: projectileY,
			width: 10,
			height: 40,
			adjust: {
				// manually adjust position - make this per class (per projectile image) in the future ( tbd )
				x: -13,
				y: 16,
			},
			image: "projectile",
		}));
	}
	
	// fire basic attack
	finishAttack(e) {
		this.channelTime = 0;
		this.channelling = false;
	}
}

class Projectile extends Character {
	constructor(properties) {
		super(properties);
		
		this.expand = 1;
		
		// adjust position to make it directed to mouse pointer
		this.adjust = {
			x: properties.adjust.x,
			y: properties.adjust.y,
		}
	}
}

//
// npcs
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

//
// constructors
//

function statusEffect(title, effect) {
	this.title = title;
	this.effect = effect;
}

//
// load game
//

// load images
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
			this.camera.maxX = map.cols * map.tsize - canvas.width;
			this.camera.maxY = map.rows * map.tsize - canvas.height;
		}
		
		// quest npcs
		this.questNPCs = [];
		for(var i = 0; i < areas[areaName].questNPCs.length; i++) {
			areas[areaName].questNPCs[i].map = map;
			this.questNPCs.push(new QuestNPC(areas[areaName].questNPCs[i]));
		}
		
		// merchants
		this.merchants = [];
		for(var i = 0; i < areas[areaName].merchants.length; i++) {
			areas[areaName].merchants[i].map = map;
			this.merchants.push(new Merchant(areas[areaName].merchants[i]));
		}
		
		// villagers
		this.villagers = [];
		for(var i = 0; i < areas[areaName].villagers.length; i++) {
			areas[areaName].villagers[i].map = map;
			this.villagers.push(new Villager(areas[areaName].villagers[i]));
		}
		
		this.projectiles = [];
		
		// area teleports
		this.areaTeleports = [];
		for(var i = 0; i < areas[areaName].areaTeleports.length; i++) {
			areas[areaName].areaTeleports[i].map = map;
			this.areaTeleports.push(new AreaTeleport(areas[areaName].areaTeleports[i]));
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

Game.init = function () {
	// welcome player
	// TBD: make it use player name, make it say welcome back if you've played before and it saved your progress, make it a different colour?
	Dom.chat.insert("Welcome to Antorax, Hero!", 0);

    Keyboard.listenForEvents(
        [Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN]);
	
	// music
	this.playingMusic = false;
	
	this.hero = new Hero({ // create the player at its start x and y positions
		map: map,
		x: areas[this.areaName].player.x,
		y: areas[this.areaName].player.y,
		direction: 3,
		width: 57,
		height: 120,
		image: "hero",
		baseSpeed: 180, // base pixels per second
		waterSpeed: 60, // speed when in water
	});
		
	// player attack on click
	canvas.addEventListener("mousedown", Game.hero.startAttack.bind(this.hero));
	canvas.addEventListener("mouseup", Game.hero.finishAttack.bind(this.hero));
	
	//this.camera = undefined;
	
	//this.loadArea("tutorial");
	
    this.camera = new Camera(map, canvas.width, canvas.height);
	
    this.camera.follow(this.hero);
	
	// begin game display
	window.requestAnimationFrame(this.tick);
};

// play music

Game.playMusic = function() {
	// check if music is already being played
	if (!this.playingMusic) {
		// check area
		if (true) {
			this.loadMusic('./assets/music/Pippin-the-Hunchback.mp3');
		}
	}
}

Game.loadMusic = function (song) {
	this.audio = new Audio(song);
	
	this.audio.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);
	
	this.audio.play();
	this.playingMusic = true;
}

Game.stopMusic = function () {
	this.audio.pause();
	this.playingMusic = false;
}

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
	
	// check collision with villagers
	for(var i = 0; i < this.villagers.length; i++) {
		this.villagers[i].update();
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
	//console.log(this.ctx.font);
}

// draw images on canvas
Game.render = function () {
	// reset text formatting (currntly done in individual functions)
	//this.resetFormatting();
	
    // draw map background layer
    //if (this.hasScrolled) {
	this._drawLayer(0);
    //}
	
    // draw quest start NPCs
    for(var i = 0; i < this.questNPCs.length; i++) {
		// set character screen x and y
		this.questNPCs[i].screenX = (this.questNPCs[i].x - this.questNPCs[i].width / 2) - this.camera.x;
		this.questNPCs[i].screenY = (this.questNPCs[i].y - this.questNPCs[i].height / 2) - this.camera.y;
		
		// draw image
        this.ctx.drawImage(
			this.questNPCs[i].image,
			this.questNPCs[i].screenX - this.questNPCs[i].width / 2,
			this.questNPCs[i].screenY - this.questNPCs[i].height / 2
        );
    }
	
    // draw merchants
    for(var i = 0; i < this.merchants.length; i++) {
		// set character screen x and y
		this.merchants[i].screenX = (this.merchants[i].x - this.merchants[i].width / 2) - this.camera.x;
		this.merchants[i].screenY = (this.merchants[i].y - this.merchants[i].height / 2) - this.camera.y;
		
		// draw image
        this.ctx.drawImage(
			this.merchants[i].image,
			this.merchants[i].screenX - this.merchants[i].width / 2,
			this.merchants[i].screenY - this.merchants[i].height / 2
        );
    }
	
	// draw villagers
    for(var i = 0; i < this.villagers.length; i++) {
		// set character screen x and y
		this.villagers[i].screenX = (this.villagers[i].x - this.villagers[i].width / 2) - this.camera.x;
		this.villagers[i].screenY = (this.villagers[i].y - this.villagers[i].height / 2) - this.camera.y;
		
		// draw image
        this.ctx.drawImage(
			this.villagers[i].image,
			this.villagers[i].screenX - this.villagers[i].width / 2,
			this.villagers[i].screenY - this.villagers[i].height / 2
        );
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
		this.projectiles[i].screenX = (this.projectiles[i].x - this.projectiles[i].width / 2) - this.camera.x + this.projectiles[i].adjust.x;
		this.projectiles[i].screenY = (this.projectiles[i].y - this.projectiles[i].height / 2) - this.camera.y + this.projectiles[i].adjust.y;
		// draw image
        this.ctx.drawImage(
			this.projectiles[i].image,
			this.projectiles[i].screenX - this.projectiles[i].width / 2,
			this.projectiles[i].screenY - this.projectiles[i].height / 2,
			//this.width * this.expand,
			//this.height * this.expand
			this.projectiles[i].width,
			this.projectiles[i].height
        );
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
	
	// DANGER POINT! the canvas text formatting changes below this line...
	
	// display area name (if the player has just gone to a new area)
	if (this.displayAreaName.duration > 0) {
		// formatting
		this.ctx.fillStyle = "rgba(0, 0, 0, " + this.displayAreaName.duration / 100 + ")";
		this.ctx.textAlign="center";
		this.ctx.font = "48px MedievalSharp";
		
		this.ctx.fillText(this.displayAreaName.name, 300, 100); // area name
		
		this.ctx.font = "28px MedievalSharp";
		this.ctx.fillText(this.displayAreaName.level, 300, 150); // area level
		this.ctx.fillText(this.displayAreaName.territory, 300, 180); // area territory (hostile, neutral, allied, etc.)
		
		this.displayAreaName.duration--;
	}
};
