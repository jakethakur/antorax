FishingGame = {};
FishingGame.canvas = document.getElementById("minigame");
FishingGame.ctx = FishingGame.canvas.getContext('2d');
FishingGame.ctx.globalAlpha = 0.8;
FishingGame.status = 0;

FishingGame.startClickerGame = function (time, clicks)
{
	this.currentGame = "clicker";
	this.timesClicked = 0;
	this.status = 1; // game active
	// setting amount of clicks
	this.clicksRequired = clicks;
	this.totalTimeLeft = time/1000;
	this.timeLeft = time/1000;
}

FishingGame.startTimingGame = function(difficulty)
{
	this.x = [];
	this.currentGame = "timing";
	this.hasClicked = false;
	this.status = 1; // game active
	this.currentBar = 1;
	// set time for arrow to reach the end,, + the size of green zone
	if(difficulty === "tutorial")
	{
		this.totalTimeToReachEnd = 8;
		this.zoneSize = 40;
		this.bars = 1; // sets amount of bars that show
	}
	else if(difficulty === "junk")
	{
		this.totalTimeToReachEnd = 2.5;
		this.zoneSize = 22;
		this.bars = 1; // sets amount of bars that show
	}
	else if(difficulty === "common")
	{
		this.totalTimeToReachEnd = 1.5;
		this.zoneSize = 30;
		this.bars = 1;
	}
	else if(difficulty === "unique")
	{
		this.totalTimeToReachEnd = 1.5;
		this.zoneSize = 26;
		this.bars = 2;
	}
	else if(difficulty === "mythic")
	{
		this.totalTimeToReachEnd = 1.5;
		this.zoneSize = 23;
		this.bars = 3;
	}
	else if(difficulty === "lakeLurker")
	{
		this.totalTimeToReachEnd = 10;
		this.zoneSize = 300;
		this.bars = 1;
	}
	else if(difficulty === "kingOfHerrings")
	{
		this.totalTimeToReachEnd = 1.5;
		this.zoneSize = 25;
		this.bars = 5;
	}
	else if(difficulty === "lakeLurkerTail")
	{
		this.totalTimeToReachEnd = 1.5;
		this.zoneSize = 25;
		this.bars = 3;
	}
	else if(difficulty === "lakeLurkerArch")
	{
		this.totalTimeToReachEnd = 1.5;
		this.zoneSize = 23;
		this.bars = 4;
	}
	this.timeToReachEnd = this.totalTimeToReachEnd;

	// set zone x
	for(let i = 0; i < this.bars; i++)
	{
		if(difficulty === "lakeLurker")
		{
			this.x[i] = 150;
		}
		// highest value of random + the added number should equal 400, larger added means it appears later on
		else if(i === 0)
		{
			this.x[i] = Random(0, 150) + 250 + (50 - this.zoneSize); // +250 adds 250 to the x of the random number
		}
		else
		{
			this.x[i] = Random(0, 250) + 150;
		}
	}
}

// called every tick by main
FishingGame.update = function (delta)
{
	if (this.currentGame === "clicker")
	{
		this.render();
		this.timeLeft -= delta;
		// status being 2 means game was sucessful and 3 means that it failed
		// showing time left
		this.strokeStyle = "#2A2E2B";
		this.ctx.strokeRect(150, 450, 300, 50);
		this.ctx.fillStyle = "#8a1111";
		this.ctx.fillRect(150, 450, this.timeLeft * (300 / this.totalTimeLeft), 50);

		if(this.timeLeft <= 0)
		{
			return true;
		}
	}
	else if(this.currentGame === "timing")
	{
		this.render();
		// drawing green size
		this.ctx.fillStyle = "#000000";
		this.ctx.fillRect(150, 200, 300, 50);
		this.ctx.fillStyle = "#3dfc03";
		this.ctx.fillRect(this.x[0], 200, this.zoneSize, 50);
		// draw multiple bars for higher rarities
		if(this.bars > 1)
		{
			this.ctx.fillStyle = "#000000";
			this.ctx.fillRect(150, 300, 300, 50);
			this.ctx.fillStyle = "#3dfc03";
			this.ctx.fillRect(this.x[1], 300, this.zoneSize, 50);
			if(this.bars > 2)
			{
				this.ctx.fillStyle = "#000000";
				this.ctx.fillRect(150, 400, 300, 50);
				this.ctx.fillStyle = "#3dfc03";
				this.ctx.fillRect(this.x[2], 400, this.zoneSize, 50);
				if(this.bars > 3)
				{
					this.ctx.fillStyle = "#000000";
					this.ctx.fillRect(150, 500, 300, 50);
					this.ctx.fillStyle = "#3dfc03";
					this.ctx.fillRect(this.x[3], 500, this.zoneSize, 50);
					if(this.bars > 4)
					{
						this.ctx.fillStyle = "#000000";
						this.ctx.fillRect(150, 600, 300, 50);
						this.ctx.fillStyle = "#3dfc03";
						this.ctx.fillRect(this.x[4], 600, this.zoneSize, 50);
					}
				}
			}
		}
		// change time to reach end
		this.timeToReachEnd -= delta;
		// draw arrow on correct bar

		if(this.currentBar === 1)
		{
			this.ctx.fillStyle = "#FFFFFF";
			this.ctx.fillRect((this.totalTimeToReachEnd - this.timeToReachEnd) * (300 / this.totalTimeToReachEnd) + 150, 200, 5, 50);
		}
		else if(this.currentBar === 2)
		{
			this.ctx.fillStyle = "#FFFFFF";
			this.ctx.fillRect((this.totalTimeToReachEnd - this.timeToReachEnd) * (300 / this.totalTimeToReachEnd) + 150, 300, 5, 50);
		}
		else if(this.currentBar === 3)
		{
			this.ctx.fillStyle = "#FFFFFF";
			this.ctx.fillRect((this.totalTimeToReachEnd - this.timeToReachEnd) * (300 / this.totalTimeToReachEnd) + 150, 400, 5, 50);
		}
		else if(this.currentBar === 4)
		{
			this.ctx.fillStyle = "#FFFFFF";
			this.ctx.fillRect((this.totalTimeToReachEnd - this.timeToReachEnd) * (300 / this.totalTimeToReachEnd) + 150, 500, 5, 50);
		}
		else if(this.currentBar === 5)
		{
			this.ctx.fillStyle = "#FFFFFF";
			this.ctx.fillRect((this.totalTimeToReachEnd - this.timeToReachEnd) * (300 / this.totalTimeToReachEnd) + 150, 600, 5, 50);
		}
		if(this.timeToReachEnd < 0)
		{
			this.status = 3;
			return true;
		}
		//console.log(this.status);
	}
}

// called by this.update every tick
FishingGame.render = function ()
{
	// clear previous frame
	this.ctx.clearRect(0, 0, 1000, 1000);
	// render new frame
}

// called by main whenever player clicks
FishingGame.clicked = function ()
{
	if(this.currentGame === "clicker")
	{
		// increases clicks
		this.timesClicked ++;
		if(this.timesClicked >= this.clicksRequired)
		{
			this.status = 2;
		}
		else if(this.timeLeft <= 0)
		{
			this.status = 3;
		}
	}
	else if(this.currentGame === "timing")
	{
		// tells the game that the player has clicked
		// status being 2 means game was sucessful and 3 means that it failed
		if((this.totalTimeToReachEnd - this.timeToReachEnd) * (300 / this.totalTimeToReachEnd) + 150 > this.x[this.currentBar - 1] && (this.totalTimeToReachEnd - this.timeToReachEnd) * (300 / this.totalTimeToReachEnd) + 150 < this.x[this.currentBar - 1] + this.zoneSize)
		{
			if(this.bars > this.currentBar)
			{
				this.currentBar++;
				this.timeToReachEnd = this.totalTimeToReachEnd;
			}
			else
			{
				this.status = 2;
			}
		}
		else
		{
			this.status = 3;
		}
	}
}

// called whenever a game has ended AND there are no more games to be played
FishingGame.gameEnd = function ()
{
	this.currentGame = "";
	this.status = 0;
	this.render();
}
