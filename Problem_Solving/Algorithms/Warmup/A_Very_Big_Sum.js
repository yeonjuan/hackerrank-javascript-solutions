/**
* @difficulty Easy
* @link https://www.hackerrank.com/challenges/a-very-big-sum/problem
*/

function aVeryBigSum(numbers) {
    return numbers
        .map(BigInt)
        .reduce((sum, num) => sum + num, BigInt(0));
}
