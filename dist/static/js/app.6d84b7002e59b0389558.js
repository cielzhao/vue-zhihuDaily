webpackJsonp([0],{0:function(t,e){},"0EC9":function(t,e,s){"use strict";var a=s("3cXf"),i=s.n(a);e.a={props:["stories","editorsData"],name:"newsList",methods:{detailContent:function(t,e){console.log(this.stories);var s=i()(this.stories[t].stories[e].id);this.$router.push({path:"/detail",query:{detailId:s}})},editorsContent:function(){sessionStorage.setItem("editorsData",i()(this.editorsData)),this.$router.push({path:"/editors"})}}}},"2uz+":function(t,e,s){"use strict";var a=s("3cXf"),i=s.n(a),n=s("qBmJ");s.n(n);e.a={props:["topStories"],name:"HomeSlider",data:function(){return{swiperOption:{notNextTick:!0,autoplay:3500,setWrapperSize:!0,pagination:{el:".swiper-pagination"},paginationClickable:!0,mousewheelControl:!0,observeParents:!0}}},methods:{detailContent:function(t){var e=i()(this.topStories[t].id);this.$router.push({path:"/detail",query:{detailId:e}})}}}},"34O/":function(t,e,s){"use strict";var a=s("3cXf"),i=s.n(a),n=s("fenB");e.a={name:"detail",components:{Share:n.a},data:function(){return{contentData:"",contentId:"",extraData:"",shareState:!1,upvoteState:!1}},created:function(){this.fetchData()},methods:{fetchData:function(){this.contentId=window.location.href.split("?")[1].split("=")[1],sessionStorage.setItem("commentsId",i()(this.contentId)),this.$http.get("https://zhihu-daily.leanapp.cn/api/v1/contents/"+this.contentId).then(function(t){console.log(t),this.contentData=t.body.CONTENTS},function(t){console.log("请求失败")}),this.$http.get("https://zhihu-daily.leanapp.cn/api/v1/contents/extra/"+this.contentId).then(function(t){console.log(t),this.extraData=t.body.DES},function(t){console.log("请求失败")})},goBack:function(){this.$router.go(-1)},themesContent:function(){var t=this.contentData.theme.id;this.$router.push({path:"/themesView",query:{themesId:t}})},shareShow:function(){this.shareState=!0},shareHide:function(){this.shareState=!1},upvoteToggle:function(){this.upvoteState?this.upvoteState=!1:this.upvoteState=!0},goLogin:function(){this.$router.push({path:"/login"})},goComments:function(){this.$router.push({path:"/comments"})}}}},"3HBq":function(t,e){},"3Rkq":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"share"},[s("div",{staticClass:"share-content"},[s("h3",[t._v("分享")]),t._v(" "),s("div",{staticClass:"icon-list"},[s("li",[s("div",{staticClass:"icon weibo"},[s("i",{staticClass:"fa fa-weibo",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("span",{staticClass:"icon-name"},[t._v("新浪微博")])]),t._v(" "),s("li",[s("div",{staticClass:"icon weixin"},[s("i",{staticClass:"fa fa-weixin",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("span",{staticClass:"icon-name"},[t._v("微信")])]),t._v(" "),s("li",[s("div",{staticClass:"icon moments"},[s("i",{staticClass:"fa fa-chrome",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("span",{staticClass:"icon-name"},[t._v("朋友圈")])]),t._v(" "),s("li",[s("div",{staticClass:"icon qq"},[s("i",{staticClass:"fa fa-qq",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("span",{staticClass:"icon-name"},[t._v("QQ")])]),t._v(" "),s("li",[s("div",{staticClass:"icon facebook"},[s("i",{staticClass:"fa fa-facebook",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("span",{staticClass:"icon-name"},[t._v("Facebook")])]),t._v(" "),s("li",[s("div",{staticClass:"icon twitter"},[s("i",{staticClass:"fa fa-twitter",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("span",{staticClass:"icon-name"},[t._v("Twitter")])]),t._v(" "),s("li",[s("div",{staticClass:"icon more"},[s("i",{staticClass:"fa fa-ellipsis-h fa-lg",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("span",{staticClass:"icon-name"},[t._v("更多平台")])])])])])}],n={render:a,staticRenderFns:i};e.a=n},"3ZtO":function(t,e){},"4hm2":function(t,e,s){"use strict";function a(t){s("hJ7K")}var i=s("2uz+"),n=s("tyvF"),o=s("y0f9"),r=a,c=o(i.a,n.a,!1,r,null,null);e.a=c.exports},"6FZt":function(t,e,s){"use strict";var a=s("3cXf"),i=s.n(a),n=s("jpVj"),o=s.n(n);e.a={props:["haswatch"],name:"sidebar",data:function(){return{avatarUrl:o.a,themes:"",themesId:""}},created:function(){this.fetchData()},methods:{fetchData:function(){this.$http.get("https://zhihu-daily.leanapp.cn/api/v1/themes").then(function(t){this.themes=t.body.THEMES.others},function(t){console.log("请求失败")})},themesContent:function(t){this.themesId=i()(this.themes[t].id),this.$router.replace({path:"/_empty"}),this.$router.replace({path:"/ThemesView/",query:{themesId:this.themesId}}),document.getElementsByTagName("body")[0].className=""},goHome:function(){this.$router.replace({path:"/_empty"}),this.$router.replace({path:"/"}),document.getElementsByTagName("body")[0].className=""}}}},AMdb:function(t,e,s){"use strict";function a(t){s("JBM1")}var i=s("LtOY"),n=s("k9DA"),o=s("y0f9"),r=a,c=o(i.a,n.a,!1,r,"data-v-29e0404d",null);e.a=c.exports},AwI0:function(t,e,s){"use strict";var a=s("Lr6H"),i=s.n(a);e.a={name:"login",data:function(){return{loginBgUrl:i.a}},methods:{goBack:function(){this.$router.go(-1)}}}},BD0c:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("drawer",{attrs:{show:t.drawerShow,pos:t.pos,tran:t.tran},on:{"change-show":t.changeDrawerShow}},[s("div",{staticClass:"layout",attrs:{slot:"drawer"},slot:"drawer"},[s("sidebar",{attrs:{haswatch:t.haswatch}})],1),t._v(" "),s("div",{staticClass:"container"},[s("header",{staticClass:"header"},[s("div",{staticClass:"header-left"},[s("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"},on:{click:t.directionFlip}}),t._v(" "),s("span",{staticClass:"home"},[t._v(t._s(t.themesData.name))])]),t._v(" "),s("div",{staticClass:"header-right"},[s("i",{staticClass:"fa",class:{"fa-plus-square-o":t.hasWatch,"fa-minus-square-o":!t.hasWatch},attrs:{"aria-hidden":"true"},on:{click:t.addWatch}})]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:this.tipWatchVal,expression:"this.tipWatchVal"}],staticClass:"watch-tip",class:{fadeInUp:this.tipWatchVal}},[s("span",[t._v(t._s(t.tipWatchText))])])]),t._v(" "),s("div",{staticClass:"top-stories-view",style:{backgroundImage:"url("+t.themesData.background+")"}},[s("h2",{staticClass:"img-title"},[t._v(t._s(t.themesData.description))])]),t._v(" "),s("news-list",{attrs:{stories:t.themesContent,editorsData:t.themesData.editors}})],1)])},i=[],n={render:a,staticRenderFns:i};e.a=n},BR6V:function(t,e,s){"use strict";var a="undefined"!=typeof window;a&&(window.Swiper=s("Bnvi")),e.a={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&a&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&a){delete t.options.notNextTick;var e=!1;for(var s in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(s)&&t.options[s]&&(e=!0,t.defaultSwiperClasses[s]=t.options[s]);var i=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(i):i()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},DGQt:function(t,e){},ERXc:function(t,e,s){"use strict";function a(t){s("DGQt")}var i=s("0EC9"),n=s("x+ex"),o=s("y0f9"),r=a,c=o(i.a,n.a,!1,r,"data-v-b038e40c",null);e.a=c.exports},EWNY:function(t,e){},"Ef/T":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},i=[],n={render:a,staticRenderFns:i};e.a=n},HBSQ:function(t,e){},IF0f:function(t,e){},"Id++":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comments"},[s("header",{ref:"header",staticClass:"header"},[s("div",{staticClass:"header-left"},[s("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"},on:{click:t.goBack}}),t._v(" "),s("span",[t._v(t._s(t.shortComments.length)+"条点评")])]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"comments-content"},[s("div",{staticClass:"long-comments"},[s("h3",[t._v(t._s(t.longComments.length)+"条长评论")]),t._v(" "),s("div",{staticClass:"long-comments-content",style:{height:t.longHeight}},[0==t.longComments.length?s("div",{staticClass:"no-content"},[t._v("深度长评虚位以待")]):t._e(),t._v(" "),t._l(t.longComments,function(e,a){return s("li",{staticClass:"comments-li"},[s("div",{staticClass:"author"},[s("span",[s("img",{staticClass:"avator",attrs:{src:e.avatar}}),t._v(" "),s("span",{staticClass:"author-name"},[t._v(t._s(e.author))])]),t._v(" "),s("i",{staticClass:"fa fa-thumbs-up",attrs:{"aria-hidden":"true"}},[s("span",[t._v(t._s(e.likes))])])]),t._v(" "),s("div",{staticClass:"content"},[s("p",[t._v(t._s(e.content))])]),t._v(" "),s("div",{staticClass:"time"},[s("span",[t._v(t._s(e.time))])])])})],2)]),t._v(" "),s("div",{staticClass:"short-comments"},[s("h3",{on:{click:t.spreadContent}},[s("span",[t._v(t._s(t.shortComments.length)+"条长评论")]),t._v(" "),s("i",{staticClass:"fa fa-angle-double-down",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:this.spreadState,expression:"this.spreadState"}],staticClass:"short-comments-content"},t._l(t.shortComments,function(e,a){return s("li",{staticClass:"comments-li"},[s("div",{staticClass:"author"},[s("span",[s("img",{staticClass:"avator",attrs:{src:e.avatar}}),t._v(" "),s("span",{staticClass:"author-name"},[t._v(t._s(e.author))])]),t._v(" "),s("i",{staticClass:"fa fa-thumbs-up",attrs:{"aria-hidden":"true"}},[s("span",[t._v(t._s(e.likes))])])]),t._v(" "),s("div",{staticClass:"content"},[s("p",[t._v(t._s(e.content))])]),t._v(" "),s("div",{staticClass:"time"},[s("span",[t._v(t._s(e.time))]),t._v(" "),s("span",{staticClass:"spread"},[t._v("展开")])])])}))])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header-right"},[s("i",{staticClass:"fa fa-pencil-square-o",attrs:{"aria-hidden":"true"}})])}],n={render:a,staticRenderFns:i};e.a=n},JBM1:function(t,e){},Lr6H:function(t,e,s){t.exports=s.p+"static/img/bg.129a804.jpg"},LtOY:function(t,e,s){"use strict";e.a={name:"editors",data:function(){return{editorsData:""}},created:function(){this.getData()},methods:{getData:function(){this.editorsData=JSON.parse(sessionStorage.getItem("editorsData")),console.log(this.editorsData)},goBack:function(){this.$router.go(-1)}}}},M93x:function(t,e,s){"use strict";function a(t){s("okgu")}var i=s("igi8"),n=s("UP3w"),o=s("y0f9"),r=a,c=o(i.a,n.a,!1,r,null,null);e.a=c.exports},Mp08:function(t,e,s){"use strict";function a(t){s("syVE")}var i=s("t4Cl"),n=s("Id++"),o=s("y0f9"),r=a,c=o(i.a,n.a,!1,r,"data-v-4edab45d",null);e.a=c.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("2HEv"),i=s("M93x"),n=s("YaEn"),o=s("y0Fx"),r=s("41jX"),c=s.n(r),l=s("D0oh"),h=(s.n(l),s("HBSQ"));s.n(h);a.a.use(c.a),a.a.use(o.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:n.a,components:{App:i.a},template:"<App/>"})},NkN2:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("div",{staticClass:"bg bg-blur",style:{backgroundImage:"url("+t.loginBgUrl+")"}}),t._v(" "),s("div",{staticClass:"login-content"},[s("header",{staticClass:"header"},[s("div",{staticClass:"header-left"},[s("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"},on:{click:t.goBack}}),t._v(" "),s("span",{staticClass:"home"},[t._v("登录")])])]),t._v(" "),s("h2",[t._v("知乎日报")]),t._v(" "),s("h3",[t._v("使用微博登录")]),t._v(" "),t._m(0)]),t._v(" "),t._m(1)])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-btn"},[s("div",{staticClass:"weibo"},[s("i",{staticClass:"fa fa-weibo",attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",[t._v("新浪微博")])]),t._v(" "),s("div",{staticClass:"tencent"},[s("i",{staticClass:"fa fa-tencent-weibo",attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",[t._v("腾讯微博")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"explanation"},[s("span",[t._v("知乎日报不会未经同意通过你的微博账号发布任何信息")])])}],n={render:a,staticRenderFns:i};e.a=n},PX7G:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail-content"},[s("link",{attrs:{href:t.contentData.css,rel:"stylesheet",type:"text/css"}}),t._v(" "),s("header",{staticClass:"header"},[s("div",{staticClass:"header-left"},[s("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"},on:{click:t.goBack}})]),t._v(" "),s("div",{staticClass:"header-right"},[s("i",{staticClass:"fa fa-share-alt",attrs:{"aria-hidden":"true"},on:{click:t.shareShow}}),t._v(" "),s("i",{staticClass:"fa fa-star",attrs:{"aria-hidden":"true"},on:{click:t.goLogin}}),t._v(" "),s("i",{staticClass:"fa fa-commenting",attrs:{"aria-hidden":"true"},on:{click:t.goComments}},[s("span",[t.extraData.comments?t._e():s("span",[t._v("...")]),t._v(t._s(t.extraData.comments))])]),t._v(" "),s("i",{staticClass:"fa fa-thumbs-up",class:{upvote:t.upvoteState},attrs:{"aria-hidden":"true"},on:{click:t.upvoteToggle}},[s("span",[t.extraData.popularity?t._e():s("span",[t._v("...")]),t._v(t._s(t.extraData.popularity))])])])]),t._v(" "),t.contentData.image?s("div",{staticClass:"top-stories-view",style:{backgroundImage:"url("+t.contentData.image+")"}},[s("h2",{staticClass:"img-title"},[t._v(t._s(t.contentData.title))]),t._v(" "),s("span",{staticClass:"img-source"},[t._v(t._s(t.contentData.image_source))])]):t._e(),t._v(" "),s("div",{staticClass:"content-view",class:{imgNone:t.contentData.image},domProps:{innerHTML:t._s(t.contentData.body)}}),t._v(" "),t.contentData.theme?s("div",{staticClass:"content-source"},[s("div",{staticClass:"source-theme",on:{click:t.themesContent}},[s("img",{attrs:{src:t.contentData.theme.thumbnail}}),t._v(" "),s("span",[t._v("本文来自："+t._s(t.contentData.theme.name))])]),t._v(" "),t._m(0)]):t._e(),t._v(" "),s("share",{directives:[{name:"show",rawName:"v-show",value:t.shareState,expression:"shareState"}]}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.shareState,expression:"shareState"}],staticClass:"share-mask",on:{click:t.shareHide}})],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"source-follow"},[s("span",[t._v("关注")])])}],n={render:a,staticRenderFns:i};e.a=n},SczH:function(t,e,s){"use strict";function a(t){s("EWNY")}var i=s("bYDH"),n=s("dMz7"),o=s("y0f9"),r=a,c=o(i.a,n.a,!1,r,null,null);e.a=c.exports},UGy7:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Z4+k"),i=s("Ef/T"),n=s("y0f9"),o=n(a.a,i.a,!1,null,null,null);e.default=o.exports},UP3w:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view",{key:t.key})],1)},i=[],n={render:a,staticRenderFns:i};e.a=n},Wt8F:function(t,e,s){"use strict";e.a={name:"share"}},Wvse:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar"},[s("div",{staticClass:"personal"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:t.avatarUrl}}),s("span",[t._v("Ciel")])]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"go-home",on:{click:t.goHome}},[s("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"home"},[t._v("首页")])]),t._v(" "),s("div",{staticClass:"themes-view"},t._l(t.themes,function(e,a){return s("li",{staticClass:"themes-list",on:{click:function(e){t.themesContent(a)}}},[s("span",{attrs:{id:e.id}},[t._v(t._s(e.name))]),t._v(" "),e.id!=t.haswatch?s("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}}):t._e(),t._v(" "),e.id==t.haswatch?s("i",{staticClass:"fa fa-chevron-right",attrs:{"aria-hidden":"true"}}):t._e()])}))])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"info"},[s("div",{staticClass:"info-left"},[s("i",{staticClass:"fa fa-star",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"favorite"},[t._v("我的收藏")])]),t._v(" "),s("div",{staticClass:"info-right"},[s("i",{staticClass:"fa fa-download",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"favorite"},[t._v("离线下载")])])])}],n={render:a,staticRenderFns:i};e.a=n},YaEn:function(t,e,s){"use strict";var a=s("2HEv"),i=s("u28b"),n=s("lO7g"),o=s("xtmO"),r=s("wHgX"),c=s("AMdb"),l=s("Mp08"),h=s("xJsL");a.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"home",component:n.a},{path:"/ThemesView",name:"ThemesView",component:o.a},{path:"/detail",name:"detail",component:r.a},{path:"/editors",name:"editors",component:c.a},{path:"/comments",name:"comments",component:l.a},{path:"/login",name:"login",component:h.a}]})},"Z4+k":function(t,e,s){"use strict";e.a={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},bYDH:function(t,e,s){"use strict";e.a={props:{show:{type:Boolean,default:!1},pos:{type:String,default:"left"},tran:{type:String,default:"overlay"}},data:function(){return{drawerWidth:0,translateX:0}},watch:{show:function(){this.show?this.$emit("on-show"):this.$emit("on-hide"),"overlay"!=this.tran&&(this.show?this.translateX="left"==this.pos?this.drawerWidth:-this.drawerWidth:this.translateX=0)}},mounted:function(){},methods:{hideMask:function(){this.$emit("change-show",!1)}}}},dMz7:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vue-drawer"},[s("div",{staticClass:"main"},[t._t("default"),t._v(" "),s("div",{staticClass:"mask",class:t.show?"active":"",attrs:{id:"mask"},on:{click:t.hideMask}})],2),t._v(" "),s("div",{ref:"drawer",staticClass:"drawer",class:["left"!=t.pos?"drawer-right":"drawer-left",t.show?"active":""]},[t._t("drawer")],2)])},i=[],n={render:a,staticRenderFns:i};e.a=n},fenB:function(t,e,s){"use strict";function a(t){s("3HBq")}var i=s("Wt8F"),n=s("3Rkq"),o=s("y0f9"),r=a,c=o(i.a,n.a,!1,r,"data-v-82721274",null);e.a=c.exports},hJ7K:function(t,e){},ic26:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),s("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},i=[],n={render:a,staticRenderFns:i};e.a=n},igi8:function(t,e,s){"use strict";e.a={name:"App",computed:{key:function(){return void 0!==this.$route.name?this.$route.name+new Date:this.$route+new Date}}}},jpVj:function(t,e,s){t.exports=s.p+"static/img/avatar.0f15e14.jpg"},k9DA:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"editors"},[s("header",{staticClass:"header"},[s("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"},on:{click:t.goBack}}),t._v(" "),s("span",[t._v("主编")])]),t._v(" "),s("div",{staticClass:"editors-content"},[s("img",{attrs:{src:t.editorsData[0].avatar}}),t._v(" "),s("div",{staticClass:"name"},[s("span",[t._v(t._s(t.editorsData[0].name))]),t._v(" "),s("span",{staticClass:"alias"},[t._v(t._s(t.editorsData[0].bio))])])])])},i=[],n={render:a,staticRenderFns:i};e.a=n},kfNT:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("drawer",{attrs:{show:t.drawerShow,pos:t.pos,tran:t.tran},on:{"change-show":t.changeDrawerShow,"on-show":t.onShow,"on-hide":t.onHide}},[s("div",{staticClass:"layout",attrs:{slot:"drawer"},slot:"drawer"},[s("sidebar")],1),t._v(" "),s("header",{staticClass:"header"},[s("div",{staticClass:"header-left"},[s("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"},on:{click:t.directionFlip}}),t._v(" "),s("span",{staticClass:"home"},[t._v(t._s(this.homeStr))])]),t._v(" "),s("div",{staticClass:"header-right"},[s("i",{staticClass:"fa fa-bell",attrs:{"aria-hidden":"true"},on:{click:t.goLogin}}),t._v(" "),s("i",{staticClass:"fa fa-ellipsis-v",attrs:{"aria-hidden":"true"}})])]),t._v(" "),s("home-slider",{staticClass:"mySwiper",attrs:{topStories:t.topStories}}),t._v(" "),s("news-list",{attrs:{stories:t.stories}})],1)},i=[],n={render:a,staticRenderFns:i};e.a=n},lO7g:function(t,e,s){"use strict";function a(t){s("xtKN")}var i=s("xQAv"),n=s("kfNT"),o=s("y0f9"),r=a,c=o(i.a,n.a,!1,r,"data-v-7889ee48",null);e.a=c.exports},lZ5c:function(t,e,s){"use strict";function a(t){s("3ZtO")}var i=s("6FZt"),n=s("Wvse"),o=s("y0f9"),r=a,c=o(i.a,n.a,!1,r,"data-v-4b87f403",null);e.a=c.exports},okgu:function(t,e){},qA6U:function(t,e,s){"use strict";var a=s("SczH"),i=s("ERXc"),n=s("lZ5c");e.a={name:"themesView",components:{Drawer:a.a,NewsList:i.a,Sidebar:n.a},data:function(){return{themesContent:[],themesData:"",themeId:"",hasWatch:!0,tipWatchVal:"",tipWatchText:"知乎日报:已关注",pos:"left",tran:"overlay",drawerShow:!1,haswatch:""}},created:function(){this.fetchData()},methods:{directionFlip:function(){this.drawerToggle(),console.log(this.drawerShow)},drawerToggle:function(){this.drawerShow=!this.drawerShow},changeDrawerShow:function(t){this.drawerShow=t,console.log(t)},fetchData:function(){this.themeId=window.location.href.split("?")[1].split("=")[1],this.$http.get("https://zhihu-daily.leanapp.cn/api/v1/themes/"+this.themeId).then(function(t){this.themesContent.push(t.body.THEMEDES),this.themesData=this.themesContent[0]},function(t){console.log("请求失败")})},addWatch:function(){this.tipWatchVal=!0,this.hasWatch?(this.hasWatch=!1,this.tipWatchText="知乎日报:已关注",this.haswatch=window.location.href.split("?")[1].split("=")[1]):(this.hasWatch=!0,this.tipWatchText="知乎日报:已取消关注",this.haswatch=""),this.tipWatchHide()},tipWatchHide:function(){var t=this;setTimeout(function(){t.tipWatchVal=!1},2e3)}}}},qBmJ:function(t,e){},syVE:function(t,e){},syvT:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("BR6V"),i=s("ic26"),n=s("y0f9"),o=n(a.a,i.a,!1,null,null,null);e.default=o.exports},t4Cl:function(t,e,s){"use strict";e.a={name:"editors",data:function(){return{longComments:"",shortComments:"",longHeight:"",spreadState:!1}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=JSON.parse(sessionStorage.getItem("commentsId"));this.$http.get("https://zhihu-daily.leanapp.cn/api/v1/contents/"+t+"/long-comments").then(function(t){console.log(t),this.longComments=t.body.COMMENTS.comments,this.getHeight()},function(t){console.log("请求失败")}),this.$http.get("https://zhihu-daily.leanapp.cn/api/v1/contents/"+t+"/short-comments").then(function(t){console.log(t),this.shortComments=t.body.COMMENTS.comments},function(t){console.log("请求失败")})},goBack:function(){this.$router.go(-1)},getHeight:function(){var t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,e=this.$refs.header.offsetHeight;this.longHeight=t-e-4*e/5*2+"px",0===this.longComments.length?this.longHeight=this.longHeight:this.longHeight="auto"},spreadContent:function(){this.spreadState?this.spreadState=!1:this.spreadState=!0}}}},tyvF:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("swiper",{staticClass:"top-stories-view",attrs:{options:t.swiperOption}},[t._l(t.topStories,function(e,a){return s("swiper-slide",{key:a,style:{backgroundImage:"url("+e.image+")"}},[s("h2",{staticClass:"slider-title",on:{click:function(e){t.detailContent(a)}}},[t._v(t._s(e.title))])])}),t._v(" "),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)},i=[],n={render:a,staticRenderFns:i};e.a=n},vUhq:function(t,e){},wHgX:function(t,e,s){"use strict";function a(t){s("IF0f")}var i=s("34O/"),n=s("PX7G"),o=s("y0f9"),r=a,c=o(i.a,n.a,!1,r,null,null);e.a=c.exports},"x+ex":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"stories-view"},t._l(t.stories,function(e,a){return s("ul",{staticClass:"stories-view-list"},[t.editorsData?t._e():s("div",{staticClass:"list-title"},[t._v(t._s(e.date))]),t._v(" "),t.editorsData?s("div",{staticClass:"editors",on:{click:t.editorsContent}},[s("span",[t._v("主编")]),s("img",{attrs:{src:t.editorsData[0].avatar}})]):t._e(),t._v(" "),t._l(e.stories,function(e,i){return s("li",{key:i,staticClass:"stories-list",on:{click:function(e){t.detailContent(a,i)}}},[s("h3",{class:{imgNone:!e.images}},[t._v(t._s(e.title))]),t._v(" "),e.images?s("img",{attrs:{src:e.images[0]}}):t._e()])})],2)}))},i=[],n={render:a,staticRenderFns:i};e.a=n},xJsL:function(t,e,s){"use strict";function a(t){s("vUhq")}var i=s("AwI0"),n=s("NkN2"),o=s("y0f9"),r=a,c=o(i.a,n.a,!1,r,"data-v-92ce7d60",null);e.a=c.exports},xQAv:function(t,e,s){"use strict";var a=s("SczH"),i=s("4hm2"),n=s("ERXc"),o=s("lZ5c"),r=0;e.a={name:"Home",data:function(){return{pos:"left",tran:"overlay",drawerShow:!1,topStories:"",stories:[],homeStr:"首页"}},created:function(){this.fetchData()},mounted:function(){Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),"S+":this.getMilliseconds()};/(y+)/i.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t};for(var t,e=new Date,s=[],a=e.format("yyyyMMdd"),i=0;i<10;i++)t=a-i,s.push(t);var n=this;window.addEventListener("scroll",function(){var t=window.innerHeight,e=Math.max(document.body.offsetHeight,document.documentElement.offsetHeight);t+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>=e&&(r++,n.fetchBeforeData(s[r-1]));for(var a=document.getElementsByClassName("stories-view-list"),i=0;i<a.length;i++){var o=a[i].getBoundingClientRect().top,c=a[i].getElementsByClassName("list-title")[0].innerText;o<60&&(n.homeStr=c)}a[0].getBoundingClientRect().top>60&&(n.homeStr="首页")})},methods:{directionFlip:function(){this.drawerToggle(),console.log(this.drawerShow)},drawerToggle:function(){this.drawerShow=!this.drawerShow},changeDrawerShow:function(t){this.drawerShow=t,console.log(t)},fetchData:function(){this.$http.get("https://zhihu-daily.leanapp.cn/api/v1/last-stories").then(function(t){this.topStories=t.body.STORIES.top_stories;var e={date:"今日热闻",stories:t.body.STORIES.stories};this.stories.push(e)},function(t){console.log("请求失败")})},fetchBeforeData:function(t){this.$http.get("https://zhihu-daily.leanapp.cn/api/v1/before-stories/"+t).then(function(t){console.info(t);for(var e=t.body.STORIES.date,s=e.split(""),a="",i=0;i<s.length;i++)3!=i&&5!=i||(s[i]=s[i]+"/"),a+=s[i];var n=e.substr(4,2)+"月"+e.substr(6,2)+"日 星期"+"日一二三四五六".charAt(new Date(a).getDay()),o={date:n,stories:t.body.STORIES.stories};this.stories.push(o)},function(t){console.log("请求失败")})},goLogin:function(){this.$router.push({path:"/login"})},onShow:function(){document.getElementsByTagName("body")[0].className="noscroll"},onHide:function(){document.getElementsByTagName("body")[0].className=""}},components:{Drawer:a.a,HomeSlider:i.a,NewsList:n.a,Sidebar:o.a}}},xtKN:function(t,e){},xtmO:function(t,e,s){"use strict";function a(t){s("zaD0")}var i=s("qA6U"),n=s("BD0c"),o=s("y0f9"),r=a,c=o(i.a,n.a,!1,r,"data-v-45545e38",null);e.a=c.exports},zaD0:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6d84b7002e59b0389558.js.map