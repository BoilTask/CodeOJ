(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e146c"],{"7a6b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Content",[a("Row",[a("Col",{attrs:{span:"16"}},[a("Content",{staticStyle:{padding:"5px"}},[a("Card",[a("Form",{ref:"formValidate",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":80}},[a("FormItem",{attrs:{label:"讨论ID",prop:"discuss_id"}},[a("Input",{attrs:{placeholder:"discuss_id",disabled:""},model:{value:t.formValidate.discuss_id,callback:function(e){t.$set(t.formValidate,"discuss_id",e)},expression:"formValidate.discuss_id"}}),a("p",[a("Icon",{attrs:{type:"ios-information-circle-outline"}}),t._v("请勿随便更改\n\t\t\t\t\t\t")],1)],1)],1)],1)],1)],1),a("Col",{attrs:{span:"8"}},[a("Sider",{attrs:{width:"100%","hide-trigger":""}},[a("div",{staticStyle:{"background-color":"#f8f8f9",padding:"5px"}},[a("Card",{staticClass:"ReplyCard"},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("新建回复")]),a("p",{attrs:{slot:"extra"},slot:"extra"},[a("Button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:function(e){return t.handleSubmit("formValidate")}}},[t._v("提交")]),a("Button",{attrs:{type:"error",to:"/discuss/"+this.$route.params.id}},[t._v("查看")])],1),a("Table",{attrs:{"show-header":!1,columns:t.tableCol,data:t.replyData}})],1)],1)])],1)],1),a("Card",[a("mavon-editor",{ref:"editor",staticStyle:{"min-height":"600px"},on:{imgAdd:t.$imgAdd,save:t.saveContent},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1)},i=[],n=(a("7f7f"),a("6b54"),{name:"ReplyEdit",data:function(){return{btnLoading:!1,formValidate:{discuss_id:""},ruleValidate:{discuss_id:[{required:!0,message:"回复ID不能为空！",trigger:"blur"}]},content:"",tableCol:[{key:"name"},{key:"info"}],replyData:[]}},mounted:function(){var t=this;this.formValidate.discuss_id=this.$route.params.id;var e=new URLSearchParams;this.$store.state.loginInfo.isLogin&&(e.append("user_id",this.$store.state.loginInfo.user_id),e.append("token",this.$store.state.loginInfo.token)),axios.get(this.$store.state.API_ROOT+"discuss/"+this.$route.params.id+"/reply/"+this.$route.params.reply_id+"?"+e.toString()).then(function(e){t.content=e.data.data.reply.content;var a=Array();a.push({name:"创建时间",info:e.data.data.reply.insert_time}),a.push({name:"更新时间",info:e.data.data.reply.update_time}),t.replyData=a,t.btnLoading=!1}).catch(function(t){console.log(t)})},methods:{saveContent:function(){var t=this;if(""==this.formValidate.discuss_id)this.$Message.error("讨论ID不能为空！");else if(this.content.length<1)this.$Message.error("内容不能为空!");else{this.$Spin.show();var e=new URLSearchParams;e.append("user_id",this.$store.state.loginInfo.user_id),e.append("token",this.$store.state.loginInfo.token),e.append("content",this.content),this.btnLoading=!0,axios.post(this.$store.state.API_ROOT+"discuss/"+this.formValidate.discuss_id+"/reply/"+this.$route.params.reply_id+"/edit=",e).then(function(e){e.data.data.is_ok?t.$Message.success("保存成功！"):t.$Message.error("保存失败！"),t.btnLoading=!1,t.$Spin.hide()}).catch(function(t){this.$Message.error("保存失败！"),this.btnLoading=!1,this.$Spin.hide()})}},handleSubmit:function(t){var e=this;this.$refs[t].validate(function(t){t?e.saveContent():e.$Message.error("请检查输入!")})},$imgAdd:function(t,e){var a=this;this.$Spin.show(),axios.get(this.$store.state.API_ROOT+"upload/token").then(function(s){a.uploadToken=s.data.data.token;var i=new URLSearchParams;i.append("token",a.uploadToken),i.append("file",e);var n=new FormData;n.append("token",a.uploadToken),n.append("file",e),axios.post("https://upload.qiniup.com",n).then(function(e){a.$refs.editor.$img2Url(t,a.$store.state.CDN_ROOT+e.data.key),a.$Spin.hide(),a.$Message.success("图片上传成功！")}).catch(function(t){console.log(t)})}).catch(function(t){console.log(t)})}}}),o=n,r=a("2877"),d=Object(r["a"])(o,s,i,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0e146c-legacy.063047d2.js.map