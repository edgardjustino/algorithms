let array = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 19],
];

function diagonalDifference(arr) {
  // Write your code here
  let diagonalLeft = 0;
  let diagonalRight = 0;
  let lastCol = arr.length - 1;
  for (let index = 0; index < arr.length; index++) {
    diagonalLeft += arr[index][index];
    diagonalRight += arr[index][lastCol];
    lastCol--;
  }
  return Math.abs(diagonalLeft - diagonalRight);
}
//25 - 17

diagonalDifference(array);
