// spread, rest (ES6에 도입됨)

// rest
const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};

const { color, ...cuteSlime } = purpleCuteSlime;
console.log(color);
console.log(cuteSlime);

const { attribute, ...slime } = cuteSlime;
console.log(slime);


// 함수 파라미터 rest
function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
}
console.log(sum(1,2,3,4,5,6,7));


function subtract(x, y) {
    return x - y;
}
const result = subtract(1,2);
console.log(result);

