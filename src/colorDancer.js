var ColorDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.setPosition();

};

ColorDancer.prototype = Object.create(BlinkyDancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;

ColorDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.getColor();
  this.blink();
};


ColorDancer.prototype.getColor = function() {
  var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  var pickColor = Math.floor(Math.random() * (colors.length - 1));
  var styleSettings = {
    'border-color': colors[pickColor]
  };
  this.$node.css(styleSettings);
};