<template>
  <div class="home">
    <img src="../../assets/image/beijing.png" alt="">
    <div class="conten">
      <div class="login">
        <div class="left">
          <span>{{riqi}}</span>
          <span>{{xingqi}}</span>
        </div>
        <div class="right">
          <span @click="login" v-show="show">登录</span>
          <span @click="submit" v-show="show">注册</span>
          <span v-show="!show">{{username}},欢迎你</span>
          <span v-show="!show" @click="gocenter">个人中心</span>
          <span @click="zhuxiao" v-show="!show">注销</span>
        </div>
      </div>
      <div class="sfjz">
        <img src="../../assets/image/sfjz.png" alt="">
        <div class="maozi">
          <img src="../../assets/image/maozi.png" alt="">
          <span>司法救助平台</span>
        </div>
      </div>
      <!-- 四个框部分 -->
      <div class="fangkuang">
        <img src="../../assets/image/one.png" alt="" class="first">
        <img src="../../assets/image/two.png" alt=""  @click="gojiuzhu">
        <img src="../../assets/image/three.png" alt="" @click="goshenqing">
        <img src="../../assets/image/four.png" alt="" @click="gojindu">
      </div>
      <!-- 案例模块 -->
      <div class="anli">
        <div class="alltiem">
          <div class="top-item">
          <span class="zhanshi">救助案例展示</span>
          <span class=more>更多</span>
        </div>
         <ul>
           <li v-for="item in znliList" :key="item.id" @click="clickWatch(item.id)">{{item.title}}</li>
         </ul>
        </div>
         <div class="alltiem">
          <div class="top-item">
          <span class="zhanshi">救助法律法规</span>
          <span class=more>更多</span>
        </div>
         <ul>
           <li v-for="item in faguiList" :key="item.id" @click="clickWatch(item.id)">{{item.title}}</li>
           <li>xxxxxxxxxxxxxxxxxxxxxx</li>
           <li>xxxxxxxxxxxxxxxxxxxxxx</li>
           <li>xxxxxxxxxxxxxxxxxxxxxx</li>
           <li>xxxxxxxxxxxxxxxxxxxxxx</li>
         </ul>
        </div>
         <div class="alltiem">
          <div class="top-item">
          <span class="zhanshi">救助公示</span>
          <span class=more>更多</span>
        </div>
         <ul>
           <li v-for="item in gsList" :key="item.id" @click="clickWatch(item.id)">{{item.title}}</li>
           <li>xxxxxxxxxxxxxxxxxxxxxx</li>
           <li>xxxxxxxxxxxxxxxxxxxxxx</li>
           <li>xxxxxxxxxxxxxxxxxxxxxx</li>
         </ul>
        </div>
        <div class="alltiem">
          <div class="top-item">
            <span class="zhanshi">救助政策</span>
            <span class=more>更多</span>
          </div>
         <ul>
           <li v-for="item in zcList" :key="item.id" @click="clickWatch(item.id)">{{item.title}}</li>
           <li>xxxxxxxxxxxxxxxxxxxxxx</li>
           <li>xxxxxxxxxxxxxxxxxxxxxx</li>
         </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "./index.less"
import { Vm } from '../../config'
import { userData } from '../../services'
export default {
  data(){
    return{
      show: this.$store.state.show,
      username: '',
      riqi:'',
      xingqi: '',
      znliList: [],
      faguiList: [],
      gsList: [],
      zcList: []
    }
  },
  methods:{
    login() {
      Vm.$emit('getLogin',true)
    },
    clickWatch(id) {},
    getTime(){
      const nowDate = new Date()
      const date = {
        year: nowDate.getFullYear(),
        month: nowDate.getMonth()+1,
        date:nowDate.getDate(),
        day:nowDate.getDay()
      }
      let mouth = ''
      let day = ''
      // 月
      if (date.month < 10) {
        mouth = '0' + date.month
      } else {
        mouth = date.month
      }
      //日
      if (date.date < 10) {
          day = '0' + date.date
      } else {
          day = date.date
      }
      this.riqi = date.year + '-' + mouth+ '-'+day
      const arr= ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
      console.log(date)
      this.xingqi = arr[date.day]
    },
    submit() {
      Vm.$emit('getLogin',true)
    },
    // 视图重新渲染时异步 
    zhuxiao() {
      this.$confirm('确定退出吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        userData.removeUserData()
        window.sessionStorage.removeItem('jiuzheToken')
        this.$store.commit('true')
        this.show= true
      })
    },
    gocenter() {
      this.$router.push({
        name: 'Personal',
      })
    },
    gojiuzhu() {
      console.log(111)
      this.$router.push({
        name: 'JiuZhu'
      })
    },
    goshenqing() {
      console.log(111)
      this.$router.push({
        name: 'ShengQing'
      })
    },
    gojindu() {
      console.log(111)
      this.$router.push({
        name: 'Personal'
      })
    },
  },
  created(){
    //  获取月份 星期
    this.getTime()
    Vm.$on('getnum',value=>{
      this.username=value
    })
    if(userData.getUserData()){
      const accont=userData.getUserData()
      this.username=accont 
      this.show=false 
    }
    this.$axios.get('/zhjw/sfjz/all/information').then(res => {
      console.log(res)
      if (res.data.code === 0) { 
        this.znliList = res.data.data.jzalzz
        this.faguiList = res.data.data.jzflfg
        this.gsList = res.data.data.jzgs
        this.zcList = res.data.data.jzzc
        console.log(this.znliList)
      }
    })
  }, 
  mounted() {
    Vm.$on('getdisp',value => {
      this.show = value
    })
  } 
}
</script>
