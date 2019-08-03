describe("World", function() {
  const World = require("../../lib/v1/World");

  describe("#create", function() {
    it("returns a new world", function() {
      const world = World.create(3, 2);
      expect(world.size).toEqual(2);
      expect(world.get(0).size).toEqual(3);
    });
  });
});
