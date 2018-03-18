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
          <span><span v-if="!extraData.popularity">...</span>{{this.popularity}}</span>
        </i>
      </div>
    </header>
    <!--背景图片-->
    <div class="top-stories-view" v-if="contentData.image" :style="{backgroundImage: 'url(' + contentData.image + ')'}">
    	<h2 class="img-title">{{contentData.title}}</h2>
    	<span class="img-source">{{contentData.image_source}}</span>
    	<div class="swiper-mask"></div>
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
import axios from 'axios'
import api from '../api/api.js'
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
      upvoteState: false,
      popularity: ''
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
    	var _this = this
      this.contentId = window.location.href.split('?')[1].split('=')[1]
      sessionStorage.setItem('commentsId', JSON.stringify(this.contentId))
      const contentsUrl = api.story + this.contentId
      axios.get(contentsUrl).then(function (response) {
        console.log(response)
        _this.contentData = response.data
      }, function (error) {
        console.log('请求失败')
      })

      const extrasUrl = api.extra + this.contentId
      axios.get(extrasUrl).then(function (response) {
        console.log(response)
        _this.extraData = response.data
        _this.popularity = _this.extraData.popularity
      }, function (error) {
        console.log('请求失败')
      })
    },
    goBack () {
      this.$router.go(-1)
    },
    themesContent () {
      const themesId = this.contentData.theme.id
      this.$router.push({path: '/', query: {themesId: themesId}})
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
        this.popularity = this.popularity - 1
      } else {
        this.upvoteState = true
        this.popularity = this.popularity + 1
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
	background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
}
.img-title {
	position: absolute;
	bottom: 15px;
	z-index: 1;
	padding: .3rem .4rem;
	color: #fff;
	font-size: .6rem;
	text-align: left;
}
.img-source {
	position: absolute;
	right: 10px;
	bottom: 7px;
	z-index: 1;
	color: #eee;
	font-size: 12px;
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
.swiper-mask {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	z-index: 0;
	width: 100%;
	height: 100%;
	background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.5) 100%, #FFFFFF 100%);
}
</style>
