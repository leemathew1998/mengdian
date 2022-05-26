<template>
	<div class="warp">
		<a-table :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }" :columns="columns"
			:data-source="data" bordered @change="pagechange" :customRow="handleClickRow" :loading="tableLoading">
			<div slot="orderNumber" slot-scope="text, record" class="orderNumber">
				<a-icon type="bell" theme="filled" style="fontSize: 16px "
					:class="{alert:record.alert,hidden:!record.alert}" />
				{{text}}
			</div>
			<div slot="orderStatus" slot-scope="text, record" :class="{alert:record.alert,safe:record.safe}">{{text}}
			</div>
			<div slot="orderTimeConsuming" slot-scope="text, record" :class="{alert:record.alert}">{{text}}</div>
			<template slot="operation" slot-scope="text, record">
				<div>
					<slot :table_key="record"></slot>
				</div>
			</template>
		</a-table>

	</div>
</template>

<script>
	export default {
		name: 'Tables',
		props: {
			columns: {
				type: Array,
				required: true
			},
			data: {
				type: Array,
				required: true
			},
			operationName: {
				type: String,
				default: '',
			},
			tableLoading: {
				type: Boolean
			},
		},
		data() {
			return {
				selectedRowKeys: []
			}
		},
		created() {
			if (this.operationName !== '' && this.columns[this.columns.length - 1].dataIndex !== 'operation') {
				this.columns.push({
					title: '操作',
					dataIndex: 'operation',
					scopedSlots: {
						customRender: 'operation'
					},
				})
			}
			// console.log('created')
		},
		methods: {
			onSelectChange(selectedRowKeys) {
				this.selectedRowKeys = selectedRowKeys;
				this.$emit('changeSelectedRowKeys', this.selectedRowKeys)
			},
			pagechange(e) {},
			handleClickRow(record, index) {
				return {
					on: {
						click: () => {
							this.$emit('clickRow', record)
						}
					}
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.warp {
		width: 100%;

		.orderNumber {
			text-align: right;
		}

		.alert {
			color: red;
		}

		.safe {
			color: green;
		}

		.hidden {
			display: none;
		}
	}
</style>
