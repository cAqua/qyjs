<!--  -->
<template>
  <div class="map">
    <div class="map_p">
      <!-- 左边地图 -->
      <div class="map_map">
        <baidu-map class="maps" :center="center" :zoom="zoom" @ready="handler">
          <bm-marker
            :position="{lng: 116.424707, lat: 23.265981}"
            :dragging="true" 
            animation="BMAP_ANIMATION_BOUNCE"
          >
            <bm-label
              content="汕头市潮南区峡山街道南里居委广祥路群英上品花园内"
              :labelStyle="{color: 'red', fontSize : '12px'}"
              :offset="{width: -35, height: 30}"
            />
             <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
          </bm-marker>
        </baidu-map>
      </div>
    </div>
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
      center: { lng: 0, lat: 0 },
      zoom: 3
    };
  },
  methods: {
    handler({ BMap, map }) {
      // console.log(BMap, map);
      this.center.lng = 116.424707;
      this.center.lat = 23.265981;
      this.zoom = 15;
    }
  },
};
</script>
<style  scoped>
.map {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
}
.map_p {
  width: 100%;
  height: 500px;
}
.map_map {
  width: 1200px;
  left: 50%;
  top: 50%;
  height: 450px;
  position: relative;
  transform: translate(-50%, -50%);
  border-radius: 12px;
}
.maps {
  width: 1200px;
  left: 50%;
  top: 50%;
  height: 450px;
  position: relative;
  transform: translate(-50%, -50%);
}
</style>