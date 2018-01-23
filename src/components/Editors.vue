<template>
  <div class="editors">
    <!--头部-->
		<header class="header">
			<i class="fa fa-arrow-left" aria-hidden="true" @click="goBack"></i>
			<span>主编</span>
		</header>
    <!--内容-->
    <div class="editors-content">
      <img :src="editorsData[0].avatar" />
      <div class="name">
        <span>{{editorsData[0].name}}</span>
        <span class="alias">{{editorsData[0].bio}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editors',
  data () {
    return {
      editorsData: ''
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.editorsData = JSON.parse(sessionStorage.getItem('editorsData'))
      console.log(this.editorsData)
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.header {
  justify-content: flex-start;
}
.fa-arrow-left {
  padding: 0 1rem 0 .5rem;
}
.editors-content {
  display: flex;
	justify-content: flex-start;
	align-items: center;
  margin-top: 1.5rem;
  padding: .3rem;
}
.editors-content img {
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
}
.editors-content .name {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: .3rem;
}
.editors-content .name span {
  margin: .1rem .2rem;
}
.alias {
  color: #999;
  font-size: .3rem;
}
</style>
