import Vue from 'vue'
import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import notification from 'ant-design-vue/es/notification'
import {
	ACCESS_TOKEN,
	INDEX_MAIN_PAGE_PATH,
	OAUTH2_LOGIN_PAGE_PATH
} from '@/store/mutation-types'
import {
	generateIndexRouter,
	isOAuth2AppEnv
} from '@/utils/util'

NProgress.configure({
	showSpinner: false
}) // NProgress Configuration

const whiteList = ['/user/login'] // no redirect whitelist
whiteList.push(OAUTH2_LOGIN_PAGE_PATH)

router.beforeEach((to, from, next) => {
	NProgress.start() // start progress bar
	console.log('router enter', to.path)
	if (to.path == "/user/login") {
		next()
	} else{
		
	}
	next()

})

router.afterEach(() => {
	NProgress.done() // finish progress bar
})
