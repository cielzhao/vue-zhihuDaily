<template>
  <div class="comments">
    <!--头部-->
		<header class="header" ref="header">
      <div class="header-left">
        <i class="fa fa-arrow-left" aria-hidden="true" @click="goBack"></i>
  			<span>{{shortComments.length}}条点评</span>
      </div>
      <div class="header-right">
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
      </div>
		</header>
    <!--内容-->
    <div class="comments-content">
      <!--长评论-->
      <div class="long-comments">
        <h3>{{longComments.length}}条长评论</h3>
        <div class="long-comments-content" :style="{height:longHeight}">
          <div v-if="longComments.length==0" class="no-content">深度长评虚位以待</div>
          <li class="comments-li" v-for="(item, key) in longComments">
            <div class="author">
              <span>
                <img :src="item.avatar" class="avator" />
                <span class="author-name">{{item.author}}</span>
              </span>
              <i class="fa fa-thumbs-up" aria-hidden="true"><span>{{item.likes}}</span></i>
            </div>
            <div class="content">
              <p>{{item.content}}</p>
            </div>
            <div class="time">
              <span>{{item.time}}</span>
            </div>
          </li>
        </div>
      </div>
      <!--短评论-->
      <div class="short-comments">
        <h3 @click="spreadContent">
          <span>{{shortComments.length}}条长评论</span>
          <i class="fa fa-angle-double-down" aria-hidden="true"></i>
        </h3>
        <div class="short-comments-content" v-show="this.spreadState">
          <li class="comments-li" v-for="(item, key) in shortComments">
            <div class="author">
              <span>
                <img :src="item.avatar" class="avator" />
                <span class="author-name">{{item.author}}</span>
              </span>
              <i class="fa fa-thumbs-up" aria-hidden="true"><span>{{item.likes}}</span></i>
            </div>
            <div class="content">
              <p>{{item.content}}</p>
            </div>
            <div class="time">
              <span>{{item.time}}</span>
              <span class="spread">展开</span>
            </div>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editors',
  data () {
    return {
      longComments: '',
      shortComments: '',
      longHeight: '',
      spreadState: false
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      const commentsId = JSON.parse(sessionStorage.getItem('commentsId'))
      this.$http.get('https://zhihu-daily.leanapp.cn/api/v1/contents/' + commentsId + '/long-comments').then(function (data) {
        console.log(data)
        this.longComments = data.body.COMMENTS.comments
        this.getHeight()
      }, function (response) {
        console.log('请求失败')
      })
      this.$http.get('https://zhihu-daily.leanapp.cn/api/v1/contents/' + commentsId + '/short-comments').then(function (data) {
        console.log(data)
        this.shortComments = data.body.COMMENTS.comments
      }, function (response) {
        console.log('请求失败')
      })
    },
    goBack () {
      this.$router.go(-1)
    },
    getHeight () {
      let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      let headerHeight = this.$refs.header.offsetHeight
      this.longHeight = height - headerHeight - (headerHeight * 4 / 5 * 2) + 'px'
      if (this.longComments.length === 0) {
        this.longHeight = this.longHeight
      } else {
        this.longHeight = 'auto'
      }
    },
    spreadContent () {
      if (this.spreadState) {
        this.spreadState = false
      } else {
        this.spreadState = true
      }
    }
  }
}
</script>

<style scoped>
.fa-arrow-left,
.fa-pencil-square-o {
  padding: .5rem;
}
.comments-content {
  padding-top: 1.5rem;
}
.long-comments {
  width: 100%;
  height: 100%;
}
.no-content {
  padding-top: 5rem;
  width: 100%;
  height: 1rem;
  text-align: center;
  color: #999;
}
.comments-li {
  position: relative;
  padding: .4rem .5rem .5rem 1.5rem;
  border-bottom: 1px solid #ccc;
  list-style: none;
}
.fa-angle-double-down,
.fa-angle-double-up {
  padding: .3rem .5rem;
  color: #cdcdcd;
}
.fa-thumbs-up {
  color: #999;
}
.fa-thumbs-up span {
  margin-left: .1rem;
  font-size: .3rem;
  vertical-align: middle;
}
h3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .3rem;
  height: 1.2rem;
  border-bottom: 1px solid #ccc;
}
.author {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.avator {
  position: absolute;
  top: .3rem;
  left: .2rem;
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
}
.author-name {
  font-weight: bold;
}
.content p {
  padding: .5rem 0;
  color: #666;
}
.time {
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: .3rem;
}
</style>
