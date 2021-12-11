import Two from './two';
const x=100;
console.log("x",x);
console.log("y",Two.y);


//箭头函数ES6
const test=(num)=>{
    return num+100;
}
console.log(test(Two.y));



function testable(target) {
    target.isTestable = true;
}
//需要专门的语法插件，才能转化为ES5，ES5动态添加属性方法，浏览器支持
@testable
class MyTestableClass { }
console.log("装饰器语法", MyTestableClass.isTestable) // true

//ES5中没有promise对象，没有generator函数，转完毕，浏览器runtime环境也不支持
//解决：polyfill 提供regenerator-runtime模板用于提供功能实现，自己封装了promise generator await async
const delay=new Promise(resolve=>console.log("new Promise()"));
function* helloWorldGenerator() {yield 'hello';
    yield 'world';
    return 'ending';
}
var hw = helloWorldGenerator();
console.log(hw.next());
