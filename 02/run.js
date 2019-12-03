const fs = require("fs");
const path = require("path");

// Process text file and return array of integers
const parseInput = data => {
  const arr = data.split(",");
  return arr.map(value => parseInt(value));
};

fs.readFile(path.join(__dirname, "input.txt"), "utf8", (error, data) => {
  if (error) throw error;

  const input = parseInput(data);
  console.log(input);
});
