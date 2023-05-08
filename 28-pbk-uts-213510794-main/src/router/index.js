import { createRouter, createwebhistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import JobDetails from '../views/Jobs/JobDetails.vue'

const routes = [
    {
        path : '/',
        name : 'Home',
        component : Home
    },
    {
        path: '/about',
        name: 'About',
        component: About        
    },
    {
        path: '/Jobs',
        name: 'Jobs',
        component: Jobs
    },
    {
        path: '/Jobs/:id',
        name: 'JobDetails',
        component: JobDetails,
        props: true
    },
    {
        path: '/all-Jobs',
        redirect: '/Jobs'
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]
const router = createRouter({
    history: createwebhistory([process.env.BASE_URL]),
    routes
})

export default router