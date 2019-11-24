/**
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/simple-array-sum/problem
 */

function simpleArraySum (arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
