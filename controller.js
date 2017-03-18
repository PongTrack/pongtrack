// Arranquem el Pong
Game.ready(function() {
  var pong = Game.start('game', Pong, {});
});

var tracker;
window.onload = function() {
  var video = document.getElementById('video');
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  tracker = new tracking.ColorTracker();
  tracking.track('#video', tracker, { camera: true });
  tracker.on('track', function(event) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    event.data.forEach(function(rect) {
      context.strokeStyle = rect.color;
      context.strokeRect(rect.x, rect.y, rect.width, rect.height);
      context.font = '11px Helvetica';
      context.fillStyle = "#fff";
      context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
      context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
    });
  });
};
var colorActual = null;
function setColor(color){
  if (colorActual == color){
    tracker.setColors([]);
    colorActual = null;
  } else {
    tracker.setColors([color]);
    colorActual = color;
  }

}

//document.getElementById('yellow').addEventListener("click", myScript);
