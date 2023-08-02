import { createRouter, createWebHistory } from 'vue-router'

/* const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../components/LoginPage.vue')
    },
    {
      path: '/reg',
      name: 'reg',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/MainPage.vue'),
      children: [
        {
          path: 'user',
          name: 'user',
          component: () => import('../components/UserList.vue')
        },
        {
          path: '',
          name: 'work',
          component: () => import('../components/WorkSpace.vue')
        }
      ]
    }
  ]
}) */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'practiceOne',
      component: () => import('../practiceList/practiceOne.vue')
    },
    {
      path: '/2',
      name: 'practiceTwo',
      component: () => import('../practiceList/practiceTwo.vue')
    },
    {
      path: '/3',
      name: 'practiceThree',
      component: () => import('../practiceList/practiceThree.vue')
    },
    {
      path: '/4',
      name: 'practiceFour',
      component: () => import('../practiceList/practiceFour.vue')
    },
    {
      path: '/5',
      name: 'practiceFive',
      component: () => import('../practiceList/practiceFive.vue')
    },
    {
      path: '/6',
      name: 'practiceSix',
      component: () => import('../practiceList/practiceSix.vue')
    },
    {
      path: '/7',
      name: 'practiceSeven',
      component: () => import('../practiceList/practiceSeven.vue')
    },
    {
      path: '/8',
      name: 'practiceEight',
      component: () => import('../practiceList/practiceEight.vue')
    },
    {
      path: '/9',
      name: 'practiceNine',
      component: () => import('../practiceList/practiceNine.vue')
    },
    {
      path: '/10',
      name: 'practiceTen',
      component: () => import('../practiceList/practiceTen.vue')
    },
    {
      path: '/11',
      name: 'practiceEleven',
      component: () => import('../practiceList/practiceEleven.vue')
    },
    {
      path: '/12',
      name: 'practiceTwelve',
      component: () => import('../practiceList/practiceTwelve.vue')
    },
    {
      path: '/13',
      name: 'practiceThirteen',
      component: () => import('../practiceList/practiceThirteen.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const loadingBar = document.getElementById('global-loading')
  if (!loadingBar) {
    const loadingBar = document.createElement('div')
    loadingBar.id = 'global-loading'
    document.body.append(loadingBar)
    loadingBar.style.display = 'block'
    console.log('不存在')
  } else {
    loadingBar.style.display = 'block'
    console.log('存在')
  }
  setTimeout(() => {
    next()
  }, 200)
})

router.afterEach((to, from) => {
  const loadingBar = document.getElementById('global-loading')
  if (loadingBar) {
    loadingBar.style.display = 'none'
  }
})

export default router
