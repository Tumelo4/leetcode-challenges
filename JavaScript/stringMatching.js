/**
 * Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

A substring is a contiguous sequence of characters within a string

 

Example 1:

Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.
Example 2:

Input: words = ["leetcode","et","code"]
Output: ["et","code"]
Explanation: "et", "code" are substring of "leetcode".
Example 3:

Input: words = ["blue","green","bu"]
Output: []
Explanation: No string of words is substring of another string.
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 30
words[i] contains only lowercase English letters.
All the strings of words are unique.
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    const output = [];
    const length = words.length;

    for (let firstIndex = 0; firstIndex < length; firstIndex++) {
        for (let secondIndex = 0; secondIndex < length; secondIndex++) {
            if ( firstIndex !== secondIndex && words[secondIndex].includes(words[firstIndex])) {
                if (!output.includes(words[firstIndex])) output.push(words[firstIndex]);
                break;
            }
        }
    }
    return output;
};

console.log(stringMatching(["mass","as","hero","superhero"]));
console.log(stringMatching(["leetcode","et","code"]));