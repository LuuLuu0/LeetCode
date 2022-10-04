/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
var minimumSemesters = function(n, relations) {
    const graph = new Map();
    const indegree = new Map();
    
    for (let [course, prereq] of relations) {
        if (graph.has(prereq)) {
            graph.get(prereq).push(course);
        } else {
            graph.set(prereq, [course]);
        }
        indegree.set(course, indegree.get(course) + 1 || 1);
    }

    const queue = [];
    let courseCount = 0;
    for (let i = 1; i <= n; i++) {
        if (!indegree.has(i)) queue.push(i);
    }
    
    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const currCourse = queue.shift();
                if (graph.has(currCourse)) {
                    for (let neighbor of graph.get(currCourse)) {
                    indegree.set(neighbor, indegree.get(neighbor) - 1);
                    if (indegree.get(neighbor) === 0) {
                        queue.push(neighbor);
                    }
                }
            }   
        }
        courseCount += 1;
    }
    
    for (const [course, count] of indegree) {
        if (count > 0) return -1;
    }
    
    return courseCount;
}; 