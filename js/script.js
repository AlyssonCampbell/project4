// referenced https://www.sanwebe.com/2011/12/jquery-move-div-leftrightupdown for code
// https://api.jquery.com/keypress/
// https://stackoverflow.com/questions/1402698/binding-arrow-keys-in-js-jquery
// https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
// https://www.quora.com/How-do-you-make-one-div-layer-show-over-another-in-HTML-CSS
// https://www.w3schools.com/graphics/game_obstacles.asp

$(".target").on("click", evt => {
  evt.preventDefault();
  console.log("clicked!");
  // $("#gamePiece").animate({
  //   "marginTop": "+=30px"
  // });
  $("div").remove();
});