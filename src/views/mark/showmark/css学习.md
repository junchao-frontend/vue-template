# css学习

### 选中大盒子里面的小盒子

```
<article>
	<div></div>
	<div></div>
</article>
<style>
	article div:nth-of-type(1) 选中里面第一个div
</style>
```



### 文本操作

```css
p::first-letter{}   段落第一个字符

p::first-line{}   段落第一个行
```

标签后面加内容或者样式

例：

```css
span::after{
            content: '111';
            color: red;
        }
```

### 权重

id权重 	  					   0100

class,类属性值权重  	  0010

标签,伪元素					 0001

行内样式		 				1000

- 强制权重优先级 !important  
- 元素会继承但不会反哺
- 继承没有权重 
- 边框不会继承

通配符的权重

```
*{
   color:red;
}
权重0,继承 null  0>null
```

### 字体

#### 大小粗细

```
font-weight: normal bold;
font-size:20px;
```

em: 相当于元素字体的大小

css 字体单位链接：https://www.w3school.com.cn/cssref/css_units.asp

#### 颜色与行高

```
color:rgba(255,255,255,0.5);

```

行高一般用em 实现文字大小变化时自适应

```
p{
font-size:12px;
line-height:1.5em;
}
```

英文字母变成大写

```
h2{
  text-transform: capitalize;
}
```

#### 文字阴影

```css
h2 {
	text-shadow:rgba(150,9,238,.2) 3px 2px 3px;
}
// 水平偏移 垂直偏移 模糊量
```

#### 空白处理和文本溢出

```
white-space: pre-line nowrap
div{
            border: 1px solid red;
            width: 180px;
            white-space: nowrap;不换行
            overflow: hidden;
            text-overflow: ellipsis;将文本溢出的部分变成...
        }
```

<!-- ![](C:\Users\hp\Desktop\1.png) -->

#### 文本间距

letter-spacing:20px

单词间距 word-spacing

#### 文字排版

```
writing-mode: horizontal-tb;
```

### 盒子

#### 边距合并

当margin-top 和 margin-bottom相撞时  取其中最大值 不会合并

#### 盒子固定宽高

```
box-sizing: border-box
改变盒子里面的padding和margin盒子不会撑大
```

#### 边框样式

none   dotted点状边框  dashed定义虚线  solid实线  double双线，双线的宽度等于border-width  groove定义3D凹槽边框

#### 边框圆角

border-radius

上左 border-top-left-radius

#### 轮廓线

```
outline: solid 20px red
轮廓线不占用空间 下面的块元素紧挨上面的border
```

#### 元素消失与隐藏

display:none; 元素消失空间位消失

visibility:hidden; 元素空间位不消失 和透明度类似

#### overflow溢出和隐藏

- overflow:scroll 产生滚动条
- overflow:auto 自动 能撑满就没有 不能就产生滚动条
- overflow:hidden 超出的消失

#### 尺寸

- min-width/height 最小宽度和高度
- max-width/height 最大的宽度和高度

例子：图片放在div里面 div固定宽高 给图片设置min-width:50%约束图片的大小

#### 大小自适应

- fill-available自动撑满盒子
- fit-content 宽度自适应 比如文字多长盒子就有多长
- max-content 根据子盒子最大的宽度自适应 min-content

### 盒子背景

#### 背景裁切

- background-clip:border-box; 背景被裁剪到边框盒
- background-clip:padding-box; 背景被裁剪到内边距框
- background-clip:content-box;背景被裁剪到内容框

#### 背景重复

background-repeat: space平均分配 no-repeat不重复 repeat-x x轴重复

#### 背景的固定与滚动

- background-attachment:fixed; 背景固定 例子比如水印
- background-attachment:scroll 滚动

#### 背景位置

background-position: center top right ....

#### 背景尺寸

- background-size:100% 100%;
- background-size: 500px auto;
- background-size:cover;覆盖容器
- background-size:contain; 保证图片完全展示出来

### 盒子阴影

#### box-shadow

box-shadow: 10px(水平) 10px(垂直) 5px(模糊) rgba()

### 颜色渐变

#### 背景颜色渐变

##### 线性渐变

background:linear-gradient(-45deg,red,green,blue);

-45deg是倾斜度数 也可以是to right / to left

##### 镜像渐变

background:radial-gradient(at bottom right,red,freen,blue)

绘制小太阳

```css
div{
            width: 150px;
            height: 150px;
            background: radial-gradient(red,yellow 30%,black);
        }
```

<!-- ![sun](C:\Users\hp\Desktop\sun.png) -->

### after before应用

#### content

给元素前面或后面添加的内容

如果添加动态添加标签里面的可以用

content:attr(data-title)     <h2 data-title="111">

#### :hover::before

选中之后出现before和after的效果

### 浮动

- 浮空会脱标
- 行级元素添加浮动后转换为块级元素
- 清除浮动 clear:left/right/both
- 空标签设置属性clear:both可以清除浮动
- 也可以用after伪元素清除浮动
- 文字环绕 shape-outside

### 定位

只有设置定位的元素才可以设置层级关系

#### 固定定位

position:fixed;

#### 绝对定位

position:absolute;

#### 粘性定位

position:sticky;

比如给标题设置粘性定位 top：0;  贴近时自动黏上

### 弹性布局

```
{
        "pathNode" : [ 
        [ 
            114.748403, 
            36.704386
        ], 
        [ 
            114.75479, 
            36.704466
        ], 
        [ 
            114.754619, 
            36.684783
        ], 
        [ 
            114.758052, 
            36.684576
        ]
    ],
    "startNode" : [ 
        114.748553, 
        36.713383
    ],
    "endNode" : [ 
        114.598453, 
        36.650868
    ],
    "name" : "图书馆到学术会议中心"
}
 
```

