// object 생성

function getObj() {
    let name = "crong";
    const getName = function() {
        return name;
    }
    const setName = function(newname) {
        name = newname;
    }
    const printName = function() {
        console.log(name);
    }
    return {
        getName : getName,
        setName : setName
    }
}

let obj = getObj();
console.log(obj.getName());