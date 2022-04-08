[The Link of the challenge:](https://leetcode.com/problems/product-of-array-except-self/)
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is <b>guaranteed</b> to fit in a <b>32-bit</b> integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:
```Java
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```

##### Constraints:
- ` 2 <= nums.length <= 105`
- `-30 <= nums[i] <= 30`
- The product of any prefix or suffix of nums is <b>guaranteed</b> to fit in a <b>32-bit</b> integer.
 

<b>Follow up: </b>Can you solve the problem in O(1) extra space complexity? (The output array <b>does not </b>count as extra space for space complexity analysis.)