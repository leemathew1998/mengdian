<template>
	<a-layout-sider v-model="collapsed" :style="{ overflow: 'auto', position: 'fixed', left: 0 }" id="warp" width="80">
		<div class="logo_warp">
			<div class="logo" />
		</div>
		<a-menu theme="dark" mode="inline" :selectedKeys="selectedKeys" class="sider_menu" @click="changekeys">
			<a-menu-item key="/dashboard" v-show="roleControl['/dashboard']">
				<img src="@/assets/order.svg" alt="" class="svg" />
				<span>总览</span>
			</a-menu-item>
			<a-menu-item key="/order" v-show="roleControl['/order']">
				<img src="@/assets/order.svg" alt="" class="svg" />
				<span>业务工单</span>
			</a-menu-item>
			<a-menu-item key="/overhaul" v-show="roleControl['/overhaul']">
				<img src="@/assets/u30.svg" alt="" class="svg" />
				<span>检修管理</span>
			</a-menu-item>
			<a-menu-item key="/antitheft" v-show="roleControl['/antitheft']">
				<img src="@/assets/u30.svg" alt="" class="svg" />
				<span>反窃查违</span>
			</a-menu-item>
			<a-menu-item key="/extend" v-show="roleControl['/extend']">
				<img src="@/assets/u20.svg" alt="" class="svg" />
				<span>业扩报装</span>
			</a-menu-item>
			<a-menu-item key="/achievements" v-show="roleControl['/achievements']">
				<img src="@/assets/u142.svg" alt="" class="svg" />
				<span>绩效管理</span>
			</a-menu-item>
			<a-menu-item key="/collection" v-show="roleControl['/collection']">
				<img src="@/assets/u146.svg" alt="" class="svg" />
				<span>采集数据</span>
			</a-menu-item>
			<a-menu-item key="/basic" v-show="roleControl['/basic']">
				<img src="@/assets/u146.svg" alt="" class="svg" />
				<span>基础服务</span>
			</a-menu-item>
		</a-menu>
		<div class="logo_warp">
			<div class="filpLogo" />
		</div>
	</a-layout-sider>
</template>

<script>
	export default {
		data() {
			return {
				collapsed: false,
				selectedKeys: [],
				roleControl: {
					'/dashboard': false,
					'/order': false,
					'/overhaul': false,
					'/antitheft': false,
					'/extend': false,
					'/achievements': false,
					'/collection': false,
					'/basic': false,
				}
			};
		},
		created() {
			const role = this.$store.getters.role

			const nowRouter = this.$router.getRoutes()
			nowRouter.forEach((item) => {
				if (['/dashboard', '/order', '/overhaul', '/antitheft', '/extend',
						'/achievements', '/collection', '/basic'
					].indexOf(item.path) != -1) {

					if (item.meta.roles.includes(role)) {
						this.roleControl[item.path] = true

					} else {
						this.roleControl[item.path] = false

					}
				}
			})
		},
		mounted() {
			const path = this.$route.path.split('/')
			this.selectedKeys = ['/' + path[1]]
		},
		methods: {
			changekeys(e) {
				this.selectedKeys = [e.key]
				this.$router.push(e.key)
			},
		},
		computed: {

		}
	};
</script>

<style lang="less" scoped>
	#warp {
		background-color: #fff;
		width: 80px !important;

		.logo_warp {
			flex: 1;
			width: 75px;
			height: 75px;

			.logo {
				width: 75px;
				height: 75px;
				background-color: #010827;
				border-top-right-radius: 75px;
			}

			.filpLogo {
				width: 75px;
				height: 75px;
				background-color: #010827;
				border-bottom-right-radius: 75px;
			}
		}

		.sider_menu {
			// 侧边栏高度问题就在这里！！！
			height: calc(100vh - 150px);

			background-color: #010827;
			width: 75px;
			display: flex;
			flex-direction: column;

			.ant-menu-item {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: center;
				width: 75px;
			}

			.ant-menu-item-selected {
				background-color: #D7D7D7;
			}

			span {
				font-weight: 700;
				font-size: 16px;
				line-height: 25px;
			}

			.svg {
				width: 28px;
				height: 28px;
				// background-color: #fff;
				color: #fff;
			}
		}

		.ant-layout-sider-children {
			display: flex;
			flex-direction: column;
		}
	}
</style>
