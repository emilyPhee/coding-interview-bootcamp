// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  const poundChar = '#';
  const empty = ' ';
  let emptyCount = n - 1;

  for (let i = 1; i <= n; i++) {
    console.log(poundChar.repeat(i) + empty.repeat(emptyCount));
    emptyCount--;
  }
}

module.exports = steps;

// solution from Udemy
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }

//     console.log(stair);
//   }
// }
