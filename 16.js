
{//修饰器 decorator 修改类  扩展类的行为 只在类中能用其他地方不可以
    //安装babel-plugin-transform-decorators-legacy
    let readonly=function(target,name,descriptor){//限制函数为只读的一个修饰器函数
        descriptor.writable=false;
        return descriptor
    };

    class Test{
        @readonly
        time(){
            return '2017-03-11'
        }
    }

    let test=new Test();

    // test.time=function(){
    //   console.log('reset time');
    // };//会报错 不让修改

    console.log(test.time());
}


{//也可以在class外部使用修饰器 但是必须在class前面
    let typename=function(target,name,descriptor){
        target.myname='hello';
    }

    @typename
    class Test{

    }

    console.log('类修饰符',Test.myname);
    // 第三方库修饰器的js库：core-decorators; npm install core-decorators
}


//例子  日志系统

{
    let log = (type)=> {//买点系统抽离出来 以后修改只用改下面的 复用性强
        return function (target,name,descriptor) {
            let src_method = descriptor.value;
            descriptor.value = (...arg)=>{
                src_method.apply(target,arg);
                console.info(`log ${type}`);
            }
        }
    }
    class AD{
        @log('show')
        show(){
            console.info('ad is show')
        }
        @log('click')
        click(){
            console.info('ad is click')
        }
    }
    let ad = new AD();
    ad.show();
    ad.click();
}