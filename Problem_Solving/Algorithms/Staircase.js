/**
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/staircase/problem
 */

function staircase(size) {
    let stairs = '';
    for (let i = 1; i <= size; i += 1) {
        stairs += ' '.repeat(size - i) + '#'.repeat(i) + '\n';
    }
    console.log(stairs);
}
