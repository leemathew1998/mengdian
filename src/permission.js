import Vue from 'vue'
import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import notification from 'ant-design-vue/es/notification'
import { ACCESS_TOKEN, INDEX_MAIN_PAGE_PATH, OAUTH2_LOGIN_PAGE_PATH } from '@/store/mutation-types'
import { generateIndexRouter, isOAuth2AppEnv } from '@/utils/util'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/user/login','/dashboard', '/user/register', '/user/register-result', '/user/alteration'] // no redirect whitelist
whiteList.push(OAUTH2_LOGIN_PAGE_PATH)

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
// Vue.ls.set(ACCESS_TOKEN,'aa')
 console.log('router enter',to.path)
 next()
 
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
