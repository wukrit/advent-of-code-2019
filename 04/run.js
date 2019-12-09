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

console.log(double(102312)); // => false
console.log(double(123441)); // => true
