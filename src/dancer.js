// Creates and returns a new dancer object that can step

var Dancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.lineUpPosition = 30;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.size = 10;
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function() {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.stop(true, true).animate(styleSettings, 300);
};

Dancer.prototype.lineUp = function(lineTop, lineLeft) {
  var styleSettings = {
    top: lineTop,
    left: lineLeft,
  };
  this.$node.stop(true, true).animate(styleSettings, 300);
};
