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
			title: "窃电通知书编号",
			dataIndex: "a",
		},
		{
			title: "客户编号",
			dataIndex: "b",
		},
		{
			title: "客户名称",
			dataIndex: "c",
		},
		{
			title: "违约用电行为",
			dataIndex: "d",
		},
		{
			title: "窃电现象",
			dataIndex: "e",
		},
		{
			title: "追捕电费",
			dataIndex: "f",
		},
		{
			title: "违约使用电费",
			dataIndex: "j",
		},
		{
			title: "应缴金额",
			dataIndex: "m",
		},
		{
			title: "检查人员",
			dataIndex: "i",
		},
		{
			title: "生成时间",
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
