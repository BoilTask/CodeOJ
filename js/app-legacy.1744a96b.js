(function(t){function e(e){for(var a,o,s=e[0],d=e[1],u=e[2],l=0,c=[];l<s.length;l++)o=s[l],r[o]&&c.push(r[o][0]),r[o]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);m&&m(e);while(c.length)c.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=d(d.s=n[0]))}return t}var a={},o={app:0},r={app:0},i=[];function s(t){return d.p+"js/"+({}[t]||t)+"-legacy."+{"chunk-1e25e59b":"75eef7f7","chunk-2312fe4b":"20d4bd21","chunk-2d0ab327":"050e6b02","chunk-2d0b2519":"a4ba4121","chunk-2d0b349e":"884d7671","chunk-2d0ba2e8":"780413d0","chunk-2d0be347":"7aef3d1f","chunk-2d0c87c4":"f70bafa4","chunk-2d0da784":"aa4a07b2","chunk-2d21a011":"ae280599","chunk-2d22996d":"357a3287","chunk-2d22d3f5":"17c1d034","chunk-48e3bdf2":"77a02d80","chunk-4a0ad8ef":"fde0b5ef","chunk-61484e69":"c96adde0","chunk-680a2c02":"8e642a9d","chunk-7f9f2c09":"5fe52c55","chunk-8200732e":"2dae2475","chunk-9384d152":"100e97c6","chunk-9ca2ffac":"62e920b8","chunk-c3ddfe22":"d658c77b","chunk-f80c8cfa":"2bcf6f46"}[t]+".js"}function d(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.e=function(t){var e=[],n={"chunk-1e25e59b":1,"chunk-2312fe4b":1,"chunk-48e3bdf2":1,"chunk-4a0ad8ef":1,"chunk-61484e69":1,"chunk-680a2c02":1,"chunk-7f9f2c09":1,"chunk-8200732e":1,"chunk-9384d152":1,"chunk-9ca2ffac":1,"chunk-c3ddfe22":1,"chunk-f80c8cfa":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-1e25e59b":"1a1f3580","chunk-2312fe4b":"ae85d988","chunk-2d0ab327":"31d6cfe0","chunk-2d0b2519":"31d6cfe0","chunk-2d0b349e":"31d6cfe0","chunk-2d0ba2e8":"31d6cfe0","chunk-2d0be347":"31d6cfe0","chunk-2d0c87c4":"31d6cfe0","chunk-2d0da784":"31d6cfe0","chunk-2d21a011":"31d6cfe0","chunk-2d22996d":"31d6cfe0","chunk-2d22d3f5":"31d6cfe0","chunk-48e3bdf2":"ae85d988","chunk-4a0ad8ef":"98f10102","chunk-61484e69":"4fd475a0","chunk-680a2c02":"956f4bc5","chunk-7f9f2c09":"968c320d","chunk-8200732e":"d94ee873","chunk-9384d152":"7879828b","chunk-9ca2ffac":"2237c89b","chunk-c3ddfe22":"dc7e998c","chunk-f80c8cfa":"468352be"}[t]+".css",r=d.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return e()}var c=document.getElementsByTagName("style");for(s=0;s<c.length;s++){u=c[s],l=u.getAttribute("data-href");if(l===a||l===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],m.parentNode.removeChild(m),n(i)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)}).then(function(){o[t]=0}));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,n){a=r[t]=[e,n]});e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=s(t),u=function(e){l.onerror=l.onload=null,clearTimeout(c);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");i.type=a,i.request=o,n[1](i)}r[t]=void 0}};var c=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},d.m=t,d.c=a,d.d=function(t,e,n){d.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},d.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)d.d(n,a,function(e){return t[e]}.bind(null,a));return n},d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="/",d.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),o=n.n(a);o.a},1865:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=n("d847"),r=n.n(o),i=n("795b"),s=n.n(i),d=n("bc3a"),u=n.n(d),l={},c=u.a.create(l);c.interceptors.request.use(function(t){return t},function(t){return s.a.reject(t)}),c.interceptors.response.use(function(t){return t},function(t){return s.a.reject(t)}),Plugin.install=function(t,e){t.axios=c,window.axios=c,r()(t.prototype,{axios:{get:function(){return c}},$axios:{get:function(){return c}}})},a["default"].use(Plugin);Plugin;var m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"layout container"},[n("Layout",[n("OJHeader"),n("router-view"),n("OJFooter")],1)],1),n("Drawer",{attrs:{title:t.drawerTitle},on:{"on-close":t.drawerClose},model:{value:t.drawerShow,callback:function(e){t.drawerShow=e},expression:"drawerShow"}},["LoginForm"==t.drawerContent?n("LoginForm"):n("RegisterForm")],1),n("Modal",{attrs:{title:t.modalTitle},on:{"on-ok":t.modalOk,"on-cancel":t.modalCancel},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},["ForgetPassword"==t.modalContent?n("ForgetPassword"):t._e()],1)],1)},f=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Header",{style:{padding:"0"}},[n("Menu",{staticStyle:{width:"100%",height:"100%","text-align":"center"},attrs:{mode:"horizontal","active-name":t.menuactive}},[n("MenuItem",{attrs:{name:"home",to:"/"}},[n("Icon",{attrs:{type:"md-code"}}),t._v("\n\t\tCodeOJ\n\t\t")],1),n("MenuItem",{attrs:{name:"problem",to:"/problem"}},[n("Icon",{attrs:{type:"ios-paper"}}),t._v("\n\t\t问题\n\t\t")],1),n("MenuItem",{attrs:{name:"status",to:"/status"}},[n("Icon",{attrs:{type:"md-filing"}}),t._v("\n\t\t状态\n\t\t")],1),n("MenuItem",{attrs:{name:"ai",to:"/ai"}},[n("Icon",{attrs:{type:"logo-snapchat"}}),t._v("\n\t\t对战\n\t\t")],1),n("MenuItem",{attrs:{name:"rank",to:"/rank"}},[n("Icon",{attrs:{type:"ios-stats"}}),t._v("\n\t\t排名\n\t\t")],1),n("Submenu",{attrs:{name:"discuss"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"md-bonfire"}}),t._v("\n\t\t\t\t社区\n\t\t\t")],1),n("MenuItem",{attrs:{name:"blog",to:"/blog"}},[n("Icon",{attrs:{type:"ios-document"}}),t._v("\n\t\t\t博客\n\t\t\t")],1),n("MenuItem",{attrs:{name:"bbs",to:"/blog"}},[n("Icon",{attrs:{type:"ios-beer"}}),t._v("\n\t\t\t论坛\n\t\t\t")],1)],2),n("Submenu",{attrs:{name:"contest"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-calendar"}}),t._v("\n\t\t\t\t竞赛\n\t\t\t")],1),n("MenuItem",{attrs:{name:"3-1",to:"/contest"}},[n("Icon",{attrs:{type:"md-medal"}}),t._v("\n\t\t\t比赛\n\t\t\t")],1),n("MenuItem",{attrs:{name:"3-2",to:"/contest"}},[n("Icon",{attrs:{type:"ios-snow"}}),t._v("\n\t\t\t训练\n\t\t\t")],1),n("MenuItem",{attrs:{name:"3-3",to:"/contest"}},[n("Icon",{attrs:{type:"ios-pulse"}}),t._v("\n\t\t\t考试\n\t\t\t")],1)],2),n("div",{staticClass:"nav-profile"},[t.isLogin?n("Submenu",{attrs:{name:"profile"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-person"}}),t._v("\n\t\t\t\t\t"+t._s(t.user_id)+"\n\t\t\t\t")],1),n("MenuItem",{attrs:{name:"user",to:"/user/"+t.user_id}},[n("Icon",{attrs:{type:"ios-chatbubbles"}}),t._v("\n\t\t\t\t空间\n\t\t\t\t")],1),n("MenuItem",{attrs:{name:"message"},nativeOn:{click:function(e){return t.messageShow(e)}}},[n("Icon",{attrs:{type:"ios-chatbubbles"}}),t._v("\n\t\t\t\t消息\n\t\t\t\t")],1),n("MenuItem",{attrs:{name:"manage",to:"/manage"}},[n("Icon",{attrs:{type:"ios-contact"}}),t._v("\n\t\t\t\t管理\n\t\t\t\t")],1),n("MenuItem",{staticStyle:{color:"#ff9900"},attrs:{name:"logout"},nativeOn:{click:function(e){return t.logout(e)}}},[n("Icon",{attrs:{type:"md-exit"}}),n("span",[t._v("注销")])],1)],2):n("Submenu",{attrs:{name:"profile"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-finger-print"}}),t._v("\n\t\t\t\t\t用户\n\t\t\t\t")],1),n("MenuItem",{attrs:{name:"login"},nativeOn:{click:function(e){return t.loginShow(e)}}},[n("Icon",{attrs:{type:"md-log-in"}}),t._v("\n\t\t\t\t登录\n\t\t\t\t")],1),n("MenuItem",{attrs:{name:"register"},nativeOn:{click:function(e){return t.registerShow(e)}}},[n("Icon",{attrs:{type:"ios-rose"}}),t._v("\n\t\t\t\t注册\n\t\t\t\t")],1)],2)],1)],1)],1)},p=[],g=(n("28a5"),n("2f62")),b={name:"Ojheader",computed:{menuactive:function(){var t=this.$route.path,e=t.split("/")[1];return""==e&&(e="home"),e},isLogin:function(){return this.$store.state.loginInfo.isLogin},user_id:function(){return this.$store.state.loginInfo.isLogin?this.$store.state.loginInfo.user_id:"用户"}},methods:{loginShow:function(){this.$store.commit("drawerChange",!0),this.$store.commit("drawerTitle","登录"),this.$store.commit("drawerContent","LoginForm")},registerShow:function(){this.$store.commit("drawerChange",!0),this.$store.commit("drawerTitle","注册"),this.$store.commit("drawerContent","RegisterForm")},logout:function(){var t=this;this.$Spin.show(),axios.post(this.$store.state.API_ROOT+"user/logout","user_id="+this.user_id+"&token="+this.$store.state.loginInfo.token).then(function(e){t.$Spin.hide(),t.$store.commit("Logout"),t.$router.go(0),t.$Message.success("注销成功!")}).catch(function(t){this.$Spin.hide(),console.log(t)})}}},w=b,v=(n("b24c"),n("2877")),k=Object(v["a"])(w,h,p,!1,null,"182343de",null),_=k.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Footer",{staticClass:"footer"},[n("BackTop"),n("div",{staticClass:"footer-left"},[n("p",[t._v(t._s(t.time))])]),n("div",[n("Button",{attrs:{to:"//www.miitbeian.gov.cn",target:"_blank",ghost:""}},[t._v("\n\t\t\t豫ICP备15024677号-3\n\t\t")])],1),n("div",{staticClass:"footer-right"},[n("p",[t._v("Copyright © CodeOJ")])])],1)},$=[],O=(n("6b54"),n("a481"),{name:"OJFooter",computed:{time:{get:function(){return this.$store.state.server_time},set:function(t){this.$store.commit("setTime",t)}}},methods:{exchangeTime:function(t){t=t.toString().replace(/-/g,"/");var e=new Date(t),n=e.getYear()+1900,a=e.getMonth()+1,o=e.getDate(),r=e.getHours(),i=e.getMinutes(),s=e.getSeconds();return n+"-"+(a>=10?a:"0"+a)+"-"+o+" "+(r>=10?r:"0"+r)+":"+(i>=10?i:"0"+i)+":"+(s>=10?s:"0"+s)},nextTime:function(t){t=t.toString().replace(/-/g,"/");var e=new Date(new Date(t).getTime()+1e3);return this.exchangeTime(e)},getTime:function(){var t=""==this.time?new Date:this.time;return this.exchangeTime(t)}},mounted:function(){var t=this;this.time=this.getTime(),axios.get(this.$store.state.API_ROOT+"time").then(function(e){return t.time=t.exchangeTime(e.data.data.time)}),setInterval(function(){t.time=t.nextTime(t.time)},1e3)}}),y=O,S=(n("f761"),Object(v["a"])(y,I,$,!1,null,"117226f0",null)),C=S.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Form",{ref:"formLogin",attrs:{model:t.formLogin,rules:t.ruleLogin}},[n("FormItem",{attrs:{prop:"user_id",label:"用户名"}},[n("Input",{attrs:{type:"text",placeholder:"Username"},model:{value:t.formLogin.user_id,callback:function(e){t.$set(t.formLogin,"user_id",e)},expression:"formLogin.user_id"}},[n("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),n("FormItem",{attrs:{prop:"password",label:"密码"}},[n("Input",{attrs:{type:"password",placeholder:"Password"},on:{"on-enter":function(e){return t.handleSubmit("formLogin")}},model:{value:t.formLogin.password,callback:function(e){t.$set(t.formLogin,"password",e)},expression:"formLogin.password"}},[n("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1),n("FormItem",[n("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formLogin")}}},[t._v("登录")]),n("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"error"},on:{click:t.forgetPasswordShow}},[t._v("忘记密码")])],1)],1)},x=[],L=(n("7f7f"),{name:"LoginForm",data:function(){var t=function(t,e,n){var a=e.length;if(a<3||a>20)n(new Error("用户名为3~20位！"));else{var o=/^[a-zA-Z0-9]{3,20}$/;o.test(e)?n():n(new Error("用户名为字母或数字！"))}},e=function(t,e,n){var a=e.length;a<6||a>20?n(new Error("密码为6~20位！")):n()};return{formLogin:{user_id:"",password:""},ruleLogin:{user_id:[{required:!0,validator:t,trigger:"blur"}],password:[{required:!0,validator:e,trigger:"blur"}]}}},methods:{handleSubmit:function(t){var e=this;this.$refs[t].validate(function(t){t?(e.$Spin.show(),axios.post(e.$store.state.API_ROOT+"user/login","user_id="+e.formLogin.user_id+"&password="+e.formLogin.password).then(function(t){e.$Spin.hide(),200==t.data.ret&&t.data.data.isMatch?(e.$store.commit("Login",{user_id:t.data.data.user_id,token:t.data.data.token}),e.$Message.success("Success!"),e.$store.commit("drawerChange",!1),e.$router.go(0)):""==t.data.msg?e.$Message.error("登录失败，请检查输入！"):e.$Message.error(t.data.msg)}).catch(function(t){this.$Spin.hide(),console.log(t)})):e.$Message.error("请检查输入!")})},forgetPasswordShow:function(){this.$store.commit("drawerClose"),this.$store.commit("modalChange",!0),this.$store.commit("modalTitle","忘记密码"),this.$store.commit("modalContent","ForgetPassword")}}}),M=L,P=Object(v["a"])(M,T,x,!1,null,null,null),F=P.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Form",{ref:"formValidate",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":80}},[n("FormItem",{attrs:{label:"用户名",prop:"user_id"}},[n("Input",{attrs:{placeholder:"userid"},model:{value:t.formValidate.user_id,callback:function(e){t.$set(t.formValidate,"user_id",e)},expression:"formValidate.user_id"}})],1),n("FormItem",{attrs:{label:"密码",prop:"password"}},[n("Input",{attrs:{type:"password",placeholder:"newpassword"},model:{value:t.formValidate.password,callback:function(e){t.$set(t.formValidate,"password",e)},expression:"formValidate.password"}})],1),n("FormItem",{attrs:{label:"请确认",prop:"repeat_password"}},[n("Input",{attrs:{type:"password",placeholder:"repeatpassword"},model:{value:t.formValidate.repeat_password,callback:function(e){t.$set(t.formValidate,"repeat_password",e)},expression:"formValidate.repeat_password"}})],1),n("FormItem",{attrs:{label:"昵称",prop:"nickname"}},[n("Input",{attrs:{placeholder:"nickname"},model:{value:t.formValidate.nickname,callback:function(e){t.$set(t.formValidate,"nickname",e)},expression:"formValidate.nickname"}})],1),n("FormItem",{attrs:{label:"邮箱",prop:"email"}},[n("Input",{attrs:{placeholder:"email"},model:{value:t.formValidate.email,callback:function(e){t.$set(t.formValidate,"email",e)},expression:"formValidate.email"}})],1),n("FormItem",{attrs:{label:"组织",prop:"organization"}},[n("Input",{attrs:{placeholder:"organization"},model:{value:t.formValidate.organization,callback:function(e){t.$set(t.formValidate,"organization",e)},expression:"formValidate.organization"}})],1),n("FormItem",[n("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formValidate")}}},[t._v("提交")])],1)],1)],1)},E=[],V=(n("386d"),{name:"RegisterForm",data:function(){var t=this,e=function(e,n,a){""!==t.formValidate.password&&""===n?a(new Error("请再次输入新密码！")):n!==t.formValidate.password?a(new Error("两次密码输入不一致！")):a()},n=function(t,e,n){var a=e.search(/.+@.+\..+/);a<0?n(new Error("请输入正确的邮箱格式！")):n()},a=function(t,e,n){var a=e.length;if(a<3||a>20)n(new Error("用户名为3~20位！"));else{var o=/^[a-zA-Z0-9]{3,20}$/;o.test(e)?n():n(new Error("用户名为字母或数字！"))}};return{formValidate:{user_id:"",password:"",repeat_password:"",nickname:"",email:"",organization:""},ruleValidate:{user_id:[{required:!0,validator:a,trigger:"blur"}],password:[{required:!0,message:"密码为6位到20位字符！",min:6,max:20,trigger:"blur"}],repeat_password:[{required:!0,validator:e,trigger:"blur"}],nickname:[{required:!0,message:"昵称为1~20位！",min:1,max:20,trigger:"blur"}],email:[{required:!0,validator:n,trigger:"blur"}]}}},methods:{handleSubmit:function(t){var e=this;this.$refs[t].validate(function(t){if(t){e.$Spin.show();var n=new URLSearchParams;n.append("user_id",e.formValidate.user_id),n.append("password",e.formValidate.password),n.append("repeat_password",e.formValidate.repeat_password),n.append("nickname",e.formValidate.nickname),n.append("email",e.formValidate.email),n.append("organization",e.formValidate.organization),axios.post(e.$store.state.API_ROOT+"user/register",n).then(function(t){e.$Spin.hide(),t.data.data.is_ok?(e.$Message.success("注册成功！"),e.$router.go(0)):e.$Message.error(""===t.data.data.msg?"注册失败！":t.data.data.msg)}).catch(function(t){this.$Spin.hide(),this.$Message.error("注册失败！")})}else e.$Message.error("请检查输入!")})}}}),A=V,j=Object(v["a"])(A,J,E,!1,null,"769d51d9",null),R=j.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Input",{attrs:{placeholder:"username"},model:{value:t.user_id,callback:function(e){t.user_id=e},expression:"user_id"}},[n("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("用户名：")]),n("Button",{attrs:{slot:"append",loading:t.getLoading},slot:"append"},[n("vueTencentCaptcha",{attrs:{appid:"2081307488"},on:{callback:t.getForgetKey}},[t._v("获取验证码")])],1)],1),n("Input",{staticStyle:{"margin-top":"10px"},attrs:{placeholder:"email_key"},model:{value:t.email_key,callback:function(e){t.email_key=e},expression:"email_key"}},[n("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v(t._s(t.hint))]),n("Button",{attrs:{slot:"append"},on:{click:t.verifyEmailKey},slot:"append"},[t._v("发送验证码")])],1)],1)},z=[],q={name:"ForgetPassword",data:function(){return{user_id:"",email_key:"",getLoading:!1,hint:"验证码："}},methods:{getForgetKey:function(t){var e=this;if(!t.ret){var n=/^[a-zA-Z0-9]{3,20}$/;if(n.test(this.user_id)){this.getLoading=!0,this.hint="验证码：",this.$Message.info("正在尝试发送验证码……");var a=new URLSearchParams;a.append("ticket",t.ticket),a.append("randStr",t.randstr),a.append("user_id",this.user_id),axios.post(this.$store.state.API_ROOT+"user/password",a).then(function(t){t.data.data.is_ok?e.$Message.success(""===t.data.data.msg?"发送成功，请前往邮箱接收！":t.data.data.msg):e.$Message.error(""===t.data.data.msg?"发送失败！":t.data.data.msg),e.getLoading=!1}).catch(function(t){this.$Message.error("发送失败！"),this.getLoading=!1})}else this.$Message.error("用户名格式不符！")}},verifyEmailKey:function(){var t=this;if(6!=this.email_key.length)this.$Message.error("验证码为6位字符！");else{this.$Message.info("正在验证信息……");var e=new URLSearchParams;e.append("user_id",this.user_id),e.append("email_key",this.email_key),axios.post(this.$store.state.API_ROOT+"user/"+this.user_id+"/password",e).then(function(e){e.data.data.is_ok?(t.email_key=e.data.data.password,t.hint="新密码：",t.$Message.success("重置成功，新的密码为："+e.data.data.password)):t.$Message.error("验证失败，请重新发送验证码！")}).catch(function(t){this.$Message.error("验证失败！")})}}}},D=q,N=Object(v["a"])(D,B,z,!1,null,null,null),H=N.exports,U={name:"app",components:{OJHeader:_,OJFooter:C,LoginForm:F,RegisterForm:R,ForgetPassword:H},computed:{drawerShow:{get:function(){return this.$store.state.drawerInfo.drawerShow},set:function(t){this.$store.commit("drawerChange",t)}},drawerTitle:{get:function(){return this.$store.state.drawerInfo.drawerTitle},set:function(t){this.$store.commit("drawerTitle",t)}},drawerContent:function(){return this.$store.state.drawerInfo.drawerContent},modalShow:{get:function(){return this.$store.state.modalInfo.modalShow},set:function(t){this.$store.commit("modalChange",t)}},modalTitle:{get:function(){return this.$store.state.modalInfo.modalTitle},set:function(t){this.$store.commit("modalTitle",t)}},modalContent:function(){return this.$store.state.modalInfo.modalContent}},methods:{drawerClose:function(){this.drawerTitle=""},modalOk:function(){},modalCancel:function(){}}},K=U,Z=(n("034f"),Object(v["a"])(K,m,f,!1,null,null,null)),Y=Z.exports,G=n("8c4f");a["default"].use(G["a"]);var Q=new G["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:function(){return n.e("chunk-61484e69").then(n.bind(null,"bb51"))},meta:{title:"代码在线评测平台 - CodeOJ"}},{path:"/problem",name:"ProblemList",component:function(){return n.e("chunk-c3ddfe22").then(n.bind(null,"0e7c"))},meta:{title:"问题列表 - CodeOJ"}},{path:"/problem/:id(\\d+)",name:"Problem",component:function(){return n.e("chunk-1e25e59b").then(n.bind(null,"94ed"))},meta:{auth:!0,title:"问题 - CodeOJ"}},{path:"/problem/:id(\\d+)/edit",name:"ProblemEdit",component:function(){return n.e("chunk-2d0b349e").then(n.bind(null,"2879"))},meta:{auth:!0,title:"问题编辑 - CodeOJ"}},{path:"/problem/add",name:"ProblemAdd",component:function(){return n.e("chunk-2d0b2519").then(n.bind(null,"2434"))},meta:{auth:!0,title:"新建问题 - CodeOJ"}},{path:"/status",name:"StatusList",component:function(){return n.e("chunk-7f9f2c09").then(n.bind(null,"0f83"))},meta:{title:"评测状态 - CodeOJ"}},{path:"/status/:id(\\d+)",name:"Status",component:function(){return n.e("chunk-4a0ad8ef").then(n.bind(null,"9989"))},meta:{title:"评测状态 - CodeOJ"}},{path:"/blog/:id(\\d+)",name:"Blog",component:function(){return n.e("chunk-2312fe4b").then(n.bind(null,"fd3f"))},meta:{auth:!0,title:"文章 - CodeOJ"}},{path:"/blog/add",name:"BlogAdd",component:function(){return n.e("chunk-2d0da784").then(n.bind(null,"6c78"))},meta:{auth:!0,title:"新建文章 - CodeOJ"}},{path:"/blog/:id(\\d+)/edit",name:"BlogEdit",component:function(){return n.e("chunk-2d0c87c4").then(n.bind(null,"54a0"))},meta:{auth:!0,title:"文章编辑 - CodeOJ"}},{path:"/news/add",name:"NewsAdd",component:function(){return n.e("chunk-2d0be347").then(n.bind(null,"2eec"))},meta:{auth:!0,title:"新建新闻 - CodeOJ"}},{path:"/news/:id(\\d+)/edit",name:"NewsEdit",component:function(){return n.e("chunk-2d0ab327").then(n.bind(null,"13f5"))},meta:{auth:!0,title:"新闻编辑 - CodeOJ"}},{path:"/user/:id",name:"User",component:function(){return n.e("chunk-48e3bdf2").then(n.bind(null,"1511"))},meta:{auth:!0,title:"用户 - CodeOJ"}},{path:"/manage*",component:function(){return n.e("chunk-2d22d3f5").then(n.bind(null,"f74b"))},children:[{path:"user",component:function(){return n.e("chunk-2d21a011").then(n.bind(null,"ba51"))},meta:{auth:!0,title:"编辑资料 - CodeOJ"}},{path:"userinfo",component:function(){return n.e("chunk-2d0ba2e8").then(n.bind(null,"35b2"))},meta:{auth:!0,title:"更新信息 - CodeOJ"}},{path:"blog",component:function(){return n.e("chunk-9384d152").then(n.bind(null,"9696"))},meta:{auth:!0,title:"文章管理 - CodeOJ"}},{path:"domain",component:function(){return n.e("chunk-f80c8cfa").then(n.bind(null,"5b75"))},meta:{auth:!0,title:"端口设置 - CodeOJ"}},{path:"carouse",component:function(){return n.e("chunk-8200732e").then(n.bind(null,"ecdb"))},meta:{auth:!0,title:"首页轮播 - CodeOJ"}},{path:"news",component:function(){return n.e("chunk-9ca2ffac").then(n.bind(null,"e58a"))},meta:{auth:!0,title:"首页新闻 - CodeOJ"}},{path:"problem",component:function(){return n.e("chunk-680a2c02").then(n.bind(null,"ae93"))},meta:{auth:!0,title:"问题管理 - CodeOJ"}},{path:"",name:"Manage",component:function(){return n.e("chunk-2d21a011").then(n.bind(null,"ba51"))},meta:{auth:!0,title:"信息编辑 - CodeOJ"}}]},{path:"/error",name:"Error",component:function(){return n.e("chunk-2d22996d").then(n.bind(null,"dda8"))},meta:{title:"错误 - CodeOJ"}},{path:"*",redirect:"/error"}]}),W=n("a78e"),X=n.n(W);a["default"].use(g["a"]);var tt=new g["a"].Store({state:{API_ROOT:"https://api.codeoj.cn/",CDN_ROOT:"http://cdn.codeoj.cn/",server_time:"",loginInfo:{isLogin:!1,user_id:"",token:""},drawerInfo:{drawerTitle:"",drawerContent:"",drawerShow:!1},modalInfo:{modalTitle:"",modalContent:"",modalShow:!1}},mutations:{changeAPIROOT:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.codeoj.cn/";t.API_ROOT=e,X.a.set("API_ROOT",t.API_ROOT)},drawerChange:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];a["default"].set(t.drawerInfo,"drawerShow",e)},drawerTitle:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";a["default"].set(t.drawerInfo,"drawerTitle",e)},drawerContent:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";a["default"].set(t.drawerInfo,"drawerContent",e)},drawerClose:function(t){a["default"].set(t.drawerInfo,"drawerShow",!1),a["default"].set(t.drawerInfo,"drawerContent",""),a["default"].set(t.drawerInfo,"drawerTitle","")},modalChange:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];a["default"].set(t.modalInfo,"modalShow",e)},modalTitle:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";a["default"].set(t.modalInfo,"modalTitle",e)},modalContent:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";a["default"].set(t.modalInfo,"modalContent",e)},modalClose:function(t){a["default"].set(t.modalInfo,"modalShow",!1),a["default"].set(t.modalInfo,"modalContent",""),a["default"].set(t.modalInfo,"modalTitle","")},Login:function(t,e){a["default"].set(t.loginInfo,"isLogin",!0),a["default"].set(t.loginInfo,"user_id",e.user_id),a["default"].set(t.loginInfo,"token",e.token),X.a.set("loginInfo",t.loginInfo)},Logout:function(t){a["default"].set(t.loginInfo,"isLogin",!1),a["default"].set(t.loginInfo,"user_id",""),a["default"].set(t.loginInfo,"token",""),X.a.remove("loginInfo")},setTime:function(t,e){t.server_time=e}}}),et=(n("d310"),n("e069")),nt=n.n(et),at=n("b2d8"),ot=n.n(at),rt=(n("64e1"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mavon-editor",{staticClass:"showDiv",staticStyle:{"min-height":"0"},attrs:{codeStyle:"vs2015",editable:!1,toolbarsFlag:!1,defaultOpen:"preview",subfield:!1,ishljs:!0},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})}),it=[],st={name:"MarkdownShow",model:{prop:"content",event:"change"},props:{content:String},methods:{change:function(){}}},dt=st,ut=(n("aa28"),Object(v["a"])(dt,rt,it,!1,null,"f64f4c58",null)),lt=ut.exports,ct={install:function(t){t.component("MarkdownShow",lt)}},mt=ct,ft=n("daeb"),ht=n.n(ft);function pt(t){Q.push({name:"Error",params:{msg:t}}),document.title="错误 - CodeOJ"}a["default"].use(nt.a),a["default"].config.productionTip=!1,a["default"].use(ot.a),a["default"].use(mt),a["default"].use(ht.a),Q.beforeEach(function(t,e,n){if(!tt.state.loginInfo.isLogin){var a=X.a.getJSON("loginInfo");a&&(tt.state.loginInfo=a)}var o=X.a.getJSON("API_ROOT");o&&(tt.state.API_ROOT=o),null!=t.meta.auth&&t.meta.auth?axios.post(tt.state.API_ROOT+"auth","user_id="+tt.state.loginInfo.user_id+"&token="+tt.state.loginInfo.token+"&path="+t.fullPath).then(function(e){200==e.data.ret&&e.data.data?(nt.a.LoadingBar.start(),nt.a.Spin.show(),t.meta.title&&(document.title=t.meta.title),n()):pt("无权限或信息有误！")}).catch(function(t){console.log(t),pt("连接服务器失败！")}):(nt.a.LoadingBar.start(),nt.a.Spin.show(),t.meta.title&&(document.title=t.meta.title),n())}),Q.afterEach(function(t){nt.a.LoadingBar.finish(),nt.a.Spin.hide()}),new a["default"]({router:Q,store:tt,render:function(t){return t(Y)}}).$mount("#app")},"64a9":function(t,e,n){},aa28:function(t,e,n){"use strict";var a=n("f77b"),o=n.n(a);o.a},b24c:function(t,e,n){"use strict";var a=n("1865"),o=n.n(a);o.a},d310:function(t,e,n){},e8e3:function(t,e,n){},f761:function(t,e,n){"use strict";var a=n("e8e3"),o=n.n(a);o.a},f77b:function(t,e,n){}});
//# sourceMappingURL=app-legacy.1744a96b.js.map