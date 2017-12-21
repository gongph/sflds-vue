<template>
  <nav>
    <ul class="pagination">
      <li :class="prevClasses" @click="prev">
        <a href="javascript:void(0);">上一页</a>
      </li>
      <li :class="firstPageClasses" @click="changePage(1)">
        <a href="javascript:void(0);">1</a>
      </li>
      <!-- 页数至少是 7 页 -->
      <template v-if="allPages - 5 >= 2">
        <!-- 默认显示前五页，格式：上一页 1 2 3 4 5 ... 10 下一页 -->
        <template v-if="currentPage >= 1 && currentPage <= 4 ">
          <template v-for="i in 3">
            <li @click="changePage(i + 1)" 
              :class="{active: (currentPage == (i + 1))}">
              <a href="javascript:void(0);">{{i + 1}}</a>
            </li>
          </template>
          <li @click="changePage(5)"><a href="javascript:void(0);">5</a></li>
          <li><a>...</a></li>
        </template>

        <!-- 第五页过后显示格式：上一页 1 ... 4 5 6 ... 10 下一页 -->
        <template v-if="currentPage >= 5 && allPages - currentPage >= 4">
          <li><a>...</a></li>
          <li v-if="currentPage - 1 > 1" @click="changePage(currentPage - 1)">
            <a href="javascript:void(0);">{{currentPage - 1}}</a>
          </li>
          <li v-if="currentPage != 1 && currentPage != allPages" class="active">
            <a href="javascript:void(0);">{{currentPage}}</a>
          </li>
          <li v-if="currentPage + 1 < allPages" @click="changePage(currentPage + 1)">
            <a href="javascript:void(0);">{{currentPage + 1}}</a>
          </li>
          <li v-if="currentPage + 2 < allPages"><a>...</a></li>
        </template>

        <!-- 如果是最后一页，格式：上一页 1 ... 6 7 8 9 10 下一页 -->
        <template v-if="(allPages - currentPage < 4) && currentPage >= 5">
          <li><a>...</a></li>
          <li @click="changePage(allPages - 4)" 
              :class="{active: (currentPage === (allPages - 4))}">
            <a href="javascript:void(0);">{{allPages - 4}}</a>
          </li>
          <li v-if="currentPage - 3 > 1" @click="changePage(allPages - 3)" 
              :class="{active: (currentPage === (allPages - 3))}">
            <a href="javascript:void(0);">{{allPages - 3}}</a>
          </li>
          <li v-if="currentPage - 2 > 1" @click="changePage(allPages - 2)" 
              :class="{active: (currentPage === (allPages - 2))}">
            <a href="javascript:void(0);">{{allPages - 2}}</a>
          </li>
          <li v-if="currentPage - 1 > 1" @click="changePage(allPages - 1)" 
              :class="{active: (currentPage === (allPages - 1))}">
            <a href="javascript:void(0);">{{allPages - 1}}</a>
          </li>
        </template>

      </template>

      <template v-else>
        <li v-if="currentPage - 4 > 1" @click="changePage(currentPage - 4)">
          <a href="javascript:void(0);">{{currentPage - 4}}</a>
        </li>
        <li v-if="currentPage - 3 > 1" @click="changePage(currentPage - 3)">
          <a href="javascript:void(0);">{{currentPage - 3}}</a>
        </li>
        <li v-if="currentPage - 2 > 1" @click="changePage(currentPage - 2)">
          <a href="javascript:void(0);">{{currentPage - 2}}</a>
        </li>
        <li v-if="currentPage - 1 > 1" @click="changePage(currentPage - 1)">
          <a href="javascript:void(0);">{{currentPage - 1}}</a>
        </li>
        <li v-if="currentPage != 1 && currentPage != allPages" class="active">
          <a href="javascript:void(0);">{{currentPage}}</a>
        </li>
        <li v-if="currentPage + 1 < allPages" @click="changePage(currentPage + 1)">
          <a href="javascript:void(0);">{{currentPage + 1}}</a>
        </li>
        <li v-if="currentPage + 2 < allPages" @click="changePage(currentPage + 2)">
          <a href="javascript:void(0);">{{currentPage + 2}}</a>
        </li>
        <li v-if="currentPage + 3 < allPages" @click="changePage(currentPage + 3)">
          <a href="javascript:void(0);">{{currentPage + 3}}</a>
        </li>
        <li v-if="currentPage + 4 < allPages" @click="changePage(currentPage + 4)">
          <a href="javascript:void(0);">{{currentPage + 4}}</a>
        </li>
      </template>
      <li v-if="allPages > 1" :class="lastPageClasses" @click="changePage(allPages)">
        <a href="javascript:void(0);">{{allPages}}</a>
      </li>
      <li :class="nextClasses" @click="next">
        <a href="javascript:void(0);">下一页</a>
      </li>
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