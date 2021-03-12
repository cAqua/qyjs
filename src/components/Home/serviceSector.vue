<template>
<div class="service" v-if="serviceSector">
  <!-- 服务组件 -->
  <h1>{{serviceSector.title}}</h1>
  <em style="font-weight:300;color:#a6a6a6;">{{serviceSector.Subtitle}}</em>
  <span class="serviceBorder"></span>
  <ul class='serviceBody w'>
    <li v-for="item in serviceSector.SmainText" :key="item.id" :data-index="item.id">
          <img :src="item.icon" alt="">
        <h2>{{item.title}}</h2>
        <p>{{item.text}}</p>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    //这里存放数据
    return {
      serviceSector:{
          title:'服务领域',
          Subtitle:'SERVICE AREA',
          SmainText:[
            {
              id:0,
              icon:require('../../assets/home/serviceSector/up_icon.png'),
              title:'建筑工程',
              text:'建筑工程项目包括工程建设项目、单项工程、单位工程、分部工程、分项工程。建设项指具有一个设计任务书和总体设计，经济上实行独立核算，管理上具有独立组织形式的工程建设项目。一个建设项目往往由一个或几个单项工程组成。'
            },
            {
              id:1,
              icon:require('../../assets/home/serviceSector/s_icon.png'),
              title:'水利工程',
               text:'水利工程是用于控制和调配自然界的地表水和地下水，达到除害兴利目的而修建的工程。只有修建水利工程，才能控制水流，防止洪涝灾害，并进行水量的调节和分配，以满足人民生活和生产对水资源的需要。'
            },
            {
              id:2,
              icon:require('../../assets/home/serviceSector/hb_icon.png'),
              title:'环保工程',
               text:'环保工程是指特定为环境保护所做的工程，由于工业发展导致环境污染，而以某组设想目标为依据，应用有关的科学知识和技术手段，通过一群人的有组织活动将环境污染问题去处理解决的一些工程。'
            },
          ],
        },
    };
  },
  // props:["serviceSector"],
};
</script>
<style  scoped>
* {
  margin: 0;
}
.w {
  width: 1200px;
  margin: 0 auto;
}
.service {
  width: 100%;
   background: linear-gradient(rgb(34, 42, 44),rgba(0,0,0,0));
  text-align: center;
  padding-top: 32px;
  color: #f4f6f5;

}
.service h1 {
  font-size: 39px;
  font-weight:400;
  margin-bottom: 3px;
}
.service:hover .serviceBorder{
  width: 8%;
}
.serviceBorder{
  display: block;
  margin:5px auto 0;
  width: 3%;
  height: 5px;
  border-radius: 2.5px;
  background-color: #999999;
  transition: all .5s;
}
/* 服务主体 */
.serviceBody {
  position: relative;
  top: 0;
  left: 0;
  width: 795px;
  height: 600px;
  padding-top: 35px;
}
.serviceBody li {
  float: left;
  width: 265px;
  height: 500px;
  padding: 10px 40px;
  overflow: hidden;
}

.serviceBody li:hover img{
  width: 105px;
  
}
.serviceBody li:nth-child(n + 2) {
  border-left: 0;
}
.serviceBody li:nth-child(1){
  background-color: #293535;
  cursor: pointer;
}
.serviceBody li:nth-child(2){
  
  background-color: #202c2c;
  cursor: pointer;

}
.serviceBody li:nth-child(3){
  background-color: #1c2828;
  cursor: pointer;
}
.serviceBody i{
  width: 100%;
  height: 100%;
}
.serviceBody img{
  margin: 60px 0 40px 0;
  width: 100px;
  transition: all .3s ease;

}
.serviceBody h2{
  font-size: 30px;
  color: #20ba82;
  font-weight: 500;
  padding-bottom: 10px;
  
}
.serviceBody p{
  color: #c9d1d3;
  text-indent: 1rem;
  text-align: left;
  padding: 3px 0;
  line-height: 20px;
  letter-spacing: 0.5px;

}
</style>