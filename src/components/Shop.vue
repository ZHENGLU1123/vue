<template>
  <div class="sho">
    <div class="shop">
    	购物车
			<div @click="btn()">
				<span v-if="get">返回</span>
				<span v-else>编辑</span>
			</div>
    </div>
    <div class="wu" v-if="data_01.length">
    	<ul>
    		<li v-for="val in data_01">
    			<div class="text"><p>满减</p><span>购满199.00元,即可享受满减</span></div>
					<div class="li_bottom">
						<i></i>
						<img :src="val.imgurl">
						<span>{{val.dec}}</span><br>
						<h4>&yen;{{val.price}}</h4>
						<div class="add"><span class="jian" @click="jianCar()">-</span><div class="num">{{num}}</div><span class="jia" @click="addCar()">+</span></div>
						<p v-show="get" @click="clear()">删除</p>
					</div>
    		</li>
    	</ul>
    	<div class="bottom">
    		<i></i><h1>全选</h1><span>合计 ：<b>&yen;{{totalprice}}</b></span><p>去结算</p>
    	</div>
    </div>
	<div class="xi" v-else>
	    <div class="deng">
	    	<span>登陆后您才可以进行更多操作，并同步电脑与手机购物车的商品哦～</span>
				<a href="">去登录</a>
	    </div>
	    <div class="tu">
	    	<img src="../../static/cartNone_02.png">
	    </div>
	    <div class="shou"><a href="http://localhost:8080/#/home/tuijian">去首页逛逛</a></div>
	</div>

  </div>
</template>

<script>	
export default {
	data(){
		return {
			get:false,
			num:1,
			data_01:{}
		}
	},
	methods:{
		btn(){
			if(this.get==true){
				this.get=false;
			}else{
				this.get=true;
			}
		},
		addCar(){
			return this.num++;
		},
		jianCar(){
			if(this.num-1){
				return this.num--;
			}
		},
		clear(){
			return window.localStorage.clear();
		}
	},
	computed:{
		totalprice(){
			var data = JSON.parse(window.localStorage.getItem('items'));
			var ddd = data[0].price;
			return ddd*this.num;
		}
	},
	beforeMount(){
		return this.data_01 = JSON.parse(window.localStorage.getItem('items') || '[]');
	}
}
</script>

<style scoped>
.shop{
	position: absolute;
	top:0;
	left: 0;
	font-size: .16rem;
	color:#333;
	font-weight: 700;
	line-height: .48rem;
	text-align: center;
	width: 100%;
	border-bottom:solid 1px #f5f5f5;
	background: #fff;
}
.shop span{
	color:#797979;
	font-size:.14rem;
	position: absolute;
	right: .2rem;
	top:0;
}
.wu{
	padding-top: .48rem;
}
.wu ul li{
	height:100%;
}
.text{
  height: .33rem;
  padding:.1rem .25rem 0 .45rem;
  width: 100%;
}
.text p{
  border: solid 1px #d61518;
  color: #d61518;
  padding: 1px;
  border-radius: 0.02rem;
  margin-right: 0.05rem;
  display: inline-block;
  font-size: .14rem;
}
.text span{
	font-size:.14rem;
	color:#333;
	line-height: .27rem;
}
.li_bottom {
	margin-left: .15rem;
	overflow: hidden;
	width: 6.1rem;
	height: 1.16rem;
	padding: .1rem .15rem;
	position: relative;
}
.li_bottom img{
	width: .9rem;
	height: .9rem;
	float: left;
	margin-right: .1rem;
	margin-left:.1rem;
}
.li_bottom span{
  font-size: .14rem;
  font-weight: 600;
  color:#333;
	line-height: .27rem;
}
.li_bottom h4{
	font-size: .18rem;
	font-weight: 600;
	color:#d61518;
	line-height: .25rem;
	display: inline-block;
	padding-top:.15rem;
}
.li_bottom i{
	float: left;
	background: url(../../static/g.png) no-repeat center center;
	width: .16rem;
	height: .16rem;
	position: absolute;
	top:50%;
	left:0;
	margin-top: -0.08rem;
}
.num{
  border: solid 1px #e8e8e8;
  float: left;
  font-size: .14rem;
  min-width: .4rem;
  text-align: center;
  box-sizing: border-box;
  height: .24rem;
}
.add{
	height: .24rem;
	float: right;
	margin-top: .17rem;	
}
.jian{
	float: left;
	width: .17rem;
	height: .24rem;
	border: solid 1px #e8e8e8;
	text-align: center;
	box-sizing: border-box;
	border-right: none;
}
.jia{
	float: left;
	width: .19rem;
	height: .24rem;
	border: solid 1px #e8e8e8;
	text-align: center;
	box-sizing: border-box;
	border-left: none;
	border-radius: 0 0.03rem 0.03rem 0;

}
.li_bottom p{
	position: absolute;
	bottom:.1rem;
	right: .1rem;
	border:solid 1px #f5f5f5;
	padding:0 0.03rem;
	color:#000;
	background: #f5f5f5;
}
.bottom {
	width: 6.4rem;
	height: .5rem;
	position: fixed;
	bottom:.62rem;
	left: 0;
	padding-left: .1rem;
	line-height: .5rem;
	overflow: hidden;
	background: linear-gradient(#fff,#f4f4f4);
	border-top:solid 1px #f4f4f4;
}
.bottom i{
	float: left;
	background: url(../../static/g.png) no-repeat center center;
	width: .16rem;
	height: .16rem;
	position: absolute;
	top:50%;
	left:.1rem;
	margin-top: -0.08rem;
}
.bottom h1{
	margin-left:.24rem;
	display: inline-block;
	font-size:.16rem;
	color:#333;
}
.bottom span{
	font-size: .14rem;
	font-weight: 600;
	color:#d61518;
	margin-left: .20rem;
}
.bottom p{
  height: 50px;
  background-color: #d61518;
  color: #fff;
  line-height: 50px;
  font-size: 16px;
  font-weight: 600;
  float: right;
  padding: 0 .2rem;
}
.deng{
	padding-top: .49rem;
	width: 100%;
	height:100%;
	line-height: 0.44rem;
	font-size: .12rem;
	color:#666;
	background: #f5f5f5;
	padding-left: .1rem;
}
.deng a{
	float: right;
	width: .74rem;
	height: .34rem;
	padding:0.05rem 0.15rem;
	border:solid 1px #666;
	border-radius: 0.05rem;
	font-size:.14rem;
	line-height: .34rem;
	margin-right: .6rem;
	margin-top:.1rem;
	text-align: center;
}
.deng span{
	float: left;
	width:4.48rem;
	font-size:.12rem;
}
.tu{
	height: 100%;
}
.tu img{
	width: 6.4rem;
	height: 3.81rem;
	padding-top: .2rem;
}
.shou {
	text-align: center;
	margin-top: .3rem;
}
.shou a{
	width: 60%;
	padding: 0.1rem 0.4rem;
	border: solid 1px #d61518;
	border-radius: 0.05rem;
	font-size: 0.2rem;
	font-weight: 600;
	background-color: #d61518;
	color: #fff;
}
  
</style>
