import {
	DfztLayout
} from '@/components/layouts'
/**
 * 走菜单，走权限控制
 * @type {[null,null]}
 */
export const asyncRouterMap = [
	// {
	//   path: '/',
	//   name: 'dashboard',
	//   component: TabLayout,
	//   meta: {
	//     title: '首页'
	//   },
	//   redirect: '/dashboard/analysis',
	//   children: []
	// },
	// {
	//   path: '*',
	//   redirect: '/404',
	//   hidden: true
	// }
]

/**
 * 基础路由
 * @type { *[] }
 */

export const constantRouterMap = [{
	path: '/',
	name: 'layout',
	component: DfztLayout,
	redirect: '/dashboard',
	children: [{
			path: '/dashboard',
			name: 'dashboard',
			component: () => import('@/views/dashboard/index')
		},
		{
			path: '/test',
			name: 'test',
			component: () => import('@/views/test')
		},
		{
			path: '/order',
			name: 'order',
			redirect: '/order/collection',
			component: () => import('@/views/order/index'),
			children: [{
				path: '/order/collection',
				name: 'collection',
				component: () => import('@/views/order/tables/collection')
			}, {
				path: '/order/metering',
				name: 'metering',
				component: () => import('@/views/order/tables/metering')
			}, {
				path: '/order/lineloss',
				name: 'lineloss',
				component: () => import('@/views/order/tables/lineloss')
			}, {
				path: '/order/charge',
				name: 'charge',
				component: () => import('@/views/order/tables/charge')
			}, {
				path: '/order/recovery',
				name: 'recovery',
				component: () => import('@/views/order/tables/recovery')
			}, {
				path: '/order/copy',
				name: 'copy',
				component: () => import('@/views/order/tables/copy')
			}, {
				path: '/order/service',
				name: 'service',
				component: () => import('@/views/order/tables/service')
			}, {
				path: '/order/activeMetering',
				name: 'activeMetering',
				component: () => import('@/views/order/tables/activeMetering')
			}, {
				path: '/order/activeRepair',
				name: 'activeRepair',
				component: () => import('@/views/order/tables/activeRepair')
			}, ]
		}, {
			path: '/overhaul',
			name: 'overhaul',
			component: () => import('@/views/overhaul/index')
		}, {
			path: '/antitheft',
			name: 'antitheft',
			component: () => import('@/views/antitheft/index')
		}, , {
			path: '/extend',
			name: 'extend',
			component: () => import('@/views/extend/index')
		}, {
			path: '/achievements',
			name: 'achievements',
			component: () => import('@/views/achievements/index')
		}, , {
			path: '/collection',
			name: 'collection',
			component: () => import('@/views/collection/index')
		}, {
			path: '/basic',
			name: 'basic',
			component: () => import('@/views/basic/index')
		}
	]
}, {
	path: '*',
	redirect: '/404',
	hidden: true
}]
