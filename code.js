function countWordsAndVowels(sentence) {
    let wordCount = 0;
    let vowelCount = 0;
    let charCount = 0;
  
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i].toLowerCase();
  
      if (char === ' ' && i !== sentence.length - 1) {
    
        wordCount++;
      } else if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    
        vowelCount++;
      }
  

      charCount++;
    }
  
    return {
      wordCount: wordCount + 1, 
      vowelCount: vowelCount,
      charCount: charCount
    };
  }
  
  const sentence = 'Take my breath away.';
  const counts = countWordsAndVowels(sentence);
  
  console.log('Word count:', counts.wordCount);
  console.log('Vowel count:', counts.vowelCount);
  console.log('Character count:', counts.charCount);