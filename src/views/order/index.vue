<template>
	<div class="warp">
		<div class="header">
			<span class="title">工单类型</span>
			<table id="table" border="1px">
				<tr id='table_tr'>
					<th class='table_th collection' @click="changePages('/order/collection')">采集运维</th>
					<th class='table_th metering' @click="changePages('/order/metering')">计量运维</th>
					<th class='table_th lineloss' @click="changePages('/order/lineloss')">线损治理</th>
					<th class='table_th charge' @click="changePages('/order/charge')">费控复电</th>
					<th class='table_th recovery' @click="changePages('/order/recovery')">电费回收</th>
					<th class='table_th copy' @click="changePages('/order/copy')">电费补抄</th>
					<th class='table_th service' @click="changePages('/order/service')">优质服务</th>
					<th class='table_th activeMetering' @click="changePages('/order/activeMetering')">主动运维</th>
					<th class='table_th activeRepair' @click="changePages('/order/activeRepair')">主动抢修</th>
				</tr>
			</table>
		</div>
		<router-view></router-view>
	</div>

</template>

<script>
	export default {
		mounted() {
			document.getElementsByClassName(this.$route.name)[0].classList.add('active')
			document.getElementById("table").addEventListener('click', function(e) {
				var arr = document.getElementsByClassName("table_th");
				for (var i = 0; i < 9; i++) {
					arr[i].classList.remove("active");
				}
				e.target.classList.add('active')
			}, false);
		},

		methods: {
			changePages(path) {
				this.$router.push(path)
			},

		},
		unmounted() {
			document.getElementById("table").removeEventListener('click', function() {})
		}
	}
</script>

<style lang="less" scoped>
	.warp {
		display: flex;
		flex-direction: column;

		.header {
			display: flex;
			justify-content: space-around;
			align-items: center;

			.title {
				font-weight: 700;
			}

			#table {
				width: 80%;
			}

			.active {
				background-color: #149BD5;
				color: #fff
			}
		}
	}


	table,
	th {
		border: 1px solid black;
		width: 137px;
		height: 40px;
		text-align: center;
		vertical-align: middle;

		&:hover {
			cursor: pointer
		}
	}
</style>
