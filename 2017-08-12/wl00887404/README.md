# Happy CSSer 16

> Modern Web 2017 完剛好在台北，特地多留一天參加 Happy CSSer ♥

---

## Bird Loader

### Codepen

[https://codepen.io/wl00887404/pen/dzGeQL](https://codepen.io/wl00887404/pen/dzGeQL)

### Features

+ 颱風天放假很無聊在家裡偷寫的
+ 以 `漸層 background-image` 做半圓  
  這方法用來做其他角度的 Pie Chart 、 Play Button 也很好用
+ 以 `絕對定位`置中
  ```css
  target{
      position:absolute;
      top:0;
      bottom:0;
      left:0;
      right:0;
      margin:auto;
  }
  ```
+ 分別寫轉來轉去的動畫
+ 第一個把它取名為「雞」的人是我

### What I learned

+ 我原先以以下語法做置中
  ```css
      container{
          display:flex;
          justify-content:center;
          align-items:center;
      }
      target{
          position:absolute;
      }
  ```
  在 `Chrome` 可行，但在 `Safari` 會跑版  
  分析後覺得為瀏覽器行為不同  
  這種寫法本身不太正確  
  `absolute元素` 通常會給定 `top、right、bottom、left`
+ Mac 有內建神奇的 gif 分析器  
  可以像影片一樣撥放，超酷

---

## bees-bombs

### Codepen

[https://codepen.io/wl00887404/pen/Vzzbdj](https://codepen.io/wl00887404/pen/Vzzbdj)

### Features

+ 看起來很炫，來挑戰一下
+ 架構分為
  ```xml
    <定位>
        <動畫>
            <元素/>
        </動畫>
    </定位>
  ```
  如此可以把 `transform` 拆開，邏輯不會互相影響
+ 動畫為 `對角線兩顆方塊為一組，同方向轉動`  
  動畫順序為 `1,3,5,7,9,...` ，會跳過中間的方塊
+ 加入滑鼠控制視角，用手動轉它時很興奮

### What I learn

+ 原本把方塊的定位都寫在一起  
  現在的新架構好管理很多
+ 原本的想法是判定 `2n-1的方塊 animate-delay 減半`  
  不過這樣太麻煩了，索性把 `角度*2`  
  `1=>1,2=>3,3=>5`，這是一種奇效的概念
+ 我在 Codepen 首頁上看到 rplus  
  Woooooooooooow!!