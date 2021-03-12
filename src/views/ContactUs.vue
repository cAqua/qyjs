<!-- 联系我们 -->
<template>
<div class=''>
  <!-- 头部组件 -->
  <headPicture/>   
  <!-- 文字组件 -->
  <character/>
  <!-- 地图组件 -->
  <maps/>
  <!-- 底部组件 -->
  <BottomModule/>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import headPicture from '@/components/headPicture/headPicture'
import character from '@/components/ContatcUs/character'
import maps from '@/components/ContatcUs/maps'
import BottomModule from '@/components/BottomModule/BottomModule'
export default {
  name: '',
//import引入的组件需要注入到对象中才能使用
components: {
  headPicture,
  character,
  maps,
  BottomModule
},
data() {
//这里存放数据
return {
    
};
},
}
</script>
<style  scoped>

</style>