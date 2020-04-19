// Destructuring and Set (create lotto number)

const SETTING = {
    name : "LUCKY LOTTO",
    count : 6,
    maxNumber : 45    
}

let result_set = new Set();

function getRandomNumber(maxNumber) {
    // 랜덤한 유일한 숫자값을 추출
    // TODO:
    let prev_size = result_set.size;
    let curr_size = prev_size;
    while(curr_size === prev_size) {
        let new_number = (Math.floor(Math.random() * maxNumber)) + 1; // 1 ~ maxNumber
        result_set.add(new_number);
        curr_size = result_set.size;
    }
}

let {count:cnt, maxNumber:max} = SETTING;
for (let i=0; i<cnt; i++) {
    getRandomNumber(max);
}

console.log(result_set);



