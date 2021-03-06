describe('colorDancer', function() {

  var colorDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    colorDancer = new ColorDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(colorDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(colorDancer, 'blink');
    colorDancer.step();
    expect(colorDancer.blink.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(colorDancer, 'step');
      expect(colorDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(colorDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(colorDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('color', function() {
    it('should call getColor at least once per second', function() {
      sinon.spy(colorDancer, 'getColor');
      expect(colorDancer.getColor.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(colorDancer.getColor.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(colorDancer.getColor.callCount).to.be.equal(2);
    });
  });
});
