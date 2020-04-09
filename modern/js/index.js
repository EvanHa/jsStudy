// 함수
function add(a, b) {
    return a+b;
}

function hello(name) {
    console.log('Hello, ' + name + '!');
}

function hello2(name) {
    console.log(`Hello ${name}!`);
    return `Hello ${name}!`;
}

const sum = add(1,2);
console.log(sum);
console.log(hello('tom'));
console.log(hello2('tom2'));
