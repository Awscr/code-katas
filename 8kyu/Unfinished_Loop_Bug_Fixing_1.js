/*
https://www.codewars.com/kata/55c28f7304e3eaebef0000da

Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished For Loop!
*/

function createArray(num) {
  const numArr = [];

  for (let i = 1; i <= num; i++) {
    numArr.push(i);
  }

  return numArr;
}

// TESTS
console.log(createArray(1)); //[1]
console.log(createArray(2)); //[1, 2]
console.log(createArray(3)); //[1, 2, 3]
console.log(createArray(4)); //[1, 2, 3, 4]
console.log(createArray(5)); //[1, 2, 3, 4, 5]
