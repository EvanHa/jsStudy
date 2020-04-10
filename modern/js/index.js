// 배열 내장함수

// splice (기존의 배열을 건드림)
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
console.log(index);

const spliced = numbers.splice(index, 1);
console.log(numbers);
console.log(spliced);

// slice (기존의 배열을 건드리지 않음)
const sliced = numbers.slice(0, 2);
console.log(sliced);
console.log(numbers);