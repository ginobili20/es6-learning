{
    let arr = ['hello', 'man'];
    let map = arr[Symbol.iterator]() // 内部实现好了的接口  可以直接调用
    console.log(map.next());//hello  done：false
    console.log(map.next());//world  done：false
    console.log(map.next());//undefined done：true
}

{
    let obj = { // 对象本身没有这个迭代器方法  我们可以自己定义一个
        start: [1,3,4],
        end: [5,6,7],
        [Symbol.iterator] () { // 对象中出现这个  代表是个遍历器接口
            let self = this;
            let index = 0;
            let arr = self.start.concat(self.end)
            let len = arr.length;
            return {
                next () {
                    if (index < len) {
                        return {
                            value: arr[index++],
                            done: false
                        }
                    } else {
                        return  {
                            value: arr[index++],
                            done: true
                        }
                    }
                }
            }
        }
    }

    // for of 本来不能遍历普通对象的  可以遍历 数组 map set
    for(let value of obj){
        console.log(value);// 1 3 4 5 6 7
    }
var i = obj[Symbol.iterator]()
    console.log(i.next()) // {value: 1, done: false}
    console.log(i.next()) // ...
    console.log(i.next())
    console.log(i.next())
    console.log(i.next())
}

// for of
{
    let arr = [1, 3, 4];

    let set = new Set(arr)

    let map = new Map([['a', 1], ['b', 2]])

    let obj = {
        a:1,
        b: 2
    }

    for (let value of arr) {
        console.log(value) // 1 3 4
    }


    for (let value of set) {
        console.log(value) // 1 3 4
    }
    
    for (let [key, value] of map)  {
        console.log(key, value) // a 1 b 2
    }

    // for (let value of obj) {
    //     console.log(value)  // obj is not iterable 报错
    // }
}
