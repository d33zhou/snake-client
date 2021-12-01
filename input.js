// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// actioons to perform given user key inputs
const handleUserInput = function (key) {
  if (key === '\u0003') { // ctrl+c to terminate the game
    process.exit();
  }
};

module.exports = {
  setupInput,
};