{
    //异步编程的解决方式  早期用的回调 后来是promise

    // generator 基本用法
    let tell = function *() {
        yield 'a';
        yield 'b';
        yield 'c';
    };

    let k = tell() //遇到yield停下来 使用next就执行一个yield
    console.log(k.next());//a  done:false
    console.log(k.next());//b done:false
    console.log(k.next());//c   done:false
    console.log(k.next());//undefined  done:true
}

{
    let obj={};
    obj[Symbol.iterator]=function* (){
        yield 1;
        yield 2;
        yield 3;
    }

    for(let value of obj){
        console.log('value',value);
    }
}

{
    let state=function* (){//状态机 a-》b》-》c-》a一直跑下去
        while(1){
            yield 'A';
            yield 'B';
            yield 'C';
        }
    }
    let status=state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
}

// 例子 1
{
    let draw = count => {
        // 具体抽奖逻辑
        console.log(`剩余${count}次`)
    };

    let residue = function *(count) {
        while (count > 0) {
            count--;
            yield draw(count)
        }
    }

    let star = residue(5)
    let btn = document.createElement('button');
    btn.id = 'start';
    btn.innerHTML = '抽奖'
    document.body.appendChild(btn)
    document.getElementById('start').addEventListener('click', function (e) {
        e.preventDefault();
        star.next()
    })
}


{ // 例子2 长轮询 websocket兼容不好的时候使用
    let ajax = function *() {
        yield new Promise((resolve, reject) => {
            setTimeout(() => { // //这里是模拟ajax 真实场景这里要改一下后端接口
                resolve({code: 0}) // //这里相当于模拟的服务端返回的数据  改成code：1 会不断显示wait 也就是不断的轮询中
            }, 200)
        })
    }

    let pull = () => {
        let generator = ajax();
        let step = generator.next();
        step.value.then(d => {
            if (d.code !== 0) { // 查询到的不是最新数据
                setTimeout(() => {
                    console.log('wait');
                    pull()
                }, 1000)
            } else {
                console.log(d)
            }
        })
    }

    pull()
}