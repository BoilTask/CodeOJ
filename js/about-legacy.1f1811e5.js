(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0a90":function(t,e,n){var r=n("63b6"),a=n("10ff");r(r.G+r.F*(parseFloat!=a),{parseFloat:a})},"0e7c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("Content"),n("Sider",{attrs:{"hide-trigger":""}})],1)},a=[],o={name:"Problemlist",data:function(){return{}},mounted:function(){var t=this;axios.get("http://api.codeoj.cn/home").then(function(e){t.currentTime=e.data.time,t.carouseList=e.data.carouse,t.newsList=e.data.news,t.$Spin.hide()}).catch(function(t){console.log(t),this.$Spin.hide()})}},i=o,s=n("2877"),c=Object(s["a"])(i,r,a,!1,null,null,null);e["default"]=c.exports},"10ff":function(t,e,n){var r=n("e53d").parseFloat,a=n("a1ce").trim;t.exports=1/r(n("e692")+"-0")!==-1/0?function(t){var e=a(String(t),3),n=r(e);return 0===n&&"-"==e.charAt(0)?-0:n}:r},"59ad":function(t,e,n){t.exports=n("7be7")},"7be7":function(t,e,n){n("0a90"),t.exports=n("584a").parseFloat},a1ce:function(t,e,n){var r=n("63b6"),a=n("25eb"),o=n("294c"),i=n("e692"),s="["+i+"]",c="​",u=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),d=function(t,e,n){var a={},s=o(function(){return!!i[t]()||c[t]()!=c}),u=a[t]=s?e(g):i[t];n&&(a[n]=u),r(r.P+r.F*s,"String",a)},g=d.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=d},bb51:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("Row",[n("Col",{attrs:{span:"16"}},[n("Content",[n("Carousel",{attrs:{autoplay:t.carouselSetting.autoplay,"autoplay-speed":t.carouselSetting.autoplaySpeed,dots:t.carouselSetting.dots,"radius-dot":t.carouselSetting.radiusDot,trigger:t.carouselSetting.trigger,arrow:t.carouselSetting.arrow},model:{value:t.carouselValue,callback:function(e){t.carouselValue=e},expression:"carouselValue"}},t._l(t.carouseList,function(t,e){return n("CarouselItem",[n("img",{style:{width:"100%"},attrs:{src:t.img,alt:e}})])}),1),n("i-circle",{attrs:{percent:t.circlePercent,size:300}},[n("div",[n("div",{staticStyle:{"font-size":"32px"}},[t._v(t._s(t.circlePercent)+"%")]),n("div",{staticClass:"progressBox",staticStyle:{"font-size":"24px"}},[t._v("一日进度")]),n("div",{staticStyle:{"font-size":"20px"}},[t._v(t._s(t.currentTime))])])])],1)],1),n("Col",{attrs:{span:"8"}},[n("Sider",{attrs:{width:"100%","hide-trigger":""}},[n("Collapse",{model:{value:t.newsShow,callback:function(e){t.newsShow=e},expression:"newsShow"}},t._l(t.newsList,function(e,r){return n("Panel",{ref:"newsPanel",refInFor:!0,attrs:{name:"news-"+r,"hide-arrow":""}},[t._v("\n\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t"),n("p",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(e.content))])])}),1)],1)],1)],1)],1)},a=[],o=n("59ad"),i=n.n(o),s={name:"Home",data:function(){return{currentTime:this.getTime(),carouselValue:0,carouselSetting:{autoplay:!0,autoplaySpeed:2e3,dots:"inside",radiusDot:!1,trigger:"click",arrow:"hover"},carouseList:[],circlePercent:0,newsList:[],newsShow:[]}},methods:{getTime:function(){var t=new Date((new Date).getTime()+1e3),e=t.getYear()+1900,n=t.getMonth()+1,r=t.getDate(),a=t.getHours(),o=t.getMinutes(),i=t.getSeconds();return e+"-"+n+"-"+r+" "+(a>=10?a:"0"+a)+":"+(o>=10?o:"0"+o)+":"+(i>=10?i:"0"+i)}},mounted:function(){var t=this;axios.get("http://api.codeoj.cn/home").then(function(e){t.currentTime=e.data.time,t.carouseList=e.data.carouse,t.newsList=e.data.news,t.$Spin.hide()}).catch(function(t){console.log(t),this.$Spin.hide()}),setInterval(function(){var e=new Date(new Date(t.currentTime).getTime()+1e3),n=e.getYear()+1900,r=e.getMonth()+1,a=e.getDate(),o=e.getHours(),s=e.getMinutes(),c=e.getSeconds();t.currentTime=n+"-"+r+"-"+a+" "+(o>=10?o:"0"+o)+":"+(s>=10?s:"0"+s)+":"+(c>=10?c:"0"+c);n=e.getYear()+1900,r=e.getMonth()+1,a=e.getDate();var u=new Date(n+"-"+r+"-"+a+" 0:0:0");t.circlePercent=i()(((e.getTime()-u.getTime())/864e3).toFixed(2))},1e3)}},c=s,u=(n("cccb"),n("2877")),l=Object(u["a"])(c,r,a,!1,null,null,null);e["default"]=l.exports},cccb:function(t,e,n){"use strict";var r=n("d563"),a=n.n(r);a.a},d563:function(t,e,n){},e692:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=about-legacy.1f1811e5.js.map