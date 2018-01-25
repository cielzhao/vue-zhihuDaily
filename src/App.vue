<template>
  <div id="app">
    <router-view :key="key"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    key () {
      return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date()
    }
  }
}
</script>

<style>
* {
	margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{text-decoration:none;outline:none}
h1,h2,h3,h4,h5,h6{font-weight:normal}
a,li,div {
	-webkit-tap-highlight-color: rgba(0,0,0,0);
	-webkit-tap-highlight-color:transparent;
	border:none;
	outline:none;
	text-decoration: none;
}
input,textarea {
	outline:none;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.noscroll {
	/*position: fixed;*/
	overflow: hidden;
}
#app {
	width: 100%;
	height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222;
  font-size: .4rem;
}
.header {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 1.5rem;
	background-color: #00a2ea;
	color: #fff;
	font-size: .5rem;
}
</style>
