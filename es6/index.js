// Object assign 메서드
const prevObj = {
    name : "crong",
    lastTime : "11:20"
}
const myHealth = Object.assign({},prevObj,{
    lastTime : "12:30",
    name : "honux",
    age : 99
});
console.log("myHealth is ", myHealth);

