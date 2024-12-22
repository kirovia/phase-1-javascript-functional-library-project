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
    let newCollection;
    for (let i = 0; i < values.length; i++) {

    };
    return newCollection;
}