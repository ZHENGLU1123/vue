<template>
	<div class="quan">
	  <div class="slider">
			<swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide><img src="../../static/CggUFlmZOtCAdn9hAAIKjsC60Uk573.jpg"></swiper-slide>
        <swiper-slide><img src="../../static/CggUF1magKyACaxCAAHYBkaeSi4505.jpg"></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
		</div> 
		<div class="week">
			<h2>本周奢品惠</h2>
			<div class="list">
				<ul>
					<li v-for="val in pro_list.list_01"><img :src="val.imgurl"><div class="price"><p>{{val.price}}</p><span>{{val.yuanjia}}</span></div></li>
				</ul>
			</div>	
		</div>
		<div class="rangli">
			<h2>奢品甄选让利</h2>
			<img src="../../static/CggUFlmVPYmAPnPwAAEl5sjv3OY259.jpg">
		</div>
		<div class="rmai">
			<h3>热卖品牌推荐</h3>
			<img src="../../static/CggUF1kpQpOABo1TAAJNoAHxyeA810.jpg">
			<div class="bao">
				<ul>
					<li v-for="val in pro_list.list_02"><img :src="val.imgurl"><p>{{val.dec}}</p><span>{{val.jiage}}</span></li>
				</ul>
			</div>
		</div>
		<div class="rmai remai">
			<img src="../../static/CggUF1mBidCABt-jAAJSnz6aiOs441.jpg">
			<div class="bao">
				<ul>
					<li v-for="val in pro_list.list_02"><img :src="val.imgurl"><p>{{val.dec}}</p><span>{{val.jiage}}</span></li>
				</ul>
			</div>
		</div>
		<div class="rmai remai">
			<img src="../../static/CggUF1kpQqSAaPq-AAJPIpzeN3Y792.jpg">
			<div class="bao">
				<ul>
					<li v-for="val in pro_list.list_02"><img :src="val.imgurl"><p>{{val.dec}}</p><span>{{val.jiage}}</span></li>
				</ul>
			</div>
		</div>
		<div class="rmai remai">
			<img src="../../static/CggUFlmBi8uAecYtAAJFMg6N6U8581.jpg">
			<div class="bao">
				<ul>
					<li v-for="val in pro_list.list_02"><img :src="val.imgurl"><p>{{val.dec}}</p><span>{{val.jiage}}</span></li>
				</ul>
			</div>
		</div>
		<div class="rmai remai">
			<img src="../../static/CggUF1kpQr6AElqtAAJWauU_zio438.jpg">
			<div class="bao">
				<ul>
					<li v-for="val in pro_list.list_02"><img :src="val.imgurl"><p>{{val.dec}}</p><span>{{val.jiage}}</span></li>
				</ul>
			</div>
		</div>
		<div class="rmai remai">
			<img src="../../static/CggUF1mBouGACuwhAAJIc4lFk1Y306.jpg">
			<div class="bao">
				<ul>
					<li v-for="val in pro_list.list_02"><img :src="val.imgurl"><p>{{val.dec}}</p><span>{{val.jiage}}</span></li>
				</ul>
			</div>
		</div>
		<div class="sepin">
			<h2>奢品推荐</h2>
			<ul>
				<li v-for="val in food_list.list">{{val.name}}</li>
			</ul>
		</div>
		<div class="list_tu">
			<ul class="active">
				<li v-for="(val,index) in product_list.product_01"><router-link :to="'/'+index"><img :src="val.imgurl"><span>{{val.dec}}</span><p>¥{{val.price}}<b>¥{{val.yuanjia}}</b></p><i></i></router-link></li>
			</ul>
			<ul>
				<li v-for="val in product_list.product_02"><img :src="val.imgurl"><span>{{val.dec}}</span><p>¥{{val.price}}<b>¥{{val.yuanjia}}</b></p><i></i></li>
			</ul>
			<ul>
				<li v-for="val in product_list.product_03"><img :src="val.imgurl"><span>{{val.dec}}</span><p>¥{{val.price}}<b>¥{{val.yuanjia}}</b></p><i></i></li>
			</ul>
			<ul>
				<li v-for="val in product_list.product_04"><img :src="val.imgurl"><span>{{val.dec}}</span><p>¥{{val.price}}<b>¥{{val.yuanjia}}</b></p><i></i></li>
			</ul>
		</div>

	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import $ from 'jquery'
export default {
    name: 'carrousel',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          loop:true,
          notNextTick: true,
          autoplay: 3000,/*自动播放*/
          direction : 'horizontal',/*轮播方向*/
          pagination : '.swiper-pagination',
          autoplayDisableOnInteraction:false
        },
        swiperOption01:{
        	direction:'vertical',
        	loop:true,
        	autoplay: 3000,/*自动播放*/
        	autoplayDisableOnInteraction:false
        },
					food_list:this.$store.state.list,
					pro_list:this.$store.state.list_tu,
					product_list:this.$store.state.list_p
      }
    },
    mounted(){
    	$('.sepin ul li').eq(0).addClass('active');
    	$('.sepin ul li').click(function(){
				$(this).addClass('active').siblings().removeClass('active');
   			$(".list_tu ul").eq($(this).index()).addClass('active').siblings().removeClass('active');
			})
		}
};

</script>

<style scoped>
.quan {
	width: 100%;
	height: 100%;
	background: #f5f5f5;
	overflow: hidden;
}
.slider{
	padding-top: 1.07rem;
}
.slider img{
	width: 6.4rem;
	height: 3.2rem;
	display: block;
}
.week{
	position: relative;
	width: 100%;
	height: 4.46rem;
}
.week h2{
	margin-top: .3rem;
	background: #fff;
	width: 100%;
	height: .76rem;
	line-height: .76rem;
	padding-left: .17rem;
	font-size: .25rem;
	color:#333;
}
::-webkit-scrollbar {/*隐藏滚轮*/
	display: none;
}
.list{
	background: #f5f5f5;
	position:absolute;
	left:0;
	top:.76rem;
	overflow-x:scroll; 
	width: 100%;
	height:3.7rem;
	border: solid 0.08rem #f5f5f5;
	border-radius: 0.06rem;	
	box-sizing:border-box; 	
}
.list ul {
	width: 30.55rem;
	height: 3.50rem;
}
.list ul li {
	float: left;
	margin-right: .15rem;
	overflow: hidden;
}
.list ul li img{
	width: 2.2rem;
	height: 2.74rem;
	display: block;
}
.price{
	width: 2.2rem;
	height: .8rem;
	background: #a47f65;
  text-align: center;	
}
.price p{
	font-size: .24rem;
	color:#ffefd1;
	padding-top: .1rem;
	height: .4rem;
}
.price span{
	font-size: 0.17rem;
	color:#b4b4b4;
	text-decoration: line-through;
}
.rangli{
	background: #fff;
	margin-top: .1rem;
	margin-bottom: .15rem;
}
.rangli h2{
	width: 100%;
	height: .76rem;
	line-height: .76rem;
	font-size: .16rem;
	padding-left: .2rem;
	color:#666;
}
.rangli img{
	width: 6.22rem;
	height: 2.19rem;
	display: block;
	margin:0 auto;
	border-radius: 0.04rem;
}
.rmai {
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 8.40rem;
	background: #fff;
}
.rmai h3{
	width: 100%;
	height: .76rem;
	line-height: .76rem;
	font-size: .16rem;
	padding-left: .2rem;
	color:#666;	
}
.rmai img{
	width: 6.22rem;
	height: 4.71rem;
	display: block;
	margin:0 auto;
	margin-top: 8px;
}
.bao{
	width: 100%;
	height: 3rem;
	position: absolute;
	top:5.54rem;
	left: 0;
	overflow-x:scroll; 
	border-left:solid 9px #fff;		
	border-right:solid 9px #fff;		
}
.bao ul {
	width: 30.6rem;
	height: 3rem;
}
.bao ul li{
	width: 2.04rem;
	height: 3rem;
	float: left;
	text-align: center;
}
.bao ul li p{
  text-overflow:ellipsis;	
  display: block;
  width: 1.7rem;
  height: .34rem;
  white-space: nowrap;  
  font-size:.2rem;
  color:#333;
  text-align: center;
  overflow: hidden;
  margin:-0.17rem .17rem 0 .17rem;
}
.bao ul li span{
	display: block;
	width: 1.7rem;
	font-size: .2rem;
	color:#666;
  font-family: Arial;
}
.bao ul li img{
	width: 1.77rem;
	height: 1.77rem;
	padding:.17rem;
	display: block;
}
.remai{
	height: 7.79rem;
	margin-top: .17rem;
}
.remai .bao{
	top:4.75rem;
}
.sepin {
	margin-top: .17rem;
	background: #fff;
	width: 100%;
	height: 100%;
}
.sepin h2{
	width: 100%;
	height: .76rem;
	line-height: .76rem;
	font-size: .16rem;
	padding-left: .2rem;
	color:#666;		
}
.sepin ul {
	overflow: hidden;
	height: .68rem;
	width: 6.22rem;
	margin-left: .18rem;
}
.sepin ul li {
	float: left;
	width: 1.39rem;
	height: .68rem;
	text-align: center;
	font-size: .24rem;
	line-height: .68rem;
}
.sepin ul li.active{
	color:#d61518;
	border-bottom:solid 2px #d61518;
}
.list_tu ul{
	overflow: hidden;
	width: 100%;
	display: none;
}
.list_tu ul li{
	background: #fff;
	float: left;
	width: 3.01rem;	
	margin: 0.08rem;
}
.list_tu ul li img{
	float: left;
	width: 3rem;
	height: 3rem;
	margin: 0 auto;
}
.list_tu ul li span{
	overflow: hidden;
	display: block;
	width: 2.65rem;
	line-height: .3rem;
	font-size:.24rem;
	color:#333;
	height: .61rem;
	padding-left: .18rem;
	text-align: left;
	margin-bottom:5px;
  text-overflow:ellipsis;
  display: -webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient: vertical;
  padding-top:8px;
}
.list_tu ul li p{
	display: inline-block;
	font-size: .24rem;
	color:#d61518;
	padding-left: .18rem;	
	line-height: .4rem;
}
.list_tu ul li p b{
	font-style: normal;
	font-size: .2rem;
	color:#999;
	text-decoration: line-through;
	width: 1.02rem;
	display: inline-block;
	padding-left:.1rem;	
}
.list_tu ul li i{
	float: right;
	width: .16rem;
	height: .16rem;
	background: url(../../static/xing.png) no-repeat;
	padding-top: .15rem;
	padding-right: .3rem;
}
.list_tu ul.active{
	display: block;
}
</style>
