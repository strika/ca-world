describe('World', () => {
  describe('#create', () => {
    it('returns a new world', () => {
      const world = World.create(3, 2);
      expect(world.size).toEqual(2);
      expect(world.get(0).size).toEqual(3);
    });
  });

  describe('#isAlive', () => {
    describe('when cell is alive', () => {
      it('returns true', () => {
        const world = Immutable.List([
          Immutable.List([0, 0, 0]),
          Immutable.List([0, 0, 0]),
          Immutable.List([1, 0, 0]),
        ]);

        expect(World.isAlive(world, 0, 2)).toEqual(true);
      });
    });

    describe('when cell is dead', () => {
      it('returns false', () => {
        const world = Immutable.List([
          Immutable.List([0, 0, 0]),
          Immutable.List([0, 0, 0]),
          Immutable.List([0, 0, 0]),
        ]);

        expect(World.isAlive(world, 1, 1)).toEqual(false);
      });
    });
  });

  describe('#nextState', () => {
    it('applies the next state function to all cells', () => {
      const nextCellState = (_, x, y) => x + 2 * y;
      let world = World.create(2, 2);

      world = World.nextState(world, nextCellState);

      for (let i = 0; i < 2; i += 1) {
        for (let j = 0; j < 2; j += 1) {
          const cell = world.get(j).get(i);
          expect(cell).toEqual(i + 2 * j);
        }
      }
    });
  });

  describe('#neighborhood', () => {
    it('returns the neighborhood cells of the cell', () => {
      const world = Immutable.List([
        Immutable.List([0, 1, 0, 0]),
        Immutable.List([1, 0, 1, 0]),
        Immutable.List([1, 0, 1, 0]),
        Immutable.List([1, 0, 1, 0]),
      ]);
      const neighborhood = World.neighborhood(world, 1, 2).toArray();

      expect(neighborhood).toEqual([1, 1, 1, 0, 0, 1, 1, 1]);
    });

    describe('when coordinates are in a corner', () => {
      it('returns the neighborhood cells of the cell', () => {
        const world = Immutable.List([
          Immutable.List([0, 1, 0]),
          Immutable.List([1, 0, 1]),
          Immutable.List([1, 0, 1]),
        ]);
        const neighborhood = World.neighborhood(world, 2, 2).toArray();

        expect(neighborhood).toEqual([0, 0, 1]);
      });
    });
  });

  describe('#aliveInNeighborhood', () => {
    it('returns the number of alive cells in the neighborhood', () => {
      const world = Immutable.List([
        Immutable.List([0, 1, 0, 0]),
        Immutable.List([1, 1, 1, 0]),
        Immutable.List([1, 0, 1, 0]),
        Immutable.List([1, 0, 1, 0]),
      ]);

      expect(World.aliveInNeighborhood(world, 1, 2)).toEqual(7);
    });
  });
});
