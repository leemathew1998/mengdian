(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-abe87b1c","chunk-507bb807"],{"0673":function(t,e,s){"use strict";s.r(e);var c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"exception"},[s("div",{staticClass:"img"},[s("img",{attrs:{src:t.config[t.type].img}})]),s("div",{staticClass:"content"},[s("h1",[t._v(t._s(t.config[t.type].title))]),s("div",{staticClass:"desc"},[t._v(t._s(t.config[t.type].desc))]),s("div",{staticClass:"action"},[s("a-button",{attrs:{type:"primary"},on:{click:t.handleToHome}},[t._v("返回首页")])],1)])])},a=[],n={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"抱歉，你无权访问该页面"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"抱歉，你访问的页面不存在或无权访问"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"抱歉，服务器出错了"}},i=n,o={name:"ExceptionPage",props:{type:{type:String,default:"404"}},data:function(){return{config:i}},methods:{handleToHome:function(){this.$router.push({name:"dashboard"})}}},r=o,l=(s("bb6b"),s("2877")),p=Object(l["a"])(r,c,a,!1,null,"ea9aa70a",null);e["default"]=p.exports},"6c05":function(t,e,s){"use strict";s.r(e);var c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("exception-page",{attrs:{type:"500"}})},a=[],n=s("0673"),i={components:{ExceptionPage:n["default"]}},o=i,r=s("2877"),l=Object(r["a"])(o,c,a,!1,null,"bcf0a046",null);e["default"]=l.exports},"9c4b":function(t,e,s){},bb6b:function(t,e,s){"use strict";s("9c4b")}}]);