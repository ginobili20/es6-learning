{  //将数据变量转换为数组类型
    let arr = Array.of(1,2,3,4,5)
    console.log('arr', arr)
}


{
    // 类数组转数组
    let obj = {
        0: 'a',
        1: 'b',
        2: 'c',
        length: 3
    }
    let arr = Array.from(obj)
    console.log(arr) // ["a", "b", "c"]

    // 类似于map的用法

    let newArr = Array.from(arr, function (item) {
        return item + 'map'
    })
    console.log(newArr) // ["amap", "bmap", "cmap"]

}


{
     // 替换
    let arr = [1, 2, 3, 'a']
    // arr.fill(7)
    // console.log(arr) // [7, 7, 7, 7]

    arr.fill(7, 0, 2) // 第二个参数为起始 第三个位置为结尾位置  [ )
    console.log(arr) // [7, 7, 3, "a"]
}


{
    // 遍历数组
    let arr = [1, 2, 3, 'a']
    for (let index of arr.keys()) {
        console.log('key', index) // key 0 key 1...
    }

    for (let value of arr.values()) {
        console.log('values', value) // value 1 value 2 ...
    }

    for (let [index, value] of arr.entries()) {
        console.log('entries', [index,value]) // [0, 1]  [1, 2]...
    }
}


{
    // 替换 不常用
    let arr = [1,2,3,4,5]
    arr.copyWithin(0, 2, 4) // 第一个参数表示替换的位置 第二个参数表示从index为2的地方复制 第三个参数为截止位置
    console.log(arr) // [3, 4, 3, 4, 5]
}


{
    // find
    let arr = [1,2,3,4,5]
    console.log(arr.find(function (item) { // 4 返回满足条件的第一个值
        return item > 3
    }))

    console.log(arr.findIndex(function (item) { // 3 返回满足条件的第一个值的index
        return item > 3
    }))

}


{
    // includes
    let arr = [1,2,3,4,5]
    console.log(arr.includes(0)) // false
    console.log(arr.includes(5)) // true
}



