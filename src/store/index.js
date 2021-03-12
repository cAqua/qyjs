import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store =  new Vuex.Store({
    state:{
      mainList:[],
        //存放的键值对就是所要管理的状态
        // Industry:'' ,  //工业界数据
        // serviceSector:'',    //服务数据
        // gallery:'' ,   //画廊数据
    },
    mutations:{
      //es6语法，等同edit:funcion(){...}
      // Industry(state,Industrys){state.Industry = Industrys
      // console.log(Industrys)}  ,//工业界数据 
      // serviceSector(state,serviceSectors){state.serviceSector = serviceSectors} ,  //服务数据
      // gallery(state,gallerys){state.gallery = gallerys} ,  //画廊数据
  }
})

export default store