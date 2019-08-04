const WorldView = ((() => {
  function display(worldId, world) {
    const cellSize = 5;
    const canvas = document.getElementById(worldId);
    const ctx = canvas.getContext('2d');

    canvas.width = world.size * cellSize;
    canvas.height = world.get(0).size * cellSize;

    let cell = null;

    for (let i = 0; i < world.size; i += 1) {
      const row = world.get(i);

      for (let j = 0; j < row.size; j += 1) {
        cell = row.get(j);

        if (cell.alive) {
          ctx.fillStyle = 'blue';
        } else {
          ctx.fillStyle = 'white';
        }

        ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
      }
    }
  }

  return { display };
})());
