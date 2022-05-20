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
</template>

<script>
	export default {
		data() {
			return {
				form: this.$form.createForm(this, {
					name: "collection",
				}),
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
					console.log(values);
					if (!err) {
						console.log("Received values of form: ", values);
					}
				});
			},
		}
	}
</script>

<style lang="less" scoped>
	.ant-form,
	.ant-form-inline {
		display: flex;
		justify-content: space-between;
	}
</style>
