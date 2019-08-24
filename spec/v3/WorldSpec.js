describe('World', () => {
  describe('#create', () => {
    it('returns a new world', () => {
      const world = World.create(3, 2);
      expect(world.size).toEqual(2);
      expect(world.get(0).size).toEqual(3);
    });
  });

  describe('#nextState', () => {
    it('applies the next state function to all cells', () => {
      const nextCellState = (_, x, y) => x + y;
      let world = World.create(2, 2);

      world = World.nextState(world, nextCellState);

      for (let i = 0; i < 2; i += 1) {
        for (let j = 0; j < 2; j += 1) {
          const cell = world.get(i).get(j);
          expect(cell).toEqual(i + j);
        }
      }
    });
  });

  describe('#neighborhood', () => {
    it('returns the neighborhood cells of the cell, including the cell', () => {
      const world = Immutable.List(
        Immutable.List([0, 1, 0, 0]),
        Immutable.List([1, 0, 1, 0]),
        Immutable.List([1, 0, 1, 0]),
        Immutable.List([1, 0, 1, 0]),
      );
      const neighborhood = World.neighborhood(world, 1, 1);

      expect(neighborhood).toEqual([0, 1, 0, 1, 0, 1, 1, 0, 1]);
    });
  });
});
