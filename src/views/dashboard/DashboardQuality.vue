<template>
	<div class="warp">
		<div class="header">
			<div class="left">
				<a-select default-value="lucy" @change="handleChange">
					<a-select-option value="jack">
						Jack
					</a-select-option>
					<a-select-option value="lucy">
						光明供电营业站
					</a-select-option>
					<a-select-option value="disabled">
						Disabled
					</a-select-option>
					<a-select-option value="Yiminghe">
						yiminghe
					</a-select-option>
				</a-select>
				<a-select default-value="all" @change="legendChange">
					<a-select-option value="all">
						选择全部业务类型
					</a-select-option>
					<a-select-option value="服务申请">
						服务申请
					</a-select-option>
					<a-select-option value="意见">
						意见
					</a-select-option>
					<a-select-option value="故障报修">
						故障报修
					</a-select-option>
					<a-select-option value="校核工单">
						校核工单
					</a-select-option>
					<a-select-option value="95598客户催办">
						95598客户催办
					</a-select-option>
				</a-select>
				<a-select default-value="lucy">
					<a-select-option value="lucy">
						选择全部业务子类型
					</a-select-option>
				</a-select>
			</div>
			<div class="right">
				<a-button @click="latelyOneWeek">周</a-button>
				<a-button @click="thismonth">月</a-button>
				<a-button @click="thisyear">年</a-button>

				<a-range-picker v-model:value="defaultValue" format="YYYY/MM/DD" />
			</div>
		</div>
		<Charts :legendData="legend" :xAxisData="xAxis" :yAxismin="0" :yAxismax="50" :seriesData="seriesData"
			id="chart">
			<template>
				<div id='chart'></div>
			</template>
		</Charts>
	</div>

</template>

<script>
	import moment from 'moment';
	import Charts from '@/components/charts/Charts'
	export default {
		name: 'DashboardQuality',
		data() {
			return {
				defaultValue: [],
				legend: ['服务申请', '意见', '故障报修', '校核工单', '95598客户催办'],
				xAxis: [],
				seriesData: [
					[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 12.2, 32.6, 20.0, 6.4, 3.3],
					[2.6, 5.9, 9.0, 26.4, 28.7, 7.7, 15.6, 18.2, 48.7, 18.8, 6.0, 2.3],
					[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 12.2, 32.6, 20.0, 6.4, 3.3],
					[2.6, 5.9, 9.0, 26.4, 28.7, 7.7, 15.6, 18.2, 48.7, 18.8, 6.0, 2.3],
					[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 12.2, 32.6, 20.0, 6.4, 3.3],
				]
			};
		},
		components: {
			Charts
		},
		created() {
			this.xAxis = this.eachOfMonth()
		},
		methods: {
			moment,
			legendChange(e) {
				if (e === 'all') {
					this.legend = ['服务申请', '意见', '故障报修', '校核工单', '95598客户催办']
				} else {
					this.legend = [e]
				}
				console.log(this.legend)
			},
			handleChange(value) {
				console.log(`selected ${value}`);
			},
			latelyOneWeek() {
				this.defaultValue = [moment(moment().add(-6, 'days').format('YYYY/MM/DD'), "YYYY/MM/DD"), moment(moment()
					.format(
						'YYYY/MM/DD'), "YYYY/MM/DD")]
			},
			thismonth() {
				this.defaultValue = [moment(moment().startOf('month').format('YYYY/MM/DD'), "YYYY/MM/DD"), moment(moment()
					.format('YYYY/MM/DD'), "YYYY/MM/DD")]
			},
			thisyear() {
				this.defaultValue = [moment(moment().startOf('year').format('YYYY/MM/DD'), "YYYY/MM/DD"), moment(moment()
					.format('YYYY/MM/DD'), "YYYY/MM/DD")]
			},
			eachOfMonth() {
				// 从今年开始的每个月
				let start = moment().startOf('year')
				const res = []
				while (start.isBefore(moment(), 'month')) {
					res.push(start.format('M') + '月')
					start = start.add(1, 'month')
				}
				res.push(moment().format('M') + '月')
				return res
			},
			eachOfWeek() {
				// 从本月开始的每个周
				let start = moment().startOf('month')
				let end
				const res = []
				while (start.isBefore(moment())) {
					end = start
					res.push(`${start.weekday(0).format('MM月DD日')}至${end.weekday(7).isBefore(moment()) ? start
						.format('MM月DD日') : '今'}`)
				}
				return res
			},
		},
	};
</script>

<style lang="less" scoped>
	.warp {
		display: flex;
		flex-direction: column;
		padding: 10px;

		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		#chart,
		#main {
			width: 100%;
			height: 400px;
		}
	}
</style>
