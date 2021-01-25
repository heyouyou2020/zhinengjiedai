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
          <span @click="login" v-if="show">登录</span>
          <span @click="submit" v-if="show">注册</span>
          <span v-if="!show">{{username}},欢迎你</span>
          <span v-if="!show" @click="comeHome">回到首页</span>
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
      <div class="person">
        <div class="left">
          <div class="top">
             <div class="sma-image"><img src="../../assets/image/person.png" alt=""><span>个人中心</span></div>
             <div class="big-image">
               <img src="../../assets/image/tuxiang.png" alt="">
               <div class="title">
                 <span>{{username}}</span>
                 <span>{{shoujihaoma}}</span>
               </div>
             </div>
          </div>
          <div class="bottom">
            <div v-for="item in data" :key="item.id" :class="item.className" @click="clickme(item.id)">{{item.title}}</div>
          </div>
        </div>
        <div class="right">
          <div class="wenzi">{{display?str:messageOne}}</div>
          <div v-show="display" class="biao-ge">
             <el-table
                height="500"
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
                   <el-button type="text" size="small" @click="handleClickOne(scope.row)">查看</el-button>
                  </template>
                </el-table-column>
             </el-table> 
             <div class="block">
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
           <div v-show="!display"  class="biao-ge">
             <el-table
        height="500"
        v-loading="listLoading"
        class="table-hidden-cell"
        :data="tableList"
        stripe
        highlight-current-row
      >
        <el-table-column
          v-for="item in headerList"
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
            <el-button type="text" size="small" @click="handleClickTwo(scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
        <div class="block">
   
    <el-pagination
      v-show="number>0"
      @size-change="onSizeChange"
      @current-change="onCurrentChange"
      :current-page="1"
      :page-sizes="[8]"
      :page-size="8"
      layout="total, sizes, prev, pager, next, jumper"
      :total="number">
    </el-pagination>
               </div>
          </div>
  
        </div>
        <el-dialog
          title="我要救助申请人详情"
          v-if="showshowpop1"
          :visible.sync="dialogVisible"
          :modal="false"
          width="90%"
          >
           <div class="tablefather">
              <table class="tableClass" cellpadding="0px" cellspacing="0" height="400px" width="100%" align="center">
                <tr align="center">
                  <td width="20%">姓名</td>
                  <td width="30%">{{message1.name?message1.name:''}}</td>
                  <td width="20%">性别</td>
                  <td width="30%">{{message1.sex == '1'?'男':'女'}}</td>
                </tr>
                <tr align="center">
                  <td>身份证号</td>
                  <td>{{message1.cardNo}}</td>
                  <td>联系方式</td>
                  <td>{{message1.mobile}}</td>
                </tr>
                <tr align="center">
                  <td width="20%">救助资源</td>
                  <td width="30%">{{message1.zyName}}</td>
                  <td width="20%">救助时间</td>
                  <td width="30%">{{message1.createTime}}</td>
                </tr>
                <tr align="center">
                  <td width="20%">资源所在地</td>
                  <td colspan="3">{{message1.zyAddress}}</td>
                </tr>
            </table>
           </div>
          
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
        <el-dialog
          v-if="showshowpop2"
          title="救助申请人详情"
          :visible.sync="dialogVisible2"
          :modal="false"
          width="90%"
          >
           <div class="tablefather">
            <el-collapse>
            <el-collapse-item title="国家司法救助申请人情况" name="1">
              <table class="tableClass" cellpadding="0px" cellspacing="0" height="400px" width="100%" align="center">
                <tr align="center">
                  <td width="200px">姓名</td>
                  <td>{{message.sqrInfo.name}}</td>
                  <td width="200px">民族</td>
                  <td>{{message.sqrInfo.nation}}</td>
                </tr>
                <tr align="center">
                  <td>性别</td>
                  <td>{{message.sqrInfo.sex == '1'?'男':'女'}}</td>
                  <td>户籍</td>
                  <td>{{message.sqrInfo.hj}}</td>
                </tr>
                <tr align="center">
                  <td>证件号码</td>
                  <td>{{message.sqrInfo.cardNo}}44343</td>
                  <td>地址</td>
                  <td>{{message.sqrInfo.address}}</td>
                </tr>
                <tr align="center">
                  <td>生日</td>
                  <td>{{message.sqrInfo.date}}</td>
                  <td>银行卡号</td>
                  <td>{{message.sqrInfo.bankCardNo}}</td>
                </tr>
                <tr align="center">
                  <td>开户行</td>
                  <td>{{message.sqrInfo.bankCardName}}</td>
                  <td>与原案关系</td>
                  <td>{{message.sqrInfo.yyagx}}</td>
                </tr>
                <tr align="center">
                  <td>代理人名称</td>
                  <td>{{message.sqrInfo.dlrName}}</td>
                  <td>代理人工作地址</td>
                  <td>{{message.sqrInfo.dlrMobile}}</td>
                </tr>
                <tr align="center">
                  <td>代理人工作地址</td>
                  <td colspan="3">{{message.sqrInfo.dlrWorkLocation}}</td>
                </tr>
              </table>
            </el-collapse-item>
            <el-collapse-item title="刑事被害人基本情况" name="2">
              <table class="tableClass" cellpadding="0px" cellspacing="0" height="160px" width="100%" align="center">
                <tr align="center">
                  <td width="20%">被害人姓名</td>
                  <td width="30%">{{message.bhrInfo.name}}</td>
                  <td width="20%">籍贯</td>
                  <td width="30%">{{message.bhrInfo.jg}}</td>
                </tr>
                <tr align="center">
                  <td>性别</td>
                  <td>{{message.bhrInfo.sex == '1'?'男':'女'}}</td>
                  <td>地址</td>
                  <td>{{message.bhrInfo.address}}</td>
                </tr>
                <tr align="center">
                  <td>证件号码</td>
                  <td>{{message.bhrInfo.cardNo}}44343</td>
                  <td>手机号</td>
                  <td>{{message.bhrInfo.mobile}}</td>
                </tr>
              </table>
            </el-collapse-item>
            <el-collapse-item title="原案基本情况" name="3"> 
              <table class="tableClass" cellpadding="0px" cellspacing="0" height="40px" width="100%" align="center">
                <tr align="center">
                  <td width="20%">姓名</td>
                  <td width="30%">{{message.yaInfo.name}}</td>
                  <td width="20%">罪名</td>
                  <td width="30%">{{message.yaInfo.zm}}</td>
                </tr>
              </table>
            </el-collapse-item>
            <el-collapse-item title="救助申请" name="4">
              <table class="tableClass" cellpadding="0px" cellspacing="0" height="200px" width="100%" align="center">
                <tr align="center">
                  <td width="20%">申请原因</td>
                  <td width="30%">{{message.jzsqInfo.reason}}</td>
                  <td width="20%">损失情况</td>
                  <td width="30%">{{message.jzsqInfo.loss}}</td>
                </tr>
                <tr align="center">
                  <td width="20%">伤情情况</td>
                  <td width="30%">{{message.jzsqInfo.sqLevel}}</td>
                  <td width="20%">伤残等级</td>
                  <td width="30%">{{message.jzsqInfo.scLevel}}</td>
                </tr>
                <tr align="center">
                  <td width="20%">是否获得赔偿</td>
                  <td width="30%">{{message.jzsqInfo.isHavePc == '1'?'已获得赔偿':'未获得赔偿'}}</td>
                  <td width="20%">经济困难证明</td>
                  <td width="30%">{{message.jzsqInfo.jjknzm}}</td>
                </tr>
                <tr align="center">
                  <td width="20%">赔偿情况</td>
                  <td width="30%">{{message.jzsqInfo.pcqk}}</td>
                  <td width="20%">是否获得社会经济补助</td>
                  <td width="30%">{{message.jzsqInfo.isHaveJz == '1'?'已获得经济补助':'未获得经济补助'}}</td>
                </tr>
                <tr align="center">
                  <td width="20%">补助金额</td>
                  <td colspan="3">{{message.jzsqInfo.jzNumber}}</td>
                </tr>
              </table>
            </el-collapse-item>
            </el-collapse>
           </div>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
import './index.less'
import {Vm, router} from '../../config'
import {userData} from '../../services'
export default {
  data(){
    return{
      str:'我要救助',
      dialogVisible: false,
      showshowpop1: false,
      showshowpop2: false,
      dialogVisible2: false,
      message1: {},
      message: {},
      total: 0,
      number:0,
      xingqi:'',
      riqi: '',
      messageOne: '申请救助',
      listLoading: false,
      display:true,
      username:'',
      shoujihaoma: '',
      show:this.$store.state.show,
      listQuery: {
        pageNum: 1,
        pageSize: 20,
      },
      tableHeader: [
        { filed: 'createTime', title: '救助申请时间', colorB: 'colorB', width: '160' },
        { filed: 'dwmc', title: '检察院' },
        { filed: 'zyName', title: '救助资源' },
      ],
      tableData: [
      ],
      headerList: [
        { filed: 'createTime', title: '救助申请时间', colorB: 'colorB', width: '160' },
        { filed: 'dwmc', title: '检察院' },
        { filed: 'state', title: '状态' },
      ],
      tableList: [
      ],
      data: [
        { id: 0, title: '我要救助', className: 'active'},
         { id: 1, title: '申请救助'}
      ]
    }
  },
  methods:{
    login() {
      Vm.$emit('getLogin',true)
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
    comeHome() {
      this.$router.push({
        name: 'home'
      })
    },
    submit() {
      Vm.$emit('getLogin',true)
    },
    clickme(id) {
      this.data.map(item => {
        item.className = ''
      })
      this.data[id].className = 'active'
      if(id === 0) {
        this.display = true
      }else{
        this.display = false
      }
    },
     handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
       onSizeChange(val) {
        console.log(`哈哈,每页 ${val} 条`);
      },
      onCurrentChange(val) {
        console.log(`哈哈，当前页: ${val}`);
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
    refresh(val) {
      console.log(val)
    },
    handleClickOne(row) {
      this.showshowpop1 = false
      this.$axios.get('zhjw/sfjz/zzsqDetail/' + row.id).then(res => {
        console.log(res)
        if (res.data.code === 0) {
          if (res.data) {
            this.message1 = res.data.data
            this.dialogVisible = true
            this.showshowpop1 = true
          }else{
            this.$message.error('查看失败')
          } 
        }else {
          this.$message.error('错误，查看失败')
        }
      })
    },
    handleClickTwo(row) {
      this.showshowpop2 = false
      this.$axios.get('zhjw/sfjz/jzsqDetail/' + row.id).then(res => {
        console.log(res)
        if (res.data.code === 0) {
          if (res.data) {
            this.message = res.data.data
            this.dialogVisible2 = true
            this.showshowpop2 = true
          }else{
            this.$message.error('查看失败')
          } 
        }else {
          this.$message.error('错误，查看失败')
        }
      })
    }
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
      this.shoujihaoma = userData.getNumber()
      // 获取表格
      this.$axios.get('zhjw/sfjz/all/jzsq').then(res => {
        console.log(res)
        if (res.data.code === 0) {
          this.tableList = res.data.data
          this.tableList.map(item => {
            if (item.state == 1) {
              item.state = '已审核'
            }
            if (item.state == 0) {
              item.state = '待审核'
            }
            if (item.state == 1) {
              item.state = '已拒绝'
            }
          })
        }
      })
      this.$axios.get('zhjw/sfjz/all/zzsq').then(res => {
        console.log(res)
        if (res.data.code === 0) {
          this.tableData = res.data.data
        }
      })
    } 
}
</script>
