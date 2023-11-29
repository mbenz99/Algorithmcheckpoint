function findDistinctSum(set1, set2) {
    const distinctElements = [];
    let sum = 0;
  

    for (let i = 0; i < set1.length; i++) {
      const element = set1[i];
      if (!distinctElements.includes(element)) {
        distinctElements.push(element);
        sum += element;
      }
    }
  

    for (let i = 0; i < set2.length; i++) {
      const element = set2[i];
      if (!distinctElements.includes(element)) {
        distinctElements.push(element);
        sum += element;
      }
    }
  
    return sum;
  }
  

  const set1 = [3, 1, 7, 9];
  const set2 = [2, 4, 1, 9, 3];
  const result = findDistinctSum(set1, set2);
  
  console.log('Result:', result);