const array1 = [{ name: "foo"}, { name: "bar"}, { name: "baz"}];

const array2 = new Array(array1.length).fill({});

array2.forEach((obj, idx) => {
    obj.name = array1[idx].name
    obj.position = idx
});

const array3 = array1.map((obj, idx) => ({ ...obj, position: idx }));

const array4 = array1.slice();

array4.forEach((obj, idx) => {
    obj.position = idx
});

console.log(array1, array2, array3, array4);