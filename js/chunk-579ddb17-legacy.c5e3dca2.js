(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-579ddb17"],{"020e":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("Row",[a("Col",{attrs:{span:"16"}},[a("Content",{staticClass:"discussContent"},[a("MarkdownShow",{staticClass:"discussShow",model:{value:t.content,callback:function(s){t.content=s},expression:"content"}})],1),t._l(t.replyList,function(s){return a("Card",{staticClass:"replyCard"},[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-person"}}),a("router-link",{attrs:{to:"/user/"+s.creator}},[t._v(t._s(s.creator))])],1),s.creator==t.$store.state.loginInfo.user_id?a("p",{attrs:{slot:"extra"},slot:"extra"},[a("Icon",{attrs:{type:"md-git-pull-request"}}),a("router-link",{attrs:{to:"/discuss/"+t.$route.params.id+"/reply/"+s.reply_id+"/edit"}},[t._v(t._s(s.update_time))])],1):a("p",{attrs:{slot:"extra"},slot:"extra"},[a("Icon",{attrs:{type:"md-git-pull-request"}}),t._v(t._s(s.update_time)+"\n\t\t")],1),a("MarkdownShow",{model:{value:s.content,callback:function(a){t.$set(s,"content",a)},expression:"reply.content"}})],1)})],2),a("Col",{attrs:{span:"8"}},[a("Sider",{attrs:{width:"100%","hide-trigger":""}},[a("div",{staticStyle:{"background-color":"#f8f8f9",padding:"10px"}},[a("Card",{staticClass:"UserCard"},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("楼主信息")]),a("p",{attrs:{slot:"extra"},slot:"extra"},[a("Button",{attrs:{to:"/user/"+t.creator}},[a("Icon",{attrs:{type:"ios-person"}}),t._v(t._s(t.creator))],1)],1),""!=t.creatorImg?a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:t.creatorImg}})]):t._e(),a("Table",{attrs:{columns:t.tableCol,data:t.userData,"show-header":!1}})],1),a("Card",{staticClass:"DiscussCard"},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("主题信息")]),a("p",{attrs:{slot:"extra"},slot:"extra"},[t.isEdit?a("Button",{attrs:{to:"/discuss/"+this.$route.params.id+"/edit",type:"error"}},[t._v("编辑")]):t._e()],1),a("Table",{attrs:{columns:t.tableCol,data:t.discussData,"show-header":!1}}),a("p",{staticStyle:{"text-align":"right","margin-top":"10px"}},[a("ButtonGroup",[a("Button",{attrs:{to:"/discuss/"+this.$route.params.id+"/reply/add",type:"success"}},[t._v("回复主题")])],1)],1)],1)],1)])],1)],1)},r=[],o=(a("6b54"),a("7f7f"),{name:"Discuss",data:function(){return{isEdit:!1,content:"",creator:"",creatorImg:"",tableCol:[{key:"name"},{key:"info",render:function(t,s){return"关键词"==s.row.name?t("Button",{props:{type:"info",size:"small",to:"/discuss?keyword="+s.row.info},style:"margin:0 1px"},s.row.info):t("span",s.row.info)}}],userData:[],discussData:[],replyList:[]}},mounted:function(){var t=this,s=new URLSearchParams;this.$store.state.loginInfo.isLogin&&(s.append("user_id",this.$store.state.loginInfo.user_id),s.append("token",this.$store.state.loginInfo.token)),axios.get(this.$store.state.API_ROOT+"discuss/"+this.$route.params.id+"?"+s.toString()).then(function(s){document.title=s.data.data.discuss.title+" - CodeOJ",t.content="# "+s.data.data.discuss.title+"\n"+s.data.data.discuss.content,t.creator=s.data.data.discuss.creator,t.userData=s.data.data.creator,t.creatorImg=s.data.data.creatorImg,t.discussData=s.data.data.discussData,t.replyList=s.data.data.replyList,t.creator===t.$store.state.loginInfo.user_id&&(t.isEdit=!0)}).catch(function(t){console.log(t)})}}),n=o,i=(a("5b14"),a("2877")),c=Object(i["a"])(n,e,r,!1,null,"aa689964",null);s["default"]=c.exports},"5b14":function(t,s,a){"use strict";var e=a("f9df"),r=a.n(e);r.a},f9df:function(t,s,a){}}]);
//# sourceMappingURL=chunk-579ddb17-legacy.c5e3dca2.js.map