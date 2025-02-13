/**
 * @param {string} s
 * @return {string}
 * 
 * given a string s, return the "reversed" string where all characters that are not a letter
 * stay in the same place, and all letters reverse their positions.
 * 
 * Example 1:
 * Input: s = "ab-cd"
 * Output: "dc-ba"
 * 
 * Example 2:
 * Input: s = "a-bC-dEf-ghIj"
 * Output: "j-Ih-gfE-dCba"
 * 
 * Example 3:
 * Input: s = "Test1ng-Leet=code-Q!"
 * Output: "Qedo1ct-eeLg=ntse-T!"
 * 
 * Constraints:
 * 1 <= s.length <= 100
 * s consists of digits, letters (lower and upper case), and '-'.
 * s is guaranteed to be a legal string.
 *
 */

var reverseOnlyLetters = function(s) {
    if (s.length <= 1) return s;
    let sArr = s.split('');
    let leftIndex = 0;
    let rightIndex = s.length - 1;
    
    while (leftIndex < rightIndex) {
        if (/^[a-zA-Z]+$/.test(sArr[leftIndex]) && /^[a-zA-Z]+$/.test(sArr[rightIndex])) {
            [sArr[leftIndex], sArr[rightIndex]] = [sArr[rightIndex], sArr[leftIndex]];
            leftIndex += 1;
            rightIndex -= 1;
        }

        if (!/^[a-zA-Z]+$/.test(sArr[leftIndex])) leftIndex += 1;
        if (!/^[a-zA-Z]+$/.test(sArr[rightIndex])) rightIndex -= 1;
    }
    return sArr.join('');
}

console.log(reverseOnlyLetters("ab-cd"));
console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));
console.log(reverseOnlyLetters("a-bC-dEf=ghlj!!"));