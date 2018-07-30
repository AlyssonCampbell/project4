//setting div randomly in page
//http://archive.oreilly.com/oreillyschool/courses/jquery/QuizzesAndProjects/Viewport_proj2.project.html
//https://stackoverflow.com/questions/10385950/how-to-get-a-div-to-randomly-move-around-a-page-using-jquery-or-css
//https://www.w3schools.com/jquery/jquery_animate.asp
//https://www.w3schools.com/jsref/met_win_setinterval.asp
let divs = [0, 1, 2, 3, 4];
//reads the window size to set the max area to move items within
$(document).ready(_ => {
  let height = $(window).height() - 100;
  let width = $(window).width() - 100;
  generateRandomDivs(height, width, divs);
  checkWinner(score, divs);
  moveDivs();
});
//hard code to check what happens when two overlay-check click behavior
//currently one div at a time dissapears
//generates the divs in a random location to start
function generateRandomDivs(height, width, divs) {
  for (let i in divs) {
    let randomHeight = Math.floor(Math.random() * height);
    let randomWidth = Math.floor(Math.random() * width);
    $(`<div class='target' id="${i}"></div>`).appendTo(".game-board").css({
      top: randomHeight,
      left: randomWidth
    });
  }
}
//moves the divs on an interval
function moveDivs() {
  setInterval(animateDivs, 1000);
};
//function to determine the new random location
function animateDivs() {
  for (let i = 0; i < divs.length; i++) {
    height = $(window).height() - 100;
    width = $(window).width() - 100;
    let newHeight = Math.floor(Math.random() * height);
    let newWidth = Math.floor(Math.random() * width);
    $(`#${i}`).animate({
      top: newHeight,
      left: newWidth
    }, 2000);
  }
};