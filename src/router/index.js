import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Zuan from '@/components/Zuan'
import Renqi from '@/components/Renqi'
import Shop from '@/components/Shop'
import Me from '@/components/Me'
import Tuijian from '@/components/Tuijian'
import Quanqiu from '@/components/Quanqiu'
import Haohuo from '@/components/Haohuo'
import Nvshen from '@/components/Nvshen'
import Nanzhuang from '@/components/Nanzhuang'
import Xiebao from '@/components/Xiebao'
import Yundong from '@/components/Yundong'
import Tui from '@/components/Tui'
import Pinpai from '@/components/Pinpai'
import Nanzhuan from '@/components/Nanzhuan'
import Nvbao from '@/components/Nvbao'
import Nanbao from '@/components/Nanbao'
import Xiang from '@/components/Xiang'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home/tuijian'
    },
    {
      path: '/home',
      component: Home,
      children:[{
        path:'/home/tuijian',
        component:Tuijian,
      },
      {
        path:'/home/quanqiu',
        component:Quanqiu,
      },
      {
        path:'/home/haohuo',
        component:Haohuo,
      },
      {
        path:'/home/yundong',
        component:Yundong,
      },
      {
        path:'/home/nvshen',
        component:Nvshen,
      },
      {
        path:'/home/nanzhuang',
        component:Nanzhuang,
      },
      {
        path:'/home/xiebao',
        component:Xiebao,
      }],
      redirect(to){
        return to.path+"/tuijian";
      }
    },
    {
      path: '/zuan',
      component: Zuan,
      children:[{
        path:'/zuan/tui',
        component:Tui,
      },
      {
        path:'/zuan/pinpai',
        component:Pinpai,
      },
      {
        path:'/zuan/nanzhuan',
        component:Nanzhuan,
      },
      {
        path:'/zuan/nanbao',
        component:Nanbao,
      },
      {
        path:'/zuan/nvbao',
        component:Nvbao,
      }],
      redirect(to){
        return to.path+"/tui";
      }
    },
    {
      path: '/a/renqi',
      component: Renqi
    },
    {
      path: '/a/shop',
      component: Shop
    },
    {
      path: '/a/me',
      component: Me
    },
    {
      path: '/:id',
      component:Xiang
    }]
})
