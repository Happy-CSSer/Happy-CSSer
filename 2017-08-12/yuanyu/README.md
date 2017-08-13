# Topic
+   <https://dribbble.com/shots/2030551-Bird-Loader>
# 結構
```code
.bird-outer
  .bird-body
  .down-mouth
  .inner-fir
  .fly-fir
  .upper-fir
  .bird-eye
  .up-mouth
```
# 使用特性:
## 1. 利用position:absolute相對於 position: relative的相對top跟left來定位
+   bird-body的對bird-outer的左邊 0% 上邊 0%
```code
    left: 0%;
    top: 0%;
```
+   down-mouth的對bird-outer的左邊距離$bird-size/2 上邊 $bird-size/2
```code
    top: $bird-size/2;
    left: $bird-size/2;
```
## 2. 利用transform-origin 設定每個commponent的旋轉中心
+   down-mouth的旋轉中心 X: 0% Y: 0%
```code
    transform-origin: 0% 0%;
```
+   up-mouth的旋轉中心 X: 0% Y: 100%;
```code
    transform-origin: 0% 100%;
```
## 3. 利用dom上下的相對位置決定顯示上下
+   例如 up-mouth結構在最後才繪出 所以 bird-eye會被 up-mouth遮住如果兩者移動到相同位置的話

# codpen連結
+   <https://codepen.io/yuanyu/full/WEEdor/>