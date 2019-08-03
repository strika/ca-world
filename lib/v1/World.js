const { List } = require('immutable');

const World = ((() => {
  function create(width, height) {
    let world = List();

    for (let i = 0; i < height; i += 1) {
      const row = (List()).setSize(width);
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

  return { create, nextState };
})());

module.exports = World;
