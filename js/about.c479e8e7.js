(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0e7c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("Content"),a("Sider",{attrs:{"hide-trigger":""}})],1)},s=[],r={name:"Problemlist",data(){return{}},mounted(){axios.get("http://api.codeoj.cn/home").then(t=>{this.currentTime=t.data.time,this.carouseList=t.data.carouse,this.newsList=t.data.news,this.$Spin.hide()}).catch(function(t){console.log(t),this.$Spin.hide()})}},i=r,o=a("2877"),c=Object(o["a"])(i,n,s,!1,null,null,null);e["default"]=c.exports},bb51:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("Row",[a("Col",{attrs:{span:"16"}},[a("Content",[a("Carousel",{attrs:{autoplay:t.carouselSetting.autoplay,"autoplay-speed":t.carouselSetting.autoplaySpeed,dots:t.carouselSetting.dots,"radius-dot":t.carouselSetting.radiusDot,trigger:t.carouselSetting.trigger,arrow:t.carouselSetting.arrow},model:{value:t.carouselValue,callback:function(e){t.carouselValue=e},expression:"carouselValue"}},t._l(t.carouseList,function(t,e){return a("CarouselItem",[a("img",{style:{width:"100%"},attrs:{src:t.img,alt:e}})])}),1),a("i-circle",{attrs:{percent:t.circlePercent,size:300}},[a("div",[a("div",{staticStyle:{"font-size":"32px"}},[t._v(t._s(t.circlePercent)+"%")]),a("div",{staticClass:"progressBox",staticStyle:{"font-size":"24px"}},[t._v("一日进度")]),a("div",{staticStyle:{"font-size":"20px"}},[t._v(t._s(t.currentTime))])])])],1)],1),a("Col",{attrs:{span:"8"}},[a("Sider",{attrs:{width:"100%","hide-trigger":""}},[a("Collapse",{model:{value:t.newsShow,callback:function(e){t.newsShow=e},expression:"newsShow"}},t._l(t.newsList,function(e,n){return a("Panel",{ref:"newsPanel",refInFor:!0,attrs:{name:"news-"+n,"hide-arrow":""}},[t._v("\n\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t"),a("p",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(e.content))])])}),1)],1)],1)],1)],1)},s=[],r={name:"Home",data(){return{currentTime:this.getTime(),carouselValue:0,carouselSetting:{autoplay:!0,autoplaySpeed:2e3,dots:"inside",radiusDot:!1,trigger:"click",arrow:"hover"},carouseList:[],circlePercent:0,newsList:[],newsShow:[]}},methods:{getTime:function(){var t=new Date((new Date).getTime()+1e3),e=t.getYear()+1900,a=t.getMonth()+1,n=t.getDate(),s=t.getHours(),r=t.getMinutes(),i=t.getSeconds();return e+"-"+a+"-"+n+" "+(s>=10?s:"0"+s)+":"+(r>=10?r:"0"+r)+":"+(i>=10?i:"0"+i)}},mounted(){axios.get("http://api.codeoj.cn/home").then(t=>{this.currentTime=t.data.time,this.carouseList=t.data.carouse,this.newsList=t.data.news,this.$Spin.hide()}).catch(function(t){console.log(t),this.$Spin.hide()}),setInterval(()=>{var t=new Date(new Date(this.currentTime).getTime()+1e3),e=t.getYear()+1900,a=t.getMonth()+1,n=t.getDate(),s=t.getHours(),r=t.getMinutes(),i=t.getSeconds();this.currentTime=e+"-"+a+"-"+n+" "+(s>=10?s:"0"+s)+":"+(r>=10?r:"0"+r)+":"+(i>=10?i:"0"+i);e=t.getYear()+1900,a=t.getMonth()+1,n=t.getDate();var o=new Date(e+"-"+a+"-"+n+" 0:0:0");this.circlePercent=parseFloat(((t.getTime()-o.getTime())/864e3).toFixed(2))},1e3)}},i=r,o=(a("cccb"),a("2877")),c=Object(o["a"])(i,n,s,!1,null,null,null);e["default"]=c.exports},cccb:function(t,e,a){"use strict";var n=a("d563"),s=a.n(n);s.a},d563:function(t,e,a){}}]);
//# sourceMappingURL=about.c479e8e7.js.map