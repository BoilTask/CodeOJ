(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ca03e6c"],{"3f67":function(t,e,a){},5002:function(t,e,a){"use strict";var o=a("3f67"),s=a.n(o);s.a},"51e2":function(t,e,a){"use strict";var o=a("f369"),s=a.n(o);s.a},"9d26":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Card",{staticClass:"newsCard"},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("端口设置")]),a("div",{staticStyle:{padding:"15px"}},[a("p",[a("Select",{staticStyle:{width:"250px"},model:{value:t.serverAPIROOT,callback:function(e){t.serverAPIROOT=e},expression:"serverAPIROOT"}},[a("span",{attrs:{slot:"prefix"},slot:"prefix"},[t._v("后台地址：")]),a("Option",{attrs:{value:"https://api.codeoj.cn/"}},[t._v("https://api.codeoj.cn/")]),a("Option",{attrs:{value:"http://apidev.codeoj.cn/"}},[t._v("http://apidev.codeoj.cn/")]),a("Option",{attrs:{value:"http://local.codeoj.cn/"}},[t._v("http://local.codeoj.cn/")])],1)],1),a("p",[a("ul",{staticClass:"list"},[a("li",[t._v("主域名："),a("Button",[a("a",{attrs:{href:"https://codeoj.cn"}},[t._v("https://codeoj.cn")])])],1),a("li",[t._v("coding.net代理："),a("Button",[a("a",{attrs:{href:"http://coding.codeoj.cn"}},[t._v("http://coding.codeoj.cn")])])],1),a("li",[t._v("github.com代理："),a("Button",[a("a",{attrs:{href:"http://github.codeoj.cn"}},[t._v("http://github.codeoj.cn")])])],1),a("li",[t._v("开发环境："),a("Button",[a("a",{attrs:{href:"http://localhost:8080"}},[t._v("http://localhost:8080")])])],1)])])])])},s=[],r={name:"SwitchServer",computed:{serverAPIROOT:{get:function(){return this.$store.state.API_ROOT},set:function(t){this.$store.commit("changeAPIROOT",t),this.$Message.success("修改后台端口成功!")}}}},i=r,n=(a("5002"),a("2877")),l=Object(n["a"])(i,o,s,!1,null,null,null);e["a"]=l.exports},bb51:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("Row",[a("Col",{attrs:{span:"16"}},[a("Content",[a("Carousel",{staticStyle:{"min-height":"180px"},attrs:{autoplay:t.carouselSetting.autoplay,"autoplay-speed":t.carouselSetting.autoplaySpeed,dots:t.carouselSetting.dots,"radius-dot":t.carouselSetting.radiusDot,trigger:t.carouselSetting.trigger,arrow:t.carouselSetting.arrow},model:{value:t.carouselValue,callback:function(e){t.carouselValue=e},expression:"carouselValue"}},t._l(t.carouseList,function(t,e){return a("CarouselItem",[""!=t.url?a("a",{attrs:{href:t.url}},[a("img",{style:{width:"100%"},attrs:{src:t.src,alt:t.alt}})]):a("img",{style:{width:"100%"},attrs:{src:t.src,alt:t.alt}})])}),1),a("Tabs",{attrs:{value:"news",type:"card"}},[a("TabPane",{attrs:{label:"公告",icon:"ios-menu",name:"news"}},t._l(t.newsList,function(e,o){return a("Card",{staticClass:"newsCard",attrs:{bordered:!1}},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))]),a("p",{attrs:{slot:"extra"},slot:"extra"},[a("Icon",{attrs:{type:"ios-person-add-outline"}}),t._v(t._s(e.creator))],1),a("MarkdownShow",{model:{value:e.content,callback:function(a){t.$set(e,"content",a)},expression:"news.content"}})],1)}),1),a("TabPane",{attrs:{label:"信息",icon:"md-bulb",name:"name2"}},[a("Card",{staticClass:"newsCard"},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("资料整合")]),a("div",{staticStyle:{padding:"15px"}},[a("ul",[a("li",[a("router-link",{attrs:{to:"/blog/1"}},[t._v("更新日志")])],1),a("li",[a("router-link",{attrs:{to:"/blog/2"}},[t._v("系统帮助 & FAQ")])],1)])])]),a("SwitchServer")],1)],1)],1)],1),a("Col",{attrs:{span:"8"}},[a("Sider",{attrs:{width:"100%","hide-trigger":""}},[a("div",{staticStyle:{"background-color":"#f8f8f9","padding-top":"20px"}},[a("Card",{staticStyle:{margin:"10px"}},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("\n\t\t\t\t\t\t一言 © Hitokoto\n\t\t\t\t\t")]),a("p",{attrs:{slot:"extra"},slot:"extra"},[""!=t.hitokotoCreator?a("Icon",{attrs:{type:"ios-person-add"}}):t._e(),t._v(t._s(t.hitokotoCreator)+"\n\t\t\t\t\t")],1),a("div",{staticStyle:{padding:"20px"}},[a("span",[t._v(t._s(t.hitokotoContent))]),a("p",{staticStyle:{"text-align":"right"}},[t._v(t._s(t.hitokotoFrom))]),t.spinHitokoto?a("Spin",{attrs:{fix:""}}):t._e()],1)]),a("Card",{staticStyle:{margin:"10px"}},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("\n\t\t\t\t\t\t每日签到\n\t\t\t\t\t")]),a("a",{staticStyle:{color:"#ed4014"},attrs:{slot:"extra"},on:{click:function(e){return e.preventDefault(),t.changeLimit(e)}},slot:"extra"},[a("Icon",{attrs:{type:"ios-bowtie"}}),t._v("\n\t\t\t\t\t\t签到\n\t\t\t\t\t")],1),a("div",{staticClass:"flexDiv"},[a("div",[a("canvas",{staticStyle:{magin:"0 auto"},attrs:{id:"rili",width:"350px",height:"200px"}})])])]),a("i-circle",{staticStyle:{margin:"20px"},attrs:{percent:t.circlePercent,size:300}},[a("div",[a("div",{staticStyle:{"font-size":"32px"}},[t._v(t._s(t.circlePercent)+"%")]),a("div",{staticClass:"progressBox",staticStyle:{"font-size":"24px"}},[t._v("一日进度")]),a("div",{staticStyle:{"font-size":"20px"}},[t._v(t._s(this.$store.state.server_time))])])])],1)])],1)],1)],1)},s=[],r=(a("a481"),a("6b54"),a("9d26")),i={name:"Home",components:{SwitchServer:r["a"]},data(){return{carouselValue:0,carouselSetting:{autoplay:!0,autoplaySpeed:5e3,dots:"inside",radiusDot:!1,trigger:"click",arrow:"hover"},carouseList:[],circlePercent:0,newsList:[],newsShow:[],hitokotoContent:"",hitokotoCreator:"",hitokotoFrom:"",spinHitokoto:!0}},methods:{drawRili:function(){var t=document.getElementById("rili"),e=t.getContext("2d");e.clearRect(0,0,350,350);var a,o=new Date,s=o.getYear(),r=o.getMonth(),i=o.getDate(),n=o.getDay(),l=25,c=[4,6,9,11],d=[1,3,5,7,8,10,12],h=["SUN","MON","TUE","WED","THU","FRI","SAT"],u=i%7;a=n>=u?n-u+1:n-u+8;var p=1,v=30;v=c.indexOf(r+1)>-1?30:d.indexOf(r+1)>-1?31:s%4==0&&s%100!=0||s%400==0?29:28;var g=6;function f(t,a){e.save(),e.beginPath(),e.strokeStyle="#900",e.arc(45+t*l*1.5+l/1.18,50+a*l+l/2,l/2-10,-Math.PI,1*Math.PI),e.stroke(),e.closePath(),e.beginPath(),e.arc(45+t*l*1.5+l/1.18,50+a*l+l/2,l/2-9,-Math.PI,.9*Math.PI),e.stroke(),e.closePath(),e.beginPath(),e.arc(45+t*l*1.5+l/1.18,50+a*l+l/2,l/2-8,-Math.PI,.8*Math.PI),e.stroke(),e.closePath(),e.beginPath(),e.arc(45+t*l*1.5+l/1.18,50+a*l+l/2,l/2-7,-Math.PI,.7*Math.PI),e.stroke(),e.closePath(),e.beginPath(),e.arc(45+t*l*1.5+l/1.18,50+a*l+l/2,l/2-6,-Math.PI,.6*Math.PI),e.stroke(),e.closePath(),e.restore()}7-a+28<v&&(g=7);var _=/^\d+(\d+)?$/;function x(t,a,o){e.textAlign="center",e.fillStyle="rgb(69,68,84)",_.test(t)?e.font=l/1.5+"px Arial":e.font=l/1.5+"px Impact";var s=3;0!=o&&6!=o||!_.test(t)||(e.fillStyle="#900"),e.fillText(t.toString(),45+o*l*1.5+l/1.18,50+a*l+l/3*2+s),t==i&&f(o,a)}e.fillStyle="rgb(69,68,84)",e.font="900 24pt SimHei",e.textAlign="center";var m=["一","二","三","四","五","六","七","八","九","十","十一","十二"];e.scale(1.1,1),e.fillText(m[r]+"月",125,30),e.resetTransform(),e.font="24pt SimHei",e.textAlign="end",e.fillText(i+"日",250,30);for(var S=0;S<g;S++)for(var w=0;w<7;w++)e.strokeRect(45+w*l*1.5,50+S*l,1.5*l,l);p=1;for(S=0;S<g;S++)for(w=0;w<7;w++)if(0!=S){if(!(1==S&&w<a)){if(p>v)break;x(p++,S,w)}}else x(h[w],S,w)}},mounted(){axios.get(this.$store.state.API_ROOT+"home").then(t=>{this.carouseList=t.data.data.carouse,this.newsList=t.data.data.news}).catch(function(t){console.log(t)}),axios.get("https://v1.hitokoto.cn").then(t=>{this.hitokotoContent=t.data.hitokoto,this.hitokotoCreator=t.data.creator,this.hitokotoFrom="—— "+t.data.from,this.spinHitokoto=!1}).catch(function(t){console.log(t)}),setInterval(()=>{var t=new Date(this.$store.state.server_time.replace(/-/g,"/")),e=t.getYear()+1900,a=t.getMonth()+1,o=t.getDate(),s=new Date(e+"/"+a+"/"+o+" 0:0:0");this.circlePercent=parseFloat(((t.getTime()-s.getTime())/864e3).toFixed(3))},1e3),this.drawRili()}},n=i,l=(a("51e2"),a("2877")),c=Object(l["a"])(n,o,s,!1,null,"6c5a6170",null);e["default"]=c.exports},f369:function(t,e,a){}}]);
//# sourceMappingURL=chunk-1ca03e6c.900ac779.js.map