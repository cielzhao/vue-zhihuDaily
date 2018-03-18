//const baseUrl = 'https://zhihu-daily.leanapp.cn'
const baseUrl = 'http://zhapi.garychang.cn/api/4'
export default {
	//首页最新消息
  lastStories: baseUrl + '/news/latest',
  //过去的消息
  beforeStories: baseUrl + '/news/before/',
  //首页左侧边栏主题日报列表
  themes: baseUrl + '/themes',
  //主题内容
  theme: baseUrl + '/theme/',
  //新闻详情内容
  story: baseUrl + '/story/',
  //新闻详情内容其他信息
  extra: baseUrl + '/story-extra/',
}