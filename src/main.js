import Vue from 'vue'
import App from './components/App'
import { router, axios } from "./config"
import mintUI from "./mint-ui-components"
import globalComponents from './global-components'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'

Vue.config.productionTip = false
axios()
mintUI()
globalComponents()
Vue.use(ElementUI)
Vue.use(Vuex)
const store=new Vuex.Store({
  state:{
    show:true,
  },
  mutations:{
    false(state){
     state.show=false
    },
    true(state){
      state.show=true
     },

  }
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
