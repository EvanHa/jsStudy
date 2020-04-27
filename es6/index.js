// 함수형으로 전환하기
import _ from "./_.js";


var users = [
  { id: 1, name: 'ID', age: 36 },
  { id: 2, name: 'BJ', age: 32 },
  { id: 3, name: 'JM', age: 32 },
  { id: 4, name: 'PJ', age: 27 },
  { id: 5, name: 'HA', age: 25 },
  { id: 6, name: 'JE', age: 26 },
  { id: 7, name: 'JI', age: 31 },
  { id: 8, name: 'MP', age: 23 }
];

// 1. 명령형 코드
  // 1. 30세 이상인 users를 거른다.
var temp_users = [];
for (var i = 0; i < users.length; i++) {
  if (users[i].age >= 30) {
    temp_users.push(users[i]);
  }
}
console.log(temp_users);

// 2. 30세 이상인 users의 names를 수집한다.
var names = [];
for (var i = 0; i < temp_users.length; i++) {
  names.push(temp_users[i].name);
}
console.log(names);

// 3. 30세 미만인 users를 거른다.
var temp_users = [];
for (var i = 0; i < users.length; i++) {
  if (users[i].age < 30) {
    temp_users.push(users[i]);
  }
}
console.log(temp_users);

// 4. 30세 미만인 users의 ages를 수집한다.
var ages = [];
for (var i = 0; i < temp_users.length; i++) {
  ages.push(temp_users[i].age);
}
console.log(ages);



//외부 다형성
// 1. array_like, arguments, document.querySelectorAll
// 아래 map, filter는 함수가 아니라 method이다. 
// [1,2,3,4] 객체의 method라는 말이다.
// 즉, 어레이여야 사용할 수 있는 method이다.
// 자바스크립트에는 array like 가 존재한다. 배열처럼 보이지만, 사실은 배열이 아닌것이다.
// 이런 array like에는 map, filter가 존재하지 않는다.
// map, filter는 array에 존재하는 method이기 때문.
// 함수형 프로그래밍에서는 다형성이 가능하므로, 따로 만든 map, filter에서는 모두 사용할 수 있다.
console.log(
  [1,2,3,4].map(function(val){
      return val * 2;
  })
);

console.log(
  [1,2,3,4].filter(function(val){
      return val % 2;
  })
);

console.log(document.querySelectorAll('*'));
console.log(
  _._map(document.querySelectorAll('*'), function(node){
    return node.nodeName;
  })
);

// 내부 다형성
// predi, iter, mapper
_._map([1,2,3,4], function(v){
  return v+10;
});