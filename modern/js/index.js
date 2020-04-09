// 세미콜론을 삽입하지 않을경우, 아래 구분은 세미콜론 자동 삽입 처리가 되지 않는다.
// 이유는 [] 앞에서는 세미콜론이 있다고 인식하지 않기 때문
// alert( 'Hello, world!' )[1, 2].forEach(alert)
// 세미콜론을 반드시 삽입.
alert( 'Hello, world!' );
[1, 2].forEach(alert)




