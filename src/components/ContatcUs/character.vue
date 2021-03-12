<!--  -->
<template>
<div class='character'>
    <div class="characters">
    <div class="character_logo">
        <div class="character_logoimg">
            <img src="../../assets/logo.png" alt="">
        </div>
      
    </div>
    <div class="character_txt">
        <ul>
            <li>广东群英建设有限公司</li>
            <li><span>联系电话:</span>+861382952632</li>
            <li><span>咨询电话:</span>0754-89376777</li>
            <li><span>电子邮箱:</span>qy@gdjs.com</li>
        </ul>
    </div>
    </div>
    <div class="character_address">
        <span>汕头市潮南区峡山街道南里居委广祥路群英上品花园内</span><br>
        <span>&emsp;&emsp;&emsp;&emsp; Qunying shangpin garden, guangxiang road, nanliju committee, xiashan street, chaonan district, shantou city</span>
    </div>
</div>
</template>

<script>
export default {
  data() {
    //这里存放数据
    return {};
  }
};
</script>
<style  scoped>
.character {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  height: 100%;
  padding-top: 50px;
  background: #f7f7f7a6;
}
.characters {
  position: relative;
  height: 100%;
  display: flex;
}
.character_logo {
  height: 350px;
  float: left;
  flex: 1;
}
.character_logoimg {
  width: 200px;
  height: 200px;
  position: relative;
  left: 25%;
  top: 50%;
  transform: translate(-25%, -50%);
}
.character_logoimg img {
  width: 100%;
  height: 100%;
}
.character_txt {
  height: 350px;
  float: left;
  flex: 1;
  flex-flow: column-reverse;
}
.character_txt ul li {
  height: 50px;
  margin-top: 30px;
  text-align: center;
  line-height: 50px;
  box-shadow: 12px;
  background: #e6e6e6;
  color: #000000ba;
  border-radius: 10px;
  box-shadow: 0 0 7px #f5f5f5;
  transition: all 0.5;
}
.character_txt ul li:hover {
  /* cursor: pointer; */
  /* transform: scale(1.02); */
  color: #151414ba;
}
.character_address {
    width: 1200px;
    height: 100px;
    top: 30px;
    text-align: center;
    position: relative;
    color: #000000ba;
}
.character_address span:nth-child(1) {
  font-size: 22px;
  position: relative;
  top: -10px;
  left: 11px;
}
.bossimage{
  float: left;
  width: 500px;
}
.bossText .image img {
  width: 100%;
  /* height: 100%; */
}
 .text {
  float: left;
  width: 58.33333%;
}
</style>