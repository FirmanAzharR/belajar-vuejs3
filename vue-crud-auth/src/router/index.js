import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/register', name: 'register', component: RegisterView },
    { path: '/dashboard', component: DashboardView },
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',
    //   component: () => import('@/views/DashboardView.vue'),
      // meta: { requiresAuth: true },
      // beforeEnter: (to, from, next) => {
      //   const userRole = localStorage.getItem('role') // Simulasi role user
      //   if (userRole === 'admin') {
      //     next() // Lanjut ke halaman admin
      //   } else {
      //     next(alert('anda bukan admin')) // Redirect ke home jika bukan admin
      //   }
      // }
    // },
    { path: '/:pathMatch(.*)*', component: NotFoundView }, //handling 404 page not found
  ],
})

// Global Before Each Guard (Cek Login)
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('refresh_token');

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); // Redirect ke login jika belum login
  } else if (to.meta.guest && isAuthenticated) {
    next('/dashboard'); // Redirect ke dashboard jika sudah login
  } else {
    next();
  }
});

export default router
