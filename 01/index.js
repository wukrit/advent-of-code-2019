const fs = require("fs");

const parseInput = data => {
  const arr = [];
  const input = data.split("\n");
  input.forEach(entry => {
    if (parseInt(entry)) arr.push(parseInt(entry));
  });
  return arr;
};

fs.readFile("input.txt", "utf8", (error, data) => {
  if (error) throw error;
  // Solution goes here
  const input = parseInput(data);
  for (let i = 0; i < input.length; i++) console.log(input[i]);
});
