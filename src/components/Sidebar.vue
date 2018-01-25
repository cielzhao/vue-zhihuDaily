<template>
	<div class="sidebar">
		<!--个人信息-->
		<div class="personal">
			<div class="avatar">
				<img :src="avatarUrl" /><span>Ciel</span>
			</div>
			<div class="info">
				<div class="info-left">
					<i class="fa fa-star" aria-hidden="true"></i><span class="favorite">我的收藏</span>
				</div>
				<div class="info-right">
					<i class="fa fa-download" aria-hidden="true"></i><span class="favorite">离线下载</span>
				</div>
			</div>
		</div>
		<!--首页-->
		<div class="go-home" @click="goHome">
			<i class="fa fa-home" aria-hidden="true"></i><span class="home">首页</span>
		</div>
		<!--主题列表-->
		<div class="themes-view">
		  <li class="themes-list" v-for="(item,key) in themes" @click="themesContent(key)">
		    <span :id="item.id" >{{item.name}}</span>
		    <i v-if="item.id != haswatch" class="fa fa-plus" aria-hidden="true"></i>
		    <i v-if="item.id == haswatch" class="fa fa-chevron-right" aria-hidden="true"></i>
		  </li>
		</div>
	</div>
</template>

<script>
import avatar from '../assets/img/avatar.jpg'
import axios from 'axios'
import api from '../api/api.js'
export default {
	props: ['haswatch'],
  name: 'sidebar',
  data () {
    return {
      avatarUrl: avatar,
      themes: '',
      themesId: ''
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
    	var _this = this
    	const themesUrl = api.themes
      axios.get(themesUrl).then(function (response) {
        _this.themes = response.data.THEMES.others
      }, function (error) {
        console.log('请求失败')
      })
    },
    themesContent (index) {
    	this.themesId = this.themes[index].id
      // 先进入一个空路由
			this.$router.replace({
			  path: '/_empty',
			})
			//then replace your route (with same component)
			this.$router.replace({
			  path: '/ThemesView/',
			  query: {
			    themesId: this.themesId
			  }
			})
			document.getElementsByTagName('body')[0].className='';

    },
    goHome() {
			this.$router.replace({
			  path: '/_empty',
			})
			this.$router.replace({path: '/'})
			document.getElementsByTagName('body')[0].className='';
   }
  }
}
</script>

<style scoped>
.personal {
	width: 100%;
	height: 3rem;
	background-color: #00a2ea;
	color: #fff;
}
.avatar {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: .3rem;
	padding: .3rem .5rem;
}
.avatar img {
	margin-right: .5rem;
	width: 1.2rem;
	height: 1.2rem;
	border-radius: 100%;
}
.avatar span {
	font-size: .5rem;
}
.info {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: .8rem;
}
.favorite, .download {
	padding: .3rem .5rem;
}
.go-home {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	height: 1.2rem;
	color: #00a2ea;
	background-color: #eee;
}
.fa-home {
	padding: 0 .5rem;
}
.themes-view {
	width: 100%;
	height: auto;
	background-color: #fff;
}
.themes-list {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: .4rem 1rem .4rem .5rem;
}
.fa-plus,
.fa-chevron-right {
	color: #ddd;
}
</style>
