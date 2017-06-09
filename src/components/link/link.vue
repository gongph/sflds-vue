<script>
  import LinkMixin from '../../mixins/link.vue';
  export default {
    render: function (c) {
      var self = this;
      return c('a', {
      	attrs: self.attrsObject
      }, [self.$slots.default]);
    },
    mixins: [LinkMixin]
  }
</script>