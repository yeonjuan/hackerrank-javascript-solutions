/**
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/mini-max-sum/problem
 */

function miniMaxSum(arr) {
    const total = arr.reduce((sum, num) => sum + num, 0);
    
    console.log(total - Math.max(...arr), total - Math.min(...arr));
}