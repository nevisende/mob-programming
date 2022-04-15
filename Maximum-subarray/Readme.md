[Challenge Link!](https://leetcode.com/problems/maximum-subarray/)
# Maximum Subarray

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A <b>subarray</b> is a <b>contiguous</b> part of an array.

 

##### Example 1:
```Ruby
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```
##### Example 2:
```Ruby
Input: nums = [1]
Output: 1
```

##### Example 3:
```Ruby
Input: nums = [5,4,-1,7,8]
Output: 23
``` 

###### Constraints:

- `1 <= nums.length <= 105`
- `-104 <= nums[i] <= 104`
 

<b>Follow up:</b> If you have figured out the `O(n)` solution, try coding another solution using the <b>divide and conquer</b> approach, which is more subtle.