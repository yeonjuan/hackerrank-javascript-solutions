/**
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/compare-the-triplets/problem
 */

function compareTriplets (alicePoints, bobPoints) {
    let aliceScore = 0;
    let bobScore = 0;

    for (let i = 0; i < 3; i ++) {
        aliceScore += Number(bobPoints[i] < alicePoints[i]);
        bobScore += Number(alicePoints[i] < bobPoints[i]);
    }

    return [aliceScore, bobScore];
}
