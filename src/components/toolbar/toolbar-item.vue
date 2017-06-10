<script>
  import LinkMixin from '../../mixins/link.vue'
  export default {
    render: function (c) {
      var linkEl, self = this;
      linkEl = c('sf-link', {
        attrs: self.attrsObject,
        on: {
          click: self.onClick
        }
      }, [self.$slots.default]);

      return c('li', {}, [linkEl]);
    },
    mixins: [LinkMixin],
    methods: {
      onClick (event) {
        this.$emit('click', event);
      }
    }
  }
</script>