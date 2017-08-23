<template>
  <div class="search">
    <div class="search_input">
      <span><input type="text" :placeholder="placeholder"/></span>
      <span><input type="button" @click.stop="handleSearch" :value="buttonText"/></span>
    </div>
    <div class="search_more" v-if="showMore">
      <a :href="href">{{moreText}}</a>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      buttonText: {
        type: String,
        default: ''
      },
      href: {
        type: String,
        default: '#'
      },
      moreText: {
        type: String,
        default: '高级查询>>'
      },
      showMore: {
        type: Boolean,
        default:false
      }
    },
    methods: {
      /**
       * 处理查询
       */
      handleSearch (event) {
        var searchInpObj = $(event.target).closest('.search_input').find("input[type='text']");
        console.log(searchInpObj);
        this.$emit('click', searchInpObj.val())
      }
    }
  }
</script>