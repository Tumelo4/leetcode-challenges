/**
 * 
 * You are given an array of strings words and a string pref.

Return the number of strings in words that contain pref as a prefix.

A prefix of a string s is any leading contiguous substring of s.

 

Example 1:

Input: words = ["pay","attention","practice","attend"], pref = "at"
Output: 2
Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".
Example 2:

Input: words = ["leetcode","win","loops","success"], pref = "code"
Output: 0
Explanation: There are no strings that contain "code" as a prefix.
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length, pref.length <= 100
words[i] and pref consist of lowercase English letters.
 */
/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
const containPrefix_pref = (word, pref) => {
    return (word.substring(0, pref.length) === pref);
}
var prefixCount = function(words, pref) {
    let leftIndex = 0;
    let rightIndex = words.length-1;
    let count  = 0;

    while (leftIndex <= rightIndex) {
        let leftIndex_status =  containPrefix_pref(words[leftIndex], pref);
        if (leftIndex === rightIndex && leftIndex_status === true) count++;
        else {
            if (leftIndex_status) count++;
            if (containPrefix_pref(words[rightIndex], pref)) count++;
        }
        leftIndex++;
        rightIndex--;
    }
    return count;
};