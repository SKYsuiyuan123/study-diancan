import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'

// 路由使用的是 懒加载
// const Admin = () => import('../pages/Admin')


Vue.use(Router)

const router = new Router({
  // 滚动行为
  scrollBehavior (to, from, savedPosition) {
    // return { x: 0, y: 100}
    // return { selector: '.btn'}
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        orderingGuide: () => import('../pages/about/OrderingGuide'),
        delivery: () => import('../pages/about/Delivery'),
        history: () => import('../pages/about/History')
      }
    },
    {
    	path: '/admin',		// 管理
    	name: 'admin',
    	component: () => import('../pages/Admin')
        // ,
        // // 路由独享守卫
        // beforeEnter: (to, from, next) => {
        //     //     // 判断 store.getters.isLogin === false
        //     if (to.path === '/login' || to.path === '/register') {
        //         next()
        //     } else {
        //         alert('还没有登录，请先登录')
        //         next('/login')
        //     }
        // }
    },
    {
    	path: '/menu',		// 菜单
    	name: 'menu',
    	component: () => import('../pages/Menu')
    },
    {
    	path: '/about',		// 关于我们
    	name: 'about',
        redirect: '/history',
    	component: () => import('../pages/about/About'),
        children: [     // 二级路由
            {
                path: '/history',       // 历史订单
                name: 'history',
                component: () => import('../pages/about/History')
            },{
                path: '/contact',       // 联系我们
                name: 'contact',
                redirect: '/personName',
                component: () => import('../pages/about/Contact'),
                children: [     // 三级路由
                    {
                        path: '/phone',
                        name: 'phone',
                        component: () => import('../pages/about/contact/Phone')
                    },{
                        path: '/personName',
                        name: 'personName',
                        component: () => import('../pages/about/contact/PersonName')
                    }
                ]
            },{
                path: '/orderingGuide', // 点餐文档
                name: 'orderingGuide',
                component: () => import('../pages/about/OrderingGuide')
            },{
                path: '/delivery',      // 快递信息
                name: 'delivery',
                component: () => import('../pages/about/Delivery')
            }
        ]
    },
    {
    	path: '/login',		// 登录
    	name: 'login',
    	component: () => import('../pages/Login')
    },
    {
    	path: '/register',	// 注册
    	name: 'register',
    	component: () => import('../pages/Register')
    }, {
    	path: '*',	    // 路由输入错误，匹配到 首页去
    	redirect: '/'
    }
  ]
})

// 全局守卫
// router.beforeEach((to, from, next) => {
//     // alert('还没有登录，请先登录')
//     // next()
//     // 判断 store.getters.isLogin === false
//     if (to.path === '/login' || to.path === '/register') {
//         next()
//     } else {
//         alert('还没有登录，请先登录')
//         next('/login')
//     }
// })

// 后置钩子
// router.afterEach((to, from) => {
//     alert('after Each')
// })

export default router