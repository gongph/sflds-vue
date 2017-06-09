<script>
  export default {
    render: function (c) {
      var h5El, self = this;
      h5El = c('h5', {}, self.title);
      return c('div', {
        class: {
          'quick_links': true
        }
      }, [h5El, self.$slots.default]);
    },
    props: {
      title: {
        type: String,
        default: '快速链接'
      }
    }
  }
</script>