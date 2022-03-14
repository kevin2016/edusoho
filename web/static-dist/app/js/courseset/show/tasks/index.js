/*! For license information please see index.js.LICENSE.txt */
!function(t){function e(e){for(var n,s,a=e[0],l=e[1],u=e[2],h=0,p=[];h<a.length;h++)s=a[h],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(c&&c(e);p.length;)p.shift()();return r.push.apply(r,u||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,a=1;a<i.length;a++){var l=i[a];0!==o[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},o={218:0},r=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/static-dist/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var c=l;r.push([962,0]),i()}({108:function(t,e,i){"use strict";i.d(e,"a",(function(){return k}));var n=i(5),o=i.n(n),r=i(33),s=i.n(r),a=i(2),l=i.n(a),u=i(3),c=i.n(u),h=i(12),p=i.n(h),d=i(13),f=i.n(d),y=i(9),g=i.n(y),m=i(20),w=(i(217),i(136)),v=i(138);function _(t){var e=function(){if("undefined"==typeof Reflect||!o.a)return!1;if(o.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(o()(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=g()(t);if(e){var r=g()(this).constructor;i=o()(n,arguments,r)}else i=n.apply(this,arguments);return f()(this,i)}}var k=function(t){p()(i,t);var e=_(i);function i(t){var n;return l()(this,i),(n=e.call(this))._options=t,n._initConfig(),n.chapterAnimate(),n._displayAllImmediately?n._displayCurrentPageDataAndSwitchToNext():n._initUpLoading(),n}return c()(i,[{key:"toggleIcon",value:function(t,e,i){var n=this;return new s.a((function(o,r){var s=t.find(".js-remove-icon");t.find(".js-remove-text");s.hasClass(e)?(s.removeClass(e).addClass(i),0==$(".js-only-display-one-page").length&&n._displayCurrentPageDataAndSwitchToNext()):s.removeClass(i).addClass(e),o()}))}},{key:"_destroy",value:function(){this._options.data=[];var t=$(".js-sidebar-pane");t.length&&t[0].removeEventListener("scroll","debounce",!1)}},{key:"chapterAnimate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"body",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".js-task-chapter",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"es-icon-remove",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"es-icon-anonymous-iconfont",o=this;$(t).off("click",e).on("click",e,(function(t){var r=$(t.currentTarget);o.toggleIcon(r,i,n).then((function(){r.nextUntil(e).animate({height:"toggle",opacity:"toggle"},"normal")}))}))}},{key:"_initUpLoading",value:function(){if(0!=$(".js-down-loading-more").length)var t=this,e=new Waypoint({element:$(".js-down-loading-more")[0],handler:function(i){"down"==i&&(t._isLastPage||t._canNotDisplayMore()?e.disable():(t._scrollToBottom(),e.disable(),t._displayCurrentPageDataAndSwitchToNext(),Waypoint.refreshAll(),e.enable()))},offset:"bottom-in-view"})}},{key:"_initConfig",value:function(){this._currentPage=1,this._displayAllImmediately=!!this._options.displayAllImmediately,this._displayAllImmediately?this._pageSize=1e4:this._pageSize=this._options.pageSize?this._options.pageSize:25,this._pageSize>25&&0!=$(".js-only-display-one-page").length&&(this._pageSize=25),this._afterFirstLoad=this._options.afterFirstLoad?this._options.afterFirstLoad:null,this._isFirstLoad=!0,this._options.displayItem?(this._displayItemDisplayed=!1,this._displayItem=this._options.displayItem):(this._displayItemDisplayed=!0,this._displayItem=null),this._isLastPage=!1}},{key:"_displayCurrentPageDataAndSwitchToNext",value:function(){this._displayData(),this._isLastPage||this._currentPage++,this._isFirstLoad&&(this._displayItemDisplayed?(this._isFirstLoad=!1,this._afterFirstLoad&&this._afterFirstLoad()):this._displayCurrentPageDataAndSwitchToNext())}},{key:"_displayData",value:function(){if(!this._isLastPage)for(var t=this._getStartIndex(),e=0;e<this._pageSize;e++){var i=this._options.data[e+t];if(!this._displayItemDisplayed){var n=this._displayItem.key,o=this._displayItem.value;i[n]==o&&(this._displayItemDisplayed=!0)}Object(m.d)(i)?this._isLastPage=!0:this._generateSingleCachedData(i)}}},{key:"_scrollToBottom",value:function(){var t=this,e=this,i=$(".js-sidebar-pane");if(i.length){var n=i[0],o=i.height(),r=n.scrollHeight,s=n.scrollTop;e._afterFirstLoad&&n.addEventListener("scroll",Object(v.a)((function(){s+o>=r&&!t._isLastPage&&e._displayCurrentPageDataAndSwitchToNext()}),500,!0))}}},{key:"_generateSingleCachedData",value:function(t){var e=this._options.dataTemplateNode,i=this._options.wrapDom?this._options.wrapDom.find(e).html():$(e).html(),n=t,o=this,r=i.replace(/({\w+})/g,(function(t){return o._replace(t,n,"{","}")}));r=r.replace(/(%7B\w+%7D)/g,(function(t){return o._replace(t,n,"%7B","%7D")}));var s=$("<div>").append(r);this._removeUnNeedNodes(s),(this._options.wrapDom?this._options.wrapDom.find(".infinite-container"):$(".infinite-container")).append(s.html())}},{key:"_getStartIndex",value:function(){return(this._currentPage-1)*this._pageSize}},{key:"_replace",value:function(t,e,i,n){var o=t.split(i)[1].split(n)[0],r=this._options.context;return"function"==typeof r[o]?r[o](e,r):void 0!==e[o]?e[o]:t}},{key:"_canNotDisplayMore",value:function(){return 1!=this._currentPage&&0!=$(".js-only-display-one-page").length}},{key:"_removeUnNeedNodes",value:function(t){t.find("[display-if=false]").remove(),t.find("[display-if=0]").remove(),t.find("[hide-if=1]").remove(),t.find("[hide-if=true]").remove(),t.find("tmp :first-child").each((function(){var t=$(this).parent();t.hasClass("js-ignore-remove")||"TMP"!=t[0].nodeName||$(this).unwrap()}))}}]),i}(w.a)},174:function(t,e,i){"use strict";var n=i(10),o=i.n(n),r=i(2),s=i.n(r),a=i(3),l=i.n(a),u=i(108),c=i(20),h=function(){function t(e){s()(this,t),void 0===e&&(e={}),this._init(e)}return l()(t,[{key:"_init",value:function(t){var e=$.extend(this._getDefaultOptions(t),t);e.wrapDom=t.wrapTarget,e.pageSize=this._getPageSizeByMaxLessonsNumOfChapter(e),new u.a(e),this._displayAllImmediately&&this._destroyPaging()}},{key:"_getPageSizeByMaxLessonsNumOfChapter",value:function(t){var e=t.data;if(!Object(c.d)(e)){var i=0,n=0;return e.forEach((function(e){t.context.isChapter(e)?(i=n>i?n:i,n=0):n++})),i<25?25:i+1}}},{key:"_getDefaultOptions",value:function(t){var e=this._wrapTarget(t.wrapTarget,".js-hidden-cached-data"),i=this._wrapTarget(t.wrapTarget,".js-hidden-course-info"),n=this._wrapTarget(t.wrapTarget,".js-hidden-i18n"),r=this._wrapTarget(t.wrapTarget,".js-hidden-activity-metas"),s=this._wrapTarget(t.wrapTarget,".js-hidden-current-timestamp");return{data:this._toJson(e.html()),context:{course:this._toJson(i.html()),i18n:this._toJson(n.html()),metas:this._toJson(r.html()),currentTimeStamp:o()(s.html(),10),isChapter:function(t,e){return"chapter"==t.itemType},isUnit:function(t,e){return"unit"==t.itemType},isLesson:function(t,e){return"lesson"==t.itemType},isTask:function(t,e){return"task"==t.itemType},getChapterName:function(t,e){return Translator.trans("course.chapter",{chapter_name:e.i18n.i18nChapterName,number:t.number,title:t.title,colon:t.title?":":""})},getUnitName:function(t,e){return Translator.trans("course.unit",{part_name:e.i18n.i18nUnitName,number:t.number,title:t.title,colon:t.title?":":""})},getLessonName:function(t,e){return e.isItemDisplayedAsOptional(t,e)?t.title:Translator.trans("course.lesson",{part_name:e.i18n.i18nLessonName,number:e.getLessonNum(t,e),title:t.title})},isItemDisplayedAsOptionalOrUnpublished:function(t,e){return e.isItemDisplayedAsOptional(t,e)||e.isItemDisplayedAsUnpublished(t,e)},isItemDisplayedAsOptional:function(t,e){return"1"==t.isOptional&&e.isLessonNode(t,e)},isItemDisplayedAsUnpublished:function(t,e){return!e.isPublished(t,e)&&e.isLessonNode(t,e)},isLessonNode:function(t,e){return"task"==t.itemType&&t.isSingleTaskLesson||"lesson"==t.itemType&&!t.isSingleTaskLesson},getTaskName:function(t,e){return t.isSingleTaskLesson?"1"==t.isOptional?t.title:Translator.trans("course.lesson",{part_name:e.i18n.i18nLessonName,number:e.getLessonNum(t,e),title:t.title}):Translator.trans("course.catalogue.task_status.task",{taskName:e.i18n.i18nTaskName,taskNumber:t.number,taskTitle:t.title})},hasWatchLimitRemaining:function(t,e){return!1!==t.watchLimitRemaining},highlightTaskClass:function(t,e){return t.taskId==e.course.currentTaskId?"active":""},taskClass:function(t,e){var i="es-icon left-menu";return e.isTaskLocked(t,e)?i+=" es-icon-lock":""==t.result||"false"==e.course.isMember?i+=" es-icon-undone-check color-gray":"start"==t.resultStatus?i+=" es-icon-doing color-primary":"finish"==t.resultStatus&&(i+=" es-icon-iccheckcircleblack24px color-primary"),i},lessonContainerClass:function(t,e){var i="color-gray";return e.isTask(t,e)?t.isSingleTaskLesson?i:"":e.isLesson(t,e)?i:void 0},isTaskLocked:function(t,e){return e.course.isMember?"lockMode"==e.course.learnMode&&t.lock:"lockMode"==e.course.learnMode},isPublished:function(t,e){return"published"==t.status},isPublishedTaskUnlocked:function(t,e){return e.isPublished(t,e)&&!e.isTaskLocked(t,e)},isCloudVideo:function(t,e){return"video"==t.type&&"cloud"==t.fileStorage},getMetaIcon:function(t,e){return void 0!==e.metas[t.type]?e.metas[t.type].icon:""},getMetaName:function(t,e){return void 0!==e.metas[t.type]?e.metas[t.type].name:""},isLiveReplayGenerated:function(t,e){return"ungenerated"!=t.replayStatus},isLive:function(t,e){return"live"==t.type},isLiveNotStarted:function(t,e){return e.isLive(t,e)&&e.currentTimeStamp<e.toInt(t.activityStartTime)},isLiveStarting:function(t,e){return e.isLive(t,e)&&e.currentTimeStamp>=e.toInt(t.activityStartTime)&&e.currentTimeStamp<=e.toInt(t.activityEndTime)},isLiveFinished:function(t,e){return e.isLive(t,e)&&e.currentTimeStamp>e.toInt(t.activityEndTime)},toInt:function(t){return o()(t,10)},getLessonNum:function(t,e){var i=t.number;return"1"==e.course.isHideUnpublish&&(i=t.published_number),i}},dataTemplateNode:".js-infinite-item-template"}}},{key:"_wrapTarget",value:function(t,e){return t?t.find(e):$(e)}},{key:"_destroyPaging",value:function(){for(var t=["js-infinite-item-template","js-hidden-cached-data","js-hidden-course-info","js-hidden-i18n","js-hidden-activity-metas","js-hidden-current-timestamp","infinite-container","js-down-loading-more"],e=0;e<t.length;e++)$("."+t[e]).removeClass(t[e])}},{key:"_toJson",value:function(t){var e={};return t&&(e=$.parseJSON(t.replace(/[\r\n\t]/g,""))),e}}]),t}();e.a=h},217:function(t,e){!function(){"use strict";function t(n){if(!n)throw new Error("No options passed to Waypoint constructor");if(!n.element)throw new Error("No element option passed to Waypoint constructor");if(!n.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,n),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=n.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var n in i)e.push(i[n]);for(var o=0,r=e.length;r>o;o++)e[o][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){for(var e in t.Context.refreshAll(),i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=o.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,n[t.waypointContextKey]=this,i+=1,o.windowContext||(o.windowContext=!0,o.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,n={},o=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete n[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",(function(){e.didResize||(e.didResize=!0,o.requestAnimationFrame(t))}))},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",(function(){(!e.didScroll||o.isTouch)&&(e.didScroll=!0,o.requestAnimationFrame(t))}))},e.prototype.handleResize=function(){o.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var n=e[i],o=n.newScroll>n.oldScroll?n.forward:n.backward;for(var r in this.waypoints[i]){var s=this.waypoints[i][r];if(null!==s.triggerPoint){var a=n.oldScroll<s.triggerPoint,l=n.newScroll>=s.triggerPoint;(a&&l||!a&&!l)&&(s.queueTrigger(o),t[s.group.id]=s.group)}}}for(var u in t)t[u].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?o.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?o.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var n=0,o=t.length;o>n;n++)t[n].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),n={};for(var r in this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var s=t[r];for(var a in this.waypoints[r]){var l,u,c,h,p=this.waypoints[r][a],d=p.options.offset,f=p.triggerPoint,y=0,g=null==f;p.element!==p.element.window&&(y=p.adapter.offset()[s.offsetProp]),"function"==typeof d?d=d.apply(p):"string"==typeof d&&(d=parseFloat(d),p.options.offset.indexOf("%")>-1&&(d=Math.ceil(s.contextDimension*d/100))),l=s.contextScroll-s.contextOffset,p.triggerPoint=Math.floor(y+l-d),u=f<s.oldScroll,c=p.triggerPoint>=s.oldScroll,h=!u&&!c,!g&&(u&&c)?(p.queueTrigger(s.backward),n[p.group.id]=p.group):(!g&&h||g&&s.oldScroll>=p.triggerPoint)&&(p.queueTrigger(s.forward),n[p.group.id]=p.group)}}return o.requestAnimationFrame((function(){for(var t in n)n[t].flushTriggers()})),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in n)n[t].refresh()},e.findByElement=function(t){return n[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},o.requestAnimationFrame=function(e){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t).call(window,e)},o.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),n[this.axis][this.name]=this}var n={vertical:{},horizontal:{}},o=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var n=this.triggerQueues[i],o="up"===i||"left"===i;n.sort(o?e:t);for(var r=0,s=n.length;s>r;r+=1){var a=n[r];(a.options.continuous||r===n.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=o.Adapter.inArray(e,this.waypoints);return i===this.waypoints.length-1?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=o.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=o.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return n[t.axis][t.name]||new i(t)},o.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],(function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}})),e.each(["extend","inArray","isEmptyObject"],(function(i,n){t[n]=e[n]})),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],n=arguments[0];return t.isFunction(arguments[0])&&((n=t.extend({},arguments[1])).handler=arguments[0]),this.each((function(){var o=t.extend({},n,{element:this});"string"==typeof o.context&&(o.context=t(this).closest(o.context)[0]),i.push(new e(o))})),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}()},325:function(t,e,i){"use strict";i.d(e,"a",(function(){return w}));var n=i(5),o=i.n(n),r=i(2),s=i.n(r),a=i(3),l=i.n(a),u=i(12),c=i.n(u),h=i(13),p=i.n(h),d=i(9),f=i.n(d),y=i(174),g=i(108);function m(t){var e=function(){if("undefined"==typeof Reflect||!o.a)return!1;if(o.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(o()(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=f()(t);if(e){var r=f()(this).constructor;i=o()(n,arguments,r)}else i=n.apply(this,arguments);return p()(this,i)}}var w=function(t){c()(i,t);var e=m(i);function i(){return s()(this,i),e.apply(this,arguments)}return l()(i,[{key:"_init",value:function(t){var e=this;$('input[name="showOptional"]').length>0&&("true"==window.localStorage.getItem("showOptional")&&$('input[name="showOptional"]').attr("checked","checked"),$('input[name="showOptional"]').change((function(){window.localStorage.setItem("showOptional",$('input[name="showOptional"]').is(":checked")),window.location.reload()})));var i=t.target?t.target.find(".js-tasks-show"):$(".js-tasks-show");if(i.length){var n=$('input[name="showOptional"]').length>0?{showOptional:window.localStorage.getItem("showOptional")}:{};$.get(i.data("url"),n,(function(n){i.html(n);var o=$.extend(e._getDefaultOptions(t),t);o.wrapDom=t.wrapTarget,o.pageSize=e._getPageSizeByMaxLessonsNumOfChapter(o),e.cachedScroll=new g.a(o),e._displayAllImmediately&&e._destroyPaging(),$(".course-tasks-show-more").length<1||o.data.length&&o.data.length>25&&$(".course-tasks-show-more").removeClass("hidden")})),$("body").on("click",".js-lesson-item-notify",(function(){var t=$(this);cd.message({type:"warning",message:t.data("notifyMessage")})}))}}},{key:"_destroy",value:function(){this.cachedScroll._destroy()}}]),i}(y.a)},962:function(t,e,i){"use strict";i.r(e),new(i(325).a)}});