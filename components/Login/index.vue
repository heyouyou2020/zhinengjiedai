<template>
  <div class="image">
    <img src="../../assets/image/all.jpg" alt="">
      <div class="title">
        <span class="sp-an" @click="goback">返回首页</span>
        <span>{{riqi}}</span>
        <span>{{xingqi}}</span>
      </div>
      <div class="login">
          <div v-show="show1" class="photo" id="fir-img">
              <img src="../../assets/image/login.png" alt="">
              <span @click="login">请将身份证放在读卡器上,进行登录</span>
          </div>
          <div v-show="show2" class="photo">
              <img src="../../assets/image/succed.png" alt="">
          </div>
          <div v-show="show3" class="photo">
              <img src="../../assets/image/defaut.png" alt="">
          </div>
      </div>
  </div>
</template>
<script>
import './index.less'
import { userData } from '../../services'
import { Vm } from '../../config'
export default {
    data() {
        return {
          show1: true,
          show2: false,
          show3: false,
          riqi: '',
          xingqi: '',
        }
    },
    methods: {
        goback() {
            this.$router.push({
                name: 'home',
            })
        },
        login() {
            this.$axios.post('/zhjw/znjd/login', {
              idcardNum: '430432199509563222',
              realName: '杨子温',
              password: '12345678'
            }).then(res => {
              console.log(res)
            if (res.data.code === 0) {
              this.show1 = false
              this.show2 = true
              window.sessionStorage.setItem('SdjiedaiToken', res.data.data.znjdToken)
              // window.sessionStorage.setItem('sfjzTableId', res.data.data.userId)
              userData.setUserData(res.data.data.realName)
            }else {
               this.$message.error('账号或密码错误')
            }
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
    },
}
</script>
