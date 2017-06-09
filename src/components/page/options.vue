<template>
  <div class="jump" v-if="showJump">
    <span class="jump_text">
      <button type="button" class="btn btn-primary btn-xs" @click="changePage">GO</button>
    </span>
    <span class="jump_text">页</span>
    <span class="jump_text">
      <input type="text" :value="_current" class="form-control2 goPage">
    </span>
    <span class="jump_text">
      共有{{allPages}}页，{{total}}条记录。跳到
    </span>
  </div>
</template>
<script>
  /**
   * 验证是否是Number
   */
  function isValueNumber (val) {
    return (/^[1-9][0-9]*$/).test(val + '');
  }

  export default {
    name: 'pageOptions',
    props: {
      current: Number,
      _current: Number,
      showJump: Boolean,
      total: Number,
      allPages: Number
    },
    methods: {
      changePage (event) {
        var jumpInputEl = $(event.target).closest('.jump').find('.goPage');
        let val = jumpInputEl.val().trim();
        let page = 0;
        
        // 验证是否是数字
        if (isValueNumber(val)) {
          //转成Number类型
          val = Number(val);
          if (val !== this.current) {
            const allPages = this.allPages;
            if (val >= allPages) {
              page = allPages;
            } else {
              page = val;
            }
          }
        } else {
          page = 1;
        }

        if (page) {
          this.$emit('on-page', page);
          jumpInputEl.val(page);
        }
      }
    }
  }
</script>