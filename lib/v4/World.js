const World = ((() => {
  function isInsideWorld(world, coordinates) {
    const [x, y] = coordinates;

    return x >= 0 && x < world[0].length && y >= 0 && y < world.length;
  }

  function neighborhoodCoordinates(world, x, y) {
    let result = [];

    for (let i = x - 1; i <= x + 1; i += 1) {
      for (j = y - 1; j <= y + 1; j += 1) {
        if (x !== i || y !== j) {
          result.push([i, j]);
        }
      }
    }

    result = result.filter(coordinates => isInsideWorld(world, coordinates));

    return result;
  }

  function create(width, height) {
    let world = new Array(height);

    for (let i = 0; i < height; i += 1) {
      const row = new Array(width);
      world[i] = row;
    }

    return world;
  }

  function isAlive(world, x, y) {
    return world.get(y).get(x) === 1;
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

  function neighborhood(world, x, y) {
    const coordinates = neighborhoodCoordinates(world, x, y);

    return coordinates.map((point) => {
      const [i, j] = point;
      return world[j][i];
    });
  }

  function aliveInNeighborhood(world, x, y) {
    return neighborhood(world, x, y).reduce((sum, c) => sum + c, 0);
  }

  return {
    create, isAlive, nextState, neighborhood, aliveInNeighborhood,
  };
})());
