// 비구조화 할당(구조 분해)

// 객체 비구조화 할당
// const object = { a:1, b:2};

// function print({a,b}) {
//     console.log(a);
//     console.log(b);
// }
// print(object);


const object = {a:1};
const {a, b=2} = object;
console.log(a);
console.log(b);


const animal = {
    name: '멍멍이',
    type: '개'
};

//const nickname = animal.name;
const { name: nickname } = animal;

console.log(nickname);
console.log(animal);


// 배열 비구조화 할당
const array = [1,2];
// const one = array[0];
// const two = array[1];

const [one, two] = array;
console.log(one);
console.log(two);


// deep obejct 비구조화 할당
const deepObject = {
    state: {
        information: {
            name: 'velopert',
            languages: ['korean', 'english', 'chinese']
        }
    },
    value:5
}

// 1. 2번으로 나눠서 빼오기
// const { name, languages } = deepObject.state.information;
// const { value } = deepObject;

// const extracted = {
//     name,
//     languages,
//     value
// };


// 2. 1번에 빼오기
const {
    state: {
        information: {
            name, languages: [firstLang, secondLang]
        }
    },
    value
} = deepObject;

const extracted = {
    name,
    firstLang, secondLang,
    value
};

console.log(extracted);