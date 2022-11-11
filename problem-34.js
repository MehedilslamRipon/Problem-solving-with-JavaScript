// Convert number to reversed array of digits
// Given a random non-negative number, you have to return 
// the digits of this number within an array in reverse order.

function digitize(n) {
    let numbers = n.toString();
    let strToArray =numbers.split('');
    let sortArray = strToArray.reverse().map(Number);
    console.log(sortArray)

        
}
 digitize(35231)