(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ea33aa0","chunk-2d0be29d"],{12909:function(t,e,a){},"2ea5":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:450,visible:t.visible,closable:!1,maskClosable:!1}},[a("template",{slot:"footer"},[a("a-button",{attrs:{type:"primary"},on:{click:t.selectOk}},[t._v("确认")])],1),a("a-form-model",[t.isMultiTenant?a("a-form-model-item",{staticStyle:{"margin-bottom":"10px"},attrs:{labelCol:{span:4},wrapperCol:{span:20},"validate-status":t.validate_status1}},[a("a-tooltip",{attrs:{placement:"topLeft"}},[a("template",{slot:"title"},[a("span",[t._v("您有多个租户，请选择登录租户")])]),a("a-avatar",{staticStyle:{backgroundColor:"#87d068"},attrs:{icon:"gold"}})],2),a("a-select",{class:{"valid-error":"error"==t.validate_status1},staticStyle:{"margin-left":"10px",width:"80%"},attrs:{placeholder:"请选择登录租户"},on:{change:t.handleTenantChange}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"gold"},slot:"suffixIcon"}),t._l(t.tenantList,(function(e){return a("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v("\n          "+t._s(e.name)+"\n        ")])}))],2)],1):t._e(),t.isMultiDepart?a("a-form-model-item",{staticStyle:{"margin-bottom":"10px"},attrs:{labelCol:{span:4},wrapperCol:{span:20},"validate-status":t.validate_status2}},[a("a-tooltip",{attrs:{placement:"topLeft"}},[a("template",{slot:"title"},[a("span",[t._v("您有多个部门，请选择登录部门")])]),a("a-avatar",{staticStyle:{backgroundColor:"rgb(104, 208, 203)"},attrs:{icon:"gold"}})],2),a("a-select",{class:{"valid-error":"error"==t.validate_status2},staticStyle:{"margin-left":"10px",width:"80%"},attrs:{placeholder:"请选择登录部门"},on:{change:t.handleDepartChange}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"gold"},slot:"suffixIcon"}),t._l(t.departList,(function(e){return a("a-select-option",{key:e.id,attrs:{value:e.orgCode}},[t._v("\n          "+t._s(e.departName)+"\n        ")])}))],2)],1):t._e()],1)],2)},s=[],n=a("2b0e"),o=a("0fea"),l=a("9fb0"),r={name:"LoginSelectTenant",data:function(){return{visible:!1,isMultiDepart:!1,departList:[],isMultiTenant:!1,tenantList:[],username:"",orgCode:"",tenant_id:"",validate_status1:"",validate_status2:""}},computed:{title:function(){return this.isMultiDepart&&this.isMultiTenant?"请选择租户和部门":this.isMultiDepart&&!this.isMultiTenant?"请选择部门":!this.isMultiDepart&&this.isMultiTenant?"请选择租户":void 0}},methods:{clear:function(){this.departList=[],this.tenantList=[],this.visible=!1,this.validate_status1="",this.validate_status2=""},bizDepart:function(t){var e=t.multi_depart;0==e?(this.$notification.warn({message:"提示",description:"您尚未归属部门,请确认账号信息",duration:3}),this.isMultiDepart=!1):2==e?(this.visible=!0,this.isMultiDepart=!0,this.departList=t.departs):this.isMultiDepart=!1},bizTenantList:function(t){var e=t.tenantList;Array.isArray(e)&&(0===e.length?this.isMultiTenant=!1:1===e.length?(this.tenant_id=e[0].id,this.isMultiTenant=!1):(this.visible=!0,this.isMultiTenant=!0,this.tenantList=e))},show:function(t){this.clear(),this.bizDepart(t);var e=n["default"].ls.get(l["s"]);this.username=e.username,this.bizTenantList(t),!1===this.visible&&(this.$store.dispatch("saveTenant",this.tenant_id),this.$emit("success"))},requestFailed:function(t){this.$notification["error"]({message:"登录失败",description:((t.response||{}).data||{}).message||t.message||"请求出现错误，请稍后再试",duration:4}),this.loginBtn=!1},departResolve:function(){var t=this;return new Promise((function(e,a){if(!1===t.isMultiDepart)e();else{var i={orgCode:t.orgCode,username:t.username};Object(o["g"])("/sys/selectDepart",i).then((function(i){if(i.success){var s=i.result.userInfo;n["default"].ls.set(l["s"],s,6048e5),t.$store.commit("SET_INFO",s),e()}else t.requestFailed(i),t.$store.dispatch("Logout"),a()}))}}))},selectOk:function(){var t=this;return this.isMultiTenant&&!this.tenant_id?(this.validate_status1="error",!1):this.isMultiDepart&&!this.orgCode?(this.validate_status2="error",!1):void this.departResolve().then((function(){t.$store.dispatch("saveTenant",t.tenant_id),t.isMultiTenant,t.$emit("success")})).catch((function(){}))},handleTenantChange:function(t){this.validate_status1="",this.tenant_id=t},handleDepartChange:function(t){this.validate_status2="",this.orgCode=t}}},u=r,c=a("2877"),d=Object(c["a"])(u,i,s,!1,null,"60ab5d68",null);e["default"]=d.exports},3507:function(t,e,a){},"5b79":function(t,e,a){"use strict";a("12909")},aa95:function(t,e,a){"use strict";a("3507")},ac2a:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("a-form-model",{staticClass:"user-layout-login",nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSubmit.apply(null,arguments)}}},[a("login-account",{ref:"alogin",on:{validateFail:t.validateFail,success:t.requestSuccess,fail:t.requestFailed}}),a("a-form-item",{staticStyle:{"margin-top":"24px"}},[a("a-button",{staticClass:"login-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:t.loginBtn,disabled:t.loginBtn},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[t._v("确定\n      ")])],1)],1),a("login-select-tenant",{ref:"loginSelect",on:{success:t.loginSelectOk}})],1)},s=[],n=a("2b0e"),o=a("9fb0"),l=a("ca00"),r=a("a175"),u=a("2ea5"),c={name:"LoginUser",components:{LoginAccount:r["default"],LoginSelectTenant:u["default"]},data:function(){return{loginBtn:!1,rememberMe:!1}},created:function(){n["default"].ls.remove(o["a"]),this.getRouterData(),this.rememberMe=!1},methods:{getRouterData:function(){var t=this;this.$nextTick((function(){var e=t.$route.params.username||t.$route.query.username||"";e&&t.$refs.alogin.acceptUsername(e)}))},handleSubmit:function(){this.loginBtn=!0,this.$refs.alogin.handleLogin(this.rememberMe)},validateFail:function(){this.loginBtn=!1},requestFailed:function(t){var e=((t.response||{}).data||{}).message||t.message||"请求出现错误，请稍后再试";this.$notification["error"]({message:"登录失败",description:e,duration:4}),e.indexOf("密码错误")>0&&this.$refs.alogin.handleChangeCheckCode(),this.loginBtn=!1},requestSuccess:function(t){this.$refs.loginSelect.show(t)},loginSelectOk:function(){this.loginSuccess()},loginSuccess:function(){this.$router.push({path:"/dashboard/analysis"}).catch((function(){})),this.$notification.success({message:"欢迎",description:"".concat(Object(l["f"])(),"，欢迎回来")})}}},d=c,h=(a("5b79"),a("aa95"),a("2877")),p=Object(h["a"])(d,i,s,!1,null,"4bbfe593",null);e["default"]=p.exports}}]);