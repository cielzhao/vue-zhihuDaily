<template>
	<swiper :options="swiperOption" class="top-stories-view">
		<swiper-slide  v-for="(item,key) in topStories" :key="key" :style="{backgroundImage: 'url(' + item.image + ')'}">
			<h2 @click="detailContent(key)" class="slider-title">{{item.title}}</h2>
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
		<div class="swiper-mask"></div>
	</swiper>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
export default {
  props: ['topStories'],
  name: 'HomeSlider',
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        autoplay: 3500,
        setWrapperSize: true,
        pagination: {
	        el: '.swiper-pagination',
	      },
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true
      }
    }
  },
  methods: {
    detailContent (index) {
      const detailId = JSON.stringify(this.topStories[index].id)
      this.$router.push({path: '/detail', query: {detailId: detailId}})
    }
  }
}
</script>

<style>
.top-stories-view {
	position: relative;
	margin-top: 1.5rem;
	background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
}
.swiper-container {
	height: 6rem;
	z-index: 0;
}
.swiper-container-horizontal>.swiper-pagination-bullets {
	bottom: .1rem;
}
.swiper-pagination-bullet {
	opacity: .4;
}
.swiper-pagination-bullet-active {
	opacity: 1;
	background-color: #fff;
}
.swiper-slide {
	background-position: 50%;
	background-size: cover;
}
.slider-title {
  position: absolute;
  left: 0;
  bottom: .6rem;
  z-index: 1;
  padding: 0 .4rem;
  width: 100%;
  color: #fff;
  font-size: .6rem;
  text-align: left;
}
.swiper-mask {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	z-index: 0;
	width: 100%;
	height: 100%;
	background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.2) 98%, #FFFFFF 100%);
}
</style>
