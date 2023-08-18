var score = 0;
var timer = 60;
var hitrn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getnewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 100; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbottom").innerHTML = clutter;
}

function runTime() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#pbottom").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

document.querySelector("#pbottom").addEventListener("click", function (detls) {
  var clickednum = Number(detls.target.textContent);
  // console.log(detls.target)

  if (clickednum === hitrn) {
    increaseScore();
    makeBubble();
    getnewHit();
  }
});

runTime();
makeBubble();
getnewHit();
increaseScore();
