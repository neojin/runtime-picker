module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={color:"transparent",textShadow:"0 0 0 #333",":focus":{outline:"none"}}},function(e,t){e.exports=require("react")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(1)),a=o(n(0));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.exclude,n=e.handleChange,o=e.handleKeyboard,u=e.name,l=e.value;return t?null:r.default.createElement(r.default.Fragment,null," : ",r.default.createElement("input",{dir:"rtl",max:59,min:0,name:u,onChange:n,onKeyDown:o,step:1,style:a.default,type:"number",value:l}))};u.defaultProps={exclude:!1},t.default=u},function(e,t){e.exports=require("react-bootstrap")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=i(n(1)),o=n(3),u=i(n(2)),l=i(n(0));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=0,f=59,p=3600,m=60,h=8,y=48,v=57,b=/.$/,g=/^(0+)/,S=function(e){return e},_=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,S=Array(i),_=0;_<i;_++)S[_]=arguments[_];return n=r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(S))),r.state={hours:"000",minutes:"00",seconds:"00"},r.toSeconds=function(){var e=r.state,t=e.hours,n=e.minutes,a=e.seconds;return parseInt(t,10)*p+parseInt(n,10)*m+parseInt(a,10)},r.fromSeconds=function(){var e=r.props.value,t=Math.floor(e/p),n=Math.floor(e/m)%m,a=e%p%m;r.setState({hours:(""+t).padStart(3,"0"),minutes:(""+n).padStart(2,"0"),seconds:(""+a).padStart(2,"0")})},r.runtimeDisplay=function(){var e=r.state,t=e.hours,n=e.minutes,a=e.seconds;return t+":"+n+(r.props.skipSeconds?"":":"+a)},r.chainOrTrim=function(e,t,n){return n?e.replace(b,""):""+e+t},r.handleChange=function(e){var t=e.currentTarget,n=t.name,a=t.value,o=t.getAttribute("data-unscoped"),u=o?3:2;r.setState(function(){var e=parseInt(a,10);return Number.isNaN(e)?null:e<d||!o&&e>f?null:s({},n,a.padStart(u,"0"))})},r.handleKeyboard=function(e){e.persist();var t=e.key,n=e.keyCode,a=e.currentTarget,o=n===h;if(!(n>=y&&n<=v)&&!o)return!1;var u=a.name,l=a.value,i=a.getAttribute("data-unscoped"),c=i?3:2,p=r.chainOrTrim(l,t,o).replace(g,""),m=parseInt(p,10);return!Number.isNaN(m)&&(!(m<d||!i&&m>f)&&(e.preventDefault(),r.setState(s({},u,p.padStart(c,"0")))))},r.renderPicker=function(){var e=r.state,t=e.hours,n=e.minutes,i=e.seconds,s=r.props,c=s.skipSeconds,d=s.title;return a.default.createElement(o.Popover,{id:"runtime-picker-top",title:d},a.default.createElement("input",{autoFocus:!0,"data-unscoped":!0,dir:"rtl",max:999,min:0,name:"hours",onChange:r.handleChange,onKeyDown:r.handleKeyboard,step:1,style:l.default,type:"number",value:t}),a.default.createElement(u.default,{handleChange:r.handleChange,handleKeyboard:r.handleKeyboard,name:"minutes",value:n}),a.default.createElement(u.default,{exclude:c,handleChange:r.handleChange,handleKeyboard:r.handleKeyboard,name:"seconds",value:i}))},r.renderDisabled=function(){var e=r.props.name;return a.default.createElement("div",{className:"disabled-runtimePicker"},a.default.createElement("input",{id:e,name:e,type:"hidden",value:r.toSeconds()}),a.default.createElement("input",{disabled:!0,className:"form-control",type:"text",value:r.runtimeDisplay()}))},c(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.PureComponent),r(t,[{key:"componentDidMount",value:function(){this.fromSeconds()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props.onChange;if("function"==typeof n){var r=this.state,a=r.hours,o=r.minutes,u=r.seconds,l=t.hours,i=t.minutes,s=t.seconds;a===l&&o===i&&u===s||n(this.toSeconds())}}},{key:"render",value:function(){var e=this.props,t=e.disabled,n=e.name,r=e.placement;return t?this.renderDisabled():a.default.createElement("div",{className:"runtimePicker"},a.default.createElement("input",{id:n,name:n,type:"hidden",value:this.toSeconds()}),a.default.createElement(o.OverlayTrigger,{trigger:"click",overlay:this.renderPicker(),placement:r,rootClose:!0},a.default.createElement("input",{className:"form-control",type:"text",onChange:S,value:this.runtimeDisplay()})))}}]),t}();_.defaultProps={disabled:!1,name:"runtime",placement:"top",skipSeconds:!1,title:"Pick your Runtime",value:0},t.default=_}]);