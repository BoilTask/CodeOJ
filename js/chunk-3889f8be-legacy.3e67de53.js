(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3889f8be"],{"0603":function(t,n,e){},"386b":function(t,n,e){var i=e("5ca1"),a=e("79e5"),c=e("be13"),o=/"/g,r=function(t,n,e,i){var a=String(c(t)),r="<"+n;return""!==e&&(r+=" "+e+'="'+String(i).replace(o,"&quot;")+'"'),r+">"+a+"</"+n+">"};t.exports=function(t,n){var e={};e[t]=n(r),i(i.P+i.F*a(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",e)}},ac9f:function(t,n,e){"use strict";var i=e("0603"),a=e.n(i);a.a},b54a:function(t,n,e){"use strict";e("386b")("link",function(t){return function(n){return t(this,"a","href",n)}})},fe2f:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("Content",{staticStyle:{"text-align":"center",padding:"20px"}},[e("h2",{staticStyle:{margin:"10px"}},[t._v("近期比赛")]),e("Table",{attrs:{stripe:"",columns:t.contestColumns,data:t.contestData,loading:t.contestLoading}}),e("h3",{staticStyle:{margin:"10px"}},[t._v("数据来源："),e("a",{attrs:{href:"http://acmicpc.info/archives/224",target:"_blank"}},[t._v("http://contests.acmicpc.info/contests.json")])])],1)},a=[],c=(e("7f7f"),e("b54a"),{name:"ContestRecent",data:function(){return{contestLoading:!0,contestColumns:[{title:"#",align:"center",width:"100",render:function(t,n){return t("span",n.index+1)}},{title:"OJ",key:"oj",width:"100",align:"center"},{title:"名称",key:"name",render:function(t,n){return t("Button",{props:{type:"dashed"},on:{click:function(){window.open(n.row.link)}}},n.row.name)}},{title:"时间",key:"start_time",width:"180",align:"center"},{title:"星期",key:"week",width:"180",align:"center"},{title:"权限",key:"access",width:"180",align:"center"}],contestData:[]}},mounted:function(){var t=this;this.contestLoading=!0,axios.get(this.$store.state.API_ROOT+"contest/recent").then(function(n){t.contestData=n.data.data.contestList,t.contestLoading=!1}).catch(function(t){console.log(t)})}}),o=c,r=(e("ac9f"),e("2877")),s=Object(r["a"])(o,i,a,!1,null,"6a1eb1cc",null);n["default"]=s.exports}}]);
//# sourceMappingURL=chunk-3889f8be-legacy.3e67de53.js.map