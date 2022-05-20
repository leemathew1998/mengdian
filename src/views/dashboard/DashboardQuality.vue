<template>
	<div class="warp">
		<div class="header">
			<div class="left">
				<a-select default-value="lucy" style="width: 120px" @change="handleChange">
					<a-select-option value="jack">
						Jack
					</a-select-option>
					<a-select-option value="lucy">
						光明供电营业站
					</a-select-option>
					<a-select-option value="disabled" disabled>
						Disabled
					</a-select-option>
					<a-select-option value="Yiminghe">
						yiminghe
					</a-select-option>
				</a-select>
				<a-select default-value="lucy" style="width: 120px" disabled>
					<a-select-option value="lucy">
						选择全部业务类型
					</a-select-option>
				</a-select>
				<a-select default-value="lucy" style="width: 120px" loading>
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
		<Charts :legendData="['服务申请', '意见','故障报修','校核工单','95598客户催办']"
			:xAxisData="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']" :yAxismin="0" :yAxismax="50"
			:seriesData="seriesData" id="chart">
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
				seriesData: [
					[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 12.2, 32.6, 20.0, 6.4, 3.3],
					[2.6, 5.9, 9.0, 26.4, 28.7, 7.7, 15.6, 18.2, 48.7, 18.8, 6.0, 2.3]
				]
			};
		},
		components: {
			Charts
		},
		mounted() {
			this.eachOfWeek()
		},
		methods: {
			moment,
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
				let i = 0
				console.log(start.weekday(i).format('MM/DD'))
				const res = []
				while (start.isBefore(moment(), 'days')) {
					// console.log(startDate.format('MM/DD'), endDate.format('MM/DD'))
					res.push([start.weekday(i).format('MM/DD'), start.weekday(i + 7).format('MM/DD')])
					// break
					i = i + 7
					console.log(res)
				}
				// console.log(res)
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
