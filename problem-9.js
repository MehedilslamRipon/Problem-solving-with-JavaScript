const time = '01:59PM';

const slicedTime = time.split('AM')[0];

let [hours, minutes] = slicedTime.split(':');

if (hours === '12') {
   hours = '00';
}

if (time.endsWith('PM')) {
   hours = parseInt(hours, 10) + 12;
}

console.log(`${hours}:${minutes}`);
