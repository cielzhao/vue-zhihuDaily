webpackJsonp([1],{"5W1q":function(t,e){},"5XWS":function(t,e){},"94lq":function(t,e){},F9bL:function(t,e){},Jgkf:function(t,e){},K5K1:function(t,e){},Lr6H:function(t,e,a){t.exports=a.p+"static/img/bg.129a804.jpg"},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={name:"App",computed:{key:function(){return void 0!==this.$route.name?this.$route.name+new Date:this.$route+new Date}}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{key:this.key})],1)},staticRenderFns:[]};var o=a("VU/8")(i,n,!1,function(t){a("K5K1")},null,null).exports,r=a("/ocq"),c=a("//Fk"),l=a.n(c),h={props:{show:{type:Boolean,default:!1},pos:{type:String,default:"left"},tran:{type:String,default:"overlay"}},data:function(){return{drawerWidth:0,translateX:0}},watch:{show:function(){this.show?this.$emit("on-show"):this.$emit("on-hide"),"overlay"!=this.tran&&(this.show?this.translateX="left"==this.pos?this.drawerWidth:-this.drawerWidth:this.translateX=0)}},mounted:function(){},methods:{hideMask:function(){this.$emit("change-show",!1)}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-drawer"},[a("div",{staticClass:"main"},[t._t("default"),t._v(" "),a("div",{staticClass:"mask",class:t.show?"active":"",attrs:{id:"mask"},on:{click:t.hideMask}})],2),t._v(" "),a("div",{ref:"drawer",staticClass:"drawer",class:["left"!=t.pos?"drawer-right":"drawer-left",t.show?"active":""]},[t._t("drawer")],2)])},staticRenderFns:[]};var u=a("VU/8")(h,d,!1,function(t){a("Jgkf")},null,null).exports,v=a("mvHQ"),m=a.n(v),f=(a("mgS3"),{props:["topStories"],name:"HomeSlider",data:function(){return{swiperOption:{notNextTick:!0,autoplay:3500,setWrapperSize:!0,pagination:{el:".swiper-pagination"},paginationClickable:!0,mousewheelControl:!0,observeParents:!0}}},methods:{detailContent:function(t){var e=m()(this.topStories[t].id);this.$router.push({path:"/detail",query:{detailId:e}})}}}),p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("swiper",{staticClass:"top-stories-view",attrs:{options:t.swiperOption}},[t._l(t.topStories,function(e,s){return a("swiper-slide",{key:s,style:{backgroundImage:"url("+e.image+")"}},[a("h2",{staticClass:"slider-title",on:{click:function(e){t.detailContent(s)}}},[t._v(t._s(e.title))])])}),t._v(" "),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),t._v(" "),a("div",{staticClass:"swiper-mask"})],2)},staticRenderFns:[]};var g=a("VU/8")(f,p,!1,function(t){a("5XWS")},null,null).exports,_={props:["stories","editorsData","loadingState"],name:"newsList",methods:{detailContent:function(t,e){console.log(this.stories);var a=m()(this.stories[t].stories[e].id);this.$router.push({path:"/detail",query:{detailId:a}})},editorsContent:function(){sessionStorage.setItem("editorsData",m()(this.editorsData)),this.$router.push({path:"/editors"})}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stories-view"},[t._l(t.stories,function(e,s){return a("ul",{staticClass:"stories-view-list"},[t.editorsData?t._e():a("div",{staticClass:"list-title"},[t._v(t._s(e.date))]),t._v(" "),t.editorsData?a("div",{staticClass:"editors",on:{click:t.editorsContent}},[a("span",[t._v("主编")]),a("img",{attrs:{src:t.editorsData[0].avatar}})]):t._e(),t._v(" "),t._l(e.stories,function(e,i){return a("li",{key:i,staticClass:"stories-list",on:{click:function(e){t.detailContent(s,i)}}},[a("h3",{class:{imgNone:!e.images}},[t._v(t._s(e.title))]),t._v(" "),e.images?a("img",{attrs:{src:e.images[0]}}):t._e()])})],2)}),t._v(" "),t.loadingState?a("div",{staticClass:"loading"},[a("i",{staticClass:"fa fa-spinner fa-pulse fa-fw"}),t._v(" "),a("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e()],2)},staticRenderFns:[]};var w=a("VU/8")(_,C,!1,function(t){a("bQoT")},"data-v-151a88c2",null).exports,S=a("jpVj"),D=a.n(S),y=a("mtWM"),b=a.n(y),k="http://zhapi.garychang.cn/api/4",x={lastStories:k+"/news/latest",beforeStories:k+"/news/before/",themes:k+"/themes",theme:k+"/theme/",story:k+"/story/",extra:k+"/story-extra/"},$={props:["haswatch"],name:"sidebar",data:function(){return{avatarUrl:D.a,themes:"",themesId:""}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this,e=x.themes;b.a.get(e).then(function(e){console.log(e),t.themes=e.data.others},function(t){console.log("请求失败")})},themesContent:function(t){this.themesId=this.themes[t].id,this.$router.replace({path:"/_empty"}),this.$router.replace({path:"/ThemesView/",query:{themesId:this.themesId}}),document.getElementsByTagName("body")[0].className=""},goHome:function(){this.$router.replace({path:"/_empty"}),this.$router.replace({path:"/"}),document.getElementsByTagName("body")[0].className=""}}},E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar"},[a("div",{staticClass:"personal"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:t.avatarUrl}}),a("span",[t._v("Ciel")])]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"go-home",on:{click:t.goHome}},[a("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"home"},[t._v("首页")])]),t._v(" "),a("div",{staticClass:"themes-view"},t._l(t.themes,function(e,s){return a("li",{staticClass:"themes-list",on:{click:function(e){t.themesContent(s)}}},[a("span",{attrs:{id:e.id}},[t._v(t._s(e.name))]),t._v(" "),e.id!=t.haswatch?a("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}}):t._e(),t._v(" "),e.id==t.haswatch?a("i",{staticClass:"fa fa-chevron-right",attrs:{"aria-hidden":"true"}}):t._e()])}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info"},[e("div",{staticClass:"info-left"},[e("i",{staticClass:"fa fa-star",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"favorite"},[this._v("我的收藏")])]),this._v(" "),e("div",{staticClass:"info-right"},[e("i",{staticClass:"fa fa-download",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"favorite"},[this._v("离线下载")])])])}]};var H=a("VU/8")($,E,!1,function(t){a("F9bL")},"data-v-311c897e",null).exports,W=0,T={name:"Home",data:function(){return{pos:"left",tran:"overlay",drawerShow:!1,topStories:"",stories:[],homeStr:"首页",fullscreenLoading:!0,loadingState:!1,editorsData:"",isThemes:!1}},created:function(){this.fetchData()},mounted:function(){Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),"S+":this.getMilliseconds()};for(var a in/(y+)/i.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[a]:("00"+e[a]).substr((""+e[a]).length)));return t};for(var t,e=[],a=(new Date).format("yyyyMMdd"),s=0;s<10;s++)t=a-s,e.push(t);var i=this;window.addEventListener("scroll",function(){var t=window.innerHeight,a=Math.max(document.body.offsetHeight,document.documentElement.offsetHeight),s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t+s===a&&++W<=10&&i.fetchBeforeData(e[W-1]);for(var n=document.getElementsByClassName("header")[0].offsetHeight,o=document.getElementsByClassName("stories-view-list"),r=0;r<o.length;r++){var c=o[r].getBoundingClientRect().top;if(o[r].getElementsByClassName("list-title").length>0){var l=o[r].getElementsByClassName("list-title")[0].innerText;c<n&&(i.homeStr=l)}}s<190&&(i.homeStr="首页")})},methods:{directionFlip:function(){this.drawerToggle(),console.log(this.drawerShow)},drawerToggle:function(){this.drawerShow=!this.drawerShow},changeDrawerShow:function(t){this.drawerShow=t,console.log(t)},fetchData:function(){var t=this,e=x.lastStories;b.a.get(e).then(function(e){console.log(e),t.fullscreenLoading=!1,t.topStories=e.data.top_stories;var a={date:"今日热闻",stories:e.data.stories};t.stories.push(a)}).catch(function(t){console.log(t)})},fetchBeforeData:function(t){var e=this,a=x.beforeStories+t;e.addInterceptors(),b.a.get(a).then(function(t){for(var a=t.data.date,s=a.split(""),i="",n=0;n<s.length;n++)3!=n&&5!=n||(s[n]=s[n]+"/"),i+=s[n];var o={date:a.substr(4,2)+"月"+a.substr(6,2)+"日 星期"+"日一二三四五六".charAt(new Date(i).getDay()),stories:t.data.stories};e.stories.push(o)},function(t){console.log("请求失败")})},addInterceptors:function(){var t=this;b.a.interceptors.request.use(function(e){return t.loadingState=!0,e},function(t){return l.a.reject(t)}),b.a.interceptors.response.use(function(e){return t.loadingState=!1,e},function(t){return l.a.reject(t)})},goLogin:function(){this.$router.push({path:"/login"})},onShow:function(){document.getElementsByTagName("body")[0].className="noscroll"},onHide:function(){document.getElementsByTagName("body")[0].className=""}},components:{Drawer:u,HomeSlider:g,NewsList:w,Sidebar:H}},I={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("drawer",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{show:t.drawerShow,pos:t.pos,tran:t.tran},on:{"change-show":t.changeDrawerShow,"on-show":t.onShow,"on-hide":t.onHide}},[a("div",{staticClass:"layout",attrs:{slot:"drawer"},slot:"drawer"},[a("sidebar")],1),t._v(" "),a("header",{staticClass:"header"},[a("div",{staticClass:"header-left"},[a("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"},on:{click:t.directionFlip}}),t._v(" "),a("span",{staticClass:"home"},[t._v(t._s(this.homeStr))])]),t._v(" "),a("div",{staticClass:"header-right"},[a("i",{staticClass:"fa fa-bell",attrs:{"aria-hidden":"true"},on:{click:t.goLogin}}),t._v(" "),a("i",{staticClass:"fa fa-ellipsis-v",attrs:{"aria-hidden":"true"}})])]),t._v(" "),a("home-slider",{staticClass:"mySwiper",attrs:{topStories:t.topStories}}),t._v(" "),a("news-list",{attrs:{stories:t.stories,loadingState:t.loadingState,editorsData:t.editorsData}})],1)},staticRenderFns:[]};var N=a("VU/8")(T,I,!1,function(t){a("94lq")},"data-v-27b3d6de",null).exports,V={name:"themesView",components:{Drawer:u,NewsList:w,Sidebar:H},data:function(){return{themesContent:[],themesData:"",themeId:"",hasWatch:!0,tipWatchVal:"",tipWatchText:"知乎日报:已关注",pos:"left",tran:"overlay",drawerShow:!1,haswatch:""}},created:function(){this.fetchData()},methods:{directionFlip:function(){this.drawerToggle(),console.log(this.drawerShow)},drawerToggle:function(){this.drawerShow=!this.drawerShow},changeDrawerShow:function(t){this.drawerShow=t,console.log(t)},fetchData:function(){var t=this;this.themeId=window.location.href.split("?")[1].split("=")[1];var e=x.theme+this.themeId;b.a.get(e).then(function(e){console.log(e),t.themesContent.push(e.data),t.themesData=t.themesContent[0]},function(t){console.log("请求失败")})},addWatch:function(){this.tipWatchVal=!0,this.hasWatch?(this.hasWatch=!1,this.tipWatchText="知乎日报:已关注",this.haswatch=window.location.href.split("?")[1].split("=")[1]):(this.hasWatch=!0,this.tipWatchText="知乎日报:已取消关注",this.haswatch=""),this.tipWatchHide()},tipWatchHide:function(){var t=this;setTimeout(function(){t.tipWatchVal=!1},2e3)}}},B={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("drawer",{attrs:{show:t.drawerShow,pos:t.pos,tran:t.tran},on:{"change-show":t.changeDrawerShow}},[a("div",{staticClass:"layout",attrs:{slot:"drawer"},slot:"drawer"},[a("sidebar",{attrs:{haswatch:t.haswatch}})],1),t._v(" "),a("div",{staticClass:"container"},[a("header",{staticClass:"header"},[a("div",{staticClass:"header-left"},[a("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"},on:{click:t.directionFlip}}),t._v(" "),a("span",{staticClass:"home"},[t._v(t._s(t.themesData.name))])]),t._v(" "),a("div",{staticClass:"header-right"},[a("i",{staticClass:"fa",class:{"fa-plus-square-o":t.hasWatch,"fa-minus-square-o":!t.hasWatch},attrs:{"aria-hidden":"true"},on:{click:t.addWatch}})]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:this.tipWatchVal,expression:"this.tipWatchVal"}],staticClass:"watch-tip",class:{fadeInUp:this.tipWatchVal}},[a("span",[t._v(t._s(t.tipWatchText))])])]),t._v(" "),a("div",{staticClass:"top-stories-view",style:{backgroundImage:"url("+t.themesData.background+")"}},[a("h2",{staticClass:"img-title"},[t._v(t._s(t.themesData.description))])]),t._v(" "),a("news-list",{attrs:{stories:t.themesContent,editorsData:t.themesData.editors}})],1)])},staticRenderFns:[]};var F=a("VU/8")(V,B,!1,function(t){a("O/C2")},"data-v-1c07c681",null).exports,R={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"share"},[a("div",{staticClass:"share-content"},[a("h3",[t._v("分享")]),t._v(" "),a("div",{staticClass:"icon-list"},[a("li",[a("div",{staticClass:"icon weibo"},[a("i",{staticClass:"fa fa-weibo",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("span",{staticClass:"icon-name"},[t._v("新浪微博")])]),t._v(" "),a("li",[a("div",{staticClass:"icon weixin"},[a("i",{staticClass:"fa fa-weixin",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("span",{staticClass:"icon-name"},[t._v("微信")])]),t._v(" "),a("li",[a("div",{staticClass:"icon moments"},[a("i",{staticClass:"fa fa-chrome",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("span",{staticClass:"icon-name"},[t._v("朋友圈")])]),t._v(" "),a("li",[a("div",{staticClass:"icon qq"},[a("i",{staticClass:"fa fa-qq",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("span",{staticClass:"icon-name"},[t._v("QQ")])]),t._v(" "),a("li",[a("div",{staticClass:"icon facebook"},[a("i",{staticClass:"fa fa-facebook",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("span",{staticClass:"icon-name"},[t._v("Facebook")])]),t._v(" "),a("li",[a("div",{staticClass:"icon twitter"},[a("i",{staticClass:"fa fa-twitter",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("span",{staticClass:"icon-name"},[t._v("Twitter")])]),t._v(" "),a("li",[a("div",{staticClass:"icon more"},[a("i",{staticClass:"fa fa-ellipsis-h fa-lg",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("span",{staticClass:"icon-name"},[t._v("更多平台")])])])])])}]};var U={name:"detail",components:{Share:a("VU/8")({name:"share"},R,!1,function(t){a("Urgv")},"data-v-03614a35",null).exports},data:function(){return{contentData:"",contentId:"",extraData:"",shareState:!1,upvoteState:!1,popularity:""}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.contentId=window.location.href.split("?")[1].split("=")[1],sessionStorage.setItem("commentsId",m()(this.contentId));var e=x.story+this.contentId;b.a.get(e).then(function(e){console.log(e),t.contentData=e.data},function(t){console.log("请求失败")});var a=x.extra+this.contentId;b.a.get(a).then(function(e){console.log(e),t.extraData=e.data,t.popularity=t.extraData.popularity},function(t){console.log("请求失败")})},goBack:function(){this.$router.go(-1)},themesContent:function(){var t=this.contentData.theme.id;this.$router.push({path:"/",query:{themesId:t}})},shareShow:function(){this.shareState=!0},shareHide:function(){this.shareState=!1},upvoteToggle:function(){this.upvoteState?(this.upvoteState=!1,this.popularity=this.popularity-1):(this.upvoteState=!0,this.popularity=this.popularity+1)},goLogin:function(){this.$router.push({path:"/login"})},goComments:function(){this.$router.push({path:"/comments"})}}},q={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail-content"},[a("link",{attrs:{href:t.contentData.css,rel:"stylesheet",type:"text/css"}}),t._v(" "),a("header",{staticClass:"header"},[a("div",{staticClass:"header-left"},[a("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"},on:{click:t.goBack}})]),t._v(" "),a("div",{staticClass:"header-right"},[a("i",{staticClass:"fa fa-share-alt",attrs:{"aria-hidden":"true"},on:{click:t.shareShow}}),t._v(" "),a("i",{staticClass:"fa fa-star",attrs:{"aria-hidden":"true"},on:{click:t.goLogin}}),t._v(" "),a("i",{staticClass:"fa fa-commenting",attrs:{"aria-hidden":"true"},on:{click:t.goComments}},[a("span",[t.extraData.comments?t._e():a("span",[t._v("...")]),t._v(t._s(t.extraData.comments))])]),t._v(" "),a("i",{staticClass:"fa fa-thumbs-up",class:{upvote:t.upvoteState},attrs:{"aria-hidden":"true"},on:{click:t.upvoteToggle}},[a("span",[t.extraData.popularity?t._e():a("span",[t._v("...")]),t._v(t._s(this.popularity))])])])]),t._v(" "),t.contentData.image?a("div",{staticClass:"top-stories-view",style:{backgroundImage:"url("+t.contentData.image+")"}},[a("h2",{staticClass:"img-title"},[t._v(t._s(t.contentData.title))]),t._v(" "),a("span",{staticClass:"img-source"},[t._v(t._s(t.contentData.image_source))]),t._v(" "),a("div",{staticClass:"swiper-mask"})]):t._e(),t._v(" "),a("div",{staticClass:"content-view",class:{imgNone:t.contentData.image},domProps:{innerHTML:t._s(t.contentData.body)}}),t._v(" "),t.contentData.theme?a("div",{staticClass:"content-source"},[a("div",{staticClass:"source-theme",on:{click:t.themesContent}},[a("img",{attrs:{src:t.contentData.theme.thumbnail}}),t._v(" "),a("span",[t._v("本文来自："+t._s(t.contentData.theme.name))])]),t._v(" "),t._m(0)]):t._e(),t._v(" "),a("share",{directives:[{name:"show",rawName:"v-show",value:t.shareState,expression:"shareState"}]}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.shareState,expression:"shareState"}],staticClass:"share-mask",on:{click:t.shareHide}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"source-follow"},[e("span",[this._v("关注")])])}]};var L=a("VU/8")(U,q,!1,function(t){a("oxDk")},null,null).exports,M={name:"editors",data:function(){return{editorsData:""}},created:function(){this.getData()},methods:{getData:function(){this.editorsData=JSON.parse(sessionStorage.getItem("editorsData")),console.log(this.editorsData)},goBack:function(){this.$router.go(-1)}}},O={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"editors"},[a("header",{staticClass:"header"},[a("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"},on:{click:t.goBack}}),t._v(" "),a("span",[t._v("主编")])]),t._v(" "),a("div",{staticClass:"editors-content"},[a("img",{attrs:{src:t.editorsData[0].avatar}}),t._v(" "),a("div",{staticClass:"name"},[a("span",[t._v(t._s(t.editorsData[0].name))]),t._v(" "),a("span",{staticClass:"alias"},[t._v(t._s(t.editorsData[0].bio))])])])])},staticRenderFns:[]};var j=a("VU/8")(M,O,!1,function(t){a("OrbQ")},"data-v-d6ace048",null).exports,Q={name:"editors",data:function(){return{longComments:"",shortComments:"",longHeight:"",spreadState:!1}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this,e=JSON.parse(sessionStorage.getItem("commentsId")),a=x.story+e+"/long-comments";b.a.get(a).then(function(e){console.log(e),t.longComments=e.data.comments,t.getHeight()},function(t){console.log("请求失败")});var s=x.story+e+"/short-comments";b.a.get(s).then(function(e){console.log(e),t.shortComments=e.data.comments},function(t){console.log("请求失败")})},goBack:function(){this.$router.go(-1)},getHeight:function(){var t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,e=this.$refs.header.offsetHeight;this.longHeight=t-e-4*e/5*2+"px",0===this.longComments.length?this.longHeight=this.longHeight:this.longHeight="auto"},spreadContent:function(){this.spreadState?this.spreadState=!1:this.spreadState=!0}}},X={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comments"},[a("header",{ref:"header",staticClass:"header"},[a("div",{staticClass:"header-left"},[a("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"},on:{click:t.goBack}}),t._v(" "),a("span",[t._v(t._s(t.shortComments.length)+"条点评")])]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"comments-content"},[a("div",{staticClass:"long-comments"},[a("h3",[t._v(t._s(t.longComments.length)+"条长评论")]),t._v(" "),a("div",{staticClass:"long-comments-content",style:{height:t.longHeight}},[0==t.longComments.length?a("div",{staticClass:"no-content"},[t._v("深度长评虚位以待")]):t._e(),t._v(" "),t._l(t.longComments,function(e,s){return a("li",{staticClass:"comments-li"},[a("div",{staticClass:"author"},[a("span",[a("img",{staticClass:"avator",attrs:{src:e.avatar}}),t._v(" "),a("span",{staticClass:"author-name"},[t._v(t._s(e.author))])]),t._v(" "),a("i",{staticClass:"fa fa-thumbs-up",attrs:{"aria-hidden":"true"}},[a("span",[t._v(t._s(e.likes))])])]),t._v(" "),a("div",{staticClass:"content"},[a("p",[t._v(t._s(e.content))])]),t._v(" "),a("div",{staticClass:"time"},[a("span",[t._v(t._s(e.time))])])])})],2)]),t._v(" "),a("div",{staticClass:"short-comments"},[a("h3",{on:{click:t.spreadContent}},[a("span",[t._v(t._s(t.shortComments.length)+"条长评论")]),t._v(" "),a("i",{staticClass:"fa fa-angle-double-down",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:this.spreadState,expression:"this.spreadState"}],staticClass:"short-comments-content"},t._l(t.shortComments,function(e,s){return a("li",{staticClass:"comments-li"},[a("div",{staticClass:"author"},[a("span",[a("img",{staticClass:"avator",attrs:{src:e.avatar}}),t._v(" "),a("span",{staticClass:"author-name"},[t._v(t._s(e.author))])]),t._v(" "),a("i",{staticClass:"fa fa-thumbs-up",attrs:{"aria-hidden":"true"}},[a("span",[t._v(t._s(e.likes))])])]),t._v(" "),a("div",{staticClass:"content"},[a("p",[t._v(t._s(e.content))])]),t._v(" "),a("div",{staticClass:"time"},[a("span",[t._v(t._s(e.time))]),t._v(" "),a("span",{staticClass:"spread"},[t._v("展开")])])])}))])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-right"},[e("i",{staticClass:"fa fa-pencil-square-o",attrs:{"aria-hidden":"true"}})])}]};var K=a("VU/8")(Q,X,!1,function(t){a("wDXc")},"data-v-1fa6c8b6",null).exports,J=a("Lr6H"),A=a.n(J),z={name:"login",data:function(){return{loginBgUrl:A.a}},methods:{goBack:function(){this.$router.go(-1)}}},P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("div",{staticClass:"bg bg-blur",style:{backgroundImage:"url("+t.loginBgUrl+")"}}),t._v(" "),a("div",{staticClass:"login-content"},[a("header",{staticClass:"header"},[a("div",{staticClass:"header-left"},[a("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"},on:{click:t.goBack}}),t._v(" "),a("span",{staticClass:"home"},[t._v("登录")])])]),t._v(" "),a("h2",[t._v("知乎日报")]),t._v(" "),a("h3",[t._v("使用微博登录")]),t._v(" "),t._m(0)]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-btn"},[e("div",{staticClass:"weibo"},[e("i",{staticClass:"fa fa-weibo",attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",[this._v("新浪微博")])]),this._v(" "),e("div",{staticClass:"tencent"},[e("i",{staticClass:"fa fa-tencent-weibo",attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",[this._v("腾讯微博")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"explanation"},[e("span",[this._v("知乎日报不会未经同意通过你的微博账号发布任何信息")])])}]};var Y=a("VU/8")(z,P,!1,function(t){a("dpKs")},"data-v-03bbffae",null).exports;s.default.use(r.a);var G=new r.a({routes:[{path:"/",name:"home",component:N},{path:"/ThemesView",name:"ThemesView",component:F},{path:"/detail",name:"detail",component:L},{path:"/editors",name:"editors",component:j},{path:"/comments",name:"comments",component:K},{path:"/login",name:"login",component:Y}]}),Z=a("Rf8U"),tt=a.n(Z),et=a("7QTg"),at=a.n(et),st=a("zL8q"),it=a.n(st);a("tvR6"),a("sVYa"),a("5W1q");s.default.use(at.a),s.default.use(it.a),s.default.use(tt.a,b.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:G,components:{App:o},template:"<App/>"})},"O/C2":function(t,e){},OrbQ:function(t,e){},Urgv:function(t,e){},bQoT:function(t,e){},dpKs:function(t,e){},jpVj:function(t,e,a){t.exports=a.p+"static/img/avatar.0f15e14.jpg"},mgS3:function(t,e){},oxDk:function(t,e){},tvR6:function(t,e){},wDXc:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4a9c8bd46a85197f5c0f.js.map