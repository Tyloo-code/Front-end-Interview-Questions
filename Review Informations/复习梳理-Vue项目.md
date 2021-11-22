---
title: '【面】前端知识点梳理（Vue项目）'
date: 2021-03-17 12:39:50
tags: [Interview]
published: true
hideInList: false
feature: 
isTop: false
---
# 1. Vue 中如何实现监测数组变化
Vue 框架是通过**遍历数组** 和**递归遍历**对象，从⽽达到利⽤Object.defineProperty() 也能对对象和数组（部分⽅法的操作）进⾏监听。

Vue 将被侦听的数组的变更⽅法进⾏了包裹，所以它们也将会触发视图更新。这些被包裹过的⽅法包
括：
* push()
* pop()
* shift()
* unshift()
* splice()
* sort()
* reverse()

**总结**
1. 使⽤函数劫持的⽅式，重写了数组的⽅法
2. Vue 将 data 中的数组，进⾏了原型链重写。指向了⾃⼰定义的数组原型⽅法，这样当调⽤数组
API 的时候，可以通知依赖更新。如果数组中包含着引⽤类型。会对数组中的引⽤类型再次进⾏监
控拦截处理

# 2. Vue 中的 key 有什么作用
所以 Vue 中 key 的作⽤是：
* key 是为 Vue 中 vnode 的唯⼀标记，通过这个 key，我们的 diff 操作可以更准确、更快速

`更准确`：因为带 key 就不是就地复⽤了，在 sameNode 函数` a.key === b.key` 对⽐中可以避免就地复⽤的情况。所以会更加准确。
`更快速`：利⽤ key 的唯⼀性⽣成 map 对象来获取对应节点，⽐遍历⽅式更快

# 3. 你对 Vue 项⽬做过哪些优化
## 1. 代码层面的优化
1. v-if 和 v-show 区分使用场景
2. computed 和 watch 区分使用场景
3. v-for 遍历必须为 item 添加 key，且避免同时使用 v-if
4. 图片资源懒加载
5. 路由懒加载
6. 服务端渲染 SSR or 预渲染

## 2. Webpack 层⾯的优化
1. Webpack 对图片进行压缩（image-webpack-loader）
2. 减少 ES6 转为 ES5 的冗余代码（babel-plugin-transform-runtime）
3. 提取公共代码（CommonsChunkPlugin）
4. 提取组件的 CSS

## 3. 基础的 Web 技术优化
1. 开启 gzip 压缩
2. 浏览器缓存（静态资源进行缓存）
3. CDN 的使用


# 4.  vue3.0特性你有什么了解的吗
Vue 3.0 正⾛在发布的路上，Vue 3.0 的⽬标是让 Vue 核⼼变得更⼩、更快、更强⼤，因此 Vue 3.0 增加以下这些新特性：

## 1. 监测机制的改变
3.0 将带来基于代理 Proxy 的 observer 实现，提供全语⾔覆盖的反应性跟踪。这消除了 Vue 2 当中基于Object.defineProperty 的实现所存在的很多限制：
* 只能监测属性，不能监测对象
* 检测属性的添加和删除；
* 检测数组索引和⻓度的变更；
* ⽀持 Map、Set、WeakMap 和 WeakSet。

**新的 observer 还提供了以下特性：**
* ⽤于创建 observable 的公开 API。这为中⼩规模场景提供了简单轻量级的跨组件状态管理解决⽅
案。
* 默认采⽤惰性观察。在 2.x 中，不管反应式数据有多⼤，都会在启动时被观察到。如果你的数据集
很⼤，这可能会在应⽤启动时带来明显的开销。在 3.x 中，只观察⽤于渲染应⽤程序最初可⻅部分
的数据。
* 更精确的变更通知。在 2.x 中，通过 Vue.set 强制添加新属性将导致依赖于该对象的 watcher 收到变更通知。在 3.x 中，只有依赖于特定属性的 watcher 才会收到通知。
* 不可变的 observable：我们可以创建值的“不可变”版本（即使是嵌套属性），除⾮系统在内部暂时
将其“解禁”。这个机制可⽤于冻结 prop 传递或 Vuex 状态树以外的变化。
* 更好的调试功能：我们可以使⽤新的 renderTracked 和 renderTriggered 钩⼦精确地跟踪组件在
什么时候以及为什么重新渲染。

## 2. 模板
模板⽅⾯没有⼤的变更，只改了作⽤域插槽，2.x 的机制导致作⽤域插槽变了，⽗组件会重新渲染，⽽
3.0 把作⽤域插槽改成了函数的⽅式，这样只会影响⼦组件的重新渲染，提升了渲染的性能。

同时，对于 render 函数的⽅⾯，vue3.0 也会进⾏⼀系列更改来⽅便习惯直接使⽤ api 来⽣成 vdom 。

## 3. 对象式的组件声明⽅式
vue2.x 中的组件是通过声明的⽅式传⼊⼀系列 option，和 TypeScript 的结合需要通过⼀些装饰器的⽅式来做，虽然能实现功能，但是⽐较麻烦。3.0 修改了组件的声明⽅式，改成了类式的写法，这样使得和
TypeScript 的结合变得很容易。

此外，vue 的源码也改⽤了 TypeScript 来写。其实当代码的功能复杂之后，必须有⼀个静态类型系统来
做⼀些辅助管理。现在 vue3.0 也全⾯改⽤ TypeScript 来重写了，更是使得对外暴露的 api 更容易结合TypeScript。静态类型系统对于复杂代码的维护确实很有必要。

## 4. 其它⽅⾯的更改
vue3.0 的改变是全⾯的，上⾯只涉及到主要的 3 个⽅⾯，还有⼀些其他的更改：
* ⽀持⾃定义渲染器，从⽽使得 weex 可以通过⾃定义渲染器的⽅式来扩展，⽽不是直接 fork 源码来
改的⽅式。
* ⽀持 Fragment（多个根节点）和 Protal（在 dom 其他部分渲染组建内容）组件，针对⼀些特殊
的场景做了处理。
* 基于 treeshaking 优化，提供了更多的内置功能。



# 5. 滚动到底部加载更多

需要三个高度：`scrollHeight`（文档内容实际高度，包括超出视窗的溢出部分）、`scrollTop`（滚动条滚动距离）、`clientHeight`（窗口可视范围高度）。当 `clientHeight + scrollTop >= scrollHeight` 时，表示已经抵达内容的底部了，可以加载更多内容。

* scrollHeight：通过 document.documentElement.scrollHeight 、document.body.scrollHeight 可以获取;
* scrollTop：通过window.pageYOffset 、 document.documentElement.scrollTop 、 document.body.scrollTop 可以获取
* clientHeight：通过window.innerHeight 、 document.documentElement.clientHeight 、 document.body.clientHeight 可以获取;

```
   window.onscroll= function(){
        //文档内容实际高度（包括超出视窗的溢出部分）
        var scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        //滚动条滚动距离
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        //窗口可视范围高度
        var clientHeight = window.innerHeight || Math.min(document.documentElement.clientHeight,document.body.clientHeight);
        
        if(clientHeight + scrollTop >= scrollHeight){
            console.log("===加载更多内容……===");
        }
   }
```

# 6. vue无限滚动方案
## 1. 实现无限滚动逻辑
在组件的方法中，您需要创建一个名为`scroll()`的新函数，并将其加载到`mounted()`生命周期方法中。
这个`scroll()`方法应该有一个简单的条件来计算页面的底部，判断它为true或false，并执行一些操作。我们将利用文档对象的`documentElement.scrollTop`，`documentElement.offsetHeight`属性和窗口的`innerHeight`属性来确定是否滚动到底部：
```
window.onscroll = () => {
  let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

  if (bottomOfWindow) {
    // Do something, anything!
  }
};
```
## 2. 性能优化方案
对此前端业界有一个通用解决方案叫virtualize，虚拟化，就是把整个列表虚拟化，无论你列表元素有多少，我只虚拟化一定数目的元素(大于一屏幕)，然后在滚动过程中动态的更新这些元素，这样的话我们页面重新渲染时候进行的style和layout过程的对象元素就是固定的了，时间不会变长。具体的实现方法参考下图。
![](https://ttarea.com/post-images/1615968713779.jpg)
1. 当列表滚动到item8之前，不做任何操作。

2. 滚动到8的时候，此时可见区域的元素是4到8，这时更新DOM的8个元素为4到11，也就是说1-8批量更新成了4-11。但是用户可见区域看到的仍然是4到8，只是bench缓冲区的元素添加了9到11三个元素。

3. 元素完成了更新，但是滚动条的位置也要完成更新，因为实际上此时可见区域的item4并不是之前列表DOM中的第4个元素了，而是变成了第1个元素，所以滚动条此时位置变回到了列表的起点，这里需要给列表一个padding-top值，设成3倍元素高度size，从而维持滚动条的位置。




# 7. 移动端返回顶部
页面滚动到一定高度出现返回顶部按钮，点击返回顶部，按钮消失
```
 mounted() {
	window.addEventListener('scroll',function(){
	 var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	 if(scrollTop>800){
		 document.getElementById("default_drag_return").style.visibility="visible";
		 
	 }
	 if(scrollTop<800){
		 document.getElementById("default_drag_return").style.visibility="hidden";
	 }
	 });
  },

  methods: {
	  topreturn:function(){
		  document.documentElement.scrollTop = document.body.scrollTop =0;
		  document.getElementById("default_drag_return").style.visibility="hidden";
		  
	  }
  }
```

# 8. Vue - JWT后台登录权限
在前后端完全分离的情况下，Vue项目中实现token验证大致思路如下：

1、第一次登录的时候，前端调后端的登陆接口，发送用户名和密码
2、后端收到请求，验证用户名和密码，验证成功，就给前端返回一个token
3、前端拿到token，将token存储到localStorage和vuex中，并跳转路由页面
4、前端每次跳转路由，就判断 localStroage 中有无 token ，没有就跳转到登录页面，有则跳转到对应路由页面
5、每次调后端接口，都要在请求头中加token
6、后端判断请求头中有无token，有token，就拿到token并验证token，验证成功就返回数据，验证失败（例如：token过期）就返回401，请求头中没有token也返回401
7、如果前端拿到状态码为401，就清除token信息并跳转到登录页面
8、创建vue实例的时候将vue-router挂载，但这个时候vue-router挂载一些登录或者不用权限的公用的页面。
9、当用户登录后，获取用role，将role和路由表每个页面的需要的权限作比较，生成最终用户可访问的路由表。
10、调用router.addRoutes(store.getters.addRouters)添加用户可访问的路由。
11、使用vuex管理路由表，根据vuex中可访问的路由渲染侧边栏组件。
![](https://ttarea.com/post-images/1619086516830.png)
![](https://ttarea.com/post-images/1618468865167.png)

## 0. 用户权限信息
用户登录成功之后，我们会在全局钩子router.beforeEach中`拦截路由`，判断是否已获得token，在获得token之后我们就要去获取用户的基本信息了

`主体思路`：前端会有一份路由表，它表示了每一个路由可访问的权限。当用户登录之后，通过token获取用户的role，动态根据用户的role算出其对应有权限的路由，再通过router.addRoutes动态挂载路由。但这些控制都只是页面级的，说白了前端再怎么做权限控制都不是绝对安全的，后端的权限验证是逃不掉的。

前端来控制页面级的权限，不同权限的用户显示不同的侧边栏和限制其所能进入的页面(也做了少许按钮级别的权限控制)，后端则会验证每一个涉及请求的操作，验证其是否有该操作的权限，每一个后台的请求不管是 get 还是 post 都会让前端在请求header里面携带用户的token，后端会根据该token来验证用户是否有权限执行该操作。若没有权限则抛出一个对应的状态码，前端检测到该状态码，做出相对应的操作。

## 1. 令牌组成
>header.payload.signature

1. 标头(Header)
2. 有效载荷(Payload)
3. 签名(Signature)

因此，JWT通常如下所示：xxxx.yyyy.zzzz

## 2. Header
标头通常由两部分组成：令牌的类型(JWT)和所使用的签名算法，例如HMAC SHA256或RSA。它会使用 Base64 编码组成 JWT 结构的第一部分。

注意：Base64是一种编码，也就是说，它是可以被翻译回原来的样子来的。它并不是一种加密过程。
```
{
    "alg":"HS256",
    "typ":"JWT"
}
```
## 3. Payload
令牌的第二部分是有效负载，其中包含声明。声明是有关实体（通常是用户）和其他数据的声明。同样的，它会使用 Base64编码组成JWT结构的第二部分
```
{
    "sub":"123456789",
    "name":"John Doe",
    "admin":true
}
```

## 4. Signature
前面两部分都是使用Base64进行编码的，即前端可以解开知道里面的信息。Signature 需要使用编码后的 header 和 payload 以及我们提供的一个密钥，然后使用 header 中指定的签名算法(HS256)进行签名。签名的作用是保证JWT没有被篡改过
如：
HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload) , secret);

## 5. 签名目的
最后一步签名的过程，实际上是对头部以及负载内容进行签名，防止内容被窜改。如果有人对头部以及负载的内容解码之后进行修改，再进行编码，最后加上之前的签名组合形成新的JWT的话，那么服务器端会判断出新的头部和负载形成的签名和JWT附带上的签名是不一样的。如果要对新的头部和负载进行签名，在不知道服务器加密时用的密钥的话，得出来的签名也是不一样的。

## 6. 信息安全问题
在这里大家一定会问一个问题：Base64是一种编码，是可逆的，那么我的信息不就被暴露了吗?

是的。所以，在JWT中，不应该在负载里面加入任何敏感的数据。在上面的例子中，我们传输的是用户的User ID。这个值实际上不是什么敏感内容，一般情况下被知道也是安全的。但是像密码这样的内容就不能被放在JWT中了。如果将用户的密码放在了JWT中，那么怀有恶意的第三方通过Base64解码就能很快地知道你的密码了。因此JWT适合用于向Web应用传递一些非敏感信息。JWT还经常用于设计用户认证和授权系统，甚至实现Web应用的单点登录。

## 7. 认证流程
1. 首先，前端通过Web表单将自己的用户名和密码发送到后端的接口。这一过程一般是一个HTTP POST请求。建议的方式是通过SSL加密的传输（https协议），从而避免敏感信息被嗅探。

2. 后端核对用户名和密码成功后，将用户的id等其他信息作为JWT Payload(负载)，将其与头部分别进行Base64编码拼接后签名，形成一个JWT(Token)。形成的JWT就是一个形同111.zzz.xxx的字符串。token head.payload.signature

3. 后端将JWT字符串作为登录成功的返回结果返回给前端。前端可以将返回的结果保存在localStorage或sessionStorage上，退出登录时前端删除保存的JWT即可。

4. 前端在每次请求时将JWT放入HTTP Header中的Authorization位。(解决XSS和XSRF问题）

5. 后端检查是否存在，如存在验证JWT的有效性。例如，检查签名是否正确；检查Token是否过期；检查Token的接收方是否是自己(可选)。

6. 验证通过后后端使用JWT中包含的用户信息进行其他逻辑操作，返回相应结果。

## 8. JWT优势
* 简洁(Compact)：可以通过URL，POST参数或者在HTTP header发送，因为数据量小，传输速度也很快
* 自包含(Self-contained)：负载中包含了所有用户所需要的信息，避免了多次查询数据库
* 因为Token是以JSON加密的形式保存在客户端的，所以JWT是跨语言的，原则上任何web形式都支持。
* 不需要在服务端保存会话信息，特别适用于分布式微服务。
![](https://ttarea.com/post-images/1619086600490.png)







# 9. Vue实现带进度条的文件拖动上传
## 1. 基本界面
```
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.bootcss.com/vue/2.5.13/vue.min.js"></script>
    <style>
        .dropbox {
            border: .25rem dashed #007bff;
            min-height: 5rem;
        }
    </style>
    <title>Document</title>
</head>
<body>
<div id="app" class="m-5">
    <div class="dropbox p-3">
        <h2 class="text-center">把要上传的文件拖动到这里</h2>
    </div>
</div>
<script>
    new Vue({
        el: '#app',
        data: {},
        methods: {},
        mounted: function () {}
    });
</script>
</body>
</html>
```
![](https://ttarea.com/post-images/1615980095840.png)

## 2. 检测拖动事件
首先让页面支持文件拖拽，在 Vue 的` mounted()` 函数中添加代码：
```
mounted: function () {
    var dropbox = document.querySelector('.dropbox');
    dropbox.addEventListener('dragenter', this.onDrag, false);
    dropbox.addEventListener('dragover', this.onDrag, false);
    dropbox.addEventListener('drop', this.onDrop, false);
}
```
当把文件拖动到浏览器的拖动区域时，会触发三种事件：

1. 文件第一次进入拖动区时，触发 dragenter 事件
2. 文件在拖动区来回拖拽时，不断触发 dragover 事件
3. 文件已经在拖动区，并松开鼠标时，触发 drop 事件

实现拖动上传，我们只需要关心 drop 事件。不过另外两个事件也需要监听，目的是阻止浏览器默认行为。如果不阻止，那么把文件拖到浏览器时，浏览器就会自动下载这个文件（默认行为），drop 事件触发不出来。

事件的监听函数添加在 Vue 的 `methods` 对象中：
```
methods: {
    uploadFile: function (file) {
        console.log(file);
    },
    onDrag: function (e) {
        e.stopPropagation();
        e.preventDefault();
    },
    onDrop: function (e) {
        e.stopPropagation();
        e.preventDefault();
        var dt = e.dataTransfer;
        for (var i = 0; i !== dt.files.length; i++) {
            this.uploadFile(dt.files[i]);
        }
    }
},
```
`onDrop()` 函数中，通过` e.dataTransfer.files` 可以拿到用户拖动到浏览器的文件的基本信息，`uploadFile()` 函数现在只这些信息打印了出来，可以了解到，拖动到浏览器的每个文件都是一个 File 对象：
![](https://ttarea.com/post-images/1615980412873.png)

## 3. 处理拖动事件
现在，我们要给 `uploadFile()` 函数增加功能，实现拖动文件时，拖动区出现文件名和一个上传进度条。

首先在 Vue 的 data 对象中定义 **files** 属性，用来保存所有拖动到浏览器中文件的名称。然后在`uploadFile()` 函数每当被调用时，把文件名和上传进度保存到 files 中：
```
data: {
    files: []
},
methods: {
    uploadFile: function (file) {
        var item = {
            name: file.name,
            uploadPercentage: 67
        };
        this.files.push(item);
    },
}
```
上传进度的功能在后面再介绍，先写一个固定值。

相应地，在HTML代码中，用 `v-for` 关键字显示 `files` 的每一项：
```
<div class="dropbox p-3">
    <h2 class="text-center">把要上传的文件拖动到这里</h2>
    <div class="border m-2 d-inline-block p-4" style="width:15rem" v-for="file in files">
        <h5 class="mt-0">{{ file.name }}</h5>
        <div class="progress">
            <div class="progress-bar progress-bar-striped"
                    :style="{ width: file.uploadPercentage+'%' }"></div>
        </div>
    </div>
</div>
```
而且，“把要上传的文件拖动到这里” 的提示只在拖动区没有文件的时候才显示：
```
<h2 v-if="files.length===0" class="text-center">把要上传的文件拖动到这里</h2>
```
这样，拖动效果就有了：
![](https://ttarea.com/post-images/1615980581346.png)

## 4. 文件上传
接下来实现真正的文件上传，继续往 `uploadFile()` 函数添加代码：
```
uploadFile: function (file) {
    var item = {
        name: file.name,
        uploadPercentage: 67
    };
    this.files.push(item);
    var fd = new FormData();
    fd.append('myFile', file);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'upload.php', true);
    xhr.send(fd);
},
```
这里用到了 FormData，把要上传的文件附在了 FormData 上，并通过AJAX方式发送给PHP端。

## 5. 进度条的展示
基本的上传功能完成了，最后我们来完成进度条。每当AJAX请求发送了一段时间的数据时，都会生成一个 progress 事件，我们可以监听 progress 事件来知道当前的上传进度：
```
uploadFile: function (file) {
    ...
    xhr.upload.addEventListener('progress', function (e) {
        item.uploadPercentage = Math.round((e.loaded * 100) / e.total);
    }, false);
    xhr.send(fd);
},
```
`e.loaded` 代表当前AJAX发送了多少字节，e.total 代表AJAX总共要发送多少字节。通过这两个属性可以计算上传进度的百分比。

这样，一个带进度条的文件拖动上传功能就完成了。

# 10. FormData传递参数
**FormData的主要用途有两个：**
1. 将form表单元素的name与value进行组合，实现表单数据的序列化，从而减少表单元素的拼接，提高工作效率。
2. 异步上传文件

## 1. 创建formData对象
### 1. 创建一个空对象：
```
//通过FormData构造函数创建一个空对象
var formdata=new FormData();
//可以通过append()方法来追加数据
formdata.append("name","laotie");
//通过get方法对值进行读取
console.log(formdata.get("name"));//laotie
//通过set方法对值进行设置
formdata.set("name","laoliu");
console.log(formdata.get("name"));//laoliu
```

### 2. 通过表单对formData进行初始化
**创建表单：**
```
<form id="advForm">
    <p>广告名称：<input type="text" name="advName"  value="xixi"></p>
    <p>广告类别：<select name="advType">
        <option value="1">轮播图</option>
        <option value="2">轮播图底部广告</option>
        <option value="3">热门回收广告</option>
        <option value="4">优品精选广告</option>
    </select></p>
    <p><input type="button" id="btn" value="添加"></p>
</form>
```
**通过表单元素作为参数，实现对formData的初始化：**
```
//获得表单按钮元素
var btn=document.querySelector("#btn");
//为按钮添加点击事件
btn.onclick=function(){
    //根据ID获得页面当中的form表单元素
    var form=document.querySelector("#advForm");
    //将获得的表单元素作为参数，对formData进行初始化
    var formdata=new FormData(form);
    //通过get方法获得name为advName元素的value值
    console.log(formdata.get("advName"));//xixi
    //通过get方法获得name为advType元素的value值
    console.log(formdata.get("advType"));//1 
}
```

## 2. 操作方法
### 1. 通过get(key)与getAll(key)来获取相对应的值
```
// 获取key为age的第一个值
formdata.get("age"); 
 // 获取key为age的所有值，返回值为数组类型
formdata.getAll("age");
```
### 2. 通过append(key,value)在数据末尾追加数据
```
//通过FormData构造函数创建一个空对象
var formdata=new FormData();
//通过append()方法在末尾追加key为name值为laoliu的数据
formdata.append("name","laoliu");
//通过append()方法在末尾追加key为name值为laoli的数据
formdata.append("name","laoli");
//通过append()方法在末尾追加key为name值为laotie的数据
formdata.append("name","laotie");
//通过get方法读取key为name的第一个值
console.log(formdata.get("name"));//laoliu
//通过getAll方法读取key为name的所有值
console.log(formdata.getAll("name"));//["laoliu", "laoli", "laotie"]
```
### 3. 通过set(key, value)来设置修改数据
key的值不存在，会添加一条数据
```
//通过FormData构造函数创建一个空对象
var formdata=new FormData();
//如果key的值不存在会为数据添加一个key为name值为laoliu的数据
formdata.set("name","laoli");
//通过get方法读取key为name的第一个值
console.log(formdata.get("name"));//laoli
```
key的值存在，会修改对应的value值
```
//通过FormData构造函数创建一个空对象
var formdata=new FormData();
//通过append()方法在末尾追加key为name值为laoliu的数据
formdata.append("name","laoliu");
//通过append()方法在末尾追加key为name值为laoliu2的数据
formdata.append("name","laoliu2");
//通过get方法读取key为name的第一个值
console.log(formdata.get("name"));//laoliu
//通过getAll方法读取key为name的所有值
console.log(formdata.getAll("name"));//["laoliu", "laoliu2"]

//将存在的key为name的值修改为laoli
formdata.set("name","laoli");
//通过get方法读取key为name的第一个值
console.log(formdata.get("name"));//laoli
//通过getAll方法读取key为name的所有值
console.log(formdata.getAll("name"));//["laoli"]
```
### 4. 通过has(key)来判断是否存在对应的key值
```
//通过FormData构造函数创建一个空对象
var formdata=new FormData();
//通过append()方法在末尾追加key为name值为laoliu的数据
formdata.append("name","laoliu");
//判断是否包含key为name的数据
console.log(formdata.has("name"));//true
//判断是否包含key为age的数据
console.log(formdata.has("age"));//false
```
### 5. 通过delete(key)可以删除数据
```
//通过FormData构造函数创建一个空对象
var formdata=new FormData();
//通过append()方法在末尾追加key为name值为laoliu的数据
formdata.append("name","laoliu");
console.log(formdata.get("name"));//laoliu
//删除key为name的值
formdata.delete("name");
console.log(formdata.get("name"));//null
```

## 3. 通过XMLHttpRequest发送数据
**创建表单：**
```
<form id="advForm">
    <p>广告名称：<input type="text" name="advName" value="xixi"></p>
    <p>广告类别：<select name="advType">
        <option value="1">轮播图</option>
        <option value="2">轮播图底部广告</option>
        <option value="3">热门回收广告</option>
        <option value="4">优品精选广告</option>
    </select></p>
    <p>广告图片：<input type="file" name="advPic"></p>
    <p>广告地址：<input type="text" name="advUrl"></p>
    <p>广告排序：<input type="text" name="orderBy"></p>
    <p><input type="button" id="btn" value="添加"></p>
</form>
```
**发送数据：**
```
var btn=document.querySelector("#btn");
btn.onclick=function(){
    var formdata=new FormData(document.getElementById("advForm"));
    var xhr=new XMLHttpRequest();
    xhr.open("post","http://127.0.0.1/adv");
    xhr.send(formdata);
    xhr.onload=function(){
        if(xhr.status==200){
            //...
        }
    }
}
```



# 11. Vue防止用户手动修改URL访问非权限页面
今天在写filter的时候，要做一个防止用户手动修改URL访问非权限页面的验证。在网上搜索了下，

发现可以通过：`request.getHeader("referer");`  
// js的话：javascript:document.referrer来防止，

如果返回值为null的话，说明是手动修改url访问的，然后进而通过后台，判断是否该登陆用户具

有访问权限，如果有，放行，否则，跳转到错误页面。

原理：`referer只有从别的页面点击连接来到这页的才会有内容，否则为null。`

**request.getHeader("referer")的作用：**
①防止盗连，比如我是个下载软件的网站，在下载页面我先用referer来判断上一页面是不是自己网站，如果不是，说明有人盗连了你的下载地址。

②电子商务网站的安全，我在提交信用卡等重要信息的页面用referer来判断上一页是不是自己的网站，如果不是，可能是黑客用自己写的一个表单，来提交，为了能跳过你上一页里的javascript的验证等目的。
```
public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse resp = (HttpServletResponse) response;
		String conString = "";
		conString = req.getHeader("REFERER");//获取父url--如果不是直接输入的话就是先前的访问过来的页面，要是用户输入了，这个父url是不存在的
		if("".equals(conString) || null==conString){ //判断如果上一个目录为空的话，说明是用户直接输入url访问的
			String servletPath = req.getServletPath();//当前请求url，去掉几个可以直接访问的页面
			if(servletPath.contains("index.jsp") || servletPath.contains("admin/login.jsp")){ //跳过index.jsp和登陆Login.jsp
				chain.doFilter(request, response);
			} else {
				resp.sendRedirect("/ejuornal/index.jsp");//跳回首页
			}
		} else {
			chain.doFilter(request, response);
		}
	}
```


# 12. 手动一个v-model组件
## 1. 知识储备
在开始之前我们先需要知道一些知识，v-model是一个语法糖，如下：
`<input type="text" v-model="name">`
实则是等于下面的：
`<input type="text" :value="name" @input="name=$event.target.value">`
也就是说，**v-model就是绑定了一个名为value的props和一个事件input**
```
注意：所以在子组件中可以通过props中定义value接受值，然后通过$emit触发input事件传新值并修改。
```
![](https://ttarea.com/post-images/1616570989198.png)

## 1. 最简单的实现方法
综合上述特性，我们可以认为我们要实现自定义组件的双向绑定，其实需要的功能其实是：
* 组件内部可以接收并同步父组件传入的value值
* 组件内部可以在该双向绑定值修改时emit一个input事件

我们知道，直接修改父组件传入的值（prop）是不被允许的，
而且需要在双向绑定值于组件内部修改时拦截其操作，改为向父组件emit事件

首先是父组件的代码：
```
<template>
  <div class="">
      <p>{{name}}</p>
      <son v-model="name"></son>
      <!-- 等同于下面 -->
      <!-- <son type="text" :value="name" @input="name=子组件传回来的值"> -->
</div>
</template>

<script type="text/javascript">
import Son from './son'
export default {
  name: "",
  data() {
    return {
        name:'ydw',
    }
  },
  components: {
      Son
  }
}
</script>
```
然后是子组件的代码：
```
<template>
  <div class>
      <input type="text" :value="value" @input="$emit('input',$event.target.value)">
  </div>
</template>

<script type="text/javascript">
export default {
  name: "",
  props:{
      value:{
          type: String,
          defalut () 
              return ''
          }
      }
  },
  data() {
    return {

    }
  },
  components: {
  }
}
</script>
```
父组件中我加了一个注释的代码行，其实是帮助我自己理解的，不知道有没有小伙伴跟我一样，第一次看的时候压根不知道它在做什么的？哭唧唧。

## 3. 使用最新的语法，model属性。
![](https://ttarea.com/post-images/1616555019332.png)
也就是说这个属性是为了回避props定义的value这个名字的。

下面看看它的用法，我们先看子组件怎么修改：
```
<template>
  <div class>
    <input type="text" :value="val" @input="$emit('change',$event.target.value)" />
  </div>
</template>

<script type="text/javascript">                                                 export default {         
  name: "",
  model:{
    prop:'val',
    event:'change'
  },
  props: {
    val: {
      type: String,
      defalut() {
        return "";
      }
    }
  },
  data() {                                                       
    return {                                                                  
    };
  }
};
</script>
```                 
model属性中prop是重新命名传值的名字，而event则是重新命名事件的名字，但是同样的，props中的传值名字必须与model属性中的prop的名字一样。其实只要对比一下第一种方法就知道，vue多出一个model属性是为了value这个名字可以使用。

## 4. Vue2.0封装elementUI
首先讲我简单的封装代码上来：
```
<template>
  <div class="form-container">
    <el-form
      :model="filterObject"
      label-position="left"
      :label-width="labelWidth"
    >
      <el-row :gutter="10">
        <el-col
          v-for="item in formData"
          :key="item.prop"
          :span="item.span || 8"
        >
          <el-form-item :label="item.label">
            <el-input
              v-if="item.type === 'text'"
              v-model="filterObject[item.prop]"
              clearable
              :disabled="item.disabled || false"
              :placeholder="item.placeholder"
            ></el-input>

            <el-select
              v-if="item.type === 'select'"
              v-model="filterObject[item.prop]"
              clearable
              :placeholder="item.placeholder"
              @change="handleChange"
            >
              <el-option
                v-for="sub in item.arr"
                :key="sub.value"
                :label="sub.label"
                :value="sub.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'filterObject',
    event: 'change',
  },
  props: {
    filterObject: {
      type: Object,
      default() {
        return {}
      },
    },
    labelWidth: {
      type: String,
      default: '80px',
    },
    formData: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {}
  },
  methods: {
    handleChange() {
      console.log(this.filterObject)
    },
  },
}
</script>
```
其中的**filterObject**就是今天的主角了，我的想法是在父组件直接传递一个对象进来，在进行相关操作的时候，父组件直接可以在外面用到这些值，而不是通过子组件暴露方法获取这些值。(ps:在封装search组件的时候可以这么做，向外暴露search，reset方法可以暴露子组件里面的值。**其实封装search跟这个form有点相似，都是用elementUI的form表单来封装的。**)

接下来是父组件的代码：
```
<template>
  <div class="home">
    <HHform
      :formData="searchOptions"
      labelWidth="120px"
      v-model="filterObject"
    ></HHform>
  </div>
</template>

<script>
import HHform from '@/components/HH-form'
export default {
  name: 'Home',
  components: {
    HHform,
  },
  data() {
    return {
      searchOptions: [
        {
          type: 'select',
          prop: 'status',
          label: '状态：',
          span: 5,
          placeholder: '请选择',
          arr: [
            {
              value: '',
              label: '全部招生顾问',
            },
            {
              value: 1,
              label: '正常招顾',
            },
            {
              value: 2,
              label: '冻结招顾',
            },
          ],
        },
        {
          type: 'select',
          prop: 'region',
          label: '地区：',
          span: 5,
          placeholder: '请选择',
          arr: [],
        },
        {
          type: 'text',
          prop: 'userName',
          span: 8,
          label: '招生顾问名称：',
          placeholder: '选择或输入搜索',
        },
        {
          type: 'text',
          prop: 'phone',
          label: '手机号：',
          span: 5,
          placeholder: '选择或输入搜索',
        },
      ],
      filterObject: {},
    }
  },
  methods: {},
  },
}
</script>
```
父组件的代码比较简单，直接通过v-model传值过去就行了。下面是演示效果。
![](https://ttarea.com/post-images/1616568833036.gif)

目前封装form组件的时候是使用这种方法，父组件直接传值的话，不需要子组件提供方法返回值。在封装search组件的时候则是使用子组件暴露方法的方式拿到值的，为什么这么做呢？因为在进行搜索的时候一定会暴露search跟reset方法，这时候带出去就行了。

# 13. 大数据量表格加载慢的问题解决方案
由于目前表格实现技术是通过vue+elementUI实现的，所以以上解决方法都是通过vue+js+elementUI实现的，不过思路适用于其他技术。

总共有以下几种方案：
* 一个页面加载所有数据
* 假分页加载数据（滚动加载数据）
* 无限分页加载数据
* 真分页加载数据（滚动加载数据）
* 模拟滚动实现加载数据

## 1. 一个页面加载所有数据
这个其实就是elementUI自带的table表格功能，一个页面加载所有数据。

这种方案优点就是非常简单啊，直接调用接口获取到数据，然后传入所有数据，最后一行一行全部渲染出来。

但是缺点同样明显，首先要通过后台获取数据，如果数据非常多，那么数据越多接口返回速度就越慢，你就只能看着加载圈圈一直在转啊转。数据返回后还得渲染到页面上，数据量小你可能感觉不到什么，但是数据一旦一多比如一次渲染100条、1000条以上的数据，那么页面就会卡住直到数据渲染到页面上。所以这时就要有新的解决方法了。

## 2. 假分页显示数据（滚动加载数据）
因为后台接口返回数据并不是很慢，但是表格渲染造成页面非常卡。所以这时就需要想一种方法让数据一次不全部渲染完，而是分批渲染。一次只渲染一部分数据，前一次数据渲染完后再渲染新的数据。

这里有两种方案实现。一种就是利用elementUI中的分页器和表格实现，每次只加载当前页面的数据。比如有1000条数据，每页显示100条数据，就会分为10页，第一页显示0-100区间的数据，第二页显示100-200区间的数据，以此类推。通过点击不同页实现数据的截取。另外一种就是不需要分页器，还是在一页显示，只不过首次只加载一部分数据，当鼠标滚动到列表底部的时候再加载其他部分数据，实现思路和假分页其实一样，只不过展示不同，这种情况适用于手机上列表加载上。

这两种方案优点是优化了假数据的渲染速度。

缺点还是没解决后台接口返回数据慢的问题。而且就算分页，一页展示的数据量还是很多、表格复杂的时候还是卡顿。你可能会说一页展示尽可能少的数据，但是如果实际情况是最少展示100条数据，这种方法就不行。

## 3. 无限分页加载数据
由于数据库中数据量增加的非常快，浏览表格时就不能确定总数，否则确定总数后分页器总页数也就固定了。就会造成最后一页的数据有可能显示的不是最新的。比如日志记录统计，这个变化非常快，一会就增加几十条。由于滚动加载的方式可以不用知道总数，就可以使用滚动加载的方式。不过PC端一般都是分页的，所以分页要解决这个问题就必须不确定总数，一直有下一页，可以点击请求后台接口，直到获取没有数据为止。

所以就有了无限分页。实现方式是基于假分页上的。它的思路是先显示前6页的数据，不展示总页数。当点击第6页时再次调用接口返回7-13页数据，以此类推，如果返回的数据量不足6*每页数量则表示目前所有数据已返回了。

这种方案优点是可以在`不知道总条数的情况下获取实时部分数据`。因为多次请求接口，接口数据返回速度提升。适用于数据量大、数据增加速度快的场景。

缺点是不常用，不好确定数据总数，场景固定。

## 4. 真分页加载数据（滚动加载数据）
由于接口数据返回速度慢，导致表格加载变慢。前面无限分页已经优化了这个问题，但是无限分页不适用于一般的场景。要解决这个问题就必须`多次调用`接口返回部分数据，而不是一次返回所有数据。

有两种方案解决，一种是真分页，实现方式是基于假分页上的，只不过假分页是在所有数据上截取，而真分页是调用接口实现的。而且还得改动一些勾选全选逻辑，利用缓存记录不同页的勾选情况。它的思路是每次点击分页就给后台发送带当前页参数的请求，请求当前页的数据。另一种就是不需要分页器，还是在一页显示，当鼠标滚动到列表底部的时候再请求其他部分数据，实现思路和真分页其实一样，只不过展示不同，这种情况适用于手机上列表加载上。

优点是接口调用速度提升到最优了。

缺点是一页渲染的数据还是很多、表格复杂的时候还是卡顿。而且代码实现批量操作不同页数据的情况比较复杂。

## 5. 模拟滚动实现加载数据
这种情况和后台接口返回速度没关系，只是为了解决单页面数据量大时的渲染问题。由于某些特定情况导致表格结构复杂、浏览器版本低，导致真分页情况下单页100条数据渲染都消耗很长时间。所以必须想一种方法解决单页可以渲染大量数据而不影响性能。

因为电脑显示屏就那么大，加载表格时你能直观看见的也就最多20条数据左右。所以为什么不可以只渲染20条数据左右，然后鼠标滚动就更新当前数据，DOM数量也就不会增加。就算你有百万条数据，你能直观看见的只能是20条数据左右，你只能通过总条数、滚动条来判断总数。总条数可以通过数据的数量来得到，所以只需要模拟滚动条位置就行了。滚动条一滚动就根据滚动条位置拿到能看见的数据。其实就是通过欺骗用户视觉来达到目的。

你现在有100条数据需要显示在表格中，你直观只能看见20条数据左右，所以你只需要固定表格高度、每行高度就可以知道20行数据的高度，以及其余80条数据的总高度。所以现在加载100条数据的表格可以变成顶部空的只有高度的div和中部你看见的20条数据和底部空的只有高度的div的组合。滚动条向下滚动的时候增加顶部div的高度，减少底部div的高度，改变中部显示的数据。这样就实现了模拟滚动的功能。

优点是优化了表格渲染的性能。可以和假分页真分页一起使用。可以摆脱复杂的分页实现方式，只用单页渲染不卡顿。

缺点是实现起来比较复杂。

## 6. 总结
![](https://ttarea.com/post-images/1618378715611.png)

# 14. 前端性能监控你会监控哪些数据? 
## 1. 为什么要做性能监控
对于公司来说，性能在一定程度上与利益直接相关

为什么性能会影响公司的收益呢？根本原因还是在于性能影响了用户体验。加载的延迟、操作的卡顿等都会影响用户的使用体验。尤其是移动端，用户对页面响应延迟和连接中断的容忍度很低。想象一下你拿着手机打开一个网页想看到某个信息却加载半天的心情，你很可能选择直接离开换一个网页。谷歌也将页面加载速度作为 SEO 的一个权重

## 2. 哪些点需要监控
我们可以分为以下几个点来进行监控
* 白屏时间
* 首屏时间
* 用户可操作时间
* 总下载时间

### 1. 白屏时间
白屏时间是用户首次看到内容的时间，也叫做首次渲染时间，chrome 高版本有 firstPaintTime 接口来获取这个耗时，但大部分浏览器并不支持，必须想其他办法来监测。仔细观察 WebPagetest 视图分析发现，白屏时间出现在头部外链资源加载完附近，因为浏览器只有加载并解析完头部资源才会真正渲染页面。基于此我们可以通过获取头部资源加载完的时刻来近似统计白屏时间
```
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="UTF-8"/>
    <script>
      var start_time = +new Date; //测试时间起点，实际统计起点为 
    </script>
    <script src="js"></script>  
    <script>
      var end_time = +new Date; //时间终点
      var headtime = end_time - start_time; //头部资源加载时间    
      console.log(headtime);
    </script>
</html>
```
### 2. 首屏时间
首屏时间的统计比较复杂，因为涉及图片等多种元素及异步渲染等方式。观察加载视图可发现，影响首屏的主要因素的图片的加载。通过统计首屏内图片的加载时间便可以获取首屏渲染完成的时间。统计流程如下
```
首屏位置调用 API 开始统计 -> 
绑定首屏内所有图片的 load 事件 -> 页面加载完后判断图片是否在首屏内，找出加载最慢的一张 ->
首屏时间
```
### 3. 可操作时间
用户可操作默认可以统计domready时间，因为通常会在这时候绑定事件操作。对于使用了模块化异步加载的 JS 可以在代码中去主动标记重要 JS 的加载时间，这也是产品指标的统计方式

### 4. 总下载时间
总下载时间默认可以统计onload时间，这样可以统计同步加载的资源全部加载完的耗时。如果页面中存在很多异步渲染，可以将异步渲染全部完成的时间作为总下载时间

**总结**
* 白屏时间指head内资源加载完成
* 首屏时间指可视区域内最后一张图片加载完成的时间
* 可操作时间指Document.onready时间
* 总下载时间指Document.onload时间


# 15. 谈谈对前后端分离的理解
前后端分离，应该是`分离业务`、`分离开发`、`分离部署`，前后端之间只有HTTP(S)上的JSON通信，做到松耦合。后台只需以REST或GraphQL的API向前端提供服务。

简单来说，前后端分离，后端主要处理业务逻辑，提供api接口，前端就是调用后端的接口，实现前端页面的交互逻辑，运用nodejs或者ajax进行交互。
* 优势，整个项目的开发权重向前移，实现真正的前后端解耦，静态资源和动态资源分离，提高了性能和扩展性
* 减少后端服务器压力，不再是全局刷新，实现异步加载，局部刷新。

前后端分离的初衷是用「`单一职责`」原则把代码质量提上去，很难想象为什么之前的开发者连这么基本的原则都不知道吧，其实是因为以前没有AJAX这项技术，而且前端代码太少了，不值得花时间分离。后来突然Web 大爆发，JS代码和CSS代码从几百行跃升到几千行甚至几万行，不分一下就说不过去了。