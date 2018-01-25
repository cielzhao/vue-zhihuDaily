<template>
  <drawer :show="drawerShow" :pos="pos" :tran="tran" @change-show="changeDrawerShow">
    <div class="layout" slot="drawer">
    	<!--左侧边栏-->
			<sidebar :haswatch='haswatch'></sidebar>
    </div>
    <div class="container">
    	<!--头部-->
	    <header class="header">
	      <div class="header-left">
	        <i class="fa fa-bars" v-on:click="directionFlip" aria-hidden="true"></i>
	        <span class="home">{{themesData.name}}</span>
	      </div>
	      <div class="header-right">
	        <i class="fa" :class="{'fa-plus-square-o': hasWatch, 'fa-minus-square-o': !hasWatch }" aria-hidden="true" @click="addWatch"></i>
	      </div>
	      <div class="watch-tip" :class="{fadeInUp:this.tipWatchVal}" v-show="this.tipWatchVal"><span>{{tipWatchText}}</span></div>
	    </header>
			<!--背景图片-->
	    <div class="top-stories-view" :style="{backgroundImage: 'url(' + themesData.background + ')'}">
	    	<h2 class="img-title">{{themesData.description}}</h2>
	    </div>
			<!--内容列表-->
    	<news-list :stories="themesContent" :editorsData="themesData.editors"></news-list>
    </div>
  </drawer>
</template>

<script>
import Drawer from './Drawer'
import NewsList from './NewsList'
import Sidebar from './Sidebar'
import axios from 'axios'
import api from '../api/api.js'
export default {
  name: 'themesView',
  components: {
  	'Drawer': Drawer,
    'NewsList': NewsList,
    'Sidebar': Sidebar
  },
  data () {
    return {
      themesContent: [],
      themesData: '',
      themeId: '',
      hasWatch: true,
      tipWatchVal: '',
      tipWatchText: '知乎日报:已关注',
      pos: 'left',
      tran: 'overlay',
      drawerShow: false,
      haswatch: ''
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
  	directionFlip() {
   	 this.drawerToggle()
   	 console.log(this.drawerShow)
    },
    drawerToggle() {
      this.drawerShow=!this.drawerShow
    },
    changeDrawerShow(state) {
      this.drawerShow=state;
      console.log(state)
    },
    fetchData () {
    	var _this = this
      this.themeId = window.location.href.split('?')[1].split('=')[1]
      const themesUrl = api.themes + this.themeId
      axios.get(themesUrl).then(function (response) {
        console.log(response)
        _this.themesContent.push(response.data.THEMEDES)
        _this.themesData = _this.themesContent[0]
      }, function (error) {
        console.log('请求失败')
      })
    },
    addWatch () {
      this.tipWatchVal = true
      if (this.hasWatch) {
        this.hasWatch = false
        this.tipWatchText = '知乎日报:已关注'
        this.haswatch = window.location.href.split('?')[1].split('=')[1]
      } else {
        this.hasWatch = true
        this.tipWatchText = '知乎日报:已取消关注'
        this.haswatch = ''
      }
      this.tipWatchHide()
    },
    tipWatchHide () {
      const _this = this
      setTimeout(function () { _this.tipWatchVal = false }, 2000)
    }
  }
}
</script>

<style scoped>
.container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
}
.layout{
  width: 8rem;
}
.header .fa {
	padding: .4rem;
}
.header-right .fa {
  font-size: .6rem;
}
.watch-tip {
  position: fixed;
  top: 80%;
  left: 50%;
  z-index: 1001;
  margin-left: -2rem;
  width: 4rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: .2rem;
  opacity: 0;
}
.watch-tip.fadeInUp {
  opacity: 1;
  animation: fadeInUp 3s;
}
@keyframes fadeInUp {
	0% {
		opacity: 1;
		transform: translate3d(0, 100%, 0)
	}
	10% {
	  opacity: 1;
		transform: none
	}
  15% {
    opacity: 1;
    transform: translate3d(0, 5%, 0)
	}
  100% {
    opacity: 0;
  }
}
.watch-tip span {
  font-size: .3rem;
}
.top-stories-view {
	position: relative;
	margin-top: 1.5rem;
  height: 6rem;
}
.img-title {
	position: absolute;
	bottom: 10px;
	padding: .3rem .4rem;
	color: #fff;
	font-size: .6rem;
	text-align: left;
}
.sidebar-mask {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,.3);
}
</style>
