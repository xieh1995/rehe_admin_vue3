import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/IndexView.vue'),
      children: [
        {
          // 当 /user/:id/profile 匹配成功
          // UserProfile 将被渲染到 User 的 <router-view> 内部
          path: '/',
          component: () => import('@/layouts/HomeLayout.vue'),
          children:[
            {
              // 当 /user/:id/profile 匹配成功
              // UserProfile 将被渲染到 User 的 <router-view> 内部
              path: '/',
              component: () => import('@/views/Dashboard.vue'),
            },
            {
              // 当 /user/:id/profile 匹配成功
              // UserProfile 将被渲染到 User 的 <router-view> 内部
              path: '/testmain',
              component: () => import('@/views/test/Test.vue'),
            }
          ]
        },
        {
          // 当 /user/:id/profile 匹配成功
          // UserProfile 将被渲染到 User 的 <router-view> 内部
          path: '/test',
          component: () => import('@/layouts/TestLayout.vue'),
        }
      ],
    },  
    // {
    //   path: '/',
    //   name: 'home',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/HomeView.vue'),
    //   children: [
    //     {
    //       // 当 /user/:id/profile 匹配成功
    //       // UserProfile 将被渲染到 User 的 <router-view> 内部
    //       path: 'test',
    //       component: () => import('../views/TestView.vue'),
    //     }
    //   ],
    // }  
  ]
})

export default router
