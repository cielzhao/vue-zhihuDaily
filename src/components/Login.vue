<template>
  <div class="login">
    <div class="bg bg-blur" :style="{backgroundImage: 'url(' + loginBgUrl + ')'}"></div>
    <div class="login-content">
      <!--头部-->
      <header class="header">
        <div class="header-left">
          <i class="fa fa-arrow-left"aria-hidden="true" @click="goBack"></i>
          <span class="home">登录</span>
        </div>
      </header>
      <h2>知乎日报</h2>
      <h3>使用微博登录</h3>
      <!--登录按钮-->
      <div class="login-btn">
        <div class="weibo">
          <i class="fa fa-weibo" aria-hidden="true"></i>
          <span>新浪微博</span>
        </div>
        <div class="tencent">
          <i class="fa fa-tencent-weibo" aria-hidden="true"></i>
          <span>腾讯微博</span>
        </div>
      </div>
      </div>
      <!--特别说明-->
      <div class="explanation">
        <span>知乎日报不会未经同意通过你的微博账号发布任何信息</span>
      </div>
  </div>
</template>

<script>
import bg from '../assets/img/bg.jpg'
export default {
  name: 'login',
  data () {
    return {
      loginBgUrl: bg
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.bg {
  position: absolute;
  width: 100%;
  height: 100%;
}
.bg-blur {
  position: absolute;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-filter: blur(10px);
  -moz-filter: blur(10px);
  -o-filter: blur(10px);
  -ms-filter: blur(10px);
  filter: blur(10px);
}
.login-content {
  position:absolute;
  left: 0;
  right: 0;
  padding-top: 4rem;
  text-align: center;
}
.fa-arrow-left {
  padding: .4rem;
}
h2 {
  font-weight: bold;
  color: #fff;
}
h3 {
  padding: 2rem 0 .5rem 0;
  color: #fff;
}
.login-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.login-btn > div {
  margin-bottom: .5rem;
  width: 60%;
  height: 1.2rem;
  line-height: 1.2rem;
  border-radius: .1rem;
  background-color: #fff;
}
.fa-weibo {
  color: #e6162d;
}
.fa-tencent-weibo {
  color: #4cbbff;
}
.login-btn span {
  margin-left: .3rem;
}
.explanation {
  position: fixed;
  left: 0;
  bottom: .5rem;
  width: 100%;
  color: #4cbbff;
  font-size: .3rem;
  text-align: center;
}
</style>
