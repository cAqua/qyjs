// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './css/index.css';//全局样式
import bar from './api/getdata.js';  //定义全局请求数据api文件
Vue.prototype.$fn=bar;  //其中$xx为新命的名

Vue.use(ElementUI);  //引入elementui

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)  //axios
axios.defaults.baseURL = '/api'  //跨域关键代码

import BaiduMap from 'vue-baidu-map'   //Vue Baidu Map 地图框架
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'YOUR_APP_KEY'
})

import vuelazyload from 'vue-lazyload';  //图片预加载

Vue.config.productionTip = false
Vue.use(vuelazyload,{
      error: './static/img/timg.jpg',
  　　loading: './static/img/timg.gif'   // 图片没加载出来之前显示的图片
  })
/* eslint-disable no-new */


import plLazy from "./components/plLazy/DelayLoading.vue";//延迟加载组件
Vue.component('pl-lazy', plLazy);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
