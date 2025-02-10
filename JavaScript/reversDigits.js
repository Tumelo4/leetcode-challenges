
var reversDigits = function(x) {
    const INT32_MIN = -(2 ** 31);
    const INT32_MAX = (2 ** 31) - 1;
    if (x < INT32_MIN || INT32_MAX < x) return 0;
    const unsignedNum = (x < 0) ? -1 : 1;
    let s = x.toString().split("");
    s.reverse();
    x = parseInt(s.join("")) * unsignedNum;
    if (x < INT32_MIN || INT32_MAX < x) return 0;
    return x;
}

console.log(reversDigits(-123));