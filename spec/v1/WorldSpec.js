const World = require('../../lib/v1/World');

describe('World', () => {
  describe('#create', () => {
    it('returns a new world', () => {
      const world = World.create(3, 2);
      expect(world.size).toEqual(2);
      expect(world.get(0).size).toEqual(3);
    });
  });
});
