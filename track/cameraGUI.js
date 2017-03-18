function colorController(tracker) {

  var gui = new dat.GUI();

  var trackedColors = {};

  Object.keys(tracking.ColorTracker.knownColors_).forEach(function(color) {
    trackedColors[color] = false;
  });

  function updateColors() {
    var colors = [];
    for (var color in trackedColors) {
      if (trackedColors[color]) {
        colors.push(color);
      }
    }
    tracker.setColors(colors);
  }

  var colorsFolder = gui.addFolder('Color for player 1');

  Object.keys(trackedColors).forEach(function(color) {
    colorsFolder.add(trackedColors, color).onFinishChange(updateColors);
  });

  colorsFolder.open();
  updateColors();
};
