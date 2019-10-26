const arr1 = [1, 2, 3 ];
const arr2 = [4, 5, 6];

const obj1 = { name: 'coba', age: 25 };
const obj1clone = { name: 'coba1', age: 27 };
const obj2 = { addreas: 'Jakarta', gender:'Men' };

arr3.push(obj2);

const merge = {...obj1, ...obj1clone };

console.log(arr1.concat(arr2));
console.log(merge);