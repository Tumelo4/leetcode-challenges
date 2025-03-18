/**
 * 
 * @param {*} s 
 * @returns 
 * 
 * Most Repeated Character
 * given a string s, return the most frequent character ( an alphabet letter) in the String s.
 * Examples 1:
 * Input: s = "abcddefda1111133333333333"
 * Output: "d"
 * 
 * Examples 2:
 * Input: s = "AA0AB0BB0ccc0aa0aw00wo0BBw123123"
 * Output: "B"
 */

var mostRepeatedCharacter = function(s) {
    const hashTable = {};
    const it = s[Symbol.iterator]();
    let myChar = it.next();
    let ch = '';
    let count = 0;
    while (!myChar.done) {
        if (hashTable[myChar.value]) {
            hashTable[myChar.value] = hashTable[myChar.value] + 1;
            if (/^[a-zA-Z]+$/.test(myChar.value) && hashTable[myChar.value] > count) {
                count = hashTable[myChar.value];
                ch = myChar.value;
            }
        } else {
            hashTable[myChar.value] = 1;
            if (/^[a-zA-Z]+$/.test(myChar.value) && ch === '') {
                ch = myChar.value;
                count = 1;
            }
        }
        myChar = it.next();
    }
    return ch;
}

console.log(mostRepeatedCharacter("abcabcbb"));
console.log(mostRepeatedCharacter("abcddefda1111133333333333"));
console.log(mostRepeatedCharacter("1"));
console.log(mostRepeatedCharacter("AA0AB0BB0ccc0aa0aw00wo0BBw123123"));