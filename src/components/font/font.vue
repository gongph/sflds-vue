<template>
  <div class="position_nav_r">
    <span class="fl">字体大小：</span>
    <a href="#" id="small" @click.prevent="handleFont">小</a>
    <a href="#" id="middle" @click.prevent="handleFont" :class="activeClass">中</a>
    <a href="#" id="large" @click.prevent="handleFont">大</a>
  </div>
</template>
<script>
  export default {
    props: {
      // 选择器
      selector: String,
      // 是否开启缓存
      cache: {
        type: Boolean,
        default: false
      },
      // 小号字体
      small: {
        type: String,
        default: '12px'
      },
      // 中号字体
      middle: {
        type: String,
        default: '16px'
      },
      // 大号字体
      large: {
        type: String,
        default: '20px'
      }
    },
    data () {
      return {
        activeClass: 'current',
        CACHE_FONT_SIZE: 'cache_font_size' // 常量，缓存中的 key
      }
    },
    mounted () {
      if (this.cache) {
        this.handleLocalStorage((size) => {
          console.log(size);
          if (!size) return;
          this.setFontSize(this.getSelectorObj(), size.split('_')[1]);
          this.removeActiveClass();
          this.addActiveClass(document.querySelector('#'+size.split('_')[0]));
        });
      } else {
        this.removeLocalStorage();
      }
    },
    methods: {
      /**
       * 处理字体大小
       * @param  {Object} event 当前Node对象
       */
      handleFont (event) {
      	var targetObj = this.getSelectorObj(),
      	    id = event.target.getAttribute('id'),
      	    flag = ''; // 标识字体

        if (!targetObj) return;
        if (id === 'small') {
          this.setFontSize(targetObj, this.small);
          flag = this.small;
        }
        else if (id === 'middle') {
          this.setFontSize(targetObj, this.middle);
          flag = this.middle;
        }
        else {
          this.setFontSize(targetObj, this.large);
          flag = this.large;
        }
        
        this.removeActiveClass();
        this.addActiveClass(event.target);

        if (this.cache) {
          this.setLocalStorage(this.CACHE_FONT_SIZE, id, flag);
        }
      },
      /**
       * 获取选择器元素对象
       * @return 选择器对象，无则返回 null
       */
      getSelectorObj () {
        return document.querySelector(this.selector) || null;
      },
      /**
       * 设置字体大小
       * @param  {Object} target 改变字体大小的目标对象
       * @param  {String} size 字体大小
       */
      setFontSize (target, size) {
        target.style.fontSize = size;
      },
      /**
       * 设置高亮样式
       * @param  {Object} target 当前Node对象
       */
      addActiveClass (target) {
        target.setAttribute('class', this.activeClass);
      },
      /**
       * 移除同步元素高亮样式
       * @param  {Object} event 当前Node对象
       */
      removeActiveClass () {
        var rootNode = document.querySelector('.position_nav_r');
        for (let i = 0, len = rootNode.childNodes.length; i < len; i++) {
          var childNode = rootNode.childNodes[i];
          if (childNode.tagName === 'A' && childNode.hasAttribute('class')) {
            childNode.removeAttribute('class')
          }
        }
      },
      /**
       * 处理本地缓存
       */
      handleLocalStorage (callback) {
        if (typeof window.localStorage === 'undefined') return;

        const sizeVal = window.localStorage.getItem(this.CACHE_FONT_SIZE);
        if (!sizeVal) {
          window.localStorage.setItem(this.CACHE_FONT_SIZE, '')
        } else {
          var sizeArray = sizeVal.split('_');
          this.setLocalStorage(this.CACHE_FONT_SIZEr, sizeArray[0], sizeArray[1]);
        }

        callback(sizeVal);
      },
      /**
       * 设置本地缓存
       * @param  {Object} key 缓存的 key，值等于 this.CACHE_FONT_SIZE
       * @param  {String} id  a标签的 id 属性值
       * @param  {String} size 字体大小
       */
      setLocalStorage (key, id, size) {
        window.localStorage.setItem(key, id + '_' + size);
      },
      /**
       * 删除本地缓存
       */
      removeLocalStorage () {
        window.localStorage.removeItem(this.CACHE_FONT_SIZE);
      }
    }
  }
</script>