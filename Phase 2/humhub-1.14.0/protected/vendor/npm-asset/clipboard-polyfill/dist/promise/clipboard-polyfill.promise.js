!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(0,(function(){"use strict";function e(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))}function t(e){return!(!e||void 0===e.length)}function n(){}function r(e){if(!(this instanceof r))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],c(e,this)}function i(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,r._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void u(t.promise,e)}o(t.promise,r)}else(1===e._state?o:u)(t.promise,e._value)}))):e._deferreds.push(t)}function o(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof r)return e._state=3,e._value=t,void a(e);if("function"==typeof n)return void c(function(e,t){return function(){e.apply(t,arguments)}}(n,t),e)}e._state=1,e._value=t,a(e)}catch(t){u(e,t)}}function u(e,t){e._state=2,e._value=t,a(e)}function a(e){2===e._state&&0===e._deferreds.length&&r._immediateFn((function(){e._handled||r._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;n>t;t++)i(e,e._deferreds[t]);e._deferreds=null}function c(e,t){var n=!1;try{e((function(e){n||(n=!0,o(t,e))}),(function(e){n||(n=!0,u(t,e))}))}catch(e){if(n)return;n=!0,u(t,e)}}var s=setTimeout;r.prototype.catch=function(e){return this.then(null,e)},r.prototype.then=function(e,t){var r=new this.constructor(n);return i(this,new function(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}(e,t,r)),r},r.prototype.finally=e,r.all=function(e){return new r((function(n,r){function i(e,t){try{if(t&&("object"==typeof t||"function"==typeof t)){var a=t.then;if("function"==typeof a)return void a.call(t,(function(t){i(e,t)}),r)}o[e]=t,0==--u&&n(o)}catch(e){r(e)}}if(!t(e))return r(new TypeError("Promise.all accepts an array"));var o=Array.prototype.slice.call(e);if(0===o.length)return n([]);for(var u=o.length,a=0;o.length>a;a++)i(a,o[a])}))},r.resolve=function(e){return e&&"object"==typeof e&&e.constructor===r?e:new r((function(t){t(e)}))},r.reject=function(e){return new r((function(t,n){n(e)}))},r.race=function(e){return new r((function(n,i){if(!t(e))return i(new TypeError("Promise.race accepts an array"));for(var o=0,u=e.length;u>o;o++)r.resolve(e[o]).then(n,i)}))},r._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){s(e,0)},r._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var l=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("unable to locate global object")}();"Promise"in l?l.Promise.prototype.finally||(l.Promise.prototype.finally=e):l.Promise=r})),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).clipboard={})}(this,(function(e){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function t(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))}function n(e,t){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}var r=function(e){};function i(e){r(e)}var o=!0;function u(){return o}(function(){(console.warn||console.log).apply(console,arguments)}).bind("[clipboard-polyfill]");var a,c,s,l,f="undefined"==typeof navigator?void 0:navigator,d=null==f?void 0:f.clipboard,p=null===(a=null==d?void 0:d.read)||void 0===a?void 0:a.bind(d),v=null===(c=null==d?void 0:d.readText)||void 0===c?void 0:c.bind(d),h=null===(s=null==d?void 0:d.write)||void 0===s?void 0:s.bind(d),y=null===(l=null==d?void 0:d.writeText)||void 0===l?void 0:l.bind(d),w="undefined"==typeof window?void 0:window,m=null==w?void 0:w.ClipboardItem,b=w;function g(){return"undefined"==typeof ClipboardEvent&&void 0!==b.clipboardData&&void 0!==b.clipboardData.setData}function x(){return t(this,void 0,void 0,(function(){var e;return n(this,(function(t){if(""===(e=b.clipboardData.getData("Text")))throw new Error("Empty clipboard or could not read plain text from clipboard");return[2,e]}))}))}var _=function(){this.success=!1};function E(e,t,n){for(var r in i("listener called"),e.success=!0,t){var o=t[r],u=n.clipboardData;u.setData(r,o),"text/plain"===r&&u.getData(r)!==o&&(i("setting text/plain failed"),e.success=!1)}n.preventDefault()}function T(e){var t=new _,n=E.bind(this,t,e);document.addEventListener("copy",n);try{document.execCommand("copy")}finally{document.removeEventListener("copy",n)}return t.success}function j(e,t){C(e);var n=T(t);return D(),n}function C(e){var t=document.getSelection();if(t){var n=document.createRange();n.selectNodeContents(e),t.removeAllRanges(),t.addRange(n)}}function D(){var e=document.getSelection();e&&e.removeAllRanges()}function P(e){return t(this,void 0,void 0,(function(){var t;return n(this,(function(n){if(t="text/plain"in e,g()){if(!t)throw new Error("No `text/plain` value was specified.");if(r=e["text/plain"],b.clipboardData.setData("Text",r))return[2,!0];throw new Error("Copying failed, possibly because the user rejected it.")}var r;return T(e)?(i("regular execCopy worked"),[2,!0]):navigator.userAgent.indexOf("Edge")>-1?(i('UA "Edge" => assuming success'),[2,!0]):j(document.body,e)?(i("copyUsingTempSelection worked"),[2,!0]):function(e){var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important"),t.textContent="temporary element",document.body.appendChild(t);var n=j(t,e);return document.body.removeChild(t),n}(e)?(i("copyUsingTempElem worked"),[2,!0]):function(e){i("copyTextUsingDOM");var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important");var n=t;t.attachShadow&&(i("Using shadow DOM."),n=t.attachShadow({mode:"open"}));var r=document.createElement("span");r.innerText=e,n.appendChild(r),document.body.appendChild(t),C(r);var o=document.execCommand("copy");return D(),document.body.removeChild(t),o}(e["text/plain"])?(i("copyTextUsingDOM worked"),[2,!0]):[2,!1]}))}))}function R(){return t(this,void 0,void 0,(function(){return n(this,(function(e){if(v)return i("Using `navigator.clipboard.readText()`."),[2,v()];if(g())return i("Reading text using IE strategy."),[2,x()];throw new Error("Read is not supported in your browser.")}))}))}function S(e,t){for(var n=0,r=e;n<r.length;n++){if(-1!==r[n].types.indexOf(t))return!0}return!1}var k=function(){function e(e,t){var n;for(var r in void 0===t&&(t={}),this.types=Object.keys(e),this._items={},e){var i=e[r];this._items[r]="string"==typeof i?U(r,i):i}this.presentationStyle=null!==(n=null==t?void 0:t.presentationStyle)&&void 0!==n?n:"unspecified"}return e.prototype.getType=function(e){return t(this,void 0,void 0,(function(){return n(this,(function(t){return[2,this._items[e]]}))}))},e}();function U(e,t){return new Blob([t],{type:e})}function A(e){return t(this,void 0,void 0,(function(){return n(this,(function(t){return[2,new Promise((function(t,n){var r=new FileReader;r.addEventListener("load",(function(){var e=r.result;"string"==typeof e?t(e):n("could not convert blob to string")})),r.readAsText(e)}))]}))}))}function F(e){return t(this,void 0,void 0,(function(){var t,r,i,o,u,a,c;return n(this,(function(n){switch(n.label){case 0:t={},r=0,i=e.types,n.label=1;case 1:return r<i.length?(o=i[r],u=t,a=o,[4,e.getType(o)]):[3,4];case 2:u[a]=n.sent(),n.label=3;case 3:return r++,[3,1];case 4:return c={},e.presentationStyle&&(c.presentationStyle=e.presentationStyle),[2,new m(t,c)]}}))}))}function O(e){var t={};return t["text/plain"]=U(e,"text/plain"),new k(t)}function I(e,r){return t(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return[4,e.getType(r)];case 1:return[4,A(t.sent())];case 2:return[2,t.sent()]}}))}))}function L(e){return t(this,void 0,void 0,(function(){var t,r,i,o,u,a;return n(this,(function(n){switch(n.label){case 0:t={},r=0,i=e.types,n.label=1;case 1:return r<i.length?(o=i[r],u=t,a=o,[4,I(e,o)]):[3,4];case 2:u[a]=n.sent(),n.label=3;case 3:return r++,[3,1];case 4:return[2,t]}}))}))}e.ClipboardItem=k,e.read=function(){return t(this,void 0,void 0,(function(){var e;return n(this,(function(t){switch(t.label){case 0:return p?(i("Using `navigator.clipboard.read()`."),[2,p()]):(e=O,[4,R()]);case 1:return[2,[e.apply(void 0,[t.sent()])]]}}))}))},e.readText=R,e.setDebugLog=function(e){r=e},e.suppressWarnings=function(){o=!1},e.write=function(e){return t(this,void 0,void 0,(function(){var t,r,o,a;return n(this,(function(n){switch(n.label){case 0:return h&&m?(i("Using `navigator.clipboard.write()`."),[4,Promise.all(e.map(F))]):[3,5];case 1:t=n.sent(),n.label=2;case 2:return n.trys.push([2,4,,5]),[4,h(t)];case 3:return[2,n.sent()];case 4:if(r=n.sent(),!S(e,"text/plain")&&!S(e,"text/html"))throw r;return[3,5];case 5:return o=S(e,"text/plain"),u&&!o&&i("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call suppressWarnings() to suppress this warning."),a=P,[4,L(e[0])];case 6:if(!a.apply(void 0,[n.sent()]))throw new Error("write() failed");return[2]}}))}))},e.writeText=function(e){return t(this,void 0,void 0,(function(){return n(this,(function(t){if(y)return i("Using `navigator.clipboard.writeText()`."),[2,y(e)];if(!P(function(e){var t={};return t["text/plain"]=e,t}(e)))throw new Error("writeText() failed");return[2]}))}))},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=clipboard-polyfill.promise.js.map
