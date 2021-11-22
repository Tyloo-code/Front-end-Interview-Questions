---
title: '【面】前端知识点梳理（Vue）'
date: 2021-03-11 20:38:44
tags: [Interview]
published: true
hideInList: false
feature: 
isTop: false
---
# 0. v-for中key的作用
所以我们需要使用key来给每个节点做一个唯一标识，Diff算法就可以正确的识别此节点，找到正确的位置区插入新的节点。

vue中列表循环需加:key="唯一标识" 唯一标识可以是item里面id index等，因为vue组件高度复用增加Key可以标识组件的唯一性，为了更好地区别各个组件 key的作用主要是为了高效的更新虚拟DOM

`可以这样简单地理解，无：key属性时，状态默认绑定的是位置；有：key属性时，状态根据key的属性值绑定到了相应的数组元素。`

# 1. vue组件化 与 渐进式的理解
## 1.vue的组件化思想
要回答这个问题，要先理解核心知识点：组件化

组件化就是一种代码设计理念。最开始的面向过程编程使一个文件的代码特别多，难以维护，所以借鉴了后端的面向对象编程，使一个本需要几千行代码的文件可以被拆分成几个几百行的文件。

一个组件就是一个类 new 出来的一个对象，是一个页面的一个部分，一个组件要负责这一部分的 CSS 展示，DOM 节点的设计，以及 JS 的逻辑。合理拆解组件可以提升代码的可读性以及可维护性，将组件间共性抽离出一个通用组件，让子组件去继承这个通用组件，可以少写很多代码，最小的组件颗粒度是一个元素。

**组件化的演进 ：**
>1）Angular 提出了通过面向数据编程，不用操作 DOM，但是刚出来时，性能上有瓶颈 
2）React 引入了虚拟 DOM 机制，将 DOM 的比对换成了 JS 的比对，加了diff 算法，慢慢的性能的问题就解决了，前端开始大量使用 MVVM 和 MVC 这种框架了。 
3）`vue 是一个轻量级的 MVVM 模式的框架`，vue 引入虚拟 DOM 的目的跟 React 不同，后者是为了解决性能问题，前者是为了让`组件高度抽象化`（虚拟 DOM 使渲染过程抽象化了）。其主要作用是使前端开发变得简单，它的设计模式让没有组件化思维的使用者也在用组件化作开发，所以写的代码不会太差。
PS：如果对前面两个框架不熟悉的话，最好不要在面试时提到它们，否则有被继续问的风险，只谈 vue 就好。

>另外 Vue 的一个优势是`速度快`，当我们改变数据后，会引起页面重新渲染，引起的重排和重绘的代价是高昂的，有可能会破坏用户体验，让 UI 展示迟缓，重排会引起周围的 DOM 重新排列，这个范围可能是全局也可能是局部，重排的性能花销跟有多少 DOM 节点需要重新构建有关系，因此应该尽可能减少重排的次数，以及它波及的范围。
那么 Vue 将`数据更新引起的 watcher 回调放入到 nextTick `中（是一个微任务，当执行栈为空时，就从微任务中一次性拿取所有任务），并且同一个 watcher 只会放入一次，也就是说在当前的事件循环中，无论一个响应式数据改变多少次，`最终都只会渲染一次`，nextTick 在下面有讲解。
要了解这段知识点要具备这些基础知识：浏览器渲染过程、JS 运行机制、异步任务、Vue 的双向绑定。确实所有知识都是从基础知识而来的，所以学框架最终就是对基础知识有更深入的理解。

## 2. vue渐进式框架的理解
`主张最少`，也就是弱主张。

每个框架都不可避免会有自己的一些特点，从而会对使用者有一定的要求，这些要求就是主张，主张有强有弱，它的强势程度会影响在业务开发中的使用方式。

他是在vue核心库（视图模板引擎）的基础上，去`逐步添加`所需要功能（如，组件系统、路由、状态机等）
vue“渐进式”：是指先使用vue核心库，在vue核心库的基础上，根据自己需要再去逐渐增加功能。
Vue的核心的功能，是一个视图模板引擎，但这不是说Vue就不能成为一个框架。
在声明式渲染（视图模板引擎）的基础上，我们可以通过添加组件系统、客户端路由、大规模状态管理来构建一个完整的框架。
更重要的是，这些功能相互独立，你可以在核心功能的基础上任意选用其他的部件，不一定要全部整合在一起。
所说的“渐进式”，其实就是Vue的使用方式，同时也体现了Vue的设计的理念。




# 2.MVVM 的理解
**回答思路：先聊下 MVC，再聊下 MVVM 的定义，最后进行对比。**
![](https://ttarea.com/post-images/1615468604645.png)
>View 传送指令到 Controller
Controller 完成业务逻辑后，要求 Model 改变状态
Model 将新的数据发送到 View，用户得到反馈

所有通信都是单向的。MVC 接收用户指令，可以先通过 View 来接收，然后传递给 Controller，也可以直接通过 Controller 来接收指令。

![](https://ttarea.com/post-images/1615468656209.jpg)
>ViewModel 和 View 之间是通过双向绑定来实现数据的变更
ViewModel 和 Model 之间是浏览器通过 ajax 跟服务器相互通信的过程

这两个通信是双向的，且 View 和 Model 之间没有通信。

MVVM 模式的出现是因为很多后端的代码放到了前端（大前端的到来），前端的代码可维护性、可扩展性以及安全性出现了问题，随着前端框架的演变才有了 MVVM 模式，MVVM 模式和 MVC 模式主要区别在于让开发者的注意力从对 DOM 的操作上，转移到对数据的管理上，即数据是什么，视图就展示什么，使前后端分离更容易，并大大提升了开发效率和代码的可维护性。

# 3. 双向绑定的原理？数据劫持？
Vue.js是通过`数据劫持`以及结合`发布者-订阅者`来实现双向绑定的，数据劫持是利用ES5的Object.defineProperty(obj, key, val)来劫持各个属性的的setter以及getter，在数据变动时发布消息给订阅者，从而触发相应的回调来更新视图。

双向数据绑定，简单点来说分为三个部分：
* 1、Observer：观察者，这里的主要工作是递归地监听对象上的所有属性，在属性值改变的时候，触发相应的watcher。
* 2、Watcher：订阅者，当监听的数据值修改时，执行响应的回调函数（Vue里面的更新模板内容）。
* 3、Dep：订阅管理器，连接Observer和Watcher的桥梁，每一个Observer对应一个Dep，它内部维护一个数组，保存与该Observer相关的Watcher。

![](https://ttarea.com/post-images/1615469169345.jpg)
反向是页面数据的变化映射到 data 中，通过 input 事件监听 input 框数据的改变，JS 得到通知再赋值给 data，只是 VM 框架使手动的过程自动化了。

正向是数据驱动页面，通过 Object.defineProperty() 这个核心 API，将所有数据变成响应式数据，当访问到一个响应式数据时，就会触发它的 getter 函数，收集依赖，当一个响应式数据变化时，就会触发 setter 函数，通知依赖使视图得到更新。

![](https://ttarea.com/post-images/1615711862629.png)
# 4. nextTick
nextTick 把要执行的任务`推入`到一个`队列`中，在下一个 tick 同步执行队列的所有任务，它是异步任务中的微任务。（关于 JS 的运行机制，这是基础知识，篇幅有限）

在 Vue 中，不是每一次数据的改变都会触发所有 wather 的回调，而是将这些回调推入到一个队列中，相同的 id 的 watcher 的回调不会被重复添加，然后在下一个 tick 中再执行这些回调，因此重新渲染是异步的。这么做的好处是：比如我们写了一个将某个响应式数据不断加 1 直到 1000 的代码块，那么视图只会重新渲染一次，即从 0 到 1000，而不是重新渲染 1000 次，这是一种有效的优化手段。

如果我们在更新了一个响应式数据后，需要同步拿到这个渲染后的 DOM 结果，那么就使用 $nextTick 这个方法，异步拿到这个结果。

使用方式有两个：`回调方式和 Promise 方式`
```
this.$nextTick(cb)
this.$nextTick().then(cb)
```
请注意第一种方式的使用，虽然它们都是异步执行的，但是如果你将第一种方式放在响应式数据更新的前面，那么你拿到的将是老的 DOM 结果。

因为 wather 的回调函数是在 nextTick 之后执行的，使用第一种方式 wather 的回调函数将和 this.$nextTick(cb) 中的 cb 同步执行，你将它放在响应式数据更新之前的话，会先执行这个 cb，所以拿到的是未被重新渲染的 DOM 结果，而如果是放在之后，你就能拿到被重新渲染的 DOM 结果。而第二种方式的 cb 跟 watcher 的回调函数是异步执行的，所以没有顺序问题。

也就是说，当我们想要改变vue中的某个数据的值时，vue不会立即重新渲染，数据不会立即发生改变，而是会在下一次事件循环的时候更新。这`主要是因为Vue中DOM的操作是异步的`

**nextTick()的应用场景主要是：**
1. 在Vue生命周期的`created()`钩子函数进行的DOM操作一定要放在`Vue.nextTick()`的回调函数中

2. 在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进`Vue.nextTick()`的回调函数中。


# 5. 生命周期
Vue实例有一个完整的生命周期，也就是说从开始创建、初始化数据、编译模板、挂在DOM、渲染-更新-渲染、卸载等一系列过程，我们成为Vue 实例的生命周期，钩子就是在某个阶段给你一个做某些处理的机会。
![](https://ttarea.com/post-images/1615470829040.png)
回答技巧：有哪些生命周期以及在每个生命周期的时机中我们能做的事情。

* beforeCreate 钩子的执行时机是在` initState 函数之前`，这个函数会初始化 props、data、methods、watch、computed 等属性，也就意味着，这个`钩子是不可以访问`到以上这些属性中的数据的；
* created 钩子的执行时机是在` iniState 函数之后`，因此`可以访问`到以上这些属性中的数据；
* beforeMount 钩子的执行时机是在 DOM 挂载之前，还是JavaScript中的虚拟DOM形式存在的。执行顺序是先父后子；
* mounted 钩子的执行时机是在 DOM 挂载之后，执行顺序是先子后父；
* beforeUpdate 钩子的执行时机是在数据发生改变，还没有渲染之前；
* updated 钩子的执行时机是数据发生改变，并且被渲染后；
* beforeDestroy 钩子的执行时机是组件即将被销毁之前，也因此组件实例上属性的数据还可以被访问到；
* destroyed 钩子的执行时机是组件被销毁之后。

还有两个钩子跟 keep-alive 抽象组件相关的：
* activated 钩子的执行时机是在 mounted 钩子之后执行；
* deactivated 钩子的执行时机是在页面退出时，由于会缓存，所以不会销毁组件。

# 6. 虚拟 DOM 的原理

 ## 1. 浏览器渲染引擎工作流程都差不多，大致分为5步
* 第一步，用HTML分析器，分析HTML元素，**构建一颗DOM树**(标记化和树构建)。
* 第二步，用CSS分析器，分析CSS文件和元素上的inline样式，生成页面的样式表。
* 第三步，将DOM树和样式表，关联起来，构建一颗Render树(这一过程又称为Attachment)。
* 第四步，有了Render树，浏览器开始布局，为每个Render树上的节点确定一个在显示屏上出现的精确坐标。
* 第五步，Render树和节点显示坐标都有了，就调用每个节点paint方法，把它们绘制出来。 

`用我们传统的开发模式，原生JS或JQ操作DOM时，浏览器会从构建DOM树开始从头到尾执行一遍流程`。在一次操作中，我需要更新10个DOM节点，浏览器收到第一个DOM请求后并不知道还有9次更新操作，因此会马上执行流程，最终执行10次。

## 2. 为什么需要虚拟DOM，它有什么好处
虚拟DOM就是为了`解决浏览器性能问题`而被设计出来的。

出现了一个轻量级的对真实 DOM 描述的 JS 对象，称为虚拟 DOM，与真实 DOM 一一对应，将新旧虚拟 DOM 进行 diff，然后生成变更，将变更应用于真实 DOM，最终生成最新的真实 DOM。**这是将大量的 DOM 层面操作，转换成 JS 层面的操作**，是很划算的。

如前，若一次操作中有10次更新DOM的动作，虚拟DOM不会立即操作DOM，而是将这10次更新的`diff`内容保存到本地一个JS对象中，最终将这个JS对象一次性attch到DOM树上，再进行后续操作，避免大量无谓的计算量。所以，用JS对象模拟DOM节点的好处是，页面的更新可以先全部反映在JS对象(虚拟DOM)上，操作内存中的JS对象的速度显然要更快，等更新完成后，再将最终的JS对象映射成真实的DOM，交由浏览器去绘制。

## 3. diff算法的时间复杂度 
diff算法是通过**同层的树节点**进行比较而非对树进行逐层搜索遍历的方式，所以时间复杂度只有`O(n)`，是一种相当高效的算法

## 4. Diff操作
>diff算法的本质是找出两个对象之间的差异，目的是尽可能复用节点。

### 1. diff算法包括一下几个步骤：
* 用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文
档当中
* 当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较(diff)，记录两棵树差异
* 把2所记录的差异应用到步骤1所构建的真正的DOM树上(patch)，视图就更新了

![](https://ttarea.com/post-images/1616659004075.jpg)

**我们先看一下简单的diff是怎么设计的**
>逐个遍历newVdom的节点，找到它在oldVdom中的位置，如果找到了就移动对应的DOM元素，如果没找到说明是新增节点，则新建一个节点插入。遍历完成之后如果oldVdom中还有没处理过的节点，则说明这些节点在newVdom中被删除了，删除它们即可。

**接下来我们看一下Vue的diff实现**

### 2. Vue的diff实现
来看看patch是怎么打补丁的（代码只保留核心部分）
```
   function patch (oldVnode, vnode) {
    // some code
    if (sameVnode(oldVnode, vnode)) {
        patchVnode(oldVnode, vnode)
    } else {
        const oEl = oldVnode.el // 当前oldVnode对应的真实元素节点
        let parentEle = api.parentNode(oEl)  // 父元素
        createEle(vnode)  // 根据Vnode生成新元素
        if (parentEle !== null) {
            api.insertBefore(parentEle, vnode.el, api.nextSibling(oEl)) // 将新元素添加进父元素
            api.removeChild(parentEle, oldVnode.el)  // 移除以前的旧元素节点
            oldVnode = null
        }
    }
    // some code
    return vnode
    }
```
patch函数接收两个参数oldVnode和Vnode分别代表新的节点和之前的旧节点

判断两节点是否值得比较，值得比较则执行patchVnode
```
  function sameVnode (a, b) {
      return (
        a.key === b.key &&  // key值
        a.tag === b.tag &&  // 标签名
        a.isComment === b.isComment &&  // 是否为注释节点
        // 是否都定义了data，data包含一些具体信息，例如onclick , style
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b) // 当标签是<input>的时候，type必须相同
      )
    }
```
不值得比较则用Vnode替换oldVnode

当我们确定两个节点值得比较之后我们会对两个节点指定patchVnode方法。那么这个方法做了什么呢？

**这个函数做了以下事情：**
* 找到对应的真实dom，称为el
* 判断Vnode和oldVnode是否指向同一个对象，如果是，那么直接return
* 如果他们都有文本节点并且不相等，那么将el的文本节点设置为Vnode的文本节点。
* 如果oldVnode有子节点而Vnode没有，则删除el的子节点
* 如果oldVnode没有子节点而Vnode有，则将Vnode的子节点真实化之后添加到el
* 如果两者都有子节点，则执行updateChildren函数比较子节点，这一步很重要
* 其他几个点都很好理解，我们详细来讲一下updateChildren

`updateChildren`

代码量很大，不方便一行一行的讲解，所以下面结合一些示例图来描述一下
![](https://ttarea.com/post-images/1616659267875.png)
如上图的例子，更新前是1到10排列的Node列表，更新后是乱序排列的Node列表。罗列一下图中有以下几种类型的节点变化情况：
* 头部相同、尾部相同的节点：如1、10
* 头尾相同的节点：如2、9（处理完头部相同、尾部相同节点之后）
* 新增的节点：11
* 删除的节点：8
* 其他节点：3、4、5、6、7

上图例子中设置了oldStart+oldEnd，newStart+newEnd这样2对指针，分别对应oldVdom和newVdom的起点和终点。Vue不断对vnode进行处理同时移动指针直到其中任意一对起点和终点相遇。处理过的节点Vue会在oldVdom和newVdom中同时将它标记为已处理（标记方法后文中有介绍）。Vue通过以下措施来提升diff的性能

1. 优先处理特殊场景
* 头部的同类型节点、尾部的同类型节点
这类节点更新前后位置没有发生变化，所以不用移动它们对应的DOM
* 头尾/尾头的同类型节点
这类节点位置很明确，不需要再花心思查找，直接移动DOM就好

处理了这些场景之后，一方面一些不需要做移动的DOM得到快速处理，另一方面待处理节点变少，缩小了后续操作的处理范围，性能也得到提升

2. “原地复用”
“原地复用”是指Vue会尽可能复用DOM，尽可能不发生DOM的移动。Vue在判断更新前后指针是否指向同一个节点，其实不要求它们真实引用同一个DOM节点，实际上它仅判断指向的是否是同类节点（比如2个不同的div，在DOM上它们是不一样的，但是它们属于同类节点），如果是同类节点，那么Vue会直接复用DOM，这样的好处是不需要移动DOM

`"原地复用"应该就是设置key和不设置key的区别：`

不设key，newCh和oldCh只会进行头尾两端的相互比较，设key后，除了头尾两端的比较外，还会从用key生成的对象oldKeyToIdx中查找匹配的节点，所以为节点设置key可以更高效的利用dom

### 4. 按步骤解析updateChildren过程
1. **处理头部的同类型节点，即oldStart和newStart指向同类节点的情况，如下图中的节点1**

这种情况下，将节点1的变更更新到DOM，然后对其进行标记，标记方法是oldStart和newStart后移1位即可，过程中不需要移动DOM（更新DOM或许是要的，比如属性变更了，文本内容变更了等等）
![](https://ttarea.com/post-images/1616659749656.png)

2. **处理尾部的同类型节点，即oldEnd和newEnd指向同类节点的情况，如下图中的节点10**

与情况（1）类似，这种情况下，将节点10的变更更新到DOM，然后oldEnd和newEnd前移1位进行标记，同样也不需要移动DOM
![](https://ttarea.com/post-images/1616659785101.png)

3. 处理头尾/尾头的同类型节点，即oldStart和newEnd，以及oldEnd和newStart指向同类节点的情况，如下图中的节点2和节点9

先看节点2，其实是往后移了，移到哪里？移到oldEnd指向的节点（即节点9）后面，移动之后标记该节点，将oldStart后移1位，newEnd前移一位
![](https://ttarea.com/post-images/1616659870038.png)
操作结束之后情况如下图
![](https://ttarea.com/post-images/1616659893331.png)
同样地，节点9也是类似的处理，处理完之后成了下面这样
![](https://ttarea.com/post-images/1616659902079.png)

4. 处理新增的节点

newStart来到了节点11的位置，在oldVdom中找不到节点11，说明它是新增的
那么就创建一个新的节点，插入DOM树，插到什么位置？插到oldStart指向的节点（即节点3）前面，然后将newStart后移1位标记为已处理（注意oldVdom中没有节点11，所以标记过程中它的指针不需要移动），处理之后如下图
![](https://ttarea.com/post-images/1616659960929.png)

5. 处理更新的节点

经过第（4）步之后，newStart来到了节点7的位置，在oldVdom中能找到它而且不在指针位置（查找oldVdom中oldStart到oldEnd区间内的节点），说明它的位置移动了

那么需要在DOM树中移动它，移到哪里？移到oldStart指向的节点（即节点3）前面，与此同时将节点标记为已处理，跟前面几种情况有点不同，newVdom中该节点在指针处，可以移动newStart进行标记，而在oldVdom中该节点不在指针处，所以采用设置为undefined的方式来标记（一定要标记吗？后面会提到）
![](https://ttarea.com/post-images/1616660042587.png)
处理之后就成了下面这样
![](https://ttarea.com/post-images/1616660067446.png)

6. 处理3、4、5、6节点

经过第（5）步处理之后，我们看到了令人欣慰的一幕，newStart和oldStart又指向了同一个节点（即都指向节点3），很简单，按照（1）中的做法只需移动指针即可，非常高效，3、4、5、6都如此处理，处理完之后如下图
![](https://ttarea.com/post-images/1616660118899.png)

7. 处理需删除的节点

经过前6步处理之后（实际上前6步是循环进行的），朋友们看newStart跨过了newEnd，它们相遇啦！而这个时候，oldStart和oldEnd还没有相遇，说明这2个指针之间的节点（包括它们指向的节点，即上图中的节点7、节点8）是此次更新中被删掉的节点。

OK，那我们在DOM树中将它们删除，再回到前面我们对节点7做了标记，为什么标记是必需的？标记的目的是告诉Vue它已经处理过了，是需要出现在新DOM中的节点，不要删除它，所以在这里只需删除节点8。

在应用中也可能会遇到oldVdom的起止点相遇了，但是newVdom的起止点没有相遇的情况，这个时候需要对newVdom中的未处理节点进行处理，这类节点属于更新中被加入的节点，需要将他们插入到DOM树中。
![](https://ttarea.com/post-images/1616660166307.png)

至此，整个diff过程结束了

整个过程是逐步找到更新前后vdom的差异，然后将差异反应到DOM树上（也就是patch），特别要提一下Vue的patch是即时的，并不是打包所有修改最后一起操作DOM


# 7. Vue不同组件之间如何通信的？
组件是 vue.js最强大的功能之一，而组件实例的作用域是相互独立的，这就意味着不同组件之间的数据无法相互引用。一般来说，组件可以有以下几种关系：
![](https://ttarea.com/post-images/1616310215248.jpg)
如上图所示，A 和 B、B 和 C、B 和 D 都是父子关系，C 和 D 是兄弟关系，A 和 C 是隔代关系（可能隔多代）。

## 0. 组件注册
全局注册：Vue.component(tagName, options)

局部注册：在其他组件中的 components 属性中注册某个组件，就可以使用它了
~~~
import HelloWorld from './components/HelloWorld'

export default {
  components: {
    HelloWorld
  }
}
~~~

## 1. props/$emit
父组件A通过props的方式向子组件B传递，B to A 通过在 B 组件中 $emit, A 组件中 v-on 的方式实现。

### 1. 父组件向子组件传值
接下来我们通过一个例子，说明父组件如何向子组件传递值：在子组件Users.vue中如何获取父组件App.vue中的数据 `users:["Henry","Bucky","Emily"]`
```
//App.vue父组件
<template>
  <div id="app">
    <users v-bind:users="users"></users>//前者自定义名称便于子组件调用，后者要传递数据名
  </div>
</template>
<script>
import Users from "./components/Users"
export default {
  name: 'App',
  data(){
    return{
      users:["Henry","Bucky","Emily"]
    }
  },
  components:{
    "users":Users
  }
}
```
```
//users子组件
<template>
  <div class="hello">
    <ul>
      <li v-for="user in users">{{user}}</li>//遍历传递过来的值，然后呈现到页面
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props:{
    users:{           //这个就是父组件中子标签自定义名字
      type:Array,
      required:true
    }
  }
}
</script>
```
**总结：父组件通过props向下传递数据给子组件。注：组件中的数据共有三种形式：data、props、computed**

### 2. 子组件向父组件传值（通过事件形式）
接下来我们通过一个例子，说明子组件如何向父组件传递值：当我们点击“Vue.js Demo”后，子组件向父组件传递值，文字由原来的“传递的是一个值”变成“子向父组件传值”，实现子组件向父组件值的传递。
![](https://ttarea.com/post-images/1616310448077.jpg)
```
// 子组件
<template>
  <header>
    <h1 @click="changeTitle">{{title}}</h1>//绑定一个点击事件
  </header>
</template>
<script>
export default {
  name: 'app-header',
  data() {
    return {
      title:"Vue.js Demo"
    }
  },
  methods:{
    changeTitle() {
      this.$emit("titleChanged","子向父组件传值");//自定义事件  传递值“子向父组件传值”
    }
  }
}
</script>
```
```
// 父组件
<template>
  <div id="app">
    <app-header v-on:titleChanged="updateTitle" ></app-header>//与子组件titleChanged自定义事件保持一致
   // updateTitle($event)接受传递过来的文字
    <h2>{{title}}</h2>
  </div>
</template>
<script>
import Header from "./components/Header"
export default {
  name: 'App',
  data(){
    return{
      title:"传递的是一个值"
    }
  },
  methods:{
    updateTitle(e){   //声明这个函数
      this.title = e;
    }
  },
  components:{
   "app-header":Header,
  }
}
</script>
```
**总结：子组件通过events给父组件发送消息，实际上就是子组件把自己的数据发送到父组件。**

## 2. \$emit/\$on
**这种方法通过一个空的Vue实例作为中央事件总线（事件中心），用它来触发事件和监听事件,巧妙而轻量地实现了任何组件间的通信，包括父子、兄弟、跨级**。当我们的项目比较大时，可以选择更好的状态管理解决方案vuex。

### 1. 具体实现方式：
```
    var Event=new Vue();
    Event.$emit(事件名,数据);
    Event.$on(事件名,data => {});
```
### 2. 举个例子
假设兄弟组件有三个，分别是A、B、C组件，C组件如何获取A或者B组件的数据
```
<div id="itany">
    <my-a></my-a>
    <my-b></my-b>
    <my-c></my-c>
</div>
<template id="a">
  <div>
    <h3>A组件：{{name}}</h3>
    <button @click="send">将数据发送给C组件</button>
  </div>
</template>
<template id="b">
  <div>
    <h3>B组件：{{age}}</h3>
    <button @click="send">将数组发送给C组件</button>
  </div>
</template>
<template id="c">
  <div>
    <h3>C组件：{{name}}，{{age}}</h3>
  </div>
</template>
<script>
var Event = new Vue();//定义一个空的Vue实例
var A = {
    template: '#a',
    data() {
      return {
        name: 'tom'
      }
    },
    methods: {
      send() {
        Event.$emit('data-a', this.name);
      }
    }
}
var B = {
    template: '#b',
    data() {
      return {
        age: 20
      }
    },
    methods: {
      send() {
        Event.$emit('data-b', this.age);
      }
    }
}
var C = {
    template: '#c',
    data() {
      return {
        name: '',
        age: ""
      }
    },
    mounted() {//在模板编译完成后执行
     Event.$on('data-a',name => {
         this.name = name;//箭头函数内部不会产生新的this，这边如果不用=>,this指代Event
     })
     Event.$on('data-b',age => {
         this.age = age;
     })
    }
}
var vm = new Vue({
    el: '#itany',
    components: {
      'my-a': A,
      'my-b': B,
      'my-c': C
    }
}); 
</script>
```
![](https://ttarea.com/post-images/1616310652213.gif)
$on 监听了自定义事件 data-a和data-b，因为有时不确定何时会触发事件，一般会在 mounted 或 created 钩子中来监听。

## 3. Vuex
![](https://ttarea.com/post-images/1616310687124.jpg)
### 1. Vuex与localStorage
vuex 是 vue 的状态管理器，存储的数据是响应式的。但是并不会保存起来，刷新之后就回到了初始状态，**具体做法应该在vuex里数据改变的时候把数据拷贝一份保存到localStorage里面，刷新之后，如果localStorage里有保存的数据，取出来再替换store里的state**。
```
let defaultCity = "上海"
try {   // 用户关闭了本地存储功能，此时在外层加个try...catch
  if (!defaultCity){
    defaultCity = JSON.parse(window.localStorage.getItem('defaultCity'))
  }
}catch(e){}
export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  mutations: {
    changeCity(state, city) {
      state.city = city
      try {
      window.localStorage.setItem('defaultCity', JSON.stringify(state.city));
      // 数据改变的时候把数据拷贝一份保存到localStorage里面
      } catch (e) {}
    }
  }
})
```
这里需要注意的是：由于vuex里，我们保存的状态，都是数组，而localStorage只支持字符串，所以需要用JSON转换：
```
JSON.stringify(state.subscribeList);   // array -> string
JSON.parse(window.localStorage.getItem("subscribeList"));    // string -> array 
```

## 4. \\$attrs/\\$listeners
多级组件嵌套需要传递数据时，通常使用的方法是通过vuex。但如果仅仅是传递数据，而不做中间处理，使用 vuex 处理，未免有点大材小用。为此Vue2.4 版本提供了另一种方法----\$attrs/\$listeners

* \$attrs：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="\$attrs" 传入内部组件。通常配合 interitAttrs 选项一起使用。

* \$listeners：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="\$listeners" 传入内部组件

简单来说：`$attrs`与`$listeners`是两个对象，`$attrs`里存放的是父组件中绑定的非 Props 属性，`$listeners`里存放的是父组件中绑定的非原生事件。

## 5. $parent / $children与 ref
* `ref`：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例
* `$parent `/ `$children`：访问父 / 子实例

需要注意的是：这两种都是直接得到组件实例，使用后可以直接调用组件的方法或访问数据。我们先来看个用`ref`来访问组件的例子：
```
// component-a 子组件
export default {
  data () {
    return {
      title: 'Vue.js'
    }
  },
  methods: {
    sayHello () {
      window.alert('Hello');
    }
  }
}
```
```
// 父组件
<template>
  <component-a ref="comA"></component-a>
</template>
<script>
  export default {
    mounted () {
      const comA = this.$refs.comA;
      console.log(comA.title);  // Vue.js
      comA.sayHello();  // 弹窗
    }
  }
</script>
```
**不过，这两种方法的弊端是，无法在跨级或兄弟间通信。**

我们想在 component-a 中，访问到引用它的页面中（这里就是 parent.vue）的两个 component-b 组件，那这种情况下，就得配置额外的插件或工具了，比如 Vuex 和 Bus 的解决方案。

![](https://ttarea.com/post-images/1616312059426.png)


# 8. vuex 的理解
## 1. 初识VueX
`！！Vuex是响应式的！！`  Window不是响应式
`VueX`是适用于在`Vue`项目开发时使用的状态管理工具。
`Vue`为这些被多个组件频繁使用的值提供了一个统一管理的工具——`VueX`。在具有VueX的Vue项目中，我们只需要把这些值定义在VueX中，即可在整个Vue项目的组件中使用。

## 2. VueX中的核心内容
在VueX对象中，其实不止有`state`，还有用来操作`state`中数据的方法集，以及当我们需要对state中的数据需要加工的方法集等等成员。

**成员列表：**
* state 存放状态
* mutations state成员操作
* getters 加工state成员给外界
* actions 异步操作
* modules 模块化状态管理

### 2.1 VueX的工作流程
![](https://ttarea.com/post-images/1616310687124.jpg)

首先，`Vue`组件如果调用某个`VueX`的方法过程中需要向后端请求时或者说出现异步操作时，需要`dispatch` VueX中`actions`的方法，以保证数据的同步。可以说，`action`的存在就是为了让`mutations`中的方法能在异步操作中起作用。

如果没有异步操作，那么我们就可以直接在组件内提交状态中的`Mutations`中自己编写的方法来达成对`state`成员的操作。不建议在组件中直接对state中的成员进行操作，这是因为直接修改(例如：this.$store.state.name = 'hello')的话不能被`VueDevtools`所监控到。

最后被修改后的`state`成员会被渲染到组件的原位置当中去。


### 2.2 Mutations
`mutations`是操作`state`数据的方法的集合，比如对该数据的修改、增加、删除等等。

mutations方法都有默认的形参：

([state] [,payload])

`state`是当前VueX对象中的state
`payload`是该方法在被调用时传递参数使用的

**修改**：
```
this.$store.commit
```
**增加**：Vue.set 为某个对象设置成员的值，若不存在则新增
```
Vue.set(state,"age",15)
```
**删除**：Vue.delete 删除成员
```
Vue.delete(state,'age')
```
### 2.3 Getters
可以对state中的成员加工后传递给外界

**Getters中的方法有两个默认参数**
* state 当前VueX对象中的状态对象
* getters 当前getters对象，用于将getters下的其他getter拿来用
```
getters:{
    nameInfo(state){
        return "姓名:"+state.name
    },
    fullInfo(state,getters){
        return getters.nameInfo+'年龄:'+state.age
    }  
}
```
组件中调用：
```
this.$store.getters.fullInfo
```
### 2.4 Actions
由于直接在`mutation`方法中进行**异步操作**，将会引起数据失效。所以提供了`Actions`来专门进行异步操作，最终提交`mutation`方法。

Actions中的方法有两个默认参数
* context 上下文(相当于箭头函数中的this)对象
* payload 挂载参数

由于`setTimeout`和`promise`是异步操作，所以需要使用`actions`
```
 aEdit(context,payload){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                context.commit('edit',payload)
                resolve()
            },2000)
        })
    }
```
在组件中调用:
```
this.$store.dispatch('aEdit',{age:15})
```

### 2.5 Models
当项目庞大，状态非常多时，可以采用**模块化管理模式**。Vuex 允许我们将 `store `分割成模块（`module`）。每个模块拥有自己的` state、mutation、action、getter`、甚至是嵌套子模块——从上至下进行同样方式的分割。
```
models:{
    a:{
        state:{},
        getters:{},
        ....
    }
}
```
组件内调用模块a的状态：
```
this.$store.state.a
```
1. 对于模块内部的 mutation 和 getter，**接收的第一个参数是模块的局部状态对象**。

2. 同样，对于模块内部的 action，局部状态通过 `context.state` 暴露出来，根节点状态则为 `context.rootState`

3. 对于模块内部的` getter`，根节点状态会作为第三个参数暴露出来

## 3. 规范目录结构
如果把整个`store`都放在`index.js`中是不合理的，所以需要拆分。比较合适的目录格式如下：
```
store:.
│  actions.js
│  getters.js
│  index.js
│  mutations.js
│  mutations_type.js   ##该项为存放mutaions方法常量的文件，按需要可加入
│
└─modules
        Astore.js
```
对应的内容存放在对应的文件中，和以前一样，在`index.js`中存放并导出`store`。`state`中的数据尽量放在`index.j`s中。而`modules`中的`Astore`局部模块状态如果多的话也可以进行细分。


## 4. vuex的优缺点
**vuex的优点**
1. 解决了非父子组件的消息传递（将数据存放在state中）
2. 减少了AJAX请求次数，有些情景可以直接从内存中的state获取

**vuex的缺点**
1. 刷新浏览器，vuex中的state会重新变为初始状态
解决方案vuex-along ,vuex-persistedstate

## 5. 命名空间
getter，mutation，action 他们默认都是注册在全局命名空间的，所以我们默认是可以和使用根状态一样去使用他们，但是这样不可避免会出现命名冲突的问题，所以使模块有更高的封装性与复用性，我们可以通过添加 `namespaced: true` 使其成为带命名空间的模块。当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。
```
// moduleB 模块导出的时候加个 namespaced: true,
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
```
### 5.1 辅助函数的使用
除了这个之外，如果你当前组件用的 vuex 状态都是一个模块的话，我们可以使用 createNamespacedHelpers 创建基于某个命名空间辅助函数，如下：
```
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('moduleB') // moduleName
```
这样创建之后，我们就可以用之前的写法来访问到模块的状态。
```
...mapState({
  bName: state => state.bName,
}),
```
### 5.2 在带命名空间的模块内访问全局内容
如果你希望使用全局 state 和 getter，rootState 和 rootGetter 会作为第三和第四参数传入 getter，也会通过 context 对象的属性传入 action。

若需要在全局命名空间内分发 action 或提交 mutation，将 { root: true } 作为第三参数传给 dispatch 或 commit 即可


# 9、computed 和 watch 区别
## 1. 计算属性computed : 
1. 支持缓存，只有依赖数据发生改变，才会重新进行计算
2. 不支持异步，当computed内有异步操作时无效，无法监听数据的变化
3. computed 属性值会默认走缓存，计算属性是基于它们的响应式依赖进行缓存的，也就是基于data中声明过或者父组件传递的props中的数据通过计算得到的值
4. 如果一个属性是由其他属性计算而来的，这个属性依赖其他属性，是一个多对一或者一对一，一般用computed
5. 如果computed属性属性值是函数，那么默认会走get方法；函数的返回值就是属性的属性值；在computed中的，属性都有一个get和一个set方法，当数据变化时，调用set方法。

## 2. 侦听属性watch：
1. 不支持缓存，数据变，直接会触发相应的操作；
2. watch支持异步；
3. 监听的函数接收两个参数，第一个参数是最新的值；第二个参数是输入之前的值；
4. 当一个属性发生变化时，需要执行对应的操作；一对多；
5. 监听数据必须是data中声明过或者父组件传递过来的props中的数据，当数据变化时，触发其他操作，函数有两个参数，
　　immediate：组件加载立即触发回调函数执行，
　　deep: 深度监听，为了发现对象内部值的变化，复杂类型的数据时使用，例如数组中的对象内容的改变，注意监听数组的变动不需要这么做。注意：deep无法监听到数组的变动和对象的新增，参考vue数组变异，只有以响应式的方式触发才会被监听到。
~~~
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
},
watch: {
    a: {
      handler(newVal) {
        console.log(newVal)
      },
      deep: true,
      immediate: true
    }
  }
})
~~~

# 10. vue-router (hash， HTML5 新增的 pushState)
## 1. 单页应用，如何实现其路由功能---路由原理
大型单页应用最显著特点之一就是采用的`前端路由`跳转子页面系统，通过改变页面的URL，在`不重新请求页面`的情况下，更新页面视图。

更新视图但是浏览器不重新渲染整个页面，只是重新渲染部分子页面，加载速度快，页面反应灵活，这是 SPA 的优势，这也是前端路由原理的核心，这会给人一种仿佛在操作 APP 一样的感觉，目前在浏览器环境中实现这一功能的方式主要有两种：
* 利用 URL 的 hash(#)
* 利用 H5 新增方法 History interface

### 1. 利用URL的Hash(#)
在 H5 还没有流行开来时，一般 SPA 都采用 url 的 hash(#) 作为锚点，获取到 # 之后的值，并监听其改变，再进行渲染对应的子页面。

例如，你的地址为http://localhost:8888/#/abc 那么利用 location.hash 输出的内容就为 #/abc。

那么我就先从 location 这个对象说起。
先来看看location的官方属性有哪些
|  属性   |  描述  |
| :----:  | :----: |
| hash  | 设置或返回从 # 开始的 URL （锚） |
| host  | 设置或返回主机名和当前 URL 的端口号 |
| hostname  | 设置或返回当前 URL 的主机名 |
| href  | 设置或返回完整的 URL |
| pathname  | 设置或返回当前 URL 的路径部分 |
| port  | 设置或返回当前 URL 的端口号 |
| protocol  | 设置或返回当前 URL 的协议 |
| search  | 设置或返回从 ? 开始的 URL 部分 |

由上表格可以知道，我们可以轻易的获取到 # 之后的部分，那么拿到这个部分我们怎么监听其变化以及对应的子页面进行改变呢？

window 对象中有一个事件是专门监听hash的变化，那就是onhashchange，首先我们需要 监听此事件：
```
<body>
  <h1 id="id"></h1>
  <a href="#/id1">id1</a>
  <a href="#/id2">id2</a>
  <a href="#/id3">id3</a>
</body>

<script>
  window.addEventListener('hashchange', e => {
    e.preventDefault()
    document.querySelector('#id').innerHTML = location.hash
  })
</script>
```
可见此时我们已经完全监听到了 URL 的变化，页面上的内容也对应改变了。
那么，该如何载入不同的页面呢，目前来说有三种方式：
* 寻找节点内容并改变（也就是上面我们演示的内容）
* import 一个 JS 文件，文件内部 export 模版字符串
* 利用 AJAX 加载对应的 HTML 模版


### 2. 利用 H5 新增方法 History interface
如果在微信或者其他不显示 URL 的 APP 中使用，倒也无所谓，但是如果在一般的浏览器中使用就会遇到问题了。
由此，H5 的 History 模式，解决了这一问题。

在 H5 之前， History 仅仅只有一下几个 API：
|  API	 |  说明  |
| :----:  | :----: |
| back()  | 回退到上次访问的 URL （与浏览器点击后退按钮相同） |
| forward()  |前进到回退之前的 URL （与浏览器点击向前按钮相同） |
| go(n)  | n 接收一个整数，移动到该整数指定的页面，比如go(1)相当于forward()，go(-1) 相当于 back()，go(0)相当于刷新当前页面 |

**如果移动的位置超出了访问历史的边界，以上三个方法并不报错，而是静默失败**。
然而，到了 H5 的时代，新的 H5 则赋予了其更多的新特性：
1. `往返缓存`
默认情况下，浏览器会缓存当前会话页面，这样当下一个页面点击后退按钮，或前一个页面点击前进按钮，浏览器便会从缓存中提取并加载此页面，这个特性被称为“往返缓存”。

PS: 此缓存会保留页面数据、DOM和js状态，实际上是将整个页面完好无缺地保留。

2. 往历史记录栈中添加记录：`pushState(state, title, url)`
* state: 一个 JS 对象（不大于640kB），主要用于在 popstate 事件中作为参数被获取。如果不需要这个对象，此处可以填 null
* title: 新页面的标题，部分浏览器(比如 Firefox )忽略此参数，因此一般为 null
* url: 新历史记录的地址，可为页面地址，也可为一个锚点值，新 url 必须与当前 url 处于同一个域，否则将抛出异常，此参数若没有特别标注，会被设为当前文档 url

**除此之外，仍有几点需要注意**：
* 将 url 设为锚点值时不会触发 hashchange
* 根据同源策略，如果设置不同域名地址，会报错，这样做的目的是：防止用户以为它们是同一个网站，若没有此限制，将很容易进行 XSS 、 CSRF 等攻击方式

3. 改变当前的历史记录：`replaceState(state, title, url)`
* 参数含义同 pushstate
* 改变当前的历史记录而不是添加新的记录
* 同样不会触发 popstate

4. `popstate`
定义：每当同一个文档的浏览历史（即 history 对象）出现变化时，就会触发 popstate 事件。

注意：若仅仅调用 pushState 方法或 replaceState 方法 ，并不会触发该事件，只有用户点击浏览器**倒退**按钮和**前进**按钮，或者使用 JavaScript 调用 back 、 forward 、 go 方法时才会触发。另外，该事件只针对同一个文档，如果浏览历史的切换，导致加载不同的文档，该事件也不会触发。

### 3. 总结
一般场景下，hash 和 history 都可以，除非你更在意颜值，# 符号夹杂在 URL 里看起来确实有些不太美丽。
另外，调用 `history.pushState()` 相比于直接修改 `hash`，存在以下优势：
* pushState() 设置的新 URL 可以是与当前 URL 同源的任意 URL；而 hash 只可修改 # 后面的部分，因此只能设置与当前 URL 同文档的 URL
* pushState() 设置的新 URL 可以与当前 URL 一模一样，这样也会把记录添加到栈中；而 hash 设置的新值必须与原来不一样才会触发动作将记录添加到栈中
* pushState() 通过 stateObject 参数可以添加任意类型的数据到记录中；而 hash 只可添加短字符串；
* pushState() 可额外设置 title 属性供后续使用。

但其实 history 也不是样样都好，虽然在浏览器里游刃有余，但真要通过 URL 向后端发起 HTTP 请求时，两者的差异就来了。尤其在用户手动输入 URL 后回车，或者刷新（重启）浏览器的时候。
* hash 模式下，仅 hash 符号之前的内容会被包含在请求中，如 http://www.qqq.com，因此对于后端来说，即使没有做到对路由的全覆盖，也不会返回 404 错误。
* history 模式下，前端的 URL **必须**和实际向后端发起请求的 URL 一致，如 http://www.qqq.com/book/id。如果后端缺少对 /book/id 的路由处理，将返回 404 错误。Vue-Router 官网里如此描述：“不过这种模式要玩好，还需要后台配置支持……所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。”
* 需在后端（Apache 或 Nginx）进行简单的路由配置，同时搭配前端路由的 404 页面支持。
  
  
## 2. vue-router 如何做用户登录权限等
使用 meta 来检测一个目标页面是否需要登陆权限，然后向服务器发送一个带有 Cookie 字段的请求，询问浏览器端的 cookie 中的 sessionID 是否已过期（因为 session 是保存在服务器端的），如果过期就需要重新登陆，跳转到登陆页面，否则表示已是登陆状态，进入目标页面。

## 3. 你在项目中怎么实现路由的嵌套
一个被渲染组件同样可以包含自己的\<router-view>（一个出口） 
要在嵌套的出口中渲染组件，需要在 VueRouter 中使用 children 配置 
在 children 中的路由不需要以 / 开头，因为是嵌套的路由 
除此之外就像和 routes 配置一样的路由配置数组

## 4. vue-router 有哪几种导航钩子
### 1.全局的：
全局前置守卫 beforeEach
全局解析守卫（在组件路由所有守卫之后） beforeResolve 
全局后置钩子（没有 next 参数，因为不在导航守卫队列中，此时导航被确认） afterEach 
router.beforeEach((to,from.next) => {})
单个路由独享（在路由配置上直接定义）：beforeEnter
![](https://ttarea.com/post-images/1618320145843.png)

### 2. 组件级：在路由组件内直接调用的守卫，像调用生命周期那样
beforeRouteEnter 
这是唯一可以给 next() 传递回调函数作为参数的守卫（对于所有守卫而言的） 
其他两个已经可以直接使用 this，所以不需要再传入回调 

beforeRouteUpdate 在重复组件中调用这个守卫，所以可以访问 this 
主要是因为在重用组件中使用了这个守卫，因此在这里请求数据可以在组件复用是更新数据 

beforeRouteLeave 离开失活组件时执行的守卫，所以可以访问到失活组件的 this 
当导航守卫的队列都清空时，表示导航被确认，然后调用全局的 afterEach 钩子，然后触发 DOM 更新，然后再会执行 beforeRouteEnter 中的 next 方法中的回调函数。 
只要有 next 参数的，最后都要执行 next() 才能跳转到下一个守卫


## 5. $route 和 $router 的区别：
this.$router 是访问路由器
this.$route 是访问当前路由

this.\$router.push会往history栈中添加一个新的记录。
this.$route相当于当前正在跳转的路由对象。可以从里面获取name,path,params,query等。

## 6. 如何使用 vue-router
1）import 进来，然后通过 Vue.use() 明确安装路由功能
2）定义路由组件，或者引入单文件组件
3）定义路由配置，配置是一个数组，元素是对象
4）创建一个 vue-router 实例，new vueRouter({})
5）创建 vue 根实例，将 router 作为配置参数传入

# 11. vue中v-if与v-show的区别以及使用场景
## 1. 区别
1. 手段：v-if是通过控制dom节点的`存在`与否来控制元素的显隐；v-show是通过设置DOM元素的`display样式`，block为显示，none为隐藏；
2. 编译过程：v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show只是简单的`基于css切换`；
3. 编译条件：v-if是`惰性`的，如果初始条件为假，则什么也不做；只有在条件第一次变为真时才开始局部编译（编译被缓存？编译被缓存后，然后再切换的时候进行局部卸载); v-show是在任何条件下（首次条件是否为真）都被编译，然后被缓存，而且DOM元素保留；
4. 性能消耗：v-if有更高的`切换消耗`；v-show有更高的初始`渲染消耗`；

换句话说，v-if 的表达式返回值，会直接触发到` 当前组件 生命周期`，并且事件监听器和子组件会被适当地被销毁和重建。 所以，可以理解为 v-if 是惰性的，他不会在页面初始化时，被无条件渲染，而是按需响应式地渲染。

而 v-show ，这是无论表达式返回值是否是 true 都会在` create 生命周期`，无条件消耗资源生成对应的 Virtual DOM，并挂载到HTML页面中，只是再根据表达式返回值，切换 display 这个 CSS 属性。

## 2. 使用场景
基于以上区别，因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

## 3. 总结
v-if判断是否加载，可以减轻服务器的压力，在需要时加载,但有更高的切换开销;v-show调整DOM元素的CSS的dispaly属性，可以使客户端操作更加流畅，但有更高的初始渲染开销。如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

# 12. Vue能不能监听新属性
## 1. 先说结论：不能对新增属性监听更新
## 2. 解释原因：
1. 受现代 JavaScript 的限制，Vue 不能检测到对象属性的添加或删除。由于 Vue 会在初始化实例时对属性执行 getter/setter 转化过程，所以属性必须在 data 对象上存在才能让 Vue 转换它，这样才能让它是响应的。
```
var vm = new Vue({
  data:{
  a:1
 }
})
// `vm.a` 是响应的

vm.b = 2
// `vm.b` 是非响应的
```
2. Vue 不允许在已经创建的实例上动态添加新的根级响应式属性。然而它可以使用 Vue.set(object, key, value) 方法将响应属性添加到嵌套的对象上：
```
Vue.set(vm.someObject, 'b', 2)
```
3. 还可以使用 vm.$set 实例方法，这也是全局 Vue.set 方法的别名：
```
this.$set(this.someObject,'b',2)
```
4. 有时你想向已有对象上添加一些属性，例如使用 Object.assign()方法来添加属性。但是，添加到对象上的新属性不会触发更新。在这种情况下可以创建一个新的对象，让它包含原对象的属性和新的属性：
```
// 代替 `Object.assign(this.someObject, { a: 1, b: 2 })`
this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })
```

# 13. Vue插槽（v-slot）
## 1. 匿名插槽
匿名插槽，我们也可以叫它单个插槽或者默认插槽。和具名插槽相对，它是不需要设置  name 属性的，它隐藏的name属性为default。

在使用的时候还有一个问题要注意的 如果是有2个以上的匿名插槽是会child标签里面的内容全部都替换到每个slot；

## 2. 具名插槽 
顾名思义就是slot 是带有name的 ，定义：\<slot name="header" />  或者使用简单缩写的定义 #header                
使用：要用一个 template标签包裹

这里说一下多个具名插槽的使用 `多个具名插槽，插槽的位置不是使用插槽的位置而定的，是在定义的时候的位置来替换的`

# 14. Vue的Scoped属性
## 1. 什么是scoped
在Vue文件中的style标签上有一个特殊的属性，scoped。当一个style标签拥有scoped属性时候，它的css样式只能用于`当前`的Vue组件，可以使组件的样式不相互污染。如果一个项目的`所有style标签`都加上了scoped属性，相当于实现了样式的`模块化`。

## 2. Scoped的实现原理
Vue中的scoped属性的效果主要是通过`PostCss`实现的。
以下是转译前的代码：
```
<style scoped lang="less">
    .example{
        color:red;
    }
</style>
<template>
    <div class="example">scoped测试案例</div>
</template>
```
转译后：
```
.example[data-v-5558831a] {
  color: red;
}
<template>
    <div class="example" data-v-5558831a>scoped测试案例</div>
</template>
```
`PostCSS`给一个组件中的所有`dom`添加了一个独一无二的`动态属性`，给`css选择器`额外添加一个对应的`属性选择器`，来选择组件中的dom，这种做法使得样式只作用于含有该属性的dom元素(组件内部的dom)。

>总结：scoped的渲染规则：

1. 给HTML的dom节点添加一个不重复的data属性(例如: data-v-5558831a)来唯一标识这个dom 元素
2. 在每句css选择器的末尾(编译后生成的css语句)加一个当前组件的data属性选择器(例如：[data-v-5558831a])来私有化样式

## 3. Scoped穿透
Scoped看起来很好用，当时在Vue项目中，当我们引入第三方组件库时(如使用vue-awesome-swiper实现移动端轮播)，需要在局部组件中修改第三方组件库的样式，而又不想去除scoped属性造成组件之间的样式覆盖。这时我们可以通过特殊的方式穿透scoped。

>stylus的样式穿透 使用>>>
```
外层 >>> 第三方组件 
        样式
        
   .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
```
sass和less的样式穿透 使用/deep/
```
  外层 /deep/ 第三方组件 {
        样式
    }
    .wrapper /deep/ .swiper-pagination-bullet-active{
      background: #fff;
    }
```

## 4. 在组件中修改第三方组件库样式的其它方法
上面我们介绍了在使用scoped 属性时，通过scopd穿透的方式修改引入第三方组件库样式的方法，下面我们介绍其它方式来修改引入第三方组件库的样式。

1. 在vue组件中不使用scoped属性
2. 在vue组建中使用两个style标签，一个加上scoped属性，一个不加scoped属性，把需要覆盖的css样式写在不加scoped属性的style标签里
3. 建立一个reset.css(基础全局样式)文件，里面写覆盖的css样式，在入口文件main.js 中引入





# 15. defineProperty 和 Proxy 对象代理的区别 ！！！
## 1.defineproperty 对对象和数组的监听
### 1. Object.defineProperty 对象属性监听
现在我们有这样一个对象
```
let obj = {
	name:'码不停息',
    age:18,
    love:['吃饭','睡觉','打豆豆']
}
```
我们想实现只要是对象里面的任何数据改变,都要跟新视图或者执行我们自己的逻辑,那我们需要怎么办呢?

我们似乎需要解决以下几个问题:
* `obj`对象有多个属性,可能需要__循环__添加到`Object.defineProperty`里面
* `obj`的属性也可能是对象或者数组,可能需要__递归__
* 用户可能给`obj`赋值新的属性,这种情况可能需要 **单独处理**
```
let a = {'b': 1};
Object.defineProperty(a, 'b', {
    enumerable: false,
    configurable: false,
    get: function(){
        console.log('b' + '被访问');
    },
    set: function(newVal){
        console.log('b' + '被修改，新' + 'b' + '=' + newVal);
    }
});
a.b = 2;   // b被修改，新b=2
a.b;       // b被访问
```
我们可能会有对象中属性的值还是对象这种嵌套情况，可以通过递归解决

### 2. Object.defineProperty 数组属性监听
Object.defineProperty 是对象的方法监听不到数组的变更的，**！重写 ！**`Array`的原型方法来实现

**Vue将data中的数组进行了原型链重写，指向了自己定义的数组原型方法。这样当调用数组api时，可以通知依赖更新。如果数组中包含着引用类型，会对数组中的引用类型再次递归遍历进行监控。这样就实现了监测数组变化。**

下面我们在`observer`中加上关于对数组的判断
```
const orginalProto = Array.prototype;
const arrayProto = Object.create(orginalProto); // 先克隆一份Array的原型出来
const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
methodsToPatch.forEach(method => {
  arrayProto[method] = function () {
    // 执行原始操作
    orginalProto[method].apply(this, arguments)
    console.log('监听赋值成功', method)
  }
})
```

### 3. 不存在的对象属性
```
<template>
  {{ obj.c }}
</template>
<script>
export default {
  data: {
    obj: { a: 1 },
  },
  mounted() {
    this.obj.c = 3
  }
}
</script>
```
这个例子中，我们对obj上原本不存在的`c`属性进行了一个赋值，但是在Vue2中，这是`不会触发视图`的响应式更新的，
这是因为Object.defineProperty必须对于确定的`key`值进行响应式的定义，
这就导致了如果data在初始化的时候没有`c`属性，那么后续对于`c`属性的赋值都不会触发Object.defineProperty中对于`set`的劫持，
在Vue2中，这里只能用一个额外的api Vue.set来解决，

## 2. Proxy 代理实现
```
const raw = {}
const data = new Proxy(raw, {
    get(target, key) { },
    set(target, key, value) { }
})
```
可以看出来，Proxy在定义的时候并不用关心key值，
只要你定义了get方法，那么后续对于data上任何属性的访问（哪怕是不存在的），
都会触发`get`的劫持，`set`也是同理。
这样Vue3中，对于需要定义响应式的值，初始化时候的要求就没那么高了，只要保证它是个可以被Proxy接受的对象或者数组类型即可。
当然，Proxy对于数据拦截带来的便利还不止于此，往下看就知道。

>Proxy只会代理对象的第一层，Vue3又是怎样处理这个问题的呢？

`判断当前Reflect.get的返回值是否为Object，如果是则再通过reactive方法做代理， 这样就实现了深度观测`

### 1. 思路
首先响应式的思路无外乎这样一个模型：
1. 定义某个数据为`响应式数据`，它会拥有收集`访问它的函数`的能力。
2. 定义观察函数，在这个函数内部去访问`响应式数据`，访问到`响应式数据`的某个key的时候，会建立一个依赖关系`key -> reaction观察函数`。
3. 检测到`响应式数据`的`key`的值更新的时候，会去重新执行一遍它所收集的所有`reaction`观察函数。

### 2. reactive的实现（定义响应式数据）
首先是定义proxy
```
const reactive = new Proxy(raw, baseHandlers)
```
这个baseHandlers里就是对于数据的`get`、`set`之类的劫持，
这里有两个`WeakMap`： `proxyToRaw`和`rawToProxy`，
可以看到在定义响应式数据为一个Proxy的时候，会进行一个`双向的存储`，
这样后续无论是拿到原始对象还是拿到响应式`proxy`，都可以很容易的拿到它们的`另一半`。

之后`storeObservable`，是用原始对象建立一个map：
```
const connectionStore = new WeakMap<Raw, ReactionForRaw>()

function storeObservable(value: object) {
  // 存储对象和它内部的key -> reaction的映射
  connectionStore.set(value, new Map() as ReactionForRaw)
}
```
这是一个`Raw -> ReactionForRaw`的`map`。
也就是`原始数据` -> `这个数据收集到的观察函数依赖`

### 3. proxy的handler
**get收集依赖**
这里做的一系列操作，就是把用`原始数据`从`connectionStore`里拿到依赖收集的map，
然后在`reaction`观察函数把对于某个`key`访问的时候，把`reaction`观察函数本身增加到这个`key`的观察函数集合里，对于`observe(() => console.log(counter.num));`这个例子来说，就会收集到 `{ num -> Set<Reaction >}`。
注意这里对于数组来说，也是一样的流程，只是数组访问的key是下标数字而已。 所以会收集类似于` { 1 -> Set<Reaction>} `这样的结构。

**set触发更新**
`set`赋值操作的时候，本质上就是去检查这个`key`收集到了哪些`reaction`观察函数，然后依次触发。（数组也是同理）

### 4. observe 观察函数
`observe`这个api接受一个用户传入的函数，在这个函数内访问响应式数据才会去收集观察函数作为自己的依赖。

简化后的核心逻辑很简单，
把`reaction`推入`reactionStack`后开始执行用户传入的函数，
在函数内访问`响应式proxy`的属性，又会触发`get`的拦截，
这时候`get`去`reactionStack`找当前正在运行的`reaction`，就可以成功的收集到依赖了。

## 3. 边界情况
以上实现只是一个最基础的响应式模型，还没有实现的点有：
* 深层数据的劫持
* 数组和对象新增、删除项的响应

接下来在上面的代码的基础上来实现这两种情况：
### 1. 深层数据的劫持
在刚刚的代码实现中，我们只对Proxy的第一层属性做了拦截，假设有这样的一个场景
```
const counter = reactive({ data: { num: 0 } });
// 会在控制台打印出0
const counterReaction = observe(() => console.log(counter.data.num));
counter.data.num = 1;
```
那么思路其实也有了，就是在`深层访问的时候`，如果访问的数据是个对象，就把这个对象也用`reactive`包装成proxy再返回，这样在进行`counter.data.num = 1;`赋值的时候，其实也是针对一个`响应式proxy`赋值了。
```
/** 劫持get访问 收集依赖 */
function get(target: Raw, key: Key, receiver: ReactiveProxy) {
  const result = Reflect.get(target, key, receiver)
  // 收集依赖
  registerRunningReaction({ target, key, receiver, type: "get" })

 // 如果访问的是对象 则返回这个对象的响应式proxy
  if (isObject(result)) {
   return reactive(result)
}
  return result
}
```

### 2. 数组和对象新增属性的响应
这里需要注意的是，如果我们在观察函数中对数据做了遍历操作，那么后续加入对数据进行了**新增**或**删除**操作，也需要触发它的重新执行，这是很合理的，

这里又有一个知识点，对于数组遍历的操作，都会触发它对`length`的读取，然后把观察函数收集到`length`这个key的依赖中，比如
```
observe(() => proxyArray.forEach(() => {}))
// 会访问proxyArray的length。
```
所以在触发更新的时候，
1. 如果目标是个数组，那就从length的依赖里收集。
2. 如果目标是对象，就从ITERATION_KEY的依赖里收集。（也就是刚刚所说的，对于对象做Object.keys读取时收集的依赖）。

如此一来，就实现了对遍历和新增属性这些边界情况的支持。

### 3. 删除属性的拦截
基本是同一个套路，只是`queueReactionsForOperation`寻找收集观察函数的时候，`type`换成了`delete`，所以会触发内部做了循环操作的观察函数重新执行。



# 16. Vue3新特性！！！

## 1. vue3 为什么要重写
两个主要原因考虑重写vue新版本主要功能：
1. 主流浏览器对新的JavaScript语言特性的普遍支持。
2. 当前Vue代码库随着时间的推移而暴露出来的设计和体系架构问题。
3. 对一些方法及API进行优化

以下是一些原理上的分析：

### 1. 浏览器性能提升
首先，随着ES6的发展已及广泛使用，浏览器对这些新的特性逐渐增加，性能不断优化，这就给vue3优化提供了一个机会，通过重写来优化提升vue的性能。

### 2. 底层实现方法
其次，在框架设计上，**vue2.0 是采用Object.defineProperty来实现双向绑定原理**，这个属性本身就存在一些不足的地方，比如：
1. Object.defineProperty无法监控到数组下标的变化，导致直接通过数组的下标给数组设置值，不能实时响应。 为了解决这个问题，经过vue内部处理后可以使用以下几种方法来监听数组，push()，pop()，shift()，unshift()，splice()，sort()，reverse()；由于只针对了以上八种方法进行了hack处理,所以其他数组的属性也是检测不到的，还是具有一定的局限性。
2. Object.defineProperty只能劫持对象的属性,因此我们需要对每个对象的每个属性进行遍历。Vue 2.x里，是通过 递归 + 遍历 data 对象来实现对数据的监控的，如果属性值也是对象那么需要深度遍历,显然如果能劫持一个完整的对象是才是更好的选择，新增的属性还行通过set方法来添加监听，有一定的局限性。

**vue3主要采用的Proxy特性，相比之下有以下优点**：
1. 可以劫持整个对象，并返回一个新的对象
2. 有13种劫持操作

但同时Proxy作为ES6的新特性，有一定的兼容问题，最主要的是这个属性无法用polyfill来兼容，这个需要在vue3中需要解决的问题。

### 3. 切换到TypeScript　
Vue 2最初是用纯ES（Javascript）写成的。在原型设计阶段之后不久，我们意识到一个类型系统（Type system）对于这样一个规模的项目非常有用。类型检查（Type check）大大减少了在重构过程中引入意外错误的机会，并帮助贡献者更有信心进行大范围的更改。我们采用了Facebook的Flow type checker，因为它可以逐渐添加到现有的纯ES项目中。Flow type checker在一定程度上起到了帮助作用，但我们并没有从中得到我们所希望的那么多好处。特别是，持续的重大改变使得升级成为一种痛苦。相比较TypeScript与Visual Studio Code集成开发工具的深度集成，Flow type checker对集成开发环境的支持也不理想。

我们还注意到，用户越来越多地同时使用Vue和TypeScript。为了支持它们的用例，我们必须独立于使用不同类型系统的源代码来编写和维护TypeScript声明。切换到TypeScript将允许我们自动生成声明文件，从而减轻维护负担。

性能对前端框架至关重要。尽管Vue 2号称具有良好的性能，但重写提供了一个机会，可以通过试验新的渲染策略来更提供更好的性能。

### 4. 克服虚拟DOM的瓶颈　
另一个更好的办法是去掉不必要的虚拟DOM树遍历和属性比较，这在更新期间往往会产生最大的性能开销。为了实现这一点，编译器和运行时需要协同工作：编译器分析模板并生成带有优化提示的代码，而运行时尽可能获取提示并采用快速路径。这里有`三个主要的优化`：

首先，在DOM树级别。我们注意到，在没有动态改变节点结构的模板指令（例如v-if和v-for）的情况下，节点结构保持完全静态。如果我们将一个模板分成由这些结构指令分隔的嵌套“块”，则每个块中的节点结构将再次完全静态。当我们更新块中的节点时，我们不再需要递归遍历DOM树 - 该块内的动态绑定可以在一个平面数组中跟踪。这种优化通过将需要执行的树遍历量减少一个数量级来规避虚拟DOM的大部分开销。

其次，编译器积极地检测模板中的静态节点、子树甚至数据对象，并在生成的代码中将它们提升到渲染函数之外。这样可以避免在每次渲染时重新创建这些对象，从而大大提高内存使用率并减少垃圾回收的频率。

第三，在元素级别。编译器还根据需要执行的更新类型，为每个具有动态绑定的元素生成一个优化标志。例如，具有动态类绑定和许多静态属性的元素将收到一个标志，提示只需要进行类检查。运行时将获取这些提示并采用专用的快速路径。

综合起来，这些技术大大改进了我们的渲染更新基准，Vue 3有时占用的CPU时间不到Vue 2的十分之一。

## 2. Setup
`setup`函数是一个新的组件选项。作为在组件内使用`Composition Api`的入口点。下面我们分为4个方面来讲解它
* 调用时机
* this指向
* 函数参数
* 返回值

### 1. 调用时机
创建组件实例，然后初始化`props`，紧接着就调用`setup`函数。 从生命周期的角度来看，它会在`beforeCreate`之前执行。也就是创建组件先执行`setup`、`beforeCreate`、`create`。
```
<template>
  <div>蛙人</div>
</template>
<script>
export default {
  name: 'App',
  setup() {
    console.log("hey 蛙人")
  }
}
</script>
```

### 2. this指向
由于不能在`setup`函数中使用`data`、`methods`，为了避免使用Vue出错，所以把setup函数中`this`修改为了`undefined`。
```
<template>
  <div>蛙人</div>
</template>
<script>
export default {
  name: 'App',
  setup() {
    console.log(this); // undefined
  }
}
</script>
```

### 3. 函数参数
* props
* context

`props`
接收组件传递过来的所有数据，并且都是响应式的。
```
<template>
  <div>蛙人</div>
</template>
<script>
export default {
  name: 'App',
  props: {
      title: {
          type: String
      }
  },
  setup(props) {
    console.log(props.title)
  }
}
</script>
```
>注意一点，props数据不能使用解构，否则响应式数据失效

`context`
该参数提供一个上下文对象，从原来的2.x中选择性的暴露了一些属性。
* attrs
* slots
* emit
```
<template>
  <div>蛙人</div>
</template>
<script>
export default {
  name: 'App',
  props: {
      title: {
          type: String
      }
  },
  setup(props, { attrs, slots, emit } ) {
    console.log(attrs) 
  }
}
</script>
```
上面，`attrs`和`slots`都是内部组件实例上对应项的代理，可以确保在更新后仍然还是最新的值。所以这里可以使用解构语法。

### 4. 返回值
可以将`setup`函数返回值渲染到页面上。但前提是，`setup`返回值必须是一个对象，否则返回其它值则渲染无效。
```
<template>
  <div>蛙人</div>
</template>
<script>
export default {
  name: 'App',
  props: {
      title: {
          type: String
      }
  },
  setup() {
    const name = "蛙人"
    return {
       name
    }
  }
}
</script>
```

## 3. Reactive
该方法接收一个参数{}创建一个响应式对象。跟`Vue2.x`的`Vue.observable`一样。如果该参数不是对象的话，也可以渲染到模板上，但不是响应式的数据。
```
<template>
  <div class="test">
    姓名:  {{ name.value }}
    {{ test() }}
  </div>
</template>

<script>
import { reactive } from "vue"
export default {
 name: 'test',
  data() {
    return {

    }
  },
  setup() {
    let name = reactive({value: "蛙人"})
    function test() {
        name.value = "abc"; // 该方法测试响应式数据，可以看到执行完该方法视图也会发生改变
    }
    return {
        name,
        test
    }
  }
}
</script>
```


