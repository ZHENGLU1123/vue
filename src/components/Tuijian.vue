<template>
	<div class="tui">
	  <div class="slider">
			<swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide><img src="../../static/CggUFlmVEA6AIEDIAAHTat6wl-s902=720x4096.jpg"></swiper-slide>
        <swiper-slide><img src="../../static/CggUF1mTsauAZ9-cAAEXYbtusSI568=720x4096.jpg"></swiper-slide>
        <swiper-slide><img src="../../static/CggUFlmVJCuANlDFAACqJavTgTw975=720x4096.jpg"></swiper-slide>
        <swiper-slide><img src="../../static/CggUF1mT06SAeaLhAAIMAz3rHwQ834=720x4096.jpg"></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
		</div>
		<div class="menu">
			<ul>
				<li><img src="../../static/CggUFlmSkqCAd6j3AAAyZr33nJg714=120x4096.png"><span>新人专享</span></li>
				<li><img src="../../static/CggUF1mSkqaAKSnqAAAv8S8bBg8804=120x4096.png"><span>签到领卷</span></li>
				<li><img src="../../static/CggUF1mSkqqAP_5kAAA5rU5f_Jw081=120x4096.png"><span>拼团</span></li>
				<li><img src="../../static/CggUFlmSkq-AXA4RAAAzeheYQec463=120x4096.png"><span>门店特惠</span></li>
				<li><img src="../../static/CggUFlmSkrSAdz4BAAAs0X5KpmE577=120x4096.png"><span>分类</span></li>
			</ul>
		</div>
		<div class="xinxi">
			<p>星语心愿</p><b></b>
			<swiper :options="swiperOption01" ref="mySwiper">
        <!-- slides -->
        <swiper-slide><span>奢品甄选 低至399元</span></swiper-slide>
        <swiper-slide><span>早秋新风尚 全场199减30 299减50</span></swiper-slide>
        <swiper-slide><span>相约七夕  奢品一件9折</span></swiper-slide>
        <swiper-slide><span>跨境囤货指南  爆款品牌9折</span></swiper-slide>
        <!-- Optional controls -->
      </swiper>
		</div>
		<div class="cont01">
			<img src="../../static/CggUFlmakPWAd4TWAADBC2-UcB0166=720x4096.png">
		</div>
		<div class="cont02">
			<div class="cont02_left">
				<span>品质抢购</span>
				<b>更多></b>
				<p>距结束还有
					<div class="time">
						<span id="t_h05"></span>:<span id="t_m05"></span>:<span id="t_s05"></span>:
		   		</div>
   			</p>
				<div class="shang">
					<img src="../../static/CggUF1mNdaCAR3AhAAhgJMYszv0483=140x4096.png">
					<div class="yuan">
						<p>¥149<br><span>¥49</span></p>
					</div>
				</div>
				<div class="xia shang" >
					<img src="../../static/CggUFlmNaROAHETGAA_DoQ4sanQ906=140x4096.png">
					<div class="yuan">
						<p>¥843<br><span>¥1543</span></p>
					</div>
				</div>
			</div>
			<div class="cont02_right">
				<div class="cont02_shang">
					<img src="../../static/CggUFlmagg6AFfNpAAAvHgaeD6I852=360x4096.png">
					<div class="cont02_text">
						<p>跨境囤货指南</p>
						<span>爆款品牌9折</span>
					</div>
				</div>
				<div class="cont02_xia">
					<img src="../../static/CggUF1mVKjmAey3VAACKyjdjF1g662=360x4096.jpg">
					<div class="cont02_text">
						<p>新人有礼</p>
						<span>只为不一样的你</span>
					</div>
				</div>
			</div>
		</div>
		<div class="bannerThree"><img src="../../static/CggUFlmT6oOAG-v0AAD0lwABZPE370=720x4096.png"></div>
		<div class="goodNewTitle">
			<h1>好物新选</h1>
			<h2>为您精心挑选</h2>
		</div>
		<div class="hong">
			<h3>鸿星尔克</h3>
			<img src="../../static/CggUFlmasb2AebRoAABWD9v5a-I098.jpg">
			<ul>
				<li><img src="../../static/CggUF1mashGAEzNbAAAQg6DgKfQ629.jpg"><span>¥169.00</span></li>
				<li><img src="../../static/CggUFlmashiAUzOUAAANjKEtpmQ350.jpg"><span>¥139.00</span></li>
				<li><img src="../../static/CggUF1mashWAOJF2AAAPm_bxe-8880.jpg"><span>¥159.00</span></li>
				<li><img src="../../static/CggUFlmashyAaLSFAAAODJuF6os154.jpg"><span>¥109.00</span></li>
			</ul>
			<div class="time01">剩余时间
				<span id="t_d01"></span>天<span id="t_h01"></span>时<span id="t_m01"></span>分
   		</div>
		</div>
		<div class="hong">
			<h3>科颜氏</h3>
			<img src="../../static/CggUF1masqWAZKxIAABV2Sb1dQw252.jpg">
			<ul>
				<li><img src="../../static/CggUFlmaswWAJcMZAAANugeAPI0586.jpg"><span>¥258.00</span></li>
				<li><img src="../../static/CggUF1masw2ATiPvAAAOXkgUVBs413.jpg"><span>¥408.00</span></li>
				<li><img src="../../static/CggUF1maswqACY4tAAASG0uHQas903.jpg"><span>¥258.00</span></li>
				<li><img src="../../static/CggUFlmasxCADaRPAAAM_m9NxrM214.jpg"><span>¥245.00</span></li>
			</ul>
			<div class="time01">剩余时间
				<span id="t_d02"></span>天<span id="t_h02"></span>时<span id="t_m02"></span>分
   		</div>
		</div>
		<div class="hong juman">
			<h3>茵曼</h3>
			<img src="../../static/CggUF1matAeAX3DhAABMddSH23M927.jpg">
			<ul>
				<li><img src="../../static/CggUF1matDWAF-JvAAAOf5TLdLc561.jpg"><span>¥119.00</span></li>
				<li><img src="../../static/CggUFlmatDyADwWgAAAdVwlJKyo227.jpg"><span>¥99.00</span></li>
				<li><img src="../../static/CggUFlmatDmAX0vYAAAPSUIReJE975.jpg"><span>¥149.00</span></li>
				<li><img src="../../static/CggUF1matECAcCHeAAANhJpAfY4153.jpg"><span>¥109.00</span></li>
			</ul>
			<div class="time01">剩余时间
				<span id="t_d03"></span>天<span id="t_h03"></span>时<span id="t_m03"></span>分
   		</div>
		</div>
		<div class="hong xianzi">
			<h3>仙子宜岱</h3>
			<img src="../../static/CggUFlmatSGAP8qkAAB9RS9pnbM031.jpg">
			<ul>
				<li><img src="../../static/CggUFlmatTqANSJiAAAKweIkn18993.jpg"><span>¥89.00</span></li>
				<li><img src="../../static/CggUF1matUGAWVTUAAAI2IYyIR8212.jpg"><span>¥69.00</span></li>
				<li><img src="../../static/CggUF1matT6ADscVAAAL_ohkqZ4815.jpg"><span>¥69.00</span></li>
				<li><img src="../../static/CggUFlmatUWAZTvKAAARhXS3IiI798.jpg"><span>¥49.00</span></li>
			</ul>
			<div class="time01">剩余时间
				<span id="t_d04"></span>天<span id="t_h04"></span>时<span id="t_m04"></span>分
   		</div>
		</div>
		<div class="goodNewTitle good01">
			<h1>人气优品</h1>
			<h2>有态度的奥莱优品！只为最美的你精心选购</h2>
		</div>
		<div class="product_list">
			<ul>
				<li>
					<img src="../../static/CggUF1hXgJmAbDmyAAEiWV62fAQ606.jpg">
					<p>AHC</p>
					<span>非常容易起泡，泡沫非常细腻，质感很好，很适合敏感肌，洗完之后感觉很温和，没有刺激感。</span>
					<i>3456人喜欢<img src="../../static/heart.png"></i>
					<b>¥149.00</b>
				</li>
				<li>
					<img src="../../static/CggUF1mab0qAAkcmAABpa0V8IDc668.jpg">
					<p>春雨</p>
					<span>卢卡黑黑蜂蜜面膜含有丰富的欧洲进口的黑卢卡精华，黑卢卡精华是棒棒哒精油类的性质，镇定肌肤非常棒哦~</span>
					<i>9877人喜欢<img src="../../static/heart.png"></i>
					<b>¥115.00</b>
				</li>
				<li>
					<img src="../../static/CggUFlmab1uAXYCIAAAo_hwOYzE894.jpg">
					<p>OTHERMIX七格格</p>
					<span>简约时尚的小圆领，穿着显气质哦~版式款型挺好的，设计时尚新颖，面料舒适柔软，穿着很减龄的感觉哦！！！</span>
					<i>6713人喜欢<img src="../../static/heart.png"></i>
					<b>¥189.00</b>
				</li>
			</ul>
			<div class="more">
				查看更多 >
			</div>
		</div>
		<div class="goodNewTitle good01">
			<h1>门店热卖</h1>
			<h2>为您精选全国门店热度优品</h2>
		</div>
		<div class="anta">
			<h4>深圳-安踏KIDS-实体店</h4>
			<p>太阳当空照<span>低至3.2折</span></p>
			<img src="../../static/CggUFlmabueAQY17AAFbH-pVEFU621.jpg">
			<ul>
				<li><img src="../../static/CggUF1lJ2AqARmRzAAVc6fwSlQ8841.jpg"><span>¥139.00</span></li>
				<li><img src="../../static/CggUFlkK5JKAQLE6AAEgBfngGWQ838.jpg"><span>¥99.00</span></li>
				<li><img src="../../static/CggUF1lM2SKAJkuMAAV_TX1HA0w223.jpg"><span>¥99.00</span></li>
			</ul>
		</div>
		<div class="anta">
			<h4>深圳-幻走moveup-实体店</h4>
			<p>时尚态度 做我自己<span>低至5折</span></p>
			<img src="../../static/CggUF1macJSAV4T2AACqFlNc2Ig592.jpg">
			<ul>
				<li><img src="../../static/CggUF1lodkuAWRwEAAWPX26fWqY809.jpg"><span>¥450.00</span></li>
				<li><img src="../../static/CggUF1logHqAYEdyAAMukaUZH5I814.jpg"><span>¥300.00</span></li>
				<li><img src="../../static/CggUF1lojA-AWjyzAAMJmSaI2QY648.jpg"><span>¥400.00</span></li>
			</ul>
		</div>
		<div class="anta">
			<h4>深圳-新秀丽-实体店</h4>
			<p>随我型动<span>32元起</span></p>
			<img src="../../static/CggUFlmaccSAZYwqAACugccQ8UU231.jpg">
			<ul>
				<li><img src="../../static/CggUFllbA8iAT8JcAAEWCdg5glw981.jpg"><span>¥230.00</span></li>
				<li><img src="../../static/CggUFllbDEyAa__OAANZX3pr_Eg162.jpg"><span>¥99.00</span></li>
				<li><img src="../../static/CggUFlmaNmWAcVLUAAF2g2eYaak770.jpg"><span>¥69.00</span></li>
			</ul>
		</div>
		<div class="anta">
			<h4>深圳-HSIA.遐-实体店</h4>
			<p>青春大放异彩<span>低至5折</span></p>
			<img src="../../static/CggUFlmL7GWAFu9gAABPjY-bJSk133.jpg">
			<ul>
				<li><img src="../../static/CgkeMlduJGbCNEyOAALCI694xxo490.jpg"><span>¥105.00</span></li>
				<li><img src="../../static/CgkeMlduGpzjsfVVAACmf2uz8Dw751.jpg"><span>¥137.00</span></li>
				<li><img src="../../static/CggUF1ly6J-ALJE3AAcJPh0RKus183.jpg"><span>¥319.00</span></li>
			</ul>
		</div>
		<div class="good02">
			<h1>美妆专场</h1>
			<h2>面子不能丢</h2>
			<img src="../../static/CggUF1mbhWOAPeqcAAGsausk2JQ809.jpg">
			<div class="hua">
				<div class="ahc">
					<span class="pin">AHC品牌场</span>
					<span class="hufu">护肤不放松</span><i></i>
				</div>
				<ul>
					<li><img src="../../static/CggUF1hXgJmAbDmyAAEiWV62fAQ606.jpg"><p>¥89.00<span>¥131.00</span></p></li>
					<li><img src="../../static/CggUFlhOYxSAVSYLAATJI-4GtU4190.jpg"><p>¥186.00<span>¥299.00</span></p></li>
					<li><img src="../../static/CggUFllXD2eAULJeAAbZGfa7Hys290.png"><p>¥65.00<span>¥94.00</span></p></li>
				</ul>
			</div>	
		</div>
		<div class="banmei">
			<div class="hua">
				<div class="ahc">
					<span class="pin">兰芝</span>
					<span class="hufu">扮美有腔调</span><i></i>
				</div>
				<ul>
					<li><img src="../../static/CggUF1jGWdeAMP4DAAMfQUmY33Q415.jpg"><p>¥36.00<span>¥64.00</span></p></li>
					<li><img src="../../static/CggUF1kn452ANQERAAIySo1jdX0082.jpg"><p>¥399.00<span>¥508.00</span></p></li>
					<li><img src="../../static/CggUF1k-JNOAI7HhAAMuuZg9ib0058.png"><p>¥159.00<span>¥209.00</span></p></li>
				</ul>
			</div>
		</div>
		<div class="pinpai">
			<div class="pinpai_top">
				<h1>为你推荐</h1>
				<h2>为你推荐您喜欢的单品及新款商品</h2>
			</div>
			<div class="pinp">
				<p class="pinl">品类新款</p>
				<p class="pinpa">品牌新款</p>
			</div>
		</div>
		<div class="pinlei">
			<div class="xiuxian">
				<div class="x">
					<p>休闲裤</p>
					<span>潮流时尚</span><i></i>
				</div>
				<div class="xiuxian_left">
					<img src="../../static/CggUF1kVQt6AbukyAAggUJghNn8345.jpg"><span>牛仔九分裤男小脚休闲裤破洞9分裤水洗复古男士牛仔</span><p>¥178.00<b>¥712.00</b></p><i></i>
				</div>
				<div class="xiuxian_right">
					<img src="../../static/CggUF1kVY3eASb-pAALgPQQCkH4940.jpg"><span>2017男士小脚裤 新款修身青年长裤拼接流行男裤纯色休闲裤男</span><p>¥168.00<b>¥672.00</b></p><i></i>
				</div>
			</div>
			<div class="xiuxian">
				<div class="x">
					<p>连衣裙</p>
					<span>夏天夏天美美哒</span><i></i>
				</div>
				<div class="xiuxian_left">
					<img src="../../static/CggUFlkn2HaAebADAAZZSngqfcs868.jpg"><span>2017夏装新款民族风抽绳领口蓝色刺绣印花连衣裙短裙 6MB2168Y</span><p>¥179.00<b>¥729.00</b></p><i></i>
				</div>
				<div class="xiuxian_right">
					<img src="../../static/CggUF1kmbxKAakJUAAVeyAx05yU311.jpg"><span>2017夏装新款文艺清新高腰显瘦格子纯棉连衣裙中裙 1872102593</span><p>¥239.00<b>¥659.00</b></p><i></i>
				</div>
			</div>
			<div class="xiuxian">
				<div class="x">
					<p>男士运动鞋</p>
					<span>享受跑步乐趣</span><i></i>
				</div>
				<div class="xiuxian_left">
					<img src="../../static/CggUFlj9mZ-AJl-iAAPAvlthCFg626.jpg"><span>特步男子休闲鞋2017夏季新品TPU支撑减震时尚编织轻便透气跑步鞋983219392659</span><p>¥319.00<b>¥712.00</b></p><i></i>
				</div>
				<div class="xiuxian_right">
					<img src="../../static/CgkeMlcZyMuhJZv5AAFmCxqIOgI950.jpg"><span>情侣款复古时尚慢跑鞋  M530AAC</span><p>¥342.00<b>¥699.00</b></p><i></i>
				</div>
			</div>
			<div class="xiuxian">
				<div class="x">
					<p>精品女包</p>
					<span>包你满意</span><i></i>
				</div>
				<div class="xiuxian_left">
					<img src="../../static/CggUF1i9KiiAURV1AAKeYmymj_c980.jpg"><span>七彩金属牛皮短款钱包MP8332</span><p>¥199.00<b>¥869.00</b></p><i></i>
				</div>
				<div class="xiuxian_right">
					<img src="../../static/CgkeMlaA8jORkikgAAO5g4exHt8822.jpg"><span>原创信封单肩斜挎包01 1452-10</span><p>¥199.00<b>¥499.00</b></p><i></i>
				</div>
			</div>
			<div class="xiuxian">
				<div class="x">
					<p>高跟单鞋</p>
					<span>美的没道理</span><i></i>
				</div>
				<div class="xiuxian_left">
					<img src="../../static/CggUF1jc5hqAI0KRAAXAyL1xmCk732.jpg"><span>纯色优雅女鞋子 新款套脚尖头细高跟浅口单鞋</span><p>¥289.00<b>¥497.00</b></p><i></i>
				</div>
				<div class="xiuxian_right">
					<img src="../../static/CggUF1jPPPKAZqTDAADdcu-zRkY773.jpg"><span>女士经典黑色大气7厘米高跟单鞋 DWC171080501</span><p>¥339.00<b>¥998.00</b></p><i></i>
				</div>
			</div>
			<div class="xiuxian">
				<div class="x">
					<p>精品文胸</p>
					<span>性感魅惑</span><i></i>
				</div>
				<div class="xiuxian_left">
					<img src="../../static/CggUFlkP6vaAG0TQAAVtA7EtfRE431.jpg"><span>新品睫毛蕾丝薄款文胸 夏季性感透气女士超薄内衣胸罩  BD0249</span><p>¥183.00<b>¥229.00</b></p><i></i>
				</div>
				<div class="xiuxian_right">
					<img src="../../static/CgkeMlbnh_CTc8SFAASnuyrfDwc463.jpg"><span>条纹控正品奢华性感蕾丝上托超薄文胸薄款女内衣文胸 1383113</span><p>¥199.00<b>¥498.00</b></p><i></i>
				</div>
			</div>
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
        }
      }
    }
};
function getRTime01(){
  var End= new Date('2018/09/29 20:00:00');
  var Now = new Date();
  var t01 =End.getTime() - Now.getTime();
  var d01=Math.floor(t01/1000/60/60/24);
  var h01=Math.floor(t01/1000/60/60%24);
  var m01=Math.floor(t01/1000/60%60);
  var s01=Math.floor(t01/1000%60);
  h01 = checkTime(h01);
  m01 = checkTime(m01);
  s01 = checkTime(s01);
  $('#t_s05').html(s01);  
  $('#t_m05').html(m01);  
  $('#t_h05').html(h01);  
  $('#t_d01').html(d01);
  $('#t_h01').html(h01);
  $('#t_m01').html(m01);
  $('#t_d02').html(d01);
  $('#t_h02').html(h01);
  $('#t_m02').html(m01);
  $('#t_d03').html(d01);
  $('#t_h03').html(h01);
  $('#t_m03').html(m01);
  $('#t_d04').html(d01);
  $('#t_h04').html(h01);
  $('#t_m04').html(m01);
  function checkTime(i){
  	if(i<10){
  		i = '0' + i;
  	}
  	return i;
  }
}
setInterval(getRTime01,1000);

</script>

<style scoped>
.slider{
	padding-top: 1.07rem;
}
.slider img{
	width: 6.4rem;
	height: 3.2rem;
	display: block;
}
.menu{
	margin-top:0.27rem;
}
.menu ul{
	overflow: hidden;
	width: 100%;
}
.menu ul li{
	float: left;
	width: 20%;
	text-align: center;
}
.menu ul li img{
	width: 0.71rem;
	height: 0.6rem;
	display: block;
	margin: 0 auto;
}
.menu ul li span{
  font-size: 0.2rem;
  color: #060606;
  text-align: center;
  height: 0.36rem;
  display: inline-block;
  overflow: hidden;
}
.xinxi{
	margin-top: 0.17rem;
	margin-bottom: 0.17rem;
	width: 100%;
	height: 0.36rem;
	overflow: hidden;
	line-height: 0.36rem;
	font-size:0.20rem;
	color:#666;
}
.xinxi p{
	float: left;
	width: 1.06rem;
	margin-left:0.32rem;
	border-right: solid 1px #666;
}
.xinxi .span{
	display: inline-block;
	height: 2.16rem;
}
.xinxi .swiper-container{
	padding-left: 0.24rem !important;
	line-height: 0.36rem;
}
.cont01 img{
	width: 6.4rem;
	height: 1.78rem;
	display: block;
}
.cont02{
	overflow: hidden;
	margin-bottom: .15rem;
}
.cont02_left {
	float: left;
	margin-top: 0.17rem;
	margin-left:0.1rem;
	width: 2.95rem;
	height: 4.39rem;
	background: #ebecf0;
	border-radius: 5px;
	padding-left: .21rem;
	padding-top:.3rem;
}
.cont02_left span{
	font-size:0.27rem;
	color:#4d4d4d;
}
.cont02_left p{
	display: inline-block;
	font-size:.2rem;
	color:#666;
	line-height: .2rem;
}
.cont02_left b{
	font-size: .2rem;
	line-height: .2rem;
	color:#4d4d4d;
	padding:0 .51rem 0 .17rem;
}
.time{
	display: inline-block;
	width: 1.19rem;
	padding-left: .17rem;
}
.time span{
	background: #000;
	font-size:.2rem;
	line-height: .2rem;
	color:#fff;
	padding:0 2px;
	margin-left: 2px;
	border-radius: 2px;
}
.shang{
	width: 1.61rem;
	height: 1.61rem;
	padding-left: .27rem;
	position: relative;
}
.shang img{
	width: 1.69rem;
	height: 1.69rem;
}
.yuan {
	width: .88rem;
	height: .88rem;
	background: #ff5356;
	border-radius: 50%;
	position: absolute;
	left:1.39rem;
	top:3px;
	text-align: center;
}
.yuan p{
	padding-top: .2rem;
	font-size: .2rem;
	color:#fff;
}
.yuan p span{
	font-size: .15rem;
	color:#ffc2c3;
	text-decoration:line-through;
}
.xia{
	margin-top:.1rem;
}
.cont02_right{
	float: right;
	margin-right: .1rem;
	margin-top: .17rem;
}
.cont02_shang{
	position: relative;
}
.cont02_shang img{
	width: 3.16rem;
	height: 2.15rem;
	border-radius: 5px;
}
.cont02_text {
	position: absolute;
	top: .17rem;
	left:.13rem;
}
.cont02_text p{
	font-size: .27rem;
	color:#333;
	line-height: .54rem;
}
.cont02_text span{
	font-size: .2rem;
	color:#666;
}
.cont02_xia {
	position: relative;
}
.cont02_xia img{
	position: absolute;
	width: 3.16rem;
	height: 2.15rem;
	border-radius: 5px;
}
.bannerThree img{
	width: 6.4rem;
	height: 1.78rem;
	display: block;
}
.goodNewTitle{
	text-align: center;
	height: 1.32rem;
}
.goodNewTitle h1{
	font-size:.29rem;
	color:#1a1a1a;
	line-height: .27rem;
	height: .27rem;
	padding-top: .22rem;
	margin-bottom: .33rem;
	font-weight: 400;
}
.goodNewTitle h2{
	font-size: .2rem;
	color:#999;
	line-height: .27rem;
	height: .27rem;
	font-weight: 400;
	margin-bottom: .22rem;
}
.hong{
	border-top: solid 1px #666;
	overflow: hidden;
	padding-bottom: .44rem;
}
.hong h3{
	font-size:.26rem;
	color:#333;
	margin:.22rem 0;
	margin-left: .27rem;
	height: .42rem;
}
.hong img{
	width: 3.29rem;
	height: 3.06rem;
	margin-left: .28rem;
	margin-bottom: .35rem;
	float: left;
}
.hong ul{
	overflow: hidden;
	padding-left: .17rem;
}
.hong ul li{
	float: left;
	width: 1.24rem;
	height: 1.32rem;
	position: relative;
}
.hong ul li img{
	width: 1.24rem;
	height: 1.32rem;
	margin:0;
}
.hong ul li span{
	position: absolute;
	bottom:-2px;
	left:0;
	font-size: 0.2rem;
	text-align: left;
	color: #666;
}
.time01{
	float: right;
	font-size:0.2rem;
	color:#D61518;
	margin: 0.8rem 0.45rem 0 0.27rem;
	height: .2rem;
}
.juman ul li img{
	width: 1.24rem;
	height: 1.39rem;
}
.xianzi ul li img{
	margin-top: .1rem;
	width: 1.24rem;
	height: .94rem;
}
.good01{
	border-top:solid 0.18rem #f5f5f5;
	border-bottom:solid 1px #dedede;
}
.product_list ul{
	height: 9.13rem;
	overflow: hidden;
}
.product_list ul li{
	width: 6.4rem;
	height: 3.05rem;
	padding: 0.37rem 0.28rem;
	overflow: hidden;
	border-bottom: solid 1px #dddddd;
}
.product_list ul li img{
	width: 2.31rem;
	height: 2.31rem;
	float: left;
	margin-right: .17rem;
}
.product_list ul li p{
	font-size: .15rem;
	color:#000;
	font-weight: 400;
	line-height: .3rem;
}
.product_list ul li span{
	width: 3.25rem;
	height: .88rem;
	font-size: .2rem;
	color:#666;
	line-height: .3rem;
	margin-bottom: .28rem;
	display: inline-block;
}
.product_list ul li i{
	font-style: normal;
	font-size: .2rem;
	color:#D61518;
  vertical-align: text-top;
  display: inline-block;
  overflow: hidden;
}
.product_list ul li i img{
	width: .18rem;
	height: .18rem;
	float: right;
	margin-left: 15px;
}
.product_list ul li b{
	font-style: normal;
	font-size: .2rem;
	color:#D61518;
  vertical-align: text-top;
  overflow: hidden;
  float: right;
  margin-right: 8px;
}
.more{
	width: 6.4rem;
	height: .24rem;
	line-height: .24rem;
	padding-bottom: .45rem;
	margin-bottom: .17rem;
	text-align: center;
	color:#999;
	background: #fff;
	font-size: .24rem;
}
.anta{
	border-bottom: solid 1px #dddddd;
}
.anta h4{
	font-size: .27rem;
	color:#333;
	line-height: .25rem;
	font-weight: 400;
	padding: .28rem .3rem .2rem .27rem;
}
.anta p{
	font-size:.22rem;
	color:#4d4d4d;
	line-height: 0.2rem;
	padding-left:.27rem;
}
.anta p span{
	float: right;
	font-size: .22rem;
	line-height: .2rem;
	color:#D61518;
	padding: 0 .3rem .24rem .27rem;
}
.anta img{
	width: 5.8rem;
	height: 2.86rem;
	border-radius: 8px;
	margin: 0 .3rem 0.08rem .27rem;
}
.anta ul{
	overflow: hidden;
	padding-left:.27rem;
	padding-bottom: .46rem;
}
.anta ul li{
	float: left;
	margin-right: .17rem;
}
.anta ul li img{
	width: 1.87rem;
	height: 1.87rem;
	margin:0;
	padding:0;
}
.anta ul li span{
	display: block;
	text-align: center;
	color:#666;
	font-size: .24rem;
	height: .18rem;
	margin-top:3px;
}
.good02{
	border-top:solid 0.18rem #f5f5f5;
	border-bottom: solid 1px #dddddd;	
}
.good02 img{
	width: 5.84rem;
	height: 2.84rem;
	display: block;
	margin: 0 auto;
	margin-bottom: .22rem;
}
.good02 h1{
	text-align: center;
	font-size:.29rem;
	color:#1a1a1a;
	line-height: .27rem;
	height: .27rem;
	padding-top: .22rem;
	margin-bottom: .33rem;
	font-weight: 400;
}
.good02 h2{
	text-align: center;
	font-size: .2rem;
	color:#999;
	line-height: .27rem;
	height: .27rem;
	font-weight: 400;
	margin-bottom: .22rem;
}
.pin{
	font-size:.25rem;
	color:#333;
	width: 1.75rem;
	padding-left:.27rem;
	padding-right: .3rem;
  margin-top:.22rem;	
}
.hufu {
	font-size:.22rem;
	color:#999;
	width: 2.7rem;
  margin-top:.22rem;	
}
.ahc i{
	float: right;
	width: 16px;
	height: .34rem;
  background:url(../../static/xiayige.png) no-repeat;
  margin-top:8px;
  margin-right: .27rem;
}
.hua ul{
	overflow: hidden;
	margin-top: .1rem;
	width: 100%;
	padding-bottom: .27rem;
}
.hua ul li{
	float: left;
	text-align: center;
	width: 33.333%
}
.hua ul li img{
	width: 1.87rem;
	height: 1.87rem;
	display: block;
	margin: 0;
	padding:0;
}
.hua ul li p{
	font-size: .27rem;
	color:#333;
	line-height: .27rem;
}
.hua ul li p span{
	font-size:.2rem;
	text-decoration: line-through;
	color:#999;
	display: block;
}
.banmei{
	margin-top: .10rem;
	padding-bottom: .15rem;
	border-bottom:solid 0.18rem #f5f5f5;	
}
.banmei .pin{
	display: inline-block;
	width: 1.4rem;
}
.pinpai_top h1{
	text-align: center;
	font-size:.29rem;
	color:#1a1a1a;
	line-height: .27rem;
	height: .27rem;
	padding-top: .22rem;
	margin-bottom: .33rem;
	font-weight: 400;
}
.pinpai_top h2{
	text-align: center;
	font-size: .2rem;
	color:#999;
	line-height: .27rem;
	height: .27rem;
	font-weight: 400;
	margin-bottom: .22rem;
}
.pinp{
	padding-left: .27rem;
	border-bottom: solid 1px #ddd;	
	overflow: hidden;
}
.pinp p{
	float: left;
	width: 1.95rem;
	font-size: .28rem;
	line-height: .68rem;
	color:#1a1a1a;
	text-align: center;
	position: relative;
}
.banmei .ahc i{
	margin-top: 0.22rem;
}
.xiuxian{
	overflow: hidden;
	border-bottom: solid 1px #ddd;	
}
.x {
	padding:0 .27rem;
	height: .6rem;
	line-height: .6rem;
}
.x p{
	display: inline-block;
	font-size: .25rem;
	color:#333;
	padding-right: .25rem;
}
.x span{
	font-size: .22rem;
	color:#999;
}
.x i{
	float: right;
	width: 16px;
	height: .34rem;
  background:url(../../static/xiayige.png) no-repeat;
  margin-top:.2rem;
}
.xiuxian_left{
	float: left;
	width: 3.18rem;
	overflow: hidden;
	padding-left: .1rem;
	padding-bottom: .25rem;	
}
.xiuxian_left img{
	float: left;
	width: 3rem;
	height: 3rem;
	margin: 0 auto;
}
.xiuxian_left span{
	overflow: hidden;
	display: block;
	width: 2.65rem;
	line-height: .3rem;
	font-size:.23rem;
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
.xiuxian_left p{
	display: inline-block;
	font-size: .27rem;
	color:#333;
	padding-left: .18rem;	
	line-height: .4rem;
}
.xiuxian_left p b{
	font-style: normal;
	font-size: .2rem;
	color:#999;
	text-decoration: line-through;
	width: 1.02rem;
	display: inline-block;
	padding-left:.1rem;	
}
.xiuxian_left i{
	float: right;
	width: .16rem;
	height: .16rem;
	background: url(../../static/xing.png) no-repeat;
	padding-top: .15rem;
	padding-right: .3rem;
}
.xiuxian_right{
	width: 3.18rem;
	overflow: hidden;
	padding-left: .1rem;
	padding-bottom: .25rem;
}
.xiuxian_right img{
	float: left;
	width: 3rem;
	height: 3rem;
	margin: 0 auto;
}
.xiuxian_right span{
	overflow: hidden;
	display: block;
	width: 2.65rem;
	line-height: .3rem;
	font-size:.23rem;
	color:#333;
	height: .61rem;
	padding-left: .18rem;
	text-align: left;
	margin-bottom:5px;
  text-overflow:ellipsis;
  display: -webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient: vertical;
  padding-top:.1rem;
}
.xiuxian_right p{
	display: inline-block;
	font-size: .27rem;
	color:#333;
	padding-left: .18rem;	
	line-height: .4rem;
}
.xiuxian_right p b{
	font-style: normal;
	font-size: .2rem;
	color:#999;
	text-decoration: line-through;
	width: 1.02rem;
	display: inline-block;
	padding-left: 8px;	
}
.xiuxian_right i{
	float: right;
	width: .16rem;
	height: .16rem;
	background: url(../../static/xing.png) no-repeat;
	padding-top: .15rem;
	padding-right: .3rem;
}
</style>
