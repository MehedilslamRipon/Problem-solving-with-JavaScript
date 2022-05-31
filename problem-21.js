/* #Problem Task
A list of strings is given and each string will do following tasks:
x is an integer; enter a new x score.
"+" - Add the previous two scores together to create a new score. There will always be at least
two previous scores.
"D" - Make a new score that is twice as high as the previous one. There will almost certainly
be a previous score.
"R" - Remove the previous score from the record by invalidating it. There will almost certainly
be a previous score.
Return the total of all the records' scores.
Input: ops = ["7","-8","9","R","D","10","+","+"]
Output: -9
Explanation:
"7" - Increase the record by 7, making it [7].
"-8" - Increase the record by -8, making it [7, -8].
"9" - Increase the record by 9, making it [7, -8, 9].
"R" - Discard the previous score and replace it with [7, -8].
"D" - To the record, add 2* -8 = -16, making the record [7, -8, -16].
"10" - Increase the record by one, making it [7, -8, -16, 10].
"+" - Make the record [7, -8, -16, 10, -6 ] by adding -16 + 10 = -6.
"+" - Make the record [7, -8, -16, 10, -6, 4] by adding 10+ -6 = 4.
7 + -8 + -16 + 10 + -6 + 4 = -9 is the total. */

// existing Array
const ops = ['7', '-8', '9', 'R', 'D', '10', '+', '+'];

// update value from the loop of Array(ops)
let updateValues = [];

// traversing the Array(ops) and applying logics
for (let i = 0; i < ops.length; i++) {
   // conditions & checkings

   // check the string contains number or not
   if (/^[-+]?[0-9]\d*(\.\d+)?$/.test(ops[i])) {
      const parseToInt = parseInt(ops[i]);
      // updateValues = [...updateValues, parseToInt];
      updateValues.push(parseToInt);
   }
   // discard the previous score and replace
   else if (ops[i] === 'R') {
      updateValues.pop();
   }
   // multiply the last element of the Array(updateValues)
   else if (ops[i] === 'D') {
      const multiplyTheValue = updateValues[updateValues.length - 1] * 2;
      // updateValues = [...updateValues, multiplyTheValue];
      updateValues.push(multiplyTheValue);
   }
   // make the record by adding [-16 + 10] & [10 + -6]
   else if (ops[i] === '+') {
      updateValues.push(
         updateValues[updateValues.length - 2] +
            updateValues[updateValues.length - 1]
      );
   }
}

// counting the final output
const finalResult = updateValues.reduce((a, b) => a + b, 0);

console.log(finalResult); // Output = -9
