import Vue from "vue"
import VueRouter from "vue-router"
import { userData } from '../services'
const Home = () => import('../components/Home');
const Login = () => import('../components/Login');
const JiaoHao = () => import('../components/JiaoHao');
const Hist = () => import('../components/Hist');
const xiangqing = () => import('../components/xiangqing');
const Zixun = () => import('../components/Zixun');
const lishi = () => import('../components/lishi');
const juti = () => import('../components/juti');

Vue.use(VueRouter);
export default new VueRouter({
   routes:[
      {
         path:'/',
         redirect:'/home'
      },
      {
         name:'home',
         path:'/home',
         component:Home 
      },
      {
         name:'login',
         path:'/login',
         component:Login 
      },
      {
         name:'jiaohao',
         path:'/jiaohao',
         component:JiaoHao,
         beforeEnter: (to, from, next) => {
            const accont = window.sessionStorage.getItem('SdjiedaiToken')
            if (!accont) {
                next({
                    path: '/login'
                })
            } else {
                next()
            }
        }
      }, 
      {
         name:'hist',
         path:'/hist',
         component:Hist,
         beforeEnter: (to, from, next) => {
            const accont = window.sessionStorage.getItem('SdjiedaiToken')
            if (!accont) {
                next({
                    path: '/login'
                })
            } else {
                next()
            }
        }
      },
      {
         name:'zixun',
         path:'/zixun',
         component:Zixun,
         beforeEnter: (to, from, next) => {
            const accont = window.sessionStorage.getItem('SdjiedaiToken')
            if (!accont) {
                next({
                    path: '/login'
                })
            } else {
                next()
            }
        }
      },
      {
         name:'xiangqing',
         path:'/xiangqing/:id/:type',
         component:xiangqing
      },
      {
        name:'lishi',
        path:'/lishi',
        component:lishi
      },
      {
        name:'juti',
        path:'/juti/:id',
        component:juti
      },
   ]
})