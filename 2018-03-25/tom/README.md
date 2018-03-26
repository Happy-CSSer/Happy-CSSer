Happy Csser 2018-03-26 face toggle


參考範例:https://dribbble.com/shots/4318035-Toggle

codePen demo:https://codepen.io/Tommax/pen/mxMxrm

實作方法:

1.首先架構上是設一個置中div toggleWrap，裡面再放一個checkbox 跟 背景色遮罩用的 div coverBg，在來就是會切換的圓形circle div

2.這邊主要是用checkbox的切換:checked狀態來控制笑臉跟哭臉的變換，將外框樣式切出弧度框再來設定overflow:hidden，讓外框樣式能夠包覆裡面的元件這邊因為我是想說讓checkbox能夠讓整個區塊都能點到所以樣式上設定position: absolute;並照在其他兩個div上面(備註:當然這邊也可以用label for="checkboxName" 來相應觸發checkbox

3.因為按鈕背景顏色有變換狀態，這邊我是先將toggleWrap先設定底色，另外coverBg為背景色遮罩覆蓋在上面，背景色遮罩的顏色是用background:linear-gradient(渲染)實踐樣式設計，另外添加opacity，再加上轉態transition設定 讓切換時不會出現顏色變化的轉換問題(若用Background顏色變化，經測試會出現一個顏色白色的暫流現象)

4.另外circle的表情處理我則是用css的偽元素處理，因為是考慮還需另刻表情會花一些時間所以這部份是考慮用極簡方式完成(若之後有設計出圖 可用圖片來替代)，另外左右動態設定也是藉由切換checkbox的狀態來調整