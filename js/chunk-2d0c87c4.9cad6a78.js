(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c87c4"],{"54a0":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Content",[a("Row",[a("Col",{attrs:{span:"16"}},[a("Content",{staticStyle:{padding:"5px"}},[a("Card",[a("Form",{ref:"formValidate",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":80}},[a("FormItem",{attrs:{label:"标题",prop:"title"}},[a("Input",{attrs:{placeholder:"title"},model:{value:t.formValidate.title,callback:function(e){t.$set(t.formValidate,"title",e)},expression:"formValidate.title"}})],1),a("FormItem",{attrs:{label:"标签",prop:"tags"}},[a("Input",{attrs:{placeholder:"tags"},model:{value:t.formValidate.tags,callback:function(e){t.$set(t.formValidate,"tags",e)},expression:"formValidate.tags"}}),a("p",[a("Icon",{attrs:{type:"ios-information-circle-outline"}}),t._v("多个标签请以英文逗号“,”隔开\n\t\t\t\t\t\t")],1)],1),a("FormItem",{attrs:{label:"权限",prop:"privilege"}},[a("i-switch",{attrs:{size:"large"},model:{value:t.formValidate.privilege,callback:function(e){t.$set(t.formValidate,"privilege",e)},expression:"formValidate.privilege"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("私有")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("公开")])])],1)],1)],1)],1)],1),a("Col",{attrs:{span:"8"}},[a("Sider",{attrs:{width:"100%","hide-trigger":""}},[a("div",{staticStyle:{"background-color":"#f8f8f9",padding:"5px"}},[a("Card",{staticClass:"BlogCard"},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("文章信息")]),a("p",{attrs:{slot:"extra"},slot:"extra"},[a("Button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:function(e){return t.handleSubmit("formValidate")}}},[t._v("提交")]),a("Button",{attrs:{type:"error",to:"/blog/"+this.$route.params.id}},[t._v("查看")])],1),a("Table",{attrs:{columns:t.tableCol,data:t.blogData,"show-header":!1}})],1)],1)])],1)],1),a("Card",[a("mavon-editor",{staticStyle:{"min-height":"600px"},on:{save:t.saveContent},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1)},s=[],o=(a("6b54"),{name:"BlogEdit",data(){return{btnLoading:!0,formValidate:{title:"",tags:"",privilege:!1},ruleValidate:{title:[{required:!0,message:"标题不能为空！",trigger:"blur"}]},content:"",tableCol:[{key:"name"},{key:"info"}],blogData:[]}},mounted(){var t=new URLSearchParams;this.$store.state.loginInfo.isLogin&&(t.append("user_id",this.$store.state.loginInfo.user_id),t.append("token",this.$store.state.loginInfo.token)),axios.get(this.$store.state.API_ROOT+"blog/"+this.$route.params.id+"?"+t.toString()).then(t=>{this.formValidate.title=t.data.data.blog.title,this.formValidate.privilege=1==t.data.data.blog.privilege,this.content=t.data.data.blog.content;let e=Array();e[0]=t.data.data.blogData[0],e[1]=t.data.data.blogData[1],this.blogData=e;let a=t.data.data.blogData[2]["info"];for(let i=0,s=a.length;i<s;i++)i>0&&(this.formValidate.tags+=","),this.formValidate.tags+=a[i]["name"];this.btnLoading=!1}).catch(function(t){console.log(t)})},methods:{saveContent:function(){this.$Spin.show();var t=new URLSearchParams;t.append("user_id",this.$store.state.loginInfo.user_id),t.append("token",this.$store.state.loginInfo.token),t.append("content",this.content),this.btnLoading=!0,axios.post(this.$store.state.API_ROOT+"blog/"+this.$route.params.id+"/edit",t).then(t=>{t.data.data.is_ok?(this.blogData[1]["info"]=this.$store.state.server_time,this.$Message.success("保存成功！")):this.$Message.error("保存失败！"),this.btnLoading=!1,this.$Spin.hide()}).catch(function(t){this.$Message.error("保存失败！"),this.btnLoading=!1,this.$Spin.hide()})},handleSubmit(t){this.$refs[t].validate(t=>{if(t){this.$Spin.show(),this.btnLoading=!0;var e=new URLSearchParams;e.append("user_id",this.$store.state.loginInfo.user_id),e.append("token",this.$store.state.loginInfo.token),e.append("title",this.formValidate.title),e.append("privilege",this.formValidate.privilege?1:0),e.append("tags",this.formValidate.tags),e.append("content",this.content),axios.post(this.$store.state.API_ROOT+"blog/"+this.$route.params.id+"/edit",e).then(t=>{this.$Spin.hide(),t.data.data.is_ok?(this.blogData[1]["info"]=this.$store.state.server_time,this.btnLoading=!1,this.$Message.success("保存成功！")):(this.btnLoading=!1,this.$Message.error("保存失败！"))}).catch(function(t){this.$Spin.hide(),this.btnLoading=!1,this.$Message.error("保存失败！")})}else this.$Message.error("请检查输入!")})}}}),n=o,r=a("2877"),l=Object(r["a"])(n,i,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0c87c4.9cad6a78.js.map