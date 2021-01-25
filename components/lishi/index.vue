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
            <span class="tupian"><img src="../../assets/image/zixun.png" alt=""></span>
            <span class="wenzi" @click="goback">返回</span>
        </div>
        <div class="big-title">历史问题</div>
        <div class="wen-biaoge">
          <el-table
            v-loading="listLoading"
            class="table-hidden-cell"
            :data="tableData"
            stripe
            highlight-current-row
            height="400"
            border
          >
            <el-table-column
              v-for="item in tableHeader"
              :key="item.filed"
              :prop="item.filed"
              :label="item.title"
              :width="item.width"
              sortable
              :show-overflow-tooltip="true"
              :cell-class-name="item.colorB"
            /> 
            <el-table-column
               width="100">
                 <template slot-scope="scope">
                   <el-button @click="handleClick(scope.row)" type="text" size="small" style="color:gray">查看</el-button>
                 </template>
            </el-table-column>
          </el-table>
          
        </div>
        <div class="fenye">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="1"
              :page-sizes="[8]"
              :page-size="8"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total">
            </el-pagination>
        </div>
    </div>
  </div>  
</template>
<script>
import './index.less'
import { userData } from '../../services'
export default {
    data() {
        return{
            total: 10,
            xingqi: '',
            riqi: '',
            userName: '',
            time: '',
            zujian: 'wenti',
            listLoading: false,
            tableHeader: [
              { filed: 'title', title: '历史问题描述' },
              { filed: 'createTime', title: '时间' },
            ],
            tableData: [
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
        find() {},
        handleClick(row) {
          this.$router.push({
            name: 'juti',
            params: {
              id: row.id,
            }
          })
        },
        handleCurrentChange() {},
        handleSizeChange() {},
    },
    created() {
        this.getTime()
        const name = userData.getUserData()
        this.userName = name
        this.$axios.get('/zhjw/znjd/list/history').then(res => {
          console.log(res)
          if (res.data.code === 0) {
            this.tableData = res.data.data
          }
        })

    },
}
</script>
