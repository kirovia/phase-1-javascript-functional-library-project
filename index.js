// FUNCTIONS FOR ALL COLLECTIONS

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

function mySize(collection) {
    let values = produceArray(collection);
    let valuesSize = 0;
    for (let i = 0; i < values.length; i++) {
        valuesSize++
    }
    return valuesSize;
};

// FUNCTIONS FOR ARRAYS

function myFirst(array, integer = 0) {
    let newArray = [];
    if (integer === 0) {
        return array[0]
    } else {
        for (let i = 0; i < integer; i++) {
            newArray.push(array[i])
        }
        return newArray
    }
};

function myLast(array, integer = 0) {
    let newArray = [];
    if (integer === 0) {
        return array[array.length - 1]
    } else {
        for (let i = integer; i > 0; i--) {
            newArray.push(array[array.length - i])
        }
        return newArray
    }
};

// FUNCTIONS FOR OBJECTS

function myKeys(object) {
    let newArray = [];
    for (const key in object) {newArray.push(key)};
    return newArray;
};

function myValues(object) {
    let newArray = [];
    for (const key in object) {newArray.push(object[key])};
    return newArray;
};