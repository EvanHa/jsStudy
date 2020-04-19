// weakset
// 참조를 가지고 있는 개체만 저장이 가능.
// 객체형태를 중복없이 저장하려고 할 때 유용하다.

let arr = [1,2,3,4];
let arr2 = [5,6,7,8];
let obj = {arr, arr2};
let ws = new WeakSet();

ws.add(arr);
//ws.add(111);
//ws.add("111");
//ws.add(null);
ws.add(function(){});
ws.add(arr2);
ws.add(obj);

arr = null; // 참조를 읽기 때문에, ws.has(arr)을 해보면 false가 출력됨

console.log(ws);
console.log(ws.has(arr), ws.has(arr2));
