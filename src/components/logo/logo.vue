<script>
  export default {
  	data () {
  	  return {
  	    sysCn: '法规数据库查询系统',
  	    sysEn: 'Regulatory database query system'
  	  }
  	},
    render: function (c) {
      var syscnEl, sysenEl, self = this;
      syscnEl = c('p', { class: { 'sys_cn': true } }, self.sysCn);
      sysenEl = c('p', { class: { 'sys_en': true } }, self.sysEn);

      var logoEl = c('div', {
        class: {
          'page_header_logo': true
        }
      }, [syscnEl, sysenEl]);

      return logoEl;
    }
  }
</script>