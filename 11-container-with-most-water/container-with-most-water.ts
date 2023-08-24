function maxArea(height: number[]): number {

    let maxArea: number = 0;
    let lastH1 = 0;

    // loop each number
    for ( let i = 0; i < height.length; i ++) {
        const h1 = height[i];
        if (h1 > lastH1) {
            // Get the longest width
            for ( let j = height.length-1; j > 0; j--) {
                let h2 = height[j];
                if (h2 > h1) {
                    // This is the largest area for h1 height
                    if ((j-i) * h1 > maxArea)  maxArea = (j-i) * h1 ;
                    // No need to calculate others
                    break;
                } else {
                    if ((j-i) * h2 > maxArea)  maxArea = (j-i) * h2 ;
                }
            }
        }
    }

    return maxArea;
};