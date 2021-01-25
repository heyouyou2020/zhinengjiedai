<template>
  <div class="login-item">
     <div class="news-login">
          <span @click="loginshow" :class="isshow?active:band">登录</span>
          <span @click="logintrue" :class="isshow?band:active">注册</span>
     </div>
    <div class="login" v-if="isshow" >
          <div class="usename">
               <input type="text" placeholder="请输入身份证号码" v-model="loginCard">
          </div>
          <div class="usename">
               <input type="text" placeholder="请输入姓名" v-model="loginName">
          </div>
          <div class="password" >
               <input :type="ispsdshow?'password':'text'" placeholder="请输入密码" v-model="loginpsd">
               <button @click="isregisterpsd" v-if="loginpsd.length>0" >{{ispsdshow?str:unstr}}</button>
          </div>
          <div class="login-frowad" @click="login">
          登录
          </div>
     </div>
     <div class="register" v-if="istrue" >
          <div class="usename">
              <input type="text" placeholder="请输入姓名" v-model="registerName">
          </div>
          <div class="usename">
            <span class="sexpick">性别</span>
            <el-radio-group v-model="registerSex">
              <el-radio :label="1">男</el-radio>
              <el-radio :label="0">女</el-radio>
            </el-radio-group>
          </div>
          <div class="usename">
              <input type="text" placeholder="请输入身份证号码" v-model="registerCard">
          </div>
          <div class="usename">
              <input type="text" placeholder="请输入手机号码" v-model="registerNumber">
          </div>
          <div class="usename">
              <input type="text" placeholder="请输入住址" v-model="registerAddress">
          </div>
          <div class="usename">
              <input type="text" placeholder="请输入电子邮箱 (非必填)" v-model="registerEmail">
          </div>
          <div class="usename">
              <el-date-picker
                class="timepick"
                v-model="registerTime"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                type="date"
                width="100%"
                placeholder="选择出生日期">
              </el-date-picker>
          </div>
          <div class="password" >
               <input :type="ispsdshow?'password':'text'" placeholder="请输入密码" v-model="registerpsd">
               <button @click="isregisterpsd" v-if="registerpsd.length>0" >{{ispsdshow?str:unstr}}</button>
          </div>
          <div class="login-frowad" @click="summit">
               注册
          </div>
     </div>
    <div class="close-login" @click="clickme">X</div>
   </div>
</template>
<script>
import './index.less'
import { registAccount, registPwd, login, yanZhenMobile, yanZhenCard, yanZhenEmail } from '../../utils'
import { userData } from '../../services'
import { Vm } from '../../config'
export default {
  data(){
    return{
      isshow:true,
      istrue:false,
      active:'active',
      band:'',
      ispsdshow:true,
      str:'显示',
      unstr:'隐藏',
      loginCard:'',
      loginName:'',
      loginpsd:'',
      registerName:'',
      registerSex:'',
      registerCard:'',
      registerNumber:'',
      registerAddress:'',
      registerEmail:'',
      registerpsd:'',
      registerTime: '',  
     }
  },
  methods:{
    clickme(){
      this.data.close()
    },
    loginshow(){
       this.isshow=true,
       this.istrue=false
     },
     logintrue(){
       this.isshow=false,
       this.istrue=true
     },
     isregisterpsd(){   
       this.ispsdshow=!this.ispsdshow
     },
     summit(){
        // if (this.registerName == '' || this.registerCard == '' || 
        //    this.registerSex == '' || this.registerNumber == '' || 
        //    this.registerAddress == '' || this.registerTime == '' ||
        //    this.registerpsd == '') {
        //      this.$message.error('请输入必填信息')
        //      return false
        // }
        if(!yanZhenMobile(this.registerNumber)){
          this.$message({ 
          message: '手机号码应为11位数字',
          type: 'warning'
        })
          return false
        }
        if(!yanZhenCard(this.registerCard)){
          this.$message({ 
          message: '身份证号码应为15-18位数字,最后一位为数字或字母',
          type: 'warning'
        })
          return false
        }
        // if(!yanZhenEmail(this.registerEmail)){
        //   this.$message({ 
        //   message: '邮箱输入有误',
        //   type: 'warning'
        // })
        //   return false
        // }
       if(!registPwd(this.registerpsd)){
          this.$message({ 
          message: '密码应由数字或字母组成，长度不小于6且必须包含至少一个字母',
          type: 'warning'
        })     
          return false
        }
        this.$axios.post('/zhjw/sfjz/register', {
          createBy:'11111',
          idcardNum: this.registerCard,
          realName: this.registerName,
          password: this.registerpsd,
          sex: this.registerSex,
          birth: this.registerTime,
          email: this.registerEmail,
          addr: this.registerAddress,
          mobile: this.registerNumber
        }).then(res => {
          console.log(res)
          if (res.data.code === 0) { 
            this.$message.success('注册成功,现在可以登录了')
            this.isshow=true,
            this.istrue=false
          }
        })              
  },
    login(){
      this.$axios.post('/zhjw/sfjz/login', {
        idcardNum: this.loginCard,
        realName: this.loginName,
        password: this.loginpsd
      }).then(res => {
        console.log(res)
        if (res.data.code === 0) {
          window.sessionStorage.setItem('jiuzheToken', res.data.data.sfjzToken)
          window.sessionStorage.setItem('sfjzTableId', res.data.data.userId)
          userData.setUserData(this.loginName)
          Vm.$emit('getLogin',false) 
          const accont=userData.getUserData()
          Vm.$emit('getnum',accont)
          Vm.$emit('getdisp',false)
          this.$store.commit('false')
        }else {
          this.$message.error('账号或密码错误')
        }
      })
    }
  },
  props:['data'] 
}
</script>
