// function parameter
function calculateCircleArea(r=1) {
    return Math.PI * r * r;
}

const area=calculateCircleArea();
console.log(area);

const calculateCircleArea1 = (r=1) => { return Math.PI * r * r; };
console.log(calculateCircleArea1());
