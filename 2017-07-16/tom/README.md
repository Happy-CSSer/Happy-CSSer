Happy Csser 2017-07-16
隱藏滑出視窗 Card Interaction

codepen:https://codepen.io/Tommax/pen/KqYzmR

開發筆記:

1.這個版本排版上有別於codepen版本，將排版上改成用flexbox
  另外架構上也做了另外的修改，動態方面也嘗試用transition-timing-function的step-start跟
  step-end來做內容頁滑出的延遲效果，而事件觸發改成用:active(還在更改中)

2.目前已完成codepen上的版本，codepen上的版本主要還是沿用之前的checkBox，不過架構上應為要讓隱藏的
  區塊可以放入內容，所以架構分成image跟info兩個block，而觸發事件的機制也是採用css的input checkbox:checked
  觸發Label內的內容效果，因為動態呈現部分方塊分成八塊，目前作法是各自設定8塊的效果，然後是用css select:nth-child
  去讓下面的其他項目沿用規則


