<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="nav" :class="{'hide':$route.path.split('/').length<3}">
      <router-link to="/home"><i class="home"></i>首页</router-link>
      <router-link to="/zuan"><i class="zuan"></i>欧瑟奢品</router-link>
      <router-link to="/a/renqi"><i class="renqi"></i>人气品优</router-link>
      <router-link to="/a/shop"><i class="shop"></i>购物车</router-link>
      <router-link to="/a/me"><i class="me"></i>我的</router-link>
    </div>
    <div>
        <router-view name="datail"></router-view>
    </div>
  </div>
</template>

<script>
export default {

 } 
</script>

<style>
.hide{
  display: none;
}
#app {
  width: 100%;
  height: 100%;
  position: absolute;
  left:0;
  top:0;
  background: #fff;
}
.nav{
  background: #fff;
  border-top:solid 2px #dedede;
  overflow: hidden;
  height: 62px;
  position: absolute;
  width: 100%;
  bottom:0;
  left:0;
  z-index: 2;
}
.nav a{
  float: left;
  width: 20%;
  text-align: center;
  font-size:10px;
  line-height: 32px;
  margin-top:3px; 
  color:#717171;
  cursor: none;
}
.nav a.router-link-active{
  color:#d50d10;
}
.nav a.router-link-active i.home{
  background: url(../static/home01.png) no-repeat center center;
}
.nav a.router-link-active i.zuan{
  background: url(../static/zuan01.png) no-repeat center center;
}
.nav a.router-link-active i.renqi{
  background: url(../static/renqi01.png) no-repeat center center;
}
.nav a.router-link-active i.shop{
  background: url(../static/shop01.png) no-repeat center center;
}
.nav a.router-link-active i.me{
  background: url(../static/me01.png) no-repeat center center;
}
.nav i{
  text-align: center;
  display: block;
  width: 100%;
  height: 30px;
  position: relative;
}
.nav i.home{
  background: url(../static/home.png) no-repeat center center;
}
.nav i.zuan{
  background: url(../static/zuan.png) no-repeat center center;
}
.nav i.renqi{
  background: url(../static/renqi.png) no-repeat center center;
}
.nav i.shop{
  background: url(../static/shop.png) no-repeat center center;
}
.nav i.me{
  background: url(../static/me.png) no-repeat center center;
}
.container{
  position: absolute;
  width: 100%;
  height: 100%;
  padding-bottom: 62px;
  left: 0;
  top: 0;
  z-index: 1;
  overflow-y:scroll; 
}
.nav span{
  position: absolute;
  top:0.04rem;
  right:.40rem;
  font-style: normal;
  font-size: .05rem;
  width: .2rem;
  height: .12rem;
  line-height: .1rem;
  background: #d61518;
  color:#fff;
  border-radius: .02rem;
  display: none;
}
</style>
