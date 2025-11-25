function mystery1(arr) {
  let i = 0; // initialize the counter
  while (i < arr.length) {
    // while the counter is less than the array length
    if (arr[i] % 2 === 0) {
      // if the current element is even
      return true; // return true
    }
  }
  return false; // else return false
}


function q(q){return q.split('').reverse().join('')==q} 
// This function checks if the input string is a palindrome by chaining multiple methods
// Not very clear, no indentation, no explicit name nor parameter description


function complicatedCalc(a, b) { // create function with 2 parameters
  let x = a; // initialize x as a
  let y = b; // initialize y as b
  for (let i = 0; i < b; i++) { // for loop from 0 to b
    x = x + 1; // increment x by 1
    y = y - 1; // decrement y by 1
  }
  return x; // return x
}