const World = ((() => {
  function isInsideWorld(world, coordinates) {
    const [x, y] = coordinates;

    return x >= 0 && x < world.get(0).size && y >= 0 && y < world.size;
  }

  function neighborhoodCoordinates(world, x, y) {
    let result = Immutable.List();

    for (let i = x - 1; i <= x + 1; i += 1) {
      for (j = y - 1; j <= y + 1; j += 1) {
        if (x !== i || y !== j) {
          result = result.push([i, j]);
        }
      }
    }

    result = result.filter(coordinates => isInsideWorld(world, coordinates));

    return result;
  }

  function create(width, height) {
    let world = Immutable.List();

    for (let i = 0; i < height; i += 1) {
      const row = (Immutable.List()).setSize(width);
      world = world.push(row);
    }

    return world;
  }

  function isAlive(world, x, y) {
    return world.get(x).get(y) === 1;
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
    const coordinates = neighborhoodCoordinates(world, x, y);

    return coordinates.map((point) => {
      const [i, j] = point;
      return world.get(j).get(i);
    });
  }

  function aliveInNeighborhood(world, x, y) {
    return neighborhood(world, x, y).reduce((sum, c) => sum + c, 0);
  }

  return {
    create, isAlive, nextState, neighborhood, aliveInNeighborhood,
  };
})());
