// array
// 자바스크립트에서 배열내 원소들은 타입이 서로 달라도 상관없다
const array = [1, 'blabla', {}, 4];
console.log(array[3]);

const objects = [
    {name:'멍멍이'},
    {name:'야옹이'}
];
console.log(objects);
console.log(objects[0]);
console.log(objects[1]);


// 새로운 항목 추가할때는 push를 사용
objects.push({
    name: '멍뭉이'
});
console.log(objects);

// 배열의 크기
console.log(objects.length);
