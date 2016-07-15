# ECMAScript 6
ES6 = ECMAScript 2015 = ES2015

### Origin
Nov. 1996 Netscape决定将JavaScript提交给国际化组织ECMA,希望能成为国际标准。
次年，ECMA发布262号标准文件：ECMA-262 的第一版，规定了browser脚本语言的标准，这就是 ECMAScript 1.0
* ECMAScript 和 JavaScript，前者是后者的规格，后者是前者的一种实现。
* ECMAScript方言：JScript,ActionScript
* June 2015, ECMAScript 6 正式通过，成为国际标准。从2000年算起，这时已经过去15年。

### Babel

### Syntax

1. let,声明变量，但是只在代码块内有效,且不存在变量提升
```
for(let i=0;i<arr.length;i++){}
```
temporal dead zone,简称TDZ。ES6明确规定，如果块区中存在let和const命令，这个区对这些命令声明的变量从一开始就形成了封闭作用域。凡在声明前使用这些变量就会报错。
> 为什么需要块级作用域？
> 1.内层变量可能会覆盖外层变量
> 2.用来计数的循环变量泄露为全局变量

2. const, 一旦声明，就必须立即初始化，不能留到以后赋值。
* 块级作用域内有效
* 不可重复声明

### strict mode
类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用。

考虑到未来所有的代码，其实都是运行在模块之中，所以ES6实际上把整个语言升级到了严格模式。
