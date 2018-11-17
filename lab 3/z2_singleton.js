const Singleton = (() => {
    let instance;
    const createInstance = () => instance = Date.now();
    return {
        getInstance: () => instance || createInstance()
    }
})();
console.log('Testing Singleton!');
console.log('Creating i1');
let i1 = Singleton.getInstance();
console.log('i1 was created at time[Number: ' + i1 + ']');
console.log('Creating i2 at time: ' + Date.now());
let i2 = Singleton.getInstance();
console.log('i2 was created at time[Number: ' + i2 + ']');
console.log('Checking if i1 and i2 are the same variable: ', i1 === i2);
console.log('Creating i3 in different execution context at time: ', Date.now());

(() => {
    let i3 = Singleton.getInstance();
    console.log('i3 was created at time[Number: ' + i3 + ']');
    console.log('Checking if i1 and i3 are the same variable: ', i1 === i3);
    console.log('Checking if i2 and i3 are the same variable: ', i2 === i3);
    console.log('Checking if i1 and i2 are the same variable: ', i1 === i2);
})();
