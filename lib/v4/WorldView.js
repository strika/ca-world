const WorldView = ((() => {
  function display(worldId, world) {
    const cellSize = 5;
    const canvas = document.getElementById(worldId);
    const ctx = canvas.getContext('2d');

    canvas.width = world.length * cellSize;
    canvas.height = world[0].length * cellSize;

    let cell = null;

    for (let i = 0; i < world.length; i += 1) {
      const row = world[i];

      for (let j = 0; j < row.length; j += 1) {
        cell = row[j];

        if (cell === 1) {
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
