// from method

function addMark() {
    let newData = [];

    // 가변적 parameter 사용시에는 arguments를 이용할 수 있다.
    for (let i=0; i< arguments.length; i++ ) {
        newData.push(arguments[i] + "!");
    }
    console.log(newData);
}

addMark(1,2,3,4,5);

// 위에 사용한 arguments는 배열은 아니다. 그래서 배열의 map을 사용할 수 없다.
// 이 값을 새로운 배열에 넣어서 만들때 from을 사용 하면 유용하다.
function addMark_Map() {
    let newArray = Array.from(arguments);
    let newData = newArray.map(function(value){
        return value + "!";
    });
    console.log(newData);
}

addMark_Map(1,2,3,4,5,6,7,8,9);