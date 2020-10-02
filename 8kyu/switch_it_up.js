/* https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

Instructions:
When provided with a number between 0-9, return it in words.
Input :: 1
Output :: "One". */

function switchItUp(num) {
  const numStrings = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
  };

  return numStrings[num];
}

// TESTS
console.log(switchItUp(1)); //'One'
console.log(switchItUp(2)); // 'Two'
console.log(switchItUp(9)); //'Nine'
console.log(switchItUp(5)); //'Five'
