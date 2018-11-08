

var cardDeck = [{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

// Provides some random sorting of original card deck.
var cards = cardDeck.sort(function(a,b){return 0.5 - Math.random()});

var cardsInPlay = [];
var resultsArray = [];
var score = 0;

// Checks to see if two selected cards match. Shows reset prompt once check has taken place.
var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		score +=1;
		console.log(score);
		var currentScore = document.getElementById('score');
		currentScore.innerHTML = score;
		alert("You've found a match!");
	} else{
		alert("Sorry, try again.")
	}
	var resetPrompt = document.getElementsByClassName('resetPrompt')[0];
	resetPrompt.setAttribute('class', "resetPromptShow");
}

// Flips cards on selection. calls checkForMatch() once two cards have been selected. resetBoard() called once third card selected.
var flipCard = function(){
	var cardId = this.getAttribute('data-id')
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if(cardsInPlay.length === 2){
		checkForMatch();
		rankesultsArray.unshift("User flipped " + cardsInPlay[0] +" and " + cardsInPlay[1]);
	}else if (cardsInPlay.length > 2) {
		resetBoard();
}
}

//Creates board for game.
var createBoard = function(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

// pushed results to results div. Latest result displayed at the top.
var recordResult = function(){
	console.log(resultsArray);
	var existingResults = document.getElementById("results");
	while (existingResults.firstChild) {
    	existingResults.removeChild(existingResults.firstChild);
	}
	for (var i = 0; i < resultsArray.length; i++){
		var newResult = document.createElement('p');
		var resultText = document.createTextNode(i+1 +". " + resultsArray[i]);
		newResult.appendChild(resultText);
		document.getElementById('results').appendChild(newResult);
		newResult.setAttribute('class', "resultItem");
	}
	var latestResult = document.getElementsByClassName('resultItem')[0];
	latestResult.setAttribute('class', "latestResult");
}

createBoard();

// Call recordResults() to capture results, resets board, showing back of cards and randomise cards array. 
var resetBoard = function(){
	recordResult();
	for (var i = 0; i < cards.length; i++){
		var cardReset = document.getElementsByTagName('img')[i];
		cardReset.setAttribute('src', "images/back.png");
	}
	cards = cardDeck.sort(function(a,b){return 0.5 - Math.random()});
	cardsInPlay = [];
	var resetPromptRemove = document.getElementsByClassName('resetPromptShow')[0];
	resetPromptRemove.setAttribute('class', "resetPrompt");
}
	



