(window.webpackJsonp=window.webpackJsonp||[]).push([["pay"],{"38a4":function(t,e,a){"use strict";a.r(e),a("8e6e"),a("ac6a"),a("456d"),a("a481"),a("e7e5");var r=a("d399"),i=(a("96cf"),a("3b8d")),c=a("bd86"),n=a("3ce7"),s=a("2f62");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){Object(c.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var p={data:function(){return{detail:{},payWay:"",selected:!0,paySettings:{},inWechat:this.isWeixinBrowser(),targetType:this.$route.query.targetType,timeoutId:-1,isLoading:!0}},computed:l(l({},Object(s.e)(["wechatSwitch"])),{},{validPayWay:function(){return this.paySettings.wxpayEnabled||this.paySettings.alipayEnabled&&!this.inWechat}}),created:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){var a,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,n.a.getSettings({query:{type:"payment"}}).catch((function(t){r.a.fail(t.message)}));case 3:t.paySettings=e.sent,t.paySettings.alipayEnabled&&!t.inWechat?t.payWay="Alipay_LegacyH5":t.paySettings.wxpayEnabled&&(t.payWay="WechatPay_H5"),a=t.$route.query,i=a.sn,c=a.targetId,n.a.getOrderDetail({query:{sn:i}}).then((function(e){if("success"===e.status&&c){if(t.wechatSwitch)return void t.$router.replace({path:"/pay_success",query:{targetType:t.targetType,targetId:c}});"vip"===t.targetType?t.$router.replace({path:"/".concat(t.targetType),query:{backUrl:"/my/orders"}}):t.$router.replace({path:"/".concat(t.targetType,"/").concat(t.targetId)})}t.detail=Object.assign({},e),t.isLoading=!1})).catch((function(t){r.a.fail(t.message)}));case 7:case"end":return e.stop()}}),e)})))()},beforeRouteLeave:function(t,e,a){clearTimeout(this.timeoutId),a()},methods:{handlePay:function(){var t=this;if(this.validPayWay)if("WechatPay_H5"===this.payWay&&this.inWechat)window.location.href="".concat(window.location.origin,"/pay/center/wxpay_h5?pay_amount=")+"".concat(this.detail.pay_amount,"&title=").concat(this.detail.title,"&sn=").concat(this.detail.sn,"&targetType=").concat(this.targetType,"&targetId=").concat(this.targetId);else{var e=window.location.origin+window.location.pathname+"#/pay_center?targetType=".concat(this.targetType,"&targetId=").concat(this.targetId);n.a.createTrade({data:{gateway:this.payWay,type:"purchase",orderSn:this.detail.sn,app_pay:"Y",success_url:e}}).then((function(e){"WechatPay_H5"!==t.payWay?window.location.href=e.payUrl:t.getTradeInfo(e.tradeSn).then((function(){window.location.href=e.mwebUrl}))})).catch((function(t){r.a.fail(t.message)}))}},isWeixinBrowser:function(){return/micromessenger/.test(navigator.userAgent.toLowerCase())},getTradeInfo:function(t){var e=this;return n.a.getTrade({query:{tradesSn:t}}).then((function(a){a.isPaid?window.location.href=a.paidSuccessUrlH5:e.timeoutId=setTimeout((function(){e.getTradeInfo(t)}),2e3)})).catch((function(t){r.a.fail(t.message)}))}}},u=a("0c7c"),y=Object(u.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"payPage"},[t.isLoading?a("e-loading"):t._e(),a("div",{staticClass:"payPage__order"},[a("div",{staticClass:"order__head order--line"},[t._v("\n      支付方式\n    ")]),a("div",{staticClass:"order__infomation"},[a("div",{staticClass:"title"},[t._v(t._s(t.detail.title))]),a("div",{staticClass:"sum"},[a("span",[t._v("待支付")]),a("span",{staticClass:"sum__price"},[t._v("¥ "),a("span",{staticClass:"num"},[t._v(t._s(t._f("toMoney")(t.detail.pay_amount)))])])]),a("div",{staticClass:"payWay"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.paySettings.alipayEnabled&&!t.inWechat,expression:"paySettings.alipayEnabled && !inWechat"}],class:["payWay__item",{"payWay__item--selected":"Alipay_LegacyH5"===t.payWay}],on:{click:function(e){t.payWay="Alipay_LegacyH5",t.selected=!0}}},[a("img",{staticClass:"correct",attrs:{src:"static/images/correct.png"}}),a("div",{staticClass:"right"}),a("img",{attrs:{src:"static/images/zfb.png"}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.paySettings.wxpayEnabled,expression:"paySettings.wxpayEnabled"}],class:["payWay__item",{"payWay__item--selected":"WechatPay_H5"===t.payWay}],on:{click:function(e){t.payWay="WechatPay_H5",t.selected=!1}}},[a("img",{staticClass:"correct",attrs:{src:"static/images/correct.png"}}),a("div",{staticClass:"right"}),a("img",{attrs:{src:"static/images/wx.png"}})])])])]),a("div",{class:["payPage__payBtn",{disabled:!t.validPayWay}],on:{click:t.handlePay}},[t._v("\n    "+t._s(t.validPayWay?"立即支付":"无可用支付方式")+"\n  ")])],1)}),[],!1,null,null,null);e.default=y.exports},"6ca9":function(t,e,a){"use strict";a.r(e),a("8e6e"),a("a481"),a("ac6a"),a("456d");var r=a("bd86"),i=a("2f62");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}var n={mixins:[a("2095").a],components:{},data:function(){return{targetType:null,targetId:null,payWay:null}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){Object(r.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(i.e)(["wechatSwitch"])),watch:{},created:function(){this.getInfoCollection()},methods:{getInfoCollection:function(){var t=this;this.targetType=this.$route.query.targetType,this.targetId=this.$route.query.targetId,this.payWay=this.$route.query.payWay;var e={action:"buy_after",targetType:this.targetType,targetId:this.targetId};this.getInfoCollectionEvent(e).then((function(e){Object.keys(e).length?t.toCollectUserInfo(e.id):t.doDefault()})).catch((function(){t.doDefault()}))},doDefault:function(){"WechatPay_H5"===this.payWay&&this.wechatSwitch?this.toWxNotify():this.toTarget()},toCollectUserInfo:function(t){var e={eventId:t,targetType:this.targetType,targetId:this.targetId,payWay:this.payWay};this.$router.replace({path:"/pay_collectInfo",query:e})},toWxNotify:function(){var t="".concat(window.location.origin,"/#/");"vip"===this.targetType?t+="".concat(this.targetType):t+="".concat(this.targetType,"/").concat(this.targetId),this.$router.replace({path:"/pay_success",query:{paidUrl:t,backUrl:t}})},toTarget:function(){"vip"===this.targetType?this.$router.replace({path:"/".concat(this.targetType),query:{backUrl:"/my/orders"}}):this.$router.replace({path:"/".concat(this.targetType,"/").concat(this.targetId)})}}},s=a("0c7c"),o=Object(s.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("e-loading")],1)}),[],!1,null,null,null);e.default=o.exports},dec6:function(t,e,a){"use strict";a.r(e),a("8e6e"),a("ac6a"),a("456d"),a("a481");var r=a("bd86"),i=a("2f62");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}var n={data:function(){return{targetId:this.$route.query.targetId||"",targetType:this.$route.query.targetType||"",paidUrl:this.$route.query.paidUrl}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){Object(r.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(i.e)(["wechatSwitch","wechatSettings"])),created:function(){this.wechatSwitch||this.$router.replace({path:"/"})},methods:{backToCourse:function(){this.paidUrl?window.location.href=this.paidUrl:"vip"===this.targetType?this.$router.replace({path:"/".concat(this.targetType),query:{backUrl:"/my/orders"}}):this.$router.replace({path:"/".concat(this.targetType,"/").concat(this.targetId)})}}},s=a("0c7c"),o=Object(s.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pay-success-container"},[this._m(0),this.wechatSettings?e("div",{staticClass:"qrcode-img-container"},[e("img",{attrs:{src:this.wechatSettings.official_qrcode,alt:""}})]):this._e(),this._m(1),e("van-button",{staticClass:"btn-back-course",attrs:{type:"primary"},on:{click:this.backToCourse}},[this._v("返回课程")])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pay-success-text"},[e("i",{staticClass:"h5-icon h5-icon-check"}),e("span",{staticClass:"text-18 success-text"},[this._v("支付成功！")]),e("div",{staticClass:"mt5 text-14 color-red"},[this._v("\n      为享受更好的教学服务，建议您开启课程通知。\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"press-img-container"},[e("img",{attrs:{src:"static/images/wechat_press.png",alt:""}}),e("div",{staticClass:"press-text text-14"},[this._v("请长按二维码开启课程通知")])])}],!1,null,null,null);e.default=o.exports},f2d9:function(t,e,a){"use strict";a.r(e),a("8e6e"),a("ac6a"),a("456d"),a("a481");var r=a("bd86"),i=a("2f62"),c=a("4928"),n=a("2095"),s=a("faa5");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){Object(r.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var p={mixins:[n.a],components:{infoCollection:c.a},data:function(){return{isLoading:!0}},computed:l({},Object(i.e)(["wechatSwitch"])),watch:{},created:function(){this.targetType=this.$route.query.targetType,this.targetId=this.$route.query.targetId,this.payWay=this.$route.query.payWay,this.getForm()},methods:l(l({},Object(i.d)({setNavbarTitle:s.v})),{},{getForm:function(){var t=this,e=this.$route.query.eventId;this.getInfoCollectionForm(e).then((function(e){t.setNavbarTitle(e.formTitle),t.isLoading=!1})).catch((function(){t.handleSubmit()}))},handleSubmit:function(){"WechatPay_H5"===this.$route.query.payWay&&this.wechatSwitch?this.toWxNotify():this.toTarget()},toTarget:function(){"vip"===this.targetType?this.$router.replace({path:"/".concat(this.targetType),query:{backUrl:"/my/orders"}}):this.$router.replace({path:"/".concat(this.targetType,"/").concat(this.targetId)})},toWxNotify:function(){var t=window.location.origin+window.location.pathname+"#/".concat(this.targetType,"/").concat(this.targetId);this.$router.replace({path:"/pay_success",query:{paidUrl:t}})}})},u=a("0c7c"),y=Object(u.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[this.isLoading?e("e-loading"):this._e(),Object.keys(this.userInfoCollectForm).length?e("div",[e("info-collection",{attrs:{userInfoCollectForm:this.userInfoCollectForm,formRule:this.userInfoCollectForm.items},on:{submitForm:this.handleSubmit}})],1):this._e()],1)}),[],!1,null,null,null);e.default=y.exports}}]);