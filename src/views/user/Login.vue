<template>
	<div class="main">
		<a-form-model class="user-layout-login" @keyup.enter.native="handleSubmit">
			<login-account ref="alogin" @validateFail="validateFail" @success="requestSuccess" @fail="requestFailed">
			</login-account>

			<a-form-item style="margin-top: 24px">
				<a-button size="large" type="primary" htmlType="submit" class="login-button" :loading="loginBtn"
					@click.stop.prevent="handleSubmit" :disabled="loginBtn">确定
				</a-button>
			</a-form-item>
		</a-form-model>

		<!-- <two-step-captcha v-if="requiredTwoStepCaptcha" :visible="stepCaptchaVisible" @success="stepCaptchaSuccess" @cancel="stepCaptchaCancel"></two-step-captcha> -->
		<login-select-tenant ref="loginSelect" @success="loginSelectOk"></login-select-tenant>
	</div>
</template>

<script>
	import Vue from 'vue'
	import {
		ACCESS_TOKEN
	} from '@/store/mutation-types'
	import {
		timeFix
	} from '@/utils/util'
	import LoginAccount from './LoginAccount'
	import LoginSelectTenant from './LoginSelectTenant'
	// import TwoStepCaptcha from '@/components/tools/TwoStepCaptcha'

	export default {
		name: 'LoginUser',
		components: {
			LoginAccount,
			LoginSelectTenant,
		},
		data() {
			return {
				loginBtn: false,
				rememberMe: false,
				// rememberMe: true,
				// requiredTwoStepCaptcha: false,
				// stepCaptchaVisible: false,
			}
		},
		created() {
			Vue.ls.remove(ACCESS_TOKEN)
			this.getRouterData()
			this.rememberMe = false
		},
		methods: {
			/** 跳转到登录页面的参数-账号获取 */
			getRouterData() {
				this.$nextTick(() => {
					let temp = this.$route.params.username || this.$route.query.username || ''
					if (temp) {
						this.$refs.alogin.acceptUsername(temp)
					}
				})
			},

			// 登录
			handleSubmit() {
				this.loginBtn = true
				this.$refs.alogin.handleLogin(this.rememberMe)
			},

			// 校验失败
			validateFail() {
				this.loginBtn = false
			},
			// 登录后台失败
			requestFailed(err) {
				let description = ((err.response || {}).data || {}).message || err.message || '请求出现错误，请稍后再试'
				this.$notification['error']({
					message: '登录失败',
					description: description,
					duration: 4,
				})
				// 账户密码登录错误后更新验证码
				if (description.indexOf('密码错误') > 0) {
					this.$refs.alogin.handleChangeCheckCode()
				}
				this.loginBtn = false
			},
			// 登录后台成功
			requestSuccess(loginResult) {
				this.$refs.loginSelect.show(loginResult)
			},

			loginSelectOk() {
				this.loginSuccess()
			},

			// 登录成功
			loginSuccess() {
				this.$router.push({
					path: '/dashboard/analysis'
				}).catch(() => {
					console.log('登录跳转首页出错,这个错误从哪里来的')
				})
				this.$notification.success({
					message: '欢迎',
					description: `${timeFix()}，欢迎回来`,
				})
			},

			// handleRememberMeChange(e) {
			//   this.rememberMe = e.target.checked
			// },
			// stepCaptchaSuccess () {
			//   this.loginSuccess()
			// },
			// stepCaptchaCancel () {
			//   this.Logout().then(() => {
			//     this.loginBtn = false
			//     this.stepCaptchaVisible = false
			//   })
			// },
		},
	}
</script>
<style lang="less" scoped>
	.user-layout-login {
		label {
			font-size: 14px;
		}

		// .forge-password {
		//   font-size: 14px;
		// }

		button.login-button {
			padding: 0 15px;
			font-size: 16px;
			height: 40px;
			width: 100%;
		}
	}
</style>
<style>
	.valid-error .ant-select-selection__placeholder {
		color: #f5222d;
	}
</style>
