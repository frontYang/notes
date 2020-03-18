# facebook 网页的登陆和分享

## 开放图谱分享

```html
<!-- facebook 图谱 S -->
<meta property="og:url" content="权威链接(不能携带多余参数)" />
<meta property="fb:app_id" content="appid" />
<meta property="og:title" content="标题" />
<meta property="og:description" content="描述" />
<meta property="og:image" content="分享图片1200x628" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="628" />
<!-- facebook 图谱 E -->
```



## 像素代码

facebook后台生成

```html
<!-- Facebook Pixel Code -->
<script>
  !function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () {
      n.callMethod ?
      n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
    n.queue = []; t = b.createElement(e); t.async = !0;
    t.src = v; s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
  }(window, document, 'script',
    'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '493599584786860');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=493599584786860&ev=PageView&noscript=1" /></noscript>
<!-- End Facebook Pixel Code -->
```



## 登陆&分享按钮初始化封装

```html

<!-- 分享 -->
<a class="share-facebook">分享</a>
<!-- 登录 -->
<fb:login-button scope="public_profile,email" onlogin="FBUtil.checkLoginState();">登录</fb:login-button>
<script>
(function () {
  ; (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/zh_CN/sdk.js#xfbml=1&version=v4.0";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  var FBUtil = {
    // 初始化
    init(params) {
      var self = this
      this.loginIntf = params.loginIntf || ''

      setTimeout(function () {
        FB.init({
          appId: params.appid,
          xfbml: true,
          version: 'v4.0'
        });

        if(params.login){
          window.fbAsyncInit = function () {
            FB.getLoginStatus(function (response) {
              self.statusChangeCallback(response);
            });
          };
        }
      }, 2000)
    },

    // 分享
    share(callback) {
      FB.ui({
        method: 'share',
        href: window.location.href,
      }, (response) => {
        if (response && !response.error_message) {
          // 分享成功
          callback && callback(response)
        }
      });
    },

    // 服务器登录接口请求，获取相关信息
    loginApi() {
      var self = this
      FB.api(this.loginIntf, function (response) {
        console.log('Successful login for: ' + response.name);
        self.loginCallback && self.loginCallback(response)
      });
    },

    // 获取登录状态
    checkLoginState() {
      var self = this
      FB.getLoginStatus(function (response) {
        self.statusChangeCallback(response);
      });
    },

    // 状态改变回调
    statusChangeCallback(response) {
      if (response.status === 'connected') {
        this.loginApi();
      } else {
        console.log('Please log into this app.');
      }
    }
  }
  window.FBUtil = FBUtil
})();

var initShare = (){
	var btnShare = document.querySelector('.share-facebook')
	FBUtil.init({
		appid: 'APP ID',
		loginIntf: '', // 登录请求接口
		loginCallback(response) {
			// 登录成功回调
			document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!';
    }
	})

  btnShare.addEventListener('click', function () {
		FBUtil.share(function (response) {
			// 分享成功回调
		})
	})
}
</script>
```



## 添加应用域名

应用 => 设置 => 基本 =>应用域名   添加主域（输入域名）  添加平台（输入网址）



[分享官网调试器](https://developers.facebook.com/tools/debug)

