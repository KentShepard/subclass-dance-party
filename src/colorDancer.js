var makeColorDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.setPosition();
};

makeColorDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeColorDancer.prototype.constructor = makeColorDancer;

makeColorDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  var pickColor = Math.floor(Math.random() * (colors.length - 1));
  var styleSettings = {
    'border-color': colors[pickColor]
  };
  this.$node.css(styleSettings);
  this.$node.toggle();
};