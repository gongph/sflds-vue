<script>
  export default {
    render: function (c) {
      var self = this;
      return c('div', {
        class: {
          'pager_m': true
        }
      }, [self.$slots.default])
    }
  }
</script>