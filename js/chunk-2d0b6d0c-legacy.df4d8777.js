(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6d0c"],{"1f89":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Content",[a("Row",[a("Col",{attrs:{span:"16"}},[a("Content",{staticStyle:{padding:"5px"}},[a("Card",[a("Form",{ref:"formValidate",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":80}},[a("FormItem",{attrs:{label:"标题",prop:"title"}},[a("Input",{attrs:{placeholder:"title"},model:{value:t.formValidate.title,callback:function(e){t.$set(t.formValidate,"title",e)},expression:"formValidate.title"}})],1),a("FormItem",{attrs:{label:"主题",prop:"keyword"}},[a("Input",{attrs:{placeholder:"keyword"},model:{value:t.formValidate.keyword,callback:function(e){t.$set(t.formValidate,"keyword",e)},expression:"formValidate.keyword"}}),a("p",[a("Icon",{attrs:{type:"ios-information-circle-outline"}}),t._v("可使用指定格式关键词关联页面\n\t\t\t\t\t\t")],1)],1)],1)],1)],1)],1),a("Col",{attrs:{span:"8"}},[a("Sider",{attrs:{width:"100%","hide-trigger":""}},[a("div",{staticStyle:{"background-color":"#f8f8f9",padding:"5px"}},[a("Card",{staticClass:"DiscussCard"},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("编辑讨论")]),a("p",{attrs:{slot:"extra"},slot:"extra"},[a("Button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:function(e){return t.handleSubmit("formValidate")}}},[t._v("提交")]),a("Button",{attrs:{type:"error",to:"/discuss/"+this.$route.params.id}},[t._v("查看")])],1),a("Table",{attrs:{columns:t.tableCol,data:t.discussData,"show-header":!1}})],1)],1)])],1)],1),a("Card",[a("mavon-editor",{ref:"editor",staticStyle:{"min-height":"600px"},on:{imgAdd:t.$imgAdd,save:t.saveContent},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1)},o=[],n=(a("7f7f"),a("6b54"),{name:"DiscussEdit",data:function(){return{btnLoading:!0,formValidate:{title:"",keyword:""},ruleValidate:{title:[{required:!0,message:"标题不能为空！",trigger:"blur"}],keyword:[{required:!0,message:"主题不能为空！",trigger:"blur"}]},content:"",tableCol:[{key:"name"},{key:"info"}],discussData:[],uploadToken:""}},mounted:function(){var t=this,e=new URLSearchParams;this.$store.state.loginInfo.isLogin&&(e.append("user_id",this.$store.state.loginInfo.user_id),e.append("token",this.$store.state.loginInfo.token)),axios.get(this.$store.state.API_ROOT+"discuss/"+this.$route.params.id+"?"+e.toString()).then(function(e){t.formValidate.title=e.data.data.discuss.title,t.formValidate.keyword=e.data.data.discuss.keyword,t.content=e.data.data.discuss.content;var a=Array();a[0]=e.data.data.discussData[0],a[1]=e.data.data.discussData[1],t.discussData=a,t.btnLoading=!1}).catch(function(t){console.log(t)})},methods:{saveContent:function(){var t=this;this.$Spin.show();var e=new URLSearchParams;e.append("user_id",this.$store.state.loginInfo.user_id),e.append("token",this.$store.state.loginInfo.token),e.append("content",this.content),this.btnLoading=!0,axios.post(this.$store.state.API_ROOT+"discuss/"+this.$route.params.id+"/edit",e).then(function(e){e.data.data.is_ok?(t.discussData[1]["info"]=t.$store.state.server_time,t.$Message.success("保存成功！")):t.$Message.error("保存失败！"),t.btnLoading=!1,t.$Spin.hide()}).catch(function(t){this.$Message.error("保存失败！"),this.btnLoading=!1,this.$Spin.hide()})},handleSubmit:function(t){var e=this;this.$refs[t].validate(function(t){if(t){e.$Spin.show(),e.btnLoading=!0;var a=new URLSearchParams;a.append("user_id",e.$store.state.loginInfo.user_id),a.append("token",e.$store.state.loginInfo.token),a.append("title",e.formValidate.title),a.append("keyword",e.formValidate.keyword),a.append("content",e.content),axios.post(e.$store.state.API_ROOT+"discuss/"+e.$route.params.id+"/edit",a).then(function(t){e.$Spin.hide(),t.data.data.is_ok?(e.discussData[1]["info"]=e.$store.state.server_time,e.btnLoading=!1,e.$Message.success("保存成功！")):(e.btnLoading=!1,e.$Message.error("保存失败！"))}).catch(function(t){this.$Spin.hide(),this.btnLoading=!1,this.$Message.error("保存失败！")})}else e.$Message.error("请检查输入!")})},$imgAdd:function(t,e){var a=this;this.$Spin.show(),axios.get(this.$store.state.API_ROOT+"upload/token").then(function(s){a.uploadToken=s.data.data.token;var o=new URLSearchParams;o.append("token",a.uploadToken),o.append("file",e);var n=new FormData;n.append("token",a.uploadToken),n.append("file",e),axios.post("https://upload.qiniup.com",n).then(function(e){a.$refs.editor.$img2Url(t,a.$store.state.CDN_ROOT+e.data.key),a.$Spin.hide(),a.$Message.success("图片上传成功！")}).catch(function(t){console.log(t)})}).catch(function(t){console.log(t)})}}}),i=n,r=a("2877"),d=Object(r["a"])(i,s,o,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0b6d0c-legacy.df4d8777.js.map