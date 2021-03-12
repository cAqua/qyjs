<!-- 头部图片 -->
<template>
  <div class="Projects">
    <div class="Projects_img">
      <img :src="this.cover" alt />
      <div class="Projects_txt">{{title}}</div>
      <!-- <div class="Projects_txts">{{tile}}</div> -->
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "Projects",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      arrs: [
        {
          cover:require('../../assets/headPicture/1.jpg'),
          title:'关于我们',
          tile:'AboutUs'
        },
        {
          cover:require('../../assets/headPicture/2.jpg'),
          title:'项目展示',
          tile:'project display '
        },
        {
          cover:require('../../assets/headPicture/3.jpg'),
          title:'新闻中心',
          tile:'journalism'
        },
        {
          cover:require('../../assets/headPicture/4.jpg'),
          title:'联系我们',
          tile:'contact us'
        },
      ], //存放头部组件的数据
      cover: "", //图片
      title: "", //z中文文字
      tile: "", //英文文字
      num: 0
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getup() {
      let api = "/Projects.json";
      this.$fn(api);
    },
    cachae() {
      // let des = JSON.parse(localStorage.getItem("weone"));
      // if (!des) {
      //   //  不存在数据就发送请求
      //   console.log("没请求");
      //   this.getup();
      // } else {
      //   //  有旧的数据 定义过期时间为2小时  过期再次请求
      //   if (Date.now() - des.time > 7200000) {
      //     this.getup();
      //   } else {
      //     // 可以使用旧的数据
      //     console.log("可以使用旧数据");
          // this.arrs = des.data;
          for (let i = 0; i < this.arrs.length; i++) {
            switch (
              this.$route.path //匹配路由的对应值是该组件重复使用
            ) {
              case "/index/AboutUs":
                if (i == 0) {
                  this.num = i;
                  this.cover = this.arrs[this.num].cover;
                  this.title = this.arrs[this.num].title;
                  this.tile = this.arrs[this.num].tile;
                 

                }
                break;
              case "/index/Projects":
                if (i == 1) {
                  this.num = i;
                  this.cover = this.arrs[this.num].cover;
                  this.title = this.arrs[this.num].title;
                  this.tile = this.arrs[this.num].tile;
                }
                break;
              case "/index/News":
                if (i == 2) {
                  this.num = i;
                  this.cover = this.arrs[this.num].cover;
                  this.title = this.arrs[this.num].title;
                  this.tile = this.arrs[this.num].tile;
                }
                break;
              case "/index/ContactUs":
                if (i == 3) {
                  this.num = i;
                  this.cover = this.arrs[this.num].cover;
                  this.title = this.arrs[this.num].title;
                  this.tile =  this.arrs[this.num].tile;
                }
            }
          }
    //     }
    //   }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.cachae();
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style  scoped>
.Projects {
  width: 100%;
  position: relative;
  height: 100%;
  /* padding-top: 20px; */
  /* margin-bottom: 20px; */
}
.Projects_img {
  width: 100%;  
  position: relative;
  height: 600px;
  overflow: hidden;
}
.Projects_img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.Projects_txt,
.Projects_txts {
  width: 700px;
  height: 80px;
  float: left;
  position: absolute;
  left: 50%;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 80px;
}
/* 中文文字 */
.Projects_txt {
  font-size: 45px;
  top: 35%;
  transform: translate(-50%, -35%);
}
/* 英文文字 */
.Projects_txts {
  top: 50%;
  font-size: 20px;
  transform: translate(-50%, -50%);
}
</style>