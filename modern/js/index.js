// 배열 내장함수
const superheroes=['아이언맨','캡틴아메리카','토르','닥터스트레인지'];

function print(hero) {
    console.log(hero);
}

superheroes.forEach(print);
superheroes.forEach(function(hero){
    console.log(hero);
});
superheroes.forEach((hero)=>{
    console.log(hero);
});