<template>
	<div class="warp">
		<div class="form">
			<SearchForm @formData="solveformData">
				<template slot="import">
					<a-upload name="file" :multiple="true" action="http://10.168.4.233:8888/excel/upload"
						:headers="headers" @change="fileHandleChange">
						<a-button>
							<a-icon type="upload" /> 上传
						</a-button>
					</a-upload>
				</template>
			</SearchForm>
		</div>
		<Tables @changeSelectedRowKeys="changeSelectedRowKeys" @clickRow="clickRows" :columns="columns" :data="data"
			operationName="派单" :tableLoading="tableLoading">
			<template v-slot="slotProps">
				<a-button size="small" @click.stop="operation(slotProps.table_key)">派单</a-button>
			</template>
		</Tables>
		<Modal :visible="modalVisible" modalName="派单" @changeModal="modalVisible = !modalVisible"
			:selectItem="selectItem">
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
					<a-select default-value="lucy" style="width: 120px" @change="handleChange">
						<a-select-option value="jack"> Jack </a-select-option>
						<a-select-option value="lucy"> Lucy </a-select-option>
						<a-select-option value="disabled"> Disabled </a-select-option>
						<a-select-option value="Yiminghe"> yiminghe </a-select-option>
					</a-select>
				</div>
			</template>
		</Modal>
		<Drawer :visible="drawerVisible" @changeDrawer="drawerVisible = !drawerVisible" :clickRow="clickRow"
			:columns="columns" />
	</div>
</template>

<script>
	import Tables from "@/components/tables/Tables";
	import Modal from "@/components/modal/Modal";
	import Drawer from "@/components/drawer/Drawer";
	import SearchForm from "@/components/searchform/SearchForm";
	const columns = [{
			title: "工单编号",
			dataIndex: "a",
			ellipsis: true,
		},
		{
			title: "台区名称",
			dataIndex: "b",
			ellipsis: true,
		},
		{
			title: "台区经理",
			dataIndex: "c",
			ellipsis: true,
		},
		{
			title: "用户名称",
			dataIndex: "d",
			ellipsis: true,
		},
		{
			title: "用户地址",
			dataIndex: "e",
			ellipsis: true,
		},
		{
			title: "事件类型",
			dataIndex: "f",
			ellipsis: true,
		},
		{
			title: "原因研判",
			dataIndex: "g",
			ellipsis: true,
		},
		{
			title: "工单状态",
			dataIndex: "orderStatus",
			scopedSlots: {
				customRender: "orderStatus",
			},
			ellipsis: true,
		},
		{
			title: "工单周期",
			dataIndex: "i",
			ellipsis: true,
		},
		{
			title: "处理人",
			dataIndex: "j",
			ellipsis: true,
		},
		{
			title: "工单时间",
			dataIndex: "k",
			ellipsis: true,
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
		});
	}

	export default {
		data() {
			return {
				data,
				columns,
				selectedRowKeys: [], // Check here to configure the default column
				modalVisible: false,
				drawerVisible: false,
				selectItem: {},
				clickRow: {},
				tableLoading: false,
				headers: {
					authorization: "authorization-text",
				},
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
			fileHandleChange(info) {
				this.solveformData()
				if (info.file.status !== "uploading") {
					console.log(info.file, info.fileList);
				}
				if (info.file.status === "done") {
					this.$message.success(`${info.file.name} 上传成功`);
				} else if (info.file.status === "error") {
					this.$message.error(`${info.file.name} 上传失败`);
				}
			},
			solveformData(e) {
				console.log(e);
				this.tableLoading = true;
				setTimeout(() => {
					this.tableLoading = false;
				}, 2000);
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
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.form {
			// width: 90%;
			margin: 10px 0;
		}
	}

	.title {
		margin: 14px 0 20px 0;
		color: rgba(0, 0, 0, 0.85);
		font-weight: bold;
		font-size: 16px;
		line-height: 1.5;
	}



	// /deep/ .ant-table-tbody > tr > td {
	//   padding-top: 10px;
	//   padding-bottom: 10px;
	// }
	// /deep/ .ant-table-thead > tr > th {
	//   padding-top: 10px;
	//   padding-bottom: 10px;
	// }
</style>
