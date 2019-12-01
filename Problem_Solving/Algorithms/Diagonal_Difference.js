/**
* @difficulty Easy
* @link https://www.hackerrank.com/challenges/diagonal-difference/problem
*/

function diagonalDifference(matrix) {
    const {length} = matrix;
    let leftToRightSum = 0;
    let rightToLeftSum = 0;

    for (let i = 0; i < length; i += 1 ) {
        leftToRightSum += matrix[i][i];
        rightToLeftSum += matrix[i][length - 1 - i];
    }

    return Math.abs(leftToRightSum - rightToLeftSum);
}
