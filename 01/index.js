const fs = require("fs");

const parseInput = data => {
  const arr = [];
  const input = data.split("\n");
  input.forEach(entry => {
    if (parseInt(entry)) arr.push(parseInt(entry));
  });
  return arr;
};

const calcFuel = mass => {
  return Math.floor(mass / 3.0) - 2;
};

fs.readFile("input.txt", "utf8", (error, data) => {
  if (error) throw error;

  const input = parseInput(data);
  const sum = input.reduce((sum, value) => (sum += calcFuel(value)), 0);
  console.log(sum);
});
