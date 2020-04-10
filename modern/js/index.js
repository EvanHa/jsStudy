// 단축 평가 논리 계산법
const dog = {
    name: '멍멍이',
};

function getName(animal) {
    // if (animal) {
    //     return animal.name;
    // } else {
    //     return undefined;
    // }
    // --> 위의 내용은 아래와 같이 바꿀수 있음
    return animal && animal.name;
}

const name = getName();
console.log(name);


// 앞에 falsy 가 오면, 뒤에 볼것도 없이 앞에것이 출력
// 앞에 truthy가 오면, 뒤에 값을 체크하여 결과 출력
console.log(true && 'hello');
console.log(false && 'hello');
console.log('hello' && 'bye');
console.log(null && 'hello');

const namelessDog = {
    name: '',
};

function getName(animal) {
    const name = animal && animal.name;
    // if (!name) {
    //     return '이름없는 동물입니다.'
    // } else {
    //     return name;
    // }
    return (name || '이름없는 동물입니다.');
}

const name1 = getName(namelessDog);
console.log(name1);