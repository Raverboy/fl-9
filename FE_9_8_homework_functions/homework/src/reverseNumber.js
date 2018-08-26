function reverseNumber(n) {
    n = n + '';
    if (n < 0) {
        return -reverseNumber(-n)
    }
    return Math.ceil(n.split('').reverse().join(''));
}
