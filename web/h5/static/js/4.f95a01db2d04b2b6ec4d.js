webpackJsonp([4],{"7/x9":function(e,t,i){"use strict";var s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"course-detail__service"},[i("span",[e._v("承诺服务：")]),e._v(" "),e._l(e.services,function(t){return[i("span",{staticClass:"course-detail__service-icon"},[e._v(e._s(t.shortName))])]})],2)},staticRenderFns:[]},n=i("VU/8")({name:"service",props:["services"]},s,!1,null,null,null);t.a=n.exports},GQ5V:function(e,t,i){"use strict";var s=i("6vT6"),n=i("SQAI"),a={name:"e-mini-coupon",mixins:[i("OPcZ").a],props:{item:{type:Object,default:function(){return{}}}}},r={render:function(){var e=this.$createElement;return(this._self._c||e)("van-tag",{staticClass:"mini-coupon ml5",attrs:{type:"danger"}},[this._v(this._s(this.priceHtml(this.item,!1)))])},staticRenderFns:[]},o=i("VU/8")(a,r,!1,null,null,null).exports,c=i("w/qc"),l=i("NyOD"),u={name:"onsale",mixins:[c.a,l.a],components:{coupon:n.a,miniCoupon:o,EPopup:s.a},props:["unreceivedCoupons","miniCoupons","activities"],data:function(){return{couponListShow:!1}}},d={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("e-panel",{attrs:{title:"优惠"}},[e.activities.groupon?i("van-cell",{staticClass:"course-detail__cell",attrs:{"is-link":""},on:{click:function(t){e.activityHandle(e.activities.groupon.id)}}},[i("template",{slot:"title"},[i("span",{staticClass:"text-12"},[e._v("拼团：")]),e._v(" "),i("van-tag",{staticClass:"ml5",staticStyle:{"background-color":"#ffaa00"}},[e._v("拼团")]),e._v(" "),i("span",{staticClass:"text-12 dark"},[e._v("跟好友一起买更划算哦！")])],1)],2):e._e(),e._v(" "),e.activities.cut?i("van-cell",{staticClass:"course-detail__cell",attrs:{"is-link":""},on:{click:function(t){e.activityHandle(e.activities.cut.id)}}},[i("template",{slot:"title"},[i("span",{staticClass:"text-12"},[e._v("砍价：")]),e._v(" "),i("van-tag",{staticClass:"ml5",staticStyle:{"background-color":"#ffaa00"}},[e._v("砍价")]),e._v(" "),i("span",{staticClass:"text-12 dark"},[e._v("最低可砍至1分钱！")])],1)],2):e._e(),e._v(" "),e.unreceivedCoupons.length?i("van-cell",{staticClass:"course-detail__cell",attrs:{"is-link":""},on:{click:function(t){e.couponListShow=!0}}},[i("template",{slot:"title"},[i("span",{staticClass:"text-12"},[e._v("领券：")]),e._v(" "),e._l(e.miniCoupons,function(e,t){return i("mini-coupon",{key:t,attrs:{item:e}})})],2)],2):e._e(),e._v(" "),i("e-popup",{staticClass:"coupon-popup white-background",attrs:{show:e.couponListShow,title:"优惠券"},on:{"update:show":function(t){e.couponListShow=t}}},[e._l(e.unreceivedCoupons,function(t,s){return i("coupon",{key:s,attrs:{index:s,coupon:t,showButton:!0},on:{couponHandle:function(t){e.couponHandle(t)}}})}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.unreceivedCoupons.length,expression:"!unreceivedCoupons.length"}],staticClass:"coupon-empty"},[i("img",{staticClass:"empty-img",attrs:{src:"static/images/coupon_empty.png"}}),e._v(" "),i("div",{staticClass:"empty-text"},[e._v("暂无优惠券")])])],2)],1)},staticRenderFns:[]},v=i("VU/8")(u,d,!1,null,null,null);t.a=v.exports},f0vb:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i("eqfM");var s=i("/QYm"),n=i("Dd8w"),a=i.n(n),r=(i("XmAh"),i("il3B")),o=i("Xxa5"),c=i.n(o),l=i("exGp"),u=i.n(l),d=i("upIP"),v=i("jW8y"),p=i("gMS5"),h=i("Du/2"),m=i("7/x9"),f=i("NYxO"),_={data:function(){return{items:[],isFree:!1}},components:{service:m.a},filters:{filterTime:function(e){var t=new Date(e);return t.getFullYear()+"-"+("0"+t.getMonth()).slice(-2)+"-"+("0"+t.getDate()).slice(-2)}},watch:{selectedPlanId:{immediate:!0,handler:function(e){var t=this;this.items=this.details.courses.map(function(e,i){return t.$set(e,"active",!1),e.id===t.details.id&&(e.active=!0),e})}},learnExpiryHtml:{immediate:!0,handler:function(e){var t=this.details.learningExpiryDate,i=t.expiryStartDate.slice(0,10),s=t.expiryEndDate.slice(0,10);this.$emit("getLearnExpiry",{val:e,startDateStr:i,endDateStr:s})}}},computed:a()({},Object(f.mapState)("course",{details:function(e){return e.details},selectedPlanId:function(e){return e.selectedPlanId}}),Object(f.mapState)(["courseSettings","vipSwitch"]),{learnExpiryHtml:function(){var e=this.details.member,t=this.details.learningExpiryDate,i=t.expiryMode;if(e)return"forever"==i?"永久有效":0!=e.deadline?e.deadline.slice(0,10)+"之前可学习":"永久有效";switch(i){case"forever":return"永久有效";case"end_date":return t.expiryEndDate.slice(0,10)+"之前可学习";case"days":return t.expiryDays+"天内可学习";case"date":return'<div class = "mt5">开课日期：'+t.expiryStartDate.slice(0,10)+"&nbsp;&nbsp;&nbsp;截止日期："+t.expiryEndDate.slice(0,10)+"</div>"}},showStudent:function(){return!this.courseSettings||Number(this.courseSettings.show_student_num_enabled)},defaultPlan:function(){return 1===this.items.length&&!this.items[0].title},isDiscount:function(){if(!this.details.courseSet)return!1;var e=this.details.courseSet.discount;if(""!==e){var t=Number(e);return 10!==t&&(0===t||t)}}}),methods:a()({},Object(f.mapActions)("course",["getCourseDetail"]),{handleClick:function(e,t){var i=this;this.items.map(function(e){return e.active=!1}),e.active=!0,this.getCourseDetail({courseId:e.id}).then(function(){i.$emit("switchPlan")}).catch(function(e){s.a.fail(e.message)})},filterPrice:function(){var e=this.details;return Number(e.isFree)||"0.00"===e.price?(this.isFree=!0,"免费"):(this.isFree=!1,"¥"+e.price)}})},y={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("e-panel",{attrs:{title:e.details.courseSet.title}},[i("div",{staticClass:"course-detail__plan-price"},[i("span",{class:{isFree:e.isFree}},[e._v(e._s(e.filterPrice())+"\n        "),e.isDiscount?i("span",{staticClass:"original-price ml10"},[e._v("原价：￥"+e._s(e.details.originPrice))]):e._e()]),e._v(" "),e.showStudent?i("span",{staticClass:"plan-price__student-num"},[e._v(e._s(e.details.studentNum)+"人在学")]):e._e()])]),e._v(" "),e.defaultPlan?e._e():i("ul",{staticClass:"course-detail__plan"},e._l(e.items,function(t,s){return t.title?i("li",{class:{active:t.active},on:{click:function(i){e.handleClick(t,s)}}},[e._v(e._s(t.title))]):e._e()})),e._v(" "),i("div",{staticClass:"course-detail__validity"},[e.details.vipLevel&&e.vipSwitch?i("div",{staticClass:"mb15"},[i("span",{staticClass:"mr20"},[e._v("会员免费")]),e._v(" "),i("img",{staticClass:"vipIcon",attrs:{src:e.details.vipLevel.icon}}),e._v(" "),i("router-link",{staticClass:"color-primary",attrs:{to:{path:"/vip",query:{id:e.details.vipLevel.id}}}},[e._v("\n        "+e._s(e.details.vipLevel.name)+"免费学")])],1):e._e(),e._v(" "),e.details.services.length?i("service",{attrs:{services:e.details.services}}):e._e(),e._v(" "),i("div",[i("span",{staticClass:"mr20"},[e._v("学习有效期")]),e._v(" "),i("span",{staticClass:"dark",domProps:{innerHTML:e._s(e.learnExpiryHtml)}})]),e._v(" "),0!=e.details.buyExpiryTime?i("div",{staticClass:"mt5"},[i("span",{staticClass:"mr20"},[e._v("购买截止日期")]),e._v(" "),i("span",{staticClass:"validity orange"},[e._v(e._s(e._f("filterTime")(e.details.buyExpiryTime)))])]):e._e()],1)],1)},staticRenderFns:[]},g=i("VU/8")(_,y,!1,null,null,null).exports,C={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("e-panel",{attrs:{title:"教师介绍"}},[e._l(e.teacherInfo,function(t){return[i("div",{staticClass:"teacher-content"},[i("img",{staticClass:"avatar-img",attrs:{src:t.avatar.large}}),e._v(" "),i("div",{staticClass:"teacher-cell"},[i("span",{staticClass:"dark font-family-PFM"},[e._v(e._s(t.nickname))]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"item.title"}],staticClass:"text-content"},[e._v(e._s(t.title))])])])]})],2)},staticRenderFns:[]},w=i("VU/8")({name:"teacher",props:["teacherInfo"]},C,!1,null,null,null).exports,b=i("gyMJ"),k=this,x={props:{details:{type:Object,value:function(){return{}}}},data:function(){return{headBottom:0,active:1,scrollFlag:!1,tabs:["课程介绍","课程目录","学员评价"],tabsClass:"",errorMsg:""}},computed:a()({},Object(f.mapState)("course",{selectedPlanId:function(e){return e.selectedPlanId}}),Object(f.mapState)(["user"]),{progress:function(){return Number(this.details.publishedTaskNum)?parseInt(this.details.progress.percent)+"%":"0%"},summary:function(){return this.details.summary||this.details.courseSet.summary},isClassCourse:function(){return Number(this.details.parentId)}}),watch:{selectedPlanId:function(e,t){e!==t&&(k.active=0),console.log(k.active,"active")}},created:function(){var e=this;return u()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.showDialog();case 1:case"end":return t.stop()}},t,e)}))()},components:{Directory:v.a,DetailHead:p.a,DetailPlan:g,Teacher:w,reviewList:d.a},methods:{showDialog:function(){var e=this;if(this.details.member){var t="";if(this.details.member.access&&(t=this.details.member.access.code),t&&"success"!==t){this.errorMsg=this.getErrorMsg(t);var i="",n=function(){};if("course.expired"===t||"member.expired"===t&&!this.isClassCourse){i="课程已到期，无法继续学习，是否退出";var a={id:this.details.id};n=function(){b.a.deleteCourse({query:a}).then(function(e){e.success?window.location.reload():s.a.fail("退出课程失败，请稍后重试")})},this.callConfirm(i,n)}else"vip.member_expired"===t?(i="会员已到期，请及时续费会员",n=function(){e.$router.push({path:"/vip"})},this.callConfirm(i,n)):s.a.fail(this.errorMsg)}}},getErrorMsg:function(e){switch(e){case"course.not_found":return"当前课程不存在";case"course.unpublished":return"当前课程未发布";case"course.expired":return"当前课程已过期";case"course.not_arrive":return"当前课程还不能学习";case"user.not_login":return"用户未登录";case"user.locked":return"用户被锁定";case"member.not_found":return"用户未加入课程";case"member.expired":return"课程已过期";case"vip.vip_closed":return"网校已关闭会员功能";case"vip.not_login":return"用户未登录";case"vip.not_member":return"当前用户并不是vip";case"vip.member_expired":return"用户会员服务已过期";case"vip.level_not_exist":return"用户会员等级或课程会员不存在";case"vip.level_low":return"用户会员等级过低";default:return"异常错误"}},callConfirm:function(e,t){r.a.confirm({message:e,title:""}).then(function(){t()}).catch(function(){})}}},S={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"join-after"},[i("detail-head",{attrs:{courseSet:e.details.courseSet}}),e._v(" "),i("van-tabs",{class:e.tabsClass,model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.tabs,function(e){return i("van-tab",{key:e,attrs:{title:e}})})),e._v(" "),i("div",{staticClass:"join-after__content"},[1==e.active?i("div",[i("div",{staticClass:"progress-bar"},[i("div",{staticClass:"progress-bar__content"},[i("div",{staticClass:"progress-bar__rate",style:{width:e.progress}})]),e._v(" "),i("div",{staticClass:"progress-bar__text"},[e._v(e._s(e.progress))])]),e._v(" "),i("directory",{staticClass:"join-after-dirctory",attrs:{hiddeTitle:!0,errorMsg:e.errorMsg,tryLookable:e.details.tryLookable},on:{showDialog:e.showDialog}})],1):e._e(),e._v(" "),0==e.active?i("div",[i("detail-plan",{on:{switchPlan:e.showDialog}}),e._v(" "),i("div",{staticClass:"segmentation"}),e._v(" "),i("e-panel",{attrs:{title:"课程介绍"}},[i("div",{domProps:{innerHTML:e._s(e.summary)}})]),e._v(" "),i("div",{staticClass:"segmentation"}),e._v(" "),i("teacher",{staticClass:"teacher",attrs:{teacherInfo:e.details.teachers}})],1):e._e(),e._v(" "),2==e.active?i("div",[i("review-list",{ref:"review",attrs:{targetId:e.details.courseSet.id,reviews:e.details.reviews,title:"学员评价",defaulValue:"暂无评价",type:"course"}})],1):e._e()])],1)},staticRenderFns:[]},T=i("VU/8")(x,S,!1,null,null,null).exports,D=i("fZjL"),P=i.n(D),E=i("rsAy"),O=i("GQ5V"),I=i("1JqO"),A=i("w/qc"),L=i("NyOD"),j={name:"joinBefore",mixins:[I.a,A.a,L.a],data:function(){return{tabs:["课程介绍","课程目录","学员评价"],loadMoreAbout:!1,active:0,tabsClass:"",learnExpiry:"永久有效",startDateStr:"",endDateStr:"",tops:{aboutTop:0,courseTop:0,reviewTop:0},isEmpty:!0,unreceivedCoupons:[],miniCoupons:[],marketingActivities:{seckill:{}}}},components:{Teacher:w,Directory:v.a,DetailHead:p.a,DetailPlan:g,moreMask:E.a,reviewList:d.a,onsale:O.a},computed:a()({},Object(f.mapState)("course",{details:function(e){return e.details}}),Object(f.mapState)(["user"]),{summary:function(){return this.details.summary||this.details.courseSet.summary},isClassCourse:function(){return Number(this.details.parentId)},accessToJoin:function(){return"success"===this.details.access.code||"user.not_login"===this.details.access.code},vipAccessToJoin:function(){var e=!1;if(!this.details.vipLevel||!this.user.vip)return!1;this.details.vipLevel.seq<=this.user.vip.seq&&(e=!(new Date(this.user.vip.deadline).getTime()<(new Date).getTime()));return e},showOnsale:function(){return!this.isClassCourse&&0!==Number(this.details.price)&&!!(this.unreceivedCoupons.length||P()(this.marketingActivities).length&&!this.onlySeckill)},onlySeckill:function(){return 1===P()(this.marketingActivities).length&&this.marketingActivities.seckill},showSeckill:function(){return!this.isClassCourse&&0!==Number(this.details.price)&&this.marketingActivities.seckill&&!this.isEmpty}}),mounted:function(){var e=this;this.isClassCourse||(b.a.searchCoupon({params:{targetId:this.details.courseSet.id,targetType:"course"}}).then(function(t){e.unreceivedCoupons=t.data,e.miniCoupons=e.unreceivedCoupons.length>3?e.unreceivedCoupons.slice(0,4):e.unreceivedCoupons}).catch(function(e){console.error(e)}),b.a.coursesActivities({query:{id:this.details.id}}).then(function(t){e.marketingActivities=t,e.isEmpty=!t.seckill||!+t.seckill.productRemaind}).catch(function(e){console.error(e)})),window.addEventListener("touchmove",this.handleScroll),window.addEventListener("scroll",this.handleScroll),setTimeout(function(){window.scrollTo(0,0)},100)},destroyed:function(){window.removeEventListener("touchmove",this.handleScroll),window.removeEventListener("scroll",this.handleScroll)},methods:a()({},Object(f.mapActions)("course",["joinCourse"]),{onTabClick:function(e,t){var i=this.$refs[this.transIndex2Tab(e)];window.scrollTo(0,i.$el.offsetTop-44)},transIndex2Tab:function(e){return["about","directory","review"][e]},handleScroll:function(){var e=this;if(!this.scrollFlag){this.scrollFlag=!0;var t=this.$refs,i=["about","directory","review"].reverse();setTimeout(function(){P()(t).forEach(function(i){t[i]&&(e.tops[i+"Top"]=t[i].$el.getBoundingClientRect().top)}),e.scrollFlag=!1,e.tabsClass=e.tops.aboutTop-44<=0?"van-tabs--fixed":"";for(var s=0;s<i.length;s++){if(e.tops[i[s]+"Top"]-44<=0)return void(e.active=i.length-s-1)}},400)}},activeCurrentTab:function(e){var t=this.tops;return(e+=44)<t.teacherTop?0:e>=t.directoryTop?2:1},handleJoin:function(){var e=this,t=this.vipAccessToJoin;if(this.accessToJoin||t)if(this.$store.state.token){var i=this.details.learningExpiryDate.expiryEndDate,s=new Date(i).getTime(),n=(new Date).getTime(),a=n<s;a=0==i||n<s,(Number(this.details.buyable)&&a||t)&&(+this.details.price&&!t?this.getOrder():this.joinCourse({id:this.details.id}).then(function(t){0===P()(t).length&&e.getOrder()}).catch(function(e){console.error(e)}))}else this.$router.push({name:"login",query:{redirect:this.redirect}})},getLearnExpiry:function(e){this.learnExpiry=e.val,this.startDateStr=e.startDateStr,this.endDateStr=e.endDateStr},switchPlan:function(){var e=this;this.marketingActivities={},b.a.coursesActivities({query:{id:this.details.id}}).then(function(t){e.marketingActivities=t}).catch(function(e){console.error(e)})},getOrder:function(){var e=this.details.learningExpiryDate.expiryMode,t=this.startDateStr+" 至 "+this.endDateStr,i="date"===e?t:this.learnExpiry;this.$router.push({name:"order",params:{id:this.details.id},query:{expiryScope:i,targetType:"course"}})},sellOut:function(){this.isEmpty=!0}})},M={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:e.isClassCourse?"":"join-before"},[i("detail-head",{attrs:{price:e.details.price,courseSet:e.details.courseSet,seckillActivities:e.marketingActivities.seckill},on:{goodsEmpty:e.sellOut}}),e._v(" "),i("detail-plan",{on:{getLearnExpiry:e.getLearnExpiry,switchPlan:e.switchPlan}}),e._v(" "),i("div",{staticClass:"segmentation"}),e._v(" "),e.showOnsale?[i("onsale",{attrs:{unreceivedCoupons:e.unreceivedCoupons,miniCoupons:e.miniCoupons,activities:e.marketingActivities}}),e._v(" "),i("div",{staticClass:"segmentation"})]:e._e(),e._v(" "),i("van-tabs",{class:e.tabsClass,on:{click:e.onTabClick},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.tabs,function(e){return i("van-tab",{key:e,attrs:{title:e}})})),e._v(" "),i("e-panel",{ref:"about",staticClass:"about",attrs:{title:"课程介绍"}},[i("more-mask",{attrs:{disabled:e.loadMoreAbout},on:{maskLoadMore:function(t){e.loadMoreAbout=!0}}},[i("div",{domProps:{innerHTML:e._s(e.summary)}})])],1),e._v(" "),i("div",{staticClass:"segmentation"}),e._v(" "),i("teacher",{staticClass:"teacher",attrs:{title:"教师介绍",teacherInfo:e.details.teachers}}),e._v(" "),i("div",{staticClass:"segmentation"}),e._v(" "),i("directory",{ref:"directory"}),e._v(" "),i("div",{staticClass:"segmentation"}),e._v(" "),i("review-list",{ref:"review",attrs:{targetId:e.details.courseSet.id,reviews:e.details.reviews,title:"学员评价",type:"course",defaulValue:"暂无评价"}}),e._v(" "),!e.isClassCourse&&(!e.marketingActivities.seckill||e.marketingActivities.seckill&&e.isEmpty||0==e.details.price)?i("e-footer",{attrs:{disabled:!e.accessToJoin},nativeOn:{click:function(t){return e.handleJoin(t)}}},[e._v("\n    "+e._s(e._f("filterJoinStatus")(e.details.access.code,"course",e.vipAccessToJoin)))]):e._e(),e._v(" "),e.showSeckill?i("e-footer",{attrs:{disabled:!e.accessToJoin,half:!!e.showSeckill},nativeOn:{click:function(t){return e.handleJoin(t)}}},[e._v(e._s(e._f("filterJoinStatus")(e.details.access.code,"course",e.vipAccessToJoin)))]):e._e(),e._v(" "),e.showSeckill?i("e-footer",{attrs:{half:!!e.showSeckill},nativeOn:{click:function(t){e.activityHandle(e.marketingActivities.seckill.id)}}},[e._v("去秒杀")]):e._e()],2)},staticRenderFns:[]},$=i("VU/8")(j,M,!1,null,null,null).exports,N={components:{},data:function(){return{currentComp:""}},computed:a()({},Object(f.mapState)("course",{selectedPlanIndex:function(e){return e.selectedPlanIndex},joinStatus:function(e){return e.joinStatus},details:function(e){return e.details}}),Object(f.mapState)({isLoading:function(e){return e.isLoading}})),watch:{joinStatus:function(e){this.getComponent(e)}},created:function(){var e=this;this.getCourseDetail({courseId:this.$route.params.id}).then(function(){e.getComponent(e.joinStatus)}).catch(function(e){s.a.fail(e.message)})},methods:a()({},Object(f.mapActions)("course",["getCourseDetail"]),Object(f.mapMutations)("course",{setSourceType:h.k}),{getComponent:function(e){this.currentComp=e?T:$}}),beforeRouteLeave:function(e,t,i){this.setSourceType({sourceType:"img",taskId:-1}),i()}},F={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"course-detail"},[this.isLoading?t("e-loading"):this._e(),this._v(" "),t(this.currentComp,{tag:"component",attrs:{details:this.details}})],1)},staticRenderFns:[]},V=i("VU/8")(N,F,!1,null,null,null);t.default=V.exports},gMS5:function(e,t,i){"use strict";var s=i("//Fk"),n=i.n(s),a=i("Xxa5"),r=i.n(a),o=i("woOf"),c=i.n(o),l=(i("eqfM"),i("/QYm")),u=i("exGp"),d=i.n(u),v=i("Dd8w"),p=i.n(v),h=i("PirY"),m=i.n(h),f=i("NYxO"),_=i("gyMJ"),y={components:{countDown:i("lpC9").a},data:function(){return{isEncryptionPlus:!1,mediaOpts:{},isCoverOpen:!1,isPlaying:!1,player:null,counting:!0,isEmpty:!1}},props:{courseSet:{type:Object,default:function(){return{}}},seckillActivities:{type:Object,default:null}},computed:p()({},Object(f.mapState)("course",{sourceType:function(e){return e.sourceType},selectedPlanId:function(e){return e.selectedPlanId},taskId:function(e){return e.taskId},details:function(e){return e.details},joinStatus:function(e){return e.joinStatus},user:function(e){return e.user}}),{textContent:function(){return this.mediaOpts.text}}),watch:{taskId:function(){["video","audio"].includes(this.sourceType)&&(window.scrollTo(0,0),this.initPlayer())}},methods:{viewAudioDoc:function(){this.isCoverOpen=!0},hideAudioDoc:function(){this.isCoverOpen=!1},handlePlayer:function(){return this.isPlaying?this.player&&this.player.pause():this.player&&this.player.play()},getParams:function(){return!this.joinStatus?{query:{courseId:this.selectedPlanId,taskId:this.taskId},params:{preview:1}}:{query:{courseId:this.selectedPlanId,taskId:this.taskId}}},initPlayer:function(){var e=this;return d()(r.a.mark(function t(){var i,s,n,a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.$refs.video&&(e.$refs.video.innerHTML=""),t.next=3,_.a.getMedia(e.getParams());case 3:if(i=t.sent,s=i.media.timeLimit,e.isEncryptionPlus=i.media.isEncryptionPlus,!i.media.isEncryptionPlus){t.next=9;break}return Object(l.a)("该浏览器不支持云视频播放，请下载App"),t.abrupt("return");case 9:n=i.media,a={id:"course-detail__head--video",user:e.user,playlist:n.url,autoplay:!0,disableFullscreen:"audio"===e.sourceType,isAudio:"audio"===e.sourceType,pluck:{timelimit:s},resId:n.resId,disableDataUpload:!0},e.mediaOpts=c()({text:i.media.text},a),e.$store.commit("UPDATE_LOADING_STATUS",!0),e.loadPlayerSDK().then(function(t){e.$store.commit("UPDATE_LOADING_STATUS",!1);var i=new t(a);i.on("playing",function(){e.isPlaying=!0}),i.on("paused",function(){e.isPlaying=!1}),e.player=i});case 14:case"end":return t.stop()}},t,e)}))()},loadPlayerSDK:function(){if(!window.VideoPlayerSDK){var e="//service-cdn.qiqiuyun.net/js-sdk/video-player/sdk-v1.js?v="+Date.now()/1e3/60;return new n.a(function(t,i){m()(e,function(e){e&&i(e),t(window.VideoPlayerSDK)})})}return n.a.resolve(window.VideoPlayerSDK)},expire:function(){this.counting=!1},sellOut:function(){this.isEmpty=!0,this.$emit("goodsEmpty")}}},g={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"course-detail__head"},[e.textContent?i("div",{directives:[{name:"show",rawName:"v-show",value:["audio"].includes(e.sourceType)&&!e.isEncryptionPlus&&!e.isCoverOpen,expression:"['audio'].includes(sourceType) && !isEncryptionPlus && !isCoverOpen"}],staticClass:"course-detail__nav--btn",on:{click:e.viewAudioDoc}},[e._v("\n    文稿\n  ")]):e._e(),e._v(" "),e.textContent?i("div",{directives:[{name:"show",rawName:"v-show",value:["audio"].includes(e.sourceType)&&!e.isEncryptionPlus,expression:"['audio'].includes(sourceType) && !isEncryptionPlus"}],staticClass:"course-detail__nav--cover web-view",class:{opened:e.isCoverOpen}},[i("div",{staticClass:"media-text",domProps:{innerHTML:e._s(e.textContent)}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isCoverOpen,expression:"isCoverOpen"}],staticClass:"course-detail__nav--cover-control",on:{click:e.handlePlayer}},[i("i",{staticClass:"h5-icon",class:e.isPlaying?"h5-icon-zanting":"h5-icon-bofang"})]),e._v(" "),i("div",{staticClass:"course-detail__nav--cover-close-btn",on:{click:e.hideAudioDoc}},[i("i",{staticClass:"van-icon van-icon-arrow van-nav-bar__arrow"})])]):e._e(),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"img"===e.sourceType||e.isEncryptionPlus,expression:"sourceType === 'img' || isEncryptionPlus"}],staticClass:"course-detail__head--img"},[e.courseSet.cover?i("img",{attrs:{src:e.courseSet.cover.large,alt:""}}):e._e(),e._v(" "),e.seckillActivities&&"ongoing"===e.seckillActivities.status&&e.counting&&!e.isEmpty?i("countDown",{attrs:{activity:e.seckillActivities},on:{timesUp:e.expire,sellOut:e.sellOut}}):e._e()],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:["video","audio"].includes(e.sourceType)&&!e.isEncryptionPlus,expression:"['video', 'audio'].includes(sourceType) && !isEncryptionPlus"}],ref:"video",attrs:{id:"course-detail__head--video"}})])},staticRenderFns:[]},C=i("VU/8")(y,g,!1,null,null,null);t.a=C.exports},upIP:function(e,t,i){"use strict";var s=i("GK7I"),n=i("rsAy"),a={name:"reviewList",components:{review:s.a,moreMask:n.a},props:["reviews","title","targetId","defaulValue","type"],data:function(){return{maxShowNum:5}},methods:{loadMore:function(){this.$router.push({path:"/comment/"+this.targetId,query:{type:this.type}})}},computed:{isClass:function(){return"classroom"===this.type}}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("e-panel",{attrs:{title:e.title,needFlex:!1,defaulValue:e.defaulValue}},[e.reviews.length?i("moreMask",{attrs:{maxHeight:400},on:{maskLoadMore:e.loadMore}},[e._l(e.reviews,function(t){return[i("review",{attrs:{review:t,isClass:e.isClass,course:t.course}})]})],2):e._e()],1)},staticRenderFns:[]},o=i("VU/8")(a,r,!1,null,null,null);t.a=o.exports}});