(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34292cc0"],{"5d6b":function(t,e,r){var o=r("e53d").parseInt,a=r("a1ce").trim,n=r("e692"),i=/^[-+]?0[xX]/;t.exports=8!==o(n+"08")||22!==o(n+"0x16")?function(t,e){var r=a(String(t),3);return o(r,e>>>0||(i.test(r)?16:10))}:o},"6a99e":function(t,e,r){},7445:function(t,e,r){var o=r("63b6"),a=r("5d6b");o(o.G+o.F*(parseInt!=a),{parseInt:a})},"7a38":function(t,e,r){"use strict";var o=r("6a99e"),a=r.n(o);a.a},a1ce:function(t,e,r){var o=r("63b6"),a=r("25eb"),n=r("294c"),i=r("e692"),s="["+i+"]",l="​",p=RegExp("^"+s+s+"*"),d=RegExp(s+s+"*$"),c=function(t,e,r){var a={},s=n(function(){return!!i[t]()||l[t]()!=l}),p=a[t]=s?e(u):i[t];r&&(a[r]=p),o(o.P+o.F*s,"String",a)},u=c.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(p,"")),2&e&&(t=t.replace(d,"")),t};t.exports=c},a21f:function(t,e,r){var o=r("584a"),a=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},ac6a:function(t,e,r){for(var o=r("cadf"),a=r("0d58"),n=r("2aba"),i=r("7726"),s=r("32e9"),l=r("84f2"),p=r("2b4c"),d=p("iterator"),c=p("toStringTag"),u=l.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=a(f),g=0;g<m.length;g++){var b,h=m[g],L=f[h],S=i[h],_=S&&S.prototype;if(_&&(_[d]||s(_,d,u),_[c]||s(_,c,h),l[h]=u,L))for(b in o)_[b]||n(_,b,o[b],!0)}},b9e9:function(t,e,r){r("7445"),t.exports=r("584a").parseInt},e692:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e814:function(t,e,r){t.exports=r("b9e9")},f499:function(t,e,r){t.exports=r("a21f")},f59d:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("Row",[r("Col",{attrs:{span:"16"}},[r("Card",[t._v("\n\t\t\t根据本题目数据，推荐您完成以下题目：\n\t\t")]),r("Content",{staticStyle:{"text-align":"center"}},[r("Table",{attrs:{stripe:"",columns:t.problemColumns,data:t.problemData,loading:t.problemLoading}})],1)],1),r("Col",{attrs:{span:"8"}},[r("Sider",{attrs:{"hide-trigger":"",width:"100%"}},[r("div",{staticStyle:{"background-color":"#f8f8f9",padding:"20px"}},[r("Card",{staticClass:"siderCard"},[r("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.problemId)+t._s(t.problemTitle))]),r("p",{attrs:{slot:"extra"},slot:"extra"},[r("Button",{attrs:{to:"/problem/"+this.$route.params.id,type:"error"}},[t._v("返回")])],1),r("p",[t._v("\n\t\t\t\t\t\t题目推荐算法：\n\t\t\t\t\t")]),r("p",{staticStyle:{"text-indent":"2em"}},[t._v("\n\t\t\t\t\t\t本页面为根据题目来推荐类似题目，依据为AC本题用户大概率AC某一题，根据AC某题的人数排序，得出推荐题目。\n\t\t\t\t\t")])]),t.tagData.length>0?r("Card",{staticClass:"siderCard",staticStyle:{"background-color":"#212121"}},t._l(t.tagData,function(e){return r("Button",{staticStyle:{margin:"2px"},attrs:{ghost:"",to:"/problem?tags="+e.name}},[t._v(t._s(e.name))])}),1):t._e()],1)])],1)],1)],1)},a=[],n=r("e814"),i=r.n(n),s=r("f499"),l=r.n(s),p=(r("6b54"),r("7f7f"),r("ac6a"),{name:"ProblemRecommend",data:function(){return{problemId:"",problemTitle:"",problemLoading:!0,tagData:[],problemColumns:[{title:"#",key:"problem_id",width:80,render:function(t,e){return t("Button",{props:{type:"dashed",size:"small",to:"/problem/"+e.row.problem_id}},e.row.problem_id)}},{title:"标题",key:"title",render:function(t,e){return t("Button",{props:{type:"dashed",to:"/problem/"+e.row.problem_id}},e.row.title)}},{title:"标签",key:"tag",render:function(t,e){var r=Array();return e.row.tag.forEach(function(e,o){r.push(t("Button",{props:{type:1&o?"info":"success",size:"small",to:"/problem?tags="+e.name},style:"margin:0 1px"},e.name))}),t("div",r)}},{title:"正确",key:"accept",sortable:!0,width:80},{title:"提交",key:"attempt",sortable:!0,width:80}],problemData:[]}},mounted:function(){this.getProblemList()},methods:{getProblemList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(this.problemPage=1),this.problemLoading=!0;var r=new URLSearchParams;this.$store.state.loginInfo.user_id&&this.$store.state.loginInfo.user_id.length>=3&&this.$store.state.loginInfo.user_id.length<=20&&r.append("user_id",this.$store.state.loginInfo.user_id),this.$store.state.loginInfo.token&&""!=this.$store.state.loginInfo.token&&r.append("token",this.$store.state.loginInfo.token),axios.get(this.$store.state.API_ROOT+"problem/"+this.$route.params.id+"/recommend?"+r.toString()).then(function(e){if(t.problemId=e.data.data.problem_id,t.problemTitle=" - "+e.data.data.title,t.problemData=e.data.data.problemList,t.tagData=e.data.data.tags,t.problemLoading=!1,t.$store.state.loginInfo.user_id&&t.$store.state.loginInfo.user_id.length>=3&&t.$store.state.loginInfo.user_id.length<=20){for(var r=new URLSearchParams,o=Array(),a=0;a<t.problemData.length;a++)o.push(t.problemData[a]["problem_id"]);r.append("user_id",t.$store.state.loginInfo.user_id),t.$store.state.loginInfo.token&&""!=t.$store.state.loginInfo.token&&r.append("token",t.$store.state.loginInfo.token),r.append("problemList",l()(o)),axios.get(t.$store.state.API_ROOT+"status/check?"+r.toString()).then(function(e){if(e.data.data.is_ok)for(var r=e.data.data.resultList,o=t.problemData,a=0;a<o.length;a++)r[o[a]["problem_id"]]&&t.$set(t.problemData[a],"result",i()(r[o[a]["problem_id"]]))}).catch(function(t){console.log(t)})}}).catch(function(t){console.log(t)})}}}),d=p,c=(r("7a38"),r("2877")),u=Object(c["a"])(d,o,a,!1,null,"0b540c52",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-34292cc0-legacy.81b922aa.js.map