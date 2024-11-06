// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
function sumArray(array: number[]): number {
  return array.reduce((acc, curr) => acc + curr, 0);
}
// console.log(sumArray([1, 2, 3, 4, 5]));
