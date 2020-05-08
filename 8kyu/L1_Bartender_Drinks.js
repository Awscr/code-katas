/*
https://www.codewars.com/kata/568dc014440f03b13900001d

Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
 "Programmer"	 "Hipster Craft Beer"
 "Bike Gang Member"	"Moonshine" 
 "Politician"	"Your tax dollars" 
 "Rapper"	"Cristal" 
 *anything else*	"Beer" 
*/

function getDrinkByProfession(param) {
  param = param.toLowerCase();
  if (param === 'jabroni') {
    return 'Patron Tequila';
  } else if (param === 'school counselor') {
    return 'Anything with Alcohol';
  } else if (param === 'programmer') {
    return 'Hipster Craft Beer';
  } else if (param === 'bike gang member') {
    return 'Moonshine';
  } else if (param === 'politician') {
    return 'Your tax dollars';
  } else if (param === 'rapper') {
    return 'Cristal';
  } else {
    return 'Beer';
  }
}
