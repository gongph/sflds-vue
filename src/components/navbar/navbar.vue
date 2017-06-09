<script>
  export default {
    render: function (c) {
      var self = this;
      return c('div', {
        class: 'main_nav'
      }, [self.$slots.default]);
    }
  }
</script>