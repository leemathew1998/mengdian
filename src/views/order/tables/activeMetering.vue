<template>
  <div class="warp">
    <div class="form">
      <SearchForm></SearchForm>
    </div>
    <Tables
      @changeSelectedRowKeys="changeSelectedRowKeys"
      @clickRow="clickRows"
      :columns="columns"
      :data="data"
      operationName=""
    >
      <!-- 			<template v-slot="slotProps">
				<a-button @click.stop="operation(slotProps.table_key)">转派</a-button>
			</template> -->
    </Tables>
    <Modal
      :visible="modalVisible"
      @changeModal="modalVisible = !modalVisible"
      :selectItem="selectItem"
    >
      <template slot="topSlot">
        <div class="title">工单信息</div>
        <table border="1px">
          <tr>
            <th>工单编号</th>
            <th>{{ selectItem.a }}</th>
            <th>用户电话</th>
            <th>{{ selectItem.b }}</th>
          </tr>
          <tr>
            <th>台区经理名称</th>
            <th>{{ selectItem.c }}</th>
            <th>台区名称</th>
            <th>{{ selectItem.d }}</th>
          </tr>
          <tr>
            <th>用户名称</th>
            <th>{{ selectItem.e }}</th>
            <th>用户地址</th>
            <th>{{ selectItem.f }}</th>
          </tr>
          <tr>
            <th>分析结果</th>
            <th>{{ selectItem.g }}</th>
            <th>说明</th>
            <th>{{ selectItem.h }}</th>
          </tr>
        </table>
      </template>
      <template slot="mainSlot">
        <div class="title">派单信息</div>
        <div>处理人员</div>
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
      </template>
    </Modal>
    <Drawer
      :visible="drawerVisible"
      @changeDrawer="drawerVisible = !drawerVisible"
      :clickRow="clickRow"
      :columns="columns"
    />
  </div>
</template>

<script>
import Tables from "@/components/tables/Table";
import Modal from "@/components/modal/Modal";
import Drawer from "@/components/drawer/Drawer";
import SearchForm from "@/components/searchform/SearchForm";
const columns = [
  {
    title: "工单编号",
    dataIndex: "a",
    ellipsis: true,
    fixed: "left",
    width: 150,
  },
  {
    title: "台区名称",
    dataIndex: "b",
    ellipsis: true,
	width: 100,
  },
  {
    title: "台区经理",
    dataIndex: "c",
    ellipsis: true,
	width: 150,
  },
  {
    title: "异常分类",
    dataIndex: "d",
    ellipsis: true,
	width: 150,
  },
  {
    title: "异常地点",
    dataIndex: "e",
    ellipsis: true,
	width: 150,
  },
  {
    title: "研判分析结果",
    dataIndex: "f",
    ellipsis: true,
	width: 150,
  },
  {
    title: "缺陷序号",
    dataIndex: "g",
    ellipsis: true,
	width: 150,
  },
  {
    title: "缺陷级别",
    dataIndex: "h",
    ellipsis: true,
	width: 150,
  },
  {
    title: "缺陷位置",
    dataIndex: "l",
    ellipsis: true,
	width: 150,
  },
  {
    title: "缺陷描述",
    dataIndex: "m",
    ellipsis: true,
	width: 150,
  },
  {
    title: "工单周期",
    dataIndex: "i",
    ellipsis: true,
	width: 150,
  },
  {
    title: "工单状态",
    dataIndex: "orderStatus",
    scopedSlots: {
      customRender: "orderStatus",
    },
    ellipsis: true,
	width: 150,
  },
  {
    title: "处理人",
    dataIndex: "j",
    ellipsis: true,
	width: 150,
  },
  {
    title: "工单时间",
    dataIndex: "k",
    ellipsis: true,
	width: 150,
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    a: `Edward King ${i}`,
    b: 32,
    c: `London, Park Lane no. ${i}`,
    d: `Edward King ${i}`,
    e: 32,
    f: `London, Park Lane no. ${i}`,
    g: `Edward King ${i}`,
    orderStatus: 32,
    i: `London, Park Lane no. ${i}`,
    j: `Edward King ${i}`,
    k: 32,
    l: `i`,
    m: `rd King ${i}`,
  });
}

export default {
  data() {
    return {
      data,
      columns,
      selectedRowKeys: [],
      modalVisible: false,
      drawerVisible: false,
      selectItem: {},
      clickRow: {},
    };
  },
  components: {
    Tables,
    Modal,
    Drawer,
    SearchForm,
  },
  computed: {},

  methods: {
    changeSelectedRowKeys(e) {
      this.selectedRowKeys = e;
    },
    clickRows(e) {
      console.log(e);
      this.clickRow = e;
      this.drawerVisible = true;
    },

    handleChange(value) {
      console.log(`selected ${value}`);
    },
    operation(key) {
      this.selectItem = key;
      this.modalVisible = !this.modalVisible;
    },
  },
};
</script>

<style lang="less" scoped>
.warp {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

  .form {
    // width: 100%;
    margin: 10px 0;
	margin: 10px 0;
    display: flex;
    justify-content: space-around;
  }
}

.ant-form,
.ant-form-inline {
  display: flex;
  justify-content: space-between;
}
/deep/ .ant-table-tbody > tr > td {
  padding-top: 10px;
  padding-bottom: 10px;
}
/deep/ .ant-table-thead > tr > th {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
