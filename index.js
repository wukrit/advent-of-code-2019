const fs = require("fs");
const { exec } = require("child_process")

const formatNumber = num => num < 10 ? "0" + num : num

const runFile = day => {
  const path = day + "/run.js"
  if (fs.existsSync(path)) {
    console.log("--- Day " + day + " ---")
    exec("node " + path, (error, stdout, stderr) => {
      console.log(stdout);
      console.error(stderr);
    })
  }
}

for (let i = 1; i <= 25; i++)
  runFile(formatNumber(i));
