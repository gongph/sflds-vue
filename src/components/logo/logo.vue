<script>
  export default {
    render: function (c) {
      var syscnEl, sysenEl, self = this;
      syscnEl = c('p', { class: { 'sys_cn': true } }, self.websiteCn);
      sysenEl = c('p', { class: { 'sys_en': true } }, self.websiteEn);

      var logoEl = c('div', {
        class: {
          'page_header_logo': true
        }
      }, [syscnEl, sysenEl]);

      return logoEl;
    },
    props: {
      websiteCn: {
        type: String,
        default: '证券期货法规数据库系统'
      },
      websiteEn: {
        type: String,
        default: 'Securities and futures law database'
      }
    }
  }
</script>