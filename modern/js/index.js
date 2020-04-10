// 배열 내장함수

// concat (기존 배열을 건드리지 않음)
const arr1=[1,2,3];
const arr2=[4,5,6];
const concated=arr1.concat(arr2);
console.log(concated);
const spread=[...arr1, ...arr2];
console.log(spread);

// Join
const array = [1,2,3,4,5];
console.log(array.join());
console.log(array.join(' '));
