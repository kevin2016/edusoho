!function(t){function e(e){for(var r,a,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(h&&h(e);f.length;)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={368:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var h=c;o.push([1392,0]),n()}({1392:function(t,e,n){"use strict";n.r(e);var r=n(16),i=n.n(r),o=n(339),a=n.n(o),s=n(33),c=n.n(s),u=n(449),h=n.n(u),l=n(2),f=n.n(l),d=n(3),p=n.n(d),v=n(439),m=n(8);new(function(){function t(e){f()(this,t),this.$element=e,this.step=1;var n=$("#task-create-type");this.taskConfig={type:n.data("editorType"),mode:n.data("editorMode"),contentUrl:n.data("contentUrl"),finishUrl:n.data("finishUrl"),saveUrl:n.data("saveUrl")},this.$taskType=n,this.$taskContent=$("#task-create-content"),this.$taskFinish=$("#task-create-finish"),this.$taskSubmit=$("#course-tasks-submit"),this.$contentIframe=$("#task-create-content-iframe"),this.$finishIframe=$("#task-create-finish-iframe"),$("#task-create-content-iframe, #task-create-finish-iframe").iFrameResize(),this._init(),this._initEvent()}var e,n,r;return p()(t,[{key:"_initEvent",value:function(){var t=this;this.$taskSubmit.click((function(e){return t._onSave()})),$("#course-tasks-next").click((function(e){return t._onNext(e)})),$("#course-tasks-prev").click((function(e){return t._onPrev(e)})),"edit"!=this.taskConfig.mode?$(".js-course-tasks-item").click((function(e){return t._onSetType(e)})):$(".delete-task").click((function(e){return t._onDelete(e)}))}},{key:"_init",value:function(){this._inItStep1form(),"edit"==this.taskConfig.mode?this._doNext():this._switchPage()}},{key:"_onNext",value:function(){var t=this;if(1!==this.step)return 2===this.step?(window.ltc.emitChild("task-create-content-iframe","getValidate"),void window.ltc.once("returnValidate",(function(e){e.valid&&t._doNext()}))):void 0;this._doNext()}},{key:"_onPrev",value:function(){1!==this.step&&(this.step-=1,this._switchPage())}},{key:"_doNext",value:function(){this.step+=1,this._switchPage(),this.$element.trigger("afterNext")}},{key:"_onSetType",value:function(t){var e=$(t.currentTarget).addClass("active"),n=e.data("type");this.type!=n&&(e.siblings().removeClass("active"),this.$finishIframe.attr("src",""),$('[name="mediaType"]').val(n),this.taskConfig.contentUrl=e.data("contentUrl"),this.taskConfig.finishUrl=e.data("finishUrl"),this.type=n),this._onNext(t)}},{key:"getActivityFinishCondition",value:(r=h()(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,t.abrupt("return",new c.a((function(t,n){e.$finishIframe.attr("src")||t({}),window.ltc.emitChild("task-create-finish-iframe","getCondition"),window.ltc.once("returnCondition",(function(e){e.valid?t(e.data):n()}))})));case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"getActivityContent",value:(n=h()(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new c.a((function(t,e){window.ltc.emitChild("task-create-content-iframe","getActivity"),window.ltc.once("returnActivity",(function(n){n.valid?t(n.data):e()}))})));case 2:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"_onSave",value:(e=h()(a.a.mark((function t(){var e,n=this;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.$taskSubmit.attr("disabled",!0),t.next=3,this.getActivityContent().then((function(t){return e=t,n.getActivityFinishCondition()})).then((function(t){n.$taskSubmit.button("loading");var r=i()(n._getFormSerializeObject($("#step1-form")),e,t);$.post(n.taskConfig.saveUrl,r).done((function(t){n.$element.modal("hide"),t&&$("#sortable-list").trigger("addItem",t)})).fail((function(t){n.$taskSubmit.button("reset")}))})).catch((function(){n.$taskSubmit.attr("disabled",!1),n.$taskSubmit.button("reset")}));case 3:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"_onDelete",value:function(t){var e=this,n=$(t.currentTarget).data("url");void 0!==n&&confirm(Translator.trans(Translator.trans("task_manage.delete_hint")))&&$.post(n).then((function(t){Object(m.a)("success",Translator.trans("task_manage.delete_success_hint")),e.$element.modal("hide"),document.location.reload()})).fail((function(t){Object(m.a)("warning",Translator.trans("task_manage.delete_failed_hint"))}))}},{key:"_switchPage",value:function(){this._renderStep(),this._renderContent(),1==this.step&&this._rendButton(1),2==this.step&&this._initContentIframe(),3==this.step&&this._initFinishIframe()}},{key:"_initContentIframe",value:function(){var t=this;this.taskConfig.contentUrl&&(this.$contentIframe.attr("src")!=this.taskConfig.contentUrl?(this.$contentIframe.hide(),this.$contentIframe.attr("src",this.taskConfig.contentUrl),this.$contentIframe.load(Object(v.a)((function(){t._rendButton(2)}),this.$taskContent))):this._rendButton(2))}},{key:"_initFinishIframe",value:function(){var t=this;this.taskConfig.finishUrl&&(this.$finishIframe.attr("src")!=this.taskConfig.finishUrl?(this.$finishIframe.hide(),this.$finishIframe.attr("src",this.taskConfig.finishUrl),this.$finishIframe.load(Object(v.a)((function(){t._sendContent(),t._rendButton(3)}),this.$taskFinish))):(this._sendContent(),this._rendButton(3)))}},{key:"_sendContent",value:function(){window.ltc.once("returnValidate",(function(t){window.ltc.emitChild("task-create-finish-iframe","getContent",t)})),window.ltc.emitChild("task-create-content-iframe","getValidate")}},{key:"_inItStep1form",value:function(){var t=$("#step1-form"),e=t.validate({rules:{mediaType:{required:!0}},messages:{mediaType:Translator.trans("validate.choose_item.message")}});t.data("validator",e)}},{key:"_rendButton",value:function(t){1===t&&this.$element.find(".modal-footer").children().addClass("hidden"),2===t&&("edit"===this.taskConfig.mode?this.$element.find("#course-tasks-prev").addClass("hidden").siblings().removeClass("hidden"):this.$element.find(".modal-footer").children().removeClass("hidden")),3===t&&this.$element.find("#course-tasks-next").addClass("hidden").siblings().removeClass("hidden")}},{key:"_renderStep",value:function(){this.$setp||(this.$step=$("#task-create-step"));var t=this.$step.find("li").eq(this.step-1);t.addClass("doing").prev().addClass("done").removeClass("doing"),t.next().removeClass("doing").removeClass("done")}},{key:"_renderContent",value:function(){var t={1:this.$taskType,2:this.$taskContent,3:this.$taskFinish};t[this.step]&&t[this.step].removeClass("hidden").siblings("div").addClass("hidden")}},{key:"_getFormSerializeObject",value:function(t){var e={},n=t.serializeArray();return $.each(n,(function(){e[this.name]?(e[this.name].push||(e[this.name]=[e[this.name]]),e[this.name].push(this.value||"")):e[this.name]=this.value||""})),e}}]),t}())($("#modal"))},22:function(t,e){t.exports=jQuery},339:function(t,e,n){t.exports=n(483)},439:function(t,e,n){"use strict";var r=arguments,i=function(t,e){var n=e.find(".load-animation");0==n.length?(n=$('<div class="load-animation"></div>')).prependTo(e).nextAll().hide():n.show();var i=[],o=t.length;return function(e){return i.push(e),n.hide().nextAll().show(),i.length<o?r.callee:t.apply(null,i)}};e.a=i},449:function(t,e,n){var r=n(33);function i(t,e,n,i,o,a,s){try{var c=t[a](s),u=c.value}catch(t){return void n(t)}c.done?e(u):r.resolve(u).then(i,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new r((function(r,o){var a=t.apply(e,n);function s(t){i(a,r,o,s,c,"next",t)}function c(t){i(a,r,o,s,c,"throw",t)}s(void 0)}))}}},483:function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,o=Object.create(i.prototype),a=new L(r||[]);return o._invoke=function(t,e,n){var r=l;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return E()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=C(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=h(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(t,n,a),o}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l="suspendedStart",f="suspendedYield",d="executing",p="completed",v={};function m(){}function y(){}function g(){}var w={};w[o]=function(){return this};var k=Object.getPrototypeOf,_=k&&k(k(S([])));_&&_!==n&&r.call(_,o)&&(w=_);var b=g.prototype=m.prototype=Object.create(w);function $(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(i,o,a,s){var c=h(t[i],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}}function C(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,C(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=h(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:E}}function E(){return{value:e,done:!0}}return y.prototype=b.constructor=g,g.constructor=y,y.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},$(x.prototype),x.prototype[a]=function(){return this},t.AsyncIterator=x,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new x(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},$(b),c(b,s,"Generator"),b[o]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type="throw",s.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;j(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:S(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}});