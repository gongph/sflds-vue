<template>
  <div class="page_bottom">
    <slot></slot>
    <br>
    {{copyright}}
    <br>
    {{address}}
  </div>
</template>
<script>
  export default {
    props: {
      copyright: {
        type: String,
        default: '版权所有：2016年 中国证监会'
      },
      address: {
        type: String,
        default: '地址：西城区金融大街3号金益大厦'
      }
    }
  }
</script>