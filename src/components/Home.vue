<template>
  <drawer :show="drawerShow" :pos="pos" :tran="tran" @change-show="changeDrawerShow" @on-show="onShow" @on-hide="onHide" v-loading.fullscreen.lock="fullscreenLoading">
    <div class="layout" slot="drawer">
    	<!--左侧边栏-->
			<sidebar></sidebar>
    </div>
   	<!--头部-->
		<header class="header">
			<div class="header-left">
				<i class="fa fa-bars" v-on:click="directionFlip" aria-hidden="true"></i>
				<span class="home">{{this.homeStr}}</span>
			</div>
			<div class="header-right">
				<i class="fa fa-bell" aria-hidden="true" @click="goLogin"></i>
				<i class="fa fa-ellipsis-v" aria-hidden="true"></i>
			</div>
		</header>
		<!--图片切换-->
		<home-slider :topStories="topStories" class="mySwiper"></home-slider>
		<!--文章列表-->
		<news-list :stories="stories" :loadingState="loadingState"></news-list>
  </drawer>
</template>

<script>
import Drawer from './Drawer'
import HomeSlider from './HomeSlider'
import NewsList from './NewsList'
import Sidebar from './Sidebar'
import axios from 'axios'

var count = 0;
export default {
	name: 'Home',
  data(){
    return {
      pos: 'left',
      tran: 'overlay',
      drawerShow: false,
      topStories: '',
      stories: [],
      homeStr: '首页',
      fullscreenLoading: true,
      loadingState: true
    }
  },
  created () {
    this.fetchData()
    this.addInterceptors()
  },
  mounted() {
  		Date.prototype.format = function(format) {
      var date = {
              "M+": this.getMonth() + 1,
              "d+": this.getDate(),
              "h+": this.getHours(),
              "m+": this.getMinutes(),
              "s+": this.getSeconds(),
              "q+": Math.floor((this.getMonth() + 3) / 3),
              "S+": this.getMilliseconds()
      };
      if (/(y+)/i.test(format)) {
              format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
      }
      for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
          format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
      }
      return format;
		}

		var newDate = new Date();
		var dateArray = [];
		var dateTemp;
		var curDate = newDate.format('yyyyMMdd')
		//目前获取前十天数据
		for (var i = 0; i < 10; i++) {
	    dateTemp = curDate - i;
	    dateArray.push(dateTemp);
		}
//		console.log(dateArray)

		var _this = this
    window.addEventListener('scroll',function(){
  		//窗口高度
  		var winHeight = window.innerHeight
  		//总高度
  		var conHeight = Math.max(document.body.offsetHeight, document.documentElement.offsetHeight)
  		//滚动高度
  		var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

  		//判断是否滑动到底部
			if(winHeight + scrollTop === conHeight) {
				count++
				_this.loadingState = true
				var t = setInterval(() => {
          _this.loadingState = false
        }, 1000);
				clearInterval(t)
				_this.fetchBeforeData(dateArray[count-1])
			}


			//每一个storiesView滑动到顶部时显示相应的标题
			var headerHeight = document.getElementsByClassName("header")[0].offsetHeight
			var storiesViewList = document.getElementsByClassName("stories-view-list")
			for(var j = 0; j < storiesViewList.length; j++) {
				var height = storiesViewList[j].getBoundingClientRect().top
				var str = storiesViewList[j].getElementsByClassName('list-title')[0].innerText
				if(height < headerHeight) {
					_this.homeStr = str
				}
			}

			//滑动到最顶部时显示'首页'
			var swiperHeight = document.getElementsByClassName("top-stories-view")[0].offsetHeight
			if(scrollTop < swiperHeight) {
				_this.homeStr = '首页'
			}
	  })
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
      axios.get('https://zhihu-daily.leanapp.cn/api/v1/last-stories').then(function (response) {
      	console.log(response)
				_this.fullscreenLoading = false
        _this.topStories = response.data.STORIES.top_stories
        var obj = {
        	"date": '今日热闻',
					"stories": response.data.STORIES.stories
        }
        _this.stories.push(obj)
				_this.openFullScreen()
      }).catch((error) => {
        console.log(error)
      })
    },
    addInterceptors () {
      axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        console.log('开始请求')
        return config
      }, function (error) {
        // Do something with request error
        console.log('请求失败')
        return Promise.reject(error)
      })
      axios.interceptors.response.use(function (response ) {
        console.log('接收响应')
        return response
      }, function (error) {
        // Do something with request error
        console.log('响应出错')
        return Promise.reject(error)
      })
    },
    fetchBeforeData (date) {
    	var _this = this
      axios.get('https://zhihu-daily.leanapp.cn/api/v1/before-stories/' + date).then(function (response) {
//    	console.info(data)
        var myDate = response.data.STORIES.date
        var dateArr = myDate.split('')
        var dateStr = '';
        for(var i=0;i<dateArr.length;i++) {
	        	if(i == 3 || i== 5) {
							dateArr[i] = dateArr[i] + '/'
	        	}
	        	dateStr += dateArr[i]
        }
				var time = myDate.substr(4, 2) + '月' + myDate.substr(6, 2) + '日 星期' + "日一二三四五六".charAt(new Date(dateStr).getDay());
        var obj = {
        	"date": time,
					"stories": response.data.STORIES.stories
        }
        _this.stories.push(obj)
      }, function (response) {
        console.log('请求失败')
      })
    },
    goLogin () {
      this.$router.push({path: '/login'})
    },
    onShow() {
	    document.getElementsByTagName('body')[0].className='noscroll';
    },
    onHide() {
	    document.getElementsByTagName('body')[0].className='';
    },
    openFullScreen() {
//    this.fullscreenLoading = true;
      setTimeout(() => {
//      this.fullscreenLoading = false;
      }, 500);
    },
    openFullScreen2() {
//    const loading = this.$loading({
//      lock: true,
//      text: 'Loading',
//      spinner: 'el-icon-loading'
//    });
//    setTimeout(() => {
//      loading.close();
//    }, 1000);
    }
  },
  components: {
  	'Drawer': Drawer,
  	'HomeSlider': HomeSlider,
    'NewsList': NewsList,
		'Sidebar': Sidebar
  }
}
</script>

<style scoped>
.layout{
  width: 8rem;
}
.header .fa-bars,
.header .fa-ellipsis-v {
	padding: .4rem;
}
.header .home,
.header .fa-bell {
	padding: .4rem .3rem;
}
.el-loading-mask {
	top: 92%;
}
</style>
