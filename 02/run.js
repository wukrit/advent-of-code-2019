const fs = require("fs");
const path = require("path");

// Process text file and return array of integers
const parseInput = data => {
  const arr = data.split(",");
  return arr.map(value => parseInt(value));
};

// Restore "1202 Program Alarm"
const restore1202 = input => {
  input[1] = 12;
  input[2] = 2;
};

// Process 4 Part Command
const processOp = ([opCode, x, y, location], input) => {
  let value = 0
  if (opCode == 1) value = input[x] + input[y];
  if (opCode == 2) value = input[x] * input[y];
  return [value, location];
};

// Process chunks of 4
const chunk = (input, commandArr) => {
  commandArr.push(input.slice(0, 4));
  if (input.slice(4).length >= 4 && input[4] != 99) chunk(input.slice(4), commandArr);
  return commandArr;
};

// Create list of op commands
const commands = input => {
  const commandArr = []
  chunk(input, commandArr)
  return commandArr
}

// Perform operations on Input
const performOps = (input, commands) => {
  for(entry of commands) {
    const [value, location] = processOp(entry, input);
    input[location] = value;
  }
  return input
}

fs.readFile(path.join(__dirname, "input.txt"), "utf8", (error, data) => {
  if (error) throw error;

  const input = parseInput(data);
  restore1202(input);
  const output = performOps(input, commands(input))
  console.log("Part 1: ", output[0])
});
