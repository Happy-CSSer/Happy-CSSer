# Plus expanded in Happy CSSer 15 (Online party)
## Date: 2017-07-30

# Codepen Link:
+ [Plus expanded](https://codepen.io/arcobalenoi27/pen/mMVMKb)



### CSS Notes
+ 最早是用transform+動畫把下面的效果做出來, 但是後來又注意到手機螢幕可視區域有圖片, 所以改成用padding推上, 但經過大家分享之後, 才知道用padding會有重繪的效能問題, 所以又改為用transform了

+ transform: scale(ratio)這個CSS code也會影像到子元素, 如果想要讓那個展開視窗裡面的東西不被這影響, 在DOM結構裡面就要用不同的tag去裝, 這樣就可以吃到跟parent一樣的狀態

+ width: 10%; transform: scaleX(10); 和width: 100%; transform: scaleX(1); 這2者的不同在於效能, 如果網頁需求需要讓元件放大很多倍的時候，比較不吃顯示卡效能，尤其大網站會比較注重效能這塊(感謝Rplus)

+ flex-shrink: 0; 不壓縮其他部分





