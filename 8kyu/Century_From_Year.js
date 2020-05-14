/*
https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

Input , Output Examples ::
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)
*/

const century = (year) => Math.ceil(year / 100);

// TESTS
console.log(century(1705)); //18, 'Testing for year 1705'
console.log(century(1900)); //19, 'Testing for year 1900'
console.log(century(1601)); //17, 'Testing for year 1601'
console.log(century(2000)); //20, 'Testing for year 2000'
console.log(century(89)); //1, 'Testing for year 89'
