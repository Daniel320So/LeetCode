/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {

    let connectionMap = {};

    for (let i = 0; i < n; i++) {
        connectionMap[i] = new Set()
    }

    for (let i = 0; i <edges.length; i++) {
        let a = edges[i][0]
        let b = edges[i][1]
        connectionMap[a].add(b)
        connectionMap[b].add(a)
    }

    let visited = []
    let queue = []
    queue.push(source)
    
    while ( queue.length !== 0) {

        let oldQueue = queue;

        while (oldQueue.length !== 0) {
            let val = queue.pop()
            if (val == destination) return true
            if (visited[val]) continue
            queue.push(...connectionMap[val])
            visited[val] = true
        }
    }

    return false;
};