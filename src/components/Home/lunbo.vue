<!-- 轮播 -->
<template>
  <div class="lunbo">
    <el-carousel :interval="1000000" arrow="always" height="700px">
      <el-carousel-item v-for="(item,index) in imgs" :key=index>
        <img v-lazy="item.cover" alt />
        <div id="title">{{ item.title }}</div>
        <div id="tile">{{ item.tile }}</div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "lunbo",
  components: {},
  data() {
    //这里存放数据
    return {
      imgs: [
        {
          id: 0,
          cover: require("../../assets/home/lunbo/5c4eb2100f15d.jpg"),
          title: " ",
          tile: " ",
        },
        {
          id: 0,
          cover:require("../../assets/home/lunbo/5c4eb3bf67c39.jpg"),
          title: " ",
          tile: " ",
        },
        {
          id: 0,
          cover:require("../../assets/home/lunbo/5c4eb5b83639a.jpg"),
          title: " ",
          tile: " ",
        },

      ], //轮播图片
    };
  },
  methods: {
    getup() {
      //请求数据
      let api = "/hot_tag_list.json";
      this.$fn(api);
    },
    cachae() {
      let datet = JSON.parse(localStorage.getItem("we"));
      if (!datet) {
        //  不存在数据就发送请求
        //  console.log('没请求')
        this.getup();
      } else {
        //  有旧的数据 定义过期时间为2小时  过期再次请求
        if (Date.now() - datet.time > 7200000) {
          this.getup();
        } else {
          // 可以使用旧的数据
          // console.log("可以使用旧数据");
          this.imgs = datet.data;
        }
      }
    },
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.cachae();
  },
};
</script>
<style  scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  width: 100%;
  height: 100%;
}

#title,
#tile {
  position: absolute;
  width: 700px;
  height: 80px;
  left: 50%;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  font-size: 45px;
  line-height: 80px;
}
/* 中文文字 */
#title {
  top: 35%;
  font-size: 45px;
  transform: translate(-50%, -35%);
}
/* 英文文字 */
#tile {
  top: 50%;
  font-size: 20px;
  transform: translate(-50%, -50%);
}
</style>