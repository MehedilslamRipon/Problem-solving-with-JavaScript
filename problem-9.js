// convertTo24HrsFormat("12:10AM") returns "00:10"
// convertTo24HrsFormat("5:00AM") returns "05:00"
// convertTo24HrsFormat("12:33PM") returns "12:33"
// convertTo24HrsFormat("01:59PM") returns "13:59"
// convertTo24HrsFormat("11:8PM") returns "23:08"
// convertTo24HrsFormat("10:02PM") returns "22:02"
const time = '5:00AM';

function convertTo24HrsFormat(time) {
   const slicedTime = time.split(/(PM|AM)/gm)[0];

   let [hours, minutes] = slicedTime.split(':');

   if (hours === '12') {
      hours = '00';
   }

   let updateHourAndMin;

   function addition(hoursOrMin) {
      updateHourAndMin =
         hoursOrMin.length < 2
            ? (hoursOrMin = `${0}${hoursOrMin}`)
            : hoursOrMin;

      return updateHourAndMin;
   }

   if (time.endsWith('PM')) {
      hours = parseInt(hours, 10) + 12;
   }

   return `${addition(hours)}:${addition(minutes)}`;
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`);
