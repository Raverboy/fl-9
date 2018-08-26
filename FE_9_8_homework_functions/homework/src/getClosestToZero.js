function getClosestToZero(...restArgs) {
    let x = [...restArgs];
    return console.log(x.sort(function (min, max) {
        return Math.abs(min) > Math.abs(max);
    })[0]);
}
