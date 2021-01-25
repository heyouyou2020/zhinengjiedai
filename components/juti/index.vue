<template>
  <div class="image">
    <img src="../../assets/image/all.jpg" alt="">
    <div class="title">
      <span >欢迎你,{{userName}}</span>
      <span  class="sp-an" @click="zhuxiao">注销</span>
      <span>{{riqi}}</span>
      <span>{{xingqi}}</span>
    </div>
    <div class="conten">
        <div class="top">
            <span class="yulan">问题详览</span>
            <span class="wenzi" @click="goback">返回</span>
        </div>
        <div class="juti-title">{{message.title}}</div>
        <div class="juti-content">{{message.content}}</div>
    </div>
  </div>  
</template>
<script>
import './index.less'
import { userData } from '../../services'
export default {
    data() {
        return{
            total: 200,
            xingqi: '',
            riqi: '',
            userName: '',
            time: '',
            title: '',
            message: {},
        }
    },
    methods: {
        zhuxiao() {
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
        goback() {
           this.$router.go(-1)
        },
        find() {},
        handleClick() {
        },
    },
    created() {
        this.getTime()
        const name = userData.getUserData()
        this.userName = name
        this.$axios.get('/zhjw/znjd/questionDetail/' + this.$route.params.id).then(res => {
          console.log(res)
          if (res.data.code === 0) {
            this.message = res.data.data
          }
        }
        )
    },
}
</script>
