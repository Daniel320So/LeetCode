/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {

    let roomAndKeys = {}
    rooms.map((keys, i) => {
        roomAndKeys[i] = keys
    })


    let visited = {}
    let queue = [0]

    //loop for each room
    while ( queue.length !== 0) {
        let oldQueue = queue
        while (oldQueue.length !== 0) {
            let val = oldQueue.shift()
            if (visited[val]) continue
            visited[val] = true
            queue.push(...roomAndKeys[val])
        }
    }

    return Object.keys(visited).length == rooms.length;
};