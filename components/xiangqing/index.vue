<template>
  <div class="image">
      <img src="../../assets/image/all.jpg" alt="">
      <div class="title">
        <span>欢迎你,{{userName}}</span>
        <span class="sp-an" @click="zhuciao">注销</span>
        <span>{{riqi}}</span>
        <span>{{xingqi}}</span>
      </div>
      <div class="conten">
        <div class="top">
            <span class="tupian"><img src="../../assets/image/hist.png" alt=""></span>
            <span class="wenzi" @click="goback">返回</span>
        </div>
        <div class="zhedian">
    <el-collapse v-if="show1">
      <el-collapse-item title="控告人信息" name="1">
        <table cellpadding="0px" cellspacing="0" height="250px" width="100%" align="center">
          <tr align="center">
            <td width="200px">*姓名或单位名称</td>
            <td>{{messageone.kgrName}}</td>
            <td width="200px">性别</td>
            <td>{{ messageone.kgrSex == '0'?'女':'男' }}</td>
          </tr>
          <tr align="center">
            <td>证件类型</td>
            <td>{{messageone.kgrCardType}}</td>
            <td>证件号码</td>
            <td>{{messageone.kgrCardNo}}</td>
          </tr>
          <tr align="center">
            <td>民族</td>
            <td>{{messageone.kgrNation}}</td>
            <td>国籍</td>
            <td>{{messageone.kgrCountry}}</td>
          </tr>
          <tr align="center">
            <td>移动电话</td>
            <td>{{messageone.kgrMobile}}</td>
            <td>电子邮箱</td>
            <td>{{messageone.kgrEmail}}</td>
          </tr>
          <tr align="center">
            <td>工作单位</td>
            <td>{{messageone.kgrWorkLocation}}</td>
            <td>通讯地址</td>
            <td>{{messageone.kgrAddress}}</td>
          </tr>
        </table>
      </el-collapse-item>
      <el-collapse-item title="被控告人信息" name="2">
        <table cellpadding="0px" cellspacing="0" height="350px" width="100%" align="center">
          <tr align="center">
            <td width="200px">姓名或单位名称</td>
            <td>{{messageone.bkgrName}}</td>
            <td width="200px">性别</td>
            <td>{{messageone.bkgrSex == '0'?'女':'男'}}</td>
          </tr>
          <tr align="center">
            <td>国籍</td>
            <td>{{messageone.bkgrCountry}}</td>
            <td>工作单位所在地</td>
            <td>{{messageone.bkgrWorkLocationAddress}}</td>
          </tr>
          <tr align="center">
            <td>工作单位全称</td>
            <td>{{messageone.bkgrWorkLocation}}</td>
            <td>职务</td>
            <td>{{messageone.position}}</td>
          </tr>
          <tr align="center">
            <td>职级</td>
            <td>{{messageone.bkgrRank}}</td>
            <td>身份</td>
            <td>{{messageone.bkgrSf}}</td>
          </tr>
          <tr align="center">
            <td>人大代表</td>
            <td>{{messageone.bkgrRddb}}</td>
            <td>政协委员</td>
            <td>{{messageone.bkgrZxwy}}</td>
          </tr>
          <tr align="center">
            <td>案发地点</td>
            <td colspan="3">{{messageone.afdd}}</td>
          </tr>
          <tr align="center">
            <td>控告内容</td>
            <td colspan="3">{{messageone.content}}</td>
          </tr>
        </table>
      </el-collapse-item>
    </el-collapse>
    <el-collapse v-if="show2">
      <el-collapse-item title="申诉人信息" name="1">
        <table cellpadding="0px" cellspacing="0" height="300px" width="100%" align="center">
          <tr align="center">
            <td width="20%">姓名或单位名称</td>
            <td width="30%">{{messageone.ssrName}}</td>
            <td width="20%">与原案关系</td>
            <td width="30%">{{messageone.yyagx}}</td>
          </tr>
          <tr align="center">
            <td>性别</td>
            <td>{{messageone.ssrSex == '0'?'女':'男'}}</td>
            <td>证件类型</td>
            <td>{{messageone.ssrCardType}}</td>
          </tr>
          <tr align="center">
            <td>证件号码</td>
            <td>{{messageone.ssrCardNo}}44343</td>
            <td>国籍</td>
            <td>{{messageone.ssrCountry}}</td>
          </tr>
          <tr align="center">
            <td>民族</td>
            <td>{{messageone.ssrNation}}</td>
            <td>电子邮箱</td>
            <td>{{messageone.ssrEmail}}</td>
          </tr>
          <tr align="center">
            <td>移动电话</td>
            <td>{{messageone.ssrMobile}}</td>
            <td>通讯地址</td>
            <td>{{messageone.ssrAddress}}</td>
          </tr>
          <tr align="center">
            <td>工作单位</td>
            <td colspan="3">{{messageone.ssrWorkLocation}}</td>
          </tr>
        </table>
      </el-collapse-item>
      <el-collapse-item title="被申诉人信息" name="2">
        <table cellpadding="0px" cellspacing="0" height="200px" width="100%" align="center">
          <tr align="center">
            <td width="20%">*姓名或单位名称</td>
            <td  width="30%">{{messageone.bssrName}}</td>
            <td width="20%">性别</td>
            <td  width="30%">{{messageone.bssrSex == '0'?'女':'男'}}</td>
          </tr>
          <tr align="center">
            <td>国籍</td>
            <td>{{messageone.bssrCountry}}</td>
            <td>单位所在地</td>
            <td>{{messageone.bssrWorkLocationAddress}}</td>
          </tr>
          <tr align="center">
            <td>工作单位全称</td>
            <td>{{messageone.bssrWorkLocation}}</td>
            <td>职务</td>
            <td>{{messageone.position}}</td>
          </tr>
          <tr align="center">
            <td>职级</td>
            <td colspan="3">{{messageone.bssrRank}}</td>
          </tr>
        </table>
      </el-collapse-item>
      <el-collapse-item title="申诉事项" name="3">
        <table cellpadding="0px" cellspacing="0" height="100px" width="100%" align="center">
          <tr align="center">
            <td width="20%">案发地点</td>
            <td>{{messageone.afdd}}</td>
          </tr>
          <tr width="20%" align="center">
            <td>申诉内容</td>
            <td>{{messageone.content}}</td>
          </tr>
        </table>
      </el-collapse-item>
    </el-collapse>
    <el-collapse v-if="show3">
      <el-collapse-item title="申诉人信息" name="1">
        <table cellpadding="0px" cellspacing="0" height="450px" width="100%" align="center">
          <tr align="center">
            <td width="200px" >姓名或单位名称</td>
            <td>{{messageone.ssrName}}</td>
            <td width="200px">与原案关系</td>
            <td>{{messageone.ssrYyagx}}</td>
          </tr>
          <tr align="center">
            <td>性别</td>
            <td>{{messageone.ssrSex == '0'?'女':'男'}}</td>
            <td>证件类型</td>
            <td>{{messageone.ssrCardType}}</td>
          </tr>
          <tr align="center">
            <td>证件号码</td>
            <td>{{messageone.ssrCardNo}}</td>
            <td>国籍</td>
            <td>{{messageone.ssrCountry}}</td>
          </tr>
          <tr align="center">
            <td>工作单位</td>
            <td>{{messageone.ssrWorkLocation}}</td>
            <td>居住地</td>
            <td>{{messageone.ssrAddress}}</td>
          </tr>
          <tr align="center">
            <td>移动电话</td>
            <td>{{messageone.ssrMobile}}</td>
            <td>电子邮箱</td>
            <td>{{messageone.ssrEmail}}</td>
          </tr>
          <tr align="center">
            <td>法定代表人姓名</td>
            <td>{{messageone.fwdbrName}}</td>
            <td>法定代表人职务</td>
            <td>{{messageone.fwdbrPosition}}</td>
          </tr>
          <tr align="center">
            <td>代理人姓名</td>
            <td>{{messageone.dlrName}}</td>
            <td>代理人证件类型</td>
            <td>{{messageone.dlrCardType}}</td>
          </tr>
          <tr align="center">
            <td>代理人证件号码</td>
            <td>{{messageone.dlrCardNo}}</td>
            <td>代理人工作单位</td>
            <td>{{messageone.dlrWorkLocation}}</td>
          </tr>
          <tr align="center">
            <td>送达地址</td>
            <td colspan="3">{{messageone.ssrToAddress}}</td>
          </tr>
        </table>
      </el-collapse-item>
      <el-collapse-item title="被申诉人信息" name="2">
        <table cellpadding="0px" cellspacing="0" height="200px" width="100%" align="center">
          <tr align="center">
            <td width="200px">姓名或单位名称</td>
            <td>{{messageone.bssrName}}</td>
            <td width="200px">与原案关系</td>
            <td>{{messageone.bssrYyagx}}</td>
          </tr>
          <tr align="center">
            <td>国籍</td>
            <td>{{messageone.bssrCountry}}</td>
            <td>性别</td>
            <td>{{messageone.bssrSex == '0'?'女':'男'}}</td>
          </tr>
          <tr align="center">
            <td>工作单位所在地</td>
            <td>{{messageone.bssrWorkLocationAddress}}</td>
            <td>工作单位全称</td>
            <td>{{messageone.bssrWorkLocation}}</td>
          </tr>
          <tr align="center">
            <td>送达地址</td>
            <td colspan="3">{{messageone.bssrToAddress}}</td>
          </tr>
        </table>
      </el-collapse-item>
      <el-collapse-item title="申诉事项" name="3">
        <table cellpadding="0px" cellspacing="0" height="550px" width="100%" align="center">
          <tr align="center">
            <td width="20%">案发地</td>
            <td width="30%">{{messageone.afdd}}</td>
            <td width="20%">一审法院</td>
            <td width="30%">{{messageone.ysfy}}</td>
          </tr>
          <tr align="center">
            <td>一审裁判、调解作出日期</td>
            <td>{{messageone.ysrq}}</td>
            <td>一审裁判人员</td>
            <td>{{messageone.yscpry}}</td>
          </tr>
          <tr align="center">
            <td>一审裁判、调节书文号</td>
            <td>{{messageone.yswsh	}}</td>
            <td>二审法院</td>
            <td>{{messageone.esfy}}</td>
          </tr>
          <tr align="center">
            <td>二审裁判、调解作出日期</td>
            <td>{{messageone.esrq}}</td>
            <td>二审裁判人员</td>
            <td>{{messageone.escpry}}</td>
          </tr>
          <tr align="center">
            <td>二审裁判、调节书文号</td>
            <td>{{messageone.eswsh}}</td>
            <td>再审法院</td>
            <td>{{messageone.zsfy}}</td>
          </tr>
          <tr align="center">
            <td>再审裁判、调解作出日期</td>
            <td>{{messageone.zsrq}}</td>
            <td>再审裁判人员</td>
            <td>{{messageone.zscp}}</td>
          </tr>
          <tr align="center">
            <td>再审裁判、调节书文号</td>
            <td>{{messageone.zswsh}}</td>
            <td>终审法院</td>
            <td>{{messageone.zzsfy}}</td>
          </tr>
          <tr align="center">
            <td>终审裁判、调解作出日期</td>
            <td>{{messageone.zzsrq}}</td>
            <td>终审裁判人员</td>
            <td>{{messageone.zzcp}}</td>
          </tr>
          <tr align="center">
            <td>终审裁判、调解书文号</td>
            <td>{{messageone.zzwsh}}</td>
            <td>法院受理再审日期</td>
            <td>{{messageone.slzsrq}}</td>
          </tr>
          <tr align="center">
            <td>法院受理再审申请通知书文号</td>
            <td colspan="3">{{messageone.slzswsh}}</td>
          </tr>
          <tr align="center">
            <td>案情摘要</td>
            <td colspan="3">{{messageone.aqzy}}</td>
          </tr>
        </table>
      </el-collapse-item>
    </el-collapse>
    <el-collapse v-if="show4">
      <el-collapse-item title="申诉人信息" name="1">
        <table cellpadding="0px" cellspacing="0" height="450px" width="100%" align="center">
          <tr align="center">
            <td width="20%">姓名或单位名称</td>
            <td  width="30%">{{messageone.ssrName}}</td>
            <td width="20%">与原案关系</td>
            <td  width="30%">{{messageone.ssrYyagx}}</td>
          </tr>
          <tr align="center">
            <td>性别</td>
            <td>{{messageone.ssrSex == '0'?'女':'男'}}</td>
            <td>证件类型</td>
            <td>{{messageone.ssrCardType}}</td>
          </tr>
          <tr align="center">
            <td>证件号码</td>
            <td>{{messageone.ssrCardNo}}</td>
            <td>国籍</td>
            <td>{{messageone.ssrCountry}}</td>
          </tr>
          <tr align="center">
            <td>工作单位</td>
            <td>{{messageone.ssrWorkLocation}}</td>
            <td>居住地</td>
            <td>{{messageone.ssrAddress}}</td>
          </tr>
          <tr align="center">
            <td>移动电话</td>
            <td>{{messageone.ssrMobile}}</td>
            <td>电子邮箱</td>
            <td>{{messageone.ssrEmail}}</td>
          </tr>
          <tr align="center">
            <td>法定代表人姓名</td>
            <td>{{messageone.fwdbrName}}</td>
            <td>法定代表人职务</td>
            <td>{{messageone.fwdbrPosition}}</td>
          </tr>
          <tr align="center">
            <td>代理人姓名</td>
            <td>{{messageone.dlrName}}</td>
            <td>代理人证件类型</td>
            <td>{{messageone.dlrCardType}}</td>
          </tr>
          <tr align="center">
            <td>代理人证件号码</td>
            <td>{{messageone.dlrCardNo}}</td>
            <td>代理人工作单位</td>
            <td>{{messageone.dlrWorkLocation}}</td>
          </tr>
          <tr align="center">
            <td>送达地址</td>
            <td colspan="3">{{messageone.ssrToAddress}}</td>
          </tr>
        </table>
      </el-collapse-item>
      <el-collapse-item title="被申诉人信息" name="2">
        <table cellpadding="0px" cellspacing="0" height="200px" width="100%" align="center">
          <tr align="center">
            <td width="20%">姓名或单位名称</td>
            <td width="30%">{{messageone.bssrName}}</td>
            <td width="20%">与原案关系</td>
            <td width="30%">{{messageone.bssrYyagx}}</td>
          </tr>
          <tr align="center">
            <td>国籍</td>
            <td>{{messageone.bssrCountry}}</td>
            <td>性别</td>
            <td>{{messageone.bssrSex == '0'?'女':'男'}}</td>
          </tr>
          <tr align="center">
            <td>工作单位所在地</td>
            <td>{{messageone.bssrWorkLocationAddress}}</td>
            <td>工作单位全称</td>
            <td>{{messageone.bssrWorkLocation}}</td>
          </tr>
          <tr align="center">
            <td>送达地址</td>
            <td colspan="3">{{messageone.bssrToAddress}}</td>
          </tr>
        </table>
      </el-collapse-item>
      <el-collapse-item title="申诉事项" name="3">
        <table cellpadding="0px" cellspacing="0" height="500px" width="100%" align="center">
          <tr align="center">
            <td width="20%">案发地</td>
            <td width="30%">{{messageone.afdd}}</td>
            <td width="20%">一审法院</td>
            <td width="30%">{{messageone.ysfy}}</td>
          </tr>
          <tr align="center">
            <td>一审裁判、调解作出日期</td>
            <td>{{messageone.ysrq}}</td>
            <td>一审裁判人员</td>
            <td>{{messageone.yscpry}}</td>
          </tr>
          <tr align="center">
            <td>一审裁判、调节书文号</td>
            <td>{{messageone.yswsh	}}</td>
            <td>二审法院</td>
            <td>{{messageone.esfy}}</td>
          </tr>
          <tr align="center">
            <td>二审裁判、调解作出日期</td>
            <td>{{messageone.esrq}}</td>
            <td>二审裁判人员</td>
            <td>{{messageone.escpry}}</td>
          </tr>
          <tr align="center">
            <td>二审裁判、调节书文号</td>
            <td>{{messageone.eswsh}}</td>
            <td>再审法院</td>
            <td>{{messageone.zsfy}}</td>
          </tr>
          <tr align="center">
            <td>再审裁判、调解作出日期</td>
            <td>{{messageone.zsrq}}</td>
            <td>再审裁判人员</td>
            <td>{{messageone.zscp}}</td>
          </tr>
          <tr align="center">
            <td>再审裁判、调节书文号</td>
            <td>{{messageone.zswsh}}</td>
            <td>终审法院</td>
            <td>{{messageone.zzsfy}}</td>
          </tr>
          <tr align="center">
            <td>终审裁判、调解作出日期</td>
            <td>{{messageone.zzsrq}}</td>
            <td>终审裁判人员</td>
            <td>{{messageone.zzcp}}</td>
          </tr>
          <tr align="center">
            <td>终审裁判、调解书文号</td>
            <td>{{messageone.zzwsh}}</td>
            <td>法院受理再审日期</td>
            <td>{{messageone.slzsrq}}</td>
          </tr>
          <tr align="center">
            <td>法院受理再审申请通知书文号</td>
            <td colspan="3">{{messageone.slzswsh}}</td>
          </tr>
          <tr align="center">
            <td>案情摘要</td>
            <td colspan="3">{{messageone.aqzy}}</td>
          </tr>
        </table>
      </el-collapse-item>
    </el-collapse>
        </div>
      </div>
  </div>
</template>
<script>
import './index.less'
import { userData } from '../../services'
export default {
  data() {
    return {
      show: '',
      userName: '',
      xingqi: '',
      riqi: '',
      activeNames: '1',
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      messageone: {},
    }
  },
  methods:{
    zhuciao() {
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
    handleChange() {},
  },
  created() {
    this.$axios.get('/zhjw/kgsufx/detail/' + this.$route.params.id, {
      params: {
        type: this.$route.params.type
      }
    }).then(res => {
      console.log(res)
      if (res.data.code === 0) {
        this.messageone = res.data.data.obj
        if (this.messageone.visitType === 1) {
          this.show1 = true 
        }
        if (this.messageone.visitType === 2) {
          this.show2 = true 
        }
        if (this.messageone.visitType === 3) {
          this.show3 = true 
        }
        if (this.messageone.visitType === 4) {
          this.show4 = true 
        }
      }
    })
    this.getTime()
    const name = userData.getUserData()
    this.userName = name
  }, 
}
</script>
