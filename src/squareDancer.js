var SquareDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.setPosition();
  this.$node.addClass('squareDancer');

};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.oldStep = Dancer.prototype.step;

SquareDancer.prototype.step = function() {
  this.oldStep();
  this.resize();
};

SquareDancer.prototype.resize = function() {
  this.size === 30 ? this.size = 0 : this.size = 30;
  this.$node.animate({'border-width': this.size + 'px'}, 200);
};