(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2519"],{2434:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Content",[i("Row",[i("Col",{attrs:{span:"16"}},[i("Content",{staticStyle:{padding:"5px"}},[i("Card",[i("Form",{ref:"formValidate",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":80}},[i("FormItem",{attrs:{label:"标题",prop:"title"}},[i("Input",{attrs:{placeholder:"title"},model:{value:t.formValidate.title,callback:function(e){t.$set(t.formValidate,"title",e)},expression:"formValidate.title"}})],1),i("FormItem",{attrs:{label:"时间限制",prop:"time_limit"}},[i("Input",{attrs:{placeholder:"time_limit"},model:{value:t.formValidate.time_limit,callback:function(e){t.$set(t.formValidate,"time_limit",e)},expression:"formValidate.time_limit"}},[i("span",{attrs:{slot:"append"},slot:"append"},[t._v("MS")])])],1),i("FormItem",{attrs:{label:"内存限制",prop:"memory_limit"}},[i("Input",{attrs:{placeholder:"memory_limit"},model:{value:t.formValidate.memory_limit,callback:function(e){t.$set(t.formValidate,"memory_limit",e)},expression:"formValidate.memory_limit"}},[i("span",{attrs:{slot:"append"},slot:"append"},[t._v("MB")])])],1),i("FormItem",{attrs:{label:"标签",prop:"tags"}},[i("Input",{attrs:{placeholder:"tags"},model:{value:t.formValidate.tags,callback:function(e){t.$set(t.formValidate,"tags",e)},expression:"formValidate.tags"}}),i("p",[i("Icon",{attrs:{type:"ios-information-circle-outline"}}),t._v("多个标签请以英文逗号“,”隔开\n\t\t\t\t\t\t")],1)],1),i("FormItem",{attrs:{label:"权限",prop:"privilege"}},[i("i-switch",{attrs:{size:"large"},model:{value:t.formValidate.privilege,callback:function(e){t.$set(t.formValidate,"privilege",e)},expression:"formValidate.privilege"}},[i("span",{attrs:{slot:"open"},slot:"open"},[t._v("私有")]),i("span",{attrs:{slot:"close"},slot:"close"},[t._v("公开")])])],1)],1)],1)],1)],1),i("Col",{attrs:{span:"8"}},[i("Sider",{attrs:{width:"100%","hide-trigger":""}},[i("div",{staticStyle:{"background-color":"#f8f8f9",padding:"5px"}},[i("Card",{staticClass:"ProblemCard"},[i("p",{attrs:{slot:"title"},slot:"title"},[t._v("文章信息")]),i("p",{attrs:{slot:"extra"},slot:"extra"},[i("Button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:function(e){return t.handleSubmit("formValidate")}}},[t._v("提交")])],1),i("Table",{attrs:{columns:t.tableCol,data:t.problemData,"show-header":!1}})],1)],1)])],1)],1),i("Card",[i("mavon-editor",{ref:"editorDescription",staticStyle:{"min-height":"600px"},on:{imgAdd:t.$imgAddDescription,save:t.saveData},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),i("mavon-editor",{ref:"editorHint",staticStyle:{"min-height":"600px"},on:{imgAdd:t.$imgAddHint,save:t.saveData},model:{value:t.hint,callback:function(e){t.hint=e},expression:"hint"}})],1)],1)},s=[],o={name:"ProblemEdit",data(){return{btnLoading:!1,formValidate:{title:"",time_limit:"1000",memory_limit:"128",tags:"",privilege:!1},ruleValidate:{title:[{required:!0,message:"标题不能为空！",trigger:"blur"}],time_limit:[{required:!0,message:"时间限制不能为空！",trigger:"blur"}],memory_limit:[{required:!0,message:"内存限制不能为空！",trigger:"blur"}]},description:"## 题目描述\n\n\n\n## 输入\n\n\n\n## 输出\n\n\n\n## 样例输入\n\n```\n\n```\n\n## 样例输出\n\n```\n\n```",hint:"",tableCol:[{key:"name"},{key:"info"}],problemData:[],uploadToken:""}},methods:{saveData:function(){if(""==this.formValidate.title)this.$Message.error("请先输入标题！");else if(""==this.formValidate.time_limit)this.$Message.error("请先输入时间限制！");else if(""==this.formValidate.time_limit)this.$Message.error("请先输入内存限制！");else{this.$Spin.show();var t=new URLSearchParams;t.append("user_id",this.$store.state.loginInfo.user_id),t.append("token",this.$store.state.loginInfo.token),t.append("title",this.formValidate.title),t.append("time_limit",this.formValidate.time_limit),t.append("memory_limit",this.formValidate.memory_limit),t.append("privilege",this.formValidate.privilege?1:0),t.append("tags",this.formValidate.tags),t.append("description",this.description),t.append("hint",this.hint),this.btnLoading=!0,axios.post(this.$store.state.API_ROOT+"problem/add",t).then(t=>{t.data.data.is_ok?(this.$Message.success("保存成功！"),this.$router.push("/problem/"+t.data.data.problem_id+"/edit")):this.$Message.error("保存失败！"),this.btnLoading=!1,this.$Spin.hide()}).catch(function(t){console.log(t)})}},handleSubmit(t){this.$refs[t].validate(t=>{if(t){this.$Spin.show(),this.btnLoading=!0;var e=new URLSearchParams;e.append("user_id",this.$store.state.loginInfo.user_id),e.append("token",this.$store.state.loginInfo.token),e.append("title",this.formValidate.title),e.append("time_limit",this.formValidate.time_limit),e.append("memory_limit",this.formValidate.memory_limit),e.append("privilege",this.formValidate.privilege?1:0),e.append("tags",this.formValidate.tags),e.append("description",this.description),e.append("hint",this.hint),axios.post(this.$store.state.API_ROOT+"problem/add",e).then(t=>{this.$Spin.hide(),t.data.data.is_ok?(this.btnLoading=!1,this.$Message.success("保存成功！"),this.$router.push("/problem/"+t.data.data.problem_id+"/edit")):(this.btnLoading=!1,this.$Message.error("保存失败！"))}).catch(function(t){console.log(t)})}else this.$Message.error("请检查输入!")})},$imgAddDescription(t,e){this.$Spin.show(),axios.get(this.$store.state.API_ROOT+"upload/token").then(i=>{this.uploadToken=i.data.data.token;var a=new URLSearchParams;a.append("token",this.uploadToken),a.append("file",e);var s=new FormData;s.append("token",this.uploadToken),s.append("file",e),axios.post("https://upload.qiniup.com",s).then(e=>{this.$refs.editorDescription.$img2Url(t,this.$store.state.CDN_ROOT+e.data.key),this.$Spin.hide(),this.$Message.success("图片上传成功！")}).catch(function(t){console.log(t)})}).catch(function(t){console.log(t)})},$imgAddHint(t,e){this.$Spin.show(),axios.get(this.$store.state.API_ROOT+"upload/token").then(t=>{this.uploadToken=t.data.data.token;var i=new URLSearchParams;i.append("token",this.uploadToken),i.append("file",e);var a=new FormData;a.append("token",this.uploadToken),a.append("file",e),axios.post("https://upload.qiniup.com",a).then(t=>{this.$refs.editorHint.$img2Url(Description,this.$store.state.CDN_ROOT+t.data.key),this.$Spin.hide(),this.$Message.success("图片上传成功！")}).catch(function(t){console.log(t)})}).catch(function(t){console.log(t)})}}},n=o,r=i("2877"),l=Object(r["a"])(n,a,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0b2519.b09b973a.js.map