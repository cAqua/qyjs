import axios from 'axios/lib/axios'

export default function bar(api, id) {
  axios.get(api).then(response => {

    if (api === '/hot_tag_list.json') {
      this.imgs = response.data.data;
      //     // 把请求的数据存在本地
      localStorage.setItem("we", JSON.stringify({ time: Date.now(), data: this.imgs }));
      return
    }
    if (api === '/Projects.json') {
      this.arrs = response.data.data;
      //     // 把请求的数据存在本地
      localStorage.setItem("weone", JSON.stringify({ time: Date.now(), data: this.arrs }));
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
              this.tile = this.arrs[this.num].tile;
            }
        }
      }
      return
    }
    if (api === '/Projectsimgs.json') {
      this.arr = response.data.data;
      //     // 把请求的数据存在本地
      localStorage.setItem("wetwo", JSON.stringify({ time: Date.now(), data: this.arr }));
      this.oneArticle = this.arr.slice(0, 2);
      this.towArticle = this.arr.slice(2, 4);
      this.threeArticle = this.arr.slice(4, 6);
      return
    }

    if (api === '/Regardingour.json') {//关于我们
      this.dataList = response.data.data[0];
      this.coverimgs = this.dataList.coverimgs;
      this.character = this.dataList.character;
      this.chairman = this.dataList.chairman[0];
      localStorage.setItem('people', JSON.stringify({ time: Date.now(), data: this.dataList }))
      return
    }

    if (api === '/NewsCenter.json') {//新闻中心
      this.arrs = response.data.data //页面数据
      localStorage.setItem('News', JSON.stringify({ time: Date.now(), data: this.arrs }))
      return
    }

    if (api === '/News_detail.json') {//新闻详情页列表
      this.dataList = response.data.data//页面数据
      this.mainList = this.dataList[id]//主体数据
      this.upDownFun()//调用刷新 上下篇函数
      localStorage.setItem('xw', JSON.stringify({ time: Date.now(), data: this.dataList }))
      return
    }

    if (api === '/home_max.json') {//首页
      // let seData = response.data

      // this.Industry = seData.data
      // this.serviceSector = seData.serviceSector
      // this.gallery = seData.gallery


      // console.log(seData.data);
      // console.log(seData.serviceSector);
      // console.log(seData.gallery);
      // localStorage.setItem('sy', JSON.stringify({ time: Date.now(), data: seData }))


      // console.log(response.data.data);
      /* vue x */
      let seData = response.data;
      this.Industry = response.data.data  // 工业界数据
      this.serviceSector = response.data.serviceSector //服务数据
      this.gallery= response.data.gallery  // 画廊数据
      // 存在本地
      localStorage.setItem('sy', JSON.stringify({ time: Date.now(), data:seData}))
    }

    // 


  })
}
