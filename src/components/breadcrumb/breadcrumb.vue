<script>
  export default {
  	name: 'Breadcrumb',
    render: function (c) {
      var self = this;
      return c('div', {
        class: {
          'position_nav_l': true
        }
      }, [self.title, self.$slots.default]);
    },
    props: {
      title: {
        type: String,
        default: '您所在的位置：'
      },
      separator: {
      	type: String,
      	default: '>'
      }
    },
    mounted () {
      this.updateChildren();
    },
    methods: {
      updateChildren () {
        this.$children.forEach((child) => {
          child.separator = this.separator;
        });
      }
    }
  }
</script>
