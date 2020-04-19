function print() {
    let data = document.querySelectorAll("li");
    let listArray = Array.from(data);
    let eArray = listArray.filter(function(value) {
        return value.innerText.includes("e");
    });
    return eArray;
}

console.log(print());