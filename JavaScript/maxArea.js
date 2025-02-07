
var maxArea = function(height) {
    let leftIndex = 0;
    let rightIndex = height.length - 1;
    let maxArea = 0;

    while (leftIndex < rightIndex) {
        const currentArea = (rightIndex - leftIndex) * Math.min(height[leftIndex], height[rightIndex]);
        maxArea = Math.max(maxArea, currentArea);
        height[leftIndex] < height[rightIndex] ? leftIndex++ : rightIndex--;
    }
    return maxArea;
}

// 3ms

console.log(maxArea([1,8,6,2,5,4,8,3,7]));