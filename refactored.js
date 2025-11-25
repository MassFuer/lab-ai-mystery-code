//********* Refactored mystery1 infinite loop *********//

function mystery1(arr) {
  // declare function
  let i = 0; // initialize the counter
  while (i < arr.length) {
    // while the counter is less than the array length
    if (arr[i] % 2 === 0) {
      // if the current element is even
      return true; // return true
    }
    i++; // increment the counter and make the loop stop eventually
  }
  return false; // else return false
}

//********* Refactored q function *********//

// giving a name and parameter description
function isPalindrome(str) {
  // This function checks if the input string is a palindrome by chaining multiple strings methods
  return str === [...str].reverse().join(""); // comparing the original string with the reversed version
}

//********* Refactored complicatedCalc function *********//

function complicatedCalc(a, b) {
  // create function with 2 parameters
  // We could also check whether a or b are numbers
  return a + b; // return statement
}
