// Object assign 메서드
const healthObj = {
    showHealth : function() {
        console.log("오늘 운동시간 " + this.healthTime);
    }
}

const myHealth = Object.create(healthObj);
myHealth.healthTime = "11:20";
myHealth.name = "crong";

console.log(myHealth);


const myHealth1 = Object.assign(Object.create(healthObj),{
    name : "crong",
    lastTime : "11:20"
});
console.log("myHealth is ", myHealth);
