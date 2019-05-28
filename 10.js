{ // set
    let list = new Set()
    list.add(1); // set 添加元素
    list.add(2)
    console.log('size', list.size) // 类似于数组的length 2
}


{ // 数组去重
    let arr = [1,1 ,2, 2]
    let list = new Set(arr)
    console.log(list) // 1, 2

}

// set 操作
{
    let arr=['add','delete','clear','has'];
    let list = new Set(arr)
    // has
    console.log(list.has('add')) // true

    list.delete('delete')
    console.log(list) // {"add", "clear", "has"}


    list.clear()
    console.log(list)
}


{
    let arr=['add','delete','clear','has'];
    let list=new Set(arr);

    // 只会打印value的值
    // for(let key of list.keys()){
    //     console.log('keys',key);//打印的value值
    // }
    // for(let value of list.values()){
    //     console.log('value',value);
    // }

    // for(let [key,value] of list.entries()){
    //     console.log('entries',key,value);
    // }

    list.forEach(function(item){console.log(item);})
}


{//weakSet和set很像 区别 1.和set支持的数据类型不一样 weakset的元素只能是对象 2.不会检测对象在其他地方使用过吗 只是地址的引用 也不检测地址是不是被垃圾回收机制回收了
//3.没有size属性没有clear不能遍历
    let weakList=new WeakSet();

    let arg={};

    weakList.add(arg);

    // weakList.add(2);

    console.log('weakList',weakList);
}


//map和对象的区别 就是key可以是任何类型 对象的key只能是字符串
{
    let map = new Map()
    let arr = [1, 2, 3]
    map.set(arr, 'arrKey') // 添加
    console.log(map)
}


// 第二种定义方法

{
    let map = new Map([[{a: 1},'obj'],  [[1], 'arr']])
    console.log(map)
    // 属性和方法
    console.log(map.size)
    map.delete('{a: 1}')
    console.log('delete' ,map)

    console.log('clear',map.clear(),map);

}


{
    {//key必须是对象
        let weakmap=new WeakMap();

        let o={};
        weakmap.set(o,123);
        console.log(weakmap.get(o));//123
    }
}

{
    let arr = [];
    let map = new Map()
    let obj = {}
    let set = new Set()

    // 增
    arr.push('a')

    set.add('a')

    map.set(0, 'a')

    obj[0] = 'a'

    console.log(arr, set, obj, map)


    // 查
    arr.find(item => {
        console.error(item) // a
    })

    console.error(set.has('a')) // true

    console.error(obj[0])

    console.error(map.has(0)) // true


    //  改
    var arr_ = arr.map(item => item + ' change')
    console.log(arr_)

    // set 通过foreach遍历 判断是否有这个值 然后修改

    obj[0] += ' change'
    console.log(obj[0])

    map.set(0, 'a change')
    console.log(map)

    // 删
    arr.splice(0)
    console.warn(arr)

    set.delete('a')
    console.log(set)


    delete obj[0]
    console.log(obj)


    map.delete(0)
    console.log(map)
}