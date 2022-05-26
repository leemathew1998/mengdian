<template>
  <div class="warp">
    <div class="wrap-left">
      <div class="left-top">
        <div class="box">
          <div class="head">
            <p class="title">河东河西供电服务中心</p>
            <p class="data">{{ systemTime }}</p>
            <p class="ranking">市公司当日排名</p>
			<p class="first">第{{}}名</p>
			<p class="link">日环比 {{}}</p>
			<div class="data">
				<p>{{}}</p>
				<a-date-picker style="width:60%;float:right" @change="onChange" />
			</div>
          </div>
        </div>
      </div>
      <div class="left-bottom">
        <div class="box">
          <a-input-search
            placeholder="
请输入供电服务中心名称"
            style="width: 100%"
            @search="onSearch"
          />
          <a-table
            :columns="columns"
            :data-source="data"
            size="small"
          ></a-table>
        </div>
      </div>
    </div>
    <div class="wrap-center">
      <div class="box">
        <div class="head">
          <p class="title">当日总积分：{{}}</p>
        </div>
        <Tables
          :columns="bigcolumns"
          :data="bigdata"
          operationName="派单"
          :tableLoading="tableLoading"
        >
          <template v-slot="slotProps">
            <a-button
              size="small"
              type="primary"
              @click.stop="operation(slotProps.table_key)"
              >查看详情</a-button
            >
          </template>
        </Tables>
      </div>
    </div>
    <div class="wrap-right">
      <div class="box">
        <div class="head">
          <p class="title" style="background: #fff">各所站积分</p>
        </div>
        <a-input-search
          placeholder="
请输入供电所名称"
          style="width: 100%"
          @search="onSearch"
        />
        <div class="show">
          <p>最高 {{}}</p>
          <p>最低 {{}}</p>
          <p>平均 {{}}</p>
        </div>
        <a-table
          :columns="centercolumns"
          :data-source="centerdata"
          size="small"
        ></a-table>
        <a-divider style="margin-top: 0;margin-bottom:10px" />
        <div class="foot">
          <p>累计完成工单： {{}}单</p>
          <p>最高完成： {{}}单</p>
          <p>最低完成： {{}}单</p>
          <p>平均完成： {{}}单</p>
        </div>
      </div>
    </div>
    <Modal
      :visible="modalVisible"
      modalName="派单"
      @changeModal="modalVisible = !modalVisible"
      :selectItem="selectItem"
    >
      <template slot="topSlot">
        <a-descriptions title="工单信息" bordered>
          <a-descriptions-item label="工单编号" :span="2">
            {{ selectItem.a }}
          </a-descriptions-item>
          <a-descriptions-item label="用户电话" :span="2">
            {{ selectItem.b }}
          </a-descriptions-item>
          <a-descriptions-item label="台区经理名称" :span="2">
            {{ selectItem.c }}
          </a-descriptions-item>
          <a-descriptions-item label="台区名称" :span="2">
            {{ selectItem.d }}
          </a-descriptions-item>
          <a-descriptions-item label="用户名称" :span="2">
            {{ selectItem.e }}
          </a-descriptions-item>
          <a-descriptions-item label="用户地址" :span="2">
            {{ selectItem.f }}
          </a-descriptions-item>
          <a-descriptions-item label="分析结果" :span="2">
            {{ selectItem.g }}
          </a-descriptions-item>
          <a-descriptions-item label="说明" :span="2">
            {{ selectItem.h }}
          </a-descriptions-item>
        </a-descriptions>
      </template>
      <template slot="mainSlot">
        <div class="title">派单信息</div>
        <div class="maincontent">
          <div style="margin-right: 20px">处理人员</div>
          <a-select
            default-value="lucy"
            style="width: 120px"
            @change="handleChange"
          >
            <a-select-option value="jack"> Jack </a-select-option>
            <a-select-option value="lucy"> Lucy </a-select-option>
            <a-select-option value="disabled"> Disabled </a-select-option>
            <a-select-option value="Yiminghe"> yiminghe </a-select-option>
          </a-select>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import Tables from "@/components/tables/Tabless";
import Modal from "@/components/modal/Modal";
const columns = [
  {
    title: "排名",
    dataIndex: "ranking",
  },
  {
    title: "名称",
    dataIndex: "name",
    ellipsis: true,
  },
  {
    title: "积分",
    dataIndex: "integral",
    ellipsis: true,
  },
];
const data = [];
for (let i = 0; i < 106; i++) {
  data.push({
    key: i,
    ranking: `${i}`,
    name: `张 ${i}`,
    integral: `${i}`,
  });
}
const bigcolumns = [
  {
    title: "指标项",
    dataIndex: "index",
  },
  {
    title: "原始值",
    dataIndex: "value",
    ellipsis: true,
  },
  {
    title: "积分",
    dataIndex: "integral",
    ellipsis: true,
  },
];
const bigdata = [];
for (let y = 0; y < 15; y++) {
  bigdata.push({
    key: y,
    index: `${y}`,
    value: `张 ${y}`,
    integral: `${y}`,
  });
}
const centercolumns = [
  {
    title: "排名",
    dataIndex: "ranking",
  },
  {
    title: "名称",
    dataIndex: "name",
    ellipsis: true,
  },
  {
    title: "积分",
    dataIndex: "integral",
    ellipsis: true,
  },
];
const centerdata = [];
for (let i = 0; i < 46; i++) {
  centerdata.push({
    key: i,
    ranking: `${i}`,
    name: `张 ${i}`,
    integral: `${i}`,
  });
}
export default {
  components: {
    Tables,
    Modal,
  },
  data() {
    return {
      data,
      columns,
      bigcolumns,
      bigdata,
      centercolumns,
      centerdata,
      modalVisible: false,
      selectItem: {},
      clickRow: {},
      tableLoading: false,
      systemTime: null,
    };
  },
  mounted() {
    this.addData();
  },
  methods: {
    //   获取当前时间
    addData() {
      this.systemTime = this.jsDateFormatter(new Date());
    },
    jsDateFormatter: function (date) {
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = date.getFullYear() + "-" + month + "-" + strDate;
      return currentdate;
    },
    // 搜索框
    onSearch(value) {
      console.log(value);
    },

    handleChange(value) {
      console.log(`selected ${value}`);
    },
	// 查看详情
    operation(key) {
      this.selectItem = key;
      this.modalVisible = !this.modalVisible;
    },
	// 日期
	 onChange(date, dateString) {
      console.log(date, dateString);
	//   let time = dateString.substring(5,7)
    },
  },
};
</script>



<style lang="less" scoped>
.warp {
  display: flex;
  width: 100%;
  .wrap-left {
    flex: 2;
    display: flex;
    flex-direction: column;
    .left-top {
      flex: 4;
    }
    .left-bottom {
      flex: 6;
    }
  }
  .wrap-center {
    flex: 5;
  }
  .wrap-right {
    flex: 3;
  }
}
.box {
  width: 98%;
  height: 99%;
  border: 1px #fff solid;
  box-shadow: 1px 1px 2px #888888;
  border-radius: 5px;
  padding: 2px;
}
.head {
  width: 100%;
  height: 40px;
  background-color: #f2f2f2;
  .title {
    line-height: 40px;
    font-size: 20px;
    color: #009688;
    margin: 0;
    text-align: center;
  }
}
.data {
  line-height: 40px;
  font-size: 20px;
  font-weight: 600;
  color: #999;
  margin-bottom: 5px;
}
.ranking {
  font-size: 14px;
  font-weight: 600;
  color: #999;
  margin-bottom: 5px;
}
.first{
	font-size: 30px;
	line-height: 60px;
	text-align: center;
	color: #009688;
	margin-bottom: 0;
}
.link{
	font-size: 12px;
	text-align: right;
	margin-bottom: 0;
}
.data{
	margin-top: 20px;
	width: 100%;
	p{
		width: 30%;
		line-height: 30px;
		float: left;
		margin-bottom: 0;
	}
}
.show {
  display: flex;
  justify-content: space-around;
  p {
    line-height: 40px;
    font-size: 20px;
    color: #999;
    margin-bottom: 0;
  }
}
.foot {
  p {
    line-height: 40px;
    font-size: 20px;
    color: #999;
  }
}
/deep/ .ant-table-tbody > tr > td {
  padding-top: 12px;
  padding-bottom: 12px;
}
/deep/ .ant-table-thead > tr > th {
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
