var maxArea = function(height) {
    let i = 0
    let j = height.length -1
    let area
    let max = 0
    while(i<j) {
        area = (j-i)*Math.min(height[i],height[j])
        max=Math.max(max,area)
        height[i]<height[j] ? i++:j--
    }
    return max
};