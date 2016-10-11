/**
 * Created by Administrator on 2016/8/9.
 */
const PI = 3.141593;
const say = function(x = 'Hey!'){
  console.log(x);
};
// function test(x, y = PI, ...a) {
//     let sum = (x + y) * a.length;
//     sum = Math.fround(sum);
//     console.log(sum)
// }
// test(1,2,3,4,5);

//shim:a thin wedge of material(wood, metal, stone) for driving into crevices
//一个shim是一个库，它将一个新的API引入到一个旧的环境中，而且仅靠旧环境中已有的手段实现

//polyfill:a polyfill is downloadable code which provides facilities that are not built into a web browser.
//先检查当前浏览器是否支持某个api,如果不支持就加载对应的polyfill，然后浏览器就可以使用这个api了

//Arrow Functions -- Lexical this
//More intuitive handling of current context

//top-level let variables doesn't belong to window object
let numbers = [1, 2, 3, 4, {array:[]}];
// numbers.map(v => console.log(this.numbers + '' + v));

//box-sizing: border-box; width = content-box + padding + border

/*Immediately Invoked Function Expression*/

/*
* How do we get the amount of the radio.
* */

// for(var i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 100);
// }

/*
* 'use strict'使用严格模式的好处
* 1.消除javascript一些不合理，不严谨支出，减少一些怪异行为
* 2.消除代码运行的一些不安全之处，保证代码运行的安全
* 3.提高编译器效率，增加运行速度
* 4.为未来的javascript新版本做好铺垫
* */
(function() {
    function a() {
        return a;
    }
    a;
    // console.log(a());
})();