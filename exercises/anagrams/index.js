// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // compare if two objects are same
  return (
    JSON.stringify(buildCharObj(stringA)) ===
    JSON.stringify(buildCharObj(stringB))
  );
}

function buildCharObj(str) {
  const charObj = {};

  //   erase space, special characters with regExp
  for (let c of str.replace(/[^\w]/g, '')) {
    charObj[c] = charObj[c] + 1 || 1;
  }

  //   return sorted object by key
  return Object.keys(charObj)
    .sort()
    .reduce((obj, key) => {
      obj[key] = charObj[key];
      return obj;
    }, {});
}

module.exports = anagrams;
