/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let positionX = 0;
    let positionY = 0;
    let direction = 0;
    
    const possibleMoves = {
        0 : [0,1],
        1 : [1,0],
        2 : [0,-1],
        3 : [-1,0],
    }

    for (let i = 0; i < instructions.length; i++) {
        if (instructions[i] === 'L') {
            direction = (direction + 3) % 4;
        } else if (instructions[i] === 'R') {
            direction = (direction + 1) % 4;
        } else {
            positionX = positionX + possibleMoves[direction][0];
            positionY = positionY + possibleMoves[direction][1];
        }
    }
    
    return (positionX === 0 && positionY === 0) || direction !== 0;
};