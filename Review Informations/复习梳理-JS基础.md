---
title: '【面】前端知识点梳理（JS）'
date: 2021-03-05 11:39:37
tags: [Interview]
published: true
hideInList: false
feature: 
isTop: false
---
# -1. 面向对象编程基础！！
>面向对象适合的是那些业务逻辑复杂（其实用“繁杂”更恰当一些）的大型项目。所谓繁杂，繁指多，杂指乱，项目“杂乱”，可以表现为：功能多改动多，所以代码量大、开发人员多、开发/维护跨度时间长……

## 1. 什么是面向对象
面向对象 ( Object Oriented ) 是将现实问题构建关系，然后抽象成 **类 ( class )**，给类定义属性和方法后，再将类实例化成 **实例 ( instance )** ，通过访问实例的属性和调用方法来进行使用。

在不同的语言中，对象的定义范围不同。在 Java 等静态语言中，一般把类的实例称为对象。
## 2. 面向对象的六大原则
### 1. 单一职责原则
一个合理的类，应该仅有一个引起它变化的原因，即单一职责,就是设计的这个类功能应该只有一个;
* 优点：消除耦合，减小因需求变化引起代码僵化。

### 2. 开-闭原则
讲的是设计要对扩展有好的支持，而对修改要严格限制。即对扩展开放，对修改封闭。
* 优点：降低了程序各部分之间的耦合性，其适应性、灵活性、稳定性都比较好。当已有软件系统需要增加新的功能时，不需要对作为系统基础的抽象层进行修改，只需要在原有基础上附加新的模块就能实现所需要添加的功能。增加的新模块对原有的模块完全没有影响或影响很小，这样就无须为原有模块进行重新测试。

### 3. 里氏代换原则
规则是“子类必须能够替换基类，否则不应当设计为其子类。”也就是说，在软件里面，把父类都替换成它的子类，程序的行为没有变化。
* 优点：可以很容易的实现同一父类下各个子类的互换，而客户端可以毫不察觉。

### 4. 依赖倒换原则
“设计要依赖于抽象而不是具体化”。换句话说就是设计的时候我们要用抽象来思考，而不是一上来就开始划分我需要哪些哪些类，因为这些是具体。
![](https://ttarea.com/post-images/1619593049456.png)
* 优点：人的思维本身实际上就是很抽象的，我们分析问题的时候不是一下子就考虑到细节，而是很抽象的将整个问题都构思出来，所以面向抽象设计是符合人的思维的。另外这个原则会很好的支持（开闭原则）OCP，面向抽象的设计使我们能够不必太多依赖于实现，这样扩展就成为了可能。

### 5. 接口隔离原则
“将大的接口打散成多个小接口”，让系统解耦，从而容易重构，更改和重新部署。
* 优点：会使一个软件系统功能扩展时，修改的压力不会传到别的对象那里。

### 6. 迪米特法则
它讲的是“一个对象应当尽可能少的去了解其他对象”。
* 优点：消除耦合。

## 3. 面向对象的三大特性
理解了理论知识后，接着通过例子，再理解面向对象的三大特征：`封装`、`继承`、`多态`。

### 1. 封装
封装最好理解了。封装是面向对象的特征之一，是对象和类概念的主要特性。

`封装`，**也就是把客观事物封装成抽象的类，并且类可以把自己的数据和方法只让可信的类或者对象操作**，对不可信的进行信息隐藏。

### 2. 继承
面向对象编程 (OOP) 语言的一个主要功能就是“`继承`”。继承是指这样一种能力：**它可以使用现有类的所有功能，并在无需重新编写原来的类的情况下对这些功能进行扩展**。

通过继承创建的新类称为“子类”或“派生类”。
被继承的类称为“基类”、“父类”或“超类”。

要实现继承，可以通过“**继承**”（Inheritance）和“**组合**”（Composition）来实现。

继承概念的实现方式有三类：`实现继承`、`接口继承`和`可视继承`。
![](https://ttarea.com/post-images/1619592096963.png)

### 3. 多态
多态性（polymorphisn）是允许你将父对象设置成为和一个或更多的他的子对象相等的技术，
简单的说，就是一句话：`允许将子类类型的指针赋值给父类类型的指针`。

实现多态，有二种方式，覆盖，重载。
* 覆盖，是指子类重新定义父类的虚函数的做法。
* 重载，是指允许存在多个同名函数，而这些函数的参数表不同（或许参数个数不同，或许参数类型不同，或许两者都不同）。

那么，多态的作用是什么呢？我们知道，`封装`可以隐藏实现细节，使得代码模块化；`继承`可以扩展已存在的代码模块（类）；它们的目的都是为了——代码重用。而`多态`则是为了实现另一个目的——接口重用！多态的作用，就是为了类在继承和派生的时候，保证使用“家谱”中任一类的实例的某一属性时的正确调用。


# 0. new 与 Object.create() 区别
## 1. new的原理
new 大概会执行以下四个步骤：
* 创建一个空对象
* 将空对象的原型链连接到另一个对象
* 执行构造函数中的代码并绑定 this 到这个对象
* 如函数没有返回值，则返回该对象

自己实现一个 _new(Constructor,...args):
```
function _new() {
     // 参数为 对象A，属性
      // 1.创建一个空对象
     let obj = {}
 
     // 2.将该空对象的原型链连接到传入的对象
     let [Con, ...args] = arguments
     obj.__proto__ = Con.prototype
 
     // 3.执行函数并绑定 this
     let res = Con.apply(obj, args)
 
     // 4.如果函数有返回值并且为object，则返回函数的返回值，否则返回obj
     return res instanceof Object ? res : obj
   }
 
   function Person(name, age) {
     this.name = name
     this.age = age
   }
   Person.prototype.getName = function() {
     return this.name
   }
 
   let p = _new(Person, "sillywa", 23)
```

## 2. Object.create()介绍
Object.create(null) 创建的对象是一个空对象，在该对象上没有继承 Object.prototype 原型链上的属性或者方法,例如：toString(), hasOwnProperty()等方法

**Object.create()**方法接受两个参数:Object.create(`obj`,`propertiesObject`) ;

* obj:一个对象，应该是新创建的对象的原型。
* propertiesObject：可选。该参数对象是一组属性与值，该对象的属性名称将是新创建的对象的属性名称，值是属性描述符（这些属性描述符的结构与Object.defineProperties()的第二个参数一样）


# 1. 原型/原型链/构造函数/实例/继承
## 1.1 创建对象的几种方法
~~~
<script type="text/javascript" charset="utf-8">
		//创建对象的几种方式
		//1.字面量
		var obj1 = {name: 'solo obj1'};
		//2.new Object
		var obj2 = new Object({name: 'solo obj2'})
		//3.构造函数创建
		var M = function(name){
			this.name = name;
		}
		var obj3 = new M('solo obj3');
		//4.Object.create
		var p = {name: 'p'};
		var obj4 = Object.create(p);
	</script>
~~~

## 1.2 原型、构造函数、实例、原型链

构造函数、原型对象、实例的关系可以参照下图：
![](https://ttarea.com/post-images/1614923904668.png)

构造函数.prototype.constructor === 构造函数
M.prototype.constructor === M 的结果为 true

构造函数.prototype === 实例对象. proto
M.prototype === obj3._ proto _ 的结果为 true

## 1.3 instanceof 的原理
instanceof 的原理是判断**实例对象的** __proto__ 是否与**构造函数的prototype**指向同一个引用。

## 1.4 instanceof 和 typeof 的区别
* typeof 对于基本数据类型（`null, undefined, string, number, boolean, symbol`），除了 null 都会返回正确的类型。null 会返回 object。
* typeof 对于对象类型，除了函数会返回 function，其他的都返回 object。
* typeof会返回一个变量的基本类型, instanceof返回的是一个布尔值
* 需要注意的是，instanceof只能用来判断对象和函数，不能用来判断字符串和数字等
* typeof不能用于判断是否为数组，因为都会返回object


## 1.5 原型链
JS中每个函数都存在有一个原型对象属性prototype。并且所有函数的默认原型都是Object的实例。每个继承父函数的子函数的对象都包含一个内部属性proto。该属性包含一个指针，指向父函数的prototype。若父函数的原型对象的_proto_属性为再上一层函数。在此过程中就形成了原型链。

`原型链的作用是用来实现继承,比如我们新建一个数组,数组的方法就是从数组的原型上继承而来的`。

当访问对象a.b的时候，首先会查找当前对象的b属性，如果没有，然后依次按照prototype往上找直到找到Object.prototype为止，没有则返回undefined，所以说无处不在。

![](https://ttarea.com/post-images/1619259847019.png)

js的想要调用公共类的方式就是继承原型。

比如原生的[].forEach()方法，之所以任意数组都能使用，是应为forEach()被定义在了数组的构造函数function Array(){}上，也就是数组的原型上；

## 例子
~~~
function F(){} var f = new F(); // 构造器 
F.prototype.constructor === F; // true 
F.__proto__ === Function.prototype; // true 
Function.prototype.__proto__ === Object.prototype; // true Object.prototype.__proto__ === null; // true // 实例
f.__proto__ === F.prototype; // true 
F.prototype.__proto__ === Object.prototype; // true Object.prototype.__proto__ === null;// true
~~~
![](https://ttarea.com/post-images/1614925004509.png)

# 2. 有几种方式可以实现继承
ES5实现继承有6种方式：
* 原型链继承
* 借用构造函数继承
* 组合继承
* 原型式继承
* 寄生式继承
* 寄生组合式继承

**寄生组合式**继承是大家公认的最好的实现引用类型继承的方法。

## 1.  原型链继承
原型链继承的基本思想是**利用原型让一个引用类型继承另一个引用类型的属性和方法**。
```

function SuperType() {
    this.name = 'Yvette';
    this.colors = ['pink', 'blue', 'green'];
}
SuperType.prototype.getName = function () {
    return this.name;
}
function SubType() {
    this.age = 22;
}
SubType.prototype = new SuperType();
SubType.prototype.getAge = function() {
    return this.age;
}
SubType.prototype.constructor = SubType;
let instance1 = new SubType();
instance1.colors.push('yellow');
console.log(instance1.getName()); //'Yvette'
console.log(instance1.colors);//[ 'pink', 'blue', 'green', 'yellow' ]
 
let instance2 = new SubType();
console.log(instance2.colors);//[ 'pink', 'blue', 'green', 'yellow' ]
```
**缺点：**
1. 通过原型来实现继承时，原型会变成另一个类型的实例，原先的实例属性变成了现在的原型属性，该原型的引用类型属性会被所有的实例共享。
2. 在创建子类型的实例时，没有办法在不影响所有对象实例的情况下给超类型的构造函数中传递参数。

## 2. 借用构造函数
**借用构造函数**的技术，其基本思想为: 在子类型的构造函数中调用超类型构造函数。
```
function SuperType(name) {
    this.name = name;
    this.colors = ['pink', 'blue', 'green'];
}
function SubType(name) {
    SuperType.call(this, name);
}
let instance1 = new SubType('Yvette');
instance1.colors.push('yellow');
console.log(instance1.colors);//['pink', 'blue', 'green', yellow]
 
let instance2 = new SubType('Jack');
console.log(instance2.colors); //['pink', 'blue', 'green']
```
**优点:**
1. 可以向超类传递参数
2. 解决了原型中包含引用类型值被所有实例共享的问题

**缺点:**
1. 方法都在构造函数中定义，函数复用无从谈起，另外超类型原型中定义的方法对于子类型而言都是不可见的。

## 3. 组合继承(原型链 + 借用构造函数)
基本思路：使用原型链实现对原型属性和方法的继承，通过借用构造函数来实现对实例属性的继承，既通过在原型上定义方法来实现了函数复用，又保证了每个实例都有自己的属性。
```
function SuperType(name) {
    this.name = name;
    this.colors = ['pink', 'blue', 'green'];
}
SuperType.prototype.sayName = function () {
    console.log(this.name);
}
function SuberType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}
SuberType.prototype = new SuperType();
SuberType.prototype.constructor = SuberType;
SuberType.prototype.sayAge = function () {
    console.log(this.age);
}
let instance1 = new SuberType('Yvette', 20);
instance1.colors.push('yellow');
console.log(instance1.colors); //[ 'pink', 'blue', 'green', 'yellow' ]
instance1.sayName(); //Yvette
 
let instance2 = new SuberType('Jack', 22);
console.log(instance2.colors); //[ 'pink', 'blue', 'green' ]
instance2.sayName();//Jack
```
**优点:**
1. 可以向超类传递参数
2. 每个实例都有自己的属性
3. 实现了函数复用

**缺点:**
无论什么情况下，都会调用两次超类型构造函数：一次是在创建子类型原型的时候，另一次是在子类型构造函数内部。

## 4. 原型式继承
原型继承的基本思想：
借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型。 
```

function object(o) {
    function F() { }
    F.prototype = o;
    return new F();
}
```
在 object() 函数内部，先创建一个临时性的构造函数，然后将传入的对象作为这个构造函数的原型，最后返回了这个临时类型的一个新实例，从本质上讲，object() 对传入的对象执行了一次浅拷贝。

在没有必要创建构造函数，仅让一个对象与另一个对象保持相似的情况下，原型式继承是可以胜任的。

**缺点:**
1. 同原型链实现继承一样，包含引用类型值的属性会被所有实例共享。

## 5. 寄生式继承
寄生式继承是与原型式继承紧密相关的一种思路。寄生式继承的思路与寄生构造函数和工厂模式类似，即创建一个仅用于封装继承过程的函数，该函数在内部已某种方式来增强对象，最后再像真地是它做了所有工作一样返回对象。
```

function createAnother(original) {
    var clone = object(original);//通过调用函数创建一个新对象
    clone.sayHi = function () {//以某种方式增强这个对象
        console.log('hi');
    };
    return clone;//返回这个对象
}
var person = {
    name: 'Yvette',
    hobbies: ['reading', 'photography']
};
 
var person2 = createAnother(person);
person2.sayHi(); //hi
```
基于 person 返回了一个新对象 -—— person2，新对象不仅具有 person 的所有属性和方法，而且还有自己的 sayHi() 方法。在考虑对象而不是自定义类型和构造函数的情况下，寄生式继承也是一种有用的模式。

**缺点：**
1. 使用寄生式继承来为对象添加函数，会由于不能做到函数复用而效率低下。
2. 同原型链实现继承一样，包含引用类型值的属性会被所有实例共享。

## 6. 寄生组合式继承
所谓寄生组合式继承，即通过借用构造函数来继承属性，通过原型链的混成形式来继承方法，
**基本思路：**
不必为了指定子类型的原型而调用超类型的构造函数，我们需要的仅是超类型原型的一个副本，本质上就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。
```
function inheritPrototype(subType, superType) {
    var prototype = object(superType.prototype); //创建对象
    prototype.constructor = subType;//增强对象
    subType.prototype = prototype;//指定对象
}
```
* 第一步：创建超类型原型的一个副本
* 第二步：为创建的副本添加 constructor 属性
* 第三步：将新创建的对象赋值给子类型的原型

至此，我们就可以通过调用 inheritPrototype 来替换为子类型原型赋值的语句：
```

function SuperType(name) {
    this.name = name;
    this.colors = ['pink', 'blue', 'green'];
}
//...code
function SuberType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}
SuberType.prototype = new SuperType();
inheritPrototype(SuberType, SuperType);
//...code
```
**优点:**
1. 只调用了一次超类构造函数，效率更高。避免在SuberType.prototype上面创建不必要的、多余的属性，与其同时，原型链还能保持不变。

因此寄生组合继承是引用类型最理性的继承范式。

## 7 es6继承
ES6新增class和extends语法，用来定义类和实现继承，底层也是采用了寄生组合式继承。

# 3. 用原型实现继承有什么缺点，怎么解决
**原型继承**
~~~
function Human(){
this.name="teacher";
this,age=39;
}
function Man(){
}
Man.prototype=new Human();
var m=new Man();
/*此时Man.name=teacher;Man.age=39；*/
~~~
**优点：**
可以继承构造函数属性，也可继承原型属性

**缺点：**
1，在创建子类实例化时，不能向超类型的构造函数中传参
2，子类型继承了父类型原型中的所有属性和方法，但对于引用类型属性值所有实例共享，故不能在不改变其他实例情况下改变。

**解决方式**
使用混合继承。

# 4. arguments
arguments 是一个**类似数组**的对象, 对应于传递给函数的**参数**。

arguments对象是所有函数中可用的局部变量。你可以使用arguments对象在函数中引用函数的参数。
~~~
arguments[0]
arguments[1]
arguments[2]
~~~
arguments对象不是一个 Array 。它类似于数组，但除了 长度之外没有任何数组属性。

可以使用 Array.from()方法或 spread 运算符将 arguments 转换为真正的数组：
~~~
let args = Array.from(arguments);
let args = [...arguments];
~~~
如果你调用一个函数，当这个函数的参数数量比它显式声明的参数数量更多的时候，你就可以使用 arguments 对象。你可以用 arguments.length 来得到参数的数量，然后可以用 arguments object 来对每个参数进行处理。

* arguments.callee：指向当前执行的函数。
* arguments.caller **：指向调用当前函数的函数。
* arguments.length：指向传递给当前函数的参数数量。

`模拟函数重载`
~~~
function add(num1, num2, num3) {
if (arguments.length === 2) {
    console.log("Result is " + (num1 + num2));
     }
else if (arguments.length === 3) {
    console.log("Result is " + (num1 + num2 + num3));
     }
｝
~~~
add(1, 2);
add(1, 2, 3)

执行结果如下：
Result is 3
Result is 6

# 5. 数据类型判断
## 5.0 null和undefined的区别
![](https://ttarea.com/post-images/1619269681622.png)


## 5.1 JavaScript 数据类型
JavaScript 数据类型有两种，分别是基本数据类型和引用数据类型。

* 基本数据类型
Number
String
Boolean
Undefined
Null
Symbol (ES6 新增，表示独一无二的值)

* 引用数据类型
Object
Function
Array

## 5.2 检验数据类型
### 5.2.1 typeof
它返回一个表示数据类型的字符串，返回结果包括：
* number
* boolean
* string
* symbol
* object
* undefined
* function

**缺点**：
除 function 以外的对象都会被识别成 object ，这样显然是不合理的，这时就需要 instanceof 来进行判断。

### 5.2.2 instanceof
**instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上**
简单来说就是 instanceof 是用来判断 A 是否为 B 的实例，表达式为
~~~
A  (object)  instanceof  B  (constructor)
~~~
如果A是B的实例，则返回true,否则返回 false。

**缺点**
1.**是否处于原型链上的判断方法不严谨**
instanceof 方法判断的是是否处于原型链上，而不是是不是处于原型链最后一位

2.**无法判断字面量方式创建的基本数据类型**

3.**无法检测 null 和 undefined**


### 5.2.3 Object.prototype.toString.call()

在 Number、String，Boolean，Array，RegExp、Date、Function 等对象上 toString() 方法都是被重写过了的，会按照一定的规则返回字符串。但是在 object 对象上，这个方式是返回当前方法执行的主体（方法中的this）所属类的详细信息即"[object Object]",其中第一个object代表当前实例是对象数据类型的(这个是固定的 onject)，第二个Object代表的是this所属的类型。

为了每个对象都能通过 Object.prototype.toString() 来检测，需要以 Function.prototype.call() 或者 Function.prototype.apply() 的形式来调用，传递要检查的对象作为第一个参数，称为 thisArg。
~~~
Object.prototype.toString.call('') ;   // [object String]
Object.prototype.toString.call(1) ;    // [object Number]
Object.prototype.toString.call(true) ; // [object Boolean]
Object.prototype.toString.call(undefined) ; // [object Undefined]
Object.prototype.toString.call(null) ; // [object Null]
Object.prototype.toString.call(new Function()) ; // [object Function]
Object.prototype.toString.call(new Date()) ; // [object Date]
Object.prototype.toString.call([]) ; // [object Array]
Object.prototype.toString.call(new RegExp()) ; // [object RegExp]
Object.prototype.toString.call(new Error()) ; // [object Error]
Object.prototype.toString.call(document) ; // [object HTMLDocument]
Object.prototype.toString.call(window) ; //[object global] window是全局对象global的引用
~~~

# 6. 作用域、作用域链和闭包的理解
## 6.1 作用域
变量的作用域无非就是两种：**全局变量**和**局部变量**。 
`全局作用域`： 
最外层函数定义的变量拥有全局作用域，即对任何内部函数来说，都是可以访问的：
~~~
<script>
      var outerVar = "outer";
      function fn(){
         console.log(outerVar);
      }
      fn();//result:outer
   </script>
~~~
`局部作用域`： 
和全局作用域相反，局部作用域一般只在固定的代码片段内可访问到，而对于函数外部是无法访问的，最常见的例如函数内部
~~~
<script>
      function fn(){
         var innerVar = "inner";
      }
      fn();
      console.log(innerVar);// ReferenceError: innerVar is not defined
</script>
~~~
`只要函数内定义了一个局部变量，函数在解析的时候都会将这个变量“提前声明”：`
~~~
<script>
      var scope = "global";
      function fn(){
         var scope;//提前声明了局部变量
         console.log(scope);//result:undefined
         scope = "local";
         console.log(scope);//result:local;
      }
      fn();
   </script>
~~~

## 6.2 作用域链（Scope Chain）
作用域链，是由当前环境与上层环境的一系列变量对象组成，它保证了当前执行环境对符合访问权限的变量和函数的有序访问。
### 6.2.1 执行环境（execution context）
**js为每一个执行环境关联了一个变量对象。环境中定义的所有变量和函数都保存在这个对象中。**

全局执行环境是最外围的执行环境，全局执行环境被认为是window对象，因此所有的全局变量和函数都作为window对象的属性和方法创建的。 
~~~
 <script>
      var scope = "global"; 
      function fn1(){
         return scope; 
      }
      function fn2(){
         return scope;
      }
      fn1();
      fn2();
   </script>
~~~
上面代码执行情况演示： 
![](https://ttarea.com/post-images/1614938134873.jpg)

### 6.2.2 作用域链
~~~

name="lwy";
function t(){
    var name="tlwy";
    function s(){
        var name="slwy";
        console.log(name);
    }
    function ss(){
        console.log(name);
    }
    s();
    ss();
}
t();
~~~
当执行s时，将创建函数s的执行环境(调用对象),并将该对象置于链表开头，然后将函数t的调用对象链接在之后，最后是全局对象。然后从链表开头寻找变量name,很明显name是"slwy"。

但执行ss()时，作用域链是： ss()->t()->window,所以name是”tlwy"

## 6.3 闭包
![](https://ttarea.com/post-images/1614941970240.png)

### 1. 闭包的定义
一个函数对其周围状态(变量)的**引用**并**保存**周围变量，乃至函数执行完成后仍然可以访问的现象称之为闭包。

### 2. 闭包的原理
闭包的实现原理，其实是利用了作用域链的特性，我们都知道作用域链就是在当前执行环境下访问某个变量时，如果不存在就一直向外层寻找，最终寻找到最外层也就是全局作用域，这样就形成了一个链条。

### 3. 闭包的特点
1. 函数嵌套函数。
2. 函数内部可以引用外部的参数和变量。
3. 参数和变量不会被垃圾回收机制回收。

### 4. 闭包的优缺点
**优点**：
* 希望一个变量长期存储在内存中。
* 避免全局变量的污染。
* 私有成员的存在。

**缺点**：
* 导致变量不会被垃圾回收机制回收，造成内存消耗
* 不恰当的使用闭包可能会造成内存泄漏的问题

### 5. 闭包的作用
闭包有两个`作用`： 
* 第一个就是读取及操作外部函数的私有变量（沿着作用域链寻找） 
* 第二个就是让这些外部变量始终保存在内存中 
~~~
<script>
      function outer(){
         var result = new Array();
         for(var i = 0; i < 2; i++){//注：i是outer()的局部变量
            result[i] = function(){
               return i;
            }
         }
         return result;//返回一个函数对象数组
         //这个时候会初始化result.length个关于内部函数的作用域链
      }
      var fn = outer();
      console.log(fn[0]());//result：2
      console.log(fn[1]());//result：2
   </script>
~~~
**js函数内的变量值不是在编译的时候就确定的，而是等在运行时期再去寻找的。**

闭包让外部访问函数内部的变量成为可能（私有属性），因为被引用的数据常驻内存，可能会造成内存泄露（一块内存长期被变量占据而不进行释放），闭包可以让你在一个内层函数中访问到其外层函数的作用域的状态并保存，在js中每当创建一个函数，闭包环境就在函数创建时产生，闭包环境相互独立，如果闭包环境引用外部函数作用域的一个变量a，即使当外部函数作用域的变量被销毁释放内存，但变量a不会被删除。
~~~
 function outer(){
         var result = new Array();
         for(var i = 0; i < 2; i++){
            //定义一个带参函数
            result[i] = function(num){
               function innerarg(){
                  return num;
               }
               return innerarg;
            }(i);//预先执行函数写法
            //把i当成参数传进去
         }
         return result;
      }
~~~

### 6. 闭包变量回收
当闭包函数无外链引用时，闭包函数被垃圾回收机制标记，`闭包自身呗回收，里边的变量自然就一起被回收了`

# 7. Ajax的原生写法
## 7.1 Ajax 是什么？
* 全称Asynchronous JavaScript and XML；
* 异步的 JavaScript 和 XML；
* 可以在不重新加载整个页面的情况下，与服务器交换数据并更新部分网页内容；
* 能够实现局部刷新，大大降低了资源的浪费；
* 不需要任何浏览器插件，但需要用户允许JavaScript在浏览器上执行；

## 7.2 Ajax的使用
Ajax的使用分为四部分：
1.） 创建一个XMLHttpRequest对象；

2.） 配置请求信息；
* 请求的方式；
* 请求文件的路径；
* 是否异步，默认为true；

3.）发送请求；
* get与post的区别；
* get与post的使用场景；

4.） 监听状态变化，执行相应回调函数；
* http状态码都有哪些？
* 不同状态码代表的含义？

### 7.2.1 创建XMLHttpRequest对象
`var xhr = new XMLHttpRequest()`;

### 7.2.2 连接服务器
使用 XMLHttpRequest 对象的open() 方法：

### 7.2.3 向服务器发送请求
使用 XMLHttpRequest 对象的send() 方法：
![](https://ttarea.com/post-images/1614951772130.png)

### 7.2.4 监听事件变化
* 如果是同步请求的话，不需要写监听事件变化函数；
* 一般默认都是异步请求，才写监听函数；

存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
* 0: 请求未初始化
* 1: 服务器连接已建立
* 2: 请求已接收
* 3: 请求处理中
* 4: 请求已完成，且响应已就绪

## 7.3 Ajax原生写法
### 7.3.1 Get请求
~~~
const xhr = new XMLHttpRequest()
        xhr.open("GET", "http://localhost:3000/users?id=1")
        xhr.send(null)

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        }
~~~
### 7.3.2 Post请求
~~~
const xhr = new XMLHttpRequest()
        xhr.open("POST", "http://localhost:3000/users")
        xhr.setRequestHeader("Content-Type", "application/json")
        // 转换为json传递
        xhr.send(JSON.stringify({
            "name": "luke",
            "age" : 19,
            "class": 2
        }))

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        }
~~~

# 8. 对象深拷贝、浅拷贝
~~~
let a = {
    age: 1
}
let b = a
a.age = 2
console.log(b.age) // 2
~~~
从上述例子中我们可以发现，如果给一个变量赋值一个对象，那么两者的值会是同一个引用，其中一方改变，另一方也会相应改变。

>如何区分深拷贝与浅拷贝，简单点来说，就是假设B复制了A，当修改A时，看B是否会发生变化，如果B也跟着变了，说明这是浅拷贝，拿人手短，如果B没变，那就是深拷贝，自食其力。

1. `如果是基本数据类型，名字和值都会储存在栈内存中`
2. `如果是引用数据类型，名字存在栈内存中，值存在堆内存中，但是栈内存会提供一个引用的地址指向堆内存中的值`

## 8.1 浅拷贝
![](https://ttarea.com/post-images/1617331269019.png)
首先可以通过 `Object.assign` 来解决这个问题。
~~~
let a = {
    age: 1
}
let b = Object.assign({}, a)
a.age = 2
console.log(b.age) // 1
~~~
当然我们也可以通过展开运算符`（…）`来解决
~~~
let a = {
    age: 1
}
let b = {...a}
a.age = 2
console.log(b.age) // 1
~~~

通常浅拷贝就能解决大部分问题了，但是当我们遇到如下情况就需要使用到深拷贝了
~~~
let a = {
    age: 1,
    jobs: {
        first: 'FE'
    }
}
let b = {...a}
a.jobs.first = 'native'
console.log(b.jobs.first) // native
~~~
浅拷贝只解决了第一层的问题，如果接下去的值中还有对象的话，那么就又回到刚开始的话题了，两者享有相同的引用。要解决这个问题，我们需要引入深拷贝。

## 8.2 深拷贝
![](https://ttarea.com/post-images/1617331301932.png)
这个问题通常可以通过 `JSON.parse(JSON.stringify(object))` 来解决。
~~~
let a = {
    age: 1,
    jobs: {
        first: 'FE'
    }
}
let b = JSON.parse(JSON.stringify(a))
a.jobs.first = 'native'
console.log(b.jobs.first) // FE
~~~
但是该方法也是有局限性的：
* 会忽略 undefined
* 会忽略 symbol
* 不能序列化函数
* 不能解决循环引用的对象

# 9. 图片懒加载、预加载
## 9.1 懒加载
### 9.1.1 什么是懒加载
**懒加载又称延迟加载**。当访问一个页面的时候，需要先把img元素或者其他元素的背景图先用一张默认的图片代替（占位图），这样浏览器渲染页面的时候就只需请求一次。当图片出现在浏览器可视区域的时候，才设置图片的真实路径，把图片显示出来。

### 9.1.2 为什么要使用图片懒加载？
当页面中图片的数量多到一定数量的时候，并且图片大小比较大，比如各种商场网站，图片素材网等等。如果在页面一加载的时候就加载全部图片，显然会影响网站加载速度和加大服务器负担，而且用户体验也必然不好，那么这时候可以采用懒加载。

### 9.1.3 懒加载具体实现原理
页面中的img元素之所以会发送http请求的原因是设置了src属性，否则浏览器就不会发送请求去下载这个图片。
首先在页面中把所有的图片用一张占位图进行占位，并且在元素下设置data-src自定义属性，存放图片的真实路径，当需要用到的时候取出该真实路径动态添加给src。

`懒加载具体实现方式`：
* 1.第一种是纯粹的延迟加载，使用setTimeOut或setInterval进行加载延迟.

* 2.第二种是条件加载，符合某些条件，或触发了某些事件才开始异步下载。

* 3.第三种是可视区加载，即仅加载用户可以看到的区域，这个主要由监控滚动条来实现，一般会在距用户看到某图片前一定距离便开始加载，这样能保证用户拉下时正好能看到图片。


## 9.2 预加载
### 9.2.1 什么是预加载
预加载就是提前加载图片，当用户需要查看时可直接从本地缓存中渲染。

### 9.2.2 为什么要使用图片预加载？
当页面中图片比较大的时候，页面加载的时候会出现该区域空白的效果或者看到图片正在慢慢地加载出来，为了提高用户体验，需要把这些图片提前加载到缓存中，当用户一打开页面的时候，这些图片就会快速的呈现出来，获得更好的用户体验效果。

### 9.2.3 实现方式有哪些？
方法1：使用css和JavaScript实现预加载
方法2：只使用JavaScript实现预加载
方法3：使用ajax实现预加载

常用的是`new Image()`;设置其src来实现预载，再使用onload方法回调预载完成事件。只要浏览器把图片下载到本地，同样的src就会使用缓存，这是最基本也是最实用的预载方法。当Image下载完图片头后，会得到宽和高，因此可以在预载前得到图片的大小(方法是用记时器轮循宽高变化。)

# 10. script标签async和defer的区别
![](https://ttarea.com/post-images/1633684597596.jpg)

# 11. this关键字
首先我们需要得出一个非常重要一定要牢记于心的结论，`this的指向，是在函数被调用的时候确定的`。也就是执行上下文被创建时确定的。因此，一个函数中的this指向，可以是非常灵活的。比如下面的例子中，同一个函数由于调用方式的不同，this指向了不一样的对象。
~~~
var a = 10;
var obj = {
    a: 20
}
function fn () {
    console.log(this.a);
}
fn(); // 10
fn.call(obj); // 20
~~~
除此之外，`在函数执行过程中，this一旦被确定，就不可更改了。`

* 情况1：如果一个函数中有this，但是它没有被上一级的对象所调用，那么this指向的就是window，这里需要说明的是在js的严格版中this指向的不是window，但是我们这里不探讨严格版的问题，你想了解可以自行上网查找。

* 情况2：如果一个函数中有this，这个函数有被上一级的对象所调用，那么this指向的就是上一级的对象。

* 情况3：如果一个函数中有this，这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象，


## 11.1 全局对象中的this
关于全局对象的this，我之前在总结变量对象的时候提到过，它是一个比较特殊的存在。全局环境中的this，指向它本身。

## 11.2 函数中的this
在一个函数上下文中，this由调用者提供，由调用函数的方式来决定。**如果调用者函数，被某一个对象所拥有，那么该函数在调用时，内部的this指向该对象。如果函数独立调用，那么该函数内部的this，则指向undefined**。但是在非严格模式中，当this指向undefined时，它会被自动指向全局对象。
~~~
var a = 20;
var foo = {
    a: 10,
    getA: function () {
        return this.a;
    }
}
console.log(foo.getA()); // 10

var test = foo.getA;
console.log(test());  // 20
~~~
`foo.getA()`中，getA是调用者，他不是独立调用，被对象foo所拥有，因此它的this指向了foo。而`test()`作为调用者，尽管他与foo.getA的引用相同，但是它是独立调用的，因此this指向undefined，在非严格模式，自动转向全局window。

## 11.3 使用call，apply显示指定this
JavaScript内部提供了一种机制，让我们可以自行手动设置this的指向。它们就是call与apply。所有的函数都具有着两个方法。它们除了参数略有不同，其功能完全一样。它们的第一个参数都为this将要指向的对象。

而call与applay后面的参数，都是向将要执行的函数传递参数。其中call以一个一个的形式传递，apply以数组的形式传递。这是他们唯一的不同。
~~~
function fn(num1, num2) {
    console.log(this.a + num1 + num2);
}
var obj = {
    a: 20
}

fn.call(obj, 100, 10); // 130
fn.apply(obj, [20, 10]); // 50
~~~

## 11.4 构造函数与原型方法上的this
通过new操作符调用构造函数，会经历以下4个阶段。
* 创建一个新的对象；
* 将构造函数的this指向这个新对象；
* 指向构造函数的代码，为这个对象添加属性，方法等；
* 返回新对象。
~~~
function Person(name, age) {

    // 这里的this指向了谁?
    this.name = name;
    this.age = age;   
}

Person.prototype.getName = function() {

    // 这里的this又指向了谁？
    return this.name;
}

// 上面的2个this，是同一个吗，他们是否指向了原型对象？

var p1 = new Person('Nick', 20);
p1.getName();
~~~
因此，当new操作符调用构造函数时，this其实指向的是这个新创建的对象，最后又将新的对象返回出来，被实例对象p1接收。因此，我们可以说，这个时候，构造函数的this，指向了新的实例对象，p1。

# 12. 函数式编程
函数式编程是一种编程范式，是一种构建计算机程序结构和元素的风格，它把计算看作是对数学函数的评估，**避免了状态的变化和数据的可变**。

**纯函数**：
* 如果给定相同的参数，则返回相同的结果(也称为确定性)。
* 它不会引起任何副作用。

**特点**
1. 函数是一等公民
2. 只用表达式不用语句
3. 没有副作用(side effect)
4. 不修改状态
5. 引用透明

**优势**
1. 代码简洁，开发快速
2. 接近自然语言，易于理解
3. 更方便的代码管理
4. 易于"并发编程"
5. 代码的热升级

# 13. 手动实现parseInt
主要用到的ES5中的`map`函数和`reduce`函数，还有利用了javascript是弱类型转换的特点
~~~
function str2num(str) {
  var strArr = str.split('')
  var strArrNum = strArr.map(function (str) {
    return +str
  })
  var num = strArrNum.reduce(function (x, y) {
    return x * 10 + y
  })
  return num
}
str2num('123')
~~~

# 14. 为什么会有同源策略
## 14.1 什么是同源策略
两个页面地址中的协议，域名，端口号一致，则表示同源

## 14.2 为什么浏览器要使用同源策略
设置同源策略的主要目的是为了安全，如果没有同源限制，在浏览器中的cookie等其他数据可以任意读取，不同域下的DOM任意操作，ajax任意请求其他网站的数据，包括隐私数据。

# 15. 怎么判断两个对象是否相等

方法一：通过`JSON.stringify(obj)`来判断两个对象转后的字符串是否相等
* 优点：用法简单，对于顺序相同的两个对象可以快速进行比较得到结果
* 缺点：这种方法有限制就是当两个对比的对象中key的顺序不是完全相同时会比较出错

方法二：`getOwnPropertyNames`该方法可以将Object对象的第一层key获取到并返回一个由第一层key组成的数组。
* 优点：相对方法一进行了优化，可以应对不同顺序的Object进行比较，不用担心顺序不同而对比出错
* 缺点：从方法中可以看到只能获取到第一层的key组成的数组，当对象是复合对象时无法进行多层对象的比较
~~~
// 对Object扩展一个方法chargeObjectEqual
Object.prototype.chargeObjectEqual = function(obj){
    // 当前Object对象
    var propsCurr = Object.getOwnPropertyNames(this);
    // 要比较的另外一个Object对象
    var propsCompare = Object.getOwnPropertyNames(obj);
    if (propsCurr.length != propsCompare.length) {
        return false;
    }
    for (var i = 0,max = propsCurr.length; i < max; i++) {
        var propName = propsCurr[i];
        if (this[propName] !== obj[propName]) {
            return false;
        }
    }
    return true;
}
~~~

# 16. 事件模型
## 1.基本概念
**事件代理**（Event Delegation），又称之为事件委托。是JavaScript中常用绑定事件的常用技巧。顾名思义，“事件代理”即是把原本需要绑定在子元素的响应事件（click、keydown......）委托给父元素，让父元素担当事件监听的职务。事件代理的原理是DOM元素的事件冒泡。

## 2. 事件传播
一个事件触发后，会在子元素和父元素之间**传播**（propagation）。这种传播分成三个阶段
![](https://ttarea.com/post-images/1615169023216.jpg)
如上图所示，事件传播分成三个阶段：
* 捕获阶段：从window对象传导到目标节点（上层传到底层）称为“捕获阶段”（capture phase），捕获阶段不会响应任何事件；
* 目标阶段：在目标节点上触发，称为“目标阶段”
* 冒泡阶段：从目标节点传导回window对象（从底层传回上层），称为“冒泡阶段”（bubbling phase）。**事件代理即是利用事件冒泡的机制把里层所需要响应的事件绑定到外层**；



## 3. 事件冒泡和捕获
`冒泡`
* **就是从事件 目标 的事件处理函数开始，依次向外，直到 window 的事件处理函数触发（先执行目标元素事件，再依次执行父元素事件）**

`捕获`
* **就是从 window 的事件处理函数开始，依次向内，直到事件 目标 的事件处理函数执行（最后才执行目标元素）**
![](https://ttarea.com/post-images/1619616013812.jpg)

`阻止事件传播`
* 如果想只触发当前点击对象的事件，不想让外层的事件触发 ，可以使用不冒泡**e.cancelBubble=true**或不传播 **e.stopPropagation()**
```
var box = document.querySelector('.box')
    var atr = document.querySelector('.atr')
    box.onclick = function (e) {
        e.stopPropagation() // 不传播
        console.log('我被点击了box')
    }
    atr.onclick = function (e) {
        e.cancelBubble=true //不冒泡
        console.log('我被点击了atr')
    }
```
## 4. 事件委托
* 因为我们的冒泡机制，点击子元素的时候，也会同步触发父元素的相同事件 ，所以我们就可以把子元素的事件委托给父元素来做
* **点击子元素的时候，不管子元素有没有点击事件，只要父元素有点击事件，那么就可以触发父元素的点击事件**
```
 atr.onclick = function (e) {
        // e.stopPropagation()
        var e = e || window.event //event兼容写法
        var target = e.target || e.srcElement //target兼容写法
        console.log(target,'执行子盒子的点击事件')
    }
box.onclick = function (e) {
        var e = e || window.event //event兼容写法
        var target = e.target || e.srcElement //target兼容写法
        console.log(target,'执行父盒子的点击事件')
    }
```
`target`

* target 这个属性是事件对象里面的属性，表示你点击的目标
* 当你触发点击事件的时候，你点击在哪个元素上，target 就是哪个元素
* 这个 target 也不兼容，在 IE 下要使用 srcElement

`委托`

* 这个时候，当我们点击 box里面的元素的时候，也可以触发 box 的点事件
* 并且在事件内部，我们也可以拿到你点击的到底是哪个对象
* 这个时候，我们就可以把 li 的事件委托给 box 父级来做
```
var box = document.querySelector('.box')
    var atr = document.querySelector('.atr')
    
    atr.onclick = function (e) {
        var e = e || window.event //event兼容写法
        var target = e.target || e.srcElement //target兼容写法
        if(target.className=='atr'){
            //这里面就找到需要操作的元素
            console.log(111)
        }
    }
```


## 5. 事件委托的优点
**【1】可以大量节省内存占用，减少事件注册，比如在ul上代理所有li的click事件就非常棒**

**【2】可以实现当新增子对象时无需再次对其绑定（动态绑定事件）**


## 6. 事件的默认行为
**默认行为，就是不用我们注册，它自己就存在的事情**
* 比如我们点击鼠标右键的时候，会自动弹出一个菜单
* 比如我们点击 a 标签的时候，我们不需要注册点击事件，他自己就会跳转页面

**这些不需要我们注册就能实现的事情，我们叫做默认事件**

`阻止默认行为`
![](https://ttarea.com/post-images/1619617595767.png)
```
var oA = document.querySelector('a')
    a.addEventListener('click', function (e) {
        e = e || window.event
        console.log(this.href)
        //下面这个是兼容写法
        e.preventDefault ? e.preventDefault() : e.returnValue = false
    })
```

## 7. 如何让事件先冒泡后捕获
若要实现先冒泡后捕获，给一个元素绑定两个addEventListener，其中一个第三个参数设置为false（即冒泡），另一个第三个参数设置为true（即捕获），调整它们的代码顺序，将设置为false的监听事件放在设置为true的监听事件前面即可。


# 17. DOM基本操作（获取元素、节点的创建和添加、节点的替换和删除）
## 1. 获取元素
`document.getElementById`通过id名字获取节点
```
 <div id="box">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
```
```
var oBox = document.getElementById("box");
```
`document.getElementsByClassName`通过class名字获取节点 获取的是一个数组
```
<div class="box">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
```
```
var oBox = document.getElementsByClassName("box");
```
在HTML与CSS里.class类名是`可以重复`使用的，在页面上可能出现多个重复的.class类名，他是获取到多个把获取到多个放在数组里
```
var oBox = document.getElementsByClassName("box")[0]
 //通过下标来换取索引0的值也可以获取别的索引值
```
`document.getElementsByTagName` 通过标签名字获取节点 获取的是一个数组
```
<div class="box">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
    <div class="box"></div>
    <div></div>
```
```
var aBox = document.getElementsByTagName("div");
```
![](https://ttarea.com/post-images/1618115504124.png)
>那么如何获取数组里面的值呢？？？
```
var aBox = document.getElementsByTagName("div")[2];//通过下标来换取索引2的值
```
![](https://ttarea.com/post-images/1618115545753.png)

`document.querySelectorAll` 通过复合（层级）选择器获取节点 获取的是一个数组
```
 <div class="box">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
```
```
 var  aLi = document.querySelectorAll(".box ul li");
```
![](https://ttarea.com/post-images/1618115797303.png)
>那么如何获取数组里面的值呢？？？
```
var aLi  = document.querySelectorAll(".box ul li")[1];
```
![](https://ttarea.com/post-images/1618115827067.png)

`document.querySelector` 通过复合（层级）选择器获取符合条件的第一个节点
```
var oLi = document.querySelector(".box ul li");
```
![](https://ttarea.com/post-images/1618115873612.png)

`document.getElementsByName` 通过name属性获取节点 获取的是一个数组
```
<input type="radio" name="sex" value="男">男
<input type="radio" name="sex" value="女">女
```
```
var aInput = document.getElementsByName("sex");
```
![](https://ttarea.com/post-images/1618116016375.png)


**获取特殊元素的方式**
* `document.head` 获取`head`标签
* `document.body` 获取`body`标签
* `document.documentElement` 获取`html`标签
![](https://ttarea.com/post-images/1618116077529.png)


## 2. 节点的创建和添加（创建完一定要添加）
### 1. 节点的创建
`document.createElement` 创建元素节点
```
 var oDiv = document.createElement("div");
```
**如何把这个属性节点添加到DOM树中?**
```
<div id="box">
        <span>我是haven</span>
</div>
```
```
var oBox = document.getElementById("box");
var oDiv = document.createElement("div");
oBox.appendChild(oDiv); 
```
![](https://ttarea.com/post-images/1618116529080.png)


`document.createTextNode`创建文本节点
```
var oText = document.createTextNode("heaven")
```
**如何把这个文本节点添加到DOM树中?**
```
<div id="box">
    <span>我是haven</span>
</div>
```
```
var oBox = document.getElementById("box");
var oText = document.createTextNode("heaven");
oBox.appendChild(oText);
```
![](https://ttarea.com/post-images/1618116715791.png)


`document.createComment` 创建注释节点
```
var oComment = document.createComment("我是注释节点");
```
**如何把这个注释节点添加到DOM树中?**
```
<div id="box">
    <span>我是haven</span>
</div>
```
```
var obox = document.getElementById("box");
var oComment = document.createComment("我是注释节点");
obox.appendChild(oComment);
```
![](https://ttarea.com/post-images/1618117356273.png)

### 2. 节点的添加、剪切操作
`parentNode.appendChild(子节点)` 把子节点插入到父节点的最后面
```
<div id="box">
   <span>我是haven</span>
</div>
```
```
var oBox = document.getElementById("box");
var oDiv = document.createElement("div");
oBox.appendChild(oDiv);//把oDiv插入到oBox的最后面是以字符串形式添加的
```
![](https://ttarea.com/post-images/1618117728592.png)

`parentNode.insertBefore(A,B)` 把节点A添加到节点B之前
```
<div id="box">
        <h2>我是标题</h2>
        <span>我是haven</span>
</div>
```
```
 var oBox = document.getElementById("box");
 var oSpan = document.getElementsByTagName("span")[0];
 var oDiv = document.createElement("div");
 oBox.insertBefore(oDiv,oSpan);
```
![](https://ttarea.com/post-images/1618117898677.png)

**结论：无论是appendChild方法还是insertBefore方法都可以对节点的 添加、剪切操作，都可以操作一次不能操作多次**


## 3. 节点的替换和删除
### 1.节点的替换 
`parentNode.replaceChild(A,B)` 用节点A替换节点B
```
<div id="box">
    <h2>我是标题2</h2>
    <span>我是heaven</span>
    <h3>我是标题3</h3>
</div>
```
```
var oBox = document.getElementById("box");
var oH3 = document.getElementsByTagName("h3")[0]
var oDiv = document.createElement("div");
oBox.replaceChild(oDiv,oH3);
```
![](https://ttarea.com/post-images/1618119399959.png)
### 2. 节点的删除 、删除子节点
`parentNode.removeChild(子节点)` 删除子节点
```
<div id="box">
    <h2>我是标题2</h2>
    <span>我是heaven</span>
    <h3>我是标题3</h3>
</div>
```
```
var oBox = document.getElementById("box");
var oH3 = document.getElementsByTagName("h3");
oBox.removeChild(oH3[0]);
```
![](https://ttarea.com/post-images/1618119515957.png)


## 4. 动态获取与静态获取
### 1. get系列获取元素的方式是动态获取
>动态获取指的是：在获取节点之后还可以检测出符合条件的节点、并放置到集合中
```
  <div id="box">
        <h3>1</h3>
        <h3>2</h3>
        <h3>3</h3>
    </div>
```
```
var oBox = document.getElementById("box");
var oH3 = document.getElementsByTagName("h3");
var h3 = document.createElement("h3");
oBox.appendChild(h3);
```
![](https://ttarea.com/post-images/1618119951624.png)
**动态获取的方式是能再次感知到用js的方法添加新的标签的**

### 2. query系列获取元素的方式是静态态获取
>静态获取指的是：在获取节点之后无法检测出符合条件的节点、不能放置到集合中
```
var oBox = document.getElementById("box");
var oH3 = document.querySelectorAll("h3");
var h3 = document.createElement("h3");
oBox.appendChild(h3);
```
![](https://ttarea.com/post-images/1618120005689.png)
静态获取的方式是不能能再次感知到用js的方法添加新的标签的

## 5. 如何在创建空节点的时候添加内容
### 1. 元素节点
`innerText` 可以设置节点的文本内容、也可以读取节点的内容、`不可以解析`标签
```
<div id="box">
    <h3>1</h3>
    <h3>2</h3>
    <h3>3</h3>
</div>
```
```
var oBox = document.getElementById("box");
var oH3 = document.createElement("h3");
oBox.appendChild(oH3);
oH3.innerText = "我是h3节点";//创建h3标签添加文本内容
```
![](https://ttarea.com/post-images/1618120681297.png)

**那么如何读取元素节点的内容呢？？**
```
var oBox = document.getElementById("box");
var oH3 = document.querySelectorAll("h3");
console.log(oH3[2].innerText);//读取节点的文本内容
```
![](https://ttarea.com/post-images/1618121295691.png)
**修改并赋值**`innerText`
```
var oBox = document.getElementById("box");
var oH3 = document.querySelectorAll("h3");
oH3[0].innerText = "我是修改并赋值的节点";
```
![](https://ttarea.com/post-images/1618121299074.png)


### 2. 元素节点
`innerHTML`可以设置节点的文本内容、也可以读取节点的内容、可以`解析`标签

**怎么样innerHTML方法解析字符串中的标签**
```
var oBox = document.getElementById("box");
var oH3 = document.querySelectorAll("h3");
oH3[0].innerHTML = "<a>我是修改后的文本节点的内容</a>";
console.log(oH3[0].innerHTML);
```
打印的结果是用`innerHTML`替换的结果
![](https://ttarea.com/post-images/1618121585550.png)


## 6. 元素节点的常用方法
### 1. 属性集合
```
<div id="box">
    <h3 class="no">测试标题</h3>
</div>
```
如何拿到`h3`标签的属性集合
```
var oBox = document.getElementById("box");
        console.log(oBox.children[0].attributes);
```
![](https://ttarea.com/post-images/1618123899949.png)

### 2. 设置属性节点
`setAttribute`(属性节点名,属性节点值)、设置指定的属性节点
```
<div id="box">
    <h3 class="no">测试标题</h3>
</div>
```
```
var oBox = document.getElementById("box");
oBox.children[0].setAttribute("id", "title")
```
![](https://ttarea.com/post-images/1618124020361.png)

### 3. 获取属性节点
`getAttribute`(属性节点名)、获取指定属性节点名称的值
```
var oBox = document.getElementById("box");
console.log(oBox.children[0].getAttribute("class"));
```
![](https://ttarea.com/post-images/1618124061317.png)


### 4. 删除属性节点
`removeAttribute`(属性节点名)、删除指定属性节点
```
<div id="box">
    <h3 class="no">测试标题</h3>
</div>
```
```
var oBox = document.getElementById("box");
oBox.children[0].removeAttribute("class");
```
![](https://ttarea.com/post-images/1618124130227.png)

### 5. 判断有没有子节点
`hasChildNodes` 判断元素节点有没有子节点
```
var oBox = document.getElementById("box");
console.log(oBox.children[0].hasChildNodes());
```
![](https://ttarea.com/post-images/1618124186614.png)
* 如果有则返回返回结果是true
* 如果没有则返回结果是是false


# 18. js遍历dom树
## 1. 遍历dom树
~~~
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>遍历DOM树</title>
</head>

<body>
<h1>遍历 DOM 树</h1>
<p style="color: green;">Tip: 可以在遍历的回调函数中任意定制需求</p>
<div>
  <ul>
    <li>123</li>
    <li>456</li>
    <li>789</li>
  </ul>
  <div>
    <div>
      <span>haha</span>
    </div>
  </div>
</div>
<div id="demo_node">
  <ul>
    <li>123</li>
  </ul>
  <p>hello</p>
  <h2>world</h2>
  <div>
    <p>dsa</p>
    <h3>
      <span>dsads</span>
    </h3>
  </div>
</div>
<script>

  //获取页面中的根节点--根标签
  var root=document.documentElement;//html
  //函数遍历DOM树
  //根据根节点,调用fn的函数,显示的是根节点的名字
  function forDOM(root1) {
    //调用f1,显示的是节点的名字
   // f1(root1);
    //获取根节点中所有的子节点
    var children=root1.children;
    //调用遍历所有子节点的函数
    forChildren(children);
  }
  //给我所有的子节点,我把这个子节点中的所有的子节点显示出来
  function forChildren(children) {
    //遍历所有的子节点
    for(var i=0;i<children.length;i++){
      //每个子节点
      var child=children[i];
      //显示每个子节点的名字
      f1(child);
      //判断child下面有没有子节点,如果还有子节点,那么就继续的遍历
      child.children&&forDOM(child);
    }
  }
  //函数调用,传入根节点
  forDOM(root);
  function f1(node) {
    console.log("节点的名字:"+node.nodeName);
  }
  //节点:nodeName,nodeType,nodeValue

</script>
</body>
</html>
~~~

## 2. 多叉 DOM 树的遍历
### 1. 广度优先遍历
首先遍历根节点，然后访问第一层节点，第二层节点，....,直到访问到最后一层。
借助于队列，用非递归的方式对多叉树进行遍历
~~~
Tree.prototype.BFSearch =  function(node,callback){  
    var queue=[];  
    while(node!=null){          
           callback(node);  
       if(node.children.length!=0){  
        for (var i=0;i<node.children.length;i++){  
            queue.push(node.children[i]);//借助于队列,暂存当前节点的所有子节点  
        }   
        }  
            node=queue.shift();//先入先出，借助于数据结构：队列  
    }         
};  
~~~

### 2. 深度优先遍历
首先遍历根节点，然后沿着一条路径遍历到最深的一层，最后在逐层返回。
借助于栈,实现多叉 DOM树 的深度优先遍历。
~~~
Tree.prototype.DFSearch =  function(node,callback){  
        var stack=[];         
        while(node!=null){  
        callback(node);  
        if(node.children.length!=0){  
        for (var i=node.children.length-1;i>=0;i--){//按照相反的子节点顺序压入栈  
            stack.push(node.children[i]);//将该节点的所有子节点压入栈  
        }  
        }  
            node = stack.pop();//弹出栈的子节点顺序就是原来的正确顺序(因为栈是先入后出的)        
    }     
};  
~~~

# 19. 面试查缺补漏
## 1. JS页面跳转方式
* window.location.href= 'url': 比较常用的方法，直接跟指定要跳转的地方。
* window.history.back(-1);: 参见的浏览器返回上一个已访问的页面，直到访问最初访问的页面。
* window.navigate("url");: navigate对象包含有关浏览器的信息，也可以作为页面跳转，后面直接加要跳转的地方。
* top.location= 'url';: 当页面中有内嵌框架时，指定最顶层的窗口跳转，及包含框架的最外层浏览器

![](https://ttarea.com/post-images/1618478544386.png)

## 2. JS弹出框有哪些
**第一种：alert()方法**
![](https://ttarea.com/post-images/1618479050149.png)
**第二种：confirm()方法**
![](https://ttarea.com/post-images/1618479053584.png)
**第三种： prompt()方法**
不但可以显示信息，而且还提供了一个文本框要求用户使用键盘输入自己的信息，同时她还包含“确认”或“取消”两个按钮，如果用户“确认”按钮，则prompt()方法返回用户在文本框中输入的内容（是字符串类型)或者初始值(如果用户没有输入信息);如果用户单击“取消”按钮，则prompt()方法返回null
![](https://ttarea.com/post-images/1618479103065.png)
![](https://ttarea.com/post-images/1618479124548.png)

## 3. url编码和解码的方式
### 1. 为什么要URL编码？
**在因特网上传送URL，只能采用ASCII字符集**
只有字母和数字[0-9a-zA-Z]、一些特殊符号$-_.+!\*'()[不包括双引号]、以及某些保留字（空格转换为+），才可以不经过编码直接用于URL

这意味着 如果URL中有汉字，就必须编码后使用。

### 2. JS编码函数
**encodeURI函数(推荐使用)**
这个函数才是javascript中真正用来对URL编码的函数

它着眼于对整个URL进行编码，因此除了常见的符号以外，对其他一些在网址中有特殊含义的符号"; / ? : @ & = + $ , #"，也不进行编码。编码后，它输出符号的utf-8形式，并且在每个字节前加上%。
需要注意的是，它不对单引号’编码

它对应的解码函数是decodeURI()。

### 3. 为什么两次编码
![](https://ttarea.com/post-images/1618481823390.png)

## 4. meta常用属性
### 1. charset属性
```
<!-- 定义网页文档的字符集 -->
<meta charset="utf-8" />
```
### 2. name + content属性
```
<!-- 网页作者 -->
<meta name="author" content="开源技术团队"/>
<!-- 网页地址 -->
<meta name="website" content="https://sanyuan0704.github.io/frontend_daily_question/"/>
<!-- 网页版权信息 -->
 <meta name="copyright" content="2018-2019 demo.com"/>
<!-- 网页关键字, 用于SEO -->
<meta name="keywords" content="meta,html"/>
<!-- 网页描述 -->
<meta name="description" content="网页描述"/>
<!-- 搜索引擎索引方式，一般为all，不用深究 -->
<meta name="robots" content="all" />
<!-- 移动端常用视口设置 -->
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/>
<!-- 
  viewport参数详解：
  width：宽度（数值 / device-width）（默认为980 像素）
  height：高度（数值 / device-height）
  initial-scale：初始的缩放比例 （范围从>0 到10）
  minimum-scale：允许用户缩放到的最小比例
  maximum-scale：允许用户缩放到的最大比例
  user-scalable：用户是否可以手动缩 (no,yes)
 -->
 ```
 ### 3. http-equiv属性
 ```
 <!-- expires指定网页的过期时间。一旦网页过期，必须从服务器上下载。 -->
<meta http-equiv="expires" content="Fri, 12 Jan 2020 18:18:18 GMT"/>
<!-- 等待一定的时间刷新或跳转到其他url。下面1表示1秒 -->
<meta http-equiv="refresh" content="1; url=https://www.baidu.com"/>
<!-- 禁止浏览器从本地缓存中读取网页，即浏览器一旦离开网页在无法连接网络的情况下就无法访问到页面。 -->
<meta http-equiv="pragma" content="no-cache"/>
<!-- 也是设置cookie的一种方式，并且可以指定过期时间 -->
<meta http-equiv="set-cookie" content="name=value expires=Fri, 12 Jan 2001 18:18:18 GMT,path=/"/>
<!-- 使用浏览器版本 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<!-- 针对WebApp全屏模式，隐藏状态栏/设置状态栏颜色，content的值为default | black | black-translucent -->
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
```

## 5. a标签实现打电话
1. 最常用WEB页面JS实现一键拨号的电话拨打功能：
```
<a href="tel:13764567708">移动WEB页面JS一键拨打号码咨询功能</a>
```
在拨号界面，显示号码，并提示拨打。支持大部分的浏览器，但是在QQ浏览器上支持不好。

2. 最常用WEB页面JS实现一键发送短信功能：
```
<a href="sms:13764567708">移动WEB页面JS一键发送短信咨询功能</a>
```
在信息录入界面，显示发送号码，并提示录入信息。

支持大部分的浏览器，但是在QQ浏览器上支持不好。

3. 最常用WEB页面发邮件：
```
<a href="mailto:youemail@mail.com?subject=邮件标题&body=邮件内容">告诉我们</a>
```

## 6. CSS哪些属性可以继承？ 
**css继承特性主要是指文本方面的继承，盒模型相关的属性基本没有继承特性**。 
`不可继承的`： 

display、margin、border、padding、background、height、min-height、max-height、width、min-width、max-width、overflow、position、top、bottom、left、right、z-index、float、clear、 table-layout、vertical-align、page-break-after

`所有元素可继承的`： 

visibility和cursor 

`终极块级元素可继承的`： 

text-indent和text-align 

`内联元素可继承的`： 

letter-spacing、word-spacing、white-space、line-height、color、font、font-family、font-size、font-style、font-variant、font-weight、text-decoration、text-transform、direction 

`列表元素可继承的`： 

list-style、list-style-type、list-style-position、list-style-image

## 7. window.scroll方法
### 1. window.scroll（到）
![](https://ttarea.com/post-images/1618490087718.png)

### 2.window.scrollTo
![](https://ttarea.com/post-images/1618490106662.png)

与scroll一样

### 3. window.scrollBy（距离）
![](https://ttarea.com/post-images/1618490176094.png)

## 8. head头包含哪些标签？
head标签是所有头部元素的容器。
```
<head>内的元素可包含脚本，指示浏览器在何处可以找到样式表，提供元信息等。
可添加到head部分的标签：<title>、<base>、<meta>、<link>、<script>、<style>:
<title>：指定整个网页的标题，在浏览器最上方显示。
<base>:为页面上的所有链接规定默认地址或默认目标(target)。
<meta>：提供有关页面的基本信息。
<link>：定义文档与外部资源的关系。
<script>:定义客户端脚本，如JavaScript。
<style>:定义内部样式表与网页的关系。
```


# 17. window的onload事件和domcontentloaded
* DOMContentLoaded方法是当DOM加载完成，不包括样式表，图片，flash触发的事件
* onload事件触发时，页面上所有的DOM，样式表，脚本，图片，flash都已经加载完成了，用于检测一个加载完全的页面

开发中我们经常需要给一些元素的事件绑定处理函数。但问题是，如果那个元素还没有加载到页面上，但是绑定事件已经执行完了，是没有效果的。这两个事件大致就是用来避免这样一种情况，将绑定的函数放在这两个事件的回调中，保证能在页面的某些元素加载完毕之后再绑定事件的函数。

当然DOMContentLoaded机制更加合理，因为我们可以容忍图片，flash延迟加载，却不可以容忍看见内容后页面不可交互。

# 18. for...in迭代和for...of有什么区别
## 1. for…in
for…in 循环返回的值是数据的结构的**key**(类比键值名)
`遍历对象`返回的对象`key`值，`遍历数组`返回的数组的`下标`（key）
for…in 不仅可以遍历数字 键名，还会遍历原型上的值和手动添加其他的键
for…in 循环出的是（key）
总结：
for…in 循环特别适合遍历对象

## 2. for…of 
for…of 是ES6新引入的特性。修复了ES5引入的for…in的不足支持set().map()
for…of不能循环普通的对象，需要通过和OBject.Keys()搭配使用
for…of不同与forEach
它可以与break.continue和return 配合使用
for…of 循环可以随时推出循环
for…of 循环出的是（**value**）
总结：
for…of 循环特别适合`遍历数组`

# 19. 函数柯里化 和 高阶函数
## 1. 函数柯里化 
柯里化，是函数式编程的一个重要概念。它既能减少代码冗余，也能增加可读性。
**定义**：在数学和计算机科学中，柯里化是一种将使用**多个参数**的一个函数转换成一系列使用**一个参数**的函数的技术。
`简单版：`
~~~
function add(a) {
  function sum(b) { // 使用闭包
      a = a + b; // 累加
      return sum;
   }
   sum.toString = function() { // 重写toString()方法
      return a;
  }
   return sum; // 返回一个函数
}

add(1); // 1
add(1)(2);  // 3
add(1)(2)(3) // 6
~~~
`完整版：`
~~~
function add() {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  var _args = [].slice.call(arguments);

  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var adder = function () {
      var _adder = function() {
          _args.push(...arguments);
          return _adder;
      };

      // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
      _adder.toString = function () {
          return _args.reduce(function (a, b) {
              return a + b;
          });
      }

      return _adder;
  }
  return adder(..._args);
}

var a = add(1)(2)(3)(4);   // f 10
var b = add(1, 2, 3, 4);   // f 10
var c = add(1, 2)(3, 4);   // f 10
var d = add(1, 2, 3)(4);   // f 10
~~~

**总结：**

函数的柯里化，是 Javascript 中函数式编程的一个重要概念。`它返回的，是一个函数的函数`。其实现方式，需要依赖`参数以及递归`，通过`拆分参数`的方式，来调用一个多参数的函数方法，以达到减少代码冗余，增加可读性的目的。

## 2. 高阶函数
### 1. Array.prototype.map
`map()`(映射)方法最后生成一个新数组，不改变原始数组的值。其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
~~~
array.map(callback,[ thisObject]);
~~~
callback(回调函数)
~~~
[].map(function(currentValue, index, array) {
    // ...
});
~~~
传递给`map`的回调函数（`callback`）接受三个参数，分别是`currentValue`——正在遍历的元素；`index`（可选）——元素索引；`array`（可选）——原数组本身，除了 callback 之外还可以接受 this 值（可选），用于执行 callback 函数时使用的this 值。

来个简单的例子方便理解，现在有一个数组[1,2,3,4]，我们想要生成一个新数组，其每个元素皆是之前数组的两倍

~~~
const arr1 = [1, 2, 3, 4];
const arr2 = arr1.map(item => item * 2);

console.log( arr2 );
// [2, 4, 6, 8]
console.log( arr1 );
// [1, 2, 3, 4]
~~~

`map高阶函数注意点`

callback需要有return值，否则会出现所有项映射为undefind；

~~~
["1", "2", "3"].map(parseInt);
//输出结果为  [1,NaN,NaN]

["1","2","3"].map(x=>parseInt(x));
//输出结果为  [1,2,3]
~~~
### 2. Array.prototype.reduce
`reduce() `方法对数组中的每个元素执行一个提供的 reducer 函数(升序执行)，将其结果汇总为单个返回值。传递给 reduce 的回调函数（callback）接受四个参数，分别是累加器 `accumulator`；`currentValue`——正在操作的元素；`currentIndex`（可选）——元素索引，但是它的开始会有特殊说明；`array`（可选）——原始数组本身，除了 callback 之外还可以接受初始值 initialValue 值（可选）。

例子，现在有一个数组 [0, 1, 2, 3, 4]，需要计算数组元素的和，需求比较简单，来看下代码实现。
~~~
const arr = [0, 1, 2, 3, 4];
let sum = arr.reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue;
});

console.log( sum );
// 10
console.log( arr );
// [0, 1, 2, 3, 4]
~~~
![](https://ttarea.com/post-images/1615256323803.png)

### 3. Array.prototype.filter
`filter`(过滤，筛选) 方法创建一个新数组,原始数组不发生改变。
~~~
array.filter(callback,[ thisObject]);
~~~
接收的参数和 map 是一样的，filter的`callback`函数需要返回布尔值true或false. 如果为true则表示通过啦！如果为false则失败，其返回值是一个新数组，由通过测试为true的所有元素组成，如果没有任何数组元素通过测试，则返回空数组。

来个例子介绍下，现在有一个数组 [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4]，我们想要生成一个新数组，这个数组要求没有重复的内容，即为去重。

~~~
const arr1 = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
const arr2 = arr1.filter( (element, index, self) => {
    return self.indexOf( element ) === index;
});

console.log( arr2 );
// [1, 2, 3, 5, 4]
console.log( arr1 );
// [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4]
~~~

# 20.  call 与 apply区别，原生实现bind
## 1. call 和 apply 的共同点
它们的共同点是，都能够**改变函数执行时的上下文**，将一个对象的方法交给另一个对象来执行，并且是立即执行的。

为何要改变执行上下文？举一个生活中的小例子：平时没时间做饭的我，周末想给孩子炖个腌笃鲜尝尝。但是没有适合的锅，而我又不想出去买。所以就问邻居借了一个锅来用，这样既达到了目的，又节省了开支，一举两得。

改变执行上下文也是一样的，A 对象有一个方法，而 B 对象因为某种原因，也需要用到同样的方法，那么这时候我们是单独为 B 对象扩展一个方法呢，还是借用一下 A 对象的方法呢？当然是借用 A 对象的啦，既完成了需求，又减少了内存的占用。

另外，它们的写法也很类似，**调用 call 和 apply 的对象，必须是一个函数 Function**。接下来，就会说到具体的写法，那也是它们区别的主要体现。

## 2. call 和 apply 的区别
**call 的写法**
~~~
Function.call(obj,[param1[,param2[,…[,paramN]]]])
~~~
* 调用 call 的对象，必须是个函数 Function。
* call 的第一个参数，是一个对象。 Function 的调用者，将会指向这个对象。如果不传，则默认为全局对象 window。
* 第二个参数开始，可以接收任意个参数。每个参数会映射到相应位置的 Function 的参数上。但是如果将所有的参数作为数组传入，它们会作为一个整体映射到 Function 对应的第一个参数上，之后参数都为空。
```
function func (a,b,c) {}

func.call(obj, 1,2,3)
// func 接收到的参数实际上是 1,2,3

func.call(obj, [1,2,3])
// func 接收到的参数实际上是 [1,2,3],undefined,undefined
```
**apply 的写法**
~~~
Function.apply(obj[,argArray])
~~~
* 它的调用者必须是函数 Function，并且只接收两个参数，第一个参数的规则与 call 一致。
* 第二个参数，必须是数组或者类数组，它们会被转换成类数组，传入 Function 中，并且会被映射到 Function 对应的参数上。这也是 call 和 apply 之间，很重要的一个区别。
```
func.apply(obj, [1,2,3])
// func 接收到的参数实际上是 1,2,3

func.apply(obj, {
    0: 1,
    1: 2,
    2: 3,
    length: 3
})
// func 接收到的参数实际上是 1,2,3
```
**类数组无法使用 forEach、splice、push 等数组原型链上的方法**

## 3 call 和 apply 的用途
`call 的使用场景`
1. **对象的继承**
```
function superClass () {
    this.a = 1;
    this.print = function () {
        console.log(this.a);
    }
}

function subClass () {
    superClass.call(this);
    this.print();
}

subClass();
// 1
```
subClass 通过 call 方法，继承了 superClass 的 print 方法和 a 变量。此外，subClass 还可以扩展自己的其他方法。

2. **借用方法**
```
let domNodes = Array.prototype.slice.call(document.getElementsByTagName("*"));
```

`apply 的一些妙用`
1. **Math.max**
```
let max = Math.max.apply(null, array);
```
同理，要获取数组中最小的一项，可以这样：
```
let min = Math.min.apply(null, array);
```
2. **实现两个数组合并**
~~~
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

Array.prototype.push.apply(arr1, arr2);
console.log(arr1); // [1, 2, 3, 4, 5, 6]
~~~

## 4. bind 的使用
bind() 方法创建一个新的函数，在调用时设置 this 关键字为提供的值。并在调用新函数时，将给定参数列表作为原函数的参数序列的前若干项。

它的语法如下：
```
Function.bind(thisArg[, arg1[, arg2[, ...]]])
```
bind 方法 与 apply 和 call 比较类似，也能改变函数体内的 this 指向。不同的是，`bind 方法的返回值是函数，并且需要稍后调用，才会执行`。而 apply 和 call 则是`立即调用`。

来看下面这个例子：
```
function add (a, b) {
    return a + b;
}

function sub (a, b) {
    return a - b;
}

add.bind(sub, 5, 3); // 这时，并不会返回 8
add.bind(sub, 5, 3)(); // 调用后，返回 8
```
如果 bind 的第一个参数是 null 或者 undefined，this 就指向全局对象 window。

## 5. 总结
call 和 apply 的主要作用，是改变对象的执行上下文，并且是立即执行的。它们在参数上的写法略有区别。

bind 也能改变对象的执行上下文，它与 call 和 apply 不同的是，返回值是一个函数，并且需要稍后再调用一下，才会执行。

`原生实现bind函数`
~~~
// 原生js实现bind函数
// 所有的函数都要有bind方法，所以要定义在Function的原型对象上
Function.prototype.myBind = function(objThis,...params){
    // objThis是要绑定的this对象，...params是因为参数数量不确定才用解构语法
    const thisFn = this;//当前调用的函数，例如fn.myBind()就把fn保存到thisFn
    let funcForBind = function(...secondParams){ // 要返回的函数
        // 判断函数是否是用new function生成的
        const isNew = this instanceof funcForBind
        const thisArg = isNew?this:objThis //this的指向
        // 绑定好this和参数返回到外层，暂时用call绑定，call也可以原生实现
        return thisFn.call(thisArg,...params,...secondParams)
    }
    // 绑定原型
    funcForBind.prototype = Object.create(thisFn)
    return funcForBind //返回绑定好的函数
} 
~~~


# 21. 立即执行函数和使用场景（与闭包结合）
## 1. 什么是立即执行函数？
声明一个函数，并马上调用这个匿名函数就叫做立即执行函数；也可以说立即执行函数是一种语法，让你的函数在定义以后立即执行；
![](https://ttarea.com/post-images/1615271995138.jpg)

## 2. 立即执行函数的写法：
~~~
(function(){
//code
}())

(function (){
//code
})()
~~~
上边的两种写法，都是以圆括号开头，引擎会意味后面跟的是表达式，而不是一个函数定义语句，所以就避免了错误，这就叫做"立即调用的函数表达式"。
~~~
(function () {alert("我是匿名函数")}())   //用括号把整个表达式包起来
(function () {alert("我是匿名函数")})()  //用括号把函数包起来
!function () {alert("我是匿名函数")}()  //求反，我们不在意值是多少，只想通过语法检查
~~~

## 3. 立即执行函数的作用：
* 不必为函数命名，避免了污染全局变量
* 立即执行函数内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量
* 封装变量

总而言之：**立即执行函数会形成一个单独的作用域，我们可以封装一些临时变量或者局部变量，避免污染全局变量**

## 4. 使用场景
1. 怎样使以下alert的结果为0,1,2：
~~~
 <ul id="list">
        <li>公司简介</li>
        <li>联系我们</li>
        <li>营销网络</li>
    </ul>
    <script>
       var list = document.getElementById("list");
      var li = list.children;
      for(var i = 0 ;i<li.length;i++){
       ( function(j){
            li[j].onclick = function(){
              alert(j);
          })(i); //把实参i赋值给形参j
        }
      }
     </script>  
~~~
结合闭包
~~~
for (var i = 1; i <= 5; i++) {
  (function(j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}
~~~
2. 如何避免了污染全局变量

某些代码只需要执行一次，比如只需要显示一个时间，但是这些代码也需要一些临时的变量，但是初始化过程结束之后，就再也不会被用到，如果将这些变量作为全局变量，不是一个好的主意，我们可以用立即执行函数——去将我们所有的代码包裹在它的局部作用域中，不会让任何变量泄露成全局变量，看如下代码：
![](https://ttarea.com/post-images/1615273235393.jpg)
比如上面的代码，如果没有被包裹在立即执行函数中，而是直接以非函数的形式直接写在\<script></script>标签里面，虽然也会立即执行，但是临时变量todaydom,days,today,year,month,date,day,msg都将成为全局变量（初始化代码遗留的产物）。
而用立即执行函数之后，这些变量都不会在全局变量中存在，以后也不会其他地方使用，有效的避免了污染全局变量。


# 22. 设计模式(要求说出如何实现,应用,优缺点)/单例模式实现
![](https://ttarea.com/post-images/1615273736555.png)
## 0. 为什么要用设计模式
`高内聚低耦合!!`

**设计模式是一种代码设计思路，其最最本质的目的是为了解耦，延伸一点的话，还有为了可扩展性和健壮性，但是这都是建立在解耦的基础之上。**

### 1. 高内聚
系统中A、B两个模块进行交互，如果修改了A模块，不影响模块B的工作，那么认为A是高度内聚的。
![](https://ttarea.com/post-images/1619618717519.jpg)

### 2. 低耦合
那么当B发生改变时，A模块仍然可以正常工作，那么就认为A与B是低耦合的。
![](https://ttarea.com/post-images/1619620950653.jpg)
**所以解耦，本质上就是让不同的代码块各司其职，互不干扰**！



## 1. 创建型模式
### 1. 工厂模式
工厂模式中，我们在创建对象时不会对客户端暴露创建逻辑，并且是通过使用一个共同的接口来指向新创建的对象，用工厂方法代替new操作的一种模式。
~~~
function Animal(opts){
    var obj = new Object();
    obj.color = opts.color;
    obj.name= opts.name;
    obj.getInfo = function(){
        return '名称：'+ onj.name+'， 颜色：'+ obj.color;
    }
    return obj;
}
var cat = Animal({name: '波斯猫', color: '白色'});
cat.getInfo();
~~~
**小结:**
* 构造函数和创建者分离，对new操作进行封装
* 符合开放封闭原则

### 2. 单例模式
![](https://ttarea.com/post-images/1615274155679.png)
单例模式，是一种常用的软件设计模式。在它的核心结构中只包含一个被称为单例的特殊类。通过单例模式可以保证系统中，应用该模式的一个类只有一个实例。即一个类只有一个对象实例。
~~~
var Single = (function(){
    var instance;
    function init() {
        // 定义私有方法和属性
        // 操作逻辑
        return {
           // 定义公共方法和属性
        };
    }
    return {
        // 获取实例
        getInstance:function(){
            if(!instance){
                instance = init();
            }
            return instance;
        }
    }
})();

var obj1 = Single.getInstance();
var obj2 = Single.getInstance();
console.log(obj1 === obj2);
~~~
**小结:**
1. 单例模式的主要思想就是，实例如果已经创建，则直接返回
~~~
function creatSingleton() {
    var obj = null
    // 实例如已经创建过，直接返回
    if (!obj) {
        obj = xxx
    }
    return obj
}
~~~
2. 符合开放封闭原则

### 3. 原型模式
用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象。

在JavaScript中，实现原型模式是在ECMAScript5中，提出的Object.create方法，使用现有的对象来提供新创建的对象的__proto__。
~~~
var prototype = {
    name: 'Jack',
    getName: function() {
        return this.name
    }
}

var obj = Object.create(prototype, {
    job: {
        value: 'IT'
    }
})

console.log(obj.getName())  // Jack
console.log(obj.job)  // IT
console.log(obj.__proto__ === prototype)  //true
~~~

## 2. 结构型模式
### 1. 适配器模式
![](https://ttarea.com/post-images/1615274391311.png)
~~~
class GooleMap {
    show() {
        console.log('渲染谷歌地图')
    }
}

class BaiduMap {
    display() {
        console.log('渲染百度地图')
    }
}


// 定义适配器类, 对BaiduMap类进行封装
class BaiduMapAdapter {
    show() {
        var baiduMap = new BaiduMap()
        return baiduMap.display() 
    }
}

function render(map) {
    if (map.show instanceof Function) {
        map.show()
    }
}

render(new GooleMap())         // 渲染谷歌地图
render(new BaiduMapAdapter())  // 渲染百度地图
~~~

**小结:**
* 适配器模式主要解决两个接口之间不匹配的问题，不会改变原有的接口，而是由一个对象对另一个对象的包装。
* 适配器模式符合开放封闭原则

## 3. 行为型模式
### 1. 观察者模式(订阅-发布模式)
![](https://ttarea.com/post-images/1615274507790.png)
**发布者发出通知 =>主题对象收到通知并推送给订阅者 => 订阅者执行相应的操作。**
~~~
 // 一个发布者 publisher，功能就是负责发布消息 - publish
        var pub = {
            publish: function () {
                dep.notify();
            }
        }
        // 多个订阅者 subscribers， 在发布者发布消息之后执行函数
        var sub1 = { 
            update: function () {
                console.log(1);
            }
        }
        var sub2 = { 
            update: function () {
                console.log(2);
            }
        }
        var sub3 = { 
            update: function () {
                console.log(3);
            }
        }
        // 一个主题对象
        function Dep() {
            this.subs = [sub1, sub2, sub3];
        }
        Dep.prototype.notify = function () {
            this.subs.forEach(function (sub) {
                sub.update();
            });
        }

        // 发布者发布消息， 主题对象执行notify方法，进而触发订阅者执行Update方法
        var dep = new Dep();
        pub.publish();
~~~

# 23. iframe的缺点有哪些
## 1. iframe的优点：
1. iframe能够原封不动的把嵌入的网页展现出来。
2. 如果有多个网页引用iframe，那么你只需要修改iframe的内容，就可以实现调用的每一个页面内容的更改，方便快捷。
3. 网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用iframe来嵌套，可以增加代码的可重用。
4. 如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由iframe来解决。

## 2. iframe的缺点：
1. 会产生很多页面，`不容易管理`。
2. iframe框架结构有时会让人感到迷惑，如果框架个数多的话，可能会出现上下、左右滚动条，会分散访问者的注意力，`用户体验度差`。
3. 代码复杂，无法被一些搜索引擎索引到，这一点很关键，现在的搜索引擎爬虫还不能很好的处理iframe中的内容，所以使用iframe会`不利于搜索引擎优化`。
4. 很多的移动设备（PDA手机）无法完全显示框架，`设备兼容性差`。
5. iframe框架页面会`增加服务器的http请求`，对于大型网站是不可取的。
分析了这么多，现在基本上都是用`Ajax来代替iframe`，所以iframe已经渐渐的退出了前端开发。

# 24. 数组问题
## 1. 数组去重
### 1. 利用ES6 Set去重（ES6中最常用）
~~~
function unique (arr) {
  return Array.from(new Set(arr))
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
 //[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
~~~
不考虑兼容性，这种去重的方法代码最少。这种方法还无法去掉“{}”空对象，后面的高阶方法会添加去掉重复“{}”的方法。

### 2. 利用for嵌套for，然后splice去重（ES5中最常用）
~~~
function unique(arr){            
  for(var i=0; i<arr.length; i++){
      for(var j=i+1; j<arr.length; j++){
          if(arr[i]===arr[j]){         //第一个等同于第二个，splice方法删除第二个
              arr.splice(j,1);
              j--;
          }
      }
  }
return arr;
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
//  [1, 'true',true, 15,false,undefined,null, NaN,NaN, 'NaN',0, 'a',{}, {}]  //NaN和{}没有去重
~~~
双层循环，外层循环元素，内层循环时比较值。值相同时，则删去这个值。

### 3. 利用indexOf去重
~~~
function unique(arr) {
  if (!Array.isArray(arr)) {
      console.log('type error!')
      return
  }
  var array = [];
  for (var i = 0; i < arr.length; i++) {
      if (array .indexOf(arr[i]) === -1) {
          array .push(arr[i])
      }
  }
  return array;
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
 // [1, "true", true, 15, false, undefined, null, NaN, NaN, "NaN", 0, "a", {…}, {…}]  //NaN、{}没有去重
~~~
新建一个空的结果数组，for 循环原数组，判断结果数组是否存在当前元素，如果有相同的值则跳过，不相同则push进数组。

### 4. 利用sort()
~~~
function unique(arr) {
  if (!Array.isArray(arr)) {
      console.log('type error!')
      return;
  }
  arr = arr.sort()
  var arrry= [arr[0]];
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i-1]) {
          arrry.push(arr[i]);
      }
  }
  return arrry;
}
   var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
      console.log(unique(arr))
// [0, 1, 15, "NaN", NaN, NaN, {…}, {…}, "a", false, null, true, "true", undefined]      //NaN、{}没有去重
~~~
利用sort()排序方法，然后根据排序后的结果进行遍历及相邻元素比对。

### 5. 利用includes
~~~
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array =[];
    for(var i = 0; i < arr.length; i++) {
            if( !array.includes( arr[i]) ) {//includes 检测数组是否有某个值
                    array.push(arr[i]);
              }
    }
    return array
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
    console.log(unique(arr))
    //[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]     //{}没有去重
~~~
### 6. 利用filter
~~~
function unique(arr) {
  return arr.filter(function(item, index, arr) {
    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    return arr.indexOf(item, 0) === index;
  });
}
    var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
        console.log(unique(arr))
//[1, "true", true, 15, false, undefined, null, "NaN", 0, "a", {…}, {…}]
~~~

### 7. 利用Map数据结构去重
~~~
function arrayNonRepeatfy(arr) {
  let map = new Map();
  let array = new Array();  // 数组用于返回结果
  for (let i = 0; i < arr.length; i++) {
    if(map.has(arr[i])) {  // 如果有该key值
      map.set(arr[i], true); 
    } else { 
      map.set(arr[i], false);   // 如果没有该key值
      array.push(arr[i]);
    }
  } 
  return array ;
}
 var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
    console.log(arrayNonRepeatfy(arr))
//[1, "a", "true", true, 15, false, 1, {…}, null, NaN, NaN, "NaN", 0, "a", {…}, undefined]
~~~

## 2. 数组常用方法
### 1. Array.map()
此方法是将数组中的每个元素调用一个提供的函数，结果作为一个新的数组返回，并`没有改变原来的数组`
~~~
let arr = [1, 2, 3, 4, 5]
    let newArr = arr.map(x => x*2)
    //arr= [1, 2, 3, 4, 5]   原数组保持不变
    //newArr = [2, 4, 6, 8, 10] 返回新数组
~~~
### 2. Array.forEach()
此方法是将数组中的每个元素执行传进提供的函数，没有返回值，`改变原数组`，注意和map方法区分
~~~
let arr = [1, 2, 3, 4, 5]
   num.forEach(x => x*2)
   // arr = [1, 2, 3, 4, 5]  数组改变,注意和map区分
~~~
### 3. Array.filter()
此方法是将所有元素进行判断，将满足条件的元素作为一个新的数组返回
~~~
let arr = [1, 2, 3, 4, 5]
    const isBigEnough = value => value >= 3
    let newArr = arr.filter(isBigEnough )
    //newNum = [3, 4, 5] 满足条件的元素返回为一个新的数组
~~~
### 4. Array.every()
此方法是将所有元素进行判断返回一个布尔值，如果`所有元素`都满足判断条件，则返回true，否则为false：
~~~
let arr = [1, 2, 3, 4, 5]
    const isLessThan4 = value => value < 4
    const isLessThan6 => value => value < 6
    arr.every(isLessThan4 ) //false
    arr.every(isLessThan6 ) //true
~~~
### 5. Array.some()
此方法是将所有元素进行判断返回一个布尔值，如果`存在`元素都满足判断条件，则返回true，若所有元素都不满足判断条件，则返回false：
~~~
let arr= [1, 2, 3, 4, 5]
    const isLessThan4 = value => value < 4
    const isLessThan6 = value => value > 6
    arr.some(isLessThan4 ) //true
    arr.some(isLessThan6 ) //false
~~~
### 6. Array.reduce()
此方法是所有元素调用返回函数，返回值为最后结果,传入的值必须是函数类型：
~~~
let arr = [1, 2, 3, 4, 5]
   const add = (a, b) => a + b
   let sum = arr.reduce(add)
   //sum = 15  相当于累加的效果
   与之相对应的还有一个 Array.reduceRight() 方法，区别是这个是从右向左操作的
~~~
### 7. Array.push()
此方法是在数组的后面添加新加元素，此方法改变了数组的长度：
### 8. Array.pop()
此方法在数组后面删除`最后一个元素`，并返回数组，此方法改变了数组的长度：
~~~
let arr = [1, 2, 3, 4, 5]
    arr.pop()
    console.log(arr) //[1, 2, 3, 4]
    console.log(arr.length) //4
~~~
### 9. Array.shift()
此方法在数组后面删除`第一个元素`，并返回数组，此方法改变了数组的长度：
~~~
let arr = [1, 2, 3, 4, 5]
    arr.shift()
    console.log(arr) //[2, 3, 4, 5]
    console.log(arr.length) //4 
~~~
### 10. Array.unshift()
此方法是将一个或多个元素添加到数组的开头，并返回新数组的长度：
~~~
let arr = [1, 2, 3, 4, 5]
    arr.unshift(6, 7)
    console.log(arr) //[6, 7, 1, 2, 3, 4, 5]
    console.log(arr.length) //7 
~~~
### 11. Array.isArray()
判断一个对象是不是数组，返回的是布尔值
### 12. Array.concat()
此方法是一个可以将多个数组拼接成一个数组：
~~~
let arr1 = [1, 2, 3]
      arr2 = [4, 5]
  let arr = arr1.concat(arr2)
  console.log(arr)//[1, 2, 3, 4, 5]
~~~
### 13. Array.toString()
此方法将数组转化为字符串：
~~~
let arr = [1, 2, 3, 4, 5];
   let str = arr.toString()
   console.log(str)// 1,2,3,4,5
~~~
### 14. Array.join()
 此方法也是将数组转化为字符串：
 ~~~
 let arr = [1, 2, 3, 4, 5];
   let str1 = arr.join()
   let str2 = arr.join(',')
   let str3 = arr.join('##')
   console.log(str1)// 1,2,3,4,5
   console.log(str2)// 1,2,3,4,5
   console.log(str3)// 1##2##3##4##5
 ~~~
`可以设置元素之间的间隔` 
### 15. Array.splice(开始位置， 删除的个数，元素)
**万能方法，可以实现增删改：**`0增，3删，1改`
~~~
let arr = [1, 2, 3, 4, 5];
     let arr1 = arr.splice(2, 0 'haha')
     let arr2 = arr.splice(2, 3)
     let arr1 = arr.splice(2, 1 'haha')
     console.log(arr1) //[1, 2, 'haha', 3, 4, 5]新增一个元素
     console.log(arr2) //[1, 2] 删除三个元素
     console.log(arr3) //[1, 2, 'haha', 4, 5] 替换一个元素
~~~

## 3. 查找数组重复项
~~~
let arr= [1,2,3,4,5,1,2];
let rep = [];
arr.forEach((item,index)=>{
	if(arr.indexOf(item)!=index){ // 匹配数组元素第一个item位置和当前循环的index
        let obj = {};
        obj.key = (arr.indexOf(item) + 1) + '|' + (index + 1); // 用'|'分隔两个重复项的下标   
		obj.value = item;
        rep.push(obj);
	}
});
console.log(rep)
~~~

## 4. 扁平化数组（flatten）
扁平化就是将嵌套的数组变成一维数组的过程。

通常有几种方法可以实现扁平化：
* 迭代递归法
* 曲线救国法

### 1. 迭代递归
~~~
var array = [[1,2,3],4,5,6,[[7]],[]]
var result = flatten(array)

console.log(result)
~~~
`for...of 实现`
~~~
function flatten(arr, result = []) {
    for (let item of arr) {
        if (Array.isArray(item))
            flatten(item, result)
        else
            result.push(item)
    }
    return result
}
~~~
我们使用 result 变量存储结果，然后迭代当前数组，如果值也是数组则继续扁平化，否则将值放入 result 里。

`生成器实现`

迭代器的升级版就是生成器（Generator），其实这种扁平化最适合用生成器来做了，因为我们的目的就是生成一个个的值，然后把它们组织成一维数组：
~~~
function* flat(arr) {
    for (let item of arr) {
        if (Array.isArray(item))
            yield* flat(item)
        else
            yield item
    }
}

function flatten(arr) {
    let result = []
    for (let val of flat(arr)) {
        result.push(val)
    }
    return result
}
~~~
这里有两点需要注意：
1. 嵌套 yield 需要再加一个星号，这被称为生成器委托。
2. 不能使用 forEach 代替 for...of 但可以用 for 循环，因为 for 循环和for...of 可以中断迭代去执行 yield，forEach 不行

`reduce 三句实现法`
~~~
function flatten(arr) {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}
~~~

### 2. 曲线救国法
`降维打击法`
~~~
function flatten(arr){
    let str = arr.toString()
    return str.split(',')
}
~~~
转成字符串，之后再复原成数组，不过这个方法有个缺点，就是原来的空数组转的空字符串也会被放入新生成的数组里去。


# 25. DOM和BOM相关

## 1.DOM

### 1. DOM是什么：
DOM（Document Object Model）`文档对象模型`，是**处理可扩展标志语言**的标准编程接口。

DOM 是 **W3C** 的标准

### 2. DOM0级和DOM2级有什么区别：
`DOM0`级中为某个dom元素绑定多个事件时，只有最后一个事件有效。`onclick`

`DOM2`级中可以为单个元素绑定多个事件，每个事件都可以被触发。`addEventListener`

### 3. textContent、innerText、innnerHTML、value的区别：
* textContent用来获取和设置文本内容，与innerText的差别是:`textContent`获取到的内容包括了元素中的`style标签`和`script标签`的内容。
* innerText只能获取和设置`文本`内容，不能获取和设置html代码
* innerHTML可以获取和设置`html`代码
* value获取的是`表单元素`的值

### 4. 关于dom的api有什么：

**节点创建型api：**
* document.createElement()
* document.createTextNode()
* parent.cloneNode(true)
* document.createDocumentFragment() `创建文档片段,解决大量添加节点造成的回流问题`

**页面修改型API：**
* parent.appendChild(child)
* parent.insertBefore(newNode,referenceNode) `将新元素添加到父元素中指定的子元素前面`
* parent.removeChild(child)
* parent.replcaeChild(newChild,oldChild)

**节点查询型API：**
* document.getElementById()
* document.getElementsByTagName() 返回的是一个即时的HTMLCollection类型
* document.getElementsByName() 根据指定的name属性获取元素,返回的是一个即时的NodeList
* document.getElementsByClassName() 返回的是一个即时的HTMLCollection
* document.querySelector() 获取匹配到的第一个元素，采用的是深度优先搜索。
* docuemnt.querySelectorAll()
返回的是一个非即时的NodeList，也就是说结果不会随着文档树的变化而变化

**节点关系型api：**

**父关系型：**
* node.parentNode()

**兄弟关系型**
* node.previouSibling() 返回节点的前一个节点（包括元素节点，文本节点，注释节点）
* node.previousElementSibling() 返回前一个元素节点
* node.nextSibling() 返回下一个节点
* node.nextElementSibling() 返回下一个元素节点

**子关系型**
* parent.childNodes() 返回一个即时的NodeList，包括了文本节点和注释节点
* parent.children() 一个即时的HTMLCollection，子节点都是Element
* parent.firsrtNode()
* parent.lastNode()
* hasChildNodes()

**元素属性型api：**
* element.setAttribute(“name”,“value”) 为元素添加属性
* element.getAtrribute(“name”) 获取元素的属性

**元素样式型api：**
* window.getComputedStyle(element) 返回一个CSSStyleDeclaration,可以从中访问元素的任意样式属性。
* element.getBoundingClientRect() 返回一个DOMRect对象，里面**包括了元素相对于可视区的位置top,left**,以及元素的大小,单位为纯数字。可用于判断某元素是否出现在了可视区域。

### 5.什么是事件监听:
`addEventListener()方法`，用于向指定元素添加事件句柄，它可以更简单的控制事件，语法为

element.addEventListener(event, function, useCapture);
* 第一个参数是事件的类型(如 “click” 或 “mousedown”).
* 第二个参数是事件触发后调用的函数。
* 第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。

事件传递有两种方式，`冒泡`和`捕获`

事件传递定义了元素事件触发的顺序，如果你将P元素插入到div元素中，用户点击P元素，

在冒泡中，内部元素先被触发，然后再触发外部元素，
捕获中，外部元素先被触发，在触发内部元素，

### 6. 说说前端中的事件流
事件发生时会在元素节点之间按照特定的顺序传播，整个过程分为`捕获阶段，目标阶段和冒泡阶段`，这个`传播过程`叫做Dom事件流。

事件冒泡：从事件源逐级向上传播到DOM最顶层节点的过程。

事件捕获：从DOM最顶层节点逐级向下传播到事件源的过程。

addEventListener用于指定事件处理程序，共接收三个参数。分别是触发事件，事件处理程序函数以及一个布尔值。第三个参数默认为false，表示在该事件的处理函数会在冒泡阶段被调用。若改为true，则表示事件处理函数会在捕获阶段被调用。

### 7. 如何让事件先冒泡后捕获
对于`目标元素`来说，如果DOM节点通过addEventListener同时绑定了两个事件监听函数，一个用于捕获，一个用于冒泡，那么两个事件的执行顺序是按照代码添加的顺序执行的。所以，先绑定冒泡的函数，再绑定捕获的函数，即可实现。

对于`非目标元素`来说，可以给捕获事件的处理程序添加一个定时器，将处理程序推入下一个宏任务执行。

### 8. 说一下事件代理：
事件委托是指 不在子节点单独设置事件监听器，而将事件`监听器设置在父节点上`，再利用`冒泡原理`使每一个子节点都能触发该事件。

事件委托的优点：只操作一次Dom，提高了程序的性能。

常用于
* ul和li标签的事件监听，一般采用事件委托机制将事件监听器绑定在ul上。
* 还适合动态元素的绑定，新添加的子元素不需单独添加事件处理程序。

**（1）了解事件代理吗，这样做有什么好处**

事件代理就是说我们将事件添加到本来要添加的事件的父节点，将事件委托给父节点来触发处理函数，这通常会使用在大量的同级元素需要添加同一类事件的时候，比如一个动态的非常多的列表，需要为每个列表项都添加点击事件，这时就可以使用事件代理，通过判断e.target.nodeName来判断发生的具体元素，这样做的好处是减少事件绑定，同事动态的DOM结构任然可以监听，事件代理发生在冒泡阶段

**（2）事件代理在捕获阶段的实际应用**

可以在父元素层面阻止事件向子元素传播，也可代替子元素执行某些操作。

### 9. 事件类型相关：
（1）`mouseover和mouseenter的区别`
* mouseover：当鼠标移入元素或其子元素都会触发事件，所以有一个重复触发，冒泡的过程。对应的移出事件是mouseout。
* mouseenter：鼠标移入子元素时不会再次触发mouseenter事件，对应的移出事件是mouseleave。

（2）`三种键盘事件的区别：`
* keyup: 松开键盘触发
* keydown:按下键盘触发
* keypress:不能识别功能键，比如ctrl,alt,shift,左右箭头。可以区分大小写。

在输入框中按下一个键的全过程：触发keydown/keypress事件->文字键入输入框中->触发keyup事件

按下按键后`自动对焦`输入框，应该使用`keyup`，不应该使用keydown/keypress,因为后者会使按键落入输入框中,对于回车键的话还不能使用keypress。

### 10. 静态绑定事件与动态绑定事件的区别：
**静态绑定**事件是指直接在Html标签上通过οnclick="hide()"来绑定事件。

缺点：
* html和js文件存在耦合，不符合结构和行为分离的原则。
* 可能存在引发错误，如果js代码还没加载就触发该事件则会抛出错误

**动态绑定**事件是指通过js动态绑定事件，element.onclick() element.addEventListener()。

### 11. 元素的位置和大小
**① offset系列：**
 **offsetTop（获取元素位置）: 相对于带有‘定位’的父元素的偏移量**
`offsetHeight: content+padding+border`

**② cilent系列：**
**clientHeight(获取元素宽高): content+padding,不包含border**

**③ scroll系列：**
**scrollTop（获取滚动的距离）**: 向下滚动后，上面被卷去的距离，即隐藏的高度。

**④ document.clientWidth与document.style.width的区别：**
* 区别1：前者可以获取任意样式表中的width样式值，包括行内样式的，内嵌样式的，外部样式的；后者只能获取行内的样式。
* 区别2：clientWidth获取的是数字型的，style获取的带有px后缀
* 区别3：clientWidth包含了padding,而style.width只包含content。
* 区别4：clientWidth是只读属性，所以一般用于获取元素的大小；而style.width是可读可写的，可用于获取，也可用于修改。

**⑤ 判断一个元素是否已经出现在了可视区域：(此问题可应用在懒加载中)**
`使用element.getBoundingClientRect().top获取在可视区的位置。`
~~~
window.addEventListener("scroll", function () {
    let viewPortHeight = window.pageYOffset;
    let offset = box2.getBoundingClientRect().top;
    if (offset < viewPortHeight) {
        if (offset + box2.offsetHeight < 0) {
            console.log("他走了");
        } else {
            console.log("他来啦他来啦");
        }
    }
});
~~~

### 12. js拖动及拖拽功能的实现
`（1）拖动功能的实现：`

前置条件：
1. 拖动事件的三个过程：鼠标按下mousedown,鼠标移动mousemove,鼠标松开mouseup
鼠标按下后执行mousemove事件。
2. 盒子采用绝对定位，通过left和top属性来修改位置。

方法一：（直接根据鼠标移动的距离确定元素移动的距离）
* 鼠标的坐标通过clientX,clientY获取：
* 盒子的定位信息：鼠标移动时候的坐标-鼠标按下去时候的坐标+元素初始情况下的offetLeft.

`（2）拖拽功能的实现：`

使用html5提供的拖拽API（Drag 和 drop）

## 2. (BOM)浏览器对象模型：

### 1. 实用的BOM属性对象方法：
`location对象`
* location.href– 返回或设置当前文档的URL
* location.search – 返回URL中的查询字符串部分。例如 http://www.dreamdu.com/dreamdu.php?id=5&name=dreamdu 返回包括(?)后面的内容?id=5&name=dreamdu
* location.hash – 返回URL#后面的内容，如果没有#，返回空
* location. – 返回URL中的域名部分，例如www.dreamdu.com
* location.hostname – 返回URL中的主域名部分，例如dreamdu.com
* location.pathname – 返回URL的域名后的部分。例如 http://www.dreamdu.com/xhtml/ 返回/xhtml/
* location.port – 返回URL中的端口部分。例如 http://www.dreamdu.com:8080/xhtml/ 返回8080
* location.protocol – 返回URL中的协议部分。例如 http://www.dreamdu.com:8080/xhtml/ 返回(//)前面的内容http:
* location.assign() – 重定向页面，与location.href一样，会记录历史，能后退页面
* location.replace() – 设置当前文档的URL，不记录历史，不能后退页面
* location.reload() – 重载当前页面,相当于F5。添加参数true则表示强制刷新，直接从服务器获取数据，不从浏览器缓存中取数据，相当于Ctrl+F5

`history对象`
* history.go(n) – 前进或后退指定的页面数;
* history.back() – 后退一页
* history.forward() – 前进一页

`navigator对象`
* navigator包含了用户浏览器的信息
* navigator.userAgent – 返回用户代理头的字符串表示(就是包括浏览器版本信息等的字符串)
* navigator.cookieEnabled – 返回浏览器是否支持(启用)cookie

### 2. setTimeout(fn,100);100毫秒是如何权衡的：
100ms指的是将回调函数加入到任务队列所花的时间。至于具体什么时候执行，需要看主线程的执行栈中是否还有任务在执行。

### 3. requestAnimationFrame
特点：requestAnimationFrame采用系统时间间隔，保证了最佳的绘制效率。

使用方法：requestAnimationFrame接收一个回调函数，这个回调函数会在下一次浏览器重绘之前调用。

### 4. 分别用setInterval,setTimeout,requestAnimationFrame制作有个简单的进度条效果：
`setInterval:`
~~~
<div
     style="width: 0; height: 20px; background-color: orange"
     id="div"
     ></div>
<script>
    let timer = setInterval(() => {
        if (parseInt(div.style.width) >= 500) {
            return clearInterval(timer);
        }
        console.log(div.style.width);
        div.style.width = parseInt(div.style.width) + 5 + "px";
        div.innerHTML = parseInt(div.style.width) / 5 + "%";
    }, 16);
</script>
~~~
setTimeout:
~~~
<div
     style="width: 0; height: 20px; background-color: orange"
     id="div"
     ></div>
<script>
    let timer = setTimeout(function fn() {
        if (parseInt(div.style.width) < 500) {
            div.style.width = parseInt(div.style.width) + 5 + "px";
            div.innerHTML = parseInt(div.style.width) / 5 + "%";
            timer = setTimeout(fn, 16);
        } else {
            clearTimeout(timer);
        }
    }, 16);
</script>
~~~
requestAnimationFrame:类似于setTimeout,需要一次次的调用
~~~
<div
     style="width: 0; height: 20px; background-color: orange"
     id="div"
     ></div>
<script>
    let timer = requestAnimationFrame(function fn() {
        if (parseInt(div.style.width) < 500) {
            div.style.width = parseInt(div.style.width) + 5 + "px";
            div.innerHTML = parseInt(div.style.width) / 5 + "%";
            requestAnimationFrame(fn);
        } else {
            cancelAnimationFrame(timer);
        }
    });
</script>
~~~

### 5. js中的轮播实现原理？假如一个页面上有两个轮播，你会怎么实现？
1. 让图片存在一个数组中，然后将最后一张图片重复添加在数组的头部，将第一张图片重复添加在数组的最后。
2. 然后准备一个只能显示一张图片的盒子，对盒子做溢出隐藏处理。
3. 通过定时器增减索引，显示对应的图片，实现轮播功能。
     
如果有两个轮播，可封装一个轮播组件，将需要轮播的图片作为参数传递。

# 26. 服务端渲染（server side render）
`服务端渲染(SSR)`：页面上的内容是由服务器上的代码决定的。即，页面上的内容在服务器上已经生成好了，服务器把这个内容给到浏览器，浏览器拿到这个内容直接显示在页面上即可。

`客户端渲染(CSR)` ：一个网页是由JS文件渲染出来的，而不是服务器直接返回回来的。
![](https://ttarea.com/post-images/1615364099956.jpg)

## 1. SSR的优势
1. 更利于SEO
服务端渲染返回给客户端的是已经获取了异步数据并执行JavaScript脚本的最终HTML，网络爬中就可以抓取到完整页面的信息。

2. 更利于首屏渲染
首屏的渲染是node发送过来的html字符串，并不依赖于js文件了，这就会使用户更快的看到页面的内容。尤其是针对大型单页应用，打包后文件体积比较大，普通客户端渲染加载所有所需文件时间较长，首页就会有一个很长的白屏等待时间。

## 2. SSR的劣势
1. 服务端压力较大

2. 开发条件受限

3. 学习成本相对较高

# 27.  JS 垃圾回收机制
## 1. 垃圾回收
JavaScript 中的内存管理是自动执行的，而且是不可见的。我们创建基本类型、对象、函数……所有这些都需要内存。

## 2. 可达性
JavaScript 中内存管理的主要概念是可达性。

简单地说，“可达性” 值就是那些以某种方式`可访问`或`可用`的值，它们被保证存储在内存中。

1. 有一组基本的固有可达值，由于显而易见的原因无法删除。例如:
* 本地函数的局部变量和参数
* 当前嵌套调用链上的其他函数的变量和参数
* 全局变量
* 还有一些其他的，内部的

`这些值称为根。`

2. 如果引用或引用链可以从根访问任何其他值，则认为该值是可访问的。
* 如果局部变量中有对象，并且该对象具有引用另一个对象的属性，则该对象被视为**可达性**， 它引用的那些也是可以访问的

**下面是最简单的例子:**
~~~
// user 具有对象的引用
let user = {
  name: "John"
};
~~~
![](https://ttarea.com/post-images/1615366337580.png)
这里箭头表示一个对象引用。全局变量`“user”`引用对象 `{name:“John”} `(为了简洁起见，我们将其命名为John)。John 的 `“name” `属性存储一个基本类型，因此它被绘制在对象中。

如果 `user` 的值被覆盖，则引用丢失:
~~~
user = null;
~~~
![](https://ttarea.com/post-images/1615366388527.png)
现在 John 变成不可达的状态，没有办法访问它，没有对它的引用。垃圾回收器将丢弃 John 数据并释放内存。

## 3.两个引用
现在让我们假设我们将引用从 `user `复制到 `admin`:
~~~
// user具有对象的引用
let user = {
  name: "John"
};
let admin = user;
~~~
![](https://ttarea.com/post-images/1615366454334.png)
现在如果我们做同样的事情:
```
user = null;
```
该对象仍然可以通过 `admin` 全局变量访问，所以它在内存中。如果我们也覆盖`admin`，那么它可以被释放。

## 4. 相互关联的对象
现在来看一个更复杂的例子， family 对象：
~~~
function marry (man, woman) {
  woman.husban = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  name: "John"
}, {
  name: "Ann"
})
~~~
产生的内存结构:
![](https://ttarea.com/post-images/1615366611256.png)
现在让我们删除两个引用:
~~~
delete family.father;
delete family.mother.husband;
~~~
![](https://ttarea.com/post-images/1615366634406.png)
仅仅删除这两个引用中的一个是不够的，因为所有对象仍然是可访问的。

但是如果我们把这两个都删除，那么我们可以看到 John 不再有传入的引用:
![](https://ttarea.com/post-images/1615366651083.png)
输出引用无关紧要。只有传入的对象才能使对象可访问，因此，John 现在是不可访问的，并将从内存中删除所有不可访问的数据。

垃圾回收之后：
![](https://ttarea.com/post-images/1615366668995.png)

## 5. 内部算法
基本的垃圾回收算法称为“**标记-清除**”，定期执行以下“垃圾回收”步骤:
* 垃圾回收器获取根并“**标记**”(记住)它们。
* 然后它访问并“标记”所有来自它们的引用。
* 然后它访问标记的对象并标记它们的引用。所有被访问的对象都被记住，以便以后不再访问同一个对象两次。
* 以此类推，直到有未访问的引用(可以从根访问)为止。
* 除标记的对象外，所有对象都被删除。

例如，对象结构如下:
![](https://ttarea.com/post-images/1615366772644.png)
我们可以清楚地看到右边有一个“不可到达的块”。现在让我们看看“**标记并清除**”垃圾回收器如何处理它。

**第一步标记根**
![](https://ttarea.com/post-images/1615367324843.png)
**然后标记他们的引用**
![](https://ttarea.com/post-images/1615367344647.png)
**以及子孙代的引用:**
![](https://ttarea.com/post-images/1615367365917.png)
现在进程中不能访问的对象被认为是不可访问的，将被删除:
![](https://ttarea.com/post-images/1615367388777.png)
`这就是垃圾收集的工作原理。JavaScript引擎应用了许多优化，使其运行得更快，并且不影响执行。`

## 6.面试怎么回答
**1）问什么是垃圾**

一般来说没有被引用的对象就是垃圾，就是要被清除， 有个例外如果几个对象引用形成一个环，互相引用，但根访问不到它们，这几个对象也是垃圾，也要被清除。

**2）如何检垃圾**

一种算法是标记 标记-清除 算法

# 28. eventloop
`Event Loop`即事件循环，是指浏览器或Node的一种解决javaScript单线程运行时不会阻塞的一种机制，也就是我们经常使用**异步**的原理。
## 1. 进程和线程
线程，是程序执行流的最小单位。线程可与同属一个进程的其他线程共享所拥有的全部资源，同一进程中的多个线程之间可以并发执行。线程有`就绪`，`阻塞`，`运行`三种基本状态。

阮一峰大神针对进程和线程的类比，很是形象：`计算机的核心CPU`，是个工厂，时刻运转着，工厂里有很多个车间（进程），一个车间开工其他车间不能开工，就是说：`单核CPU一次只能运行一个进程。任何时候，CPU总是运行一个进程`。

而一个车间里面有很多工人（线程），协同完成一个任务。所以：`一个进程可以包括多个线程`。车间空间是工人共享的，`一个进程中的内存空间是所有线程共享的`。

但是房间大小不同个，容纳量不同，有些线程进去了，其他线程就不能再进去使用了。这就是：`一个线程使用某些共享内存时，其他线程得等它结束后才能使用共享内存`。

内存可以上锁，防止其他线程进来，【互斥锁】也就是防止多个线程读写同一块内存区域。

还有些共享内存比较大，可以容纳多个线程，但是也是有限的，只能容纳固定数目的线程使用。如何保证多个线程不冲突呢？内存门口有个钥匙架，如果发现钥匙架空了，那就不能再进去了【信号量】。


## 2. 函数调用栈与任务队列
Javascript有一个main thread 主进程和call-stack（一个调用堆栈），在对一个调用堆栈中的task处理的时候，其他的都要等着。当在执行过程中遇到一些类似于setTimeout等异步操作的时候，会交给浏览器的其他模块(以webkit为例，是webcore模块)进行处理，当到达setTimeout指定的延时执行的时间之后，task(回调函数)会放入到任务队列之中。一般不同的异步任务的回调函数会放入不同的任务队列之中。等到调用栈中所有task执行完毕之后，接着去执行任务队列之中的task(回调函数)。

任务队列是“先进先出”的数据结构，先来的优先被主线程读取。
![](https://ttarea.com/post-images/1615368924655.png)

在上图中，调用栈中遇到DOM操作、ajax请求以及setTimeout等WebAPIs的时候就会交给浏览器内核的其他模块进行处理，webkit内核在Javasctipt执行引擎之外，有一个重要的模块是webcore模块。对于图中WebAPIs提到的三种API，webcore分别提供了DOM Binding、network、timer模块来处理底层实现。等到这些模块处理完这些操作的时候将回调函数放入任务队列中，之后等栈中的task执行完之后再去执行任务队列之中的回调函数。

**小结：**
* 所有的代码都要通过函数调用栈中调用执行。
* 当遇到前文中提到的APIs的时候，会交给浏览器内核的其他模块进行处理。
* 任务队列中存放的是回调函数。
* 等到调用栈中的task执行完之后再回去执行任务队列之中的task。

## 3. 宏任务与微任务
其中setTimeout叫做macro-task(宏任务)，当然如我们所想，还有如promise的micro-task(微任务)。

1. macro-task包括：script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering。

2. micro-task包括：process.nextTick, Promise, Object.observe, MutationObserver


事件循环的顺序是从script开始第一次循环，随后全局上下文进入函数调用栈，碰到macro-task就将其交给处理它的模块处理完之后将回调函数放进macro-task的队列之中，碰到micro-task也是将其回调函数放进micro-task的队列之中。直到函数调用栈清空只剩全局执行上下文，然后开始执行所有的micro-task。当所有可执行的micro-task执行完毕之后。循环再次执行macro-task中的一个任务队列，执行完之后再执行所有的micro-task，就这样一直循环。

**总结：**
1. 不同的任务会放进不同的任务队列之中。

2. 先执行macro-task，等到函数调用栈清空之后再执行所有在队列之中的micro-task。

3. 等到所有micro-task执行完之后再从macro-task中的一个任务队列开始执行，就这样一直循环。

4. 当有多个macro-task(micro-task)队列时，事件循环的顺序是按上文macro-task(micro-task)的分类中书写的顺序执行的。


## 4.事件循环（Event Loop）
JavaScript是单线程的，单线程意味着需要一个任务队列来管理任务事件，任务分为两种：`同步任务`和`异步任务`。同步任务是在主线程上面排队执行的任务，只有前面任务完成，下一个任务才能执行。异步任务是不进入主线程，而是进入任务队列中，只有通知主线程某个异步任务可以执行了，该任务方可执行。
![](https://ttarea.com/post-images/1615368575238.png)
* 我们的同步任务在主线程上运行会形成一个执行栈
* 如果碰到异步任务，比如setTimeout、onClick等等的一些操作，我们会将他的执行结果放入队列，此期间主线程不阻塞
* 等到主线程中的所有同步任务执行完毕，就会通过event loop在队列里面从头开始取，在执行栈中执行
* event loop永远不会断
* 以上的这一整个流程就是Event Loop（事件循环机制）


# 29. 如何快速让字符串变成以千为精度的数字
## 1. 字符串转换成数字的三种方法
`转换函数、强制类型转换、利用js变量弱类型转换`。
1. 转换函数：
js提供了parseInt()和parseFloat()两个转换函数。前者把值转换成整数，后者把值转换成浮点数。只有对String类型调用这些方法，这两个函数才能正确运行；对其他类型返回的都是NaN(Not a Number)。

parseInt()方法还有基模式，可以把二进制、八进制、十六进制或其他任何进制的字符串转换成整数。基是由parseInt()方法的第二个参数指定的，示例如下：
~~~
parseInt("AF",   16);   //returns   175
parseInt("10",   2);   //returns   2
parseInt("10",   8);   //returns   8
parseInt("10",   10);   //returns   10
~~~

2. 强制类型转换
ECMAScript中可用的3种强制类型转换如下：
* Boolean(value)——把给定的值转换成Boolean型；
* Number(value)——把给定的值转换成数字（可以是整数或浮点数）；
* String(value)——把给定的值转换成字符串。

3. 利用js变量弱类型转换

## 2. 数字千位符格式化
~~~
function toThousands(num) {
    var result = '', counter = 0;
    num = (num || 0).toString();
    for (var i = num.length - 1; i >= 0; i--) {
        counter++;
        result = num.charAt(i) + result;
        if (!(counter % 3) && i != 0) { result = ',' + result; }
    }
    return result;
}
~~~

# 30. js中v8引擎的详解
## 1. v8引擎出现的原因
这里先说一下什么是`编译型语言`和`解释性语言`：

`编译型`语言： 在程序执行之前必须进行专门的编译过程，有如下特点：
* `只须编译一次`就可以把源代码`编译成机器语言`，后面的执行`无须重新编译`，直接使用之前的编译结果就可以；因此其执行的`效率比较高`
* 编译性语言代表：C、C++、Java、Pascal/Object Pascal（Delphi）
* 程序执行效率比较高，但比较依赖编译器，因此跨平台性差一些

`解释型`语言 - 解释型语言，支持动态类型，弱类型，在`程序运行`的时候`才进行编译`，而编译前需要确定变量的类型，效率比较低，对不同系统平台有较大的兼容性
* 源代码`不能直接`翻译成机器语言，而是先翻译成`中间代码`，再由`解释器`对中间代码进行`解释运行` 源代码—>中间代码—>机器语言
* 程序`不需要编译`，程序在运行时才翻译成机器语言，`每执行一次都要翻译一次`
* 解释型语言代表：Python、JavaScript、Shell、Ruby、MATLAB等
* 运行效率一般相对`比较低`，`依赖解释器`，跨平台性好

**比较：**
* 一般，`编译型语言的运行效率比解释型语言更高`；但是不能一概而论，部分解释性语言的解释器通过在运行时动态优化代码，甚至能使解释性语言的性能超过编译性语言；
* 编译性语言的跨平台特性比解释性语言差一些；

进过以上说明，解释型语言，`运行效率低`，随着Web相关技术的发展，JavaScript所要承担的工作也越来越多，早就超越了“表单验证”的范畴，`这就更需要快速的解析和执行JavaScript脚本`。`V8引擎`就是为解决这一问题而生，在node中也是采用该引擎来解析JavaScript

## 2. 渲染引擎及网页渲染
为用户提供网页浏览服务无疑是最重要的功能，如下介绍：

### 1. 渲染引擎
* `渲染引擎` - 能够能够将HTML/CSS/JavaScript文本及相应的`资源文件`转换成`图像`结果.
* `作用` - 将`资源文件`转化为`用户可见`的结果。
* 渲染引擎的种类 - Tridend(IE)、Gecko(FF),WebKit(Safari,Chrome,Andriod浏览器)等.
* 介绍 - WebKit是由苹果2005年发起的一个开源项目，引起了众多公司的重视，几年间被很多公司所采用，在移动端更占据了垄断地位。更有甚者，开发出了基于WebKit的支持HTML5的web操作系统(如：Chrome OS、Web OS)。

**WebKit的大致结构**
![](https://ttarea.com/post-images/1616375134643.png)
![](https://ttarea.com/post-images/1616375172770.png)

### 2. 网页渲染流程
上面介绍了渲染引擎的各个模块，那么一张网页，要经历怎样的过程，才能展示给用户。
![](https://ttarea.com/post-images/1616375416528.png)

`过程` - 首先是网页内容，输入到HTML解析器，HTML解析器解析，然后构建DOM树，在这期间如果遇到JavaScript代码则交给JavaScript引擎处理；如果来自CSS解析器的样式信息，构建一个内部绘图模型。该模型由布局模块计算模型内部各个元素的位置和大小信息，最后由绘图模块完成从该模型到图像的绘制。在网页渲染的过程中，大致可分为下面3个阶段：
![](https://ttarea.com/post-images/1616375499789.png)

上述是一个完整的渲染过程，现代网页很多都是动态的，随着网页与用户的交互，浏览器需要不断的重复渲染过程。

### 3. JavaScript引擎
![](https://ttarea.com/post-images/1616376387769.png)
JavaScript本质上是一种`解释型语言`，与编译型语言不同的是它需要`一边执行一边解析`，而编译型语言在执行时已经完成编译，可直接执行，有更快的执行速度(如上图所示)。JavaScript代码是在浏览器端解析和执行的，如果需要时间太长，会影响用户体验。那么`提高JavaScript的解析速度`就是当务之急。JavaScript引擎和渲染引擎的关系如下图所示：
![](https://ttarea.com/post-images/1616376459980.png)
avaScript语言是解释型语言，为了`提高性能`，引入了J`ava虚拟机`和`C++编译器`中的众多`技术`。现在JavaScript引擎的执行过程大致是:
`源代码`-→`抽象语法树`-→`字节码`-→`JIT`-→`本地代码`(V8引擎没有中间字节码)。

V8更加直接的将`抽象语法树`通过`JIT技术`转换成`本地代码`，`放弃了`在`字节码`阶段可以进行的一些性能优化，但保证了执行速度。在V8生成本地代码后，也会通过Profiler采集一些信息，来优化本地代码。虽然，少了生成字节码这一阶段的性能优化，但极大减少了转换时间。


## 3. V8引擎
* V8引擎是一个`JavaScript引擎`实现，最初由一些语言方面专家设计，后被谷歌收购，随后谷歌对其进行了`开源`。
* V8使用`C++开发`，在运行JavaScript之前，相比其它的JavaScript的引擎转换成字节码或解释执行，`V8将其编译成原生机器码`（IA-32, x86-64, ARM, or MIPS CPUs），并且使用了如`内联缓存`（inline caching）等方法来`提高性能`。
* 有了这些功能，JavaScript程序在V8引擎下的运行速度媲美二进制程序。
* V8支持`众多操作系统`，如windows、linux、android等，也支持其他硬件架构，如IA32,X64,ARM等，具有很好的`可移植`和`跨平台特性`。

## 4. 数据表示
JavaScript是一种动态类型语言，`在编译时并不能准确知道变量的类型`，`只可以在运行时确定`，这就不像c++或者java等静态类型语言，在编译时候就可以确切知道变量的类型。然而，`在运行时计算和决定类型，会严重影响语言性能`，这也就是JavaScript运行效率比C++或者JAVA低很多的原因之一。

在C++中，源代码需要经过编译才能执行，在生成本地代码的过程中，变量的地址和类型已经确定，运行本地代码时利用数组和位移就可以存取变量和方法的地址，不需要再进行额外的查找，几个机器指令即可完成，节省了确定类型和地址的时间。由于JavaScript是无类型语言，那就不能像c++那样在执行时已经知道变量的类型和地址，需要临时确定。JavaScript 和C++有以下几个区别：

* `编译确定位置` -` C++`编译阶段确定位置偏移信息，在`执行时直接存取`，`JavaScript`在`执行阶段确定`，而且执行期间可以修改对象属性；

* `偏移信息共享` - `C++`有类型定义，执行时`不能动态改变`，可共享偏移信息，`JavaScript`每个对象都是`自描述`，属性和位置偏移信息都包含在自身的结构中；

* `偏移信息查找` - `C++`查找偏移地址很简单，在编译代码阶段，对使用的某类型成员变量`直接设置偏移位置`，`JavaScript`中使用一个对象，需要通过`属性名匹配`才能找到相应的值，需要更多的操作。

![](https://ttarea.com/post-images/1616377366139.png)

## 5. 工作过程
![](https://ttarea.com/post-images/1616377457407.png)
### 编译阶段
![](https://ttarea.com/post-images/1616377563413.png)

### 运行阶段
由于`V8缺少了生成中间代码这一环节`，缺少了必要的优化，为了提升性能，V8会在`生成本地代码后`，使用`数据分析器`(profiler)`采集一些信息`，然后根据这些数据将本地代码进行优化，生成更高效的本地代码，这是一个逐步改进的过程。同时，当发现优化后代码的性能还不如未优化的代码，V8将退回原来的代码，也就是优化回滚。
![](https://ttarea.com/post-images/1616377618319.png)

### 优化回滚
![](https://ttarea.com/post-images/1616377669446.png)
