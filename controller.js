// Arranquem el Pong
var pong;
Game.ready(function() {
  pong = Game.start('game', Pong, {});
});

var pl1_y = 0;
var next_move_p1 = 0;
var next_move_p2 = 0;
var tracker_p1;
var tracker_p2;

window.onload = function() {
  // PLAYER 1
  var video_p1 = document.getElementById('video_p1');
  var canvas_p1 = document.getElementById('canvas_p1');
  var context_p1 = canvas_p1.getContext('2d');
  tracker_p1 = new tracking.ColorTracker();
  tracking.track('#video_p1', tracker_p1, { camera: true });
  tracker_p1.on('track', function(event) {
    context_p1.clearRect(0, 0, canvas_p1.width, canvas_p1.height);
    event.data.forEach(function(rect) {
      context_p1.strokeStyle = rect.color;
      context_p1.strokeRect(rect.x, rect.y, rect.width, rect.height);
      context_p1.font = '11px Helvetica';
      context_p1.fillStyle = "#fff";
      next_move_p1 = ((rect.y*pong.Defaults.height)/canvas_p1.height);
      pong.leftPaddle.setpos(pong.leftPaddle.x, next_move_p1);
      context_p1.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
      context_p1.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
    });
  });
  tracker_p1.setColors([]);

  // PLAYER 2
  var video_p2 = document.getElementById('video_p2');
  var canvas_p2 = document.getElementById('canvas_p2');
  var context_p2 = canvas_p2.getContext('2d');
  tracker_p2 = new tracking.ColorTracker();
  tracking.track('#video_p2', tracker_p2, { camera: true });
  tracker_p2.on('track', function(event) {
    context_p2.clearRect(0, 0, canvas_p2.width, canvas_p2.height);
    event.data.forEach(function(rect) {
      context_p2.strokeStyle = rect.color;
      context_p2.strokeRect(rect.x, rect.y, rect.width, rect.height);
      context_p2.font = '11px Helvetica';
      next_move_p2 = ((rect.y*pong.Defaults.height)/canvas_p2.height);
      pong.rightPaddle.setpos(pong.rightPaddle.x, next_move_p2);
      context_p2.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
      context_p2.fillStyle = "#fff";
      context_p2.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
    });
  });
  tracker_p2.setColors([]);
};

var colorActual_p1 = null;
function setColor_p1(color){
  if (colorActual_p1 == color){
    tracker_p1.setColors([]);
    colorActual_p1 = null;
  } else {
    tracker_p1.setColors([color]);
    colorActual_p1 = color;
  }
}

var colorActual_p2 = null;
function setColor_p2(color){
  if (colorActual_p2 == color){
    tracker_p2.setColors([]);
    colorActual_p2 = null;
  } else {
    tracker_p2.setColors([color]);
    colorActual_p2 = color;
  }
}

function startGame(){
  if (colorActual_p1 != null && colorActual_p2 != null){
    // 2 Players
    document.getElementById('startButton').style.visibility = "hidden";
    pong.start(2);
  } else if (colorActual_p1 != null){
    // 1 Player
    document.getElementById('startButton').style.visibility = "hidden";
    pong.start(1);
  }
}


//document.getElementById('yellow').addEventListener("click", myScript);
