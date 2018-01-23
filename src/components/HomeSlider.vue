<template>
	<swiper :options="swiperOption" class="top-stories-view">
		<swiper-slide  v-for="(item,key) in topStories" :key="key" :style="{backgroundImage: 'url(' + item.image + ')'}">
			<h2 @click="detailContent(key)" class="slider-title">{{item.title}}</h2>
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
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
  padding: 0 .4rem;
  width: 100%;
  color: #fff;
  font-size: .6rem;
  text-align: left;
}
</style>
