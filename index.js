let testArray = [1, 2, 3, 4];
let testObject = {name: 'Joseph', surname: 'Phillips', age: 25, height: 185};
const testFunction = thing => thing;

function produceArray(inputCollection) {
    let values;
    return Array.isArray(inputCollection) ? values = [...inputCollection] : values = [...Object.values(inputCollection)];
};

function myEach(collection, callback) {
    let values = produceArray(collection);
    for (let i = 0; i < values.length; i++) {callback(values[i])};
    return collection;
};

function myMap(collection, callback) {
    let values = produceArray(collection);
    let newCollection = [];
    for (let i = 0; i < values.length; i++) {newCollection.push(callback(values[i]))};
    return newCollection;
};

function myReduce(collection, callback, acc) {
    let values = produceArray(collection);
    if (acc === undefined) {
        acc = values[0];
        values.shift();
    }
    for (let i = 0; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }
    return acc;
};

function myFind(collection, predicate) {
    let values = produceArray(collection);
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            return values[i]
        } 
    }
    return undefined;
};

function myFilter(collection, predicate) {
    let values = produceArray(collection);
    let newArray = [];
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            newArray.push(values[i])
        };
    }
    return newArray;
};

