/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */

// the town judge trusts nobody
// everybody (except the town judge) trusts the town judge
// there is exactly ONE town judge

// [[1,2]] n = 2  1 (trust)-> 2  so town judge would be 2
// [[1,3], [2,3]] n = 3 1 -> 3 <- 3 so 1 and 2 trusts 3 and 3 trusts nobody so 3 is the judge
// [[1,3], [2,3], [3,1]] n = 3 1 <-> 3 <- 2 everybody has has at least one trust so nobody is the judge we return -1
// [[1]] n = 1 there's one town judge

// create an outdegree map of the person that has all the trusts
// create an indegree map of all the people that have trusts
// then we iterate through N and find the person who is the judge
// the judge will be the person that trusts nobody and has all of the trusts
// except for himself

var findJudge = function(n, trust) {
    if (trust.length === 0 && n === 1) {
        return 1;
    }
    const outdegree = new Map();
    const indegree = new Map();
    for (let [personA, personB] of trust) {
        outdegree.set(personB, outdegree.get(personB) + 1 || 1)
        indegree.set(personA, indegree.get(personA) + 1 || 1);
    }
    
    for (let i = 1; i <= n; i++) {
        if (outdegree.get(i) === n - 1 && !indegree.has(i)) {
            return i
        }
    }
    
    return -1;
};