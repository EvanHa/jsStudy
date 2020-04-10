// Truthy (true 같은거) 
function print(person) {
    //if ((person === undefined) || (person === null)) { 
    if (!person) {
        return ;
    }
    console.log(person.name);
}

const person= {
    name: 'John',
};

print();


// Falsy (false 같은거)
// javascript에서는 undefined, null을 false로 간주한다. 그래서 아래 구문은 true가 찍힘..
// 아래 내용을 제외하고는 Truthy한 값으로 취급
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);
console.log(!false);
