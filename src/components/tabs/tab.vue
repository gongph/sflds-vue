<template>
  <div role="tabpanel" class="tab-pane" :class="{active}" :id="id">
    <slot></slot>
  </div>
</template>
<script>
  export default {
  	name: 'tab',
    props: {
      id: String,
      header: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      // 当前实例为激活状态
      active () {
        return this._tabset.show == this;
      },
      // 获取当前实例索引
      index () {
        return this._tabset.tabs.indexOf(this);
      }
    },
    created () {
      let tabset = this;
      while (tabset && tabset._tabset !== true && tabset.$parent) {
        tabset = tabset.$parent;
      }
      if (!tabset._tabset) {
        this._tabset = {};
        console.warn('Warning: "tab" depend on "tabs" to work properly.')
      } else {
        tabset.tabs.push(this);
        tabset.headers.push(this);
        this._tabset = tabset;
      }
    },
    beforeDestroy () {
      console.log('beforeDestroy...');
    }
  }
</script>