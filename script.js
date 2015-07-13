
$( document ).ready(function() {
    console.log( "ready!" );

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
  $("img").show();
  $(".card").css("height", "6em");
  $(".card").css("length", "0");
  console.log("working?");
});

// Click on card to reveal
$(".card").on("click", function(){
  console.log("working?");
});
// Click on second card to reveal
// If match keep cards facing up
// If not match keep cards down
// Continue until are cards are facing up

});
