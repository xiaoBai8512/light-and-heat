import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index'
import News from '@/pages/News'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Index',
			component: Index,
		},
		{
			path: '/News',
			name: 'News',
			component: News,
		},
	],
})
