/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
    
    //Init a map that shows people can not be in the same group with
    let grouping = {}
    for (let i=1; i<n+1; i++) {
        grouping[i] =  new Set()
    }

    //Loop for each dislikes & remove from grouping
    for (let i=0; i<dislikes.length; i++) {
        let a = dislikes[i][0]
        let b = dislikes[i][1]
        grouping[a].add(b)
        grouping[b].add(a) 
    }

    // BFS
    let queues = [1]
    let groups = [{1:true}, {}]
    let visited = {}
    let counter = 1
    let remainingNodeInThisDepth = 1;

    while (queues.length != 0) {
        let node = queues[0];

        // Check remaining node in this depth
        if (remainingNodeInThisDepth == 0) {
            counter = counter==0? 1: 0
            remainingNodeInThisDepth = queues.length;
        } 
        remainingNodeInThisDepth --;

        if (!visited[node]) {
            // node not visite
            visited[node] = true

            // switch counter while remainig node = 0
            let prevCounter =  counter==0? 1: 0
            let itemsInOtherGroup = [...grouping[node]]
            let itemToPush = itemsInOtherGroup.filter(v => !visited[v])
            queues.push(...itemToPush)
            while (itemsInOtherGroup.length != 0) {
                let item = itemsInOtherGroup[0]
                //If item is in another group, return false
                if (groups[prevCounter][item]) return false;
                groups[counter][item] = true
                itemsInOtherGroup.shift()
            }
        }
        queues.shift()

        //Add queue that is not visited
        if(queues.length == 0 && Object.keys(visited).length !== n) {
            queues.push(Object.keys(grouping).filter( v => !visited[v])[0])
        }
        
    }

    return true;
};