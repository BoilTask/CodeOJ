(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0820f7a5"],{"0a90":function(t,e,a){var o=a("63b6"),r=a("10ff");o(o.G+o.F*(parseFloat!=r),{parseFloat:r})},"10ff":function(t,e,a){var o=a("e53d").parseFloat,r=a("a1ce").trim;t.exports=1/o(a("e692")+"-0")!==-1/0?function(t){var e=r(String(t),3),a=o(e);return 0===a&&"-"==e.charAt(0)?-0:a}:o},"3f67":function(t,e,a){},5002:function(t,e,a){"use strict";var o=a("3f67"),r=a.n(o);r.a},"59ad":function(t,e,a){t.exports=a("7be7")},"6c1cb":function(t,e,a){},"76e0":function(t,e,a){"use strict";var o=a("6c1cb"),r=a.n(o);r.a},"7be7":function(t,e,a){a("0a90"),t.exports=a("584a").parseFloat},"9d26":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Card",{staticClass:"newsCard"},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("端口设置")]),a("div",{staticStyle:{padding:"15px"}},[a("p",[a("Select",{staticStyle:{width:"250px"},model:{value:t.serverAPIROOT,callback:function(e){t.serverAPIROOT=e},expression:"serverAPIROOT"}},[a("span",{attrs:{slot:"prefix"},slot:"prefix"},[t._v("后台地址：")]),a("Option",{attrs:{value:"https://api.codeoj.cn/"}},[t._v("https://api.codeoj.cn/")]),a("Option",{attrs:{value:"http://apidev.codeoj.cn/"}},[t._v("http://apidev.codeoj.cn/")]),a("Option",{attrs:{value:"http://local.codeoj.cn/"}},[t._v("http://local.codeoj.cn/")])],1)],1),a("p",[a("ul",{staticClass:"list"},[a("li",[t._v("主域名："),a("Button",[a("a",{attrs:{href:"https://codeoj.cn"}},[t._v("https://codeoj.cn")])])],1),a("li",[t._v("coding.net代理："),a("Button",[a("a",{attrs:{href:"http://coding.codeoj.cn"}},[t._v("http://coding.codeoj.cn")])])],1),a("li",[t._v("github.com代理："),a("Button",[a("a",{attrs:{href:"http://github.codeoj.cn"}},[t._v("http://github.codeoj.cn")])])],1),a("li",[t._v("开发环境："),a("Button",[a("a",{attrs:{href:"http://localhost:8080"}},[t._v("http://localhost:8080")])])],1)])])])])},r=[],s={name:"SwitchServer",computed:{serverAPIROOT:{get:function(){return this.$store.state.API_ROOT},set:function(t){this.$store.commit("changeAPIROOT",t),this.$Message.success("修改后台端口成功!")}}}},i=s,n=(a("5002"),a("2877")),c=Object(n["a"])(i,o,r,!1,null,null,null);e["a"]=c.exports},a1ce:function(t,e,a){var o=a("63b6"),r=a("25eb"),s=a("294c"),i=a("e692"),n="["+i+"]",c="​",l=RegExp("^"+n+n+"*"),u=RegExp(n+n+"*$"),p=function(t,e,a){var r={},n=s(function(){return!!i[t]()||c[t]()!=c}),l=r[t]=n?e(d):i[t];a&&(r[a]=l),o(o.P+o.F*n,"String",r)},d=p.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=p},bb51:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("Row",[a("Col",{attrs:{span:"16"}},[a("Content",[a("Carousel",{staticStyle:{"min-height":"180px"},attrs:{autoplay:t.carouselSetting.autoplay,"autoplay-speed":t.carouselSetting.autoplaySpeed,dots:t.carouselSetting.dots,"radius-dot":t.carouselSetting.radiusDot,trigger:t.carouselSetting.trigger,arrow:t.carouselSetting.arrow},model:{value:t.carouselValue,callback:function(e){t.carouselValue=e},expression:"carouselValue"}},t._l(t.carouseList,function(t,e){return a("CarouselItem",[""!=t.url?a("a",{attrs:{href:t.url}},[a("img",{style:{width:"100%"},attrs:{src:t.src,alt:t.alt}})]):a("img",{style:{width:"100%"},attrs:{src:t.src,alt:t.alt}})])}),1),a("Tabs",{attrs:{value:"news",type:"card"}},[a("TabPane",{attrs:{label:"公告",icon:"ios-menu",name:"news"}},t._l(t.newsList,function(e,o){return a("Card",{staticClass:"newsCard",attrs:{bordered:!1}},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))]),a("p",{attrs:{slot:"extra"},slot:"extra"},[a("Icon",{attrs:{type:"ios-person-add-outline"}}),t._v(t._s(e.creator))],1),a("MarkdownShow",{model:{value:e.content,callback:function(a){t.$set(e,"content",a)},expression:"news.content"}})],1)}),1),a("TabPane",{attrs:{label:"信息",icon:"md-bulb",name:"name2"}},[a("Card",{staticClass:"newsCard"},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("资料整合")]),a("div",{staticStyle:{padding:"15px"}},[a("ul",[a("li",[a("router-link",{attrs:{to:"/blog/1"}},[t._v("更新日志")])],1),a("li",[a("router-link",{attrs:{to:"/blog/2"}},[t._v("系统帮助 & FAQ")])],1)])])]),a("SwitchServer")],1)],1)],1)],1),a("Col",{attrs:{span:"8"}},[a("Sider",{attrs:{width:"100%","hide-trigger":""}},[a("div",{staticStyle:{"background-color":"#f8f8f9","padding-top":"20px"}},[a("Card",{staticStyle:{margin:"10px"}},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("\n\t\t\t\t\t\t一言 © Hitokoto\n\t\t\t\t\t")]),a("p",{attrs:{slot:"extra"},slot:"extra"},[""!=t.hitokotoCreator?a("Icon",{attrs:{type:"ios-person-add"}}):t._e(),t._v(t._s(t.hitokotoCreator)+"\n\t\t\t\t\t")],1),a("div",{staticStyle:{padding:"20px"}},[a("span",[t._v(t._s(t.hitokotoContent))]),a("p",{staticStyle:{"text-align":"right"}},[t._v(t._s(t.hitokotoFrom))]),t.spinHitokoto?a("Spin",{attrs:{fix:""}}):t._e()],1)]),a("Card",{staticStyle:{margin:"10px"}},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("\n\t\t\t\t\t\t每日签到\n\t\t\t\t\t")]),a("div",{staticClass:"flexDiv"},[a("div",[a("canvas",{staticStyle:{magin:"0 auto"},attrs:{id:"rili",width:"350px",height:"200px"}})])])]),a("i-circle",{staticStyle:{margin:"20px"},attrs:{percent:t.circlePercent,size:300}},[a("div",[a("div",{staticStyle:{"font-size":"32px"}},[t._v(t._s(t.circlePercent)+"%")]),a("div",{staticClass:"progressBox",staticStyle:{"font-size":"24px"}},[t._v("一日进度")]),a("div",{staticStyle:{"font-size":"20px"}},[t._v(t._s(this.$store.state.server_time))])])])],1)])],1)],1)],1)},r=[],s=a("59ad"),i=a.n(s),n=(a("a481"),a("6b54"),a("9d26")),c={name:"Home",components:{SwitchServer:n["a"]},data:function(){return{carouselValue:0,carouselSetting:{autoplay:!0,autoplaySpeed:5e3,dots:"inside",radiusDot:!1,trigger:"click",arrow:"hover"},carouseList:[],circlePercent:0,newsList:[],newsShow:[],hitokotoContent:"",hitokotoCreator:"",hitokotoFrom:"",spinHitokoto:!0}},methods:{drawRili:function(){var t=document.getElementById("rili"),e=t.getContext("2d");e.clearRect(0,0,350,350);var a,o=new Date,r=o.getYear(),s=o.getMonth(),i=o.getDate(),n=o.getDay(),c=25,l=[4,6,9,11],u=[1,3,5,7,8,10,12],p=["SUN","MON","TUE","WED","THU","FRI","SAT"],d=i%7;a=n>=d?n-d+1:n-d+8;var h=1,f=30;f=l.indexOf(s+1)>-1?30:u.indexOf(s+1)>-1?31:r%4==0&&r%100!=0||r%400==0?29:28;var v=6;function g(t,a){e.save(),e.beginPath(),e.strokeStyle="#900",e.arc(45+t*c*1.5+c/1.18,50+a*c+c/2,c/2-10,-Math.PI,1*Math.PI),e.stroke(),e.closePath(),e.beginPath(),e.arc(45+t*c*1.5+c/1.18,50+a*c+c/2,c/2-9,-Math.PI,.9*Math.PI),e.stroke(),e.closePath(),e.beginPath(),e.arc(45+t*c*1.5+c/1.18,50+a*c+c/2,c/2-8,-Math.PI,.8*Math.PI),e.stroke(),e.closePath(),e.beginPath(),e.arc(45+t*c*1.5+c/1.18,50+a*c+c/2,c/2-7,-Math.PI,.7*Math.PI),e.stroke(),e.closePath(),e.beginPath(),e.arc(45+t*c*1.5+c/1.18,50+a*c+c/2,c/2-6,-Math.PI,.6*Math.PI),e.stroke(),e.closePath(),e.restore()}7-a+28<f&&(v=7);var x=/^\d+(\d+)?$/;function S(t,a,o){e.textAlign="center",e.fillStyle="rgb(69,68,84)",x.test(t)?e.font=c/1.5+"px Arial":e.font=c/1.5+"px Impact";var r=3;0!=o&&6!=o||!x.test(t)||(e.fillStyle="#900"),e.fillText(t.toString(),45+o*c*1.5+c/1.18,50+a*c+c/3*2+r),t==i&&g(o,a)}e.fillStyle="rgb(69,68,84)",e.font="900 24pt SimHei",e.textAlign="center";var m=["一","二","三","四","五","六","七","八","九","十","十一","十二"];e.scale(1.1,1),e.fillText(m[s]+"月",125,30),e.resetTransform(),e.font="24pt SimHei",e.textAlign="end",e.fillText(i+"日",250,30);for(var _=0;_<v;_++)for(var b=0;b<7;b++)e.strokeRect(45+b*c*1.5,50+_*c,1.5*c,c);h=1;for(_=0;_<v;_++)for(b=0;b<7;b++)if(0!=_){if(!(1==_&&b<a)){if(h>f)break;S(h++,_,b)}}else S(p[b],_,b)}},mounted:function(){var t=this;axios.get(this.$store.state.API_ROOT+"home").then(function(e){t.carouseList=e.data.data.carouse,t.newsList=e.data.data.news}).catch(function(t){console.log(t)}),axios.get("https://v1.hitokoto.cn").then(function(e){t.hitokotoContent=e.data.hitokoto,t.hitokotoCreator=e.data.creator,t.hitokotoFrom="—— "+e.data.from,t.spinHitokoto=!1}).catch(function(t){console.log(t)}),setInterval(function(){var e=new Date(t.$store.state.server_time.replace(/-/g,"/")),a=e.getYear()+1900,o=e.getMonth()+1,r=e.getDate(),s=new Date(a+"/"+o+"/"+r+" 0:0:0");t.circlePercent=i()(((e.getTime()-s.getTime())/864e3).toFixed(3))},1e3),this.drawRili()}},l=c,u=(a("76e0"),a("2877")),p=Object(u["a"])(l,o,r,!1,null,"f76ea242",null);e["default"]=p.exports},e692:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-0820f7a5-legacy.56541159.js.map