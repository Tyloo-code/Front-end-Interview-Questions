---
title: '【面】前端知识点梳理（ES6）'
date: 2021-03-10 19:04:37
tags: [Interview]
published: true
hideInList: false
feature: 
isTop: false
---
# 1. 声明 let、const
## 1. let声明变量的特点:
`变量不能重复声明`

每个循环每执行一次都有一个大括号{}，{}内的代码属于一个代码块，let声明的变量属于块级作用域，所以看上去能重复声明。
~~~
for (let i = 0; i < 10; i++) {
        let s = "a";
        console.log(s);    //这里会输出10个a
    }
~~~
`定义的变量可以被修改`
~~~
let c = 1;
c++;
console.log(c); //2
~~~
`定义的变量是块级作用域的变量`

`必须先声明后使用`

## 2. const 声明常量的特点：
`常量不能重复声明，同let`

`常量不能被修改`
~~~
const p  = 1;
p=2;
~~~
**上面的代码浏览器会报错**

`必须先声明后使用`


# 2. 解构赋值
## 1. 解构赋值的定义
ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构，本质是一种模式匹配。

## 2. 数组的解构赋值
按照对应位置，对变量赋值，如果解构不成功，变量的值就等于undefined。
同时解构赋值允许指定默认值。只有当一个数组成员严格等于undefined，默认值才会生效。
~~~
let [a, b, c] = [1, 2, 3];   //a=1,b=2,c=3
let [x, , y] = [1, 2, 3];    //x=1,y=3
let [foo] = [];              //foo=undefined
let [foo = 1] = [];      //foo=1
let [foo = 1] = [null];  //foo=null
~~~

## 3. 对象的解构赋值
对象的解构是按照属性来进行解构赋值的。如果解构不成功，变量的值就等于undefined。
对象的解构也可以指定默认值。默认值生效的条件是，对象的属性值严格等于undefined。
~~~
let { a: foo, b: bar } = { a: "123", b: "456" }    //foo=123  bar =456
let { a: a, b: b } = { a: "123", b: "456" }       //a=123 b=456
let { a, b } = { a: "123", b: "456" }      //a=123 b=456   
//第三种写法等于第二种，因为es6中可以在对象中直接写入变量
let { a, c } = { a: "123", b: "456" }     //a=123  c=undefined
let { a, c = 3 } = { a: "123", b: "456" }    //a=123  c=3
~~~

## 4. 其他的解构赋值
解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。
~~~
let  { toString: s } = 123      //s是对象的toString方法
let  { toString: s } = true;     //s是对象的toString方法
let { prop: x } = undefined;   //报错
let { prop: y } = null;      //  报错
const [a, b, c, d, e] = "hello"   // a=h b=e ...
const { 0: a, 1: b, 2: c, 3: d, 4: e } = "hello"    //a=h b=e ...
//字符串被转为类数组对象，故可以使用数组和对象解构赋值
~~~

## 5. 解构赋值的用途
1. 交换变量的值
~~~
 let x = 1
 let y = 2
 [x, y] = [y, x]
~~~
2. 方便取值
~~~
let obj = {
  a:1,
  b:2,
  c: function(){return 1}
}
 let {a,b} = obj  //代替以前  let a= obj.a, b=obj.b 的写法
~~~
3. 输入模块的指定方法
4. 遍历 Map 结构

# 3. 声明类与继承：class、extend
## 1. 类（Class）
基本上，ES6的class可以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。
~~~
//定义类
class Point {
  constructor(x, y) {  //constructor 构造方法
    this.x = x;
    this.y = y;
  }
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
var p = new Point(1, 2);
~~~
构造函数的prototype属性，在ES6的“类”上面继续存在。事实上，类的所有方法都还是定义在类的prototype属性上面。

`constructor方法`

constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。

## 2. 继承（Extends）
Class之间可以通过extends关键字实现继承，这比ES5的通过修改原型链实现继承，要清晰和方便很多。
~~~
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }
  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}
~~~
上面代码中，constructor方法和toString方法之中，都出现了super关键字，它在这里表示父类的构造函数，用来新建父类的this对象。

子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。

## 3. 原生构造函数继承
* Boolean()
* Number()
* String()
* Array()
* Date()
* Function()
* RegExp()
* Error()
* Object()

这意味着，ES6可以自定义原生数据结构（比如Array、String等）的子类，这是ES5无法做到的。

## 4. Class的Generator方法
如果某个方法之前加上星号（*），就表示该方法是一个Generator函数。

## 5. Class的静态方法
类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
~~~
class Foo {
  static classMethod() {
    return 'hello';
  }
}
Foo.classMethod() // 'hello'
var foo = new Foo();
foo.classMethod()
// TypeError: foo.classMethod is not a function
~~~
如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法。

# 4. Promise的使用与实现
Promise 是 ES6 新增的语法，解决了回调地狱的问题。

## 1. 什么是Promise？

**所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理，让开发者不用再关注于时序和底层的结果。Promise的状态具有不受外界影响和不可逆两个特点。**

`特点：`

* `对象的状态不受外界影响`。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（以失败）。只有异步操作的结果可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来。

* `一旦状态改变，就不会再变`，任何时候都是可以得到这个结果的。Promise对象的状态改变只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就会凝固，不会再变了。再对Promise对象添加回调函数也会立即得到这个结果。

`缺点：`

首先无法取消Promise，一旦新建他就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部跑出的错误无法反应到外部。当pending的时候，无法知道进展到了哪一步。

## 2. Promise 解决的痛点是什么？
1. 回调地狱，代码难以维护
2. promise可以支持多个并发的请求，获取并发请求中的数据
3. promise可以解决可读性的问题，异步的嵌套带来的可读性的问题
4. promise可以解决信任问题，对于回调过早、回调过晚或没有调用和回调次数太少或太多，由于promise只能决议一次，决议值只能有一个，决议之后无法改变，任何then中的回调也只会被调用一次，所以这就保证了Promise可以解决信任问题


## 3. Promise 如何使用？
1. **创造一个Promise实例**
2. **Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数**
3. **可用Promise的try和catch方法预防异常**


## 4. Promise中的异步模式有哪些？有什么区别？
回到问题本身，`Promise.all()`和`Promise.race()`的区别

* `all`（`并行执行`）会将传入的数组中的所有promise全部决议以后，将决议值以数组的形式传入到观察回调中，任何一个promise决议为拒绝，那么就会调用拒绝回调。**Promise.all获得的成功结果的数组里面的数据顺序和Promise.all接收到的数组顺序是一致的**
* `race`会将传入的数组中的所有promise中第一个决议的决议值传递给观察回调，即使决议结果是拒绝。(超时取消)

>如果向Promise.all()和Promise.race()传递空数组，运行结果会有什么不同？
all会立即决议，决议结果是fullfilled，值是undefined
race会永远都不决议，程序卡死

## 5. Promise 常用的方法有哪些？
### 1. Promise.resolve的用法
`当我们在执行函数中调用resolve方法时，Promise的状态就变成fulfilled，即操作成功状态`，还记得上面Promise.prototype上面的then和catch方法吗？当Promise状态为fullfilled状态时执行then方法里的操作，注意了，`then方法里面有两个参数`onfulfilled(Promise为fulfilled状态时执行) 和onrejected（Promise为rejected状态时执行），步骤如下：

1. **实例化Promise（new Promise（function（resolve,reject）））**

2. **用Promise的实例调用then方法**

具体来看下面的例子：
```
var p = new Promise(function (resolve, reject) {
            var timer = setTimeout(function () {
                console.log('执行操作1');
                resolve('这是数据1');
            }, 1000);
        });
        p.then(function (data) {
            console.log(data);
            console.log('这是成功操作');
        });
```
简单的理解就是`调用resolve方法，Promise变为操作成功状态（fulfilled）`，执行then方法里面onfulfilled里的操作。其实then里面的函数就是我们平时所说的回调函数，只不过在这里只是把它分离出来而已。我们可以看到控制台上的输出结果如下所示：
![](https://ttarea.com/post-images/1616496390953.png)

### 2. Promise.reject的用法
调用reject方法后，Promise状态变为rejected，即操作失败状态，此时执行then方法里面onrejected操作，`上面我们提到了then方法有两个参数`，一种是Promise状态为fulfilled时执行（onfullfilled），一种是Promise状态为rejected时执行（onrejected）
```
var p = new Promise(function (resolve, reject) {
          var flag = false;
          if(flag){
            resolve('这是数据2');
          }else{
            reject('这是数据2');
          }
        });
        p.then(function(data){//状态为fulfilled时执行
            console.log(data);
            console.log('这是成功操作');
        },function(reason){ //状态为rejected时执行
            console.log(reason);
            console.log('这是失败的操作');
        });
```
我们可以看到输出结果：
![](https://ttarea.com/post-images/1616496519288.png)

### 3. Promise.prototype.then()方法
Promise实例具有then方法，也就是说then方法时定义在原型对象上的。
它的作用是为`Promise实例添加状态改变时的回调函数`。

`链式写法的本质`其实是一直`往下传递返回一个新的Promise`，也就是说`then在下一步接收的是上一步返回的Promise`!!!

1. then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）因此可以采用链式写法，即then方法后面再调用另一个then方法。
2. 采用链式的then可以指定一组按照次序调用的回调函数。这时，前一个回调函数可能返回一个还是Promise对象（即有异步操作），这时候一个回调函数就会等该Promise对象的状态发生变化，才会被调用
```
getJSON('/post/1.json').then(function(post) {
    return getJSON(post.commentURL)
}).then(function funcA() {
    console.log("resolved:", comments)
}, function funcB(err) {
    console.log("rejected:", err)
})
```
第一个then方法指定的回调函数，返回的是一个Promise对象。这时，第二个方法指定的回调函数，就会等待这个新的Promise对象状态发生变化。如果变为resolved，就调用funcA, 如果状态变为rejected，就调用funcB.

### 4. Promise.prototype.catch()方法
Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数
```
getJSON('/post/1.json').then(function(posts) {
    //...
}).catch(function() {
    console.log('发生错误', error)
})
```
上面代码中，getJSON方法返回一个Promise对象，如果该对象状态变为resolved，则会调用then方法指定的回调函数；如果异步操作抛出错误，状态就会变为rejected，就会调用catch方法指定的回调函数。另外，then方法指定的回调函数，如果运行抛出错误，也会被catch方法捕获。
![](https://ttarea.com/post-images/1619485896060.png)

**Promise对象的错误具有冒泡性质，会一直向后传递，直到被捕获为止，也就是说错误总会被下一个catch语句捕获。**


## 6. Promise 在事件循环中的执行过程是怎样的？
**1）事件循环**
>从代码执行顺序的角度来看，程序最开始是按代码顺序执行代码的，遇到同步任务，立刻执行；遇到异步任务，则只是调用异步函数发起异步请求。此时，异步任务开始执行异步操作，执行完成后到消息队列中排队。程序按照代码顺序执行完毕后，查询消息队列中是否有等待的消息。如果有，则按照次序从消息队列中把消息放到执行栈中执行。执行完毕后，再从消息队列中获取消息，再执行，不断重复。由于主线程不断的重复获得消息、执行消息、再取消息、再执行

**2）promise的事件循环**
>Promise在初始化时，传入的函数是同步执行的，然后注册 then 回调。注册完之后，继续往下执行同步代码，在这之前，then 中回调不会执行。同步代码块执行完毕后，才会在事件循环中检测是否有可用的 promise 回调，如果有，那么执行，如果没有，继续下一个事件循环

## 7. Promise的问题？解决办法？
**promise的问题为：**
* promise一旦执行，无法中途取消(停止)
* promise的错误无法在外部被捕捉到，只能在内部进行预判处理
* promise的内如何执行，监测起来很难

**解决办法**
* 停止可以通过返回新的promise进入pending状态，但是可能导致**内存泄漏**
* 正是因为这些原因，ES7引入了更加灵活多变的async，await来处理异步


## 8. 手写Promise与ajax的结合？
**实例代码：**
```
function promiseGet (url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(this.responseText,this)
        } else {
          let resJson = {
            code: this.status,
            response: this.response
          }
          reject(resJson, this)
        }
      }
    }
  })
```


# 5. Generator（异步编程、yield、next()）
## 1. Generator
Generator是一个函数，可以在函数内部通过`yield`返回一个值（此时，Generator函数的执行会暂定，直到下次触发`.next()`） 
创建一个`Generator函数`的方法是在`function`关键字后添加`*`标识。

在调用一个Generator函数后，并不会立即执行其中的代码，函数会返回一个`Generator`对象，通过调用对象的`next`函数，可以获得`yield/return`的返回值。 
无论是触发了`yield`还是`return`，`next()`函数总会返回一个带有`value`和`done`属性的对象。 
`value`为返回值，`done`则是一个Boolean对象，用来标识Generator是否还能继续提供返回值。 
P.S. Generator函数的执行时惰性的，yield后的代码只在`触发next`时才会执行
~~~
function * oddGenerator () {
  yield 1
  yield 3

  return 5
}

let iterator = oddGenerator()

let first = iterator.next()  // { value: 1, done: false }
let second = iterator.next() // { value: 3, done: false }
let third = iterator.next()  // { value: 5, done: true  }
~~~

## 2. next的参数传递
我们可以在调用`next()`的时候传递一个参数，可以在上次`yield`前接收到这个参数：
~~~
function * outputGenerator () {
  let ret1 = yield 1
  console.log(`got ret1: ${ret1}`)
  let ret2 = yield 2
  console.log(`got ret2: ${ret2}`)
}

let iterator = outputGenerator()

iterator.next(1)
iterator.next(2) // got ret1: 2
iterator.next(3) // got ret2: 3
~~~
第一眼看上去可能会有些诡异，为什么第一条`log`是在第二次调用`next`时才进行输出的 
这就又要说到上边的`Generator`的实现了，上边说到了，`yield`与`return`都是用来返回值的语法。 函数在执行时遇到这两个关键字后就会暂停执行，等待下次激活。 
然后`let ret1 = yield 1`，这是一个赋值表达式，也就是说会先执行`=右边`的部分，在=右边执行的过程中遇到了yield关键字，函数也就在此处`暂停`了，在下次触发`next()`时才被激活，此时，我们继续进行上次未完成的赋值语句`let ret1 = XXX`，并在再次遇到yield时`暂停`。 
这也就解释了为什么**第二次调用next()的参数会被第一次yield赋值的变量接收到**

## 3. 用作迭代器使用(for of)
但是要注意的是，用作迭代器中的使用，则只会作用于yield 
return的返回值不计入迭代
~~~
function * oddGenerator () {
  yield 1
  yield 3
  yield 5

  return 'won\'t be iterate'
}

for (let value of oddGenerator()) {
  console.log(value)
}
//  1
//  3
//  5
~~~

## 4. Generator函数内部的Generator
除了`yield`语法以外，其实还有一个`yield*`语法，可以粗略的理解为是`Generator`函数版的`[...] `
用来展开Generator迭代器的。
~~~
function * gen1 () {
  yield 1
  yield* gen2()
  yield 5
}

function * gen2 () {
  yield 2
  yield 3
  yield 4
  return 'won\'t be iterate'
}

for (let value of gen1()) {
  console.log(value)
}
//  1
//  2
//  3
//  4
//  5
~~~

# 6. async和await
* async函数是Generator函数的语法糖，将Generator的`星号`换成`async`将`yield`换成`await`，async函数比Generator函数更好用。`async` 表示函数里有异步操作，`await` 表示紧跟在后面的表达式需要等待结果。
* async必须**声明的是一个function**
* await 只能出现在 async 函数中
* async 函数返回的**是一个 Promise 对象**
* 如果它等到的不是一个 Promise 对象，那 await 表达式的运算结果就是它等到的东西。
如果它等到的是一个 Promise 对象，await 就会阻塞后面的代码，等着 Promise 对象 resolve或者reject方法，然后得到 resolve的值，作为 await 表达式的运算结果。
* 一般await都会用try/catch包起来

## 1. 作用
`async`和`await`是用来处理异步的。即你需要异步像同步一样执行，需要异步返回结果之后，再往下依据结果继续执行。
`async` 是“异步”的简写，而 `await` 可以认为是 `async wait` 的简写。
`async` 用于申明一个 `function` 是异步的，而 `await` 用于等待一个异步方法执行完成。

## 2. async
```
async function testAsync() {
    return "hello async";
}

const result = testAsync();
console.log(result);
```
打印输出的是一个`Promise` 对象，`async` 函数会返回一个 `Promise` 对象。
在最外层不能用 `await` 获取其返回值的情况下，使用 `then()` 链来处理这个 `Promise` 对象。
```
testAsync().then(v => {
    console.log(v);    // 输出 hello async
});
```
当 `async` 函数没有返回值时，返回 `Promise.resolve(undefined)`

## 3. awit
**`await`只能放在`async`函数内部使用**

`await` 用于一个异步操作之前，表示要“等待”这个异步操作的返回值。
`await` 也可以用于一个同步的值。

如果它等到的不是一个 `Promise` 对象，那 `await` 表达式的运算结果就是它等到的东西。
如果它等到的是一个 `Promise` 对象，`await` 就会阻塞后面的代码，等着 `Promise` 对象 `resolve`，然后得到 `resolve` 的值，作为 `await` 表达式的运算结果。

**异步代码**
~~~
// 2s 之后返回双倍的值
function doubleAfter2seconds(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2 * num)
        }, 2000);
    })
}

async function testResult () {
    let result = await doubleAfter2seconds(30);
    console.log(result);
}

testResult();
// 2s 之后，输出了60. 
~~~

## 4. 执行顺序
~~~
// 2s 之后返回双倍的值
function doubleAfter2seconds(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2 * num)
        }, 2000);
    })
}

async function testResult () {
    console.log('内部调用前') // 2
    let result = await doubleAfter2seconds(30);
    console.log(result); // 4
    console.log('内部调用后') // 5
}

console.log('外部调用前') // 1
testResult();
console.log('外部调用后') // 3
// --- 依次输出
// 外部调用前
// 内部调用前
// 外部调用后
// --- 2s 之后输出
// 60
// 内部调用后
~~~
分析一下上面的执行顺序：
1. 首先打印输出`外部调用前`，同步代码，顺序执行。
2. 然后调用方法`testResult()`，打印输出`内部调用前`，同步代码，顺序执行。
3. 再执行异步方法`doubleAfter2seconds`，
　1>如果没用`await`关键字，此后的执行顺序应该是
　　`内部调用后，外部调用后，2s 之后输出60`
　　因为异步方法不阻塞其他代码的执行，最后再输出`60`
　2>这里使用了`await`关键字，所以到这里后会等待异步返回结果，再往下执行。
4. 当`testResult`函数内部`await`阻塞执行后，不会影响到`testResult`函数外面

     `async` **函数调用不会造成阻塞，它内部所有的阻塞都被封装在一个 Promise 对象中异步执行。**

     所以，在调用`testResult`函数后，会继续向下执行，打印输出外部调用后
5. 当2s之后，异步函数`doubleAfter2seconds`执行完成，返回结果，
打印输出`60`
6. 因为`await`将异步变成同步，所以在输出`60`后，同步执行，再输出`内部调用后`

## 5. 错误处理
因为async函数返回的是一个Promise，所以我们可以在外面catch住错误。
~~~
// 2s 之后返回双倍的值
function doubleAfter2seconds(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2 * num)
        }, 2000);
    })
}

async function testResult () {
    let first = await doubleAfter2seconds(10);
    let second = await doubleAfter2seconds(20);    
    let res = first + second;
    return res;
}

testResult().then(res => {
    console.log(res);      
}).catch(error => {
    console.log(error);     
});
~~~
 
**连写**： 
```
const [err, data] = await fetchData().then(data => [null, data] ).catch(err => [err, null])
 console.log('err', err)
 console.log('data', data)
```
## 6. async/await的中断
![](https://ttarea.com/post-images/1619487936845.png)
实质就是直接`return`返回了一个`Promise`，相当于`return Promise.resolve('我退出了下面不进行了')`

## 7. async/await循环获取数据(串行)之for循环
现在就来介绍一下牛逼的async/await实战，上述的代码你是不是要看吐了，的确，我也觉得好麻烦啊，那么如果用`async/await`能有什么改进吗？
```
(async ()=>{
    arr = [timeout(2000), timeout(1000), timeout(1000)]
    for (var i=0; i < arr.length; i++) {
        result = await arr[i]();
        console.log(result);
    }
})()
```

## 8.在接口中使用(axios)
~~~
created () {
    this.init()
},
methods: {
    async init () {
      try {
          let first = await this.getOne();
          let second = await this.getTwo();    
          let res = first + second;
          console.log(res);
      } catch (error) {
          console.log(error);
      }        
    },
    getOne () {
        const params = {name: 'one'}
        return new Promise((resolve, reject) => {
            axios.get('/one', { params}).then((res) => {
                if (res.status === 200) {
                    resolve(res)
                }
            }).catch((err) => {
                reject(err)
            })
        })
    },
    getTwo () {
        const params = {name: 'two'}
        return new Promise((resolve, reject) => {
            axios.get('/two', { params}).then((res) => {
                if (res.status === 200) {
                    resolve(res)
                }
            }).catch((err) => {
                reject(err)
            })
        })
    },
},
~~~


# 7. 箭头函数this指向问题、拓展运算符
## 1. 箭头函数this指向
**箭头函数中的this指向的是定义时的this，而不是执行时的this。**

~~~
//定义一个对象
    var obj = {
        x:100,//属性x
        show(){
            //延迟500毫秒，输出x的值
            setTimeout(
               //不同处：箭头函数
               () => { console.log(this.x)},
               500
            );
        }
    };
    obj.show();//打印结果：100
~~~
当定义obj的show( )方法的时候，我们在箭头函数编写this.x，此时的this是指的obj，所以this.x指的是obj.x。而在show()被调用的时候，this依然指向的是被定义时候所指向的对象，也就是obj对象，故打印出：100。

## 2. 拓展运算符
拓展运算符允许一个可迭代的对象（数组、类数组对象、字符串、ES6中的Set、Map等拥有默认迭代器Symbol(Symbol.iterator)属性，可以被for...of遍历的对象）去拓展函数调用的参数、数组的元素，同时也允许以Object键值对的形式去拓展另一个对象

1. `化参数为数组`
~~~
var showLambdaArgs = (...foo)=>{
  return foo
}
showLambdaArgs(1,2,3,4,5,6)//[1,2,3,4,5,6]

//在普通函数中也能使用，注意与arguments的区别
function showArgs(...foo){
    console.log(arguments instanceof Array)// false
    console.log(foo instanceof Array)// true;
}
~~~

2. `化数组为参数`
~~~
function introduce(){
   console.log(arguments)//对象
   console.log(arguments.length)//参数个数
}
introduce(1,2,3,...[8,9,0])// arguments对象 和 6
introduce(4,5,..."abcde")// arguments对象 和 7
~~~

3. `化可迭代对象为数组`
~~~
//解构赋值也可以这么用
var [a,b,c] = [...'123']//a = 1;b = 2;c = 3
~~~
~~~
//一行去重数组ver2:
[...new Set([1,1,2,3,3,4,4,4])] //1 , 2 , 3 ,4
~~~
~~~
//倒序参数
function reverseArgs(){
  return [...arguments].reverse()//现在可以调用数组方法了
}
reverseArgs(1,2,3,4,5)//[5, 4, 3, 2, 1]
~~~

4. `扩展对象`

对象的拷贝方法五花八门，
* 有JSON.parse(JSON.stringify(obj))的
* 有for(var i in obj){}赋值的
* 使用ES6的Object.assign()可能是大多数使用ES6开发者的选择：
~~~
var o = {a:1,b:2}
var p = Object.assign({},o)
console.log(o === p) //false
~~~

5. `可变传参`

**es5中参数不确定个数的情况下**：
```
//求参数和
function f(){
  var a = Array.prototype.slice.call(arguments);
  var sum = 0;
  a.forEach(function(item){
     sum += item*1;          
  })     
  return sum;  
};
f(1,2,3);//6
```

**es6中可变参数**：
```
function f(...a){
  let sum = 0;
  a.forEach(item =>{
     sum += item*1;
  })    
  return sum;  
}
f(1,2,3);//6
```

# 8. map和set数组去重，map数据结构有什么优点？
## 1. set数组去重
~~~
et arr = [1, 2, 2, 3, 4]
function unique (arr) {
    return [...new Set(arr)]
}
console.log(unique(arr)) // [1, 2, 3, 4]
~~~
## 2. map数组去重
~~~
function unique(arr) {
    const res = new Map()
    return arr.filter( item => !res.has(JSON.stringify(item)) && res.set(JSON.stringify(item), 1))
}
~~~

## 3. map数据结构优点
1. Map数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。
2. 任何具有 Iterator接口、且每个成员都是一个双元素的数组的数据结构都可以当作Map构造函数的参数。
3. Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。这就解决了同名属性碰撞（clash）的问题

## 4. set数据结构优点
Set对象允许你存储任何类型的值，无论是原始值或者是对象引用。它类似于数组，但是成员的值都是唯一的，没有重复的值。
Set 本身是一个构造函数，用来生成Set 数据结构。Set函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。

Set 对象存储的值总是`唯一`的，所以需要判断两个值是否恒等。有几个特殊值需要特殊对待：
* +0 与 -0 在存储判断唯一性的时候是恒等的，所以不重复
* undefined 与 undefined 是恒等的，所以不重复
* NaN 与 NaN 是不恒等的，但是在 Set 中认为NaN与NaN相等，所有只能存在一个，不重复。

## 5. set作用
**数组去重(利用扩展运算符)**
```
const mySet = new Set([1, 2, 3, 4, 4])
[...mySet] // [1, 2, 3, 4]
```

**合并两个set对象**
```
let a = new Set([1, 2, 3])
let b = new Set([4, 3, 2])
let union = new Set([...a, ...b]) // {1, 2, 3, 4}
```

**交集**
```
let a = new Set([1, 2, 3])
let b = new Set([4, 3, 2])
let intersect = new Set([...a].filter(x => b.has(x)))  // {2, 3} 利用数组的filter方法
```

**差集**
```
let a = new Set([1, 2, 3])
let b = new Set([4, 3, 2])
let difference = new Set([...a].filter(x => !b.has(x))) //  {1} 
```

# 9. ES6怎么编译成ES5？css-loader原理、过程
## 1. ES6怎么编译成ES5
Babel是一个广泛使用的转码器，babel可以将ES6代码完美地转换为ES5代码
1. 初始化项目
2. 全局安装babel工具
3. 新建.babelrc
在项目根目录新建(.babelrc)文件输入如图所示代码：
~~~
{
    "presets":[
        "es2015"
    ],
    "plugins":[]
}
~~~

## 2. css-loader
webpack的一个loader，用于解释@import 和 url()，并通过import后进行解析，通常和style-loader结合使用


# 10. 使用ES5模拟实现ES6的class
## 1.new操作符检查函数
解决问题：
类必须使用new调用，否则会报错。ES的构造函数是可以当成普通函数使用的
~~~
function _checkType (obj, constructor) {
    if (!(obj instanceof constructor)) {
        throw new TypeError('Cannot call a class as a function')
    }
}
~~~
## 2.内部方法不可枚举
解决问题：
类的内部所有定义的方法，都是不可枚举的。（包括内部定义的静态方法）
~~~
// 修改构造函数描述符
function defineProperties (target, descriptors) {
    for (let descriptor of descriptors) {
        descriptor.enumerable = descriptor.enumerable || false

        descriptor.configurable = true
        if ('value' in descriptor) {
            descriptor.writable = true
        }

        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

// 构造class
// constructor 表示类对应的constructor对象
// protoDesc 表示class内部定义的方法
// staticDesc 表示class内部定义的静态方法
function _createClass (constructor, protoDesc, staticDesc) {
    protoDesc && defineProperties(constructor.prototype, protoDesc)
    staticDesc && defineProperties(constructor, staticDesc)
    return constructor
}
~~~
## 3. 真正的创建class
~~~
const Foo = function () {
    function Foo(name) {
        _checkType(this, Foo) // 先检查是不是new调用的

        this.name = name
    }

    _createClass (Foo, [ // 表示在class内部定义的方法
        {
            key: 'say',
            value: function () {
                console.log(this.name)
            }
        }
    ], [ // 表示在class内部定义的静态方法
        {
            key: 'say',
            value: function () {
                console.log('static say')
                console.log(this.name)
            }
        }
    ])

    return Foo
}()
~~~

# 11. setTimeout和setInterval的区别
1.setTimeout和setInterval都属于JS中的定时器，可以规定延迟时间再执行某个操作，不同的是setTimeout在规定时间后执行完某个操作就停止了，而setInterval则可以一直循环下去。
~~~
function fun(){
  alert('hello');
}
  setTimeout(fun,1000);//参数是函数名
  setTimeout('fun()',1000);//参数是字符串
  setInterval(fun,1000);
  setInterval('fun(),1000');
~~~
在上述代码中，无论是setTimeout还是setInterval，在使用函数名作为调用句柄时不能带参数，使用字符串调用时可以带参数。例如：setTimeout(‘fun(name)’,1000);

2.不再单独再定义一个函数，直接将函数调用放在一个函数里面，可以使用函数名作为调用调用句柄。
~~~
function fun(name){
  alert('hello'+' '+name);
}
setTimeout (function(){
  fun('Tom');
},1000);//参数是函数名
~~~
在上述代码中，setTimeout和setInterval的区别就是setTimeout延迟一秒弹出’hello’,之后便不再运行；而setInterval则会隔一秒弹出’hello’,直至用clear来清除定时器的语法。
