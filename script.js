// $( document ).ready(function() {
    // console.log( "ready!" );
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
// Start new game by clicking button
$("#new_game").on("click",function(){
// Hides all cards, assigns value
  $("img").hide();
  $(".card").css("width", "236.969");
  $(".card").css("length", "157.984");
  console.log("new game button working?");
});
//reset button shows all cards
$("#reset_button").on("click", function(){
  shuffle(mirrorImages);
  for (var i = 0; i < mirrorImages.length; i++){
  $(".card").eq(i).children("img").attr("src", mirrorImages[i]);
  $('img').show();
  $(".card").css("height", "6em");}

  console.log("working?");
  console.log(mirrorImages);
});

// Click on card to reveal
$(".card").on("click", function(){
  $('img', this).show();
  console.log("working?");
});

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
// Click on second card to reveal
// If match keep cards facing up
// If not match keep cards down
// Continue until are cards are facing up

//});


// test code
