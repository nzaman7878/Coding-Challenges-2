/* 2. Only unique items are allowed.
You are building a program that takes an array of numbers as input and you need to remove all the duplicates 
from the array. You want to write a function that can accomplish this task efficiently and returns a new set that 
contains only the unique elements */

function removeDuplicates(array) {
  // create a new set from the input array
  const uniqueSet = new Set(array);
  
  // create a new array from the set
  const uniqueArray = Array.from(uniqueSet);
  
  // return the new array
  return uniqueArray;
}
const array = [1, 2, 3, 4, 3, 2, 1];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray);
