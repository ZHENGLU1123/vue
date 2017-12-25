import Vue from 'vue'
import App from './App'
import router from './router'
import './scss/reset.scss'
import './js/rem.js'
import './js/vue.min.js'
import './scss/swiper.min.css'
import VueResource from 'vue-resource'
import store from './store'

Vue.use(VueResource)

let vm = new Vue({
	store
});
vm.$http.get('/static/data/data.txt').then(({bodyText})=>{
	vm.$store.state.foodlist = JSON.parse(bodyText);
	new Vue({
	  el: '#app',
	  router,
	  store,
	  template: '<App/>',
	  components: { App }
	})
});
vm.$http.get('/static/data/data1.txt').then(({bodyText})=>{
	vm.$store.state.list = JSON.parse(bodyText);
	new Vue({
	  el: '#app',
	  router,
	  store,
	  template: '<App/>',
	  components: { App }
	})
});
vm.$http.get('/static/data/data2.txt').then(({bodyText})=>{
	vm.$store.state.listp = JSON.parse(bodyText);
	new Vue({
	  el: '#app',
	  router,
	  store,
	  template: '<App/>',
	  components: { App }
	})
});
vm.$http.get('/static/data/data3.txt').then(({bodyText})=>{
	vm.$store.state.list_tu = JSON.parse(bodyText);
	new Vue({
	  el: '#app',
	  router,
	  store,
	  template: '<App/>',
	  components: { App }
	})
});
vm.$http.get('/static/data/data4.txt').then(({bodyText})=>{
	vm.$store.state.list_p = JSON.parse(bodyText);
	new Vue({
	  el: '#app',
	  router,
	  store,
	  template: '<App/>',
	  components: { App }
	})
});

