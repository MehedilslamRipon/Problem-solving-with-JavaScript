function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
   return Math.floor(Math.random() * (rangeStart - rangeEnd + 1) + rangeEnd);
}

console.log(`My random number: ${randomNumberGeneratorInRange(10, 50)}`);
