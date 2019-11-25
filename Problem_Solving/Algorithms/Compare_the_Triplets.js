/**
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/compare-the-triplets/problem
 */

function compareTriplets (ratingsA, ratingsB) {
    const score = [0, 0];

    ratingsA.forEach((rateA, index) => {
        const rateB = ratingsB[index];
        score[1] += Number(rateA < rateB);
    });

    return score;
}
