(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02c6f637"],{"56d4":function(t,e,n){"use strict";n("d90f")},"634a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"warp"},[n("div",{staticClass:"header"},[n("span",{staticClass:"title"},[t._v("工单类型")]),n("table",{attrs:{id:"table",border:"1px"}},[n("tr",{attrs:{id:"table_tr"}},[n("th",{staticClass:"table_th collection",on:{click:function(e){return t.changePages("/order/collection")}}},[t._v("采集运维")]),n("th",{staticClass:"table_th metering",on:{click:function(e){return t.changePages("/order/metering")}}},[t._v("计量运维")]),n("th",{staticClass:"table_th lineloss",on:{click:function(e){return t.changePages("/order/lineloss")}}},[t._v("线损治理")]),n("th",{staticClass:"table_th charge",on:{click:function(e){return t.changePages("/order/charge")}}},[t._v("费控复电")]),n("th",{staticClass:"table_th recovery",on:{click:function(e){return t.changePages("/order/recovery")}}},[t._v("电费回收")]),n("th",{staticClass:"table_th copy",on:{click:function(e){return t.changePages("/order/copy")}}},[t._v("电费补抄")]),n("th",{staticClass:"table_th service",on:{click:function(e){return t.changePages("/order/service")}}},[t._v("优质服务")]),n("th",{staticClass:"table_th activeMetering",on:{click:function(e){return t.changePages("/order/activeMetering")}}},[t._v("主动运维")]),n("th",{staticClass:"table_th activeRepair",on:{click:function(e){return t.changePages("/order/activeRepair")}}},[t._v("主动抢修")])])])]),n("router-view")],1)},c=[],s={mounted:function(){document.getElementsByClassName(this.$route.name)[0].classList.add("active"),document.getElementById("table").addEventListener("click",(function(t){for(var e=document.getElementsByClassName("table_th"),n=0;n<9;n++)e[n].classList.remove("active");t.target.classList.add("active")}),!1)},methods:{changePages:function(t){this.$router.push(t)}},unmounted:function(){document.getElementById("table").removeEventListener("click",(function(){}))}},r=s,i=(n("56d4"),n("2877")),o=Object(i["a"])(r,a,c,!1,null,"482da10f",null);e["default"]=o.exports},d90f:function(t,e,n){}}]);