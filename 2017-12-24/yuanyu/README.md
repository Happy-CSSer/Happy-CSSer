# Christmas Tree

# Topic
+ <https://dribbble.com/shots/361553-X-Mas>

# 結構
```code
.outer
  .upper
  .bottom
  .mas
    .M|M
    .A|A
    .S|S
```

# 使用特性
## 1 利用設定 div的 height, width為 0,border三面 color為 transparent 製作三角形
```code
border-width: 0.4*$range;
border-color: $logo-cl transparent transparent transparent;
```

## 2 利用flexbox 的justify-content: space-between 用來做字的分散對齊
```code
position: absolute;
display: flex;
justify-content: space-between;
bottom: 0;
```

# 撰寫心得
## 結構分析真的是切版的第一步，會影響到後排版以及動畫的問題

# codepen Link
+ <https://codepen.io/yuanyu/full/XVNMQM/>
