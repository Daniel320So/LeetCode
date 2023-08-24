function fullJustify(words: string[], maxWidth: number): string[] {

    const result:string[] = [];
    // Start with maxWidth in each line
    let width = maxWidth;

    // For each
    let currArr:string[] = [];
    let currArrWidth: number = 0;

    words.forEach( w => {
        console.log(w);
        // A situation that a line is formed.
        if ((currArrWidth + currArr.length + w.length) <= width) {
            // Push new word to currArr
            currArr.push(w)
            currArrWidth += w.length;
        } else {
            // Add a sentence 
            let sentence:string = ""; 
            let remainingSpace = width - currArrWidth;
            let currLength = currArr.length;
            for (let i =0; i < currArr.length; i++  ){

                // Add sentence
                               const spaceNumber: number = currLength !== 1 ?  Math.ceil(remainingSpace/(currLength-1)) : 0;
                                if ( currLength !== 1 ) {
                // Add sentence
 
                console.log(currArr[i], spaceNumber, remainingSpace, currLength, i )
                sentence = sentence + currArr[i] + (new Array(spaceNumber).fill(" ")).join("");
 
                } else {
                    sentence = sentence + currArr[i] +  (new Array(width - sentence.length - currArr[i].length).fill(" ")).join("");
                }


                
                // Update variable
                remainingSpace -= spaceNumber;
                currLength --;

                // push to result
                if ( currLength == 0 ) {
                    result.push(sentence);
                }

            } 
                currArr = [w];
                currArrWidth = w.length;
        }
    })

    // Handle last line.

    if (currArrWidth !== 0) {
            // Add a sentence 
            let sentence:string = ""; 
            let currLength = currArr.length;
            for (let i =0; i < currArr.length; i++  ){
                if ( currLength !== 1 ) {
                // Add sentence
                sentence = sentence + currArr[i] + " ";
                // Update variable
                currLength --;
                } else {
                    sentence = sentence + currArr[i] +  (new Array(width - sentence.length - currArr[i].length).fill(" ")).join("");
                }

            } 
            result.push(sentence);
    }


    return result;
};