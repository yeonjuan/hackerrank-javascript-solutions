/**
* @difficulty Easy
* @link https://www.hackerrank.com/challenges/plus-minus/problem
*/

function plusMinus(numbers) {
    return numbers.reduce(([pos, neg, zero], num) => (
            [
                pos + Number(num > 0),
                neg + Number(num < 0),
                zero + Number(num === 0)
            ]),
            [0, 0, 0])
        .map((count) => (count / numbers.length).toFixed(6))
        .forEach(ratio => console.log(ratio));
}
