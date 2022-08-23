FishingGame = {};
FishingGame.canvas = document.getElementById("minigame");
FishingGame.ctx = FishingGame.canvas.getContext('2d');

FishingGame.startClickerGame = function (difficulty)
{
	this.currentGame = "clicker";
}

// called every tick by main
FishingGame.update = function (delta)
{
	if (this.currentGame === "clicker")
	{

	}

	this.render();
}

// called by this.update every tick
FishingGame.render = function ()
{
	// clear previous frame
	this.ctx.clearRect(0, 0, 600, 600);

	// render new frame

}

// called by main whenever player clicks
FishingGame.clicked = function ()
{

}
