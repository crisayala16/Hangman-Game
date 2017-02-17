
var win = 0;
var words = ["mario", "peach", "luigi", "kirby", "bowser", 
"yoshi", "wario", "pikachu", "charizard", "squirtle",
"lucas", "marth", "link", "ganondorf", "samus"];
var guessesRemain = 13;
var lettersGuessed = 0;

var currentWordOutput = document.getElementById("current-word");

// picks random character from word array
var currentWord = words[Math.floor(Math.random() * words.length)];

// currentWordOutput.innerHTML = currentWord;

var wordLength = currentWord.length;

var output = "";

for (var f = 0; f < currentWord.length; f++){
	output += "_";
}


// creates the dashed "hidden" word output
for (var i = 0; i < wordLength; i++) {
	currentWordOutput.innerHTML += "_";
}


console.log("here");

// console.log(currentWordOutput);

document.onkeyup = function(event){

	// if (guess === currentWord.) {}
	// document.getElementById("")
var guess = event.key;
var letersInsideWord = [];

// puts each letter in a seperate string inside of the array letersInsideWord
for (var x = 0; x < wordLength; x++){
	letersInsideWord.push(currentWord.charAt(x));
}

// for (var n = 0; n < letersInsideWord.length; n++){
// 	if (guess === letersInsideWord[n]){
// 		output[n] = letersInsideWord[n];
// 		currentWordOutput.innerHTML = output;
// 	}
	
// 	}


for (var n = 0; n < currentWord.length; n++){
	if (guess === currentWord.slice(n, n + 1)){
		
		output.charAt(n) = guess;
	}
	
	}
}
console.log("here");
