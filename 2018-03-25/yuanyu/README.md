# Toggle Button

## Target
  <https://dribbble.com/shots/4318035-Toggle>

## DOM結構

```code
input#sw.switch(type='checkbox')
label.container(for='sw')
  .o
    .head
      .sleep_face
      .wake_face
```

## 使用特性

  1 利用container的before做一個目標顏色的mask
  然後利用對 mask opacity來做顏色的漸變效果

```code
  .container {
    height: $logo_height;
    width: $logo_width;
    font-size: $font-size;
    border-radius: $logo_width;
    border: $logo_height/20 solid $logo_color;
    background: $bg_color;
    position:relative;
    transition: border-color 1s;
    &::before{
      transition: opacity 1s;
      content:'';
      height:  $logo_height + $logo_height/10;
      width: $logo_width + $logo_height/10;
      background: $logo_color;
      display:block;
      position:absolute;
      top: -$logo_height/20;
      left: -$logo_height/20;
      border-radius: $logo_width +  $logo_height/10;
    }
  }
```

  2 利用head做出一個長方形dom來放置兩張表情dom
    這部分參考rplus的作法來做把head做左右位移來做出類似旋轉換臉的效果

```code
  .head {
      box-sizing:border-box;
      position:relative;
      height:100%;
      width: 300%;
      transition: transform .3s ease-in;
      .sleep_face {
        border:0;
        box-sizing: border-box;
        height: $logo_height/14;
        width:2*$logo_height/7;
        left:5*$logo_height/17;
        top: 3*$logo_height/4;
        background: $eye_color;
        border-radius: 0 0 $logo_height/14 $logo_height/14;
        position:absolute;
        &::before, &::after {
          position: absolute;
          content:'';
          display: block;
          height: $logo_height/7;
          width:$logo_height/7;
          border-radius: 50%;
          background: $o_color;
          box-shadow: 0 $logo_height/31 0 .0005*$logo_height $eye_color ;
        }
        &::before {
          left: -$logo_height/7;
          top: -5*$logo_height/12;
        }
        &::after {
          left: 2*$logo_height/7;
          top: -5*$logo_height/12;
        }  
      }
      .wake_face {
        position: absolute;
        height: $logo_height/7;
        width: $logo_height/3;
        background: $eye_color;
        right: 2*$logo_height/7;
        top: $logo_height/2;
        border-radius: 0 0 3*$logo_height/14 3*$logo_height/14;
        &::before, &::after {
          content:'';
          display: block;
          position:absolute;
          height: $logo_height/14;
          width: $logo_height/14;
          border-radius: 50%;
          background: $eye_color;
          top: -$logo_height/4;
        }
        &::before {
          right: 2*$logo_height/7;
        }
        &::after {
          right: -$logo_height/14;
        }
      }
    }
  }
}
```

  3 transition 的部分

```
.switch:checked {
  & + .container > .o {
    transform: translatex(($ratio - 1)*$logo_height);
    .head{
       transform: translatex(-2*$logo_height);
    }
  }
  & + .container {
    border-color: $bg-color;
    &::before {
      opacity:0;
    }
  }
}
```

  4 codepen link 
  <https://codepen.io/yuanyu/full/wmqbOe/>