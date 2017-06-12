<template>
  <li>
    <span class="sf-tree-arrow" @click="handleExpand" v-if="isFolder">
      <i class="glyphicon" :class="allowClasses"></i>
    </span>
    <span class="sf-tree-title" v-html="data.title" @click="handleSelect"></span>
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
  import Assist from '../../utils/assist.js';
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
        open: false,
      }
    },
    computed: {
      isFolder () {
        return this.data.children && this.data.children.length
      },
      allowClasses () {
        return 'glyphicon-chevron-' + (this.open ? 'down' : 'right');
      }
    },
    methods: {
      handleSelect (e) {
        this.dispatch('tree', 'selected', Assist.deepCopy(this.data));
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