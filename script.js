function allPairs(arr, target) {
    const result = [];
    const visited = new Set();
  
    for (let i = 0; i < arr.length; i++) {
      const complement = target - arr[i];
      if (visited.has(complement)) {
        result.push([Math.min(complement, arr[i]), Math.max(complement, arr[i])]);
      }
      visited.add(arr[i]);
    }
  
    return result.sort((a, b) => a[0] - b[0]);
  }
  
  // Test cases
  console.log(allPairs([2, 4, 5, 3], 7)); 
  console.log(allPairs([5, 3, 9, 2, 1], 3)); 
  console.log(allPairs([4, 5, 1, 3, 6, 8], 9));
  