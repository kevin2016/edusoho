!function(u){function e(e){for(var t,n,r=e[0],i=e[1],o=e[2],s=0,a=[];s<r.length;s++)n=r[s],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&a.push(l[n][0]),l[n]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(u[t]=i[t]);for(p&&p(e);a.length;)a.shift()();return f.push.apply(f,o||[]),c()}function c(){for(var e,t=0;t<f.length;t++){for(var n=f[t],r=!0,i=1;i<n.length;i++){var o=n[i];0!==l[o]&&(r=!1)}r&&(f.splice(t--,1),e=s(s.s=n[0]))}return e}var n={},l={201:0},f=[];function s(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return u[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=u,s.c=n,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var i=0;i<t.length;i++)e(t[i]);var p=r;f.push([681,0]),c()}({681:function(e,t,n){"use strict";n.r(t);var r=n(152),i=$(".js-origin-header"),o=$(".js-origin-header-content"),s=$(".js-new-header");$(".js-shrink-item").on("click",".js-shrink-courseset",function(e){$(e.currentTarget).addClass("hidden"),i.animate({height:"40px"},function(){o.animate({opacity:"0"},"fast"),s.removeClass("hidden").animate({opacity:"1"},"fast")})}),s.on("click",".js-show-courseset",function(e){$(e.currentTarget);i.animate({height:"122px"},function(){o.animate({opacity:"1"},"fast"),s.animate({opacity:"0"},"fast").addClass("hidden"),$(".js-shrink-courseset").removeClass("hidden")})}),Object(r.a)(".js-courseset-publish-btn",{title:"course_set.manage.publish_title",hint:"course_set.manage.publish_hint",success:"course_set.manage.publish_success_hint",fail:"course_set.manage.publish_fail_hint"})}});