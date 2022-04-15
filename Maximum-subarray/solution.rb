# @param {Integer[]} nums
# @return {Integer}
def max_sub_array(nums)
    current = 0
    max_total = nums[0]
    for a in nums
        current = 0 if(current < 0)
        current += a
        max_total = [current,max_total].max
    end
    max_total
end