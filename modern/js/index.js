// 객체
// function Animal(type, name, sound) {
//     this.type = type;
//     this.name = name;
//     this.sound = sound;
//     this.say = function() {
//         console.log(this.sound);
//     }
// };

// say는 공통적으로 사용되니깐, prototype으로 변경
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
};

Animal.prototype.say = function() {
    console.log(this.sound);
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();