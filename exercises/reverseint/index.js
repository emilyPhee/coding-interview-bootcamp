// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const numArr = n.toString().split('');
  const filteredArr = numArr.filter(num => num !== '0');

  if (n > 0) {
    return parseInt(filteredArr.reverse().join(''));
  } else if (n < 0) {
    const reversed = filteredArr.slice(1).reverse().join('');
    return Number(filteredArr[0] + reversed);
  } else {
    return 0;
  }
}

module.exports = reverseInt;

// Solution form the lecture
// function reverseInt(n) {
//   const reversed = n.toString().split('').reverse().join('');

//   // if n is greater than 0, multiply with 1
//   // if n is smaller than 0, multiply with -1
//   return parseInt(reversed) * Math.sign(n);
// }
