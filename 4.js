{//安装babel-polyfill
    console.log('a',`\u0061`);//a的unicode 正常打印
    console.log('s',`\u20BB7`);//后面被当成两个字符 错误打印

    console.log('s',`\u{20BB7}`);//加{}可以当做一个字符
}
{
    let s='𠮷';
    console.log('length',s.length);//长度是2
    console.log('0',s.charAt(0));
    console.log('1',s.charAt(1));
    console.log('at0',s.charCodeAt(0));//取第一个字符的编码值
    console.log('at1',s.charCodeAt(1));//第二个  但是都会有乱码

    let s1='𠮷a';
    console.log('length',s1.length);//3
    console.log('code0',s1.codePointAt(0));//本身是取第一个字节 但是这个方法可以自己判断 所以取2个字节了
    console.log('code0',s1.codePointAt(0).toString(16));
    console.log('code1',s1.codePointAt(1));//只取第二个字节
    console.log('code2',s1.codePointAt(2));//a的code
}


