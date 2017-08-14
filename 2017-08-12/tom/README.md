happy Csser 2017-08-12 Bird loading

範例效果:https://dribbble.com/shots/2030551-Bird-Loader

codepen:https://codepen.io/Tommax/pen/zddwjV?editors=1100

css loading 動態實作

1.首先創建設外層div .wrapContent置中loading內容項目

2.設定.circle屬性讓有.circle的class element副有垂直置中跟border-radius:50%設定

3.再來是要使用clip屬性來切出半園，所以裡面的element都有設定position:absolute

4.層級設定在最底部是橘色(鳥嘴)再來是紅色(頭冠) 白色(鳥臉) 灰色(鳥臉) 黑色(鳥眼睛) 黃色(鳥上顎)
  駐:白色鳥臉需還要將灰色區塊包在裡面

5.動態部分 分成每個顏色區塊都有獨立keyframes動態，較特別的是灰色部分 因為鳥頭在迴轉時是呈現在白色半圓裡
  所以動態尚需配合白色半圓旋轉時反轉，來呈現灰色半圓消失的效果

