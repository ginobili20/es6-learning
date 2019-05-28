{
    // symbol类型独一无二  无需new
    let symbol1 = Symbol()
    let symbol2 = Symbol()
    console.log(symbol1 === symbol2) // false

}


{
    let a1=Symbol.for('abc');
    let obj={
        [a1]:'123',
        'abc':345,
        'c':456
    };
    console.log('obj',obj); // {abc: 345, c: 456, Symbol(abc): "123"}

    for(let [key,value] of Object.entries(obj)){
        console.log('let of',key,value);//let of 方法取不到symbol值
    }


    Object.getOwnPropertySymbols(obj).forEach(function(item){
        console.log(obj[item]);//这个只能取到symbol的值 123
    })


    Reflect.ownKeys(obj).forEach(function(item){//symbol和非symbol都能取到
        console.log('ownkeys',item,obj[item]);
    })
}



// symbol是一种新数据类型 应用场景可以作为对象的key  定义私有变量的时候可以是symbol类型