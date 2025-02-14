import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('../views/UserProfile.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/profile-view/:id',
      name: 'profile-view',
      component: () => import('../views/ProfileView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminPageView.vue'),
      meta: { requiresAuth: true },
      beforeEnter: (to, from, next) => {
        const userRole = localStorage.getItem('role') // Simulasi role user
        if (userRole === 'admin') {
          next() // Lanjut ke halaman admin
        } else {
          next(alert('anda bukan admin')) // Redirect ke home jika bukan admin
        }
      },
    },
    { path: '/:pathMatch(.*)*', component: NotFound }, //handling 404 page not found
  ],
})

// Global Before Each Guard (Cek Login)
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('auth') // Simulasi login
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/') // Redirect ke login jika belum login
  } else {
    next() // Lanjutkan navigasi
  }
})

export default router
