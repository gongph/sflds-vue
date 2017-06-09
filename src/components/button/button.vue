<script>
  export default {
    render: function (c) {
      var buttonEl, self = this;
      buttonEl = c('button', {
        class: {
          'btn': true,
          'btn-primary': true
        },
        on: {
          click: self.onClick
        }
      }, [self.$slots.default]);

      return buttonEl;
    },
    methods: {
      onClick (event) {
        this.$emit('click', event);
      }
    }
  }
</script>