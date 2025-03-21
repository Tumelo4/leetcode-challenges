/**
 * A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become . Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

Function Description

Complete the function rotLeft in the editor below.

rotLeft has the following parameter(s):

int a[n]: the array to rotate
int d: the number of rotations
Returns

int a'[n]: the rotated array
Input Format

The first line contains two space-separated integers  and , the size of  and the number of left rotations.
The second line contains  space-separated integers, each an .

Constraints

Sample Input

5 4
1 2 3 4 5
Sample Output

5 1 2 3 4
Explanation

When we perform d=4 left rotations, the array undergoes the following sequence of changes:
 */

/**
 * 
 * @param {*} a 
 * @param {*} d 
 * @returns 
 */

const rotLeft = (a, d) => {
    // Write your code here
    let rotation = d % a.length;
    const result = [];
    for (let idx = rotation; idx < a.length; idx++) {
        result.push(a[idx]);
    }
    for (let idx = 0; idx < rotation; idx++) {
        result.push(a[idx]);
    }
    return result;
}

// const rotLeft = (a, d) => {
//     // Write your code here
//     let rotation = d % a.length;
//     return a.map((_, idx) => a[(idx + rotation) % a.length]);
// }

console.log(rotLeft([1, 2, 3, 4, 5], 4))