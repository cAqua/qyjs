<!--  -->
<template>
  <div>
    <!-- 头部组件 -->
    <appbar></appbar>
    <!-- 中间组件 -->
 
    <div class="Journalism">
      <div class="w" style="height: 20px"></div>
      <div class="main w">
        <!-- <div class="mainLeft" v-if="mainList.length > 0"> -->
        <div class="mainLeft">
          <!-- 面包屑 -->
          <nav class="bread mw">
            <ul>
              <li>
                <a href="#/index/Home">首页</a>
                <i class="el-icon-arrow-right"></i>
              </li>
              <li>
                <a href="#/index/News">新闻中心</a>
                <i class="el-icon-arrow-right"></i>
              </li>
              <li>
                <span>详情</span>
              </li>
            </ul>
          </nav>
          <div class="mw" style="height: 15px"></div>
          <!-- 主体 -->
          <h1 class="mainTitle">
            {{ mainList[index].title }}
          </h1>
          <div class="mw" style="height: 10px"></div>
          <div>
            <span class="mainDate">{{ mainList[index].time }}</span>
          </div>
          <div class="mw" style="height: 15px"></div>

          <div class="mainText">
            <p v-for="item in mainList[index].text" :key="item.id">
              {{ item.text }}
            </p>
            <!-- <p>&nbsp;</p>
          <p>&nbsp;</p> -->
          </div>
          <div class="mainImg">
            <div>
              <img v-lazy="mainList[index].cover" alt="" />
            </div>
          </div>
          <div class="mw" style="height: 30px"></div>
          <!-- 底部前进后退按钮 -->
          <div class="mainBottom" ref="btn">
            <a @click="BtnUp()" ref="a">
              <p>
                上一篇&nbsp;&nbsp;:&nbsp;&nbsp;
                <span>
                  {{ mainList[UpIndex].title }}
                </span>
              </p>
            </a>
            <a @click="Btndown()" ref="a1">
              <p>
                <span
                  >下一篇&nbsp;&nbsp; :&nbsp;&nbsp;
                  {{ mainList[DownIndex].title }}
                </span>
              </p>
            </a>
          </div>
        </div>
        <!-- 主体左边结束 -->

        <!-- 主体右边开始 -->
        <!-- <div class="mainRight">
        <h2>最新新闻</h2>
        <ul class="rightMain">
          <li v-for="item in NewJournalism" :key="item.id">
            <a href="">
              <div class="right_Main_img">
                <img v-lazy="item.cover" alt="">
              </div>
              <div class="right_Main_Text">
                <h3 style="padding-top:3px;color:black">{{item.title}}</h3>
                <span style="padding-top:3px;">{{item.main}}</span>
                <span  style="padding-top:20px;">{{item.time}}</span>
              </div>
            </a>
          </li>
        </ul>

      </div> -->

        <!-- 主体右边结束 -->
      </div>
    </div>


    <!-- 底部组件 -->
    <BottomModule></BottomModule>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import appbar from "@/components/index/appbar";
import headPicture from "@/components/headPicture/headPicture";
import BottomModule from "@/components/BottomModule/BottomModule";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    BottomModule,
    headPicture,
    appbar,
  },
  data() {
    //这里存放数据
    return {
      mainList: [
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
      ], //图片数组
      index: this.$route.params.id | 0, //当前索引值
      UpIndex: Number, //上一篇索引值
      DownIndex: Number, //下一篇索引值
      bottomNavId: "",
      dataList: [], //列表数据
      NewJournalism: [], //右边新闻数据
    };
  },
  watch: {},
  //方法集合
  methods: {
    BtnUp() {
      //控制当前页面索引
      this.index <= 0 ? (this.index = this.mainList.length - 1) : this.index--;
      //控制上一页索引
      this.upDownFun();
    },
    Btndown() {
      //控制当前页面索引
      this.index == this.mainList.length - 1 ? (this.index = 0) : this.index++;
      //控制下一页索引
      this.upDownFun(); //调用刷新底部数据 函数
    },
    upDownFun() {
      switch (this.index) {
        case 0:
          (this.UpIndex = 5), (this.DownIndex = 1);
          break;
        case 1:
          (this.UpIndex = 0), (this.DownIndex = 2);
          break;
        case 2:
          (this.UpIndex = 1), (this.DownIndex = 3);
          break;
        case 3:
          (this.UpIndex = 2), (this.DownIndex = 4);
          break;
        case 4:
          (this.UpIndex = 3), (this.DownIndex = 5);
          break;
        case 5:
          (this.UpIndex = 4), (this.DownIndex = 0);
          break;
      }
    },

    getMianDetaili(id) {
      //请求主体数据
      let api = "/News_detail.json";
      this.$fn(api, id);
    },
  },

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // this.id = parseInt(this.$route.params.id);//当前页面id

    // let ae = JSON.parse(localStorage.getItem("xw"));

    // if (!ae) {
    //   this.getMianDetaili(this.id);

    //   console.log("新闻详情页 : 本地没有数据 重新获取");
    // } else {
    //   console.log("新闻详情页 : 可以使用旧数据");

    //   if (Date.now() - ae.time > 7200000) {
    //     this.getMianDetaili(this.id);
    //   } else {
    //     this.dataList = ae.data; //页面数据
    //     this.mainList = ae.data[this.id]; //主体数据
    //   }
    // }

    // let datas = JSON.parse(localStorage.getItem("News")); //底下 上下篇

    // this.NewJournalism = datas.data;

    this.upDownFun(); //调用刷新 上下篇函数
  },
};
</script>
<style scoped>
.w {
  width: 1200px;
  margin: 0 auto;
}
.mw {
  width: 100%;
}
.main {
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
}
.mainLeft {
  margin: 0 auto;
  width: 70%;
  margin-bottom: 80px;
}

/* 面包屑 */

.bread {
  color: #606297;
}
/* .bread ul {} */
.bread li {
  display: inline-block;
  padding: 10px 8px;
}
/* .bread li a {} */
.bread a {
  padding: 10px 0;
}
.bread span {
  cursor: not-allowed;
  color: black;
}
.bread a:hover,
.bread span:hover {
  color: #40b8ff;
}

.bread li i {
  padding: 0 0 0 5px;
}
/* 主体文字 */
.mainText {
}
.mainDate {
  color: #b2aab2;
}
.mainText p {
  width: 90%;
  text-indent: 1.5rem;
  margin: 15px 0;
  line-height: 23px;
}
/* 主体图片 */

.mainImg {
  width: 90%;
}
.mainImg img {
  width: 100%;
}
/* 主体底部 */

.mainBottom {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #b2aab2;
  padding: 10px;
}
.mainBottom a :hover {
  color: #e3921f;
}
.mainBottom a {
  margin: 15px 20px;
  cursor: pointer;
}
.mainBottom p {
  display: inline-block;
}
/* 主体右边 */
.mainRight {
  float: right;
  width: 30%;
  height: 600px;
  padding-top: 72px;
}

.mainRight h2 {
  padding: 8px 0;
  font-weight: 400;
}
.rightMain {
  float: right;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 8px 0;
}
.rightMain :hover img {
  transform: scale(1.1);
}
.right_Main_img {
  overflow: hidden;
  width: 40%;
  height: auto;
  border-radius: 5px;
}
.rightMain li {
  position: relative;
  margin-top: 15px;
}
.rightMain li img {
  float: left;
  width: 100%;
  transition: all 0.5s;
}
.right_Main_Text {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 60%;
  color: #606297;
}

.right_Main_Text h3,
.right_Main_Text span {
  float: left;
  padding-left: 7px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}


</style>