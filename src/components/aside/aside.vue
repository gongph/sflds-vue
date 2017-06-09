<script>
  export default {
    render: function (c) {
      var self = this;
      return c('div', {
        class: {
          [this.alignClass]: true
        }
      }, [self.$slots.default]);
    },
    props: {
      align: String
    },
    data () {
      return {
        alignClass: this.align + '_main'
      }
    }
  }
</script>