<template>
  <div class="share">
    <div class="share-content">
      <h3>分享</h3>
      <div class="icon-list">
        <li>
          <div class="icon weibo">
            <i class="fa fa-weibo" aria-hidden="true"></i>
          </div>
          <span class="icon-name">新浪微博</span>
        </li>
        <li>
          <div class="icon weixin">
            <i class="fa fa-weixin" aria-hidden="true"></i>
          </div>
          <span class="icon-name">微信</span>
        </li>
        <li>
          <div class="icon moments">
            <i class="fa fa-chrome" aria-hidden="true"></i>
          </div>
          <span class="icon-name">朋友圈</span>
        </li>
        <li>
          <div class="icon qq">
            <i class="fa fa-qq" aria-hidden="true"></i>
          </div>
          <span class="icon-name">QQ</span>
        </li>
        <li>
          <div class="icon facebook">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </div>
          <span class="icon-name">Facebook</span>
        </li>
        <li>
          <div class="icon twitter">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </div>
          <span class="icon-name">Twitter</span>
        </li>
        <li>
          <div class="icon more">
            <i class="fa fa-ellipsis-h fa-lg" aria-hidden="true"></i>
          </div>
          <span class="icon-name">更多平台</span>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'share'
}
</script>

<style scoped>
.share-content {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1111;
  margin-top: -40%;
  margin-left: -40%;
  padding-bottom: .5rem;
  background-color: #fff;
  width: 80%;
  height: auto;
  border-radius: .1rem;
}
.share-content h3 {
  padding: .3rem .3rem 0 .3rem;
}
.icon-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.icon-list li {
  text-align: center;
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: .5rem .5rem .1rem .5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  font-size: .5rem;
}
.icon-name {
  font-size: .3rem;
  color: #666;
}
.fa {
  color: #fff;
}
.weibo {
  background-color: #e6162d;
}
.weixin {
  background-color: #44b549;
}
.moments {
  background-color: #44b549;
}
.qq {
  background-color: #0186f9;
}
.facebook {
  background-color: #3b589c;
}
.twitter {
  background-color: #1da1f3;
}
.more {
  background-color: #ccc
}
</style>
