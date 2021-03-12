<!-- 画廊领域 -->
<template>
  <div class="se">
    <div class="PhotFrameTitle w">
      <h1 style="font-size: 48px; color: white">工程业绩</h1>
      <em style="font-size: 22px; margin-bottom: 50px"
        >PROJECT PERFORMANCE</em
      >
    </div>
    <div class="w" style="height: 30px"></div>
    <ul class="PhotFrame w" id="image">
      <!-- @click="sse()" -->
      <li v-for="(item,index) in gallery" :key=index :data-index=index>
        <i class="Pmask" style="">{{ item.title }}</i>
        <img :src="item.cover" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";
export default {
  name: "",
  components: {},
  data() {
    //这里存放数据
    return {
      gallery: [
        {
          id: 0,
          title: "项目标题",
          cover: require("../../assets/home/Industry/1548301158959178.jpg"),
        },
        {
          id: 1,
          title: "项目标题",
          cover: require("../../assets/home/Industry/1548301243361467.jpg"),
        },
        {
          id: 2,
          title: "项目标题",
          cover: require("../../assets/home/Industry/1548301344140834.jpg"),
        },
        {
          id: 3,
          title: "项目标题",
          cover: require("../../assets/home/Industry/1548302153626284.jpg"),
        },
        {
          id: 4,
          title: "项目标题",
          cover: require("../../assets/home/Industry/1548302171957887.jpg"),
        },
        {
          id: 5,
          title: "项目标题",
          cover: require("../../assets/home/Industry/1548309927470853.jpg"),
        },
        {
          id: 6,
          title: "项目标题",
          cover: require("../../assets/home/Industry/1548309949120613.jpg"),
        },
        {
          id: 7,
          title: "项目标题",
          cover: require("../../assets/home/Industry/1548311323135958.jpg"),
        },
        {
          id: 7,
          title: "项目标题",
          cover: require("../../assets/home/Industry/1548301277100986.jpg"),
        },
        {
          id: 7,
          title: "项目标题",
          cover: require("../../assets/home/Industry/1548301321626757.jpg"),
        },
        {
          id: 7,
          title: "项目标题",
          cover: require("../../assets/home/Industry/abt_tubg.jpg"),
        },
        {
          id: 7,
          title: "项目标题",
          cover: require("../../assets/home/Industry/1548311301993603.jpg"),
        },
      ],
    };
  },
  // props:['gallery'],
  methods: {
    sse() {
      const viewer = new Viewer(document.getElementById("image"), {
        inline: true,
        // button:true, //关闭按钮
        backdrop: true,
        modal: true,
        interval: 5000,
        // backdrop:true,
        // loading:true,
        // zIndexInline:100,
        // inline:true,
        // container:'body',
        // toggleOnDblclick:true,
        viewed() {
          viewer.zoomTo(1);
        },
      });
    },
  },
};
</script>
<style  scoped >
.w {
  width: 1200px;
  margin: 0 auto;
}
.se {
  text-align: center;
  margin-bottom: 50px;
}
.PhotFrameTitle em {
  color: #a6a6a6;
}
.PhotFrame {
  overflow: hidden;
  height: auto;
}
.PhotFrame li {
  position: relative;
  top: 0;
  left: 0;
  float: left;
  height: auto;
  width: 24%;
  border: 6px solid white;
  box-shadow: 0px 0px 5px #333333;
  margin: 5px;
  text-align: center;
  overflow: hidden;
}
.PhotFrame li:hover i {
  height: 1000px;
  opacity: 0.9;
  padding-top: 25%;
}

.PhotFrame li img {
  overflow: hidden;
  width: 100%;
  height: 180px;
  vertical-align: middle;
}
.PhotFrame .Pmask {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 0%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: all 0.5s ease-out;
  font-size: 22px;
  color: #eb3d00;
  font-weight: 600;
}
</style>