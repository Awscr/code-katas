/*
https://www.codewars.com/kata/54edbc7200b811e956000556

Instructions:
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((accumulator, currentSheep) =>
    currentSheep === true ? (accumulator += 1) : (accumulator += 0)
  );
}

// Cleaner solution
function countSheeps(arr) {
  return arr.filter(Boolean).length;
}

// TESTS
console.log(countSheeps([true, true, false, true, false, false, true, true])); //5
