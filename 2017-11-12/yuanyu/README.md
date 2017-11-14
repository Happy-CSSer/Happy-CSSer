# Topic
+   <https://cdn.dribbble.com/users/583436/screenshots/3807497/trisq_dribbble.gif>
# 結構
```code
.outer
  .l-tri
  .r-tri
  .in-left-tri
  .in-right-tri
```
# 使用特性:
## 1. 利用mix-blend-mode: differecne 做出div重疊時背景色會有補色效果
+   <https://www.minwt.com/webdesign-dev/css/12699.html>
```code
	// 兩個中間三角形要設定 blend-mode才有色差效果
  .in-left-tri, .in-right-tri {
    background-blend-mode: screen;
    mix-blend-mode: difference;
  }
```
## 2. 利用border-width,以及border-color來製作三角形
```code
	// 去除原本 div的大小，只留下border
	height: 0;
	width: 0;
	border-width: 20vmin;
	border-style: solid;
	border-color: transparent $logo-color transparent  transparent;
```
## 3. 定位利用絕對定位 以及滿版的方式來定位(經過龍大教學)
```code
	// 滿版
	margin: 0;
	padding: 0;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	// 三角形絕對定位
	position: absolute;
```
# 撰寫心得:
## 1. 分開把transform, transition這些特效分開測試 再來模組化(by Rplus)
+ 定位跟分層是animation的關鍵
## 2. 慎選題目
+ 要看清楚題目細節再投

# codepen Link
<https://codepen.io/yuanyu/full/ooZrdo/>
