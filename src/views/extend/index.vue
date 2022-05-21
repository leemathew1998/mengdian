<template>
	<div class="warp">

		<div class="form">
			<SearchForm></SearchForm>
		</div>
		<div class="table">
			<Tables @changeSelectedRowKeys="changeSelectedRowKeys" @clickRow="clickRows" :columns="columns" :data="data"
				operationName="">
				<!-- 			<template v-slot="slotProps">
					<a-button @click.stop="operation(slotProps.table_key)">转派</a-button>
				</template> -->
			</Tables>
		</div>
		<div class="drawer">
			<Drawer :visible="drawerVisible" @changeDrawer="drawerVisible = !drawerVisible" :clickRow="clickRow"
				:columns="columns" />
		</div>
	</div>
</template>

<script>
	import SearchForm from '@/components/searchform/SearchForm'
	import Tables from "@/components/tables/Tables";
	import Drawer from "@/components/drawer/Drawer";
	const columns = [{
			title: "工单方案编号",
			dataIndex: "a",
		},
		{
			title: "是否新增计量箱",
			dataIndex: "b",
		},
		{
			title: "计量箱坐标",
			dataIndex: "c",
		},
		{
			title: "线路名称",
			dataIndex: "d",
		},
		{
			title: "变压器名称",
			dataIndex: "e",
		},
		{
			title: "台区编号",
			dataIndex: "f",
		},
		{
			title: "用户名称",
			dataIndex: "k",
		},
		
		{
			title: "用户地址",
			dataIndex: "f",
		},
		{
			title: "用户电话",
			dataIndex: "k",
		},
		{
			title: "接线方式描述",
			dataIndex: "f",
		},
		{
			title: "计量方式",
			dataIndex: "k",
		},
		{
			title: "互感器变比",
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
			l: `i`,
			m: `rd King ${i}`
		});
	}
	export default {
		data() {
			return {
				data,
				columns,
				selectedRowKeys: [],
				drawerVisible: false,
				selectItem: {},
				clickRow: {},
			};
		},
		components: {
			Tables,
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
		},
	};
</script>

<style lang="less" scoped>
	.warp {
		display: flex;
		flex-direction: column;

		.form {
			// width: 90%;
			margin: 10px 0;
		}
	}
</style>
