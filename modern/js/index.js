// 배열 내장함수

// reduce (잘사용하면 매우 유용한 함수)
const numbers = [1,2,3,4,5];

let sum = 0;
numbers.forEach(n=>{
    sum += n;
});
console.log(sum);

// accumulator는 누적된 값
// current는 배열의 원소들 값이 사용됨
const reduced = numbers.reduce((accumulator, current)=> accumulator+current, 0);
console.log("sum : " + reduced);
// reduce로 평균 계산
const reduced2 = numbers.reduce((accumulator, current, index, array) => {
    if (index == array.length - 1) {
        return (accumulator + current) / array.length;
    }
    return accumulator + current;
}, 0);
console.log("average : "+reduced2);


const alphabets = ['a', 'a', 'b', 'b', 'c', 'c', 'c', 'd'];
const counts = alphabets.reduce((acc, current,)=> {
    if (acc[current]) {
        acc[current] += 1;
    } else {
        acc[current] = 1;
    }
    return acc;
}, {});
console.log(counts);