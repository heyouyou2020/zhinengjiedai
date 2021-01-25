<template>
  <div class="imagetwo">
      <img src="../../assets/image/all.jpg" alt="">
      <div class="title">
        <span>欢迎你,{{userName}}</span>
        <span class="sp-an" @click="zhuciao">注销</span>
        <span>{{riqi}}</span>
        <span>{{xingqi}}</span>
      </div>
      <div class="conten">
          <div class="top">
              <span class="bianhao">您的编号</span>
              <span class="number">{{number}}</span>
              <span class="math">前方还有{{number}}人排队</span>
              <span class="time">取号时间:  {{time}}</span>
          </div>
          <div class="bottom">
              <span class="agin" @click="jiaohao">重新叫号</span>
              <span class="dayin"><img src="../../assets/image/daying.png" alt="">打印</span>
          </div>
      </div>
      <div class="back" @click="goback">返回</div>
  </div>
</template>
<script>
import { userData } from '../../services'
import './index.less'
export default {
    data() {
        return{
            riqi: '',
            xingqi: '',
            userName: '',
            number: '',
            time: '',
        }
    },
    methods: {
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
        zhuciao() {
          this.$confirm('确定退出吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            userData.removeUserData()
            window.sessionStorage.removeItem('SdjiedaiToken')
            this.$router.push({
              name: 'home'
            })
          })
        },
        goback() {
            this.$router.go(-1)
        },
        jiaohao() {
          this.$axios.get('/zhjw/znjd/jh').then(res => {
          if (res.data.code === 0) {
            this.number = res.data.data.num
            this.time = res.data.data.time
          }
         })
        },
    },
    created() {
      this.$axios.get('/zhjw/znjd/jh').then(res => {
        if (res.data.code === 0) {
          this.number = res.data.data.num
          this.time = res.data.data.time
        }
      })
      this.getTime()
      const name = userData.getUserData()
      this.userName = name
    },
}
</script>
