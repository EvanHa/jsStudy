// Destructuring 활용 event 객체 전달

let news = [
    {
        "title":"sbs",
        "imgurl":"blabla",
        "newslist" : [
            "1",
            "2",
            "3"
        ]
    },
    {
        "title": "mbc",
        "imgurl" : "dddd",
        "newslist" : [
            "5",
            "6",
            "7"
        ]
    }
];

function getNewsList([,{newslist}]) {
    console.log(newslist);
}

getNewsList(news);



document.querySelector("div").addEventListener("click",function({target}) {
    console.log(target.innerText);
});