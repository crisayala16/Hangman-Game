
var words = ["mario", "peach", "luigi", "kirby", "bowser", 
"yoshi", "wario", "pikachu", "charizard", "squirtle",
"lucas", "marth", "link", "ganondorf", "samus", "wolf", 
"snake", "sonic", "zelda", "metaknight", "rosalina"];
var win = 0;
var guessesRemain = 13;
var lettersGuessed = [];
var currentWordOutput = document.getElementById("current-word");
var winsOutput = document.getElementById("win-output");
var guessRemOutput = document.getElementById("guess-rem-output");
var lettGuessOutput = document.getElementById("lett-guess-output");
var answerImg = document.getElementById("answer-img");
var answerText = document.getElementById("answer-text");
// picks random character from words array
var currentWord = words[Math.floor(Math.random() * words.length)];
var wordLength = currentWord.length;
var output = [];
var lettersInside = [];
var truOrFls = [];
//this function stores the currentWord letters inside an array.
//as well as stores placeholders for the output array.
function hiddenWord(){
	for(var f = 0; f < wordLength; f++){
		wordLength = currentWord.length;
		lettersInside.push(currentWord.charAt(f));
		output.push("_");
		currentWordOutput.innerHTML += "_";
	}
}
//displays the image corresponding to the answer
function displayImg(image){
	answerImg.src ="assets/images/"+ image + ".jpg";
}
//displays the answer once the user wins
function displayText(text){
	answerText.innerHTML = text.toUpperCase();
}
function displayGuessRemain(){
	guessRemOutput.innerHTML = guessesRemain;
}
function displaylettersGuessed(){
	lettGuessOutput.innerHTML = lettersGuessed;
}
hiddenWord();

//Everything inside this fuction is invoked when a key is pressed
document.onkeyup = function(event){

var guess = event.key;
//this function restarts the game
function restart(){
	if (guess === "Enter"){
		currentWord = words[Math.floor(Math.random() * words.length)];
		guessesRemain = 13;
		guessRemOutput.innerHTML = guessesRemain;
		lettersInside = [];
		output = [];
		currentWordOutput.innerHTML = "";
		hiddenWord();
		lettersGuessed = [];
		displaylettersGuessed();
	}
}

//checks if guess equals any of the letters in lettersInside array
for(var b = 0; b < wordLength; b++){
	if (guess === lettersInside[b]){
		output[b] = lettersInside[b];
		currentWordOutput.innerHTML = output.join("");
	}
};
restart();

//results for when the user loses
if(guessesRemain === 0){
	alert("Game Over")
	guessRemOutput.innerHTML = 13;
	guessesRemain = 13;
	location.reload();
}

//results for when the user wins
if(output.join("") === currentWord) {
	win++;
	winsOutput.innerHTML = win;
	displayImg(currentWord);
	displayText(currentWord);
	output = [];
	guessesRemain = 13;
	displayGuessRemain();
}

if(lettersInside.indexOf(guess) === -1 && lettersGuessed.indexOf(guess) === -1){
	guessesRemain--;
}

if (lettersGuessed.indexOf(guess) === 0) {
	lettersGuessed = lettersGuessed;
}
else if(lettersGuessed.indexOf(guess) === -1){
	lettersGuessed.push(guess);
}

if (lettersGuessed.indexOf("Enter") === 0) {
	lettersGuessed.splice(0, 1);
	guessesRemain++;
}
displayGuessRemain();
displaylettersGuessed();
}
