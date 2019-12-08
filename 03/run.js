const fs = require("fs");
const path = require("path");

// Process text file and return array
const parseInput = data => {
  const [wire1, wire2] = data.split("\n");
  return [wire1.split(","), wire2.split(",")]
};

fs.readFile(path.join(__dirname, "input.txt"), "utf8", (error, data) => {
  if (error) throw error;

  const [wire1, wire2] = parseInput(data);

  console.log(wire1, "\n", wire2);
});
