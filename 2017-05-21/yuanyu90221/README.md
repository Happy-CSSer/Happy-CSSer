# 檔案結構
+   index.html
+   ./assets/style.css

# 檔案說明
## target effect
+   <https://cdn.dribbble.com/users/32512/screenshots/3290264/loader_ai_for_rokid_by_fantasy.gif>
## html document
<pre>
    .bar
        .ball
        .ball
        .ball
</pre>

## css 特性
+   1. 排版用 display: inline-flex
+   2. 左右對齊 justify-content: center;
+   3. 重直置中 align-items: center;
+   4. 設定旋轉中心: transform-origin: (-(2*$gap + $b-r/2));
+   示意圖:

   ball1    |  ball1     |          |          |    ball2   |  ball2    |          |          |  ball3    |  ball3    |
------------|------------|----------|----------|------------|-----------|----------|----------|-----------|-----------|                 
  $b-r/2    |   $b-r/2   |   $gap   |   $gap   |   $b-r/2   |   $b-r/2  |   $gap   |   $gap   |   $b-r/2  |  $b-r/2   | 

+   5. 移動: transform: translatex(2*$gap+$b_r)
+   示意圖:

   ball1    |  ball1     |          |          |    ball2   |  ball2    |          |          |  ball3    |  ball3    |         
------------|------------|----------|----------|------------|-----------|----------|----------|-----------|-----------|
  $b-r/2    |   $b-r/2   |   $gap   |   $gap   |   $b-r/2   |   $b-r/2  |   $gap   |   $gap   |   $b-r/2  |  $b-r/2   | 
  