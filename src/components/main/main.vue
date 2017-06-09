<script>
  export default {
    render: function (c) {
      var self = this;
      return c('div', {
        class: {
          [this.classes]: true
        }
      }, [self.$slots.default]);
    },
    props: {
      classes: {
        type: String,
        default: 'page_middle'
      }
    }
  }
</script>