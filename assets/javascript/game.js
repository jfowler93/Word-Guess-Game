var wins = 0;
var losses = 0;

var maxWrong = 11;

var guessDisplayLetters = document.getElementById("guess-display-letters");
var guessedLetters = document.getElementById("guessed-letters");
var wrongCount = document.getElementById("wrongCount");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");

var validLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function keanuFilms() {
    this.filmList = ["Bill and Ted", "Point Break", "Speed", "The Matrix", "John Wick"]

    this.film = this.filmList[math.floor(math.random() * this.wordlist.length)];
    this.guessedLetters = [];
    this.wrongLetters = 0;
    this.lettersGuessed = [];
    this.gameOver = false;
    this.alert = emptyAlert;
    for (var i = 0; i < this.word.length; i++) {
        this.visibleLetters[i] = (false);
    }
}