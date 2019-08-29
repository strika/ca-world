const GameOfLife = ((() => {
  function nextCellState(world, x, y) {
    const aliveInNeighborhood = World.aliveInNeighborhood(world, x, y);
    if (aliveInNeighborhood === 2 || aliveInNeighborhood === 3) {
      return 1;
    } else {
      return 0;
    }
  }

  return { nextCellState };
})());
