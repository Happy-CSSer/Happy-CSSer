# Christmas Tree

hover 聖誕樹，樹和星星都會出現動畫!!

- [Code Pen](https://codepen.io/dwatow/pen/WdojzG?editors=1100)

## html

```
<div class="x-tree">
 Hover it
 <img class="tree tree1" src="treeImg.png" alt="">
 <img class="tree tree2" src="treeImg.png" alt="">
 <img class="tree tree3" src="treeImg.png" alt="">
 <img class="tree tree4" src="treeImg.png" alt="">
 <img class="tree tree5" src="treeImg.png" alt="">
 <img class="tree tree6" src="treeImg.png" alt="">
 <div class="start">★</div>
</div>
```

## css

```
img {
 display: block;
 width: 100%;
}

.x-tree {
 position: relative;
 perspective: 300px;
 transform-style: preserve-3d;

 height: 400px;
 width: 300px;
}

.start, .tree {
  width: 100%;
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 margin: auto;
 transition: transform 5s, opacity 5s;
 transform-origin: bottom;
}
.start {
 text-align: center;
 font-size: 1.6em;
 top: 109px;
 color: #FF9800;
 transform: translateZ(151px);
 filter: drop-shadow(0 0 4px #FF9800);
}


.tree {
 transform: rotatey(0deg);
 opacity: .2;
}

.x-tree:hover .start {
 opacity: 1;
 animation: shiny 5s infinite;
}

@keyframes shiny {
 0%, 100% {
  filter: drop-shadow(0 0 1px yellow);
 }
 50% {
  filter: drop-shadow(0 0 8px #FF9800);
 }
}

.x-tree:hover .tree1 {
 transform: rotatey(30deg);
}

.x-tree:hover .tree2 {
 transform: rotatey(60deg);
}

.x-tree:hover .tree3 {
 transform: rotatey(90deg);
}

.x-tree:hover .tree4 {
 transform: rotatey(120deg);
}

.x-tree:hover .tree5 {
 transform: rotatey(150deg);
}

.x-tree:hover .tree6 {
 transform: rotatey(180deg);
}
```
