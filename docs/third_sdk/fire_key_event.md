# 原生 js 模拟键盘输入

[查看效果](https://frontyang.github.io/example/fire_key_event)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .wrap {
        display: flex;
        width: 100%;
        border: none;
      }
      div {
        padding: 20px;
        border: 1px solid #ddd;
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
      }
    </style>
  </head>
  <body>
    <div class="wrap">
      <div id="Jtxt1" onclick="fireKeyEvent(Jtxt1, 'keydown', 39)">右</div>
      <div id="Jtxt2" onclick="fireKeyEvent(Jtxt2, 'keydown', 37)">左</div>
      <div id="Jtxt3" onclick="fireKeyEvent(Jtxt3, 'keydown', 38)">上</div>
      <div id="Jtxt4" onclick="fireKeyEvent(Jtxt4, 'keydown', 40)">下</div>
    </div>
    <script>
      // 37(左),38(上),39(右),40(下)

      window.onload = function() {
        document.addEventListener('keydown', function(e) {
          switch (e.keyCode) {
            case 39:
              alert('向右')
              break
            case 37:
              alert('向左')
              break
            case 38:
              alert('向上')
              break
            case 40:
              alert('向下')
              break

            default:
              break
          }
          if (e.keyCode == 65 && e.shiftKey) {
          }
        })
      }

      //  来源：https://blog.csdn.net/wuzuyu365/article/details/81260547
      function fireKeyEvent(el, evtType, keyCode) {
        var doc = el.ownerDocument,
          win = doc.defaultView || doc.parentWindow,
          evtObj
        if (doc.createEvent) {
          if (win.KeyEvent) {
            evtObj = doc.createEvent('KeyEvents')
            evtObj.initKeyEvent(evtType, true, true, win, false, false, false, false, keyCode, 0)
          } else {
            evtObj = doc.createEvent('UIEvents')
            Object.defineProperty(evtObj, 'keyCode', {
              get: function() {
                return this.keyCodeVal
              },
            })
            Object.defineProperty(evtObj, 'which', {
              get: function() {
                return this.keyCodeVal
              },
            })
            evtObj.initUIEvent(evtType, true, true, win, 1)
            evtObj.keyCodeVal = keyCode
            if (evtObj.keyCode !== keyCode) {
              console.log('keyCode ' + evtObj.keyCode + ' 和 (' + evtObj.which + ') 不匹配')
            }
          }
          el.dispatchEvent(evtObj)
        } else if (doc.createEventObject) {
          evtObj = doc.createEventObject()
          evtObj.keyCode = keyCode
          el.fireEvent('on' + evtType, evtObj)
        }
      }
    </script>
  </body>
</html>
```
