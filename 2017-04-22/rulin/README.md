---
name: Rulin
date: 2017-04-22
title: Taiji Animation
---

codepen demo:
http://codepen.io/rulinshyu/pen/GmqZZN

### 之前的實作方法
本來是用 radial-gradient 來實現中間的兩個圓型 ( 中心黑外圈白、中心白外圈黑 )，但在 chrome 上面，交界處鋸齒化的狀況非常明顯；
後來嘗試使用疊兩層 inset box-shadow，但效果也不好：在 chrome 上面瀏覽時，元件邊界處會有縫。
( 但以上兩個狀況，在 firefox 上都是沒有問題的~!! )
因此最後就在調整成了現在的寫法

### 現在的實作方法
1. 使用 linear-gradient 寫出半白半黑的大圓
2. 寫好兩個填滿的小圓 ( 黑色、白色的小圓 )
3. 用 box-shadow 製造出外圈
4. 在小圓上設定 scale 動畫
    * 其中一個小圓的 animation-delay 設為 ( 週期 / -2 )，讓兩個動畫有相位差
    * transform-origin 設定在元件外 200% 處，作為 scale 的基準
5. 在大圓上設定 rotate 動畫
