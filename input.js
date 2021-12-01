
// Stores the active TCP connection object.
let connection

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn; // object to allow interaction with the server
  
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

  if (key === "w") {
    connection.write("Move: up");
    // connection.write("Say: moving up");
  }

  if (key === "a") {
    connection.write("Move: left");
    // connection.write("Say: moving left");
  }

  if (key === "s") {
    connection.write("Move: down");
    // connection.write("Say: moving down");
  }

  if (key === "d") {
    connection.write("Move: right");
    // connection.write("Say: moving right");
  }

  if (key === "h") {
    connection.write("Say: Hello!");
  }

  if (key === "g") {
    connection.write("Say: Goodbye");
  }
};

module.exports = {
  setupInput,
};