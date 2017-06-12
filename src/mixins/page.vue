<script>
  export default {
    props: {
      // 当前页
      current: {
        type: Number,
        default: 1
      },
      // 总数
      total: {
        type: Number,
        default: 0
      },
      // 每页显示条数
      pageSize: {
        type: Number,
        default: 20
      },
      // 是否显示跳转
      showJump: {
      	type: Boolean,
      	default: true
      }
    }
  }
</script>