// Display pyramid of number using JavaScript

var totalNumberOfRows = 5;
var output = "";
for (var i = 1; i <= totalNumberOfRows; i++) {
   for (var j = 1; j <= i; j++) {
      output += j + " ";
   }
   console.log(output);
   output = "";
}
