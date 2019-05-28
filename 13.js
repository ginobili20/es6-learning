// {
//     // es5 写法
//     let ajax = callback => {
//         console.log('执行')
//         setTimeout(() => {
//             callback && callback.call()
//         }, 1000)
//     }
//     ajax(() => {
//         console.log('timeout1')
//     })
// }
//
/*
{
    let ajax = () => {
        console.log('执行2');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 1000)
        })
    }
    ajax().then(() => {
        console.log('promise', 'timeout2')
    })
}*/

/*

{
    let ajax = () => {
        console.log('执行3');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 1000)
        })
    }

    ajax().then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 2000)
        })
    }).then(() => {
        console.log('timeout3') // 3s后打印
    })
}
*/


/*
{
    let ajax = (num) => {
        console.log('4')
        return new Promise((resolve, reject) => {
            if (num > 5) {
                resolve()
            } else {
                throw new Error('出错')
            }
        })
    }

    ajax(6).then(() => {
        console.log(6)
    }).catch(err => {
        throw new Error('catch error')
    })

    ajax(3).then(() => {
        console.log(3)
    }).catch(err => {
        throw new Error('catch error') // 只打印这个 不打印出错了
    })
}*/


/*function loadImg(src) {
    return new Promise((resolve, reject) => {
        let img = document.createElement('img');
        img.src = src;
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function (err) {
            reject(err)
        }
    })
}

function showImgs(imgs) {
    imgs.forEach(img => {
        document.body.appendChild(img)
    })
}


Promise.all([  //三张图片都加载完后才会显示
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    loadImg('http://i4.buimg.com/567571/2b07ee25b08930ba.png'),
    loadImg('http://i4.buimg.com/567571/5eb8190d6b2a1c9c.png')
]).then(showImgs).catch(err => {
    throw new Error('error')
})*/


// Promise.race([
//     loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
//     loadImg('http://i4.buimg.com/567571/2b07ee25b08930ba.png'),
//     loadImg('http://i4.buimg.com/567571/5eb8190d6b2a1c9c.png')
// ]).then(showImgs)//三张图片谁先加载出来 谁先显示



// promise有三种状态
// pending fufilled 成功 rejected失败 只有pending转化为fufilled或者转为rejected两个情况
//  一旦状态改变了 会一直保持这个状态 不会再发生变化
// Promise一旦新建 立即执行 无法取消 而then方法中指定的回调函数，将在当前脚本所有同步任务执行完才会执行

{
    let promise = new Promise((resolve, reject) => {
        console.log('before resolve')
        resolve()
        console.log('after resolve')
    })

    promise.then(() => { // 返回一个新的promise  并且返回值作为参数传给新的promise的resolve函数
        console.log('resolve')
        return '我是返回值'
    }).then(val => {
        console.log(val) // 我是返回值
    })

    console.log('outer')

    // 打印顺序
    // before resolve
    //  after resolve
    //  outer
    //  resolve
}


// promise对象的错误，会一直向后传递，直到被捕获。即错误总会被下一个catch所捕获。
// then方法指定的回调函数，若抛出错误，也会被下一个catch捕获。catch中也能抛错，则需要后面的catch来捕获。

/*
Promise.resolve('Success');

/!*******等同于*******!/
new Promise(function (resolve) {
    resolve('Success');
});*/


// 这段代码会让这个Promise对象立即进入resolved状态，并将结果success传递给then指定的onFulfilled回调函数。
// 由于Promise.resolve()也是返回Promise对象，因此可以用.then()处理其返回值。

/*
Promise.reject(new Error('error'));

/!*******等同于*******!/
new Promise(function (resolve, reject) {
    reject(new Error('error'));
});*/


// 如果在then中抛错，而没有对错误进行处理（即catch），那么会一直保持reject状态，直到catch了错误
// .then(onFulfilled, onRejected)
// 验证状态改变之后会凝固


{
    console.log(1);
    new Promise(function (resolve, reject){
        reject();
        setTimeout(function (){
            resolve();            //not called
        }, 0);
    }).then(function(){
        console.log(2);
    }, function(){
        console.log(3);
    });
    console.log(4);

   // 打印结果
    // 1
    // 4
    // 3
}

// c参考 https://segmentfault.com/a/1190000007032448#articleHeader14