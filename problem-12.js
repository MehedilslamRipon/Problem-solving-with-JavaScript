// The difference between 2 dates in JavaScript will give the time difference in milliseconds
// Time difference can be converted in to days by dividing the 24Hrs time in milliseconds

// getDaysBetweenDates('10/15/2020', '12/1/2020') returns 47
// getDaysBetweenDates('11/10/2021', '11/12/2021') returns 2
// getDaysBetweenDates('11/01/2020', '11/05/2020') returns 4

const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
   // write your solution here
   const date1 = new Date(dateText1);
   const date2 = new Date(dateText2);
   const difference = Math.abs(date2 - date1);

   return difference / DAY_IN_MILLISECONDS;
}

console.log(
   `Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`
);
