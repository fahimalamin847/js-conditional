const statement = 'I am a hard working person';

// Split the sentence into an array of words
const wordsArray = statement.split(' ');

// Reverse the order of the words
const reversedStatement = wordsArray.reverse().join(' ');

console.log("Original Statement:", statement);
console.log("Reversed Statement:", reversedStatement);

