// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n) {
  const empty = ' ';
  const pound = '#';
  let emptyCount = n - 1;
  let poundCount = 1;

  for (let i = 0; i < n; i++) {
    let result =
      empty.repeat(emptyCount) +
      pound.repeat(poundCount) +
      empty.repeat(emptyCount);

    emptyCount--;
    poundCount += 2;

    console.log(result);
  }
}

module.exports = pyramid;
