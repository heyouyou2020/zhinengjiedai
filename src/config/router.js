import Vue from "vue"
import VueRouter from "vue-router"
const Home = () => import('../components/Home');
const JiuZhu = () => import('../components/JiuZhu');
const Personal = () => import('../components/Personal');
const ShengQing = () => import('../components/ShengQing');

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
         name:'JiuZhu',
         path:'/JiuZhu',
         component:JiuZhu 
      },
      {
         name:'Personal',
         path:'/Personal',
         component:Personal
      }, 
      {
         name:'ShengQing',
         path:'/ShengQing',
         component:ShengQing
      },
   ]
})