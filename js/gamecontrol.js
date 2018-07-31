//http://api.jquery.com/append/
//https://www.kirupa.com/html5/handling_events_for_many_elements.htm
//https://stackoverflow.com/questions/41420075/jquery-move-div-around-screen
//https://stackoverflow.com/questions/13784686/moving-an-image-randomly-around-a-page
//https: //tomelliott.com/jquery/tutorial-simple-jquery-bouncing-ball
//suggestion from mentor to add a callback
let score = 0;
//loads start modal when page loads
$(document).ready(_ => {
  $("#startGame").show();
  startTheGame();
});
//starts game
function startTheGame() {
  $(".start").on("click", evt => {
    $(".modal").hide();
    let height = $(window).height() - 100;
    let width = $(window).width() - 100;
    generateRandomDivs(height, width, divs);
    checkWinner(score, divs);
    moveDivs();
  });
}
//listen to the game board and if the div clicked is one of the id divs within the array, log a point and remove
$(".game-board").on("click", evt => {
  evt.preventDefault();
  console.log(evt.target.id);
  checkLocation(evt, divs);
});
//listen for click to remove modal
$(".restart").on("click", evt => {
  location.reload();
});
//pull out function to check if location clicked was a div for scoring:
function checkLocation(evt, array) {
  let locationClicked = evt.target.id;
  for (let i = 0; i < array.length; i++) {
    if (parseInt(locationClicked) === i) {
      $(evt.target).remove();
      score++;
    }
  }
  checkWinner(divs);
}
//if score = divs.length then give game over
//TODO: add the number of fireflies caught to the html
function checkWinner(divs) {
  if (parseInt(score) === divs.length) {
    $("#endGame").show();
  }
}
//TODO: create a timer that displays the total time it took to catch all the fireflies when displaying the winner
//TODO: create a free-for-all mode that continually adds a firefly per set interval and the total time is set, game over when timer hits 0

//TODO: set up easy medium hard buttons that will determine the difficulty of the game
//