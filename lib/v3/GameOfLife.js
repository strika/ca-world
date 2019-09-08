const GameOfLife = ((() => {
  function nextCellState(world, x, y) {
    const aliveInNeighborhood = World.aliveInNeighborhood(world, x, y);
    const alive = World.isAlive(world, x, y);

    if (aliveInNeighborhood === 3 || (alive && aliveInNeighborhood === 2)) {
      return 1;
    }

    return 0;
  }

  return { nextCellState };
})());
