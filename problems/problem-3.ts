// Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.
function countWordOccurrences(sentence: string, word: string): number {
  const findWord = word.toLowerCase();
  const inSentence = sentence
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .split(/\s+/);

  return inSentence.filter((w) => w === findWord).length;
}

//  console.log(
//   countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")
// );
