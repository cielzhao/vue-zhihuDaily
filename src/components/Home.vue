<template>
  <drawer :show="drawerShow" :pos="pos" :tran="tran" @change-show="changeDrawerShow" @on-show="onShow" @on-hide="onHide">
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
		<news-list :stories="stories"></news-list>
  </drawer>
</template>

<script>
import Drawer from './Drawer'
import HomeSlider from './HomeSlider'
import NewsList from './NewsList'
import Sidebar from './Sidebar'
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
      homeStr: '首页'
    }
  },
  created () {
    this.fetchData()
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
			if(winHeight + scrollTop >= conHeight) {
				count++
				_this.fetchBeforeData(dateArray[count-1])
			}
	
			//每一个storiesView滑动到顶部时显示相应的标题
			var storiesViewList = document.getElementsByClassName("stories-view-list")
			for(var j = 0; j < storiesViewList.length; j++) {
				var height = storiesViewList[j].getBoundingClientRect().top
				var str = storiesViewList[j].getElementsByClassName('list-title')[0].innerText
				if(height < 60) {
					_this.homeStr = str
				}
			}	
			if(storiesViewList[0].getBoundingClientRect().top > 60) {
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
      this.$http.get('https://zhihu-daily.leanapp.cn/api/v1/last-stories').then(function (data) {
        this.topStories = data.body.STORIES.top_stories
        var obj = {
        		"date": '今日热闻',
					"stories": data.body.STORIES.stories
        }
        this.stories.push(obj)
//      console.info(data)
      }, function (response) {
        console.log('请求失败')
      })
    },
    fetchBeforeData (date) {
      this.$http.get('https://zhihu-daily.leanapp.cn/api/v1/before-stories/' + date).then(function (data) {
      	  console.info(data)
        var myDate = data.body.STORIES.date
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
					"stories": data.body.STORIES.stories
        }
        this.stories.push(obj)
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
</style>
