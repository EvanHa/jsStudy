// Destructuring 활용 json parsing

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

let [,mbc] = news;
console.log(mbc);

let {title, imgurl} = mbc;
console.log(title);
console.log(imgurl);

let [, {title:title1, imgurl:imgurl1}] = news;
console.log(title1);
console.log(imgurl1);
