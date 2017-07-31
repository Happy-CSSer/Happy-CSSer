# Card Interaction in Happy CSSer 14
## Date: 2017-07-16

# Codepen Link:
+ [Card Interaction](https://codepen.io/arcobalenoi27/pen/OgGNmm)
+ [Card Interaction remix](https://codepen.io/arcobalenoi27/pen/JyGGra)

### Description
+ 第1個為原本寫的, 把她補完的版本
+ 第1個code是參考大家的code, 然後試著做做看, 看看2種有什麼不同

### CSS Notes
+ pointer-event:none;這個CSS屬性, 可以讓原本重疊的dom, 疊在下面的元素被點擊到, 原本的值為auto, 點擊時並不會穿透點到下面的div或其他元素
+ 作法分2類: 一類是有用input的checkbox或者是radio button來做狀態間的切換, 但要注意子element的z-index問題, 另一種是用:active這類psudo-class來做狀態區分, 前者dom結構會比較複雜, 後者因為有那個psudo-class的輔助下dom結構簡單不少, 對於4個大區域以及每個小方塊的動作或行為可以用nth-child或nth-of-type(取決於dom結構)和裡面代xn+x這種多項式來分類要做的動畫

+ 一樣可以設置一個preprocessor變數來快速切換讓某些code只有在debug時才會有效果(執行)幫助css debug

+ 用css variable並指派一般preprocessor的變數去做數值或參數的微調, 做一些客製化微調



