(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51274857"],{1713:function(e,t,a){},a73d:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-form-model",{ref:"form",staticClass:"password-retrieval-form",attrs:{model:e.model,rules:e.validatorRules},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextStep.apply(null,arguments)}}},[a("a-form-model-item",{attrs:{label:"手机",required:"",prop:"phone",labelCol:{span:5},wrapperCol:{span:19}}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{staticClass:"gutter-row",attrs:{span:20}},[a("a-input",{attrs:{type:"text",autocomplete:"false",placeholder:"请输入手机号"},model:{value:e.model.phone,callback:function(t){e.$set(e.model,"phone",t)},expression:"model.phone"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"phone"},slot:"prefix"})],1)],1)],1)],1),e.show?a("a-form-model-item",{attrs:{required:"",prop:"captcha",label:"验证码",labelCol:{span:5},wrapperCol:{span:19}}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{staticClass:"gutter-row",attrs:{span:12}},[a("a-input",{attrs:{type:"text",placeholder:"手机短信验证码"},model:{value:e.model.captcha,callback:function(t){e.$set(e.model,"captcha",t)},expression:"model.captcha"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"code"},slot:"prefix"})],1)],1),a("a-col",{staticClass:"gutter-row",attrs:{span:8}},[a("a-button",{attrs:{tabindex:"-1",size:"default",disabled:e.state.smsSendBtn},domProps:{textContent:e._s(e.state.smsSendBtn?e.state.time+" s":"获取验证码")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.getCaptcha.apply(null,arguments)}}})],1)],1)],1):e._e(),a("a-form-model-item",{attrs:{wrapperCol:{span:19,offset:5}}},[a("router-link",{staticStyle:{float:"left","line-height":"40px"},attrs:{to:{name:"login"}}},[e._v("使用已有账户登录")]),a("a-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:e.nextStep}},[e._v("下一步")])],1)],1)],1)},o=[],n=a("0fea"),r={name:"Step2Alteration",props:["userList"],data:function(){return{model:{},loading:!1,dropList:"0",captcha:"",show:!0,state:{time:60,smsSendBtn:!1},formLogin:{captcha:"",mobile:""},validatorRules:{phone:[{required:!0,message:"请输入手机号码!"},{validator:this.validatePhone}],captcha:[{required:!0,message:"请输入短信验证码!"}]}}},computed:{},methods:{nextStep:function(){var e=this,t=this;t.loading=!0,this.$refs["form"].validate((function(a){if(1==a){var s={phone:e.model.phone,smscode:e.model.captcha};Object(n["f"])("/sys/user/phoneVerification",s).then((function(a){if(a.success){var o={username:a.result.username,phone:s.phone,smscode:a.result.smscode};setTimeout((function(){t.$emit("nextStep",o)}),0)}else e.cmsFailed(a.message)}))}}))},getCaptcha:function(e){e.preventDefault();var t=this;t.$refs["form"].validateField("phone",(function(e){if(e)t.cmsFailed(e);else{t.state.smsSendBtn=!0;var a=window.setInterval((function(){t.state.time--<=0&&(t.state.time=60,t.state.smsSendBtn=!1,window.clearInterval(a))}),1e3),s=t.$message.loading("验证码发送中..",0),o={mobile:t.model.phone,smsmode:"2"};Object(n["f"])("/sys/sms",o).then((function(e){e.success||(setTimeout(s,1),t.cmsFailed(e.message)),setTimeout(s,500)}))}}))},cmsFailed:function(e){this.$notification["error"]({message:"验证错误",description:e,duration:4})},handleChangeSelect:function(e){var t=this;0==e?(t.dropList="0",t.show=!0):(t.dropList="1",t.show=!1)},validatePhone:function(e,t,a){if(t){var s=/^[1][3,4,5,7,8][0-9]{9}$/;s.test(t)?a():a("请输入正确的手机号")}else a()}}},l=r,i=(a("b5fd"),a("2877")),c=Object(i["a"])(l,s,o,!1,null,"f815d778",null);t["default"]=c.exports},b5fd:function(e,t,a){"use strict";a("1713")}}]);