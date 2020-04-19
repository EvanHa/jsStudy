// set으로 유니크한 배열만들기

let mySet = new Set();
console.log(toString.call(mySet));

// set : 중복없이 유일한 값을 저장하려고 할때, 이미 존재하는지 체크할 때 유용.

mySet.add("crong");
mySet.add("harry");
mySet.add("crong"); // 이미 crong이 있으니깐, 이 값은 저장 안된다.

if(mySet.has("crong")) {
    console.log("true");
}

mySet.forEach(function(v) {
    console.log(v);
});

mySet.delete("crong");


mySet.forEach(function(v) {
    console.log(v);
});
