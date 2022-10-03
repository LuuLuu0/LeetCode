/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // create a map of the course that needs a prerequisite
    // create a map of indegrees showing the prereq count of the prereq
    // create a queue to push the courses that are indegree of 0
    // traverse to the neighboring courses/prereqs
    // create an array to keep track of the courses
    // return the length of the array, if it matches numCourses then we have a match
    // if the number of courses is 1 and the length of the prerequisites are zero, then we return an array of 0
    
    let graph = new Map();
    let indegree = new Map();
    const resultArr = [];
    const queue = [];
    
    if (numCourses === 1 && prerequisites.length === 0) return [0];
    
    for (let [course, prereq] of prerequisites) {
        if (!graph.has(prereq)) {
            graph.set(prereq, [course])
        } else {
            graph.get(prereq).push(course);
        }
        indegree.set(course, indegree.get(course) + 1 || 1);
    }

    for (let i = 0; i < numCourses; i++) {
        if (!indegree.get(i)) queue.push(i);
    }
    
    while (queue.length > 0) {
        const currentCourse = queue.shift();
        resultArr.push(currentCourse);
        if (graph.has(currentCourse)) {
            for (let neighbor of graph.get(currentCourse)) {
            indegree.set(neighbor, indegree.get(neighbor) - 1);
            if (indegree.get(neighbor) === 0) {
                queue.push(neighbor);
            }
          }   
        }
    }
    if (resultArr.length === numCourses) {
        return resultArr;
    }
    return [];
};