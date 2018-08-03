/*referenced: http://archive.oreilly.com/oreillyschool/courses/jquery/QuizzesAndProjects/Viewport_proj2.project.html
generates the divs in a random location to start*/
function generateRandomFireflies(height, width, fireflies) {
  for (let i = 0; i < fireflies; i++) {
    getRandomLocation(height, width);
    $(`<div class='target' id="${i}"></div>`).appendTo(".game-board").css({
      top: randomHeight,
      left: randomWidth
    });
  };
  moveFireflies(height, width);
};
/*moves the divs on an interval
referenced: https://www.w3schools.com/jsref/met_win_setinterval.asp*/
function moveFireflies(height, width) {
  setInterval(animateFireflies, 2000, height, width);
};
/*function to determine the new random location
referenced: https://stackoverflow.com/questions/41420075/jquery-move-div-around-screen
referenced: https://stackoverflow.com/questions/10385950/how-to-get-a-div-to-randomly-move-around-a-page-using-jquery-or-css
referenced: https://www.w3schools.com/jquery/jquery_animate.asp*/
function animateFireflies(height, width) {
  for (let i = 0; i < fireflies; i++) {
    getRandomLocation(height, width);
    $(`#${i}`).animate({
      top: randomHeight,
      left: randomWidth
    }, 3000);
  };
};
// reads the window size to set the max area to move items within
function getRandomLocation(height, width) {
  randomHeight = Math.floor(Math.random() * height);
  randomWidth = Math.floor(Math.random() * width);
};
//displays the current time
function startTimer() {
  time = time + 1;
  if (time >= 60) {
    convertTime(time);
    $(".timer").html(minutes + ":" + seconds);
  } else {
    $(".timer").html(time);
  }
};
//function to convert the minutes/seconds
function convertTime(time) {
  minutes = Math.floor(time / 60);
  seconds = time % 60;
}
//adding more fireflies when a firefly is clicked in infinity mode they will be stationary until all moving ones have been clicked, then will animate
function addMoreFireflies() {
  $(".game-board").on("click", evt => {
    evt.preventDefault();
    checkLocation(evt, fireflies);
    let height = $(window).height() - 100;
    let width = $(window).width() - 100;
    generateRandomFireflies(height, width, 1);
  });
};