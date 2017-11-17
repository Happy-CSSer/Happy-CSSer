---
name: Rulin
date: 2017-11-12
title: 4-triangle loading
---

codepen demo:
https://codepen.io/rulinshyu/pen/MOmWoW

1. 推薦遊戲：https://play.google.com/store/apps/details?id=air.com.gamebrain.voi XD
2. 偷懶不想刻三角形，所以直接用 SVG 的多邊形處理
3. 變色用 mix-blend-mode 處理，應該跟大家差不多
4. 後來發現 firefox 上會爆掉 ( svg 中的元素 transform 基準不一樣 )，所以多加了 mozilla 專用樣式
5. 後來發現 safari 上也會爆掉 ( 理由同 firefox )，但... 決定放生 ˊ＿>ˋ
