
var reverse = function(x) {
    let rev = 0;
    const INT32_MIN = -(2 ** 31);
    const INT32_MAX = (2 ** 31) - 1;
    while (x !== 0) {
        rev = rev * 10 + x % 10;
        x = Math.trunc(x / 10);
    }
    rev = (rev > INT32_MAX || rev < INT32_MIN) ? 0 : rev;
    return rev;
}

console.log(reverse(1534236469));