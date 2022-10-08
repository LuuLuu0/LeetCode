/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    // create a graph/map to store the edges 
    let graph = {};
    // iterate through the edges
    for (const [nodeA, nodeB] of edges) {
        if (find(nodeA) === find(nodeB)) {
            return [nodeA, nodeB];
        } else {
            graph[find(nodeA)] = graph[find(nodeB)];
        }
    }
    
    function find(node) {
        if (!graph[node]) graph[node] = node;
        if (graph[node] === node) return node;
        return find(graph[node]);
    }
}; 