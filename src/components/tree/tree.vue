<template>
  <div class="sf-tree">
    <ul>
      <tree-node 
        v-for="item in data" 
        :key="item" 
        :data="item">
      </tree-node>
    </ul>
    <div v-if="!data.length">没有数据！</div>
  </div>
</template>
<script>
  import treeNode from './node.vue';
  export default {
    name: 'tree',
    components: { treeNode },
    props: {
      data: {
        type: Array,
        default () {
          return [];
        }
      }
    },
    mounted () {
      this.$on('selected', data => {
        this.$emit('on-select-change', data);
      })
    }
  }
</script>