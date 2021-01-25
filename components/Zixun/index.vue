<template>
  <div class="imageimageimage">
    <img src="../../assets/image/all.jpg" alt="">
    <div class="title">
      <span >欢迎你,{{userName}}</span>
      <span  class="sp-an" @click="zhuxiao">注销</span>
      <span>{{riqi}}</span>
      <span>{{xingqi}}</span>
    </div>
    <div class="conten">
        <div class="top">
            <span class="tupian"><img src="../../assets/image/zixun.png" alt=""></span>
            <span class="wenzi" @click="goback">返回</span>
        </div>
        <div class="component">
            <span v-for="item in data" :key="item.id" @click="clickme(item.id,item.name)" :class="item.className">{{item.title}}</span>
        </div>
        <div class="zujian">
           <component :is="zujian" />
        </div>
    </div>
  </div>
</template>
<script>
import './index.less'
import { userData } from '../../services'
import falv from './falv'
import xinfang from './xinfang'
import wenti from './wenti'
export default {
    components: { falv, xinfang, wenti },
    data() {
        return{
            total: 0,
            xingqi: '',
            riqi: '',
            userName: '',
            time: '',
            zujian: 'wenti',
            listLoading: false,
            data: [
              {id: 0 , title: '常见问题', className: 'active', name: 'wenti'},
              {id: 1 , title: '法律法规', className: '', name: 'falv' },
              {id: 2 , title: '信访条例', className: '', name: 'xinfang' },
            ],
           
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
        clickme(id ,name) {
           this.data.map(item => {
               item.className = ''
           })
           this.data[id].className = 'active'
           this.zujian = name
        },
        find() {},
        handleCurrentChange() {},
        handleSizeChange() {},
    },
    created() {
        this.getTime()
        const name = userData.getUserData()
        this.userName = name
    },
}
</script>
