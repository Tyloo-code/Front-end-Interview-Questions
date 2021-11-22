---
title: '【面】前端知识点梳理（CSS）'
date: 2021-03-04 14:29:24
tags: [Interview]
published: true
hideInList: false
feature: 
isTop: false
---
# 0. 行内元素与块级元素的区别
## 1. 区别
1. 行内元素和其他行内元素都会在一条水平线上排列，都是在同一行的；块级元素却总是会在新的一行开始排列，各个块级元素独占一行，垂直向下排列，若想使其水平方向排序，可使用左右浮动（float：left/right）让其水平方向排列。
2. 行内元素不可以设置宽高，宽度高度随文本内容的变化而变化，但是可以设置行高（line-height），同时在设置外边距margin上下无效，左右有效，内填充padding上下无效，左右有效；块级元素可以设置宽高，并且宽度高度以及外边距，内填充都可随意控制。        
3. 块级元素可以包含行内元素和块级元素，还可以容纳内联元素和其他元素；行内元素不能包含块级元素，只能容纳文本或者其他行内元素。

## 2. Css样式继承
![](https://ttarea.com/post-images/1619598673120.png)



# 1. 盒模型（box model）
## 1.基本概念
盒子模型，个人的理解，就是一个来装html标签的矩形容器，由四部分组成：
* 内容区（content）
* 内边距（padding）
* 外框（border）
* 外边距（margin）
![](https://ttarea.com/post-images/1614738716059.jpg)
## 2.标准模型与IE模型的区别
**标准模型**与**IE 模型**的区别在于宽高的计算方式不同。
标准模型计算元素的宽高只算 content 的宽高，IE模型是 content + padding + border 的总尺寸。
![](https://ttarea.com/post-images/1614739310471.jfif)
从上图可以看到标准 `W3C 盒子模型的范围包括 margin、border、padding、content，并且 content 部分不包含其他部分。`
![](https://ttarea.com/post-images/1614739313417.jfif)
从上图可以看到` IE 盒子模型的范围也包括 margin、border、padding、content，和标准 W3C 盒子模型不同的是：IE 盒子模型的 content 部分包含了 border 和 pading。`
## 3、如何设置这两种模型
~~~
//设置标准模型
box-sizing: content-box;
//设置IE模型
box-sizing: border-box;
~~~
## 4. 外边距合并
![](https://ttarea.com/post-images/1619602593954.png)

# 2.flex布局
flex，即弹性布局。一个由css3引入，为我们的盒子属性带来灵活性的一种布局方式。一旦父级采用了flex布局，里边的子控件将收flex布局限制，部分原本的样式（如float:left）也会失效。

特别注意： flex:0 0 30%的意义： 等于flex-grow=0（默认不放大）+flex-shrink=0（不缩小）+flex-basis=30%（ 项目占据主轴的空间）

## 1.flex布局使用
**任何一个容器都可以指定为 Flex 布局。**
~~~
.box{
  display: flex;
}
~~~
**行内元素也可以使用 Flex 布局。**
~~~
.box{
  display: inline-flex;
}
~~~
注意，设为 Flex 布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效。

## 2.基本概念
采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有**子元素**自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。
![](https://ttarea.com/post-images/1614742656456.png)
容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`；交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。

项目默认沿主轴排列。单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做`cross size`。

## 3.容器的属性
### 3.1 **主轴的方向(flex-direction)**
`flex-direction`: row | row-reverse | column | column-reverse;
* row（默认值）：主轴为水平方向，起点在左端。
* row-reverse：主轴为水平方向，起点在右端。
* column：主轴为垂直方向，起点在上沿。
* column-reverse：主轴为垂直方向，起点在下沿。
![](https://ttarea.com/post-images/1614742821013.png)

### 3.2 **换行属性(flex-wrap)**
`flex-wrap`: nowrap | wrap | wrap-reverse;
* nowrap（默认）：不换行。
* wrap：换行，第一行在上方。
* wrap-reverse：换行，第一行在下方。

`简写`：**方向 + 换行**
flex-flow: `<flex-direction>` || `<flex-wrap>`;

### 3.3 **主轴对齐方式(justify-content)**
`justify-content`: flex-start | flex-end | center | space-between | space-around;
* flex-start（默认值）：左对齐
* flex-end：右对齐
* center： 居中
* space-between：两端对齐，项目之间的间隔都相等。
* space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
![](https://ttarea.com/post-images/1614743145091.png)

### 3.4 **交叉轴对齐方式(align-items)**
`align-items`: flex-start | flex-end | center | baseline | stretch;
* flex-start：交叉轴的起点对齐。
* flex-end：交叉轴的终点对齐。
* center：交叉轴的中点对齐。
* baseline: 项目的第一行文字的基线对齐。
* stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
![](https://ttarea.com/post-images/1614743221850.png)

### 3.5 **多根轴线对齐方式(align-content)**
`align-content`: flex-start | flex-end | center | space-between | space-around | stretch;
* flex-start：与交叉轴的起点对齐。
* flex-end：与交叉轴的终点对齐。
* center：与交叉轴的中点对齐。
* space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
* space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
* stretch（默认值）：轴线占满整个交叉轴。
![](https://ttarea.com/post-images/1614743313971.png)

## 4.项目的属性
排列顺序，数值越小，排列越靠前，默认为0。
* order: \<integer>\;

项目的放大比例,默认为0，即如果存在剩余空间，也不放大。
* flex-grow: \<number>\;

项目的缩小比例,默认为1，即如果空间不足，该项目将缩小。
* flex-shrink: \<number>\; 

项目占据的空间,默认值为auto，即项目的本来大小
* flex-basis: \<length> | auto; 


`简写flex: `：**flex-grow, flex-shrink 和 flex-basis**
`flex`属性是`flex-grow`, `flex-shrink` 和`flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。

**独立的对齐方式**
* align-self: auto | flex-start | flex-end | center | baseline | stretch;
![](https://ttarea.com/post-images/1614743733611.png)

# 3.CSS单位
CSS 有几个不同的单位用于表示长度。

一些设置 CSS 长度的属性有 width, margin, padding, font-size, border-width, 等。

长度有一个数字和单位组成如 10px, 2em, 等。

数字与单位之间不能出现空格。如果长度值为 0，则可以省略单位。

对于一些 CSS 属性，长度可以是负数。

有两种类型的长度单位：**相对和绝对**。

## 3.1 相对长度
相对长度单位指定了一个长度相对于另一个长度的属性。对于**不同的设备**相对长度更适用。
单位|描述|
:--:|:--:|
em|它是描述相对于应用在当前元素的字体尺寸，所以它也是相对长度单位。一般浏览器字体大小默认为16px，则2em == 32px；	
ex|依赖于英文字母小 x 的高度	
ch|数字 0 的宽度	
rem|rem 是根 em（root em）的缩写，rem作用于非根元素时，相对于根元素字体大小；rem作用于根元素字体大小时，相对于其出初始字体大小
vw|viewpoint width，视窗宽度，1vw=视窗宽度的1%
vh|viewpoint height，视窗高度，1vh=视窗高度的1%
vmin|vw和vh中较小的那个。	
vmax|vw和vh中较大的那个。
`	提示: rem与em有什么区别呢？区别在于使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素。`

## 3.2 绝对长度
绝对长度单位是一个固定的值，它反应一个真实的物理尺寸。绝对长度单位视输出介质而定，不依赖于环境（显示器、分辨率、操作系统等）。
单位|描述|
:--:|:--:|
cm|厘米	
mm|毫米	
in|英寸 (1in = 96px = 2.54cm)
px|像素 (1px = 1/96th of 1in)	
pt|point，大约1/72英寸； (1pt = 1/72in)	
pc|pica，大约 12pt，1/6英寸； (1pc = 12 pt)

# 4.CSS 选择器
## 4.1基础选择器
![](https://ttarea.com/post-images/1614746568376.png)
“选择器”指明了{}中的“样式”的作用对象，也就是“样式”作用于网页中的哪些元素
1.**通配选择器** *: 所有的标签都变色

2.**标签(元素)选择器**：匹配所有使用p标签的样式 p{color:red}

3.**id选择器**：匹配指定的标签  #p2{color:red}

4.**class类选择器**：谁指定class谁的变色，可选多个  .c1{color:red} 或者 div.c1{color:red}

## 4.2 复合选择器
1.**交集选择器**（合着写）
**作用**：选中同时复合多个条件的元素
**语法**：选择器1选择器2选择器3选择器n{}
**注意点**：交集选择器中如果有元素选择器，必须使用元素选择器开头

2.**并集选择器**（逗号隔开）
**作用**：同时选择多个选择器对应的元素
**语法**：选择器1,选择器2,选择器3,选择器n{}
**例子**：#b1,.p1,h1,span,div.red{}

3.**关系选择器**
**(1)子元素选择器**
* 作用：选中指定父元素的指定子元素
* 语法：父元素 > 子元素
~~~
div.box > span{
        color: orange;
}
~~~
**(2)后代元素选择器**
* 作用：选中指定元素内的指定后代元素
* 语法：祖先 后代
~~~
div span{
      color: skyblue
}
~~~
**(3)兄弟元素选择器**
 * 选择下一个兄弟
语法：前一个 + 下一个
~~~
p + span{
     color: red;
 }
~~~
* 选择下边所有的兄弟
语法：兄 ~ 弟
~~~
 p ~ span{
      color: red;
 }
~~~

4.**属性选择器**
* [属性名] 选择含有指定属性的元素
* [属性名=属性值] 选择含有指定属性和属性值的元素
* [属性名^=属性值] 选择属性值以指定值开头的元素
* [属性名$=属性值] 选择属性值以指定值结尾的元素
* [属性名*=属性值] 选择属性值中含有某值的元素的元素
~~~
 p[title*=e]{
      color: orange;
 }
~~~

5.**伪类选择器**
伪类一般情况下都是使用`:`开头
* :first-child 第一个子元素
* :last-child 最后一个子元素
* :nth-child() 选中第n个子元素
* :first-of-type
* :last-of-type
* :nth-of-type()          - 他们是在同类型元素中进行排序
* :not() 否定伪类        - 将符合条件的元素从选择器中去除
~~~
ul > li:nth-child(2n+1){
      color: red;
 }
~~~
## 4.3 CSS优先级
当两个规则都作用到了同一个html元素上时，如果定义的属性有冲突，那么应该用谁的值的，CSS有一套优先级的定义。

**不同级别**
1. 在属性后面使用 !important 会覆盖页面内任何位置定义的元素样式。
2. 作为style属性写在元素内的样式
3. id选择器
4. 类选择器
5. 标签选择器
6. 通配符选择器
7. 浏览器自定义或继承

`总结排序：!important > 行内样式>ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性`

**同一级别**
* 同一级别中后写的会覆盖先写的样式
![](https://ttarea.com/post-images/1619086185333.png)


# 5. 伪类和伪元素的区别？
`伪类的操作对象是文档树中已有的元素，而伪元素则创建了一个文档数外的元素。`

伪类和伪元素的最大区别就在于有没有创建一个文档树以外的元素。伪元素创建了一个文档树以外的元素（虚拟容器）并为他添加样式，这个容器不包含任何DOM元素但是可以包含内容。换句话说伪类和伪元素的区别就是伪类的操作对象是文档树中已有的元素，而伪元素则创建了一个文档树以外的元素。

## 1. 伪类
**css伪类：css伪类用于向某些选择器添加特殊效果。**

伪类其实与普通的css类相类似，可以为已有的元素添加样式，但是他只有处于dom无法描述的状态下才能为文档树中的元素添加样式，所以将其称为伪类。(这种文档树无法描述的状态是什么呢？当一个元素在用户的不同行为下就变化成不同的状态这个行为的变化dom就无法描述，就要产生伪类，来为一些选择器添加特殊的效果)。
![](https://ttarea.com/post-images/1629294101158.webp)

`a标签的伪类`
```
a:link   /* 未访问的链接 */
a:visited  /* 已访问的链接 */
a:hover  /* 鼠标移动到链接上 */
a:active  /* 选定的链接 */
```
`input获取焦点 :focus`
```
<input class="ccc" type="text" value="test" />
.ccc:focus{background-color:yellow;}
```
`hover鼠标滑过`
```
p:hover {color: #FF00FF}
```
## 2. 伪元素
**伪元素：伪元素用于创建一些不在文档树中的元素，并且为他添加样式**

举个例子：使用伪元素‘**::before**’可以在一个元素前边增加一些文本，并且可以为这些文本添加一些样式，虽然用户可以看到这写文本，但是这些文本是不存在于文档树中的。

`伪元素的content属性`
伪元素的content属性，不仅仅可以简单直接的设置一个字符串作为伪元素的内容，它还具备一定限度的编程能力，如下
```
div::after{
    content: "普通字符串";
    content: attr(父元素的html属性名称);
    content: url(图片、音频、视频等资源的url);
    /* 使用unicode字符集，采用4位16进制编码
     * 但不同的浏览器显示存在差异，而且移动端识别度更差
     */
    content: "\21e0";
    /* content的多个值可以任意组合，各部分通过空格分隔 */
    content: "'" attr(title) "'";
    
    /* 自增计数器，用于插入数字/字母/罗马数字编号
     * counter-reset: [<identifier> <integer>?]+，必选，用于标识自增计数器的作用范围，<identifier>为自定义名称，<integer>为起始编号默认为0。
     * counter-increment: [<identifier> <integer>?]+，用于标识计数器与实际关联的范围，<identifier>为counter-reset中的自定义名称，<integer>为步长默认为1。
     * <list-style-type>: disc | circle | square | decimal | decimal-leading-zero | lower-roman | upper-roman | lower-greek | lower-latin | upper-latin | armenian | georgian | lower-alpha | upper-alpha
     */
    content: counter(<identifier>, <list-style-type>);
    
    /* 以父附属元素的qutoes值作为content的值
     */
    content: open-quote | close-quote | no-open-quote | no-close-quote;
}
/* Content接受6种类型，和一种组合方式 */
```
![](https://ttarea.com/post-images/1629294446197.png)


# 6. bfc 清除浮动
BFC(Block Formatting Context) 块级格式化环境
1. BFC是一个CSS中的一个隐含的属性，可以为一个元素开启BFC
      开启BFC该元素会变成一个独立的布局区域

2. 元素开启BFC后的特点：
* 开启BFC的元素不会被浮动元素所覆盖
* 开启BFC的元素子元素和父元素外边距不会重叠
* 开启BFC的元素可以包含浮动的子元素

3. 可以通过一些特殊方式来开启元素的BFC：
* 设置元素的浮动（不推荐）
* 将元素设置为行内块元素（不推荐）
* 将元素的overflow设置为一个非visible的值
`常用的方式 为元素设置 overflow:hidden 开启其BFC` 以使其可以包含浮动元素

此外，除了BFC，还有IFC、GFC、FFC的概念。我们简单了解一下。
* GFC：可简单理解为grid布局
* FFC：可简单理解为flex布局。
* IFC:内联格式化上下文，简单理解为：inline-block。

水平方向上的 margin，border 和 padding在框之间得到保留。框在垂直方向上可以以不同的方式对齐：它们的顶部或底部对齐，或根据其中文字的基线对齐。包含那些框的长方形区域，会形成一行，叫做行框。 inline-block的元素的内部是一个BFC，但是它本身可以和其它inline元素一起形成IFC。

# 7. 层叠上下文
## 1.层叠上下文(Stacking Context)
![](https://ttarea.com/post-images/1614762081794.png)
层叠上下文1 (Stacking Context 1)是由文档根元素形成的， 层叠上下文2和3 (Stacking Context 2, 3) 都是层叠上下文1 (Stacking Context 1) 上的层叠层。 他们各自也都形成了新的层叠上下文，其中包含着新的层叠层。

在层叠上下文中，其子元素按照上面解释的规则进行层叠。形成层叠上下文的方法有：
* 根元素 \<html>\</html>
* position值为 absolute|relative，且 z-index值不为 auto
* position 值为 fixed|sticky
* z-index 值不为 auto 的flex元素，即：父元素 display:flex|inline-flex
* opacity 属性值小于 1 的元素
* transform 属性值不为 none的元素
* mix-blend-mode 属性值不为 normal 的元素
* filter、 perspective、 clip-path、 mask、 mask-image、 mask-border、 motion-path 值不为none 的元素
* perspective 值不为 none 的元素
* isolation 属性被设置为 isolate 的元素
* will-change 中指定了任意 CSS 属性，即便你没有直接指定这些属性的值
* -webkit-overflow-scrolling 属性被设置 touch的元素

**总结:**
1. 层叠上下文可以包含在其他层叠上下文中，并且一起组建了一个有层级的层叠上下文
2. 每个层叠上下文完全独立于它的兄弟元素，当处理层叠时只考虑子元素，这里类似于BFC
3. 每个层叠上下文是自包含的：当元素的内容发生层叠后，整个该元素将会**在父级叠上下文**中按顺序进行层叠

## 2. 层叠等级 (Stacking Level)
**层叠等级** (层叠水平, Stacking Level) 决定了同一个层叠上下文中元素在z轴上的显示顺序的**概念**；
* 普通元素的层叠等级优先由其所在的层叠上下文决定
* 层叠等级的比较只有在同一个层叠上下文元素中才有意义
* 在同一个层叠上下文中，层叠等级描述定义的是该层叠上下文中的元素在Z轴上的上下顺序

`注意`，层叠等级并不一定由 z-index 决定，只有定位元素的层叠等级才由 z-index 决定，其他类型元素的层叠等级由层叠顺序、他们在HTML中出现的顺序、他们的父级以上元素的层叠等级一同决定，详细的规则见下面层叠顺序的介绍。

## 3. z-index
>在 CSS 2.1 中, 所有的盒模型元素都处于三维坐标系中。 除了我们常用的横坐标和纵坐标， 盒模型元素还可以沿着"z 轴"层叠摆放， 当他们相互覆盖时， z 轴顺序就变得十分重要。

z-index 只适用于定位的元素，对非定位元素无效，它可以被设置为正整数、负整数、0、auto，如果一个定位元素没有设置 z-index，那么默认为auto；

元素的 z-index 值只在同一个层叠上下文中有意义。如果父级层叠上下文的层叠等级低于另一个层叠上下文的，那么它 z-index 设的再高也没用。所以如果你遇到 z-index 值设了很大，但是不起作用的话，就去看看它的父级层叠上下文是否被其他层叠上下文盖住了。

## 4. 层叠顺序 (Stacking Order)
这里其实是涉及了所谓的层叠水平（stacking level)，有一张图可以很好的诠释：
![](https://ttarea.com/post-images/1614774762413.png)
1. 形成堆叠上下文环境的元素的背景与边框
2. 拥有负 z-index 的子堆叠上下文元素 （负的越高越堆叠层级越低）
3. 正常流式布局，非 inline-block，无 position 定位（static除外）的子元素
4. 无 position 定位（static除外）的 float 浮动元素
5. 正常流式布局， inline-block元素，无 position 定位（static除外）的子元素（包括 display:table 和 display:inline ）
6. 拥有 z-index:0 的子堆叠上下文元素
7. 拥有正 z-index: 的子堆叠上下文元素（正的越低越堆叠层级越低）

# 8. 常见页面布局
`三栏布局`

**题目：假设高度已知，请写出三栏布局，其中左栏、右栏宽度各为 300px，中间自适应。**

解答：可以有很多种布局方式，这里列出五种：float布局，absolute布局，flex布局，table布局，grid布局，代码如下：
~~~
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>三栏布局</title>
	<link rel="stylesheet" href="">
	<style type="text/css" media="screen">
		html *{
			margin: 0;
			padding: 0;
		}
	</style>
</head>
<body>
	<section class="layout float">
		<style type="text/css" media="screen">
			.layout.float .wrapper>div{
				min-height: 100px;
			}
			.layout.float .left{
				float: left;
				width: 300px;
				background: red;
			}
			.layout.float .center{
				background: yellow;
			}
			.layout.float .right{
				float: right;
				width: 300px;
				background: blue;
			}
			
		</style>
		<article class="wrapper">
			<div class="left"></div>
			<div class="right"></div>
			<div class="center">
				<h1>float布局</h1>
				1.我是float布局的中间部分
				2.我是float布局的中间部分
			</div>
		</article>
	</section>


	<section class="layout absolute">
		<style type="text/css" media="screen">
			.layout.absolute .wrapper{
				width: 100%;
				margin-top: 20px;
			}
			.layout.absolute .wrapper>div{
				min-height: 100px;
			}
			.layout.absolute .left{
				position: absolute;
				left: 0;
				width: 300px;
				background: red;
			}
			.layout.absolute .center{
				position: absolute;
				left: 300px;
				right: 300px;
				background: yellow;
			}
			.layout.absolute .right{
				position: absolute;
				right: 0;
				width: 300px;
				background: blue;
			}
		</style>
		<article class="wrapper">
			<div class="left"></div>
			<div class="center">
				<h1>absolute布局</h1>
				1.我是absolute布局的中间部分
				2.我是absolute布局的中间部分
			</div>
			<div class="right"></div>
		</article>
	</section>


	<section class="layout flex">
		<style type="text/css" media="screen">
			.layout.flex .wrapper{
				width: 100%;
				min-height: 100px;
				display: flex;
				margin-top: 140px;
			}
			.layout.flex .left{
				width: 300px;
				background: red;
			}
			.layout.flex .center{
				flex: 1;
				background: yellow;
			}
			.layout.flex .right{
				width: 300px;
				background: blue;
			}
		</style>
		<article class="wrapper">
			<div class="left"></div>
			<div class="center">
				<h1>flex布局</h1>
				1.我是flex布局的中间部分
				2.我是flex布局的中间部分
			</div>
			<div class="right"></div>
		</article>
	</section>


	<section class="layout table">
		<style type="text/css" media="screen">
			.layout.table .wrapper{
				display: table;
				width: 100%;
				min-height: 100px;
				margin-top: 20px;
			}
			.layout.table .left{
				display: table-cell;
				width: 300px;
				background: red;
			}
			.layout.table .center{
				display: table-cell;
				background: yellow;
			}
			.layout.table .right{
				display: table-cell;
				width: 300px;
				background: blue;
			}
			
		</style>
		<article class="wrapper">
			<div class="left"></div>
			<div class="center">
				<h1>table布局</h1>
				1.我是table布局的中间部分
				2.我是table布局的中间部分
			</div>
			<div class="right"></div>
		</article>
	</section>


	<section class="layout grid">
		<style type="text/css" media="screen">
			.layout.grid .wrapper{
				display: grid;
				grid-template-columns: 300px auto 300px;
				grid-template-rows: 100px;
				width: 100%;
				margin-top: 20px;
			}
			.layout.grid .left{
				background: red;
			}
			.layout.grid .center{
				background: yellow;
			}
			.layout.grid .right{
				background: blue;
			}
			
		</style>
		<article class="wrapper">
			<div class="left"></div>
			<div class="center">
				<h1>grid布局</h1>
				1.我是grid布局的中间部分
				2.我是grid布局的中间部分
			</div>
			<div class="right"></div>
		</article>
	</section>
</body>
</html>
~~~

## 1 每种布局的优缺点
1. `float 布局`
优点： 比较简单，兼容性也比较好。只要清除浮动做的好，是没有什么问题的
缺点：浮动元素是脱离文档流，要做清除浮动，这个处理不好的话，会带来很多问题，比如高度塌陷等。

2. `绝对布局`
优点：很快捷，设置很方便，而且也不容易出问题
缺点：绝对定位是脱离文档流的，意味着下面的所有子元素也会脱离文档流，这就导致了这种方法的有效性和可使用性是比较差的。

3. `flex 布局`
优点：简单快捷
缺点：不支持 IE8 及以下

4. `table布局`
优点：实现简单，代码少
缺点：当其中一个单元格高度超出的时候，两侧的单元格也是会跟着一起变高的，而有时候这种效果不是我们想要的。

5. `grid布局`
跟 flex 相似。

## 2 水平垂直居中
1. **absolute + 负margin**
这种方式比较好理解，兼容性也很好，缺点是需要知道子元素的宽高
~~~
<div class="out">
  <div class="inner">12345</div>
</div>

<style type="text/css">
  .out{
    position: relative;
    width: 300px;
    height: 300px;
    background: red;
  }

  .inner{
    position: absolute;
    width: 100px;
    height: 100px;
    background: yellow;
    left: 50%;
    top: 50%;
    margin-left: -50px;
    margin-top: -50px;
  }
</style>
~~~

2. **absolute + auto margin**
这种方法兼容性也很好，缺点是需要知道子元素的宽高
~~~
<style type="text/css">
  .out{
    position: relative;
    width: 300px;
    height: 300px;
    background: red;
  }

  .inner{
    position: absolute;
    width: 100px;
    height: 100px;
    background: yellow;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
</style>
~~~

3. **absolute + calc**
这种方法的兼容性依赖于 calc，且也需要知道宽高
~~~
<style type="text/css">
  .out{
    position: relative;
    width: 300px;
    height: 300px;
    background: red;
  }

  .inner{
    position: absolute;
    width: 100px;
    height: 100px;
    background: yellow;
    left: calc(50% - 50px);
    top: calc(50% - 50px);
  }
</style>
~~~

4. **absolute + transform**
兼容性依赖 translate，不需要知道子元素宽高
~~~
<style type="text/css">
  .out{
    position: relative;
    width: 300px;
    height: 300px;
    background: red;
  }

  .inner{
    position: absolute;
    background: yellow;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
~~~

5. **table**
css新增的table属性，可以让我们把普通元素，变为table元素的显示效果，通过这个特性也可以实现水平垂直居中。

这种方法兼容性也不错。
~~~
<style type="text/css">
  .out{
    display: table-cell;
    width: 300px;
    height: 300px;
    text-align: center;
    vertical-align: middle;
    background: red;
  }

  .inner{
    display: inline-block;
    background: yellow;
    width: 100px;
    height: 100px;
  }
</style>
~~~

6. **flex**
flex 实现起来比较简单，三行代码即可搞定。可通过父元素指定子元素的对齐方式，也可通过 子元素自己指定自己的对齐方式来实现。第二种方式见 grid 布局。
~~~
<style type="text/css">
  .out{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    background: red;
  }

  .inner{
    background: yellow;
    width: 100px;
    height: 100px;
  }
</style>
~~~

7. **grid**
grid 布局也很强大，大体上属性跟 flex 差不多。
~~~
<style type="text/css">
  .out{
    display: grid;
    width: 300px;
    height: 300px;
    background: red;
  }

  .inner{
    background: yellow;
    width: 100px;
    height: 100px;
    align-self: center;
    justify-self: center;
  }
</style>
~~~

页面布局小结：
* 语义化掌握到位
* 页面布局理解深刻
* CSS基础知识扎实
* 思维灵活且积极上进
* 代码书写规范

# 9. 响应式布局
响应式设计与自适应设计的区别：响应式开发一套界面，通过检测视口分辨率，针对不同客户端在客户端做代码处理，来展现不同的布局和内容；自适应需要开发多套界面，通过检测视口分辨率，来判断当前访问的设备是pc端、平板、手机，从而请求服务层，返回不同的页面。

## 1. 媒体查询
CSS3媒体查询可以让我们针对不同的媒体类型定义不同的样式，当重置浏览器窗口大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面。

不管是移动优先还是PC优先，都是依据当随着屏幕宽度增大或减小的时候，后面的样式会覆盖前面的样式。因此，移动端优先首先使用的是min-width，PC端优先使用的max-width。

## 2. 百分比布局
通过百分比单位，可以使得浏览器中组件的宽和高随着浏览器的高度的变化而变化，从而实现响应式的效果。Bootstrap里面的栅格系统就是利用百分比来定义元素的宽高，CSS3支持最大最小高，可以将百分比和max(min)一起结合使用来定义元素在不同设备下的宽高。

计算困难，如果我们要定义一个元素的宽度和高度，按照设计稿，必须换算成百分比单位。

各个属性中如果使用百分比，相对父元素的属性并不是唯一的。比如width和height相对于父元素的width和height，而margin、padding不管垂直还是水平方向都相对比父元素的宽度、border-radius则是相对于元素自身等等，造成我们使用百分比单位容易使布局问题变得复杂。

## 3. rem布局
REM是CSS3新增的单位，并且移动端的支持度很高，Android2.x+,ios5+都支持。rem单位都是相对于根元素html的font-size来决定大小的,根元素的font-size相当于提供了一个基准，当页面的size发生变化时，只需要改变font-size的值，那么以rem为固定单位的元素的大小也会发生响应的变化。 因此，如果通过rem来实现响应式的布局，只需要根据视图容器的大小，动态的改变font-size即可（而em是相对于父元素的）。

**rem响应式的布局思想：**
一般不要给元素设置具体的宽度，但是对于一些小图标可以设定具体宽度值

高度值可以设置固定值，设计稿有多大，我们就严格有多大

所有设置的固定值都用rem做单位（首先在HTML总设置一个基准值：px和rem的对应比例，然后在效果图上获取px值，布局的时候转化为rem值)

js获取真实屏幕的宽度，让其除以设计稿的宽度，算出比例，把之前的基准值按照比例进行重新的设定，这样项目就可以在移动端自适应了

**rem布局的缺点：**
在响应式布局中，必须通过js来动态控制根元素font-size的大小，也就是说css样式和js代码有一定的耦合性，且必须将改变font-size的代码放在css样式之前

**REM布局也是目前多屏幕适配的最佳方式**。默认情况下我们html标签的font-size为16px,我们利用媒体查询，设置在不同设备下的字体大小。

## 4. 视口单位
css3中引入了一个新的单位vw/vh，与视图窗口有关，vw表示相对于视图窗口的宽度，vh表示相对于视图窗口高度，除了vw和vh外，还有vmin和vmax两个相关的单位。各个单位具体的含义如下：

用视口单位度量，视口宽度为100vw，高度为100vh（左侧为竖屏情况，右侧为横屏情况）。例如，在桌面端浏览器视口尺寸为650px，那么 1vw = 650 * 1% = 6.5px（这是理论推算的出，如果浏览器不支持0.5px，那么实际渲染结果可能是7px）。

使用视口单位来实现响应式有两种做法：

1.仅使用vw作为CSS单位
2.搭配vw和rem

## 5. 图片响应式
这里的图片响应式包括两个方面，一个就是大小自适应，这样能够保证图片在不同的屏幕分辨率下出现压缩、拉伸的情况；一个就是根据不同的屏幕分辨率和设备像素比来尽可能选择高分辨率的图片，也就是当在小屏幕上不需要高清图或大图，这样我们用小图代替，就可以减少网络带宽了。

1.使用max-width（图片自适应）:
图片自适应意思就是图片能随着容器的大小进行缩放

2.使用srcset    \<img srcset="photo_w350.jpg 1x, photo_w640.jpg 2x" src="photo_w350.jpg" alt="">

3.使用background-image

4.使用picture标签

## 6. 响应式布局的要点
在实际项目中，我们可能需要综合上面的方案，比如用rem来做字体的适配，用srcset来做图片的响应式，宽度可以用rem，flex，栅格系统等来实现响应式，然后可能还需要利用媒体查询来作为响应式布局的基础，因此综合上面的实现方案，项目中实现响应式布局需要注意下面几点：
* 设置viewport
* 媒体查询
* 字体的适配（字体单位）
* 百分比布局
* 图片的适配（图片的响应式）
* 结合flex，grid，BFC，栅格系统等已经成型的方案

# 10. css预处理，后处理
## 1 CSS 预处理器
CSS 预处理器用一种专门的编程语言，进行 Web 页面样式设计，然后再编译成正常的 CSS 文件，以供项目使用。**CSS 预处理器为 CSS 增加一些编程的特性，无需考虑浏览器的兼容性问题。**
* CSS语法不够强大，比如无法嵌套书写导致模块化开发中需要书写很多重复的选择器；
* 没有变量和合理的样式复用机制，使得逻辑上相关的属性值必须以字面量的形式重复输出，导致难以维护等

` Sass、LESS、Stylus 是目前最主流的 CSS 预处理器。`

**实现原理**
* 取到 **DSL** 源代码 的 **分析树**
* 将含有 **动态生成** 相关节点的 **分析树** 转换为 **静态分析树**
* 将 **静态分析树** 转换为 CSS 的 **静态分析树**
* 将 CSS 的** 静态分析树** 转换为 **CSS 代码**

现实中的 **CSS 预处理器** 更复杂一点儿，因为大多功能要同时支持 **特有 DSL 与 原生 CSS**，一件事情要同时考虑两种情况下的处理。

**优缺点**
* 优点：语言级逻辑处理，动态特性，改善项目结构
* 缺点：采用特殊语法，框架耦合度高，复杂度高

## 2 CSS 后处理器
**CSS 后处理器** 是对 CSS 进行处理，并最终生成 CSS 的 `预处理器`，它属于广义上的 **CSS 预处理器**。 我们很久以前就在用 **CSS 后处理器** 了，最典型的例子是 **CSS 压缩工具**（如 `clean-css`），只不过以前没单独拿出来说过。 还有最近比较火的 `Autoprefixer`，以 Can I Use 上的 **浏览器支持数据**为基础，自动处理兼容性问题。

**实现原理**
* 将 **源代码** 做为 **CSS** 解析，获得 **分析树**
* 对 **CSS** 的 **分析树** 进行 **后处理**
* 将 **CSS** 的 **分析树** 转换为 **CSS 代码**

**优缺点**
* 优点：使用 CSS 语法，容易进行模块化，贴近 CSS 的未来标准
* 缺点：逻辑处理能力有限


# 11.display哪些取值
## 11.1 none ：此元素不会被显示
（1） none此单词的意思是没有一个、毫无的意思；所以当display的属性值设置为none的时候，表示的是没有框类型，没有框类型的元素，是无法在浏览器中显示的，就实现隐藏元素的作用了；
（2）有很多标签，display的属性值默认是none，比如 `head` `meta` `style` `link`等等；
（3）项目应用中，做二级导航效果或者鼠标悬停效果动态时，会经常用到这个属性值，下次我们写一个好玩的二级效果再来展示这个属性值的作用；
![](https://ttarea.com/post-images/1614838389050.jpg)

## 11.2 block：此元素将显示为块级元素，此元素前后会带有换行符。
![](https://ttarea.com/post-images/1614838392829.jpg)

## 11.3 inline 默认此元素会被显示为内联元素，元素前后没有换行符。
![](https://ttarea.com/post-images/1614838421481.jpg)
## 11.4 inline-block 行内块元素（CSS2.1 新增的值）
说明：行内块元素既具备行内元素的特性也具备块状元素的特性，具备行内元素前后没有换行符可以在一行内并列显示的特性，具备块状元素可以正确解释盒模型属性的特性。
![](https://ttarea.com/post-images/1614838503882.jpg)
## 11.5 list-item 此元素会作为列表显示。
(1) 此属性值表示将元素显示为列表项标签，li标签默认的display的属性值是list-item，display的属性值为list-item的标签也属于块状元素；
![](https://ttarea.com/post-images/1614838546316.jpg)
(2) li标签作为列表项标签，前面会有列表项标记，下面给div标签设置为list-item，div也会有列表项标记
![](https://ttarea.com/post-images/1614838588128.jpg)
## 11.6 run-in 此元素会根据上下文作为块级元素或内联元素显示。

## 11.7 table 此元素会作为块级表格来显示，表格前后带有换行符。
（1）table标签默认的元素类型是table，显示为块级表格，可以设置大小并且单独占据一行；
（2）当table标签的元素类型是table时，并且设置宽度和高度之后，后代td标签的宽度和高度，默认是由table根据内容的多少去分配的；
  (3) table属于块状元素，但是对比别的块状元素，有自己的特点， table会单独占据一行，但是在没有设置width的情况下，不会与父元素同宽，而是根据内容而定；
  (4) 其他标签设置display的属性值为table，也不会具有表格的特性；
  
  `总结`

通过以上的测试，可以总结出：
display的属性值为**block，table**的标签都为`块状元素`；
display的属性值为**inline，inline-table，inline-block**的标签为`行内级元素`；


# 12. 相邻的两个inline-block节点为什么会出现间隔，该如何解决
![](https://ttarea.com/post-images/1614841169302.png)
## 12.1 原因
其实，html的原因。我们回顾一下这段代码：
~~~
<div class="box">看这里➡️</div>
<div class="box">⬅️看这里➡️</div>
<div class="box">⬅️看这里</div>
~~~
我们不仅看到元素节点，属性节点还有文本节点，问题就是处在文本节点的渲染导致3px(chrome)的间隔。那如何解决它？
## 12.2 解决办法
**方法一、删除空白节点**
~~~
<div class="box">看这里➡️</div
><div class="box">⬅️看这里➡️</div
><div class="box">⬅️看这里</div>
~~~
以上的这些方法，无一列外破坏了代码的可读性。

**方法二、负的marigin值**
~~~
.box {
    margin: -3px; /*左右缩小3px*/
    display: inline-block;
    width: 100px;
    height: 50px;
    background-color: #ddd;
    text-align: center;
    line-height: 50px;
}
~~~
这样的方式，可以解决chrome下面的问题。但是不建议使用。因为在某些游览器上面，这个文本节点可能设置成4px的间隔。因为解决问题，引入了新的问题，那就尴尬！

**方法三、font-size: 0**
既然是文本节点导致的，那我们就把文本节点设置成0不就ok?顺着这个思路，我们这些写： 我们先给div加一个父级节点
~~~
<div class="wrapper">
    <div class="box">看这里➡️</div>
    <div class="box">⬅️看这里➡️</div>
    <div class="box">⬅️看这里</div>
</div>
~~~
~~~
.wrapper{
    font-size: 0;
}
.box {
    font-size: 14px;
    display: inline-block;
    width: 100px;
    height: 50px;
    background-color: #ddd;
    text-align: center;
    line-height: 50px;
}
~~~
主要： 因为font-size是默认继承的属性。所以父级给了0，子级要重新设置font-size： 14px。

# 13. meta viewport 移动端适配
## 13.1 什么是Viewport?
手机浏览器会把页面放入到一个虚拟的“视口”（viewpoint）中，但viewport又不局限于浏览器可视区域的大小，它可能比浏览器的可视区域大，也可能比浏览器的可视区域小。通常这个虚拟的“视口”（viewport）比屏幕宽，会把网页挤到一个很小的窗口。
如果不显示地设置viewport，那么浏览器就会把width默认设置为980。但后果是浏览器出现横向滚动条，因为浏览器可视区域的宽度比默认的viewport的宽度小。
然后浏览器引进了 viewport 这个 meta tag，让网页开发者来控制 viewport 的大小和缩放。
~~~
<meta name="viewport" content="width=device-width, initial-scale=1.0">
~~~
## 13.2 meta viewport 的6个属性：
* width ： 设置viewport 的宽度
* height： 设置viewport 的高度
* initial-scale ： 设置页面的初始缩放值
* minimum-scale ：允许用户的最小缩放值
* maximum-scale：允许用户的最大缩放值
* user-scalable： 是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes代表允许

## 13.3 3个viewport：
（1）**布局视口 layout viewport**
如果把移动设备上浏览器的可视区域设为viewport的话，某些网站会因为viewport太窄而显示错乱，所以这些浏览器就默认会把viewport设为一个较宽的值，比如980px，使得即使是那些为PC浏览器设计的网站也能在移动设备浏览器上正常显示。这个浏览器默认的viewport叫做 layout viewport。layout viewport的宽度可以通过 document.documentElement.clientWidth来获取。

（2）**视觉视口 visual viewport**
layout viewport的宽度是大于浏览器可视区域的宽度的，所以还需要一个viewport来代表浏览器可视区域的大小，这个viewport叫做 visual viewport。visual viewport的宽度可以通过 document.documentElement.innerWidth来获取。

（3）**理想视口 ideal viewport**
ideal viewport是一个能完美适配移动设备的viewport。首先，不需要缩放和横向滚动条就能正常查看网站的所有内容；其次，显示的文字、图片大小合适，如14px的文字不会因为在一个高密度像素的屏幕里显示得太小而无法看清，无论是在何种密度屏幕，何种分辨率下，显示出来的大小都差不多。这个viewport叫做 ideal viewport。

ideal viewport并没有一个固定的尺寸，不同的设备有不同的ideal viewport。例如，所有的iphone的ideal viewport宽度都是320px，无论它的屏幕宽度是320还是640。
ideal viewport 的意义在于，无论在何种分辨率的屏幕下，针对ideal viewport 而设计的网站，不需要缩放和横向滚动条都可以完美地呈现给用户。

## 13.4  终极方案：
将`meta:vp`标签的属性值设置为`width=device-width, initial-scale=1`就不仅能够将页面的布局视口自动设置为各个移动设备的理想视口，还能够同时兼容iphone、ipad的Safari以及WP7 IE浏览器的横屏问题。
~~~
<meta name="viewport" content="width=device-width, initial-scale=1">
~~~

# 14. 动画和过渡（Animation 和 Transition）
* animation：CSS 动画，将元素的样式配置转换到另一个CSS配置。包括动画所使用的样式规则，以及用于指定动画开始、结束以及中间多个节点的关键帧；
* transition：CSS过渡属性，为一个元素在不同状态切换的时候定义不同的过渡效果。
  
**transition需要触发一个事件才会随着时间改变其CSS属性；animation在不需要触发任何事件的情况下，也可以显式的随时间变化来改变元素CSS属性，达到一种动画的效果。**

## 1. transition的属性
>CSS3的过渡功能就像是一种黄油，可以让CSS的一些变化变得平滑。因为原生的CSS过渡在客户端需要处理的资源要比用JavaScript和Flash少的多，所以才会更平滑。

![](https://ttarea.com/post-images/1614826493004.jpg)
* transition-property
不是所有属性都能过渡，只有属性具有一个中间点值才具备过渡效果。
* transition-duration
指定从一个属性到另一个属性过渡所要花费的时间。默认值为0，为0时，表示变化是瞬时的，看不到过渡效果。
* transiton-timing-function
过渡函数，有如下几种：
liner ：匀速 
ease-in：减速 
ease-out：加速 
ease-in-out：先加速再减速 
cubic-bezier：三次贝塞尔曲线

```
.blueball {
  ...
  opacity: 1; /* 不透明 */
}
.blueball:hover {
  opacity: 0.3; /* 透明度 30% */
}
```
当我们把鼠标放在蓝球上时，蓝球会**立刻**变透明
![](https://ttarea.com/post-images/1619149280679.gif)
而如果我们给蓝球增加 transition 属性，其透明度变化会有一个过渡
```
.blueball {
  ...
  opacity: 1;
  transition: opacity 1s;  /* 改变 opacity 属性，持续1秒 */
}
.blueball:hover {
  opacity: 0.3;
}
```
![](https://ttarea.com/post-images/1619149305472.gif)
这里的 transition 属性其实是一个简写形式，它由**四部分组成**，分别是（冒号后为默认值）：
```
transition-property: all; /* 过渡属性 */
transition-duration: 0; /* 耗时 */
transition-timing-function: ease; /* 效果，默认 ease（缓入缓出） */
transition-delay: 0; /* 延迟 */
```
如果考虑到默认值，上面过渡效果的例子中，可以进一步简写成`transition: 1s`

transition 可以同时给多个属性添加过渡效果，比如可以在移动元素的同时，改变其透明度。`但不管有多少个属性同时在变化，这种过渡效果只能是一次性的，也就是单个动作`.

`触发过渡`
单纯的代码不会触发任何过渡操作，需要通过用户的行为（如点击，悬浮等）触发，可触发的方式有： 
**:hoever :focus :checked 媒体查询触发 JavaScript触发**

`局限性`
transition的优点在于简单易用，但是它有几个很大的局限。 
（1）transition需要事件触发，所以没法在网页加载时自动发生。 
（2）transition是一次性的，不能重复发生，除非一再触发。 
（3）transition只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态。 
（4）一条transition规则，只能定义一个属性的变化，不能涉及多个属性。 
CSS Animation就是为了解决这些问题而提出的。


## 2. animation的属性
**transition 只能做单个动作，如果动画包含多个动作，这时候就需要 animation**

CSS3的animation属性可以像Flash制作动画一样，通过控制关键帧来控制动画的每一步，实现更为复杂的动画效果。ainimation实现动画效果主要由两部分组成： 
1）通过类似Flash动画中的帧来声明一个动画； 
2）在animation属性中调用关键帧声明的动画。
`动画属性`
![](https://ttarea.com/post-images/1614826993212.jpg)
（1）animation-name：none为默认值，将没有任何动画效果，其可以用来覆盖任何动画 
（2）animation-duration：默认值为0，意味着动画周期为0，也就是没有任何动画效果 
（3）animation-timing-function：与transition-timing-function一样 
（4）animation-delay：在开始执行动画时需要等待的时间 
（5）animation-iteration-count：定义动画的播放次数，默认为1，如果为infinite，则无限次循环播放 
（6）animation-direction：默认为nomal，每次循环都是向前播放，（0-100），另一个值为alternate，动画播放为偶数次则向前播放，如果为基数词就反方向播放 
（7）animation-state：默认为running，播放，paused，暂停 
（8）animation-fill-mode：定义动画开始之前和结束之后发生的操作，默认值为none，动画结束时回到动画没开始时的状态；forwards，动画结束后继续应用最后关键帧的位置，即保存在结束状态；backwards，让动画回到第一帧的状态；both：轮流应用forwards和backwards规则。

`@keyframes`
CSS3的animation制作动画效果主要包括两部分：1. 用关键帧声明一个动画，2.在animation调用关键帧声明的的动画。

我们先来看个例子：
![](https://ttarea.com/post-images/1619150620116.gif)
这个动画明显由两个动作组成：蓝变绿，绿变橙。

两个连续的线段有三个关键点，两个连续的动作必然也有三个**关键帧**（keyframe），我们通过定义这三个关键帧（起点，蓝变绿，终点）来定义这两个动作。

我们来看一下这个动画的 CSS 代码
```
.blueball {
  ...
  background-color: #0080ff; /* 蓝色 */
  position: relative;
  animation: forward 4s; /* 执行 forward 动画，耗时 4s */
}

/* 三个关键帧： 起点（蓝色），蓝变绿，终点（橙色） */
@keyframes forward {
  0% {left: 0; }
  50% {left: 200px; background-color: #009a61;}
  100% {left: 400px; background-color: orange;}
}
```
@keyframes中的百分比，代表时间尺度上的百分比 ，后面跟着的是此时间点的样式。

同样的，animation: forward 4s;也是简写形式，完整的 animation 属性包括（冒号后为默认值）
```
animation-name: none; /* 动画名称 */
animation-duration: 0; /* 耗时 */
animation-timing-function: ease; /* 效果，默认缓入缓出 */
animation-delay: 0; /* 延迟 */
animation-iteration-count: 1; /* 循环次数 */
animation-direction: normal; /* 正放 or 倒放 */
```
CSS 动画的知识点，就这么些，但目前看来，我们只能动动元素的大小，位置，透明度，颜色什么的，有点单调。为了给动画加点料，下面介绍一下 `transform`

## 3. transform
transform 直译为变换，虽然名字和 transition 有点像，但是它和动画无关。transition 是一个状态到另一个状态的变化过程，而 transform 仅仅是**静止的最终状态**。

例如：如果想把蓝球从水平排列中，向下移动100px
![](https://ttarea.com/post-images/1619151581634.jpg)

即可以使用**相对定位**
```
.blueball {
  ...
  position: relative;
  top: 100px;
}
```
也可以使用 **transform**
```
.blueball {
  ...
  transform: translateY(100px);
}
```
它们的效果是一致的，都是把蓝球向下移动 100px

除了位移，tranform 还可以做很多变换
* matrix 矩阵变换
* translate 位移
* scale 缩放
* rotate 绕轴旋转
* skew 倾斜
* perspective 透视距离

`这里有几点需要说明:`
### 1. transform 原点位于元素中心
我们知道 CSS 元素默认的坐标系，原点在左上角；而 transform 变换的原点位于元素中心
![](https://ttarea.com/post-images/1619151713261.jpg)
图中亦标识了绕轴旋转（rotate）时的默认方向，为了便于记忆，你可以理解为：你站在原点位置，看向正轴方向，默认旋转方向为**逆时针旋转**

### 2. 理解 skew（倾斜）
skew 倾斜变换并不直观，为了便于记忆，你可以这样想像：
你拉住了矩形的`右下角`，左右横拉，即是沿X轴倾斜
![](https://ttarea.com/post-images/1619151914829.jpg)
同样的，skewY 即是抓住右下角上下拉
![](https://ttarea.com/post-images/1619151918106.jpg)

### 3. 理解 perspective（透视）
perspective 表示透视距离，可简单理解为眼睛离屏幕的距离
```
transform: translateZ(100x); /* 向Z轴正向移动 100px */
perspective: 200px; /* 透视距离 200px */
```
我们用一张图来说明一下
![](https://ttarea.com/post-images/1619151963081.jpg)
* d 为透视距离 200px
* Z 为元素在Z轴上移动的距离 100px
* 虚线的圆表示元素实际的位置
* 而蓝色的圆，是元素在屏幕上的投影，也是最终展示的效果




# 15. CSS性能优化
>下面我们开始介绍**实践型**的3个优化技巧，先从首屏关键CSS开始。

## 1. 内联首屏关键CSS（Critical CSS）
性能优化中有一个重要的指标——`首次有效绘制`（First Meaningful Paint，简称FMP）即指页面的首要内容（primary content）出现在屏幕上的时间。这一指标影响用户看到页面前所需等待的时间，而**内联首屏关键CSS（即Critical CSS，可以称之为首屏关键CSS）**能减少这一时间。

大家应该都习惯于通过link标签引用外部CSS文件。但需要知道的是，将CSS直接内联到HTML文档中能使CSS更快速地下载。而使用外部CSS文件时，需要在HTML文档下载完成后才知道所要引用的CSS文件，然后才下载它们。所以说，内联CSS能够使浏览器开始页面渲染的时间提前，因为在HTML下载完成之后就能渲染了。

既然已经知道内联首屏关键CSS能够优化性能了，那下一步就是如何确定首屏关键CSS了。显然，我们不需要手动确定哪些内容是首屏关键CSS。Github上有一个项目Critical CSS4，可以将属于首屏的关键样式提取出来，大家可以看一下该项目，结合自己的构建工具进行使用。当然为了保证正确，大家最好再亲自确认下提取出的内容是否有缺失。

## 2. 异步加载CSS
CSS会阻塞渲染，在CSS文件请求、下载、解析完成之前，浏览器将不会渲染任何已处理的内容。有时，这种阻塞是必须的，因为我们并不希望在所需的CSS加载之前，浏览器就开始渲染页面。那么将首屏关键CSS内联后，剩余的CSS内容的阻塞渲染就不是必需的了，可以使用外部CSS，并且异步加载。

第一种方式是使用JavaScript动态创建样式表link元素，并插入到DOM中。
```
// 创建link标签
const myCSS = document.createElement( "link" );
myCSS.rel = "stylesheet";
myCSS.href = "mystyles.css";
// 插入到header的最后位置
document.head.insertBefore( myCSS, document.head.childNodes[ document.head.childNodes.length - 1 ].nextSibling );
```
现在，`rel="preload"`这一Web标准指出了如何异步加载资源，包括CSS类资源。
```
<link rel="preload" href="mystyles.css" as="style" onload="this.rel='stylesheet'">
```
注意，`as`是必须的。忽略`as`属性，或者错误的`as`属性会使`preload`等同于`XHR`请求，浏览器不知道加载的是什么内容，因此此类资源加载**优先级会非常低**。

看起来，rel="preload"的用法和上面两种没什么区别，都是通过更改某些属性，使得浏览器异步加载CSS文件但不解析，直到加载完成并将修改还原，然后开始解析。

但是它们之间其实有一个很重要的不同点，那就是使用`preload`，比使用不匹配的media方法能够更早地开始加载CSS。所以尽管这一标准的支持度还不完善，仍建议优先使用该方法。

## 3. 文件压缩
性能优化时有一个最容易想到，也最常使用的方法，那就是文件压缩，这一方案往往效果显著。

文件的大小会直接影响浏览器的加载速度，这一点在网络较差时表现地尤为明显。相信大家都早已习惯对CSS进行压缩，现在的构建工具，如webpack、gulp/grunt、rollup等也都支持CSS压缩功能。压缩后的文件能够明显减小，可以大大降低了浏览器的加载时间。


>前面已经说完了实践型的3个优化技巧，下面我们介绍下**建议型**的3个技巧。
## 1. 有选择地使用选择器
我们在使用选择器时，只需要记住以下几点，其他的可以全凭喜好。
1. 保持简单，不要使用嵌套过多过于复杂的选择器。
2. 通配符和属性选择器效率最低，需要匹配的元素最多，尽量避免使用。
3. 不要使用类选择器和ID选择器修饰元素标签，如h3#markdown-content，这样多此一举，还会降低效率。
4. 不要为了追求速度而放弃可读性与可维护性。

## 2. 优化重排与重绘
### 1. 减少重排
重排会导致浏览器重新计算整个文档，重新构建渲染树，这一过程会降低浏览器的渲染速度。如下所示，有很多操作会触发重排，我们应该避免频繁触发这些操作。
1. 改变font-size和font-family
2. 改变元素的内外边距
3. 通过JS改变CSS类
4. 通过JS获取DOM元素的位置相关属性（如width/height/left等）
5. CSS伪类激活
6. 滚动滚动条或者改变窗口大小

值得一提的是，某些CSS属性具有更好的重排性能。如使用Flex时，比使用inline-block和float时重排更快，所以在布局时可以优先考虑`Flex`。

### 2. 避免不必要的重绘
当元素的外观（如color，background，visibility等属性）发生改变时，会触发重绘。在网站的使用过程中，**重绘是无法避免的**。不过，浏览器对此做了优化，它会将多次的重排、重绘操作合并为一次执行。不过我们仍需要**避免不必要的重绘**，如页面滚动时触发的hover事件，可以在滚动的时候禁用hover事件，这样页面在滚动时会更加流畅。

如果需要在移动端访问的，最好将速度限制更低，因为移动端的性能往往更差。

## 3. 不要使用@import
最后提一下，不要使用@import引入CSS，相信大家也很少使用。

不建议使用@import主要有以下两点原因。

首先，使用@import引入CSS会影响浏览器的并行下载。使用@import引用的CSS文件只有在引用它的那个css文件被下载、解析之后，浏览器才会知道还有另外一个css需要下载，这时才去下载，然后下载后开始解析、构建render tree等一系列操作。这就导致浏览器无法并行下载所需的样式文件。

其次，多个@import会导致下载顺序紊乱。在IE中，@import会引发资源文件的下载顺序被打乱，即**排列在@import后面的js文件先于@import下载，并且打乱甚至破坏@import自身的并行下载。**

所以不要使用这一方法，使用link标签就行了。


# 16. 移动端dom优化
## 1. 原因
从上面可以看出随着dom的增加 ，HTMLLIElement占用的内存逐渐增加，这是由于下拉加载过程中在页面中添加了LI元素。
1. Shallow Size：
Shallow size就是对象本身占用内存的大小，不包含其引用的对象。
* 常规对象（非数组）的 Shallow size 由其成员变量的数量和类型决定。
* 数组的shallow size有数组元素的类型（对象类型、基本类型）和数组长度决定。

2. Retained Size:
* 对象的Retained Size = 对象本身的Shallow Size + 对象能直接或间接访问到的对象的Shallow Size 
* 也就是说 Retained Size 就是该对象被 GC（Garbage Collection） 之后所能回收内存的总和。
这里GC是指垃圾回收，浏览器的主流垃圾回收机制时标记清除（ie中存在引用计数清除）。

**除了dom节点内存增大，监听事件占用的内存也逐渐加大**
**随着内存的占用增大，到一定程度时，网页就出现了卡顿。**

## 2. 解决办法：
1. **重复利用dom结构，创建虚拟列表**
2. **使用事件委托，将监听事件绑定到父元素上**

**虚拟 dom 渲染**：长列表方案，手动假分页，只渲染当前和上下两页数据
**清理页面**：删除不必要或者暂时隐藏的元素，调整图片大小。如果可以的话，调整一下页面设计，两数据分开展示，避免一次渲染过多。可以考虑滚动加载

## 3. 实现思路
因为 DOM 元素的创建和渲染需要的时间成本很高，在大数据的情况下，完整渲染列表所需要的时间不可接收。其中一个解决思路就是在任何情况下只对「可见区域」进行渲染，可以达到极高的初次渲染性能。

虚拟列表指的就是「可视区域渲染」的列表，重要的基本就是两个概念：
* 可滚动区域：假设有 1000 条数据，每个列表项的高度是 30，那么可滚动的区域的高度就是 1000 * 30。当用户改变列表的滚动条的当前滚动值的时候，会造成可见区域的内容的变更。
* 可见区域：比如列表的高度是 300，右侧有纵向滚动条可以滚动，那么视觉可见的区域就是可见区域。

实现虚拟列表就是处理滚动条滚动后的可见区域的变更，其中具体步骤如下：
1. 计算当前可见区域起始数据的 startIndex
2. 计算当前可见区域结束数据的 endIndex
3. 计算当前可见区域的数据，并渲染到页面中
4. 计算 startIndex 对应的数据在整个列表中的偏移位置 startOffset，并设置到列表上

![](https://ttarea.com/post-images/1627194719639.png)
# 17. CSS画一个三角形
**CSS**
~~~
<style type="text/css">
        /* css3绘制三角形 */
        .triangle{
            width: 0px;                           /*设置宽高为0，所以div的内容为空，从才能形成三角形尖角*/
            height: 0px;
            border-bottom: 200px solid #00a3af;
            border-left: 200px solid transparent;    /*transparent 表示透明*/
            border-right: 200px solid transparent;
        }
    </style>
~~~
**Html**
~~~
 <div class="triangle"></div>
~~~
![](https://ttarea.com/post-images/1614860077842.png)

# 18. 1像素边框问题
## 18.1 为什么1px变粗了？
UI设计师要求的1px是指设备的物理像素1px，而CSS里记录的像素是逻辑像素，它们之间存在一个比例关系，可以用javascript中的window.devicePixelRatio来获取

 移动端开发常需要在html的header里添加如下一句：
 ~~~
 <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
~~~
这句话定义了本页面的viewport的宽度为设备宽度，初始缩放值和最大缩放值都为1，并禁止了用户缩放。

## 18.2 修改方案
`viewport + rem 方案`

该方案是对上述方案的优化，整体思路就是利用viewport + rem + js 动态的修改页面的缩放比例，实现小于1像素的显示。在页面初始化时，在头部引入原始默认状态如下：
~~~
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">  
<meta name="viewport" id="WebViewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"> 
~~~
接下来的任务就是js的动态修改缩放比 以及 实现rem根元素字体大小的设置。
~~~
var viewport = document.querySelector("meta[name=viewport]")
if (window.devicePixelRatio == 1) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no')
} 
if (window.devicePixelRatio == 2) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no')
} 
if (window.devicePixelRatio == 3) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=0.333333333, maximum-scale=0.333333333, minimum-scale=0.333333333, user-scalable=no')
} 

var docEl = document.documentElement;
var fontsize = 10 * (docEl.clientWidth / 320) + 'px';
docEl.style.fontSize = fontsize;
~~~

`transform: scale(0.5) 方案 - 推荐: 很灵活`
1. 设置height: 1px，根据媒体查询结合`transform`缩放为相应尺寸。
~~~
div {
    height:1px;
    background:#000;
    -webkit-transform: scaleY(0.5);
    -webkit-transform-origin:0 0;
    overflow: hidden;
}
~~~
2. 用`::after`和`::befor`,设置`border-bottom：1px solid #000`,然后在缩放`-webkit-transform: scaleY(0.5)`;可以实现两根边线的需求
~~~
div::after{
    content:'';width:100%;
    border-bottom:1px solid #000;
    transform: scaleY(0.5);
}
~~~
3. 用`::after`设置`border：1px solid #000; width:200%; height:200%`,然后再缩放`scaleY(0.5)`; 优点可以实现圆角，京东就是这么实现的，缺点是按钮添加active比较麻烦。
~~~
.div::after {
    content: '';
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #bfbfbf;
    border-radius: 4px;
    -webkit-transform: scale(0.5,0.5);
    transform: scale(0.5,0.5);
    -webkit-transform-origin: top left;
}
~~~

# 19. Background-size
![](https://ttarea.com/post-images/1633590448507.jpg)
读了还是不懂，那么看下面的例子：

1. `contain`，按比例调整背景图片，使得其图片宽高比自适应整个元素的背景区域的宽高比，因此假如指定的图片尺寸过大，而背景区域的整体宽高不能恰好包含背景图片的话，那么其背景某些区域可能会有空白。
![](https://ttarea.com/post-images/1633590741291.jpg)   
2. `cover`，按比例调整背景图片，这个属性值跟contain正好相反，背景图片会按照比如自适应铺满整个背景区域。假如背景区域不足以包含背景图片的话，那么背景图片就会被咔嚓。
![](https://ttarea.com/post-images/1633590746437.jpg)

# 20. CSS文件放入<head>或<body>中有什么区别
## 1. 通常，css文件会放在<head>里面。
之所以建议这样做，是因为当你在前面声明css时<body>开始时，你的样式实际上已经加载了。所以用户很快就会看到屏幕上出现的东西(例如背景色)。如果没有，用户会在CSS到达用户之前看到一段时间的空白屏幕。
此外，如果将样式放在<body>，当已声明的样式被解析时，浏览器必须重新呈现页面(加载时新的和旧的)。

## 2. 渲染角度
写在head标签中利于浏览器逐步渲染（resources downloading->CSSOM+DOM->RenderTree(composite)->Layout->paint）

写在body标签后由于浏览器以逐行方式对html文档进行解析，当解析到写在尾部的样式表（外联或写在style标签）会导致浏览器停止之前的渲染，等待加载且解析样式表完成之后重新渲染，在windows的IE下可能会出现FOUC现象（即样式失效导致的页面闪烁问题）


# 21. 移动端适配
**meta标签到底做了什么事情**
做过移动端适配的小伙伴一定有遇到过这行代码：
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
但是，很多小伙伴只是感性的认识：噢，我加了这行代码，然后页面的宽度就会跟我的设备宽度一致。然而，这种理解是很片面的。那么，这句话的本质到底是什么呢？

不急，我们先往下面看，这里先留个悬念。

## 1. 几个专有名词和单位
这里，我们先来辨析一下在适配的时候经常会遇到的一些名词、数值单位。

首先，先来看一下**物理像素**。
以iphone6为例，可知道：
* **分辨率**：1334pt x 750pt
指的是屏幕上垂直有1334个物理像素，水平有750个物理像素。
* **屏幕尺寸**：4.7in
注意英寸是长度单位，不是面积单位。4.7英寸指的是屏幕对角线的长度，1英寸等于2.54cm。
* **屏幕像素密度**：326ppi
指的是每英寸屏幕所拥有的像素数，在显示器中，dpi=ppi。dpi强调的是每英寸多少点。同时，**屏幕像素密度=分辨率/屏幕尺寸**

接着，我们来看一下其他的单位。
* **设备独立像素**：设备独立像素，不同于设备像素（物理像素），它是虚拟化的。比如说css像素，我们常说的10px其实指的就是它。需要注意的是，**物理像素**开发者是无法获取的，它是自然存在的一种东西，该是多少就是多少。
* **设备像素比**：缩写简称dpr，也就是我们经常在谷歌控制台移动端调试顶端会看到的一个值。**设备像素比 = 设备像素 / css像素**（垂直方向或水平方向）。可以通过JS来获取：`window.devicePixelRatio`

## 2. PC和移动端不同的视口
**注：以下涉及的像素均为CSS像素。并且默认不考虑缩放。**

### 1. 布局视口
写过css的小伙伴应该知道，我们在`html、body`设置`width:100%;height:100%`;的时候，它并不是无效的。我们都知道`100%`这种百分数应该是继承父元素而来的。那在这里是继承哪里的呢？

在**PC浏览器**中，有一个用来约束CSS布局视口的东西，又叫做初始包含块。这也就是所有宽高继承的由来。除去`margin`、`padding`，布局视口和浏览器可视窗口宽度是一致的，同时也和浏览器本身的宽度一致。

但是在移动端，就大不一样了。
以下的例子是在不加`meta`标签的前提下进行演示的。
假如我们现在做一个二八分的左右布局，那么如果在PC端上面的话，显示的效果非常完美，这没什么好说的。
那如果是在手机端呢，这里以iphone6为例子来讲解：
图例如下：
![](https://ttarea.com/post-images/1628424884711.png)
代码如下：
```
* {
    margin: 0;
    padding: 0;
}

html,
body {
    height: 100%;
    width: 100%;
}

.left {
    float: left;
    width: 20%;
    height: 100%;
    background: red;
}

.right {
    float: right;
    width: 80%;
    height: 100%;
    background: green;
}
----
<body>
    <div class="left"></div>
    <div class="right"></div>
</body>
```
这里我们会看到，为什么body的宽度是980px，而浏览器的宽度只有375px，那么这个980px到底是从哪里来的呢？
其实，这里的980px就是移动端所谓的**布局视口**了。

在移动端，默认的情况下，布局视口的宽度是要远远大于浏览器的宽度的。这两个视口不同于PC端，是**相互独立存在**的。为什么呢？试想一下，如果一个网页不对移动端进行适配，用户进行阅读的时候，如果默认情况下布局视口的宽度等于浏览器宽度，那是不是展示起来更加的不友好。也就是说，如果一个`div`的宽度为20%，那么它在布局视口宽度为`980px`的时候，展示给用户的像素还有196px，而如果宽度只有`375px`的情况下，宽度只有`75px`，展示的大小相差特别大。

所以，浏览器厂商为了让用户在小屏幕下网页也能够显示地很好，所以把布局视口宽度设置地很大，一般在`768px ~ 1024px`之间，最常见的宽度是`980px`。这个宽度可以通过`document.documentElement.clientWidth`得到。

### 2. 视觉视口
对于视觉视口来说，这个东西是呈现给用户的，它是用户看到网页区域内CSS像素的数量。由于用户可以自行进行缩放控制，所以这个视口并不是开发者需要重点关注的。

值得注意的是，在**移动端**缩放不会改变布局视口的宽度，当缩小的时候，屏幕覆盖的css像素变多，视觉视口变大，反之亦然。
而在**PC端**，缩放对应布局宽度和视觉窗口宽度都是**联动**的。而浏览器宽度本身是固定的，无论怎么缩放都不受影响。

如果对上面的宽度还是很乱，那么这里有一个表格可以帮助你理清思路。
以下表格横向都以浏览器窗口的宽度作为基准：
对于PC端来说：
![](https://ttarea.com/post-images/1628425034633.png)
对于移动端来说：
![](https://ttarea.com/post-images/1628425041492.png)

### 3. 理想视口
以上，布局视口很明显对用户十分的不友好，完全忽略了手机本来的尺寸。

所以苹果引入了理想视口的概念，它是对设备来说最理想的布局视口尺寸。理想视口中的网页用户最理想的宽度，用户进入页面的时候不需要缩放。

那么很明显，所谓的理想宽度就是浏览器（屏幕）的宽度了。
所以就有了下面的这段代码：
```
<meta name="viewport" content="width=device-width">
```
然而，这段代码其实也并不完美，在IE浏览器中，由于横屏竖屏的切换会对其造成影响，为了解决这个兼容性的问题，最后再加上一句，就有了现在的：
```
<meta name="viewport" content="width=device-width,initial-scale=1">
```
`width=device-width` 这句代码可以把布局视口设置成为浏览器（屏幕）的宽度。

`initial-scale=1` 的意思是初始缩放的比例是1，使用它的时候，同时也会将布局视口的尺寸设置为缩放后的尺寸。而缩放的尺寸就是基于屏幕的宽度来的，也就起到了和`width=device-width`同样的效果。

另外，值得一提的是，我们在进行媒体查询的时候，查询的宽度值其实也是布局视口的宽度值。

## 3. Retina屏幕&普通屏幕，模糊的由来
### 1. dpr的具体表现
有时候我们会发现，当我们在适某一机型的时候，显示上没什么问题。但是一旦我换到另外一部手机，发现出现了模糊的情况，尤其以图片更为显著。

其实这个问题，就是涉及到了上面讲到的一个属性：**设备像素比**，即我们经常说的**dpr**。下面先来看**dpr**的表现：

假设现在有一台iphone6，那么它的设备独立像素是375x667，dpr为2，尺寸是4.7in，那么物理像素就是750x1334。
同样的我们也有一台不知名的设备，它的设备独立像素刚好也是375x667，尺寸也是4.7in，但是dpr为1，此时的物理像素就是375x667。

于是，它们的屏幕表现如下：
![](https://ttarea.com/post-images/1628425204251.png)
在不同的屏幕上，无论是普通屏幕还是retina屏幕，**css像素所呈现的大小是一致的**。（如果不理解这句话，可以写一个2px的正方形使用谷歌控制台移动设备调试，在不同的设备之间来回切换，你会发现大小其实是一样的。一开始我总以为这个css像素的实际宽高因为受到dpr的影响而在不同设备上的长宽是不一致的。）
不同的是，1个css像素对应（覆盖）的物理像素个数。

所以，如果我们想要在这两个屏幕显示这么一个css样式：
```
width: 2px;
heigth: 2px;
```
在普通屏幕下，也就是dpr为1的屏幕中，1个css像素对应（覆盖）的是一个物理像素。在retina屏幕下，1个css像素对应（覆盖）的是4个物理像素。换句话说，就是dpr为2的设备。看下面这张图：
![](https://ttarea.com/post-images/1628425251728.png)
浅显的理解就是可以看作是2cmx2cm的正方形被切割成四块，然后遇到dpr为2的时候，被切割的四块又被分别切割成四块，但是总面积不变。

### 2. 模糊的产生
知道了1个css像素覆盖的物理像素可能不同，就好理解为什么会出现模糊的情况了。

这里又讲到一个名词：**位图像素**。

位图像素是栅格图像（如：png,jpg,gif等）最小的数据单元。每一个位图像素都包含着一些自身的显示信息。（如：显示位置，颜色值，透明度等）

理论上来说，**1个位图像素对应1个物理像素，图片才能达到完美清晰的展示**。

但是上面说过，在retina屏幕上，会出现1个位图像素对应多个物理像素。

还是以iphone6为例，1个位图像素对应4个物理像素。由于单个位图像素已经是最小的数据单位了，它不能再被进行切割。于是为了能够显示出来，就只能就近取色，从而导致所谓的图片模糊问题。如下：
![](https://ttarea.com/post-images/1628425292725.png)

### 3. 如何解决
很明显，由于位图像素不够分而产生模糊的情况，解决的办法十分简单，就是使用跟dpr同个倍数大小的图片。比如iphone6，一个200x300的`img`标签，原图就要提供400x600的大小。

那么当加载到`img`标签中，浏览器会自动对每1px的css像素减半，可以理解为此时还是维持着1:1的css像素:物理像素，不产生模糊。

这个做法其实就是手淘团队在做retina适配的一个重要的原理之一，后面会讲到，这里先放着不说。

### 4. 其他
反向思考一下，如果普通屏幕，也就是dpr为1的屏幕，也使用了两倍的图片，会发生什么样的情况呢？

很明显，在普通屏幕下，200×300的`img`标签，所对应的物理像素个数就是200×300个，而两倍图片的位图像素个数则是200x300x4，于是就出现一个物理像素点对应4个位图像素点，所以它的取色也只能通过一定的算法进行缩减，显示结果就是一张只有原图像素总数四分之一，肉眼看上去虽然图片不会模糊，但是会觉得有点色差。（其实就是模糊的逆向过程）
用图片来表示就是：
![](https://ttarea.com/post-images/1628425382498.png)
这里摘取了网上一篇博文的demo来阐述上面所说的问题。
![](https://ttarea.com/post-images/1628425395928.png)
以上是一张100x100的图片，分别放在了100x100，50x50，25x25的容器中，在retina屏幕下面的显示效果。

通过取色器放大镜可以看出边界像素点的差别：
* 在图一中，边界像素点就近取色，色值介于红白之间，偏淡，图片看上去会模糊(可以理解为图片拉伸)。
* 在图二中，图片正常，很清晰。
* 在图三中，边界像素点就近取色，色值介于红白之间，偏浓，图片看上去有色差。

## 4. 手淘团队flexible.js布局
现今，适配手机端的传统rem布局已经逐步被手淘团队的一套flexible布局代替。
具体的实现方式以及细节这里也不铺开来说，具体参考w3cplus的一篇文章，很容易读懂和理解。
![](https://ttarea.com/post-images/1628734320201.jpg)
这里我更想分析一下flexible.js做法的意义和原因。
读过文章之后，相信大家应该对整个开发适配的流程比较熟悉了。
假设现在要适配一个iphone6的设备。上面已经说过了iphone6的各个参数，这里不再赘述，需要的自行上移查看。
**于是**：
1. 设计师给了一个750px宽度的设计稿（注意这里是750px而不是375px）
2. 前端工程师用750px的这个比例开始还原
3. 把宽高是px的转换成rem
4. 字体使用px而不使用rem
5. flexible.js会自动判断dpr进行整个布局视口的放缩
### 1. rem布局和字体的处理
从flexible.js中可见，在宽高中使用的是rem，这是为了保证在不同宽度尺寸的设备中能够保证布局的等比例缩放。

而为什么字体不使用rem而是采用px呢？

首先，用过rem单位的小伙伴都会发现，使用rem后由于不同的尺寸，换算之后出现各种奇奇怪怪的数值，最为明显的就是更多的小数位，比如`13.755px`之类的数值。在浏览器中，各浏览器中对小数点的计算存在偏差，而且有些带小数的`font-size`值在特定的浏览器显示并不够清晰。

其次，我们希望在小屏幕下面显示跟大屏幕同等量的字体。并且如果使用rem的话，那么由于等比例的存在，在小屏幕下就会存在小屏幕字体更小的情况，不利于我们更好的去阅读，违背了适配的初衷。所以，对于字体的适配，更好的做法就是使用px和媒体查询来进行适配。

所以，也就不难解释为什么要对`font-size`进行放大的处理了，如下的sass代码：
```
@mixin font-dpr($font-size) {
    font-size: $font-size;
    [data-dpr="2"] & {
        font-size: $font-size * 2;
    }
    [data-dpr="3"] & {
        font-size: $font-size * 3;
    }
}
```
由于retina屏幕下dpr的不同，我们又想显示的字体一样大，于是就给字体再增大dpr的倍数，这样当缩小dpr倍的时候，那么字体也就和设计稿所示的大小一样大了，在不同的手机中显示的大小也是一致的。

### 2. Retina屏幕下的处理与安卓手机的适配
从flexible.js的代码中可以知道，flexible布局仅仅只是针对iPhone进行适配，而默认所有的安卓设备都强制性设置dpr为1。

于是，因为这个缘故，很多小伙伴可能就会产生这样的问题：**为什么安卓不用retina屏幕，安卓下面是不是就不会有模糊的问题？**

其实不然，**模糊的本质是因为dpr**，而安卓手机不同的设备的dpr也是不尽相同的。也就是说，安卓手机下也存在模糊的情况。只不过它的屏幕不叫retina屏幕，没有这个叫法，所以很多小伙伴都误认为安卓手机没有这个毛病。

那么问题又来了？既然也有模糊的毛病，那么为什么安卓手机不进行适配呢？

问题就在这里了，有兴趣的小伙伴可以去看一下大中华的安卓手机，dpr参数五花八门，从1到4，连1.75、2.75这种奇葩的数字也有，所以个人觉得权衡之下，直接简单“粗暴”把安卓手机全部设置为1，是效率和收益更高的做法。

当然，也有人进行了flexible.js的改进，就是对dpr比较正常的安卓手机进行适配，也就是说只适配dpr为整数的安卓设备。对于那些奇葩的dpr为1.75的设备直接忽略。实现这个并不难，有兴趣的小伙伴们可以试下。

## 5. 适配方案：
上面讲了一些基础概念，下面讲具体适配。

对于ui设计师给的一张设计稿，怎么将其还原到页面上？对于不同手机屏幕，其dpr不同，屏幕尺寸也不同，考虑到各种情况，有很多适配方案，所以不同的适配方案，实现方法不同，处理复杂度也不同，还原程度也不同。
### 方案一：
固定高度，宽度自适应。
这种方案是目前使用较多的方案，也是相对较简单的实现方案：
该方法使用了理想视口：
```
<meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
```
垂直方向使用固定的值，水平方向使用弹性布局，元素采用定值、百分比、flex布局等。这种方案相对简单，还原度也非常低。

### 方案二：
固定布局视口宽度，使用viewport进行缩放

固定布局视口，宽度设置固定的值，总宽度为640px，根据屏幕宽度动态生成viewport。（设计稿应该是640px的）
```
<meta name="viewport" content="width=640, minimum-scale = 0.5625, maximum-scale = 0.5625, target-densitydpi=device-dpi">
```
这种方式布局如荔枝FM的网页宽度始终为640px。缩放比例scale为：
```
var scale = window.screen.width / 640
```
设计稿为640px时，正好可以1:1以px来写样式。但是1px所对应的物理像素就不一定是1了。
```
(window.screen.width * dpr) / 640   // 1px对应的物理像素
```
![](https://ttarea.com/post-images/1628426387739.png)

### 方案三：
根据不同屏幕动态写入font-size，以rem作为宽度单位，固定布局视口。
如网易新闻：
```
<meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
```
以640px设计稿和750px的视觉稿，网易这样处理的：
```
var width = document.documentElement.clientWidth;   // 屏幕的布局视口宽度
var rem = width / 7.5;                              // 750px设计稿将布局视口分为7.5份
var rem = width / 6.4;                              // 640px设计稿将布局视口分为6.4份
```
这样不管是750px设计稿还是640px设计稿，1rem 等于设计稿上的100px。故px转换rem时：
```
rem = px * 0.01;
```
在750px设计稿上：
```
75px 对应 0.75rem, 距离占设计稿的10%；

在ipone6上：
width = document.documentElement.clientWidth = 375px；
rem = 375px / 7.5 = 50px;
0.75rem = 37.5px;   (37.5/375=10%；占屏幕10%)
                     
在ipone5上：
width = document.documentElement.clientWidth = 320px；
rem = 320px / 7.5 = 42.667px;
0.75rem = 32px; (32/320=10%；占屏幕10%)
```
故对于设计稿上任何一个尺寸换成rem后，在任何屏下对应的尺寸占屏幕宽度的百分比相同。故这种布局可以百分比还原设计图。
![](https://ttarea.com/post-images/1628426475710.png)

### 方案四：
以rem作为宽度单位，动态写入viewport和font-size进行缩放。

根据设置的dpr设置font-size。如：
```
document.documentElement.style.fontSize = 50 * dpr;
// dpr 为设置的设备像素比。（注意不是设备自身的设备像素比，而是认为设置的dpr）
```
这种情况下，dpr = 1时，1rem = 50px;
dpr = 2时， 1rem = 100px;
当设计以iphone6为标准，出750px的设计稿时，此时dpr=2，故1rem 等于100px，将图上的尺寸转换为rem非常方便，除以100就行。

所以该方案，1rem在所有屏幕上对应的肉眼距离相同，故不同屏幕下，总的rem数不同，大屏下总的rem数大于小屏下，如iphone6下，总宽度为7.5rem，iphone5下，总宽度为6.4rem。**故此方案不能百分比还原设计稿，故写样式时，对于大块元素应该用百分比，flex等布局，不能直接用rem。**
![](https://ttarea.com/post-images/1628426585110.png)

### 方案五：
根据不同屏幕动态写入font-size和viewport，以rem作为宽度单位
将屏幕分为固定的`块数10`：
```
var width = document.documentElement.clientWidth;   // 屏幕的布局视口宽度
var rem = width / 10;                               // 将布局视口分为10份
```
这样在任何屏幕下，总长度都为10rem。1rem对应的值也不固定，与屏幕的布局视口宽度有关。
对于动态生成viewport，他们原理差不多，根据dpr来设置缩放。看看淘宝的：
```
var devicePixelRatio = window.devicePixelRatio;
var isIPhone = window.navigator.appVersion.match(/iphone/gi);
var dpr,scale;
if (isIPhone) {
  if (devicePixelRatio >=3) {
    dpr = 3;
  } else if (devicePixelRatio >=2) {
    dpr = 2;
  } else {
    dpr = 1;
  }
} else {
  dpr = 1;
}
scale = 1 / dpr;
```
淘宝只对iphone做了缩放处理，对于android所有dpr=1，scale=1即没有缩放处理。

此方案与方案三相似，只是做了viewport缩放，能百分比还原设计稿。
![](https://ttarea.com/post-images/1628426655488.png)

### 适配中要解决的问题 ：
移动端适配最主要的是使在不同屏幕下不用缩放页面就能正常显示整个页面。以上方案都完成了这一需求。其次有几个需求：
1. 解决高清屏下1px的问题，其实有很多hack方法，这里只讲了缩放视口。先将布局视口设置为高清屏的物理像素。这样css中1px就是1个物理像素，这样看到的线条才是真正的1px。但是此时视口宽度大于设备的宽度，就会出现滚动条。故对视口进行缩放，使视口宽度缩放到设备宽度。
淘宝团队在处理安卓端的缩放存在很多问题，所以dpr都做1处理，所以安卓端就没有解决1px的问题。
2. 在大屏手机中一行看到的段落文字应该比小屏手机的多。
由于淘宝和网易新闻rem都是百分比，故如果用rem一行显示的文字个数应该是相同的。故对于段落文本不能用rem作为单位，应该用px处理，对于不同的dpr下设置不同的字体。

## 6. 响应式与自适应的选择
最后，对于响应式和自适应的区别，网上有各种各样的解释。

个人认为，其实没必要把它讲得那么复杂，知乎上有个小伙伴讲我觉得就很白话文：
>响应式针对的是不同分辨率设备而进行的适配式设计，以利用@media规则为主要手段，而自适应则忽略@media以比例布局为主，目的是适应不同的浏览器窗口大小。

于是我们会发现，现今大型网站，例如说淘宝网，已经没有做响应式了。什么意思呢？

我们会发现，淘宝网手机端和网页端使用的是两个域名，也就是说，不同的客户端已经不再共用一套dom结构了。而是区分开来做自适应。然后每次用户访问的时候它就根据客户端的类型重定向。

为什么呢？

试想一下淘宝这种大型网站，一个分页下的商品条目特别多，并且每个商品条目的dom结构又十分复杂，而且pc端往往显示的信息是要比手机端更多的。如果不分开做两套，而是直接用响应式的话，那么pc端上显示的很多dom就要在手机端上隐藏，结果这些dom都没有被用到，但是却加载了。在这个流量和速度至上的时代，代码冗余先不说，多加载的这些无用的代码而消耗的流量，从某种意义上来说就已经损失了很多的效益。

## 7. 最后
考虑到兼容性的问题，原先我们在文章头部说到的那段代码：
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
从`Chrome32+`版本开始是会默认禁用用户缩放的，但是考虑到兼容大部分设备，还是要加上其他设置，让`meta`标签能够有更好的容错性。也就是下面这段代码：
```
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, 
 user-scalable=no;">
 ```
需要注意的是，在ios10+以上，尽管开发者设置了`user-scalable=no`，`Safari`还是允许用户通过手势来缩放。（安卓手机各大厂商的内置浏览器也逐渐开放用户缩放，即使使用`meta`标签进行设置）

解决的方法也很简单，只需要检测`touch`相关事件来阻止事件的触发即可。
```
window.onload = function() {
    // 同时按下两个手指
    document.addEventListener('touchstart', function(event) {
        if(event.touches.length > 1) {
            event.preventDefault()
        }
    })
    var lastTouchEnd = 0;
    // 特别注意300ms时差的设置
    document.addEventListener('touchend', function(event) {
        var now = (new Date()).getTime();
        if(now-lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    })
}
```
以上，就是本文的全部啦。

文章有借鉴，借鉴的链接都会在这里放出来。

前辈们的经验和知识很宝贵，我们需要做的，是站在巨人的肩膀上，去提炼这些东西，有自己更好的理解、思考和开拓新知识面。