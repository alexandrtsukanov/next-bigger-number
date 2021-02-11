let permArr = [];
let usedChars = [];
function nextBigger(n){
  if (areAllEqual(n) === true) {
    return -1
  }
  let digits = [];
  let num = n;
  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10)
  }
  let possibleNumbers = permute(digits).map(elem => elem.map(elem => elem.toString()).reduce((acc, curr) => acc + curr)).map(el => Number(el));
  let sorted = getUnique(possibleNumbers.sort((a, b) => a - b));
  console.log(sorted)
  if (sorted[sorted.length - 1] === n) {
    return -1
  }
  for (let i = 0; i < sorted.length; i += 1) {
    if (sorted[i] === n) {
      return sorted[i + 1]
    }
  }
}

function areAllEqual(number) {
  let firstDigit = number.toString()[0];
  for (let i = 0; i < number.toString().length; i += 1) {
    if (number.toString()[i] !== firstDigit) {
      return false
    }
  }
  return true 
}

function permute(input) {
  let i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
};

function getUnique(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (!res.includes(arr[i])) {
      res.push(arr[i])
    }
  }
  return res
}

