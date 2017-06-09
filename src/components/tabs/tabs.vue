<template>
  <div>
    <ul role="tablist" class="nav nav-tabs" id="testul">
      <template v-for="t in headers">
        <li role="presentation" :class="{active:t.active, disabled:t.disabled}">
          <template v-if="t.disabled">
            <a href="#" role="tab">{{t.header}}</a>
          </template>
          <template v-else>
          	<a :href="'#' + t.id" role="tab" data-toggle="tab">{{t.header}}</a>
          </template>
        </li>
      </template>
    </ul>
    <div class="right_content tab-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import TabEvent from '../../utils/tab-event.js';
  export default {
    name: 'tabs',
    props: {
      active: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
      	show: null,
        headers: [],
        tabs: []
      }
    },
    created () {
      this._tabset = true;
    },
    mounted () {
      this.show = this.tabs[this.active];
      this.addTabEvents();
    },
    methods: {
      addTabEvents () {
      	var self = this;
        // 标签显示前触发
        TabEvent.addEventListener('show.bs.tab', function (e) {
      	  self.$emit('show:tab', e);
        });

        // 标签显示后触发
        TabEvent.addEventListener('shown.bs.tab', function (e) {
      	  self.$emit('shown:tab', e);
        });

        // 标签隐藏前触发
        TabEvent.addEventListener('hide.bs.tab', function (e) {
      	  self.$emit('hide:tab', e);
        });

        // 标签隐藏后触发
        TabEvent.addEventListener('hidden.bs.tab', function (e) {
      	  self.$emit('hidden:tab', e);
        });
      }
    }
  }
</script>