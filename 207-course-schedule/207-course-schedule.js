/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// We have a number of courses and we have the prereqs
// If there is a cycle within the graph, then there is no way to complete
// all the courses, so in order to find out if there is a cycle. 
// We can use an indegree map/topological sort
// create an indegree map, and a map of all the preqreqs and courses
// then we want to use a BFS queue and add the courses that are completed
// then we increment the count and then compare to the numCourses
var canFinish = function(numCourses, prerequisites) {
  const graph = new Map();
  const indegree = new Map();

  for (const [course, prereq] of prerequisites){
    if (graph.has(prereq)){
      graph.get(prereq).push(course) 
    }
    else{
      graph.set(prereq, [course])
    }
    if(indegree.has(course)){
      indegree.set(course, indegree.get(course) + 1)
    }
    else{
      indegree.set(course, 1)
    }
  }
    console.log(graph)
    const queue = [];
    let visitedCount = 0;
    for (let i = 0; i < numCourses; i++) {
        if (!indegree.has(i)) queue.push(i);
    }
    console.log(queue)
    while(queue.length > 0) {
        const currNode = queue.shift();
        visitedCount++;
        if (graph.has(currNode)) {
            for (const neighbor of graph.get(currNode)) {
                indegree.set(neighbor, indegree.get(neighbor) - 1);
                if (indegree.get(neighbor) === 0) {
                    queue.push(neighbor);
                }
            }
        }
    }

    if (visitedCount === numCourses) {
        return true;
    }
    return false;
};