{
    //默认值后面不能有没有默认值的变量了
    function test(x, y='man') {
        console.log(x + ' ' + y)
    }

    test('hello') // hello man
    test('hello', 'guys') // hello guys

    // 还可以以其他参数为默认值

    function testmore(x, y=x) {
        console.log(x + ' ' + y)
    }

    testmore('jo') // jo jo
}

// rest 参数
// Rest 参数接受函数的多余参数，组成一个数组，放在形参的最后
// rest和arguments的区别
// 1. rest参数只包括没有给出名字的参数 arguments包括所有的参数
// 2.arguments类数组 rest是真数组


{
    function f(...arg) {
        for (let [index, value] of  arg.entries()) {
            console.log([index, value])
        }
    }

    f('n', 1, 5, {a: 14}, true)
}

// 与rest相反
{
    console.log('...', ...[1,2,3]) //  1 2 3
}


// 箭头函数

{
    let arrow = (value) => console.log(value + 1)
    arrow(2)
}


{//尾调用 提升性能用的
    function tail(x){
        console.log('tail',x);
    }
    function fx(x){
        return tail(x)//函数的最后一句话是不是一个函数 这里的tail是个函数
    }
    fx(123)
}
