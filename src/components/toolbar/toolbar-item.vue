<script>
  import LinkMixin from '../../mixins/link.vue'
  export default {
    render: function (c) {
      var linkEl, self = this;
      linkEl = c('a', {
        attrs: self.attrsObject,
        on: {
          click: self.onClick
        }
      }, self.text);

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