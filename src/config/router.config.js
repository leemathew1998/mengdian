import {
	DfztLayout,
	UserLayout,
	TabLayout,
	RouteView,
	BlankLayout,
	PageView
} from '@/components/layouts'

/**
 * 
 管理员路由
 */

export const roleOne = [{
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
}]

/**
 * 基础路由
 * @type { *[] }
 */

export const constantRouterMap = [{
		path: '/',
		name: 'layout',
		component: DfztLayout,
		meta: {
			roles: ['admin']
		},
		redirect: '/dashboard',
		children: [{
				path: '/dashboard',
				name: 'dashboard',
				component: () => import('@/views/dashboard/index'),
				meta: {
					roles: ['admin']
				},
			},
			{
				path: '/order',
				name: 'order',
				meta: {
					roles: ['admin']
				},
				redirect: '/order/collection',
				component: () => import('@/views/order/index'),
				hidden: true,
				children: [{
					path: 'collection',
					name: 'collection',
					meta: {
						roles: ['admin']
					},
					component: () => import('@/views/order/tables/collection')
				}, {
					path: 'metering',
					name: 'metering',
					meta: {
						roles: ['admin']
					},
					component: () => import('@/views/order/tables/metering')
				}, {
					path: 'lineloss',
					name: 'lineloss',
					meta: {
						roles: ['admin']
					},
					component: () => import('@/views/order/tables/lineloss')
				}, {
					path: 'charge',
					name: 'charge',
					meta: {
						roles: ['admin']
					},
					component: () => import('@/views/order/tables/charge')
				}, {
					path: 'recovery',
					name: 'recovery',
					meta: {
						roles: ['admin']
					},
					component: () => import('@/views/order/tables/recovery')
				}, {
					path: 'copy',
					name: 'copy',
					meta: {
						roles: ['admin']
					},
					component: () => import('@/views/order/tables/copy')
				}, {
					path: 'service',
					name: 'service',
					meta: {
						roles: ['admin']
					},
					component: () => import('@/views/order/tables/service')
				}, {
					path: 'activeMetering',
					name: 'activeMetering',
					meta: {
						roles: ['admin']
					},
					component: () => import('@/views/order/tables/activeMetering')
				}, {
					path: 'activeRepair',
					name: 'activeRepair',
					meta: {
						roles: ['admin']
					},
					component: () => import('@/views/order/tables/activeRepair')
				}, ]
			},
			{
				path: '/overhaul',
				name: 'overhaul',
				meta: {
					roles: ['admin']
				},
				component: () => import('@/views/overhaul/index')
			}, {
				path: '/antitheft',
				name: 'antitheft',
				meta: {
					roles: ['admin']
				},
				component: () => import('@/views/antitheft/index')
			}, , {
				path: '/extend',
				name: 'extend',
				meta: {
					roles: ['admin']
				},
				component: () => import('@/views/extend/index')
			}, {
				path: '/achievements',
				name: 'achievements',
				meta: {
					roles: ['admin']
				},
				component: () => import('@/views/achievements/index')
			}, , {
				path: '/collection',
				name: 'collection',
				meta: {
					roles: ['admin']
				},
				component: () => import('@/views/collection/index')
			}, {
				path: '/basic',
				name: 'basic',
				meta: {
					roles: ['admin']
				},
				component: () => import('@/views/basic/index')
			}
		]
	},
	{
		path: '/user',
		component: UserLayout,
		redirect: '/user/login',
		meta: {
			roles: ['admin','user']
		},
		hidden: true,
		children: [{
				path: 'login',
				name: 'login',
				meta: {
					roles: ['admin','user']
				},
				component: () => import( /* webpackChunkName: "user" */ '@/views/user/Login')
			},
			{
				path: 'register',
				name: 'register',
				meta: {
					roles: ['admin','user']
				},
				component: () => import( /* webpackChunkName: "user" */ '@/views/user/register/Register')
			},
			{
				path: 'register-result',
				name: 'registerResult',
				meta: {
					roles: ['admin','user']
				},
				component: () => import( /* webpackChunkName: "user" */ '@/views/user/register/RegisterResult')
			},
			{
				path: 'alteration',
				name: 'alteration',
				meta: {
					roles: ['admin','user']
				},
				component: () => import( /* webpackChunkName: "user" */ '@/views/user/alteration/Alteration')
			}
		]
	},
	{
		path: '/404',
		name: '404',
		meta: {
			roles: ['admin','user']
		},
		component: () => import('@/views/exception/404')
	},
	{
		path: '*',
		meta: {
			roles: ['admin','user']
		},
		redirect: '/404',
		hidden: true
	},
]
