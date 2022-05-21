<template>
	<div class="warp">
		<div class="form">
			<SearchForm></SearchForm>
		</div>
		<Tables @changeSelectedRowKeys="changeSelectedRowKeys" @clickRow="clickRows" :columns="columns" :data="data"
			operationName='派单'>

			<template v-slot="slotProps">
				<a-button @click.stop="operation(slotProps.table_key)">审核</a-button>
			</template>

		</Tables>
		<Modal :visible="modalVisible" modalName="审核" @changeModal="modalVisible = !modalVisible"
			:selectItem="selectItem" :modalRadioOptions="modalRadioOptions">
			<template slot="topSlot">
				<div class="title">工单信息</div>
				<div class="topcontent">
					<table border="1px solid #797979">
						<tr>
							<th class="name">工单编号</th>
							<th>{{ selectItem.a }}</th>
							<th class="name">用户电话</th>
							<th>{{ selectItem.b }}</th>
						</tr>
						<tr>
							<th class="name">台区经理名称</th>
							<th>{{ selectItem.c }}</th>
							<th class="name">台区名称</th>
							<th>{{ selectItem.d }}</th>
						</tr>
						<tr>
							<th class="name">用户名称</th>
							<th>{{ selectItem.e }}</th>
							<th class="name">用户地址</th>
							<th>{{ selectItem.f }}</th>
						</tr>
						<tr>
							<th class="name">分析结果</th>
							<th>{{ selectItem.g }}</th>
							<th class="name">说明</th>
							<th>{{ selectItem.h }}</th>
						</tr>
					</table>
				</div>
			</template>
			<template slot="mainSlot">
				<div class="title">现场情况</div>
				<div class="maincontent">
					<table border="1px solid #797979" style="width: 100%;">
						<tr>
							<td class="name">现场描述</td>
							<td>设备现场反向scdsmc d xscs于0</td>
							<td class="name">反向有功示值大于0的原因</td>
							<td>电梯表</td>
						</tr>
						<tr>
							<td class="name">现场处理状态</td>
							<td>已解决</td>
							<td class="name">处理时间</td>
							<td>2020-05-05 12:23:45</td>
						</tr>
						<tr>
							<td class="name">现场照片</td>
							<td colspan=3>
								<img src="@/assets/overview.svg" alt="" style="width: 50px;">
								<img src="@/assets/overview.svg" alt="" style="width: 50px;">
								<img src="@/assets/overview.svg" alt="" style="width: 50px;">
							</td>

						</tr>
					</table>
				</div>
			</template>
			<template slot="footerSlot">
				<div class="title"></div>
				<div class="footercontent">
					<a-radio-group :options="['通过', '不通过']" default-value="通过" @change="modalRadioChange" />
					<div v-if="modalRadioOptions == '不通过'">
						<div class="name">处理人员</div>
						<a-select default-value="lucy" style="width: 120px" @change="handleChange">
							<a-select-option value="jack"> Jack </a-select-option>
							<a-select-option value="lucy"> Lucy </a-select-option>
							<a-select-option value="disabled"> Disabled </a-select-option>
							<a-select-option value="Yiminghe"> yiminghe </a-select-option>
						</a-select>
					</div>
				</div>

			</template>
		</Modal>
		<Drawer :visible="drawerVisible" @changeDrawer="drawerVisible=!drawerVisible" :clickRow="clickRow"
			:columns="columns" />
	</div>

</template>

<script>
	import Tables from '@/components/tables/Tables'
	import Modal from '@/components/modal/Modal'
	import Drawer from '@/components/drawer/Drawer'
	import SearchForm from '@/components/searchform/SearchForm'
	const columns = [{
			title: '工单编号',
			dataIndex: 'a',
		},
		{
			title: '台区名称',
			dataIndex: 'b',
		},
		{
			title: '台区经理',
			dataIndex: 'c',
		},
		{
			title: '台区容量',
			dataIndex: 'd',
		},
		{
			title: '线损率',
			dataIndex: 'e',
		},
		{
			title: '事件类型',
			dataIndex: 'f',
		},
		{
			title: '工单周期',
			dataIndex: 'g',
		},
		{
			title: '工单状态',
			dataIndex: 'orderStatus',
			scopedSlots: {
				customRender: 'orderStatus'
			},
		},
		{
			title: '处理人',
			dataIndex: 'j',
		},
		{
			title: '工单时间',
			dataIndex: 'k',
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
				modalRadioOptions: '通过'
			};
		},
		components: {
			Tables,
			Modal,
			Drawer,
			SearchForm
		},
		computed: {

		},
		methods: {
			modalRadioChange(e) {
				this.modalRadioOptions = e.target.value
			},
			changeSelectedRowKeys(e) {
				this.selectedRowKeys = e
			},
			clickRows(e) {
				console.log(e)
				this.clickRow = e
				this.drawerVisible = true
			},
			handleChange(value) {
				console.log(`selected ${value}`);
			},
			operation(key) {
				this.selectItem = key
				this.modalVisible = !this.modalVisible
			}

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
