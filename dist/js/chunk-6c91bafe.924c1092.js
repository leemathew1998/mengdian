(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c91bafe"],{b2a2:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.modalName,okText:t.modalName},on:{ok:t.handleOk,cancel:t.handleCancel},model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[a("div",{staticClass:"modalwarp"},[a("div",{staticClass:"top"},[t._t("topSlot")],2),a("div",{staticClass:"main"},[t._t("mainSlot")],2),a("div",{staticClass:"footer"},[t._t("footerSlot")],2)])])},s=[],i={name:"Modal",props:{visible:{type:Boolean,required:!0},selectItem:{required:!0},modalName:{type:String,default:""}},data:function(){return{modalVisible:!1}},watch:{visible:function(t,e){this.modalVisible=t}},methods:{handleCancel:function(){this.modalVisible=!this.modalVisible,this.$emit("changeModal",!1)},handleOk:function(t){this.modalVisible=!this.modalVisible,this.$emit("changeModal",!1)}}},n=i,o=a("2877"),c=Object(o["a"])(n,l,s,!1,null,null,null);e["default"]=c.exports},c159:function(t,e,a){"use strict";a.r(e);for(var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"warp"},[a("div",{staticClass:"form"},[a("SearchForm",{on:{formData:t.solveformData}})],1),a("Tables",{attrs:{columns:t.columns,data:t.data,operationName:"派单",tableLoading:t.tableLoading},on:{changeSelectedRowKeys:t.changeSelectedRowKeys,clickRow:t.clickRows},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a-button",{on:{click:function(a){return a.stopPropagation(),t.operation(e.table_key)}}},[t._v("派单")])]}}])}),a("Modal",{attrs:{visible:t.modalVisible,modalName:"派单",selectItem:t.selectItem},on:{changeModal:function(e){t.modalVisible=!t.modalVisible}}},[a("template",{slot:"topSlot"},[a("div",{staticClass:"title"},[t._v("工单信息")]),a("div",{staticClass:"topcontent"},[a("table",{attrs:{border:"1px solid #797979"}},[a("tr",[a("th",{staticClass:"name"},[t._v("工单编号")]),a("th",[t._v(t._s(t.selectItem.a))]),a("th",{staticClass:"name"},[t._v("用户电话")]),a("th",[t._v(t._s(t.selectItem.b))])]),a("tr",[a("th",{staticClass:"name"},[t._v("台区经理名称")]),a("th",[t._v(t._s(t.selectItem.c))]),a("th",{staticClass:"name"},[t._v("台区名称")]),a("th",[t._v(t._s(t.selectItem.d))])]),a("tr",[a("th",{staticClass:"name"},[t._v("用户名称")]),a("th",[t._v(t._s(t.selectItem.e))]),a("th",{staticClass:"name"},[t._v("用户地址")]),a("th",[t._v(t._s(t.selectItem.f))])]),a("tr",[a("th",{staticClass:"name"},[t._v("分析结果")]),a("th",[t._v(t._s(t.selectItem.g))]),a("th",{staticClass:"name"},[t._v("说明")]),a("th",[t._v(t._s(t.selectItem.h))])])])])]),a("template",{slot:"mainSlot"},[a("div",{staticClass:"title"},[t._v("派单信息")]),a("div",{staticClass:"maincontent"},[a("div",[t._v("处理人员")]),a("a-select",{staticStyle:{width:"120px"},attrs:{"default-value":"lucy"},on:{change:t.handleChange}},[a("a-select-option",{attrs:{value:"jack"}},[t._v(" Jack ")]),a("a-select-option",{attrs:{value:"lucy"}},[t._v(" Lucy ")]),a("a-select-option",{attrs:{value:"disabled"}},[t._v(" Disabled ")]),a("a-select-option",{attrs:{value:"Yiminghe"}},[t._v(" yiminghe ")])],1)],1)])],2),a("Drawer",{attrs:{visible:t.drawerVisible,clickRow:t.clickRow,columns:t.columns},on:{changeDrawer:function(e){t.drawerVisible=!t.drawerVisible}}})],1)},s=[],i=a("7896"),n=a("b2a2"),o=a("3203"),c=a("d160"),d=[{title:"工单编号",dataIndex:"a"},{title:"台区名称",dataIndex:"b"},{title:"台区经理",dataIndex:"c"},{title:"用户名称",dataIndex:"d"},{title:"用户地址",dataIndex:"e"},{title:"事件类型",dataIndex:"f"},{title:"原因研判",dataIndex:"g"},{title:"工单状态",dataIndex:"orderStatus",scopedSlots:{customRender:"orderStatus"}},{title:"工单周期",dataIndex:"i"},{title:"处理人",dataIndex:"j"},{title:"工单时间",dataIndex:"k"}],r=[],m=0;m<46;m++)r.push({key:m,a:"Edward King ".concat(m),b:32,c:"London, Park Lane no. ".concat(m),d:"Edward King ".concat(m),e:32,f:"London, Park Lane no. ".concat(m),g:"Edward King ".concat(m),orderStatus:32,i:"London, Park Lane no. ".concat(m),j:"Edward King ".concat(m),k:32});var u={data:function(){return{data:r,columns:d,selectedRowKeys:[],modalVisible:!1,drawerVisible:!1,selectItem:{},clickRow:{},tableLoading:!1}},components:{Tables:i["default"],Modal:n["default"],Drawer:o["default"],SearchForm:c["default"]},computed:{},methods:{solveformData:function(t){var e=this;this.tableLoading=!0,setTimeout((function(){e.tableLoading=!1}),2e3)},changeSelectedRowKeys:function(t){this.selectedRowKeys=t},clickRows:function(t){this.clickRow=t,this.drawerVisible=!0},handleChange:function(t){},operation:function(t){this.selectItem=t,this.modalVisible=!this.modalVisible}}},h=u,v=(a("c5bf"),a("2877")),f=Object(v["a"])(h,l,s,!1,null,"0f7628f0",null);e["default"]=f.exports},c5bf:function(t,e,a){"use strict";a("df9d")},df9d:function(t,e,a){}}]);