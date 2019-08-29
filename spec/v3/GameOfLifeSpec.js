describe('GameOfLife', () => {
  describe('#nextCellState', () => {
    describe('when cell is alive', () => {
      describe('when cell has fewer than two live neighbors', () => {
        it('dies', () => {
          const world = Immutable.List([
            Immutable.List([0, 0, 0]),
            Immutable.List([1, 1, 0]),
            Immutable.List([0, 0, 0]),
          ]);

          expect(GameOfLife.nextCellState(world, 1, 1)).toEqual(0);
        });
      });

      describe('when cell has 2 live neighbors', () => {
        it('stays alive', () => {
          const world = Immutable.List([
            Immutable.List([1, 0, 0]),
            Immutable.List([1, 1, 0]),
            Immutable.List([0, 0, 0]),
          ]);

          expect(GameOfLife.nextCellState(world, 1, 1)).toEqual(1);
        });
      });
    });
  });
});
