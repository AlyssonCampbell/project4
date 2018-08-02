let score = 0;
let fireflies = 0;
let time = 0
//loads start modal when page loads
$(document).ready(_ => {
  $("#startGame").show();
  chooseDifficulty();
});
//sets the difficulty of the game
//referenced: https://www.kirupa.com/html5/handling_events_for_many_elements.htm
function chooseDifficulty() {
  $(".difficulty").on("click", evt => {
    if (evt.target === easy) {
      let setFireflies = 10;
      setNumberOfFireflies(setFireflies);
      startTheGame();
    } else if (evt.target === medium) {
      let setFireflies = 20;
      setNumberOfFireflies(setFireflies);
      startTheGame();
    } else if (evt.target === hard) {
      let setFireflies = 30;
      setNumberOfFireflies(setFireflies);
      startTheGame();
    };
  });
};
//gets the number of fireflies based on which difficulty was selected
function setNumberOfFireflies(value) {
  for (let i = 0; i < value; i++) {
    fireflies++;
  };
};
//starts game
//referenced: https://medium.com/@ericschwartz7/adding-audio-to-your-app-with-jquery-fa96b99dfa97
function startTheGame() {
  $("audio#background")[0].play();
  //loop the sound
  $(".modal").hide();
  let height = $(window).height() - 100;
  let width = $(window).width() - 100;
  generateRandomFireflies(height, width, fireflies);
  setInterval(startTimer, 1000);
  moveFireflies(height, width);
};
//listen to the game board and if the div clicked is one of the id divs within the array, log a point and remove
$(".game-board").on("click", evt => {
  evt.preventDefault();
  checkLocation(evt, fireflies);
});
//listen for click to remove modal
$(".restart").on("click", _ => {
  location.reload();
});
//pull out function to check if location clicked was a div for scoring:
function checkLocation(evt, total) {
  let locationClicked = evt.target.id;
  for (let i = 0; i < total; i++) {
    if (parseInt(locationClicked) === i) {
      $(evt.target).remove();
      score++;
    };
  };
  gameOver(fireflies);
};
//game over when all fireflies are caught
function gameOver(total) {
  if (parseInt(score) === total) {
    let timeTotal = time;
    $("#endGame").show();
    $(".score").html(`${score}`);
    $(".clock").html(`${timeTotal}`);
    removeTimer();
  };
};
//removes the timer display
function removeTimer() {
  $(".timer").remove();
};