/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// first we want to create a graph of prereqs as well as an indegree map of the courses
// we then want to create a queue to check the prereqs
// then we check if the indegrees are 0

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

    const queue = [];
    let visitedCount = 0;
    for (let i = 0; i < numCourses; i++) {
        console.log(indegree.has(i))
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