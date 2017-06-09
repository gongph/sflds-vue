<template>
  <nav>
    <ul class="pagination">
      <li :class="prevClasses" @click="prev"><a>上一页</a></li>
      <li :class="firstPageClasses" @click="changePage(1)"><a>1</a></li>
      <li v-if="currentPage-3 > 1"><a>...</a></li>
      <li v-if="currentPage - 2 > 1" @click="changePage(currentPage - 2)"><a>{{currentPage - 2}}</a></li>
      <li v-if="currentPage - 1 > 1" @click="changePage(currentPage - 1)"><a>{{currentPage - 1}}</a></li>
      <li v-if="currentPage != 1 && currentPage != allPages" class="active"><a>{{currentPage}}</a></li>
      <li v-if="currentPage + 1 < allPages" @click="changePage(currentPage + 1)"><a>{{currentPage + 1}}</a></li>
      <li v-if="currentPage + 2 < allPages" @click="changePage(currentPage + 2)"><a>{{currentPage + 2}}</a></li>
      <li v-if="currentPage + 3 < allPages"><a>...</a></li>
      <li v-if="allPages > 1" :class="lastPageClasses" @click="changePage(allPages)"><a>{{allPages}}</a></li>
      <li :class="nextClasses" @click="next"><a>下一页</a></li>
    </ul>
    <Options 
      :showJump="showJump"
      :total="total"
      :allPages="allPages"
      :current="currentPage"
      :_current.once="currentPage"
      @on-page="onPage">
      </Options>
  </nav>
</template>
<script>
    import Options from './options.vue';
    import PageMixin from '../../mixins/page.vue';
	export default {
	  name: 'page',
	  components: { Options },
	  mixins: [PageMixin],
	  props: {
	    // 总数
	    total: {
	      type: Number,
	      default: 0
	    }
	  },
	  data () {
	    return {
	      currentPage: this.current,
	      currentPageSize: this.pageSize
	    }
	  },
	  computed: {
        allPages () {
          const allPage = Math.ceil(this.total / this.currentPageSize);
          return (allPage === 0) ? 1 : allPage;
	  	},
	    prevClasses () {
	      return {
	        'disabled': this.currentPage === 1
	      }
	    },
        nextClasses () {
          return {
            'disabled': this.currentPage === this.allPages
          }
        },
        firstPageClasses () {
          return {
            'active': this.currentPage === 1
          }
        },
        lastPageClasses () {
          return {
            'active': this.currentPage === this.allPages
          }
        }
	  },
	  watch: {
	    // 监听当前页的变化
        current (val) {
          this.currentPage = val;
        }
	  },
	  created () {
        if (this.currentPage >= this.allPages) this.currentPage = this.allPages;
	  },
	  methods: {
	  	/**
	  	 * 切换页码
	  	 * @param  {Number} page 页码
	  	 */
	  	changePage (page) {
	  	  if (this.currentPage !== page) {
	  	    this.currentPage = page;
	  	    let pageSize = this.currentPageSize;
	  	    this.$emit('on-change', { page, pageSize });
	  	  }
	  	},
	  	/**
	  	 * 上一页
	  	 */
	    prev () {
	      const current = this.currentPage;
	      if (current <= 1) {
	        return false;
	      }
	      this.changePage(current -1);
	    },
	    /**
	     * 下一页
	     */
	    next () {
	      const current = this.currentPage;
	      if (current >= this.allPages) {
	        return false;
	      }
	      this.changePage(current + 1);
	    },
	    /**
	     * 跳转页发生改变时回调
	     */
	    onPage (page) {
          this.changePage(page);
	    }
	  }
	}
</script>