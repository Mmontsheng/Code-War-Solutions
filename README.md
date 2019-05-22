# Code War Solutions in JavaScript



>## Persistent Bugger
>>Click [here](https://www.codewars.com/kata/persistent-bugger/train/haskell) to view challenge 
>>###solution
>>`function persistence(num) {
    let count =0;
    while (num.toString().length > 1) {
        num = num.toString().split('').map(a => parseInt(a)).reduce((a,b)=>a*b); ds
        count++;
    }
    return count;
}`
