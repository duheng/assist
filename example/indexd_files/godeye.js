!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t){var n={getHashString:function(e){var t=window.location.hash.toString(),n=new RegExp(""+e+"=([^&?]*)","ig");return t.match(n)?decodeURIComponent(t.match(n)[0].substr(e.length+1)):""},getQueryString:function(e){var t=window.location.search.toString(),n=new RegExp(""+e+"=([^&?]*)","ig");return t.match(n)?decodeURIComponent(t.match(n)[0].substr(e.length+1)):""},collectParams:function(e){var t=[];for(var n in e)t.push(n+"="+encodeURIComponent(e[n]));return t.join("&")},queryToParam:function(e){for(var t,n={},r=e.split("&"),i=0,s=r.length;i<s;i++)t=r[i].split("="),n[t[0]]=decodeURIComponent(t[1]);return n},addEvent:function(){return document.addEventListener?function(e,t,n,r){e.addEventListener(t,n,!!r)}:function(e,t,n){e.attachEvent("on"+t,function(){return n.call(e,window.event)})}}(),getTime:function(){return(new Date).getTime()},cookie:function(e,t,n){if(arguments.length>1&&"[object Object]"!==String(t)){if(n=n||{},null!==t&&void 0!==t||(n.expires=-1),"number"==typeof n.expires){var r=n.expires,i=n.expires=new Date;i.setDate(i.getDate()+r)}return t=String(t),document.cookie=[encodeURIComponent(e),"=",n.raw?t:encodeURIComponent(t),n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"; path=/",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")}n=t||{};var s,o=n.raw?function(e){return e}:decodeURIComponent;return(s=(new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)")).exec(document.cookie))?o(s[1]):null},getDomain:function(e){return(e||"").replace(/^.+\.(.+?\..+)$/,"$1")},isPerformanceDataValid:function(e){for(var t in e)if(e[t]<0||e[t]>15e3)return!1;return!0},isPerformanceValid:function(){var e=window.performance&&window.performance.timing,t=this.getTime(),n=e&&"object"==typeof e&&e.navigationStart;if(n){for(var r in e){var i=t-e[r];if(e[r]<0)return!1;if(e[r]>0&&i>15e3||i<0)return!1}return"undefined"!=typeof e.requestStart&&"undefined"!=typeof e.domContentLoadedEventStart&&"undefined"!=typeof e.loadEventStart&&"undefined"!=typeof e.domainLookupEnd&&"undefined"!=typeof e.domainLookupStart&&"undefined"!=typeof e.navigationStart&&"undefined"!=typeof e.responseEnd&&"undefined"!=typeof e.connectStart&&"undefined"!=typeof e.fetchStart&&"undefined"!=typeof e.responseStart&&"undefined"!=typeof window.__ready_time}return!1},getPerformanceData:function(e){var e=window.performance&&window.performance.timing,t=this.getTime(),n=e&&"object"==typeof e&&e.navigationStart;return n||(e={navigationStart:window.__start_time||t,domContentLoadedEventStart:window.__ready_time||t,loadEventStart:t,domainLookupStart:t,domainLookupEnd:t,connectStart:t,responseEnd:t,requestStart:t}),{ready:e.domContentLoadedEventStart-e.requestStart,load:e.loadEventStart-e.requestStart,dns:e.domainLookupEnd-e.domainLookupStart,request_start:e.requestStart-e.navigationStart,trans:e.responseEnd-e.connectStart,network:e.requestStart-e.fetchStart,ttfb:e.responseStart-e.requestStart,page_show:window.__ready_time?window.__ready_time-e.requestStart:0}},getDebugPerformanceData:function(e){var t=window.performance&&window.performance.timing;for(var n in t)e[n]=t[n];return e},readXPath:function(e){if(""!==e.id)return'[@id="'+e.id+'"]';if(e==document.body)return"/html/"+e.tagName.toLowerCase();if(!e.parentNode)return"/removedNode";for(var t=1,n=e.parentNode.childNodes,r=0,i=n.length;r<i;r++){var s=n[r];if(s==e)return arguments.callee(e.parentNode)+"/"+e.tagName.toLowerCase()+"["+t+"]";1==s.nodeType&&s.tagName==e.tagName&&t++}},getMousePos:function(e){var t=document.documentElement.scrollLeft||document.body.scrollLeft,n=document.documentElement.scrollTop||document.body.scrollTop,r=e.pageX||e.clientX+t,i=e.pageY||e.clientY+n,s=document.documentElement.clientHeight||document.body.clientHeight,o=document.documentElement.clientWidth||document.body.clientWidth;return{x:r,y:i,h:s,w:o}}};e.exports=n},function(e,t,n){var r=n(0),i={};t.startTime=function(e){if(!e)throw"timer name is empty";i[e]=r.getTime()},t.endTime=function(e){if(!e)throw"timer name is empty";return i[e]&&r.getTime()-i[e]||0}},function(e,t,n){function r(e){return e.et=l,e.at=f(),e}function i(e,t){t.p=t.p||o;var n="?"+a.collectParams(t),r=e+n,i=e+".gif"+n;try{navigator.sendBeacon?navigator.sendBeacon(r):s(i)}catch(e){s(i)}}function s(e){var t=new Image,n="__log_img_"+Math.random();window[n]=t,t.onload=t.onerror=function(){window[n]=null},t.src=e}var o,u,a=n(0),f=function(){var e=0;return function(){var t=a.getTime();return t===e&&t++,e=t}}(),l=a.getTime(),c=!1,h=function(){var e=[];return function(t,n){if(n=n||u,t&&e.push(r(t)),c){for(var s=0,o=e.length;s<o;s++)i(n,e[s]);e.length=0}}}();t.init=function(e){c=!0,o=e.pageId,u=e.url||"https://log.flight.qunar.com/l",h()},t.log=function(e,t){h(e,t)},t.getTime=a.getTime},function(e,t,n){function r(e){var t=GodEye.getEye("performance_debug",window.__start_time),e=s.getDebugPerformanceData(e);for(var n in e)t.set(n,e[n]);t.log()}function i(){s.addEvent(document.body,"click",function(e){var t=e.target||e.srcElement,n=s.readXPath(t),r=s.getMousePos(e),i=GodEye.getEye("mouseclick");i.set("xpath",n),i.set("x",r.x),i.set("y",r.y),i.set("h",r.h),i.set("w",r.w),i.log("https://log.flight.qunar.com/clk")},!0)}var s=n(0),o=s.getQueryString("from");o&&GodEye.AB.set("fr",o);var u=GodEye.getEye("pageview");u.set("rf",document&&document.referrer||-1),u.set("sc",screen.width+"*"+screen.height+"*"+(window.devicePixelRatio||1)),u.log(),s.addEvent(window,"load",function(){var e=GodEye.getEye("performance",window.__start_time),t=s.getPerformanceData();if(!s.isPerformanceValid()||!s.isPerformanceDataValid(t))return r(t);for(var n in t)e.set(n,t[n]);e.log()}),window.__page_id&&(GodEye.init({pageId:window.__page_id,url:window.__log_url}),i())},function(e,t,n){function r(e){var t=o.cookie("QN621"),n=t?o.queryToParam(decodeURIComponent(t)):{};return n[e]||""}function i(e){var t=o.cookie("QN621"),n=t?o.queryToParam(decodeURIComponent(t)):{};n=e(n);var r=o.collectParams(n);o.cookie("QN621",r,{expires:365,domain:o.getDomain(document.domain)})}function s(e,t){return delete e[t],e}var o=n(0),u={set:function(e,t){i(function(n){return t||0===t?n[e]=t:n=s(n,e),n})},del:function(e){i(function(t){return s(t,e)})},get:function(e){return r(e)}};e.exports=u},function(e,t,n){function r(e,t){var n={},r={r:e},o=t||i.getTime();return n.addTime=function(e,t){return r[e]=(t||i.getTime())-o,n},n.set=function(e,t){return r[e]=t,n},n.log=function(e){s.log(r,e)},n.clear=function(){return o=i.getTime(),r={r:e},n},n}var i=n(0),s=n(2),o={};e.exports=function(e,t){return o[e]=o[e]||r(e,t)}},function(e,t,n){var r=n(2);r.getEye=n(5),r.AB=n(4),r.startTime=n(1).startTime,r.endTime=n(1).endTime,window.GodEye=r,n(3)}])