//setting div randomly in page
//http://archive.oreilly.com/oreillyschool/courses/jquery/QuizzesAndProjects/Viewport_proj2.project.html
//https://stackoverflow.com/questions/10385950/how-to-get-a-div-to-randomly-move-around-a-page-using-jquery-or-css
//https://stackoverflow.com/questions/7873502/jquery-bounce-variation-bounce-around
//https://api.jqueryui.com/bounce-effect/

let divs = [0, 1, 2, 3, 4];

$(document).ready(_ => {
  let width = $(window).width();
  let height = $(window).height();
  for (let i in divs) {
    let randomWidth = Math.floor(Math.random() * width);
    let randomHeight = Math.floor(Math.random() * height);
    $(`<div class='target' id="${i}"></div>`).appendTo(".game-board").css({
      left: randomWidth,
      top: randomHeight
    });
  }
  checkWinner(score);
});

// function animateDivs() {

//   console.log("width: " + randomWidth);
//   console.log("height: " + randomHeight);
//   $(".target").animate({
//     left: randomWidth,
//     top: randomHeight
//   })
// }