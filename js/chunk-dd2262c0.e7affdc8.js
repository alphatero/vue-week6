(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dd2262c0"],{"0cb2":function(e,t,n){var r=n("7b0b"),a=Math.floor,c="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,u,l,s){var f=n+e.length,d=u.length,p=o;return void 0!==l&&(l=r(l),p=i),c.call(s,p,(function(r,c){var i;switch(c.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(f);case"<":i=l[c.slice(1,-1)];break;default:var o=+c;if(0===o)return r;if(o>d){var s=a(o/10);return 0===s?r:s<=d?void 0===u[s-1]?c.charAt(1):u[s-1]+c.charAt(1):r}i=u[o-1]}return void 0===i?"":i}))}},"14c3":function(e,t,n){var r=n("c6b6"),a=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var c=n.call(e,t);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},5319:function(e,t,n){"use strict";var r=n("d784"),a=n("825a"),c=n("50c4"),i=n("a691"),o=n("1d80"),u=n("8aa5"),l=n("0cb2"),s=n("14c3"),f=Math.max,d=Math.min,p=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){var v=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=r.REPLACE_KEEPS_$0,h=v?"$":"$0";return[function(n,r){var a=o(this),c=void 0==n?void 0:n[e];return void 0!==c?c.call(n,a,r):t.call(String(a),n,r)},function(e,r){if(!v&&g||"string"===typeof r&&-1===r.indexOf(h)){var o=n(t,e,this,r);if(o.done)return o.value}var b=a(e),x=String(this),E="function"===typeof r;E||(r=String(r));var O=b.global;if(O){var _=b.unicode;b.lastIndex=0}var j=[];while(1){var m=s(b,x);if(null===m)break;if(j.push(m),!O)break;var R=String(m[0]);""===R&&(b.lastIndex=u(x,c(b.lastIndex),_))}for(var k="",S=0,$=0;$<j.length;$++){m=j[$];for(var A=String(m[0]),P=f(d(i(m.index),x.length),0),y=[],I=1;I<m.length;I++)y.push(p(m[I]));var T=m.groups;if(E){var U=[A].concat(y,P,x);void 0!==T&&U.push(T);var w=String(r.apply(void 0,U))}else w=l(A,x,P,y,T,r);P>=S&&(k+=x.slice(S,P)+w,S=P+A.length)}return k+x.slice(S)}]}))},7277:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"navbar navbar-expand-lg navbar-dark bg-dark"},c={class:"container-fluid"},i=Object(r["g"])("a",{class:"navbar-brand",href:"#"},"Navbar",-1),o={class:"collapse navbar-collapse",id:"navbarText"},u={class:"navbar-nav me-auto mb-2 mb-lg-0"},l={class:"nav-item"},s=Object(r["f"])("Home"),f={class:"nav-item"},d=Object(r["f"])("後台產品頁表"),p={class:"nav-item"};function v(e,t,n,v,g,h){var b=Object(r["u"])("router-link"),x=Object(r["u"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("nav",a,[Object(r["g"])("div",c,[i,Object(r["g"])("div",o,[Object(r["g"])("ul",u,[Object(r["g"])("li",l,[Object(r["g"])(b,{to:"/"},{default:Object(r["A"])((function(){return[s]})),_:1})]),Object(r["g"])("li",f,[Object(r["g"])(b,{to:"/admin/products"},{default:Object(r["A"])((function(){return[d]})),_:1})]),Object(r["g"])("li",p,[Object(r["g"])("a",{href:"#",onClick:t[1]||(t[1]=Object(r["C"])((function(){return h.signout&&h.signout.apply(h,arguments)}),["prevent"]))},"登出")])])])])]),g.checkSuccess?(Object(r["p"])(),Object(r["d"])(x,{key:0})):Object(r["e"])("",!0)],64)}n("ac1f"),n("5319");var g={name:"Dashboard",data:function(){return{checkSuccess:!1}},created:function(){},methods:{checkLogin:function(){var e=this,t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");if(t){this.$http.defaults.header.common.Authorization="".concat(t);var n="".concat(Object({NODE_ENV:"production",VUE_APP_URL:"https://vue3-course-api.hexschool.io/api",VUE_APP_PATH:"alphatest",BASE_URL:""}).VUE_APP_API,"api/user/check");this.$http.post(n,{api_token:this.token}).then((function(t){t.data.success?e.checkSuccess=!0:(alert(t.data.message),e.$$router.push("/login"))}))}else alert("尚未登入"),this.$router.push("/login")},signout:function(){document.cookie="hexToken=;expires=;",alert("已登出"),this.$router.push("/login")}}};g.render=v;t["default"]=g},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),a=n("9f7f"),c=n("5692"),i=RegExp.prototype.exec,o=c("native-string-replace",String.prototype.replace),u=i,l=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),s=a.UNSUPPORTED_Y||a.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],d=l||f||s;d&&(u=function(e){var t,n,a,c,u=this,d=s&&u.sticky,p=r.call(u),v=u.source,g=0,h=e;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),h=String(e).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==e[u.lastIndex-1])&&(v="(?: "+v+")",h=" "+h,g++),n=new RegExp("^(?:"+v+")",p)),f&&(n=new RegExp("^"+v+"$(?!\\s)",p)),l&&(t=u.lastIndex),a=i.call(d?n:u,h),d?a?(a.input=a.input.slice(g),a[0]=a[0].slice(g),a.index=u.lastIndex,u.lastIndex+=a[0].length):u.lastIndex=0:l&&a&&(u.lastIndex=u.global?a.index+a[0].length:t),f&&a&&a.length>1&&o.call(a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),e.exports=u},"9f7f":function(e,t,n){"use strict";var r=n("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("9263"),c=n("d039"),i=n("b622"),o=n("9112"),u=i("species"),l=RegExp.prototype,s=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),f=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),v=!c((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,d){var g=i(e),h=!c((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),b=h&&!c((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return t=!0,null},n[g](""),!t}));if(!h||!b||"replace"===e&&(!s||!f||p)||"split"===e&&!v){var x=/./[g],E=n(g,""[e],(function(e,t,n,r,c){var i=t.exec;return i===a||i===l.exec?h&&!c?{done:!0,value:x.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),O=E[0],_=E[1];r(String.prototype,e,O),r(l,g,2==t?function(e,t){return _.call(e,this,t)}:function(e){return _.call(e,this)})}d&&o(l[g],"sham",!0)}}}]);
//# sourceMappingURL=chunk-dd2262c0.e7affdc8.js.map