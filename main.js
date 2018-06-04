//create game

var canvas = document.getElementById("game");

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
    return (key in this.images) ? this.images[key] : null;
};

Loader.wipeImages = function() {
	this.images = {};
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

var Game = {questStartNPCs: [], merchants: [], areaTeleports: []};

//run game
Game.run = function (context) {
    this.ctx = context;
    this._previousElapsed = 0;

    this.loadArea("tutorial");
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

        // tiles 99 and 98 are solid -- the rest are walkable
        // loop through all layers and return TRUE if any tile is solid
        return this.layers.reduce(function (res, layer, index) {
            var tile = this.getTile(index, col, row);
            var isSolid = tile === 99 || tile === 98;
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
		// TBD : move this to areadata.js at some point pls
        var tile = this.getTile(0, col, row);
        var isWater = tile === 50 || tile === 51 || tile === 52 ||tile === 59 || tile === 63 || tile === 67;
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

    // in map corners, the sprite cannot be placed in the center of the screen
    // and we have to change its screen coordinates

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
	}
	
	move(delta, dirx, diry) {
		// move hero
		this.x += dirx * this.speed * delta;
		this.y += diry * this.speed * delta;

		// check if we walked into a non-walkable tile
		this._collide(dirx, diry);

		// clamp values
		var maxX = this.map.cols * this.map.tsize;
		var maxY = this.map.rows * this.map.tsize;
		this.x = Math.max(0, Math.min(this.x, maxX));
		this.y = Math.max(0, Math.min(this.y, maxY));
	}
	
	_collide(dirx, diry) {
		var row, col;
		// -1 in right and bottom is because image ranges from 0..63
		// and not up to 64
		var left = this.x - this.width / 2;
		var right = this.x + this.width / 2 - 1;
		var top = this.y - this.height / 2;
		var bottom = this.y + this.height / 2 - 1;

		// check for collisions on sprite sides
		var collision =
			this.map.isSolidTileAtXY(left, top) ||
			this.map.isSolidTileAtXY(right, top) ||
			this.map.isSolidTileAtXY(right, bottom) ||
			this.map.isSolidTileAtXY(left, bottom);
		
		//test for water
		//make this controlled by a status effect instead maybe?
		if (this.map.isWaterAtXY(this.x, this.y)) {
			if(this.speed === this.baseSpeed) {
				this.speed = this.waterSpeed;
			}
		}
		else if (this.speed  === this.waterSpeed) {
			this.speed = this.baseSpeed;
		}
		
		if (!collision) { return; }

		if (diry > 0) {
			row = this.map.getRow(bottom);
			this.y = -this.height / 2 + this.map.getY(row);
		}
		else if (diry < 0) {
			row = this.map.getRow(top);
			this.y = this.height / 2 + this.map.getY(row + 1);
		}
		else if (dirx > 0) {
			col = this.map.getCol(right);
			this.x = -this.width / 2 + this.map.getX(col);
		}
		else if (dirx < 0) {
			col = this.map.getCol(left);
			this.x = this.width / 2 + this.map.getX(col + 1);
		}
	}
}

//
// npcs
//

//var Game.questStartNPCs = {};

class QuestNPC extends Character {
	constructor(properties) {
		super(properties);
		this.quest = properties.quest; // quest object address, to be read from questdata.js file
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

//
// load game
//

// load images
Game.load = function () {
	// wipe previously loaded images
	Loader.wipeImages();
	
	this.ctx.imageSmoothingEnabled = false;
	
    return [
        Loader.loadImage('tiles', './assets/tilemap/tilemap.png'),
        Loader.loadImage('hero', './assets/player/archer.png'),
        Loader.loadImage('driver', './assets/driver.png'),
        Loader.loadImage('weaponsmith', './assets/weaponsmith.png'),
    ];
};

// pull data from areadata.js
Game.loadArea = function (areaName) {
	// load images
    var p = this.load();
    Promise.all(p).then(function (loaded) {
		// map
		Object.assign(map, areas[areaName].mapData);
		
		// recalibrate camera (for areas other than first area)
		if(this.camera != undefined) {
			this.camera.maxX = map.cols * map.tsize - canvas.width;
			this.camera.maxY = map.rows * map.tsize - canvas.height;
		}
		
		// quest start npcs
		this.questStartNPCs = [];
		for(var i = 0; i < areas[areaName].questStartNPCs.length; i++) {
			areas[areaName].questStartNPCs[i].map = map;
			this.questStartNPCs.push(new QuestNPC(areas[areaName].questStartNPCs[i]));
		}
		
		// quest finish npcs
		this.questFinishNPCs = [];
		for(var i = 0; i < areas[areaName].questFinishNPCs.length; i++) {
			areas[areaName].questFinishNPCs[i].map = map;
			this.questFinishNPCs.push(new QuestNPC(areas[areaName].questFinishNPCs[i]));
		}
		
		// merchants
		this.merchants = [];
		for(var i = 0; i < areas[areaName].merchants.length; i++) {
			areas[areaName].merchants[i].map = map;
			this.merchants.push(new Merchant(areas[areaName].merchants[i]));
		}
		
		// area teleports
		this.areaTeleports = [];
		for(var i = 0; i < areas[areaName].areaTeleports.length; i++) {
			areas[areaName].areaTeleports[i].map = map;
			this.areaTeleports.push(new AreaTeleport(areas[areaName].areaTeleports[i]));
		}
		
		
        this.init();
		
		// player x and y
		this.hero.x = areas[areaName].player.x;
		this.hero.y = areas[areaName].player.y;
		
		
        window.requestAnimationFrame(this.tick);
		
    }.bind(this));
	
}

Game.init = function () {
	// welcome player
	// TBD: make it use player name, make it say welcome back if you've played before and it saved your progress, make it a different colour?
	Dom.chat.insert("Welcome to Antorax, Hero!", 0);

    Keyboard.listenForEvents(
        [Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN]);
    this.tileAtlas = Loader.getImage('tiles');
	
	// music
	this.playingMusic = false;
	
	this.hero = new Hero({ // create the player at its start x and y positions
		map: map,
		x: 0,
		y: 0,
		direction: 3,
		width: 57,
		height: 120,
		image: "hero",
		baseSpeed: 172, // base pixels per second
		waterSpeed: 64, // speed when in water
	});
	
	this.camera = undefined;
	
	//this.loadArea("tutorial");
	
    this.camera = new Camera(map, canvas.width, canvas.height);
	
    this.camera.follow(this.hero);
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
	
	// check collision with quest start npcs
	// tbd: make own function, and move to be called by hero.move (inefficient rn)
	for(var i = 0; i < this.questStartNPCs.length; i++) {
		// doesn't currently check if the player's level is too low to accept the quest
		
		// quest is ready to be accepted
        if (this.hero.isTouching(this.questStartNPCs[i]) && Dom.currentlyDisplayed === "" && !Dom.quests.activeQuestArray.includes(this.questStartNPCs[i].quest.quest) && !Dom.quests.completedQuestArray.includes(this.questStartNPCs[i].quest.quest)) {
			Dom.quest.start(this.questStartNPCs[i].quest);
		}
		// quest is currently active
		else if (this.hero.isTouching(this.questStartNPCs[i]) && Dom.quests.activeQuestArray.includes(this.questStartNPCs[i].quest.quest) && !Dom.chat.contents.includes("<strong>" + this.questStartNPCs[i].name + ": " + "</strong>" + this.questStartNPCs[i].questProgressText)) {
			Dom.chat.insert("<strong>" + this.questStartNPCs[i].name + ": " + "</strong>" + this.questStartNPCs[i].questProgressText, 100);
		}
		// quest has been completed
		else if (this.hero.isTouching(this.questStartNPCs[i]) && Dom.quests.completedQuestArray.includes(this.questStartNPCs[i].quest.quest) && !Dom.chat.contents.includes("<strong>" + this.questStartNPCs[i].name + ": " + "</strong>" + this.questStartNPCs[i].questCompleteText)) {
			Dom.chat.insert("<strong>" + this.questStartNPCs[i].name + ": " + "</strong>" + this.questStartNPCs[i].questCompleteText, 100);
		}
    }
	
	// check collision with quest finish npcs
	for(var i = 0; i < this.questFinishNPCs.length; i++) {
		// doesn't currently check if the player's level is too low to accept the quest
		
		// quest is ready to be accepted
        if (this.hero.isTouching(this.questFinishNPCs[i]) && Dom.currentlyDisplayed === "" && Dom.quests.activeQuestArray.includes(this.questFinishNPCs[i].quest.quest) && !Dom.quests.completedQuestArray.includes(this.questFinishNPCs[i].quest.quest)) {
			//check if quest conditions have been fulfilled
			if(this.questFinishNPCs[i].quest.isCompleted()[this.questFinishNPCs[i].quest.objectives.length - 1]) {
				Dom.quest.finish(this.questFinishNPCs[i].quest);
			}
			// quest conditions have not been fulfilled
			else if (!Dom.chat.contents.includes("<strong>" + this.questFinishNPCs[i].name + ": " + "</strong>" + this.questFinishNPCs[i].questProgressText)) {
				Dom.chat.insert("<strong>" + this.questFinishNPCs[i].name + ": " + "</strong>" + this.questFinishNPCs[i].questProgressText, 100);
			}
		}
		// quest has been completed
		else if (this.hero.isTouching(this.questFinishNPCs[i]) && Dom.quests.completedQuestArray.includes(this.questFinishNPCs[i].quest.quest) && !Dom.chat.contents.includes("<strong>" + this.questFinishNPCs[i].name + ": " + "</strong>" + this.questFinishNPCs[i].questCompleteText)) {
			Dom.chat.insert("<strong>" + this.questFinishNPCs[i].name + ": " + "</strong>" + this.questFinishNPCs[i].questCompleteText, 100);
		}
    }
	
	// check collision with merchants
	for(var i = 0; i < this.merchants.length; i++) {
        if (this.hero.isTouching(this.merchants[i]) && Dom.currentlyDisplayed === "") {
			Dom.merchant.page(this.merchants[i].name, this.merchants[i].greetingText, this.merchants[i].items);
			//Dom.chat.insert("<strong>" + this.merchants[i].name + ": " + "</strong>" + this.merchants[i].greetingText, 100); (done in dom)
		}
    }
	
	// check collision with area teleports
	for(var i = 0; i < this.areaTeleports.length; i++) {
		// give area teleports a screenX and Y (should be turned into own function)
		this.areaTeleports[i].screenX = (this.areaTeleports[i].x - this.areaTeleports[i].width / 2) - this.camera.x;
		this.areaTeleports[i].screenY = (this.areaTeleports[i].y - this.areaTeleports[i].height / 2) - this.camera.y;
		
        if (this.hero.isTouching(this.areaTeleports[i])) {
			// teleport to new area
			this.loadArea("eaglecrestLoggingCamp");
			
			//console.log("oui");
		}
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
	
	// player hitboxes
	this.ctx.strokeRect(this.hero.screenX - this.hero.width / 2, this.hero.screenY - this.hero.height / 2, this.hero.width, this.hero.height);
	
	// NPC hitboxes
	for(var i = 0; i < this.questStartNPCs.length; i++) {
		this.ctx.strokeRect(this.questStartNPCs[i].screenX - this.questStartNPCs[i].width / 2, this.questStartNPCs[i].screenY - this.questStartNPCs[i].height / 2, this.questStartNPCs[i].width, this.questStartNPCs[i].height);
	}
	
	// merchant hitboxes
	for(var i = 0; i < this.merchants.length; i++) {
		this.ctx.strokeRect(this.merchants[i].screenX - this.merchants[i].width / 2, this.merchants[i].screenY - this.merchants[i].height / 2, this.merchants[i].width, this.merchants[i].height);
	}
	
	// area teleport hitboxes
	for(var i = 0; i < this.areaTeleports.length; i++) {
		this.ctx.strokeRect(this.areaTeleports[i].screenX - this.areaTeleports[i].width / 2, this.areaTeleports[i].screenY - this.areaTeleports[i].height / 2, this.areaTeleports[i].width, this.areaTeleports[i].height);
	}
}

Game.coordinates = function (character) {
	this.ctx.fillText("x: " + Math.round(character.x), 10, 10);
	this.ctx.fillText("y: " + Math.round(character.y), 10, 20);
}

// draw images on canvas
Game.render = function () {
    // draw map background layer
    //if (this.hasScrolled) {
	this._drawLayer(0);
    //}
	
    // draw quest start NPCs
    for(var i = 0; i < this.questStartNPCs.length; i++) {
		// set character screen x and y
		this.questStartNPCs[i].screenX = (this.questStartNPCs[i].x - this.questStartNPCs[i].width / 2) - this.camera.x;
		this.questStartNPCs[i].screenY = (this.questStartNPCs[i].y - this.questStartNPCs[i].height / 2) - this.camera.y;
		
		// draw image
        this.ctx.drawImage(
			this.questStartNPCs[i].image,
			this.questStartNPCs[i].screenX - this.questStartNPCs[i].width / 2,
			this.questStartNPCs[i].screenY - this.questStartNPCs[i].height / 2
        );
    }
	
    // draw quest finish NPCs
    for(var i = 0; i < this.questFinishNPCs.length; i++) {
		// set character screen x and y
		this.questFinishNPCs[i].screenX = (this.questFinishNPCs[i].x - this.questFinishNPCs[i].width / 2) - this.camera.x;
		this.questFinishNPCs[i].screenY = (this.questFinishNPCs[i].y - this.questFinishNPCs[i].height / 2) - this.camera.y;
		
		// draw image
        this.ctx.drawImage(
			this.questFinishNPCs[i].image,
			this.questFinishNPCs[i].screenX - this.questFinishNPCs[i].width / 2,
			this.questFinishNPCs[i].screenY - this.questFinishNPCs[i].height / 2
        );
    }
	
    // draw merchants
    for(var i = 0; i < this.questStartNPCs.length; i++) {
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
	
	/*
    this.ctx.drawImage(
        this.hero.image,
        this.hero.screenX - this.hero.width / 2,
        this.hero.screenY - this.hero.height / 2
    );*/

    // draw map top layer
    //this._drawLayer(1);

    // draw map grid (debug)
    if(document.getElementById("gridOn").checked){
		this._drawGrid();
    }
	
    // draw hitboxes (debug)
    if(document.getElementById("hitboxesOn").checked){
		this.drawHitboxes();
    }
	
    // show player coords (debug)
    if(document.getElementById("coordsOn").checked){
		this.coordinates(this.hero);
    }
	
    //this.haha(); // test
};
