var makeSquareDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.setPosition();
  this.shouldGrow = true;
  this.size = 10;
  this.x = 0;
};

makeSquareDancer.prototype = Object.create(makeDancer.prototype);
makeSquareDancer.prototype.constructor = makeSquareDancer;

makeSquareDancer.prototype.oldStep = makeDancer.prototype.step;

makeSquareDancer.prototype.step = function() {
  this.oldStep();
  this.resize();
};

makeSquareDancer.prototype.resize = function() {
  // body...
  this.size = (Math.sin(this.x++) + 1)/2 * 50;

  var styleSettings = {
    'border-color': 'orange',
    'border-width': this.size + 'px',
    'border-radius': 0
  };
  this.$node.css(styleSettings);

};

makeSquareDancer.prototype.shrink = function() {
  // body...
};