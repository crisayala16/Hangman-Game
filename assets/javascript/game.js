
var win = 0;
var words = ["mario", "peach", "luigi", "kirby", "bowser", 
"yoshi", "wario", "pikachu", "charizard", "squirtle",
"lucas", "marth", "link", "ganondorf", "samus", "wolf", 
"snake", "sonic", "zelda", "metaknight", "rosalina"];

var guessesRemain = 13;
var lettersGuessed = 0;
var currentWordOutput = document.getElementById("current-word");
var winsOutput = document.getElementById("win-output");
var guessRemOutput = document.getElementById("guess-rem-output");
var lettGuessOutput = document.getElementById("lett-guess-output");
// picks random character from word array
var currentWord = words[Math.floor(Math.random() * words.length)];
var wordLength = currentWord.length;
var output = [];
var lettersInside = [];
function hiddenWord(){
	for(var f = 0; f < wordLength; f++){
	wordLength = currentWord.length;
	lettersInside.push(currentWord.charAt(f));
	output.push("_");
	currentWordOutput.innerHTML += "_";
}
};
hiddenWord();



document.onkeyup = function(event){

var guess = event.key;
guessesRemain--;
guessRemOutput.innerHTML = guessesRemain;

if(guessesRemain === 0){
	document.write("Game Over...");
	guessRemOutput.innerHTML = 13;
	guessesRemain = 13;
}
else if(output.join("") === lettersInside.join("")) {
	win++;
	winsOutput.innerHTML = win;
	alert("You Won!");
	currentWord = words[Math.floor(Math.random() * words.length)];
	guessRemOutput.innerHTML = 13;
	guessesRemain = 13;
	lettersInside = [];
	console.log(lettersInside);
	output = [];
	console.log(output);
	currentWordOutput.innerHTML = "";
	hiddenWord();

}


for(var b = 0; b < wordLength; b++){

if (guess === lettersInside[b]){
output[b] = lettersInside[b];
currentWordOutput.innerHTML = output.join("");
}

};

}
console.log(currentWord);
console.log("here");
