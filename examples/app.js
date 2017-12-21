import Vue from 'vue'
import SfldsVue from '../dist/sflds-vue.js'

// install
Vue.use(SfldsVue)

// init
new Vue({
  el: '#app',
  data: {
    // 导航栏
    navs: [
      { id: '1', name: '综合查询', url: '/zhcx' },
      { id: '2', name: '法规体系查询', url: '/fgtxcx' },
      { id: '3', name: '最新法律资讯', url: '/home' }
    ],
    // 快速链接
    links: [
      { id: '1', name: '上海证券交易所', url: 'http://www.sse.com.cn' },
      { id: '2', name: '深圳证券交易所', url: 'http://www.szse.cn' },
      { id: '3', name: '中国金融期货交易所', url: 'http://www.cffex.com.cn' }
    ],
    //表格列配置
    columns: [
      {
        title: '序号',
        key: null,
        render: function(data, row, index) {
          return index + 1
        }
      },
      { title: '姓名', key: 'name' },
      {
        title: '年龄',
        key: 'age',
        render: function(data, row) {
          return row.name + ': ' + data
        }
      },
      { title: '地址', key: 'address', classes: 'text-left' }
    ],
    // 表格数据
    tableDatas: [
      // { name: '张三', age: 18, address: '北京市朝阳区'},
      // { name: '李四', age: 25, address: '北京市丰台区七里庄'},
      // { name: '王五', age: 30, address: '北京市海淀区二里庄'}
    ],
    currentPage: 1, // 当前页
    total: 99, // 总条数
    nodes: [
      // {id: "1", pId: 0, name: '根节点-1', expand: true},
      // {id: 11, pId: "1", name: '子节点-1-1'},
      // {id: 12, pId: 1, name: '子节点-1-2'},
      // {id: 111, pId: 11, name: '叶子节点-1-1-1'},
      // {id: 2, pId: 0, name: '根节点-2'}
    ],
    treeLoading: true
  },
  created() {
    this.onloadTableData()
  },
  methods: {
    /**
     * 返回首页
     */
    backHome(event) {
      alert('返回首页')
    },
    /**
     * 标签页显示前回调
     */
    onShowTab(e) {
      console.log('标签页显示前触发，当前标签页是：' + e.target.innerText)
      console.log('标签页显示前触发，前一个标签页是：' + e.relatedTarget.innerText)
    },
    /**
     * 标签页显示后回调
     */
    onShownTab(e) {
      console.log('标签页显示后触发，当前标签页是：' + e.target.innerText)
    },
    /**
     * 改变页码回调，返回当前页
     */
    onPageChange(pageInfo) {
      this.tableDatas = []
      this.onloadTableData()
      console.log('onPageChange:', pageInfo)
    },
    onSelectChange(data) {
      console.log('onSelectChange:', data)
    },
    onloadTreeData() {
      setTimeout(() => {
        this.nodes = [
          { id: '1', pId: 0, name: '根节点-1', expand: true },
          { id: 11, pId: '1', name: '子节点-1-1' },
          { id: 12, pId: 1, name: '子节点-1-2' },
          { id: 111, pId: 11, name: '叶子节点-1-1-1' },
          { id: 2, pId: 0, name: '根节点-2' }
        ]
        this.treeLoading = false
      }, 2000)
    },
    onloadTableData() {
      setTimeout(() => {
        this.tableDatas = [
          { name: '张三', age: 18, address: '北京市朝阳区' },
          { name: '李四', age: 25, address: '北京市丰台区七里庄' },
          { name: '王五', age: 30, address: '北京市海淀区二里庄' }
        ]
      }, 2000)
    },
    onCleanTreeData() {
      this.nodes = []
      //this.treeLoading = false;
    }
  }
})
