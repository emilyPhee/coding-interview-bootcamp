// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let countObj = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    //   one line solution from the Udemy
    // countObj[char] = countObj[char] + 1 || 1;

    if (countObj[char] === 1) {
      countObj[char] += 1;
    } else {
      countObj[char] = 1;
    }
  }

  console.log(countObj);

  //   find max character value from count object
  for (const [key, val] of Object.entries(countObj)) {
    if (max < val) {
      max = val;
      maxChar = key;
    }
  }
  //   for (let char in countObj) {}

  return maxChar;
}

module.exports = maxChar;
