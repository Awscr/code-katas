/*
https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/

Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
*/

function howMuchILoveYou(petals) {
  const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
  ];

  if (petals > 6) {
    while (petals > 6) {
      petals -= 6;
    }
  }
  return phrases[petals - 1];
}

// Cleaner solution
function howMuchILoveYou(petals) {
  const phrases = {
    0: 'not at all',
    1: 'I love you',
    2: 'a little',
    3: 'a lot',
    4: 'passionately',
    5: 'madly',
  };

  return phrases[petals % 6];
}

// TESTS
console.log(howMuchILoveYou(7)); //"I love you"
console.log(howMuchILoveYou(3)); //"a lot"
console.log(howMuchILoveYou(6)); //"not at all"
console.log(howMuchILoveYou(144)); //"not at all"
