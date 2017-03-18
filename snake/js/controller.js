
if (navigator.onLine && window.location.hostname === 'patorjk.com') {
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-3312460-1']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
}

/*var next_move_p1 = 0;
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
};*/
