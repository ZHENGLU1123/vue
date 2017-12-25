<template>
  <div>
  	<div class="top">
  		<a href="http://localhost:8080/#/home/quanqiu"></a>
  		<ul>
  			<li>商品</li>
  			<li>详情</li>
  			<li>客服</li>
  		</ul>
  	</div>
  	<div class="contain">
			<div class="cont" v-for="val in product_01">
				<img :src="val.imgurl">
				<h2>【GUCCI】[支持自提] GUCCI {{val.dec}}7</h2>
				<p>¥{{val.price}}<span>¥{{val.yuanjia}}</span></p>
			</div>
			<div class="xuan">
				<span class="yan">颜色：蓝色</span>
				<span class="size">尺码：//</span>
				<i></i>
			</div>
			<div class="you">
				<span>优惠</span>
				<p>满减换：满199.00元减30.00@@满299.00元减50.00</p>
			</div>
			<div class="zheng">
				<ul>
					<li>正品保障</li>
					<li>七天退换</li>
					<li>全场包邮</li>
				</ul>
			</div>
			<div class="erek">
				<img src="../../static/CgkeMldqYVjxdlkMAAAR2PRP_YA319.jpg">
				<span>GUCCI</span>
				<i></i>
			</div>
			<div class="hui"></div>
			<div class="bottom">
				<p>为您推荐<span>查看更多<i></i></span></p>
				<ul>
					<li><img src="../../static/CggUFlfXocWAN9kgAAZuRTgHFtw215=350x4096.jpg"><div class="text">[支持自提] BURBERRY  巴宝莉 新品男款钱包3997585</div><span>¥3590.00<i>¥4700.00</i></span></li>
					<li><img src="../../static/CggUFlfXocWAN9kgAAZuRTgHFtw215=350x4096.jpg"><div class="text">[支持自提] BURBERRY  巴宝莉 新品男款钱包3997585</div><span>¥3590.00<i>¥4700.00</i></span></li>
					<li><img src="../../static/CggUFlfXocWAN9kgAAZuRTgHFtw215=350x4096.jpg"><div class="text">[支持自提] BURBERRY  巴宝莉 新品男款钱包3997585</div><span>¥3590.00<i>¥4700.00</i></span></li>
					<li><img src="../../static/CggUFlfXocWAN9kgAAZuRTgHFtw215=350x4096.jpg"><div class="text">[支持自提] BURBERRY  巴宝莉 新品男款钱包3997585</div><span>¥3590.00<i>¥4700.00</i></span></li>
					<li><img src="../../static/CggUFlfXocWAN9kgAAZuRTgHFtw215=350x4096.jpg"><div class="text">[支持自提] BURBERRY  巴宝莉 新品男款钱包3997585</div><span>¥3590.00<i>¥4700.00</i></span></li>
					<li><img src="../../static/CggUFlfXocWAN9kgAAZuRTgHFtw215=350x4096.jpg"><div class="text">[支持自提] BURBERRY  巴宝莉 新品男款钱包3997585</div><span>¥3590.00<i>¥4700.00</i></span></li>
				
				</ul>
			</div>
		</div>
		<div class="jia">
			<ul>
				<li><img src="../../static/c_03.png"><span>客服</span></li>
				<li><img src="../../static/c_05.png"><span>收藏</span></li>
				<li><img src="../../static/c_07.png"><span>购物车</span></li>
			</ul>
			<div class="gou">立即购买</div>
			<a href="http://localhost:8080/#/a/shop" @click="jiaru"><div class="che">加入购物车</div></a>
		</div>	
  </div>	
</template>

<script>
import $ from 'jquery'
export default {
  data(){
		return {
			"product_01":[{
				"imgurl":"../static/CggUFlkJTEeATn2bAAXkw0tvqK0792=360x4096.jpg",
				"dec":"古驰 新品时尚男款钱包手拿包408831 CWCLN 8497",
				"price":4799,
				"yuanjia":6200,
				"id":1
			}]
		}
	},
	methods:{
		jiaru(){
			var aaa = this.product_01;
			if(window.localStorage){
				localStorage.setItem("items",JSON.stringify(aaa))
			}
		}
	}
}
</script>

<style scoped>
.top{
	width: 100%;
	height: .48rem;
	background:#fff;
	position: fixed;
	top:0;
	left:0;
	border-bottom:solid 1px #f5f5f5;
	z-index: 4;
}
.top a{
	width: .48rem;
	height: .48rem;
	float: left;
	background: url(../../static/f.png) no-repeat center center;
	background-color: #f5f5f5;
}
.top ul{
	overflow: hidden;
	margin: 0 .48rem;
}
.top ul li{
	float: left;
	line-height: .48rem;
	font-size:.18rem;
	width: 33.333%;
	text-align: center;
	color:#333;
}
.cont{
	margin-top: .48rem;
}
.cont img{
	width: 6.4rem;
	height: 6.4rem;
	display:block;
}
.cont h2{
	margin:.19rem .28rem;
	font-size:.24rem;
	color:#333;
	line-height: .37rem;
	max-height: .74rem;
}
.cont p{
	font-size:.3rem;
	color:#d61518;
	margin-left: .28rem;
	line-height: 1;
}
.cont p span{
	font-size:.2rem;
	color:#999;
  text-decoration: line-through;
  margin-left:.13rem;
}
.xuan {
	width: 5.83rem;
	height: .62rem;
	border:solid 1px #f5f5f5;
	border-radius: 0.08rem;
	margin:0 auto;
	margin-top:.19rem;
	padding:0 .17rem;
	line-height: .62rem;
  box-sizing: border-box;	
  position: relative;
}
.yan{
	float: left;
  height: .5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: .2rem;
  color:#666;
  width: 2.73rem;
  padding-right: .1rem;	
  overflow: hidden;
  border-right:solid 1px #f5f5f5;
  margin-top:0.06rem;
  line-height: .5rem;
}
.size{
	float: left;
	height: 100%;
	padding-left: .17rem;
	padding-right:.1rem;
  font-size: .2rem;
  color:#666;
  width: 2.1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; 	
}
.xuan i{
	position: absolute;
	width: .29rem;
	height: .62rem;
	background:url(../../static/xiayige.png) no-repeat center center;
}
.you{
	overflow: hidden;
	margin:0 auto;
	margin-top:.19rem;
	width: 5.83rem;
	height: .35rem;
	line-height: .35rem;	
}
.you span{
	float: left;
	width: .62rem;
	height: .35rem;
	background-color: #d61518;
	color:#fff;
	font-size:.22rem;
	height:.34rem;
	line-height: .34rem;
	text-align: center;
	border-radius:.04rem;
}
.you p{
	font-size:.2rem;
	color:#d61518;
	margin-left: .8rem;
}
.zheng{
	margin-top: .13rem;
	width: 100%;
	height: 100%;
	border-bottom:solid 1px #f5f5f5;
	border-top:solid 1px #f5f5f5;
}
.zheng ul{
	width: 5.83rem;
	height: .23rem;
	margin: .16rem .28rem .24rem .28rem;
}
.zheng ul li{
	float: left;
	font-size:.2rem;
	line-height: 1;
	color:#9775a5;
	width: 1.94rem;
	text-align:center;
}
.erek{
	position: relative;
	overflow: hidden;
}
.erek img{
	margin-left: .28rem;
	width: 1.43rme;
	height: .8rem;
	float: left;
}
.erek span{
	float: left;
	font-size:.2rem;
	line-height: .8rem;
	color:#666;
	padding-left: .5rem;
}
.erek i{
	position: absolute;
	right:.3rem;
	width: .29rem;
	height: .8rem;
	background:url(../../static/xiayige.png) no-repeat center center;	
}
.hui{
	background: #f5f5f5;
	width: 100%;
	height: .17rem;
}
.bottom{
	padding-left: .17rem;
	line-height: .56rem;
}
.bottom p{
	font-size:.24rem;
	color:#333;
}
.bottom p span{
	font-size: .2rem;
	color:#666;
	float: right;
	width: 1.2rem;
	padding-right:.3rem;
	position: relative;
}
.bottom p span i{
	position: absolute;
	top:50%;
	margin-top: -.12rem;
	right:.3rem;
	width: .29rem;
	height: .24rem;
	background:url(../../static/xiayige.png) no-repeat center center;		
}
.bottom ul{
	overflow: hidden;
	width: 100%;
}
.bottom ul li{
	width: 33.333%;
	float: left;
	position: relative;
	padding-bottom: .4rem;
}
.bottom ul li img{
	width: 1.96rem;
	height: 2.32rem;
	float: left;
}
.text{
	float: left;
  font-size: 0.2rem;
  line-height: .25rem;
  height: .5rem;
	width:1.95rem;
  color: #333;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin: .08rem 0;
}
.bottom ul li span{
	font-size:.17rem;
	color:#d61518;
  font-weight: 700;
  margin-top:-.1rem;
  position: absolute;
  bottom:0;
  left:0;
	overflow: hidden;  
	width:100%;
}
.bottom ul li span i{
	margin-left: .05rem;
  font-size: .12rem;
  text-decoration: line-through;
  color: #999;	
  font-style: normal;
}
.jia {
	overflow: hidden;
	position: fixed;
	bottom:0;
	left:0;
	background: #fff;
	height: 0.6rem;
}
.jia ul{
	float: left;
	overflow: hidden;
	width: 2.64rem;
	height: 100%;
}
.jia ul li{
	float: left;
	width: .88rem;
	height: .6rem;
	text-align: center;
	position: relative;
	border-left:solid 1px #f5f5f5;
	border-right:solid 1px #f5f5f5;
}
.jia ul li img{
	margin-top: .06rem;
	width:.35rem;
	height:.27rem;
}
.jia ul li span{
	display: block;
	font-size:5px;
	line-height: .1rem;
	height: .1rem;

}
.gou{
	float: left;
	width: 1.88rem;
	height: .6rem;
	background: #ff5356;
	color:#fff;
	line-height: .6rem;
	text-align: center;
	font-size:.18rem;			
}
.che{
	float: left;
	width: 1.88rem;
	height: .6rem;	
	background: #d61518;
	color:#fff;
	line-height: .6rem;
	text-align: center;
	font-size:.18rem;	
}
</style>
