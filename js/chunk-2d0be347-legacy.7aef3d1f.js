(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0be347"],{"2eec":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Content",[a("Row",[a("Col",{attrs:{span:"16"}},[a("Content",{staticStyle:{padding:"5px"}},[a("Card",[a("Form",{ref:"formValidate",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":80}},[a("FormItem",{attrs:{label:"标题",prop:"title"}},[a("Input",{attrs:{placeholder:"title"},model:{value:t.formValidate.title,callback:function(e){t.$set(t.formValidate,"title",e)},expression:"formValidate.title"}})],1),a("FormItem",{attrs:{label:"权限",prop:"privilege"}},[a("i-switch",{attrs:{size:"large"},model:{value:t.formValidate.privilege,callback:function(e){t.$set(t.formValidate,"privilege",e)},expression:"formValidate.privilege"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("私有")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("公开")])])],1)],1)],1)],1)],1),a("Col",{attrs:{span:"8"}},[a("Sider",{attrs:{width:"100%","hide-trigger":""}},[a("div",{staticStyle:{"background-color":"#f8f8f9",padding:"5px"}},[a("Card",{staticClass:"NewsCard"},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("文章信息")]),a("p",{attrs:{slot:"extra"},slot:"extra"},[a("Button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:function(e){return t.handleSubmit("formValidate")}}},[t._v("提交")])],1),a("Table",{attrs:{"show-header":!1}})],1)],1)])],1)],1),a("Card",[a("mavon-editor",{ref:"editor",staticStyle:{"min-height":"600px"},on:{imgAdd:t.$imgAdd,save:t.saveContent},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1)},n=[],s=(a("7f7f"),{name:"NewsEdit",data:function(){return{btnLoading:!1,formValidate:{title:"",privilege:!1},ruleValidate:{title:[{required:!0,message:"标题不能为空！",trigger:"blur"}]},content:""}},methods:{saveContent:function(){var t=this;if(""==this.formValidate.title)this.$Message.error("请先输入标题！");else{this.$Spin.show();var e=new URLSearchParams;e.append("user_id",this.$store.state.loginInfo.user_id),e.append("token",this.$store.state.loginInfo.token),e.append("title",this.formValidate.title),e.append("privilege",this.formValidate.privilege?1:0),e.append("content",this.content),this.btnLoading=!0,axios.post(this.$store.state.API_ROOT+"news/add",e).then(function(e){e.data.data.is_ok?(t.$Message.success("保存成功！"),t.$router.push("/news/"+e.data.data.news_id+"/edit")):t.$Message.error("保存失败！"),t.btnLoading=!1,t.$Spin.hide()}).catch(function(t){this.$Message.error("保存失败！"),this.btnLoading=!1,this.$Spin.hide()})}},handleSubmit:function(t){var e=this;this.$refs[t].validate(function(t){if(t){e.$Spin.show(),e.btnLoading=!0;var a=new URLSearchParams;a.append("user_id",e.$store.state.loginInfo.user_id),a.append("token",e.$store.state.loginInfo.token),a.append("title",e.formValidate.title),a.append("privilege",e.formValidate.privilege?1:0),a.append("content",e.content),axios.post(e.$store.state.API_ROOT+"news/add",a).then(function(t){e.$Spin.hide(),t.data.data.is_ok?(e.$Message.success("保存成功！"),e.$router.push("/news/"+t.data.data.news_id+"/edit")):e.$Message.error("保存失败！"),e.btnLoading=!1}).catch(function(t){this.$Spin.hide(),this.btnLoading=!1,this.$Message.error("保存失败！")})}else e.$Message.error("请检查输入!")})},$imgAdd:function(t,e){var a=this;this.$Spin.show(),axios.get(this.$store.state.API_ROOT+"upload/token").then(function(i){a.uploadToken=i.data.data.token;var n=new URLSearchParams;n.append("token",a.uploadToken),n.append("file",e);var s=new FormData;s.append("token",a.uploadToken),s.append("file",e),axios.post("https://upload.qiniup.com",s).then(function(e){a.$refs.editor.$img2Url(t,a.$store.state.CDN_ROOT+e.data.key),a.$Spin.hide(),a.$Message.success("图片上传成功！")}).catch(function(t){console.log(t)})}).catch(function(t){console.log(t)})}}}),o=s,r=a("2877"),l=Object(r["a"])(o,i,n,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0be347-legacy.7aef3d1f.js.map