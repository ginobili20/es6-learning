{
    // proxy代理
    let obj = {
        time: '2017-01-01',
        name: 'net',
        _r: 123
    };

    let monitor = new Proxy(obj, {
        // 拦截对象属性的读取
        get (target, key) {
            return target[key].replace('2017', '7102')
        },
        // 拦截对象属性的设置
        set (target, key, value) {
            if (key === 'name') {
                return target[key] = value // 只允许修改name
            } else {
                console.error('无法设置' + key)
            }
        },
        // 拦截key in obj的操作
        has (target, key) {
            if (key === 'name') {
                return target[key]
            } else  {
                return false
            }
        },
        // 拦截delete
        deleteProperty(target, key) {
            if (key.indexOf('_') > -1) {
                delete target[key]
            } else {
                console.error('无法删除' + key)
            }
        },
        // 拦截Object.keys 等等
        ownKeys(target) {
            return Object.keys(target).filter(item => item !== 'time')
        }
    })


    console.log('get', monitor.time) // get 7102-01-01

    monitor.time = '1111'
    monitor.name = 'reset'
    console.log(monitor)


    console.log('has', 'name' in monitor, 'time' in monitor) //true false time本来是存在的  但是被拦截

    delete monitor.time
    delete monitor._r
    console.log('delete', monitor)

    console.log('ownKeys', Object.keys(monitor)) // name 屏蔽了time
}




// reflect
{
    let obj = {
        time:'2017-03-11',
        name:'net',
        _r:123
    }

    console.log('reflect set', Reflect.get(obj, 'time'))

    Reflect.set(obj, 'name', 'resetName')
    console.log(obj)

    console.log('has', Reflect.has(obj, 'name')) // true
}



// 举个例子  数据校验
{
    function validator(target, validator) {
        return new Proxy(target, {
            _validator: validator,
            set(target, key, value, proxy) {
                if (target.hasOwnProperty(key)) {
                    let va = this._validator[key];
                    if (!!va(value)) { // 转为布尔值判断
                        return Reflect.set(target, key, value, proxy)
                    } else {
                        throw Error(`不能设置${key}为${value}`)
                    }
                } else {
                    throw Error(`${key}不存在`)
                }
            }
        })
    }

    const personValidators = { // 相当于配置
        name (val) {
            return typeof val === 'string'
        },
        age (val) {
            return typeof val === 'number' && val >18
        },
        mobile (val) {

        }
    };

    class Person {
        constructor (name, age) {
            this.name = name;
            this.age = age;
            this.mobile = '11211'
            return validator(this, personValidators) // 返回一个被代理的Person
        }
    }

    const person = new Person('tom', 11)

    console.warn(person) //  time:'2017-03-11',name:'net',_r:123
    person.age = 18.1
    console.log(person)
}