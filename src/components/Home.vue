<template>
		<div class="cont">
		  <div class="top">
		  	<div class="search">
		  		<div class="search_left"><img src="../../static/logo.png"></div>
		  		<div class="search_mid"><i></i><span>搜索 商品 分类 品牌</span></div>
		  		<div class="search_right"><img src="../../static/app.png"></div>
		  	</div>
			  <div class="cata_nav">
				  <div class="cate_list">
				  	<router-link to='/home/tuijian'>推荐</router-link>
				  	<router-link to='/home/quanqiu'>全球奢品</router-link>
				  	<router-link to='/home/haohuo'>跨境好货</router-link>
				  	<router-link to='/home/yundong'>运动达人</router-link>
				  	<router-link to='/home/nvshen'>女神有范</router-link>
				  	<router-link to='/home/nanzhuang'>男装优选</router-link>
				  	<router-link to='/home/xiebao'>潮流鞋包</router-link>
				  </div>
				</div>
			</div>	
		  <router-view></router-view>
		</div>
</template>

<script>
export default{

}
</script>

<style scoped>
.top{
	position: fixed;
	top:0;
	left:0;
	z-index: 4;
	background: #fff;
}
.search{
	overflow: hidden;
	height: 0.45rem;
}
.search_left{
	width: 0.48rem;
	height: 0.45rem;
	float: left;
}
.search_left img{
	width: 0.38rem;
	height: 0.35rem;
	padding-top:0.05rem;
	padding-left:0.05rem;
}
.search_mid{
	float: left;
	width: 5.44rem;
	height: 0.27rem;
	background: #ededed;
	margin-top: 0.09rem;
	text-align: center;
	font-size: 0.12rem;
	line-height: 0.3rem;
}
.search_mid i{
	display: inline-block;
	width: 0.18rem;
	height: 0.18rem;
	background: url(../../static/fang.png) no-repeat center center;
	background-size:cover;
	margin-right: 0.03rem;
}
.search_right{
	width: 0.48rem;
	height: 0.45rem;
	float: right;
}
.search_right img{
	width: 0.38rem;
	height: 0.35rem;
	padding-top:0.05rem;
	padding-left:0.05rem;
}
::-webkit-scrollbar {
	display: none;
}
.cata_nav{
	position: absolute;
	width: 100%;
	height: 0.65rem;
	overflow-x:scroll;
	left:0;
	top:.45rem;	
	background: #fff;
}
.cate_list {
	width: 8.96rem;
	height: 0.62rem;
}
.cate_list a{
	float: left;
	font-size:0.22rem;
	line-height: 0.62rem;
	color:#000;
	width: 1.28rem;
	text-align: center;
	position: relative;
	box-sizing: border-box;
}
.cate_list a.router-link-exact-active{
	color: #de0a0e;
	border-bottom:solid 3px red;
}
</style>
