

var cardDeck = [
{
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

var cards = cardDeck.sort(function(a,b){return 0.5 - Math.random()});

var cardsInPlay = [];

var resultsArray = [];

var score = 0;

console.log(score);

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You've found a match!");
	} else{
		alert("Sorry, try again.")
	}
	var resetPrompt = document.getElementsByClassName('resetPrompt')[0];
	resetPrompt.setAttribute('class', "resetPromptShow");
}

var flipCard = function(){
	var cardId = this.getAttribute('data-id')
console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
cardsInPlay.push(cards[cardId].rank);
this.setAttribute('src', cards[cardId].cardImage);
if(cardsInPlay.length === 2){
	checkForMatch();
	resultsArray.unshift("User flipped " + cardsInPlay[0] +" and " + cardsInPlay[1]);
}else if (cardsInPlay.length > 2) {
	resetBoard();
}
}

var createBoard = function(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

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
	



