{
    let a, b, rest;
    [a, b] = [1, 2]
    console.log(a, b) // 1, 2
}

{
    // 数组
    let a, b, rest;
    [a, b, ...rest] = [1,2,3,4,5,6]
    console.log(a, b ,rest) // //1,2,[3,4,5,6]
}


{
    let a,b,rest, c;
    [a, b, c=3] = [1, 2]
    console.log(a,b,c) // 1, 2, 3
}
// 使用场景1 变量值的交换

{
    let a = 1, b = 2;
    [a,b] = [b,a]
    console.log(a, b) // 2, 1
}


// 场景2 接收返回值？
{
    function f() {
        return [1, 2,3,4,5]
    }

    let a,b,c;
    [a, b, , ,c] = f()
    console.log(a,b, c ) // 1 2 5
}


// 场景3 适用于不知道函数有返回数组有多少个值

{
    function gf() {
        return [1, 2,3,4,5]
    }
    let a, b;
    [a, ...b] = gf()
    console.log(a, b) //1  [2, 3, 4, 5]
}


// 解构赋值
{
    let o = {p: 400, q: true}
    let {p, q} = o;
    console.log(p, q)
}


{
    let {a=10, b=5} = {a:3}
    console.log(a, b) // 3 5
}


