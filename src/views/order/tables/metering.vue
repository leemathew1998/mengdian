<template>
	<div class="warp">
		<div class="form">
			<SearchForm />
		</div>
		<Tables @changeSelectedRowKeys="changeSelectedRowKeys" @clickRow="clickRows" :columns="columns" :data="data"
			operationName="派单">
			<template v-slot="slotProps">
				<a-button @click.stop="operation(slotProps.table_key)">转派</a-button>
			</template>
		</Tables>
		<Modal :visible="modalVisible" @changeModal="modalVisible = !modalVisible" :selectItem="selectItem">
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
				<a-select default-value="lucy" style="width: 120px" @change="handleChange">
					<a-select-option value="jack"> Jack </a-select-option>
					<a-select-option value="lucy"> Lucy </a-select-option>
					<a-select-option value="disabled"> Disabled </a-select-option>
					<a-select-option value="Yiminghe"> yiminghe </a-select-option>
				</a-select>
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
	import SearchForm from '@/components/searchform/SearchForm'
	const columns = [{
			title: "工单编号",
			dataIndex: "a",
		},
		{
			title: "台区名称",
			dataIndex: "b",
		},
		{
			title: "台区经理",
			dataIndex: "c",
		},
		{
			title: "用户名称",
			dataIndex: "d",
		},
		{
			title: "用户地址",
			dataIndex: "e",
		},
		{
			title: "事件类型",
			dataIndex: "f",
		},
		{
			title: "工单状态",
			dataIndex: "orderStatus",
			scopedSlots: {
				customRender: "orderStatus",
			},
		},
		{
			title: "工单周期",
			dataIndex: "i",
		},
		{
			title: "处理人",
			dataIndex: "j",
		},
		{
			title: "工单时间",
			dataIndex: "k",
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
			};
		},
		components: {
			Tables,
			Modal,
			Drawer,
			SearchForm
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
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.form {
			// width: 100%;
			margin: 10px 0;
		}

	}

	.ant-form,
	.ant-form-inline {
		display: flex;
		justify-content: space-between;
	}
</style>
