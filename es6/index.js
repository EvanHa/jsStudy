// map & weakmap
// Array -> set, weakset
// Object -> map, weakmap
// 어레이를 개선할려고 한것이 set, weakset이고
// 객체를 개선하려고 한 것이 map, weakmap 이다

// map은 key/value 로 저장

let wm = new WeakMap();
let myFun = function() {};
// 이 함수가 얼마나 실행됐지?를 알려고 할 때, 호출된 숫자 count하는 함수를 만들어 보자

wm.set(myFun, 0);
console.log(wm);

let count=0;
for(let i=0; i<10; i++) {
    count = wm.get(myFun); // get value
    count++;
    wm.set(myFun, count);
}
console.log(wm.get(myFun));

myFun = null;
console.log(wm.get(myFun));
console.log(wm.has(myFun));


// WeakMap 활용

function Area(height, width) {
    this.height = height;
    this.width = width;
}

Area.prototype.getArea = function () {
    return this. height * this.width;
}

let myarea = new Area(10,20);
console.log(myarea.getArea());
console.log(myarea.height);


const wmap = new WeakMap();

function Area2(height, width) {
    wm.set(this, {height, width});
}
Area2.prototype.getArea = function() {
    const {height, width} = wm.get(this);
    return height * width;
}

let myarea2 = new Area2(10, 20);
console.log(myarea2.getArea());
