import Vue from 'vue'
import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {
	constantRouterMap,
	roleOne
} from '@/config/router.config'
NProgress.configure({
	showSpinner: false
})

const whiteList = ['/user/login'] // no redirect whitelist
store.commit('SET_ROLE', 'admin')
router.beforeEach((to, from, next) => {
	NProgress.start() // start progress bar

	console.log('router enter', to.path)
	if (to.path.includes(whiteList)) {
		next()
	} else {
		// if (!store.getters.token) {
		// console.log(store.getters.role)
		// 	console.log('该用户未登录，应该重定向到登录界面！')
		// 此处处理权限问题，当用户未登录时，应该redirect到/user/login，登录的同时确定好用户的权限，例如role:1；
		// 然后再login界面重新addrouter配置，等后端完成后此处代码应该放置在/user/login下！
		if (to.meta.roles.includes(store.getters.role)) {
			next()
		} else {
			next({
				path: "/404"
			}) //跳到404页面
		}
	}


})

router.afterEach(() => {
	NProgress.done() // finish progress bar
})
