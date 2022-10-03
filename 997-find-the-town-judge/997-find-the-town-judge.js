/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let indegree = new Map();
    let outdegree = new Map();
    if (trust.length === 0 && n === 1) return 1;
    for (let [personA, personB] of trust) {
        indegree.set(personB, indegree.get(personB) + 1 || 1);
        outdegree.set(personA, outdegree.get(personA) + 1 || 1);
    }

    console.log(indegree);
    console.log(outdegree)
    for (let i = 1; i <= n; i++) {
        if (indegree.get(i) === n - 1 && !outdegree.has(i)) {
            return i
        }
    }
    return -1;
};