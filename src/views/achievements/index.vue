<template>
	<div class="warp">
		<div class="form">
			<SearchForm></SearchForm>
		</div>
		<div class="table">
			<Tables @changeSelectedRowKeys="changeSelectedRowKeys" @clickRow="clickRows" :columns="columns" :data="data"
				operationName="" :scroll="{x:2000}">
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
			title: "台区经理",
			dataIndex: "a",
		},
		{
			title: "月份",
			dataIndex: "b",
		},
		{
			title: "总分",
			dataIndex: "c",
		},
		{
			title: "采集成功率/得分10",
			dataIndex: "d",
		},
		{
			title: "采集失败处理及时率/得分5",
			dataIndex: "e",
		},
		{
			title: "计量异常处理及时率/得分5",
			dataIndex: "f",
		},
		{
			title: "低压线损率/得分10",
			dataIndex: "k",
		},
		{
			title: "线损合格率/得分5",
			dataIndex: "d",
		},
		{
			title: "高负损台区处理及时率/得分5",
			dataIndex: "e",
		},
		{
			title: "现场复电处理及时率/得分5",
			dataIndex: "f",
		},
		{
			title: "电费结零日/得分5",
			dataIndex: "k",
		},
		{
			title: "发行中止户数/得分5",
			dataIndex: "d",
		},
		{
			title: "投诉工单个数/得分10",
			dataIndex: "e",
		},
		{
			title: "意见工单个数/得分5",
			dataIndex: "f",
		},
		{
			title: "意见工单回复合格率/得分5",
			dataIndex: "k",
		},
		{
			title: "异常台区治理/得分8",
			dataIndex: "e",
		},
		{
			title: "运维、抢修工单到达现场时限/得分10",
			dataIndex: "f",
		},
		{
			title: "缺陷治理率/得分7",
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
