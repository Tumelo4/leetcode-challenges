/**
 * You are given two string arrays words1 and words2.

A string b is a subset of string a if every letter in b occurs in a including multiplicity.

For example, "wrr" is a subset of "warrior" but is not a subset of "world".
A string a from words1 is universal if for every string b in words2, b is a subset of a.

Return an array of all the universal strings in words1. You may return the answer in any order.

 

Example 1:

Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"]
Output: ["facebook","google","leetcode"]
Example 2:

Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["l","e"]
Output: ["apple","google","leetcode"]
 

Constraints:

1 <= words1.length, words2.length <= 104
1 <= words1[i].length, words2[i].length <= 10
words1[i] and words2[i] consist only of lowercase English letters.
All the strings of words1 are unique.
 */

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    let ans = []
    let newArr = new Array(words2.length)
    let arr = new Array(26).fill(0)
    for(let i=0;i<words2.length;i++){
        let newArr = new Array(26).fill(0)
        for(let j of words2[i]){
            newArr[j.charCodeAt(0)-97]++
            arr[j.charCodeAt(0)-97] = Math.max(arr[j.charCodeAt(0)-97], newArr[j.charCodeAt(0)-97])
        }

    }
    for(let i of words1){
        let narr = new Array(26).fill(0)
        for(let j of i){
            narr[j.charCodeAt(0)-97]++
        }
        let canTake = true
        for(let i=0;i<26;i++){
            if(narr[i] < arr[i]){
                canTake = false
                break
            }
        }
        if(canTake){
            ans.push(i)
        }
    }
    return ans
};