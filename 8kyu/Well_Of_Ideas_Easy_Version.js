/*
https://www.codewars.com/kata/57f222ce69e09c3630000212

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. // If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
If there are no good ideas, as is often the case, return 'Fail!'.
*/

// My Solution
function well(x) {
  let goodCount = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] == 'good') {
      goodCount += 1;
    }
  }
  if (goodCount === 0) {
    return 'Fail!';
  } else if (goodCount > 2) {
    return 'I smell a series!';
  } else if (goodCount === 1 || goodCount === 2) {
    return 'Publish!';
  }
}

// Cleaner Solution
// const well = x => {
//   const good_count = x.filter(x => x == 'good').length;
//   return good_count < 1
//     ? 'Fail!'
//     : good_count < 3
//     ? 'Publish!'
//     : 'I smell a series!';
// };

// TESTS
console.log(well(['bad', 'bad', 'bad'])); //'Fail!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad'])); //'Publish!'
console.log(
  well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])
); //'I smell a series!'
