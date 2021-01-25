<template>
<div>
  <div class="wen-conten">
    <input v-model="guanjianzi" type="text" class="wen-input"><span @click="find" class="wen-find">查询</span><span class="wen-title" @click="lishi">历史问题</span>
  </div>
  <div class="wen-biaoge">
     <el-table
        v-loading="listLoading"
        class="table-hidden-cell"
        :data="tableData"
        stripe
        highlight-current-row
        height="400"
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
        > 
          <template slot-scope="{row}">
            <span v-if="item.one" :style="{ color: item.color, cursor: item.one ? 'pointer' : ''}" @click="gohist(row)">{{ row[item.filed] }}</span>
            <span v-if="item.two">{{ row[item.filed] }}</span>
            <span v-if="item.three">{{ row[item.filed] }}</span>
          </template>
        </el-table-column>
      </el-table>
  </div>
  <div class="fenye">
            <el-pagination
              v-show="total>0"
              @size-change="handleSizeChange2"
              @current-change="handleCurrentChange2"
              :current-page.sync="pageNum"
              :page-sizes="[8]"
              :page-size="8"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total">
            </el-pagination>
  </div>
</div>
</template>
<script>
import './falv.less'
export default { 
  data() {
    return {
      tableHeader: [
        { filed: 'title', title: '标题', color: '#4084ef', one: true },
        { filed: 'content', title: '内容', two: true },
        { filed: 'createTime', title: '创建时间', three: true },
      ],
      total: 0,
      listLoading: false,
      tableData: [
      ],
      guanjianzi: '',
      pageNum: 1,
    }
  },
  created() {
    // console.log('又进来了')
    this.$axios.get('/zhjw/znjd/list/question', {
      params: {
        type: '2',
        keyWord: this.guanjianzi,
        pageNum: 1,
        size: 8
      }
    }).then(res => {
      console.log(res)
      if (res.data.code === 0) {
        this.tableData = res.data.data.records
        this.total = res.data.data.count
      }else {
        this.$message.error('获取列表失败')
      }
    })
  },
  methods: {
    lishi() {
      this.$router.push({
        name: 'lishi'
      })
    },
    gohist(row) {
      this.$router.push({
        name: 'juti',
        params: {
          id: row.id
        }
      })
    },
    find() {
      this.pageNum = 1
      this.$axios.get('/zhjw/znjd/list/question', {
      params: {
        type: '2',
        keyWord: this.guanjianzi,
        pageNum: 1,
        size: 8
      }
    }).then(res => {
      console.log(res)
      if (res.data.code === 0) {
        this.tableData = res.data.data.records
      }else {
        this.$message.error('获取列表失败')
      }
    })
    },
    handleCurrentChange2(value) {
      this.$axios.get('/zhjw/znjd/list/question', {
      params: {
        type: '2',
        keyWord: this.guanjianzi,
        pageNum: value,
        size: 8
      }
    }).then(res => {
      console.log(res)
      if (res.data.code === 0) {
        this.tableData = res.data.data.records
      }else {
        this.$message.error('获取列表失败')
      }
    })
    },
    handleSizeChange2() {},
  }           
}
</script>
