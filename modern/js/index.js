// 반복문
// for
// for(let i=0; i<10; i++) {
//     console.log(i);
// }

// const names = ['멍뭉이', '야옹이', '멍뭉이'];

// for (let i=0; i < names.length; i++) {
//     console.log(names[i]);
// }


// while
// let i=0;
// while (i < 10){
//     console.log(i);
//     i++;
// }

// let isFun=false;
// while(!isFun) {
//     console.log(i);
//     i++;
//     if (i==30) {
//         isFun=true;
//     }
// }

// for of
// const numbers=[10,20,30,40,50];

// for (let number of numbers) {
//     console.log(number);
// }

// for (let i=0; i<numbers.length; i++) {
//     console.log(numbers[i]);
// }

// for in
// const numbers=[10,20,30,40,50];
// const doggy = {
//     name: '멍멍이',
//     sound: '멍멍',
//     age: 2
// };

// console.log(Object.entries(doggy));
// console.log(Object.keys(doggy));
// console.log(Object.values(doggy));

// for (let key in doggy) {
//     console.log(`${key}: ${doggy[key]}`);
// }


// break, continue
// for (let i=0; i<10; i++) {
//     if (i === 2) continue;
//     console.log(i);
//     if (i === 5) break;
// }

function sumOf(numbers) {
    let sum=0;
    for (let i=0; i<numbers.length;i++) {
        sum += numbers[i];
    }
    return sum;
}

function biggerThanThree(numbers) {
    let res=[];
    for (let i=0;i<numbers.length;i++) {
        if (numbers[i] > 3) {
            res.push(numbers[i]);
        }
    }
    return res;
}

const result=sumOf([1,2,3,4,5]);
console.log(result);
const numbers=[1,2,3,4,5,6,7];
console.log(biggerThanThree(numbers));
