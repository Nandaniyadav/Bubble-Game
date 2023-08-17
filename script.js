var score = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getnewHit() {
  var rn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = rn;
}

function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 100; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbottom").innerHTML = clutter;
}

var timer = 60;
function runTime() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
    }
  }, 1000);
}
runTime();
makeBubble();
getnewHit();
increaseScore();
