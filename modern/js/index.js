// spread, rest (ES6에 도입됨)

// spread (객체나 배열을 펼칠 수 있음)
const slime = {
    name: '슬라임'
};

// const cuteSlime = {
//     name: '슬라임',
//     attribute: 'cute'
// };
const cuteSlime = {
    ...slime,
    attribute: 'cute'
};


// const purpleCuteSlime = {
//     name: '슬라임',
//     attribute: 'cute',
//     color: 'purple'
// };
const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
};

const greenCuteSlime = {
    ...purpleCuteSlime,
    color: 'green'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
console.log(greenCuteSlime);


const animals = ['개', '고양이', '참새'];
const anotherAnimals = [ ...animals, '비둘기'];
console.log(animals);
console.log(anotherAnimals);

const numbers = [1,2,3,4,5];
const result = [...numbers, 1000, ...numbers];
console.log(result);



