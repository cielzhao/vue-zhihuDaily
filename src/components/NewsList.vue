<template>
	<div class="stories-view">
		<ul class="stories-view-list" v-for="(items, key) in stories">
			<!--今日热闻标题-->
			<!--<div v-if="!editorsData" class="list-title">今日热闻</div>-->
			<div v-if="!editorsData" class="list-title">{{items.date}}</div>
			<!--主编头像-->
			<div v-if="editorsData" class="editors" @click="editorsContent">
				<span>主编</span><img :src="editorsData[0].avatar" />
			</div>
			<!--主题内容列表-->
			<li class="stories-list" v-for="(item, index) in items.stories" :key="index" @click="detailContent(key, index)">
				<h3 :class="{imgNone:!item.images}">{{item.title}}</h3>
				<img v-if="item.images" :src="item.images[0]"/>
			</li>
		</ul>
		<div class="loading" v-if="loadingState">
			<i class="fa fa-spinner fa-pulse fa-fw"></i>
			<span class="sr-only">Loading...</span>
		</div>
	</div>
</template>

<script>
export default {
  props: ['stories', 'editorsData', 'loadingState'],
  name: 'newsList',
  methods: {
    detailContent (key, index) {
    	console.log(this.stories)
      const detailId = JSON.stringify(this.stories[key].stories[index].id)
      this.$router.push({path: '/detail', query: {detailId: detailId}})
    },
    editorsContent () {
      sessionStorage.setItem('editorsData', JSON.stringify(this.editorsData))
      this.$router.push({path: '/editors'})
    }
  }
}
</script>

<style scoped>
.stories-view {
	padding-bottom: .5rem;
	background-color: #f0f0f0;
}
.list-title, .editors {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: -.3rem;
	padding-left: .3rem;
	width: 100%;
	height: 1.5rem;
	color: #777;
}
.editors img {
	margin-left: .4rem;
	width: 1rem;
	height: 1rem;
	border-radius: 100%;
}
.stories-list {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: .3rem;
	padding: .5rem;
	height: 3rem;
	background-color: #fff;
	box-shadow: 1px 2px 3px #bdbdbd;
	border-radius: 4px;
}
.stories-list h3 {
	padding-right: .4rem;
	width: 75%;
}
.stories-list h3.imgNone {
	width: 100%;
}
.stories-list img {
	width: 25%;
	max-width: 120px;
}
.loading {
	margin: .3rem;
	height: 1.5rem;
	line-height: 1.5rem;
	text-align: center;
	background-color: #fff;
}
.loading .sr-only {
	position: static;
}
</style>
