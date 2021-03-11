<template>
  <div >
    <!-- 公司简介上 -->
    <div class="w" style="height:80px"></div>
    <p style="font-size:23px; text-align:center">{{dataList.title}}</p>
    <div class="w" style="height:45px"></div>
    <div class="Company_Profile w">
      <div class="Company_image">
        <div >
          <img v-lazy="dataList.cover" alt="">
        </div>
      </div>
      <div class="Company_text">
        <p>{{dataList.content}}</p>
        <p>{{dataList.main}}</p>
      </div>
    </div>
    <!-- 公司简介下 -->
    <div class="w" style="height:20px"></div>
    <div class="BCompany_Profile w">
      <p>{{dataList.immense}}</p>

      <ul class="BCompany_image w">
        <li v-for="item in coverimgs" :key="item.id">
          <a href.prevent="" style="width:90%">
            <img  v-lazy="item.picture" alt="">
          </a>
        </li>
        
      </ul>
    </div>
    <!-- 产品简介  -->
    <div class="w" style="height:80px"></div>
    <div class="Fintroduction">
      <div class="w" style="height:105px"></div>
      <ul class="w" >
        <li  v-for="item in character" :key="item.id">
          <div class="Fintroduction_icon" >
            <i :class="item.icon"></i>
          </div>
          <div class="Fintroduction_Text">
            <p style="font-size:18px; margin-top: 8px;" :title="item.title">{{item.title}}</p>
            <p :title="item.content">{{item.content}}</p>
          </div>
        </li>
      </ul>
      <div class="w" style="height:70px"></div>
    </div>
    <div class="w" style="height:80px"></div>
    <!-- boss 介绍 -->
    <div class="boss_introduce w">
      <div class="boss_image">
        <img v-lazy="chairman.cover" >
      </div>
      <div class="boos_text">
        <h1>{{chairman.name}}</h1>
        <p>{{chairman.text1}}</p>
        <p>{{chairman.text2}}</p>
        <p>{{chairman.text3}}</p>
        <p>{{chairman.main}}</p>
      </div>
    </div>
    <div class="w" style="height:80px"></div>
  </div>
</template>

<script>
export default {
  name: "",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      dataList: {
        title:'关于我们',
        cover:'http://www.gzmcg.com/vancheerfile/images/2021/1/2021011316413164.jpg',
        content:'广东群英建设有限公司是一家经汕头工商行政管理局批准注册，专业新办、增项、升级、延期各类建筑工程资质，代办安全生产许可证、提供建筑企业人才服务（一级二级建造师、中高级工程师、技工证等）的企业管理咨询公司。我公司接纳住建局退休的专业人员数名，负责指导办理资质业务流程的工作。本公司部门分为市场部、资质资料部、资质审核部、人才部、外勤部、人事行政部、财务部、法务部、业务部等。公司的每一位员工，都本着“客户第一、诚信正直、团队合作”的服务宗旨，工作认真且负责。',
        main:'经过多年发展，公司拥有一支技术精湛的服务团队，以卓越的服务品质、专业安全的技术服务实力，为不同企业提供更高更优质的咨询服务。公司成立多年来，创造了许多成功案例，是众多企业和人才的最佳选择。现通过卓越的品质服'
      },//全部数据
      coverimgs: [
        {picture:'../../../static/AboutUs/1-1.png'},
        {picture:'../../../static/AboutUs/1-2.jpg'},
        {picture:'../../../static/AboutUs/1-3.jpg'},
        {picture:'../../../static/AboutUs/1-4.jpg'},
        {picture:'../../../static/AboutUs/1-5.jpg'},
        {picture:'../../../static/AboutUs/1-6.jpg'},

      ], //产品图片
      character: [
        {
          icon:'el-icon-location',
          title:'公司地址',
          content:'汕头市潮南区峡山街道南里居委广祥路群英上品花园内'
        },

        {
          icon:'el-icon-phone',
          title:'电话号码',
          content:'+86138*******'
        },
        {
          icon:'el-icon-message',
          title:'电子邮件',
          content:'***@163.com'
        },
      ], //安全严密 售后服务 产品丰富
      chairman: {
        cover:'../../../static/AboutUs/2-1.jpg',
        name:'史蒂夫·乔布斯',
        text1:'Steve Jobs，1955年2月24日—2011年10月5日[2]',
        text2:'我是唯一知道一年内苹果公司损失了十五亿美元的人......这是非常健全的性格。',
        text3:'你看不到点点滴滴，你只能将它们连接起来。所以你必须相信，点将以某种方式连接你的未来。你必须相信某些东西 - 你的直觉，命运，生活，业力等等。这种做法从来没有让我失望，而且这一切使我的生活发生了巨大的变化。',
        main:'[斯坦福大学毕业典礼演讲，2005年6月]'
      } //董事长致辞
    };
  },
  methods: {
    get_people_data() {
      //请求主体数据
      let api = "/Regardingour.json";
      this.$fn(api);
    }
  },
  created() {

    // let ae = JSON.parse(localStorage.getItem("people"));

    // if (!ae) {
    //   this.get_people_data();

    //   console.log("关于我们 : 本地没有数据 重新获取");
    // } else {
    //   console.log("关于我们 : 可以使用旧数据");

    //   if (Date.now() - ae.time > 7200000) {
    //     this.get_people_data();
    //   } else {
    //     this.dataList = ae.data;
    //     this.coverimgs = ae.data.coverimgs;
    //     this.character = ae.data.character;
    //     this.chairman = ae.data.chairman[0];
    //   }
    // }
  }
};
</script>

<style scoped>
* {
  color: rgba(119, 119, 119, 1);
  line-height: 1.7;
  text-align: left;
  letter-spacing: 1px;
}
.w {
  width: 1200px;
  margin: 0 auto;
}
/* 公司简介上 */
.Company_Profile {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: auto;
  overflow: hidden;
}
.Company_Profile::before {
  content: "";
  clear: both;
  height: 365px;
}
.Company_Profile::after {
  float: left;
  content: "";
  clear: both;
  height: 365px;
}
.Company_image {
  position: absolute;
  left: 0;
  top: 0;
  width: 600px;
  height: 365px;
  padding: 15px;
}
.Company_image :first-child {
  overflow: hidden;
  width: 580px;
  border-radius: 5px;
}
.Company_image:hover img {
  transform: scale(1.1);
}
.Company_image img {
  /* border-radius: 10px; */
  float: right;
  transition: all 0.5s;
  width: 100%;
  height: 100%;
}
.Company_text {
  position: absolute;
  right: 0;
  top: 0;
  width: 600px;
  height: 365px;
  padding-top: 50px;
}
.Company_text p {
  padding: 15px;
  text-indent: 2rem;
}
/* 公司简介下 */
.BCompany_Profile {
  overflow: hidden;
}
.BCompany_Profile p {
  padding: 0 14px;
  text-indent: 2rem;
}

.BCompany_image {
  position: relative;
  top: 0;
  left: 0;
  padding-top: 20px;
}
.BCompany_image ul {
  display: flex;
  align-items: center;
}
.BCompany_image li {
  display: inline-block;
  width: 33.333333333333336%;
  max-width: 33.333333333333336%;
  padding: 0 8px;
  overflow: hidden;
}
.BCompany_image li:first-child {
  border-radius: 7px;
}
.BCompany_image li:hover img {
  transform: scale(1.1);
}
.BCompany_image img {
  border-radius: 7px;
  width: 100%;
  height: 240px;
  transition: all 0.3s;
}

/* 产品简介 */
.Fintroduction {
  width: 100%;
  height: 277px;
  background: rgba(248, 249, 249, 1);
}

.Fintroduction ul {
  overflow: hidden;
}
.Fintroduction li {
  float: left;
  width: 33.333333333333336%;
  height: 113px;
  line-height: 113px;
  padding: 0 12px;
}
.Fintroduction_icon {
  float: left;
  text-align: center;
  width: 85px;
}
.Fintroduction_icon i {
  height: 53px;
  font-size: 42px;
  transition: all 0.3s;
}
.Fintroduction_icon:hover i {
  margin-top: -5px;
}
.Fintroduction_Text :last-child {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.Fintroduction_icon h1 {
  float: left;
  font-size: 18px;
}
/* 董事长介绍 */
.boss_introduce {
  overflow: hidden;
}
.boss_introduce .boss_image {
  float: left;
  width: 41.66667%;
  overflow: hidden;
}
.boss_introduce .image img {
  width: 100%;
  height: 100%;
  max-height: 100%;
}
.boss_introduce .boos_text {
  float: left;
  width: 58.33333%;
  text-align: left;
  padding-left: 20px;
}

.boss_introduce .boos_text h1 {
  color: #333333;
  font-size: 28px;
  padding-bottom: 20px;
}
.boss_introduce .boos_text p {
  font-size: 14px;
  margin: 8px 0;
  /* text-indent: 1rem; */
}
</style>
