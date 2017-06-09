<script>
  export default {
    render: function (c) {
      var self = this;
      return c('div', {
        class: {
          'position_nav': true
        }
      }, [self.$slots.default]);
    }
  }
</script>