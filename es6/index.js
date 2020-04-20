// this context of arrow function

const myObj = {
    runTimeout() {
        setTimeout(function(){
            console.log(this === window);
            this.printData();
        }.bind(this), 200);
    },
    printData() {
        console.log("hi codesquad!");
    }
}

const myObj1 = {
    runTimeout() {
        setTimeout(()=>{
            console.log(this === window);
            this.printData();
        }, 200);
    },
    printData() {
        console.log("hi codesquad!");
    }
}

myObj.runTimeout();
myObj1.runTimeout();
