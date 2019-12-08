const fs = require("fs");
const path = require("path");

// Process text file and return array
const parseInput = data => {
  return data.split(",");;
};

fs.readFile(path.join(__dirname, "input.txt"), "utf8", (error, data) => {
  if (error) throw error;

  const input = parseInput(data);

  console.log(input);
});
