<template>
	<div class="warp">
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
			<a-form-item style="margin-right: 0;">
				<a-date-picker v-decorator="[
		  'starttime',
		]" placeholder="请输入开始时间" />
			</a-form-item>
			<span style="font-weight: 700;">~</span>
			<!-- 结束时间 -->
			<a-form-item>
				<a-date-picker v-decorator="[
		  'endtime',
		]" placeholder="请输入结束时间" />
			</a-form-item>

			<a-form-item>
				<a-button type="primary" html-type="submit">查询</a-button>
			</a-form-item>
			<slot name="import"></slot>
			<a-form-item>
				<a-button @click="exportExcel"> 导出 </a-button>
			</a-form-item>
		</a-form>
	</div>
</template>

<script>
	var XLSX = require('xlsx');
	export default {
		data() {
			return {
				form: this.$form.createForm(this, {
					name: "searchform",
				}),
				tableData: [
					['表', '头', '数', '据'],
					[1, 2, 3, 4]
				]
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.form.validateFields();
			});
		},
		methods: {
			handleSubmit(e) {
				e.preventDefault();

				this.form.validateFields((err, values) => {
					// console.log(values);
					this.$emit('formData', values)
					// if (!err) {
					// 	console.log("Received values of form: ", values);
					// }
				});
			},
			exportExcel() {
				var that = this
				var titleArr = Object.keys(that.tableData[0]);

				let tableData = [
					titleArr,
				] // 表格表头
				this.tableData.forEach(item => {
					let rowData = []
					titleArr.map((key, index) => {
						rowData.push(item[key])
					})
					tableData.push(rowData)
				})
				console.log(this.tableData)
				let ws = XLSX.utils.aoa_to_sheet(tableData)
				let wb = XLSX.utils.book_new()
				XLSX.utils.book_append_sheet(wb, ws, '数据') // 工作簿名称
				XLSX.writeFile(wb, '数据.xlsx') // 保存的文件名
			}
		}
	}
</script>

<style lang="less" scoped>
	.ant-form,
	.ant-form-inline {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
