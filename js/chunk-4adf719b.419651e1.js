(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4adf719b"],{"0df7":function(t,e,a){},9989:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Content",{staticStyle:{"text-align":"center",padding:"20px"}},[a("Form",{ref:"filterData",attrs:{model:t.filterData,inline:""}},[a("FormItem",{attrs:{prop:"title"}},[a("Input",{attrs:{type:"text",placeholder:"Title"},model:{value:t.filterData.title,callback:function(e){t.$set(t.filterData,"title",e)},expression:"filterData.title"}},[a("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("标题：")])])],1),a("FormItem",{attrs:{prop:"tags"}},[a("Input",{attrs:{type:"text",placeholder:"Tags"},model:{value:t.filterData.tags,callback:function(e){t.$set(t.filterData,"tags",e)},expression:"filterData.tags"}},[a("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("标签：")])])],1),a("FormItem",[a("Select",{model:{value:t.filterData.privilege,callback:function(e){t.$set(t.filterData,"privilege",e)},expression:"filterData.privilege"}},[a("span",{attrs:{slot:"prefix"},slot:"prefix"},[t._v("权限：")]),a("Option",{key:0,attrs:{value:0}},[t._v("全部")]),a("Option",{key:1,attrs:{value:1}},[t._v("公开")]),a("Option",{key:2,attrs:{value:2}},[t._v("私有")])],1)],1),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:t.filterStatus}},[t._v("筛选")])],1)],1),a("Page",{staticClass:"pageBar",attrs:{total:t.statusCnt,"page-size":t.statusPageSize,current:t.statusPage,"show-elevator":"","show-total":""},on:{"on-change":t.changePage}}),a("Table",{attrs:{stripe:"",columns:t.statusColumns,data:t.statusData,loading:t.statusLoading}}),a("Page",{staticClass:"pageBar",attrs:{total:t.statusCnt,"page-size":t.statusPageSize,current:t.statusPage,"show-elevator":"","show-total":""},on:{"on-change":t.changePage}})],1)},i=[],r=(a("6b54"),{name:"Status",data(){return{statusLoading:!0,statusCnt:0,statusPageSize:50,filterData:{title:"",tags:"",privilege:0},statusColumns:[{title:"#",key:"status_id"},{title:"题目",key:"problem_id"},{title:"状态",key:"result"},{title:"分数",key:"score"},{title:"用时",key:"time"},{title:"内存",key:"memory"},{title:"语言",key:"language"},{title:"长度",key:"length"},{title:"用户",key:"creator"},{title:"时间",key:"insert_time"}],statusData:[{status_id:1,problem_id:1e3,result:"Accept",score:100,time:"100ms",memory:"100MB",language:"C",length:"1000",creator:"BoilTask",insert_time:"2019-05-09 14:00:00"}]}},computed:{statusPage:function(){return this.$route.query["page"]?parseInt(this.$route.query["page"]):1}},mounted(){this.filterData.title=this.$route.query["title"]?this.$route.query["title"]:"",this.filterData.tags=this.$route.query["tags"]?this.$route.query["tags"]:"",this.filterData.privilege=this.$route.query["privilege"]?this.$route.query["privilege"]:0,this.getStatusList()},watch:{$route(t,e){this.getStatusList()}},methods:{changePage(t){this.$router.push({path:"/manage/status",query:{page:t}})},getStatusList(){this.statusLoading=!0;var t=new URLSearchParams;t.append("user_id",this.$store.state.loginInfo.user_id),t.append("token",this.$store.state.loginInfo.token),t.append("user",this.$store.state.loginInfo.user_id),t.append("title",this.filterData.title),t.append("tags",this.filterData.tags),t.append("privilege",this.filterData.privilege),axios.get(this.$store.state.API_ROOT+"status/list/"+this.statusPage+"?"+t.toString()).then(t=>{this.statusData=t.data.data.statusList,this.statusCnt=t.data.data.total,this.statusPageSize=t.data.data.pageSize,this.statusLoading=!1}).catch(function(t){console.log(t)})},filterStatus(){this.statusLoading=!0;var t=new URLSearchParams;t.append("user_id",this.$store.state.loginInfo.user_id),t.append("token",this.$store.state.loginInfo.token),t.append("user",this.$store.state.loginInfo.user_id),t.append("title",this.filterData.title),t.append("tags",this.filterData.tags),t.append("privilege",this.filterData.privilege),axios.get(this.$store.state.API_ROOT+"status/list/"+this.statusPage+"?"+t.toString()).then(t=>{this.statusData=t.data.data.statusList,this.statusCnt=t.data.data.total,this.statusPageSize=t.data.data.pageSize,this.statusLoading=!1}).catch(function(t){console.log(t)})}}}),l=r,n=(a("aab4"),a("2877")),o=Object(n["a"])(l,s,i,!1,null,"3320e4c7",null);e["default"]=o.exports},aab4:function(t,e,a){"use strict";var s=a("0df7"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-4adf719b.419651e1.js.map