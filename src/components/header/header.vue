<script>
  export default {
    render: function (c) {
      var logoEl, self = this;
      logoEl = c('sf-logo')

      return c('div', {
        class: {
          'page_header': true
        }
      }, [logoEl, self.$slots.default])
    }
  }
</script>