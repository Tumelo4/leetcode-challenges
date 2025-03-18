
var lenghtOfLongestSubstring = function(s) {
    if (s.length <= 1) return s.length;

    // track the longest value
    let longestValue = 0;
    // track left index
    let leftIndex = 0;
    // track right index
    let rightIndex = 0;
    // create a hash map to track the current characters
    const hashTable = {};
    // A generator function that provides characters from the string one at a time using Symbol.iterator
    const it = s[Symbol.iterator]();
    // get the first character
    let myChar = it.next(); // { value: 'a', done: false }
    // Iterate over the string to track characters
    while (!myChar.done) {
        const count = rightIndex + 1;
        // check if the character is in the hash table
        if (hashTable[myChar.value] && hashTable[myChar.value] >= leftIndex) {
            // update the left index
            leftIndex = hashTable[myChar.value];
        }
        const nextValue = count - leftIndex;
        if (nextValue > longestValue) longestValue = nextValue;
        // console.log(myChar.value, leftIndex, rightIndex, longestValue);
        // hashTable[key] = value which is the position of the character
        hashTable[myChar.value] = count;
        // console.log(hashTable);
        rightIndex++;
        myChar = it.next();
    }
    // return the longest value
    return longestValue;

}

console.log(lenghtOfLongestSubstring("abcabcbb"));
console.log(lenghtOfLongestSubstring("bbbbb"));
console.log(lenghtOfLongestSubstring("pwwkew"));
console.log(lenghtOfLongestSubstring(""));
console.log(lenghtOfLongestSubstring(" @.."));