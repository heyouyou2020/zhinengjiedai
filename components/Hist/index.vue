<template>
  <div class="imageimage">
    <img src="../../assets/image/all.jpg" alt="">
    <div class="title">
      <span >欢迎你,{{userName}}</span>
      <span  class="sp-an" @click="zhuxiao">注销</span>
      <span>{{riqi}}</span>
      <span>{{xingqi}}</span>
    </div>
    <div class="conten">
        <div class="top">
            <span class="tupian"><img src="../../assets/image/hist.png" alt=""></span>
            <span class="wenzi" @click="goback">返回</span>
        </div>
        <div class="bottom">
           <div class="block">
             <span class="demonstration">日期</span>
             <el-date-picker
                v-model="time"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
             </el-date-picker>
             <span @click="find" class="chaxun">查询</span>
          </div>
          <div class="biaoge">
            <el-table
              v-loading="listLoading"
              class="table-hidden-cell"
              :data="tableData"
              stripe
              highlight-current-row
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
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
                </template>
              </el-table-column>
            </el-table>    
          </div>
          <div class="fenye">
            <el-pagination
              v-show="total>0"
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
  </div>  
</template>
<script>
import './index.less'
import { userData } from '../../services'
export default {
    data() {
        return{
            total: 0,
            xingqi: '',
            riqi: '',
            userName: '',
            time: ['',''],
            listLoading: false,
            tableHeader: [
              { filed: 'petitionerId', title: '编号' },
              { filed: 'xfTime', title: '信访时间', colorB: 'colorB', width: '200' },
              { filed: 'type', title: '信访类型' },
              { filed: 'content', title: '信访类容' },
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
        find() {
          this.$axios.get('/zhjw/znjd/list/visit', {
          params: {
            petitionerName: '',
            mobile: '',
            startTime: this.time[0],
            endTime: this.time[1],
            pageNum: 1,
            size: 8
          }
        }).then(res => {
          if (res.data.code === 0) {
            this.tableData = res.data.data.records
            this.tableData.map(item => {
              if (item.type == 1) {
                item.type = '控告'
              }
              if (item.type == 2) {
                item.type = '刑事'
              }
              if (item.type == 3) {
                item.type = '民事'
              }
              if (item.type == 4) {
                item.type = '行政'
              }
            })
          }
        })
        },
        handleClick(row) {
          let newtype
          if (row.type == '控告') {
            newtype = '1'
          }
          if (row.type == '刑事') {
            newtype = '2'
          }
          if (row.type == '民事') {
            newtype = '3'
          }
          if (row.type == '行政') {
            newtype = '4'
          }
            this.$router.push({
                name: 'xiangqing',
                params: {
                  id: row.visitId,
                  type: newtype
                }
            })
        },
        handleCurrentChange(value) {
          console.log(value)
          this.$axios.get('/zhjw/znjd/list/visit', {
          params: {
            petitionerName: '',
            mobile: '',
            startTime: this.time[0],
            endTime: this.time[1],
            pageNum: value,
            size: 8
          }
        }).then(res => {
          if (res.data.code === 0) {
            this.tableData = res.data.data.records
            this.tableData.map(item => {
              if (item.type == 1) {
                item.type = '控告'
              }
              if (item.type == 2) {
                item.type = '刑事'
              }
              if (item.type == 3) {
                item.type = '民事'
              }
              if (item.type == 4) {
                item.type = '行政'
              }
            })
          }
        })
        },
        handleSizeChange() {},
    },
    created() {
        this.$axios.get('/zhjw/znjd/list/visit', {
          params: {
            petitionerName: '',
            mobile: '',
            startTime: this.time[0],
            endTime: this.time[1],
            pageNum: 1,
            size: 8
          }
        }).then(res => {
          console.log(res)
          if (res.data.code === 0) {
            this.tableData = res.data.data.records
            this.tableData.map(item => {
              if (item.type == 1) {
                item.type = '控告'
              }
              if (item.type == 2) {
                item.type = '刑事'
              }
              if (item.type == 3) {
                item.type = '民事'
              }
              if (item.type == 4) {
                item.type = '行政'
              }
            })
            this.total = res.data.data.count
          }
        })
        this.getTime()
        const name = userData.getUserData()
        this.userName = name
    },
}
</script>
