// 배열 내장함수

// shift (기존의 배열을 건드림, first out)
const numbers = [10, 20, 30, 40];
const value = numbers.shift();
console.log("shift retrun value : "+value);
console.log(numbers);

// unshift
const value1 = numbers.unshift(10);
console.log("unshift return value : " + value1);
console.log(numbers);

// pop (last out)
const value2 = numbers.pop();
console.log("pop return value : " + value2);
console.log(numbers);

// push
const value3 = numbers.push(40);
console.log("push return value : " + value3);
console.log(numbers);

