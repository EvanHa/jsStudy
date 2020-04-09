// 자료형
// 1. 숫자형(number type) : floating point number
//      - Infinity, -Infinity, NaN
//      - BigInt
// 2. 문자형
//  - 큰따옴표: "Hello"
//  - 작은따옴표: 'Hello'
//  - 역 따옴표(백틱, backtick): `Hello`
//     -> 변수나 표현식을 감싼 후 ${} 안에 넣어주면, 아래와 같이 원하는 변수나 표현식을 문자열 중간에 손쉽게 넣을 수 있음
// let name = "John";
// // 변수를 문자열 중간에 삽입
// alert( `Hwllo, ${name}!`);
// // 표현식을 문자열 중간에 삽입
// alert( `the result is ${1+2}`);

// 3. 불린형 (Boolean)
// 4. null
//  - nothing, empty, unknown을 나타내는데 사용
// 5. undefined
//  - let x; alert(x); // "undefined"
// 6. Object
//  - 하나의 데이터(문자열, 숫자등)만 담을수 있는 것이 '원시형(primitive type)'이라고 부르는데, 
//  - 객체는 이와 달리 다양한 데이터를 담을수 있음.
//  - 객체는 중괄호 {…}를 이용해 만들 수 있습니다. 중괄호 안에는 ‘키(key): 값(value)’ 쌍으로 구성된 프로퍼티(property)를
//  - 여러 개 넣을 수 있는데, 키엔 문자형, 값엔 모든 자료형이 허용됩니다. 프로퍼티 키는 ‘프로퍼티 이름’ 이라고도 부릅니다.
// let user = new Object(); // '객체 생성자' 문법
// let user = {};  // '객체 리터럴' 문법
//  - 리터럴과 프로퍼티
//  - 중괄호 {...} 안에는 ‘키: 값’ 쌍으로 구성된 프로퍼티가 들어갑니다.
// let user = {     // 객체
//     name: "John",  // 키: "name",  값: "John"
//     age: 30        // 키: "age", 값: 30
// };
// // 프로퍼티 값 얻기
// alert( user.name ); // John
// alert( user.age ); // 30
// // delete 연산자를 사용하면 프로퍼티를 삭제할 수 있습니다.
// delete user.age;
// 여러 단어를 조합해 프로퍼티 이름을 만든 경우엔 프로퍼티 이름을 따옴표로 묶어줘야 합니다.
// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true  // 복수의 단어는 따옴표로 묶어야 합니다.
// };
//  - 계산된 프로퍼티 : 객체 리터럴 안의 프로퍼티 키가 대괄호로 둘러싸여 있는 경우
let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");
let bag = {
  [fruit]: 5, // 변수 fruit에서 프로퍼티 이름을 동적으로 받아 옵니다.
};
alert( bag.apple ); // fruit에 "apple"이 할당되었다면, 5가 출력됩니다.
  

// 7. Symbol
//  - 객체의 고유한 식별자(unique identifier)를 만들때 사용