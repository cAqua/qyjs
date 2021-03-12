<!-- 工业界组件 -->
<template >
  <div class="industs">
    <div class="industs_content">
      <!-- 标题 -->
      <div class="industs_content_title">
        <p>{{ Industry.title }}</p>
        <p>
          <em>{{ Industry.title_els }}</em>
        </p>
      </div>
      <div class="industs_content_title"></div>
      <!-- 图内容-->
      <div class="industs_Picture_content">
        <!-- 左边图片 -->
        <div class="industs_Picture">
          <img :src="Industry.cover"  />
        </div>
        <!-- 右边文字 -->
        <div class="industs_content_right">
          <div class="First_content">{{ Industry.favnum }}</div>
          <div
            class="Second_content"
            v-for="(item,index) in Industry.titleText"
            :key="index"
          >
            <div class="Second_content_ico">
              <img :src="item.icon" />
            </div>
            <div class="Second_content_p">
              <p>{{ item.title }}</p>
            </div>
            <div class="Second_content_p2">
              <p>{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    //这里存放数据
    return {
      Industry: {
          title: "公司简介",
          title_els: "company introduction ",
          cover: require('../../assets/home/gallery/master.png'),
          favnum:'NUlla pellentesque mi non laoreet eleifend . integer prottitor mollisar lorem,at molestie arcu pulvinar ut, Proin ac fermentum est. Cras miipsum,consecterur ac ipsun in,egestas vestibulum tellus.',
          titleText:[
            {
              id:0,
              icon:require('../../assets/home/gallery/team.png'),
              title:'INDUSTRIAL BUSHINESS',
              text:'Lorem ipsum dolor sit amet aueit,consectetur adipiscing elit . Quisque utrisus eget libero finibus. Etiam males',
            },
            {
              id:0,
              icon:require('../../assets/home/gallery/time.png'),
              title:'24/7 support',
              text:'Lorem ipsum dolor sit amet aueit,consectetur adipiscing elit . Quisque utrisus eget libero finibus. Etiam males',
            },
            {
              id:0,
              icon:require('../../assets/home/gallery/industrial.png'),
              title:'PROFESSIONAL TEAM',
              text:'Lorem ipsum dolor sit amet aueit,consectetur adipiscing elit . Quisque utrisus eget libero finibus. Etiam males',
            },
          ]
        },
      
    };
  },
  created() {},
  // props: ["Industry"]
};
</script>
<style  scoped>
.industs {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #ffffff;
}
.industs_content {
  width: 1200px;
  padding-top: 50px;
  height: 835px;
  margin: 0 auto;
  position: relative;
}
.industs_content_title {
  width: 1200px;
  height: 30px;
  position: relative;
  margin-bottom: 25px;
}
.industs_content_title p:nth-child(1) {
  width: 1200px;
  font-size: 40px;
  font-weight: 700;
  color: #232323;
  position: relative;
  text-align: center;
}
.industs_content_title p:nth-child(2) {
  width: 1200px;
  color: #a6a6a6;
  letter-spacing: 2px;
  font-size: 15px;
  position: relative;
  text-align: center;
}
.industs_Picture_content {
  width: 1200px;
  height: 570px;
  position: relative;
}
.industs_Picture {
  width: 540px;
  height: 540px;
  float: left;
  position: relative;
  background: rosybrown;
  overflow: hidden;
}
.industs_Picture img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.industs_content_right {
  width: 613px;
  height: 514px;
  float: right;
  position: relative;
  left: -84px;
  top: 38px;
  border: 5px solid#1dbb81;
  padding-left: 70px;
  padding-top: 35px;
}
.First_content {
  width: 500px;
  height: 82px;
  margin-bottom: 25px;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  line-height: 27px;
  font-size: 15px;
  color: #7b7b7b;
  position: relative;
}
.Second_content {
  width: 515px;
  height: 91px;
  margin-bottom: 29px;
  position: relative;
}
.Second_content_ico {
  width: 55px;
  height: 55px;
  display: flex;
  float: left;
  margin-right: 10px;
  background: #1dbb81;
  top: 5px;
}
.Second_content_ico img {
  font-size: 22px;
  width: 55px;
  height: 55px;
  line-height: 55px;
  background: #1dbb81;
  color: #fff;
  text-align: center;

}
.Second_content_p p {
  width: 445px;
  font-size: 20px;
  font-weight: 700;
  color: #333;
  float: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.Second_content_p2 p {
  width: 445px;
  font-size: 15px;
  letter-spacing: 0.5px;
  line-height: 25px;
  color: #7b7b7b;
  float: left;
  margin-top: 10px;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
</style>