/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};function e(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}function r(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function n(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return s}function i(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}function s(t){return this instanceof s?(this.v=t,this):new s(t)}function c(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(t,e||[]),i=[];return n={},c("next"),c("throw"),c("return"),n[Symbol.asyncIterator]=function(){return this},n;function c(t){o[t]&&(n[t]=function(e){return new Promise((function(r,n){i.push([t,e,r,n])>1||u(t,e)}))})}function u(t,e){try{(r=o[t](e)).value instanceof s?Promise.resolve(r.value.v).then(a,l):f(i[0][2],r)}catch(t){f(i[0][3],t)}var r}function a(t){u("next",t)}function l(t){u("throw",t)}function f(t,e){t(e),i.shift(),i.length&&u(i[0][0],i[0][1])}}Object.create,Object.create;var u=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function a(t){return"function"==typeof t}function l(t){var e=t((function(t){Error.call(t),t.stack=(new Error).stack}));return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var f=l((function(t){return function(e){t(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e}}));function p(t,e){if(t){var r=t.indexOf(e);0<=r&&t.splice(r,1)}}var h=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._teardowns=null}var e;return t.prototype.unsubscribe=function(){var t,e,r,s,c;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var l=n(u),p=l.next();!p.done;p=l.next())p.value.remove(this)}catch(e){t={error:e}}finally{try{p&&!p.done&&(e=l.return)&&e.call(l)}finally{if(t)throw t.error}}else u.remove(this);var h=this.initialTeardown;if(a(h))try{h()}catch(t){c=t instanceof f?t.errors:[t]}var d=this._teardowns;if(d){this._teardowns=null;try{for(var v=n(d),b=v.next();!b.done;b=v.next()){var m=b.value;try{y(m)}catch(t){c=null!=c?c:[],t instanceof f?c=i(i([],o(c)),o(t.errors)):c.push(t)}}}catch(t){r={error:t}}finally{try{b&&!b.done&&(s=v.return)&&s.call(v)}finally{if(r)throw r.error}}}if(c)throw new f(c)}},t.prototype.add=function(e){var r;if(e&&e!==this)if(this.closed)y(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._teardowns=null!==(r=this._teardowns)&&void 0!==r?r:[]).push(e)}},t.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},t.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},t.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&p(e,t)},t.prototype.remove=function(e){var r=this._teardowns;r&&p(r,e),e instanceof t&&e._removeParent(this)},t.EMPTY=((e=new t).closed=!0,e),t}(),d=h.EMPTY;function v(t){return t instanceof h||t&&"closed"in t&&a(t.remove)&&a(t.add)&&a(t.unsubscribe)}function y(t){a(t)?t():t.unsubscribe()}var b=null,m=null,w=void 0,S=!1,_=!1,g={setTimeout:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=g.delegate;return((null==r?void 0:r.setTimeout)||setTimeout).apply(void 0,i([],o(t)))},clearTimeout:function(t){var e=g.delegate;return((null==e?void 0:e.clearTimeout)||clearTimeout)(t)},delegate:void 0};function x(t){g.setTimeout((function(){if(!b)throw t;b(t)}))}function E(){}var k=j("C",void 0,void 0);function j(t,e,r){return{kind:t,value:e,error:r}}var P=null;function T(t){if(S){var e=!P;if(e&&(P={errorThrown:!1,error:null}),t(),e){var r=P,n=r.errorThrown,o=r.error;if(P=null,n)throw o}}else t()}function A(t){S&&P&&(P.errorThrown=!0,P.error=t)}var L=function(t){function r(e){var r=t.call(this)||this;return r.isStopped=!1,e?(r.destination=e,v(e)&&e.add(r)):r.destination=q,r}return e(r,t),r.create=function(t,e,r){return new O(t,e,r)},r.prototype.next=function(t){this.isStopped?N(function(t){return j("N",t,void 0)}(t),this):this._next(t)},r.prototype.error=function(t){this.isStopped?N(j("E",void 0,t),this):(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped?N(k,this):(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},r.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},r}(h),O=function(t){function r(e,r,n){var o,i=t.call(this)||this;if(a(e))o=e;else if(e){var s;o=e.next,r=e.error,n=e.complete,i&&_?(s=Object.create(e)).unsubscribe=function(){return i.unsubscribe()}:s=e,o=null==o?void 0:o.bind(s),r=null==r?void 0:r.bind(s),n=null==n?void 0:n.bind(s)}return i.destination={next:o?I(o):E,error:I(null!=r?r:C),complete:n?I(n):E},i}return e(r,t),r}(L);function I(t,e){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];try{t.apply(void 0,i([],o(e)))}catch(t){S?A(t):x(t)}}}function C(t){throw t}function N(t,e){var r=m;r&&g.setTimeout((function(){return r(t,e)}))}var q={closed:!0,next:E,error:C,complete:E},D="function"==typeof Symbol&&Symbol.observable||"@@observable";function M(t){return t}function F(t){return 0===t.length?M:1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}}var z=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(e){var r=new t;return r.source=this,r.operator=e,r},t.prototype.subscribe=function(t,e,r){var n,o=this,i=(n=t)&&n instanceof L||function(t){return t&&a(t.next)&&a(t.error)&&a(t.complete)}(n)&&v(n)?t:new O(t,e,r);return T((function(){var t=o,e=t.operator,r=t.source;i.add(e?e.call(i,r):r?o._subscribe(i):o._trySubscribe(i))})),i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},t.prototype.forEach=function(t,e){var r=this;return new(e=R(e))((function(e,n){var o=new O({next:function(e){try{t(e)}catch(t){n(t),o.unsubscribe()}},error:n,complete:e});r.subscribe(o)}))},t.prototype._subscribe=function(t){var e;return null===(e=this.source)||void 0===e?void 0:e.subscribe(t)},t.prototype[D]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return F(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=R(t))((function(t,r){var n;e.subscribe((function(t){return n=t}),(function(t){return r(t)}),(function(){return t(n)}))}))},t.create=function(e){return new t(e)},t}();function R(t){var e;return null!==(e=null!=t?t:w)&&void 0!==e?e:Promise}var U="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function Y(t){if(t instanceof z)return t;if(null!=t){if(function(t){return a(t[D])}(t))return f=t,new z((function(t){var e=f[D]();if(a(e.subscribe))return e.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(u(t))return l=t,new z((function(t){for(var e=0;e<l.length&&!t.closed;e++)t.next(l[e]);t.complete()}));if(a(null==(i=t)?void 0:i.then))return o=t,new z((function(t){o.then((function(e){t.closed||(t.next(e),t.complete())}),(function(e){return t.error(e)})).then(null,x)}));if(function(t){return Symbol.asyncIterator&&a(null==t?void 0:t[Symbol.asyncIterator])}(t))return $(t);if(function(t){return a(null==t?void 0:t[U])}(t))return e=t,new z((function(t){var r,o;try{for(var i=n(e),s=i.next();!s.done;s=i.next()){var c=s.value;if(t.next(c),t.closed)return}}catch(t){r={error:t}}finally{try{s&&!s.done&&(o=i.return)&&o.call(i)}finally{if(r)throw r.error}}t.complete()}));if(function(t){return a(null==t?void 0:t.getReader)}(t))return $(function(t){return c(this,arguments,(function(){var e,n,o;return r(this,(function(r){switch(r.label){case 0:e=t.getReader(),r.label=1;case 1:r.trys.push([1,,9,10]),r.label=2;case 2:return[4,s(e.read())];case 3:return n=r.sent(),o=n.value,n.done?[4,s(void 0)]:[3,5];case 4:return[2,r.sent()];case 5:return[4,s(o)];case 6:return[4,r.sent()];case 7:return r.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}}))}))}(t))}var e,o,i,l,f;throw function(t){return new TypeError("You provided "+(null!==t&&"object"==typeof t?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}(t)}function $(t){return new z((function(e){(function(t,e){var o,i,s,c,u,a,l,f;return u=this,a=void 0,f=function(){var u,a;return r(this,(function(r){switch(r.label){case 0:r.trys.push([0,5,6,11]),o=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,r=t[Symbol.asyncIterator];return r?r.call(t):(t=n(t),e={},o("next"),o("throw"),o("return"),e[Symbol.asyncIterator]=function(){return this},e);function o(r){e[r]=t[r]&&function(e){return new Promise((function(n,o){!function(t,e,r,n){Promise.resolve(n).then((function(e){t({value:e,done:r})}),e)}(n,o,(e=t[r](e)).done,e.value)}))}}}(t),r.label=1;case 1:return[4,o.next()];case 2:if((i=r.sent()).done)return[3,4];if(u=i.value,e.next(u),e.closed)return[2];r.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=r.sent(),s={error:a},[3,11];case 6:return r.trys.push([6,,9,10]),i&&!i.done&&(c=o.return)?[4,c.call(o)]:[3,8];case 7:r.sent(),r.label=8;case 8:return[3,10];case 9:if(s)throw s.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}}))},new((l=void 0)||(l=Promise))((function(t,e){function r(t){try{o(f.next(t))}catch(t){e(t)}}function n(t){try{o(f.throw(t))}catch(t){e(t)}}function o(e){var o;e.done?t(e.value):(o=e.value,o instanceof l?o:new l((function(t){t(o)}))).then(r,n)}o((f=f.apply(u,a||[])).next())}))})(t,e).catch((function(t){return e.error(t)}))}))}function B(t){return function(e){if(function(t){return a(null==t?void 0:t.lift)}(e))return e.lift((function(e){try{return t(e,this)}catch(t){this.error(t)}}));throw new TypeError("Unable to lift unknown Observable type")}}var G=function(t){function r(e,r,n,o,i){var s=t.call(this,e)||this;return s.onFinalize=i,s._next=r?function(t){try{r(t)}catch(t){e.error(t)}}:t.prototype._next,s._error=o?function(t){try{o(t)}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._error,s._complete=n?function(){try{n()}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,s}return e(r,t),r.prototype.unsubscribe=function(){var e,r=this.closed;t.prototype.unsubscribe.call(this),!r&&(null===(e=this.onFinalize)||void 0===e||e.call(this))},r}(L);function W(t,e){return B((function(r,n){var o=0;r.subscribe(new G(n,(function(r){n.next(t.call(e,r,o++))})))}))}function H(t,e,r){return void 0===r&&(r=1/0),a(e)?H((function(r,n){return W((function(t,o){return e(r,t,n,o)}))(Y(t(r,n)))}),r):("number"==typeof e&&(r=e),B((function(e,n){return function(t,e,r,n,o,i,s,c){var u=[],a=0,l=0,f=!1,p=function(){!f||u.length||a||e.complete()},h=function(t){return a<n?d(t):u.push(t)},d=function(t){a++;var o=!1;Y(r(t,l++)).subscribe(new G(e,(function(t){e.next(t)}),(function(){o=!0}),void 0,(function(){if(o)try{a--;for(var t=function(){var t=u.shift();d(t)};u.length&&a<n;)t();p()}catch(t){e.error(t)}})))};return t.subscribe(new G(e,h,(function(){f=!0,p()}))),function(){}}(e,n,t,r)})))}var J=Array.isArray;var K=["addListener","removeListener"],Q=["addEventListener","removeEventListener"],V=["on","off"];function X(t,e,r,n){if(a(r)&&(n=r,r=void 0),n)return X(t,e,r).pipe((s=n,W((function(t){return function(t,e){return J(e)?t.apply(void 0,i([],o(e))):t(e)}(s,t)}))));var s,c=o(function(t){return a(t.addEventListener)&&a(t.removeEventListener)}(t)?Q.map((function(n){return function(o){return t[n](e,o,r)}})):function(t){return a(t.addListener)&&a(t.removeListener)}(t)?K.map(Z(t,e)):function(t){return a(t.on)&&a(t.off)}(t)?V.map(Z(t,e)):[],2),l=c[0],f=c[1];if(!l&&u(t))return H((function(t){return X(t,e,r)}))(Y(t));if(!l)throw new TypeError("Invalid event target");return new z((function(t){var e=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return t.next(1<e.length?e:e[0])};return l(e),function(){return f(e)}}))}function Z(t,e){return function(r){return function(n){return t[r](e,n)}}}class tt{constructor(t){this.store=t,this.currentProject=document.querySelector(".project-name"),this.projectsList=document.querySelector(".projects"),this.projectNames=document.querySelectorAll(".p-name"),this.statsProject=document.querySelector(".stats-projects"),this.tasksProject=document.querySelector(".tasks-projects")}init(){this.renderStats(this.store.state),this.renderTasks(this.store.state),this.changeProject()}changeProject(){X(this.currentProject,"click").subscribe((()=>{this.projectsList.classList.contains("none")&&this.projectsList.classList.remove("none")})),X(this.projectNames,"click").subscribe((t=>{this.store.state.current=t.target.textContent,this.projectsList.classList.add("none"),this.tasksProject.textContent="",this.renderTasks(this.store.state)}))}checkDone(t){X(t,"click").subscribe((t=>{const e=document.querySelector(".project-name").textContent,r=t.target.nextSibling.textContent;t.target.classList.contains("check")?(t.target.classList.remove("check"),this.store.unDone(e,r)):(t.target.classList.add("check"),this.store.done(e,r)),tt.changeOpen(this.store.state)}))}renderStats(t){t.state.forEach((t=>{let e=0;t.tasks.forEach((t=>{t.done||(e+=1)}));const r=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div");r.className="stats-count",n.className="count-name",o.className="count-number",n.textContent=t.name,o.textContent=e,r.append(n,o),r.append(o),this.statsProject.append(r)}))}renderTasks(t){this.currentProject.textContent=t.current,t.state.forEach((e=>{t.current===e.name&&e.tasks.forEach((t=>{const e=document.createElement("div"),r=document.createElement("div"),n=document.createElement("div");e.className="tasks-project-status",r.className="task-status",n.className="task-name",t.done&&r.classList.add("check"),n.textContent=t.name,e.append(r,n),this.tasksProject.append(e)}))})),this.checkDone(document.querySelectorAll(".task-status"))}static changeOpen(t){let e=0;const r=document.querySelectorAll(".count-name");t.state.forEach((r=>{r.name===t.current&&r.tasks.forEach((t=>{t.done||(e+=1)}))}));for(const n of r)n.textContent===t.current&&(n.nextSibling.textContent=e)}}var et=l((function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),rt=function(t){function r(){var e=t.call(this)||this;return e.closed=!1,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return e(r,t),r.prototype.lift=function(t){var e=new nt(this,this);return e.operator=t,e},r.prototype._throwIfClosed=function(){if(this.closed)throw new et},r.prototype.next=function(t){var e=this;T((function(){var r,o;if(e._throwIfClosed(),!e.isStopped){var i=e.observers.slice();try{for(var s=n(i),c=s.next();!c.done;c=s.next())c.value.next(t)}catch(t){r={error:t}}finally{try{c&&!c.done&&(o=s.return)&&o.call(s)}finally{if(r)throw r.error}}}}))},r.prototype.error=function(t){var e=this;T((function(){if(e._throwIfClosed(),!e.isStopped){e.hasError=e.isStopped=!0,e.thrownError=t;for(var r=e.observers;r.length;)r.shift().error(t)}}))},r.prototype.complete=function(){var t=this;T((function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var e=t.observers;e.length;)e.shift().complete()}}))},r.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=null},Object.defineProperty(r.prototype,"observed",{get:function(){var t;return(null===(t=this.observers)||void 0===t?void 0:t.length)>0},enumerable:!1,configurable:!0}),r.prototype._trySubscribe=function(e){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,e)},r.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},r.prototype._innerSubscribe=function(t){var e=this,r=e.hasError,n=e.isStopped,o=e.observers;return r||n?d:(o.push(t),new h((function(){return p(o,t)})))},r.prototype._checkFinalizedStatuses=function(t){var e=this,r=e.hasError,n=e.thrownError,o=e.isStopped;r?t.error(n):o&&t.complete()},r.prototype.asObservable=function(){var t=new z;return t.source=this,t},r.create=function(t,e){return new nt(t,e)},r}(z),nt=function(t){function r(e,r){var n=t.call(this)||this;return n.destination=e,n.source=r,n}return e(r,t),r.prototype.next=function(t){var e,r;null===(r=null===(e=this.destination)||void 0===e?void 0:e.next)||void 0===r||r.call(e,t)},r.prototype.error=function(t){var e,r;null===(r=null===(e=this.destination)||void 0===e?void 0:e.error)||void 0===r||r.call(e,t)},r.prototype.complete=function(){var t,e;null===(e=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===e||e.call(t)},r.prototype._subscribe=function(t){var e,r;return null!==(r=null===(e=this.source)||void 0===e?void 0:e.subscribe(t))&&void 0!==r?r:d},r}(rt);const ot={current:"Android App",state:[{id:3,name:"Android App",tasks:[{id:31,name:"Push Notification",done:!1},{id:32,name:"Play Market Support",done:!1},{id:33,name:"Play Market Publication",done:!1}]},{id:2,name:"Frontend",tasks:[{id:21,name:"Widget API",done:!1},{id:22,name:"Modal",done:!1},{id:23,name:"Elements DOM",done:!1},{id:24,name:"Logic Base",done:!1}]},{id:1,name:"REST Backend",tasks:[{id:11,name:"GET",done:!1},{id:12,name:"POST",done:!1},{id:13,name:"DELETE",done:!1},{id:14,name:"PUT",done:!1}]},{id:4,name:"iOS App",tasks:[{id:41,name:"Push Notifications",done:!1},{id:42,name:"Apple Pay Support",done:!1},{id:43,name:"l18n",done:!1},{id:44,name:"AppStore Publication",done:!1}]}]};console.log("app started");const it=new class{constructor(){this.state$=new rt,this.state=ot}done(t,e){this.state$.next({state:this.state.state,done:!0,project:t,task:e})}unDone(t,e){this.state$.next({state:this.state.state,done:!1,project:t,task:e})}};new tt(it).init(),it.state$.subscribe((t=>{const e=t.state.filter((e=>e.name===t.project))[0].tasks.filter((e=>e.name===t.task));return e[0].done=t.done,e[0].done}))})();