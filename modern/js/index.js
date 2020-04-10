// hoisting

myFunction();

function myFunction() {
    console.log('hello world');
}

console.log(temp)
var temp = 2;
// ==> 위의 코드는 아래 코드로 처리됨.
// var temp
// console.log(temp)
// temp = 2

