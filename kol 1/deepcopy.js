const deepCopy = (obj) => {
    let temp = {}
    const keys = Object.keys(obj);
    for (const k of keys) {
        if (obj[k] instanceof Object)
            temp[k] = deepCopy(obj[k]);
        else
            temp[k] = obj[k];
    }
    return temp;
}
let original = {
    name: 'Jack',
    age: 20,
    rel: {
        new: 20,
        obj: {
            start: 'new'
        }
    }
};
let ref = original;
let clone = deepCopy(original);
console.log("Original:\t", original);
console.log("Reference:\t", ref);
console.log("Clone:\t\t", clone);

original.name = "Stone";
original.rel.new = 10;
original.rel.obj.start = "Start";

console.log("Original:\t", original);
console.log("Reference:\t", ref);
console.log("Clone:\t\t", clone);