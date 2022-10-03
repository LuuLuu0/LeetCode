/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// first we need to build an adjacency list with the prequisites
// then we need create a set to keep track of we've visited or not
// we need to keep track of the length
// 
var canFinish = function(numCourses, prerequisites) {
    const graph = buildGraph(prerequisites, numCourses); 
    const visitedSet = new Set();

    for (let i = 0; i < numCourses; i++) {
        if (traverseDFS(i, graph, visitedSet) === false) return false
    }
    return true;
};

const traverseDFS = (node, graph, visitedSet) => {
    console.log(graph[node].length)
    if (graph[node].length === 0) return true;
    if (visitedSet.has(node)) return false;
    
    visitedSet.add(node);
    
    for (let neighbor of graph[node]) {
        if (traverseDFS(neighbor, graph, visitedSet) === false) return false;
    }
    
    visitedSet.delete(node);
    graph[node] = [];
    
    return true;
}

const buildGraph = (prereqs, numCourses) => {
    const graph = {};
    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
    }
    
    for (let [nodeA, nodeB] of prereqs) {
        graph[nodeA].push(nodeB);
    }
    return graph
}