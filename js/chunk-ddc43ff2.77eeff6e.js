(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ddc43ff2"],{"05f0":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("Content",{staticStyle:{padding:"15px"}},[e("Card",{staticClass:"formCard"},[e("p",{attrs:{slot:"title"},slot:"title"},[t._v("重判题目")]),e("Input",{attrs:{placeholder:"请输入问题序号"},model:{value:t.problem_id,callback:function(s){t.problem_id=s},expression:"problem_id"}},[e("Button",{attrs:{slot:"append"},on:{click:t.reJudgeProblem},slot:"append"},[t._v("重判")]),e("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("题目序号：")])],1),e("p")],1),e("Card",{staticClass:"formCard"},[e("p",{attrs:{slot:"title"},slot:"title"},[t._v("重判任务")]),e("Input",{attrs:{placeholder:"请输入任务序号"},model:{value:t.status_id,callback:function(s){t.status_id=s},expression:"status_id"}},[e("Button",{attrs:{slot:"append"},on:{click:t.reJudgeStatus},slot:"append"},[t._v("重判")]),e("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("任务序号：")])],1),e("p")],1),e("Card",{staticClass:"formCard"},[e("p",{attrs:{slot:"title"},slot:"title"},[t._v("判题测试")]),e("Button",{attrs:{slot:"extra",type:"error"},on:{click:t.reJudge},slot:"extra"},[t._v("重判")]),e("p",[e("Icon",{attrs:{type:"ios-information-circle-outline"}}),t._v("点击重判之后会重新评判最近的100份提交")],1)],1)],1)},o=[],r={name:"ManageStatus",data(){return{problem_id:"",status_id:""}},methods:{reJudgeProblem(){var t=new URLSearchParams;t.append("user_id",this.$store.state.loginInfo.user_id),t.append("token",this.$store.state.loginInfo.token),t.append("problem_id",this.problem_id),axios.post(this.$store.state.API_ROOT+"rejudge",t).then(t=>{t.data.data.is_ok?(this.$Message.success("重判成功！"),this.$router.push("/status?problem_id="+this.problem_id)):this.$Message.error(t.data.data.message)}).catch(function(t){console.log(t)})},reJudgeStatus(){var t=new URLSearchParams;t.append("user_id",this.$store.state.loginInfo.user_id),t.append("token",this.$store.state.loginInfo.token),t.append("status_id",this.status_id),axios.post(this.$store.state.API_ROOT+"rejudge",t).then(t=>{t.data.data.is_ok?(this.$Message.success("重判成功！"),this.$router.push("/status/"+this.status_id)):this.$Message.error(t.data.data.message)}).catch(function(t){console.log(t)})},reJudge(){var t=new URLSearchParams;t.append("user_id",this.$store.state.loginInfo.user_id),t.append("token",this.$store.state.loginInfo.token),axios.post(this.$store.state.API_ROOT+"rejudge",t).then(t=>{t.data.data.is_ok?(this.$Message.success("重判成功！"),this.$router.push("/status?page=4")):this.$Message.error(t.data.data.message)}).catch(function(t){console.log(t)})}}},n=r,i=(e("7f48"),e("2877")),d=Object(i["a"])(n,a,o,!1,null,"06255978",null);s["default"]=d.exports},"0bc1":function(t,s,e){},"7f48":function(t,s,e){"use strict";var a=e("0bc1"),o=e.n(a);o.a}}]);
//# sourceMappingURL=chunk-ddc43ff2.77eeff6e.js.map