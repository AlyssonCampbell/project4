//http://api.jquery.com/append/
//https://www.kirupa.com/html5/handling_events_for_many_elements.htm
//https://stackoverflow.com/questions/41420075/jquery-move-div-around-screen
//https://stackoverflow.com/questions/13784686/moving-an-image-randomly-around-a-page
//https: //tomelliott.com/jquery/tutorial-simple-jquery-bouncing-ball
//suggestion from mentor to add a callback

let score = 0;

//listen to the game board and if the div clicked is one of the id divs within the array, log a point and remove
$(".game-board").on("click", evt => {
  evt.preventDefault();
  console.log(evt.target.id);
  checkLocation(evt, divs);
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
function checkWinner(divs) {
  if (parseInt(score) === divs.length) {
    console.log("you won!");
  }
}