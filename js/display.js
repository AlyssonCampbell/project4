//setting div randomly in page
//http://archive.oreilly.com/oreillyschool/courses/jquery/QuizzesAndProjects/Viewport_proj2.project.html
//https://stackoverflow.com/questions/10385950/how-to-get-a-div-to-randomly-move-around-a-page-using-jquery-or-css
//https://www.w3schools.com/jquery/jquery_animate.asp

let divs = [0, 1, 2, 3, 4];

$(document).ready(_ => {
  generateRandomDivs();
  checkWinner(score);
});

function generateRandomDivs() {
  let width = $(window).width() - 100;
  let height = $(window).height() - 100;
  for (let i in divs) {
    let randomWidth = Math.floor(Math.random() * width);
    let randomHeight = Math.floor(Math.random() * height);
    $(`<div class='target' id="${i}"></div>`).appendTo(".game-board").css({
      left: randomWidth,
      top: randomHeight
    });
    // animateDivs();
  }
}

// function animateDivs(){
//   $()
// }