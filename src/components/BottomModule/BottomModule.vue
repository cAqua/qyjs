<!--  -->
<template>
  <div class="Bottom">
    <div class="Bottom_mian">
      <!-- 备案 -->
      <div class="filing">
        <div class="filing_ts">
          <p>
            <samp>公司</samp>
            <samp>加入我们</samp>
            <samp>联系我们</samp>
          </p>
        </div>
      </div>
      <!-- 底部文字 -->
      <div class="Bottom_txt">
        <ul class="Bottom_txt_one">
          <li style="font-size:18px;  color: #c1bdb6;">联系我们</li>
          <li v-for="item in arrs" :key="item.message">
            <span>{{item.message}}</span>
          </li>
        </ul>
        <div class="Bottom_txt_two">
          <ul>
            <li v-for="item in arrso" :key="item.message">{{ item.message }}</li>
          </ul>
          <ul>
            <li v-for="item in arrse" :key="item.message">{{item.message}}</li>
          </ul>
        </div>
        <div class="Bottom_txt_three">
            <div class="Bottom_txt_three_img">
                <img src="../../assets/Snipaste.png" alt="">
            </div>
        </div>
     
      </div>
           
    </div>
       <div class="beian"><p>Copyright © 2009-2019 Www.99jianzhu.com 广东群英建设有限公司 Inc. All Rights Reserved辽公网安备 21020302000024号</p></div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    //这里存放数据
    return {
      arrs: [
        { message: "防水防腐保温工程专业承包二级" },
        { message: "古建筑工程专业承包二级" },
        { message: "建筑装修装饰工程专业承包二级" },
        { message: "建筑施工总承包二级" },
        { message: "起重设备安装工程专业承包二级" },
        { message: "消防设施工程专业二级" }
      ],
      arrso: [
        { message: "建筑机电安装工程专业承包二级" },
        { message: "市政公用工程总承包二级" },
        { message: "钢结构工程专业承包二级" },
        { message: "建筑幕墙工程专业承包二级" },
        { message: "环保工程专业承包二级" },
        { message: "地基与基础工程专业承包二级" }
      ],
      arrse: [
        { message: "联系电话:+861382952632" },
        { message: "座机电话:0754-89376777" },
        { message: "电子邮箱:qy@gdjs.com" }
      ]
    };
  }
};
</script>
<style  scoped>
.Bottom {
  width: 100%;
  height: 390px;
  background: rgb(57, 57, 57);
  position: relative;
  color: rgb(157, 157, 157);
}
/* 备案 */
.Bottom_mian {
  width: 1200px;
  height: 350px;
  margin: 0 auto;
  position: relative;
}
.filing {
  width: 1200px;
  height: 115px;
  position: relative;
  border-bottom: 1px solid rgb(157, 157, 157);
}
.filing div {
  width: 1200px;
  height: 50px;
  top: 48px;
  position: relative;
}
.filing_ts p samp {
  margin: 0px 0 0 15px;
  position: relative;
  color: #c1bdb6;
}
/* 底部文字 */
.Bottom_txt {
  width: 1200px;
  top: 20px;
  position: relative;
  display: flex;
  flex-direction: row;
}
.Bottom_txt_one {
  width: 200px;
}
.Bottom_txt_one li,
.Bottom_txt_two ul li {
  line-height: 25px;
  margin-top: 5px;
}
.Bottom_txt_two {
  flex: 6;
  display: flex;
  flex-direction: row;
}
.Bottom_txt_two ul {
  width: 200px;
  position: relative;
  top: 30px;
  margin-left: 45px;
}
.Bottom_txt_three {
  height: 150px;
  flex: 2;
}
.Bottom_txt_three_img {
  width: 120px;
  position: relative;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -30%);
}
.Bottom_txt_three_img img {
  width: 100%;
  height: 100%;
}
.beian{
  width: 1200px;
  margin: 0 auto;
  height: 20px;
  margin-top: 10px;
}
</style>