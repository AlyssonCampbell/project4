//http://api.jquery.com/append/
//https://www.kirupa.com/html5/handling_events_for_many_elements.htm
//https://stackoverflow.com/questions/41420075/jquery-move-div-around-screen
//https://stackoverflow.com/questions/13784686/moving-an-image-randomly-around-a-page
//https://tomelliott.com/jquery/tutorial-simple-jquery-bouncing-ball
let score = 0;
let divs = [];
let time = 0
//loads start modal when page loads
$(document).ready(_ => {
  let backgroundSound = sound("background.wav");
  $("#startGame").show();
  backgroundSound.play();
  chooseDifficulty();
});
//starts game
function startTheGame() {
  $(".modal").hide();
  let height = $(window).height() - 100;
  let width = $(window).width() - 100;
  generateRandomDivs(height, width, divs);
  let timer = setInterval(startTimer, 1000);
  checkWinner(divs, timer);
  moveDivs();
};
//gets the number of fireflies based on which difficulty was selected
function setNumberOfDivs(value) {
  for (let i = 0; i < value; i++) {
    divs.push(i);
  };
};
//sets the difficulty of the game
function chooseDifficulty() {
  $(".difficulty").on("click", evt => {
    if (evt.target === easy) {
      let setDivs = 5;
      setNumberOfDivs(setDivs);
      startTheGame();
    } else if (evt.target === medium) {
      let setDivs = 10;
      setNumberOfDivs(setDivs);
      startTheGame();
    } else if (evt.target === hard) {
      let setDivs = 15;
      setNumberOfDivs(setDivs);
      startTheGame();
    };
  });
};
//listen to the game board and if the div clicked is one of the id divs within the array, log a point and remove
$(".game-board").on("click", evt => {
  evt.preventDefault();
  checkLocation(evt, divs);
});
//listen for click to remove modal
$(".restart").on("click", _ => {
  location.reload();
});
//pull out function to check if location clicked was a div for scoring:
function checkLocation(evt, array) {
  let locationClicked = evt.target.id;
  for (let i = 0; i < array.length; i++) {
    if (parseInt(locationClicked) === i) {
      $(evt.target).remove();
      score++;
    };
  };
  checkWinner(divs);
};
//if score = divs.length then give game over
function checkWinner(divs) {
  if (parseInt(score) === divs.length) {
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

//TODO: add function that converts the seconds to minutes if over a certian time
//TODO: make a function that gives a timed mode new fireflies on an interval
// function addMoreDivs() {
//   console.log(divs);
// };