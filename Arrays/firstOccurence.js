// Problem: Find the index of the first occurrence of a specific element.
// Input: [10, 20, 30, 40, 20], element = 20
// Output: 1 (index of the first occurrence)

function firstOcc(arr, elem) {
  for (const [index, num] of arr.entries()) {
    if (num == elem) {
      return index;
    }
  }
}

console.log(firstOcc([10, 20, 30, 40, 20], 20));
