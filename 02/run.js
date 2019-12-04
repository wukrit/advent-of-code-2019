const fs = require("fs");
const path = require("path");

// Process text file and return array of integers
const parseInput = data => {
  const arr = data.split(",");
  return arr.map(value => parseInt(value));
};

// Set Noun/Verb Combo
const setNV = (input, noun, verb) => {
  const newArr = [...input];
  newArr[1] = noun;
  newArr[2] = verb;
  return newArr;
};

// Process 4 Part Command
const processOp = ([opCode, x, y, location], input) => {
  let value = 0;
  if (opCode == 1) value = input[x] + input[y];
  if (opCode == 2) value = input[x] * input[y];
  return [value, location];
};

// Process chunks of 4
const chunk = (input, commandArr) => {
  commandArr.push(input.slice(0, 4));
  if (input.slice(4).length >= 4 && input[4] != 99)
    chunk(input.slice(4), commandArr);
  return commandArr;
};

// Create list of op commands
const commands = input => {
  const commandArr = [];
  chunk(input, commandArr);
  return commandArr;
};

// Perform operations on Input
const performOps = (input, commands) => {
  const newArr = [...input];
  for (entry of commands) {
    const [value, location] = processOp(entry, newArr);
    newArr[location] = value;
  }
  return newArr;
};

// Part 2, Test Noun/Verb Combos
const findCombo = (input, target) => {
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      const inputArr = setNV(input, noun, verb);
      const output = performOps(inputArr, commands(inputArr));
      if (output[0] === target) return 100 * noun + verb;
    }
  }
};

fs.readFile(path.join(__dirname, "input.txt"), "utf8", (error, data) => {
  if (error) throw error;

  const input = parseInput(data);

  const inputPart1 = setNV(input, 12, 2);
  const outputPart1 = performOps(inputPart1, commands(inputPart1));
  const outPutPart2 = findCombo(input, 19690720);

  console.log("Part 1: ", outputPart1[0]);
  console.log("Part 2: ", outPutPart2);
});
