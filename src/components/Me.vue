<template>
  <div class="me">
    <div class="me_top">
    	<i><img src="../../static/shezhi.png"></i>我的奥莱购
    </div>
    <div class="user">
    	<div class="yonghu"><img src="../../static/me.png"></div>
    	<p>请先登录/注册<br><span>收货地址></span></p>
    	<div class="zhanghu">
    		账户管理>
    	</div>
    </div>
    <div class="ding">
    	<ul>
    		<li><img src="../../static/a1.jpg"><p>待付款</p></li>
    		<li><img src="../../static/a2.jpg"><p>待发货</p></li>
    		<li><img src="../../static/a3.jpg"><p>待收货</p></li>
    		<li><img src="../../static/a4.jpg"><p>退换货</p></li>
    		<li><img src="../../static/a5.jpg"><p>全部订单</p></li>
    	</ul>
    </div>
    <div class="shou">
    	<ul>
    		<li><img src="../../static/a6.jpg"><p>收藏</p></li>
    		<li><img src="../../static/a7.jpg"><p>足迹</p></li>
    		<li><img src="../../static/a8.jpg"><p>优惠券</p></li>
    		<li><img src="../../static/a9.jpg"><p>客服与反馈</p></li>
    		<li><img src="../../static/b1.jpg"><p>排行榜</p></li>
    	</ul>
    </div>
	<div class="wei">
		<b></b>
		<img src="../../static/t.png">
		<span>为您推荐</span>
		<b></b>	
	</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.me {
	background-color:rgba(0,0,0,.05);
	height: 100%;
	overflow: hidden;
}
.me_top{
	position: fixed;
	top:0;
	left: 0;
	font-size: 16px;
	color:#333;
	font-weight: 700;
	line-height: 48px;
	text-align: center;
	width: 100%;
	border-bottom:solid 1px #f5f5f5;
	background: #fff;	
}
.me_top i{
	display: inline-block;
	width:48px;
	height: 48px;
	line-height: 50px;
	color:#999;
	text-align: center;
	background-color:rgba(0,0,0,.05);  
	float: left;
}
.user {
	width: 100%;
	height: 120px;
	margin-bottom:10px;
	background: #ff3434;
	color:#fff;
	margin-top: 48px;	
}
.yonghu{
	width: 60px;
	height: 60px;
	border-radius: 50%;
	background-color:#fff;
	float: left;
	line-height: 60px; 
	position: relative;
	top:30px;
	left:24px;
}
.yonghu img{
	width: 35px;
	height: 35px;
	margin-top:13px;
	margin-left: 13px;
}
.user p{
	float: left;
	margin-left: 45px;
	font-size:14px;
	padding-top: 30px;
	line-height: 30px;
}
.user p span{
	font-size:12px;
}
.zhanghu{
	width:90px;
	height: 24px;
	border:solid 1px #fff;
	border-right: none;
	border-radius: 10px 0 0 10px;
	float: right;
	line-height: 24px;
  text-indent: 11px;
  margin-top: 48px;
}
.ding{
	width: 100%;
	height: 55px;
	background: #fff;
	margin-bottom:10px;	
}
.ding ul li{
	float: left;
	width: 20%;
	height: 55px;
	text-align: center;
}
.ding ul li img{
	padding-top:5px;
	display: block;
	margin:0 auto;
}
.ding ul li p{
	margin-top: -4px;
}
.shou {
	background: #fff;
	margin-bottom:10px;
	height:75px;
	width: 100%;	
}
.shou ul li {
	float: left;
	height: 75px;
	width: 20%;
	text-align: center;
	border-right: solid 1px #ddd;
}
.shou ul li img{
	padding-top:10px;
}
.shou ul li p{
	margin-top:-3px;
}
.wei {
	text-align: center;
	width: 100%;
	color:#b5b5b5;
	font-size:12px;
	line-height: 1;
	overflow: hidden;
}
.wei img{
	float: left;
	margin-left: .1rem;	
}
.wei span{
	float: left;
}
.wei b{
	width: 2.50rem;
	height: 1px;
	background: #e6e6e6;
	display: inline-block;
	float: left;
	margin-top: 6px;
	margin-left: .1rem;		
}
</style>
