<template>
  <div class="image">
      <img src="../../assets/image/all.jpg" alt="">
      <div class="title">
        <span v-show="show">欢迎你,{{userName}}</span>
        <span v-show="show" class="sp-an" @click="zhuciao">注销</span>
        <span v-show="!show"  class="sp-an" @click="login">登录</span>
        <span>{{riqi}}</span>
        <span>{{xingqi}}</span>
      </div>
      <div class="fuwu-image">
        <span>
          <img src="../../assets/image/1.png" alt="" @click="jiaohao">
          <img src="../../assets/image/2.png" alt="" @click="hist">
          <img src="../../assets/image/3.png" alt="" @click="zixun">
        </span>
      </div>
  </div>
</template>
<script>
import './index.less'
import { userData } from '../../services'
export default {
  data() {
    return {
      show: '',
      userName: '',
      xingqi: '',
      riqi: '',
    }
  },
  methods:{
    zhuciao() {
      this.$confirm('确定退出吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            userData.removeUserData()
            window.sessionStorage.removeItem('SdjiedaiToken')
            this.show = false
            this.$router.push({
              name: 'home'
            })
          })
    },
    jiaohao() {
      console.log(11111)
      this.$router.push({
        name: 'jiaohao',
      })
    },
    hist() {
      this.$router.push({
        name: 'hist'
      })
    },
    zixun() {
      this.$router.push({
        name: 'zixun',
      })
    },
    login() {
      this.$router.push({
        name: 'login'
      })
    },
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
  },
  created() {
    this.getTime()
    if(userData.getUserData()) {
      this.show = true
      const name = userData.getUserData()
      this.userName = name
    }else {
      this.show = false
    }
  }
    
}
</script>