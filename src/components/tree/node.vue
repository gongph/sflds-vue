<template>
  <li>
    <span class="sf-tree-arrow" @click="handleExpand" v-if="isFolder">
      <i class="glyphicon" :class="allowClasses"></i>
    </span>
    <span :class="titleClasses" v-text="data.name" @click="handleSelect" :title="data.name"></span>
    <ul v-show="open" v-if="isFolder">
      <tree-node 
        v-for="item in data.children" 
        :key="item" 
        :data="item">
      </tree-node>
    </ul>
  </li>
</template>
<script>
  export default {
    name: 'treeNode',
    props: {
      data: {
        type: Object,
        default () {
          return {};
        }
      }
    },
    data () {
      return {
        open: !!this.data.expand,
      }
    },
    computed: {
      isFolder () {
        return this.data.children && this.data.children.length
      },
      allowClasses () {
        return 'glyphicon-chevron-' + (this.open ? 'down' : 'right');
      },
      titleClasses () {
        return [
          'sf-tree-title',
          {
            'sf-tree-title-selected': this.data.selected
          }
        ]
      }
    },
    methods: {
      handleSelect (e) {
        if (this.data.selected) {
          this.data.selected = false;
        }
        this.dispatch('tree', 'selected', this.data);
      },
      handleExpand () {
        if (this.isFolder) {
          this.open = !this.open;
        }
      },
      dispatch (componentName, eventName, params) {
      	let parent = this.$parent || this.$root;
      	let name = parent.$options.name;
        while(parent && name != componentName){
          parent = parent.$parent;
          if (parent) {
            name = parent.$options.name;
          }
        }
        if (parent) {
          parent.$emit.apply(parent, [eventName].concat([params]));
        }
      }
    }
  }
</script>