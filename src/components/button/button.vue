<script>
  export default {
    render: function (c) {
      var buttonEl, tagEl, self = this;
      
      buttonEl = c('button', {
        staticClass: 'btn',
        class: self.classObject,
        on: {
          click: self.onClick
        }
      }, [self.$slots.default]);

      if (self.tag) {
        tagEl = c(self.tag, { class: this.tagClass ? this.tagClass : '' }, [buttonEl]);
        return tagEl;
      }
      return buttonEl;
    },
    props: {
      tag: String,
      tagClass: String,
      primary: Boolean,
      success: Boolean,
      info: Boolean,
      danger: Boolean,
      warning: Boolean
    },
    computed: {
      classObject () {
        var self = this, co = {};
        ['primary', 'success', 'info', 'danger', 'warning'].forEach(function (prop, index) {
          if (self[prop]) co['btn-' + prop] = true;
        });
        return co;
      }
    },
    methods: {
      onClick (event) {
        this.$emit('click', event);
      }
    }
  }
</script>