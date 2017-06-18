# Topic
+   <https://dribbble.com/shots/2360260-AM-PM-Toggle>
# 結構
```code
input#sw.switch(type='checkbox')
label.container(for='sw')
  .o
  span.am AM
  span.pm PM
```
# 使用特性:
## 1. 在position: absolute;下的right、left定位
+   PM的對齊父元素向左110%
```code
    left: 110%;
```
+   AM的對齊父元素向右110%
```code
    right:110%;
```
## 2. 垂直置中，AM、PM至於父元素的相對父元素的50%高
```code
    top: 50%;
    -webkit-transform: translatey(-50%);
            transform: translatey(-50%);
```
## 3. 利用for 屬性，讓label以及input#sw關聯起來
```code
    input#sw.switch(type='checkbox')
    label.container(for='sw')
```
## 4. 利用 css :checked selector讓樣式做改變
```code
.switch:checked{
    & + .container > .o{
        transform: translatex(($ratio - 1)* $radius_2);
        background-color: $moon_color;
        &::before{
            opacity: 0.5;
        }
        &::after{
            opacity: 0;
        }
    }
    & + .container{
        &::after{
            opacity: 1;
        }
        &::before{
            opacity: 0;
        }
        background-color: $night_color;
        .am  {
            color: $unchecked_color;
        }
        .pm  {
            color: $checked_color;
        }
    }  
}
``` 

# codpen連結
+   <https://codepen.io/yuanyu/full/NgddvZ/>