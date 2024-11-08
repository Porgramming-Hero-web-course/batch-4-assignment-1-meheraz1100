function removeDuplicates(arr: number[]): number[] {
    const seen = new Set<number>(); 
    const result: number[] = [];
  
    for (const num of arr) {
      if (!seen.has(num)) { 
        seen.add(num); 
        result.push(num); 
      }
    }
  
    return result; 
  }

  console.log(removeDuplicates([1, 2, 2,2, 3,3,4, 4, 4, 5]));