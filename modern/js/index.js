// async await
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
    console.log('안녕하세요');
    await sleep(1000);
    console.log('반갑습니다.');
    return true;
}

process().then(value => {
    console.log(value);
});

async function makeError() {
    await sleep(1000);
    const error = new Error();
    throw error; // error를 생성할 때는 throw를 사용
}

async function process2() {
    try {
        await makeError();
    } catch (e) {
        console.error(e);
    }
}

process2();
