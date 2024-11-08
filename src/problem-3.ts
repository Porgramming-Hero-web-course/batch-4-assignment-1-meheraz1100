function countWordOccurrences(sentence: string, word: string): number {
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();

    const words = lowerCaseSentence.split(" ");


    return words.filter(w => w === lowerCaseWord).length;
}

// Example
const sentence = "I love typescript";
const targetWord = "typescript";
console.log(countWordOccurrences("I love typescript typescript", "typescript"));
