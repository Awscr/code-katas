/* 
https://www.codewars.com/kata/5720a1cb65a504fdff0003e2

At the annual family gathering, the family likes to find the oldest living family member’s age and the 
youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole
numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with [youngest age, 
oldest age, difference between the youngest and oldest age].
*/

// My solution
function differenceInAges(ages) {
  let youngest = ages[0],
    oldest = ages[0],
    diff;

  ages.forEach((age) => {
    if (age > oldest) {
      oldest = age;
    }

    if (age < youngest) {
      youngest = age;
    }
  });

  diff = oldest - youngest;
  return [youngest, oldest, diff];
}

// Best solution
function differenceInAges(ages) {
  let max = Math.max(...ages),
    min = Math.min(...ages),
    diff;

  return [min, max, diff];
}

// TESTS
console.log(differenceInAges([82, 15, 6, 38, 35])); // [6, 82, 76]
console.log(differenceInAges([57, 99, 14, 32])); // [14, 99, 85]
