
var win = 0;
var words = ["mario", "peach", "luigi", "kirby", "bowser", 
"yoshi", "wario", "pikachu", "charizard", "squirtle",
"lucas", "marth", "link", "ganondorf", "samus"];
var guessesRemain = 13;
var lettersGuessed = 0;

var currentWordOutput = document.getElementById("current-word");

// picks random character from word array
var currentWord = words[Math.floor(Math.random() * words.length)];

var wordLength = currentWord.length;

for(var a = 0; a < wordLength + 1; a++){
	var newSpan = document.createElement('span');	
	newSpan.id = a;
	// newSpan = "_";
	currentWordOutput.innerHTML += newSpan;
}


console.log("here");

// console.log(currentWordOutput);

document.onkeyup = function(event){

var guess = event.key;

for(var b = 0; b < wordLength; b++){
	var spanId = document.getElementById(b.toString());

if (guess === currentWord.charAt(b)) {
	spanId.innerHTML = currentWord.charAt(b);


}

}

}
console.log("here");
