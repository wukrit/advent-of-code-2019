const fs = require("fs");

const splitData = (data) => {
  return data.split('\n').map(entry => parseInt(entry))
}

fs.readFile("input.txt", "utf8", (error, data) => {
  if (error) throw error;
  // Solution goes here
  console.log(splitData(data));
});
