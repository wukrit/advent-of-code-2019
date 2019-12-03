const fs = require("fs");

// Process text file and return array of integers
const parseInput = data => {
  const arr = [];
  const input = data.split("\n");
  input.forEach(entry => {
    if (parseInt(entry)) arr.push(parseInt(entry));
  });
  return arr;
};

// Part 1
const calcFuel = mass => Math.floor(mass / 3.0) - 2;

// Part 2
const calcTotalFuel = mass => {
  let fuel = calcFuel(mass);
  if (fuel >= 0) return fuel + calcTotalFuel(fuel);
  return 0;
};

// Sum a given array after performing a function on each value
const adder = (arr, func) => {
  return arr.reduce((sum, value) => (sum += func(value)), 0);
};

fs.readFile("input.txt", "utf8", (error, data) => {
  if (error) throw error;

  const input = parseInput(data);
  const sum1 = adder(input, calcFuel);
  const sum2 = adder(input, calcTotalFuel);

  // Print answers to console 
  console.log("Part 1: ", sum1);
  console.log("Part 2: ", sum2);
});
