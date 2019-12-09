// Given input range
const range = [197487, 673251]

// Check for presence of doubles
const double = num => {
  const password = num.toString().split("");
  let double = false;
  for (let i = 1; i < password.length; i++)
    if (password[i] == password[i - 1]) double = true;
  return double
}

// Check to see if numbers only rise
const rising = num => {
  const password = num.toString().split("");
  let rising = true;
  for (let i = 1; i < password.length; i++)
    if (password[i] < password[i - 1]) rising = false;
  return rising;
}

// Find all passwords that match critera
const findCombinations = ([start, end]) => {
  const combos = []
  for (let i = start; i <= end; i++)
    if (double(i) && rising(i)) combos.push(i);
  return combos
}

// Find combinations for part 2
const newCombos = combos => {
  const newCombos = []
  for (password of combos)
    if (strictDouble(password)) newCombos.push(password);
  return newCombos;
}

// Check all doubles against larger group
const strictDouble = num => {
  const password = num.toString().split("");
  let double = false;
  for (let i = 1; i < password.length; i ++) {
    if (password[i] == password[i - 1]
      && password[i] != password[i + 1]
      && password[i] != password[i - 2])
        double = true;
  }
  return double;
}

const combos = findCombinations(range)
const part2 = newCombos(combos)

console.log("Part 1: ", combos.length)
console.log("Part 2: ", part2.length)
