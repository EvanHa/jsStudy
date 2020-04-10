// Promise
// 비동기작업을 더 편하게 처리할 수 있도록 지원해주는 ES6기능

// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         //resolve('result');
//         reject(new Error());
//     },1000);
// });

// myPromise.then(result=>{
//     console.log(result);
// }).catch(e=>{
//     console.error(e);
// });


// function increaseAndPrint(n, callback) {
//     setTimeout(()=>{
//         const increased = n +1;
//         console.log(increased);
//         if (callback) {
//             callback(increased);
//         }
//     }, 1000);
// }

function increaseAndPrint(n) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const value = n+1;
            if (value === 5) {
                const error = new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        }, 1000);
    });
}

increaseAndPrint(2).then(n=>{
    return increaseAndPrint(n);
}).then(n=>{
    return increaseAndPrint(n);
}).catch(e=>{
    console.error(e);
})