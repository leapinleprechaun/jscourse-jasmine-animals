describe("Animal Unit Tests", function() {

  describe('dogs', function () {
    var dog;

    beforeEach(function () {
      dog = new Animal('dog');
      // note, you could leave out this beforeEach and create the new animal inside each one of the it blocks instead. This way is just easier.
    });

    it('should bark if the animal is a dog', function () {
      expect(dog.speak()).toEqual('bark');
    });
    it('shouldnt meow because its not a cat', function () {
      expect(dog.speak()).not.toEqual('meow');
    });
  })
 
});
