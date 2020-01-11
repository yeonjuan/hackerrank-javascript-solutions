/**
* @difficulty Easy
* @link https://www.hackerrank.com/challenges/reduced-string/problem
*/

function superReducedString(unreducedString) {
    const superReduce = (unreduced) => [...unreduced].reduce((ret, cur) => (
            ret.endsWith(cur) ? ret.slice(0, -1) : `${ret}${cur}`
        ), '');

    return superReduce(unreducedString) || 'Empty String';
}
