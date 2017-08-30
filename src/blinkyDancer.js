var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.setPosition();
  // this.$node.addClass('blinker')
  // this.$node.css({'animation-duration': this.timeBetweenSteps + 'ms'});

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.blink();
  // this.$node.toggle() //function(){
  //   $(this).animate({'border-width':0});
  // },function(){
  //   $(this).animate({'border-width':10});
  // });
};

makeBlinkyDancer.prototype.blink = function() {
  this.size === 10 ? this.size = 0 : this.size = 10;
  this.$node.animate({'border-width': this.size + 'px'}, 10);
};
