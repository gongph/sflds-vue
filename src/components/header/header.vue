<script>
  export default {
    render: function (c) {
      var logoEl, self = this;
      logoEl = c('sf-logo', {
        props: {
          websiteCn: self.websiteCn,
          websiteEn: self.websiteEn
        }
      })

      return c('div', {
        class: {
          'page_header': true
        }
      }, [logoEl, self.$slots.default])
    },
    props: {
      websiteCn: [String],
      websiteEn: [String]
    }
  }
</script>