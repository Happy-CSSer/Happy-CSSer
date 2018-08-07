---
name: Rulin
date: 2017-12-24
title: Christmas Tree
---

codepen demo:
https://codepen.io/rulinshyu/pen/NXbjGP

1. 參考：https://tw.stockfresh.com/image/4990206 想做出可以收起來的感覺
2. 每一層會越來越小，所以為了讓視覺平衡一點，層與層的間距、轉的角度差也會越來越小
3. 最麻煩的部分是調整 .tree 的 perspective 跟 translate3d，要調到特定的數值才會看起來比較像樹
4. 因為分層不明顯，所以 .layer 上加上了 drop-shadow 來讓前後關係清楚一點
