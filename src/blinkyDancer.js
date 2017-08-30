var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.setPosition();
  // this.$node.addClass('blinker')
  // this.$node.css({'animation-duration': this.timeBetweenSteps + 'ms'});

};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.blink();
  // this.$node.toggle() //function(){
  //   $(this).animate({'border-width':0});
  // },function(){
  //   $(this).animate({'border-width':10});
  // });
};

BlinkyDancer.prototype.blink = function() {
  this.size === 10 ? this.size = 0 : this.size = 10;
  this.$node.animate({'border-width': this.size + 'px'}, 10);
};
