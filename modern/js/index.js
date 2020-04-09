// 배열 내장함수
const array=[1,2,3,4,5,6,7,8];

const squared=[];
for (let i=0; i < array.length; i++) {
    squared.push(array[i] * array[i]);
}
console.log(squared);

const squared2=[];
array.forEach((n)=>{
    squared2.push(n*n);
});
console.log(squared2);

// map 사용
const square = n=>n*n;
const squared3 = array.map(square);
console.log(squared3);

const squared4 = array.map(n=>n*n);
console.log(squared4);

const items = [
    {
        id:1,
        text: 'hello'
    },
    {
        id:2,
        text: 'bye'
    }
];

const texts = items.map(item => item.text);
console.log(texts);

const superheroes = ['아이언맨', '캡틴아메리카', '토르', '닥터스트레인지'];
const index = superheroes.indexOf('토르');
console.log(index);
