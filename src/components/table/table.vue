<template>
  <div>
  <template v-if="showPage">
    <Page :current="currentPage" 
          :pageSize="pageSize" 
          :total="total" 
          :key="timestamp" 
          @on-change="onPageChange"></Page>
  </template>
  <table class="table table-hover table-striped table-condensed" :class="classes">
    <colgroup>
      <col v-for="column in columns" :width="column.width">
    </colgroup>
    <thead>
      <tr>
        <th v-for="column in columns" :class="column.classes" v-text="column.title"></th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(row, index) in cloneData">
        <tr><td v-for="column in columns" 
              v-html="renderTd(row, column, index)" 
              :key="row" 
              :class="column.classes"></td></tr>
      </template>
      <tr v-if="cloneData.length <= 0">
        <td :colspan="columns.length" class="text-center font_red">{{loadingMsg}}</td>
      </tr>
    </tbody>
  </table>
  <template v-if="showPage">
    <Page :current="currentPage" 
          :pageSize="pageSize" 
          :total="total" 
          :key="timestamp" 
          @on-change="onPageChange"></Page>
  </template>
</template>
</div>
<script>
  import Assist from '../../utils/assist.js';
  import Page from '../page/page.vue';
  import PageMixin from '../../mixins/page.vue';
  export default {
    name: 'table',
    components: { Page },
    mixins: [PageMixin],
    props: {
      loadingMsg: {
        type: String,
        default: '正在加载中...'
      },
      // 自定义样式
      classes: String,
      showIndex: {
        type: Boolean,
        default: true
      },
      // 是否显示分页
      showPage: {
        type: Boolean,
        default: true
      },
      // 列
      columns: {
        type: Array,
        default () {
          return [];
        }
      },
      // 服务端数据
      data: {
        type: Array,
        default () {
          return [];
        }
      }
    },
    data () {
      return {
      	currentPage: this.current,
        cloneColumns: Assist.deepCopy(this.columns),
        cloneData: Assist.deepCopy(this.data),
        timestamp: new Date().getTime() // 时间戳
      }
    },
    watch: {
      // 监听当前页
      current () {
        this.currentPage = this.current;
      },
      // 监听服务端数据
      data () {
        this.cloneData = Assist.deepCopy(this.data);
      },
      // 监听列
      columns () {
        this.cloneColumns = Assist.deepCopy(this.columns);
      }
    },
    methods: {
      renderTd (row, column, index) {
        if ('render' in column && Assist.typeof(column.render) === 'function') {
          return column.render(row[column.key], row, index);
        } else {
          return row[column.key];
        }
      },
      onPageChange (pageInfo) {
        this.currentPage = pageInfo.page;
        this.$emit('on-page-change', pageInfo)
      }
    }
  }
</script>