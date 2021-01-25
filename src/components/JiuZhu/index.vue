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
          <span v-if="show">登录</span>
          <span v-if="show">注册</span>
          <span v-if="!show">{{username}},欢迎你</span>
          <span v-if="!show" @click="gocenter">个人中心</span>
          <span @click="zhuxiao" v-if="!show">注销</span>
        </div>
      </div>
      <div class="sfjz">
        <img src="../../assets/image/sfjz.png" alt="">
        <div class="maozi">
          <img src="../../assets/image/maozi.png" alt="">
          <span>司法救助平台</span>
        </div>
      </div>
      <!-- 案例模块 -->
      <div class="biaoge">
        <h1>我要救助</h1>
        <div class="shenqing">申请人信息</div>
        <div class="one">
          <div class="left">
            <span>姓名</span>
           <input type="text" name="" id="" v-model="form.name">
          </div>
          <div class="right">
            <span>性别</span>
            <select name="" id="" v-model="form.sex" class="seled">
              <option value="1">男</option>
              <option value="0">女</option>
            </select>
          </div>
        </div>
        <div class="two">
          <div class="left">
            <span>身份证号</span>
           <input type="text" name="" id="" v-model="form.card">
          </div>
          <div class="right">
            <span>联系方式</span>
            <input type="text" name="" id="" v-model="form.mobile">
          </div>
        </div>
         <div class="one">
          <div class="teshuright">
            <span class="teshuspan">检察院</span>
            <el-cascader
              v-model="form.jianchayuan"
              :options="options"
              :props="props"
              class="seled"
              @change="change"
              :show-all-levels="false"
              clearable>
            </el-cascader>
          </div>
        </div>
        <div class="shenqing">救助资源信息</div>
        <div class="ziyuan">
          <span>求助资源</span>
          <input type="text" name="" id="" v-model="form.ziyuan">
        </div>
         <div class="time">
          <span class="jiuzhu">救助时间</span>
          <el-date-picker
            v-model="form.time"
            @change="change"
            type="daterange"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
         <div class="ziyuan">
          <span>资源所在地</span>
          <input type="text" name="" id v-model="form.space">
        </div>
        <div class="submit">
          <span @click="submit">提交</span>
          <span @click="goback">返回</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import './index.less'
import {Vm, router} from '../../config'
import { registAccount, registPwd, login, yanZhenMobile, yanZhenCard, yanZhenEmail } from '../../utils'
import {userData} from '../../services'
export default {
  data(){
    return{
      username:'',
      riqi: '',
      xingqi: '',
      show:this.$store.state.show,
      newdwbm: '',
      form: {
        name: '',
        sex: '',
        card: '',
        mobile: '',
        jianchayuan: '',
        ziyuan: '',
        time: ['', ''],
        space: '',
      },
      props:{
        multiple: false, 
        checkStrictly: true ,
        emitPath: false,
        label: 'dwmc',
        value: 'dwbm',
        children: 'nextLevel'
      },
      tongxingshow: true,
      options: [ 
      ],
      value: ''
    }
  },
  methods:{ 
    goback() {
     this.$router.go(-1)
    },
    change(value) {
      console.log(value)
      let that = this
      that.options.map(item => {
        if (item.dwbm == value) {
          that.newdwbm = item.dwmc
        }else {
          if (item.nextLevel) {
            that.$options.methods.findItem(item.nextLevel, value, that)
          }
        }
        return item
      })
    },
    findItem(list, value, that) {
      list.map(item => {
        if (item.dwbm == value) {
          that.newdwbm = item.dwmc
        }else {
          if (item.nextLevel) {
            that.$options.methods.findItem(item.nextLevel, value, that)
          }
        }
        return item
      })
    },
    submit() {
      // 提交申请
      for (var k in this.form) {
        if (this.form[k] == '') {
         this.tongxingshow = false
        }
      }
      if(!yanZhenMobile(this.form.mobile)){
          this.$message({ 
          message: '手机号码应为11位数字',
          type: 'warning'
        })
        return false
      }
      if(!yanZhenCard(this.form.card)){
          this.$message({ 
          message: '身份证号码应为15位或18位数字',
          type: 'warning'
        })
        return false
      }
      if (this.tongxingshow) {
        let formData = new FormData()
        formData.append("name", this.form.name)
        formData.append("userId", window.sessionStorage.getItem('sfjzTableId'))
        formData.append("sex", this.form.sex)
        formData.append("cardNo", this.form.card)
        formData.append("mobile", this.form.mobile)
        formData.append("dwbm", this.form.jianchayuan)
        formData.append("dwmc", this.newdwbm)
        formData.append("zyName", this.form.ziyuan)
        formData.append("startTime", this.form.time[0])
        formData.append("endTime", this.form.time[1])
        formData.append("zyAddress", this.form.space)
        this.$axios({
          url: '/zhjw/sfjz/zzsq',
          method: 'post',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(res => {
          console.log(res)
          if (res.data.code === 0) {
            this.$message.success('申请成功')
            this.$router.push({
              name: 'home'
            })
          }else{
            this.$message.error('申请失败')
          }
        }).catch(err => {
          this.$message('网络错误,提交失败')
        })
      }else {
        this.$message.error('请输入完整信息')
        return false
      }
    },
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
    // change() {
    //   console.log(this.time)
    // }
  },
  beforeRouteEnter(to,from,next){
    const accont = window.sessionStorage.getItem('jiuzheToken')
      if(accont){
        console.log(accont)
        next()
      }
      else{
        Vm.$emit('getLogin',true)
        next(false)
      }
    },
    created() {
      this.getTime()
      Vm.$on('getnum',value=>{
        this.username=value
      })
      if(userData.getUserData()){
        const accont=userData.getUserData()
        this.username=accont
        this.show=false  
      }
      this.$axios.get('/zhjw/petitioner/orgs').then(res => {
        console.log(res)
        if (res.data.code === 0) {
          this.options = res.data.data
        }
      })
    }
 }
</script>
