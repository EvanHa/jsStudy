// this

const dog = {
    name: '멍멍이',
    sound: '멍멍!',
    say: function() { // arrow function을 사용할 경우, this가 dog와 연결되지 않음.
        console.log(this.sound);
    }
};

const cat = {
    name: '야옹이',
    sound: '야옹~'
};

cat.say = dog.say;
dog.say();
cat.say();

const catSay = cat.say;
catSay(); // catSay에서는 this가 뭔지 모름. 할당된게 없으니깐