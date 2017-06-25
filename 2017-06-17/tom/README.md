Happy Csser 2017-06-17

1.日夜開關(pm am switch)

  檔案: scss,css ,html

  codepen連接:https://codepen.io/Tommax/pen/rwjjex

 日夜開關製作心得:
   
    這次使用input的checkbox觸發 label 執行 樣式切換，

  其中日夜間雲層使用css僞元素刻製，也嘗試在content加入
  
  特殊圖形文字來裝飾按鈕，而夜間的星空點跟月球坑洞表面使用

  box-shadow的局部陰影來製作，其中有遇到幾個使用上的問題。

   就是當設定box-shadow的樣式，其設定的基準直會捉取font(文字)

  的設定 例如 color,font-size等設定 不過 陰影位置可透過

  box-shadow: h-shadow(但時會變成設定圓點x軸) v-shadow(但時會變成設定圓點y軸) blur(陰影焦距) spread(陰影擴散) color(可在圓形加獨立顏色) ,h-shadow v-shadow blur spread color;

   所以在調整上還是有一些獨立的設定另外再content內的圖形文字因為是文字，

  若要使用css控制該圖方向這邊我是使用line-height調整高度

  而使用text-indent調整左右x軸。

  另外之前有在會議上討論出因為css選擇器無法從子元素控制父元素，

  所以撰寫上還是改成checkbox跟label在同層來進行操作。


2.擺動開關(switch 3d)

  檔案: scss,css ,html

  待補上....

