<template>
  <div>
  	<div class="fanhui"">
  		<a href="http://localhost:8080/#/zuan/tui"></a>人气优品
  	</div>
    <div class="chanp">
    	<ul>
    		<li v-for='val in food_list.lists'><img :src="val.imgurl" />
				<div class="text"><p>{{val.pin}}</p><span>{{val.dec}}</span><i>{{val.people}}</i>人喜欢<b></b><em>{{val.price}}</em></div>
    		</li>
    	</ul>
    </div>
  </div>
</template> 

<script>
export default {
	data(){
		return {
			food_list:this.$store.state.foodlist
		}
	}
}
</script>

<style scoped>
.fanhui{
	position: fixed;
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
a{
	display: inline-block;
	width: .2rem;
	height: .2rem;
	background: url(../../static/f.png) no-repeat center center;
	position: absolute;
	left: .15rem;
	top:50%;
	margin-top:-.1rem;
}
.chanp{
	padding-top: .5rem;
}
.chanp ul li {
	width: 6.4rem;
	height: 3.28rem;
	padding:.37rem 0;
	border-bottom:solid .2rem #f5f5f5;	
}
.chanp ul li img{
	width: 2.31rem;
	height: 2.31rem;
	float: left;
	margin-left:.28rem;
	margin-right: .17rem;
}
.text{
	width: 2.92rem;
	height: 2.21rem;
	float: left;
	margin-top: .26rem;
	font-size: .2rem;
	line-height: .25rem;
	color:#d61518;
}
.text p{
	font-size: .25rem;
	color:#333;
	line-height: .42rem;
}
.text span {
	font-size: .2rem;
	color:#666;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  height: .98rem;
  line-height: .32rem;	
}
.text em{
	font-style: normal;
	float: right;
	margin-top: .22rem;
}
.text b{
	background: url(../../static/heart.png) no-repeat center center;
	display: inline-block;
	width: .25rem;
	height: .25rem;
}
</style>
