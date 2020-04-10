// scope
// 1. global 
// 2. function (function 내부)
// 3. block (if, for, switch )

// const value = 'hello';

// function myFunction() {
//     console.log('myFunction: ');
//     console.log(value);
// }

// // 함수형 스코프
// function otherFunction() {
//     console.log('otherFunction: ');
//     const value = 'bye!';
//     console.log(value);
// }

// myFunction();
// otherFunction();

// console.log('global scope: ');
// console.log(value);

// function myFunction() {
//     const value = 'bye!';
//     const anotherValue = 'world';
//     function functionInside() {
//         console.log('functionInside: ');
//         console.log(value);
//         console.log(anotherValue);
//     }
//     functionInside();
// }

// myFunction();
// console.log('global scope:');
// console.log(value);
// console.log(anotherValue);

function myFunction() {
    const value = 'bye!';
    if (true) {
        const value = 'world';
        console.log('block scope: ');
        console.log(value);
    }
    console.log('function scope');
    console.log(value);
}

myFunction();
console.log('global scope:');
console.log(value);