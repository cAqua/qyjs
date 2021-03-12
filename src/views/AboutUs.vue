<!-- 关于我们 -->
<template>
<div class='AboutUs' >
  <!-- 轮播图组件 -->
   <headPicture/>
   <!-- 介绍组件 -->
   <introduce/>
   <!-- 底部组件 -->
    <BottomModule/>
</div>
</template>
<script>
import headPicture from "@/components/headPicture/headPicture";
import introduce from '@/components/aboutUs/introduce'
import BottomModule from '@/components/BottomModule/BottomModule'

export default {
  name: "",
  //import引入的组件需要注入到对象中才能使用
  components: {
    headPicture,
    introduce,
    BottomModule
  },
  data() {
    //这里存放数据
    return {};
  }
};
</script>
<style  scoped>
body {
}
.AboutUs{
  width: 100%;
  height: 100%;
  background: #fffcfc7a;
  background: url(../assets/AboutUs/background-Image.jpg)
  repeat-Y center bottom;
  background-attachment: fixed;
  background-size: 100%;
}
</style>