import Vue from 'vue'
import Router from 'vue-router'

// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

let router =  new Router({
    routes: [
        {
            path: '/',
            component: () =>
                import ('@/views/auth/login.vue'),
        },
        {
            path: '/login',
            component: () =>
                import ('@/views/auth/login.vue'),
        },
        {
            path: '/404',
            component: () =>
                import ('@/views/notFind'),
        },
        {
            path: '/main',
            component: () =>
                import ('@/views/main'),
            children: [
                {
                    path: 'customerInfo',
                    component: () => import('@/views/customerInfo')
                },
                {
                    path: 'consultingRelease',
                    component: () => import('@/views/consultingRelease')
                },
                {
                    path: 'consultingList',
                    component: () => import('@/views/consultingList')
                }
            ]
        }
        ]
})

/* 前置钩子 */
router.beforeEach((to, from, next) => {
    // 返回顶部
    window.scrollTo(0, 0);
    NProgress.start();
    console.log(to);
    next();
    // store.commit('menu/refreshMenuActive',to.path);

});

/* 后置钩子 */
router.afterEach((to, from) => {
    NProgress.done();
});


export default router;