/* 1. Count the occurrences.
You are building a word count generator that will take a large string of text as input and output the words and 
the number of times they are present in the string. Your task is to write a function that can count the 
occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can 
assume that the string only contains alphabetic characters and spaces. */

function countWords(text) {
  // create an empty object to store word counts
  const wordCounts = {};
  
  // split the text into individual words
  const words = text.split(" ");
  
  // iterate over each word
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    // if the word is not already in the object, add it with a count of 1
    if (!wordCounts[word]) {
      wordCounts[word] = 1;
    }
    // if the word is already in the object, increment its count
    else {
      wordCounts[word]++;
    }
  }
  
  // return the object of word counts
  return wordCounts;
}
const text = "This is a sample text with several words in it. This text is just a sample.";
const wordCounts = countWords(text);
console.log(wordCounts);
