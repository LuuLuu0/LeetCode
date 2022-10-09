/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let employeeMap = new Map();
    for (const employee of employees) {
        employeeMap.set(employee.id, {importance: employee.importance, sub: employee.subordinates})
    }
    let totalImportance = 0;
    let queue = [id];
    while (queue.length > 0) {
        const currEmployee = employeeMap.get(queue.shift());
        totalImportance += currEmployee.importance;
        queue.push(...currEmployee.sub);
    }
    return totalImportance;
};