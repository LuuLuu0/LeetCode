/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
// Given the number of nodes, we need to build an adjacency list of that
// so for let i = 0 
// then populate the graph with the edges
var countComponents = function(n, edges) {
    const graph = buildGraph(n, edges);
    const visitedSet = new Set();
    let connectedCount = 0;
    
    for (const node in graph) {
        if (traverseDFS(node, graph, visitedSet)) {
            connectedCount += 1;
        }
    }
    
    return connectedCount;
};

const traverseDFS = (node, graph, visitedSet) => {
    if (visitedSet.has(node)) return false;
    visitedSet.add(node);
    for (const neighbor of graph[node]) {
        traverseDFS(neighbor, graph, visitedSet);
    }
    return true;
}
const buildGraph = (nodes, edges) => {
    const graph = {};
    for (let i = 0; i < nodes; i++) {
        graph[i] = [];
    }
    
    for (const [nodeA, nodeB] of edges) {
        graph[nodeA].push(String(nodeB));
        graph[nodeB].push(String(nodeA));
    }
    return graph;
}