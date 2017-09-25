<template>
  <div class="sf-tree">
    <ul>
      <tree-node 
        v-for="item in cloneData" 
        :key="item" 
        :data="item">
      </tree-node>
    </ul>
    <slot name="tree-loading" v-if="loading">
      <div class="tree-loading">{{loadingMsg}}</div>
    </slot>
    <div class="tree-no-data-msg" v-if="!loading && !data.length">{{noDataMsg}}</div>
  </div>
</template>
<script>
  import Assist from '../../utils/assist.js';
  import treeNode from './node.vue';
  export default {
    name: 'tree',
    components: { treeNode },
    props: {
      loading: Boolean,
      loadingMsg: {
        type: String,
        default: '正在加载中...'
      },
      noDataMsg: {
        type: String,
        default: '没有数据！'
      },
      data: {
        type: Array,
        default () {
          return [];
        }
      }
    },
    data () {
      return {
        children: [],
        cloneData: Assist.transformToTreeFormat(Assist.deepCopy(this.data))
      }
    },
    watch: {
      data () {
        this.cloneData = Assist.transformToTreeFormat(Assist.deepCopy(this.data));
      }
    },
    mounted () {
      this.$on('selected', data => {
        if (this.children.length <= 0) {
          this.findComponentsDownward(this, 'treeNode');
        }

        this.children.forEach(node => {
          this.$set(node.data, 'selected', false);
        });
        this.$set(data, 'selected', true);
        this.$emit('on-select-change', Assist.deepCopy(data));
      })
    },
    methods: {
      findComponentsDownward (context, componentName) {
        const childrens = context.$children;
        if (childrens.length) {
          for (let i = 0, len = childrens.length; i < len; i++) {
            const child = childrens[i];
            const name = child.$options.name;
            if (name === componentName) {
              this.children.push(child);
            }
            this.findComponentsDownward(child, componentName);
          }
        }
      }
    }
  }
</script>