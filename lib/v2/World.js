const World = ((() => {
  function create(width, height) {
    const world = new Array(height);

    for (let i = 0; i < height; i += 1) {
      const row = new Array(width);
      world[i] = row;
    }

    return world;
  }

  function nextState(world, nextCellState) {
    const newWorld = create(world.length, world[0].length);

    for (let i = 0; i < world.length; i += 1) {
      const row = world[i];

      for (let j = 0; j < row.length; j += 1) {
        newWorld[i][j] = nextCellState(world, i, j);
      }
    }

    return newWorld;
  }

  return { create, nextState };
})());
