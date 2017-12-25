<template>
  <div>
    <div class="zuan_top">
    	<h1>欧瑟奢品</h1>
    	<ul>
    		<li><router-link to='/zuan/tui'>推荐</router-link></li>
    		<li><router-link to='/zuan/pinpai'>品牌街</router-link></li>
    		<li><router-link to='/zuan/nanzhuan'>男装</router-link></li>
    		<li><router-link to='/zuan/nanbao'>男包</router-link></li>
    		<li><router-link to='/zuan/nvbao'>女包</router-link></li>
    	</ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style scoped>
.zuan_top{
	position: fixed;
	top:0;
	left:0;
	z-index: 5;
	background: #fff;	
}
.zuan_top h1{
	width: 6.4rem;
	font-size:.16rem;
	line-height: .48rem;
	font-weight: 700;
	color:#333;
	text-align: center;
	border-bottom:solid 1px #ddd;
}
.zuan_top ul li{
	float: left;
	width: 1.28rem;
	text-align: center;
	font-size: .24rem;
	color:#1a1a1a;
	line-height: .62rem;
}
.zuan_top ul li a{
	float: left;
	font-size:0.22rem;
	line-height: 0.62rem;
	color:#000;
	width: 1.28rem;
	text-align: center;
	position: relative;
	box-sizing: border-box;
}
.zuan_top ul li a.router-link-exact-active{
	color: #de0a0e;
	border-bottom:solid 3px red;
} 
</style>
