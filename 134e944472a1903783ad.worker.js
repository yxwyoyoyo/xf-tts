!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/xf-tts/",r(r.s=0)}([function(t,e){!function(){var t=this;t.onmessage=function(t){e.transToAudioData(t.data)};var e={transToAudioData:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16e3,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:22505,a=e.base64ToS16(r),u=e.transS16ToF32(a);u=e.transSamplingRate(u,n,o),u=Array.from(u),t.postMessage({data:u,rawAudioData:Array.from(a)})},transSamplingRate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:44100,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:16e3,n=Math.round(t.length*(r/e)),o=new Float32Array(n),a=(t.length-1)/(n-1);o[0]=t[0];for(var u=1;u<n-1;u++){var i=u*a,f=Math.floor(i).toFixed(),l=Math.ceil(i).toFixed(),c=i-f;o[u]=t[f]+(t[l]-t[f])*c}return o[n-1]=t[t.length-1],o},transS16ToF32:function(t){for(var e=[],r=0;r<t.length;r++){var n=t[r]<0?t[r]/32768:t[r]/32767;e.push(n)}return new Float32Array(e)},base64ToS16:function(t){t=atob(t);for(var e=new Uint8Array(t.length),r=0;r<t.length;++r)e[r]=t.charCodeAt(r);return new Int16Array(new DataView(e.buffer).buffer)}}}()}]);