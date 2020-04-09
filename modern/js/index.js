// 변수 선언 방법 3가지
// let, const, var
// 변수는 let 키워드를 사용

// var 와 let의 차이
// let과 const는 렉시컬 환경 측면에서 정확히 같은 방식으로 동작. 반면, var는 다른 방식으로 동작.
// 차이1. var는 블록 스코프가 없음. 변수 스코프가 함수 스코프이거나 전역 스코프이다.
// 블록 기준으로 스코프가 생기지 않기 때문에 블록 밖에서 접근 가능
// case var
// if (true) {
//     var test = true; // 'let' 대신 'var'를 사용했습니다.
// }
// alert(test); // true(if 문이 끝났어도 변수에 여전히 접근할 수 있음)

// // case let
// if (true) {
//     let test = true; // 'let'으로 변수를 선언함
// } 
// alert(test); // Error: test is not defined

// 차이2. 함수 시작과 함께 처리되는 'var'
// var 변수의 선언은 호이스팅이라고 불리는 변수 끌어올림 처리가 함수 사직과 함께 처리 된다.
// 예제. 아래 동작은 정상동작하며, Hello가 찍히는 경고창이 뜬다. (변수 선언 동작이 if (false) 안에 있는데도 처리됨. 호이스팅때문)
function sayHi() {
    phrase = "Hello"; // (*)

    if (false) {
        var phrase;
    }
    alert(phrase);
}
sayHi();