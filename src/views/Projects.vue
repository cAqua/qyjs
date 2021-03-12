<!-- 项目展示 -->
<template>
<div class='Projects'>
  <!-- 头部组件 -->
  <headPicture/>
<!-- 中间内容 -->
<ProjectsMap/>
<!-- 底部组件 -->
<BottomModule/>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import headPicture from '@/components/headPicture/headPicture'
import ProjectsMap from '@/components/Projects/ProjectsMap'
import BottomModule from '@/components/BottomModule/BottomModule'
export default {
  name: 'Projects',
//import引入的组件需要注入到对象中才能使用
components: {
  headPicture,
  ProjectsMap,
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
.Projects{
  width: 100%;
  height: 100%;
  position: relative;
}
.Projects::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
  url(../assets/Projects/background-Image.jpg) 
  repeat-y 
  center 
  center;
  background-size: 100%;
  filter: blur(2px);
  z-index: -1;
    background-attachment: fixed;
}

</style>