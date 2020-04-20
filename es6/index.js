// proxy.

const myObj = { name: 'crong' };
const proxy = new Proxy( myObj, {});

console.log(proxy.name);