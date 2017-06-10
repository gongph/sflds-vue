<script>
  import LinkMixin from '../../mixins/link.vue';
  export default {
    render: function (c) {
      var self = this;
      return c('sf-link', {
        class: {
          'active_nav': self.active ? true : false
        },
        attrs: self.attrsObject,
        on: {
          click: self.onClick
        }
      }, [self.$slots.default]);
    },
    mixins: [LinkMixin],
    methods: {
      onClick (event) {
        this.$emit('click', event);
      }
    }
  }
</script>