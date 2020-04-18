// let 과 closure

var list = document.querySelectorAll("li");
for (var i=0; i<list.length; i++) {
    list[i].addEventListener("click", function () {
        console.log(i + "번째 리스트 입니다.");
    });
}

// for문 에서 i를 var로 할 경우, 어떤 항목에도 클릭이벤트 발생시 호출되는 console log상의 i는 동일한 값이다.
// 이는 closure 때문인데, var 대신 let 으로 변경 해 줌으로 써 해결 가능 하다.

