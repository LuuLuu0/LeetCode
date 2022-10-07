/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const letterLogs = [];
    const digiLogs = [];
    
    logs.forEach(log => {
        let string1 = "";
        
        string1 = log.substring(log.indexOf(" ") + 1);
        string1 = string1.split(" ").join("");
        
        if (!isNaN(string1)) {
            digiLogs.push(log);
        } else {
            letterLogs.push(log);
        }
    });
    
    letterLogs.sort((a, b) => {
        const bodyA = a.slice(a.indexOf(" ") + 1);
        const bodyB = b.slice(b.indexOf(" ") + 1);
        const c = bodyA.localeCompare(bodyB);
        if (c) return c;
        return a.localeCompare(b);
    });
    
    return [...letterLogs, ...digiLogs]
};