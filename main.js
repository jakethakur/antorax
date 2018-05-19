//create game

var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

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

var Game = {};

//run game
Game.run = function (context) {
    this.ctx = context;
    this._previousElapsed = 0;

    var p = this.load();
    Promise.all(p).then(function (loaded) {
        this.init();
        window.requestAnimationFrame(this.tick);
    }.bind(this));
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
    var context = document.getElementById('game').getContext('2d');
    Game.run(context);
};

//
// map
//

var map = {
    cols: 30,
    rows: 10,
    tsize: 60,
	tilesPerRow: 8, //tiles per tilemap row
    layers: [[
        37, 26, 33, 22, 23, 24, 24, 22, 23, 24, 24, 24, 3, 4, 5, 24, 24, 24, 24, 24, 24, 2, 24, 24, 24, 24, 24, 24, 24, 24, 37, 29, 33, 24, 24, 24, 24, 22, 23, 24, 24, 24, 11, 12, 13, 24, 21, 24, 24, 24, 24, 24, 24, 2, 1, 24, 24, 24, 24, 24, 37, 28, 33, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 21, 1, 37, 26, 33, 22, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 3, 4, 5, 24, 24, 24, 37, 26, 33, 24, 22, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 18, 19, 20, 24, 2, 7, 8, 24, 11, 12, 13, 24, 24, 24, 37, 26, 9, 35, 34, 24, 24, 24, 24, 24, 21, 24, 24, 24, 24, 24, 24, 17, 24, 24, 24, 15, 16, 24, 24, 24, 24, 24, 24, 24, 10, 26, 26, 26, 9, 34, 24, 24, 24, 24, 24, 24, 24, 24, 3, 4, 5, 25, 21, 24, 24, 24, 24, 24, 24, 24, 7, 8, 1, 24, 27, 26, 26, 26, 26, 33, 24, 24, 24, 24, 24, 24, 24, 24, 11, 12, 13, 24, 24, 24, 24, 24, 24, 24, 24, 24, 15, 16, 2, 24, 26, 26, 29, 28, 26, 9, 35, 35, 35, 35, 34, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 2, 24, 24, 24, 24, 24, 24, 24, 29, 28, 26, 27, 26, 26, 29, 26, 28, 26, 9, 35, 35, 35, 35, 35, 34, 24, 24, 24, 24, 24, 24, 24, 24, 21, 24, 24, 24, 24,
         
    ],[]],
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
    }
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

function Hero(map, x, y) {
    this.map = map;
    this.x = x;
    this.y = y;
    this.width = map.tsize;
    this.height = map.tsize;

    this.image = Loader.getImage('hero');
}

Hero.speed = 256; // pixels per second

Hero.prototype.move = function (delta, dirx, diry) {
    // move hero
    this.x += dirx * Hero.speed * delta;
    this.y += diry * Hero.speed * delta;

    // check if we walked into a non-walkable tile
    this._collide(dirx, diry);

    // clamp values
    var maxX = this.map.cols * this.map.tsize;
    var maxY = this.map.rows * this.map.tsize;
    this.x = Math.max(0, Math.min(this.x, maxX));
    this.y = Math.max(0, Math.min(this.y, maxY));
};

Hero.prototype._collide = function (dirx, diry) {
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
};

Game.load = function () {
    return [
        Loader.loadImage('tiles', './assets/tilemap/tilemap.png'),
        Loader.loadImage('hero', './assets/character.png')
    ];
};

Game.init = function () {
    Keyboard.listenForEvents(
        [Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN]);
    this.tileAtlas = Loader.getImage('tiles');

    this.hero = new Hero(map, 160, 160);
    this.camera = new Camera(map, canvas.width, canvas.height);
    this.camera = new Camera(map, canvas.width, canvas.height);
    this.camera.follow(this.hero);
};

Game.update = function (delta) {
    // handle hero movement with arrow keys
    var dirx = 0;
    var diry = 0;
    if (Keyboard.isDown(Keyboard.LEFT)) { dirx = -1; }
    else if (Keyboard.isDown(Keyboard.RIGHT)) { dirx = 1; }
    else if (Keyboard.isDown(Keyboard.UP)) { diry = -1; }
    else if (Keyboard.isDown(Keyboard.DOWN)) { diry = 1; }

	if (dirx !== 0 || diry !== 0) {
        this.hero.move(delta, dirx, diry);
        this.hasScrolled = true;
    }
	else {
        this.hasScrolled = false;
	}
    //this.hero.move(delta, dirx, diry);
    this.camera.update();
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

//draw images on canvas
Game.render = function () {
    // draw map background layer
    //if (this.hasScrolled) {
		this._drawLayer(0);
	//}

    // draw main character
    this.ctx.drawImage(
        this.hero.image,
        this.hero.screenX - this.hero.width / 2,
        this.hero.screenY - this.hero.height / 2);

    // draw map top layer
    //this._drawLayer(1);

	//draw map grid (debug)
    //this._drawGrid();
};