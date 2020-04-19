// spread operator, 펼침연산자.

let pre = ["apple", "orange", 100];
let newData = [...pre];

console.log(pre);
console.log(newData);
console.log(pre === newData);

// 참조가 아니라, 새로운 것을 생성해서 갖고 있다. concat 사용한 것 같은 효과
// 참조가 아니기 때문에 pre newData는 다른 객체인 것.


// 응용
let pre1 = [100, 200, "hello", null];
let newData1 = [0,1,2,3,...pre,4,];
console.log(pre1);
console.log(newData1);



function sum(a,b,c) {
    return a+b+c;
}
let pre2 = [100, 200, 300];
console.log(sum.apply(null, pre2));
console.log(sum(100,200,300));
console.log(sum(pre2[0],pre2[1],pre2[2]));
// -> 위와 같은 일을 하는 새로운 방법
console.log(sum(...pre));
