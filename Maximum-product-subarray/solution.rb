# @param {Integer[]} nums
# @return {Integer}
def max_product(nums)
  current_max, current_min = 1,1
  result = nums.max
  for a in nums
      
      tmp = [current_max * a, current_min * a, a]
      current_max = tmp.max
      current_min = tmp.min
      result = [current_max,res].max
  end
  result
end

# O(n) time complexity and O(1) space