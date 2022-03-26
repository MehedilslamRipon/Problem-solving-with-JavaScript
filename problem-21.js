const data = [
   {
      id: 1,
      name: 'Bangladesh',
   },
   {
      id: 2,
      name: 'India',
   },
   {
      id: 3,
      name: 'Pakistan',
   },
   {
      id: 4,
      name: 'America',
   },
   {
      id: 5,
      name: 'Nepal',
   },
];

let result;

data.some((item) => {
   result = item.id === 1;
});

console.log(result);
