/*
function test() {
    for (let i = 1; i < 3; i++){//一个大括号就是一个块级作用域
        console.log(i)//1,2
    }
    console.log(i)//not defined
}
*/

function last() {
    const PI = 3.1415926;
    //PI = 8;
    console.log(PI)//会报错 不允许修改数值

    const k = {
        a:1
    };
    k.b = 3;
    console.log(k)//因为是引用类型 对象本身可以变   指针不变而已
}

//test();
last();