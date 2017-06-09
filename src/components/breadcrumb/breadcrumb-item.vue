<script>
  import LinkMixin from '../../mixins/link.vue';
  export default {
  	name: 'BreadcrumbItem',
    render: function (c) {
      var spanEl, linkEl, self = this;
      linkEl = c('a', {
        attrs: self.attrsObject
      }, [self.$slots.default]);

      if (!self.showSeparator) {
        spanEl = c('span', {
          class: {
            'breadcrumb-item-separator': true
          },
          style: {
            margin: '0 8px'
          },
        }, self.separator);
      }
      else {
        spanEl = c('span', {}, [self.$slots.separator]);
      }

      return c('span', {}, [linkEl, spanEl]);
    },
    data () {
      return {
        separator: '',
        showSeparator: false
      }
    },
    mixins: [LinkMixin],
    mounted () {
      this.showSeparator = this.$slots.separator !== undefined;
    }
  }
</script>