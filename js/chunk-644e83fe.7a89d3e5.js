(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-644e83fe"],{"01f9":function(t,e,n){"use strict";var o=n("2d00"),r=n("5ca1"),a=n("2aba"),i=n("32e9"),s=n("84f2"),l=n("41a0"),c=n("7f20"),u=n("38fd"),p=n("2b4c")("iterator"),f=!([].keys&&"next"in[].keys()),d="@@iterator",b="keys",m="values",h=function(){return this};t.exports=function(t,e,n,g,v,y,x){l(n,e,g);var k,S,w,L=function(t){if(!f&&t in C)return C[t];switch(t){case b:return function(){return new n(this,t)};case m:return function(){return new n(this,t)}}return function(){return new n(this,t)}},_=e+" Iterator",O=v==m,I=!1,C=t.prototype,T=C[p]||C[d]||v&&C[v],P=T||L(v),M=v?O?L("entries"):P:void 0,D="Array"==e&&C.entries||T;if(D&&(w=u(D.call(new t)),w!==Object.prototype&&w.next&&(c(w,_,!0),o||"function"==typeof w[p]||i(w,p,h))),O&&T&&T.name!==m&&(I=!0,P=function(){return T.call(this)}),o&&!x||!f&&!I&&C[p]||i(C,p,P),s[e]=P,s[_]=h,v)if(k={values:O?P:L(m),keys:y?P:L(b),entries:M},x)for(S in k)S in C||a(C,S,k[S]);else r(r.P+r.F*(f||I),e,k);return k}},"0d58":function(t,e,n){var o=n("ce10"),r=n("e11e");t.exports=Object.keys||function(t){return o(t,r)}},1495:function(t,e,n){var o=n("86cc"),r=n("cb7c"),a=n("0d58");t.exports=n("9e1e")?Object.defineProperties:function(t,e){r(t);var n,i=a(e),s=i.length,l=0;while(s>l)o.f(t,n=i[l++],e[n]);return t}},1926:function(t,e,n){},"2aeb":function(t,e,n){var o=n("cb7c"),r=n("1495"),a=n("e11e"),i=n("613b")("IE_PROTO"),s=function(){},l="prototype",c=function(){var t,e=n("230e")("iframe"),o=a.length,r="<",i=">";e.style.display="none",n("fab2").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(r+"script"+i+"document.F=Object"+r+"/script"+i),t.close(),c=t.F;while(o--)delete c[l][a[o]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(s[l]=o(t),n=new s,s[l]=null,n[i]=t):n=c(),void 0===e?n:r(n,e)}},"38fd":function(t,e,n){var o=n("69a8"),r=n("4bf8"),a=n("613b")("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},"41a0":function(t,e,n){"use strict";var o=n("2aeb"),r=n("4630"),a=n("7f20"),i={};n("32e9")(i,n("2b4c")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=o(i,{next:r(1,n)}),a(t,e+" Iterator")}},"613b":function(t,e,n){var o=n("5537")("keys"),r=n("ca5a");t.exports=function(t){return o[t]||(o[t]=r(t))}},"626a":function(t,e,n){var o=n("2d95");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},6821:function(t,e,n){var o=n("626a"),r=n("be13");t.exports=function(t){return o(r(t))}},"77f1":function(t,e,n){var o=n("4588"),r=Math.max,a=Math.min;t.exports=function(t,e){return t=o(t),t<0?r(t+e,0):a(t,e)}},"7f20":function(t,e,n){var o=n("86cc").f,r=n("69a8"),a=n("2b4c")("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,a)&&o(t,a,{configurable:!0,value:e})}},"84f2":function(t,e){t.exports={}},"94ed":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Row",[n("Col",{attrs:{span:"16"}},[n("Content",[n("MarkdownShow",{model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),n("MarkdownShow",{model:{value:t.hint,callback:function(e){t.hint=e},expression:"hint"}})],1)],1),n("Col",{attrs:{span:"8"}},[n("Sider",{attrs:{width:"100%","hide-trigger":""}},[n("div",{staticStyle:{"background-color":"#f8f8f9",padding:"10px"}},[n("Card",{staticClass:"ProblemCard"},[n("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.problemId)+t._s(t.problemTitle))]),n("p",{attrs:{slot:"extra"},slot:"extra"},[t.isEdit?n("Button",{attrs:{to:"/problem/"+this.$route.params.id+"/edit",type:"error"}},[t._v("编辑")]):t._e()],1),n("Table",{attrs:{columns:t.problemCol,data:t.problemData,"show-header":!1}})],1),n("Card",{staticClass:"ProblemCard",attrs:{"dis-hover":""}},[n("Row",{staticStyle:{margin:"10px","text-align":"center"}},[n("Col",{attrs:{span:"16"}},[n("Select",{model:{value:t.language,callback:function(e){t.language=e},expression:"language"}},[n("span",{attrs:{slot:"prefix"},slot:"prefix"},[t._v("语言：")]),t._l(t.languageList,function(e){return n("Option",{key:e.key,attrs:{value:e.key}},[t._v(t._s(e.name))])})],2)],1),n("Col",{attrs:{span:"8"}},[n("Button",{attrs:{type:"error",loading:t.btnLoading},on:{click:t.submitCode}},[t._v("提交")])],1)],1),n("mavon-editor",{staticClass:"codeEdit",attrs:{boxShadow:!1,subfield:!1,shortCut:!1,toolbars:t.problemToolbars,defaultOpen:"edit",ishljs:!0,placeholder:"将代码复制到此处……"},on:{save:t.submitCode},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1)],1)])],1)],1)},r=[],a=(n("ac6a"),{name:"Problem",data(){return{problemId:"",problemTitle:"",description:"",hint:"",time_limit:"",memory_limit:"",accept:0,attempt:0,isEdit:!1,problemCol:[{key:"name"},{key:"info",render:(t,e)=>{if(Array.isArray(e.row.info)){if(e.row.info.length){let n=Array();return e.row.info.forEach((e,o)=>{n.push(t("Button",{props:{type:1&o?"info":"success",size:"small",to:"/problem?tags="+e.name},style:"margin:1px"},e.name))}),t("div",n)}return t("span","无")}return t("span",e.row.info)}}],problemData:[],language:0,languageList:[{key:0,name:"C"},{key:1,name:"C++"},{key:3,name:"Java"},{key:6,name:"Python"}],problemToolbars:{bold:!1,italic:!1,header:!1,underline:!1,strikethrough:!1,mark:!1,superscript:!1,subscript:!1,quote:!1,ol:!1,ul:!1,link:!1,imagelink:!1,code:!1,table:!1,fullscreen:!0,readmodel:!0,htmlcode:!1,help:!1,undo:!0,redo:!0,trash:!0,save:!0,navigation:!1,alignleft:!1,aligncenter:!1,alignright:!1,subfield:!1,preview:!1},btnLoading:!1,code:""}},mounted(){let t=["标准判题","特殊评判","文本比较"];axios.get(this.$store.state.API_ROOT+"problem/"+this.$route.params.id).then(e=>{this.problemId=e.data.data.problemInfo.problem_id,this.problemTitle=" - "+e.data.data.problemInfo.title,document.title=this.problemId+this.problemTitle+" - CodeOJ",this.description=e.data.data.problemInfo.description,this.hint=e.data.data.problemInfo.hint,e.data.data.problemInfo.problemData[1].info=e.data.data.problemInfo.problemData[1].info+" MS",e.data.data.problemInfo.problemData[2].info=e.data.data.problemInfo.problemData[2].info+" MB",e.data.data.problemInfo.problemData[3].info=t[e.data.data.problemInfo.problemData[3].info],e.data.data.problemInfo.problemData[6].info=0==e.data.data.problemInfo.problemData[6].info?"公开":"私有",this.problemData=e.data.data.problemInfo.problemData,this.isEdit=this.problemData[9].info===this.$store.state.loginInfo.user_id}).catch(function(t){console.log(t)})},methods:{submitCode(){if(""==this.code)this.$Message.error("请填写代码！");else{this.$Spin.show();var t=new URLSearchParams;t.append("user_id",this.$store.state.loginInfo.user_id),t.append("token",this.$store.state.loginInfo.token),t.append("problem_id",this.problemId),t.append("language",this.language),t.append("code",this.code),this.btnLoading=!0,axios.post(this.$store.state.API_ROOT+"problem/submit",t).then(t=>{t.data.data.is_ok?(this.$Message.success("提交成功！"),this.$router.push("/status/"+t.data.data.status_id)):this.$Message.error("提交失败！"),this.btnLoading=!1,this.$Spin.hide()}).catch(function(t){console.log(t)})}}}}),i=a,s=(n("f3da"),n("2877")),l=Object(s["a"])(i,o,r,!1,null,"94893b4e",null);e["default"]=l.exports},"9c6c":function(t,e,n){var o=n("2b4c")("unscopables"),r=Array.prototype;void 0==r[o]&&n("32e9")(r,o,{}),t.exports=function(t){r[o][t]=!0}},ac6a:function(t,e,n){for(var o=n("cadf"),r=n("0d58"),a=n("2aba"),i=n("7726"),s=n("32e9"),l=n("84f2"),c=n("2b4c"),u=c("iterator"),p=c("toStringTag"),f=l.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},b=r(d),m=0;m<b.length;m++){var h,g=b[m],v=d[g],y=i[g],x=y&&y.prototype;if(x&&(x[u]||s(x,u,f),x[p]||s(x,p,g),l[g]=f,v))for(h in o)x[h]||a(x,h,o[h],!0)}},c366:function(t,e,n){var o=n("6821"),r=n("9def"),a=n("77f1");t.exports=function(t){return function(e,n,i){var s,l=o(e),c=r(l.length),u=a(i,c);if(t&&n!=n){while(c>u)if(s=l[u++],s!=s)return!0}else for(;c>u;u++)if((t||u in l)&&l[u]===n)return t||u||0;return!t&&-1}}},cadf:function(t,e,n){"use strict";var o=n("9c6c"),r=n("d53b"),a=n("84f2"),i=n("6821");t.exports=n("01f9")(Array,"Array",function(t,e){this._t=i(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):r(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),a.Arguments=a.Array,o("keys"),o("values"),o("entries")},ce10:function(t,e,n){var o=n("69a8"),r=n("6821"),a=n("c366")(!1),i=n("613b")("IE_PROTO");t.exports=function(t,e){var n,s=r(t),l=0,c=[];for(n in s)n!=i&&o(s,n)&&c.push(n);while(e.length>l)o(s,n=e[l++])&&(~a(c,n)||c.push(n));return c}},d53b:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},e11e:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},f3da:function(t,e,n){"use strict";var o=n("1926"),r=n.n(o);r.a},fab2:function(t,e,n){var o=n("7726").document;t.exports=o&&o.documentElement}}]);
//# sourceMappingURL=chunk-644e83fe.7a89d3e5.js.map