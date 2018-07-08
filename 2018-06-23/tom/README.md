Happy Csser 2018-6-23 InVision-Studio-Music-Player(pure css)

參考範例:https://dribbble.com/shots/4240318-Made-with-InVision-Studio-Music-Player

codePen demo:https://codepen.io/Tommax/pen/WyyxBW?editors=1100

實作方法:

1.先創建撥放器外框playwrap，另外加入playerPanel為撥放器框playerPanel使用flexbox讓內部元件能夠置中。

2.playerPanel內先建置一個包覆三個控制鈕跟唱盤的controlContent，內部元件靠置右分別加入三個按鈕button，按鈕內的三角箭頭則是用clip-path完成。唱盤則是用絕對定位靠左並top向上移動-50px，還有專輯資訊跟內部音樂進度條(先將專輯資訊框高設為0，後續會講解)，完成基本版面布局。

3.因為撥放器的觸發跟動態都是要由css完成，所以這邊是採用input[checkbox]搭配label去觸發點擊:checked狀態來顯示撥放和暫停的功能，所以在controlContent裡面加入一個checkbox
另外中間button添加一個label用於點擊撥放鍵處發外層checkbox，利用這個checkbox狀態去讓周邊的各項目(唱盤，專輯訊息)改變樣式狀態，而checkbox樣式id設為play。

4.這邊動態效果分別會有四個動態:
   1.是唱盤點選播放後轉動
   2.專輯訊息會滑出
   3.會有音軌進度顯示
   4.播放鍵會有暫停跟撥放切換動態

5.動態實作唱盤的旋轉先製作css keyframes動畫Rotate，當點選中間撥放鍵(註:label要的添加for="checkbox的Id"，才能讓外層checkbox改變到狀態)，這時要填寫狀態改變
樣式:#play:checked ~ .disc(當中的"~"為css選擇next的功能等於當該想部有checked狀態，則會改變該next的項目狀態)

6.專輯訊息會滑出的效果，這邊因為該項目是在同層而範例效果感覺是在撥放器背後出現，
  但由於要跟checkbox同層才會有觸發效果，所以這邊我是用height先設0，之後再被觸發
  後添加高度顯示其內容(這部分動態有做修正)

7.音軌進度顯示的部分，因為在專輯資訊裡面 所以樣式觸發是跟輯資訊一起，也是先添加css keyframes動畫startplay(動態有從原本的width改成transform: translateX用)

8.播放鍵會有暫停跟撥放切換動態這邊則是，用偽元素刻暫停鈕的兩個長方形當暫停鍵
  另外撥放鍵的三角形也是在label裡面添加偽元素，並使用clip-path添加三角箭頭完成
  撥放時切換的動態設定撥放時label的三角箭頭設透明度還有scale縮放消失跟出現，
  另外暫停鍵設一左一右改變位置跟透明度完成的
