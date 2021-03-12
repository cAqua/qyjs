<!-- 新闻中心 -->
<template>
  <div class="News">
    <!-- 头部图片 -->
    <headPicture />
    <!-- 中间内容 -->

    <div class="contents">
      <div class="w" style="height: 40px"></div>
      <ul class="content">
        <li
          v-for="item in arrs"
          :key="item.id"
          @click="News_details_page(item.id)"
          :data-index="item.id"
          class="contentLi"
        >
          <div class="contentBox">
            <div class="image">
              <img v-lazy="item.cover" alt="" />
            </div>
            <div class="contentMain">
              <h3>{{ item.title }}</h3>
              <p>{{ item.text1 }}</p>
              <p>{{ item.text2 }}</p>
              <p style="padding-top: 15px">{{ item.time }}</p>
            </div>
          </div>
        </li>
      </ul>
      <div class="w" style="height: 40px"></div>
    </div>

    <!-- 底部组件 -->
    <BottomModule />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import headPicture from "@/components/headPicture/headPicture";

import BottomModule from "@/components/BottomModule/BottomModule";
export default {
  name: "",
  //import引入的组件需要注入到对象中才能使用
  components: {
    BottomModule,
    headPicture,
  },
  data() {
    //这里存放数据
    return {
      arrs: [
        {
          title: "上海住房城乡建设系统助力打造国际一流营商环境",
          time: "2019-01-04 13:54:08",
          cover: require("../assets/News/1.jpg"),
          text: [
            {
              text:
                "企业对营商环境有着切身感受，也一直在用脚投票、主动选择。一地一城的营商环境优化或恶化，直接导致企业涌入或逃离的不同后果。国内外的竞争新态势表明，城市竞争的关键不再是优惠政策多少，而在于营商环境优劣。其高度体现了一个城市重要的软实力和核心竞争力。",
            },
            {
              text:
                "企业对营商环境有着切身感受，也一直在用脚投票、主动选择。一地一城的营商环境优化或恶化，直接导致企业涌入或逃离的不同后果。国内外的竞争新态势表明，城市竞争的关键不再是优惠政策多少，而在于营商环境优劣。其高度体现了一个城市重要的软实力和核心竞争力。",
            },
          ],
          id: 0,
        },
        {
          title: "上海建交系统“迎进口博览会 展文明窗口风采”创建活动回顾",
          cover: require("../assets/News/2.png"),
          text: [
            {
              text:
                "不断跨越，又不断面临新的挑战，肩负全国“改革开放排头兵、创新发展先行者”的重大使命，上海，从未停下追求卓越的脚步。",
            },
            {
              text:
                "不断跨越，又不断面临新的挑战，肩负全国“改革开放排头兵、创新发展先行者”的重大使命，上海，从未停下追求卓越的脚步。",
            },
          ],
          id: 1,
          time: "2018-12-17 15:17:59",
        },
        {
          title: "宁波市创建国家园林城市纪实",
          cover: require("../assets/News/3.jpg"),
          text: [
            {
              text:
                "一座秀丽、宜居的城市，在由余姚江、奉化江、甬江汇集的三江畔崛起；一幅城在园中、人在景中的美丽画卷，正在这片“海上丝绸之路”东方始发地、“港通天下”千年古城的土地上徐徐展开。这座城市就是江南水乡、海港城市浙江宁波——人们日夜厮守、装扮日靓的共同家园。",
            },
            {
              text:
                "一座秀丽、宜居的城市，在由余姚江、奉化江、甬江汇集的三江畔崛起；一幅城在园中、人在景中的美丽画卷，正在这片“海上丝绸之路”东方始发地、“港通天下”千年古城的土地上徐徐展开。这座城市就是江南水乡、海港城市浙江宁波——人们日夜厮守、装扮日靓的共同家园。",
            },
          ],
          id: 2,
          time: "2018-12-17 11:11:27",
        },
        {
          title: "汕 头：因地制宜 因势利导 让垃圾分类成为居民生活好习惯",
          cover: require("../assets/News/4.jpg"),
          text: [
            {
              text:
                "汕头市作为粤东西北地区城市，推进城市生活垃圾分类基础相对薄弱。近年来，汕头市在充分借鉴先进地区经验的基础上，积极探索适合本地实际的做法，按照“示范先行先难后易，前中末端同时发力”的思路，有序推进生活垃圾分类工作。",
            },
            {
              text:
                "汕头市作为粤东西北地区城市，推进城市生活垃圾分类基础相对薄弱。近年来，汕头市在充分借鉴先进地区经验的基础上，积极探索适合本地实际的做法，按照“示范先行先难后易，前中末端同时发力”的思路，有序推进生活垃圾分类工作。",
            },
          ],
          id: 3,
          time: "2021-01-14 10:00:51",
        },
        {
          title: "东 莞：“三个突出”扎实推进生活垃圾分类工作",
          cover: require("../assets/News/5.jpg"),
          text: [
            {
              text:
                "东莞市地处粤港澳大湾区的几何中心，是典型的产业大市、人口大市、产废大市，目前实际管理人口达1350万人，拥有各类市场主体130多万户，每天产生的生活垃圾超过1.3万吨，且城市与农村混杂、工业区与生活区交错，推行生活垃圾分类难度较大。近年来，东莞市深入动员全社会力量，城市、农村同步抓，大力推进生活垃圾分类工作。",
            },
            {
              text:
                "东莞市地处粤港澳大湾区的几何中心，是典型的产业大市、人口大市、产废大市，目前实际管理人口达1350万人，拥有各类市场主体130多万户，每天产生的生活垃圾超过1.3万吨，且城市与农村混杂、工业区与生活区交错，推行生活垃圾分类难度较大。近年来，东莞市深入动员全社会力量，城市、农村同步抓，大力推进生活垃圾分类工作。",
            },
          ],
          id: 4,
          time: "2021-01-14 10:00:17",
        },
        {
          title: "深 圳：稳扎稳打构建四大体系 精益求精强化示范效果",
          cover: require("../assets/News/6.jpg"),
          text: [
            {
              text:
                "深圳市坚持以中国特色社会主义先行示范区标准，全市动员、全民参与、全域覆盖，全力推进生活垃圾分类工作。自2020年9月1日《深圳市生活垃圾分类管理条例》实施以来，厨余垃圾收运量提高123%，其他生活垃圾收运量下降18%，生活垃圾回收利用率达40.5%。生活垃圾分类正在成为城市新风尚。",
            },
            {
              text:
                "深圳市坚持以中国特色社会主义先行示范区标准，全市动员、全民参与、全域覆盖，全力推进生活垃圾分类工作。自2020年9月1日《深圳市生活垃圾分类管理条例》实施以来，厨余垃圾收运量提高123%，其他生活垃圾收运量下降18%，生活垃圾回收利用率达40.5%。生活垃圾分类正在成为城市新风尚。",
            },
          ],
          id: 5,
          time: "2021-01-14 09:59:41",
        },
      ], //接口数据
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    News_details_page(id) {
      this.$router.push({
        name: "NewsDetails",
        path: "/index/News/NewsDetails/" + id,
        params: { arrs: this.arrs, id },
      });
    },
    getMianDetaili() {
      //请求主体数据
      let api = "/NewsCenter.json";
      this.$fn(api);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.$store.state.mainList = this.arrs;

  
    // let ae = JSON.parse(localStorage.getItem("News"));
    // if (!ae) {
    //   this.getMianDetaili();
    //   console.log("新闻中心 : 本地没有数据 重新获取");
    // } else {
    //   console.log("新闻中心 : 可以使用旧数据");
    //   if (Date.now() - ae.time > 7200000) {
    //     this.getMianDetaili();
    //   } else {
    //     this.arrs = ae.data;
    //   }
    // }
  },
};
</script>
<style  scoped>




* {
  box-sizing: border-box;
}
.w {
  width: 1200px;
  margin: 0 auto;
}
.content {
  width: 1200px;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
}
.content li {
  padding: 14px;
  /* padding-top: 14px; */
  float: left;
  width: 49%;
  height: auto;
  cursor: pointer;

}
.content li:hover {
  cursor: pointer;
  transform: translateY(-10px);
  transition: 1s all;
}
.content li:hover h3 {
  color: #e69c33;
}

.content .contentBox {
  width: 100%;
  height: 159px;
  float: left;
  border: 1px solid #eeeeee;
  background-color: #fff;
  border-radius: 5px;
}
.content .image {
  width: 40%;
  float: left;
  vertical-align: middle;
}

.content img {
  border-radius: 5px;
  width: 100%;
  height: 157px;
  vertical-align: bottom;
}
.contentMain {
  float: left;
  width: 60%;
  padding: 0 17px;
}
.contentMain h3 {
  margin-top: 10px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.contentMain p {
  padding-top: 10px;
}
.contentMain p:nth-child(2) {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>