
{
    // 简洁表示法
    let o=1;
    let k=2;
    let es5={
        o:o,
        k:k
    };
    let es6={
        o,
        k
    };
    console.log(es5,es6);

    let es5_method={
        hello:function(){
            console.log('hello');
        }
    };
    let es6_method={
        hello(){
            console.log('hello');
        }
    };
    console.log(es5_method.hello(),es6_method.hello());
}


{
    // 属性表达式
    let a='b';
    let es5_obj={
        a:'c',
        b:'c'
    };

    let es6_obj={
        [a]:'c'//相当于b:'c'  因为这里的a='b' 也就是es6中对象的key值可以是个表达式
    }

    console.log(es5_obj,es6_obj);

}


{
    // 新增API
    console.log('字符串',Object.is('abc','abc'),'abc'==='abc');//和 ===功能一样  true  true
    console.log('数组',Object.is([],[]),[]===[]);//false false
}

// Object.assign 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。
//   复制的对象如果只有一层的话是深拷贝  之后都是浅拷贝
{
    let o1 = {
        a: 1,
        b: 2
    }


    let o2 = {
        c: 3
    }

   Object.assign(o2, o1)
    console.log(o2) //  {c: 3, a: 1, b: 2}



// 超过一层就是浅拷贝
    let s ={name: {asd: '123'}}
    let d = Object.assign({}, s)
    d.name.asd = '123456789'
    console.log(d, s)
}


{
    // 对象遍历
    let test={k:123,o:456};

    for (let [key, value] of Object.entries(test)){
        console.log('entries', [key, value])
    }
}