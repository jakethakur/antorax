// arrays containing all mail (as objects) that the player may be sent
// divided into onInit and onProgress depending on how often the game should check if the player has mail
// the game checks through Dom.mail.check
const Mail = {
	onInit: [ // these mail are only ever given on Game init, i.e. event mail
		{
			title: "Welcome to Antorax!",
			sender: "The Tinkering Guild",
			image: "dolph",
			chat: [{
				text: `Hello ${Player.name},`,
			},{
				text: `It's great to have new people joining us in Antorax. We look forward to meeting you very soon in a secret, undisclosed location.`,
			},{
				text: `Perhaps you would like to try out one of our newest inventions - the ScreenGrabber 3000! It's free of charge. Pop us a letter if it explodes, otherwise see you soon!`,
			},{
				text: `Love from,<br>The Tinkering Guild`,
			}],
			giveOnChatFinish: [{item: Items.item[14]}], // tbd doesn't work yet! should show nicely visually
			noRepeat: true, // means it can only be given once
			condition: function () {
				return true;
			},
		}
	],
	onLevelUp: [ // these are checked on player level up, i.e. quest start mail

	],
	onProgress: [ // these are all checked whenever Dom.checkProgress is called

	]
}

// add this to the above object after there is a way to make NPC chat banners display what the player is given
function toBeFinished () {
	let date = GetFullDate();
	Player.days.push(date);


			// christmas daily rewards
			if (Event.event === "Christmas") {
				let randomNPC = "";
				// keep finding a new npc the player has met until we find one that has information in Offsets
				while (typeof Offsets[ToCamelCase(randomNPC)] === "undefined") {
					randomNPC = Player.metNPCs[Random(0, Player.metNPCs.length-1)]; // NPC that sent message (one the player's met before!)
				}
				if (Event.christmasDay) { // christmas day
					/*
					// 2018 message
					Dom.mail.give(
						"Merry Christmas!",
						"Father Christmas",
						"fatherChristmas",
						"text.page",
						["Merry Christmas!",
						"Have a great Christmas! Please enjoy the 2018 Christmas gift.", true, [], [],
						[{item: Items.item[17],},{item: Items.currency[5], quantity: 5,}]],
						[{item: Items.item[17],},{item: Items.currency[5], quantity: 5,}],
					);
					*/
					// 2022 message
					Dom.mail.give(
						"Merry Christmas!",
						"Father Christmas",
						"fatherChristmas",
						"text.page",
						["Merry Christmas!",
						"Have a great Christmas! Please enjoy the 2022 Christmas gift.", true, [], [],
						[{item: Items.item[17],},{item: Items.currency[5], quantity: 5,}]],
						[{item: Items.item[17],},{item: Items.currency[5], quantity: 5,}],
					);
				}
				else if (date.substring(6) < "25") { // before christmas
					Dom.mail.give(
						25 - parseInt(date.substring(6)) + " Day"+(parseInt(date.substring(6)) !== 24 ? "s" : "")+" To Go!",
						randomNPC,
						ToCamelCase(randomNPC),
						"text.page",
						["Merry Christmas!",
						"This is your free daily chistmas token. Spend it wisely!", true, [], [],
						[{item: Items.currency[5]}]], [{item: Items.currency[5]}],
					);
				}
			}


			// Antorax Day mail
			if (Event.event === "Antorax") {
				/*
				// 2019 message
				Dom.mail.give(
					"Antorax is " + Event.antoraxAge + " today!",
					"The King of Eaglecrest",
					"eaglecrestKing",
					"text.page",
					["Antorax is " + Event.antoraxAge + " today!",
					`<p>${Event.antoraxAge} years ago today, the realms of Antorax settled on an agreement to cooperate in the archaeology and exploration of these beautiful lands. Although there have been conflicts since then, there have been countless discoveries made by the Antorax alliance, and we endevour to continue.</p>
					<p>This year, there have been countless advancements in the fields of Archaeology, with huge discoveries of mythic items. There have also been developments to the Eaglecrest Logging Camp, and improvements to the accessibility of Antorax for its citizens.</p>
					<p>We hope you enjoy this special day, and that we will celebrate the many more Antorax Days to come together.</p>`, true, [], [],
					[{item: Items.helm[10]}]], [{item: Items.helm[10]}],
				);*/

				// 2022 message
				Dom.mail.give(
					"Antorax is " + Event.antoraxAge + " today!",
					"The King of Eaglecrest",
					"eaglecrestKing",
					"text.page",
					["Antorax is " + Event.antoraxAge + " today!",
					`<p>${Event.antoraxAge} years ago today, the realms of Antorax settled on an agreement to cooperate in the archaeology and exploration of these beautiful lands. Although there have been conflicts since then, there have been countless discoveries made by the Antorax alliance, and we endevour to continue.</p>
					<p>This year, there have been countless advancements in the fields of Archaeology - mythic items have been unearthed from past and faraway lands, many within the realm of Eaglecrest's local plains. There have additionally been huge developments in the teaching of magic, which will be further consolidated in the coming years. Morever, we cannot go without mentioning the countless new citizens of Eaglecrest, to whom I hope you have given a warm welcome!</p>
					<p>Antorax has not been without its challenges this year, facing a colder winter than ever, and a serpentine assault of Eaglecrest City. However these complications have been endured and resolved thanks to all of you adventurers, archaeologists, and even fishers.</p>
					<p>We hope you enjoy this special day, and that we will celebrate the many more Antorax Days to come together.</p>`, true, [], [],
					[{item: Items.helm[28]}]], [{item: Items.helm[28]}],
				);

				if (!Player.quests.completedQuestArray.includes("The Legend of the Tattered Knight")) {
					Dom.mail.give(
						"The Legend of the Tattered Knight",
						"unknown sender",
						"./assets/items/item/16",
						"quest.start",
						["eaglecrestLoggingCamp", 22],
					);
				}
			}

			// Fish mail
			else if (Event.event === "Fish") {
				Dom.mail.give(
					"A Soggy Surprise...",
					"unknown sender",
					"./assets/items/sword/10",
					"text.page",
					["A Soggy Surprise...",
					`A fish fell in your mailbox!`, true, [], [],
					[{item: Items.sword[10]}]], [{item: Items.sword[10]}],
				);
			}

			// Heroes of Antorax mail
			else if (Event.event === "Heroes") {
				Dom.mail.give(
					"A Gift for the Worthy",
					"The Lord of Thunder",
					"lordOfThunder",
					"text.page",
					["A Gift for the Worthy",
					`<p>Six fragments of incredibly rare gemstones - objects with the power to wipe out entire civilizations – have been found in Antorax. The stones are useful in the right hands, but I fear the forces of evil may get to them first. Only the strongest of beings can safely use the stones, which is why I have entrusted you with this <strong>Eternity Glove</strong>, a container for that power.<p>
					<p>It is your duty to locate all six stones and add them to the Glove, so they are safe from any villains who would use them for ill.</p>
					<p>Good luck, adventurer… and send a raven if you have any questions.</p>`, true, [], [],
					[{item: Items.sword[11]}]], [{item: Items.sword[11]}], true // noRepeat
				);
			}

			// James Day mail
			else if (Event.event === "James") {
				Dom.mail.give(
					"Happy James Day!",
					"Marshall Teper",
					"marshallTeper",
					"text.page",
					["Happy James Day!",
					"For some reason they asked <em>me</em> to send some mail out to everyone today. There might be an event on, but that doesn't mean you can stop working. We need more workers in the Logging Camp.<br><br>Marshall Teper", true, [], [],
					[{item: Items.boots[7]}]], [{item: Items.boots[7]}],
				);
			}

			// Samhain mail
			else if (Event.event === "Samhain") {
				Dom.mail.give(
					"Bumper Samhain Harvest!",
					"Farmer Lennie",
					"./assets/items/helm/23",
					"text.page",
					["Bumper Samhain Harvest!",
					`It's the season of Samhain once again! What's a pumpkin doing in your mailbox? Well, out at the Eaglecrest Ranch we've had a bumper harvest of pumpkins, only makes sense to share them with everyone. Oh - and don't forget to try some of the pumpkin treats in a tavern. They're made entirely with Eaglecrest produce!<br><br>From Farmer Lennie`, true, [], [],
					[{item: Items.helm[23]}]], [{item: Items.helm[23]}], true // noRepeat
				);

				if (!Player.quests.completedQuestArray.includes("The Slithering Truth") && !Player.quests.activeQuestArray.includes("The Slithering Truth") && Player.quests.prog.eaglecrest[1].timesCompleted >= 0) {
					// they haven't completed the quest this mail starts before, and they have completed "snakes and the city" at least once
					Dom.mail.give(
						"The Slithering Truth",
						"unknown sender",
						"./assets/items/item/36",
						"quest.start",
						["eaglecrest", 3], true // noRepeat
					);
				}

				else if (Player.quests.completedQuestArray.includes("The Slithering Truth") && !Player.quests.questProgress.hasSkeletonKey) { // aaaaaaaaaaaaaaaaaaaaaa tbd don't use questProgress
					let name = "???";
					if (Player.quests.completedQuestArray.includes("Snaking Bad")) {
						name = "The Soothsssayer";
					}
					Player.quests.questProgress.hasSkeletonKey = true; // aaaaaaaaaaaaaaaaaaaaaa tbd don't use questProgress
					Dom.mail.give(
						"Sssssurprise Return",
						name,
						"./assets/items/item/36",
						"text.page",
						["BOO!",
						`I'm back.<br><br>How about you sssslither back to my lair?<br><br>Ssssee you ssssoon.<br>xx`, true, [], [],
						[{item: Items.item[36]}]], [{item: Items.item[36]}],
					);
				}
			}

			// Valentine's mail
			else if (Event.event === "Valentine") {
				Dom.mail.give(
					"Love Is in the Air!",
					"Mysterious Lover",
					"shadow",
					"text.page",
					["Love Is in the Air!",
					`<p>${Player.name},</p>
					<p>You may not know me, but I have been watching your deeds and have been very impressed. It may seem like your doings are unrewarded, but know that there are always those who appreciate your every move.</p>
					<p>On this day of giving and feasting, please celebrate with a token of my undying appreciation.</p>`, true, [], [],
					[{item: Items.boots[12]}]], [{item: Items.boots[12]}],
				);
			}

			// Samme Day mail
			else if (Event.event === "Samme") {
				Dom.mail.give(
					"Happy Samme Day!",
					"Fish Tank",
					"fishTank",
					"text.page",
					["Happy Samme Day!",
					"Happy Samme Day!", true, [], [],
					[{item: Items.chest[21]}]], [{item: Items.chest[21]}],
				);
			}

			

			// seven days in a row
			if (Player.consecutiveDays === 7) {
				Dom.mail.give(
					"We've Seen a Lot of You",
					"The King of Eaglecrest",
					"eaglecrestKing",
					"text.page",
					["We've Seen a Lot of You",
					`<p>${Player.name}, I hope this letter finds you well and safe.</p>
					<p>Your dedication to Eaglecrest's, and Antorax's, cause is truly remarkable. The Kingdom would like to personally thank you for your contributions with this <b style="color:orange;">Antorak</b>. We hope it will prove useful on your further adventures.</p>`, true, [], [],
					[{item: Items.chest[11]}]], [{item: Items.chest[11]}],
				);
			}

			

		// Archaeology mail
		let done = true;
		for (let i = 0; i < 7; i++) {
			for (let x = 0; x < Items[Object.keys(Items)[i]].length; x++) {
				if (!Items[Object.keys(Items)[i]][x].uncollectable && !User.archaeology.includes(Items[Object.keys(Items)[i]][x].name) && Items[Object.keys(Items)[i]][x].name !== "Master Archaeologist's Hat") {
					done = false;
				}
			}
		}
		if (done) {
			Dom.mail.give(
				"Master Archaeologist",
				"Alys Loreworth",
				"alysLoreworth",
				"text.page",
				["Master Archaeologist",
				`<p>Dear ${playerName},</p>
				<p>I am Alys Loreworth, the lead archaeologist of Antorax. I have noticed your incredible contributions to Antorax's archaeology effort, and would like to congratulate and thank you for them. Without you, we would not have uncovered many of the rare and significant items that are currently residing in the Great Museum, Wizard Island. I trust that we will continue to receive contributions from you in the years to come - there is still lots that has not been discovered.</p>
				<p>I have attached a <strong>Master Archaeologist's Hat</strong>, which I hope you will find of use when uncovering items in the future. A hat like this is incredibly rare and remarkably powerful, only owned by the most accomplished of archaeologists. Many who have worn it say they find themselves to be much luckier with their archaeological finds...</p>
				<p>Good luck on your continued travels,
				<br>Alys Loreworth, Lead Archaeologist</p>`, true, [], [],
				[{item: Items.helm[9]}]], [{item: Items.helm[9]}], true // noRepeat
			);
		}
}
