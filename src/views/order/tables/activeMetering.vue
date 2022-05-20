<template>
	<div class="warp">
		<div class="form">
			<a-form layout="inline" :form="form" @submit="handleSubmit">
				<!-- 工单编号 -->
				<a-form-item>
					<a-input v-decorator="['id', { rules: [{ message: '请输入工单编号' }] }]" placeholder="请输入工单编号">
					</a-input>
				</a-form-item>
				<!-- 台区名称 -->
				<a-form-item>
					<a-select v-decorator="[
              'taiquname',
              { rules: [{ message: '请选择台区名称' }] },
            ]" placeholder="请选择台区名称" :style="{ width: '200px' }">
						<a-select-option value="male"> male </a-select-option>
						<a-select-option value="female"> female </a-select-option>
					</a-select>
				</a-form-item>
				<!-- 工单状态 -->
				<a-form-item>
					<a-select v-decorator="['state', { rules: [{ message: '请选择工单状态' }] }]" placeholder="请选择工单状态"
						:style="{ width: '200px' }">
						<a-select-option value="male"> 完成 </a-select-option>
						<a-select-option value="female"> 未完成 </a-select-option>
					</a-select>
				</a-form-item>
				<!-- 用户名称 -->
				<a-form-item>
					<a-input v-decorator="[
              'username',
              { rules: [{ message: '请输入用户名称' }] },
            ]" placeholder="请输入用户名称">
					</a-input>
				</a-form-item>
				<!-- 开始时间 -->
				<a-form-item>
					<a-date-picker v-decorator="[
              'starttime',
              { rules: [{ message: '请输入开始时间' }] },
            ]" />
				</a-form-item>

				<!-- 结束时间 -->
				<a-form-item>
					<a-date-picker v-decorator="[
              'endtime',
              { rules: [{ message: '请输入结束时间' }] },
            ]" />
				</a-form-item>

				<a-form-item>
					<a-button type="primary" html-type="submit"> 查询 </a-button>
				</a-form-item>
				<a-form-item>
					<a-button type="primary" html-type="submit"> 导出 </a-button>
				</a-form-item>
			</a-form>
		</div>
		<Tables @changeSelectedRowKeys="changeSelectedRowKeys" @clickRow="clickRows" :columns="columns" :data="data"
			operationName="">
<!-- 			<template v-slot="slotProps">
				<a-button @click.stop="operation(slotProps.table_key)">转派</a-button>
			</template> -->
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
			title: "异常分类",
			dataIndex: "d",
		},
		{
			title: "异常地点",
			dataIndex: "e",
		},
		{
			title: "研判分析结果",
			dataIndex: "f",
		},
		{
			title: "缺陷序号",
			dataIndex: "g",
		},
		{
			title: "缺陷级别",
			dataIndex: "h",
		},
		{
			title: "缺陷位置",
			dataIndex: "l",
		},
		{
			title: "缺陷描述",
			dataIndex: "m",
		},
		{
			title: "工单周期",
			dataIndex: "i",
		},
		{
			title: "工单状态",
			dataIndex: "orderStatus",
			scopedSlots: {
				customRender: "orderStatus",
			},
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
			l:`i`,
			m:`rd King ${i}`
		});
	}

	export default {
		data() {
			return {
				form: this.$form.createForm(this, {
					name: "activeMetering",
				}),
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
		},
		computed: {},

		mounted() {
			this.$nextTick(() => {
				this.form.validateFields();
			});
		},
		methods: {
			changeSelectedRowKeys(e) {
				this.selectedRowKeys = e;
			},
			clickRows(e) {
				console.log(e);
				this.clickRow = e;
				this.drawerVisible = true;
			},
			handleSubmit(e) {
				e.preventDefault();
				this.form.validateFields((err, values) => {
					console.log(values);
					if (!err) {
						console.log("Received values of form: ", values);
					}
				});
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
