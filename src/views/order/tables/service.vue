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
      operationName="审核"
    >
      <template v-slot="slotProps">
        <a-button @click.stop="operation(slotProps.table_key)">审核</a-button>
      </template>
    </Tables>
    <Modal
      :visible="modalVisible"
      @changeModal="modalVisible = !modalVisible"
      :selectItem="selectItem"
      :modalRadioOptions="modalRadioOptions"
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
        <a-descriptions title="现场情况" bordered>
          <a-descriptions-item label="现场描述" :span="2">
            设备现场反向
          </a-descriptions-item>
          <a-descriptions-item label="反向有功示值大于0的原因" :span="2">
            电梯表
          </a-descriptions-item>
          <a-descriptions-item label="现场处理状态" :span="2">
            已解决
          </a-descriptions-item>
          <a-descriptions-item label="处理时间" :span="2">
            2020-05-05 12:23:45
          </a-descriptions-item>
          <a-descriptions-item label="现场照片" :span="2">
            <img src="@/assets/overview.svg" alt="" style="width: 50px" />
            <img src="@/assets/overview.svg" alt="" style="width: 50px" />
            <img src="@/assets/overview.svg" alt="" style="width: 50px" />
          </a-descriptions-item>
        </a-descriptions>
      </template>
      <template slot="footerSlot">
        <div
          class="title"
          style="
            margin-bottom: 20px;
            margin-top: 10px;
            color: rgba(0, 0, 0, 0.85);
            font-weight: bold;
            font-size: 16px;
            line-height: 1.5;
          "
        >
          工单审核
        </div>
        <div class="footercontent">
          <a-radio-group
            :options="['通过', '不通过']"
            default-value="通过"
            @change="modalRadioChange"
          />
          <div v-if="modalRadioOptions == '不通过'" class="foot">
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
        </div>
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
    title: "工单来源",
    dataIndex: "alpa",
    ellipsis: true,
    width: 150,
  },
  {
    title: "工单编号",
    dataIndex: "a",
    ellipsis: true,
    width: 100,
  },
  {
    title: "台区名称",
    dataIndex: "b",
    ellipsis: true,
    width: 150,
  },
  {
    title: "台区经理",
    dataIndex: "c",
    ellipsis: true,
    width: 150,
  },
  {
    title: "用户名称",
    dataIndex: "d",
    ellipsis: true,
    width: 150,
  },
  {
    title: "用户地址",
    dataIndex: "e",
    ellipsis: true,
    width: 150,
  },
  {
    title: "用户电压",
    dataIndex: "f",
    ellipsis: true,
    width: 150,
  },
  {
    title: "业务类型",
    dataIndex: "g",
    ellipsis: true,
    width: 150,
  },
  {
    title: "业务子类型",
    dataIndex: "h",
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
    alpa: "96588",
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
      modalRadioOptions: "通过",
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
    modalRadioChange(e) {
      this.modalRadioOptions = e.target.value;
    },
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
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;

  .form {
    // width: 100%;
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
.foot {
  display: flex;
  align-items: center;
  margin-top: 20px;
}
</style>
