{ // es6 规定八进制的写法 不再是 一个 0
    console.log('B', 0B111110111) // 8进制 零B
    console.log(0o767) // 503 八进制
}
// Number的新方法
{
    console.log(isNaN('0')) // false
     console.log(Number.isNaN(0)) // false
    console.log(Number.isFinite(1 / 0)) // false
    console.log(Number.isFinite(5 / 1)) // true

    console.log(Number.isInteger(25.0)) // true
    console.log(Number.isInteger(25.1)) // false
    console.log(Number.isSafeInteger(1 / 0)) // false
    console.log(Number.isSafeInteger('0')) // false
    console.log(Number.isSafeInteger(10000000000))  // true

    // 取整
    console.log(Math.trunc(4.6)) //4
    console.log(Math.trunc(-4.5)) // -4

    // 判断是正数、负数还是0 分别对应的结果为 1 -1 0

    console.log(Math.sign(-5)) // -1
    console.log(Math.sign(5)) // 1
    console.log(Math.sign(0)) // 0


    // 立方根
    console.log(Math.cbrt(-8)) // -2
    
}