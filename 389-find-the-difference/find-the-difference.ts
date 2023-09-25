function findTheDifference(s: string, t: string): string {

    let tObj = {};
    let sObj = {};
    for ( let i =0; i < t.length; i++) {
        tObj[t[i]] =  tObj[t[i]] !== undefined?  tObj[t[i]] + 1 : 1; 
    }

    for ( let i =0; i < s.length; i++) {
        sObj[s[i]] =  sObj[s[i]] !== undefined?  sObj[s[i]] + 1 : 1; 
    }

    let keys = Object.keys(tObj);
    for ( let i =0; i< keys.length; i++) {
        if (!sObj[keys[i]] || tObj[keys[i]] !== sObj[keys[i]]) {
            return keys[i]
        }
    }

    return "";
}