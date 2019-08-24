const World = ((() => {
  function create(width, height) {
    let world = Immutable.List();

    for (let i = 0; i < height; i += 1) {
      const row = (Immutable.List()).setSize(width);
      world = world.push(row);
    }

    return world;
  }

  function nextState(world, nextCellState) {
    let newWorld = world;

    for (let i = 0; i < world.size; i += 1) {
      const row = world.get(i);

      for (let j = 0; j < row.size; j += 1) {
        newWorld = newWorld.setIn([i, j], nextCellState(world, i, j));
      }
    }

    return newWorld;
  }

  function neighborhood(world, x, y) {
    let result = Immutable.List();

    for (let i = x - 1; i <= x + 1; i += 1) {
      const row = world.get(i);

      for (let j = y - 1; j <= y + 1; j += 1) {
        result = result.push(row.get(j));
      }
    }

    return result;
  }

  return { create, nextState, neighborhood };
})());
