{
    class Parent {
        constructor(name="默认") {
            this.name = name
        }
    }

    let p = new Parent('tom');
    console.log('构造函数和实例', p)
}

{
    // 继承
    class Parent {
        constructor(name="default") {
            this.name = name
        }
    }

    class Child extends Parent {

    }

    let c = new Child('jojo');
    console.log('extend', c)
}

{
    // 继承传递参数
    class Parent {
        constructor(name="default") {
            this.name = name
        }
    }

    class Child extends Parent { // super使用场景一  被当做函数使用 作为父类的构造函数
        constructor(name="childName") {
            super(name); // 子类修改父类的name
            this.type = 'child' // 子类添加的属性一定要在super之后
        }
    }
    let c = new Child()
    console.log('传递参数', c)
}

{
    // getter setter
    class Parent {
        constructor(name='tom') {
            this.name = name;
        }

        get longName () { // 这个是属性
            return 'long ' + this.name
        }

        set longName (value) {
            this.name = 'set ' + value
        }
    }

    let p = new Parent()
    console.log('getter', p.longName) //  getter long tom

    p.longName = 'jojo'
    console.log('setter', p.longName)//  setter long set jojo
}


// 静态方法
{
    class Parent {
        constructor(name='tom') {
            this.name = name;
        }
        static tell () {
            console.log('this is a static method')
        }
    }

    class Child extends Parent {
        static a() {
            return super.tell() // super使用场景二 作为对象使用 指向父类
        }
    }


    let p = new Parent()
    // 父类的实例无法获取到静态方法
    // p.tell() // p.tell is not a function
    Child.a()
}



{
    // 静态属性
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }

        static tell(){
            console.log('tell');
        }
    }

    Parent.type='test';

    console.log('静态属性',Parent.type);


}



// 类本质是一个函数 typeof的结果是function
// 类的方法都定义在类的prototype上
// 可以通过给prototype上添加方法或者使用Object.assign添加方法
// Object.assign(Person.prototype,{
//     getName:function(){
//         return this.name;
//     },
//     getAge:function(){
//         return this.age;
//     }
// })

// constructor方法是类的默认方法 通过new生成的实例会自动调用该方法

// constructor方法内部声明的属性为实例属性 （this对象上的
// 外部声明的数学为原型上的属性
//hasOwnProperty()函数用于判断属性是否是实例属性。其结果是一个布尔值， true说明是实例属性，false说明不是实例属性
// in操作符会在通过对象能够访问给定属性时返回true,无论该属性存在于实例中还是原型中。


// class不存在变量提升 所以要先定义后使用

// 静态方法就是class的方法 无法被实例调用 可以直接通过class.方法名调用 也可以被子类继承（静态方法只能被静态方法调用