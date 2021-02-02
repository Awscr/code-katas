/*
https://www.codewars.com/kata/5875b200d520904a04000003

Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With 
so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space 
left on the bus! He wants you to write a simple program telling him if he will be able to fit all the 
passengers.

Task Overview:
You have to write a function that accepts three parameters:

    cap is the amount of people the bus can hold excluding the driver.
    on is the number of people on the bus excluding the driver.
    wait is the number of people waiting to get on to the bus excluding the driver.

If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
*/

function enough(cap, on, wait) {
  const totalPeople = cap - on - wait;

  return totalPeople >= 0 ? 0 : Math.abs(totalPeople);
}

// TESTS
console.log(enough(10, 5, 5)); //0
console.log(enough(100, 60, 50)); //10
