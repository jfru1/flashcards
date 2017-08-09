var inquirer = require("inquirer");
var clozeCard = require('./clozeCard.js');
var basicCard = require('./regularcard.js');

//this file is the main handler for the program. it pulls in user input
//and defines the cards. 

//prompt user to select a mode using arrow keys
inquirer.prompt([
{
	type: "list",
	name: "path",
	message: "For learning mode type 'Basic', for test mode type 'Cloze'",
	choices: ["Basic", "Cloze"]
}
]).then(function(mode){
	console.log(mode.path);
	//if basic card, enters the information for front and back
		if (mode.path === "Basic"){
			inquirer.prompt([
			{
				type: "input",
				name: "front",
				message: "Enter the text to be on the card's front"
			},
			{
				type: "input",
				name: "back",
				message: "Enter the text to be on the card's back"
			},
				//then builds input into a card, logs it out to user
				]).then(function(input){
					console.log(input);
						var card = new regularCard(input.front, input.back);
						console.log(card.front);
						console.log(card.back);
				})
			}else if (mode.path === "Cloze"){
				//if selection is cloze, drop to here
				inquirer.prompt([
					{
						type: "input",
						name: "text",
						message: "What is the fact part?"
					},
					{
						type: "input",
						name: "cloze",
						message: "What should be clozed?"
					}
					]).then(function(input){
						//builds the cloze card an outputs all three parts
						//close, partial, and combined to user
						console.log(input);
						var card = new clozeCard(input.text, input.cloze);
						console.log(card.cloze);
						console.log(card.partial);
						console.log(card.full);
					});
					} else {
						//catchall error handler, if somehow something goes 
						//wrong, it'll end itself.
						console.log("Error, something went wrong. Exiting.");
						end();
					}
});