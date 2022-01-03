// Truncate a string to a certain number of words
// truncateWithWordLimit("JavaScript is simple", 3) returns "JavaScript is simple"
// truncateWithWordLimit("Codedamn is the best place to learn to code", 5) returns "Codedamn is the best place"

const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3;

function truncateWithWordLimit(str, wordLimit) {
   return str.split(' ').slice(0, wordLimit).join(' ');
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`);
