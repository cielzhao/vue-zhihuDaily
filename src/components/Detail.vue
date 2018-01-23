<template>
  <div class="detail-content">
    <!--动态获取的样式-->
    <link :href="contentData.css" rel="stylesheet" type="text/css" />
    <!--头部-->
    <header class="header">
      <div class="header-left">
        <i class="fa fa-arrow-left" aria-hidden="true" @click="goBack"></i>
      </div>
      <div class="header-right">
        <i class="fa fa-share-alt" aria-hidden="true" @click="shareShow"></i>
        <i class="fa fa-star" aria-hidden="true" @click="goLogin"></i>
        <i class="fa fa-commenting" aria-hidden="true" @click="goComments">
          <span><span v-if="!extraData.comments">...</span>{{extraData.comments}}</span>
        </i>
        <i class="fa fa-thumbs-up" :class="{upvote:upvoteState}" @click="upvoteToggle" aria-hidden="true">
          <span><span v-if="!extraData.popularity">...</span>{{extraData.popularity}}</span>
        </i>
      </div>
    </header>
    <!--背景图片-->
    <div class="top-stories-view" v-if="contentData.image" :style="{backgroundImage: 'url(' + contentData.image + ')'}">
    	<h2 class="img-title">{{contentData.title}}</h2>
    	<span class="img-source">{{contentData.image_source}}</span>
    </div>
    <!--内容详情-->
    <div class="content-view" :class="{imgNone:contentData.image}" v-html="contentData.body"></div>
    <!--本文来自-->
    <div class="content-source" v-if="contentData.theme">
      <div class="source-theme" @click="themesContent">
        <img :src="contentData.theme.thumbnail" />
        <span>本文来自：{{contentData.theme.name}}</span>
      </div>
      <div class="source-follow">
        <span>关注</span>
      </div>
    </div>
    <!--分享-->
    <share v-show="shareState"></share>
    <div class="share-mask" v-show="shareState" @click="shareHide"></div>
  </div>
</template>

<script>
import Share from './Share'
export default {
  name: 'detail',
  components: {
    'Share': Share
  },
  data () {
    return {
      contentData: '',
      contentId: '',
      extraData: '',
      shareState: false,
      upvoteState: false
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.contentId = window.location.href.split('?')[1].split('=')[1]
      sessionStorage.setItem('commentsId', JSON.stringify(this.contentId))
      this.$http.get('https://zhihu-daily.leanapp.cn/api/v1/contents/' + this.contentId).then(function (data) {
        console.log(data)
        this.contentData = data.body.CONTENTS
      }, function (response) {
        console.log('请求失败')
      })
      this.$http.get('https://zhihu-daily.leanapp.cn/api/v1/contents/extra/' + this.contentId).then(function (data) {
        console.log(data)
        this.extraData = data.body.DES
      }, function (response) {
        console.log('请求失败')
      })
    },
    goBack () {
      this.$router.go(-1)
    },
    themesContent () {
      const themesId = this.contentData.theme.id
      this.$router.push({path: '/themesView', query: {themesId: themesId}})
    },
    shareShow () {
      this.shareState = true
    },
    shareHide () {
      this.shareState = false
    },
    upvoteToggle () {
      if (this.upvoteState) {
        this.upvoteState = false
      } else {
        this.upvoteState = true
      }
    },
    goLogin () {
      this.$router.push({path: '/login'})
    },
    goComments () {
      this.$router.push({path: '/comments'})
    }
  }
}
</script>

<style>
.header .fa-arrow-left {
	padding: .4rem;
}
.header-right .fa {
	padding: .4rem .2rem;
}
.header-right .fa span {
  margin-left: .1rem;
  font-size: .3rem;
}
.fa-thumbs-up.upvote {
  color: orange;
}
.fa-thumbs-up.upvote span {
  color: #fff;
}
.top-stories-view {
	position: relative;
	margin-top: 1.5rem;
	height: 6rem;
}
.img-title {
	position: absolute;
	bottom: 15px;
	padding: .3rem .4rem;
	color: #fff;
	font-size: .6rem;
	text-align: left;
}
.img-source {
	position: absolute;
	right: 10px;
	bottom: 5px;
	color: #fff;
}
.content-view {
  margin-top: 1.5rem;
}
.content-view.imgNone {
  margin-top: 0;
}
.content-view.imgNone .img-place-holder {
  height: 0;
}
.content-view .content a {
	color: #888;
}
.content-source {
  display: flex;
	justify-content: space-between;
	align-items: center;
  margin: 0 20px 20px 20px;
  height: 1.5rem;
  background: #f0f0f0;
}
.source-theme {
  width: 80%;
}
.source-theme img {
  width: 1.5rem;
  height: 1.5rem;
}
.source-follow {
  padding: .3rem .4rem;
  color: #00a2ea;
  border-left: 1px solid #ccc;
}
.share-mask {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,.5);
}
.icon-list li {
	list-style: none;
}
</style>
