// array for of

let data = [1,2,undefined,NaN,null,""];
data.forEach(function(value){
    console.log(value);
});

Array.prototype.getIndex = function() {};
for(let idx in data) {
    console.log(data[idx]);
};
// for in을 썼을때는 상위(prototype)의 것도 순해해서 출력해버린다.

for(let value of data) {
    console.log(value);
}

let str = "hello world!!!";
for(let value of str) {
    console.log(value);
}