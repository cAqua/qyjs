import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/views/index.vue'     //导航栏
import Home from '@/views/Home.vue'       //首页
import AboutUs from '@/views/AboutUs.vue'    //关于我们
import Projects from '@/views/Projects.vue'    //项目展示
import News from '@/views/News.vue'    //新闻中心
import ContactUs from '@/views/ContactUs.vue'    //联系我们
import NewsDetails from '@/views/News_details_page.vue'    //新闻详情页

Vue.use(Router)

const routes = [
  { path: "/", component: index, redirect: '/index/Home' },
  // { path: "/", component: index, redirect: '/index/News' },
  {
    path: '/index', component: index, redirect: '/index/Home',
    children: [
      { path: 'Home', component: Home },
      { path: 'AboutUs', component: AboutUs },
      { path: 'Projects', component: Projects },
      {path: 'News', component: News  },
      { path: 'ContactUs', component: ContactUs },

    ],
  },
  { 
    path: "/index/News/NewsDetails/:id",
    component: NewsDetails,
    name:'NewsDetails',
   },
];

export default new Router({
  mode: 'hash',
  routes
})
