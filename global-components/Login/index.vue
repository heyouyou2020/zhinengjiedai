<template>
  <div class="login-item">
     <div class="news-login">
          <span @click="loginshow" :class="isshow?active:band">登录</span>
          <span @click="logintrue" :class="isshow?band:active">注册</span>
     </div>
    <div class="login" v-if="isshow" >
          <div class="usename">
               <input type="text" placeholder="请输入账号" v-model="loginuser">
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
               <input type="text" placeholder="请输入账号" v-model="registeruser">
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
import { registAccount, registPwd, login } from '../../utils'
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
       loginuser:'',
       loginpsd:'',
       registeruser:'',
       registerpsd:'',    
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
       if(!registAccount(this.registeruser)){
          this.$message({
             message: '账号应由数字或字母组成，长度不小于5',
             type: 'warning'
        });
           return false
       }
       if(!registPwd(this.registerpsd)){
          this.$message({
          message: '密码应由数字或字母组成，长度不小于6且必须包含至少一个字母',
          type: 'warning'
        });     
            return false
       }else{
     //      this.$axios.post('regist',{
     //        account:this.registeruser,
     //        pwd:this.registerpsd
     //      })
     //      .then(res=>{
     //        this.$toast({
     //           message:res.data.msg,
     //           position: 'middle',
     //           duration:  1000 
     //      })
     //   if(res.data.code==2){
          userData.setUserData(this.registeruser)
          userData.setNumber('13909124732')
          Vm.$emit('getLogin',false)  
          const accont=userData.getUserData()
          Vm.$emit('getnum',accont)
          this.$store.commit('false')
          Vm.$emit('getdisp',false)
          //  }
          // })
     // .catch()
    }              
  },
     login(){
       if(login(this.loginuser,this.loginpsd)){
          this.$axios.post('login',{
          account:this.loginuser,
          pwd:this.loginpsd
          })
       .then(res=>{
          if(res.data.code==1){
            this.$message({
            message: '登录成功',
            type: 'success'
          });
            userData.setUserData(this.loginuser)
            Vm.$emit('getLogin',false) 
            const accont=userData.getUserData()
            Vm.$emit('getnum',accont)
        }else{
          this.$message.error('登录失败');
        }
      })
     .catch()
    }
       else{
          this.$message({
          message: '账号或密码输入错误',
          type: 'warning'
        });
        }
      }
   },
  props:['data'] 
}
</script>
