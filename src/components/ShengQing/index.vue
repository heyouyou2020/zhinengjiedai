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
      <form action="#">
      <div class="biaoge">
        <h1>申请救助</h1>
        <div class="shenqing">刑事案件被害人基本情况</div>
        <div class="one">
          <div class="left">
            <span>被害人姓名</span>
           <input type="text" name="name" id="" v-model="form.Bhname" required>
          </div>
          <div class="right">
            <span>被害人籍贯</span>
            <select name="" id="" v-model="form.Bhjiguan" class="seled">
              <option value="河北省">河北省</option>
              <option value="山西省">山西省</option>
              <option value="吉林省">吉林省</option>
              <option value="辽宁省">辽宁省</option>
              <option value="黑龙江省">黑龙江省</option>
              <option value="陕西省">陕西省</option>
              <option value="甘肃省">甘肃省</option>
              <option value="青海省">青海省</option>
              <option value="山东省">山东省</option>
              <option value="福建省">福建省</option>
              <option value="浙江省">浙江省</option>
              <option value="台湾省">台湾省</option>
              <option value="河南省">河南省</option>
              <option value="湖北省">湖北省</option>
              <option value="湖南省">湖南省</option>
              <option value="江西省">江西省</option>
              <option value="江苏省">江苏省</option>
              <option value="安徽省">安徽省</option>
              <option value="广东省">广东省</option>
              <option value="海南省">海南省</option>
              <option value="四川省">四川省</option>
              <option value="贵州省">贵州省</option>
              <option value="云南省">云南省</option>
              <option value="北京市">北京市</option>
              <option value="上海市">上海市</option>
              <option value="天津市">天津市</option>
              <option value="重庆市">重庆市</option>
              <option value="内蒙古自治区">内蒙古自治区</option>
              <option value="新疆维吾尔自治区">新疆维吾尔自治区</option>
              <option value="宁夏回族自治区">宁夏回族自治区</option>
              <option value="广西壮族自治区">广西壮族自治区</option>
              <option value="西藏自治区">西藏自治区</option>
              <option value="香港特别行政区">香港特别行政区</option>
              <option value="澳门特别行政区">澳门特别行政区</option>
            </select>
          </div>
        </div>
        <div class="two">
          <div class="left">
            <span>性别</span>
            <select name="" id="" v-model="form.Bhsex" class="seled">
              <option value="1">男</option>
              <option value="0">女</option>
            </select>
          </div>
          <div class="right">
            <span>被害人居住地</span>
            <input type="text" name="" id="" v-model="form.Bhspace">
          </div>
        </div>
         <div class="one">
          <div class="left">
            <span>身份证号码</span>
           <input type="text" name="" id="" v-model="form.Bhcard">
          </div>
          <div class="right">
            <span>联系电话</span>
            <input type="text" name="" id="" v-model="form.Bhmobile">
          </div>
        </div>
        <div class="shenqing">国家司法救助申请人情况</div>
          <div class="one">
            <div class="left">
              <span>申请人姓名</span>
             <input type="text" name="" id="" v-model="form.sqname">
            </div>
            <div class="right">
              <span>民族</span>
             <select name="" id="" v-model="form.sqmingzu" class="seled">
              <option value="汉族">汉族</option>
              <option value="回族">回族</option>
              <option value="壮族">壮族</option>
              <option value="其他">其他</option>
            </select>
            </div>
          </div>
          <div class="one">
            <div class="left">
              <span>申请人户籍地</span>
              <input type="text" name="" id="" v-model="form.sqhuji"> 
            </div>
            <div class="right">
              <span>性别</span>
              <select name="" id="" v-model="form.sqsex" class="seled">
              <option value="1">男</option>
              <option value="0">女</option>
            </select>
            </div>
          </div>
          <div class="one">
            <div class="left">
              <span>身份证号码</span>
             <input type="text" name="" id="" v-model="form.sqcard">
            </div>
            <div class="right">
              <span>居住地址</span>
              <input type="text" name="" id="" v-model="form.sqaddress">
            </div>
          </div>
          <div class="one">
            <div class="left">
              <span>出生日期</span>
             <input type="text" name="" id="" v-model="form.sqbirth" placeholder="日期格式 XXXX-DD-YY">
            </div>
            <div class="right">
              <span>银行卡号</span>
              <input type="text" name="" id="" v-model="form.sqyinhangka">
            </div>
          </div>
          <div class="one">
            <div class="left">
              <span>申请人开户行</span>
             <input type="text" name="" id="" v-model="form.sqkaihuhang">
            </div>
            <div class="right">
              <span>与当事人关系</span>
               <select name="" id="" v-model="form.sqguanxi" class="seled">
              <option value="直系亲属">直系亲属</option>
              <option value="法定继承人">法定继承人</option>
              <option value="其他">其他</option>
            </select>
            </div>
          </div>
          <div class="one">
            <div class="left">
              <span>代理人姓名</span>
             <input type="text" name="" id="" v-model="form.dlname">
            </div>
            <div class="right">
              <span>代理人单位</span>
              <input type="text" name="" id="" v-model="form.dldanwei">
            </div>
          </div>
          <div class="one">
            <div class="left">
              <span>代理人电话</span>
              <input type="text" name="" id="" v-model="form.dlmobile">
            </div>
          </div>
          <div class="shenqing">原案基本情况</div>
          <div class="one">
            <div class="left">
              <span>嫌疑人姓名</span>
             <input type="text" name="" id="" v-model="form.xfname">
            </div>
            <div class="right">
              <span>涉嫌罪名</span>
              <select name="" id="" v-model="form.xfzuiming" class="seled">
                <option value="故意伤害">故意伤害</option>
                <option value="偷盗">偷盗</option>
                <option value="抢劫">抢劫</option>
                <option value="其他">其他</option>
              </select>
            </div>
          </div>
           <div class="shenqing">救助申请</div>
            <div class="teshuthree">
            <div class="teshuleft">
              <span class="teshuspan">申请检察院</span>
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
           <div class="reason">
              <div>申请国家司法救助的事实与理由</div>
              <el-input
                type="textarea"
                :rows="6"
                placeholder="请输入内容"
                v-model="form.sqreason">
              </el-input>
           </div>
            <div class="reason">
             <div>造成损失情况</div>
             <el-input
                type="textarea"
                :rows="6"
                placeholder="请输入内容"
                v-model="form.sunshiQk">
              </el-input>
           </div>
            <div class="three">
            <div class="left">
              <span>伤情鉴定</span>
              <select name="" id="" v-model="form.sqjianding" class="seled">
                <option value="轻度">轻度</option>
                <option value="中度">中度</option>
                <option value="重度">重度</option>
                <option value="极重">极重</option>
              </select>
            </div>
            <div class="right">
              <span>伤残等级</span>
              <select name="" id="" v-model="form.sqlever" class="seled">
              <option value="十级">十级</option>
              <option value="九级">九级</option>
              <option value="八级">八级</option>
              <option value="七级">七级</option>
              <option value="六级">六级</option>
              <option value="五级">五级</option>
              <option value="四级">四级</option>
              <option value="三级">三级</option>
              <option value="二级">二级</option>
              <option value="一级">一级</option>
            </select>
            </div>
          </div>
           <div class="three">
            <div class="left">
              <span>是否获得赔偿</span>
              <select name="" id="" v-model="form.sfpeichang" class="seled">
              <option value="1">是</option>
              <option value="0">否</option>
              </select>
            </div>
            <div class="right">
              <span>补偿赔偿金额</span>
              <input type="text" name="" id="" v-model="form.peichangMoney">
            </div>
          </div>
          <div class="reason">
             <div>经济困难情况证明</div>
             <el-input
                type="textarea"
                :rows="6"
                placeholder="请输入内容"
                v-model="form.kunnanZm">
              </el-input>
           </div>
             <div class="reason">
             <div>具体赔偿情况</div>
            <el-input
                type="textarea"
                :rows="6"
                placeholder="请输入内容"
                v-model="form.peichangJuTi">
              </el-input>
           </div>
            <div class="three">
            <div class="left">
              <span>获得社会救助</span>
              <select name="" id="" v-model="form.sfGetjiuzhu" class="seled">
              <option value="1">是</option>
              <option value="0">否</option>
              </select>
            </div>
            <div class="right">
              <span>社会救助金额</span>
              <input type="text" name="" id="" v-model="form.jiuzhuMOney">
            </div>
          </div>
           <div class="reason">
             <div>具体救助情况</div>
             <el-input
                type="textarea"
                :rows="6"
                placeholder="请输入内容"
                v-model="form.jiuzhuJUTI">
              </el-input>
           </div>
            <div class="xiangmu">
              <div class="duoxuan">申请救助项目(选填1到3项)</div>
               <div class="check">
                  <el-checkbox-group v-model="form.checkList">
                    <el-checkbox label="经济救助"></el-checkbox>
                    <el-checkbox label="法律援助"></el-checkbox>
                    <el-checkbox label="心里辅导"></el-checkbox>
                    <el-checkbox label="民政救助"></el-checkbox>
                    <el-checkbox label="医疗卫生服务"></el-checkbox>
                    <el-checkbox label="教育服务"></el-checkbox>
                    <el-checkbox label="就业"></el-checkbox>
                    <el-checkbox label="技能培训"></el-checkbox>
                  </el-checkbox-group>
             </div>
           </div>
        <div class="submit">
          <input type="button" @click="submit" value="提交">
          <span @click="goback">返回</span>
        </div>
      </div>
      </form>
    </div>
  </div>
</template>
<script>
import './index.less'
import {Vm, router} from '../../config'
import {userData} from '../../services'
import { yanZhenMobile, yanZhenCard, yanZhenEmail } from '../../utils'
export default {
  data(){
    return{
      username:'',
      show:this.$store.state.show,
      name: '',
      space: '',
      time: [],
      newdwbm: '',
      form: {
        jianchayuan: '',
        Bhname: '',
        Bhjiguan: '',
        Bhsex: '',
        Bhspace: '',
        Bhcard: '',
        Bhmobile: '',
        sqname: '',
        sqmingzu: '',
        sqhuji: '',
        sqsex: '',
        sqcard: '',
        sqaddress: '',
        sqbirth: '',
        sqyinhangka: '',
        sqkaihuhang: '',
        sqguanxi: '',
        dlname: '',
        dldanwei: '',
        dlmobile: '',
        xfname: '',
        xfzuiming: '',
        sqreason: '',
        sunshiQk: '',
        sqjianding: '',
        sqlever: '',
        sfpeichang: '',
        peichangMoney: '',
        kunnanZm: '',
        peichangJuTi: '',
        sfGetjiuzhu: '',
        jiuzhuMOney: '',
        jiuzhuJUTI: '',
        checkList: [],
      },
      tongxingshow: true,
      props:{
        multiple: false, 
        checkStrictly: true ,
        emitPath: false,
        label: 'dwmc',
        value: 'dwbm',
        children: 'nextLevel'
      },
      options: [ 
      ],
      value: '',
      xingqi: '',
      riqi: '',
    }
  },
  methods:{ 
    goback() {
     this.$router.go(-1)
    },
    gocenter() {
      this.$router.push({
        name: 'Personal',
      })
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
    submit() {
      this.tongxingshow = true
      console.log(this.form)
      for (var k in this.form) {
        if (this.form[k] == '') {
          this.tongxingshow = false
        }
      }
      if(!yanZhenMobile(this.form.Bhmobile)){
          this.$message({ 
          message: '被害人手机号码应为11位数字',
          type: 'warning'
        })
        return false
      }
      if(!yanZhenCard(this.form.Bhcard)){
          this.$message({ 
          message: '被害人身份证号码应为15位或18位数字',
          type: 'warning'
        })
        return false
      }
      if(!yanZhenCard(this.form.sqcard)){
          this.$message({ 
          message: '申请人身份证号码应为15位或18位数字',
          type: 'warning'
        })
        return false
      }
      if(!yanZhenMobile(this.form.dlmobile)){
          this.$message({ 
          message: '代理人手机号码应为11位数字',
          type: 'warning'
        })
        return false
      }
      if (this.tongxingshow) {
        const newlist = this.form.checkList.join(',')
        let formData = new FormData()
        formData.append("sqrInfo.name", this.form.sqname)
        formData.append("userId", window.sessionStorage.getItem('sfjzTableId'))
        formData.append("sqrInfo.nation", this.form.sqmingzu)
        formData.append("sqrInfo.sex", this.form.sqsex)
        formData.append("sqrInfo.hj", this.form.sqhuji)
        formData.append("sqrInfo.cardNo", this.form.sqcard)
        formData.append("sqrInfo.address", this.form.sqaddress)
        formData.append("sqrInfo.date", this.form.sqbirth)
        formData.append("sqrInfo.bankCardNo", this.form.sqyinhangka)
        formData.append("sqrInfo.bankCardName	", this.form.sqkaihuhang)
        formData.append("sqrInfo.yyagx", this.form.sqguanxi)
        formData.append("sqrInfo.dlrName", this.form.dlname)
        formData.append("sqrInfo.dlrWorkLocation", this.form.dldanwei)
        formData.append("sqrInfo.dlrMobile", this.form.dlmobile)
        formData.append("bhrInfo.name", this.form.Bhname)
        formData.append("bhrInfo.jg", this.form.Bhjiguan)
        formData.append("bhrInfo.sex", this.form.Bhsex)
        formData.append("bhrInfo.address", this.form.Bhspace)
        formData.append("bhrInfo.cardNo", this.form.Bhcard)
        formData.append("bhrInfo.mobile", this.form.Bhmobile)
        formData.append("yaInfo.name", this.form.xfname)
        formData.append("yaInfo.zm", this.form.xfzuiming)
        formData.append("jzsqInfo.reason", this.form.sqreason)
        formData.append("jzsqInfo.loss", this.form.sunshiQk)
        formData.append("jzsqInfo.sqLevel", this.form.sqjianding)
        formData.append("jzsqInfo.scLevel", this.form.sqlever)
        formData.append("jzsqInfo.isHavePc", this.form.sfpeichang)
        formData.append("jzsqInfo.pcNumber", this.form.peichangMoney)
        formData.append("jzsqInfo.jjknzm", this.form.kunnanZm)
        formData.append("jzsqInfo.pcqk", this.form.peichangJuTi)
        formData.append("jzsqInfo.isHaveJz", this.form.sfGetjiuzhu)
        formData.append("jzsqInfo.jzNumber", this.form.jiuzhuMOney)
        formData.append("jzsqInfo.jzqk", this.form.jiuzhuJUTI)
        formData.append("jzsqInfo.program", newlist)
        formData.append("jzsqInfo.dwbm", this.form.jianchayuan)
        formData.append("jzsqInfo.dwmc", this.newdwbm)
        this.$axios({
          url: '/zhjw/sfjz/jzsq',
          method: 'post',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(res => {
          console.log(res)
          if (res.data.code === 0) {
            this.$message.success('提交成功')
          }else {
            this.$message.error('提交申请失败')
          }
        })
      }else {
        this.$message.error('请填写完整信息,所有部分都需填写,如无此项填写暂无即可')
      }
      // 提交申请
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
    // change() {
    //   console.log(this.time)
    // }
  },
  beforeRouteEnter(to,from,next){
    const accont= window.sessionStorage.getItem('jiuzheToken')
      if(accont){
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
        if (res.data.code === 0) {
          this.options = res.data.data
        }
      })
    }
 }
</script>
