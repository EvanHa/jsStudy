// setPrototypeOf

const healthObj = {
    showHealth : function() {
        console.log("오늘 운동시간 : " + this.healthTime);
    },
    setHealth : function (newTime) {
        this.healthTime = newTime;
    }
}

const myHealth = {
    name : "crong",
    lastTime : "11:20"
}

const newObj = Object.setPrototypeOf(myHealth, healthObj); // healthObj의 함수들이 myHealth의 prototype으로 들어감.
console.log("myhealth is", myHealth);
console.log("healthObj is", healthObj);
console.log(newObj);

