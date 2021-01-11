const users = [
  { name: 'Tom', age: 30 },
  { name: 'Micky', age: 20 },
  { name: 'Fred', age: 40 },
  { name: 'Ramil', age: 50 },
];

// prettier-ignore
const ages = users.map((user) => ({ age: user.age })).filter((user) => user.age > 30).reduce((acc, user) => (acc.age += user.age), 100);
console.log('ages', ages);
