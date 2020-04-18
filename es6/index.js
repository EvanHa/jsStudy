// ES2015 string에 새로운 메서드들.

let str = "hello world!!!";
let matchstr1 = "hello";
let matchstr2 = "!!";

// 시작하는 문자가 동일한지 확인
console.log(str.startsWith(matchstr1));
// 끝나는 문자가 동일한지 확인
console.log(str.endsWith(matchstr2));
// 해당 단어가 포함되었는지 확인
console.log(str.includes("world"));