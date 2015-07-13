// $( document ).ready(function() {
    // console.log( "ready!" );
var images = ["/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_HNCK3330.jpg",
"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_HNCK4124.jpg",
"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_HNCK4470.jpg",
"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_HNCK4477.jpg",
"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_HNCK4938.jpg",
"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_HNCK5532.jpg",
"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_HNCK5555.jpg",
"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_HNCK5566.jpg",
"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_HNCK5640.jpg",
"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_HNCK5703.jpg",
"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_HNCK5708.jpg",
"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_HNCK6001.jpg",
"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_IMG_3535.jpg",
"/Users/curtismn87/WDI/projects/Concentration-Project-1-/images/picjumbo.com_foodiesfeed.com_DSC_0001-9.jpg",];
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
  for (var i = 0; i < images.length; i++){
  $(".card").eq(i).children("img").attr("src", images[i]);
  $(".card").css("height", "6em");}
  console.log("working?");
});

// Click on card to reveal
$(".card").on("click", function(){
  $('img', this).show();
  $('img', this).attr("src", images[0]);
  console.log("working?");
});
// Click on second card to reveal
// If match keep cards facing up
// If not match keep cards down
// Continue until are cards are facing up

//});


// test code
