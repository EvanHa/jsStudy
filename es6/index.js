// setPrototypeOf

// Parent
const healthObj = {
    showHealth : function() {
        console.log("오늘 운동시간 : " + this.healthTime);
    },
    setHealth : function (newTime) {
        this.healthTime = newTime;
    }
}

// Child obj
const heathChildObj = {
    getAge : function () {
        return this.age; 
    }
}

Object.setPrototypeOf(heathChildObj, healthObj);
const childOjb = Object.setPrototypeOf({
    age : 22
}, heathChildObj);
console.log("childobj is ", childOjb);