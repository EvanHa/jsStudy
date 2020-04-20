// rest parameters

// 가변 인자 파라마터가 모두 숫자인지 체크 하는 함수
// 하나라도 숫자가 아닌 경우 false return
function checkNum(...argArray) {
    console.log(toString.call(argArray));
    const result = argArray.every((v)=>typeof v === "number");
    console.log(result);
}

const result = checkNum(10,2,3,4,5,"55");