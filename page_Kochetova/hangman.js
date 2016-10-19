var words = [
["p","s","y","c","h","o","l","o","g","y"],
["o","f","f","e","n","s","i","v","e"],
["r","e","c","o","v","e","r","y"],
["c","o","n","n","e","c","t","i","o","n"],
["a","n","a","l","y","s","i","s"],
["r","e","l","i","n","q","u","i","s","h"],
["f","e","d","e","r","a","t","i","o","n"],
["r","e","c","e","s","s","i","o","n"],
["d","e","t","e","c","t","o","r"],
["g","o","v","e","r","n","o","r"],
["d","e","d","i","c","a","t","e"],
["h","y","p","n","o","t","i","s","e"],
["c","o","n","c","l","u","s","i","o","n"],
["c","o","m","p","u","t","e","r"],
["m","a","r","a","t","h","o","n"],
["c","o","m","p","l","i","c","a","t","i","o","n"],
["a","m","b","i","g","u","o","u","s"],
["f","o","r","m","u","l","a","t","e"],
["c","o","v","e","r","a","g","e"],
["r","e","a","s","o","n","a","b","l","e"],
["c","o","u","r","t","e","s","y"],
["c","r","a","f","t","s","m","a","n"],
["d","r","e","s","s","i","n","g"],
["a","p","p","a","r","a","t","u","s"],
["p","r","a","c","t","i","c","e"],
["m","e","c","h","a","n","i","s","m"],
["d","i","s","c","o","u","n","t"],
["s","e","p","a","r","a","t","e"],
["e","x","p","e","r","i","m","e","n","t"]
]
var random = Math.floor((Math.random()*(words.length))); 

var oneword = words[random];
var word = new Array(oneword.length);
var err = 0;

for (var i = 0; i < word.length; i++){
	word[i] = "_ ";
}

function printword(){
	for (var i = 0; i < word.length; i++){
	var field = document.getElementById("field");
	var letter = document.createTextNode(word[i]);
	field.appendChild(letter);
	}
}

var checkletter = function(){
	var f = document.letterform; 
	var b = f.elements["userletter"]; 
	var userletter = b.value;
	userletter = userletter.toLowerCase();
	for (var i = 0; i < oneword.length; i++){
		if(oneword[i] === userletter){
			word[i] = userletter + " ";
			var guessed = true;
		}
	b.value = "";
	}
	
	var field = document.getElementById("field");
	field.innerHTML=""; 
	printword();
	
	if(!guessed){
		err++;
		var hangman = document.getElementById("hangman");
    hangman.src = "hangman" + err + ".png";
	}
	
	var done = true;
	for (var i = 0; i < word.length; i++){
		if(word[i] === "_ "){
			done = false;
		}
	}
	if(done){
		alert("You win! :)");
	}
	
	if(err === 6){
		alert("Sorry, you lost :( Try again?");
	}
}

function init(){
	printword();
}

window.onload = init;