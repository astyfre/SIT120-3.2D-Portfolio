// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ResumePage from '../views/ResumePage.vue';
import AboutPage from '../views/AboutPage.vue';
import PortfolioPage from '../views/PortfolioPage.vue';
import ContactPage from '../views/ContactPage.vue';
import LoginPage from '../views/LoginPage.vue';
import BlogList from '../components/BlogList.vue';
import BlogDetails from '../components/BlogDetails.vue';
import BlogEditor from '../components/BlogEditor.vue';
import BlogAdd from '../components/BlogAdd.vue'


 const routes = [
  { path: '/', name:'resume', component: ResumePage },
  { path: '/about', name:'About',component: AboutPage },
  { path: '/portfolio', name:'Portfolio',component: PortfolioPage },
  { path: '/contact',name:'Contact', component: ContactPage },
  { path: '/login',name:'Login', component: LoginPage },
  { path: '/blogs',name:'BlogList', component: BlogList },
  { path: '/blogDetail/:id',name:'BlogDetail', component: BlogDetails, props: true },
  { path: '/blogEdit/:id',name:'BlogEditor', component: BlogEditor, props: true },
  { path: '/blogAdd',name:'BlogAdd', component: BlogAdd, props: true },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
