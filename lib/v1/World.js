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

  }

  return { create, nextState };
})());

module.exports = World;
