
const array = [
    {x: 'foo', y: 8},
    {x: 'bar', y: 3},
    {x: 'baz', y: 7},
]

const foo = array.reduce(
    (acc, item) => ({
        ...acc,
        [item.x]: item.y
    }),
{})

console.log(foo)