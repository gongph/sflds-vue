<script>
  export default {
    props: {
      href: {
        type: String,
        default: '#'
      },
      text: String,
      active: Boolean,
      target: {
        type: String,
        default: '_blank'
      }
    },
    computed: {
      attrsObject: function () {
        var self = this;
        var ao = {
          href: self.href
        };

        if (self.target) ao['target'] = self.target;

        return ao;
      }
    }
  }
</script>