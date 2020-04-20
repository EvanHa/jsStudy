// ES6 Class (Class Keyword가 생김)

// 기존 방법
function Health(name) {
    this.name = name;
}

Health.prototype.showHealth = function () {
    console.log(this.name + "님 안녕하세요");
}

const h = new Health("crong");
h.showHealth();

// class로 변경
class Health2 {
    constructor(name) {
        this.name = name;
    }

    // prototype으로 들어감.
    showHealth() {
        console.log("안녕하세요" + this.name);
    }
}

const myHealth = new Health2("crong");
myHealth.showHealth();
