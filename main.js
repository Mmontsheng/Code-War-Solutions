//1: Persistent Bugger
function persistence(num) {
    let count = 0;
    while (num.toString().length > 1) {
        num = num.toString().split('').map(a => parseInt(a)).reduce((a, b) => a * b);
        count++;
    }
    return count;
}


// 2: Does my number look big in this?
function narcissistic(value) {
    let narcissisticVal = value.toString().split("").map(a => parseInt(a)).reduce((a, b) => a + Math.pow(b, value.toString().length), 0);
    return narcissisticVal === value ? true : false;
}


