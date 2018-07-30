//setting div randomly in page
//http://archive.oreilly.com/oreillyschool/courses/jquery/QuizzesAndProjects/Viewport_proj2.project.html
//https://stackoverflow.com/questions/10385950/how-to-get-a-div-to-randomly-move-around-a-page-using-jquery-or-css
//https://www.w3schools.com/jquery/jquery_animate.asp

let divs = [0, 1, 2, 3, 4];

$(document).ready(_ => {
  generateRandomDivs();
  checkWinner(score);
  moveDivs();

});
//hard code to check what happens when two overlay-check click behavior
//currently one div at a time dissapears
function generateRandomDivs() {
  let height = $(window).height() - 100;
  let width = $(window).width() - 100;
  for (let i in divs) {
    let randomHeight = Math.floor(Math.random() * height);
    let randomWidth = Math.floor(Math.random() * width);
    $(`<div class='target' id="${i}"></div>`).appendTo(".game-board").css({
      top: randomHeight,
      left: randomWidth
    });
  }
}

function moveDivs() {
  // let height = $(window).height() - 100;
  // let width = $(window).width() - 100;
  setInterval(animateDivs, 2000);
};
// moveDivs();

function animateDivs(width, height) {
  height = $(window).height() - 100;
  width = $(window).width() - 100;
  let newHeight = Math.floor(Math.random() * height);
  let newWidth = Math.floor(Math.random() * width);
  console.log("new height: " + newHeight);
  console.log("new width: " + newWidth);
  $(".target").animate({
    top: newHeight,
    left: newWidth
  }, 2000);
};