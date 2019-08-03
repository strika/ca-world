describe("World", function() {
  var World = require("../../lib/v1/World");

  describe("#create", function() {
    it("returns a new world", function() {
      var world = World.create(3, 2);
      expect(world).toBe(true);
    });
  });
});
