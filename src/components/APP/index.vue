<template>
  <div id="app">
    <router-view></router-view> 
    <mt-popup 
      v-model="isLogin"
      position="bottom"
      id="login-popup"
      modal='true'
      ref="closelogin"
    >
      <login :data='$refs.closelogin'></login>
    </mt-popup>
  </div>
</template>

<script>
import './index.less'
import {Vm} from '../../config'
export default {
  data() {
    return {
      isLogin:false
    }
  },
  mounted(){
    Vm.$on('getLogin',value=>{
      this.isLogin=value
    })
  }
}
</script>
