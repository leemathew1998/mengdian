import {
	DfztLayout,
	UserLayout,
	TabLayout,
	RouteView,
	BlankLayout,
	PageView
} from '@/components/layouts'

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
				// name: 'order',
				redirect: '/order/collection',
				component: () => import('@/views/order/index'),
				hidden: true,
				children: [{
					path: 'collection',
					name: 'collection',
					component: () => import('@/views/order/tables/collection')
				}, {
					path: 'metering',
					name: 'metering',
					component: () => import('@/views/order/tables/metering')
				}, {
					path: 'lineloss',
					name: 'lineloss',
					component: () => import('@/views/order/tables/lineloss')
				}, {
					path: 'charge',
					name: 'charge',
					component: () => import('@/views/order/tables/charge')
				}, {
					path: 'recovery',
					name: 'recovery',
					component: () => import('@/views/order/tables/recovery')
				}, {
					path: 'copy',
					name: 'copy',
					component: () => import('@/views/order/tables/copy')
				}, {
					path: 'service',
					name: 'service',
					component: () => import('@/views/order/tables/service')
				}, {
					path: 'activeMetering',
					name: 'activeMetering',
					component: () => import('@/views/order/tables/activeMetering')
				}, {
					path: 'activeRepair',
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
	},
	{
		path: '/user',
		component: UserLayout,
		redirect: '/user/login',
		hidden: true,
		children: [{
				path: 'login',
				name: 'login',
				component: () => import( /* webpackChunkName: "user" */ '@/views/user/Login')
			},
			{
				path: 'register',
				name: 'register',
				component: () => import( /* webpackChunkName: "user" */ '@/views/user/register/Register')
			},
			{
				path: 'register-result',
				name: 'registerResult',
				component: () => import( /* webpackChunkName: "user" */ '@/views/user/register/RegisterResult')
			},
			{
				path: 'alteration',
				name: 'alteration',
				component: () => import( /* webpackChunkName: "user" */ '@/views/user/alteration/Alteration')
			}
		]
	},
]
