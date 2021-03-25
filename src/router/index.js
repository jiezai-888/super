import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home/home.vue'
import me from '../views/aboutme/me.vue'
import category from '../views/category/category.vue'
import shopcar from '../views/shopcar/shopcar.vue'
import maintabbar from '../components/content/mainTabbar/maintabbar.vue'

// const home = () => import('..views/aboutme/home.vue')
// const me = () => import('../views/aboutme/me.vue')
// const category = () => import('../views/category/category.vue')
// const shopcar = () => import('../views/shopcar/shopcar.vue')
// const maintabbar = () => import('../views/maintabbar.vue')

//安装路由
Vue.use(VueRouter)

const routes = [{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		name: 'home',
		component: home
	},
	{
		path: '/me',
		name: 'me',
		component: me
	},
	{
		path: '/category',
		name: 'category',
		component: category
	},
	{
		path: '/shopcar',
		name: 'shopcar',
		component: shopcar
	},
	// {
	// 	path: '/maintabbar',
	// 	name: 'maintabbar',
	// 	component: maintabbar
	// }
]

const router = new VueRouter({
	base: '/dist',
	routes,
	mode: 'history'
})

export default router
