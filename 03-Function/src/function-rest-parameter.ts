// FUNCTION REST PARAMETER

function addAll(...nums: number[]): number {
  let result = 0;
  for (const num of nums) {
    result += num;
  }
  return result;
}



// Calling the function with various numeric arguments
console.log(addAll(10, 20, 30, 100, 10.5, +true)); // Output: 170.5