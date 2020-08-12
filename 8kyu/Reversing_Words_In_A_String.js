/* https://www.codewars.com/kata/57a55c8b72292d057b000594/

You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

reverse('Hello World') === 'World Hello'
reverse('Hi There.') === 'There. Hi' */

function reverse(str) {
  return str.split(' ').reverse().join(' ');
}

console.log(reverse('Hello World. How Are You')); // 'You Are How World. Hello'
console.log(reverse('Good Morning')); // 'Morning Good'
console.log(reverse('This is so easy')); // 'easy so is This'
