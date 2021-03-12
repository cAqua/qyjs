<!--  -->
<template>
  <div class="ProjectsMap">
    <div class="ProjectsMap_n">
      <ul class="setshow">
        <li class="ProjectsMap_show act">
          <div class="project_img" v-for="item in oneArticle" :key="item.id">
            <div class="project_content">
              <img v-lazy="item.cover" alt />
              <div class="project_text" :title="item.description">
                <p>{{ item.title }}</p>
                <p>
                  <span>项目地点:</span>
                  {{ item.ProjectLocation }}
                </p>
                <p>
                  <span>项目内容:</span>
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </li>
        <li class="ProjectsMap_show">
          <div class="project_img" v-for="item in towArticle" :key="item.id">
            <div class="project_content">
              <img v-lazy="item.cover" alt />
              <div class="project_text" :title="item.description">
                <p>{{ item.title }}</p>
                <p>
                  <span>项目地点:</span>
                  {{ item.ProjectLocation }}
                </p>
                <p>
                  <span>项目内容:</span>
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </li>
        <li class="ProjectsMap_show">
          <div class="project_img" v-for="item in threeArticle" :key="item.id">
            <div class="project_content">
              <img v-lazy="item.cover" alt />
              <div class="project_text" :title="item.description">
                <p>{{ item.title }}</p>
                <p>
                  <span>项目地点:</span>
                  {{ item.ProjectLocation }}
                </p>
                <p>
                  <span>项目内容:</span>
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="ProjectsMap_buttons">
        <span class="el-icon-d-arrow-left" @click="toMap"></span>
        <span class="el-icon-d-arrow-right" @click="goMap"></span>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import $ from "@/js/index";
export default {
  name: "",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      index: 1,
      arr: [], //请求的数据
      oneArticle: [
        {
          cover: require("../../assets/Projects/1.png"),
          title: "广州市白云沙亭岗新社区棚改项目",
          ProjectLocation: "广州市白云区太和镇沙亭岗村与谢家庄村交界处",
          description:
            "本项目建设地点位于广州市白云区太和镇沙亭岗村与谢家庄村交界处，总建筑面积1001827.41㎡，计算容积率建筑面积为750924.96平方米，包括住宅、教育配套、公共配套及非公建配套；不计算容积率建筑面积为250902.45平方米，主要为地下车库及架空层。其中教育配套用地48994.16平方米，建筑面积为45854.41平方米，计算容积率建筑面积为40684.0平方米。",
        },
        {
          cover: require("../../assets/Projects/2.jpg"),
          title: "广东省中医院南沙医院项目",
          ProjectLocation: "粤港澳大湾区南沙区域",
          description:
            "总建筑面积37.8万平方米，建设1200个床位,其中，医疗业务用房18.4万平方米，科研用房2.1万平方米、教学用房1.5万平方米、宿舍用房3.5万平方米，地下用房12.8万平方米。项目最大单体建筑面积为3.9万平方米,最大建筑高度约为79.7米，最大跨度约26米。",
        },
      ], //截取数据的两条
      towArticle: [
        {
          cover: require("../../assets/Projects/3.png"),
          title: "广州知识城大厦项目",
          ProjectLocation:
            "新广州知识城南起步区九龙大道以西、凤凰湖东侧。项目总用地面积55672平方米",
          description:
            "本工程A栋建筑高度69.8米，地上共16层，2层裙楼，地下2层；总建筑面积190669平方米，其中地下建筑面积75133.7平方米，地上建筑面积115535.3平方米。",
        },
        {
          cover: require("../../assets/Projects/4.jpg"),
          title: "珠江新城B1-1",
          ProjectLocation: "广州市天河区珠江新城B1-1地块",
          description:
            "项目用地面积2.5102万平方米，建筑面积31.5135万平方米，地下5层，A塔58层，高284米，B塔38层，高176米，基础采用伐板基础，A塔为带一道环桁架加强层的钢管混凝土柱钢框架+钢筋混凝土核心筒混合结构，B塔为钢管混凝土柱钢框架+钢筋混凝土核心筒混合结构体系，商业楼C1～C8和珠江新城2层公共连廊为钢框架结构体系。",
        },
      ], //截取数据的两条
      threeArticle: [
        {
          cover: require("../../assets/Projects/5.jpg"),
          title: "中国联通互联网应用创新基地一期工程",
          ProjectLocation: "新广州知识城凤湖一路以南、永九快速路以东地块，",
          description:
            "新技术应用情况：本项目拟推广应用建设部推广应用的“建筑业十项新技术（2017）”中的钢筋与混凝土技术、模板脚手架技术、机电安装工程技术、绿色施工技术、防水技术与围护结构节能、抗震、加固与改造技术、信息化技术等7大项19子项新技术术，并在项目实施过程中按计划加以推进落实。",
        },
        {
          cover: require("../../assets/Projects/6.jpg"),
          title: "广州交投建设运营管理中心",
          ProjectLocation: "广州市海珠区新港东路琶洲中二区AH041002地块",
          description:
            "广州交投建设运营管理中心项目位于广州市海珠区新港东路琶洲中二区AH041002地块。本项目总用地面积15387平方米，本工程总建筑面积为13.6975万平方米，拟建造综合性商务写字楼，包括三层地下室（建筑面积约4.1万平方米）,地上建筑共有2座塔楼和1座裙楼（地上建筑面积约9.6万平方米）。其中塔楼T1为自用办公、出租办公及服务式公寓，建筑面积约4.87万平方米；塔楼T2为出售办公楼，建筑面积约2.85万平方米；裙楼T3为出租办公楼及商业配套，建筑面积约1.88万平方米，主体建筑高度控制在100米以内，建筑总高点控制在110米以内。",
        },
      ], //截取数据的两条
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    toMap() {
      //上一页
      this.index = this.index-- > 0 ? this.index : 2;
      this.goto(this.index);
    },
    goMap() {
      //下一页
      this.index = this.index++ < 2 ? this.index : 0;
      this.goto(this.index);
    },
    goto(index) {
      let Ulli = $(".setshow").getElementsByTagName("li");
      for (let i = 0; i < Ulli.length; i++) {
        Ulli[i].className = "ProjectsMap_show";
      }
      Ulli[index].className = "ProjectsMap_show act";
    },
    getup() {
      //请求数据
      let api = "/Projectsimgs.json";
      this.$fn(api);
    },
    setprojiects() {
      let datwo = JSON.parse(localStorage.getItem("wetwo"));
      if (!datwo) {
        //  不存在数据就发送请求
        console.log("没请求");
        this.getup();
      } else {
        //  有旧的数据 定义过期时间为2小时  过期再次请求
        if (Date.now() - datwo.time > 7200000) {
          this.getup();
        } else {
          // 可以使用旧的数据
          console.log("可以使用旧数据");
          this.arr = datwo.data;
          this.oneArticle = this.arr.slice(0, 2);
          this.towArticle = this.arr.slice(2, 4);
          this.threeArticle = this.arr.slice(4, 6);
        }
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.setprojiects()//请求数据
  },
};
</script>
<style  scoped>
.ProjectsMap {
  width: 823px;
  height: 950px;
  margin: 0 auto;
  position: relative;
}

.ProjectsMap_n {
  width: 823px;
  height: 100%;
  position: relative;
}
.ProjectsMap_show {
  width: 823px;
  height: 840px;
  position: absolute;
  display: none;
}
.project_img {
  width: 823px;
  /* height: 400px; */
  position: relative;
  left: 50%;
  top: 5%;
  /* overflow: hidden; */
  transition: 0.5s all;
  transform: translate(-50%, -5%);
  margin-top: 30px;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.9);
  /* padding: 10px; */
}
.project_content {
  width: 823px;
  height: 390px;
  overflow: hidden;
  border: 10px solid #fff;
}
.project_img img {
  max-width: 823px;
  max-height: 390px;
  width: 100%;
  height: 100%;
  /* object-fit: fill; */
  transition: 0.5s all;
}
.project_img img:hover {
  transform: scale(1.1);
}
.project_text {
  width: 100%;
  height: 125px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #0c0c0c78;
  color: #d6d5d4;
  padding-left: 11px;
}
.project_text p:nth-child(1) {
  /* width: 195px; */
  height: 65px;
  line-height: 65px;
  font-size: 22px;
  text-align: left;
  overflow: hidden; /*隐藏文字*/
  text-overflow: ellipsis; /*显示 ...*/
  white-space: nowrap; /*不换行*/
}
.project_text p:nth-child(2) {
  /* width: 195px; */
  height: 27px;
  line-height: 27px;
  font-size: 14px;
  padding: 0 0 0 5px;
  overflow: hidden; /*隐藏文字*/
  text-overflow: ellipsis; /*显示 ...*/
  white-space: nowrap; /*不换行*/
}
.project_text p:nth-child(3) {
  /* width: 195px; */
  height: 27px;
  line-height: 27px;
  font-size: 14px;
  padding: 0 0 0 5px;
  overflow: hidden; /*隐藏文字*/
  text-overflow: ellipsis; /*显示 ...*/
  white-space: nowrap; /*不换行*/
}
.setshow {
  clear: both;
  transition: 0.5s all;
}
.ProjectsMap_buttons {
  width: 100%;
  height: 70px;
  position: relative;
  z-index: 999;
  top: 863px;
}
.ProjectsMap_buttons span:nth-child(1),
.ProjectsMap_buttons span:nth-child(2) {
  width: 100px;
  height: 70px;
  position: relative;
  line-height: 100px;
  font-size: 54px;
  color: #e0dddd;
  text-align: center;
  cursor: pointer;
}
.ProjectsMap_buttons span:nth-child(1):hover,
.ProjectsMap_buttons span:nth-child(2):hover {
  color: brown;
}
.ProjectsMap_buttons span:nth-child(1) {
  float: left;
}
.ProjectsMap_buttons span:nth-child(2) {
  float: right;
}
.act {
  z-index: 99;
  display: block;
}
</style>