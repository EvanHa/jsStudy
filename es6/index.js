// template

const data = [
    {
        name : 'coffee-bean',
        order : true,
        items : ['americano', 'milk', 'green-tea']
    },
    {
        name : 'starbucks',
        order : false,
    },
    {
        name : 'coffee-king',
        order : true,
        items : ['americano', 'latte']
    }
];

// json으로 응답을 받고,
// javascript object로 변환한 후에 어떠한 데이터처리 조작을 한 후에 dom에 추가!
// 데이터 + HTML문자열의 결합이 필요하기 때문에,,,

const template = `<div>welcome ${data[0].name} !!</div>`;
console.log(template);

// Tagged template literals
function fn(tags, name, items) {
    console.log(tags);
    if (typeof items === "undefined") {
        items = "주문가능한 상품이 없습니다.";
    }
    return (tags[0] + name + tags[1] + items + tags[2]);
}

const template2 = fn`<div>welcome ${data[1].name} !!</div>
<h2> 주문 가능 항목</h2>
<div>${data[1].items}</div>`;

console.log(template2);

data.forEach(element => {
    let template = fn`<h2> welcome ${element.name} !!</h2>
    <h4>주문가능항목</h4>
    <div>${element.items}</div>`;
    document.querySelector("div").innerHTML += template;
});
