<!-- 导航栏组件 -->
<template>
<div class=''>
  <!-- 头部内容 -->
  <header class="heatmian">
    <div class="heatmian_mian">
      <!-- logo -->
     <div class="heatmian_logo"><img src="../../assets/logo.png"></div>
     <div class="heatmian_text">
        <ul>
          <li><router-link to="/index/Home" tag="span">首页</router-link></li>
          <li><router-link to="/index/AboutUs" tag="span">关于我们</router-link></li>
          <li><router-link to="/index/Projects" tag="span">项目展示</router-link></li>
          <li><router-link to="/index/News" tag="span">新闻中心</router-link></li>
          <li><router-link to="/index/ContactUs" tag="span">联系我们</router-link></li>
        </ul>
     </div>
    </div> 
  </header>
  <transition name="fade">
  <router-view></router-view>
    </transition>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: '',
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped>
.AppBar{
  width: 100%;
  height: 100%;
  position: relative;
}
.heatmian{
  position: relative;
  padding: 20px 0 0 0;
  display: flex;
  height: 100%;
  flex-flow: row;
}
.heatmian_mian{
    width:1200px;
    height: 120px;
    margin: 0 auto;
    position: relative;
}
/* logo */
.heatmian_logo{
    width: 150px;
    height: 100px;
    position: relative;
    float: left;
}
.heatmian_logo img{
   width: 100%;
   height: 100%;
   object-fit: contain;
   position: relative;
}
.heatmian_text{
  width: 800px;
  height: 100px;
  float: left;
  position: relative;
  left: 15%;
}
.heatmian_text ul li{
    width:160px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    float: left;
    font-size: 20px;
    padding-top: 18px;
    position: relative;
}
.heatmian_text ul li span:hover{
    color: darkgrey;
    cursor: pointer;
}
.router-link-exact-active{
    color: coral;
}


.fade-enter-active, .fade-leave-avtive {
    transition: opacity 1s
}
.fade-enter, .fade-leave-to {
    opacity: 0
}
</style>