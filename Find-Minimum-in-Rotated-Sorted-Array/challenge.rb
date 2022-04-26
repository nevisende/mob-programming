# @param {Integer[]} nums
# @return {Integer}
def find_min(nums)
    start = 0;
    finish =nums.length-1
        
    while (start < finish)
       mid = start + (finish-start)/2
       start = mid+1 if (nums[mid] > nums[finish]) 
       finish = mid if (nums[mid] < nums[finish]) 
    end
    return nums[start];
end