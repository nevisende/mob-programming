/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    
  // Sort the array by start
  const sortedIntervals = intervals.sort((a,b) => a[0]-b[0])
  // O(nlgn)
  
  //Initialize mergedIntervals with first element of sortedIntervals
  const mergedIntervals = [sortedIntervals[0]]
  
  for(let i= 1; i < sortedIntervals.length; i++) {
      let currentMeeting = sortedIntervals[i]
      let latestMergedMeetings = mergedIntervals[mergedIntervals.length - 1]
      
      if(currentMeeting[0] <= latestMergedMeetings[1]) {
          latestMergedMeetings[1] = Math.max(latestMergedMeetings[1], currentMeeting[1])
      } else {
          mergedIntervals.push(currentMeeting)
      }
  }
  
  return mergedIntervals
};