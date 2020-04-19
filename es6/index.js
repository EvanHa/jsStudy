// arrow function

setTimeout(() => {
    console.log("set timeout");
}, 1000);

let newArr = [1,2,3,4,5].map(function(value, index, object){
    return value * 2;
});

console.log(newArr);

let newArr2 = [1,2,3,4,5].map((v)=> (v*2));
console.log("arrow2", newArr2);

