---
title: '【面】前端知识点梳理（Html）'
date: 2021-03-04 20:36:43
tags: [Interview]
published: true
hideInList: false
feature: 
isTop: false
---
# 1. 语义化
## 1.1 语义化作用
见标签知其意，让代码结构清晰，方便阅读，有利于其他设备解析。

循W3规范以语义化标签渲染网页更利于搜索引擎的优化（SEO），网络不佳时（无样式），网页也更具可读性。
## 1.2 常见语义化标签
\<title>：页面主体内容。

\<hn>：h1~h6，分级标题，\<h1> 与 \<title> 协调有利于搜索引擎优化。

\<ul>：无序列表。

\<ol>：有序列表。

\<header>：页眉通常包括网站标志、主导航、全站链接以及搜索框。

\<nav>：标记导航，仅对文档中重要的链接群使用。

\<main>：页面主要内容，一个页面只能使用一次。如果是web应用，则包围其主要功能。

\<article>：定义外部的内容，其中的内容独立于文档的其余部分。

\<section>：定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。

## 1.3 html对SEO的优化
1. meta标签，这个是重中之重
2. img标签，img标签增加alt属性
3. 页面结构清晰，使用语义化标签比如header、footer、content、section，js、css使用外部文件
4. 增加外部链接

# 2. Html新特性新标签
## 2.1 新特性
1）语义化
2）本地存储
3）设备兼容
4）连接特性，能够帮助我们将数据推送到客户端
5）网页多媒体特性
6）三维、图形及特效特性
7）性能与集成特性
8）css3特性

## 2.2 新标签
1）结构标签
\<head>定义页面或者区域头部
\<main>规定文档主要内容
\<footer>定义页面或者区域底部
\<article>定义一篇文章
\<nav>定义导航链接
\<scetion>定义一个区域
\<aside>定义页面内容部分侧边栏
\<hgroup>用于对网页或者区域段的标题组合
\<figure>定义一组媒体内容以及标题
\<figcaption>定义figure元素标题
\<address>定义文章拥有者的联系信息
2）行标记
\<time>定义时间、日期
\<mark>高亮显示文字
3）多媒体交互标签
\<video>定义一个视频
\<audio>定义一个音频
\<source>定义媒体资源标签
\<canvas>定义图形
\<embed>定义可交互的内容或者插件
4）web应用标签
\<progress>状态标签、进度条
\<mark>定义有标记的文本（默认是黄色选中内容）
\<output>定义一些输出内容，计算表单结果配合oninput事件
\<datalist>为input标记定义一个下拉option

# 3. input和textarea的区别
\<input>是`单行文本框`，不会换行。通过size属性指定显示字符的长度，注意：当使用css限定了宽高，那么size属性就不再起作用。
value属性指定初始值，Maxlength属性指定文本框可以输入的最长长度。可以通过width和height设置宽高，但是也不会增加行数。

\<textarea>是`多行文本输入框`，文本区中可容纳无限数量的文本，无value属性，其中的文本的默认字体是等宽字体（通常是Courier） ，可以通 过 cols 和 rows 属性来规定 textarea 的尺寸，不过更好的办法是使用 CSS 的 height 和 width 属性。
~~~
<div>
	input:<input value="啦啦啦啦啦" style="height:200px;width: 500px;">
</div>
<div style="margin-top: 20px;">
	textarea:</textarea><textarea  value="嘻嘻嘻" style="height:200px;width: 500px;"> 
   </textarea>
</div>
~~~
可以看到：textarea中设置的value并没有显示，同时input文本依然只有一行，并且居中显示。

# 4. 用div模拟textarea
作为多行文本域功能来讲，textarea满足了我们大部分的需求。然而，textarea有一个不足就是不能像普通div标签一样高度可以跟随内容自适应。textarea总是很自信地显摆它的滚动条，高度固执地岿然不动。

要解决这个问题很简单，一个普通的block元素上加个`contenteditable="true"`就ok了。
~~~
<div contenteditable="true"></div> 
~~~
![](https://Tyloo-code.github.io/post-images/1614862550654.png)
给div设置了一个最小高度，当超过最小高度但不超过最大高度时，div的高度根据文本自适应，当超过最大高度时，出现滚动条。


# 5. html页面动态加载js文件
下面介绍三种异步执行加载Js 脚本的方法：
## 1. 直接document.write
```
<script language="javascript">
document.write("<script src='test.js'><\/script>");
</script>
```
## 2. 动态改变已有script的src属性
```
<script src='' id="s1"></script>
<script language="javascript">
s1.src="test.js"
</script>
```
## 3. 动态创建 script元素
```
var script = document.createElement('script');
script.type = "text/javascript";
script.src = "abc.js";
document.body.appendChild(script);
```



# 6. 移动设备忽略将页面中的数字识别为电话号码的方法
1. 标准的电话号码格式是这样的:\<a  href="tel:1-408-555-5555">1-408-555-5555\</a>，点击后会自动打开电话功能；

2. 但有时候不是电话号码的数字也会被浏览器自动解析为电话号码, 并把数字的颜色和样式都改了；

3. 如果忽略页面中的数字识别为电话号码, 只要把这个默认行为关闭就行，只要一行代码:
~~~
<meta name = "format-detection" content = "telephone=no">
~~~
4. 这个关闭不会影响真正电话号码的识别；
