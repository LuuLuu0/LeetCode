/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let map = {};
    for (let [nodeA, nodeB] of edges){
        if (dfs(nodeA, nodeB, new Set())) return [nodeA, nodeB]
        
        if (!(nodeA in map)) map[nodeA] = new Set();
        if (!(nodeB in map)) map[nodeB] = new Set();
        
        map[nodeA].add(nodeB);
        map[nodeB].add(nodeA);
    }
    
    function dfs(nodeA, nodeB, visited) {
        visited.add(nodeA);
        if (nodeA in map) {
            if (map[nodeA].has(nodeB)) return true;
            for (let neighbor of map[nodeA]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    if (dfs(neighbor, nodeB, visited)) return true;
                }
            }
            return false;
        }
        return false;
    }
};


//     // create a graph/map to store the edges 
//     let graph = {};
//     // iterate through the edges
//     for (const [nodeA, nodeB] of edges) {
//         if (find(nodeA) === find(nodeB)) {
//             return [nodeA, nodeB];
//         } else {
//             graph[find(nodeA)] = graph[find(nodeB)];
//             console.log(nodeA, ': ', graph)
//         }
//     }
    
//     function find(node) {
//         if (!graph[node]) graph[node] = node;
//         if (graph[node] === node) return node;
//         return find(graph[node]);
//     }