!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("pageChatter",[],t):"object"==typeof exports?exports.pageChatter=t():e.pageChatter=t()}(window,function(){return n={},e.m=t=[function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=void 0,r=void 0,i=t.init=function(){r=window.onmessage,o={},window.onmessage=function(e){var t=e.data,n=t.to,i=t.event,u=t.payLoad,a=Object.keys(o).filter(function(e){return e===n})[0];a&&o[a]({event:i,payLoad:u}),r&&r(e)}},u=t.listen=function(e,t){o[e]=t},a=t.talk=function(e,t,n){window.postMessage({to:e,event:t,payLoad:n},"*")},f=t.terminate=function(){window.onmessage=r,o={}};t.default={init:i,listen:u,talk:a,terminate:f}}],e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(e){return t[e]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e.p="",e(e.s=0);function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var t,n});