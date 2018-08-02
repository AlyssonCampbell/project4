let score = 0;
let fireflies = 0;
let time = 0;
//loads start modal when page loads
$(document).ready(_ => {
  $("#startGame").show();
  chooseDifficulty();
});
/*sets the difficulty of the game
referenced: https://www.kirupa.com/html5/handling_events_for_many_elements.htm*/
function chooseDifficulty() {
  $(".difficulty").on("click", evt => {
    if (evt.target === easy) {
      let setFireflies = 10;
      setNumberOfFireflies(setFireflies);
      playTheGame();
    } else if (evt.target === medium) {
      let setFireflies = 20;
      setNumberOfFireflies(setFireflies);
      playTheGame();
    } else if (evt.target === hard) {
      let setFireflies = 30;
      setNumberOfFireflies(setFireflies);
      playTheGame();
    } else if (evt.target === infinity) {
      let setFireflies = 15;
      setNumberOfFireflies(setFireflies);
      addMoreFireflies();
      $(".stop").append("<button type='button' id='stop'>Stop</button>")
    };
    startTheGame();
  });
};
//gets the number of fireflies based on which difficulty was selected
function setNumberOfFireflies(value) {
  for (let i = 0; i < value; i++) {
    fireflies++;
  };
};
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
function playTheGame() {
  $(".game-board").on("click", evt => {
    evt.preventDefault();
    checkLocation(evt, fireflies);
    gameOver(fireflies);
  });
}
//listen for click to remove modal
$(".restart").on("click", _ => {
  location.reload();
});
//pull out function to check if location clicked was a div for scoring:
function checkLocation(evt, total) {
  clickedFirefly(evt, total);
};
//function to remove fireflies when click and track number clicked
function clickedFirefly(evt, total) {
  let locationClicked = evt.target.id;
  for (let i = 0; i < total; i++) {
    if (parseInt(locationClicked) === i) {
      $("audio#clicked")[0].play();
      $(evt.target).remove();
      score++;
    };
  };
};
//stops the game when stop button clicked in infinity mode
$(".stop").on("click", _ => {
  $(".stop").remove();
  gameOver(score);
});
//game over when all fireflies are caught
function gameOver(total) {
  if (parseInt(score) === total) {
    let timeTotal = time;
    if (timeTotal > 60) {
      convertTime(timeTotal);
      $(".clock").html(`${minutes} minute(s) & ${seconds} seconds`);
    } else {
      $(".clock").html(`${timeTotal} seconds`);
    }
    $("#endGame").show();
    $(".score").html(`${score}`);
    removeTimer();
  };
};
//removes the timer display
function removeTimer() {
  $(".timer").remove();
};