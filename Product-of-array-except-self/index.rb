# @param {Integer[]} nums
# @return {Integer[]}
def product_except_self(nums)
    left = 1;
    right = 1;
    product = [];
    
    for i in (0..nums.length - 1)
        product[i] = left;
        left = left*nums[i]; 
    end
    for i in ((nums.length - 1).downto(0)) 
        product[i] = right * product[i] 
        right = right*nums[i];             
    end
    product;
end