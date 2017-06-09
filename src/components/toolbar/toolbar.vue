<script>
  export default {
    render: function (c) {
      var ulEl, self = this;
      ulEl = c('ul', {}, [self.$slots.default])
      return c('div', {
        class: {
          'sub_info': true
        }
      }, [ulEl])
    }
  }
</script>