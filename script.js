$( document ).ready(function() {
console.log( "ready!" );
var guesses = 0;
var gamesWon = 0;
var gameCounter = 0;
var turn = 0;
var checkOne;
var checkTwo;
var images = {a:"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_HNCK3330.jpg",
b:"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_HNCK4124.jpg",
c:"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_HNCK4470.jpg",
d:"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_HNCK4477.jpg",
e:"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_HNCK4938.jpg",
f:"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_HNCK5532.jpg",
g:"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_HNCK5555.jpg",
h:"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_HNCK5566.jpg",
i:"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_HNCK5640.jpg",
j:"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_HNCK5703.jpg",
k:"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_HNCK5708.jpg",
l:"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_HNCK6001.jpg",
m:"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_IMG_3535.jpg",
n:"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_foodiesfeed.com_DSC_0001-9.jpg"};

var mirrorImages = [images.a, images.a, images.b, images.b, images.c, images.c, images.d, images.d, images.e, images.e,
  images.f, images.f, images.g, images.g, images.h, images.h, images.i, images.i,
  images.j, images.j, images.k, images.k, images.l, images.l];

reset();

// Start new game by clicking button
$("#new_game").on("click", newGame);
//reset button shows all cards
$("#reset_button").on("click", reset);
// Click on card to reveal
$(".card").on("click", function(){
  if (turn === 0){
    $('img', this).show();
    checkOne = $("img", this).attr("src");
    turn = 1;
    firstGuessImage = $('img', this);}
  else if (turn === 1){
    $('img', this).show();
    checkTwo = $("img", this).attr("src");
    secondGuessImage = $('img', this);
    turn = 0;
    guesses = guesses + 1;
    $("#guessCount").text(guesses);
  if (checkOne === checkTwo){
    gameCounter = gameCounter + 1;
    if (gameCounter === 12){
      alert("You win! Click reset to 'reset' the board and 'Start Game' to play");
      gamesWon = gamesWon + 1;
      $("#wonCount").text(gamesWon);
    }
  }
  else hideInterval();
}

});
function hideInterval (){setTimeout(hideImages, 2000);}
function hideImages(){secondGuessImage.hide();
firstGuessImage.hide();}

// Click on second card to reveal

// Shuffle fuction taken from the internet.
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function reset(){
  shuffle(mirrorImages);
  //assign images to gameboard
  for (var i = 0; i < mirrorImages.length; i++){
    // assigns image for every div
  $(".card").eq(i).children("img").attr("src", mirrorImages[i]);}
  // shows the image so user can see
  $('img').show();
  // sets height of image
  $(".card").css("height", "6em");
  // resets counters
  guesses = 0;
  gameCounter = 0;
  turn = 0;
  $("#guessCount").text(guesses);
}
function newGame(){
// Hides all cards, assigns value
  $("img").hide();
  $(".card").css("width", "236.969");
  $(".card").css("length", "157.984");
}




});
