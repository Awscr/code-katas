/*
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

Write a function to convert a name into initials.
This kata strictly takes 2 words with 1 space in between them
The output should be 2 capital letters with a dot separating them

Ex:
Sam Harris => S.H
Patrick Feeney => P.F
*/

function abbrevName(name) {
  const nameArr = name.split(' ');
  return `${nameArr[0][0].toUpperCase()}.${nameArr[1][0].toUpperCase()}`;
}

// TESTS
console.log(abbrevName('Sam Harris')); //"S.H"
console.log(abbrevName('Patrick Feenan')); //"P.F"
console.log(abbrevName('Evan Cole')); //"E.C"
console.log(abbrevName('P Favuzzi')); //"P.F"
console.log(abbrevName('David Mendieta')); //"D.M"
