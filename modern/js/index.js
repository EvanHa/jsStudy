// promise.all, promise.race
// promise all 은 배열의 함수들이 모두 끝나면 결과를 리턴한다.
// promise race는 배열의 함수들 중 가장 빨리끝나는 함수의 결과를 리턴한다.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
};

const getRabbit = async () => {
    await sleep(500);
    return '토끼';
};

const getTurttle = async () => {
    await sleep(3000);
    return '거북이';
};

async function process() {
    try {
        const result = await Promise.all([getDog(), getRabbit(), getTurttle()]);
        console.log(result);
    } catch (e) {
        console.error(e);
    }

    try {
        const [dog, rabbit, turttle] = await Promise.all([getDog(), getRabbit(), getTurttle()]);
        console.log(dog);
        console.log(rabbit);
        console.log(turttle);
    } catch (e) {
        console.error(e);
    }

    try {
        const first = await Promise.race([getDog(), getRabbit(), getTurttle()]);
        console.log(first);
    } catch (e) {
        console.error(e);
    }
}

process();