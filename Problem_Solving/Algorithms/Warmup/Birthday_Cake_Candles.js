/**
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/birthday-cake-candles/problem
 */

function birthdayCakeCandles(candleHeights) {
    const max = Math.max(...candleHeights);

    return candleHeights.reduce((count, height) => count + Number(height === max), 0);
}